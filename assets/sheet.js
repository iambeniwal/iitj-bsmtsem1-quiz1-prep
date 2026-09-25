/* ===================================================================
   Course revision sheet renderer.
   Builds the whole page from window.COURSE (see any course's data.js)
   plus window.COURSES / window.QT from assets/courses.js.
   =================================================================== */
(function () {
"use strict";

const C = window.COURSE;
const QT = window.QT;
const root = document.getElementById("app");
if (!C || !root) return;

const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const sched = (window.COURSES || []).find(x => x.slug === C.slug) || {};

/* ---------------- page skeleton ---------------- */
const navItems = [
  {id:"brief", label:"Exam brief"},
  {id:"map",   label:"Syllabus map"},
  ...C.sections.map(s => ({id:s.id, label:s.navLabel || s.title})),
  {id:"traps", label:"Traps"},
  {id:"drill", label:`Drill · ${C.questions.length} Q`}
];

root.innerHTML = `
  <header class="mast">
    <a class="backlink" href="../">&larr; All courses</a>
    <div class="eyebrow">${esc(C.eyebrow)}</div>
    <h1>${C.heading}</h1>
    <p class="sub">${C.sub}</p>
    <dl class="strip" id="strip"></dl>
  </header>

  <nav><div class="navrow" id="nav">${
    navItems.map((n,i) => `<button data-go="${n.id}"${i===0?' aria-current="true"':""}>${esc(n.label)}</button>`).join("")
  }</div></nav>

  <section id="brief">
    <div class="sechead"><h2>The exam brief</h2><span class="tag">${esc(C.briefTag)}</span></div>
    <p class="lede">${C.briefLede}</p>
    ${C.briefHtml}
  </section>

  <section id="map">
    <div class="sechead"><h2>Syllabus map</h2><span class="tag">${C.lectures.length} lectures</span></div>
    <p class="lede">${C.mapLede}</p>
    <div class="grid2">
      <div class="card">
        <h4 style="font-family:var(--display);font-size:16px;margin-bottom:6px">Where the marks probably sit</h4>
        <p style="font-size:13.5px;color:var(--ink-3);margin-bottom:10px">Estimated from how much lecture time each topic got. Not official.</p>
        <div id="weights"></div>
      </div>
      <div class="card">
        <h4 style="font-family:var(--display);font-size:16px;margin-bottom:6px">Lecture list</h4>
        <div id="lectures"></div>
      </div>
    </div>
  </section>

  ${C.sections.map(s => `
  <section id="${s.id}">
    <div class="sechead"><h2>${s.title}</h2><span class="tag">${esc(s.tag)}</span></div>
    <p class="lede">${s.lede}</p>
    <div id="s-${s.id}"></div>
  </section>`).join("")}

  <section id="traps">
    <div class="sechead"><h2>The traps</h2><span class="tag">high-yield</span></div>
    <p class="lede">${C.traps.length} distinctions that MCQ writers reach for because the wrong answer is so tempting. If you only have ten minutes before the quiz, read this section.</p>
    <div class="grid2" id="s-traps"></div>
  </section>

  <section id="drill">
    <div class="sechead"><h2>Drill</h2><span class="tag">${C.questions.length} questions</span></div>
    <p class="lede">${C.drillLede}</p>
    <div class="drillbar">
      <select id="filter" aria-label="Filter questions by topic"></select>
      <button class="btn ghost" id="pacer" aria-pressed="false">Pacer: off</button>
      <button class="btn ghost" id="restart">Restart</button>
      <span class="score" id="score">0 / 0</span>
    </div>
    <div class="card" id="qcard"></div>
  </section>

  <footer><p>${C.footer}</p></footer>`;

const $ = s => root.querySelector(s);

/* ---------------- stat strip + countdown ---------------- */
function paintStrip(){
  const u = sched.start ? QT.until(sched.start, sched.end) : null;
  const cells = [
    {k:"Quiz date", v: sched.start ? QT.fmtDate(sched.start) : "—",
     s: sched.start ? QT.fmtTime(sched.start)+" IST" : "", hot:true},
    {k: u && u.state==="past" ? "Status" : "Time left", v: u ? u.text : "—",
     s: u && u.state==="past" ? "quiz finished" : u && u.state==="live" ? "in progress" : "to start", hot:true},
    {k:"Questions", v:`${sched.questions}`, s: sched.types || "MCQ"},
    {k:"Duration", v:`${sched.durationMin||"—"} min`,
     s: sched.durationMin ? `${QT.secsPerQ(sched)} sec / question` : ""},
    {k:"Join from", v: sched.join ? QT.fmtTime(sched.join) : "—", s:"15-min proctoring buffer", hot:true},
    {k:"Weight", v: sched.weightPct ? sched.weightPct+"%" : "—", s: sched.weightNote || "per quiz"},
    {k:"Marking", v:"−0.25", s:"for a wrong answer", hot:true},
    {k:"Syllabus", v: C.scopeShort || "—", s: sched.scope || ""}
  ];
  $("#strip").innerHTML = cells.map(c =>
    `<div class="cell${c.hot?" hot":""}"><dt>${esc(c.k)}</dt><dd>${c.v}<small>${c.s}</small></dd></div>`).join("");
}
paintStrip();
setInterval(paintStrip, 30000);

/* ---------------- weights, lectures, topics, traps ---------------- */
const maxW = Math.max(...C.weights.map(w => w[1]));
$("#weights").innerHTML = C.weights.map(([l,v]) =>
  `<div class="wbar"><span class="lab">${esc(l)}</span><span class="track"><span class="fill" style="width:${v*100/maxW}%"></span></span><span class="num">~${v}%</span></div>`).join("");

$("#lectures").innerHTML = C.lectures.map(([n,t,s,k]) =>
  `<div class="lec"><span class="n">${String(n).padStart(2,"0")}</span><span class="t">${esc(t)}<em>${esc(s)}</em></span><span class="w ${k}">${k==="live"?"live":"rec"}</span></div>`).join("");

C.sections.forEach(sec => {
  const el = root.querySelector("#s-"+sec.id);
  if (el) el.innerHTML = sec.topics.map((it,i) =>
    `<details class="topic"${i===0?" open":""}><summary>${esc(it.t)}<span class="src">${esc(it.src)}</span></summary><div class="tbody">${it.h}</div></details>`).join("");
});

$("#s-traps").innerHTML = C.traps.map(([h,p,f]) =>
  `<div class="trap"><h4>${esc(h)}</h4><p>${esc(p)}</p><div class="fix">&rarr; ${esc(f)}</div></div>`).join("");

/* ---------------- nav ---------------- */
const navBtns = [...root.querySelectorAll("#nav button")];
navBtns.forEach(b => b.addEventListener("click", () => {
  const t = root.querySelector("#"+b.dataset.go);
  if (t) t.scrollIntoView({behavior:"smooth", block:"start"});
}));
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) navBtns.forEach(b =>
    b.setAttribute("aria-current", b.dataset.go === e.target.id ? "true" : "false"));
}), {rootMargin:"-70px 0px -70% 0px"});
navBtns.map(b => root.querySelector("#"+b.dataset.go)).filter(Boolean).forEach(s => io.observe(s));

