/* ============================================================
   TheNextBit — shared chrome (theme, language, header, footer)
   Depends on I18N from i18n.js
   ============================================================ */

const THEME_KEY = "thenextbit_theme";
const LANG_KEY = "thenextbit_lang";
const SUPPORTED_LANGS = ["en", "es", "fr", "ph"];
const LANG_NAMES = { en: "English", es: "Español", fr: "Français", ph: "Filipino" };

/* ---------- theme ---------- */

function getTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "dark" ? "#12161F" : "#14213D");
}

function toggleTheme() {
  const next = getTheme() === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
  const btn = document.getElementById("themeToggleBtn");
  if (btn) btn.innerHTML = themeIcon(next);
}

function themeIcon(theme) {
  return theme === "dark"
    ? `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>`
    : `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
}

/* ---------- language ---------- */

function getLang() {
  const saved = localStorage.getItem(LANG_KEY);
  return SUPPORTED_LANGS.includes(saved) ? saved : "en";
}

function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = "en";
  localStorage.setItem(LANG_KEY, lang);
  closeLangMenu();
  if (typeof onLangChange === "function") onLangChange();
}

/**
 * Translation lookup with automatic fallback to English.
 * path example: "ui.takeQuiz" or "types.overwhelmed.label"
 */
function t(path) {
  const lang = getLang();
  const dig = (obj, p) => p.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
  const val = dig(I18N[lang], path);
  if (val !== undefined) return val;
  return dig(I18N.en, path);
}

function tf(path, params) {
  let str = t(path);
  if (typeof str !== "string") return str;
  Object.keys(params || {}).forEach(k => {
    str = str.replace(new RegExp("\\{" + k + "\\}", "g"), params[k]);
  });
  return str;
}

/* ---------- header controls (theme + language) ---------- */

function renderHeaderControls() {
  const theme = getTheme();
  return `
  <div class="header-controls">
    <button id="themeToggleBtn" class="icon-btn" onclick="toggleTheme()" aria-label="${t("ui.themeToggle")}" title="${t("ui.themeToggle")}">${themeIcon(theme)}</button>
    <div class="lang-wrap">
      <button id="langToggleBtn" class="icon-btn" onclick="toggleLangMenu(event)" aria-label="${t("ui.languageToggle")}" title="${t("ui.languageToggle")}">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
      </button>
      <div id="langMenu" class="lang-menu" hidden>
        <div class="lang-menu-title">${t("ui.languageToggle")}</div>
        ${SUPPORTED_LANGS.map(code => `
          <button class="lang-option ${code === getLang() ? "active" : ""}" onclick="setLang('${code}')">
            <span>${LANG_NAMES[code]}</span>
            <span class="lang-code">${code.toUpperCase()}</span>
          </button>
        `).join("")}
        <div class="lang-disclaimer">${t("ui.languageDisclaimer")}</div>
      </div>
    </div>
  </div>`;
}

function toggleLangMenu(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById("langMenu");
  if (!menu) return;
  const willOpen = menu.hasAttribute("hidden");
  closeLangMenu();
  if (willOpen) {
    menu.removeAttribute("hidden");
    document.addEventListener("click", outsideLangClick);
  }
}

function closeLangMenu() {
  const menu = document.getElementById("langMenu");
  if (menu) menu.setAttribute("hidden", "");
  document.removeEventListener("click", outsideLangClick);
}

function outsideLangClick(e) {
  const wrap = document.querySelector(".lang-wrap");
  if (wrap && !wrap.contains(e.target)) closeLangMenu();
}

/* ---------- footer ---------- */

function renderFooter() {
  return `
<footer class="site-footer">
  <div class="footer-links">
    <a href="about.html">${t("footer.about")}</a>
    <a href="mailto:support@dashcraftco.com">${t("footer.contact")}</a>
    <a href="terms.html">${t("footer.terms")}</a>
    <a href="privacy.html">${t("footer.privacy")}</a>
    <a href="disclaimer.html">${t("footer.disclaimer")}</a>
  </div>
  <div class="footer-copy">${t("footer.copyright")}</div>
</footer>`;
}

/* ---------- boot helpers ---------- */

applyTheme(getTheme());

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
}
registerServiceWorker();
