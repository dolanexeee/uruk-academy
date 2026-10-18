# أكاديمية أوروك — Uruk Academy

**منصّة تعليمية تفاعلية مفتوحة المصدر للطلاب العراقيين** — عربية أولًا، تعمل بالكامل
دون إنترنت بعد أول تحميل، وكل تقدّم الطالب محفوظ على جهازه فقط.

🔗 **الموقع الحي:** https://uruk-academy.vercel.app

أكاديمية أوروك هي المشروع الثالث في ثلاثية أوروك مفتوحة المصدر
(بعد [Uruk Cut](https://github.com/dolanexeee/uruk-cut) و[Uruk OS](https://github.com/dolanexeee/uruk-os)).

---

## ماذا يوجد الآن؟ (المرحلة الأولى)

المحرك كامل، وبنى المحتوى بدأت بوحدة واحدة كاملة ومُختبَرة:

- **الرئيسية** — شبكة المواد مع شريط تقدّم حقيقي من بيانات الطالب على جهازه.
- **الإنجليزية — السادس الإعدادي**: **الوحدة الأولى كاملة** من كتاب «English for Iraq»:
  - 📖 درس قراءة: «سأظلّ فخورةً بك دائمًا» — ملخّص القصة بكلماتنا وحقائق الاستيعاب الوزارية.
  - ✒️ درس قواعد: أزمنة السرد — الماضي البسيط × الماضي المستمر، بجداول وأمثلة من نماذج الوزارة.
  - 🔤 درس مفردات: ٢٢ كلمة في حقل الصحة والطوارئ بمعانٍ عربية وأمثلة أصلية.
  - 💡 درس شرح: التصرّف الصحيح في الطوارئ + خلاصة الوحدة.
  - 🧠 **اختبار الوحدة**: ١٤ سؤالًا بتصحيح فوري وشرح عربي لكل سؤال.
  - 🃏 **بطاقات مراجعة بنظام لايتنر** (٥ صناديق وجدولة استحقاق) لكلمات الوحدة.
  - 📝 **وضع الامتحان الوزاري**: ١٥ سؤالًا، ٦٠ درجة، مؤقّت ٢٠ دقيقة، لا تصحيح حتى
    التسليم، ثم تقرير كامل بتصحيح كل سؤال وتفصيل الدرجات حسب المهارة.
- **الوحدات ٢–٨ وبقية المواد** معلنة بصدق بشارة «قريبًا» وغير قابلة للتنقّل حتى تُبنى فعلًا.
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
مدمجة · اختبارات Playwright شاملة (٧/٧) ضد بنية الإنتاج.

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
platform for Iraqi students — the third flagship of the URUK suite. Phase 1 ships the
complete engine (lessons player, instant-feedback quizzes, Leitner flashcards, a timed
ministry-style exam mode with a full correction report, local student profile) with
**Unit One of “English for Iraq” (6th Preparatory, Iraqi Ministry of Education) fully
built** — content rewritten in our own words from the official textbook, never copied
verbatim. Everything runs on-device; no accounts, no servers, $0 to run.
