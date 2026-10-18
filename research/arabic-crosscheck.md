# Arabic — Stage F independent cross-check (الإعراب / MCQ keys / verses / أدب facts / capstone originality / النقد marker)

Checker: independent cross-checker (authored nothing in Stage F).
Sources used, all on disk: `src/content/arabic/a1.ts`–`a15.ts` +
`capstone.ts` (read in full, all 326 assessment items extracted and
evaluated programmatically for counts/marks/rubrics, then read item by
item); the ministry PDFs `/tmp/arabic1.pdf` (164 pp) and
`/tmp/arabic2.pdf` (112 pp), read via `pdftotext` page extracts AND,
where the vocalised text layer is unreliable, via rendered page images
(Part 2 pp.73–77 read visually, page by page); `research/arabic-structure.md`
and `research/arabic-authoring-spec.md`.

## Mechanical audit (programmatic, exact)

- 15 chapters, each: 4 lessons, vocab 16 (grammar) / 20 (أدب) / 12
  (إنشاء) = 252 cards; quiz 12 items / 16 marks; exam 8 items / 60
  marks / 45 min. All conform.
- Chapter assessment pool: 300 items = 210 MCQ + 90 written.
- MCQ key distribution per chapter: 3–4 per index in every chapter
  (never 0, never ≥6). Conforms to the spec's hard rule.
- Every written item in chapters + capstone: rubric points sum
  EXACTLY to the item's marks; every written item has a modelAnswer.
  No exceptions.
- Capstone: 26 items, 145 marks = قواعد 58 / أدب 47 / إنشاء 40,
  210 minutes, per-topic قواعد marks = the verified دور ثانٍ 2025
  distribution. Conforms.
- No exact-duplicate question stem anywhere across chapter quiz /
  exam / lesson pools and the capstone (normalised comparison).
- The one mechanical flag raised (ac5-q6 "duplicate options") is a
  FALSE POSITIVE of diacritic-stripping: the options «يَا فَاطِمَ» /
  «يَا فَاطِمُ» differ by the حركة that IS the question (the two
  لغتا الترخيم). Cleared, not a defect.

---

## Task 1 — إعراب specialist pass

**Count checked: 141 إعراب-bearing items** — 75 written items
re-parsed word by word (60 in grammar chapters a1–a10: q11, q12,
e5–e8 per chapter; 15 capstone grammar items ca-g1a–ca-g10) + 66 MCQ
whose keyed option is an إعراب judgment (a1: 6, a2: 7, a3: 9, a4: 7,
a5: 8, a6: 5, a7: 10, a8: 6, a9: 3, a10: 6). Lessons were sampled
(a7 read in full; a5 L1/L3, a9 L2, a11/a13/a15 in part).

The book's corrected rulings are embodied correctly and consistently
in the chapters: المخصوص بالمدح/الذم = خبر لمبتدأ محذوف وجوبًا
تقديره «هو» (وجه أول) / مبتدأ مؤخر (وجه ثانٍ); «ذا» في حبذا هي
الفاعل; فعل «أفعل به» = فعل ماضٍ جامد جاء على صيغة الأمر مبني على
السكون; الواو بعد إياك = عاطفة (جملة على جملة) والاسم بعدها منصوب
بفعل محذوف ثانٍ; تقديم المفعول على فعله بأحوال الكتاب الأربعة
(بعد أمّا، فعل أمر مقترن بالفاء في جواب أمّا المحذوفة، ألفاظ
الصدارة، ضمير النصب المنفصل); أدوات النداء خمس فقط (يا، الهمزة،
أي، أيا، هيا) بلا «وا»; توكيد الكتاب بأنواعه (book p.118 lists
اللفظي، المعنوي، جميعًا/قاطبة/كافة أحوالًا — confirmed verbatim,
ac4-q2 is right); شروط «ما» الحجازية عند الكتاب شرطان (book p.51:
«بشرطان، هما: ألّا ينتقض نفيها بإلّا، وألّا يتقدّم خبرها على
اسمها» — confirmed).

### إعراب defects

