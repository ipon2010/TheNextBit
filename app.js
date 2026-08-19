/* ============================================================
   TODAY IS THE DAY — vanilla JS SPA
   No build step. All state in localStorage.
   ============================================================ */

const STORAGE_KEY = "thenextbit_state_v1";

const TYPE_ORDER = ["overwhelmed", "perfectionist", "avoider", "distracted", "depleted"];

const TYPES = {
  overwhelmed: {
    label: "Overwhelmed",
    summary: "The task isn't scary — it's just too big to see a first step. Your track is about shrinking things down until starting is almost too easy to skip."
  },
  perfectionist: {
    label: "Perfectionist",
    summary: "You're not avoiding the work — you're avoiding an imperfect version of it. Your track is about finishing ugly on purpose, so finishing stops feeling dangerous."
  },
  avoider: {
    label: "Avoider",
    summary: "Somewhere under this task is a fear of being judged or falling short. Your track is about lowering the stakes and acting before the fear has a vote."
  },
  distracted: {
    label: "Distracted",
    summary: "Your attention isn't broken — it's just being outbid by easier things nearby. Your track is about designing your environment so focus doesn't need willpower."
  },
  depleted: {
    label: "Depleted",
    summary: "This isn't a discipline problem — you're running on empty. Your track is about matching the task to your real energy, and letting rest count as progress."
  }
};

const QUESTIONS = [
  {
    q: "You look at your to-do list. What actually happens?",
    options: [
      { t: "I stare at the biggest item and do nothing.", pts: { overwhelmed: 2 } },
      { t: "I open five other tabs instead.", pts: { distracted: 2 } },
      { t: "I keep rewriting the first line until it's right.", pts: { perfectionist: 2 } },
      { t: "I feel a pull to just... rest.", pts: { depleted: 2 } }
    ]
  },
  {
    q: "Think of the one task you're avoiding right now. What's true about it?",
    options: [
      { t: "I genuinely don't know where to start.", pts: { overwhelmed: 2 } },
      { t: "I'm scared it won't be good enough.", pts: { perfectionist: 1, avoider: 1 } },
      { t: "Someone might see it and judge the result.", pts: { avoider: 2 } },
      { t: "It's boring, and my mind keeps wandering.", pts: { distracted: 2 } }
    ]
  },
  {
    q: "What happens right before you avoid something?",
    options: [
      { t: "My chest tightens — I think 'what if I fail.'", pts: { avoider: 2 } },
      { t: "I feel tired before I've even begun.", pts: { depleted: 2 } },
      { t: "A notification pulls me away, and I follow it.", pts: { distracted: 2 } },
      { t: "I picture doing it perfectly, then freeze.", pts: { perfectionist: 2 } }
    ]
  },
  {
    q: "How do you talk to yourself after putting something off?",
    options: [
      { t: "\"I'm just lazy.\"", pts: { depleted: 1, avoider: 1 } },
      { t: "\"I need one more day to plan it properly.\"", pts: { perfectionist: 2 } },
      { t: "\"I got distracted, that's all.\"", pts: { distracted: 2 } },
      { t: "\"It's too much — I don't know which part to touch.\"", pts: { overwhelmed: 2 } }
    ]
  },
  {
    q: "Which of these sounds most like your current setup?",
    options: [
      { t: "Phone within reach, a dozen tabs open.", pts: { distracted: 2 } },
      { t: "Running on low sleep, no real breaks lately.", pts: { depleted: 2 } },
      { t: "Door closed, but still just staring at the screen.", pts: { overwhelmed: 1, avoider: 1 } },
      { t: "A folder full of 'almost ready' drafts.", pts: { perfectionist: 2 } }
    ]
  },
  {
    q: "If today went well, what would that actually look like?",
    options: [
      { t: "I made one ugly, unfinished version and moved on.", pts: { perfectionist: 2 } },
      { t: "I picked one small piece and just started.", pts: { overwhelmed: 2 } },
      { t: "I sent or showed something before I could second-guess it.", pts: { avoider: 2 } },
      { t: "I put my phone away and finished one real block of focus.", pts: { distracted: 2 } },
      { t: "I did anything at all, even for ten minutes.", pts: { depleted: 2 } }
    ]
  }
];

