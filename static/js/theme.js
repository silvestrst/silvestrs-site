/* Footer theme chooser. The saved theme is applied before first paint by the
   inline script in <head>; this file fills the <select> and saves changes. */
(function () {
  "use strict";

  var KEY = "theme";
  var DEFAULT = "kanagawa";
  var THEMES = [
    { value: "kanagawa", label: "Kanagawa (Auto)" },
    { value: "catppuccin", label: "Catppuccin (Auto)" },
    { value: "gruvbox", label: "Gruvbox (Auto)" },
    { value: "rose-pine", label: "Rosé Pine (Auto)" },
    { value: "tokyo-night", label: "Tokyo Night" },
    { value: "nord", label: "Nord" },
    { value: "amber", label: "Amber CRT" },
    { value: "paper", label: "Paper" }
  ];

  var root = document.documentElement;
  var select = document.getElementById("theme-select");
  if (!select) return;

  var isValid = function (t) {
    return THEMES.some(function (x) { return x.value === t; });
  };

  THEMES.forEach(function (t) {
    var opt = document.createElement("option");
    opt.value = t.value;
    opt.textContent = t.label;
    select.appendChild(opt);
  });

  var current = root.getAttribute("data-theme");
  select.value = isValid(current) ? current : DEFAULT;

  select.addEventListener("change", function () {
    var theme = isValid(select.value) ? select.value : DEFAULT;
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(KEY, theme);
    } catch (e) {
      /* localStorage may be unavailable (private mode, blocked storage). */
    }
  });
})();
