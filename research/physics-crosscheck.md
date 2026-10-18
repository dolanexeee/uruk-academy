# Independent precision cross-check — Uruk Academy Physics book

**Scope of this pass:** `src/content/physics/ph1.ts` … `ph9.ts` + `capstone.ts`, checked against
`research/physics-structure.md` §2 (verified curriculum scope) and the constants discipline
of §4 (h = 6.63e-34, c = 3e8, e = 1.6e-19, ε0 = 8.85e-12, σ = 5.67e-8, Wien 2.898e-3,
m_e = 9.11e-31, 1 u = 931.5 MeV/c², hc = 1240 eV·nm). Every answer key was re-derived from
scratch by the checker (who did not author the content): all quiz/exam MCQs (keyed option
correct **and** every other option unambiguously wrong), all written modelAnswers and rubric
allocations, all worked-solution lessons, all practice-drill callout answers, and all
law-card (vocab) formulas/examples. Nontrivial values were re-computed with python3
(resonance frequencies, Compton shifts, Bohr transitions, decay constants, spectrum
boundaries) — recomputed values are quoted where they are the decisive evidence.
Direction claims (current leads/lags, fringe widening/narrowing, majority carriers,
decay Z/A changes) and شرحية model answers were read and checked as physics statements,
not only as numbers. No author report was trusted; only the files on disk.

**Headline result:** the computation is clean. Out of **443 chapter items + 19 capstone
items** re-derived, **zero answer keys are wrong and zero stated values are wrong**.
Three MINOR wording/tagging defects were found, all in the capstone, none affecting any
key or mark: (1) a garbled phrase in the pc-q4b question stem («ضوء الماء الأزرق»);
(2) a garbled central-fringe phrase in pc-q4b's model answer; (3) one sub-item of pc-q3b
whose content belongs to Ch. 2 while the branch is tagged Ch. 3. Details in the capstone
section below.

**Counting convention:** one "item" = one vocab card, one worked solution (lessons l2/l4),
one practice-drill bullet answer, one quiz question, or one exam question.

---

## Chapter 1 — المتسعات (`ph1.ts`)

**(a) Items re-derived: 48** — 16 vocab cards, 7 worked solutions (l2 ×4, l4 ×3),
5 drill answers, 12 quiz, 8 exam. Quiz total 16 marks ✓ (10×1 + 2×3), exam total 60 ✓
(4×5 + 4×10); every written rubric sums to its question's marks (q11/q12 = 3; e5–e8 = 10).

Spot evidence: plate capacitance `ε0·A/d = 8.85e-12 × 0.02 / 1e-3 = 1.77e-10 F = 177 pF` ✓
(vocab, l2 ex.1, and e1 with A = 0.04, d = 2 mm → 177 pF ✓); Pyrex insertion
`5.6 × 177 = 991.2 pF` ✓. Series/parallel chains all re-solved: 4 µF ∥ 12 µF series pair
→ `Ceq = 3 µF, Q = 108 µC, V = 27 V / 9 V` (sum 36 V ✓); mixed network e5
(series 10+15 → 6 µF, ∥ 4 µF → 10 µF, Q = 300 µC, branch charges 120/180 µC,
V = 18 V / 12 V) ✓. Dielectric cases: connected → Q and PE ×k (100→400 µC, 1→4 mJ);
disconnected → V and PE ÷k (20→5 V, 1→0.25 mJ) ✓ — the fixed-quantity logic in q3, q10,
q12 and l2 ex.4 is correct in both directions. RC: `τ = 2e3 × 5e-6 = 10 ms`,
`q(τ) = 0.63 × 50 = 31.6 µC`, `t(½) = τ ln 2 = 6.93 ms` ✓; e6 `τ = 0.02 s, Qmax = 160 µC,
I0 = 8 mA, q(τ) ≈ 101 µC, I(τ) ≈ 2.96 mA` ✓. Drill callout all five correct, incl.
`C = ε0·0.05/5e-4 = 885 pF` and the two-time-constant remainder `80 × 0.37² ≈ 11 µC`.
Units and conversions (mm→m, µF→F, kΩ→Ω) verified in every step.