const LESSONS = {
  overwhelmed: [
    { title: "Shrink it until it's stupid", teaching: "When a task feels huge, your brain won't start — not because you're weak, but because it can't find a first step small enough to grab onto. It only sees the whole mountain.", action: "Break today's task down until the first step feels almost too small to count. Do only that step." },
    { title: "One task, one line", teaching: "Overwhelm often comes from holding an entire list in your head at once, unsorted. That mental clutter is exhausting before you've done anything.", action: "Write down only the very next physical action for one task — nothing else — and do that." },
    { title: "The two-minute opener", teaching: "Starting is the expensive part of any task, not doing it. Once you're moving, momentum does a lot of the work for you.", action: "Set a timer for two minutes. Work on the task until it rings, then stop or keep going — your choice." },
    { title: "Pick the one that unlocks the rest", teaching: "Not all tasks on a list carry equal weight. Usually one, once finished, makes several others easier or removes them entirely.", action: "Find that one task on your list today, and do it before anything else." },
    { title: "Get it out of your head", teaching: "An undefined list living in your head takes up mental bandwidth even when you're not actively working on it.", action: "Spend five minutes dumping everything on your mind onto paper or notes — unsorted, no editing." },
    { title: "Body before brain", teaching: "Overwhelm often shows up in your body — tight chest, shallow breath — before it's even a coherent thought. A short physical reset can interrupt the freeze.", action: "Stand up, take ten slow breaths, then sit back down and do one small step." },
    { title: "Say what you finished", teaching: "When the whole task isn't done, it's easy to skip celebrating the part that is. But your brain needs that small acknowledgment to keep going tomorrow.", action: "After today's step, write down exactly what you finished — however small it looks." }
  ],
  perfectionist: [
    { title: "Done beats perfect", teaching: "Your brain treats an imperfect finish as more dangerous than an endless unfinished draft. It's backwards — the unfinished version is the one actually costing you.", action: "Set a ten-minute timer. Produce a rough, unpolished first pass of one small piece. Stop when the timer ends, no matter what." },
    { title: "The eighty percent rule", teaching: "Most of a piece of work's value exists long before it's polished. Past a certain point, extra effort buys almost nothing.", action: "Take the thing you keep perfecting and send or ship it at 'good enough.' Note what you were afraid would happen." },
    { title: "Mute the critic while you draft", teaching: "Your inner critic doesn't belong in the creating stage — it only gets a turn during revision, never before a first version exists.", action: "Draft one section with no editing and no backspacing. Just get it down, however rough." },
    { title: "Name the fear under the polish", teaching: "Perfectionism usually isn't about quality — it's protecting you from a specific fear, like looking incompetent or being criticized.", action: "Finish this sentence in writing: 'If this isn't perfect, I'm afraid people will think ___.'" },
    { title: "Decide what 'done' means first", teaching: "If you don't define done before you start, you'll define it in the moment — right when your standards are highest and hardest to satisfy.", action: "Before starting, write three bullet points that define done for today. Stop there." },
    { title: "Let one thing be mediocre on purpose", teaching: "Tolerating imperfection is a skill, and skills need practice on low-stakes ground before they hold up under pressure.", action: "Pick one low-stakes task today and do it at seventy percent quality, deliberately." },
    { title: "Count finishes, not quality", teaching: "For a while, try tracking how many things you finish instead of how good they were. You've likely been optimizing the wrong number.", action: "Log one finished thing today — no quality rating attached, just that it's done." }
  ],
  avoider: [
    { title: "Name what you're protecting", teaching: "Avoidance is rarely laziness. Usually it's protecting something — your self-image, your comfort, your sense of being competent.", action: "Write one sentence: 'By avoiding this, I'm protecting myself from ___.'" },
    { title: "Do the scary version badly", teaching: "Small, repeated exposure to a feared task lowers the fear faster than waiting around for confidence to show up first.", action: "Do the smallest possible version of the task you're avoiding today, even if it comes out badly." },
    { title: "Separate the outcome from your worth", teaching: "One task going badly doesn't carry a verdict about who you are — even though it can feel that way in the moment.", action: "Write the task, then finish: 'Even if this goes badly, it doesn't mean ___ about me.'" },
    { title: "Lower the stakes on purpose", teaching: "Treating an attempt as a draft rather than 'the real thing' takes real pressure off, and pressure is usually what's keeping you stuck.", action: "Tell yourself — out loud if you can — 'this is just a rough attempt,' then start." },
    { title: "Ask what the worst case actually costs", teaching: "Fears left vague stay huge. Naming the real worst-case outcome specifically almost always shrinks it.", action: "Write the actual worst realistic outcome of today's task, and one way you'd recover from it." },
    { title: "Borrow someone else's eyes", teaching: "Avoidance grows quietly in isolation. Telling one other person about the unfinished thing tends to break its grip.", action: "Show or tell one trusted person about the task you're avoiding today." },
    { title: "Do it scared", teaching: "Waiting to feel ready before acting has the order backwards — confidence usually follows action, not the other way around.", action: "Do today's task without waiting for the fear to go away first." }
  ],
  distracted: [
    { title: "Remove the reach", teaching: "Willpower reliably loses to proximity. If a distraction is within arm's reach, you will eventually reach for it.", action: "Physically move your phone or main distraction out of reach before you start working." },
    { title: "One tab, one task", teaching: "Switching between tasks costs more focus and time than it feels like in the moment — each switch has a hidden tax.", action: "Close every tab or app except the one you need, for one full work block." },
    { title: "Catch the drift, don't fight it", teaching: "Attention wanders — that's normal. The skill isn't preventing it, it's noticing it early and returning without self-criticism.", action: "Each time you notice your attention drift today, just think 'drifting,' and gently return. No self-blame." },
    { title: "Build a twenty-minute fence", teaching: "Short, timed sprints work with your attention span instead of demanding more of it than it can give.", action: "Work in one twenty-minute block with a visible timer, then take a real, deliberate break." },
    { title: "Make the boring part less boring", teaching: "Distraction is often understimulation, not weakness. Adding a small element of challenge or play can hold attention better than forcing it.", action: "Turn today's work block into a small game — race the clock, or try to beat yesterday's focus streak." },
    { title: "Design the environment once", teaching: "Deciding in the moment burns willpower. Deciding in advance — blockers, phone in another room — removes the decision entirely.", action: "Set up one blocker, rule, or physical barrier today, before you actually need the willpower." },
    { title: "Notice what pulled you", teaching: "Understanding your specific triggers — certain apps, boredom, notifications — makes it much easier to design around them.", action: "At the end of today's work, write down what pulled your attention away, if anything." }
  ],
  depleted: [
    { title: "Energy before effort", teaching: "Pushing through depletion on willpower alone burns out faster. Sometimes the most useful move is restoring energy first.", action: "Before working, do one thing that restores you — water, food, a short walk — then reassess the task." },
    { title: "Shrink the task to match your energy", teaching: "Match the size of today's task to your actual current capacity, not the capacity you have on a good day.", action: "Pick the smallest possible version of today's task, and stop there once it's done." },
    { title: "Rest counts as progress", teaching: "Recovery isn't a break from the work cycle — it's part of it. Sustainable output needs both effort and real rest.", action: "Schedule one real break today, and take it without guilt or negotiating it away." },
    { title: "Check the basics first", teaching: "Sleep, food, and movement affect motivation more than mindset does. It's worth ruling these out before blaming willpower.", action: "Write down today's sleep, food, and movement, honestly, before judging your motivation." },
    { title: "Lower the bar to 'showed up'", teaching: "On depleted days, success isn't output quality — it's showing up at all. That's a real, countable win.", action: "Today, 'done' just means you opened the task and stayed with it for five minutes." },
    { title: "Ask what's actually draining you", teaching: "Sometimes depletion isn't about the task in front of you at all — it's a worry, conflict, or weight from somewhere else entirely.", action: "Write down anything, task-related or not, that's quietly draining your energy today." },
    { title: "Protect one recovery ritual", teaching: "Pick a single non-negotiable recovery habit and defend it like an actual appointment — because it functions like one.", action: "Choose one recovery ritual — a walk, music, stretching — and do it today no matter what else happens." }
  ]
};

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
  // 0-based index into this run's lesson sequence
  return state.completedDates.length;
}

