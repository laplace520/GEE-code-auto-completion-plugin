(function () {
  "use strict";

  if (window.__GEE_AUTOCOMPLETE_INJECTED__) {
    return;
  }
  window.__GEE_AUTOCOMPLETE_INJECTED__ = true;

  var core = window.__GEE_COMPLETION_CORE__;
  var apiData = window.__GEE_API_DATA__;

  if (!core || !apiData) {
    console.warn("[GEE Autocomplete] Missing completion-core.js or api-data.js.");
    return;
  }

  var apiIndex = core.buildApiIndex(apiData);

  var state = {
    aceEditors: new WeakSet(),
    codeMirrorEditors: new WeakSet(),
    monacoRegistered: false,
    activeAceEditor: null,
    acePopup: null,
    acePopupState: null,
    globalMouseDownBound: false,
    globalResizeBound: false,
    globalScrollBound: false
  };

  function log(message) {
    console.info("[GEE Autocomplete] " + message);
  }

  function getContextAndEntries(source, cursorIndex) {
    var context = core.getCompletionContext(source, cursorIndex, apiIndex);
    if (context) {
      var entries = core.getCompletionEntries(context, apiIndex);
      if (entries.length) {
        return {
          context: context,
          entries: entries
        };
      }
    }

    if (
      typeof core.getIdentifierCompletionContext !== "function" ||
      typeof core.getIdentifierCompletionEntries !== "function"
    ) {
      return null;
    }

    var identifierContext = core.getIdentifierCompletionContext(source, cursorIndex);
    if (!identifierContext) {
      return null;
    }

    var identifierEntries = core.getIdentifierCompletionEntries(
      source,
      cursorIndex,
      apiIndex,
      identifierContext
    );
    if (!identifierEntries.length) {
      return null;
    }

    return {
      context: identifierContext,
      entries: identifierEntries
    };
  }

  function ensureAcePopup() {
    if (state.acePopup) {
      return state.acePopup;
    }

    var popup = document.createElement("div");
    popup.className = "gee-ac-popup gee-ac-hidden";
    popup.setAttribute("role", "listbox");
    popup.setAttribute("aria-label", "GEE autocomplete suggestions");

    var list = document.createElement("div");
    list.className = "gee-ac-list";

    var doc = document.createElement("div");
    doc.className = "gee-ac-doc";

    popup.appendChild(list);
    popup.appendChild(doc);
    document.body.appendChild(popup);

    state.acePopup = popup;
    state.acePopupState = {
      visible: false,
      entries: [],
      selectedIndex: 0,
      receiver: "",
      replacePrefixLength: 0,
      cursorRow: 0,
      cursorColumn: 0,
      listElement: list,
      docElement: doc
    };

    return popup;
  }

  function buildEntryElement(entry, receiver, isSelected) {
    var row = document.createElement("div");
    row.className = "gee-ac-item" + (isSelected ? " is-selected" : "");
    row.setAttribute("role", "option");

    var top = document.createElement("div");
    top.className = "gee-ac-item-top";

    var label = document.createElement("span");
    label.className = "gee-ac-item-label";
    label.textContent = entry.name;

    var owner = document.createElement("span");
    owner.className = "gee-ac-item-owner";
    owner.textContent = receiver;

    top.appendChild(label);
    top.appendChild(owner);

    row.appendChild(top);

    if (entry.signature) {
      var detail = document.createElement("div");
      detail.className = "gee-ac-item-signature";
      detail.textContent = entry.signature;
      row.appendChild(detail);
    }

    return row;
  }

  function updateDocPanel(entry, receiver) {
    var popupState = state.acePopupState;
    if (!popupState || !popupState.docElement) {
      return;
    }

    popupState.docElement.innerHTML = "";

    if (!entry) {
      return;
    }

    var title = document.createElement("div");
    title.className = "gee-ac-doc-title";
    title.textContent = entry.signature || entry.name;

    var desc = document.createElement("div");
    desc.className = "gee-ac-doc-desc";
    desc.textContent = entry.doc || "No description.";

    var owner = document.createElement("div");
    owner.className = "gee-ac-doc-owner";
    owner.textContent = receiver;

    popupState.docElement.appendChild(title);
    popupState.docElement.appendChild(desc);
    popupState.docElement.appendChild(owner);
  }

  function updatePopupPosition(editor) {
    var popup = state.acePopup;
    var popupState = state.acePopupState;
    if (!popup || !popupState || !popupState.visible || !editor || !editor.renderer) {
      return;
    }

    var row = popupState.cursorRow;
    var column = popupState.cursorColumn;
    var screen = editor.renderer.textToScreenCoordinates(row, column);
    var left = screen.pageX - window.scrollX;
    var top = screen.pageY - window.scrollY + editor.renderer.lineHeight;

    popup.style.left = left + "px";
    popup.style.top = top + "px";

    var rect = popup.getBoundingClientRect();
    var maxRight = window.innerWidth - 12;
    var maxBottom = window.innerHeight - 12;

    if (rect.right > maxRight) {
      popup.style.left = Math.max(12, left - (rect.right - maxRight)) + "px";
    }

    if (rect.bottom > maxBottom) {
      popup.style.top = Math.max(12, screen.pageY - window.scrollY - rect.height - 4) + "px";
    }
  }

  function hideAcePopup() {
    var popup = state.acePopup;
    var popupState = state.acePopupState;
    if (!popup || !popupState) {
      return;
    }

    popupState.visible = false;
    popupState.entries = [];
    popupState.selectedIndex = 0;
    popupState.receiver = "";
    popupState.replacePrefixLength = 0;
    popup.classList.add("gee-ac-hidden");
    popup.setAttribute("aria-hidden", "true");
  }

  function renderAcePopup(editor, entries, receiver, selectedIndex) {
    ensureAcePopup();

    var popup = state.acePopup;
    var popupState = state.acePopupState;

    popupState.listElement.innerHTML = "";
    popupState.entries = entries;
    popupState.receiver = receiver;
    popupState.selectedIndex = selectedIndex;
    popupState.visible = true;

    entries.forEach(function (entry, index) {
      var item = buildEntryElement(entry, receiver, index === selectedIndex);
      item.dataset.index = String(index);

      item.addEventListener("mouseenter", function () {
        popupState.selectedIndex = index;
        updateSelectionVisual();
      });

      item.addEventListener("mousedown", function (event) {
        event.preventDefault();
        event.stopPropagation();
        popupState.selectedIndex = index;
        applySelectedAceEntry(editor);
      });

      popupState.listElement.appendChild(item);
    });

    popup.classList.remove("gee-ac-hidden");
    popup.setAttribute("aria-hidden", "false");

    updateSelectionVisual();
  }

  function updateSelectionVisual() {
    var popupState = state.acePopupState;
    if (!popupState || !popupState.visible) {
      return;
    }

    var children = popupState.listElement.children;
    for (var i = 0; i < children.length; i += 1) {
      if (i === popupState.selectedIndex) {
        children[i].classList.add("is-selected");
        children[i].scrollIntoView({ block: "nearest" });
      } else {
        children[i].classList.remove("is-selected");
      }
    }

    var selected = popupState.entries[popupState.selectedIndex] || null;
    updateDocPanel(selected, popupState.receiver);
  }

  function applyEntryToAce(editor, entry, prefixLength) {
    if (!editor || !entry) {
      return;
    }

    var cursor = editor.getCursorPosition();
    var row = cursor.row;
    var endColumn = cursor.column;
    var startColumn = Math.max(0, endColumn - prefixLength);

    var insertTemplate = entry.insertText || entry.name;
    var plain = core.snippetToPlainText(insertTemplate);
    var doc = editor.session.getDocument();

    if (startColumn !== endColumn) {
      doc.removeInLine(row, startColumn, endColumn);
    }

    doc.insert({ row: row, column: startColumn }, plain.text);
    editor.moveCursorTo(row, startColumn + plain.cursorOffset);
    editor.focus();
  }

  function applySelectedAceEntry(editor) {
    var popupState = state.acePopupState;
    if (!popupState || !popupState.visible || !popupState.entries.length) {
      return;
    }

    var selected = popupState.entries[popupState.selectedIndex];
    applyEntryToAce(editor, selected, popupState.replacePrefixLength);
    hideAcePopup();
  }

  function triggerAcePopup(editor) {
    if (!editor) {
      hideAcePopup();
      return;
    }

    ensureAcePopup();

    var text = editor.getValue();
    var cursor = editor.getCursorPosition();
    var cursorIndex = editor.session.doc.positionToIndex(cursor, 0);
    var result = getContextAndEntries(text, cursorIndex);

    if (!result) {
      hideAcePopup();
      return;
    }

    state.activeAceEditor = editor;

    state.acePopupState.replacePrefixLength = result.context.prefix.length;
    state.acePopupState.cursorRow = cursor.row;
    state.acePopupState.cursorColumn = cursor.column;

    renderAcePopup(editor, result.entries, result.context.receiver, 0);
    updatePopupPosition(editor);
  }

  function refreshAcePopupIfVisible(editor) {
    var popupState = state.acePopupState;
    if (!popupState || !popupState.visible) {
      return;
    }
    triggerAcePopup(editor);
  }

  function moveSelection(delta) {
    var popupState = state.acePopupState;
    if (!popupState || !popupState.visible || !popupState.entries.length) {
      return;
    }

    var max = popupState.entries.length - 1;
    var next = popupState.selectedIndex + delta;

    if (next < 0) {
      next = max;
    } else if (next > max) {
      next = 0;
    }

    popupState.selectedIndex = next;
    updateSelectionVisual();
  }

  function bindGlobalPopupGuards() {
    if (!state.globalMouseDownBound) {
      state.globalMouseDownBound = true;
      document.addEventListener(
        "mousedown",
        function (event) {
          var popup = state.acePopup;
          if (!popup || popup.classList.contains("gee-ac-hidden")) {
            return;
          }

          if (popup.contains(event.target)) {
            return;
          }

          hideAcePopup();
        },
        true
      );
    }

    if (!state.globalResizeBound) {
      state.globalResizeBound = true;
      window.addEventListener("resize", function () {
        updatePopupPosition(state.activeAceEditor);
      });
    }

    if (!state.globalScrollBound) {
      state.globalScrollBound = true;
      window.addEventListener(
        "scroll",
        function () {
          updatePopupPosition(state.activeAceEditor);
        },
        true
      );
    }
  }

  function attachAceKeybindings(editor) {
    if (!editor || editor.__geeAutocompleteCommandBound) {
      return;
    }

    editor.__geeAutocompleteCommandBound = true;

    editor.commands.addCommand({
      name: "geeAutocompleteManual",
      bindKey: {
        win: "Ctrl-Space",
        mac: "Ctrl-Space|Command-Space"
      },
      exec: function (instance) {
        triggerAcePopup(instance);
      },
      readOnly: true
    });

    var container = editor.container;
    if (container && !container.__geeAutocompleteKeydownBound) {
      container.__geeAutocompleteKeydownBound = true;
      container.addEventListener(
        "keydown",
        function (event) {
          var popupState = state.acePopupState;
          if (!popupState || !popupState.visible || state.activeAceEditor !== editor) {
            return;
          }

          if (event.key === "ArrowDown") {
            event.preventDefault();
            moveSelection(1);
            return;
          }

          if (event.key === "ArrowUp") {
            event.preventDefault();
            moveSelection(-1);
            return;
          }

          if (event.key === "Enter" || event.key === "Tab") {
            event.preventDefault();
            applySelectedAceEntry(editor);
            return;
          }

          if (event.key === "Escape") {
            event.preventDefault();
            hideAcePopup();
          }
        },
        true
      );
    }
  }

  function attachAceChangeHooks(editor) {
    if (!editor || editor.__geeAutocompleteChangeBound) {
      return;
    }

    editor.__geeAutocompleteChangeBound = true;

    editor.commands.on("afterExec", function (event) {
      if (!event || !event.command) {
        return;
      }

      var commandName = event.command.name;

      if (commandName === "insertstring") {
        if (event.args === ".") {
          triggerAcePopup(editor);
          return;
        }

        if (typeof event.args === "string" && /^[A-Za-z_$]$/.test(event.args)) {
          triggerAcePopup(editor);
          return;
        }

        if (state.acePopupState && state.acePopupState.visible) {
          refreshAcePopupIfVisible(editor);
        }
        return;
      }

      if (
        commandName === "backspace" ||
        commandName === "del" ||
        commandName === "removewordleft" ||
        commandName === "removewordright"
      ) {
        refreshAcePopupIfVisible(editor);
        return;
      }

      if (
        commandName === "insertnewline" ||
        commandName === "gotoline" ||
        commandName === "selectall" ||
        commandName === "find"
      ) {
        hideAcePopup();
      }
    });

    editor.selection.on("changeCursor", function () {
      if (!state.acePopupState || !state.acePopupState.visible || state.activeAceEditor !== editor) {
        return;
      }
      refreshAcePopupIfVisible(editor);
    });

    editor.session.on("changeScrollTop", function () {
      if (state.activeAceEditor === editor) {
        updatePopupPosition(editor);
      }
    });

    editor.session.on("changeScrollLeft", function () {
      if (state.activeAceEditor === editor) {
        updatePopupPosition(editor);
      }
    });

    editor.on("blur", function () {
      window.setTimeout(function () {
        if (document.activeElement && state.acePopup && state.acePopup.contains(document.activeElement)) {
          return;
        }
        hideAcePopup();
      }, 50);
    });
  }

  function attachAceEditor(editor) {
    if (!editor || state.aceEditors.has(editor)) {
      return;
    }

    state.aceEditors.add(editor);

    bindGlobalPopupGuards();
    ensureAcePopup();
    attachAceKeybindings(editor);
    attachAceChangeHooks(editor);

    log("Attached to Ace editor with custom popup completer.");
  }

  function findAceEditors() {
    if (!window.ace || !window.ace.edit) {
      return [];
    }

    var editors = [];
    var wrappers = document.querySelectorAll(".ace_editor");

    wrappers.forEach(function (wrapper) {
      try {
        var editor = window.ace.edit(wrapper);
        if (editor && editors.indexOf(editor) === -1) {
          editors.push(editor);
        }
      } catch (error) {
        // Ignore wrappers that are not attached to an editor instance.
      }
    });

    return editors;
  }

  function registerMonacoProvider() {
    if (
      state.monacoRegistered ||
      !window.monaco ||
      !window.monaco.languages ||
      !window.monaco.editor ||
      !window.monaco.Range
    ) {
      return;
    }

    var completionKind = window.monaco.languages.CompletionItemKind;
    var insertRules = window.monaco.languages.CompletionItemInsertTextRule;

    ["javascript", "typescript"].forEach(function (languageId) {
      window.monaco.languages.registerCompletionItemProvider(languageId, {
        triggerCharacters: ["."],
        provideCompletionItems: function (model, position) {
          var text = model.getValue();
          var cursorIndex = model.getOffsetAt(position);
          var result = getContextAndEntries(text, cursorIndex);

          if (!result) {
            return { suggestions: [] };
          }

          var startColumn = Math.max(1, position.column - result.context.prefix.length);
          var range = new window.monaco.Range(
            position.lineNumber,
            startColumn,
            position.lineNumber,
            position.column
          );

          var suggestions = result.entries.map(function (entry, index) {
            var insertText = entry.insertText || entry.name;
            var isSnippet = /\$\d|\$\{\d+:[^}]+\}/.test(insertText);
            var kind = completionKind.Method;
            if (entry.kind === "namespace" || entry.kind === "property") {
              kind = completionKind.Property;
            }

            return {
              label: entry.name,
              kind: kind,
              detail: entry.signature || result.context.receiver,
              documentation: entry.doc || "",
              insertText: insertText,
              insertTextRules: isSnippet ? insertRules.InsertAsSnippet : undefined,
              range: range,
              sortText: String(index).padStart(4, "0")
            };
          });

          return { suggestions: suggestions };
        }
      });
    });

    state.monacoRegistered = true;
    log("Monaco completion provider registered.");
  }

  function renderCodeMirrorHintElement(element, entry) {
    element.style.display = "flex";
    element.style.flexDirection = "column";
    element.style.gap = "2px";

    var nameLine = document.createElement("div");
    nameLine.textContent = entry.name;
    nameLine.style.fontWeight = "600";

    var detailLine = document.createElement("div");
    detailLine.textContent = entry.signature || "";
    detailLine.style.fontSize = "11px";
    detailLine.style.opacity = "0.8";

    element.appendChild(nameLine);
    if (entry.signature) {
      element.appendChild(detailLine);
    }
  }

  function buildCodeMirrorHints(cm) {
    var cursor = cm.getCursor();
    var source = cm.getValue();
    var cursorIndex = cm.indexFromPos(cursor);
    var result = getContextAndEntries(source, cursorIndex);

    if (!result) {
      return null;
    }

    var from = {
      line: cursor.line,
      ch: cursor.ch - result.context.prefix.length
    };
    var to = {
      line: cursor.line,
      ch: cursor.ch
    };

    var list = result.entries.map(function (entry) {
      return {
        text: entry.name,
        displayText: entry.name,
        render: function (element) {
          renderCodeMirrorHintElement(element, entry);
        },
        hint: function (cmInstance) {
          var snippetText = entry.insertText || entry.name;
          var plain = core.snippetToPlainText(snippetText);
          cmInstance.replaceRange(plain.text, from, to, "complete");

          var start = cmInstance.indexFromPos(from);
          cmInstance.setCursor(cmInstance.posFromIndex(start + plain.cursorOffset));
        }
      };
    });

    return {
      list: list,
      from: from,
      to: to
    };
  }

  function showCodeMirrorHint(cm) {
    if (!cm || typeof cm.showHint !== "function") {
      return;
    }

    cm.showHint({
      hint: buildCodeMirrorHints,
      completeSingle: false,
      alignWithWord: false
    });
  }

  function attachCodeMirrorEditor(cm) {
    if (!cm || state.codeMirrorEditors.has(cm)) {
      return;
    }

    state.codeMirrorEditors.add(cm);

    cm.addKeyMap({
      "Ctrl-Space": function (instance) {
        showCodeMirrorHint(instance);
      }
    });

    cm.on("inputRead", function (instance, change) {
      if (!change || !Array.isArray(change.text)) {
        return;
      }

      var inserted = change.text.join("");
      if (inserted === "." || /^[A-Za-z_$]$/.test(inserted)) {
        showCodeMirrorHint(instance);
      }
    });

    log("Attached to CodeMirror editor.");
  }

  function findCodeMirrorEditors() {
    if (!window.CodeMirror) {
      return [];
    }

    var editors = [];
    var wrappers = document.querySelectorAll(".CodeMirror");
    wrappers.forEach(function (wrapper) {
      if (wrapper.CodeMirror && editors.indexOf(wrapper.CodeMirror) === -1) {
        editors.push(wrapper.CodeMirror);
      }
    });

    return editors;
  }

  function scan() {
    findAceEditors().forEach(function (editor) {
      attachAceEditor(editor);
    });

    registerMonacoProvider();

    findCodeMirrorEditors().forEach(function (editor) {
      attachCodeMirrorEditor(editor);
    });
  }

  function detectEngines() {
    var engines = [];
    if (window.ace) {
      engines.push("Ace");
    }
    if (window.monaco) {
      engines.push("Monaco");
    }
    if (window.CodeMirror) {
      engines.push("CodeMirror");
    }
    return engines;
  }

  log("Engine probe: " + (detectEngines().join(", ") || "none yet"));
  scan();

  var observer = new MutationObserver(function () {
    scan();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  window.setInterval(scan, 1500);
})();