**D1 (MAJOR) — a9: misquoted verse + fabricated إعراب attributed to
the book.** `a9.ts` header, L2 solution, and **ac9-q11** all use
الخنساء's line as «هَلَّا تَبْكِيَانِي عَلَى صَخْرٍ» and parse it
with a نون وقاية and a ياء مفعول به; ac9-q11's explain claims this
is «كما أعربه الكتاب». The book (Part 2, p.76 «حلّل وأعرب» box and
p.77 «الإعراب») prints the line as «أَعَيْنَيَّ هَلَّا تَبْكِيَانِ
عَلَى صَخْرٍ — بِدَمْعٍ حَثِيثٍ لَا بَكِيءٍ وَلَا نَزْرِ» and parses
it: أَعَيْنَيَّ: الهمزة أداة نداء، عينيّ منادى منصوب بالياء لأنه
مثنى وهو مضاف والياء مضاف إليه; هَلَّا: أداة تحضيض; تَبْكِيَانِ:
فعل مضارع مرفوع وعلامة رفعه ثبوت النون لأنه من الأفعال الخمسة،
وألف الاثنين ضمير متصل في محل رفع فاعل — **no نون وقاية, no مفعول
به** (the dual verb addresses the two eyes). The chapter added a
spurious ياء to the verse, then built an إعراب for the corrupted
sentence and attributed it to the book. Correct version: as printed
on book pp.76–77 above.

**D5 (minor) — ac1-e5 modelAnswer:** «يُكْرِمُ … وفاعله ضمير مستتر
**وجوبًا** تقديره هو». For a third-person verb whose فاعل refers
back to a stated مبتدأ (من ذا), الاستتار is **جوازًا**, not وجوبًا.
(Everywhere else the chapters use وجوبًا correctly: تقهرْ/أنت,
أقصدُ/أنا, فعل التعجب, فاعل نعم وبئس المستتر.)

**D6 (minor) — ca-g10 modelAnswer:** «إِيَّاكَ: ضمير منفصل **مبني
على الفتح** في محل نصب». Inconsistent with the book's analysis as
taught in ac10-e5/e8: «إيا» ضمير نصب منفصل مبني على **السكون** في
محل نصب, والكاف علامة خطاب لا محل لها. The capstone's phrasing
builds the whole word on the فتحة of the كاف, which the chapter
itself (correctly) treats as a mere حرف خطاب.

**D7 (minor) — ca-g2a modelAnswer** lists THREE conditions for
إعمال «ما» عمل ليس («لم يتقدّم خبرها، ولم تُزد بعدها إن، ولم
ينتقض نفيها بإلّا»). The book (p.51) states **شرطان** only (عدم
الانتقاض بإلّا + عدم تقدّم الخبر), and Ch.2 follows the book
(«شرطا الإعمال» throughout). The capstone silently adds the
classical «إن» condition; a student answering with the book's two
conditions is complete by the book but short by this key.

**D8 (minor) — ca-g5b modelAnswer:** in «يا أيُّها المعلمون»,
«المعلمون» is parsed «بدلًا منها (**أو نعتًا**)». Per the book rule
the chapters themselves teach (ac5-e2: المعرف بأل بعد أيّها بدل إن
كان جامدًا ونعت إن كان مشتقًّا), «المعلمون» is a مشتق (اسم فاعل)
so it is **نعت** — the capstone's hedge contradicts the chapter's
own stated rule.

Everything else in the 141 items re-parses correctly: الحالة
وعلامة الإعراب والسبب agree with the sentence and with the book's
rulings, including the hard cases (كم بحسب تمييزها/موقعها, كيف خبر
كان, أنى حالًا بمعنى كيف, يهزموا نائب فاعل, بنفسي مجرورة لفظًا
مرفوعة محلًّا, المصدر المؤول فاعلًا في أعظم بأنْ يجتهدَ, لام
الجحود, اسم لا المضاف منصوبًا لا مبنيًّا).

---

## Task 2 — MCQ key audit (210 items)

**All 210 MCQ keys re-derived independently from the book
rules/facts: every key is correct. No item has a wrong key.** Items
that look contestable from general grammar but are correct BY THE
BOOK (checked against the pages, cleared):

