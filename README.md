# Semester 1 Quiz Prep

Revision sheets for the six Quiz 1 papers in **IIT Jodhpur's B.S. in Management &
Technology, Semester 1**. Each course page carries an exam brief, a syllabus map,
topic-by-topic notes drawn from that course's lectures, a trap list, and a timed
question drill whose pacer matches the real seconds-per-question.

All six are complete: **570 questions** across the six courses, built from every
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
CHANGELOG.md                   dated history; corrections that reversed advice
LICENSE                        the three-way split — see Licence below
robots.txt                     Disallow: / — the site is unlisted, not secret
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

## Changelog

Full history is in [`CHANGELOG.md`](CHANGELOG.md). Most recent:

- **[2.7.0] — 2026-10-01** — **Economic & Business History gains the two things Quiz 1 proved it was missing.** A **Why the guild system declined** topic plus 7 questions under a filterable **Guild decline** topic — the sheet had ten guild questions and none on the decline, and "merchant capitalism" appeared nowhere in the course data, so the term is now defined and sits alongside putting-out and the Industrial Revolution as the three named forces, with a warning about the I/II/III combination format. Plus a 14-question **Dates & numbers** drill that deliberately separates invention years from riot years — the wrong answer given for the spinning jenny, 1753, is itself a real date in the course (the mob attack on John Kay's premises). EBH 109 → 130 questions; **570** across the six courses.
- **[2.6.1] — 2026-09-29** — Added `CHANGELOG.md` and this section, following the Dragonglass AI Operating System conventions: Keep a Changelog format, semantic versions, and a README "most recent" list updated in the same commit as the changelog itself.
- **[2.6.0] — 2026-09-29** — **DIKW ladder drill** in Foundations of Computing: 14 questions under their own filterable topic that ask you to *name the rung* rather than recall a case number — the Netflix and bank scenarios stepped rung by rung so only the rung differs between stems, both commonly missed stems restated with every distractor's rung named, and the two transitions given questions of their own. Built after Quiz 1 showed three of four dropped marks were one confusion: reading the ladder one rung low. Also added a rung test to the notes (ask what a statement *adds*, not what it is about) and the NT-kernel question to Software & OS. Foundations 104 → 119 questions; **549** across the six courses.
- **[2.5.0] — 2026-09-26** — **Google Analytics** on the hosted site via a shared `assets/analytics.js` — page views only, no user IDs, no custom dimensions. Stripped from every `dist/` build at build time and disabled on `file:` and `localhost`, so a downloaded offline copy never phones home. Privacy line added to every footer.
- **[2.4.0] — 2026-09-26** — **`LICENSE`**: a three-way split for three kinds of material with three different owners — MIT for the site code, CC BY-NC-SA 4.0 for the revision notes and question bank, and the underlying IIT Jodhpur course material **explicitly not licensed here**. Plus author credit and a LinkedIn link in every footer.
- **[2.3.0] — 2026-09-26** — The four remaining sheets (Algorithmic Thinking in Business, Financial Accounting, Statistics for Managers, Principles of Marketing). All six courses built, **534 questions**.
- **[2.2.0] — 2026-09-26** — **Fixed, from the official LMS quiz announcements.** All six quizzes use **negative marking** (+1 / −0.25 / 0), mentioned in none of the 81 lectures — the sheets had until then advised **guessing freely, which was wrong**, and every sheet now carries an expected-value table. Quiz weighting is **not** uniform (Foundations 15%, the other five 20%). Syllabus scope is narrower than the obvious reading on four courses, and genuinely disputed on Statistics, where the official document and the lecturer disagree.
- **[2.1.0] — 2026-09-26** — **Economic & Business History** sheet, the first course on the shared engine and the proof that the `data.js` contract holds for a different shape of material.
- **[2.0.0] — 2026-09-26** — **Restructured from a single page into a six-course site**: shared engine in `assets/`, one `data.js` per course, hub sorted by next quiz, plus `build-standalone.py` for offline copies. **Breaking** — the original single-page URL is gone.
- **[1.0.1] — 2026-09-26** — **Fixed** the Foundations quiz time, 8:00 AM → 17:00–17:20 IST. The lecturer said 8 AM in Live Lecture 3; the official schedule said 17:00 and was right.
- **[1.0.0] — 2026-09-26** — Baseline: the Foundations of Computing Quiz 1 revision sheet as a single page.

### Changelog update rule

Every meaningful change — new or edited course content, scope or schedule corrections,
tooling, structure — is recorded in the **same commit** that makes it:

1. A dated entry in [`CHANGELOG.md`](CHANGELOG.md) under a new `## [x.y.z] — YYYY-MM-DD`
   heading with the right subheading (**Added / Changed / Removed / Fixed**). Bump
   **patch** for a fix or tweak, **minor** for new course content or a new section,
   **major** for a restructure that breaks existing links.
2. This **Changelog** list updated to match, and the **Layout** file tree updated if a
   file was added — the tree is the discoverability index, so a file missing from it is
   effectively hidden.

Anything that reverses advice an earlier version gave goes under **Fixed** and says so
outright. Two entries already do, and someone may have revised from the old version.

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
