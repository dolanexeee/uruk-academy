# Stage D — The Complete Chemistry Book · Delivery Report

**Status: DELIVERED & LIVE** — https://uruk-academy.vercel.app ·
repo `dolanexeee/uruk-academy` (commit `58ac046`) ·
live bundle `index-CDMwNFqK.js` == tested local build · HTTP 200 ·
Playwright **36/36**.

## 1. Verified structure (before any authoring)

«الكيمياء للصف السادس العلمي», وزارة التربية / المديرية العامة للمناهج,
**الطبعة العاشرة 1446هـ/2024م** — read directly from a full mirror of the
book (title page, مقدمة, complete فهرس). The مقدمة states «ثمانية فصول»
verbatim. The 9th edition (2023) contents were compared section-by-section
for Ch.1–2 and by chapter titles for Ch.3–8: **identical — no print
merger** (the explicit contrast with Physics' 10→9). All five examined
examination rounds (2025 ×4 + تمهيدي 2026, mlazemna tallies) test exactly
these 8 chapters. Full evidence: `research/chemistry-structure.md`.

The 8 chapters: ١ الثرموداينمك · ٢ الاتزان الكيميائي · ٣ الاتزان الأيوني ·
٤ تفاعلات التأكسد والاختزال والكيمياء الكهربائية · ٥ الكيمياء التناسقية ·
٦ طرائق التحليل الكيميائي · ٧ الكيمياء العضوية للهيدروكاربونات المعوّضة ·
٨ الكيمياء الحياتية.

**Paper frame (tallies):** offered totals 143–149 across the five rounds,
ترك 43–49, scored 100, 3 hours; مسائل ≈ شرحيات (balanced paper). No
اختيارات block is verified for chemistry (that is a physics-paper
feature) — none was invented.

## 2. What was built

Per chapter, the established house standard: 4 lessons (مفهوم → أمثلة
محلولة بخطوات متدرجة → قوانين وخلاصة → تمارين متدرجة), law/definition
flashcards, chapter quiz **12q / 16 marks** (10 MCQ + 2 written with
model answers and rubrics), chapter exam **8q / 60 marks / 45 min**
(4 MCQ×5 + 4 written×10, ≥2 شرحية-style).

| Chapter | Cards | Notes |
|---|---|---|
| 1 الثرموداينمك | 17 | both calorimeter types; Hess direct + indirect; Trouton derived |
| 2 الاتزان الكيميائي | 18 | ICE, Kp=Kc(RT)^Δn, ΔG°=−RT lnK |
| 3 الاتزان الأيوني | 18 | التمذوب (the book's own term), buffers, Ksp |
| 4 التأكسد والاختزال والكيمياء الكهربائية | 18 | ion–electron balancing, E°/ΔG°=−nFE°, Faraday, lead-acid + fuel cells |
| 5 الكيمياء التناسقية | 17 | Werner, EAN drills, naming both directions, VBT + CFT |
| 6 طرائق التحليل الكيميائي | 16 | gravimetric factor, precipitation steps, titration (وزاري ثابت) |
| 7 الكيمياء العضوية | 18 | conversion chains as worked solutions; Tollens/Fehling |
| 8 الكيمياء الحياتية | 16 | شرحيات-majority, as in the real papers |

**Book totals: 8 chapters · 32 lessons · 138 cards · 96 quiz questions ·
64 exam questions.**

**Capstone «الامتحان الوزاري الشامل — الكيمياء»:** 6 numbered questions
with branches mirroring the verified paper grammar (Q1–Q3 two branches,
Q4–Q6 three branch positions); 14 written branches ×10 marks + Q6
branch C = five 1-mark short-definition items from Ch.8 (in place of an
MCQ block, which chemistry papers do not verifiably have); **145 offered
/ ترك 45 / 180 min** (دور ثالث 2025 figures); chapter weights
**20/20/20/20/20/20/20/5 = 145**, every weight inside the verified
five-round tally ranges; مسائل 70 / شرحيات 75. The ترك rule is
*paraphrased* in the intro note — the verbatim «أجب عن…» line is
unverifiable from scanned papers and is never quoted. **Design blend,
labelled as such in the capstone file header.**

**mhchem decision (documented in the dossier §5):** the katex package's
own `mhchem` contrib was tested headlessly, then in the real app:
**adopted**. All chemical equations are written `$\ce{...}$`, balanced
for atoms and charge; quantities stay plain KaTeX. 737 `\ce` occurrences
in the shipped book.

**Diagrams:** 4 new original SVG line diagrams in the platform style
(`hess-cycle`, `galvanic-cell`, `electrolysis-cell`, `titration-curve`)
via the existing `Diagrams` component; no book figures copied.

## 3. House audits (mechanical, all pass)

- Quiz/exam marks exact per chapter (16 / 60); every written rubric sums
  exactly to its question's marks; capstone per-chapter sums exactly
  20×7 + 5 = 145.
- MCQ key-position distribution across the book's 112 chapter MCQs:
  **28 / 28 / 28 / 28** — after detecting the authors' natural skew
  (10/54/39/9), a coordinator script re-permuted options
  deterministically (AST-free text pass, verified: the correct option
  *text* of every question is byte-identical before/after).
- Lesson ids `kcN-lM` globally unique across all four books (116 lesson
  ids checked, 0 collisions — the progress map is global, the Physics
  lesson); all question/vocab ids unique; zero emoji; no `**`; no
  Arabic inside `$…$`; every `diagram` key used exists in the ART record.
- Typecheck clean (one ambient declaration added for the mhchem import:
  `src/types/mhchem.d.ts`); production build green.
- Rendering in the real app (Playwright guard run): **zero
  `.katex-error`** across the whole 19-item capstone walk and the
  Chapter 1 quiz/exam/solution flows. (An ad-hoc node harness reported
  spurious `\ce` failures from a dual-KaTeX-instance bundle artifact;
  the browser — the environment that ships — is clean, and screenshots
  40–43 were inspected by eye.)

## 4. Independent cross-check (files only, non-authors)

Two independent checkers re-derived every numerical item from its
printed givens and verified every equation's balance. **Chapters 1–6:
zero wrong keys, zero wrong values, zero wrong intermediates**
(118 items in Ch.1–4 alone; Ch.4's exactly-5 unbalanced strings are the
disclosed pedagogical skeletons/intermediates, all legitimate).
Defects found and **fixed pre-delivery** (full record:
`research/chemistry-crosscheck.md`):

- Ch.7: propanone misnamed «بروبان» in the laws table and the practice
  final answer; butan-2-one misnamed «بيوتان» twice in the drills
  callout.
- Ch.8: a worked-example step mislabelled total monosaccharide moles as
  n(glucose).
- Ch.7: the Saytzeff vocab card's explanatory clause inverted the rule.
- Ch.5: a geometry callout falsely claimed square-planar uniquely shows
  cis/trans + optical isomerism (contradicting the book's own card).
- Ch.2: one over-precise rounding (Kp = 14.778 → ≈14.8 atm).
- **Capstone originality:** duplication against chapter material was
  proven for Ch.5–7 branches (Checker B) and for Ch.1–4 branches
  (coordinator's own gap pass — neither checker owned it): identical
  gravimetric numbers to Ch.6's worked example, the EAN pair and the
  Tollens/Fehling essay copied from Ch.5/Ch.7 items, the Daniell cell
  from Ch.4's worked example, the same buffer numbers as Ch.3's, and
  شرحية branches mirroring chapter شرحيات. **All 12 affected items were
  rewritten** with fresh numbers/contexts (Ni/Cu cell +0.59 V/−113.87 kJ;
  buffer Ka = 5.0×10⁻⁵ → pH 4.30; EAN pair [Cr(CO)₆] 36 / [Pt(NH₃)₄]²⁺
  84; gravimetry 0.800 g → 48.0%; fuel-cell essay; qualitative-tests
  essay; reversed organic chain; fresh علل sets), each re-derived
  before writing; capstone sums re-audited exact afterwards.

## 5. Tests — 36/36

- **29 pre-existing tests all green** (English, Math, Physics books
  untouched in behaviour).
- **New `tests/stage-d.spec.ts` (6):** subject listing (8 chapters, Ch.1
  expanded), worked-solution flow with `\ce` rendering + zero
  `.katex-error` + final answer 62.76 kJ, written quiz flow (stored
  `quizBest['km6-c1']` = exactly 15/16 from the data), written exam flow
  (stored score updates from report self-marking, expected value computed
  from the chapter's own rubric), capstone end-to-end (19 written items,
  «من 145», ترك 45 wording, per-chapter report rows), lesson-persistence
  smoke under `kc1-l1`.
- **New screenshots test (1)** producing `qa/screenshots/40-chemistry-subject.png`,
  `41-chemistry-solution.png`, `42-chemistry-written.png`,
  `43-chemistry-capstone.png` — all four inspected by eye.
- **Disclosed amendment:** `tests/academy.spec.ts` home test — the
  Stage C assertion «Chemistry button count 0» is replaced by «Chemistry
  is a live button; Biology (الأحياء) count 0», the same pattern as the
  Stage A/C amendments. No other pre-existing test was changed.

## 6. Delivery

- Deploy: **git-free** (clean copy without `.git` → `npx vercel --prod`),
  live bundle hash `index-CDMwNFqK.js` == tested local build, HTTP 200.
- Git: commit `58ac046` pushed to `dolanexeee/uruk-academy` (this report
  follows in its own commit, the Stage C pattern).
- Home page: the Chemistry card is live with real stats (8 فصول · 32
  درسًا · 138 قانونًا وتعريفًا); Biology and Arabic remain «قريبًا».

## 7. Honest gaps

- Printed-given thermodynamic data were verified for arithmetic and
  internal cross-reuse, and match standard textbook values; they were
  not re-checked against the ministry book's own data tables (the
  checkers' stated limit).
- شرحية model answers were checked for chemical correctness, not for
  matching the ministry markers' exact expected phrasing (unverifiable
  from public sources).
- The platform's standing limits are unchanged: progress is per-device
  (localStorage), self-marking for written questions is honest-labelled
  in the UI, and the final verdict on look/feel belongs to the user on
  his phone.
