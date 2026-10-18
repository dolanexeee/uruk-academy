# REPORT — PROGRAM STAGE A + B: Engine Upgrade & the Complete Mathematics Book

**Delivered:** 2026-10-18 · **Live:** https://uruk-academy.vercel.app (HTTP 200, bundle `index-DpBJrdk4.js`, 1,020,870 B — byte-identical hash to the locally tested build)
**Repo:** github.com/dolanexeee/uruk-academy · **Code commit:** `8749cc2`
**Commission:** Mustafa, 2026-10-18 10:35 MDT — «ابني كل شي، اريد كل شي مثالي» (his friends in سادس إعدادي in Iraq need this platform). This stage = Part A (engine) + Part B (Mathematics). Physics/Chemistry/Biology/Arabic are later stages under separate commissions and were NOT started.

---

## Part A — Engine upgrades (shared by all future science books)

1. **Written questions (أسئلة مقالية)** — new `type: 'written'` for quizzes, chapter exams and capstones: free-text answer area → «إظهار الحل النموذجي» reveals the **model answer** → the student self-marks **point-by-point against the rubric** (مفتاح التصحيح: each point carries its marks; rubric sums always equal the question's marks — mechanically audited). Earned marks flow into the same `quizBest`/`examBest` progress records as MCQ marks. This is honest self-assessment against a key; the UI says so in words («درجتك بالتصحيح الذاتي»), and nothing anywhere claims automated/AI grading.
2. **Worked-solution sections** — new `solution` section type: a problem solved in ordered steps (formula + one-line justification each), revealed one at a time via «الخطوة التالية»; the final answer box appears only after the last step. New science-book lesson kinds: `solution` (أمثلة محلولة), `laws` (قوانين وخلاصة), `practice` (تمارين متدرجة).
3. **Math rendering** — KaTeX bundled locally with its fonts (precached by the PWA service worker: 71 entries, 1,732.66 KiB total precache), `MathText` component splitting `$…$`/`$$…$$` into LTR islands inside RTL text. Verified rendering in the production build by test (`.katex` elements present and multiplying as steps reveal) and by screenshot 21.
4. **Multi-book architecture** — a `books` registry in `curriculum.ts`; Home/Subject/Lesson/Quiz/Cards/Exam/Profile are all book-driven (per-book progress on the home cards, per-book capstones, per-book «عن المحتوى والمصادر»). Nothing else in the design system changed; zero-emoji rule intact (verified by symbol scan — one stray ✓ typographic character class was found in math content during integration and removed).

## Part B — Mathematics, سادس علمي: the complete book

**Structure was verified before authoring** (full dossier: `research/math-structure.md`). Primary source: the ministry textbook itself («الرياضيات للصف السادس العلمي», المنهج المطوّر, 10th ed. 2019 أحيائي printing — مقدمة, محتويات, and chapter openers for Ch. 1–3 read directly), sahl.io's current lesson index as proxy for Ch. 4–6, and mlazemna's post-exam tallies of the official papers for the paper structure. The seed chapter list was **confirmed in order**, with two title refinements (Ch. 5 is «المعادلات التفاضلية **الاعتيادية**»; Ch. 6 also printed «الهندسة المجسمة»).

**Documented scope decisions** (from the book's own مقدمة, not from taste):
- Ch. 5 solution methods = **فصل المتغيرات + المعادلات المتجانسة only**. A secondary site's claim of linear/second-order methods contradicts the مقدمة and was rejected; the newest print's alleged deletion of homogeneous equations is single-source and was NOT followed.
- Ch. 6 = **الزاوية الزوجية والمستويات المتعامدة (مبرهنات ٧، ٨، ٩) + الإسقاط العمودي ومبرهنة الأعمدة الثلاثة** only. The solids (المجسمات) material of older ملازمات appears in no current index and was deliberately not authored.
- Ch. 3 includes **[3-1] المشتقات العليا**, which the popular platform index omits — the book's own opener proves it belongs.

**Per chapter** (files `src/content/math/m1.ts`–`m6.ts`): 4 lessons (مفهوم → أمثلة محلولة خطوة بخطوة → قوانين وخلاصة → تمارين متدرجة), law flashcards, quiz of 12 questions / 16 marks (10 MCQ ×1 + 2 written ×3 with rubrics), chapter exam of 8 questions / 60 marks / 45 min (4 MCQ ×5 + 4 written ×10 with rubrics):

| Chapter | Cards | Notes |
|---|---|---|
| ١ الأعداد المركبة | 18 | incl. الجذور التكعيبية للواحد الصحيح (ω) |
| ٢ القطوع المخروطية | 16 | incl. انسحاب المحاور for all three conics |
| ٣ تطبيقات التفاضل | 16 | all nine book sections [3-1]…[3-9] covered |
| ٤ التكامل | 16 | incl. اللوغاريتم الطبيعي, المساحات, الحجوم الدورانية |
| ٥ المعادلات التفاضلية الاعتيادية | 16 | separation + homogeneous only (see above) |
| ٦ الهندسة الفضائية | 15 | theorem proofs as worked solutions |

**Book totals:** 24 lessons · 97 law cards · 72 quiz questions · 48 exam questions.

**Capstone — «الامتحان الوزاري الشامل — الرياضيات»** (`src/content/math/capstone.ts`) mirrors the verified paper: 6 numbered questions (Q1–Q3 two branches, Q4–Q6 three branches, 10 marks per branch), Q6 branch A as the composite of five 2-mark points spanning chapters, one branch a Ch. 6 theorem proof (مبرهنة ٨ — the actual 2024 دور أول theorem), **150 marks offered / 180 minutes**, per-chapter report. Chapter weights 24/22/42/32/20/10 are a **design blend inside the verified tallies' ranges** (2025 أول: 20/20/40/30/20/20; تمهيدي 2025: 24/22/32/32/20/20; Ch. 6 falls to 10 in several later rounds) — not one round's distribution, and the file header says so. The intro note explains the real paper's ترك rule (answer 100 of 150; pass mark 50) honestly, including that the mock scores all 150 for training. The verbatim printed «أجب عن…» line could not be verified from text sources (papers circulate as scans) and is therefore paraphrased, never quoted.

**MCQ key positions:** an integration audit found every key initially sat at option index 0 (a learnable pattern). All 89 MCQs were re-shuffled deterministically; the final distribution is uniform (23/23/21/22 over the four positions), and the tests read correct options from the content data rather than assuming positions.

## Independent precision cross-check (pipeline requirement)

A separate agent that did not author the content re-derived **all 307 items** (288 chapter + 19 capstone) from scratch, using sympy for integrals, ODE residuals, complex powers and extrema, and audited scope compliance. Full record: `research/math-crosscheck.md`.

- **Wrong answer keys: 0.** Every MCQ key (and every distractor's wrongness), every written model answer, every rubric, every worked solution, every drill answer verified.
- **Defects found and fixed before delivery:**
  1. `m2.ts` lesson c2-l3 printed a false «safe rule» for hyperbola asymptote slopes (it yields the reciprocal slope for horizontal hyperbolas and contradicted the chapter's own card/example/quiz key). Rewritten as the correct orientation-free rule (√ of the y²-term's denominator over √ of the x²-term's denominator), with both orientations worked in the callout.
  2. `capstone.ts` header claimed its weights «follow the actual 2025 تمهيدي/دور أول tallies» — false as stated; corrected to the blend wording above. (No question was affected.)
  3. Minor: `m4.ts` c4-q2 had a borderline distractor (`$x^3$` without +C) whose wrongness rested on convention alone — replaced with an unambiguously wrong option. `m6.ts` c6-l4 drill 3's one-line justification was garbled (result correct) — rewritten.
- Chapter 5's separation+homogeneous-only scope and Chapter 6's no-solids scope were both confirmed by full-text scan in the cross-check.

## Tests — Playwright 22/22 green

- **15 pre-existing tests kept green**, with **one disclosed amendment**: the home test asserted the pre-Stage-A world («تقدّمك في كتاب الإنجليزية» strip title; Mathematics button count = 0). Both assertions were updated to the new truth the commission ordered (strip now reads «تقدّمك في الأكاديمية»; Mathematics is a live button, Physics still has none). No other pre-existing assertion was touched.
- **6 new Stage A tests** (`tests/stage-a.spec.ts`): subject/chapter listing; KaTeX render + progressive step reveal with the final answer gated; written flow in a quiz (write → reveal → rubric self-mark → localStorage `quizBest['ma6-c1'] = {score: 15, total: 16}` exactly as self-marked); written flow in a chapter exam (report-phase self-marking updates stored `examBest` to 30/60); the capstone end-to-end (19 items, «من 150», per-chapter breakdown rows); a Chapter 6 lesson-completion smoke with persistence.
- **Screenshots** (`qa/screenshots/`): `20-math-subject-stageA.png`, `21-math-lesson-solution.png`, `22-written-question.png`, `23-math-capstone.png` — all four viewed and verified by Elena (KaTeX typography, rubric UI, honest ترك wording on the capstone intro).

## Delivery

- Deployed via the git-free route (clean copy without `.git` → `npx vercel --prod`, project `prj_bH7Rzi4mFjg3P2H7M56EoTepjoML`); live bundle hash `index-DpBJrdk4.js` matches the tested local build; HTTP 200.
- Code committed as `8749cc2`; this report committed separately; both pushed to `github.com/dolanexeee/uruk-academy`.

## Honest gaps

- The textbook's numbered section lists for Ch. 4–6 could not be read from the book itself (the public PDF truncates mid-Ch. 3); those chapters follow the مقدمة's prose scope + the current lesson index, and the content does not assert book section numbers for them.
- The claim that Ch. 6 was deleted for the 2026 cohort is single-source and contradicted by تمهيدي 2026's own tally (10 marks) — unresolved in sources; Ch. 6 is therefore kept, as in every verified 2024–2025 paper.
- Chapter 6's theorem statements follow the curriculum's theorem sequence (7/8/9) as indexed in the verified lesson index; the proofs were checked line-by-line for logical validity in the cross-check, but the book's own Ch. 6 opener page was not directly readable in this pass.
- Written-question scoring is self-marking by design (there is no honest way to grade free text offline); the platform states this to the student at every step.
- Progress remains per-device (localStorage), as in all previous phases.
