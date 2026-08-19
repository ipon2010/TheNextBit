/* ============================================================
   TheNextBit — vanilla JS SPA
   No build step. State in localStorage. Content from I18N (i18n.js).
   ============================================================ */

const STORAGE_KEY = "thenextbit_state_v1";

/* ---------- state ---------- */

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Could not save progress", e);
  }
}

function freshState() {
  return {
    quizDone: false,
    type: null,
    scores: null,
    startDate: null,
    completedDates: [],
    reflections: {},
    actionChecked: {}
  };
}

let state = loadState() || freshState();
let view = state.quizDone ? "today" : "welcome";
let quizIndex = 0;
let quizTally = { overwhelmed: 0, perfectionist: 0, avoider: 0, distracted: 0, depleted: 0 };

/* ---------- content helpers (language-aware, with English fallback) ---------- */

function typeOrder() { return t("typeOrder"); }
function typeInfo(key) { return I18N[getLang()] && I18N[getLang()].types && I18N[getLang()].types[key] ? I18N[getLang()].types[key] : I18N.en.types[key]; }
function questions() { return t("quiz"); }
function lessonsFor(typeKey) {
  const lang = getLang();
  const langLessons = I18N[lang] && I18N[lang].lessons && I18N[lang].lessons[typeKey];
  return langLessons || I18N.en.lessons[typeKey];
}

/* ---------- date helpers ---------- */

function todayStr() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function addDays(dateStr, n) {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + n);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function isTodayDone() {
  return state.completedDates.includes(todayStr());
}

function computeStreak() {
  let streak = 0;
  let cursor = isTodayDone() ? todayStr() : addDays(todayStr(), -1);
  while (state.completedDates.includes(cursor)) {
    streak++;
    cursor = addDays(cursor, -1);
  }
  return streak;
}

function currentDayIndex() {
  return state.completedDates.length;
}

function getLessonFor(index) {
  const arr = lessonsFor(state.type);
  return arr[index % arr.length];
}

/* ---------- render root ---------- */

function render() {
  const app = document.getElementById("app");
  document.title = t("meta.title");
  if (view === "welcome") app.innerHTML = renderWelcome();
  else if (view === "quiz") app.innerHTML = renderQuiz();
  else if (view === "results") app.innerHTML = renderResults();
  else if (view === "today") app.innerHTML = renderToday();
  else if (view === "insights") app.innerHTML = renderInsights();
  app.innerHTML += renderFooter();
  window.scrollTo(0, 0);
}

function onLangChange() {
  render();
}

/* ---------- welcome ---------- */

