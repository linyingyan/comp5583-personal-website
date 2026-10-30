(function () {
  "use strict";

  /* ---------- Theme toggle (light / dark) ---------- */
  var root = document.documentElement;
  var themeToggle = document.getElementById("theme-toggle");
  var themeLabel = themeToggle ? themeToggle.querySelector(".theme-toggle-label") : null;
  var themeIcon = themeToggle ? themeToggle.querySelector("span[aria-hidden]") : null;

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      if (themeLabel) themeLabel.textContent = "Light";
      if (themeIcon) themeIcon.textContent = "☀️";
      if (themeToggle) themeToggle.setAttribute("aria-pressed", "true");
    } else {
      root.removeAttribute("data-theme");
      if (themeLabel) themeLabel.textContent = "Dark";
      if (themeIcon) themeIcon.textContent = "🌙";
      if (themeToggle) themeToggle.setAttribute("aria-pressed", "false");
    }
  }

  function getPreferredTheme() {
    var stored = null;
    try {
      stored = localStorage.getItem("theme");
    } catch (e) {
      stored = null;
    }
    if (stored === "dark" || stored === "light") return stored;
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var isDark = root.getAttribute("data-theme") === "dark";
      var next = isDark ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* localStorage unavailable; ignore */
      }
    });
  }

  /* ---------- Mobile navigation menu ---------- */
  var navToggle = document.getElementById("nav-toggle");
  var mobileMenu = document.getElementById("mobile-menu");

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = mobileMenu.classList.toggle("show");
      mobileMenu.hidden = !isOpen;
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mobileMenu.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        mobileMenu.classList.remove("show");
        mobileMenu.hidden = true;
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Expandable project descriptions ---------- */
  var expandButtons = document.querySelectorAll(".expand-btn");

  expandButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var details = btn.nextElementSibling;
      if (!details) return;
      var isHidden = details.hasAttribute("hidden");
      if (isHidden) {
        details.removeAttribute("hidden");
        btn.setAttribute("aria-expanded", "true");
        btn.textContent = "Hide full contributions ▴";
      } else {
        details.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
        btn.textContent = "Show full contributions ▾";
      }
    });
  });
})();
