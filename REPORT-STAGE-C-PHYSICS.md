# REPORT — PROGRAM STAGE C: the complete Physics Book (الفيزياء — السادس العلمي)

**Delivered:** 2026-10-18 · **Live:** https://uruk-academy.vercel.app (bundle `index-Tgfdd8VI.js` — verified byte-identical hash to the locally tested build, HTTP 200)
**Repo:** github.com/dolanexeee/uruk-academy
**Commission:** Mustafa, 2026-10-18 — the full program («ابني كل شي، اريد كل شي مثالي»), Stage C of the science-books sequence after Stage A+B (engine + Mathematics). Chemistry is the next stage under a separate commission and was NOT started.

---

## Structure verified before authoring (dossier: `research/physics-structure.md`)

Primary sources: a mirror of the ministry textbook itself (contents + Ch. 1 read directly, incl. the book's dielectric table and worked examples), mlazemna's post-exam tallies of the official papers (2024 + all four 2025 rounds), sahl.io's current lesson index, and the ministry's official model answers (2022 تمهيدي, text-readable).

**The decisive scope fact — the book is now NINE chapters, not ten.** The older print had ten chapters (contents at book pp. 311–312), and the 2024 papers still examined ten (tally: 143 offered / ترك 43). In the **revised book (الكتاب الجديد المنقّح, 2025 print onward)** the old Ch. 6 «الفيزياء الحديثة» was **merged with the old Ch. 9 «النظرية النسبية» into one chapter** — stated verbatim as a تنبيه on mlazemna's pages for every 2025 round, corroborated by sahl.io's 9-chapter index and by every 2025 tally counting exactly nine chapters. The book was therefore built as the current revised print:

١ المتسعات · ٢ الحث الكهرومغناطيسي · ٣ التيار المتناوب · ٤ الموجات الكهرومغناطيسية · ٥ البصريات الفيزيائية · ٦ الفيزياء الحديثة (النسبية مدمجة فيها) · ٧ إلكترونيات الحالة الصلبة · ٨ الأطياف الذرية والليزر · ٩ الفيزياء النووية (old Ch. 10's content).

**Further documented scope decisions** (dossier §2/§5): per-chapter content maps follow the old book's own section lists (contents unchanged by the merger) + teacher-ملزمة corroboration; thin films and the Rayleigh criterion in Ch. 5 are **excluded** (unconfirmed in the current print's indexes); transformers are taught in Ch. 2 as the application of mutual induction; no 2026 حذوفات were followed (none verifiable); all computation uses the constants the ministry papers themselves print (h = 6.63×10⁻³⁴, c = 3×10⁸, e = 1.6×10⁻¹⁹, ε₀ = 8.85×10⁻¹², σ = 5.67×10⁻⁸, Wien 2.898×10⁻³, 1 u = 931.5 MeV/c²).

## The book (files `src/content/physics/ph1.ts`–`ph9.ts` + `capstone.ts`)

Per chapter, at the Mathematics book's standard: 4 lessons (مفهوم → أمثلة محلولة خطوة بخطوة → قوانين وخلاصة → تمارين متدرجة), law/definition flashcards, chapter quiz 12 q / 16 marks (10 MCQ×1 + 2 written×3 with rubrics), chapter exam 8 q / 60 marks / 45 min (4 MCQ×5 + 4 written×10 with rubrics). Physics-specific discipline per the commission: **units in every worked-solution step**, SI conversions as explicit teaching steps, and — because the real physics paper is **شرحيات-majority** (≈55 مسائل / ≈90 شرحيات of 145) — every chapter carries شرح/علّل/اشتقاق/نشاط written questions with full model answers, not computations alone (Ch. 4 leans furthest: 3 of 4 exam written questions are شرحية-style, matching its شرحيات-only treatment in real rounds).

| Chapter | Cards | Signature content |
|---|---|---|
| ١ المتسعات | 16 | Faraday experiment, dielectric table values from the book, RC charge/discharge |
| ٢ الحث الكهرومغناطيسي | 17 | Lenz + energy conservation, generators, transformer chain with efficiency |
| ٣ التيار المتناوب | 17 | phasor-verified RLC chains, resonance, quality factor |
| ٤ الموجات الكهرومغناطيسية | 17 | spectrum boundaries recomputed from c = λf, inverse-square intensity |
| ٥ البصريات الفيزيائية | 17 | Young (incl. under water), single slit, grating, Malus, Brewster |
| ٦ الفيزياء الحديثة | 18 | photoelectric + Compton + de Broglie + uncertainty **and** relativity (merged) |
| ٧ إلكترونيات الحالة الصلبة | 18 | band gaps as photons (Si 1127 nm), PN junction, transistor chains |
| ٨ الأطياف الذرية والليزر | 17 | Bohr levels/transitions n = 1…6, X-ray λ_min, laser levels |
| ٩ الفيزياء النووية | 18 | He-4 binding from the file's own nucleon masses, decay chains, fission/fusion |

**Book totals:** 36 lessons · 155 law cards · 108 quiz questions · 72 exam questions.

**Capstone — «الامتحان الوزاري الشامل — الفيزياء»** (`src/content/physics/capstone.ts`) mirrors the verified paper (dossier §3): 6 numbered questions (Q1–Q3 two branches, Q4–Q6 three branches, 10 marks per branch), Q6 branch C a five-item اختيارات block (5×1) echoing تمهيدي 2025's «الاختيارات في السؤال (6)»; **145 marks offered / 180 minutes** — the exact دور أول/ثانٍ 2025 figures (2025 range across rounds: 140–149 offered, ترك 40–49); per-chapter report. Chapter weights 20/30/22/10/20/13/10/10/10 are a **design blend inside the verified tallies' ranges**, labelled as such in the file header. The intro note explains the ترك rule (answer 100 of 145; pass 50) honestly and — as the real papers do — prints the constants students may use. The verbatim printed «أجب عن…» line could not be verified from text sources and is paraphrased, never quoted.

**Diagrams:** twelve minimal original SVG line diagrams (capacitor plates, RC curves, flux loop, AC generator, RLC circuit + phasor, EM wave, Young slits, photoelectric bench, Bohr atom, PN junction, laser levels, decay curve) drawn from scratch in the platform palette via a new `Diagrams` component and an optional `diagram` field on lesson sections — no textbook figure copied or traced; each carries a caption saying so. One genuine engine fix came with them: `Exam.tsx` rendered `introNote` as plain text (invisible in Stage A, whose capstone note has no formulas) — it now renders through `MathText`, which the physics capstone's printed constants require (screenshot 33 before/after is the evidence).

## Mechanical audits (house standard, all clean)

- Marks: every quiz sums to 16, every exam to 60, capstone to 145 with the exact blend above; every written rubric sums to its question's marks; mixes exactly 10+2 (quiz) and 4+4 (exam) per chapter; ids unique.
- **MCQ key positions:** 131 physics MCQs distribute **30/31/35/35** over the four positions — near-uniform, no learnable pattern.
- Symbol scan of all physics content: zero emoji, zero markdown bold, no Arabic inside $…$, no replacement characters.
- **Lesson-id collision found and fixed during integration:** physics lessons initially reused the Mathematics `cN-lM` ids, which share the global `lessonsDone` progress map — completing a physics lesson would have marked a math lesson done. Physics lesson ids were renamed `pcN-lM` (data-only change; no stored physics progress existed). The home progress strip's hardcoded «في كتابي الإنجليزية والرياضيات» was likewise corrected to «في كتب الأكاديمية».

## Independent precision cross-check (pipeline requirement)

A separate agent that did not author the content re-derived **all 462 items** (443 chapter items + 19 capstone items) from the files on disk — every MCQ key and distractor, every written model answer and rubric value, every worked solution, drill answer and card example, with python3 recomputation of the nontrivial values, direction claims (leads/lags, fringe narrowing, majority carriers, decay Z/A) and شرحية statements read as physics. Full record: `research/physics-crosscheck.md`.

- **Wrong answer keys: 0. Wrong stated values: 0.**
- **Three MINOR defects found and fixed before delivery** (all in the capstone): (1) a garbled phrase in pc-q4b's stem («ضوء الماء الأزرق») — stray word removed; (2) pc-q4b's model answer called the monochromatic central fringe «white» — rewritten (bright in the light's own colour); (3) pc-q3b's third علّل sub-item was Ch. 2 content (power transmission) inside a Ch. 3 branch — replaced with a genuine Ch. 3 علّل (parallel capacitor improving power factor) with a matching model answer. Totals and tagging now exact.
- Scope compliance confirmed by full-text scan: no thin films / Rayleigh in Ch. 5; relativity appears only inside Ch. 6.

**Authoring-process disclosures (for the record):** two author reports in this stage proved unreliable against disk — one chapter's first "completion" report described a file that did not exist (the chapter was re-authored and byte-verified), and one chapter's key list was written from a superseded draft (its file, read directly, is coherent and was verified by the cross-check from the file itself). All verification in this stage was therefore done from files and tool output, never from author reports — the pipeline's standing rule, applied.

## Tests — Playwright 29/29 green

- **22 pre-existing tests kept green**, with **one disclosed amendment** mirroring Stage A's: the home test asserted Physics renders as a non-navigable «قريبًا» row (button count 0). It now asserts Physics is a live button and Chemistry is the non-navigable one. No other pre-existing assertion was touched.
- **6 new Stage C tests** (`tests/stage-c.spec.ts`): subject/chapter listing (9 chapters, Ch. 1 expanded); KaTeX render + progressive step reveal with unit-carrying final answer; written flow in a quiz (write → reveal → rubric self-mark → localStorage `quizBest['ph6-c1'] = {score: 15, total: 16}` exactly as self-marked); written flow in a chapter exam (report-phase self-marking updates stored `examBest` to 28/60); the capstone end-to-end (19 items, «من 145», ترك 45 wording, per-chapter breakdown rows); a lesson-completion smoke proving persistence under the new `pc1-l1` id.
- **Screenshots** (`qa/screenshots/`): `30-physics-subject.png`, `31-physics-solution.png`, `32-physics-written.png`, `33-physics-capstone.png` — all four viewed and verified (real stats 9 فصول · 36 درسًا · 155 قانونًا; KaTeX steps with units; rubric UI; capstone constants rendered as formulas after the MathText fix).

## Delivery

- Deployed via the git-free route (clean copy without `.git` → `npx vercel --prod`, project `prj_bH7Rzi4mFjg3P2H7M56EoTepjoML`); live bundle hash matches the tested local build; HTTP 200.
- Code and this report committed and pushed to `github.com/dolanexeee/uruk-academy`.

## Honest gaps

- The revised (2025) book's own numbered section lists per chapter could not be read from the book itself; chapter structure (the 10→9 merger) is proven, and internal section order follows the old book's contents + teacher-index corroboration (dossier §5).
- The physics paper's exact per-question mark frame varies by round/committee (tallies prove offered/ترك/duration and the مسائل/شرحيات split; branch grammar follows the official model answers). The capstone's 145/45 and its branch layout are labelled a faithful mirror + design blend, not a reproduction of one specific round.
- Any 2026 حذوفات for physics remain unverifiable from sources; nothing was excluded on rumour.
- Written-question scoring is self-marking by design (no honest offline free-text grading); the platform states this at every step.
- Progress remains per-device (localStorage), as in all previous stages.
