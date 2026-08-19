/* ============================================================
   TheNextBit — legal / about page renderer
   Set window.LEGAL_PAGE to "about" | "terms" | "privacy" | "disclaimer"
   before this script runs (see each .html file).
   ============================================================ */

function legalContent() {
  const lang = getLang();
  const page = window.LEGAL_PAGE;
  const langData = I18N[lang] && I18N[lang].legal && I18N[lang].legal[page];
  return langData || I18N.en.legal[page];
}

function renderLegalPage() {
  document.title = `${legalContent().title.replace(/&amp;/g, "&")} — TheNextBit`;

  const header = `
  <div class="page-header">
    <a href="index.html" class="wordmark">TheNextBit<span class="dot">.</span></a>
    ${renderHeaderControls()}
  </div>`;

  let body = "";
  const page = window.LEGAL_PAGE;
  const c = legalContent();

  if (page === "about") {
    body = `
    <div class="legal-wrap">
      <a href="index.html" class="back-link">${t("ui.backToApp")}</a>
      <h1>${c.title}</h1>
      ${c.body.map(p => `<p class="lede">${p}</p>`).join("")}
      <h2>${c.contactHeading}</h2>
      <p>${c.contactText} <a class="inline-link" href="mailto:support@dashcraftco.com">support@dashcraftco.com</a>.</p>
    </div>`;
  } else if (page === "terms") {
    body = `
    <div class="legal-wrap">
      <a href="index.html" class="back-link">${t("ui.backToApp")}</a>
      <h1>${c.title}</h1>
      <span class="updated">${c.updated}</span>
      <p class="lede">${c.intro}</p>
      ${c.sections.map(s => `
        <h2>${s.h}</h2>
        <p>${s.p}${/contact|contacto|makipag/i.test(s.h) ? ` <a class="inline-link" href="mailto:support@dashcraftco.com">support@dashcraftco.com</a>.` : ""}</p>
      `).join("")}
    </div>`;
  } else if (page === "privacy") {
    body = `
    <div class="legal-wrap">
      <a href="index.html" class="back-link">${t("ui.backToApp")}</a>
      <h1>${c.title}</h1>
      <span class="updated">${c.updated}</span>
      <p class="lede">${c.lede}</p>
      ${c.sections.map(s => `
        <h2>${s.h}</h2>
        ${s.list
          ? `<ul>${s.list.map(li => `<li>${li}</li>`).join("")}</ul>`
          : `<p>${s.p}${/contact|contacto|makipag/i.test(s.h) ? ` <a class="inline-link" href="mailto:support@dashcraftco.com">support@dashcraftco.com</a>.` : ""}</p>`
        }
      `).join("")}
    </div>`;
  } else if (page === "disclaimer") {
    body = `
    <div class="legal-wrap">
      <a href="index.html" class="back-link">${t("ui.backToApp")}</a>
      <h1>${c.title}</h1>
      <span class="updated">${c.updated}</span>
      ${c.sections.map(s => `
        <h2>${s.h}</h2>
        <p>${s.p}${/contact|contacto|makipag/i.test(s.h) ? ` <a class="inline-link" href="mailto:support@dashcraftco.com">support@dashcraftco.com</a>.` : ""}</p>
      `).join("")}
    </div>`;
  }

  document.getElementById("page").innerHTML = header + body + renderFooter();
  window.scrollTo(0, 0);
}

function onLangChange() {
  renderLegalPage();
}

renderLegalPage();
