# REPORT — Stage F: Complete Arabic Book (اللغة العربية) — FINAL BOOK

**Status:** DELIVERED + VERIFIED — live at https://uruk-academy.vercel.app
**Repo:** github.com/dolanexeee/uruk-academy · code commit `67dc2a0` (pushed; this report follows in its own commit)
**Live bundle:** `index-Btis0j3N.js` (changed from Stage E's `index-C7j0V0_M.js`; site answers 200; the live bundle was grepped and contains the Arabic capstone, the «للفرع الأدبي فقط» disclosure, and the corrected الخنساء verse)
**Tests:** Playwright **50/50** (43 pre-existing + 6 new Arabic tests + 1 extended screenshots test)
**Date:** 2026-10-18

Stage F of the full-program commission («ابني كل شي») — the sixth and final book.
Arabic (اللغة العربية — السادس الإعدادي) is complete: fifteen chapters at the
established standard, a وزاري capstone mirroring the verified Arabic paper frame,
full audits, an independent files-only إعراب-specialist cross-check with every
defect fixed pre-delivery, and fresh screenshots 60–63. **With this stage all six
سادس إعدادي books are live and no subject remains «قريبًا».**

---

## 1. Verified structure — from the book itself

A full PDF mirror of the current print was obtained and read directly (mlazemna
book page «كتاب العربي السادس ادبي 2025-2026», described there as «كتاب عربي
سادس علمي وادبي» — ONE book shared by both branches; Part 1 = 164 pp, Part 2 =
112 pp, PDF page = book page, verified against the فهرست). Evidence read from
the book, not from summaries:

- **Title pages (both parts):** «اللغة العربية للصف السادس الإعدادي»,
  **الطبعة الرابعة 1447هـ/2025م**, وزارة التربية / المديرية العامة للمناهج.
- **المقدمة (Part 1, pp. 3–4):** the book runs on **الطريقة التكاملية**
  (adopted 2016) — it is NOT split into separate قواعد/أدب/بلاغة volumes. Each
  جزء = خمس وحدات of 3–4 دروس (مطالعة، قواعد، أدب، وأحيانًا تعبير); the
  unit's grammar is extracted from its reading text and is **confined to
  الأساليب** («محصورة في الأساليب العربية»); توكيد الفعل والشرط والأمر
  والنهي والدعاء were prepared in الصف الخامس and الاستثناء in an earlier
  grade; **أربعة دروس للتعبير** (two per جزء, each شفهي + تحريري).
- **The book's own فهرست** (Part 1 p. 164; Part 2 p. 112) fixes the ten
  grammar lessons in book order: الاستفهام (8–32) · النفي (47–74) · التقديم
  والتأخير (91–100) · التوكيد (110–125) · النداء (143–154) · التعجب (ج٢ 8–17)
  · المدح والذم (32–38) · التمني والترجي (55–59) · العرض والتحضيض (72–81) ·
  التحذير والإغراء (93–101) — and the أدب arc: الأدب الحديث (33–42) · حافظ
  إبراهيم · الجواهري · مدرسة المهجر · مدرسة الشعر الحر · شعر القضية
  الفلسطينية · المسرحية · القصة القصيرة · الرواية · المقالة · فن السيرة ·
  النقد الأدبي الحديث (الكلاسيكية، الرومانسية، الواقعية، الرمزية).

**Scope decisions, all documented in `research/arabic-structure.md`:**
(1) **لا بلاغة مستقلة في هذه الطبعة** — no علم بيان/معاني/بديع part, lesson
or section in either part's فهرست, and no بلاغة marks line in the علمي paper
→ no بلاغة chapters were authored (the brief's بلاغة list is therefore not
built; the rhetorical أغراض of the أساليب themselves are taught inside the
grammar chapters, as the book teaches them). (2) **الاختصاص is not in this
print** (older prints only) → excluded; (3) الشرط والاستثناء والأمر والنهي
belong to earlier grades per the مقدمة, and الاستثناء's deletion is
independently confirmed by the 2025 دور ثانٍ analysis → excluded.
(4) **النقد الأدبي — a correction to my own research, caught by the
cross-check:** each of the book's four in-print مذاهب lessons is headed
«النقد الأدبي الحديث (للفرع الأدبي فقط)» (Part 1 p. 81 — the الكلاسيكية
خصائص run pp. 82–84 — and p. 135; Part 2 pp. 64, 107; the مقدمة p. 3 says
the same). My initial text-layer grep missed the marker (diacritic-stripped,
order-scrambled extraction); the checker's page-image reading settled it.
**Ruling as shipped:** the four مذاهب ARE taught in Ch. 14 (the book is
shared; أدبي students are served) with the book's own marker **disclosed in
the chapter theme and in the مذاهب lesson itself**, and they are **excluded
from the capstone**, which mirrors the علمي paper (no نقد marks in any 2025
علمي tally). (5) المطالعة texts are teaching context — cited, never copied.

**Paper frame (mlazemna tallies, 2025 علمي — read in full):** duration
**ثلاث ساعات ونصف (210 minutes)**; offered **145**, ترك **45**, scored
**100**. القواعد scored 40 (offered 52–58 across rounds), الأدب scored 40
(دور ثانٍ: 47 offered = جزء أول 34 + جزء ثانٍ 13, ترك 7), الإنشاء scored 20
(two topics × 20 offered, answer one, ترك 20). Per-topic قواعد marks
(تمهيدي/أول/ثانٍ) make النفي the heaviest topic (10/11/11) and التمني
والترجي the lightest (2/2/2) — the ten topics match the book's ten أساليب
exactly, in book order. **No MCQ block exists in the Arabic paper** (all
written, Biology precedent) and **no بلاغة line exists in any 2025 علمي
tally**.

## 2. What was built

Fifteen chapters under `src/content/arabic/` (`a1.ts`–`a15.ts`,
`index.ts`, `capstone.ts`), organized by strand in the book's own order:
**ten grammar chapters** (الاستفهام، النفي، التقديم والتأخير، التوكيد،
النداء، التعجب، المدح والذم، التمني والترجي، العرض والتحضيض، التحذير
والإغراء), **four أدب chapters** grouped as the book groups its texts
(الأدب الحديث وشعراؤه — المدخل وحافظ والجواهري؛ مدارس الشعر الحديث —
المهجر والشعر الحر وشعر القضية الفلسطينية؛ فنون النثر الحديث — المسرحية
والقصة القصيرة والرواية؛ المقالة والسيرة والمذاهب النقدية), and **one
guided إنشاء chapter** (بناء الموضوع مقدمة/عرض/خاتمة؛ a complete ORIGINAL
essay on «العمل» — a real 2025 topic — analysed part by part; worked topic
maps for النجاح/الإرادة; the announced self-assessment scale
4+6+4+3+3 = 20 taught as a training scaffold; the honesty «التصحيح هنا
ذاتي» stated 11 times in the chapter, including in its theme).

Per chapter, the house apparatus: 4 lessons (المفهوم → أمثلة محلولة —
word-by-word إعراب walkthroughs for grammar, ordered answer-element
شرحيات for أدب → خلاصة الفصل with rule/comparison tables → تمارين
متدرجة with «حلّها بنفسك» drills), flashcards (grammar 16 × 10, أدب
20 × 4, إنشاء 12 = **252 cards**), quiz **12q / 16 marks** (10 MCQ + 2
written × 3), chapter exam **8q / 60 marks / 45 min** (4 MCQ × 5 + 4
written × 10; grammar exams carry ≥ 2 full-إعراب written items, أدب exams
≥ 2 شرحيات). Book totals: **60 lessons · 180 quiz questions · 120 exam
questions · 252 cards**. Lesson ids `acN-lM`; the subject view renders
«15 فصول · 60 درسًا · 252 بطاقة مراجعة».

**Capstone** «الامتحان الوزاري الشامل — اللغة العربية» (`arab6-capstone`):
**26 all-written items, 145 offered / ترك 45 / 210 minutes**, in the
paper's three parts — **القواعد 58** across 15 branches whose per-topic
marks are EXACTLY the verified 2025 دور ثانٍ distribution (الاستفهام 7 ·
النفي 11 · التقديم والتأخير 4 · التوكيد 7 · النداء 7 · التعجب 7 · المدح
والذم 6 · التمني والترجي 2 · العرض والتحضيض 3 · التحذير والإغراء 4);
**الأدب 47** (جزء أول 34: مدخل النهضة تعليلات 6 · حافظ شاعر مجتمعه 6 ·
نعيمة 6 · أدونيس والحداثة 6 · شعر القضية تعليلًا والتزامًا 5 · الجواهري
5؛ جزء ثانٍ 13: المسرحية 5 · نشأة الرواية 4 · نشأة القصة القصيرة 4);
**الإنشاء 40** (two FRESH topics — الصبر، الأمل — × 20, model answers as
analysed structure + the announced scale). The ترك rule is paraphrased in
the intro note, never quoted; the report breaks the score down per part.

**Where the book corrected the plan (book won, every time):** التقديم
والتأخير in this book is تقديم المفعول به **على فعله** (four وجوب cases),
not على الفاعل; التوكيد has **ثمانية أنواع** in the book's خلاصة (incl.
التوكيد بالقصر وبالنعت بالعددين وبالمصدر), and جميعًا/قاطبة/كافة are
أحوال not توكيد; أدوات النداء are **five** («وا» is NOT among them) and
الترخيم IS taught; فعل «أفعل به» = فعل ماضٍ جامد جاء على صيغة الأمر;
المخصوص بالمدح/الذم = خبر لمبتدأ محذوف وجوبًا تقديره «هو» and in حبذا
the فاعل is «ذا» (اسم الإشارة); the واو after «إياك» is **عاطفة** and
the verb estimated for إياك is «أُحذِّر»; شروط إعمال «ما» الحجازية are
**two** in the book; حافظ's سمات are سلاسة وبساطة ومباشرة (not جزالة);
عوامل النهضة are the مقدمة's three (no بعثات/جامعات in the book); the
شعر حر founding-poem claim does not appear in the book and was dropped;
المقالة at the book is «قطعة إنشائية طويلة» of two types only; the
كلاسيكية of the prescribed pages has exactly **six** خصائص (no
أرسطو/بوالو/وحدات ثلاث — all dropped). Every chapter header records its
book pages and its exclusions.

