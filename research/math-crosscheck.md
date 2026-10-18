# Independent precision cross-check — Uruk Academy Mathematics book

**Scope of this pass:** `src/content/math/m1.ts` … `m6.ts` + `capstone.ts`, checked against
`research/math-structure.md` §2 (verified curriculum scope) and `research/math-authoring-spec.md`.
Every answer key was re-derived from scratch by the checker (who did not author the content):
all quiz/exam MCQs (keyed option correct **and** every other option wrong), all written
modelAnswers and rubric allocations, all worked-solution lessons, all practice-drill callout
answers, and all law-card (vocab) formulas/examples. Nontrivial values were re-computed with
python3/sympy (complex powers, definite integrals, ODE residuals, extrema) — sympy output is
quoted where it is the decisive evidence.

**Headline result:** the computation is exceptionally clean. Out of **288 chapter items +
19 capstone items** re-derived, **zero answer keys are wrong**. Two genuine defects were found,
both in explanatory/documentation text, not in any key: (1) a false "safe rule" for hyperbola
asymptotes in Ch.2's summary lesson that contradicts that same chapter's own correct answers;
(2) a false provenance claim in the capstone header about its chapter weights. Details below.

**Counting convention:** one "item" = one vocab card, one worked solution (lessons l2/l4),
one practice-drill bullet answer, one quiz question, or one exam question.

---

## Chapter 1 — الأعداد المركبة (`m1.ts`)

**(a) Items re-derived: 50** — 18 vocab cards, 7 worked solutions (l2 ×4, l4 ×3),
5 drill answers, 12 quiz, 8 exam. Quiz total 16 marks ✓ (10×1 + 2×3), exam total 60 ✓
(4×5 + 4×10); every written rubric sums to its question's marks (q11/q12 = 3; e5–e8 = 10).

Spot evidence (sympy): `(3+i)/(1-i) = 1 + 2i` (c1-q5 keyed real part 1 ✓);
`(2+i)²/(1−i) = −1/2 + 7i/2` (c1-q11 ✓); `(√3+i)⁶ = −64` (c1-e1 ✓);
`(2+3i)² = −5 + 12i` confirms c1-e3's roots `±(2+3i)` of `−5+12i` ✓.
All 10 quiz MCQ distractors verified individually wrong (e.g. q7: only option 0 has both
r = 2 and the fourth-quadrant angle −π/3). Worked solutions re-derived: `(2+3i)(1−i) + 4/(1+i) = 7−i`;
`√(3−4i) = ±(2−i)`; `z²−4z+13 = 0 → 2±3i`; `(1+i)⁸ = 16` (two independent routes agree).
Drill callout all five correct, incl. `√(−8+6i) = ±(1+3i)` since `(1+3i)² = −8+6i`, and the
ω-equation `z² − z + 1 = 0` (sum 1, product 1 — re-derived, not trusted).

**(b) Errors: none.**
**(c) Suspects: none.** Chapter 1 is fully clean.

---

## Chapter 2 — القطوع المخروطية (`m2.ts`)

**(a) Items re-derived: 48** — 16 vocab cards, 7 worked solutions, 5 drill answers,
12 quiz, 8 exam. Quiz 16 ✓, exam 60 ✓, all rubrics sum correctly.

Every numeric key re-derived and correct: e.g. `x²/36 + y²/20 = 1 → c = 4, e = 2/3`,
directrices `x = ±9`, `LR = 20/3`; `9x² − 16y² = 144 → x²/16 − y²/9 = 1, e = 5/4`;
c2-e5's directrix `±18√5/5` (= 36/(2√5), rationalised) and `LR = 16/3`; c2-e1 `LR = 50/7`.
Both verification points embedded in the file check out (point (3, 6) is equidistant
6/6 from focus and directrix in both parabola examples). All 5 drill answers correct,
incl. the vertical-ellipse trap (q/drill 2: `c = 3, e = 3/5`, foci on the y-axis) and the
vertical-hyperbola asymptotes `y = ±(4/3)x` with `e = 5/4`.

