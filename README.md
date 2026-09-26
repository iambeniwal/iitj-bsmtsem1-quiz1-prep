# Semester 1 Quiz Prep

Revision sheets for the six Quiz 1 papers in **IIT Jodhpur's B.S. in Management &
Technology, Semester 1**. Each course page carries an exam brief, a syllabus map,
topic-by-topic notes drawn from that course's lectures, a trap list, and a timed
question drill whose pacer matches the real seconds-per-question.

All six are complete: **534 questions** across the six courses, built from every
in-scope lecture summary, full transcript and slide deck on the LMS.

**All six quizzes use negative marking** — +1 for a correct answer, −0.25 for a
wrong one, 0 if left blank — and every course counts only its best 2 of 3 scores.
Exam facts come from each course's official LMS quiz announcement and its attached
syllabus document, which in several cases contradict what the lecturer said in
class. Where they disagree, the page says so.

**These are student-made study aids, not official IIT Jodhpur or Masai School course
material.** Always check the LMS for the authoritative syllabus and quiz details.

Compiled by **Rahul Beniwal** — [LinkedIn](https://www.linkedin.com/in/iambeniwal/)

## Layout

```
index.html                     hub — all six courses, sorted by what's next
assets/
  courses.js                   the quiz schedule + shared date helpers
  sheet.css                    design tokens and every component
  sheet.js                     renders a course page from its data.js
  stub.js                      placeholder for a course not built yet
  analytics.js                 GA4 page views — hosted site only
<course-slug>/
  index.html                   thin shell — loads the shared assets
  data.js                      everything specific to that course
build-standalone.py            inline a course into one shareable file
```

Adding a course means writing one `data.js` and dropping in the shell. Nothing
else changes, and a fix to the engine or the styling reaches all six at once.

## The `data.js` contract

`data.js` sets `window.COURSE`:

| Key | What it is |
|---|---|
| `slug` | must match the folder name and the entry in `assets/courses.js` |
| `eyebrow`, `heading`, `sub` | masthead copy (`heading` may contain HTML) |
| `briefTag`, `briefLede`, `briefHtml` | the exam-brief section |
| `mapLede`, `syllabusNote` | the syllabus-map section |
| `lectures` | `[number, title, subtitle, "rec" \| "live"]` |
| `weights` | `[topic, percent]` — bars are scaled to the largest |
| `sections` | `[{id, title, navLabel, tag, lede, topics:[{t, src, h}]}]` |
| `traps` | `[heading, explanation, one-line fix]` |
| `questions` | see below |
| `drillLede`, `footer` | copy |

A question:

```js
{ t:"Topic name",          // groups it in the filter and the missed-by-topic report
  o:true,                  // optional — came from the course's own slides
  multi:true,              // optional — more than one correct answer
  q:"Question text",
  c:["Option A","Option B","Option C","Option D"],
  a:[1],                   // indices into c
  w:"Why this is the answer." }
```

Timings, durations and question counts live in `assets/courses.js`, not in
`data.js`, so the hub and the course pages can never disagree.

## Running it

```bash
python3 -m http.server 4520
```

Then open <http://localhost:4520>. To produce single-file copies for sharing:

```bash
python3 build-standalone.py
```

Each becomes one self-contained `dist/*.html` that opens with no server and no
network — Google Fonts are the only external request, and the fallback stacks
handle it offline.

## Analytics

The hosted site counts page views with Google Analytics 4 (`assets/analytics.js`).
It is page views only: no user IDs, no custom dimensions, nothing that identifies
an individual reader.

It does not run in two places. `build-standalone.py` strips the tag from every
`dist/` file, and the script itself bails out on `file:` and on `localhost`, so an
offline copy never phones home and local editing never shows up as traffic.

## Licence

This repository is **not** covered by a single licence. Three kinds of material sit
here with three different owners — see [`LICENSE`](LICENSE) for the full notice.

| Material | Licence |
|---|---|
| Site code — `assets/*`, `build-standalone.py`, the page shells | **MIT** |
| Revision notes, trap lists and the question bank | **[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)** |
| Lecture content, faculty examples, direct quotations, and questions reproduced from a course slide deck | **Not licensed here** — property of IIT Jodhpur and the respective faculty |

So: share it with classmates freely, adapt it if you credit and share alike, but
don't sell it — and be aware that the underlying course material was never mine
to license in the first place.

Not affiliated with, authorised by or endorsed by IIT Jodhpur or Masai School.
