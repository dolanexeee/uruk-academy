# Math authoring spec — Uruk Academy Stage A (chapters 2–6)

Gold standard: `src/content/math/m1.ts` (Chapter 1, complete). READ IT FIRST and match its
shape, tone and density exactly. Types: `src/content/types.ts`. Verified curriculum scope:
`research/math-structure.md` — author ONLY inside the verified scope for your chapters.

## Per chapter (file `src/content/math/mN.ts`, export `chapterN: Unit`)

- Unit fields: id `ma6-cN`, number N, titleAr/titleEn (official), theme (one Arabic sentence
  naming the book's own section span), status 'live', kind 'content', examMinutes 45.
- **4 lessons** (`cN-l1..l4`):
  1. `explain` — concept first, then rules; 3 sections, paragraphs/bullets/callouts.
  2. `solution` — 3–4 `solution` sections: problem, ordered steps (formula + one-line note),
     finalAnswer (include a quick self-check inside finalAnswer where natural).
  3. `laws` — summary tables (`grammar` sections with table head/rows) + one explain section
     for the chapter's signature topic.
  4. `practice` — 3 graded `solution` sections (أساسي/متوسط/بأسلوب الوزاري) + an `explain`
     section of extra drill bullets + a callout with compact answers.
- **Vocab (law cards) 14–18**: id `mN-slug`; word = the law/formula in $…$; pos = 'قانون' |
  'تعريف' | 'مبرهنة'; meaning = Arabic statement; example = a tiny worked instance (LTR,
  math in $…$ or plain); exampleAr = Arabic gloss.
- **Quiz = 16 marks**: 10 MCQ ×1 (options in $…$ where math, exactly ONE correct, `answer`
  index points at it) + 2 written ×3 (modelAnswer + rubric of points summing to 3).
  Skills spread across 'concept' | 'compute' | 'apply'. Every question has an Arabic `explain`.
- **Exam = 60 marks**: 4 MCQ ×5 + 4 written ×10 (modelAnswer + rubric points summing to 10).
  ids `cN-q1..q12`, `cN-e1..e8`.

## Rules (non-negotiable)

- Formulas ONLY inside $…$ (inline) or $$…$$ (display). NO Arabic text inside $…$.
  NO markdown bold/asterisks anywhere. Zero emoji. Arabic prose; Western digits in formulas.
- Every computation RE-DERIVED by you before writing it down. MCQ distractors plausible but
  unambiguously wrong. If a finalAnswer can carry a verification (substitute back, alternate
  method), include it briefly.
- All problems ORIGINAL (book-style, lightly re-numbered at most) — never copy a textbook
  exercise verbatim.
- Stay inside the verified scope (research file §2 for your chapters). Where the research
  marks something deleted/unverified (e.g. Ch.5 linear equations, Ch.6 solids), DO NOT author it.
- Self-check your file compiles standalone: `npx esbuild src/content/math/mN.ts --bundle
  --outfile=/dev/null` from the project root must pass.
- Report back: per chapter — counts (lessons/sections/cards/quiz marks/exam marks) and a
  plain list of EVERY computed answer key (quiz + exam + worked solutions) for the
  independent cross-check pass.
