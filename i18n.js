/* ============================================================
   TheNextBit — i18n dictionary
   Default & fallback language: en
   ============================================================ */

const I18N = {

/* ===================== ENGLISH ===================== */
en: {
  meta: {
    title: "TheNextBit — one small step, tracked",
    description: "A daily anti-procrastination coach. Take a 90-second quiz, get a personalized 14-day track, and keep your chain unbroken."
  },
  ui: {
    heroEyebrow: "A 90-second quiz &middot; a 14-day track",
    heroTitleHtml: "Stop guessing why<br>you're <em>stuck.</em>",
    heroLede: "Procrastination isn't one problem — it's five different ones wearing the same disguise. Find out which one is actually yours, then get one small, doable step a day until the chain doesn't break.",
    takeQuiz: "Take the quiz →",
    howItWorks: "How it works",
    step1Strong: "Six quick questions",
    step1Rest: "figure out which flavor of stuck you're dealing with.",
    step2Strong: "One short lesson a day",
    step2Rest: "— a real technique, plus one tiny action you can actually finish.",
    step3Strong: "A chain you don't break.",
    step3Rest: "Mark today done, watch the streak build, come back tomorrow.",
    exit: "Exit",
    questionCount: "Question {n} of {total}",
    back: "← Back",
    yourType: "Your procrastination type",
    startTrack: "Start my track →",
    retakeQuiz: "Retake quiz",
    retakeConfirm: "Retaking the quiz starts a brand new track. Your log stays saved. Continue?",
    trackLabel: "{type} track &middot; Day {n}",
    streakActive: "🔥 {n}-day streak",
    streakStart: "Start your streak today",
    todaysLesson: "Today's lesson",
    tinyAction: "Tiny action",
    reflectionLabel: "What got in the way today, if anything?",
    reflectionPlaceholder: "Optional — a sentence is plenty.",
    markDone: "Mark today done",
    doneNote: "✓ Today's link is set. See you tomorrow.",
    tabToday: "Today",
    tabInsights: "Insights",
    yourLog: "Your log",
    daysDone: "Days done",
    currentStreak: "Current streak",
    bestStreak: "Best streak",
    trackPrefix: "Track:",
    logEmpty: "Nothing logged yet — finish today's tiny action to start the chain.",
    noReflection: "No reflection logged.",
    resetAll: "Reset all progress",
    resetConfirm: "This clears your quiz result, streak, and every logged reflection. This can't be undone. Reset everything?",
    backToApp: "← Back to the app",
    themeToggle: "Switch theme",
    languageToggle: "Language",
    languageDisclaimer: "Translations are AI-generated and may contain errors. TheNextBit's original language is English. Your data and entries are always displayed exactly as you entered them."
  },
  footer: {
    about: "About",
    contact: "Contact",
    terms: "Terms of Use",
    privacy: "Privacy Policy",
    disclaimer: "Disclaimer & Limitations",
    copyright: "&copy; 2026 DashCraftCo &middot; TheNextBit"
  },
  typeOrder: ["overwhelmed", "perfectionist", "avoider", "distracted", "depleted"],
  types: {
    overwhelmed: { label: "Overwhelmed", summary: "The task isn't scary — it's just too big to see a first step. Your track is about shrinking things down until starting is almost too easy to skip." },
    perfectionist: { label: "Perfectionist", summary: "You're not avoiding the work — you're avoiding an imperfect version of it. Your track is about finishing ugly on purpose, so finishing stops feeling dangerous." },
    avoider: { label: "Avoider", summary: "Somewhere under this task is a fear of being judged or falling short. Your track is about lowering the stakes and acting before the fear has a vote." },
    distracted: { label: "Distracted", summary: "Your attention isn't broken — it's just being outbid by easier things nearby. Your track is about designing your environment so focus doesn't need willpower." },
    depleted: { label: "Depleted", summary: "This isn't a discipline problem — you're running on empty. Your track is about matching the task to your real energy, and letting rest count as progress." }
  },
  quiz: [
    { q: "You look at your to-do list. What actually happens?", options: [
      { t: "I stare at the biggest item and do nothing.", pts: { overwhelmed: 2 } },
      { t: "I open five other tabs instead.", pts: { distracted: 2 } },
      { t: "I keep rewriting the first line until it's right.", pts: { perfectionist: 2 } },
      { t: "I feel a pull to just... rest.", pts: { depleted: 2 } }
    ]},
    { q: "Think of the one task you're avoiding right now. What's true about it?", options: [
      { t: "I genuinely don't know where to start.", pts: { overwhelmed: 2 } },
      { t: "I'm scared it won't be good enough.", pts: { perfectionist: 1, avoider: 1 } },
      { t: "Someone might see it and judge the result.", pts: { avoider: 2 } },
      { t: "It's boring, and my mind keeps wandering.", pts: { distracted: 2 } }
    ]},
    { q: "What happens right before you avoid something?", options: [
      { t: "My chest tightens — I think 'what if I fail.'", pts: { avoider: 2 } },
      { t: "I feel tired before I've even begun.", pts: { depleted: 2 } },
      { t: "A notification pulls me away, and I follow it.", pts: { distracted: 2 } },
      { t: "I picture doing it perfectly, then freeze.", pts: { perfectionist: 2 } }
    ]},
    { q: "How do you talk to yourself after putting something off?", options: [
      { t: "\"I'm just lazy.\"", pts: { depleted: 1, avoider: 1 } },
      { t: "\"I need one more day to plan it properly.\"", pts: { perfectionist: 2 } },
      { t: "\"I got distracted, that's all.\"", pts: { distracted: 2 } },
      { t: "\"It's too much — I don't know which part to touch.\"", pts: { overwhelmed: 2 } }
    ]},
    { q: "Which of these sounds most like your current setup?", options: [
      { t: "Phone within reach, a dozen tabs open.", pts: { distracted: 2 } },
      { t: "Running on low sleep, no real breaks lately.", pts: { depleted: 2 } },
      { t: "Door closed, but still just staring at the screen.", pts: { overwhelmed: 1, avoider: 1 } },
      { t: "A folder full of 'almost ready' drafts.", pts: { perfectionist: 2 } }
    ]},
    { q: "If today went well, what would that actually look like?", options: [
      { t: "I made one ugly, unfinished version and moved on.", pts: { perfectionist: 2 } },
      { t: "I picked one small piece and just started.", pts: { overwhelmed: 2 } },
      { t: "I sent or showed something before I could second-guess it.", pts: { avoider: 2 } },
      { t: "I put my phone away and finished one real block of focus.", pts: { distracted: 2 } },
      { t: "I did anything at all, even for ten minutes.", pts: { depleted: 2 } }
    ]}
  ],
  lessons: {
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
  },
  legal: {
    about: {
      title: "About",
      body: [
        "I built TheNextBit because procrastination was quietly running my days — not the dramatic kind, just the small stuff that kept sliding: the message I meant to send, the habit I kept meaning to restart, the folder of \"I'll deal with this later\" that never actually got dealt with.",
        "What I wanted wasn't another to-do list. I wanted to understand <em>why</em> I kept stalling, because it's rarely the same reason twice — some days it's fear, some days it's just too much at once, some days I'm simply out of gas. And then, instead of a vague promise to \"do better,\" I wanted one small, honest next step. That's where the name comes from: not the whole project, not the perfect plan. Just the next bit.",
        "A lot of what I was avoiding turned out to be clutter — not only the physical kind, but the mental kind. Too many half-finished things open at once, too many decisions I hadn't made yet, too much sitting in the back of my head unresolved. Breaking a day down to one small, doable piece was the most honest way I found to deal with that.",
        "TheNextBit isn't built by a productivity expert. It's built by someone still working through this, one day and one small action at a time — and I'm hoping it's useful for you too, whatever your version of stuck looks like."
      ],
      contactHeading: "Questions or feedback?",
      contactText: "I'd genuinely like to hear it. Reach me at"
    },
    terms: {
      title: "Terms of Use",
      updated: "Last updated August 2026",
      intro: "By using TheNextBit, you agree to the terms below. If you don't agree with them, please don't use the app.",
      sections: [
        { h: "1. What TheNextBit is", p: "TheNextBit is a free, self-guided tool that offers a short quiz, daily lessons, and a habit tracker aimed at reducing procrastination. It's meant for personal, informal use." },
        { h: "2. What it isn't", p: "TheNextBit is not therapy, coaching, or professional advice of any kind. It doesn't diagnose, treat, or claim to cure anything. See the Disclaimer & Limitations page for more on this." },
        { h: "3. Your use of the app", p: "You're free to use TheNextBit for your own personal purposes. You agree not to copy, resell, or republish the app's content or code as your own, and not to use the app in any way that could damage, disable, or interfere with it." },
        { h: "4. Your data", p: "No account is required. Your quiz results, streak, and reflections are stored locally in your own browser. You're responsible for your own device and browser — see the Privacy Policy for full details." },
        { h: "5. No guarantees", p: "Everyone's habits and circumstances are different. TheNextBit doesn't promise any specific outcome, and using it is at your own discretion and risk." },
        { h: "6. Changes to these terms", p: "These terms may be updated from time to time. Continued use of the app after changes means you accept the updated terms." },
        { h: "7. Contact", p: "Questions about these terms? Reach out at" }
      ]
    },
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated August 2026",
      lede: "Short version: we don't collect your data. Everything you enter stays on your own device.",
      sections: [
        { h: "What we store", p: "Your quiz results, procrastination type, streak, and any reflections you write are saved using your browser's local storage (localStorage). This data lives only on your device, in your browser — it is never sent to a server, and we never see it." },
        { h: "What we don't do", list: ["No account or sign-up required", "No cookies", "No analytics or tracking scripts", "No advertising", "No selling or sharing of data with third parties, because none is collected in the first place"] },
        { h: "Clearing your data", p: "You can clear everything at any time using the \"Reset all progress\" button inside the app, or by clearing your browser's site data for TheNextBit. Either action permanently deletes your quiz result, streak, and reflections — we can't recover it, since we never had a copy." },
        { h: "Switching devices or browsers", p: "Because your data lives only in one browser, it won't automatically appear on a different device or browser. Each one starts its own fresh track." },
        { h: "Changes to this policy", p: "If this policy changes — for example, if a future version of the app adds optional accounts or sync — we'll update this page to reflect exactly what's collected and why." },
        { h: "Contact", p: "Questions about your privacy? Reach out at" }
      ]
    },
    disclaimer: {
      title: "Disclaimer &amp; Limitations",
      updated: "Last updated August 2026",
      sections: [
        { h: "Not professional advice", p: "TheNextBit is an educational, self-help tool built around common cognitive-behavioral techniques for procrastination. It is not medical, psychological, or therapeutic advice, diagnosis, or treatment, and it isn't a substitute for care from a qualified professional." },
        { h: "If procrastination feels like more than procrastination", p: "Sometimes what looks like procrastination is tied to something heavier — persistent low mood, burnout, anxiety, or something else worth taking seriously. If that sounds like you, please consider talking to a doctor or a licensed therapist. This app can sit alongside that kind of support, but it can't replace it." },
        { h: "No outcome guarantees", p: "Everyone's habits, workload, and circumstances are different. Using TheNextBit doesn't guarantee you'll finish tasks, build a streak, or change any specific habit — results depend entirely on you." },
        { h: "Use at your own risk", p: "TheNextBit is provided \"as is,\" without warranties of any kind. To the fullest extent permitted by law, TheNextBit and its creator aren't liable for any loss, damage, or outcome — including lost data — arising from your use of the app." },
        { h: "Your data, your device", p: "Since progress is stored only in your browser (see the Privacy Policy), clearing your browser data, switching devices, or browser issues can permanently remove your saved progress. We can't restore it." },
        { h: "Changes to this page", p: "This disclaimer may be updated as the app changes. Continued use after an update means you accept the current version." },
        { h: "Contact", p: "Questions about any of this? Reach out at" }
      ]
    }
  }
},

