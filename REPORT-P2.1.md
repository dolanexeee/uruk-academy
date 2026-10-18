# Uruk Academy — Phase 2.1 Report: Content-Precision Patch

**Delivered:** 2026-10-18 · **Live:** https://uruk-academy.vercel.app (HTTP 200)
**Live bundle:** `index-DyJ7YqE6.js` — **491,200 bytes**, byte-identical to the local
production build (Phase 2 live bundle was `index-BPuaAlQC.js`, 480,425 B — replaced).
**Tests:** Playwright **15/15 passed** against the production build (`vite preview`) —
the 14 Phase 1+2 tests unchanged and green, plus one new P2.1 screenshots/regression
test (`13-u3-lesson-p21.png`, `14-u5-grammar-p21.png`, `15-u7-grammar-p21.png`).

This patch implements the coordinator's correction list, produced by cross-checking
the shipped Phase-2 content against the official Activity Book and published answer
keys. Every fix below is before → after. Only content files changed (plus the one
new test and CONTENT.md source notes); no design, no engine behavior.

## Fix 1 — Unit 7: future perfect is NOT a Unit 7 topic

*Verifying source: the Activity Book classifies five future types — will / going to /
present continuous / present simple / future continuous — plus future in the past.
The future perfect is not among them.*

- `unit7.ts`, lesson u7-l2 intro — before: «للإنجليزية خمس طرق رئيسية للحديث عمّا
  سيأتي» (the five silently included the future perfect). After: the five are named
  as the AB classifies them (will، going to، المضارع المستمر، المضارع البسيط،
  المستقبل المستمر) «ثم صيغة خاصة هي المستقبل في الماضي».
- u7-l2 §1 table — before: 5 rows ending with «المستقبل التام — will have + p.p. —
  By 2050, all students will have their own computers». After: the FP row is removed
  and a `will` row added at the head (will + verb — توقّعات، قرارات لحظية، وعود
  وعروض); the section intro no longer lists «حدث سيكتمل قبل لحظة مستقبلية».
- u7-l2 §3 callout — before: «إذا رأيت by + زمن مستقبلي فكّر بالمستقبل التام».
  After: the by-clue is replaced by the timetable clue (موعد ثابت في جدول ← مضارع بسيط).
- u7-l4 summary — before: «صور المستقبل الخمس». After: the five AB types enumerated.
- Quiz `u7q-g4` — before: «By the year 2050, all students ___ their own computers»
  (future perfect). After: «I think our team ___ the match tomorrow» → will win
  (will for predictions). Answer index unchanged (0).
- Exam `u7e-g3` — before: «By next June, she ___ her course» (will have finished).
  After: a dialogue item testing will for an instant decision («I ___ some on my way
  home» → will buy). Answer index unchanged (0).
- Capstone: its two U7 grammar items (`cap-u7-g` going-to, `cap-u7-g2` present-simple
  timetable) never tested the future perfect — **already correct, no change**.
- Derived pools: Unit 8's revision quiz/exam are composed from the U5–U7 pools
  (`revisions.ts`), so the replaced items flow into them automatically; question
  counts unchanged (15/15). A new automated guard asserts the string «المستقبل التام»
  appears **nowhere** in the U7 grammar lesson page.

## Fix 2 — Unit 5 grammar: past perfect + relative clauses added

*Verifying source: the Unit 5 Activity Book «Test yourself»/exercise strands test
both systems for this unit; the shipped lesson covered only the present perfect.*

- `unit5.ts`, lesson u5-l2 — before: two sections (present perfect simple/continuous;
  perfect vs past simple). After: a compact third section «ثالثًا: الماضي التام والجمل
  الموصولة — نظاما كتاب النشاط لهذه الوحدة» in the same style (Arabic explanation,
  4-row table, holiday-context English examples, a defining/non-defining callout).
  The lesson intro and the u5-l4 unit summary now name both systems.

## Fix 3 — Unit 6 grammar: conditionals cross-reference

*Verifying source: conditionals are Unit 3's system, but Unit 6's Activity Book
«Test yourself» tests them too.*

- `unit6.ts`, lesson u6-l2 — before: passive voice only. After: a third section
  «ثالثًا: تذكير — الجمل الشرطية تُختبر في هذه الوحدة أيضًا» that says plainly the
  system belongs to Unit 3, tabulates the four types with money-context examples
  («If you save a little every month, you will have enough for emergencies»,
  pension-plan third conditional…), and points to Unit 3's full treatment. The
  lesson intro and u6-l4 summary carry the same honest pointer.

## Fix 4 — Precision wording

**4a. U5 pairing.** *Source: the AB's pairing is «high blood pressure can cause
strokes and heart attacks».* Before: «heart disease and strokes» / «أمراض القلب
والجلطات» in 8 places — the `u5-blood-pressure` vocab example, the reading summary,
the reading examples, the «حقائق» bullet, quiz `u5q-r2` + `u5q-v2`, exam `u5e-r2`,
and capstone `cap-u5-v`. After: all read «strokes and heart attacks» /
«الجلطات (الدماغية) والنوبات القلبية» (answer indexes unchanged). The standalone
vocab word `heart disease` (a word entry, not the pairing claim) was reviewed and
kept.

**4b. U6 interest factor.** *Source: per the AB, the factor is duration alone —
«keep money in the account for a long time».* Before: «كلما ارتفعت نسبة الفائدة وبقي
مالك مدة أطول» (reading), «بارتفاع نسبة الفائدة وطول بقاء المال» (facts bullet),
quiz `u6q-r2` and exam `u6e-r5` both keyed to «rates high + money stays longer».
After: every statement keys interest to duration alone («كلما طال بقاء المال في
الحساب ازدادت الفائدة — فمدة البقاء هي العامل الحاسم»); answer indexes unchanged.
Reviewed and kept: the `u6-borrow` vocab example «borrow at high interest» — it
concerns the cost of borrowing, not the earnings factor claimed as a book fact.

