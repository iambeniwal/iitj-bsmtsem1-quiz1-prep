/* ===================================================================
   Placeholder for a course whose data.js does not exist yet.
   Runs only when sheet.js found no window.COURSE to render.
   =================================================================== */
(function () {
"use strict";
if (window.COURSE) return;                       // real sheet already rendered

const root = document.getElementById("app");
if (!root) return;

const QT = window.QT || {};
const slug = location.pathname.replace(/\/(index\.html)?$/, "").split("/").pop();
const c = (window.COURSES || []).find(x => x.slug === slug);
const esc = s => String(s).replace(/[&<>"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]));

const name = c ? c.name : "This course";
const u    = c && QT.until ? QT.until(c.start, c.end) : null;

root.innerHTML = `
  <header class="mast">
    <a class="backlink" href="../">&larr; All courses</a>
    <div class="eyebrow">IIT Jodhpur &middot; B.S. Management &amp; Technology &middot; Semester 1</div>
    <h1>${esc(name)}<br>Quiz 1 Revision</h1>
    <p class="sub">This sheet has not been built yet. The schedule below is confirmed; the revision content and question drill are still to come.</p>
    ${c ? `<dl class="strip">
      <div class="cell hot"><dt>Quiz date</dt><dd>${QT.fmtDate(c.start)}<small>${QT.fmtTime(c.start)} IST</small></dd></div>
      <div class="cell hot"><dt>${u.state==="past"?"Status":"Time left"}</dt><dd>${u.text}<small>${u.state==="past"?"quiz finished":"to start"}</small></dd></div>
      <div class="cell"><dt>Duration</dt><dd>${c.durationMin} min<small>on the LMS</small></dd></div>
      <div class="cell"><dt>Join from</dt><dd>${QT.fmtTime(c.join)}<small>15-min proctoring buffer</small></dd></div>
      <div class="cell"><dt>Weight</dt><dd>15%<small>best 2 of 3 quizzes</small></dd></div>
    </dl>` : ""}
  </header>

  <div class="stub">
    <h2>Not built yet</h2>
    <p>Once this course's lectures are pulled from the LMS, this page will carry the same
       structure as the others: an exam brief, a syllabus map, topic-by-topic revision notes,
       a trap list, and a timed question drill.</p>
    <p style="margin-top:14px"><a class="btn ghost" href="../" style="text-decoration:none;display:inline-block">Back to all courses</a></p>
  </div>

  ${c && c.questionsConfirmed === false ? `<div class="hubnote">
    <b>Question count unconfirmed.</b> ${c.questions} is an estimate from Dr. Pathak's
    &ldquo;three questions per minute&rdquo; rule, applied to this paper's ${c.durationMin} minutes.
    Other faculty have not stated their counts — check this course's own live session.
  </div>` : ""}

  <footer><p>Student-made study aid, not official IIT Jodhpur or Masai School course material.
  Always check the LMS for the authoritative syllabus and quiz details.</p></footer>`;
})();
