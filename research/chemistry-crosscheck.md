# Chemistry — Independent Cross-Check (Stage D)

Two files-only checkers who did **not** author the content re-derived the
book independently (2026-10-18): Checker A covered Chapters 1–4, Checker B
covered Chapters 5–8 + the capstone. The coordinator then ran a third pass
over the one gap neither checker owned (capstone↔Chapters 1–4 duplication).
Method throughout: recompute every numerical item with python3 **from the
givens printed in the problem**, verify every `\ce{...}` equation for atom
**and** charge balance, and judge شرحية model answers as chemistry.

## Coverage

| Scope | Items re-derived | Result |
|---|---|---|
| Ch.1 الثرموداينمك | 34 | clean |
| Ch.2 الاتزان الكيميائي | 24 | clean (1 rounding nit, fixed) |
| Ch.3 الاتزان الأيوني | 28 | clean |
| Ch.4 التأكسد والاختزال والكيمياء الكهربائية | 32 | clean |
| Ch.5 الكيمياء التناسقية | EAN ×10, Werner Cl counts, ~12 naming pairs both directions, hybridisation set | 1 misleading prose (fixed) |
| Ch.6 طرائق التحليل الكيميائي | all gravimetric factors/percentages + all titrations | clean |
| Ch.7 الكيمياء العضوية | 2 numerical + ~45 equations + naming pairs | 3 wrong names + 1 misleading prose (fixed) |
| Ch.8 الكيمياء الحياتية | hydrolysis/peptide/saponification sets | 1 wrong intermediate (fixed) |
| Capstone | all 7 مسائل branches + design audit | marks PASS; duplication FAIL → 12 items rewritten |

Equation census (Checker A): 139 equation strings parsed across Ch.1–4 —
Ch.1/2/3 are 100% atom- and charge-balanced; Ch.4 contains exactly the 5
deliberately unbalanced strings the author disclosed (3 problem skeletons
the student must balance + 2 labelled intermediate stages of the
ion–electron method), each confirmed against its surrounding text as a
genuine input/intermediate. Checker B verified Ch.5–8 + capstone equations
likewise, including the ionic Tollens/Fehling forms in the capstone
(atoms and charge balance exactly) and k7's school net forms judged as
net equations (they balance).

Constants discipline confirmed everywhere: F = 96500 (never 96485),
R = 0.0821 in Kp/Kc contexts and 8.314 in Gibbs contexts, Kw = 1.0×10⁻¹⁴,
water c = 4.184 J/(g·°C), 1 cal = 4.184 J, log 2 = 0.301 / log 3 = 0.477
as printed; Ch.4's E° values match the dossier series exactly. Every
small-x / common-ion approximation claimed in Ch.2–3 was re-checked
numerically and is valid.

## Defects found and fixed pre-delivery

**Chapter files (6 fixes):**
1. `k7` kc7-l3 grammar table — ketone example $\ce{CH3COCH3}$ named
   «بروبان» (propane) → **بروبانون** (propanone). *(wrong name)*
2. `k7` kc7-l4 practice P2 finalAnswer — oxidation product of
   propan-2-ol summarised as «بروبان» → **بروبانون**. *(wrong name)*
3. `k7` kc7-l4 drills callout — butan-2-one named «بيوتان» twice →
   **بيوتان-2-ون** both times. *(wrong name ×2)*
4. `k8` kc8-l2 Ex.1 step 2 — formula labelled n(glucose) = 2 × 0.100 =
   0.200 mol; 0.200 mol is the *total* monosaccharides. Corrected to
   n(glucose) = n(fructose) = 0.100 mol with the note rewritten. Final
   answers were already right. *(wrong intermediate)*
5. `k7` vocab k7-saytzeff-rule — explanatory clause inverted the rule
   (H removed from the carbon "richest in hydrogens"); corrected to the
   more-substituted adjacent carbon (fewer hydrogens). The entry's main
   clause, example, and quiz q5 were already correct. *(misleading prose)*
6. `k5` kc5-l3 geometry callout — claimed square-planar is the only
   geometry showing cis/trans "together with optical isomerism in the
   octahedral"; contradicts the book's own cis-trans card and the facts.
   Rewritten: cis/trans occurs in square-planar **and** octahedral;
   optical isomerism occurs in certain octahedral complexes, not in
   square-planar. *(misleading prose / internal inconsistency)*

**Rounding nit (1 fix):** `k2` exam e5 — Kp printed as 14.778 atm from a
2-significant-figure Kc = 0.60; now ≈ 14.8 atm in model answer and rubric.