**(b) Errors: none.**
**(c) Suspects: none.** Chapter 1 is fully clean.

---

## Chapter 2 — الحث الكهرومغناطيسي (`ph2.ts`)

**(a) Items re-derived: 49** — 17 vocab cards, 7 worked solutions, 5 drill answers,
12 quiz, 8 exam. Quiz 16 ✓, exam 60 ✓, all rubrics sum correctly.

Spot evidence: flux `0.4 × 0.05 × cos60° = 0.01 Wb`, max `0.02 Wb` ✓ (also q2 0.015 Wb,
e1 0.01 Wb); Faraday `50 × 0.05/0.1 = 25 V` ✓ (q3: `100 × 0.008/0.04 = 20 V` ✓);
motional emf `0.8 × 0.5 × 10 = 4 V → I = 2 A` ✓ (q5: 3 V ✓); generator peaks
`200 × 0.1 × 0.05 × 100 = 100 V` ✓ (q9: 20 V, e2: 60 V ✓); self-induction
`0.5 × 4/0.2 = 10 V` ✓ (q6: 8 V; q11: 30 V with PE `½×1.5×36 = 27 J` ✓);
inductor energy e3 `½×3×4 = 6 J` ✓. Transformer chain e6 re-derived end to end:
`Vs = 200 × 40/800 = 10 V, Ps = 100 W, Pp = 100/0.8 = 125 W, Ip = 0.625 A` ✓ —
efficiency applied in the correct direction. Drill callout all five correct, incl.
the zero-flux case (surface plane parallel to B ⇒ normal ⊥ B ⇒ Φ = 0) ✓ and the
step-up `20 × 2500/500 = 100 V` ✓. Lenz direction claims (opposes the *change*, not
the field) and the back-emf / high-voltage-transmission شرحيات (I²R loss, ×100 loss
reduction in the l3 worked numbers: 10000 W at 100 V → 100 A vs at 1000 V → 10 A) ✓.

**(b) Errors: none.**
**(c) Suspects: none.** Chapter 2 is fully clean.

---

## Chapter 3 — التيار المتناوب (`ph3.ts`)

**(a) Items re-derived: 49** — 17 vocab cards, 7 worked solutions, 5 drill answers,
12 quiz, 8 exam. Quiz 16 ✓, exam 60 ✓, all rubrics sum correctly.

Spot evidence (python3): `Vrms = 311/√2 = 219.9 ≈ 220 V` ✓; `XC(10 µF, 50 Hz) =
1/(2π·50·10e-6) = 318.3 Ω` (file: ≈318 Ω ✓); resonance `fr(0.2 H, 5 µF) =
1/(2π√LC) = 159.15 Hz` (file: ≈159 ✓), `fr(0.1 H, 40 µF) = 79.58 Hz` (file: ≈79.6 ✓,
also q10 and drill 5 with different L,C pairs giving the same value — both recomputed
independently ✓); LC period `T = 2π√(0.01 × 100 µF) = 6.283 ms` (file: 6.28 ms ✓);
phase `atan(40/30) = 53.13°` (file: ≈53° ✓). Full RLC chains re-solved: l2 ex.3
`Z = 50 Ω, I = 2 A, VR/VL/VC = 60/160/80 V, cosφ = 0.6, P = 120 W`, phasor check
`√(60² + 80²) = 100 V` ✓; e5 `Z = 150 Ω, P = 360 W` ✓; e6 resonance
`XL = XC = 500 Ω, Q = 10, VL = 1000 V` ✓. Phase-direction claims all correct:
current lags in pure L / series-inductive cases, leads in pure C, average power of
pure reactances = 0. Drill callout all five correct, incl. `XL(0.05 H, 50 Hz) = 15.7 Ω`.

