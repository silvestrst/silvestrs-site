/* Theme chooser. The saved theme is applied before first paint by the inline
   script in <head>; this file fills every theme <select> (sidebar and footer),
   keeps them in sync and saves changes. */
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
  var selects = Array.prototype.slice.call(
    document.querySelectorAll('select[name="theme"]')
  );
  if (!selects.length) return;

  var isValid = function (t) {
    return THEMES.some(function (x) { return x.value === t; });
  };

  var current = root.getAttribute("data-theme");
  var initial = isValid(current) ? current : DEFAULT;

  selects.forEach(function (select) {
    THEMES.forEach(function (t) {
      var opt = document.createElement("option");
      opt.value = t.value;
      opt.textContent = t.label;
      select.appendChild(opt);
    });
    select.value = initial;

    select.addEventListener("change", function () {
      var theme = isValid(select.value) ? select.value : DEFAULT;
      root.setAttribute("data-theme", theme);
      selects.forEach(function (other) { other.value = theme; });
      try {
        localStorage.setItem(KEY, theme);
      } catch (e) {
        /* localStorage may be unavailable (private mode, blocked storage). */
      }
    });
  });
})();