**Scope:** انسحاب المحاور present for all three conics (vocab cards m2-*-shifted, l2 ex.4,
l3 closing section, l4 ex.2, quiz q9/q10, exam e3/e7/e8) ✓ — matches structure §2 Ch.2.

**(b) Errors: 1 — in explanatory text (no answer key affected).**

- **ERROR — `m2.ts`, lesson `c2-l3`, hyperbola table callout — a false "قاعدة آمنة"
  (safe rule) for asymptote slopes.** The file states (after the vertical-hyperbola remark):
  «اكتب ± ثم ضع فوق خط الكسر **مقامَ الحد الموجب** وتحتَه **مقامَ الحد السالب** بعد الجذر»
  — i.e. numerator = √(denominator of the *positive* term), denominator = √(denominator of
  the *negative* term). Applied to the chapter's own standard horizontal hyperbola
  `x²/9 − y²/16 = 1` this rule yields slope `±3/4`, but the correct slope is `±4/3` —
  which is exactly what the file itself keys in `m2-hyperbola-asymptotes` (vocab),
  worked example 3 of `c2-l2`, and quiz `c2-q4`. The rule as printed is true only for the
  *vertical* orientation (where the positive term is the y-term); stated unscoped as a
  universal "safe rule" it hands the student the reciprocal of the correct answer in the
  horizontal case — the case used by every worked example in the chapter. This is a direct
  internal contradiction (§4 of the brief): the summary lesson teaches a procedure that
  the same chapter's cards, examples and keys contradict. Fix: state the rule as
  "numerator = √(denominator of the y-term), denominator = √(denominator of the x-term)",
  or scope it explicitly to the vertical case.

**(c) Suspects: none** (the `e = 0 → circle` remark in c2-l1 is the standard school-level
limiting statement for the ellipse family; not counted as an error).

---

## Chapter 3 — تطبيقات التفاضل (`m3.ts`)

**(a) Items re-derived: 48** — 16 vocab cards, 7 worked solutions, 5 drill answers,
12 quiz, 8 exam. Quiz 16 ✓, exam 60 ✓, all rubrics sum correctly.

