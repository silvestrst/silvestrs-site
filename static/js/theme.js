/* Footer theme chooser. The saved choice is applied before first paint by an
   inline script in <head>; this file only wires up the <select>. */
(function () {
  "use strict";

  var KEY = "theme";
  var THEMES = ["system", "light", "dark", "nord", "sepia"];
  var root = document.documentElement;
  var select = document.getElementById("theme-select");
  if (!select) return;

  var saved = null;
  try {
    saved = localStorage.getItem(KEY);
  } catch (e) {
    /* localStorage may be unavailable (private mode, blocked storage). */
  }
  select.value = THEMES.indexOf(saved) !== -1 ? saved : "system";

  select.addEventListener("change", function () {
    var theme = select.value;
    if (theme === "system") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", theme);
    }
    try {
      if (theme === "system") {
        localStorage.removeItem(KEY);
      } else {
        localStorage.setItem(KEY, theme);
      }
    } catch (e) {
      /* no-op */
    }
  });
})();