**(b) Errors: none.**
**(c) Suspects: none.** Chapter 3 is fully clean.

---

## Chapter 4 — الموجات الكهرومغناطيسية (`ph4.ts`)

**(a) Items re-derived: 49** — 17 vocab cards, 7 worked solutions, 5 drill answers,
12 quiz, 8 exam. Quiz 16 ✓, exam 60 ✓, all rubrics sum correctly.

Spot evidence (python3): `c = 1/√(ε0µ0) = 2.999e8 ≈ 3e8 m/s` ✓; LC transmitters
`f(1 µH, 100 pF) = 15.915 MHz, λ = 18.85 m` (file: 15.9 MHz / ≈18.9 m ✓);
`f(1 µH, 25 pF) = 31.83 MHz, λ = 9.42 m` ✓; `f(4 µH, 100 pF) = 7.958 MHz, λ = 37.7 m`
(e8 ✓). Point-source intensities: `100 W @ 2 m = 1.989 W/m²`, `@ 5 m = 0.318 W/m²`
(ratio 6.25 = 2.5² ✓); `200 W @ 4 m = 0.995`, `@ 8 m = 0.249` (quartering ✓);
e3 `400 W @ 5 m = 1.273 W/m²` ✓; e8 `500 W @ 10 m = 0.398 W/m²` ✓. Radiation pressure
`900/3e8 = 3e-6 Pa` (absorption; doubling on reflection stated correctly) ✓;
momentum `3/3e8 = 1e-8 kg·m/s` ✓. Visible-band edges recomputed: `f(700 nm) =
4.29e14 Hz`, `f(400 nm) = 7.5e14 Hz` ✓, and every boundary in the l3 spectrum table
(radio < 3e8 Hz; microwave 3e8–3e11; IR to 4.29e14; UV to 3e16; X 3e16–3e19;
gamma > 3e19) matches `c/λ` at its stated wavelength limits ✓. All seven vocab
λ→f examples (150 m→2 MHz, 10 GHz→3 cm, 10 µm→3e13, 500 nm→6e14, 300 nm→1e15,
0.1 nm→3e18, 0.001 nm→3e20) ✓. Drill callout all five correct.

**(b) Errors: none.**
**(c) Suspects: none.** Chapter 4 is fully clean. (This شرحيات-majority chapter's
model answers — wave nature, Hertz, spectrum ordering, inverse-square and
reflection-doubling explanations — were read in full; no false statement found.)

---

## Chapter 5 — البصريات الفيزيائية (`ph5.ts`)

**(a) Items re-derived: 49** — 17 vocab cards, 7 worked solutions, 5 drill answers,
12 quiz, 8 exam. Quiz 16 ✓, exam 60 ✓, all rubrics sum correctly.

Spot evidence (python3): Young `Δy = 600 nm × 1.2 / 0.5 mm = 1.44 mm`, `y3 = 4.32 mm`,
first dark at `0.72 mm` ✓; under water `λn = 600/1.33 = 451 nm`, `Δy′ = 1.44/1.33 =
1.083 mm` (file: ≈1.08 ✓ — narrowing direction correct, also q9). Single slit:
`sinθ = 500 nm/0.1 mm = 0.005 → θ = 0.286°` (file: 0.29° ✓), central width
`W = 2λL/a = 20 mm`, side = 10 mm ✓ (q4: 4 mm ✓). Grating: `d(500/mm) = 2 µm`;
angles `asin(0.3) = 17.46°`, `asin(0.6) = 36.87°`, `asin(0.9) = 64.16°` (file:
17.5/36.9/64.2 ✓); max order `2/0.6 = 3.33 → 3` ✓ (e4: `2.5/0.65 = 3.85 → 3` ✓);
e6 angles `asin(0.26) = 15.07°`, `asin(0.52) = 31.33°`, third-order `asin(0.78) =
51.26°` (file: 15.1/31.3/51.3 ✓). Malus chain: unpolarized 80 → 40 → `40 × cos²60° =
10 W/m²` ✓ (e3: 120 → 60 → 15 ✓; q7: I0/2 × cos²45° = I0/4 ✓). Brewster:
`atan(1.5) = 56.31°` ✓, drill water `atan(1.33) = 53.06°` (file: ≈53.1 ✓). Drill
callout all five correct, incl. grating `d(250/mm) = 4 µm`, max order `4/0.6 = 6.67 → 6` ✓, and the single-slit first-dark position `λL/a = 600 nm × 1 / 0.05 mm = 12 mm` ✓.

