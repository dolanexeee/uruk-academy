/* Uruk Academy — Unit Seven of «English for Iraq», 6th Preparatory.
   Reading: Lesson 10 «Using the Library» — facts verified against the
   Ministry of Education's published sample questions for this lesson
   (why the writer is improving his English, the careers section, body
   language in interviews, CV writing, evening/summer classes).
   Grammar: future forms — the Activity Book's five future types
   (will / going to / present continuous / present simple / future
   continuous) plus future in the past. P2.1 discipline note: an
   earlier draft also taught the future perfect as a unit topic;
   the AB classification does not include it for this unit, so it
   was removed from the lesson, quiz and exam in P2.1.
   All text is our own writing. */

import type { Unit, VocabWord } from './types';

const vocab: VocabWord[] = [
  { id: 'u7-library', word: 'library', pos: 'اسم', meaning: 'مكتبة — مكان لحفظ الكتب والمعلومات وإعارتها', example: 'Our school library has a large section about different careers.', exampleAr: 'في مكتبة مدرستنا قسم كبير عن المهن المختلفة.' },
  { id: 'u7-librarian', word: 'librarian', pos: 'اسم', meaning: 'أمين المكتبة — المسؤول عنها ومساعدة روّادها', example: 'Ask the librarian if you need information about evening classes.', exampleAr: 'اسأل أمين المكتبة إذا احتجت معلومات عن الدروس المسائية.' },
  { id: 'u7-borrow', word: 'borrow', pos: 'فعل', meaning: 'يستعير', example: 'You can borrow three books from the library at a time.', exampleAr: 'يمكنك استعارة ثلاثة كتب من المكتبة في المرة الواحدة.' },
  { id: 'u7-career', word: 'career', pos: 'اسم', meaning: 'مهنة؛ مستقبل مهني وحياة عملية', example: 'He is looking for a career that involves travelling.', exampleAr: 'إنه يبحث عن مهنة تتضمّن السفر.' },
  { id: 'u7-interview', word: 'interview', pos: 'اسم', meaning: 'مقابلة — وخاصة مقابلة التوظيف', example: 'Body language is very important in a job interview.', exampleAr: 'لغة الجسد مهمة جدًا في مقابلة العمل.' },
  { id: 'u7-cv', word: 'CV (curriculum vitae)', pos: 'اسم', meaning: 'السيرة الذاتية — وثيقة تلخّص تعليمك وخبراتك عند التقديم لعمل', example: 'The library has books that teach you how to write a good CV.', exampleAr: 'في المكتبة كتب تعلّمك كيف تكتب سيرة ذاتية جيدة.' },
  { id: 'u7-body-language', word: 'body language', pos: 'اسم', meaning: 'لغة الجسد — ما تعبّر عنه حركاتك وجلستك دون كلام', example: 'Good body language can help you succeed in an interview.', exampleAr: 'لغة الجسد الجيدة قد تساعدك على النجاح في المقابلة.' },
  { id: 'u7-improve', word: 'improve', pos: 'فعل', meaning: 'يحسّن؛ يطوّر', example: 'He goes to the library to improve his English.', exampleAr: 'يذهب إلى المكتبة ليحسّن لغته الإنجليزية.' },
  { id: 'u7-section', word: 'section', pos: 'اسم', meaning: 'قسم — جزء مخصّص من مكان أو كتاب', example: 'There is a whole section of books about different careers.', exampleAr: 'يوجد قسم كامل من الكتب عن المهن المختلفة.' },
  { id: 'u7-range', word: 'range', pos: 'اسم', meaning: 'مجموعة واسعة متنوّعة', example: 'The library offers a wide range of information for job hunters.', exampleAr: 'تقدّم المكتبة مجموعة واسعة من المعلومات للباحثين عن عمل.' },
  { id: 'u7-magazine', word: 'magazine', pos: 'اسم', meaning: 'مجلة دورية', example: 'She reads a business magazine at the library every week.', exampleAr: 'تقرأ مجلة أعمال في المكتبة كل أسبوع.' },
  { id: 'u7-newspaper', word: 'newspaper', pos: 'اسم', meaning: 'صحيفة؛ جريدة', example: 'Libraries keep a daily selection of newspapers and magazines.', exampleAr: 'تحتفظ المكتبات بمجموعة يومية من الصحف والمجلات.' },
  { id: 'u7-course', word: 'course', pos: 'اسم', meaning: 'دورة تعليمية؛ كورس', example: 'He joined an evening course to learn computer skills.', exampleAr: 'التحق بدورة مسائية لتعلم مهارات الحاسوب.' },
  { id: 'u7-qualification', word: 'qualification', pos: 'اسم', meaning: 'مؤهّل — شهادة أو خبرة مطلوبة لعمل', example: 'This job needs a qualification in engineering.', exampleAr: 'هذا العمل يحتاج إلى مؤهّل في الهندسة.' },
  { id: 'u7-experience', word: 'experience', pos: 'اسم', meaning: 'خبرة عملية سابقة', example: 'Employers usually ask about your experience.', exampleAr: 'يسأل أصحاب العمل عادةً عن خبرتك.' },
  { id: 'u7-apply', word: 'apply for', pos: 'فعل مركّب', meaning: 'يتقدّم بطلب (لعمل أو دورة)', example: 'She decided to apply for a new job at the bank.', exampleAr: 'قرّرت أن تتقدّم لوظيفة جديدة في المصرف.' },
  { id: 'u7-involve', word: 'involve', pos: 'فعل', meaning: 'يتضمّن؛ يشمل', example: 'His dream job involves working with people.', exampleAr: 'وظيفة أحلامه تتضمّن العمل مع الناس.' },
  { id: 'u7-information', word: 'information', pos: 'اسم', meaning: 'معلومات', example: 'You can get information about summer classes from the librarian.', exampleAr: 'يمكنك الحصول على معلومات عن الدروس الصيفية من أمين المكتبة.' },
  { id: 'u7-shelf', word: 'shelf', pos: 'اسم', meaning: 'رفّ الكتب', example: 'The travel books are on the top shelf.', exampleAr: 'كتب السفر على الرفّ العلوي.' },
  { id: 'u7-future', word: 'future', pos: 'اسم', meaning: 'المستقبل', example: 'Reading is one of the best ways to build your future.', exampleAr: 'القراءة من أفضل الطرق لبناء مستقبلك.' },
];

