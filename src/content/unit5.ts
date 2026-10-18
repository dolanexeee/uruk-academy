/* Uruk Academy — Unit Five of «English for Iraq», 6th Preparatory.
   Reading: Lesson 10 «Why are holidays so important?» — facts verified
   against the Ministry of Education's published sample questions for
   this lesson. Grammar: the present perfect family (simple and
   continuous) — the وزاري grammar the Ministry's samples drill for
   this band of the book. All text our own writing. */

import type { Unit, VocabWord } from './types';

const vocab: VocabWord[] = [
  { id: 'u5-holiday', word: 'holiday', pos: 'اسم', meaning: 'عطلة — فترة راحة مخططة بعيدًا عن العمل', example: 'Holidays are vital for our health.', exampleAr: 'العطل حيوية لصحتنا.' },
  { id: 'u5-break', word: 'break', pos: 'اسم', meaning: 'استراحة — توقف قصير عن العمل', example: 'Our brain and body need a break.', exampleAr: 'دماغنا وجسدنا يحتاجان إلى استراحة.' },
  { id: 'u5-vital', word: 'vital', pos: 'صفة', meaning: 'حيوي — ضروري جدًا لا يمكن الاستغناء عنه', example: 'Regular holidays make us feel vital and alive.', exampleAr: 'العطل المنتظمة تجعلنا نشعر بالحيوية والنشاط.' },
  { id: 'u5-pressure', word: 'pressure', pos: 'اسم', meaning: 'ضغط — إجهاد الحياة والعمل المتراكم', example: 'The pressure of life can cause health problems.', exampleAr: 'ضغط الحياة يمكن أن يسبب مشكلات صحية.' },
  { id: 'u5-blood-pressure', word: 'blood pressure', pos: 'اسم', meaning: 'ضغط الدم — قوة دفع الدم في الأوعية', example: 'High blood pressure can cause strokes and heart attacks.', exampleAr: 'ضغط الدم المرتفع قد يسبب الجلطات والنوبات القلبية.' },
  { id: 'u5-heart-disease', word: 'heart disease', pos: 'اسم', meaning: 'مرض القلب', example: 'Stress and overwork can lead to heart disease.', exampleAr: 'التوتر والإفراط في العمل قد يؤديان إلى مرض القلب.' },
  { id: 'u5-stroke', word: 'stroke', pos: 'اسم', meaning: 'جلطة دماغية — توقف مفاجئ لتدفق الدم إلى الدماغ', example: 'High blood pressure increases the risk of a stroke.', exampleAr: 'ضغط الدم المرتفع يزيد خطر الجلطة الدماغية.' },
  { id: 'u5-brain', word: 'brain', pos: 'اسم', meaning: 'الدماغ — مركز التفكير في الجسم', example: 'Your brain needs a rest just like your body.', exampleAr: 'دماغك يحتاج إلى راحة تمامًا كجسدك.' },
  { id: 'u5-rest', word: 'rest', pos: 'اسم / فعل', meaning: 'راحة؛ يستريح ويتوقف عن الجهد', example: 'A holiday gives your body time to rest.', exampleAr: 'تمنح العطلة جسدك وقتًا للراحة.' },
  { id: 'u5-relax', word: 'relax', pos: 'فعل', meaning: 'يسترخي — يتخلص من التوتر', example: 'On holiday, people finally relax.', exampleAr: 'في العطلة، يسترخي الناس أخيرًا.' },
  { id: 'u5-opportunity', word: 'opportunity', pos: 'اسم', meaning: 'فرصة — مناسبة مواتية لفعل شيء', example: 'Holiday time is an opportunity to learn about the people close to us.', exampleAr: 'وقت العطلة فرصة للتعرّف إلى المقربين منا.' },
  { id: 'u5-close', word: 'close to us', pos: 'عبارة', meaning: 'المقربون منا — أهلنا وأصدقاؤنا الأقرب', example: 'Holidays bring us closer to the people close to us.', exampleAr: 'تقربنا العطل من الأشخاص المقربين منا.' },
  { id: 'u5-care', word: 'care', pos: 'فعل', meaning: 'يهتم ويُظهر الاهتمام بالآخرين', example: 'Our families feel we care when we spend time with them.', exampleAr: 'يشعر أهلنا باهتمامنا حين نقضي الوقت معهم.' },
  { id: 'u5-spend-time', word: 'spend time', pos: 'عبارة فعلية', meaning: 'يقضي الوقت مع شخص أو في نشاط', example: 'Spend time with your family on holiday.', exampleAr: 'اقضِ الوقت مع عائلتك في العطلة.' },
  { id: 'u5-workaholic', word: 'workaholic', pos: 'اسم', meaning: 'مدمن عمل — شخص يعمل بإفراط ولا يتوقف', example: 'Workaholics often skip their holidays.', exampleAr: 'مدمنو العمل يتخطون عطلهم غالبًا.' },
  { id: 'u5-addicted', word: 'addicted to', pos: 'صفة', meaning: 'مدمن على — لا يستطيع التوقف عن شيء', example: 'A workaholic is addicted to work.', exampleAr: 'مدمن العمل مدمن على العمل نفسه.' },
  { id: 'u5-skip', word: 'skip', pos: 'فعل', meaning: 'يتخطى — يتجاوز شيئًا دون فعله', example: 'Some people skip holidays because they think nobody else can do their work.', exampleAr: 'بعض الناس يتخطون العطل ظنًا أن لا أحد غيرهم يستطيع إنجاز عملهم.' },
  { id: 'u5-health', word: 'health problems', pos: 'عبارة', meaning: 'مشكلات صحية تصيب الجسم أو النفس', example: 'If we never take breaks, we will have health problems.', exampleAr: 'إن لم نأخذ استراحات أبدًا، فستصيبنا مشكلات صحية.' },
  { id: 'u5-late', word: 'too late', pos: 'عبارة', meaning: 'بعد فوات الأوان — حين لا ينفع الندم', example: 'Some people learn too late that work isn’t everything.', exampleAr: 'بعض الناس يتعلمون بعد فوات الأوان أن العمل ليس كل شيء.' },
  { id: 'u5-everything', word: 'everything', pos: 'ضمير', meaning: 'كل شيء — والدرس يذكّر أن العمل ليس «كل شيء»', example: 'Work is important, but it isn’t everything.', exampleAr: 'العمل مهم، لكنه ليس كل شيء.' },
];