/* ===================== ESPAÑOL ===================== */
es: {
  meta: {
    title: "TheNextBit — un paso pequeño a la vez",
    description: "Un coach diario contra la procrastinación. Responde un cuestionario de 90 segundos, obtén un plan de 14 días personalizado y no rompas la cadena."
  },
  ui: {
    heroEyebrow: "Un cuestionario de 90 segundos &middot; un plan de 14 días",
    heroTitleHtml: "Deja de adivinar<br>por qué estás <em>estancado.</em>",
    heroLede: "La procrastinación no es un solo problema — son cinco, disfrazados del mismo modo. Descubre cuál es realmente el tuyo y recibe un paso pequeño y realizable cada día, hasta que la cadena no se rompa.",
    takeQuiz: "Hacer el cuestionario →",
    howItWorks: "Cómo funciona",
    step1Strong: "Seis preguntas rápidas",
    step1Rest: "descubren qué tipo de estancamiento tienes.",
    step2Strong: "Una lección corta cada día",
    step2Rest: "— una técnica real, más una pequeña acción que sí podrás terminar.",
    step3Strong: "Una cadena que no rompes.",
    step3Rest: "Marca el día como hecho, mira crecer tu racha, vuelve mañana.",
    exit: "Salir",
    questionCount: "Pregunta {n} de {total}",
    back: "← Atrás",
    yourType: "Tu tipo de procrastinación",
    startTrack: "Empezar mi plan →",
    retakeQuiz: "Repetir cuestionario",
    retakeConfirm: "Repetir el cuestionario empieza un plan completamente nuevo. Tu historial se conserva. ¿Continuar?",
    trackLabel: "Plan {type} &middot; Día {n}",
    streakActive: "🔥 Racha de {n} días",
    streakStart: "Empieza tu racha hoy",
    todaysLesson: "Lección de hoy",
    tinyAction: "Pequeña acción",
    reflectionLabel: "¿Qué se interpuso hoy, si acaso?",
    reflectionPlaceholder: "Opcional — con una frase basta.",
    markDone: "Marcar hoy como hecho",
    doneNote: "✓ El eslabón de hoy quedó puesto. Nos vemos mañana.",
    tabToday: "Hoy",
    tabInsights: "Estadísticas",
    yourLog: "Tu historial",
    daysDone: "Días completados",
    currentStreak: "Racha actual",
    bestStreak: "Mejor racha",
    trackPrefix: "Plan:",
    logEmpty: "Aún no hay nada registrado — completa la pequeña acción de hoy para iniciar la cadena.",
    noReflection: "Sin reflexión registrada.",
    resetAll: "Reiniciar todo el progreso",
    resetConfirm: "Esto borra tu resultado del cuestionario, tu racha y todas las reflexiones guardadas. No se puede deshacer. ¿Reiniciar todo?",
    backToApp: "← Volver a la app",
    themeToggle: "Cambiar tema",
    languageToggle: "Idioma",
    languageDisclaimer: "Las traducciones son generadas por IA y pueden contener errores. El idioma original de TheNextBit es el inglés. Tus datos y entradas siempre se muestran exactamente como los escribiste."
  },
  footer: {
    about: "Acerca de",
    contact: "Contacto",
    terms: "Términos de Uso",
    privacy: "Política de Privacidad",
    disclaimer: "Aviso y Limitaciones",
    copyright: "&copy; 2026 DashCraftCo &middot; TheNextBit"
  },
  typeOrder: ["overwhelmed", "perfectionist", "avoider", "distracted", "depleted"],
  types: {
    overwhelmed: { label: "Abrumado", summary: "La tarea no da miedo — simplemente es demasiado grande para ver un primer paso. Tu plan trata de reducirla hasta que empezar sea casi imposible de evitar." },
    perfectionist: { label: "Perfeccionista", summary: "No estás evitando el trabajo — estás evitando una versión imperfecta de él. Tu plan trata de terminar cosas de forma imperfecta a propósito, para que terminar deje de sentirse peligroso." },
    avoider: { label: "Evasivo", summary: "En algún lugar bajo esta tarea hay un miedo a ser juzgado o a quedarte corto. Tu plan trata de bajar las apuestas y actuar antes de que el miedo tenga voz." },
    distracted: { label: "Distraído", summary: "Tu atención no está rota — simplemente cosas más fáciles la superan en oferta. Tu plan trata de diseñar tu entorno para que enfocarte no dependa de tu fuerza de voluntad." },
    depleted: { label: "Agotado", summary: "Esto no es un problema de disciplina — te estás quedando sin energía. Tu plan trata de ajustar la tarea a tu energía real, y dejar que el descanso también cuente como progreso." }
  },
  quiz: [
    { q: "Miras tu lista de pendientes. ¿Qué pasa en realidad?", options: [
      { t: "Me quedo mirando lo más grande y no hago nada.", pts: { overwhelmed: 2 } },
      { t: "Abro otras cinco pestañas en su lugar.", pts: { distracted: 2 } },
      { t: "Sigo reescribiendo la primera línea hasta que quede bien.", pts: { perfectionist: 2 } },
      { t: "Siento el impulso de simplemente... descansar.", pts: { depleted: 2 } }
    ]},
    { q: "Piensa en la tarea que estás evitando ahora mismo. ¿Qué es cierto sobre ella?", options: [
      { t: "De verdad no sé por dónde empezar.", pts: { overwhelmed: 2 } },
      { t: "Tengo miedo de que no quede lo suficientemente bien.", pts: { perfectionist: 1, avoider: 1 } },
      { t: "Alguien podría verla y juzgar el resultado.", pts: { avoider: 2 } },
      { t: "Es aburrida, y mi mente se va a otra parte.", pts: { distracted: 2 } }
    ]},
    { q: "¿Qué pasa justo antes de evitar algo?", options: [
      { t: "Se me aprieta el pecho — pienso 'y si fracaso.'", pts: { avoider: 2 } },
      { t: "Me siento cansado incluso antes de empezar.", pts: { depleted: 2 } },
      { t: "Una notificación me distrae, y la sigo.", pts: { distracted: 2 } },
      { t: "Me imagino haciéndolo perfecto, y me paralizo.", pts: { perfectionist: 2 } }
    ]},
    { q: "¿Cómo te hablas después de postergar algo?", options: [
      { t: "\"Soy un flojo/floja.\"", pts: { depleted: 1, avoider: 1 } },
      { t: "\"Necesito un día más para planearlo bien.\"", pts: { perfectionist: 2 } },
      { t: "\"Me distraje, eso es todo.\"", pts: { distracted: 2 } },
      { t: "\"Es demasiado — no sé por qué parte empezar.\"", pts: { overwhelmed: 2 } }
    ]},
    { q: "¿Cuál de estas frases describe mejor tu situación actual?", options: [
      { t: "Celular a la mano, una docena de pestañas abiertas.", pts: { distracted: 2 } },
      { t: "Poco sueño últimamente, sin descansos reales.", pts: { depleted: 2 } },
      { t: "Puerta cerrada, pero aún así solo miro la pantalla.", pts: { overwhelmed: 1, avoider: 1 } },
      { t: "Una carpeta llena de borradores 'casi listos'.", pts: { perfectionist: 2 } }
    ]},
    { q: "Si hoy te fuera bien, ¿cómo se vería eso exactamente?", options: [
      { t: "Hice una versión imperfecta y sin terminar, y seguí adelante.", pts: { perfectionist: 2 } },
      { t: "Elegí una parte pequeña y simplemente empecé.", pts: { overwhelmed: 2 } },
      { t: "Envié o mostré algo antes de poder dudar de mí mismo.", pts: { avoider: 2 } },
      { t: "Guardé el celular y terminé un bloque real de concentración.", pts: { distracted: 2 } },
      { t: "Hice algo, lo que sea, aunque fueran diez minutos.", pts: { depleted: 2 } }
    ]}
  ],
  lessons: {
    overwhelmed: [
      { title: "Achícala hasta que sea absurda", teaching: "Cuando una tarea se siente enorme, tu cerebro no arranca — no porque seas débil, sino porque no encuentra un primer paso lo bastante pequeño para agarrarlo. Solo ve la montaña entera.", action: "Divide la tarea de hoy hasta que el primer paso parezca casi demasiado pequeño para contar. Haz solo ese paso." },
      { title: "Una tarea, una línea", teaching: "El agobio suele venir de cargar toda la lista en la cabeza a la vez, sin orden. Ese desorden mental agota antes de que hayas hecho algo.", action: "Escribe solo la próxima acción física para una sola tarea — nada más — y hazla." },
      { title: "El arranque de dos minutos", teaching: "Empezar es la parte cara de cualquier tarea, no hacerla. Una vez en movimiento, el impulso hace buena parte del trabajo por ti.", action: "Pon un temporizador de dos minutos. Trabaja en la tarea hasta que suene, luego para o continúa — tú decides." },
      { title: "Elige la que desbloquea el resto", teaching: "No todas las tareas de una lista pesan igual. Normalmente una, al terminarse, facilita o elimina varias otras.", action: "Encuentra esa tarea en tu lista hoy, y hazla antes que cualquier otra cosa." },
      { title: "Sácalo de tu cabeza", teaching: "Una lista sin definir que vive en tu cabeza ocupa espacio mental incluso cuando no estás trabajando en ella activamente.", action: "Dedica cinco minutos a volcar todo lo que tienes en la mente en papel o notas — sin orden, sin editar." },
      { title: "Cuerpo antes que mente", teaching: "El agobio suele aparecer en el cuerpo — pecho apretado, respiración corta — antes de ser siquiera un pensamiento claro. Un pequeño reinicio físico puede romper el bloqueo.", action: "Ponte de pie, respira lento diez veces, luego siéntate y da un pequeño paso." },
      { title: "Di lo que terminaste", teaching: "Cuando la tarea entera no está terminada, es fácil no celebrar la parte que sí lo está. Pero tu cerebro necesita ese pequeño reconocimiento para seguir mañana.", action: "Después del paso de hoy, escribe exactamente qué terminaste — por pequeño que parezca." }
    ],
    perfectionist: [
      { title: "Terminado gana a perfecto", teaching: "Tu cerebro trata un final imperfecto como más peligroso que un borrador interminable. Es al revés — la versión sin terminar es la que realmente te cuesta.", action: "Pon un temporizador de diez minutos. Haz una primera versión tosca de una pequeña parte. Detente cuando suene, pase lo que pase." },
      { title: "La regla del ochenta por ciento", teaching: "La mayor parte del valor de un trabajo existe mucho antes de estar pulido. Pasado cierto punto, el esfuerzo extra casi no compra nada.", action: "Toma eso que sigues perfeccionando y envíalo como 'suficientemente bueno.' Anota qué temías que pasara." },
      { title: "Silencia al crítico mientras haces el borrador", teaching: "Tu crítico interno no pertenece a la etapa de creación — solo tiene turno durante la revisión, nunca antes de que exista una primera versión.", action: "Haz el borrador de una sección sin editar ni borrar. Solo escríbelo, aunque sea tosco." },
      { title: "Nombra el miedo detrás del pulido", teaching: "El perfeccionismo casi nunca es sobre calidad — te protege de un miedo específico, como parecer incompetente o ser criticado.", action: "Termina esta frase por escrito: 'Si esto no es perfecto, temo que la gente piense ___.'" },
      { title: "Decide primero qué significa 'terminado'", teaching: "Si no defines 'terminado' antes de empezar, lo definirás en el momento — justo cuando tus estándares son más altos y más difíciles de cumplir.", action: "Antes de empezar, escribe tres puntos que definan 'terminado' para hoy. Detente ahí." },
      { title: "Deja que una cosa sea mediocre a propósito", teaching: "Tolerar la imperfección es una habilidad, y las habilidades necesitan práctica en terreno de bajo riesgo antes de sostenerse bajo presión.", action: "Elige hoy una tarea de bajo riesgo y hazla al setenta por ciento de calidad, deliberadamente." },
      { title: "Cuenta lo terminado, no la calidad", teaching: "Por un tiempo, intenta contar cuántas cosas terminas en vez de qué tan buenas quedaron. Probablemente has estado midiendo el número equivocado.", action: "Registra hoy una cosa terminada — sin calificar su calidad, solo que está hecha." }
    ],
    avoider: [
      { title: "Nombra lo que estás protegiendo", teaching: "Evitar algo casi nunca es pereza. Normalmente protege algo — tu autoimagen, tu comodidad, tu sensación de ser competente.", action: "Escribe una frase: 'Al evitar esto, me protejo de ___.'" },
      { title: "Haz la versión que da miedo, mal hecha", teaching: "La exposición pequeña y repetida a una tarea temida baja el miedo más rápido que esperar a que llegue la confianza primero.", action: "Haz hoy la versión más pequeña posible de la tarea que evitas, aunque salga mal." },
      { title: "Separa el resultado de tu valor", teaching: "Que una tarea salga mal no dicta un veredicto sobre quién eres — aunque en el momento se sienta así.", action: "Escribe la tarea, y termina: 'Aunque esto salga mal, no significa ___ sobre mí.'" },
      { title: "Baja las apuestas a propósito", teaching: "Tratar un intento como borrador y no como 'lo real' quita presión de verdad, y la presión suele ser lo que te mantiene atascado.", action: "Dite a ti mismo — en voz alta si puedes — 'esto es solo un intento tosco,' y luego empieza." },
      { title: "Pregunta qué cuesta realmente el peor escenario", teaching: "Los miedos vagos se mantienen enormes. Nombrar el peor resultado realista, con detalle, casi siempre lo reduce.", action: "Escribe el peor resultado realista de la tarea de hoy, y una forma en que te recuperarías de él." },
      { title: "Pide prestados los ojos de otra persona", teaching: "Evitar crece en silencio, en aislamiento. Contarle a una persona de confianza sobre lo inconcluso suele romper ese hechizo.", action: "Muéstrale o cuéntale a alguien de confianza sobre la tarea que estás evitando hoy." },
      { title: "Hazlo con miedo", teaching: "Esperar a sentirte listo antes de actuar tiene el orden invertido — la confianza suele venir después de la acción, no antes.", action: "Haz la tarea de hoy sin esperar a que el miedo se vaya primero." }
    ],
    distracted: [
      { title: "Quita lo que está al alcance", teaching: "La fuerza de voluntad casi siempre pierde contra la cercanía. Si una distracción está al alcance de la mano, en algún momento la vas a tomar.", action: "Aleja físicamente tu celular u otra distracción principal antes de empezar a trabajar." },
      { title: "Una pestaña, una tarea", teaching: "Cambiar entre tareas cuesta más enfoque y tiempo del que parece en el momento — cada cambio tiene un costo oculto.", action: "Cierra toda pestaña o app excepto la que necesitas, por un bloque completo de trabajo." },
      { title: "Nota la distracción, no la combatas", teaching: "La atención se va — es normal. La habilidad no es evitarlo, es notarlo pronto y volver sin criticarte.", action: "Cada vez que notes que te distraes hoy, solo piensa 'me fui,' y vuelve con calma. Sin culparte." },
      { title: "Construye una cerca de veinte minutos", teaching: "Los bloques cortos y cronometrados trabajan a favor de tu capacidad de atención, en lugar de exigirle más de lo que puede dar.", action: "Trabaja un bloque de veinte minutos con un temporizador visible, y luego toma un descanso real y deliberado." },
      { title: "Haz que lo aburrido sea menos aburrido", teaching: "La distracción suele ser falta de estímulo, no debilidad. Agregar un poco de reto o juego puede sostener la atención mejor que forzarla.", action: "Convierte el bloque de trabajo de hoy en un pequeño juego — corre contra el reloj, o intenta superar tu racha de ayer." },
      { title: "Diseña el entorno una sola vez", teaching: "Decidir en el momento gasta fuerza de voluntad. Decidir por adelantado — bloqueadores, celular en otro cuarto — elimina la decisión por completo.", action: "Configura hoy un bloqueador, regla o barrera física, antes de necesitar realmente la fuerza de voluntad." },
      { title: "Nota qué te distrajo", teaching: "Entender tus disparadores específicos — ciertas apps, aburrimiento, notificaciones — facilita mucho diseñar en torno a ellos.", action: "Al terminar de trabajar hoy, escribe qué te distrajo, si algo lo hizo." }
    ],
    depleted: [
      { title: "Energía antes que esfuerzo", teaching: "Empujar a través del agotamiento solo con fuerza de voluntad te quema más rápido. A veces lo más útil es restaurar la energía primero.", action: "Antes de trabajar, haz algo que te restaure — agua, comida, una caminata corta — y luego evalúa la tarea de nuevo." },
      { title: "Ajusta la tarea a tu energía", teaching: "Ajusta el tamaño de la tarea de hoy a tu capacidad real actual, no a la que tienes en un buen día.", action: "Elige la versión más pequeña posible de la tarea de hoy, y detente ahí en cuanto esté hecha." },
      { title: "Descansar también cuenta como progreso", teaching: "La recuperación no es una pausa del ciclo de trabajo — es parte de él. Un rendimiento sostenible necesita tanto esfuerzo como descanso real.", action: "Agenda hoy un descanso real, y tómalo sin culpa ni negociarlo." },
      { title: "Revisa primero lo básico", teaching: "El sueño, la comida y el movimiento afectan la motivación más de lo que crees. Vale la pena descartarlos antes de culpar a la fuerza de voluntad.", action: "Escribe hoy tu sueño, comida y movimiento, con honestidad, antes de juzgar tu motivación." },
      { title: "Baja la meta a 'me presenté'", teaching: "En los días de agotamiento, el éxito no es la calidad del resultado — es presentarse. Eso ya es un logro real y contable.", action: "Hoy, 'terminado' solo significa que abriste la tarea y te quedaste con ella cinco minutos." },
      { title: "Pregunta qué te está agotando en realidad", teaching: "A veces el agotamiento no tiene nada que ver con la tarea frente a ti — es una preocupación, un conflicto, o un peso que viene de otro lugar.", action: "Escribe cualquier cosa, relacionada o no con la tarea, que te esté agotando en silencio hoy." },
      { title: "Protege un ritual de recuperación", teaching: "Elige un solo hábito de recuperación innegociable y defiéndelo como una cita real — porque funciona como una.", action: "Elige un ritual de recuperación — caminar, música, estirar — y hazlo hoy pase lo que pase." }
    ]
  },
  legal: {
    about: {
      title: "Acerca de",
      body: [
        "Construí TheNextBit porque la procrastinación estaba dirigiendo mis días en silencio — no del tipo dramático, solo las cosas pequeñas que seguían quedando pendientes: el mensaje que quería enviar, el hábito que quería retomar, la carpeta de \"lo resuelvo después\" que nunca se resolvía.",
        "Lo que quería no era otra lista de pendientes. Quería entender <em>por qué</em> seguía estancándome, porque casi nunca es la misma razón dos veces — algunos días es miedo, otros es demasiado a la vez, otros simplemente no tengo energía. Y en vez de una promesa vaga de \"mejorar,\" quería un paso siguiente pequeño y honesto. De ahí viene el nombre: no todo el proyecto, no el plan perfecto. Solo el siguiente pedacito.",
        "Buena parte de lo que evitaba resultó ser desorden — no solo físico, también mental. Demasiadas cosas a medias abiertas a la vez, demasiadas decisiones sin tomar, demasiado sin resolver en el fondo de mi mente. Reducir un día a una pieza pequeña y realizable fue la forma más honesta que encontré de lidiar con eso.",
        "TheNextBit no está hecho por un experto en productividad. Lo hizo alguien que todavía está trabajando en esto, un día y una pequeña acción a la vez — y espero que te sea útil a ti también, sea cual sea tu versión de estar estancado."
      ],
      contactHeading: "¿Preguntas o comentarios?",
      contactText: "De verdad me gustaría escucharlos. Escríbeme a"
    },
    terms: {
      title: "Términos de Uso",
      updated: "Última actualización: agosto de 2026",
      intro: "Al usar TheNextBit, aceptas los siguientes términos. Si no estás de acuerdo con ellos, por favor no uses la app.",
      sections: [
        { h: "1. Qué es TheNextBit", p: "TheNextBit es una herramienta gratuita y autoguiada que ofrece un cuestionario corto, lecciones diarias y un seguimiento de hábitos enfocado en reducir la procrastinación. Está pensada para uso personal e informal." },
        { h: "2. Qué no es", p: "TheNextBit no es terapia, coaching ni asesoría profesional de ningún tipo. No diagnostica, trata ni afirma curar nada. Consulta la página de Aviso y Limitaciones para más información." },
        { h: "3. Tu uso de la app", p: "Puedes usar TheNextBit libremente para fines personales. Aceptas no copiar, revender ni republicar el contenido o código de la app como propio, y no usarla de forma que pueda dañarla, deshabilitarla o interferir con ella." },
        { h: "4. Tus datos", p: "No se requiere una cuenta. Tus resultados del cuestionario, racha y reflexiones se guardan localmente en tu propio navegador. Eres responsable de tu propio dispositivo y navegador — consulta la Política de Privacidad para más detalles." },
        { h: "5. Sin garantías", p: "Los hábitos y circunstancias de cada persona son diferentes. TheNextBit no promete ningún resultado específico, y su uso es bajo tu propia decisión y riesgo." },
        { h: "6. Cambios a estos términos", p: "Estos términos pueden actualizarse de vez en cuando. Seguir usando la app después de un cambio significa que aceptas los términos actualizados." },
        { h: "7. Contacto", p: "¿Preguntas sobre estos términos? Escríbenos a" }
      ]
    },
    privacy: {
      title: "Política de Privacidad",
      updated: "Última actualización: agosto de 2026",
      lede: "Versión corta: no recopilamos tus datos. Todo lo que ingresas permanece en tu propio dispositivo.",
      sections: [
        { h: "Qué guardamos", p: "Tus resultados del cuestionario, tipo de procrastinación, racha y cualquier reflexión que escribas se guardan usando el almacenamiento local de tu navegador (localStorage). Estos datos viven únicamente en tu dispositivo, en tu navegador — nunca se envían a un servidor, y nunca los vemos." },
        { h: "Qué no hacemos", list: ["No se requiere cuenta ni registro", "Sin cookies", "Sin scripts de análisis ni rastreo", "Sin publicidad", "No vendemos ni compartimos datos con terceros, porque no se recopila ninguno en primer lugar"] },
        { h: "Borrar tus datos", p: "Puedes borrar todo en cualquier momento usando el botón \"Reiniciar todo el progreso\" dentro de la app, o borrando los datos del sitio en tu navegador para TheNextBit. Cualquiera de las dos acciones elimina permanentemente tu resultado del cuestionario, racha y reflexiones — no podemos recuperarlo, porque nunca tuvimos una copia." },
        { h: "Cambiar de dispositivo o navegador", p: "Como tus datos viven solo en un navegador, no aparecerán automáticamente en otro dispositivo o navegador. Cada uno empieza su propio plan desde cero." },
        { h: "Cambios a esta política", p: "Si esta política cambia — por ejemplo, si una futura versión de la app agrega cuentas o sincronización opcional — actualizaremos esta página para reflejar exactamente qué se recopila y por qué." },
        { h: "Contacto", p: "¿Preguntas sobre tu privacidad? Escríbenos a" }
      ]
    },
    disclaimer: {
      title: "Aviso y Limitaciones",
      updated: "Última actualización: agosto de 2026",
      sections: [
        { h: "No es asesoría profesional", p: "TheNextBit es una herramienta educativa de autoayuda basada en técnicas cognitivo-conductuales comunes contra la procrastinación. No es asesoría, diagnóstico ni tratamiento médico, psicológico o terapéutico, y no sustituye la atención de un profesional calificado." },
        { h: "Si la procrastinación se siente como algo más", p: "A veces lo que parece procrastinación está ligado a algo más pesado — bajo ánimo persistente, agotamiento, ansiedad, u otra cosa que vale la pena tomar en serio. Si esto te suena familiar, considera hablar con un médico o un terapeuta licenciado. Esta app puede complementar ese tipo de apoyo, pero no puede reemplazarlo." },
        { h: "Sin garantías de resultados", p: "Los hábitos, la carga de trabajo y las circunstancias de cada persona son diferentes. Usar TheNextBit no garantiza que termines tareas, construyas una racha o cambies algún hábito específico — los resultados dependen totalmente de ti." },
        { h: "Uso bajo tu propio riesgo", p: "TheNextBit se ofrece \"tal cual,\" sin garantías de ningún tipo. En la mayor medida permitida por la ley, TheNextBit y su creador no son responsables de ninguna pérdida, daño o resultado — incluida la pérdida de datos — que surja del uso de la app." },
        { h: "Tus datos, tu dispositivo", p: "Dado que el progreso se guarda solo en tu navegador (ver la Política de Privacidad), borrar los datos de tu navegador, cambiar de dispositivo o tener problemas con el navegador puede eliminar permanentemente tu progreso guardado. No podemos restaurarlo." },
        { h: "Cambios a esta página", p: "Este aviso puede actualizarse conforme la app cambie. Seguir usándola después de una actualización significa que aceptas la versión vigente." },
        { h: "Contacto", p: "¿Preguntas sobre algo de esto? Escríbenos a" }
      ]
    }
  }
},

