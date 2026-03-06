(function () {

  "use strict";
  console.log("GEE AUTOCOMPLETE CONTENT LOADED");

  if (window.__GEE_AUTOCOMPLETE_CONTENT_LOADED__) {
    return;
  }
  window.__GEE_AUTOCOMPLETE_CONTENT_LOADED__ = true;

  function injectScript(fileName) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = chrome.runtime.getURL(fileName);
      script.onload = function () {
        script.remove();
        resolve();
      };
      script.onerror = function () {
        script.remove();
        reject(new Error("Failed to inject " + fileName));
      };
      (document.head || document.documentElement).appendChild(script);
    });
  }

  injectScript("completion-core.js")
    .then(function () {
      return injectScript("api-data.js");
    })
    .then(function () {
      return injectScript("inject.js");
    })
    .catch(function (error) {
      console.error("[GEE Autocomplete] Injection failed:", error);
    });
})();