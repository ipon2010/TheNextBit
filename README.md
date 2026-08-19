# TheNextBit

A daily anti-procrastination coach: a 90-second quiz sorts you into one of five
"stuck" profiles (Overwhelmed, Perfectionist, Avoider, Distracted, Depleted),
then serves one short CBT-style lesson and a tiny action per day, with a
"don't break the chain" streak tracker.

Pure HTML/CSS/JS — no build step, no backend, no dependencies. Progress is
stored in the visitor's browser via `localStorage`, so each person's chain is
private to their own device/browser.

## Files
- `index.html` — the app (quiz, daily track, insights)
- `about.html` — personal About page
- `terms.html` — Terms of Use
- `privacy.html` — Privacy Policy
- `disclaimer.html` — Disclaimer & Limitations
- `style.css` — all styling (design tokens at the top)
- `app.js` — all app logic (quiz content, lesson bank, state, rendering, footer)

Every page shares the same footer (About · Contact · Terms of Use · Privacy
Policy · Disclaimer & Limitations · © 2026 TheNextBit). "Contact" is a
`mailto:support@dascraftco.com` link rather than a page. On `index.html` the
footer is injected by `app.js`; on the four static pages it's plain HTML — if
you edit the footer, update it in both places (`FOOTER_HTML` in `app.js` and
the `<footer>` block in each `.html` file).

## Run it locally
Just open `index.html` in a browser, or serve the folder:

```bash
cd thenextbit
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deploy it (pick one — all free, all drag-and-drop or a couple commands)

**Netlify Drop**
Go to https://app.netlify.com/drop and drag this folder in. Done — you get a live URL instantly.

**Vercel**
```bash
npm i -g vercel
cd thenextbit
vercel --prod
```

**GitHub Pages**
1. Push this folder to a GitHub repo.
2. Repo Settings → Pages → Deploy from branch → `main` / root.
3. Your site is live at `https://<username>.github.io/<repo>`.

**Cloudflare Pages**
Connect the repo (or drag-and-drop the folder) at https://pages.cloudflare.com — no build command needed, output directory is `/`.

## Notes / next steps if you want to extend it
- Content lives entirely in `app.js` in the `QUESTIONS`, `TYPES`, and `LESSONS`
  objects — edit or add lessons there without touching any HTML.
- Right now the quiz picks a single dominant type. If you want multi-type
  blends, `state.scores` already stores the full breakdown per person.
- Data is per-browser (`localStorage`). To sync across devices you'd add a
  backend (e.g. Supabase/Firebase) and swap `loadState`/`saveState` in
  `app.js` for API calls — the rest of the app doesn't need to change.
- No analytics or tracking included by design — add your own if needed.