/* ===================== FRANÇAIS ===================== */
fr: {
  meta: {
    title: "TheNextBit — un petit pas à la fois",
    description: "Un coach quotidien contre la procrastination. Faites un quiz de 90 secondes, obtenez un parcours de 14 jours personnalisé, et ne brisez pas la chaîne."
  },
  ui: {
    heroEyebrow: "Un quiz de 90 secondes &middot; un parcours de 14 jours",
    heroTitleHtml: "Arrêtez de deviner<br>pourquoi vous êtes <em>bloqué.</em>",
    heroLede: "La procrastination n'est pas un seul problème — ce sont cinq problèmes différents déguisés de la même façon. Découvrez lequel est vraiment le vôtre, puis recevez chaque jour un petit pas réalisable, jusqu'à ce que la chaîne ne se brise plus.",
    takeQuiz: "Faire le quiz →",
    howItWorks: "Comment ça marche",
    step1Strong: "Six questions rapides",
    step1Rest: "déterminent quel genre de blocage vous vivez.",
    step2Strong: "Une courte leçon par jour",
    step2Rest: "— une vraie technique, plus une petite action que vous pourrez vraiment terminer.",
    step3Strong: "Une chaîne que vous ne brisez pas.",
    step3Rest: "Marquez le jour comme fait, regardez votre série grandir, revenez demain.",
    exit: "Quitter",
    questionCount: "Question {n} sur {total}",
    back: "← Retour",
    yourType: "Votre type de procrastination",
    startTrack: "Commencer mon parcours →",
    retakeQuiz: "Refaire le quiz",
    retakeConfirm: "Refaire le quiz démarre un tout nouveau parcours. Votre historique reste sauvegardé. Continuer ?",
    trackLabel: "Parcours {type} &middot; Jour {n}",
    streakActive: "🔥 Série de {n} jours",
    streakStart: "Commencez votre série aujourd'hui",
    todaysLesson: "Leçon du jour",
    tinyAction: "Petite action",
    reflectionLabel: "Qu'est-ce qui vous a freiné aujourd'hui, s'il y a lieu ?",
    reflectionPlaceholder: "Facultatif — une phrase suffit.",
    markDone: "Marquer aujourd'hui comme fait",
    doneNote: "✓ Le maillon d'aujourd'hui est posé. À demain.",
    tabToday: "Aujourd'hui",
    tabInsights: "Statistiques",
    yourLog: "Votre journal",
    daysDone: "Jours accomplis",
    currentStreak: "Série actuelle",
    bestStreak: "Meilleure série",
    trackPrefix: "Parcours :",
    logEmpty: "Rien d'enregistré pour l'instant — terminez la petite action du jour pour démarrer la chaîne.",
    noReflection: "Aucune réflexion enregistrée.",
    resetAll: "Réinitialiser toute la progression",
    resetConfirm: "Ceci efface votre résultat de quiz, votre série et toutes les réflexions enregistrées. Action irréversible. Tout réinitialiser ?",
    backToApp: "← Retour à l'application",
    themeToggle: "Changer de thème",
    languageToggle: "Langue",
    languageDisclaimer: "Les traductions sont générées par IA et peuvent contenir des erreurs. La langue d'origine de TheNextBit est l'anglais. Vos données et saisies sont toujours affichées exactement comme vous les avez entrées."
  },
  footer: {
    about: "À propos",
    contact: "Contact",
    terms: "Conditions d'utilisation",
    privacy: "Politique de confidentialité",
    disclaimer: "Avertissement et limites",
    copyright: "&copy; 2026 DashCraftCo &middot; TheNextBit"
  },
  typeOrder: ["overwhelmed", "perfectionist", "avoider", "distracted", "depleted"],
  types: {
    overwhelmed: { label: "Débordé", summary: "La tâche ne fait pas peur — elle est simplement trop grande pour qu'on en voie le premier pas. Votre parcours vise à la réduire jusqu'à ce que commencer devienne presque trop facile pour être évité." },
    perfectionist: { label: "Perfectionniste", summary: "Vous n'évitez pas le travail — vous évitez une version imparfaite de celui-ci. Votre parcours consiste à finir volontairement de façon imparfaite, pour que finir cesse de faire peur." },
    avoider: { label: "Évitant", summary: "Quelque part sous cette tâche se cache une peur d'être jugé ou de ne pas être à la hauteur. Votre parcours vise à réduire les enjeux et à agir avant que la peur n'ait son mot à dire." },
    distracted: { label: "Distrait", summary: "Votre attention n'est pas défaillante — elle est simplement surenchérie par des choses plus faciles à portée de main. Votre parcours consiste à aménager votre environnement pour que la concentration ne dépende plus de la volonté." },
    depleted: { label: "Épuisé", summary: "Ce n'est pas un problème de discipline — vous êtes à court d'énergie. Votre parcours consiste à ajuster la tâche à votre énergie réelle, et à laisser le repos compter comme un progrès." }
  },
  quiz: [
    { q: "Vous regardez votre liste de tâches. Que se passe-t-il vraiment ?", options: [
      { t: "Je fixe la plus grosse tâche et je ne fais rien.", pts: { overwhelmed: 2 } },
      { t: "J'ouvre cinq autres onglets à la place.", pts: { distracted: 2 } },
      { t: "Je réécris la première ligne encore et encore.", pts: { perfectionist: 2 } },
      { t: "J'ai juste envie de... me reposer.", pts: { depleted: 2 } }
    ]},
    { q: "Pensez à la tâche que vous évitez en ce moment. Qu'est-ce qui est vrai à son sujet ?", options: [
      { t: "Je ne sais vraiment pas par où commencer.", pts: { overwhelmed: 2 } },
      { t: "J'ai peur que ce ne soit pas assez bien.", pts: { perfectionist: 1, avoider: 1 } },
      { t: "Quelqu'un pourrait la voir et juger le résultat.", pts: { avoider: 2 } },
      { t: "C'est ennuyeux, et mon esprit s'égare.", pts: { distracted: 2 } }
    ]},
    { q: "Que se passe-t-il juste avant que vous évitiez quelque chose ?", options: [
      { t: "Ma poitrine se serre — je pense « et si j'échouais ».", pts: { avoider: 2 } },
      { t: "Je me sens fatigué avant même de commencer.", pts: { depleted: 2 } },
      { t: "Une notification m'attire, et je la suis.", pts: { distracted: 2 } },
      { t: "J'imagine le faire parfaitement, puis je me fige.", pts: { perfectionist: 2 } }
    ]},
    { q: "Comment vous parlez-vous après avoir remis quelque chose à plus tard ?", options: [
      { t: "« Je suis juste paresseux/paresseuse. »", pts: { depleted: 1, avoider: 1 } },
      { t: "« Il me faut un jour de plus pour bien planifier. »", pts: { perfectionist: 2 } },
      { t: "« Je me suis laissé distraire, c'est tout. »", pts: { distracted: 2 } },
      { t: "« C'est trop — je ne sais pas par quel bout commencer. »", pts: { overwhelmed: 2 } }
    ]},
    { q: "Laquelle de ces situations vous ressemble le plus en ce moment ?", options: [
      { t: "Téléphone à portée de main, une douzaine d'onglets ouverts.", pts: { distracted: 2 } },
      { t: "Peu de sommeil dernièrement, pas de vraies pauses.", pts: { depleted: 2 } },
      { t: "Porte fermée, mais je fixe quand même l'écran.", pts: { overwhelmed: 1, avoider: 1 } },
      { t: "Un dossier plein de brouillons « presque prêts ».", pts: { perfectionist: 2 } }
    ]},
    { q: "Si aujourd'hui se passait bien, à quoi cela ressemblerait-il vraiment ?", options: [
      { t: "J'ai fait une version imparfaite et inachevée, puis je suis passé à autre chose.", pts: { perfectionist: 2 } },
      { t: "J'ai choisi une petite partie et j'ai simplement commencé.", pts: { overwhelmed: 2 } },
      { t: "J'ai envoyé ou montré quelque chose avant de pouvoir douter de moi.", pts: { avoider: 2 } },
      { t: "J'ai rangé mon téléphone et terminé un vrai bloc de concentration.", pts: { distracted: 2 } },
      { t: "J'ai fait quelque chose, même pendant dix minutes.", pts: { depleted: 2 } }
    ]}
  ],
  lessons: {
    overwhelmed: [
      { title: "Réduisez-la jusqu'à l'absurde", teaching: "Quand une tâche paraît énorme, votre cerveau ne démarre pas — non par faiblesse, mais parce qu'il ne trouve pas de premier pas assez petit pour s'y accrocher. Il ne voit que la montagne entière.", action: "Découpez la tâche du jour jusqu'à ce que le premier pas semble presque trop petit pour compter. Faites uniquement ce pas." },
      { title: "Une tâche, une ligne", teaching: "Le sentiment d'être débordé vient souvent du fait de garder toute la liste en tête à la fois, en désordre. Ce fouillis mental épuise avant même d'avoir commencé.", action: "Notez uniquement la toute prochaine action concrète pour une seule tâche — rien d'autre — et faites-la." },
      { title: "Le démarrage de deux minutes", teaching: "Commencer est la partie coûteuse de toute tâche, pas la faire. Une fois en mouvement, l'élan fait une bonne partie du travail à votre place.", action: "Réglez une minuterie de deux minutes. Travaillez sur la tâche jusqu'à ce qu'elle sonne, puis arrêtez ou continuez — à vous de choisir." },
      { title: "Choisissez celle qui débloque le reste", teaching: "Toutes les tâches d'une liste n'ont pas le même poids. Souvent, une seule, une fois terminée, en facilite ou en supprime plusieurs autres.", action: "Trouvez cette tâche dans votre liste aujourd'hui, et faites-la avant tout le reste." },
      { title: "Sortez-le de votre tête", teaching: "Une liste non définie qui vit dans votre tête occupe de l'énergie mentale même quand vous n'y travaillez pas activement.", action: "Passez cinq minutes à tout déverser de votre esprit sur papier ou dans des notes — sans tri, sans correction." },
      { title: "Le corps avant l'esprit", teaching: "Le débordement se manifeste souvent dans le corps — poitrine serrée, respiration courte — avant même de devenir une pensée cohérente. Une courte réinitialisation physique peut débloquer la situation.", action: "Levez-vous, prenez dix respirations lentes, puis rasseyez-vous et faites un petit pas." },
      { title: "Dites ce que vous avez terminé", teaching: "Quand la tâche entière n'est pas finie, il est facile de ne pas célébrer la partie qui l'est. Mais votre cerveau a besoin de cette petite reconnaissance pour continuer demain.", action: "Après le pas d'aujourd'hui, notez exactement ce que vous avez terminé — même si cela semble petit." }
    ],
    perfectionist: [
      { title: "Terminé vaut mieux que parfait", teaching: "Votre cerveau considère une fin imparfaite comme plus dangereuse qu'un brouillon jamais terminé. C'est l'inverse — c'est la version inachevée qui vous coûte réellement.", action: "Réglez une minuterie de dix minutes. Produisez une première version brute et non peaufinée d'une petite partie. Arrêtez quand la minuterie sonne, quoi qu'il arrive." },
      { title: "La règle des quatre-vingts pour cent", teaching: "La majeure partie de la valeur d'un travail existe bien avant qu'il soit peaufiné. Passé un certain point, l'effort supplémentaire n'apporte presque rien.", action: "Prenez ce que vous n'arrêtez pas de peaufiner et envoyez-le comme « suffisamment bien ». Notez ce que vous craigniez qu'il se passe." },
      { title: "Faites taire le critique pendant l'écriture", teaching: "Votre critique intérieur n'a pas sa place à l'étape de création — il n'intervient qu'à la révision, jamais avant qu'une première version existe.", action: "Rédigez une section sans corriger ni effacer. Écrivez-la simplement, aussi brute soit-elle." },
      { title: "Nommez la peur sous le vernis", teaching: "Le perfectionnisme n'est presque jamais une question de qualité — il vous protège d'une peur précise, comme paraître incompétent ou être critiqué.", action: "Terminez cette phrase par écrit : « Si ce n'est pas parfait, j'ai peur que les gens pensent ___. »" },
      { title: "Décidez d'abord ce que « terminé » signifie", teaching: "Si vous ne définissez pas « terminé » avant de commencer, vous le déciderez sur le moment — précisément quand vos exigences sont les plus élevées et les plus difficiles à satisfaire.", action: "Avant de commencer, écrivez trois points qui définissent ce qu'est « terminé » pour aujourd'hui. Arrêtez-vous là." },
      { title: "Laissez une chose être médiocre exprès", teaching: "Tolérer l'imperfection est une compétence, et les compétences ont besoin d'être pratiquées sur un terrain à faible enjeu avant de tenir sous pression.", action: "Choisissez aujourd'hui une tâche à faible enjeu et faites-la à soixante-dix pour cent de qualité, délibérément." },
      { title: "Comptez les tâches finies, pas la qualité", teaching: "Pendant un moment, essayez de compter combien de choses vous terminez plutôt que leur qualité. Vous optimisiez probablement le mauvais indicateur.", action: "Notez aujourd'hui une chose terminée — sans note de qualité, juste le fait que c'est fait." }
    ],
    avoider: [
      { title: "Nommez ce que vous protégez", teaching: "L'évitement est rarement de la paresse. En général, il protège quelque chose — votre image de vous-même, votre confort, votre sentiment de compétence.", action: "Écrivez une phrase : « En évitant cela, je me protège de ___. »" },
      { title: "Faites mal la version effrayante", teaching: "Une exposition petite et répétée à une tâche redoutée réduit la peur plus vite que d'attendre que la confiance arrive d'abord.", action: "Faites aujourd'hui la plus petite version possible de la tâche que vous évitez, même si le résultat n'est pas bon." },
      { title: "Séparez le résultat de votre valeur", teaching: "Qu'une tâche se passe mal ne porte pas de verdict sur qui vous êtes — même si cela peut sembler ainsi sur le moment.", action: "Écrivez la tâche, puis terminez : « Même si cela se passe mal, cela ne signifie pas ___ sur moi. »" },
      { title: "Réduisez les enjeux exprès", teaching: "Traiter une tentative comme un brouillon plutôt que « la vraie chose » enlève une vraie pression, et c'est souvent la pression qui vous garde bloqué.", action: "Dites-vous — à voix haute si possible — « ce n'est qu'un essai brouillon », puis commencez." },
      { title: "Demandez-vous ce que coûte vraiment le pire scénario", teaching: "Les peurs laissées vagues restent immenses. Nommer précisément le pire résultat réaliste les réduit presque toujours.", action: "Écrivez le pire résultat réaliste de la tâche du jour, et une façon dont vous vous en remettriez." },
      { title: "Empruntez le regard de quelqu'un d'autre", teaching: "L'évitement grandit silencieusement dans l'isolement. En parler à une personne de confiance a tendance à en briser l'emprise.", action: "Montrez ou parlez à une personne de confiance de la tâche que vous évitez aujourd'hui." },
      { title: "Faites-le avec la peur", teaching: "Attendre de se sentir prêt avant d'agir inverse l'ordre des choses — la confiance suit généralement l'action, pas l'inverse.", action: "Faites la tâche du jour sans attendre que la peur disparaisse d'abord." }
    ],
    distracted: [
      { title: "Éloignez ce qui est à portée", teaching: "La volonté perd presque toujours contre la proximité. Si une distraction est à portée de main, vous finirez par la saisir.", action: "Éloignez physiquement votre téléphone ou votre principale distraction avant de commencer à travailler." },
      { title: "Un onglet, une tâche", teaching: "Passer d'une tâche à l'autre coûte plus de concentration et de temps qu'il n'y paraît sur le moment — chaque changement a un coût caché.", action: "Fermez tous les onglets ou applications sauf celui dont vous avez besoin, pour un bloc de travail complet." },
      { title: "Repérez la dérive, ne la combattez pas", teaching: "L'attention s'égare — c'est normal. La compétence n'est pas de l'empêcher, mais de la remarquer tôt et de revenir sans se juger.", action: "Chaque fois que vous remarquez votre attention dériver aujourd'hui, pensez simplement « je dérive », et revenez doucement. Sans vous en vouloir." },
      { title: "Construisez une clôture de vingt minutes", teaching: "Les sprints courts et chronométrés fonctionnent avec votre capacité d'attention, au lieu de lui demander plus qu'elle ne peut donner.", action: "Travaillez un bloc de vingt minutes avec une minuterie visible, puis prenez une vraie pause, délibérément." },
      { title: "Rendez la partie ennuyeuse moins ennuyeuse", teaching: "La distraction vient souvent d'un manque de stimulation, pas d'une faiblesse. Ajouter un peu de défi ou de jeu peut retenir l'attention mieux que la forcer.", action: "Transformez le bloc de travail d'aujourd'hui en petit jeu — courez contre la montre, ou essayez de battre votre série de concentration d'hier." },
      { title: "Aménagez l'environnement une bonne fois", teaching: "Décider sur le moment épuise la volonté. Décider à l'avance — bloqueurs, téléphone dans une autre pièce — supprime complètement la décision.", action: "Mettez en place un bloqueur, une règle ou une barrière physique aujourd'hui, avant d'en avoir vraiment besoin." },
      { title: "Remarquez ce qui vous a attiré", teaching: "Comprendre vos déclencheurs précis — certaines applications, l'ennui, les notifications — facilite grandement l'aménagement de votre environnement.", action: "À la fin du travail d'aujourd'hui, notez ce qui a attiré votre attention, le cas échéant." }
    ],
    depleted: [
      { title: "L'énergie avant l'effort", teaching: "Forcer à travers l'épuisement uniquement par volonté vous épuise plus vite. Parfois, le geste le plus utile est de restaurer l'énergie d'abord.", action: "Avant de travailler, faites une chose qui vous restaure — de l'eau, de la nourriture, une courte marche — puis réévaluez la tâche." },
      { title: "Ajustez la tâche à votre énergie", teaching: "Ajustez la taille de la tâche du jour à votre capacité réelle actuelle, pas à celle que vous avez les bons jours.", action: "Choisissez la plus petite version possible de la tâche du jour, et arrêtez-vous là une fois faite." },
      { title: "Le repos compte comme un progrès", teaching: "La récupération n'est pas une pause dans le cycle de travail — elle en fait partie. Une production durable a besoin à la fois d'effort et de vrai repos.", action: "Prévoyez une vraie pause aujourd'hui, et prenez-la sans culpabilité ni négociation." },
      { title: "Vérifiez d'abord les bases", teaching: "Le sommeil, l'alimentation et le mouvement affectent la motivation plus que l'état d'esprit. Cela vaut la peine de les vérifier avant de blâmer la volonté.", action: "Notez honnêtement votre sommeil, votre alimentation et votre activité physique du jour, avant de juger votre motivation." },
      { title: "Baissez la barre à « je me suis présenté »", teaching: "Les jours d'épuisement, la réussite n'est pas la qualité du résultat — c'est le fait de se présenter du tout. C'est une vraie victoire, mesurable.", action: "Aujourd'hui, « terminé » signifie simplement que vous avez ouvert la tâche et êtes resté dessus cinq minutes." },
      { title: "Demandez-vous ce qui vous épuise vraiment", teaching: "Parfois, l'épuisement n'a rien à voir avec la tâche devant vous — c'est une inquiétude, un conflit, ou un poids venant d'ailleurs.", action: "Notez tout ce qui, lié à la tâche ou non, vous épuise silencieusement aujourd'hui." },
      { title: "Protégez un rituel de récupération", teaching: "Choisissez une seule habitude de récupération non négociable et défendez-la comme un vrai rendez-vous — car elle en fonctionne comme un.", action: "Choisissez un rituel de récupération — marche, musique, étirements — et faites-le aujourd'hui quoi qu'il arrive." }
    ]
  },
  legal: {
    about: {
      title: "À propos",
      body: [
        "J'ai créé TheNextBit parce que la procrastination dirigeait silencieusement mes journées — pas de façon spectaculaire, juste les petites choses qui glissaient sans cesse : le message que je comptais envoyer, l'habitude que je voulais reprendre, le dossier « je m'en occuperai plus tard » qui n'était jamais traité.",
        "Ce que je voulais n'était pas une autre liste de tâches. Je voulais comprendre <em>pourquoi</em> je continuais à bloquer, car ce n'est presque jamais la même raison deux fois — certains jours c'est la peur, d'autres c'est simplement trop à la fois, d'autres je suis tout simplement à plat. Et au lieu d'une vague promesse de « faire mieux », je voulais un petit pas suivant, honnête. C'est de là que vient le nom : pas tout le projet, pas le plan parfait. Juste le prochain petit bout.",
        "Une bonne partie de ce que j'évitais s'est révélée être du désordre — pas seulement physique, mais aussi mental. Trop de choses à moitié commencées à la fois, trop de décisions non prises, trop de choses non résolues au fond de mon esprit. Découper une journée en une petite partie réalisable a été la façon la plus honnête que j'ai trouvée pour y faire face.",
        "TheNextBit n'est pas conçu par un expert en productivité. C'est le travail de quelqu'un qui traverse encore tout ça, un jour et une petite action à la fois — et j'espère que ce sera utile pour vous aussi, quelle que soit votre version d'être bloqué."
      ],
      contactHeading: "Des questions ou des retours ?",
      contactText: "J'aimerais sincèrement les entendre. Écrivez-moi à"
    },
    terms: {
      title: "Conditions d'utilisation",
      updated: "Dernière mise à jour : août 2026",
      intro: "En utilisant TheNextBit, vous acceptez les conditions ci-dessous. Si vous n'êtes pas d'accord, merci de ne pas utiliser l'application.",
      sections: [
        { h: "1. Qu'est-ce que TheNextBit", p: "TheNextBit est un outil gratuit et autonome qui propose un court quiz, des leçons quotidiennes et un suivi d'habitudes visant à réduire la procrastination. Il est destiné à un usage personnel et informel." },
        { h: "2. Ce que ce n'est pas", p: "TheNextBit n'est ni une thérapie, ni un coaching, ni un conseil professionnel d'aucune sorte. L'application ne diagnostique ni ne traite quoi que ce soit et ne prétend rien guérir. Voir la page Avertissement et limites pour en savoir plus." },
        { h: "3. Votre utilisation de l'application", p: "Vous êtes libre d'utiliser TheNextBit à des fins personnelles. Vous acceptez de ne pas copier, revendre ou republier le contenu ou le code de l'application comme étant le vôtre, et de ne pas l'utiliser d'une manière qui pourrait l'endommager, la désactiver ou y interférer." },
        { h: "4. Vos données", p: "Aucun compte n'est requis. Vos résultats de quiz, votre série et vos réflexions sont stockés localement dans votre propre navigateur. Vous êtes responsable de votre appareil et de votre navigateur — voir la Politique de confidentialité pour tous les détails." },
        { h: "5. Aucune garantie", p: "Les habitudes et circonstances de chacun sont différentes. TheNextBit ne promet aucun résultat spécifique, et son utilisation se fait à votre discrétion et à vos risques." },
        { h: "6. Modifications de ces conditions", p: "Ces conditions peuvent être mises à jour de temps à autre. Continuer à utiliser l'application après une modification signifie que vous acceptez les conditions mises à jour." },
        { h: "7. Contact", p: "Des questions sur ces conditions ? Écrivez-nous à" }
      ]
    },
    privacy: {
      title: "Politique de confidentialité",
      updated: "Dernière mise à jour : août 2026",
      lede: "Version courte : nous ne collectons pas vos données. Tout ce que vous saisissez reste sur votre propre appareil.",
      sections: [
        { h: "Ce que nous stockons", p: "Vos résultats de quiz, votre type de procrastination, votre série et toute réflexion que vous rédigez sont enregistrés via le stockage local de votre navigateur (localStorage). Ces données vivent uniquement sur votre appareil, dans votre navigateur — elles ne sont jamais envoyées à un serveur, et nous ne les voyons jamais." },
        { h: "Ce que nous ne faisons pas", list: ["Aucun compte ni inscription requis", "Aucun cookie", "Aucun script d'analyse ou de suivi", "Aucune publicité", "Aucune vente ni partage de données avec des tiers, puisqu'aucune n'est collectée en premier lieu"] },
        { h: "Effacer vos données", p: "Vous pouvez tout effacer à tout moment via le bouton « Réinitialiser toute la progression » dans l'application, ou en effaçant les données du site pour TheNextBit dans votre navigateur. Ces deux actions suppriment définitivement votre résultat de quiz, votre série et vos réflexions — nous ne pouvons pas les récupérer, puisque nous n'en avions jamais de copie." },
        { h: "Changer d'appareil ou de navigateur", p: "Comme vos données vivent uniquement dans un navigateur, elles n'apparaîtront pas automatiquement sur un autre appareil ou navigateur. Chacun démarre son propre parcours à zéro." },
        { h: "Modifications de cette politique", p: "Si cette politique change — par exemple, si une future version de l'application ajoute des comptes ou une synchronisation optionnelle — nous mettrons à jour cette page pour refléter exactement ce qui est collecté et pourquoi." },
        { h: "Contact", p: "Des questions sur votre confidentialité ? Écrivez-nous à" }
      ]
    },
    disclaimer: {
      title: "Avertissement et limites",
      updated: "Dernière mise à jour : août 2026",
      sections: [
        { h: "Pas un conseil professionnel", p: "TheNextBit est un outil éducatif d'auto-assistance construit autour de techniques cognitivo-comportementales courantes contre la procrastination. Ce n'est pas un conseil, un diagnostic ou un traitement médical, psychologique ou thérapeutique, et cela ne remplace pas les soins d'un professionnel qualifié." },
        { h: "Si la procrastination ressemble à plus que de la procrastination", p: "Parfois, ce qui ressemble à de la procrastination est lié à quelque chose de plus lourd — une humeur basse persistante, l'épuisement, l'anxiété, ou autre chose qui mérite d'être pris au sérieux. Si cela vous ressemble, envisagez de parler à un médecin ou à un thérapeute agréé. Cette application peut accompagner ce type de soutien, mais ne peut pas le remplacer." },
        { h: "Aucune garantie de résultat", p: "Les habitudes, la charge de travail et les circonstances de chacun sont différentes. Utiliser TheNextBit ne garantit pas que vous terminerez vos tâches, construirez une série ou changerez une habitude précise — les résultats dépendent entièrement de vous." },
        { h: "Utilisation à vos propres risques", p: "TheNextBit est fourni « tel quel », sans garantie d'aucune sorte. Dans toute la mesure permise par la loi, TheNextBit et son créateur ne sont pas responsables de toute perte, dommage ou résultat — y compris la perte de données — découlant de votre utilisation de l'application." },
        { h: "Vos données, votre appareil", p: "Comme la progression est stockée uniquement dans votre navigateur (voir la Politique de confidentialité), effacer les données de votre navigateur, changer d'appareil ou rencontrer des problèmes de navigateur peut supprimer définitivement votre progression enregistrée. Nous ne pouvons pas la restaurer." },
        { h: "Modifications de cette page", p: "Cet avertissement peut être mis à jour à mesure que l'application évolue. Continuer à l'utiliser après une mise à jour signifie que vous acceptez la version en vigueur." },
        { h: "Contact", p: "Des questions à ce sujet ? Écrivez-nous à" }
      ]
    }
  }
},

