# أكاديمية أوروك — Uruk Academy

**منصّة تعليمية تفاعلية مفتوحة المصدر للطلاب العراقيين** — عربية أولًا، تعمل بالكامل
دون إنترنت بعد أول تحميل، وكل تقدّم الطالب محفوظ على جهازه فقط.

🔗 **الموقع الحي:** https://uruk-academy.vercel.app

أكاديمية أوروك هي المشروع الثالث في ثلاثية أوروك مفتوحة المصدر
(بعد [Uruk Cut](https://github.com/dolanexeee/uruk-cut) و[Uruk OS](https://github.com/dolanexeee/uruk-os)).

---

## ماذا يوجد الآن؟ (المرحلتان الأولى والثانية — كتاب الإنجليزية مكتمل)

- **الرئيسية** — شبكة المواد مع شريط تقدّم حقيقي من بيانات الطالب على جهازه.
- **الإنجليزية — السادس الإعدادي**: كتاب «English for Iraq» **كاملًا بكل وحداته الثماني**:
  - 📖 **٦ وحدات تعليمية كاملة** (١، ٢، ٣، ٥، ٦، ٧): لكل وحدة ٤ دروس (قراءة بقصّة/موضوع
    الدرس العاشر وحقائقه الوزارية الموثّقة، قواعد بجداول وأمثلة من نماذج الوزارة،
    مفردات ~٢٠ كلمة، شرح مع موضوع الإنشاء الوزاري للوحدة) + اختبار ١٤ سؤالًا بتصحيح
    فوري وشرح عربي + بطاقات مراجعة بنظام لايتنر (٥ صناديق) + امتحان وزاري مؤقّت
    (١٥ سؤالًا / ٦٠ درجة / ٢٠ دقيقة) بتقرير مفصّل حسب المهارة.
    الموضوعات: الطوارئ والصحة (١)، تكنولوجيا الأمن والرادار (٢)، المترجم الفوري في
    المؤتمرات (٣)، أهمية العطل (٥)، صناعة المال والادّخار والاستثمار (٦)، استخدام
    المكتبة والوظائف (٧).
  - 🔁 **وحدتا مراجعة كما في الكتاب نفسه** (٤ تراجع ١–٣، ٨ تراجع ٥–٧): اختبار مراجعة
    مختلط + Deck لايتنر موحّد لكلمات الوحدات المراجَعة + امتحان «نصف الكتاب».
  - 🏆 **الامتحان الوزاري الشامل**: ٢٥ سؤالًا / ١٠٠ درجة / ٤٥ دقيقة من كل وحدات الكتاب،
    وتقريره يفصّل النتيجة **وحدةً وحدة** ليعرف الطالب نقطة ضعفه بدقة.
- **بقية المواد** (رياضيات، فيزياء، كيمياء، أحياء، عربية) معلنة بصدق بشارة «قريبًا»
  وغير قابلة للتنقّل حتى تُبنى فعلًا.
- **حساب الطالب المحلي**: اسم اختياري، نسبة إنجاز كل وحدة، سلسلة أيام الدراسة،
  أفضل النتائج — كلها على الجهاز، ولا حسابات ولا خوادم.
- **PWA قابلة للتثبيت** وتعمل offline بالكامل (تطبيق + محتوى + خطوط عربية مدمجة).

## عن المحتوى والمصادر

المحتوى مُشتق من الكتاب المدرسي الرسمي **«English for Iraq» للصف السادس الإعدادي،
وزارة التربية — جمهورية العراق**، وأُعيدت صياغته كدروس تفاعلية أصلية بكلماتنا؛
لم تُنسخ نصوص الكتاب حرفيًا. أسلوب الأسئلة يتبع نماذج الأسئلة المنشورة من الوزارة.
دليل صيغة المحتوى للمساهمين في [CONTENT.md](CONTENT.md).

## التقنية

Vite + React + TypeScript + Tailwind CSS · تخزين محلي (localStorage) ·
Service Worker بتخزين مسبق كامل (vite-plugin-pwa) · خطوط Cairo وIBM Plex Sans Arabic
مدمجة · اختبارات Playwright شاملة (١٤/١٤) ضد بنية الإنتاج.

```bash
npm install
npm run dev        # تطوير
npm run build      # بناء الإنتاج
npm run preview    # معاينة الإنتاج
npm run test:e2e   # اختبارات Playwright
```

## الترخيص

Apache-2.0 — انظر [LICENSE](LICENSE). الهوية البصرية (الزقورة، نجمة عشتار،
لوحة اللازورد والذهب) أعمال أصلية لعائلة أوروك.

---

### English summary

**Uruk Academy** is an Arabic-first, offline-first, open-source interactive learning
platform for Iraqi students — the third flagship of the URUK suite. The engine
(lessons player, instant-feedback quizzes, Leitner flashcards, timed ministry-style
exam mode with full correction reports, local student profile) now carries the
**complete “English for Iraq” book (6th Preparatory, Iraqi Ministry of Education)**:
six full teaching units, the book's own two revision units (4 and 8) built as review
hubs with half-book mocks, and a 25-question / 100-mark full-book capstone exam with
a per-unit score breakdown — all content rewritten in our own words from verified
curriculum facts, never copied verbatim. Everything runs on-device; no accounts,
no servers, $0 to run.
