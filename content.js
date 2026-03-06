/**
 * content.js
 * GEE Code Auto-Completion Plugin – content script.
 *
 * Hooks into the CodeMirror instance used by the Google Earth Engine code
 * editor (code.earthengine.google.com) and provides:
 *   1. Auto-completion for the ee.* JavaScript API.
 *   2. Auto-completion for custom variables defined in the current script.
 *
 * Keyboard shortcuts inside the dropdown:
 *   ArrowDown / ArrowUp  – navigate suggestions
 *   Enter / Tab          – apply selected suggestion
 *   Escape               – close dropdown
 */

(function () {
  'use strict';

  /* -------------------------------------------------------------------------
   * State
   * ---------------------------------------------------------------------- */
  let dropdownEl = null;       // the <ul> autocomplete element
  let selectedIndex = -1;
  let currentSuggestions = []; // array of { label, insert, prefix }
  let cmInstance = null;       // CodeMirror instance

  /* -------------------------------------------------------------------------
   * Bootstrap: wait for CodeMirror to be available in the page
   * ---------------------------------------------------------------------- */
  function waitForCodeMirror() {
    const cmElement = document.querySelector('.CodeMirror');
    if (cmElement && cmElement.CodeMirror) {
      cmInstance = cmElement.CodeMirror;
      attachListeners(cmInstance);
    } else {
      setTimeout(waitForCodeMirror, 500);
    }
  }

  /* Re-attach if the editor element is recreated (e.g. on navigation). */
  const domObserver = new MutationObserver(function () {
    const cmElement = document.querySelector('.CodeMirror');
    if (cmElement && cmElement.CodeMirror && cmElement.CodeMirror !== cmInstance) {
      cmInstance = cmElement.CodeMirror;
      attachListeners(cmInstance);
    }
  });
  domObserver.observe(document.documentElement, { childList: true, subtree: true });

  /* -------------------------------------------------------------------------
   * Attach CodeMirror event listeners
   * ---------------------------------------------------------------------- */
  function attachListeners(cm) {
    cm.on('keyup', function (instance, event) {
      const ignoredKeys = [
        'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
        'Enter', 'Escape', 'Tab', 'Shift', 'Control', 'Alt', 'Meta',
        'CapsLock', 'PageUp', 'PageDown', 'Home', 'End',
        'F1', 'F2', 'F3', 'F4', 'F5', 'F6',
        'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
      ];
      if (ignoredKeys.includes(event.key)) return;
      triggerAutocomplete(instance);
    });

    cm.on('keydown', function (instance, event) {
      if (!isDropdownVisible()) return;

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        moveSelection(1);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        moveSelection(-1);
      } else if (event.key === 'Enter' || event.key === 'Tab') {
        if (selectedIndex >= 0 && selectedIndex < currentSuggestions.length) {
          event.preventDefault();
          applyCompletion(instance);
        }
      } else if (event.key === 'Escape') {
        event.preventDefault();
        hideDropdown();
      }
    });

    /* Close when the cursor moves without typing (mouse click, etc.). */
    cm.on('cursorActivity', function () {
      hideDropdown();
    });
  }

  /* -------------------------------------------------------------------------
   * Core: build and display suggestions for the current cursor position
   * ---------------------------------------------------------------------- */
  function triggerAutocomplete(cm) {
    const cursor = cm.getCursor();
    const lineText = cm.getLine(cursor.line);
    const beforeCursor = lineText.substring(0, cursor.ch);

    const suggestions = buildSuggestions(beforeCursor, cm);

    if (suggestions.length === 0) {
      hideDropdown();
      return;
    }

    currentSuggestions = suggestions;
    selectedIndex = 0;
    renderDropdown(cm, cursor);
  }

  /* -------------------------------------------------------------------------
   * Suggestion builders
   * ---------------------------------------------------------------------- */

  /**
   * Returns an array of suggestion objects { label, insert, prefix }.
   *
   * Priority:
   *   1. "ee."  prefix  → top-level EE API
   *   2. "obj." prefix  → method completions based on inferred type
   *   3. bare word (≥2 chars) → custom variables + globals
   */
  function buildSuggestions(text, cm) {
    /* 1. ee.Xxx */
    const eeDotMatch = text.match(/\bee\.([a-zA-Z0-9_]*)$/);
    if (eeDotMatch) {
      const typed = eeDotMatch[1];
      const typedLower = typed.toLowerCase();
      return EE_TOP_LEVEL
        .filter(s => s.toLowerCase().startsWith(typedLower))
        .map(s => ({ label: s, insert: s, prefix: typed }));
    }

    /* 2. someObject.method */
    const methodMatch = text.match(/([a-zA-Z_$][a-zA-Z0-9_$]*)\.([a-zA-Z0-9_]*)$/);
    if (methodMatch) {
      const objName = methodMatch[1];
      const typed = methodMatch[2];
      const typedLower = typed.toLowerCase();
      const methods = inferMethods(objName, cm);
      if (methods.length > 0) {
        return methods
          .filter(m => m.toLowerCase().startsWith(typedLower))
          .map(m => ({ label: m, insert: m, prefix: typed }));
      }
    }

    /* 3. Custom variable / global completion */
    const wordMatch = text.match(/([a-zA-Z_$][a-zA-Z0-9_$]*)$/);
    if (wordMatch && wordMatch[1].length >= 2) {
      const typed = wordMatch[1];
      const customVars = extractCustomVariables(cm);
      const allTokens = [...new Set([...EE_GLOBALS, ...customVars])];
      return allTokens
        .filter(v => v.startsWith(typed) && v !== typed)
        .map(v => ({ label: v, insert: v, prefix: typed }));
    }

    return [];
  }

  /**
   * Extracts variable/function names declared in the current editor content.
   */
  function extractCustomVariables(cm) {
    const code = cm.getValue();
    const names = [];
    const patterns = [
      /(?:var|let|const)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g,
      /function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g,
    ];
    for (const re of patterns) {
      let m;
      while ((m = re.exec(code)) !== null) {
        names.push(m[1]);
      }
    }
    return [...new Set(names)];
  }

  /**
   * Infers an appropriate method list for a variable name.
   * Strategy:
   *   1. Known globals (Map, Export, Chart).
   *   2. Look for "var/let/const <name> = ee.Xxx" in the source.
   *   3. Heuristic match on the variable name itself.
   */
  function inferMethods(name, cm) {
    /* 1. Known globals */
    if (EE_KNOWN_GLOBALS[name]) {
      return EE_KNOWN_GLOBALS[name];
    }

    const code = cm.getValue();

    /* 2. Constructor pattern in source code */
    const assignRe = new RegExp(
      '(?:var|let|const)\\s+' + escapeRegExp(name) + '\\s*=[^;\\n]*'
    );
    const assignMatch = code.match(assignRe);
    if (assignMatch) {
      for (const { pattern, methods } of EE_CONSTRUCTOR_METHODS) {
        if (pattern.test(assignMatch[0])) {
          return methods;
        }
      }
    }

    /* 3. Variable-name heuristics */
    for (const { pattern, methods } of EE_TYPE_PATTERNS) {
      if (pattern.test(name)) {
        return methods;
      }
    }

    return [];
  }

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  /* -------------------------------------------------------------------------
   * Dropdown rendering
   * ---------------------------------------------------------------------- */
  function renderDropdown(cm, cursor) {
    ensureDropdownExists();

    const coords = cm.charCoords(cursor, 'page');
    dropdownEl.style.left = coords.left + 'px';
    dropdownEl.style.top = coords.bottom + 2 + 'px';
    dropdownEl.innerHTML = '';

    const maxItems = 12;
    const visible = currentSuggestions.slice(0, maxItems);

    visible.forEach(function (suggestion, index) {
      const item = document.createElement('li');
      item.className = 'gee-ac-item' + (index === selectedIndex ? ' gee-ac-selected' : '');
      item.textContent = suggestion.label;
      item.dataset.index = String(index);

      item.addEventListener('mousedown', function (e) {
        /* Use mousedown (before blur) so the editor keeps focus. */
        e.preventDefault();
        selectedIndex = index;
        applyCompletion(cmInstance);
      });

      item.addEventListener('mouseover', function () {
        selectedIndex = index;
        updateSelectionHighlight();
      });

      dropdownEl.appendChild(item);
    });

    dropdownEl.style.display = 'block';
  }

  function ensureDropdownExists() {
    if (dropdownEl) return;
    dropdownEl = document.createElement('ul');
    dropdownEl.id = 'gee-autocomplete-dropdown';
    document.body.appendChild(dropdownEl);

    /* Close when clicking outside the dropdown. */
    document.addEventListener('mousedown', function (e) {
      if (dropdownEl && !dropdownEl.contains(e.target)) {
        hideDropdown();
      }
    });
  }

  function isDropdownVisible() {
    return dropdownEl !== null && dropdownEl.style.display === 'block';
  }

  function hideDropdown() {
    if (dropdownEl) {
      dropdownEl.style.display = 'none';
    }
    currentSuggestions = [];
    selectedIndex = -1;
  }

  /* -------------------------------------------------------------------------
   * Selection navigation
   * ---------------------------------------------------------------------- */
  function moveSelection(delta) {
    const total = Math.min(currentSuggestions.length, 12);
    if (total === 0) return;
    selectedIndex = (selectedIndex + delta + total) % total;
    updateSelectionHighlight();
  }

  function updateSelectionHighlight() {
    if (!dropdownEl) return;
    const items = dropdownEl.querySelectorAll('.gee-ac-item');
    items.forEach(function (item, idx) {
      if (idx === selectedIndex) {
        item.classList.add('gee-ac-selected');
        item.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      } else {
        item.classList.remove('gee-ac-selected');
      }
    });
  }

  /* -------------------------------------------------------------------------
   * Apply the selected completion
   * ---------------------------------------------------------------------- */
  function applyCompletion(cm) {
    if (selectedIndex < 0 || selectedIndex >= currentSuggestions.length) return;

    const suggestion = currentSuggestions[selectedIndex];
    const cursor = cm.getCursor();
    const from = { line: cursor.line, ch: cursor.ch - suggestion.prefix.length };

    cm.replaceRange(suggestion.insert, from, cursor);
    hideDropdown();
    cm.focus();
  }

  /* -------------------------------------------------------------------------
   * Start
   * ---------------------------------------------------------------------- */
  waitForCodeMirror();
})();