function getLessonFor(index) {
  const arr = LESSONS[state.type];
  return arr[index % arr.length];
}

/* ---------- shared footer ---------- */

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="footer-links">
    <a href="about.html">About</a>
    <a href="mailto:support@dascraftco.com">Contact</a>
    <a href="terms.html">Terms of Use</a>
    <a href="privacy.html">Privacy Policy</a>
    <a href="disclaimer.html">Disclaimer &amp; Limitations</a>
  </div>
  <div class="footer-copy">&copy; 2026 TheNextBit</div>
</footer>`;

/* ---------- render root ---------- */

function render() {
  const app = document.getElementById("app");
  if (view === "welcome") app.innerHTML = renderWelcome();
  else if (view === "quiz") app.innerHTML = renderQuiz();
  else if (view === "results") app.innerHTML = renderResults();
  else if (view === "today") app.innerHTML = renderToday();
  else if (view === "insights") app.innerHTML = renderInsights();
  app.innerHTML += FOOTER_HTML;
  window.scrollTo(0, 0);
}

/* ---------- welcome ---------- */

function renderWelcome() {
  return `
  <div class="shell">
    <div class="topbar">
      <span class="wordmark">TheNextBit<span class="dot">.</span></span>
    </div>
    <div class="hero">
      <span class="hero-eyebrow">A 90-second quiz &middot; a 14-day track</span>
      <h1>Stop guessing why<br>you're <em>stuck.</em></h1>
      <p class="lede">Procrastination isn't one problem — it's five different ones wearing the same disguise. Find out which one is actually yours, then get one small, doable step a day until the chain doesn't break.</p>
      <div class="type-pills">
        ${TYPE_ORDER.map(k => `<span class="type-pill">${TYPES[k].label}</span>`).join("")}
      </div>
      <button class="btn-primary" onclick="startQuiz()">Take the quiz →</button>

      <div class="how-it-works">
        <h2>How it works</h2>
        <div class="how-steps">
          <div class="how-step">
            <span class="num">1</span>
            <p><strong>Six quick questions</strong> figure out which flavor of stuck you're dealing with.</p>
          </div>
          <div class="how-step">
            <span class="num">2</span>
            <p><strong>One short lesson a day</strong> — a real technique, plus one tiny action you can actually finish.</p>
          </div>
          <div class="how-step">
            <span class="num">3</span>
            <p><strong>A chain you don't break.</strong> Mark today done, watch the streak build, come back tomorrow.</p>
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
  const q = QUESTIONS[quizIndex];
  const total = QUESTIONS.length;
  return `
  <div class="shell">
    <div class="topbar">
      <span class="wordmark">TheNextBit<span class="dot">.</span></span>
      <div class="topbar-actions">
        <button class="link-btn" onclick="goWelcome()">Exit</button>
      </div>
    </div>
    <div class="quiz-count">Question ${quizIndex + 1} of ${total}</div>
    <div class="quiz-progress">
      ${QUESTIONS.map((_, i) => `<div class="seg"><div class="fill" style="width:${i < quizIndex ? "100" : i === quizIndex ? "50" : "0"}%"></div></div>`).join("")}
    </div>
    <h2 class="quiz-q">${q.q}</h2>
    <div class="quiz-options">
      ${q.options.map((opt, i) => `<button class="quiz-option" onclick="answerQuiz(${i})">${opt.t}</button>`).join("")}
    </div>
    ${quizIndex > 0 ? `<div class="quiz-back"><button class="link-btn" onclick="quizBack()">← Back</button></div>` : ""}
  </div>`;
}