- ac8-q10 (لعلّي أبلغ الأسباب → خرجت إلى التمني): book Part 2 p.56
  states it verbatim («وقد تخرج (لعل) إلى معنى التمني كقوله تعالى:
  وقال فرعون يا هامان… لعلّي أبلغ الأسباب»). Key correct; the
  تعليل alternative is not the book's ruling.
- ac3-q5 (إنما الحاكم العادل — المبتدأ محصور بإنما): book pp.93/95
  frames the rule exactly as «يكون المبتدأ محصورًا بـ(إنما) أو
  النفي والاستثناء» as a وجوب case. Key follows the book.
- ac3-q3/e7 (نكرة موصوفة/مضافة → جواز تقديم الخبر): book p.92
  «فائدة» states it. Correct.
- ac4-q2 (جميعًا = حال): book p.118 verbatim. Correct.
- ac5-q6 (ترخيم فاطمة): options distinguished by تشكيل only, by
  design (لغتا الترخيم). Not a duplicate-option defect.

One explain-only slip (key unaffected): **D12 (minor) — ac8-q5
explain** calls «لو نزل المطرُ أمس
...[truncated 9492 chars]
---

## Tasks 3–7 (summary of the checker's delivered findings)

- **Task 3 — verses:** 40 quotations verified against the cited PDF
  pages/Quran (حافظ p.74، الجواهري p.78، السياب pp.127–129، فدوى
  p.158، درويش pp.161–163، درس التحضيض مقروءًا صورًا pp.73–77).
  ONE misquote: D1 (below).
- **Task 4 — أدب facts:** حافظ 1871 is the book's own figure (p.74);
  الجواهري 1899/1947/both ألقاب; الإحياء رواد; الواقعية's six أعلام
  verbatim (Part 2 p.65); الكلاسيكية's six = the book's six ONLY;
  أركان الرواية الستة with الحوار واللغة as ONE ركن. عمر المختار
  and «السراب» appear nowhere in a11–a14 (nothing claimed). One
  unsupported attribution: a12's درويش card listed دواوين «في
  الكتاب» that the checker could not verify in the book's درويش
  section.
- **Task 5 — capstone originality:** 5 full duplicates + 3 partial
  (D4); إنشاء topics duplicated Ch.15 items (D3); 3 near-duplicate
  grammar stems (D14).
- **Task 6 — النقد marker: DEFINITIVE YES.** Every مذاهب lesson
  head prints «النقد الأدبي الحديث (للفرع الأدبي فقط)» (الكلاسيكية
  head on p.81, خصائص pp.82–84; also p.135; Part 2 pp.64, 107),
  and the مقدمة (p.3) says the same → D2.
- **Task 7 — written quality:** rubrics answerable from model
  answers throughout, except D15's wording.

## Defect list (checker) + coordinator fix pass — ALL FIXED

- **D1 (MAJOR) a9:** الخنساء line corrupted to «تبكياني» with a
  fabricated نون وقاية/مفعول به إعراب «كما أعربه الكتاب». Book
  pp.76–77: «أعينيَّ هلا تبكيانِ على صخرٍ» — dual verb addressing
  the two eyes, ألف الاثنين فاعل, NO نون وقاية, NO مفعول به.
  FIXED in a9 header, L2 problem/steps/finalAnswer, and ac9-q11
  (stem, modelAnswer, rubric) to the book's verse and إعراب.
- **D2 (MAJOR) scope:** النقد مذاهب are «للفرع الأدبي فقط» in the
  print. FIXED: disclosure added to a14's theme and to the مذاهب
  lesson itself; capstone نقد items REMOVED (ca-a6 → الجواهري;
  ca-a9 part 1 dropped with the item redesigned as القصة
  القصيرة); dossier §3 decision 4 and §6 corrected; CONTENT.md
  corrected. Ch.14 still teaches them for أدبي students with the
  marker disclosed.