**(b) Errors: none.**
**(c) Suspects: none.** Chapter 5 is fully clean.

**Scope:** no thin-film and no Rayleigh-criterion content anywhere in the chapter —
the only occurrence of either term is the file header comment stating their
exclusion ✓, per structure §5.
...[truncated 12005 chars]

---

## Chapter 6 — الفيزياء الحديثة (+ النسبية) (`ph6.ts`)

**(a) Items re-derived: 50** — 18 vocab cards, 7 worked solutions, 5 drill answers,
12 quiz, 8 exam. Quiz 16 ✓, exam 60 ✓, all rubrics sum correctly.

Spot evidence (python3): Stefan `5.67e-8 × 5800⁴ = 6.42e7 W/m²` (file's intermediate
`5800⁴ = 1.13e15` ✓); Wien `2.898e-3/5800 = 4.997e-7 m ≈ 500 nm` ✓; cutoff
`f0(W = 2 eV) = 2 × 1.6e-19 / 6.63e-34 = 4.83e14 Hz` (file: ≈4.8e14 ✓),
`λ0 = 1240/2 = 620 nm` ✓; photon mass `2.48 × 1.6e-19 / (3e8)² = 4.41e-36 kg` ✓;
momentum `6.63e-34/500 nm = 1.326e-27` ✓; Compton constant `h/(m_e·c) = 2.426e-12 m`
(file: 2.43e-12 ✓), 60° shift `1.21e-12 m`, scattered `0.02 nm + 0.00121 nm =
0.0212 nm` ✓; de Broglie `h/(9.11e-31 × 1e6) = 7.28e-10 m ≈ 0.73 nm` ✓;
uncertainty `h/(4π × 1 nm) = 5.28e-26 kg·m/s` ✓; γ(0.6c) = 1.25, γ(0.8c) = 1.667 —
relativistic electron KE at 0.6c `(0.25)(0.511) = 0.128 MeV` vs the file's classical
comparison `½m₀v² = 0.092 MeV` (recomputed 0.0922 ✓, correctly stated as smaller);
length contraction both ways: `100 m @ 0.6c → 80 m` (l2 ex.4) and
`100 m @ 0.8c → 60 m` (vocab) ✓; e7 at 0.8c: dilated lifetime `1.667 × 4 = 6.67 µs`,
`KE = 0.341 MeV`, total `0.852 MeV = 0.511 + 0.341` ✓. Drill callout all five correct,
incl. `λ0(W = 3.1 eV) = 400 nm` with the correct no-emission verdict for 450 nm
(`E = 1240/450 = 2.76 eV < 3.1 eV`) and `E(2 mg) = 2e-6 × 9e16 = 1.8e11 J` ✓.

**(b) Errors: none.**
**(c) Suspects: none.** Chapter 6 is fully clean.

**Scope:** relativity (Lorentz factor, time dilation, length contraction, relativistic
mass/momentum/KE, simultaneity) appears **only** in this chapter ✓ — a full-text scan
of ph1–ph5 and ph7–ph9 finds no relativity content (hits are the unrelated word
«نسبيًا» = "relatively", and transformer «نسبة التحويل» in Ch. 2).

---

## Chapter 7 — إلكترونيات الحالة الصلبة (`ph7.ts`)

