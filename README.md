# TheNextBit

A daily anti-procrastination coach: a 90-second quiz sorts you into one of five
"stuck" profiles (Overwhelmed, Perfectionist, Avoider, Distracted, Depleted),
then serves one short CBT-style lesson and a tiny action per day, with a
"don't break the chain" streak tracker.

Pure HTML/CSS/JS — no build step, no backend, no dependencies. Installable as
a PWA, works offline after the first visit, supports light/dark theme, and
ships in English, Spanish, French, and Filipino (English is the default and
fallback language).

## Files
- `index.html` — the app (quiz, daily track, insights)
- `about.html` / `terms.html` / `privacy.html` / `disclaimer.html` — thin
  shells rendered by `legal.js` (so they pick up theme + language too)
- `style.css` — all styling, incl. light/dark theme tokens
- `i18n.js` — all translated content: UI strings, quiz, lessons, legal pages
- `chrome.js` — shared header (theme toggle, language switcher), footer,
  translation lookup (`t()` / `tf()` with automatic fallback to English),
  and service-worker registration
- `app.js` — the app's screens and logic (quiz scoring, streaks, storage)
- `legal.js` — renders the four static pages from `i18n.js` content
- `manifest.json`, `sw.js`, `icons/` — PWA manifest, offline service worker,
  and icon set

## Language & theme
- Language and theme choices are saved in `localStorage` and persist across
  visits. Theme defaults to the visitor's OS preference; language defaults to
  English.
- Every UI string is looked up via `t("path.to.string")` in `chrome.js`,
  which automatically falls back to the English value if a key is missing
  in the selected language — so a partial translation never breaks the UI.
- To add or edit a language: edit the matching block in `i18n.js`. To add a
  whole new language: add it to `I18N` in `i18n.js` and to `SUPPORTED_LANGS`
  / `LANG_NAMES` in `chrome.js`.

## PWA / offline
- `manifest.json` makes the app installable on Android/desktop (and
  "Add to Home Screen" on iOS) with a standalone window and app icon.
- `sw.js` caches the app shell on first visit; a network-first strategy is
  used for page navigations (so updates show up promptly) and cache-first
  for CSS/JS/icons (so repeat loads are instant, including offline).
- If you change file names or add new pages, add them to `SHELL_FILES` in
  `sw.js` and bump `CACHE_NAME` so returning visitors get the update.

## Run it locally
```bash
cd thenextbit
python3 -m http.server 8000
# visit http://localhost:8000
```
Note: the service worker only activates over `https://` or `http://localhost`
— that's a browser requirement, not a bug.

## Deploy it (pick one — all free)

**Netlify Drop** — go to https://app.netlify.com/drop and drag this folder in.

**Vercel**
```bash
npm i -g vercel
cd thenextbit
vercel --prod
```

**GitHub Pages** — push to a repo, then Settings → Pages → Deploy from
branch → `main` / root. Live at `https://<username>.github.io/<repo>`.

**Cloudflare Pages** — connect the repo (or drag-and-drop the folder) at
https://pages.cloudflare.com — no build command needed, output directory `/`.

## Notes for future edits
- Footer links, copyright text, and the Contact `mailto:` address are all in
  `i18n.js` under `footer` (per language) — edit there, not in the HTML.
- Quiz questions, lesson content, and legal-page copy all live in `i18n.js`
  under `quiz`, `lessons`, and `legal` per language.
- Data (quiz result, streak, reflections) is per-browser via `localStorage`.
  To sync across devices you'd add a backend and swap `loadState`/`saveState`
  in `app.js` for API calls.
