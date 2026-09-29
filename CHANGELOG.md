# Changelog

Notable changes to the Semester 1 quiz-prep sheets.

**Corrections get their own heading.** Where a change contradicted something the
sheets previously told you, it is listed under *Corrected* rather than buried in
*Changed* — in two cases the site had been giving advice that would have cost
marks, and those entries are the ones worth re-reading.

Dates are IST. The site deploys straight from `main`, so there are no version
numbers: whatever is live is the top entry below.

---

## 2026-09-29

### Added
- **DIKW ladder drill** in Foundations of Computing — 14 questions under their own
  filterable topic. These ask you to *name the rung* rather than recall a case
  number: the Netflix and bank scenarios stepped rung by rung so only the rung
  differs between stems, both of the commonly missed stems restated with every
  distractor's rung named, and the two transitions on their own.
  Built after Quiz 1 results showed three of four dropped marks were the same
  confusion — reading the ladder one rung low.
- A **rung test** in the DIKW notes: ask what a statement *adds*, not what it is
  about. Bare value → Data. Counted or given a time window → Information.
  Explains why → Knowledge. Picks an action and accepts a cost → Wisdom.
- The **NT-kernel question** in Software & OS, where "Linux" is the reflex answer
  and is right only about servers.

Foundations of Computing 104 → 119 questions; **549** across the six courses.

---

## 2026-09-26

### Added
- **All six course sheets**, in three waves: Foundations of Computing first, then
  Economic & Business History, then Algorithmic Thinking in Business, Financial
  Accounting, Statistics for Managers and Principles of Marketing. 534 questions
  at the end of the day.
- **`LICENSE`** — a three-way split, because three kinds of material sit in this
  repo with three different owners: MIT for the site code, CC BY-NC-SA 4.0 for the
  revision notes and question bank, and the underlying IIT Jodhpur course material
  **explicitly not licensed here**. Plus a no-affiliation notice.
- Author credit and LinkedIn link in every footer.
- **Google Analytics** on the hosted site — page views only, no user IDs and no
  custom dimensions. Stripped from the offline `dist/` builds at build time and
  disabled on `localhost`, so a downloaded copy never phones home. Footer says so.
- `build-standalone.py`, which inlines any course into a single self-contained
  file that opens with no server and no connection.

### Changed
- **Restructured from one page into a six-course site.** Shared engine in
  `assets/` (schedule, styling, renderer), one `data.js` per course, and a hub
  sorted by whichever quiz is next. Adding a course is now one file, and a fix to
  the engine or the styling reaches all six at once.

### Corrected
- **Negative marking, previously missed entirely.** All six quizzes are **+1
  correct, −0.25 wrong, 0 blank**. No lecturer mentioned this in any of the 81
  lectures — it came from the official LMS quiz announcements. The sheets had
  until this point advised guessing freely, **which was wrong**. Every sheet now
  carries an expected-value table: a blind four-way guess is worth only +0.06,
  while eliminating one option makes guessing clearly worthwhile at +0.17.
- **Quiz weighting is not uniform.** Foundations of Computing is 15% per quiz; the
  other five are 20%. All six count best 2 of 3.
- **Syllabus scope is narrower than the obvious reading on four courses**, per each
  announcement's attached syllabus document: Foundations ends at *Working with
  Lists Part 2* (tuples are out); Economic & Business History ends at Live Lecture
  3; Algorithmic Thinking is **linear data structures only** — trees and graphs are
  out despite being released before the cut-off; Financial Accounting ends at
  *Trial Balance Part 2*. Statistics for Managers is **genuinely disputed** — the
  official document and the lecturer disagree — so both readings are covered and
  the disagreement is flagged on the page rather than silently resolved.
- **Foundations of Computing quiz time: 8:00 AM → 5:00–5:20 PM IST.** The lecturer
  said 8 AM in Live Lecture 3; the official schedule said 17:00. The schedule was
  right. Where a lecturer and the LMS disagree, trust the LMS.

### Source note
The **LMS announcements API** turned out to carry the authoritative question
counts, durations, marking scheme, question types and syllabus documents for every
course — and contradicted the lectures on several of them. It was found late.
Everything under *Corrected* above came from it.