**(a) Items re-derived: 50** — 18 vocab cards, 7 worked solutions, 5 drill answers,
12 quiz, 8 exam. Quiz 16 ✓, exam 60 ✓, all rubrics sum correctly.

Spot evidence: every transistor chain re-solved with unit unification (µA↔mA):
vocab/l2 ex.1 `IC = 100 × 20 µA = 2 mA, IE = 2.02 mA` ✓; amplifier deltas
`ΔIC = 1 mA, ΔIE = 1.01 mA` ✓; practice `β = 80, IB = 50 µA → IC = 4 mA, IE = 4.05 mA`;
`IE = 5.05, IB = 0.05 → IC = 5.00 mA, β = 100` ✓; وزاري-style `β = 75 → IC = 3 mA,
IE = 3.04 mA, ΔIC = 0.6 mA, ΔIE = 0.608 mA` ✓; q12 `β = 90 → 2.7 / 2.73 mA` ✓;
e7 `β = 120 → 1.8 / 1.815 mA, ΔIC = 0.6 mA` ✓; e3/drill 5 `β = 4.5 mA / 30 µA = 150,
IE = 4.53 mA` ✓. Band-gap photons: Si `1240/1.1 = 1127 nm` (IR ✓),
`Eg = 1.76e-19 J` ✓; Ge `1240/0.67 = 1851 nm`, `Eg = 1.072e-19 J` ✓ (smaller gap →
longer wavelength, direction stated correctly); insulator card `1240/5 = 248 nm` ✓;
e8 `Eg = 2.0 eV → 3.2e-19 J, λ = 620 nm (visible ✓), f = E/h = 4.83e14 Hz`
(cross-check c/λ = 4.84e14, agreement within the constants' rounding ✓).
Direction/classification claims all correct: n-type majority electrons / minority
holes, p-type the reverse, both crystal types electrically neutral; depletion
widens under reverse bias and narrows under forward bias; Si barrier ≈ 0.7 V vs
Ge ≈ 0.3 V, incl. drill 3's verdict that 0.5 V forward drives the Ge diode but
not the Si diode ✓. Doping examples (P/As/Sb pentavalent donors; B/Ga/In trivalent
acceptors) all correct.

**(b) Errors: none.**
**(c) Suspects: none.** Chapter 7 is fully clean.

---

## Chapter 8 — الأطياف الذرية والليزر (`ph8.ts`)

**(a) Items re-derived: 49** — 17 vocab cards, 7 worked solutions, 5 drill answers,
12 quiz, 8 exam. Quiz 16 ✓, exam 60 ✓, all rubrics sum correctly.

Spot evidence (python3): level table `E_n = −13.6/n²` and `r_n = 0.53 n²` recomputed
for n = 1…6 (E: −13.6, −3.40, −1.51, −0.85, −0.544, −0.378 eV; r: 0.53, 2.12, 4.77,
8.48, 13.25 Å) — every value quoted in the chapter matches ✓. Transitions:
`3→2: E = 1.889 eV, λ = 1240/1.889 = 656.5 nm` (file: 656 ✓, Balmer red);
`2→1: 10.2 eV, 121.6 nm` (Lyman UV ✓); `4→3: 0.661 eV, 1875.6 nm` (file: 1876 ✓,
Paschen IR); `4→2: 2.55 eV, 486 nm` ✓; `5→2: 2.856 eV, 434 nm` ✓;
`6→2: 3.022 eV, 410 nm` (q11 ✓); `3→1: 12.09 eV` (e1 ✓); `4→1: 12.75 eV, 97.3 nm`
(e5 ✓). Series tagging by final level (1 Lyman/UV, 2 Balmer/visible, 3 Paschen/IR)
is correct in every item. X-ray minima: `1240/50000 = 0.0248 nm` (50 kV),
`1240/31000 = 0.04` (q4), `1240/20000 = 0.062` (e3), `1240/25000 = 0.0496` (drill),
`1240/40000 = 0.031`, halving to `0.0155 nm` on doubling V (e6 ✓, with
`Emax = 40 keV = 6.4e-15 J` ✓). Laser photons: He-Ne `1240/632.8 = 1.96 eV` ✓,
ruby `1240/694.3 = 1.79 eV` ✓; ionization from n = 2: `3.40 eV, λ = 1240/3.4 =
364.7 nm` (drill: ≈365 ✓). The copper characteristic line quoted in the vocab
(≈0.154 nm) is the correct Cu Kα value. شرحيات (X-ray production continuous vs
characteristic, stimulated vs spontaneous emission, population-inversion
rationale, resonator function) read in full — no false statement found.

**(b) Errors: none.**
**(c) Suspects: none.** Chapter 8 is fully clean.

---

## Chapter 9 — الفيزياء النووية (`ph9.ts`)

**(a) Items re-derived: 50** — 18 vocab cards, 7 worked solutions, 5 drill answers,
12 quiz, 8 exam. Quiz 16 ✓, exam 60 ✓, all rubrics sum correctly.

Spot evidence (python3): He-4 mass defect `2(1.00728) + 2(1.00866) − 4.00150 =
0.03038 u` (using the file's own stated nucleon masses), `BE = 0.03038 × 931.5 =
28.30 MeV`, `BE/A = 7.07 MeV` ✓; Fe-56 from the curve peak `BE = 8.8 × 56 =
492.8 MeV`, `Δm = 492.8/931.5 = 0.529 u` ✓; q11 `BE = 0.04 × 931.5 = 37.26 MeV`,
`BE/A = 4.66 MeV` ✓. Decay chains: I-131 `24 d / 8 d = 3 half-lives →
4.8e20/8 = 6.0e19, 12.5%` ✓; activity example `λ = 0.693/8 d = 0.0866 /day =
1.003e-6 /s` (file: ≈1.00e-6 ✓ — the days→seconds conversion is done explicitly
and correctly), `A = λN ≈ 3.7e10 Bq ≈ 1 Ci` ✓; C-14 dating `A/A0 = 1/4 → 2
half-lives → 2 × 5730 = 11460 years` ✓; practice `λ(6 d) = 0.1155 /day,
5600/8 = 700 Bq` ✓; e5 `λ(5 d) = 0.1386 /day, 8000/8 = 1000 Bq, →500 Bq needs
4 half-lives = 20 days` ✓; e3 `λ(4 d) = 0.173 /day` ✓; q10 `20/5 = 4 → 1/16` ✓.
Displacement laws all correct in both directions: alpha Z−2/A−4 (U-238→Th-234),
beta-minus Z+1/A fixed (C-14→N-14; drill P-32 → Z = 16, A = 32, sulfur-32 ✓),
gamma Z/A unchanged. Neutron counts: U-238 N = 146, Fe-56 N = 30, Pb-208 N = 126,
Al-27 N = 14, O-16 N = 8 ✓. Drill callout all five correct, incl. activity
`0.03 × 2000 = 60 Bq` ✓.

**(b) Errors: none.**
**(c) Suspects: none.** Chapter 9 is fully clean.

---

## Capstone — الامتحان الوزاري الشامل (`capstone.ts`)

**(a) Structure & totals audit.** 19 items: 14 written branches × 10 + 5 MCQ points
(Q6C) × 1 = 140 + 5 = **145 marks offered ✓**, matching the header and the intro
note (145 offered / ترك 45 / 180 minutes, the دور أول/ثانٍ 2025 figures per
structure §3). All 14 written rubrics sum to exactly 10 each. Per-chapter sums
recomputed from the `unit`/`marks` fields:

| Chapter | Items | Sum | Header claim |
|---|---|---|---|
| 1 Capacitors | q1a 10 + q1b 10 | **20** | 20 ✓ |
| 2 Induction | q2a 10 + q2b 10 + q4a 10 | **30** | 30 ✓ |
| 3 AC circuits | q3a 10 + q3b 10 + q6c1 1 + q6c2 1 | **22** | 22 ✓ |
| 4 EM waves | q6b 10 | **10** | 10 ✓ |
| 5 Physical optics | q4b 10 + q5a 10 | **20** | 20 ✓ |
| 6 Modern physics | q6a 10 + q6c3 1 + q6c4 1 + q6c5 1 | **13** | 13 ✓ |
| 7 Solid state | q5b 10 | **10** | 10 ✓ |
| 8 Atomic spectra & laser | q4c 10 | **10** | 10 ✓ |
| 9 Nuclear | q5c 10 | **10** | 10 ✓ |
| **Total** | | **145** | ✓ |

Unlike the Mathematics capstone, this header's provenance claim is honest:
the weights are labelled a design blend inside the verified 2025 ranges,
and they are exactly the weights the file actually carries.

**(b) Branch/chapter tagging audit.** Every item's `unit` was checked against the
chapter its content belongs to in structure §2: q1a/q1b → 1 ✓; q2a/q2b → 2 ✓;
q4a (transformer) → 2 ✓ (transformer/power transmission is Ch. 2 content per
§2, correctly tagged even though it sits in Q4); q3a → 3 ✓; q4b/q5a (Young) → 5 ✓;
q4c (Bohr) → 8 ✓; q5b (PN junction) → 7 ✓; q5c (nuclear force) → 9 ✓;
q6a (photoelectric) → 6 ✓; q6b (EM spectrum) → 4 ✓; q6c1/q6c2 → 3 ✓;
q6c3/q6c4/q6c5 (photon energy, de Broglie, time dilation) → 6 ✓.
One impurity, listed as defect 3 below.

**(c) All 19 answers re-derived — all numerically correct.** q1a mixed network:
series 12∥6 → 4 µF, total 12 µF, Q = 288 µC, parallel branch 192 µC, series
branch 96 µC, V = 8 V / 16 V (sum 24 V ✓). q2a: `250 × 0.005/0.05 = 25 V`,
`I = 5 A`, Lenz direction (opposes the *decrease*) ✓. q3a: `Z = √(40² + 30²) =
50 Ω, I = 2 A, cosφ = 0.8, φ = atan(30/40) = 36.9°, P = 160 W` ✓. q4a transformer:
`Vs = 220 × 55/1100 = 11 V`, ideal `Is = 10 A`, at η = 90% `Pout = 0.9 × 110 =
99 W → Is = 9 A` ✓ (efficiency applied in the correct direction). q5a Young:
`Δy = 500 nm × 1.5 / 0.4 mm = 1.875 mm, y4 = 7.5 mm` ✓. q6a photoelectric:
`E = 1240/400 = 3.1 eV, KEmax = 0.8 eV, Vs = 0.8 V, λ0 = 1240/2.3 = 539.1 nm`
(file: ≈539 ✓). Q6C MCQs: `Vrms = 170/√2 = 120.2 ≈ 120 V` ✓ (keyed option 2,
distractors 170/85/240 all unambiguously wrong); resonance Z = R minimum ✓;
`E(600 nm) = 2.07 eV` ✓; de Broglie decreases as momentum increases ✓; moving
clock runs slower (time dilation direction) ✓. All شرحية model answers
(q1b, q2b, q3b, q4b, q4c, q5b, q5c, q6b) read in full: Lenz/energy-conservation,
resonance, PN-junction, nuclear-force and Bohr-line-spectrum explanations are
physically correct, with the two wording exceptions below.

**(d) Defects: 3 — all MINOR, none affecting any key, value, or mark.**

- **MINOR (wording) — `capstone.ts`, `pc-q4b`, question stem:** «استبدال ضوء أخضر
  بضوء الماء الأزرق» — the phrase «ضوء الماء الأزرق» is garbled (presumably a stray
  word; the intended text is simply «الضوء الأزرق»). The parenthetical «(طول موجي
  أقصر)» and the model answer make the intent unambiguous, and the keyed physics
  (shorter λ ⇒ narrower fringes) is correct — a wording fix only.

- **MINOR (wording) — `capstone.ts`, `pc-q4b`, modelAnswer, part (٢):** «…تبقى
  منتظمة حول الهدبة المركزية البيضاء الميل للون الضوء نفسه» — garbled, and read
  literally it calls the central fringe white under monochromatic illumination.
  For monochromatic light the central fringe is bright **in the light's own
  colour**; a white central fringe is the white-light case. The item's actual
  claim (fringes narrow and stay centred when λ decreases) is correct; the
  sentence should be rewritten, e.g. «حول الهدبة المركزية المضيئة بلون الضوء نفسه».

- **MINOR (tagging) — `capstone.ts`, `pc-q3b`, `unit: 3`:** sub-item (٣) of this
  choose-two علّل branch — «تُنقل القدرة الكهربائية بفولطية عالية وتيار واطئ» —
  is Ch. 2 content per structure §2 (transformer / power transmission, taught
  in ph2.ts l3), while the branch is tagged Ch. 3 and its other two sub-items
  (pure-inductor average power; series resonance) are genuinely Ch. 3. The
  model answer for (٣) is physically correct (P = VI, loss ∝ I²R); only the
  branch's chapter purity is affected, by one optional sub-item of three.

**(e) Suspects: none further.**

---

## Summary

| File | Items re-derived | Wrong keys | Wrong values | Other defects |
|---|---|---|---|---|
| ph1.ts | 48 | 0 | 0 | — clean |
| ph2.ts | 49 | 0 | 0 | — clean |
| ph3.ts | 49 | 0 | 0 | — clean |
| ph4.ts | 49 | 0 | 0 | — clean |
| ph5.ts | 49 | 0 | 0 | — clean; scope (no thin films / Rayleigh) verified |
| ph6.ts | 50 | 0 | 0 | — clean; relativity confined to Ch. 6 verified |
| ph7.ts | 50 | 0 | 0 | — clean |
| ph8.ts | 49 | 0 | 0 | — clean |
| ph9.ts | 50 | 0 | 0 | — clean |
| capstone.ts | 19 + totals/tagging | 0 | 0 | total 145 ✓, per-chapter sums ✓, header claim honest; 3 MINOR wording/tagging defects (pc-q4b ×2, pc-q3b ×1) |

**Final verdict: 462 items re-derived (443 chapter items + 19 capstone items);
wrong keys: 0. Wrong values: 0.** No student-facing answer key in the Physics
book needs correction. Three MINOR text fixes are recommended before this is
called final, all in `capstone.ts`: (1) remove the stray word in pc-q4b's stem
(«ضوء الماء الأزرق» → «الضوء الأزرق»); (2) rewrite pc-q4b's central-fringe
sentence so the monochromatic central fringe is described as bright in the
light's own colour, not white; (3) note or re-tag pc-q3b, whose third علّل
sub-item is Ch. 2 (power transmission) content inside a Ch. 3 branch.
No content file was edited during this check.

---

## Fixes applied after this check (parent agent, same day)

1. `pc-q4b` stem: «ضوء الماء الأزرق» → «ضوء أزرق» (stray word removed).
2. `pc-q4b` modelAnswer: the central-fringe sentence rewritten — the monochromatic
   central fringe is now «المضيئة بلون الضوء نفسه» (no "white" claim).
3. `pc-q3b` sub-item (٣): the power-transmission علّل (Ch. 2 content) replaced with a
   genuinely Ch. 3 علّل — توصيل متسعة على التوازي مع الأحمال الحثية لتحسين عامل القدرة —
   with a matching model answer (reactive power supplied locally, total current and
   I²R losses fall, cos φ → 1). The branch is now purely Ch. 3; totals unchanged
   (still unit 3, 10 marks, rubric 5+5).
