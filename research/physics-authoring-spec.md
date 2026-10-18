# Physics authoring spec — Uruk Academy Stage C (chapters 1–9)

Gold standard: `src/content/math/m1.ts` (shape, tone, density) and, once written,
`src/content/physics/ph1.ts`. Types: `src/content/types.ts`. Verified curriculum scope:
`research/physics-structure.md` — author ONLY inside the verified scope for your chapter
(§2 content map + §4 constants). This spec adapts `research/math-authoring-spec.md`
to physics; where they differ, THIS spec wins.

## Per chapter (file `src/content/physics/phN.ts`, export `chapterN: Unit`)

- Unit fields: id `ph6-cN`, number N, titleAr/titleEn (official, from the dossier §1
  table), theme (one Arabic sentence naming the chapter's topic span), status 'live',
  kind 'content', examMinutes 45.
- **4 lessons** (`cN-l1..l4`):
  1. `explain` — concept first, then the physics; 3 sections, paragraphs/bullets/callouts.
  2. `solution` — 3–4 `solution` sections: problem, ordered steps (formula + one-line
     note), finalAnswer. **UNITS IN EVERY STEP**: any step that computes a quantity
     carries its unit in the formula or the note; finalAnswer ALWAYS carries its unit.
  3. `laws` — summary tables (`grammar` sections with table head/rows) + one explain
     section for the chapter's signature topic. Include a «تعريفات وشرحيات» flavour:
     physics papers are شرحيات-majority, so the laws lesson also drills the chapter's
     key definitions/علل in prose.
  4. `practice` — 3 graded `solution` sections (أساسي/متوسط/بأسلوب الوزاري) + an
     `explain` section of extra drill bullets + a callout with compact answers.
- **Vocab (law/definition cards) 14–18**: id `pN-slug`; word = the law/formula in $…$
  (or the term for pure definitions); pos = 'قانون' | 'تعريف' | 'مبرهنة' | 'مبدأ';
  meaning = Arabic statement; example = a tiny worked instance (LTR, math in $…$ or
  plain, WITH unit); exampleAr = Arabic gloss.
- **Quiz = 16 marks**: 10 MCQ ×1 (exactly ONE correct, `answer` index points at it)
  + 2 written ×3 (modelAnswer + rubric of points summing to 3). At least ONE of the
  two written questions must be a شرحية (تعريف/علّل/اشرح/قارن), not a computation.
  Skills spread across 'concept' | 'compute' | 'apply'. Every question has an Arabic
  `explain`. **Vary the correct option's index across the quiz** — never a repeating
  pattern (0,1,2,3,0,1…); aim for a spread over all four positions.
- **Exam = 60 marks**: 4 MCQ ×5 + 4 written ×10 (modelAnswer + rubric points summing
  to 10). At least TWO of the four written questions must be شرحية-style (شرح/علل/
  اشتقاق/نشاط) — mirroring the real paper's شرحيات majority. ids `cN-q1..q12`,
  `cN-e1..e8`.

## Diagrams

`LessonSection` has an optional `diagram` field naming a built-in original SVG line
diagram (rendered by `src/components/Diagrams.tsx`). Available keys:

`cap-plates` (متسعة ذات صفيحتين وبطارية) · `cap-rc` (منحنيات شحن/تفريغ RC) ·
`flux-loop` (حلقة في مجال مغناطيسي والفيض) · `ac-generator` (مولد تيار متناوب وموجته) ·
`rlc-circuit` (دائرة RLC متوالية) · `phasor-rlc` (مخطط الطور) ·
`em-wave` (موجة كهرومغناطيسية: مجالان متعامدان) · `young-slits` (تجربة يونك والأهداب) ·
`photoelectric` (الظاهرة الكهروضوئية) · `bohr-atom` (ذرة بور والانتقالات) ·
`pn-junction` (الوصلة PN) · `laser-levels` (مستويات الليزر) · `decay-curve` (منحنى الانحلال)

Use a diagram ONLY where the concept truly needs a picture (at most 2 per chapter,
in the concept or laws lesson). NEVER describe or imitate a textbook figure.

## Rules (non-negotiable)

- Formulas ONLY inside $…$ (inline) or $$…$$ (display). NO Arabic text inside $…$.
  NO markdown bold/asterisks anywhere. Zero emoji. Arabic prose; Western digits in
  formulas. Units in formulas use Latin symbols inside $…$ (e.g. $12\ \text{V}$,
  $30\ \mu\text{F}$) — never Arabic unit names inside $…$.
- **Constants discipline** (dossier §4): h = 6.63×10⁻³⁴, c = 3×10⁸, e = 1.6×10⁻¹⁹,
  ε0 = 8.85×10⁻¹², σ = 5.67×10⁻⁸, Wien 2.898×10⁻³, m_e = 9.11×10⁻³¹, 1 u = 931.5 MeV/c².
  Choose problem numbers that come out clean with THESE constants, and state the
  constants used in the first step of a worked solution when they matter.
- **SI discipline**: convert cm/µF/nC/Å/eV etc. explicitly in a step before computing;
  the conversion is part of the teaching. Answers in SI unless the quantity is
  conventionally quoted otherwise (eV for atomic energies, µF for capacitance) —
  and then say so.
- Every computation RE-DERIVED by you before writing it down. MCQ distractors
  plausible (classic mistakes: forgetting √2 in rms, series/parallel swap, sign of
  lens/phase, unit slips) but unambiguously wrong. If a finalAnswer can carry a
  verification (limiting case, alternate method, order-of-magnitude), include it briefly.
- All problems ORIGINAL (book-style, lightly re-numbered at most) — never copy a
  textbook exercise or a real وزاري question verbatim.
- Stay inside the verified scope (dossier §2). Excluded by the dossier: thin films
  and Rayleigh (Ch. 5), anything from the old separate relativity chapter numbering
  (relativity lives inside Ch. 6 now), 2026-deletion rumours.
- شرحيات quality: model answers for شرح/علل questions must be complete, precise
  physics prose in Arabic (3–6 lines), with the rubric splitting the marks across
  the required points — as the ministry's own model answers do.
- Self-check your file compiles standalone: `npx esbuild src/content/physics/phN.ts
  --bundle --outfile=/dev/null` from the project root must pass.
- Report back: per chapter — counts (lessons/sections/cards/quiz marks/exam marks)
  and a plain list of EVERY computed answer key (quiz + exam + worked solutions,
  with units) for the independent cross-check pass.