function renderWelcome() {
  const order = typeOrder();
  return `
  <div class="shell">
    <div class="topbar">
      <span class="wordmark">TheNextBit<span class="dot">.</span></span>
      ${renderHeaderControls()}
    </div>
    <div class="hero">
      <span class="hero-eyebrow">${t("ui.heroEyebrow")}</span>
      <h1>${t("ui.heroTitleHtml")}</h1>
      <p class="lede">${t("ui.heroLede")}</p>
      <div class="type-pills">
        ${order.map(k => `<span class="type-pill">${typeInfo(k).label}</span>`).join("")}
      </div>
      <button class="btn-primary" onclick="startQuiz()">${t("ui.takeQuiz")}</button>

      <div class="how-it-works">
        <h2>${t("ui.howItWorks")}</h2>
        <div class="how-steps">
          <div class="how-step">
            <span class="num">1</span>
            <p><strong>${t("ui.step1Strong")}</strong> ${t("ui.step1Rest")}</p>
          </div>
          <div class="how-step">
            <span class="num">2</span>
            <p><strong>${t("ui.step2Strong")}</strong> ${t("ui.step2Rest")}</p>
          </div>
          <div class="how-step">
            <span class="num">3</span>
            <p><strong>${t("ui.step3Strong")}</strong> ${t("ui.step3Rest")}</p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function startQuiz() {
  quizIndex = 0;
  quizTally = { overwhelmed: 0, perfectionist: 0, avoider: 0, distracted: 0, depleted: 0 };
  view = "quiz";
  render();
}

/* ---------- quiz ---------- */

function renderQuiz() {
  const qs = questions();
  const q = qs[quizIndex];
  const total = qs.length;
  return `
  <div class="shell">
    <div class="topbar">
      <span class="wordmark">TheNextBit<span class="dot">.</span></span>
      <div class="topbar-actions">
        <button class="link-btn" onclick="goWelcome()">${t("ui.exit")}</button>
        ${renderHeaderControls()}
      </div>
    </div>
    <div class="quiz-count">${tf("ui.questionCount", { n: quizIndex + 1, total: total })}</div>
    <div class="quiz-progress">
      ${qs.map((_, i) => `<div class="seg"><div class="fill" style="width:${i < quizIndex ? "100" : i === quizIndex ? "50" : "0"}%"></div></div>`).join("")}
    </div>
    <h2 class="quiz-q">${q.q}</h2>
    <div class="quiz-options">
      ${q.options.map((opt, i) => `<button class="quiz-option" onclick="answerQuiz(${i})">${opt.t}</button>`).join("")}
    </div>
    ${quizIndex > 0 ? `<div class="quiz-back"><button class="link-btn" onclick="quizBack()">${t("ui.back")}</button></div>` : ""}
  </div>`;
}

function answerQuiz(optIndex) {
  const opt = questions()[quizIndex].options[optIndex];
  Object.keys(opt.pts).forEach(k => { quizTally[k] += opt.pts[k]; });
  if (quizIndex < questions().length - 1) {
    quizIndex++;
    render();
  } else {
    finishQuiz();
  }
}

function quizBack() {
  if (quizIndex > 0) {
    quizIndex--;
    render();
  }
}

function goWelcome() {
  view = "welcome";
  render();
}

function finishQuiz() {
  const order = typeOrder();
  let top = order[0];
  order.forEach(k => { if (quizTally[k] > quizTally[top]) top = k; });

  state.quizDone = true;
  state.type = top;
  state.scores = { ...quizTally };
  state.startDate = todayStr();
  state.completedDates = [];
  state.reflections = {};
  state.actionChecked = {};
  saveState(state);

  view = "results";
  render();
}

/* ---------- results ---------- */

function renderResults() {
  const order = typeOrder();
  const ty = state.type;
  const maxScore = Math.max(...Object.values(state.scores), 1);
  return `
  <div class="shell">
    <div class="topbar">
      <span class="wordmark">TheNextBit<span class="dot">.</span></span>
      ${renderHeaderControls()}
    </div>
    <div class="stamp">
      <span class="stamp-eyebrow">${t("ui.yourType")}</span>
      <p class="stamp-type">${typeInfo(ty).label}</p>
    </div>
    <p class="results-desc">${typeInfo(ty).summary}</p>

    <div class="score-bars">
      ${order.map(k => `
        <div class="score-row ${k === ty ? "is-top" : ""}">
          <span class="score-label">${typeInfo(k).label}</span>
          <div class="score-track"><div class="score-fill" style="width:${(state.scores[k] / maxScore) * 100}%"></div></div>
          <span class="score-num">${state.scores[k]}</span>
        </div>
      `).join("")}
    </div>

    <button class="btn-primary" onclick="goToday()">${t("ui.startTrack")}</button>
  </div>`;
}

function goToday() {
  view = "today";
  render();
}

/* ---------- today ---------- */

function renderToday() {
  const dayIdx = currentDayIndex();
  const lesson = getLessonFor(dayIdx);
  const today = todayStr();
  const done = isTodayDone();
  const streak = computeStreak();
  const checked = !!state.actionChecked[today];
  const reflection = state.reflections[today] || "";

  const chainLength = Math.max(dayIdx + 1, 7);
  const chainNodes = [];
  for (let i = 0; i < chainLength; i++) {
    const isDone = i < state.completedDates.length;
    const isToday = i === dayIdx;
    chainNodes.push(`
      <div class="chain-link">
        <div class="rung"></div>
        <div class="chain-node ${isDone ? "done" : ""} ${isToday ? "today" : ""}">${i + 1}</div>
      </div>
    `);
  }

  return `
  <div class="shell">
    <div class="topbar">
      <span class="wordmark">TheNextBit<span class="dot">.</span></span>
      <div class="topbar-actions">
        <button class="link-btn" onclick="confirmRetakeQuiz()">${t("ui.retakeQuiz")}</button>
        ${renderHeaderControls()}
      </div>
    </div>

    <div class="day-meta">
      <span class="track-label">${tf("ui.trackLabel", { type: typeInfo(state.type).label, n: dayIdx + 1 })}</span>
      <span class="streak-badge">${streak > 0 ? tf("ui.streakActive", { n: streak }) : t("ui.streakStart")}</span>
    </div>

    <div class="chain-wrap">
      <div class="chain">${chainNodes.join("")}</div>
    </div>

    <div class="lesson-card">
      <span class="lesson-eyebrow">${t("ui.todaysLesson")}</span>
      <h2 class="lesson-title">${lesson.title}</h2>
      <p class="lesson-teaching">${lesson.teaching}</p>
      <div class="action-box">
        <input type="checkbox" id="actionCheck" ${checked ? "checked" : ""} onchange="toggleAction()">
        <label for="actionCheck" class="action-text">
          <span class="tag">${t("ui.tinyAction")}</span>
          ${lesson.action}
        </label>
      </div>
    </div>

    <div class="reflection-card">
      <label for="reflectionBox">${t("ui.reflectionLabel")}</label>
      <textarea id="reflectionBox" placeholder="${t("ui.reflectionPlaceholder")}" oninput="saveReflection(this.value)">${escapeHtml(reflection)}</textarea>
    </div>

    <div class="complete-row">
      ${done
        ? `<span class="done-note">${t("ui.doneNote")}</span>`
        : `<button class="btn-primary" onclick="markDone()">${t("ui.markDone")}</button>`
      }
    </div>

    <div class="tabbar">
      <button class="tab-btn active">${t("ui.tabToday")}</button>
      <button class="tab-btn" onclick="goInsights()">${t("ui.tabInsights")}</button>
    </div>
  </div>`;
}

function toggleAction() {
  const today = todayStr();
  state.actionChecked[today] = !state.actionChecked[today];
  saveState(state);
}

function saveReflection(val) {
  const today = todayStr();
  state.reflections[today] = val;
  saveState(state);
}

function markDone() {
  const today = todayStr();
  if (!state.completedDates.includes(today)) {
    state.completedDates.push(today);
    state.completedDates.sort();
    saveState(state);
  }
  render();
}

function goInsights() {
  view = "insights";
  render();
}

function confirmRetakeQuiz() {
  if (confirm(t("ui.retakeConfirm"))) {
    view = "quiz";
    quizIndex = 0;
    quizTally = { overwhelmed: 0, perfectionist: 0, avoider: 0, distracted: 0, depleted: 0 };
    render();
  }
}

/* ---------- insights ---------- */

function renderInsights() {
  const total = state.completedDates.length;
  const streak = computeStreak();
  const bestStreak = computeBestStreak();
  const dates = [...state.completedDates].reverse();

  return `
  <div class="shell">
    <div class="topbar">
      <span class="wordmark">TheNextBit<span class="dot">.</span></span>
      ${renderHeaderControls()}
    </div>

    <h1 style="font-family:var(--font-display);font-size:28px;margin:0 0 22px;">${t("ui.yourLog")}</h1>

    <div class="stat-grid">
      <div class="stat-card"><span class="stat-num">${total}</span><span class="stat-label">${t("ui.daysDone")}</span></div>
      <div class="stat-card"><span class="stat-num">${streak}</span><span class="stat-label">${t("ui.currentStreak")}</span></div>
      <div class="stat-card"><span class="stat-num">${bestStreak}</span><span class="stat-label">${t("ui.bestStreak")}</span></div>
    </div>

    <div class="section-heading">${t("ui.trackPrefix")} ${typeInfo(state.type).label}</div>

    ${dates.length === 0
      ? `<div class="log-empty">${t("ui.logEmpty")}</div>`
      : `<div class="log-list">
          ${dates.map((d) => {
            const idxInRun = state.completedDates.indexOf(d);
            const lesson = getLessonFor(idxInRun);
            const refl = state.reflections[d];
            return `
              <div class="log-row">
                <span class="log-date">${formatDate(d)} &middot; ${lesson.title}</span>
                <div class="log-text ${refl ? "" : "empty"}">${refl ? escapeHtml(refl) : t("ui.noReflection")}</div>
              </div>`;
          }).join("")}
        </div>`
    }

    <div class="tabbar">
      <button class="tab-btn" onclick="goToday()">${t("ui.tabToday")}</button>
      <button class="tab-btn active">${t("ui.tabInsights")}</button>
    </div>

    <div class="danger-zone">
      <button class="danger-btn" onclick="resetAll()">${t("ui.resetAll")}</button>
    </div>
  </div>`;
}

function computeBestStreak() {
  if (state.completedDates.length === 0) return 0;
  const sorted = [...state.completedDates].sort();
  let best = 1, cur = 1;
  for (let i = 1; i < sorted.length; i++) {
    if (addDays(sorted[i - 1], 1) === sorted[i]) {
      cur++;
    } else {
      cur = 1;
    }
    best = Math.max(best, cur);
  }
  return best;
}

function formatDate(d) {
  const date = new Date(d + "T00:00:00");
  const localeMap = { en: "en-US", es: "es-ES", fr: "fr-FR", ph: "en-PH" };
  return date.toLocaleDateString(localeMap[getLang()] || "en-US", { month: "short", day: "numeric" });
}

function resetAll() {
  if (confirm(t("ui.resetConfirm"))) {
    state = freshState();
    saveState(state);
    view = "welcome";
    render();
  }
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- boot ---------- */

render();