All calculus re-derived: ladder rates `−3/4` m/s (l2 ex.1) and `−3/2` m/s (c3-q11, 6-8-10
triangle); MVT values `c = 1` (l2 ex.2), `c = 2` (c3-q4), `c = 5/2` Rolle (c3-e3);
sympy confirms c3-e5 / capstone-identical cubic: `f(−1) = 10, f(3) = −22, f(1) = −6`
(max/min/inflection all as keyed); c3-q12 values `g(1) = 4, g(3) = 0` ✓.
Balloon rates `40π` (l4 ex.2) and `72π` (c3-e2), `dr/dt = 1`, `dS/dt = 40π` (c3-e6) ✓.
Optimisation: rectangle 100 m², product-36 sum 12 with `S″(6) = 72/216 = 1/3 > 0` ✓,
open box `V(2) = 128` cm³ with the `x = 6` boundary rejection correctly argued ✓.
Approximations `√26 ≈ 5.1`, `√24 ≈ 4.9`, `∛65 ≈ 4 + 1/48 ≈ 4.0208` (true value 4.02073 —
the file's "4.0207 تقريبًا" is accurate) ✓. All 5 drill answers correct, incl. inflection
`(2, −11)` for `x³ − 6x² + 5`.

**Scope:** all nine book sections [3-1]…[3-9] are present — [3-1] المشتقات العليا
(l1 §1, vocab m3-second/nth-derivative, l4 ex.1, c3-q1, c3-e1), [3-2] related rates,
[3-3] Rolle + MVT + التقريب بنتيجتها, [3-4] first-derivative increase/decrease,
[3-5] local extrema, [3-6] concavity/inflection, [3-7] second-derivative test,
[3-8] curve sketching (l3 five-step recipe), [3-9] practical optimisation ✓.
This matches structure §2 Ch.3, including the [3-1] section that sahl.io omits.

**(b) Errors: none.**
**(c) Suspects: none.** Chapter 3 is fully clean.

---

## Chapter 4 — التكامل (`m4.ts`)

**(a) Items re-derived: 48** — 16 vocab cards, 7 worked solutions, 5 drill answers,
12 quiz, 8 exam. Quiz 16 ✓, exam 60 ✓, all rubrics sum correctly.

Sympy confirms: `∫₀¹ x·e^(x²) dx = (e−1)/2` (l4 ex.2); `∫₁^e ln x dx = 1` (c4-e5b);
area `∫₀² (2x − x²) dx = 4/3` (c4-e6); volume `π∫₀² x⁴ dx = 32π/5` (c4-e8);
drill `∫₋₂² (4 − x²) dx = 32/3` ✓. Riemann-sum arithmetic in l1 independently recomputed:
n = 2 → L = 1, U = 5; n = 4 → L = 1.75, U = 3.75 — both exactly as printed, and the exact
value 8/3 lies between them as claimed. Every indefinite integral was verified by
differentiating the keyed answer back (substitution, parts `x·eˣ`, `x·cos x`, `x·ln x`,
`x·e^(2x) = e^(2x)(2x−1)/4 + C` — all differentiate back to the integrand).
`∫₁² 2x/(x²+1) dx = ln(5/2)` ✓ (limits correctly changed to u = 2, 5).

**Scope:** اللوغاريتم الطبيعي defined as an integral (vocab m4-natural-log, l1 §3) ✓;
المساحات under a curve and between two curves ✓; الحجوم الدورانية by disks about the
x-axis ✓; upper/lower sums, FTC, properties, substitution and parts all present —
matches structure §2 Ch.4 (whose own section numbering the file correctly declines
to assert, per the research file's UNVERIFIED note).

**(b) Errors: none.**

**(c) Suspects: 1 (minor, distractor design).**

- **SUSPECT — `m4.ts`, quiz `c4-q2`.** Keyed answer `$x^3 + C$` is correct, but distractor
  option 2 is `$x^3$` with no `+C`. Its wrongness rests entirely on the indefinite-integral
  convention that the answer must name the whole family; `x³` *is* a valid antiderivative,
  so a strong student could argue the item has two defensible answers. The file's own
  explain ("ونسيانه خطأ") shows the convention is intentional and it is the standard
  وزاري convention — flagged as a borderline distractor, not a wrong key.

---

## Chapter 5 — المعادلات التفاضلية الاعتيادية (`m5.ts`)

**(a) Items re-derived: 48** — 16 vocab cards, 7 worked solutions, 5 drill answers,
12 quiz, 8 exam. Quiz 16 ✓, exam 60 ✓, all rubrics sum correctly.

Every ODE solution was verified by substituting it back into its equation (the file's own
method). Sympy residuals are exactly 0 for the two least trivial: l2 ex.4's
`y = Cx² − x` against `y′ = (x + 2y)/x`, and c5-e6's `y = (Cx³ − x)/2` against
`y′ = (x + 3y)/x` (including the easily-dropped factor ½ from `∫ dv/(1+2v)` — the file
has it right). Capstone q4b's `y = x + Cx²` likewise residual 0. Drill 3
(`y′ = y/x + x/y → y² = 2x²·ln|x| + Cx²`) verified numerically: at x = 2, C = 1 the
derivative from implicit differentiation is 2.192111800368835 vs `y/x + x/y` =
2.1921118003688354 ✓. All particular-solution constants re-solved: C = 2 (l2 ex.3,
`y² = 2x³ + 4`), C = 5/2 (l4 ex.3, `y² = 4x² + 5`), C = 8/3 (c5-e5, `y³ = 3x² + 8`),
C = 4 (c5-e3), C = 5 → `5e^(2x)` (c5-q7), C = 4 → `4e^(−x²)` (c5-e8) — all ✓.
Order/degree items all correct, including both traps: degree reads the *highest*
derivative only (c5-q2 degree 1 despite `(y′)⁴`; c5-e7 order 2 / degree 1 despite `(y′)³`).

**Scope:** the chapter contains **only** separation of variables and homogeneous
equations (`y = vx`) as solution methods ✓ — a full-text scan finds no linear /
integrating-factor / second-order solution method anywhere (the words occur only in
the file header stating they are deliberately excluded, and second-order equations
appear solely as order/degree *examples*, never as things to solve). This matches the
مقدمة scope limiter in structure §2 Ch.5 exactly.

**(b) Errors: none.**
**(c) Suspects: none.** Chapter 5 is fully clean.

---

## Chapter 6 — الهندسة الفضائية (`m6.ts`)

**(a) Items re-derived: 46** — 15 vocab cards, 7 worked solutions/proofs (l2: Thm 8 proof,
three-perpendiculars proof, 2 computations; l4: 2 computations + 1 وزاري-style proof),
4 drill answers, 12 quiz, 8 exam. Quiz 16 ✓, exam 60 ✓, all rubrics sum correctly.

Computations re-derived: projection/distance pairs (20, 60°) → (10, 10√3);
(24, 30°) → (12√3, 12); distances 8/3 with length 13 → projection 12 (5-12-13);
distances 9/2 with length 25 → projection 24 and `sin θ = 7/25 = 0.28`,
`θ = arcsin(0.28) ≈ 16.26°` — the file's "≈ 16°" is the correct rounding (c6-e7);
cube space-diagonal inclination `tan θ = 1/√2`, `θ ≈ 35.26°` (sympy: 35.2644°) ✓.
Both full proofs (Thm 8, three perpendiculars) were checked line by line: in the Thm 8
proof the key step — the line drawn in Q from the foot B is perpendicular both to the
intersection line (by construction) and to AB (since AB ⊥ Q), hence perpendicular to
the plane P spanned by those two intersecting lines, hence to the plane angle's other
side — is logically valid; the three-perpendiculars proof (CD ⊥ two intersecting lines
AB, BD of plane ABD ⇒ CD ⊥ AD) is likewise valid. The Thm 9 existence/uniqueness
argument in c6-e8 (existence by construction + Thm 8; uniqueness via the uniqueness of
the perpendicular from a point to a plane) is sound at school level.

**Scope:** **no solids material** — a full-text scan finds no prism/cylinder (or any
solid) volumes or surface areas anywhere ✓. The cube appears only as the figure for a
dihedral-angle question (drill 3) and an inclination question (l2 ex.4) — applications
of the projection/dihedral material, not المجسمات content. The theorem set is exactly
the required one: dihedral angle + plane angle, perpendicular planes, Theorems 7, 8, 9
and corollaries, orthogonal projection, inclination, three perpendiculars ✓ —
matches structure §2 Ch.6.

**(b) Errors: none.**

**(c) Suspects: 1 (wording only).**

- **SUSPECT — `m6.ts`, lesson `c6-l4`, drill 3 answer gloss.** The keyed result (dihedral
  angle between adjacent cube faces = 90°) is correct, but its one-line justification
  («العمودان على الحرف المشترك … هما حرفان متجاوران لقاعدتين متعامدتين») is compressed to
  the point of being garbled — the two perpendiculars to the shared edge are edges of the
  two *faces*, and their perpendicularity is what needs stating. Result right, rationale
  hard to follow; not a mathematical error.

---

## Capstone — الامتحان الوزاري الشامل (`capstone.ts`)

**(a) Structure & totals audit.** 19 items: 14 written branches × 10 + 5 MCQ points
(Q6A) × 2 = 140 + 10 = **150 marks offered ✓**. Branch structure matches the verified
paper frame: Q1–Q3 two branches, Q4–Q6 three branches, Q6A composite of five 2-mark
points spanning Ch.1/2/3/4, and exactly one theorem branch (q3b = Ch.6 Thm 8) ✓.
Per-chapter sums recomputed from the `unit`/`marks` fields:

| Chapter | Items | Sum | Header claim |
|---|---|---|---|
| 1 Complex | q1a 10 + q5b 10 + q6a2 2 + q6a3 2 | **24** | 24 ✓ |
| 2 Conics | q2a 10 + q6a1 2 + q6c 10 | **22** | 22 ✓ |
| 3 Differentiation apps | q1b 10 + q3a 10 + q4a 10 + q5a 10 + q6a4 2 | **42** | 42 ✓ |
| 4 Integration | q4c 10 + q5c 10 + q6a5 2 + q6b 10 | **32** | 32 ✓ |
| 5 ODEs | q2b 10 + q4b 10 | **20** | 20 ✓ |
| 6 Space geometry | q3b 10 | **10** | 10 ✓ |
| **Total** | | **150** | ✓ |

All 14 written rubrics sum to exactly 10 each.

**(b) All 19 answers re-derived — all correct.** Sympy evidence: q1a `(3−2i)² = 5 − 12i`,
so the roots of `5 − 12i` are `±(3 − 2i)`, sum 0, product `−(3−2i)² = −5 + 12i` ✓;
q5b `(1 − i√3)⁶ = 64` ✓; q6a3 `(2−i)/(1+i) = 1/2 − 3i/2`, conjugate `(1+3i)/2` ✓;
q4c `∫₀¹ x·eˣ dx = 1` ✓; q6b `π∫₀¹ x⁴ dx = π/5` ✓; q4b's `y = x + Cx²` has ODE
residual 0 against `(2y − x)/x` ✓. The remaining items duplicate chapter items already
verified above (q1b balloon `dr/dt = 1`; q2a ellipse `x²/25 + y²/16 = 1, e = 3/5`;
q2b `y² = x³ + 3, C = 3`; q3a extrema 10 / −22; q4a Rolle `c = 5/2`; q5a square 9×9,
81 cm²; q5c area 4/3; q6a1 focus (3, 0); q6a2 `ω¹⁰⁰ = ω` since 100 = 3·33 + 1;
q6a4 `f′(2) = 9`; q6a5 `∫₀¹ 3x² dx = 1`; q6c hyperbola `x²/9 − y²/16 = 1`,
asymptotes `±4/3 x`, `e = 5/3`) — each re-derived here independently, not copied
from the chapter verdicts.

**(c) Errors: 1 — documentation claim in the file header (no question affected).**

- **ERROR — `capstone.ts`, header comment:** «Chapter weights follow the actual
  2025 تمهيدي/دور أول tallies: Ch1 24 · Ch2 22 · Ch3 42 · Ch4 32 · Ch5 20 · Ch6 10».
  The six numbers are internally consistent (they are the capstone's real weights and
  sum to 150, per the table above), but they follow **neither** cited tally in
  `research/math-structure.md` §3.4: تمهيدي 2025 is 24/22/**32**/32/20/**20** and
  دور أول 2025 is **20/20/40/30/20/20**. In particular Ch.3 = 42 appears in no 2025
  round in the research file (40 in every أول/ثانٍ/ثالث round, 32 in تمهيدي), and
  Ch.6 = 10 contradicts both cited rounds' 20 (10 occurs only in later/تمهيدي-2026
  rounds). The mock's weighting is defensible as a design choice, but the header's
  provenance claim for it is false and should be corrected or reworded.

**(d) Suspects: none.**

---

## Summary

| File | Items re-derived | Wrong keys | Other defects |
|---|---|---|---|
| m1.ts | 50 | 0 | — clean |
| m2.ts | 48 | 0 | 1 false explanatory rule (c2-l3 asymptote callout) |
| m3.ts | 48 | 0 | — clean |
| m4.ts | 48 | 0 | 1 borderline distractor (c4-q2, +C convention) |
| m5.ts | 48 | 0 | — clean; scope (separation + homogeneous only) verified |
| m6.ts | 46 | 0 | 1 garbled one-line justification (result correct); no solids ✓ |
| capstone.ts | 19 + totals | 0 | total 150 ✓, per-chapter sums ✓; header weight-provenance claim false |

**Bottom line for the parent agent:** no student-facing answer key in the Mathematics
book needs correction. Two text fixes are recommended before this is called final:
(1) rewrite the hyperbola-asymptote "safe rule" in `m2.ts` lesson c2-l3 — as printed it
produces the reciprocal of the correct slope for horizontal hyperbolas and contradicts
the chapter's own card, example and quiz key; (2) correct the capstone header's claim
that its weights follow the 2025 تمهيدي/دور أول tallies. No content file was edited
during this check.
