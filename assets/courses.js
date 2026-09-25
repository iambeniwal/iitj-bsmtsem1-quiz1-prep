/* ===================================================================
   Quiz schedule — IIT Jodhpur B.S. in Management & Technology, Sem 1
   Source: official LMS exam schedule, read 26 September 2026.
   Every quiz is Quiz 1, delivered on the LMS with dual-device
   proctoring and a 15-minute buffer before the start time.
   =================================================================== */
window.COURSES = [
  {
    slug: "foundations-of-computing",
    name: "Foundations of Computing",
    start: "2026-09-26T17:00:00+05:30",
    end:   "2026-09-26T17:20:00+05:30",
    join:  "2026-09-26T16:45:00+05:30",
    durationMin: 20,
    questions: 60,          // stated by the lecturer in Live Lecture 3
    questionsConfirmed: true,
    ready: true
  },
  {
    slug: "economic-business-history",
    name: "Economic & Business History",
    start: "2026-09-27T12:15:00+05:30",
    end:   "2026-09-27T12:30:00+05:30",
    join:  "2026-09-27T12:00:00+05:30",
    durationMin: 15,
    questions: 45,          // inferred at 3/min — not confirmed by faculty
    questionsConfirmed: false,
    ready: false
  },
  {
    slug: "algorithmic-thinking-in-business",
    name: "Algorithmic Thinking in Business",
    start: "2026-10-03T16:45:00+05:30",
    end:   "2026-10-03T17:05:00+05:30",
    join:  "2026-10-03T16:30:00+05:30",
    durationMin: 20,
    questions: 60,
    questionsConfirmed: false,
    ready: false
  },
  {
    slug: "financial-accounting",
    name: "Financial Accounting",
    start: "2026-10-03T17:30:00+05:30",
    end:   "2026-10-03T18:00:00+05:30",
    join:  "2026-10-03T17:15:00+05:30",
    durationMin: 30,
    questions: 90,
    questionsConfirmed: false,
    ready: false
  },
  {
    slug: "statistics-for-managers",
    name: "Statistics for Managers",
    start: "2026-10-04T12:15:00+05:30",
    end:   "2026-10-04T12:35:00+05:30",
    join:  "2026-10-04T12:00:00+05:30",
    durationMin: 20,
    questions: 60,
    questionsConfirmed: false,
    ready: false
  },
  {
    slug: "principles-of-marketing",
    name: "Principles of Marketing",
    start: "2026-10-04T13:00:00+05:30",
    end:   "2026-10-04T13:30:00+05:30",
    join:  "2026-10-04T12:45:00+05:30",
    durationMin: 30,
    questions: 90,
    questionsConfirmed: false,
    ready: false
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
  // "4d 5h 38m" / "42m" / "live now" / "done"
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
  }
};
