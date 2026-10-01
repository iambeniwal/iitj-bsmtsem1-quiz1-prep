# Changelog

All notable changes to the Semester 1 quiz-prep sheets are recorded here.
Format follows [Keep a Changelog](https://keepachangelog.com/); dates are YYYY-MM-DD (IST).

**Corrections are load-bearing in this repo.** Where an entry reverses advice an
earlier version gave — and twice it does — it is filed under **Fixed** and says so
plainly, because anyone who revised from the earlier sheet needs to know what moved.

## [2.7.0] — 2026-10-01

### Added
- **Why the guild system declined** — a new topic in the Guilds section of Economic &
  Business History, plus 7 questions under a filterable **Guild decline** topic. Quiz 1
  asked which forces ended the guilds and the sheet could not answer it: there were ten
  guild questions covering definition, hierarchy, the common box and functions, and
  none on the decline. **"Merchant capitalism" did not appear anywhere in the course
  data**, so the term itself is now defined — merchants, not makers, owning the
  materials and keeping the profit — alongside the putting-out system and the
  Industrial Revolution as the three named forces. Includes a warning about the
  **combination question format** (I / II / III), where under negative marking the
  instinct to drop the statement you are least sure of costs the mark.
- **Dates & numbers** — a 14-question rapid-recall drill for Economic & Business
  History. Quiz 1's other two dropped marks were both date or named-act recall, and the
  wrong year given for the spinning jenny — 1753 — is itself a real date in the course,
  the year a mob attacked **John Kay's** premises. The drill separates invention years
  from riot years deliberately, covers the four inventions in sequence, and flags which
  dates (Cromford Mill 1771, Bridgewater Canal 1761, Lancashire 1779, Arkwright's
  patents 1785) sit in the out-of-scope Lecture 15–16 sections.

Economic & Business History 109 → 130 questions; **570** across the six courses.

## [2.6.1] — 2026-09-29

### Added
- **`CHANGELOG.md`** and the **Changelog** section in `README.md`, following the
  conventions of the Dragonglass AI Operating System: Keep a Changelog format,
  semantic versions, and a "most recent" list in the README kept in step with this
  file in the same commit.

## [2.6.0] — 2026-09-29

### Added
- **DIKW ladder drill** in Foundations of Computing — 14 questions under their own
  filterable topic, which ask you to *name the rung* rather than recall a case
  number. The Netflix and bank scenarios are stepped rung by rung so that only the
  rung differs between stems; both commonly missed stems are restated with every
  distractor's rung named in the explanation; and the two transitions (what turns
  Data into Information, and Information into Knowledge) get questions of their own.
  Built after Quiz 1 results showed three of four dropped marks were a single
  confusion — reading the ladder one rung low, picking the Knowledge description
  when asked about Wisdom and the Information description when asked about Knowledge.
- A **rung test** in the DIKW notes: ask what a statement *adds*, not what it is
  about. Bare value → Data. Counted or given a time window → Information. Explains
  why → Knowledge. Picks an action and accepts a cost → Wisdom. With the trap named:
  every rung's description sounds like the rung beneath it.
- The **NT-kernel question** in Software & OS, where "Linux" is the reflex answer and
  is right only about servers.

Foundations of Computing 104 → 119 questions; **549** across the six courses.

## [2.5.0] — 2026-09-26

### Added
- **Google Analytics 4** on the hosted site via a shared `assets/analytics.js`
  referenced by the seven page shells — page views only, no user IDs and no custom
  dimensions. Two independent exclusions: `build-standalone.py` strips the tag from
  every `dist/` build, and the script itself bails out on `file:` and `localhost`, so
  a downloaded offline copy never phones home and local editing never registers as
  traffic.
- A privacy line in every footer stating what is collected.

## [2.4.0] — 2026-09-26