**Capstone originality (12 items rewritten by the coordinator):** the
authoring brief required original questions ("different numbers/contexts"
from the chapters). Checker B proved duplication for Ch.5–7 branches; the
coordinator's own pass found the same class of problem in Ch.1–4
branches. All were replaced with fresh items, re-derived before writing:

- `kc-q1b` — sub-items duplicated k1-q12 (دالة الحالة/هيس) and k1-e8
  (الحالات الأربع). Replaced with: علّل تكوين موجب/احتراق سالب دائمًا ·
  مقارنة المسعر القنبلة ومسعر القهوة · علّل إشارتي ΔS لتحلل CaCO₃
  واصطناع NH₃.
- `kc-q2b` — duplicated k2-q12 (العامل المساعد) and k2-e7 (لوشاتليه على
  اصطناع الأمونيا). Replaced with: معنى K الكبيرة/الصغيرة · الحكم بدلالة
  Q مقابل K · علّل الغاز الخامل عند حجم ثابت.
- `kc-q3a` — same buffer numbers as k3's worked example (HA 0.20 /
  NaA 0.10, Ka 1.0×10⁻⁵ → pH 4.70). New: HA 0.20 / NaA 0.20,
  Ka = 5.0×10⁻⁵ → [H⁺] = 5.0×10⁻⁵, pH = 5 − log 5 = 4.30, pOH = 9.70,
  [OH⁻] = 2.0×10⁻¹⁰.
- `kc-q3b` — duplicated k3-e7 (التمذوب) and k3-e8 (الأيون المشترك).
  Replaced with: علّل pH الماء عند 50 °C · مقارنة HCl وCH₃COOH بنفس
  التركيز · علّل تعادل خلات الأمونيوم (Ka ≈ Kb).
- `kc-q4a` — the Daniell cell verbatim from k4-l2 Ex.2 (same values
  +1.10 V / −212.3 kJ). New cell: Ni/Cu → E° = +0.59 V,
  ΔG° = −113.87 kJ/mol (pair not computed anywhere in Ch.4).
- `kc-q4b` — lead-acid essay duplicated k4-e7. Replaced with a hydrogen
  fuel-cell essay (half-reactions, direct conversion, advantages,
  limitation) — in the chapter's scope, not assessed in Ch.4.
- `kc-q4c` — EAN pair [Fe(CN)₆]⁴⁻/[Ni(CO)₄] duplicated k5 items.
  New pair: [Cr(CO)₆] EAN = 36 (satisfies) and [Pt(NH₃)₄]²⁺ EAN = 84
  (does not satisfy; Rn = 86).
- `kc-q5a` — part (1) definition now qualified (primary-valency anions
  may sit inside or outside the sphere); part (2) naming pair
  [Cu(NH₃)₄]SO₄/K₄[Fe(CN)₆] duplicated k5 items → replaced with
  [Fe(H₂O)₆]Cl₃ and K₂[PtCl₆] (Pt +4 from charge balance).
- `kc-q5b` — identical numbers to k6-l2 Ex.2 (0.480 g / 0.466 g /
  40.00%). New: 0.800 g sample, 0.932 g BaSO₄ → GF 0.412, sulfate
  0.384 g, 48.0%.
- `kc-q5c` — precipitation-method steps duplicated k6-q11's علل set.
  Replaced with a qualitative wet-tests essay (Cl⁻/SO₄²⁻/NH₄⁺ detection
  + the AgCl-vs-BaSO₄ ammonia distinction).
- `kc-q6a` — chain overlapped k7-q12's steps. Reversed: starts from
  ethyl ethanoate → acid hydrolysis → carbonate test → HBr → alcoholic
  KOH elimination.
- `kc-q6b` — ethanal/propanone Tollens+Fehling duplicated k7-e6
  verbatim. Replaced with three fresh علل (ether inertness, carboxylic
  acid dimer boiling points, amine basicity), answer two.

After the fixes: per-chapter capstone marks still exactly
{1:20, 2:20, 3:20, 4:20, 5:20, 6:20, 7:20, 8:5} = 145, all rubrics sum
to their items (mechanical audit re-run, ALL PASS).

## What the checkers could not verify (honest limits)

- Printed-given data (ΔHf°/S° tables etc.) against the ministry book's
  own tables — arithmetic *from* the givens and all internal cross-reuse
  verified consistent; provenance of the givens themselves is the
  research dossier's, not re-audited here.
- Fidelity of شرحية model answers to the ministry book's exact expected
  phrasing — checked for chemical correctness, not wording provenance.
- Rendering — verified separately by the coordinator in the real app
  (Playwright: zero `.katex-error` across the capstone walk and the
  Chapter 1 flows; screenshots 40–43 inspected by eye).
