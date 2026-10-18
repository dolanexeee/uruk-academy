# Uruk Academy — Phase 2 Report: The Complete English Book

**Delivered:** 2026-10-18 · **Live:** https://uruk-academy.vercel.app (HTTP 200)
**Repo:** https://github.com/dolanexeee/uruk-academy — commit `1c821bb` (pushed to `main`)
**Live bundle:** `index-BPuaAlQC.js` — **480,425 bytes**, byte-identical to the local
production build (Phase-1-polish live bundle was 318,561 B — replaced, as required).
**Tests:** Playwright **14/14 passed** against the production build (`vite preview`).

Phase 2 completes the English subject: **all 8 units of «English for Iraq» (6th
Preparatory) are playable** at Unit One's standard, plus the full-book capstone.
The stale Phase-1 copy («الوحدة الأولى كاملة الآن، وبقية الوحدات تُبنى تباعًا» and
equivalents in the app footer, README and CONTENT.md) has been replaced everywhere;
the subject header now reads «الكتاب مكتمل» (8 وحدات · 24 درسًا · 122 كلمة مفردات).

## What shipped, per unit

Every content unit = 4 lessons (قراءة / قواعد / مفردات / شرح) + 14-question instant-
feedback quiz + Leitner flashcard deck (the unit's own vocabulary) + timed وزاري exam
(15 questions / 60 marks / 20 min, report by skill) — the exact Unit One pattern.

| Unit | Reading (Lesson 10) | Grammar focus | Vocab | Writing topic in شرح |
|---|---|---|---|---|
| 2 | Security Technology — radar speed guns | Modals & functions + causatives (have/get/make) | 20 | Daily speech functions |
| 3 | Conference Interpreter — Samira | Conditionals (0–3) + cleft sentences | 20 | A job you'd like in the future |
| 5 | Why are holidays so important? | Present perfect simple & continuous | 20 | A really good holiday |
| 6 | Making Money | Passive voice (all tenses) | 20 | Complaint letter to a bank |
| 7 | Using the Library | Future forms (going to / PC / PS / FC / FP / future-in-the-past) | 20 | Studying + working (the writer's story) |

**Revision units (the book's own structure — no fake lessons):**
- **Unit 4** (revises 1–3): mixed review quiz (15q interleaved from U1–U3 pools),
  combined Leitner deck (**62 words**), half-book mock (15q / 60 marks / 25 min,
  report broken down per source unit).
- **Unit 8** (revises 5–7): same construction (60-word deck).

**Capstone «الامتحان الوزاري الشامل»** on the subject page: 25 dedicated questions /
100 marks / 45 minutes drawn from all 8 units (revision units represented by mixed
items), each tagged with its unit — the report breaks the score down **per unit**
alongside the full question-by-question correction.

Engine generalization (no design-language changes): parameterized routes for
lessons/quizzes/decks/exams, a spec-driven Exam view (groupBy skill | unit), a
subject accordion (one unit expanded at a time), whole-book aggregation on Home
and Profile (24 lessons), `deckFor`/`examSpecForUnit`/`capstone` in the registry.

## Verification discipline (CONTENT.md rule)

Every unit's reading facts, grammar focus and vocabulary field were verified
**before** authoring, against the Ministry of Education's published
«Samples of Questions» document (read directly; the 2014 ministry-committee copy
corroborates) plus Iraqi teacher guides for this curriculum. All lesson text is
original writing; no textbook passages were copied. Per-unit sources are recorded
in CONTENT.md («مصادر توثيق الوحدات»). Verified question counts from the samples:
U2 = 14 official questions, U3 = 8, U5 = full set, U6 = 6, U7 = 13 — the lessons'
«حقائق يحبّها الامتحان الوزاري» sections are built from exactly those.

## Tests — 14/14 (exact inventory)

- `tests/academy.spec.ts` — the 6 original Phase-1 tests, all green.
  **One intentional change, disclosed:** the home progress label assertion was
  updated from «تقدّمك في الوحدة الأولى» to «تقدّمك في كتاب الإنجليزية», because the
  strip now tracks the whole book (the P2 requirement). No other P1 assertion touched.
- `tests/p2.spec.ts` — 6 new tests: per-unit smoke for U2/U3/U5/U6/U7 (4 lessons +
  quiz + exam entries each; subject header stats 8/24/122), U3 grammar lesson
  completion with mid-book persistence across reload, U6 quiz full run + score,
  U4 revision hub (honest labels, 15q mixed quiz, 62-word combined deck, SRS write),
  U8 half-book mock with per-unit report, capstone full run (25q, no mid-exam
  feedback, report «من 100» with all-unit breakdown).
- `tests/screenshots.spec.ts` — the original set regenerated (01–08) plus a new P2
  test producing `09-subject-all-units-p2.png`, `10-u3-lesson-p2.png`,
  `11-u4-revision-hub-p2.png`, `12-capstone-exam-p2.png` in `qa/screenshots/`.

Deployment used the established **git-free route** (clean copy without `.git`,
`npx vercel --prod`, account mustafaalshatab-1824) — no GitHub-connection block.
Screenshots are taken against the local production build (the sandbox browser
cannot reach the public domain through the egress proxy); the live deployment
was verified by HTTP 200 + byte-identical bundle instead.

## Honest gaps and limits

1. **Grammar attribution for Units 3 and 5 is teacher-guide level, not a ministry
   unit map.** U3's conditionals are the grammar the ministry samples drill with
   type-naming and pair with the unit's official writing topic; cleft sentences are
   Unit 3's Activity Book strand per Iraqi teacher guides. U5's present perfect
   family is the samples' most-drilled grammar for this band of the book. Reading
   facts for both units are fully ministry-verified; the grammar *assignment to
   the unit* rests on the teacher-material pattern, stated here plainly.
2. **U6 detail level:** the ministry samples verify the questions (saving motives,
   interest, shares & property, pensions, most popular UK investment); the summary
   presents property as «من أشهر الاستثمارات» in prose where the exact superlative
   wording of the textbook could not be re-read line-by-line.
3. **Question formats remain MCQ / true-false only** (inherited Phase-1 limit):
   the real وزاري paper also has written production (essays are *taught* in each
   unit's شرح lesson with structure and model lines, but not auto-graded).
4. **Literature Focus is out of scope:** the book's literature strand («The Swing»
   by Mohammad Khudair, the canary) is not part of the 8-unit lesson structure
   built here and remains a candidate for a future phase.
5. Progress remains per-device localStorage (no accounts/sync) — by design.
6. Other subjects (Mathematics, Physics, Chemistry, Biology, Arabic) remain
   honestly badged «قريبًا» and non-navigable.
