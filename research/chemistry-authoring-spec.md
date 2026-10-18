# Chemistry authoring spec — Uruk Academy Stage D (chapters 1–8)

Gold standard: `src/content/physics/ph1.ts` (shape, tone, density) and
`src/content/math/m1.ts`. Types: `src/content/types.ts`. Verified curriculum
scope: `research/chemistry-structure.md` — author ONLY inside the verified
scope for your chapter (§2 content map + §4 constants). This spec adapts
`research/physics-authoring-spec.md` to chemistry; where they differ, THIS
spec wins.

## Per chapter (file `src/content/chemistry/kN.ts`, export `chemChapterN: Unit`)

- Unit fields: id `km6-cN`, number N, titleAr/titleEn (official, from the
  dossier §1 table), theme (one Arabic sentence naming the chapter's topic
  span), status 'live', kind 'content', examMinutes 45.
- **4 lessons** (`kcN-l1..l4`) — lesson ids MUST use the `kcN-lM` pattern
  (they key the global progress map; collisions corrupt other books):
  1. `explain` — title «المفهوم — …»: concept first, then the chemistry;
     3 sections, paragraphs/bullets/callouts.
  2. `solution` — title «أمثلة محلولة — …»: 3–4 `solution` sections: problem,
     ordered steps (formula + one-line note), finalAnswer. **UNITS IN EVERY
     STEP**; every numerical step shows its unit conversion explicitly
     (mL→L, °C→K, cal→J, g→mol…) as a teaching step.
  3. `laws` — title «قوانين وخلاصة الفصل»: summary tables (`grammar` sections
     with table head/rows) + one explain section for the chapter's signature
     topic. Include a «تعريفات وشرحيات» flavour: the laws lesson also drills
     the chapter's key definitions/علل in prose.
  4. `practice` — title «تمارين متدرجة — …»: 3 graded `solution` sections
     (أساسي/متوسط/بأسلوب الوزاري) + an `explain` section of extra drill
     bullets + a callout with compact answers.
- **Vocab (law/definition cards) 14–18**: id `kN-slug`; word = the law/formula
  in $…$ (or the term for pure definitions); pos = 'قانون' | 'تعريف' |
  'مبدأ' | 'قاعدة'; meaning = Arabic statement; example = a tiny worked
  instance (LTR, math in $…$ or plain, WITH unit); exampleAr = Arabic gloss.
- **Quiz = 16 marks**: 10 MCQ ×1 (exactly ONE correct, `answer` index points
  at it) + 2 written ×3 (modelAnswer + rubric of points summing to 3).
  At least ONE of the two written questions must be a شرحية
  (تعريف/علّل/اشرح/قارن), not a computation. Skills spread across
  'concept' | 'compute' | 'apply'. Every question has an Arabic `explain`.
  Question ids `kcN-q1..q12`.
- **Exam = 60 marks**: 4 MCQ ×5 + 4 written ×10 (modelAnswer + rubric points
  summing to 10). At least TWO of the four written questions must be
  شرحية-style (شرح/علل/اشتقاق/نشاط) — mirroring the real paper's balance.
  Question ids `kcN-e1..e8`.

## Chemical equations — mhchem (dossier §5, binding)

- Every chemical equation goes inside $…$ as `\ce{...}` — in the .ts source
  string that is written `$\\ce{H2SO4 + 2NaOH -> Na2SO4 + 2H2O}$` (double
  backslash in source, like all LaTeX in this codebase).
- **Every equation must be BALANCED** (atoms and charge) — the cross-check
  re-verifies each one mechanically. Include state symbols (s), (l), (g),
  (aq) where they carry meaning; equilibrium arrows `<=>`, heat over arrow
  via `->[\\Delta]`, precipitate `v`, gas `^`.
- Quantities stay plain KaTeX ($K_c = 1.8\\times10^{-5}$ etc.); use `\ce`
  ONLY for chemical formulas/equations, never for variables or units.
- Never Arabic inside $…$. No markdown bold/asterisks anywhere. Zero emoji.
  Western digits in formulas. Units in Latin symbols inside $…$
  ($25\ \text{mL}$, $0.10\ \text{mol/L}$).

## Diagrams

Optional `diagram` field on a lesson section (rendered by
`src/components/Diagrams.tsx`). Chemistry keys being added at integration:

`hess-cycle` (مخطط دورة هيس) · `galvanic-cell` (خلية كلفانية: أنود/كاثود/قنطرة
ملحية) · `electrolysis-cell` (خلية إلكتروليتية بمصدر تيار) · `titration-curve`
(منحنى تسحيح حامض قوي–قاعدة قوية)

Use a diagram ONLY where the concept truly needs a picture (at most 2 per
chapter, in the concept or laws lesson). NEVER describe or imitate a textbook
figure.

## Rules (non-negotiable)

- **Constants discipline** (dossier §4): F = 96500 C/mol; R = 0.0821
  L·atm/(mol·K) for Kp/Kc; R = 8.314 J/(mol·K) for Gibbs; Kw = 1.0×10⁻¹⁴;
  1 cal = 4.184 J; water c = 4.184 J/(g·°C); atomic masses and E° values as
  listed in the dossier — and **state the constants/data used in the
  problem's statement or first step** (book habit).
- Choose problem numbers that come out CLEAN with these constants (roots and
  logs included). Every computation RE-DERIVED by you before writing it
  down. MCQ distractors plausible (classic mistakes: sign of ΔH, ln/log
  swap, forgetting Δn, pH/pOH swap, dilution direction…) but unambiguously
  wrong. If a finalAnswer can carry a verification (limiting case, charge
  balance, order-of-magnitude), include it briefly.
- Worked solutions teach the ministry method: write the law, substitute,
  compute, box the answer with its unit — and for equilibrium/acid–base
  problems show the ICE/جدول التغيرات explicitly.
- شرحيات quality: model answers for شرح/علل questions must be complete,
  precise chemistry prose in Arabic (3–6 lines), with the rubric splitting
  the marks across the required points — as the ministry's own model
  answers do.
- All problems ORIGINAL (book-style, lightly re-numbered at most) — never
  copy a textbook exercise or a real وزاري question verbatim.
- Stay inside the verified scope (dossier §2). Nothing from outside the
  book's section lists (no Nernst equation — not in the book's 7-4; no
  solubility rules beyond 9-3; no organic mechanisms beyond named reactions).
- Self-check your file compiles standalone: `npx esbuild
  src/content/chemistry/kN.ts --bundle --outfile=/dev/null` from the project
  root must pass.
- Report back: per chapter — counts (lessons/sections/cards/quiz marks/exam
  marks) and a plain list of EVERY computed answer key (quiz + exam + worked
  solutions, with units) and EVERY chemical equation in the file, for the
  independent cross-check pass. Your report is NOT trusted for values — the
  cross-check reads the file; still list them completely.
