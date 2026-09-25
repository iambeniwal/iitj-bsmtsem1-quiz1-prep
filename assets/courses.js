/* ===================================================================
   Quiz schedule — IIT Jodhpur B.S. in Management & Technology, Sem 1

   Every figure below is taken from that course's official "Quiz 1"
   LMS announcement (read 26 September 2026), not from lecture audio.
   Where a lecturer said something different in class, the course's
   own page says so.

   All six: LMS delivery, dual-device proctoring, a 15-minute join
   buffer, best 2 of 3 quizzes, and negative marking of -0.25.
   =================================================================== */
window.MARKING = {
  correct: 1,
  incorrect: -0.25,
  unattempted: 0,
  note: "+1 correct · −0.25 incorrect · 0 unattempted"
};

window.COURSES = [
  {
    slug: "foundations-of-computing",
    name: "Foundations of Computing",
    lecturer: "Dr. Aman Pathak",
    start: "2026-09-26T17:00:00+05:30",
    end:   "2026-09-26T17:20:00+05:30",
    join:  "2026-09-26T16:45:00+05:30",
    durationMin: 20,
    questions: 60,
    marks: 60,
    weightPct: 15,
    weightNote: "best 2 of 3 quizzes",
    types: "MCQ",
    scope: "Lectures 1–15, to Working with Lists Part 2",
    ready: true
  },
  {
    slug: "economic-business-history",
    name: "Economic & Business History",
    lecturer: "Dr. Manu Kanchan",
    start: "2026-09-27T12:15:00+05:30",
    end:   "2026-09-27T12:30:00+05:30",
    join:  "2026-09-27T12:00:00+05:30",
    durationMin: 15,
    questions: 40,
    marks: 40,
    weightPct: 20,
    weightNote: "best 2 of 3 · 40% total",
    types: "MCQ",
    scope: "Lectures 1–14, to Live Lecture 3",
    ready: true
  },
  {
    slug: "algorithmic-thinking-in-business",
    name: "Algorithmic Thinking in Business",
    lecturer: "Dr. Deepak Kumar Saxena",
    start: "2026-10-03T16:45:00+05:30",
    end:   "2026-10-03T17:05:00+05:30",
    join:  "2026-10-03T16:30:00+05:30",
    durationMin: 20,
    questions: 40,
    marks: 40,
    weightPct: 20,
    weightNote: "best 2 of 3 · 40% total",
    types: "MCQ",
    scope: "Lectures 1–11 + Live 3 — linear data structures only",
    ready: true
  },
  {
    slug: "financial-accounting",
    name: "Financial Accounting",
    lecturer: "Dr. Manisha Yadav",
    start: "2026-10-03T17:30:00+05:30",
    end:   "2026-10-03T18:00:00+05:30",
    join:  "2026-10-03T17:15:00+05:30",
    durationMin: 30,
    questions: 40,
    marks: 40,
    weightPct: 20,
    weightNote: "best 2 of 3 · 40% total",
    types: "MCQ, True/False",
    scope: "Lectures 1–15, to Trial Balance Part 2",
    ready: true
  },
  {
    slug: "statistics-for-managers",
    name: "Statistics for Managers",
    lecturer: "Dr. Deepak Srivastav",
    start: "2026-10-04T12:15:00+05:30",
    end:   "2026-10-04T12:35:00+05:30",
    join:  "2026-10-04T12:00:00+05:30",
    durationMin: 20,
    questions: 40,
    marks: 40,
    weightPct: 20,
    weightNote: "best 2 of 3 · 40% total",
    types: "MCQ",
    scope: "Topics 1–7, to Introduction to Probability 2",
    ready: true
  },
  {
    slug: "principles-of-marketing",
    name: "Principles of Marketing",
    lecturer: "Dr. Anuj Pal Kapoor",
    start: "2026-10-04T13:00:00+05:30",
    end:   "2026-10-04T13:30:00+05:30",
    join:  "2026-10-04T12:45:00+05:30",
    durationMin: 30,
    questions: 20,
    marks: 20,
    weightPct: 20,
    weightNote: "best 2 of 3 · 40% total",
    types: "MCQ",
    scope: "All topics covered to 27 September 2026",
    ready: true
  }
];

/* ---------- shared time helpers ---------- */
window.QT = {
  fmtDate(iso){
    return new Date(iso).toLocaleDateString("en-GB",
      {weekday:"short", day:"numeric", month:"short", timeZone:"Asia/Kolkata"});
  },
  fmtTime(iso){
    return new Date(iso).toLocaleTimeString("en-GB",
      {hour:"numeric", minute:"2-digit", hour12:true, timeZone:"Asia/Kolkata"})
      .replace(/\s?([ap])m/i, (_,p)=>" "+p.toUpperCase()+"M");
  },
  until(startIso, endIso){
    const now = Date.now(), s = new Date(startIso), e = new Date(endIso || startIso);
    if (now >= e) return {state:"past",  text:"done"};
    if (now >= s) return {state:"live",  text:"live now"};
    const d = s - now;
    const days = Math.floor(d/864e5), hrs = Math.floor(d/36e5)%24, min = Math.floor(d/6e4)%60;
    let text;
    if (days > 0)      text = `${days}d ${hrs}h ${min}m`;
    else if (hrs > 0)  text = `${hrs}h ${min}m`;
    else               text = `${min}m`;
    return {state: days === 0 ? "today" : days <= 7 ? "soon" : "later", text};
  },
  isSameISTDay(iso){
    const opts = {timeZone:"Asia/Kolkata", year:"numeric", month:"2-digit", day:"2-digit"};
    return new Date(iso).toLocaleDateString("en-CA",opts) ===
           new Date().toLocaleDateString("en-CA",opts);
  },
  secsPerQ(c){ return Math.round(c.durationMin*60 / c.questions); }
};