function answerQuiz(optIndex) {
  const opt = QUESTIONS[quizIndex].options[optIndex];
  Object.keys(opt.pts).forEach(k => { quizTally[k] += opt.pts[k]; });
  if (quizIndex < QUESTIONS.length - 1) {
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
  let top = TYPE_ORDER[0];
  TYPE_ORDER.forEach(k => { if (quizTally[k] > quizTally[top]) top = k; });

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
  const t = state.type;
  const maxScore = Math.max(...Object.values(state.scores), 1);
  return `
  <div class="shell">
    <div class="topbar">
      <span class="wordmark">TheNextBit<span class="dot">.</span></span>
    </div>
    <div class="stamp">
      <span class="stamp-eyebrow">Your procrastination type</span>
      <p class="stamp-type">${TYPES[t].label}</p>
    </div>
    <p class="results-desc">${TYPES[t].summary}</p>

    <div class="score-bars">
      ${TYPE_ORDER.map(k => `
        <div class="score-row ${k === t ? "is-top" : ""}">
          <span class="score-label">${TYPES[k].label}</span>
          <div class="score-track"><div class="score-fill" style="width:${(state.scores[k] / maxScore) * 100}%"></div></div>
          <span class="score-num">${state.scores[k]}</span>
        </div>
      `).join("")}
    </div>

    <button class="btn-primary" onclick="goToday()">Start my track →</button>
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
        <button class="link-btn" onclick="confirmRetakeQuiz()">Retake quiz</button>
      </div>
    </div>

    <div class="day-meta">
      <span class="track-label">${TYPES[state.type].label} track &middot; Day ${dayIdx + 1}</span>
      <span class="streak-badge">${streak > 0 ? `🔥 ${streak}-day streak` : "Start your streak today"}</span>
    </div>

    <div class="chain-wrap">
      <div class="chain">${chainNodes.join("")}</div>
    </div>

    <div class="lesson-card">
      <span class="lesson-eyebrow">Today's lesson</span>
      <h2 class="lesson-title">${lesson.title}</h2>
      <p class="lesson-teaching">${lesson.teaching}</p>
      <div class="action-box">
        <input type="checkbox" id="actionCheck" ${checked ? "checked" : ""} onchange="toggleAction()">
        <label for="actionCheck" class="action-text">
          <span class="tag">Tiny action</span>
          ${lesson.action}
        </label>
      </div>
    </div>

    <div class="reflection-card">
      <label for="reflectionBox">What got in the way today, if anything?</label>
      <textarea id="reflectionBox" placeholder="Optional — a sentence is plenty." oninput="saveReflection(this.value)">${escapeHtml(reflection)}</textarea>
    </div>

    <div class="complete-row">
      ${done
        ? `<span class="done-note">✓ Today's link is set. See you tomorrow.</span>`
        : `<button class="btn-primary" onclick="markDone()">Mark today done</button>`
      }
    </div>

    <div class="tabbar">
      <button class="tab-btn active">Today</button>
      <button class="tab-btn" onclick="goInsights()">Insights</button>
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
  if (confirm("Retaking the quiz starts a brand new track. Your log stays saved. Continue?")) {
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
    </div>

    <h1 style="font-family:var(--font-display);font-size:28px;margin:0 0 22px;">Your log</h1>

    <div class="stat-grid">
      <div class="stat-card"><span class="stat-num">${total}</span><span class="stat-label">Days done</span></div>
      <div class="stat-card"><span class="stat-num">${streak}</span><span class="stat-label">Current streak</span></div>
      <div class="stat-card"><span class="stat-num">${bestStreak}</span><span class="stat-label">Best streak</span></div>
    </div>

    <div class="section-heading">Track: ${TYPES[state.type].label}</div>

    ${dates.length === 0
      ? `<div class="log-empty">Nothing logged yet — finish today's tiny action to start the chain.</div>`
      : `<div class="log-list">
          ${dates.map((d, i) => {
            const idxInRun = state.completedDates.indexOf(d);
            const lesson = getLessonFor(idxInRun);
            const refl = state.reflections[d];
            return `
              <div class="log-row">
                <span class="log-date">${formatDate(d)} &middot; ${lesson.title}</span>
                <div class="log-text ${refl ? "" : "empty"}">${refl ? escapeHtml(refl) : "No reflection logged."}</div>
              </div>`;
          }).join("")}
        </div>`
    }

    <div class="tabbar">
      <button class="tab-btn" onclick="goToday()">Today</button>
      <button class="tab-btn active">Insights</button>
    </div>

    <div class="danger-zone">
      <button class="danger-btn" onclick="resetAll()">Reset all progress</button>
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
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function resetAll() {
  if (confirm("This clears your quiz result, streak, and every logged reflection. This can't be undone. Reset everything?")) {
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
