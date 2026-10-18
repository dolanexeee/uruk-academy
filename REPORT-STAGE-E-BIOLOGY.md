# REPORT — Stage E: Complete Biology Book (الأحياء)

**Status:** DELIVERED + VERIFIED — live at https://uruk-academy.vercel.app
**Repo:** github.com/dolanexeee/uruk-academy · code commit `1125736` (pushed; this report follows in its own commit)
**Live bundle:** `index-C7j0V0_M.js` (changed from Stage D's `index-CDMwNFqK.js`, matches the local build; site answers 200)
**Tests:** Playwright **43/43** (36 pre-existing + 6 new biology tests + 1 extended screenshots test)
**Date:** 2026-10-18

Stage E of the full-program commission («ابني كل شي»). Biology (الأحياء — السادس العلمي)
is complete: five chapters at the established standard, a وزاري capstone mirroring the
verified biology paper frame, full audits, an independent files-only cross-check with
every defect fixed pre-delivery, and fresh screenshots 50–53.

---

## 1. Verified structure — from the book itself

A full PDF mirror of the current print was obtained and read directly (228 pages;
the mlazemna mirror of «كتاب أحياء سادس علمي», file dated 2025-10-07). Evidence read
from the book, not from summaries:

- **محتويات الكتاب (p. 4)** lists exactly five chapters: الخلية (5) · الأنسجة (48) ·
  التكاثر (86) · التكوين الجنيني (139) · الوراثة (163), and each chapter's own
  محتويات الفصل was opened and transcribed (full section lists in the dossier).
- **المقدمة (2012)** names the five fields verbatim — علم الخلية، علم الأنسجة، علم
  التكاثر، علم الأجنة، علم الوراثة — confirming the five-chapter frame.
- **Ch. 1's الأهداف التعليمية (p. 6)** were read in full; they fix the examinable
  detail of the cell chapter (organelle definitions, osmosis, endo/exocytosis,
  cellular respiration, mitosis vs meiosis) and the chapter was authored to them.
- **Ch. 5's contents** run: ما قبل مندل → المندلية → ما بعد مندل → الأساس الجزيئي
  للوراثة (with §5-5-5 النسخ naming Promoter / RNA Polymerase / Template strand,
  and شكل 5-39 تضاعف DNA read visually). The book's own worked examples anchor the
  genetics set: الدجاج الزاحف (Cc × Cc → 2:1, p. 190) and فقر الدم المنجلي
  (Hb^A/Hb^S, p. 190).
- **Print change, documented:** this print is 228 pp where older prints ran ~270 pp,
  but the chapter skeleton is unchanged — **no merger** (contrast Physics 10→9).
  What disappeared is sub-material, decided as scope below.

**Scope decisions (حذوفات), all documented in `research/biology-structure.md`:**
الوراثة الكمية — absent from Ch. 5's contents, excluded. Detailed amphioxus (الرميح)
embryology — excluded; the general أريمة/معيدة stages stay (the concept was examined
in 2025 دور أول). Ch. 3 subsections found in older prints (التكاثر الخضري، الهايدرا،
البلاناريا، دودة الأرض) — confirmed absent by sampling pp. 112–130 (plants run
flower → fruit; animals run insects → frog → human); excluded. A few figures are
marked للاطلاع in the book (جسيمات حالة، أنسجة عصبية، كلاميدوموناس) and are treated
as reading-only.

**Paper frame (mlazemna tallies, all four 2025 rounds):** offered 142–150 / ترك
42–50 / scored 100 / 3 hours; chapter weight ranges Ch.1 29–42, Ch.2 25–31,
Ch.3 35–48, Ch.4 8–16, Ch.5 16–41. No MCQ block is verified for biology, so none
was invented (Chemistry precedent).

## 2. What was built

| Chapter | Lessons | Cards | Quiz | Exam |
|---|---|---|---|---|
| ١ الخلية | 4 | 24 تعريفًا | 12q / 16 | 8q / 60 |
| ٢ الأنسجة | 4 | 24 تعريفًا | 12q / 16 | 8q / 60 |
| ٣ التكاثر | 4 | 24 تعريفًا | 12q / 16 | 8q / 60 |
| ٤ التكوين الجنيني | 4 | 24 تعريفًا | 12q / 16 | 8q / 60 |
| ٥ الوراثة | 4 | 24 تعريفًا | 12q / 16 | 8q / 60 |
| **Book** | **20** | **120** | **60q** | **40q** |

- Per chapter: مفهوم → أمثلة محلولة → خلاصة ومقارنات → تمارين متدرجة; quiz = 10 MCQ ×1
  + 2 written ×3; exam (45 min) = 4 MCQ ×5 + 4 written ×10 with حدّد وفسّر when items
  are drawn from a pool. Biology is definition-heavy by design: عرّف / علّل / قارن /
  ما موقع ووظيفة written questions run through every chapter, each with a model answer
  and a 3-point (quiz) or 5-point (exam) self-marking rubric.
- **Genetics as worked solutions:** Ch. 5 L2 carries the fixed worked-cross set —
  monohybrid Tt×Tt, dihybrid YyRr×YyRr, incomplete dominance (شب الليل) + test cross,
  sex-linked hemophilia — each with Punnett steps revealed one by one; the molecular
  lesson works a full transcription/translation example with a codon table.
- **Four new original SVG diagrams** in the platform style (never copied from the
  book): `cell-schematic`, `flower`, `dna-replication`, `pedigree`.
- **Capstone «الامتحان الوزاري الشامل — الأحياء»** (`bio6-capstone`): 16 written items
  as five numbered questions with branches, **145 offered / ترك 45 / 180 min**, weights
  **Ch.1 30 · Ch.2 28 · Ch.3 40 · Ch.4 12 · Ch.5 35** — every weight inside its
  verified 2025 range; the blend is labelled a design choice in the dossier.
- Wiring: `src/content/biology/` (b1–b5 + capstone + index), `biologyBook` in
  `curriculum.ts` (vocab suffix «تعريفًا»), per-chapter exam specs, home Biology card
  live with real stats («5 فصول · 20 درسًا · 120 تعريفًا»). **اللغة العربية remains
  «قريبًا»** — the last subject, Stage F.

## 3. Mechanical audits — all green

Bundle-driven audit over the production data: 136 lesson ids globally unique; every
chapter quiz sums to exactly 16 and every exam to exactly 60; every written item's
rubric sums exactly to its marks; capstone per-chapter totals are exactly
{30, 28, 40, 12, 35} = 145; **MCQ key distribution 17/18/18/17 across 70**; zero
emoji characters, zero `**` residue, zero Arabic inside `$…$` in the biology book;
every diagram key referenced exists.

## 4. Independent cross-check (files only) — defects found and fixed

Full record: `research/biology-crosscheck.md`. Process note, disclosed plainly: the
two checker agents commissioned for this stage **failed to launch** (runtime spawn
error, retried once); the check was therefore run by the stage coordinator — author
of **none** of the five chapters — directly from the files, per the house rule that
disk beats any report. All 70 MCQs were re-derived, every genetics probability and
chromosome count recomputed, and the capstone re-derived cold.

- **1 wrong key in 70 — `bc5-e2` (fixed):** the incomplete-dominance hybrid×hybrid
  item recorded its key on «9:3:3:1» while its own explanation correctly teaches
  1:2:1. The chapter author's report claimed the correct text sat at the keyed
  index — **the file said otherwise, and the file won.** Fixed by swapping the two
  option texts so the key lands on the 1:2:1 answer; key distribution unchanged.
  The other 69 keys are correct and uniquely correct.
- **All genetics re-derivations pass:** monohybrid/dihybrid ratios, test crosses,
  incomplete dominance, both blood-group crosses, the book's creeper-chicken 2:1 and
  sickle-cell 1:2:1 (book phenotypes), hemophilia and colour-blindness pedigrees;
  chromosome accounting exact in every item (2n=8/6/10/12 stagger in Ch. 1;
  2n=24→12/24/36 and 2n=20→10/20/30 patterns in Ch. 3; embryo sac 8 nuclei / 7
  cells; ovarian-cycle hormone sequence). Ch. 2's blood figures are labelled
  approximate at standard textbook values.
- **Capstone cold-check caught 2 defects in the coordinator's own items (fixed):**
  (1) `cb-q5c` — the transcription mutation as first written (GGA→AGA) claimed a
  CCU→CUU product, but the complement of AGA is UCU; the item was redesigned to a
  middle-base mutation (GGA→GAA → CCU→CUU, Pro→Leu missense) and re-verified
  base-by-base. (2) `cb-q1c` — an English word ("absent") had slipped into an Arabic
  model answer; replaced with «وغائب».
- **Capstone originality pass (explicit, per the Chemistry lesson):** every capstone
  branch compared against the chapter pools; no duplicates survive. Two items were
  rewritten pre-delivery: `cb-q5a` part (2) duplicated the شب الليل F2 step of
  Ch. 5 L2 → rewritten as pure red × pink (RR×Rr), re-derived; `cb-q3b`'s
  موقع ووظيفة set shared 2 of 5 structures with Ch. 3's exam → الحويصلة المنوية
  replaced by غدة البروستات (residual overlap 1 of 5, البربخ).
- **حذوفات discipline verified by grep:** no excluded topic is examined anywhere;
  الهايدرا appears once, as a مستويات التعظي example inside Ch. 4's concept lesson —
  legitimate, not the deleted reproduction section.

## 5. Tests — 43/43

- `tests/stage-e.spec.ts` (6): subject listing with «5 فصول» + «120 تعريفًا» rendered
  from the registry; worked genetics solution flow ending at the 75% final answer with
  zero KaTeX errors; written quiz flow storing exactly 15/16; written exam flow storing
  20 + the self-marked rubric points; capstone end-to-end (16 items, «من 145», ترك 45
  wording, per-chapter rows «الفصل ١ — الخلية» … «الفصل ٥ — الوراثة»); lesson
  persistence under `bc1-l1`.
- `tests/screenshots.spec.ts`: Stage E block appended → `50-biology-subject.png`,
  `51-biology-solution.png`, `52-biology-written.png`, `53-biology-capstone.png`
  (all four inspected by eye after the run).
- **Disclosed amendment to a pre-existing test:** `tests/academy.spec.ts`'s home test
  asserted the Biology button count was 0 (the «قريبًا» pattern); it now asserts
  Biology is a live button and اللغة العربية remains 0, with the comment updated.
  No other pre-existing test was changed. All 36 pre-existing tests stay green.

## 6. Delivery

- Code commit `1125736` pushed to `dolanexeee/uruk-academy`.
- Deployed **git-free** (clean copy without `.git` → `npx vercel --prod`, project
  `prj_bH7Rzi4mFjg3P2H7M56EoTepjoML`); live site answers **200** with bundle
  `index-C7j0V0_M.js`, changed from Stage D's `index-CDMwNFqK.js`.
- Documentation: this report, `research/biology-structure.md` (structure + scope
  decisions), `research/biology-authoring-spec.md`, `research/biology-crosscheck.md`,
  and the Stage E section in `CONTENT.md`.

## 7. Honest gaps

- The paper frame comes from mlazemna's per-round tallies (four 2025 rounds
  cross-checked against each other); the ministry's own marker phrasing of the ترك
  rule is paraphrased, never quoted, and its exact wording remains unverifiable from
  the sources reachable here.
- The حذوفات boundary was judged from the book's own contents + page sampling + the
  2025 papers' behaviour, not from an official deletion circular (none was reachable);
  the decisions and their evidence are itemised in the dossier for correction if an
  official list surfaces.
- Blood composition figures in Ch. 2 are the standard textbook approximations and are
  labelled as such in the content.
- Capstone weights are a design blend inside verified ranges, not a claim about any
  single real paper.
- The cross-check was executed by the stage coordinator rather than by the two
  commissioned checker agents (spawn failure, §4); the checker authored none of the
  five chapters, and the one place the coordinator's own work was checked — the
  capstone — it caught and fixed two real defects.