/* ---------------- drill ---------------- */
const Q = C.questions;
const TOPICS = [...new Set(Q.map(q => q.t))];
const hasOfficial = Q.some(q => q.o);
$("#filter").innerHTML =
  `<option value="">All topics · ${Q.length} questions</option>` +
  TOPICS.map(t => `<option value="${esc(t)}">${esc(t)} · ${Q.filter(q=>q.t===t).length}</option>`).join("") +
  (hasOfficial ? `<option value="__official">From the deck · ${Q.filter(q=>q.o).length}</option>` : "");

const secsPerQ = sched.durationMin && sched.questions
  ? Math.max(5, Math.round(sched.durationMin*60/sched.questions)) : 20;

let pool=[], idx=0, right=0, answered=0, pacer=false, timer=null, left=secsPerQ, missed={};

const shuffle = a => { for (let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };

function build(){
  const f = $("#filter").value;
  pool = f === "__official" ? Q.filter(q=>q.o) : f ? Q.filter(q=>q.t===f) : Q.slice();
  pool = shuffle(pool.slice());
  idx=0; right=0; answered=0; missed={};
  render();
}
const stopTimer = () => { if (timer){ clearInterval(timer); timer=null; } };
function paintClock(){
  const c = $("#clock"); if (!c) return;
  c.textContent = left+"s";
  c.classList.toggle("low", left <= Math.ceil(secsPerQ/4));
}
function startTimer(){
  stopTimer(); if (!pacer) return;
  left = secsPerQ; paintClock();
  timer = setInterval(() => {
    left--; paintClock();
    if (left <= 0){ stopTimer(); const q = pool[idx]; if (q) reveal(q, [], true); }
  }, 1000);
}

function render(){
  stopTimer();
  if (idx >= pool.length) return done();
  const q = pool[idx];
  $("#qcard").innerHTML = `
    <div class="qmeta">
      <span class="qnum">Q${idx+1} / ${pool.length}</span>
      <span class="qtopic${q.o?" official":""}">${q.o ? "from deck" : esc(q.t)}</span>
      ${q.multi ? '<span class="qtopic">select all</span>' : ""}
      ${pacer ? `<span class="clock" id="clock">${secsPerQ}s</span>` : ""}
    </div>
    <p class="qtext">${esc(q.q)}</p>
    <div class="opts">${q.c.map((c,i) =>
      `<button class="opt" data-i="${i}"><span class="k">${"ABCDEF"[i]}</span><span>${esc(c)}</span></button>`).join("")}</div>
    ${q.multi ? '<div style="margin-top:10px"><button class="btn ghost" id="submulti">Submit answer</button></div>' : ""}
    <div id="after"></div>`;
  $("#score").textContent = `${right} / ${answered}`;

  const picked = new Set();
  root.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => {
    if (q.multi){
      const i = +b.dataset.i;
      if (picked.has(i)){ picked.delete(i); b.style.borderColor=""; b.style.background=""; }
      else { picked.add(i); b.style.borderColor="var(--blue)"; b.style.background="var(--blue-soft)"; }
    } else reveal(q, [+b.dataset.i], false);
  }));
  const sm = $("#submulti");
  if (sm) sm.addEventListener("click", () => reveal(q, [...picked], false));
  startTimer();
}