export const unit7: Unit = {
  id: 'en6-u7',
  number: 7,
  titleAr: 'الوحدة السابعة',
  titleEn: 'Using the Library',
  theme: 'استخدام المكتبة — كاتب يطوّر إنجليزيته ويبحث عن مهنة جديدة، وأزمنة المستقبل بكل صورها.',
  status: 'live',
  kind: 'content',
  vocab,
  examMinutes: 20,
  lessons: [
    {
      id: 'u7-l1',
      title: 'القراءة — استخدام المكتبة',
      kind: 'reading',
      minutes: 15,
      intro: 'درس القراءة في الوحدة السابعة (الدرس العاشر من الكتاب) عنوانه «Using the Library»: كاتب يروي كيف صارت المكتبة بوابته إلى عمل جديد وحياة مهنية أفضل. أسئلة نماذج الوزارة عن هذا الدرس محددة جدًا، ونبني درسنا عليها.',
      sections: [
        {
          type: 'explain',
          title: 'قبل أن تقرأ',
          paragraphs: [
            'بطل الدرس موظّف كان يعمل في مصرف، يمنح الناس معلومات عن السفر ضمن عمله. لكنه غير راضٍ تمامًا عن مكانه: يريد تحسين لغته الإنجليزية والبحث عن عمل جديد يناسبه أكثر — عملٍ يتضمّن السفر الذي يحبّه. تذكّر هذا الدافع، فهو خيط الدرس كله: المكتبة بالنسبة له ليست مكانًا للكتب فقط، بل مكتب توظيف ومدرسة لغة ومرشد مهني في آنٍ واحد.',
          ],
        },
        {
          type: 'reading',
          title: 'الدرس بملخّصنا',
          paragraphs: [
            'يبدأ الكاتب من حاجته: يحتاج إلى تحسين لغته الإنجليزية لأنها مفتاح فرص أوسع في سوق العمل. في المكتبة يجد نطاقًا واسعًا من المعلومات الموجّهة خصوصًا للباحثين عن عمل جديد، فالوظائف الجديدة تظهر طوال الوقت مع تغيّر الحياة والتقنية، ومن يرد مواكبتها يحتاج مصدرًا متجدّدًا للمعلومات.',
            'في المكتبة قسم كامل من الكتب عن المهن المختلفة: يصف كل مهنة وطبيعة عملها وما تحتاجه من مؤهّلات وخبرات، فيستطيع القارئ أن يقارن بين المهن ويختار ما يناسب قدراته قبل أن يتقدّم لأي عمل.',
            'ومن المكتبة تعلّم الكاتب دروسًا عملية للتوظيف نفسه: كم هي مهمة لغة الجسد في المقابلة، وكيف يكتب سيرة ذاتية جيدة تعرض تعليمه وخبرته بصورة مقنعة.',
            'وتفيد المكتبة زائرها يوميًا أيضًا: فيها مجموعة يومية مختارة من الصحف والمجلات تبقيه على اطّلاع بأحدث الإعلانات والفرص، ويستطيع أن يحصل من أمين المكتبة على معلومات عن الدروس المسائية والدورات الصيفية التي تطوّر مهاراته، وأن يستعير كتبًا بالإنجليزية — بل ويتدرّب على اللغة بوسائلها السمعية أيضًا.',
            'الخلاصة التي يخرج بها الكاتب: من يريد تغيير مستقبله المهني لا يحتاج إلا أن يبدأ — والمكتبة العامة المجانية أقرب بداية ممكنة.',
          ],
          examples: [
            { en: 'The library has a range of information for people who are looking for jobs.', ar: 'في المكتبة نطاق واسع من المعلومات للباحثين عن عمل.' },
            { en: 'He has learnt how important body language is in an interview.', ar: 'تعلّم كم هي مهمة لغة الجسد في المقابلة.' },
            { en: 'In the library you can learn how to write a good CV.', ar: 'في المكتبة تستطيع تعلّم كتابة سيرة ذاتية جيدة.' },
            { en: 'He would like a job which involved travelling.', ar: 'يودّ عملًا يتضمّن السفر.' },
          ],
        },
        {
          type: 'explain',
          title: 'حقائق يحبّها الامتحان الوزاري',
          paragraphs: ['أسئلة الاستيعاب في نماذج الوزارة عن هذا الدرس ثابتة المواضع. تأكد أنك تستطيع الإجابة عن كل نقطة:'],
          bullets: [
            'يحتاج الكاتب إلى تحسين إنجليزيته لأنها مفتاح عمل جديد وفرص أفضل.',
            'في المكتبة معلومات واسعة للباحثين عن عمل (jobs/careers).',
            'تظهر وظائف جديدة باستمرار مع تطوّر التقنية وتغيّر حاجات المجتمع.',
            'المجموعة اليومية من الصحف والمجلات مفيدة للاطّلاع على الفرص والإعلانات وآخر المستجدات.',
            'قسم كتب المهن يصف كل مهنة ومؤهّلاتها وطبيعة عملها.',
            'تعلّم الكاتب أهمية لغة الجسد في المقابلات، وكيفية كتابة سيرة ذاتية جيدة.',
            'الكاتب يرغب في عملٍ يتضمّن السفر.',
            'كان الكاتب يعمل في مصرف ويقدّم للناس معلومات عن السفر.',
            'لم يبحث الكاتب عن عمل جديد لأنه فشل في عمله المصرفي، بل لأنه يريد تطوير مستقبله.',
            'يمكن الحصول من أمين المكتبة على معلومات عن الدروس المسائية والدورات الصيفية.',
          ],
          callout: 'انتبه لأسئلة الصح والخطأ في هذا الدرس: عبارة «بحث عن عمل لأنه فشل في المصرف» خاطئة — الدافع هو التطوير لا الفشل.',
        },
      ],
    },
    {
      id: 'u7-l2',
      title: 'القواعد — أزمنة المستقبل وصوره',
      kind: 'grammar',
      minutes: 20,
      intro: 'قواعد الوحدة السابعة هي عائلة المستقبل كاملة كما يصنّفها كتاب النشاط: خمسة أنواع (will، وgoing to، والمضارع المستمر، والمضارع البسيط، والمستقبل المستمر)، ثم صيغة خاصة هي المستقبل في الماضي. لكل صورة معناها الدقيق، وأسئلة الوزارة تطلب إكمال الجمل بالصورة الصحيحة من الفعل — والفرق بين الصور هو المطلوب.',
      sections: [
        {
          type: 'grammar',
          title: 'أولًا: خريطة صور المستقبل',
          paragraphs: ['اختر الصورة بحسب المعنى: توقّع أو قرار لحظي، أو خطة مقرّرة، أو موعد ثابت، أو ترتيب مؤكد، أو مشهد جارٍ في لحظة مستقبلية.'],
          table: {
            head: ['الصورة', 'التكوين', 'الاستخدام', 'مثال'],
            rows: [
              ['will', 'will + verb', 'توقّعات، قرارات لحظية، وعود وعروض', 'I think he will pass the exam.'],
              ['be going to', 'am/is/are going to + verb', 'خطط ونوايا مقرّرة من قبل', 'We are going to buy a new house next month.'],
              ['المضارع المستمر', 'am/is/are + verb-ing', 'ترتيبات مؤكدة بموعد ومكان', 'I am meeting my friend at the airport tomorrow.'],
              ['المضارع البسيط', 'verb / verb-s', 'جداول ومواعيد ثابتة (قطارات، دروس)', 'The train departs in ten minutes.'],
              ['المستقبل المستمر', 'will be + verb-ing', 'حدث سيكون جاريًا في لحظة من المستقبل', 'In an hour, I will be sitting in front of my TV.'],
            ],
            ltrCols: [1, 3],
          },
        },
        {
          type: 'grammar',
          title: 'ثانيًا: will وحدها — قرارات وتوقّعات',
          paragraphs: [
            'تُستخدم will للمستقبل العام: توقّعات وآراء (I think he will pass)، وقرارات لحظية (I will help you)، ووعود وعروض. الفرق الدقيق الذي تختبره الوزارة: إذا كان الأمر مخططًا له سلفًا فالأدق going to، وإذا كان ترتيبًا مؤكدًا مع شخص آخر فالأدق المضارع المستمر.',
          ],
          examples: [
            { en: 'Hurry up! The train departs in ten minutes.', ar: 'موعد ثابت في جدول — مضارع بسيط، لا will.' },
            { en: 'Are you doing anything on Sunday morning?', ar: 'سؤال عن ترتيبات مؤكدة — مضارع مستمر.' },
            { en: 'In an hour, I will be sitting in front of my TV.', ar: 'مشهد جارٍ في لحظة مستقبلية — مستقبل مستمر (من أمثلة تدريبات الوحدة).' },
          ],
        },
        {
          type: 'grammar',
          title: 'ثالثًا: المستقبل في الماضي Future in the Past',
          paragraphs: [
            'حين نروي في الماضي خطةً كانت مستقبلية آنذاك، نرجّع صور المستقبل خطوة إلى الوراء: will تصبح would، و be going to تصبح was/were going to. هذا النمط يأتي في أسئلة الوزارة بصيغة «أعد الكتابة باستخدام المستقبل في الماضي».',
          ],
          bullets: [
            'He is going to be a librarian. → He decided he was going to be a librarian.',
            'She is going to her computer course tomorrow. → I found out she was going to her computer course the next day.',
            'Hassan thinks he will enjoy graphic design. → Hassan thought he would enjoy graphic design.',
          ],
          examples: [
            { en: 'He decided he was going to study medicine.', ar: 'قرار ماضٍ عن خطة كانت مستقبلية: was going to.' },
            { en: 'She said she would phone us the next day.', ar: 'will المنقولة إلى الماضي تصبح would.' },
          ],
          callout: 'قاعدة الإكمال الوزارية: إذا رأيت in an hour / this time tomorrow فكّر بالمستقبل المستمر، وإذا رأيت موعدًا ثابتًا في جدول (قطار يغادر، درس يبدأ) فكّر بالمضارع البسيط.',
        },
      ],
    },
    {
      id: 'u7-l3',
      title: 'مفردات الوحدة — المكتبة والمهن',
      kind: 'vocab',
      minutes: 10,
      intro: 'كلمات هذه الوحدة تدور حول عالمين: المكتبة وخدماتها، والبحث عن عمل وبناء المستقبل المهني. هي نفسها كلمات بطاقات المراجعة لهذه الوحدة.',
      sections: [
        {
          type: 'vocab',
          title: 'كلمات الوحدة السابعة',
          paragraphs: ['اربط كل كلمة بمشهد من درس القراءة: الكاتب في المكتبة يبحث في قسم المهن، يسأل أمين المكتبة، ويتعلّم لغة الجسد والسيرة الذاتية.'],
          vocabIds: [
            'u7-library', 'u7-librarian', 'u7-borrow', 'u7-career', 'u7-interview',
            'u7-cv', 'u7-body-language', 'u7-improve', 'u7-section', 'u7-range',
            'u7-magazine', 'u7-newspaper', 'u7-course', 'u7-qualification', 'u7-experience',
            'u7-apply', 'u7-involve', 'u7-information', 'u7-shelf', 'u7-future',
          ],
        },
      ],
    },
    {
      id: 'u7-l4',
      title: 'شرح — خطواتك نحو عمل أفضل، وخلاصة الوحدة',
      kind: 'explain',
      minutes: 10,
      intro: 'درس «استخدام المكتبة» خريطة عملية يرسمها الكاتب لأي شاب يريد تطوير نفسه. نلخّص خطواته كما فعلها، ثم نختم بخلاصة الوحدة.',
      sections: [
        {
          type: 'explain',
          title: 'خطة الكاتب — قابلة للتطبيق فعلًا',
          bullets: [
            'اعترف بالمهارة الناقصة أولًا: لغته الإنجليزية تحتاج تحسينًا، فسمّى هدفه بوضوح.',
            'اتجه إلى مصدر مجاني متاح للجميع: المكتبة العامة، بدل انتظار فرصة تأتي وحدها.',
            'درس سوق العمل من قسم المهن: ماذا تتطلب كل وظيفة من مؤهّلات وخبرات؟',
            'طوّر أدوات التقديم: سيرة ذاتية جيدة، ولغة جسد واثقة في المقابلة.',
            'تابع الجديد يوميًا من الصحف والمجلات وإعلانات الوظائف.',
            'استثمر وقت الفراغ في دورات مسائية وصيفية تبني مهارات قابلة للتوظيف.',
          ],
          examples: [
            { en: 'If you want to improve your language, the library is a good place to start.', ar: 'إذا أردت تحسين لغتك، فالمكتبة مكان جيد للبداية.' },
            { en: 'New jobs are appearing all the time.', ar: 'وظائف جديدة تظهر طوال الوقت — جملة مفتاحية من درس القراءة.' },
          ],
        },
        {
          type: 'explain',
          title: 'خلاصة الوحدة السابعة',
          paragraphs: [
            'ركائز الوحدة ثلاث: فهم درس «Using the Library» وحقائقه (دافع الكاتب، قسم المهن، لغة الجسد، السيرة الذاتية، الدروس المسائية)، والتمييز الدقيق بين أنواع المستقبل الخمسة كما يصنّفها كتاب النشاط (will وgoing to والمضارع المستمر والمضارع البسيط والمستقبل المستمر) بحسب المعنى، وصيغة المستقبل في الماضي was/were going to و would عند رواية خطط ماضية.',
          ],
          bullets: [
            'اختبر نفسك في «اختبار الوحدة» مع شرح لكل إجابة.',
            'ثبّت كلمات المكتبة والمهن في «بطاقات المراجعة».',
            'ثم واجه «الامتحان الوزاري» للوحدة: مؤقّت ودرجات وتصحيح كامل.',
          ],
        },
      ],
    },
  ],
  quiz: [
    { id: 'u7q-r1', skill: 'reading', type: 'mcq', q: 'لماذا يحتاج كاتب درس «Using the Library» إلى تحسين لغته الإنجليزية؟', options: ['لأنه سيهاجر الأسبوع القادم', 'لأنه يبحث عن عمل جديد وفرص أفضل', 'لأن مديره طلب منه ذلك كتابةً', 'لأنه يريد أن يصبح مترجمًا فوريًا'], answer: 1, explain: 'دافع الكاتب هو تطوير مستقبله المهني والبحث عن عمل أفضل — والإنجليزية مفتاح ذلك.', marks: 1 },
    { id: 'u7q-r2', skill: 'reading', type: 'mcq', q: 'ماذا يصف قسم الكتب الخاص بالمهن في المكتبة؟', options: ['تاريخ المكتبات في العالم', 'كل مهنة وطبيعة عملها وما تحتاجه من مؤهّلات', 'أسعار الكتب المستعملة', 'سير ذاتية جاهزة للنسخ'], answer: 1, explain: 'قسم المهن يعرّف بكل مهنة: طبيعة العمل والمؤهّلات والخبرات المطلوبة، ليقارن القارئ ويختار.', marks: 1 },
    { id: 'u7q-r3', skill: 'reading', type: 'tf', q: 'قرّر الكاتب البحث عن عمل جديد لأنه فشل في عمله في المصرف.', options: ['صح', 'خطأ'], answer: 1, explain: 'خطأ — وهذه من عبارات الصح والخطأ في نماذج الوزارة: الكاتب أراد تطوير مستقبله، لا لأنه فشل في عمله.', marks: 1 },
    { id: 'u7q-r4', skill: 'reading', type: 'mcq', q: 'ما الذي تعلّمه الكاتب في المكتبة عن مقابلات العمل؟', options: ['أن يصل متأخرًا قليلًا ليبدو مشغولًا', 'أهمية لغة الجسد وكيفية كتابة سيرة ذاتية جيدة', 'أن يرفض الأسئلة الصعبة', 'أن يتحدث عن راتبه السابق فقط'], answer: 1, explain: 'من حقائق الدرس الثابتة: تعلّم أهمية لغة الجسد في المقابلة، وكيف يكتب CV جيدًا.', marks: 1 },
    { id: 'u7q-r5', skill: 'reading', type: 'mcq', q: 'من أين يمكن الحصول على معلومات عن الدروس المسائية والدورات الصيفية؟', options: ['من مدير المصرف', 'من أمين المكتبة', 'من إعلانات الشوارع فقط', 'من قسم المهن وحده'], answer: 1, explain: 'حسب الدرس، أمين المكتبة مصدر هذه المعلومات: الدروس المسائية والدورات الصيفية التي تطوّر المهارات.', marks: 1 },
    { id: 'u7q-g1', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة لإكمال الجملة:', qEn: 'We ___ a new house next month. (a plan we have already decided)', options: ['are going to buy', 'buys', 'bought yesterday', 'buying now'], answer: 0, explain: 'خطة مقرّرة سلفًا تأتي بـ be going to + المصدر — من تدريبات الوحدة نفسها.', marks: 1 },
    { id: 'u7q-g2', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة لإكمال الجملة:', qEn: 'Hurry up! The train ___ in ten minutes.', options: ['will be depart', 'departs', 'is depart', 'depart yesterday'], answer: 1, explain: 'مواعيد الجداول الثابتة (القطارات والدروس) تأتي بالمضارع البسيط: departs.', marks: 1 },
    { id: 'u7q-g3', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة لإكمال الجملة:', qEn: 'In an hour, I ___ in front of my TV.', options: ['will be sitting', 'sits', 'am sit', 'sat yesterday'], answer: 0, explain: 'حدث سيكون جاريًا في لحظة مستقبلية محددة يأتي بالمستقبل المستمر: will be sitting.', marks: 1 },
    { id: 'u7q-g4', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة لإكمال الجملة:', qEn: 'I think our team ___ the match tomorrow.', options: ['will win', 'wins yesterday', 'won last week', 'winning now'], answer: 0, explain: 'التوقّعات والآراء عمّا سيحدث تأتي بـ will + المصدر — أول أنواع المستقبل في تصنيف كتاب النشاط.', marks: 1 },
    { id: 'u7q-g5', skill: 'grammar', type: 'mcq', q: 'أعد كتابة الجملة بالمستقبل في الماضي:', qEn: 'He is going to be a librarian. → He decided he ___.', options: ['was going to be a librarian', 'is going to be a librarian now', 'will be a librarian yesterday', 'goes to be a librarian'], answer: 0, explain: 'عند رواية خطة مستقبلية في الماضي ترجع be going to إلى was going to — نمط وزاري ثابت.', marks: 1 },
    { id: 'u7q-v1', skill: 'vocab', type: 'mcq', q: 'ما معنى body language؟', options: ['لغة أجنبية صعبة', 'لغة الجسد — تعبيرات الحركات والجلوس', 'لغة برمجة للحاسوب', 'خط اليد في الكتابة'], answer: 1, explain: 'لغة الجسد هي ما تعبّر عنه هيئتك وحركاتك دون كلام، وهي من حقائق درس المقابلات في هذه الوحدة.', marks: 1 },
    { id: 'u7q-v2', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة لإكمال الجملة:', qEn: 'If you want information about evening classes, ask the ___.', options: ['librarian', 'paramedic', 'operator', 'neighbour'], answer: 0, explain: 'أمين المكتبة librarian هو المسؤول عن المكتبة ومساعدة روّادها بالمعلومات.', marks: 1 },
    { id: 'u7q-v3', skill: 'vocab', type: 'tf', q: 'كلمة career تعني «مهنة ومستقبلًا مهنيًا».', options: ['صح', 'خطأ'], answer: 0, explain: 'صحيح. career هي المهنة بمعناها الممتد: حياتك العملية ومستقبلك المهني كله.', marks: 1 },
    { id: 'u7q-v4', skill: 'vocab', type: 'mcq', q: 'ما الترجمة الإنجليزية الصحيحة لعبارة «سيرة ذاتية»؟', options: ['body language', 'CV', 'section', 'range'], answer: 1, explain: 'السيرة الذاتية هي CV اختصار curriculum vitae — وثيقة التعليم والخبرات عند التقديم لعمل.', marks: 1 },
  ],
  exam: [
    { id: 'u7e-r1', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'Why does the writer need to improve his English?', options: ['To pass a driving test', 'To look for a better job and new opportunities', 'Because his bank manager ordered him', 'To write poetry in English'], answer: 1, explain: 'يحتاج تحسين إنجليزيته لأنه يبحث عن عمل جديد وفرص أفضل — دافع الدرس الأساسي.', marks: 4 },
    { id: 'u7e-r2', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'What does the section of books about different careers describe?', options: ['The history of famous libraries', 'What each job involves and the qualifications it needs', 'How to repair old books', 'The daily news in brief'], answer: 1, explain: 'قسم المهن يصف طبيعة كل عمل وما يحتاجه من مؤهّلات وخبرات.', marks: 4 },
    { id: 'u7e-r3', skill: 'reading', type: 'mcq', q: 'حدّد صحة العبارة التالية حسب الدرس:', qEn: 'The writer decided to look for a new job because he had failed in his work for the bank.', options: ['True', 'False'], answer: 1, explain: 'عبارة خاطئة بنصّ نماذج الوزارة: قراره كان للتطوير والبحث عن الأفضل، لا بسبب فشل.', marks: 4 },
    { id: 'u7e-r4', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'The writer has learnt a lot about how important ___ is in an interview.', options: ['body language', 'salary', 'luck', 'silence'], answer: 0, explain: 'لغة الجسد body language — تعبئة فراغ من نماذج الوزارة نفسها.', marks: 4 },
    { id: 'u7e-r5', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'Where can you get information about evening and summer classes?', options: ['From the bank manager', 'From the librarian', 'From a travel agent', 'From the careers section only'], answer: 1, explain: 'من أمين المكتبة — حقيقة صريحة في نماذج أسئلة الدرس.', marks: 4 },
    { id: 'u7e-g1', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'I ___ my friend at the airport tomorrow. (arrangement)', options: ['am meeting', 'meets', 'met yesterday', 'will be meet'], answer: 0, explain: 'ترتيب مؤكد بموعد ومكان يأتي بالمضارع المستمر: am meeting.', marks: 4 },
    { id: 'u7e-g2', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'This time tomorrow, we ___ over the sea.', options: ['will be flying', 'flies yesterday', 'fly now', 'flying last week'], answer: 0, explain: '«في مثل هذا الوقت غدًا» علامة المستقبل المستمر: حدث جارٍ في لحظة مستقبلية.', marks: 4 },
    { id: 'u7e-g3', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: '“There is no milk in the fridge.” — “Don’t worry, I ___ some on my way home.”', options: ['will buy', 'buys yesterday', 'bought now', 'buying last night'], answer: 0, explain: 'قرار لحظي يتخذه المتكلم في لحظة الكلام يأتي بـ will — لا خطة سابقة ولا ترتيب مؤكد.', marks: 4 },
    { id: 'u7e-g4', skill: 'grammar', type: 'mcq', q: 'أعد الكتابة بالمستقبل في الماضي:', qEn: 'She is going to her computer course tomorrow. → I found out she ___ to her computer course.', options: ['was going', 'is going now', 'will go yesterday', 'goes'], answer: 0, explain: 'was going — صيغة نماذج الوزارة نفسها للمستقبل في الماضي.', marks: 4 },
    { id: 'u7e-g5', skill: 'grammar', type: 'tf', q: 'حدّد صحة العبارة النحوية التالية:', qEn: 'We use the present simple for future timetables and fixed schedules.', options: ['True', 'False'], answer: 0, explain: 'صحيح: مواعيد القطارات والدروس الثابتة تأتي بالمضارع البسيط (The train departs at six).', marks: 4 },
    { id: 'u7e-g6', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'Watch out! You ___ that glass.', options: ['are going to drop', 'drops yesterday', 'drop last night', 'dropped now'], answer: 0, explain: 'حدث وشيك مبني على دليل حاضر (الزجاج يهتز) يأتي بـ going to للتوقّع القريب.', marks: 4 },
    { id: 'u7e-v1', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'A ___ is a document that gives your education and work history when you apply for a job.', options: ['CV', 'shelf', 'magazine', 'section'], answer: 0, explain: 'السيرة الذاتية CV تلخّص تعليمك وخبراتك عند التقديم لأي عمل.', marks: 4 },
    { id: 'u7e-v2', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'The library has a wide ___ of books for people of all ages.', options: ['range', 'dose', 'bracelet', 'ticket'], answer: 0, explain: 'range تعني مجموعة واسعة متنوّعة — من عبارات الدرس المفتاحية.', marks: 4 },
    { id: 'u7e-v3', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'You can ___ up to three books from the library.', options: ['borrow', 'involve', 'recover', 'faint'], answer: 0, explain: 'borrow تعني يستعير — الفعل الأساسي لخدمة المكتبة.', marks: 4 },
    { id: 'u7e-v4', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'He would like a job which ___ a lot of travelling.', options: ['involves', 'improves a shelf', 'borrows', 'faints'], answer: 0, explain: 'involve تعني يتضمّن — والكاتب يريد عملًا يتضمّن السفر كما في الدرس.', marks: 4 },
  ],
};