## 3. Mechanical audits — all pass

Programmatic audit (tsx import of the built modules, run pre- and
post-fix): 1,080 globally-unique lesson/vocab ids; per-pool question ids
unique; every chapter exactly 4 lessons (15/20/12/25 min), quiz sum
exactly 16, exam sum exactly 60, every written rubric summing exactly to
its item's marks; MCQ key distribution inside the 3–4 band in all 15
chapters (never 0, never ≥ 6 across each chapter's 14 MCQs); capstone
parts exactly {58, 47, 40} = 145 with per-topic grammar marks exactly
the دور ثانٍ table; 252 cards; zero emoji, zero `**`, zero `$` (no KaTeX
in the Arabic book) across the whole book serialization. `tsc` build
green.

## 4. Independent cross-check (files only) — and the fix pass

A checker agent that authored nothing in this stage re-derived the book
from the files (record: `research/arabic-crosscheck.md`): **141
إعراب-bearing items re-parsed word by word** (75 written in full + 66
MCQ keyed on إعراب judgments) — the book's corrected rulings are
embodied correctly, including the hard cases; **all 210 chapter MCQ keys
re-derived — every key correct**, no two-defensible-answer items (five
book-dependent items individually cleared against the pages); **40
quotations verified** against their cited pages/Quran; أدب facts
verified against the book pages (حافظ 1871 is the book's own figure;
الواقعية's six أعلام verbatim; الكلاسيكية's six = the book's six only).
Defects found — **all fixed pre-delivery**:

- **D1 (major) — a9 misquote:** الخنساء's line was printed «تبكياني»
  with a fabricated نون وقاية/مفعول به parsing attributed to the book.
  The book (pp. 76–77) prints «تبكيانِ» — dual verb addressing the two
  eyes, ألف الاثنين فاعل, no نون وقاية, no مفعول به. Fixed in the
  chapter header, L2, and ac9-q11 to the book's verse and parsing.
- **D2 (major) — the نقد marker** (§1 above): disclosed in Ch. 14;
  capstone نقد items removed (marks reallocated to الجواهري and the
  نشأة items inside the verified جزء totals — a design blend, labelled
  in the dossier).
- **D3 (major) — capstone إنشاء duplicated Ch. 15** (الوقت = ac15-e5,
  التعاون = ac15-q12): topics replaced with الصبر/الأمل, absent from
  all Ch. 15 pools, with fresh model elements and Quran-sourced شواهد
  only.
- **D4 (major) — capstone أدب originality:** five full + three partial
  topic duplicates redesigned to fresh angles/fact-sets (مدخل as
  تعليلات; حافظ as شاعر مجتمعه; نعيمة standalone; أدونيس والحداثة;
  القضية as تعليل + التزام بشاهد; الرواية as نشأة بمرحلتيها; a new
  القصة القصيرة نشأة item; المسرحية trimmed of its بناء overlap).
- **D5–D15 (minor), all fixed:** ac1-e5 الاستتار جوازًا لا وجوبًا (and
  the same slip in a1 L2's «بنى» step, caught by the coordinator during
  screenshot inspection — every other «مستتر وجوبًا» in the book is
  فعل التعجب / فاعل نعم وبئس, where وجوبًا is the book's ruling);
  ca-g10 «إيا» مبنية على السكون والكاف حرف خطاب; ca-g2a «ما» بشرطي
  الكتاب فقط; ca-g5b «المعلمون» بعد أيّها نعت (مشتق) لا بدل; a
  mislabelled hadith sourcing (removed with D3's replacement); both
  إنشاء items numbered «العشرون» (now العشرون/الحادي والعشرون); a
  gender slip in ca-a4; ac8-q5's explain mislabelling a شرطية امتناعية
  as تمني; ac9-e5/ac9-q7 stems copied from the book's p. 75 examples
  replaced with fresh sentences on identical rules; three
  near-duplicate capstone grammar stems replaced (يا حارس البستان /
  لا متكاسل ناجح في الحياة / خالد راجع درسك); ac13-e7's أركان string
  now marks «الحوار واللغة (ركن واحد)» explicitly; a12's درويش card
  lost an unverifiable دواوين list and now carries the book's own
  p. 161 characterization (verified by the coordinator from the page).

## 5. Tests

Six new tests in `tests/stage-f.spec.ts` mirroring Stage E: subject
listing (15 فصول · 252 بطاقة مراجعة, chapter 1 expanded), the إعراب
worked-solution flow (steps reveal progressively; final rule asserts
«استوفى مفعوله»; zero `.katex-error`), the written quiz flow (10 MCQ
from data + self-marked 2/3 and 3/3 → stored `quizBest['arab6-c1']` =
exactly {15, 16}), the written exam flow (stored `examBest` = 20 +
self-marked gain, poll pattern), the capstone end-to-end (26 written
items walked; intro asserts ترك 45 wording; report asserts «من 145» +
the three part rows القواعد/الأدب/الإنشاء), and lesson persistence
(`ac1-l1` in localStorage, «1/4 دروس منجزة»). A Stage F block appended
to `tests/screenshots.spec.ts` produced **60-arabic-subject.png,
61-arabic-solution.png, 62-arabic-written.png, 63-arabic-capstone.png**
— all four inspected by eye (subject stats and the 884-card nav badge =
632 + 252; the إعراب walkthrough rendering with full تشكيل; the written
question with model answer + «مفتاح التصحيح»; the capstone intro
showing 145 / ترك 45 / 210 دقيقة / three parts).

**Disclosed amendment:** `tests/academy.spec.ts` home test — with
Arabic live, NO subject remains «قريبًا»: the test now asserts the
Arabic button is visible and drops the «قريبًا» assertion (title and
comments updated), following the established per-stage pattern.

**Total: Playwright 50/50** (43 pre-existing kept green + 6 new + the
extended screenshots test).

## 6. Delivery

- Code commit `67dc2a0` pushed to `github.com/dolanexeee/uruk-academy`
  (the sweep also committed the previously-untracked `SHARE-PACK-v2.md`
  and the test-regenerated screenshots 01–53, as in previous stages).
- Deployed **git-free** (clean copy without `.git` → `npx vercel
  --prod`); live bundle `index-Btis0j3N.js`, HTTP 200, Arabic content
  verified present in the served bundle itself.
- Home Arabic card is live with real stats (15 فصول · 60 درسًا · 252
  بطاقة مراجعة); the «عن المصادر» page carries `ARABIC_ABOUT_SOURCES`
  with the بلاغة/الاختصاص/نقد scope reasoning stated publicly.

## 7. Honest gaps

- The paper frame (145/45/210 and the per-part, per-topic weights)
  comes from mlazemna's published 2025 round tallies, as in Stages
  C–E; the ministry's verbatim «أجب عن…» line could not be verified
  from text sources and is paraphrased, never quoted.
- أدب facts are verified against the book's own pages (the authority
  for this curriculum); where the book's figures differ from common
  references — e.g. حافظ's birth year 1871 as the book prints it — the
  book's figure is taught and the dossier notes it.
- The cross-checker's report file (`research/arabic-crosscheck.md`)
  contains its mechanical audit and Tasks 1–2 in full; its Tasks 3–7
  findings and the complete defect list were delivered in its report
  to the coordinator and are summarized verbatim in §4 above and in
  the fix-pass addendum appended to that file.
- Printed-given teaching data (e.g. أعلام lists) was verified against
  the book pages the chapters cite; شرحية model answers are checked
  for factual correctness against the book, not for marker-phrasing
  fidelity to any official marking scheme (none is published).
- التصحيح of إنشاء and all written questions remains self-marking by
  design, and the platform says so in the content itself — no AI
  grading is claimed anywhere.

**Stage F is complete. Per the commission, the final platform-wide
audit is the next step and is NOT started here.**
