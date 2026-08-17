(function () {
  var storageKey = "cmsc423-theme";
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  var label = document.querySelector(".theme-toggle-label");

  if (!toggle || !label) return;

  function applyTheme(theme, persist) {
    var isDark = theme === "dark";
    root.dataset.theme = isDark ? "dark" : "light";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    label.textContent = isDark ? "Light" : "Dark";

    if (persist) {
      try {
        localStorage.setItem(storageKey, root.dataset.theme);
      } catch (error) {
        // The selected theme still applies for this page when storage is unavailable.
      }
    }
  }

  applyTheme(root.dataset.theme, false);

  toggle.addEventListener("click", function () {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
  });

  window.addEventListener("storage", function (event) {
    if (event.key === storageKey && (event.newValue === "light" || event.newValue === "dark")) {
      applyTheme(event.newValue, false);
    }
  });
}());
