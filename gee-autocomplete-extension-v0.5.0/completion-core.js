(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }
  
  root.__GEE_COMPLETION_CORE__ = factory(); 
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  
  var MEMBER_ACCESS_PATTERN = /([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)\.([A-Za-z_$][\w$]*)?$/;
  
  var TYPE_CONSTRUCTORS = [
    "ee.Image",
    "ee.ImageCollection", // 修复1：加入白名单
    "ee.FeatureCollection",
    "ui.Map",
    "ui.Panel",
    "ui.Label",
    "ui.Button",
    "ui.Select",
    "ui.Textbox",
    "ui.Checkbox",
    "ui.Slider"
  ];
  
  var SORTED_TYPE_CONSTRUCTORS = TYPE_CONSTRUCTORS.slice().sort(function (a, b) {
    return b.length - a.length;
  });
  
  var SAME_TYPE_METHOD_RECEIVERS = {
    "ee.Image": true,
    "ee.ImageCollection": true, // 修复1：同类型返回支持
    "ee.FeatureCollection": true
  };
  
  var METHOD_RETURN_OVERRIDES = {
    "ee.Image": {
      geometry: "ee.Geometry",
      get: null,
      reduceRegion: "ee.Dictionary",
      reduceRegions: "ee.FeatureCollection",
      sample: "ee.FeatureCollection",
      sampleRegions: "ee.FeatureCollection"
    },
    // 修复1：明确 ImageCollection 链式调用后可能改变的类型
    "ee.ImageCollection": {
      first: "ee.Image",
      mean: "ee.Image",
      median: "ee.Image",
      min: "ee.Image",
      max: "ee.Image",
      sum: "ee.Image",
      mosaic: "ee.Image",
      reduce: "ee.Image",
      geometry: "ee.Geometry"
    },
    "ee.FeatureCollection": {
      aggregate_array: null,
      aggregate_count: null,
      aggregate_count_distinct: null,
      aggregate_first: null,
      aggregate_histogram: null,
      aggregate_max: null,
      aggregate_mean: null,
      aggregate_min: null,
      aggregate_sample_sd: null,
      aggregate_sample_var: null,
      aggregate_stats: null,
      aggregate_sum: null,
      bounds: "ee.Geometry",
      draw: "ee.Image",
      first: "ee.Feature",
      geometry: "ee.Geometry",
      iterate: null,
      reduceColumns: "ee.Dictionary",
      size: null,
      style: "ee.Image",
      toList: "ee.List"
    }
  };
  
  var RECEIVER_SHORTCUT_PREFIXES = ["ui", "ee"];
  
  var ROOT_IDENTIFIER_ENTRIES = [
    {
      receiver: "global",
      name: "ee",
      signature: "ee namespace",
      insertText: "ee",
      doc: "Earth Engine root namespace.",
      kind: "namespace",
      returnType: null
    },
    {
      receiver: "global",
      name: "Map",
      signature: "Map namespace",
      insertText: "Map",
      doc: "Map helper namespace.",
      kind: "namespace",
      returnType: null
    },
    {
      receiver: "global",
      name: "Export",
      signature: "Export namespace",
      insertText: "Export",
      doc: "Export task namespace.",
      kind: "namespace",
      returnType: null
    },
    {
      receiver: "global",
      name: "ui",
      signature: "ui namespace",
      insertText: "ui",
      doc: "UI namespace.",
      kind: "namespace",
      returnType: null
    }
  ];
  
  function buildApiIndex(apiEntries) {
    var index = Object.create(null);
    if (!Array.isArray(apiEntries)) {
      return index;
    }
    apiEntries.forEach(function (entry) {
      if (!entry || !entry.receiver || !entry.name) {
        return;
      }
      if (!index[entry.receiver]) {
        index[entry.receiver] = [];
      }
      index[entry.receiver].push(entry);
    });
    Object.keys(index).forEach(function (receiver) {
      index[receiver].sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    });
    return index;
  }
  
  function escapeRegex(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  
  function buildConstructorRegex() {
    var union = TYPE_CONSTRUCTORS.map(escapeRegex).join("|");
    return new RegExp(
      "\\b(?:var|let|const)\\s+([A-Za-z_$][\\w$]*)\\s*=\\s*(" + union + ")\\s*\\(",
      "g"
    );
  }
  
  function buildDirectAssignRegex() {
    var union = TYPE_CONSTRUCTORS.map(escapeRegex).join("|");
    return new RegExp(
      "(?:^|[;\\n])\\s*([A-Za-z_$][\\w$]*)\\s*=\\s*(" + union + ")\\s*\\(",
      "g"
    );
  }
  
  function isIdentifierStart(value) {
    return /[A-Za-z_$]/.test(value);
  }
  
  function isIdentifierPart(value) {
    return /[A-Za-z0-9_$]/.test(value);
  }
  
  function skipWhitespace(source, index) {
    var cursor = index;
    while (cursor < source.length && /\s/.test(source.charAt(cursor))) {
      cursor += 1;
    }
    return cursor;
  }
  
  function readIdentifier(source, index) {
    var cursor = index;
    if (cursor >= source.length || !isIdentifierStart(source.charAt(cursor))) {
      return null;
    }
    cursor += 1;
    while (cursor < source.length && isIdentifierPart(source.charAt(cursor))) {
      cursor += 1;
    }
    return {
      value: source.slice(index, cursor),
      next: cursor
    };
  }
  
  function readQualifiedIdentifier(source, index, options) {
    var opts = options || {};
    var stopBeforeCall = Boolean(opts.stopBeforeCall);
    var first = readIdentifier(source, index);
    if (!first) {
      return null;
    }
    var cursor = first.next;
    while (cursor < source.length && source.charAt(cursor) === ".") {
      var nextIdentifier = readIdentifier(source, cursor + 1);
      if (!nextIdentifier) {
        break;
      }
  
      if (stopBeforeCall) {
        var afterIdentifier = skipWhitespace(source, nextIdentifier.next);
        if (source.charAt(afterIdentifier) === "(") {
          break;
        }
      }
  
      cursor = nextIdentifier.next;
    }
    return {
      value: source.slice(index, cursor),
      next: cursor
    };
  }
  
  function isEscaped(source, quoteIndex) {
    var slashCount = 0;
    var cursor = quoteIndex - 1;
    while (cursor >= 0 && source.charAt(cursor) === "\\") {
      slashCount += 1;
      cursor -= 1;
    }
    return slashCount % 2 === 1;
  }
  
  function readBalanced(source, start, openChar, closeChar) {
    if (source.charAt(start) !== openChar) {
      return -1;
    }
    var depth = 0;
    var inSingleQuote = false;
    var inDoubleQuote = false;
    var inTemplateQuote = false;
    for (var i = start; i < source.length; i += 1) {
      var ch = source.charAt(i);
      var next = source.charAt(i + 1);
  
      if (inSingleQuote) {
        if (ch === "'" && !isEscaped(source, i)) {
          inSingleQuote = false;
        }
        continue;
      }
  
      if (inDoubleQuote) {
        if (ch === '"' && !isEscaped(source, i)) {
          inDoubleQuote = false;
        }
        continue;
      }
  
      if (inTemplateQuote) {
        if (ch === "`" && !isEscaped(source, i)) {
          inTemplateQuote = false;
        }
        continue;
      }
  
      if (ch === "'" && !isEscaped(source, i)) {
        inSingleQuote = true;
        continue;
      }
  
      if (ch === '"' && !isEscaped(source, i)) {
        inDoubleQuote = true;
        continue;
      }
  
      if (ch === "`" && !isEscaped(source, i)) {
        inTemplateQuote = true;
        continue;
      }
  
      if (ch === "/" && next === "/") {
        while (i < source.length && source.charAt(i) !== "\n") {
          i += 1;
        }
        continue;
      }
  
      if (ch === "/" && next === "*") {
        i += 2;
        while (i < source.length && !(source.charAt(i) === "*" && source.charAt(i + 1) === "/")) {
          i += 1;
        }
        i += 1;
        continue;
      }
  
      if (ch === openChar) {
        depth += 1;
        continue;
      }
  
      if (ch === closeChar) {
        depth -= 1;
        if (depth === 0) {
          return i;
        }
      }
    }
    return -1;
  }
  
  function isCursorInCommentOrString(source) {
    if (typeof source !== "string" || source.length === 0) {
      return false;
    }
    var inSingleQuote = false;
    var inDoubleQuote = false;
    var inTemplateQuote = false;
    var inLineComment = false;
    var inBlockComment = false;
    for (var i = 0; i < source.length; i += 1) {
      var ch = source.charAt(i);
      var next = source.charAt(i + 1);
  
      if (inLineComment) {
        if (ch === "\n") {
          inLineComment = false;
        }
        continue;
      }
  
      if (inBlockComment) {
        if (ch === "*" && next === "/") {
          inBlockComment = false;
          i += 1;
        }
        continue;
      }
  
      if (inSingleQuote) {
        if (ch === "'" && !isEscaped(source, i)) {
          inSingleQuote = false;
        }
        continue;
      }
  
      if (inDoubleQuote) {
        if (ch === '"' && !isEscaped(source, i)) {
          inDoubleQuote = false;
        }
        continue;
      }
  
      if (inTemplateQuote) {
        if (ch === "`" && !isEscaped(source, i)) {
          inTemplateQuote = false;
        }
        continue;
      }
  
      if (ch === "/" && next === "/") {
        inLineComment = true;
        i += 1;
        continue;
      }
  
      if (ch === "/" && next === "*") {
        inBlockComment = true;
        i += 1;
        continue;
      }
  
      if (ch === "'") {
        inSingleQuote = true;
        continue;
      }
  
      if (ch === '"') {
        inDoubleQuote = true;
        continue;
      }
  
      if (ch === "`") {
        inTemplateQuote = true;
      }
    }
    return inSingleQuote || inDoubleQuote || inTemplateQuote || inLineComment || inBlockComment;
  }
  
  function isMemberAccessBoundary(ch) {
    return /[\s;,=+\-*/%&|^!<>?:]/.test(ch);
  }
  
  function extractMemberAccess(left) {
    if (typeof left !== "string" || left.length === 0) {
      return null;
    }
    var cursor = left.length - 1;
    while (cursor >= 0 && /\s/.test(left.charAt(cursor))) {
      cursor -= 1;
    }
    if (cursor < 0) {
      return null;
    }
    var prefixEnd = cursor;
    while (cursor >= 0 && isIdentifierPart(left.charAt(cursor))) {
      cursor -= 1;
    }
    var prefix = left.slice(cursor + 1, prefixEnd + 1);
    if (cursor < 0 || left.charAt(cursor) !== ".") {
      return null;
    }
    var dotIndex = cursor;
    cursor -= 1;
    var parenDepth = 0;
    var bracketDepth = 0;
    var braceDepth = 0;
    while (cursor >= 0) {
      var ch = left.charAt(cursor);
  
      if (ch === ")") {
        parenDepth += 1;
        cursor -= 1;
        continue;
      }
  
      if (ch === "(") {
        if (parenDepth > 0) {
          parenDepth -= 1;
          cursor -= 1;
          continue;
        }
      }
  
      if (ch === "]") {
        bracketDepth += 1;
        cursor -= 1;
        continue;
      }
  
      if (ch === "[") {
        if (bracketDepth > 0) {
          bracketDepth -= 1;
          cursor -= 1;
          continue;
        }
      }
  
      if (ch === "}") {
        braceDepth += 1;
        cursor -= 1;
        continue;
      }
  
      if (ch === "{") {
        if (braceDepth > 0) {
          braceDepth -= 1;
          cursor -= 1;
          continue;
        }
      }
  
      if (parenDepth === 0 && bracketDepth === 0 && braceDepth === 0 && isMemberAccessBoundary(ch)) {
        // 修复2：容忍紧贴 '.' 的空白换行
        if (/\s/.test(ch)) {
          var peek = cursor - 1;
          while (peek >= 0 && /\s/.test(left.charAt(peek))) {
            peek -= 1;
          }
          var prevChar = peek >= 0 ? left.charAt(peek) : '';
          
          var forwardPeek = cursor + 1;
          while (forwardPeek < left.length && /\s/.test(left.charAt(forwardPeek))) {
            forwardPeek += 1;
          }
          var nextChar = forwardPeek < left.length ? left.charAt(forwardPeek) : '';
  
          if (prevChar !== '.' && nextChar !== '.') {
            break;
          }
        } else {
          break;
        }
      }
  
      cursor -= 1;
    }
    var expression = left.slice(cursor + 1, dotIndex).trim();
    if (!expression) {
      return null;
    }
    return {
      expression: expression,
      prefix: prefix
    };
  }
  
  function getMethodEntry(receiver, methodName, apiIndex) {
    if (!apiIndex || !apiIndex[receiver]) {
      return null;
    }
    var entries = apiIndex[receiver];
    for (var i = 0; i < entries.length; i += 1) {
      if (entries[i].name === methodName) {
        return entries[i];
      }
    }
    return null;
  }
  
  function inferMethodReturnType(receiver, methodName, apiIndex) {
    if (!receiver || !methodName) {
      return null;
    }
    var methodEntry = getMethodEntry(receiver, methodName, apiIndex);
    if (!methodEntry) {
      return null;
    }
    if (typeof methodEntry.returnType === "string" && methodEntry.returnType.length > 0) {
      return methodEntry.returnType;
    }
    if (
      METHOD_RETURN_OVERRIDES[receiver] &&
      Object.prototype.hasOwnProperty.call(METHOD_RETURN_OVERRIDES[receiver], methodName)
    ) {
      return METHOD_RETURN_OVERRIDES[receiver][methodName];
    }
    if (SAME_TYPE_METHOD_RECEIVERS[receiver]) {
      return receiver;
    }
    return null;
  }
  
  function resolveSimpleReceiver(expression, variableTypeMap, apiIndex) {
    if (!expression || !apiIndex) {
      return null;
    }
    if (apiIndex[expression]) {
      return expression;
    }
    var parts = expression.split(".");
    var root = parts[0];
    if (variableTypeMap && variableTypeMap[root]) {
      var inferredRoot = variableTypeMap[root];
      if (parts.length === 1 && apiIndex[inferredRoot]) {
        return inferredRoot;
      }
  
      if (parts.length > 1) {
        var candidate = inferredRoot + "." + parts.slice(1).join(".");
        if (apiIndex[candidate]) {
          return candidate;
        }
      }
    }
    for (var i = 0; i < RECEIVER_SHORTCUT_PREFIXES.length; i += 1) {
      var prefix = RECEIVER_SHORTCUT_PREFIXES[i];
      var prefixedCandidate = prefix + "." + expression;
      if (apiIndex[prefixedCandidate]) {
        return prefixedCandidate;
      }
    }
    return null;
  }
  
  function tryReadConstructorCall(expression, index) {
    var cursor = skipWhitespace(expression, index);
    for (var i = 0; i < SORTED_TYPE_CONSTRUCTORS.length; i += 1) {
      var constructorName = SORTED_TYPE_CONSTRUCTORS[i];
      if (expression.slice(cursor, cursor + constructorName.length) !== constructorName) {
        continue;
      }
  
      var afterName = skipWhitespace(expression, cursor + constructorName.length);
      if (expression.charAt(afterName) !== "(") {
        continue;
      }
  
      var closeParen = readBalanced(expression, afterName, "(", ")");
      if (closeParen < 0) {
        return null;
      }
  
      return {
        type: constructorName,
        next: closeParen + 1
      };
    }
    return null;
  }
  
  function inferExpressionType(expression, variableTypeMap, apiIndex) {
    if (typeof expression !== "string") {
      return null;
    }
    var source = expression.trim();
    if (!source) {
      return null;
    }
    var cursor = 0;
    var currentType = null;
    var constructorRead = tryReadConstructorCall(source, cursor);
    if (constructorRead) {
      currentType = constructorRead.type;
      cursor = constructorRead.next;
    } else {
      var baseRead = readQualifiedIdentifier(source, cursor, { stopBeforeCall: true });
      if (!baseRead) {
        return null;
      }
  
      currentType = resolveSimpleReceiver(baseRead.value, variableTypeMap, apiIndex);
      if (!currentType) {
        return null;
      }
  
      cursor = baseRead.next;
    }
  
    cursor = skipWhitespace(source, cursor);
    while (cursor < source.length) {
      if (source.charAt(cursor) !== ".") {
        break; // 将 return null 改为 break，保证后面带有非链式调用的代码不会导致已推断的结果作废
      }
  
      cursor += 1;
      cursor = skipWhitespace(source, cursor);
  
      var memberRead = readIdentifier(source, cursor);
      if (!memberRead) {
        break;
      }
  
      var memberName = memberRead.value;
      cursor = skipWhitespace(source, memberRead.next);
  
      if (source.charAt(cursor) === "(") {
        var closeParen = readBalanced(source, cursor, "(", ")");
        if (closeParen < 0) {
          break;
        }
  
        var returnType = inferMethodReturnType(currentType, memberName, apiIndex);
        if (!returnType) {
          break;
        }
  
        currentType = returnType;
        cursor = skipWhitespace(source, closeParen + 1);
        continue;
      }
  
      var candidateReceiver = currentType + "." + memberName;
      if (apiIndex && apiIndex[candidateReceiver]) {
        currentType = candidateReceiver;
        cursor = skipWhitespace(source, memberRead.next);
        continue;
      }
  
      break;
    }
    return currentType;
  }
  
  function buildVariableTypeMap(source, apiIndex) {
    var map = Object.create(null);
    if (typeof source !== "string" || source.length === 0) {
      return map;
    }
    var constructorRegex = buildConstructorRegex();
    var match;
    while ((match = constructorRegex.exec(source)) !== null) {
      map[match[1]] = match[2];
    }
    var directAssignRegex = buildDirectAssignRegex();
    while ((match = directAssignRegex.exec(source)) !== null) {
      map[match[1]] = match[2];
    }
    
    // 修复3：支持多行链式赋值的推断
    // 允许捕获换行，前提是换行后紧跟的是空白和小数点（\n\s*\.）
    var declarationAssignRegex =
      /\b(?:var|let|const)\s+([A-Za-z_$][\w$]*)\s*=(?!=)\s*((?:[^;\n]|\n\s*\.)+)\s*;?/g;
    var assignmentRegex = /(?:^|[;\n])\s*([A-Za-z_$][\w$]*)\s*=(?!=)\s*((?:[^;\n]|\n\s*\.)+)\s*;?/g;
    
    var changed = true;
    var safetyCounter = 0;
    while (changed && safetyCounter < 12) {
      changed = false;
      safetyCounter += 1;
  
      declarationAssignRegex.lastIndex = 0;
      while ((match = declarationAssignRegex.exec(source)) !== null) {
        var declarationType = inferExpressionType(match[2], map, apiIndex);
        if (declarationType && map[match[1]] !== declarationType) {
          map[match[1]] = declarationType;
          changed = true;
        }
      }
  
      assignmentRegex.lastIndex = 0;
      while ((match = assignmentRegex.exec(source)) !== null) {
        var assignmentType = inferExpressionType(match[2], map, apiIndex);
        if (assignmentType && map[match[1]] !== assignmentType) {
          map[match[1]] = assignmentType;
          changed = true;
        }
      }
    }
    return map;
  }
  
  function resolveReceiver(expression, variableTypeMap, apiIndex) {
    if (!expression || !apiIndex) {
      return null;
    }
    var simple = resolveSimpleReceiver(expression, variableTypeMap, apiIndex);
    if (simple) {
      return simple;
    }
    var inferred = inferExpressionType(expression, variableTypeMap, apiIndex);
    if (inferred && apiIndex[inferred]) {
      return inferred;
    }
    return null;
  }
  
  function getCompletionContext(source, cursorIndex, apiIndex) {
    if (typeof source !== "string" || typeof cursorIndex !== "number" || cursorIndex < 0) {
      return null;
    }
    var left = source.slice(0, cursorIndex);
    if (isCursorInCommentOrString(left)) {
      return null;
    }
    var access = extractMemberAccess(left);
    if (!access) {
      var fallbackMatch = left.match(MEMBER_ACCESS_PATTERN);
      if (!fallbackMatch) {
        return null;
      }
  
      access = {
        expression: fallbackMatch[1],
        prefix: fallbackMatch[2] || ""
      };
    }
    var variableTypeMap = buildVariableTypeMap(left, apiIndex);
    var receiver = resolveReceiver(access.expression, variableTypeMap, apiIndex);
    if (!receiver) {
      return null;
    }
    return {
      expression: access.expression,
      prefix: access.prefix || "",
      receiver: receiver,
      variableTypeMap: variableTypeMap
    };
  }
  
  function getCompletionEntries(context, apiIndex) {
    if (!context || !context.receiver || !apiIndex || !apiIndex[context.receiver]) {
      return [];
    }
    var prefix = (context.prefix || "").toLowerCase();
    return apiIndex[context.receiver].filter(function (entry) {
      return entry.name.toLowerCase().indexOf(prefix) === 0;
    });
  }
  
  function extractIdentifierPrefix(left) {
    if (typeof left !== "string" || left.length === 0) {
      return null;
    }
    var cursor = left.length - 1;
    if (cursor < 0 || !isIdentifierPart(left.charAt(cursor))) {
      return null;
    }
    while (cursor >= 0 && isIdentifierPart(left.charAt(cursor))) {
      cursor -= 1;
    }
    if (cursor >= 0 && left.charAt(cursor) === ".") {
      return null;
    }
    var prefix = left.slice(cursor + 1);
    if (!prefix || !isIdentifierStart(prefix.charAt(0))) {
      return null;
    }
    return prefix;
  }
  
  function createIdentifierEntry(name, signature, doc, kind) {
    return {
      receiver: "local",
      name: name,
      signature: signature || name,
      insertText: name,
      doc: doc || "",
      kind: kind || "variable",
      returnType: null
    };
  }
  
  function addIdentifier(map, name, signature, doc, kind) {
    if (typeof name !== "string" || !name) {
      return;
    }
    if (!map[name]) {
      map[name] = createIdentifierEntry(name, signature, doc, kind);
    }
  }
  
  function collectIdentifierEntries(source, cursorIndex, apiIndex) {
    var left = source.slice(0, cursorIndex);
    var map = Object.create(null);
    var match;
    var declarationRegex = /\b(?:var|let|const)\s+([A-Za-z_$][\w$]*)/g;
    while ((match = declarationRegex.exec(left)) !== null) {
      addIdentifier(map, match[1], "local variable", "Declared in current script.", "variable");
    }
    var functionRegex = /\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g;
    while ((match = functionRegex.exec(left)) !== null) {
      addIdentifier(map, match[1], "function", "Function declared in current script.", "function");
    }
    var variableTypeMap = buildVariableTypeMap(left, apiIndex);
    Object.keys(variableTypeMap).forEach(function (name) {
      var typeName = variableTypeMap[name];
      var signature = typeName ? "local variable: " + typeName : "local variable";
      addIdentifier(map, name, signature, "Inferred from current script.", "variable");
    });
  
    ROOT_IDENTIFIER_ENTRIES.forEach(function (entry) {
      if (!map[entry.name]) {
        map[entry.name] = entry;
      }
    });
    return Object.keys(map).map(function (name) {
      return map[name];
    });
  }
  
  function getIdentifierCompletionContext(source, cursorIndex) {
    if (typeof source !== "string" || typeof cursorIndex !== "number" || cursorIndex < 0) {
      return null;
    }
    var left = source.slice(0, cursorIndex);
    if (isCursorInCommentOrString(left)) {
      return null;
    }
    if (extractMemberAccess(left)) {
      return null;
    }
    var prefix = extractIdentifierPrefix(left);
    if (!prefix) {
      return null;
    }
    return {
      expression: prefix,
      prefix: prefix,
      receiver: "local",
      variableTypeMap: Object.create(null),
      mode: "identifier"
    };
  }
  
  function getIdentifierCompletionEntries(source, cursorIndex, apiIndex, context) {
    if (!context || !context.prefix) {
      return [];
    }
    var prefix = context.prefix.toLowerCase();
    var entries = collectIdentifierEntries(source, cursorIndex, apiIndex);
    entries = entries.filter(function (entry) {
      return entry.name.toLowerCase().indexOf(prefix) === 0;
    });
  
    entries.sort(function (a, b) {
      var aExact = a.name === context.prefix ? 0 : 1;
      var bExact = b.name === context.prefix ? 0 : 1;
      if (aExact !== bExact) {
        return aExact - bExact;
      }
      return a.name.localeCompare(b.name);
    });
    return entries;
  }
  
  function snippetToPlainText(snippet) {
    if (typeof snippet !== "string" || snippet.length === 0) {
      return { text: "", cursorOffset: 0 };
    }
    var output = "";
    var cursorOffset = null;
    var index = 0;
    var tokenRegex = /\$(\d+)|\$\{(\d+):([^}]+)\}/g;
    var match;
    while ((match = tokenRegex.exec(snippet)) !== null) {
      output += snippet.slice(index, match.index);
  
      if (match[1]) {
        if (Number(match[1]) === 0 && cursorOffset === null) {
          cursorOffset = output.length;
        }
      } else {
        var placeholderIndex = Number(match[2]);
        var placeholderText = match[3] || "";
        if (placeholderIndex === 1 && cursorOffset === null) {
          cursorOffset = output.length;
        }
        output += placeholderText;
      }
  
      index = tokenRegex.lastIndex;
    }
  
    output += snippet.slice(index);
    if (cursorOffset === null) {
      cursorOffset = output.length;
    }
    return {
      text: output,
      cursorOffset: cursorOffset
    };
  }
  
  return {
    buildApiIndex: buildApiIndex,
    buildVariableTypeMap: buildVariableTypeMap,
    extractMemberAccess: extractMemberAccess,
    inferExpressionType: inferExpressionType,
    inferMethodReturnType: inferMethodReturnType,
    isCursorInCommentOrString: isCursorInCommentOrString,
    resolveReceiver: resolveReceiver,
    getCompletionContext: getCompletionContext,
    getCompletionEntries: getCompletionEntries,
    getIdentifierCompletionContext: getIdentifierCompletionContext,
    getIdentifierCompletionEntries: getIdentifierCompletionEntries,
    snippetToPlainText: snippetToPlainText
  };
});