**4c. U6 property superlative.** *Source: confirmed by the Al-Quraishi answer key —
property IS «the most popular investment in the UK».* Before: hedged «العقار من أشهر
الاستثمارات» (reading), «شراء العقار من أشهر الاستثمارات» (facts bullet),
«a popular investment» (vocab example). After: stated as the book states it —
«وهو أشهر استثمار في بريطانيا»، «شراء العقار هو أشهر استثمار في بريطانيا حاليًا»,
«the most popular investment in the UK». Quiz `u6q-r5` and exam `u6e-r3` already
stated it directly — **already correct, no change** (this also closes REPORT-P2's
honest gap #2).

**4d. U5 title question.** *Source: the ministry samples document the question
«Why are holidays so important?»; the textbook's exact answer sentence is not
published in them.* Before: the reading intro asserted «الإجابة التي يبنيها الدرس
طبية ونفسية واجتماعية» — a consolidated answer presented as the book's. After: the
intro states the samples ask the question, that the book's literal answer is not
published in them and is therefore not invented, and that the lesson is built only
on the documented points (health/pressure, vitality, time with the people close to
us, the workaholic) — each of which traces to a documented sample question or AB
item; the u5-l4 summary now says «بنقاطه الموثّقة» instead of «بحججه الثلاث».

## Fix 5 — Unit 8 hub fidelity line

*Source: the book's own Unit 8 revision texts are environment-themed.*

- `revisions.ts`, unit8 `theme` (the hub's copy) — before: «وحدة المراجعة الختامية
  كما في الكتاب: تثبيت الوحدات ٥–٧ قبل الامتحان الوزاري الشامل.» After: the same
  line plus «وللتوثيق: نصوص المراجعة في الكتاب نفسه لهذه الوحدة بيئية الموضوع —
  «Our natural resources» و«Recycling waste» و«The Euphrates River».» All other
  labeling stays as shipped (revision units carry no Lesson-10 reading — already
  accurate).

## Fix 6 — Unit 3: pay claim, missing AB systems, qualities list

**6a. Pay factors removed.** *Source: the ministry samples ASK «The amount of money
an interpreter gets depends on … and …» but publish no answer key; the shipped
«experience and languages» was an invention.* Removed everywhere it was asserted:
the reading summary («يعتمد على عاملين هما الخبرة وعدد اللغات» → the question is now
presented as the book's own question with an explicit «لا نخترعها» note), the reading
examples (pay line → the verified «A good interpreter follows the news…» line), the
«حقائق» bullet (→ the question documented *as a question*), the «قبل أن تقرأ» intro,
the u3-l4 summary, and the `u3-experience` / `u3-depend-on` vocab examples
(→ neutral sentences). Quiz `u3q-r4` (a true/false asserting the factors) was
replaced by the verified TF item «المترجم الجيّد يتابع الأخبار وواسع الاطّلاع…»;
exam `u3e-r5` was replaced by the documented ministry question «Why shouldn’t an
interpreter waste time thinking?» (answer: simultaneity). Consequential instance in
the capstone pool: `cap-u4-v` («An interpreter’s pay depends on experience and the
number of ___») was replaced by a verified U3 vocab item (the booth) — same pool
slot, answer index 0 kept.

**6b. Reported speech + wish structures added.** *Source: both are Unit 3 Activity
Book systems.* u3-l2 gains «ثالثًا: الكلام المنقول Reported Speech» (backshift,
say/tell, reported questions, time-word shifts; Samira-context examples) and
«رابعًا: أبنية التمنّي Wish Structures» (I wish / if only + past simple for present
wishes, + past perfect for past regrets, wish + would). Lesson intro and u3-l4
summary updated to name them. The lesson title and the first two sections are
untouched, so the Phase-2 test selectors stand unmodified.

**6c. Qualities enumeration aligned.** *Source: the verified list — follows the
news / well-informed on many topics / reads newspapers / doesn't waste time
thinking.* Before (reading lesson): «من صفات المترجم الجيّد: الاطّلاع الواسع وسرعة
التفكير والتركيز» and a summary led by «سرعة البديهة». After: both enumerate the
verified four; the `u3-quality` vocab example and the cleft-section example payload
were aligned to «well-informed» as well.

## Fix 7 — Capstone radar stem timeline

*Source: radar was developed in the 1930s, before WWII, and used during it
(the ministry asks «When was the radar invented? Why?»).*

- `capstone.ts`, `cap-u2-r` stem — before: «Radar was invented before the Second
  World War in order to ___». After: «Radar was developed in the 1930s, before the
  Second World War, and used during the war in order to ___» (answer — detect enemy
  aircraft — unchanged). Unit 2's own reading and quiz already carried the 1930s
  timeline — **already correct, no change there**.

## Deployment & evidence

- Production deployed via the established **git-free route** (clean copy of the
  tree without `.git`, `npx vercel --prod`, account mustafaalshatab-1824); the
  deployment was aliased to https://uruk-academy.vercel.app and verified by
  HTTP 200 + bundle hash/bytes identical to the local production build.
- Screenshots: `qa/screenshots/13-u3-lesson-p21.png` (U3 grammar with the two new
  sections), `14-u5-grammar-p21.png` (U5 grammar with §3), `15-u7-grammar-p21.png`
  (U7 grammar — five AB future types in the table, no future-perfect row; visually
  inspected). The full 01–12 set was regenerated unchanged in structure by the
  screenshots suite.
- CONTENT.md per-unit source notes were updated wherever this patch changed a
  documented source position, and gained a «تحديث الدقة P2.1» summary section.