### Added
- **`LICENSE`** — a three-way split, because three kinds of material sit in this repo
  with three different owners: **MIT** for the site code, **CC BY-NC-SA 4.0** for the
  revision notes and question bank, and the underlying IIT Jodhpur course material
  **explicitly not licensed here**, remaining the property of the institute and the
  respective faculty. Plus a no-affiliation notice. GitHub reports the repo licence as
  "Other", which is the correct outcome — a single-licence badge would misrepresent it.
- Author credit and a LinkedIn link in every footer, shared through `assets/sheet.js`
  so all six course pages inherit it.

## [2.3.0] — 2026-09-26

### Added
- The four remaining sheets — **Algorithmic Thinking in Business**, **Financial
  Accounting**, **Statistics for Managers** and **Principles of Marketing**. All six
  courses now built, **534 questions** in total, drawn from every in-scope lecture
  summary, full transcript and slide deck on the LMS.

## [2.2.0] — 2026-09-26

### Fixed
- **Negative marking, previously missed entirely.** All six quizzes are **+1 correct,
  −0.25 wrong, 0 unattempted**. No lecturer mentioned this in any of the 81 lectures;
  it came from the official LMS quiz announcements. The sheets had until this point
  advised **guessing freely, which was wrong**. Every sheet now carries an
  expected-value table: a blind four-way guess is worth only **+0.06**, while
  eliminating one option makes guessing clearly worthwhile at **+0.17**.
- **Quiz weighting is not uniform.** Foundations of Computing is 15% per quiz; the
  other five are 20%. All six count best 2 of 3.
- **Syllabus scope is narrower than the obvious reading on four courses**, per each
  announcement's attached syllabus document: Foundations ends at *Working with Lists
  Part 2* (tuples are out); Economic & Business History ends at Live Lecture 3;
  Algorithmic Thinking is **linear data structures only** — trees and graphs are out
  despite being released before the cut-off date; Financial Accounting ends at *Trial
  Balance Part 2*. Statistics for Managers is **genuinely disputed** — the official
  document says Topics 1–7, the lecturer said "till chapter 6" — so both readings are
  covered and the disagreement is flagged on the page rather than silently resolved.

### Added
- Authoritative question counts, durations, join times and question types for all six
  papers, centralised in `assets/courses.js` so the hub and the course pages cannot
  disagree.

### Source note
The **LMS announcements API** carries the authoritative facts for every course and
contradicted the lectures on several of them. It was found late. Everything under
**Fixed** above came from it — read it first next semester.

## [2.1.0] — 2026-09-26

### Added
- **Economic & Business History** sheet, the first course built on the shared engine
  and therefore the proof that the `data.js` contract holds for a course with a
  completely different shape of material.

## [2.0.0] — 2026-09-26

### Changed
- **Restructured from a single page into a six-course site.** Shared engine in
  `assets/` (schedule, styling, renderer), one `data.js` per course, and a hub sorted
  by whichever quiz is next. Adding a course became one file, and a fix to the engine
  or the styling now reaches all six at once.
- **Breaking:** the original `Foundations-of-Computing-Quiz1-Revision.html` path is
  gone, replaced by `foundations-of-computing/`. Any link shared before this point is dead.

### Added
- **`build-standalone.py`**, which inlines any course into a single self-contained
  file that opens with no server and no connection — for sharing over WhatsApp or
  email, and for revising on a phone with no signal.

## [1.0.1] — 2026-09-26

### Fixed
- **Foundations of Computing quiz time: 8:00 AM → 17:00–17:20 IST.** The lecturer said
  8 AM in Live Lecture 3; the official schedule said 17:00. The schedule was right.
  Where a lecturer and the LMS disagree, trust the LMS.

## [1.0.0] — 2026-09-26

### Added
- Baseline: the **Foundations of Computing** Quiz 1 revision sheet as a single page —
  exam brief, syllabus map, topic notes, trap list and a timed question drill whose
  pacer matches the real seconds-per-question.
