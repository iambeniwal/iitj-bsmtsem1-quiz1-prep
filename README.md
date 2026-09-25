# Semester 1 Quiz Prep

Revision sheets for the six Quiz 1 papers in **IIT Jodhpur's B.S. in Management &
Technology, Semester 1**. Each course page carries an exam brief, a syllabus map,
topic-by-topic notes drawn from that course's lectures, a trap list, and a timed
question drill whose pacer matches the real seconds-per-question.

**These are student-made study aids, not official IIT Jodhpur or Masai School course
material.** Always check the LMS for the authoritative syllabus and quiz details.

## Layout

```
index.html                     hub — all six courses, sorted by what's next
assets/
  courses.js                   the quiz schedule + shared date helpers
  sheet.css                    design tokens and every component
  sheet.js                     renders a course page from its data.js
  stub.js                      placeholder for a course not built yet
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