- **D3 (MAJOR):** capstone إنشاء topics duplicated Ch.15
  (الوقت = ac15-e5; التعاون = ac15-q12). FIXED: ca-w1 = «الصبر»,
  ca-w2 = «الأمل» (both absent from all Ch.15 pools), fresh model
  elements + verified شواهد (البقرة 153؛ يوسف 87).
- **D4 (MAJOR):** capstone أدب duplicates. FIXED by redesign to
  fresh angles/fact-sets: ca-a1 مدخل النهضة as تعليلات (vs e7's
  سرد شرحية); ca-a2 حافظ as شاعر مجتمعه — موضوعات وشكوى (vs q12's
  لقب/سمات and e6's تحليل); ca-a3 نعيمة standalone (vs e5's
  المدرسة شرحية); ca-a4 أدونيس والحداثة (vs q11/e6's الشعر الحر
  وأنشودة المطر); ca-a5 قضية as تعليل + التزام بشاهد (vs e7's
  سرد المحطات); ca-a7 المسرحية trimmed (dropped the بناء element
  that overlapped e1); ca-a8 نشأة الرواية بمرحلتيها (vs e7's
  تعريف وأركان); ca-a9 القصة القصيرة نشأة (new slot content).
- **D5** ac1-e5: فاعل «يكرم» الاستتار جوازًا لا وجوبًا. FIXED.
- **D6** ca-g10: «إيا» مبنية على السكون والكاف حرف خطاب (per
  ac10-e5). FIXED.
- **D7** ca-g2a: ما الحجازية بشرطي الكتاب فقط (p.51: عدم
  الانتقاض بإلا + عدم تقدم الخبر). FIXED (third classical
  condition removed).
- **D8** ca-g5b: «المعلمون» بعد أيّها نعت (مشتق) لا بدل. FIXED
  (hedge removed, rule stated).
- **D9** ca-w1's «متفق عليه» label — item replaced in D3; the
  replacement's شواهد carry exact sourcing (Quran verses only).
- **D10** both إنشاء items numbered «العشرون». FIXED: العشرون /
  الحادي والعشرون.
- **D11** ca-a4 gender slip («صار أنشودة المطر نموذجه»). FIXED
  (item redesigned in D4; sentence rewritten feminine-correct
  before replacement).
- **D12** ac8-q5 explain called a شرطية امتناعية «لو للتمني».
  FIXED (explain rewritten; key untouched).
- **D13** ac9-e5 + ac9-q7 stems copied book p.75 examples.
  FIXED with fresh sentences exercising identical rules
  (e5: «ألا تساعد أخاك فيشكر لك» with full new إعراب; q7: «ألا
  تذاكر فتتفوق»).
- **D14** near-duplicate stems. FIXED: ca-g5a(١) → «يا حارس
  البستان»; ca-g2a(٢) → «لا متكاسل ناجح في الحياة»; ca-g5b(٢)
  → «خالد، راجع درسك».
- **D15** ac13-e7 explain/rubric أركان string read as seven.
  FIXED: «الحوار واللغة (ركن واحد)» made explicit in both.
- **Task 4 card fix:** a12-darwish exampleAr's unverifiable
  دواوين list replaced with the book's own p.161 characterization
  (الحب مرتبط بوطنه وقضيته؛ قصائده تلتهب بالنضال وتبشر بالثورة
  والعودة) — verified by the coordinator directly from the page.

Coordinator's note: the checker's own mechanical re-audit (all
rubric sums exact; 210/210 MCQ keys correct; no exact-duplicate
stems pre-fix beyond those listed) stands; after the fix pass the
coordinator re-ran the full mechanical audit and build (see
REPORT-STAGE-F-ARABIC.md).
- **Coordinator's screenshot-inspection catch (D5 family):**
  a1 L2 step for «بَنَى» in «مَنْ بَنَى المَدْرَسَةَ؟» called its
  فاعل «مستتر وجوبا» — same class as D5 (antecedent «من» stated)
  → corrected to جوازًا. All other «مستتر وجوبًا» occurrences in
  the book were re-scanned: they are فعل التعجب and فاعل نعم/بئس
  المفسر بتمييز, where وجوبًا is the book's own ruling — correct
  as shipped.