/* ===================== FILIPINO ===================== */
ph: {
  meta: {
    title: "TheNextBit — isang maliit na hakbang sa isang pagkakataon",
    description: "Isang araw-araw na coach laban sa procrastination. Sagutan ang 90-segundong quiz, kumuha ng personalized na 14-day na track, at panatilihing hindi napuputol ang iyong chain."
  },
  ui: {
    heroEyebrow: "90-segundong quiz &middot; 14-araw na track",
    heroTitleHtml: "Tigilan na ang paghula kung bakit<br>ka <em>stuck.</em>",
    heroLede: "Ang procrastination ay hindi lang iisang problema — lima itong magkakaibang problema na parehas lang ang itsura. Alamin kung alin talaga ang sa'yo, at makakuha ng isang maliit, magagawang hakbang araw-araw hanggang hindi na mapuputol ang chain mo.",
    takeQuiz: "Sagutan ang quiz →",
    howItWorks: "Paano ito gumagana",
    step1Strong: "Anim na mabilisang tanong",
    step1Rest: "ang magsasabi kung anong klaseng pagka-stuck ang meron ka.",
    step2Strong: "Isang maikling lesson bawat araw",
    step2Rest: "— totoong technique, kasama ang isang maliit na aksyon na kaya mong tapusin.",
    step3Strong: "Isang chain na hindi mo puputulin.",
    step3Rest: "I-mark na tapos na ang araw, panoorin lumaki ang streak mo, bumalik bukas.",
    exit: "Lumabas",
    questionCount: "Tanong {n} sa {total}",
    back: "← Bumalik",
    yourType: "Ang iyong procrastination type",
    startTrack: "Simulan ang track ko →",
    retakeQuiz: "Ulitin ang quiz",
    retakeConfirm: "Ang pag-uulit ng quiz ay magsisimula ng bagong track. Nananatiling saved ang log mo. Ituloy?",
    trackLabel: "{type} track &middot; Araw {n}",
    streakActive: "🔥 {n}-araw na streak",
    streakStart: "Simulan ang streak mo ngayon",
    todaysLesson: "Lesson ngayong araw",
    tinyAction: "Maliit na aksyon",
    reflectionLabel: "Ano ang naging hadlang ngayong araw, kung meron?",
    reflectionPlaceholder: "Optional — sapat na ang isang pangungusap.",
    markDone: "I-mark na tapos ang araw",
    doneNote: "✓ Naitakda na ang link ngayong araw. Kita tayo bukas.",
    tabToday: "Ngayon",
    tabInsights: "Mga Insight",
    yourLog: "Ang log mo",
    daysDone: "Mga araw na natapos",
    currentStreak: "Kasalukuyang streak",
    bestStreak: "Pinakamahabang streak",
    trackPrefix: "Track:",
    logEmpty: "Wala pang naka-log — tapusin ang maliit na aksyon ngayong araw para simulan ang chain.",
    noReflection: "Walang naka-log na reflection.",
    resetAll: "I-reset ang lahat ng progress",
    resetConfirm: "Buburahin nito ang resulta ng quiz mo, streak, at lahat ng naka-log na reflection. Hindi na ito mababawi. I-reset lahat?",
    backToApp: "← Bumalik sa app",
    themeToggle: "Palitan ang theme",
    languageToggle: "Wika",
    languageDisclaimer: "Ang mga salin ay AI-generated at maaaring may mga error. Ang orihinal na wika ng TheNextBit ay English. Ang data at entries mo ay palaging ipinapakita nang eksaktong tulad ng pagkakapasok mo nito."
  },
  footer: {
    about: "Tungkol Dito",
    contact: "Makipag-ugnayan",
    terms: "Mga Tuntunin ng Paggamit",
    privacy: "Patakaran sa Privacy",
    disclaimer: "Paalala at Limitasyon",
    copyright: "&copy; 2026 DashCraftCo &middot; TheNextBit"
  },
  typeOrder: ["overwhelmed", "perfectionist", "avoider", "distracted", "depleted"],
  types: {
    overwhelmed: { label: "Overwhelmed", summary: "Hindi naman nakakatakot ang gawain — sobra lang siyang laki para makakita ka ng unang hakbang. Ang track mo ay tungkol sa pagpapaliit dito hanggang sa halos hindi mo na maiiwasang simulan." },
    perfectionist: { label: "Perfectionist", summary: "Hindi mo iniiwasan ang trabaho — iniiwasan mo ang imperpektong bersyon nito. Ang track mo ay tungkol sa sadyang pagtapos nang hindi perpekto, para hindi na kabahan ang pagtatapos." },
    avoider: { label: "Avoider", summary: "May takot sa ilalim ng gawaing ito na hinuhusgahan ka o hindi ka aabot sa inaasahan. Ang track mo ay tungkol sa pagbaba ng stakes at paggawa bago pa makapagsalita ang takot." },
    distracted: { label: "Distracted", summary: "Hindi naman sira ang atensyon mo — nauunahan lang ito ng mas madadaling bagay sa paligid. Ang track mo ay tungkol sa pag-aayos ng paligid mo para hindi na kailangan ang willpower para makapag-focus." },
    depleted: { label: "Depleted", summary: "Hindi ito problema sa disiplina — naubusan ka lang ng enerhiya. Ang track mo ay tungkol sa pag-akma ng gawain sa totoong lakas mo, at pagturing sa pahinga bilang progress din." }
  },
  quiz: [
    { q: "Tinitingnan mo ang to-do list mo. Ano talaga ang nangyayari?", options: [
      { t: "Tinititigan ko ang pinakamalaking item at wala akong ginagawa.", pts: { overwhelmed: 2 } },
      { t: "Nagbubukas na lang ako ng limang ibang tab.", pts: { distracted: 2 } },
      { t: "Paulit-ulit kong inaayos ang unang linya hanggang tama na.", pts: { perfectionist: 2 } },
      { t: "Gusto ko na lang... magpahinga.", pts: { depleted: 2 } }
    ]},
    { q: "Isipin mo ang gawaing iniiwasan mo ngayon. Ano ang totoo tungkol dito?", options: [
      { t: "Hindi ko talaga alam kung saan magsisimula.", pts: { overwhelmed: 2 } },
      { t: "Natatakot akong baka hindi sapat kagaling nito.", pts: { perfectionist: 1, avoider: 1 } },
      { t: "Baka may makakita nito at humusga sa resulta.", pts: { avoider: 2 } },
      { t: "Nakakainip lang, at laging lumalayo ang isip ko.", pts: { distracted: 2 } }
    ]},
    { q: "Ano ang nangyayari bago mo iwasan ang isang bagay?", options: [
      { t: "Sumisikip ang dibdib ko — naiisip ko 'paano kung mabigo ako.'", pts: { avoider: 2 } },
      { t: "Pagod na ako kahit hindi pa nga ako nagsisimula.", pts: { depleted: 2 } },
      { t: "May notification na nakakaakit sa akin, at sinusundan ko ito.", pts: { distracted: 2 } },
      { t: "Naiimagine kong gawin ito nang perpekto, tapos na-freeze ako.", pts: { perfectionist: 2 } }
    ]},
    { q: "Ano ang sinasabi mo sa sarili mo pagkatapos mong ipagpaliban ang isang bagay?", options: [
      { t: "\"Tamad lang talaga ako.\"", pts: { depleted: 1, avoider: 1 } },
      { t: "\"Kailangan ko ng isang araw pa para maayos itong maplano.\"", pts: { perfectionist: 2 } },
      { t: "\"Na-distract lang ako, wala nang iba.\"", pts: { distracted: 2 } },
      { t: "\"Sobrang dami — hindi ko alam saang parte magsisimula.\"", pts: { overwhelmed: 2 } }
    ]},
    { q: "Alin sa mga ito ang pinakamalapit sa kasalukuyan mong setup?", options: [
      { t: "Nasa tabi ang phone, sampung tabs bukas.", pts: { distracted: 2 } },
      { t: "Kulang sa tulog, walang tunay na break.", pts: { depleted: 2 } },
      { t: "Nakasara ang pinto, pero titig pa rin ako sa screen.", pts: { overwhelmed: 1, avoider: 1 } },
      { t: "Isang folder na puno ng 'halos tapos na' drafts.", pts: { perfectionist: 2 } }
    ]},
    { q: "Kung maganda ang takbo ng araw na ito, ano talaga ang itsura nito?", options: [
      { t: "Gumawa ako ng hindi perpekto at hindi kumpletong bersyon, tapos nagpatuloy na lang.", pts: { perfectionist: 2 } },
      { t: "Pumili ako ng isang maliit na parte at basta na lang sinimulan.", pts: { overwhelmed: 2 } },
      { t: "Nagpadala o nagpakita ako ng isang bagay bago pa ako mag-alinlangan.", pts: { avoider: 2 } },
      { t: "Inilagay ko ang phone ko at natapos ang isang tunay na focus block.", pts: { distracted: 2 } },
      { t: "May nagawa ako, kahit sampung minuto lang.", pts: { depleted: 2 } }
    ]}
  ],
  lessons: {
    overwhelmed: [
      { title: "Paliitin hanggang hindi na katakot-takot", teaching: "Kapag pakiramdam mo napakalaki ng isang gawain, hindi nagsisimula ang utak mo — hindi dahil mahina ka, kundi dahil wala itong nakikitang unang hakbang na sapat na kaliit para hawakan. Ang buong bundok lang ang nakikita nito.", action: "Hatiin ang gawain ngayong araw hanggang halos masyado na itong maliit para mabilang. Yun lang na hakbang ang gawin." },
      { title: "Isang gawain, isang linya", teaching: "Madalas ang overwhelm ay galing sa pagdadala ng buong listahan sa isip mo, walang ayos. Nakakapagod na ang mental clutter na iyon kahit wala ka pang nagagawa.", action: "Isulat lang ang kasunod na aksyon para sa isang gawain — wala nang iba — at gawin ito." },
      { title: "Ang dalawang-minutong simula", teaching: "Ang pagsisimula ang pinakamahal na parte ng anumang gawain, hindi ang paggawa nito. Kapag gumagalaw ka na, ang momentum ang gumagawa ng malaking parte ng trabaho para sa'yo.", action: "Mag-set ng timer na dalawang minuto. Trabahuhin ang gawain hanggang tumunog ito, tapos ihinto o ipagpatuloy — desisyon mo na." },
      { title: "Piliin ang gawaing magbubukas ng iba", teaching: "Hindi pantay ang bigat ng lahat ng gawain sa listahan. Karaniwan, isa lang, kapag natapos, ay nagpapadali o nag-aalis ng ilang iba pa.", action: "Hanapin ang gawaing iyon sa listahan mo ngayon, at gawin ito bago ang lahat." },
      { title: "Ilabas ito sa isip mo", teaching: "Ang listahang hindi malinaw na nasa isip mo ay kumukuha ng mental na espasyo kahit hindi mo pa ito ginagawa.", action: "Maglaan ng limang minuto para ibuhos lahat ng nasa isip mo sa papel o notes — walang ayos, walang edit." },
      { title: "Katawan bago isip", teaching: "Madalas nagpapakita ang overwhelm sa katawan — sikip ng dibdib, mababaw na paghinga — bago pa ito maging maliwanag na kaisipan. Ang maikling physical reset ay puwedeng makapagpalaya sa freeze.", action: "Tumayo, huminga nang mabagal nang sampung beses, tapos umupo ulit at gumawa ng isang maliit na hakbang." },
      { title: "Sabihin kung ano ang natapos mo", teaching: "Kapag hindi pa tapos ang buong gawain, madaling hindi ipagdiwang ang parteng tapos na. Pero kailangan ng utak mo ang maliit na pagkilalang iyon para magpatuloy bukas.", action: "Pagkatapos ng hakbang ngayong araw, isulat mismo kung ano ang natapos mo — kahit gaano ito kaliit." }
    ],
    perfectionist: [
      { title: "Mas maganda ang tapos kaysa perpekto", teaching: "Itinuturing ng utak mo na mas mapanganib ang imperpektong pagtatapos kaysa sa walang katapusang draft. Baliktad ito — ang hindi natapos na bersyon ang talagang nagpapabayad sa'yo.", action: "Mag-set ng sampung-minutong timer. Gumawa ng magaspang, hindi pa pino na unang bersyon ng isang maliit na parte. Ihinto pagtunog ng timer, kahit ano pa mangyari." },
      { title: "Ang walumpung-porsyentong panuntunan", teaching: "Karamihan sa halaga ng isang trabaho ay nabubuo bago pa ito mapino. Lagpas sa isang punto, halos wala nang idinaragdag ang extra na pagsisikap.", action: "Kunin ang bagay na palagi mong pino-perfect at ipadala o i-submit ito bilang 'sapat na.' Isulat kung ano ang kinatatakutan mong mangyayari." },
      { title: "Patahimikin ang critic habang gumagawa", teaching: "Walang lugar ang inner critic mo sa stage ng paggawa — turn nito lang sa revision, hindi bago pa magkaroon ng unang bersyon.", action: "Gumawa ng draft ng isang seksyon nang walang edit o backspace. Isulat lang, kahit magaspang." },
      { title: "Ngalanan ang takot sa likod ng pagpino", teaching: "Karamihan sa perfectionism ay hindi tungkol sa kalidad — pinoprotektahan ka nito mula sa isang partikular na takot, tulad ng mukhang hindi husay o pagpuna.", action: "Tapusin ang pangungusap na ito sa sulat: 'Kung hindi ito perpekto, natatakot akong isipin ng iba ___.'" },
      { title: "Unahin munang tukuyin ang kahulugan ng 'tapos na'", teaching: "Kung hindi mo tinukoy ang 'tapos na' bago magsimula, itatakda mo ito sa oras mismo — kung saan pinakamataas at pinakamahirap tugunan ang standards mo.", action: "Bago magsimula, isulat ang tatlong bullet point na tumutukoy sa 'tapos na' para ngayong araw. Doon huminto." },
      { title: "Hayaang maging katamtaman lang ang isang bagay, sadya", teaching: "Ang pagtanggap sa imperfection ay isang kasanayan, at kailangan ng practice ng mga kasanayan sa low-stakes na sitwasyon bago ito magtagumpay sa presyon.", action: "Pumili ng isang low-stakes na gawain ngayon at gawin ito sa pitumpung-porsyentong kalidad, nang sadya." },
      { title: "Bilangin ang natapos, hindi ang kalidad", teaching: "Sa ngayon, subukang bilangin kung ilan ang natapos mo sa halip na kung gaano kagaling ang mga ito. Malamang mali ang bagay na sinusukat mo.", action: "I-log ang isang natapos na bagay ngayon — walang quality rating, basta tapos na ito." }
    ],
    avoider: [
      { title: "Ngalanan kung ano ang pinoprotektahan mo", teaching: "Bihira lang tamad ang dahilan ng pag-iwas. Karaniwan, may pinoprotektahan itong bagay — ang imahe mo sa sarili, ang comfort mo, ang pakiramdam mong may kakayahan ka.", action: "Isulat ang isang pangungusap: 'Sa pag-iwas dito, pinoprotektahan ko ang aking sarili mula sa ___.'" },
      { title: "Gawin ang nakakatakot na bersyon, kahit hindi maganda", teaching: "Ang maliit, paulit-ulit na exposure sa nakakatakot na gawain ay mas mabilis na nagpapababa ng takot kaysa sa paghihintay na dumating muna ang confidence.", action: "Gawin ngayon ang pinakamaliit na posibleng bersyon ng gawaing iniiwasan mo, kahit hindi ito maganda ang resulta." },
      { title: "Ihiwalay ang resulta sa halaga mo bilang tao", teaching: "Ang hindi maganda ang takbo ng isang gawain ay hindi hatol tungkol sa kung sino ka — kahit ganoon ang pakiramdam sa sandali.", action: "Isulat ang gawain, tapos tapusin: 'Kahit masama ang takbo nito, hindi ibig sabihin ay ___ ako.'" },
      { title: "Ibaba ang stakes nang sadya", teaching: "Ang pagturing sa isang pagsubok bilang draft, hindi bilang 'ang totoong bagay,' ay nag-aalis ng tunay na presyon, at ang presyon ang madalas dahilan kung bakit stuck ka.", action: "Sabihin sa sarili mo — nang malakas kung kaya mo — 'ito ay isang magaspang na subok lang,' tapos magsimula." },
      { title: "Tanungin kung ano talaga ang halaga ng worst case", teaching: "Ang takot na hindi malinaw ay nananatiling napakalaki. Ang paglinaw ng aktwal na pinakamasamang totoong resulta ay halos palaging nagpapaliit dito.", action: "Isulat ang aktwal na pinakamasamang makatotohanang resulta ng gawain ngayon, at isang paraan kung paano ka babangon mula rito." },
      { title: "Manghiram ng mata ng iba", teaching: "Ang pag-iwas ay tahimik na lumalaki sa pag-iisa. Ang pagsasabi sa isang taong pinagkakatiwalaan tungkol sa hindi tapos na bagay ay madalas nagsisira sa kapit nito.", action: "Ipakita o sabihin sa isang taong pinagkakatiwalaan tungkol sa gawaing iniiwasan mo ngayon." },
      { title: "Gawin ito kahit natatakot", teaching: "Ang paghihintay na maging handa bago kumilos ay baliktad na ang pagkakasunod-sunod — karaniwang sumusunod ang confidence sa aksyon, hindi ang kabaliktaran.", action: "Gawin ang gawain ngayong araw nang hindi hinihintay na mawala muna ang takot." }
    ],
    distracted: [
      { title: "Alisin ang abot-kamay", teaching: "Palaging natatalo ang willpower sa lapit. Kung nasa abot-kamay ang distraction, sa huli ay aabutin mo rin ito.", action: "Ilayo mismo ang phone mo o pangunahing distraction bago magsimulang magtrabaho." },
      { title: "Isang tab, isang gawain", teaching: "Ang paglipat-lipat sa pagitan ng gawain ay kumukuha ng mas maraming focus at oras kaysa sa pakiramdam sa sandali — bawat lipat ay may nakatagong gastos.", action: "Isara ang lahat ng tab o app maliban sa kailangan mo, para sa isang buong work block." },
      { title: "Mahuli ang pagkakalayo, huwag labanan", teaching: "Nawawala ang atensyon — normal lang iyon. Ang kasanayan ay hindi ang pigilan ito, kundi ang mapansin nang maaga at bumalik nang walang paghusga sa sarili.", action: "Sa tuwing mapapansin mong nawawala ang atensyon mo ngayon, isipin lang na 'nailagalag,' at bumalik nang maayos. Walang paghusga sa sarili." },
      { title: "Gumawa ng dalawampung-minutong bakod", teaching: "Ang maikli, may-oras na sprints ay tumatakbo kasabay ng attention span mo sa halip na hingin ito nang higit pa sa kaya nitong ibigay.", action: "Magtrabaho sa isang dalawampung-minutong block na may nakikitang timer, tapos kumuha ng tunay at sadyang break." },
      { title: "Gawing hindi nakakainip ang nakakainip na parte", teaching: "Kadalasan ang distraction ay understimulation, hindi kahinaan. Ang pagdaragdag ng kaunting hamon o laro ay mas nakakapanghawak ng atensyon kaysa sa pagpilit.", action: "Gawing maliit na laro ang work block ngayon — makipagpaligsahan sa oras, o subukang talunin ang focus streak mo kahapon." },
      { title: "Ayusin ang paligid nang isang beses lang", teaching: "Ang pagdedesisyon sa oras mismo ay nauubos ang willpower. Ang pagdedesisyon nang maaga — mga blocker, phone sa ibang kuwarto — ay ganap na tumatanggal sa desisyon.", action: "Mag-set up ng isang blocker, panuntunan, o physical na hadlang ngayon, bago mo pa talaga kailanganin ang willpower." },
      { title: "Mapansin kung ano ang nag-akit sa'yo", teaching: "Ang pag-unawa sa mga espesipikong trigger mo — ilang apps, boredom, notifications — ay nagpapadali sa pag-ayos ng paligid mo laban dito.", action: "Sa katapusan ng trabaho ngayong araw, isulat kung ano ang nag-akit sa atensyon mo, kung meron man." }
    ],
    depleted: [
      { title: "Enerhiya bago ang pagsisikap", teaching: "Ang pagpupumilit sa gitna ng depletion gamit lang ang willpower ay mas mabilis kang mauubusan. Minsan ang pinakamakabuluhang gawin ay ang muling pagpuno ng enerhiya muna.", action: "Bago magtrabaho, gumawa ng isang bagay na nagpapabalik-lakas sa'yo — tubig, pagkain, maikling lakad — tapos suriin ulit ang gawain." },
      { title: "Iakma ang gawain sa enerhiya mo", teaching: "Iakma ang laki ng gawain ngayong araw sa aktwal mong kasalukuyang kakayahan, hindi sa kakayahan mo sa magandang araw.", action: "Piliin ang pinakamaliit na posibleng bersyon ng gawain ngayon, at doon huminto kapag tapos na." },
      { title: "Ang pahinga ay bahagi rin ng progress", teaching: "Ang recovery ay hindi isang pahinga mula sa work cycle — bahagi ito nito. Ang sustainable na output ay nangangailangan ng pareho — pagsisikap at tunay na pahinga.", action: "Mag-iskedyul ng tunay na break ngayon, at kunin ito nang walang guilt o negotiation." },
      { title: "Suriin muna ang mga pangunahing bagay", teaching: "Ang tulog, pagkain, at galaw ay nakakaapekto sa motivation nang higit pa sa mindset. Sulit na alamin muna ito bago sisihin ang willpower.", action: "Isulat nang tapat ang tulog, pagkain, at galaw ngayong araw, bago husgahan ang motivation mo." },
      { title: "Ibaba ang bar sa 'nagpakita ako'", teaching: "Sa mga araw na depleted ka, ang tagumpay ay hindi ang kalidad ng output — ito ang pagpapakita mismo. Isang totoo at mabibilang na panalo iyon.", action: "Ngayon, ang 'tapos na' ay nangangahulugan lang na binuksan mo ang gawain at nanatili dito ng limang minuto." },
      { title: "Tanungin kung ano talaga ang nag-uubos sa'yo", teaching: "Minsan ang depletion ay wala talagang kinalaman sa gawaing nasa harap mo — isang alalahanin ito, conflict, o bigat na galing sa ibang bagay.", action: "Isulat ang anumang bagay, kaugnay man sa gawain o hindi, na tahimik na nag-uubos sa enerhiya mo ngayon." },
      { title: "Protektahan ang isang recovery ritual", teaching: "Pumili ng isang non-negotiable na recovery habit at ipagtanggol ito parang totoong appointment — dahil ganoon din naman ang function nito.", action: "Pumili ng isang recovery ritual — lakad, musika, stretching — at gawin ito ngayon kahit ano pa ang mangyari." }
    ]
  },
  legal: {
    about: {
      title: "Tungkol Dito",
      body: [
        "Ginawa ko ang TheNextBit dahil tahimik na kinokontrol ng procrastination ang mga araw ko — hindi yung dramatic na klase, mga maliliit lang na bagay na patuloy na nabubuhos: yung message na balak kong ipadala, yung habit na gustong ibalik, yung folder ng \"aayusin ko na lang mamaya\" na hindi na talaga naaayos.",
        "Hindi na naman isa pang to-do list ang gusto ko. Gusto kong maintindihan kung <em>bakit</em> ako palaging na-stuck, dahil bihirang parehas ang dahilan — minsan takot, minsan sobra-sobra lahat sabay-sabay, minsan wala lang talagang lakas. At sa halip na malabo na pangako na \"gagaling na ako,\" gusto ko ng maliit, tapat na susunod na hakbang. Doon nanggaling ang pangalan: hindi ang buong proyekto, hindi ang perpektong plano. Ang susunod na maliit na bahagi lang.",
        "Marami sa iniiwasan ko pala ay clutter — hindi lang physical na klase, kundi mental din. Sobrang dami ng kalahating tapos na bagay, sobrang dami ng desisyong hindi pa nagagawa, sobrang dami ng hindi nalutas na naka-imbak sa isip ko. Ang paghati ng isang araw sa maliit, magagawang piraso ang naging pinaka-tapat na paraan na nahanap ko para harapin ito.",
        "Hindi ginawa ang TheNextBit ng isang productivity expert. Ginawa ito ng taong patuloy pa ring dumadaan dito, isang araw at isang maliit na aksyon sa isang pagkakataon — at umaasa akong maging kapaki-pakinabang din ito sa'yo, anuman ang bersyon mo ng pagiging stuck."
      ],
      contactHeading: "May tanong o feedback?",
      contactText: "Gusto ko talagang marinig ito. Maabot mo ako sa"
    },
    terms: {
      title: "Mga Tuntunin ng Paggamit",
      updated: "Huling na-update: Agosto 2026",
      intro: "Sa paggamit ng TheNextBit, sumasang-ayon ka sa mga tuntuning nasa ibaba. Kung hindi ka sang-ayon, mangyaring huwag gamitin ang app.",
      sections: [
        { h: "1. Ano ang TheNextBit", p: "Ang TheNextBit ay libre at self-guided na tool na nag-aalok ng maikling quiz, araw-araw na lessons, at habit tracker na naglalayong bawasan ang procrastination. Ito ay para sa personal at impormal na gamit." },
        { h: "2. Ano ang hindi ito", p: "Ang TheNextBit ay hindi therapy, coaching, o anumang propesyonal na payo. Hindi ito nagda-diagnose, gumagamot, o nagsasabing may nagagamot. Tingnan ang pahina ng Paalala at Limitasyon para sa karagdagang detalye." },
        { h: "3. Ang paggamit mo sa app", p: "Malaya mong magagamit ang TheNextBit para sa sarili mong personal na layunin. Sumasang-ayon kang hindi kokopyahin, ibebenta, o ire-republish ang content o code ng app bilang sarili mong gawa, at hindi ito gagamitin sa paraang makasisira, makapag-disable, o makakaabala rito." },
        { h: "4. Ang data mo", p: "Walang account na kinakailangan. Ang resulta ng quiz mo, streak, at reflections ay naka-store lokal sa sarili mong browser. Ikaw ang responsable sa sarili mong device at browser — tingnan ang Patakaran sa Privacy para sa buong detalye." },
        { h: "5. Walang garantiya", p: "Magkaiba ang habits at sitwasyon ng bawat tao. Hindi nangangako ang TheNextBit ng anumang tiyak na resulta, at ang paggamit nito ay nasa sarili mong pagpapasya at panganib." },
        { h: "6. Mga pagbabago sa mga tuntuning ito", p: "Ang mga tuntuning ito ay maaaring i-update paminsan-minsan. Ang patuloy na paggamit ng app pagkatapos ng pagbabago ay nangangahulugang sumasang-ayon ka sa na-update na tuntunin." },
        { h: "7. Makipag-ugnayan", p: "May tanong tungkol sa mga tuntuning ito? Makipag-ugnayan sa" }
      ]
    },
    privacy: {
      title: "Patakaran sa Privacy",
      updated: "Huling na-update: Agosto 2026",
      lede: "Maikling bersyon: hindi namin kinukuha ang data mo. Lahat ng ipinapasok mo ay nananatili sa sarili mong device.",
      sections: [
        { h: "Ano ang aming iniimbak", p: "Ang resulta ng quiz mo, procrastination type, streak, at anumang reflections na isinulat mo ay naka-save gamit ang local storage ng browser mo (localStorage). Ang data na ito ay nabubuhay lang sa device mo, sa browser mo — hindi ito ipinapadala sa isang server, at hindi namin ito nakikita." },
        { h: "Ano ang hindi namin ginagawa", list: ["Walang kinakailangang account o sign-up", "Walang cookies", "Walang analytics o tracking scripts", "Walang advertising", "Walang pagbebenta o pagbabahagi ng data sa third parties, dahil wala talagang kinokolekta"] },
        { h: "Pagbura ng data mo", p: "Puwede mong burahin lahat anumang oras gamit ang \"I-reset ang lahat ng progress\" na button sa loob ng app, o sa pagbura ng site data ng browser mo para sa TheNextBit. Ang alinman sa dalawang aksyon ay permanenteng magbubura ng resulta ng quiz mo, streak, at reflections — hindi na namin ito maibabalik, dahil wala naman kaming kopya nito." },
        { h: "Paglipat ng device o browser", p: "Dahil ang data mo ay nabubuhay lang sa isang browser, hindi ito awtomatikong lalabas sa ibang device o browser. Bawat isa ay magsisimula ng sariling bagong track." },
        { h: "Mga pagbabago sa patakarang ito", p: "Kung magbabago ang patakarang ito — halimbawa, kung magdagdag ang susunod na bersyon ng app ng optional na accounts o sync — i-a-update namin ang pahinang ito para tumpak na ipakita kung ano ang kinokolekta at bakit." },
        { h: "Makipag-ugnayan", p: "May tanong tungkol sa privacy mo? Makipag-ugnayan sa" }
      ]
    },
    disclaimer: {
      title: "Paalala at Limitasyon",
      updated: "Huling na-update: Agosto 2026",
      sections: [
        { h: "Hindi propesyonal na payo", p: "Ang TheNextBit ay isang educational at self-help na tool na binuo mula sa karaniwang cognitive-behavioral techniques laban sa procrastination. Hindi ito medikal, sikolohikal, o therapeutic na payo, diagnosis, o gamutan, at hindi ito kapalit ng pag-aalaga ng kwalipikadong propesyonal." },
        { h: "Kung parang higit pa sa procrastination ang nararamdaman mo", p: "Minsan, ang tila procrastination ay konektado sa mas mabigat na bagay — patuloy na mababang mood, burnout, anxiety, o iba pang bagay na sulit pag-isipan nang seryoso. Kung ganito ang nararamdaman mo, mangyaring isaalang-alang na kausapin ang isang doktor o lisensyadong therapist. Ang app na ito ay puwedeng sumama sa ganitong uri ng suporta, pero hindi ito kapalit nito." },
        { h: "Walang garantiya sa resulta", p: "Magkaiba ang habits, workload, at sitwasyon ng bawat tao. Ang paggamit ng TheNextBit ay hindi nangangako na matatapos mo ang mga gawain, makakabuo ng streak, o mababago ang isang partikular na habit — ang resulta ay nakadepende nang lubusan sa iyo." },
        { h: "Gamitin sa sarili mong panganib", p: "Ibinibigay ang TheNextBit nang \"as is,\" walang anumang warranty. Sa pinakamalawak na saklaw na pinapahintulutan ng batas, hindi mananagot ang TheNextBit at ang gumawa nito para sa anumang pagkalugi, pinsala, o resulta — kasama ang nawalang data — na nagmumula sa paggamit mo ng app." },
        { h: "Ang data mo, ang device mo", p: "Dahil ang progress ay naka-store lang sa browser mo (tingnan ang Patakaran sa Privacy), ang pagbura ng data ng browser, paglipat ng device, o problema sa browser ay maaaring permanenteng magtanggal ng saved progress mo. Hindi na namin ito maibabalik." },
        { h: "Mga pagbabago sa pahinang ito", p: "Ang paalalang ito ay maaaring i-update habang nagbabago ang app. Ang patuloy na paggamit pagkatapos ng update ay nangangahulugang sumasang-ayon ka sa kasalukuyang bersyon." },
        { h: "Makipag-ugnayan", p: "May tanong tungkol dito? Makipag-ugnayan sa" }
      ]
    }
  }
}

};

if (typeof module !== "undefined") { module.exports = I18N; }