function reveal(q, chosen, timedOut){
  stopTimer();
  const correct = chosen.length === q.a.length && chosen.every(i => q.a.includes(i));
  answered++; if (correct) right++; else missed[q.t] = (missed[q.t]||0)+1;
  root.querySelectorAll(".opt").forEach(b => {
    const i = +b.dataset.i;
    b.disabled = true; b.style.borderColor=""; b.style.background="";
    if (q.a.includes(i)) b.classList.add("right");
    else if (chosen.includes(i)) b.classList.add("wrong");
  });
  const sm = $("#submulti"); if (sm) sm.remove();
  $("#after").innerHTML =
    `<div class="why"><b>${timedOut?"Out of time.":correct?"Correct.":"Not quite."}</b> ${esc(q.w)}</div>
     <div style="margin-top:14px"><button class="btn" id="next">${idx+1>=pool.length?"See results":"Next question"}</button></div>`;
  $("#score").textContent = `${right} / ${answered}`;
  const n = $("#next");
  n.addEventListener("click", () => { idx++; render(); });
  n.focus();
}

function done(){
  const pct = answered ? Math.round(right*100/answered) : 0;
  const weak = Object.entries(missed).sort((a,b) => b[1]-a[1]);
  $("#qcard").innerHTML = `
    <div class="donecard">
      <div class="big">${right} / ${answered}</div>
      <p>${pct}% — ${pct>=85?"exam-ready on this set.":pct>=65?"solid; tighten the weak topics below.":"go back through the topic sections, then run this again."}</p>
      ${weak.length ? `<div class="weak"><h4 style="font-family:var(--display);font-size:14px;margin-bottom:6px">Missed by topic</h4>${
        weak.map(([t,n]) => `<div><span>${esc(t)}</span><span style="font-family:var(--mono);color:var(--bad)">${n}</span></div>`).join("")}</div>` : ""}
      <div style="margin-top:20px"><button class="btn" id="again">Run it again</button></div>
    </div>`;
  $("#again").addEventListener("click", build);
}

$("#filter").addEventListener("change", build);
$("#restart").addEventListener("click", build);
$("#pacer").addEventListener("click", () => {
  pacer = !pacer;
  const b = $("#pacer");
  b.textContent = "Pacer: " + (pacer ? `on · ${secsPerQ}s` : "off");
  b.setAttribute("aria-pressed", String(pacer));
  render();
});

build();
})();
