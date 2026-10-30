// ===== Theme toggle (light/dark) =====
(function () {
  const THEME_KEY = "preferred-theme";
  const themeToggleBtn = document.getElementById("themeToggle");
  const root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      themeToggleBtn.textContent = "☀️";
    } else {
      root.removeAttribute("data-theme");
      themeToggleBtn.textContent = "🌙";
    }
  }

  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem(THEME_KEY);
  } catch (e) {
    savedTheme = null;
  }

  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }

  themeToggleBtn.addEventListener("click", function () {
    const isDark = root.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {
      /* ignore storage errors (e.g. file:// restrictions) */
    }
  });
})();

// ===== Mobile nav toggle =====
(function () {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close mobile menu after clicking a link
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
})();

// ===== Expandable project descriptions =====
(function () {
  const expandButtons = document.querySelectorAll(".expand-btn");

  expandButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const card = btn.closest(".project-card");
      const details = card.querySelector(".details");
      const isHidden = details.hasAttribute("hidden");

      if (isHidden) {
        details.removeAttribute("hidden");
        btn.textContent = "Hide details ▴";
        btn.setAttribute("aria-expanded", "true");
      } else {
        details.setAttribute("hidden", "");
        btn.textContent = "Show details ▾";
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });
})();