export const unit5: Unit = {
  id: 'en6-u5',
  number: 5,
  titleAr: 'الوحدة الخامسة',
  titleEn: 'Why are holidays so important?',
  theme: 'لماذا العطل مهمة إلى هذا الحد؟ — الصحة والضغط ومدمنو العمل، والمضارع التام بنوعيه.',
  status: 'live',
  kind: 'content',
  vocab,
  examMinutes: 20,
  lessons: [
    {
      id: 'u5-l1',
      title: 'القراءة — لماذا العطل مهمة؟',
      kind: 'reading',
      minutes: 15,
      intro: 'درس القراءة في الوحدة الخامسة (الدرس العاشر من الكتاب) سؤالٌ في عنوانه: «لماذا العطل مهمة إلى هذا الحد؟» وتطرح نماذج الوزارة سؤال العنوان نفسه — لكن إجابة الكتاب الحرفية عنه غير منشورة في النماذج الموثّقة، فلا نخترعها. ما نبني عليه درسنا هو النقاط الموثّقة في تلك النماذج وتدريبات كتاب النشاط: الصحة وضغط الحياة، والحيوية، والوقت مع المقربين، وصورة مدمن العمل.',
      sections: [
        {
          type: 'explain',
          title: 'قبل أن تقرأ',
          paragraphs: [
            'يخاطب الدرس وهمًا شائعًا: أن العمل المتواصل بلا توقف علامة جدّية ونجاح. يفكك النص هذا الوهم بثلاث حجج: ما يفعله الضغط المستمر بأجسادنا، وما تفعله الراحة بأدمغتنا، وما تفعله العطلة بعلاقاتنا بمن نحب.',
          ],
        },
        {
          type: 'reading',
          title: 'الدرس بملخّصنا',
          paragraphs: [
            'الحجة الأولى طبية: إذا لم يأخذ الناس استراحات أو عطلًا أبدًا، فسيواجهون مشكلات صحية مؤكدة — فضغط الحياة المستمر يولّد أمراضًا، وضغط الدم المرتفع تحديدًا يمكن أن يسبب الجلطات الدماغية والنوبات القلبية. الجسد آلة تحتاج صيانة، والعطلة جزء من صيانتها لا رفاهية زائدة.',
            'والحجة الثانية حيوية: العطل المنتظمة تجعل الإنسان يشعر بالحيوية (vital) — فالدماغ والجسد معًا يحتاجان إلى استراحة لاستعادة النشاط. من يرتاح يعود إلى عمله أصفى ذهنًا وأقوى جسدًا من الذي لم يتوقف أبدًا.',
            'والحجة الثالثة اجتماعية: وقت العطلة فرصة لنتعرف من جديد إلى المقربين منا — فحين نقضي الوقت مع عائلاتنا وأصدقائنا، يشعرون أننا نهتم بهم فعلًا، لا بالقول بل بالحضور. العلاقات أيضًا تحتاج «وقتًا» كما يحتاج الجسد «راحة».',
            'ويختم الدرس بصورة تحذيرية: مدمنو العمل (workaholics) — أولئك المدمنون على العمل حدّ تخطّي عطلهم، وكثير منهم يظنون أن لا أحد غيرهم يستطيع إنجاز عملهم، فيؤجلون الراحة عامًا بعد عام… حتى يتعلموا بعد فوات الأوان أن العمل ليس كل شيء في الحياة.',
          ],
          examples: [
            { en: 'If people don’t take breaks and holidays, they will have health problems.', ar: 'إن لم يأخذ الناس استراحات وعطلًا، فستصيبهم مشكلات صحية — جملة الدرس التحذيرية الأولى.' },
            { en: 'High blood pressure can cause strokes and heart attacks.', ar: 'ضغط الدم المرتفع قد يسبب الجلطات والنوبات القلبية.' },
            { en: 'Holiday time is an opportunity to learn about the people close to us.', ar: 'وقت العطلة فرصة للتعرّف إلى المقربين منا.' },
            { en: 'A workaholic is a person who is addicted to work.', ar: 'مدمن العمل شخص مدمن على العمل.' },
          ],
        },
        {
          type: 'explain',
          title: 'حقائق يحبّها الامتحان الوزاري',
          paragraphs: ['المواضع التي سألت عنها نماذج الوزارة في هذا الدرس:'],
          bullets: [
            'بلا استراحات أو عطل: مشكلات صحية سببها ضغط الحياة.',
            'ضغط الدم المرتفع قد يسبب الجلطات (strokes) والنوبات القلبية (heart attacks) — ثنائية كتاب النشاط الطبية.',
            'العطل المنتظمة تجعلنا نشعر بالحيوية — فالدماغ والجسد يحتاجان استراحة.',
            'وقت العطلة فرصة للتعرّف إلى المقربين منا.',
            'أهلنا وأصدقاؤنا يشعرون باهتمامنا حين نقضي الوقت معهم.',
            'مدمن العمل (workaholic) يتخطى عطلته ظنًا أن لا أحد يستطيع عمله غيره، ويتعلم متأخرًا أن العمل ليس كل شيء.',
          ],
        },
      ],
    },
    {
      id: 'u5-l2',
      title: 'القواعد — المضارع التام بنوعيه',
      kind: 'grammar',
      minutes: 20,
      intro: 'قواعد هذه الوحدة من أكثر ما تدرّبه نماذج الوزارة: المضارع التام البسيط والمستمر، مع كلماته المفتاحية (just / already / yet) وثنائية been و gone والفرق الدقيق بينهما. ويختبر كتاب النشاط لهذه الوحدة نظامين إضافيين — الماضي التام والجمل الموصولة — ولهما القسم الثالث في نهاية الدرس.',
      sections: [
        {
          type: 'grammar',
          title: 'أولًا: المضارع التام البسيط والمستمر',
          table: {
            head: ['الزمن', 'التكوين', 'يُستخدم لـ', 'مثال'],
            rows: [
              ['المضارع التام البسيط', 'have/has + التصريف الثالث', 'نتيجة حاضرة / تجربة / إنجاز', 'I haven’t been to China yet, but I would like to one day.'],
              ['المضارع التام المستمر', 'have/has been + فعل-ing', 'نشاط بدأ في الماضي وما زال مستمرًا', 'Layla has been cooking for three hours now.'],
            ],
            ltrCols: [3],
          },
          bullets: [
            'منذ/لمدة: since لنقطة البداية (since Tuesday / since two o’clock)، و for للمدة (for three hours) — وصيغة الوزارة المفضلة: «بدأت الثلاثاء» ← كتبتها بالمستمر مع since.',
            'just للنتيجة القريبة جدًا، already لما تمّ قبل المتوقع، yet في النفي والسؤال لما لم يتم بعد — ثلاثتها مع التام البسيط.',
            'been أم gone؟ من ذهب وعاد (أو يُحكى عن زيارته) = has been to؛ ومن ذهب ولم يعد بعد (ما زال هناك/في الطريق) = has gone to: The Al-Badri family aren’t here — they have gone on holiday.',
          ],
          examples: [
            { en: 'You look hot. Have you been working in the garden?', ar: 'تبدو متعبًا من الحر — أكنت تعمل في الحديقة؟ (تام مستمر لأثر ظاهر الآن) — من نماذج الوزارة.' },
            { en: 'I’m writing a poem. I started on Tuesday. → I have been writing a poem since Tuesday.', ar: 'تحويل وزاري كلاسيكي: البداية في الماضي والنشاط مستمر.' },
            { en: '“Does Samir know?” — “I’m sorry, I haven’t told him yet.”', ar: 'yet في النفي مع التام — إكمال إجابة بنمط الوزارة.' },
          ],
        },
        {
          type: 'grammar',
          title: 'ثانيًا: التام أم الماضي البسيط؟',
          bullets: [
            'وقت ماضٍ محدد ومنتهٍ (yesterday, last week, in 2010) ← ماضٍ بسيط حتمًا.',
            'لا وقت محدد، أو أثر/نتيجة في الحاضر ← مضارع تام.',
            'مع المستمر اسأل: هل أهتم بالنشاط الجاري (مدة و- ing) أم بالنتيجة المنجزة (التصريف الثالث)؟',
          ],
          callout: 'خدعة الامتحان المفضلة: جملة فيها yesterday مع خيار has gone — خطأ دائمًا؛ الظرف المنتهي يفرض الماضي البسيط.',
        },
        {
          type: 'grammar',
          title: 'ثالثًا: الماضي التام والجمل الموصولة — نظاما كتاب النشاط لهذه الوحدة',
          paragraphs: [
            'يختبر كتاب النشاط في تدريبات هذه الوحدة نظامين إضافيين يقفان إلى جانب المضارع التام. أولهما الماضي التام (Past Perfect): had + التصريف الثالث، ويُستخدم لحدث وقع قبل حدث ماضٍ آخر — فإذا اجتمع ماضيان في قصة واحدة، فالأسبق منهما ماضٍ تام واللاحق ماضٍ بسيط، وكلماته المفتاحية: before و after و by the time.',
            'وثانيهما الجمل الموصولة (Relative Clauses) التي تصف اسمًا قبلها: who للأشخاص، وwhich للأشياء، وthat لهما معًا في الجمل «المحدِّدة» التي لا غنى عنها في تحديد المقصود. أما الجملة «غير المحدِّدة» فتضيف معلومة جانبية عن اسم معروف سلفًا، وتُحصر بين فواصل، ولا يجوز فيها that ولا حذف الموصول.',
          ],
          table: {
            head: ['البنية', 'التكوين', 'مثال'],
            rows: [
              ['الماضي التام', 'had + التصريف الثالث', 'When we arrived, the film had already started.'],
              ['موصولة محدِّدة — شخص', 'who / that تصل الاسم بوصفه', 'A workaholic is a person who works too much.'],
              ['موصولة محدِّدة — شيء', 'which / that تصل الاسم بوصفه', 'The break that you take at noon refreshes you.'],
              ['موصولة غير محدِّدة', 'اسم معروف، ثم وصف جانبي بين فاصلتين', 'The hotel, which stood by the sea, was quiet.'],
            ],
            ltrCols: [2],
          },
          examples: [
            { en: 'She had never taken a real holiday before that summer.', ar: 'لم تكن قد أخذت عطلة حقيقية قط قبل ذلك الصيف — ماضٍ تام لحدث أسبق من ماضٍ آخر.' },
            { en: 'People who never rest damage their health.', ar: 'الناس الذين لا يرتاحون أبدًا يدمّرون صحتهم — موصولة محدِّدة بـ who.' },
          ],
          callout: 'فرق يطلبه الاختبار: في الجملة المحدِّدة يجوز حذف الموصول إذا كان مفعولًا (The book (that) I read was useful)، أما في غير المحدِّدة — بين الفواصل — فلا حذف ولا that أبدًا.',
        },
      ],
    },
    {
      id: 'u5-l3',
      title: 'مفردات الوحدة — الصحة والعطل والعمل',
      kind: 'vocab',
      minutes: 10,
      intro: 'مفردات تجمع بين عيادة الطبيب ومكتب العمل: ضغط الدم والجلطات من جهة، ومدمن العمل وتخطّي العطلة من جهة أخرى — وهي كلمات بطاقات مراجعة الوحدة.',
      sections: [
        {
          type: 'vocab',
          title: 'كلمات الوحدة الخامسة',
          paragraphs: ['احفظ أولًا التعريف الوزاري الأشهر في هذه الوحدة: workaholic = شخص مدمن على العمل.'],
          vocabIds: [
            'u5-holiday', 'u5-break', 'u5-vital', 'u5-pressure', 'u5-blood-pressure',
            'u5-heart-disease', 'u5-stroke', 'u5-brain', 'u5-rest', 'u5-relax',
            'u5-opportunity', 'u5-close', 'u5-care', 'u5-spend-time', 'u5-workaholic',
            'u5-addicted', 'u5-skip', 'u5-health', 'u5-late', 'u5-everything',
          ],
        },
      ],
    },
    {
      id: 'u5-l4',
      title: 'شرح — إنشاء «عطلة رائعة»، وخلاصة الوحدة',
      kind: 'explain',
      minutes: 10,
      intro: 'إنشاء هذه الوحدة من أكثر الإنشاءات تكرارًا في الأوراق الوزارية بحسب مراجعات المدرّسين المركّزة: «اكتب عن عطلة رائعة قضيتها». هنا هيكله الجاهز للتوظيف.',
      sections: [
        {
          type: 'explain',
          title: 'هيكل إنشاء العطلة الرائعة',
          bullets: [
            'افتتح بالمكان والزمان والرفقة: أين ذهبت؟ متى؟ ومع من؟',
            'رتّب الأيام والأحداث بالماضي البسيط وأدوات التسلسل (first, then, after that, finally).',
            'صف شعورك قبل الرحلة وبعدها — وقارن: التعب والضغط قبل، والحيوية والراحة بعد (هذه لغة الدرس نفسه!).',
            'اختم بجملة الدرس الذهبية بمعناها: أدركت أن العطل ليست ترفًا بل ضرورة.',
          ],
          examples: [
            { en: 'Before the holiday, I had been working for months without a break.', ar: 'تام مستمر في الإنشاء — درجة إضافية بعرض مهارة الوحدة.' },
            { en: 'That holiday taught me that rest is as important as work.', ar: 'خاتمة تلخّص رسالة الدرس كاملة في سطر.' },
          ],
          callout: 'الإنشاءات المتكررة وزاريًا تُحفظ هياكلها لا نصوصها: الهيكل ثابت، والتفاصيل (المكان والرفقة) تُبدَّل بحسب السؤال.',
        },
        {
          type: 'explain',
          title: 'خلاصة الوحدة الخامسة',
          paragraphs: [
            'ركائز الوحدة: درس العطل بنقاطه الموثّقة (صحة، حيوية، علاقات) وصورة مدمن العمل التحذيرية، والمضارع التام بسيطًا ومستمرًا مع been/gone و just/already/yet، ونظاما كتاب النشاط المرفقان: الماضي التام والجمل الموصولة، ومفردات الصحة والعمل العشرون.',
          ],
          bullets: [
            'اختبر نفسك في «اختبار الوحدة» مع شرح لكل إجابة.',
            'ثبّت الكلمات في «بطاقات المراجعة».',
            'ثم واجه «الامتحان الوزاري» للوحدة: ٦٠ درجة في ٢٠ دقيقة.',
          ],
        },
      ],
    },
  ],
  quiz: [
    { id: 'u5q-r1', skill: 'reading', type: 'mcq', q: 'حسب درس «Why are holidays so important?»، ماذا يحدث إن لم يأخذ الناس استراحات أو عطلًا أبدًا؟', options: ['يصبحون أغنى', 'يواجهون مشكلات صحية بسبب ضغط الحياة', 'يتعلمون لغات أسرع', 'لا شيء يتغير'], answer: 1, explain: 'ضغط الحياة المستمر بلا راحة يولّد المشكلات الصحية — حجة الدرس الأولى.', marks: 1 },
    { id: 'u5q-r2', skill: 'reading', type: 'mcq', q: 'ضغط الدم المرتفع يمكن أن يسبب…', options: ['تساقط الشعر', 'الجلطات والنوبات القلبية', 'حساسية الربيع', 'ضعف النظر فقط'], answer: 1, explain: 'strokes و heart attacks — الثنائية الطبية كما ترد في كتاب النشاط ويسأل عنها النموذج الوزاري.', marks: 1 },
    { id: 'u5q-r3', skill: 'reading', type: 'mcq', q: 'ما تعريف مدمن العمل (workaholic) في الدرس؟', options: ['شخص يحب العطل الطويلة', 'شخص مدمن على العمل يعمل بإفراط', 'شخص يعمل بدوام جزئي', 'شخص يبحث عن عمل جديد'], answer: 1, explain: 'workaholic = شخص addicted to work — يعمل بإفراط ويتخطى عطله.', marks: 1 },
    { id: 'u5q-r4', skill: 'reading', type: 'tf', q: 'وقت العطلة فرصة للتعرّف إلى الأشخاص المقربين منا.', options: ['صح', 'خطأ'], answer: 0, explain: 'صحيح — الحجة الاجتماعية للدرس: العطلة تعيد وصلنا بأهلنا وأصدقائنا.', marks: 1 },
    { id: 'u5q-r5', skill: 'reading', type: 'mcq', q: 'لماذا يتخطى بعض الناس عطلهم حسب الدرس؟', options: ['لأن العطل ممنوعة قانونًا', 'لأنهم يظنون أن لا أحد غيرهم يستطيع إنجاز عملهم', 'لأنهم يكرهون السفر', 'لأن الطقس سيئ دائمًا'], answer: 1, explain: 'وهم «لا أحد غيري يستطيع» — ويتعلم أصحابه متأخرين أن العمل ليس كل شيء.', marks: 1 },
    { id: 'u5q-g1', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة لإكمال الجملة:', qEn: 'You look hot. ___ in the garden?', options: ['Have you been working', 'You have been working by now?', 'Did you worked', 'Are you work yesterday'], answer: 0, explain: 'أثر حاضر (الحر والتعب) لنشاط مستمر: مضارع تام مستمر — جملة من نماذج الوزارة.', marks: 1 },
    { id: 'u5q-g2', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة لإكمال الجملة:', qEn: 'Layla’s in the kitchen; she ___ for three hours now.', options: ['has been cooking', 'cooks yesterday', 'cooked tomorrow', 'is cook since'], answer: 0, explain: 'بدأت قبل ثلاث ساعات وما زالت: has been cooking — من نماذج الوزارة أيضًا.', marks: 1 },
    { id: 'u5q-g3', skill: 'grammar', type: 'mcq', q: 'اختر الكلمة الصحيحة لإكمال الجملة:', qEn: 'The Al-Badri family isn’t here at the moment. They have ___ on holiday.', options: ['gone', 'been and returned', 'went yesterday-home', 'going to back'], answer: 0, explain: 'ذهبوا ولم يعودوا بعد (ليسوا هنا): has/have gone — أما been فتعني ذهب وعاد. (من نماذج الوزارة)', marks: 1 },
    { id: 'u5q-g4', skill: 'grammar', type: 'mcq', q: 'حوّل الجملة إلى المضارع التام المستمر:', qEn: 'She’s writing letters. She started at two o’clock.', options: ['She has been writing letters since two o’clock.', 'She writes letters yesterday at two.', 'She has wrote letters tomorrow.', 'She is write letters since two.'], answer: 0, explain: 'نقطة بداية محددة في الماضي ونشاط مستمر: has been writing + since — تحويل وزاري كلاسيكي.', marks: 1 },
    { id: 'u5q-g5', skill: 'grammar', type: 'tf', q: 'نستخدم for مع نقطة بداية محددة (for Tuesday) ونستخدم since مع المدة (since three hours).', options: ['صح', 'خطأ'], answer: 1, explain: 'خطأ — العكس تمامًا: since للنقطة (since Tuesday) و for للمدة (for three hours).', marks: 1 },
    { id: 'u5q-v1', skill: 'vocab', type: 'mcq', q: 'ما معنى كلمة vital في الدرس؟', options: ['مكلف', 'حيوي وضروري جدًا', 'نادر الحدوث', 'مؤقت'], answer: 1, explain: 'vital ضروري للحياة: العطل المنتظمة تجعلنا نشعر بالحيوية والنشاط.', marks: 1 },
    { id: 'u5q-v2', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة لإكمال الجملة:', qEn: 'High blood pressure can cause ___ and heart attacks.', options: ['strokes', 'holidays', 'opportunities', 'breaks only'], answer: 0, explain: 'strokes الجلطات الدماغية — الشريك الأول للنوبات القلبية في جملة كتاب النشاط الطبية.', marks: 1 },
    { id: 'u5q-v3', skill: 'vocab', type: 'tf', q: 'فعل skip في الدرس يعني «يتخطى» — كأن يتخطى المرء عطلته.', options: ['صح', 'خطأ'], answer: 0, explain: 'صحيح — مدمنو العمل skip their holidays عامًا بعد عام.', marks: 1 },
    { id: 'u5q-v4', skill: 'vocab', type: 'mcq', q: 'ما الترجمة الإنجليزية الصحيحة لعبارة «فرصة»؟', options: ['opportunity', 'pressure', 'stroke', 'brain'], answer: 0, explain: 'opportunity — ووقت العطلة في الدرس فرصة للتعرّف إلى المقربين.', marks: 1 },
  ],
  exam: [
    { id: 'u5e-r1', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'What will happen if people don’t take breaks and holidays?', options: ['They will become richer', 'They will have health problems because of the pressure of life', 'They will learn faster', 'Nothing will change'], answer: 1, explain: 'ضغط الحياة بلا راحة = مشكلات صحية — أول أسئلة نماذج الوزارة عن الدرس.', marks: 4 },
    { id: 'u5e-r2', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'What can high blood pressure cause?', options: ['Better sleep', 'Strokes and heart attacks', 'Stronger memory', 'Faster work'], answer: 1, explain: 'الجلطات الدماغية والنوبات القلبية — الثنائية الطبية للدرس كما في كتاب النشاط.', marks: 4 },
    { id: 'u5e-r3', skill: 'reading', type: 'mcq', q: 'أكمل الجملة مستخدمًا معلومات الدرس:', qEn: 'Holiday time is an opportunity to learn about ___.', options: ['the people close to us', 'foreign stock markets', 'car engines', 'exam tricks'], answer: 0, explain: 'المقربون منا — حجة الدرس الاجتماعية في جملة واحدة.', marks: 4 },
    { id: 'u5e-r4', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'Who are workaholics?', options: ['People who love long holidays', 'People who are addicted to work', 'People looking for their first job', 'People who work one hour a week'], answer: 1, explain: 'مدمنو العمل: addicted to work — تعريف الدرس الحرفي.', marks: 4 },
    { id: 'u5e-r5', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'Why do our families and friends feel we care about them on holiday?', options: ['Because we buy them expensive gifts', 'Because we spend time with them', 'Because we phone them once a year', 'Because we work harder'], answer: 1, explain: 'الحضور وقضاء الوقت — لا الهدايا — ما يُشعرهم باهتمامنا.', marks: 4 },
    { id: 'u5e-g1', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'I ___ to China yet, but I would like to one day.', options: ['haven’t been', 'didn’t yesterday go', 'not went', 'hasn’t being'], answer: 0, explain: 'تجربة لم تحدث حتى الآن مع yet: haven’t been — من نماذج الوزارة.', marks: 4 },
    { id: 'u5e-g2', skill: 'grammar', type: 'mcq', q: 'حوّل إلى المضارع التام المستمر:', qEn: 'I’m writing a poem. I started on Tuesday.', options: ['I have been writing a poem since Tuesday.', 'I write a poem on Tuesdays only.', 'I wrote a poem since Tuesday ago.', 'I am write poem since Tuesday.'], answer: 0, explain: 'since + نقطة البداية مع نشاط مستمر — تحويل وزاري أصيل.', marks: 4 },
    { id: 'u5e-g3', skill: 'grammar', type: 'mcq', q: 'اختر الإكمال الصحيح:', qEn: '“Do you know about the meeting?” — “I’m sorry, I ___ anybody yet.”', options: ['haven’t told', 'didn’t told yesterday', 'not tell last week', 'tells nobody'], answer: 0, explain: 'إجابة قصيرة بـ yet في النفي والمضارع التام — نمط نماذج الوزارة حرفيًا.', marks: 4 },
    { id: 'u5e-g4', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'She ___ letters since two o’clock.', options: ['has been writing', 'writes yesterday', 'is write at two', 'wrote since two'], answer: 0, explain: 'since تفرض تامًا مستمرًا لنشاط جارٍ: has been writing.', marks: 4 },
    { id: 'u5e-g5', skill: 'grammar', type: 'tf', q: 'حدّد صحة العبارة النحوية التالية:', qEn: 'We use “has gone to” for a person who went and has not come back yet.', options: ['True', 'False'], answer: 0, explain: 'صحيحة — gone لمن لم يعد، been لمن ذهب وعاد.', marks: 4 },
    { id: 'u5e-g6', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'He ___ in this company for ten years. (still works here)', options: ['has been working', 'worked yesterday only', 'works tomorrow', 'is work since ten'], answer: 0, explain: 'مدة ممتدة إلى الحاضر ونشاط مستمر: has been working + for.', marks: 4 },
    { id: 'u5e-v1', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'The ___ of modern life can make people ill if they never rest.', options: ['pressure', 'opportunity', 'brain holiday', 'stroke-book'], answer: 0, explain: 'pressure ضغط الحياة — محرك مشكلات الدرس الصحية.', marks: 4 },
    { id: 'u5e-v2', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'Your ___ and your body both need a break.', options: ['brain', 'stroke', 'pressure cooker', 'salary'], answer: 0, explain: 'brain الدماغ — جملة الدرس: الدماغ والجسد يحتاجان استراحة.', marks: 4 },
    { id: 'u5e-v3', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'Some people ___ their holidays because they think nobody else can do their work.', options: ['skip', 'relax', 'care', 'rest fully'], answer: 0, explain: 'skip يتخطون عطلهم — خطأ مدمني العمل المتكرر.', marks: 4 },
    { id: 'u5e-v4', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'Some people learn too ___ that work isn’t everything.', options: ['late', 'vital', 'close', 'simultaneous'], answer: 0, explain: 'too late — بعد فوات الأوان، خاتمة الدرس التحذيرية.', marks: 4 },
  ],
};
