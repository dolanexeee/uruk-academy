/* Uruk Academy — Unit Two of «English for Iraq», 6th Preparatory.
   Reading: Lesson 10 «Security Technology» — radar speed guns; facts
   verified against the Ministry of Education's published sample
   questions for this lesson (14 official questions). Grammar: obligation
   & functions (must/have to, should for advice and expectation, shall for
   offers) + the causative (have/get/make) — the cluster taught and
   examined in this unit per Iraqi teacher guides and unit exams.
   All text is our own writing. */

import type { Unit, VocabWord } from './types';

const vocab: VocabWord[] = [
  { id: 'u2-radar', word: 'radar', pos: 'اسم', meaning: 'الرادار — نظام يكشف الأجسام البعيدة وسرعتها بموجات لاسلكية', example: 'Radar was first developed to detect enemy aircraft.', exampleAr: 'طُوّر الرادار أول مرة لكشف طائرات العدو.' },
  { id: 'u2-speed-gun', word: 'speed gun', pos: 'اسم', meaning: 'مسدّس قياس السرعة — جهاز الشرطة لقياس سرعة السيارات', example: 'The police officer pointed the speed gun at the car.', exampleAr: 'وجّه الشرطي مسدّس السرعة نحو السيارة.' },
  { id: 'u2-detector', word: 'radar detector', pos: 'اسم', meaning: 'كاشف الرادار — جهاز ينبّه السائق إلى وجود رادار شرطة قريب', example: 'A radar detector warns the driver when a speed gun is near.', exampleAr: 'ينبّه كاشف الرادار السائق عندما يكون مسدّس سرعة قريبًا.' },
  { id: 'u2-wave', word: 'wave', pos: 'اسم', meaning: 'موجة — اهتزاز ينتقل في الهواء (موجات الرادار)', example: 'The gun sends out waves that hit the car.', exampleAr: 'يرسل الجهاز موجات تصطدم بالسيارة.' },
  { id: 'u2-bounce-back', word: 'bounce back', pos: 'فعل مركّب', meaning: 'يرتدّ عائدًا — تعود الموجات بعد اصطدامها بالسيارة', example: 'When the waves hit the car, they bounce back to the gun.', exampleAr: 'عندما تصطدم الموجات بالسيارة، ترتدّ عائدة إلى الجهاز.' },
  { id: 'u2-ticket', word: 'ticket', pos: 'اسم', meaning: 'مخالفة مرورية؛ غرامة السرعة', example: 'If you drive too fast, you may get a ticket.', exampleAr: 'إذا قدت بسرعة زائدة، فقد تحصل على مخالفة.' },
  { id: 'u2-speeding', word: 'speeding', pos: 'اسم', meaning: 'تجاوز السرعة القانونية أثناء القيادة', example: 'Speeding is one of the main causes of road accidents.', exampleAr: 'تجاوز السرعة من أهم أسباب حوادث الطرق.' },
  { id: 'u2-maintain', word: 'maintain', pos: 'فعل', meaning: 'يصون؛ يحافظ على شيء بحالة جيدة', example: 'Speed guns must be maintained and checked regularly.', exampleAr: 'يجب صيانة مسدّسات السرعة وفحصها بانتظام.' },
  { id: 'u2-accurate', word: 'accurate', pos: 'صفة', meaning: 'دقيق؛ صحيح القياس', example: 'A well-maintained gun gives accurate readings.', exampleAr: 'الجهاز المصان جيدًا يعطي قراءات دقيقة.' },
  { id: 'u2-device', word: 'device', pos: 'اسم', meaning: 'جهاز؛ أداة إلكترونية', example: 'A radar detector is a small electronic device.', exampleAr: 'كاشف الرادار جهاز إلكتروني صغير.' },
  { id: 'u2-signal', word: 'signal', pos: 'اسم', meaning: 'إشارة', example: 'The detector picks up the signal of the police radar.', exampleAr: 'يلتقط الكاشف إشارة رادار الشرطة.' },
  { id: 'u2-limit', word: 'speed limit', pos: 'اسم', meaning: 'حدّ السرعة القانوني في الطريق', example: 'Drivers must keep to the speed limit in towns.', exampleAr: 'يجب على السائقين الالتزام بحدّ السرعة داخل المدن.' },
  { id: 'u2-record', word: 'record', pos: 'فعل', meaning: 'يسجّل — يحفظ الجهاز سرعة السيارة فورًا', example: 'The gun records the speed of the car at once.', exampleAr: 'يسجّل الجهاز سرعة السيارة فورًا.' },
  { id: 'u2-warn', word: 'warn', pos: 'فعل', meaning: 'ينبّه؛ يحذّر', example: 'The detector warns drivers to slow down.', exampleAr: 'ينبّه الكاشف السائقين ليبطئوا السرعة.' },
  { id: 'u2-avoid', word: 'avoid', pos: 'فعل', meaning: 'يتجنّب؛ يتفادى', example: 'You cannot avoid a ticket by speeding away.', exampleAr: 'لا يمكنك تفادي المخالفة بالهروب مسرعًا.' },
  { id: 'u2-measure', word: 'measure', pos: 'فعل', meaning: 'يقيس', example: 'The speed gun measures how fast a car is moving.', exampleAr: 'يقيس مسدّس السرعة مدى سرعة السيارة.' },
  { id: 'u2-licence', word: 'driving licence', pos: 'اسم', meaning: 'إجازة السوق — رخصة القيادة الرسمية', example: 'You must have a driving licence to drive a car.', exampleAr: 'يجب أن تحمل إجازة سوق لقيادة السيارة.' },
  { id: 'u2-seat-belt', word: 'seat belt', pos: 'اسم', meaning: 'حزام الأمان في السيارة', example: 'When you get in a car, you must put on your seat belt.', exampleAr: 'عندما تركب السيارة، يجب أن تضع حزام الأمان.' },
  { id: 'u2-traffic', word: 'traffic', pos: 'اسم', meaning: 'حركة المرور والسير', example: 'Traffic police work to keep the roads safe.', exampleAr: 'تعمل شرطة المرور على الحفاظ على سلامة الطرق.' },
  { id: 'u2-check', word: 'check', pos: 'فعل', meaning: 'يفحص؛ يتحقق من سلامة شيء ودقّته', example: 'Police officers check their speed guns before using them.', exampleAr: 'يفحص رجال الشرطة مسدّسات السرعة قبل استخدامها.' },
];

export const unit2: Unit = {
  id: 'en6-u2',
  number: 2,
  titleAr: 'الوحدة الثانية',
  titleEn: 'Security Technology',
  theme: 'تكنولوجيا الأمن — كيف تقيس الشرطة سرعة السيارات بالرادار، وأفعال الوجوب والنصح والتوقّع والسببية.',
  status: 'live',
  kind: 'content',
  vocab,
  examMinutes: 20,
  lessons: [
    {
      id: 'u2-l1',
      title: 'القراءة — تكنولوجيا الأمن: مسدّس الرادار',
      kind: 'reading',
      minutes: 15,
      intro: 'درس القراءة في الوحدة الثانية (الدرس العاشر من الكتاب) عنوانه «Security Technology»، وبطله جهاز صغير غيّر عمل شرطة المرور: مسدّس الرادار لقياس السرعة. أربعة عشر سؤالًا في نماذج الوزارة تدور حول هذا الدرس، ونبني قراءتنا على حقائقه.',
      sections: [
        {
          type: 'explain',
          title: 'قبل أن تقرأ',
          paragraphs: [
            'الرادار لم يُخترع أصلًا للمرور: طُوّر في ثلاثينيات القرن العشرين، مع اقتراب الحرب العالمية الثانية، لرصد طائرات العدو من بعيد قبل وصولها. بعد الحرب وجدت التقنية طريقها إلى الشرطة، فوُلد «مسدّس السرعة» الذي يقيس سرعة سيارة متحركة من مكان ثابت على جانب الطريق. تذكّر هذا الأصل العسكري، فهو أول أسئلة الوزارة عن الدرس.',
          ],
        },
        {
          type: 'reading',
          title: 'الدرس بملخّصنا',
          paragraphs: [
            'تستخدم الشرطة مسدّسات الرادار لضبط سرعة السيارات على الطرق: فالسرعة الزائدة من أخطر أسباب الحوادث، والجهاز يعطي الشرطي قراءة فورية دقيقة لسرعة كل سيارة تمرّ أمامه، فيردع المخالفين ويحمي بقية السائقين.',
            'كيف يعمل الجهاز؟ يرسل موجات رادار نحو السيارة القادمة، فتصطدم الموجات بها وترتدّ عائدة إلى الجهاز. ومن الفرق بين الموجة المُرسلة والمرتدّة يحسب الجهاز سرعة السيارة في لحظة واحدة ويعرضها على شاشته — ولهذا لا تنفع الحيلة القديمة: لا يستطيع السائق تفادي المخالفة بأن يسرع هاربًا، لأن الجهاز يكون قد سجّل سرعته أصلًا في اللحظة نفسها.',
            'وبعض السائقين يضعون في سياراتهم «كاشف رادار»: جهاز صغير يلتقط إشارات رادار الشرطة القريب وينبّه السائق، فيبطئ سرعته قبل أن يصل إلى نقطة التفتيش.',
            'ولأن قراءات الجهاز تُبنى عليها غرامات، يشدد الدرس على تجنّب الأخطاء: تقلّ الأخطاء إذا كان الشرطي مدرّبًا جيدًا على الاستخدام، وإذا فُحص الجهاز بانتظام. وبالمقابل تُصان مسدّسات الرادار بإبقائها نظيفة وفحصها ومعايرتها دوريًا لتظلّ قراءاتها دقيقة — فالجهاز المهمل يعطي أرقامًا قد تظلم سائقًا أو تبرّئ مخالفًا.',
            'ولا يضطر الشرطي دائمًا إلى إيقاف السائق في مكانه: فحين يسجّل الجهاز السرعة (وقد يوثّق اللوحة)، يمكن أن تصل المخالفة إلى السائق لاحقًا. وبعد كل هذا التطوّر، ما تزال مسدّسات الرادار من أكثر وسائل ضبط السرعة انتشارًا في العالم.',
          ],
          examples: [
            { en: 'When the waves of the radar speed gun hit the car, they bounce back.', ar: 'حين تصطدم موجات مسدّس الرادار بالسيارة، ترتدّ عائدة — مبدأ عمل الجهاز.' },
            { en: 'A driver can’t avoid a ticket by speeding away.', ar: 'لا يستطيع سائق تفادي المخالفة بالهروب مسرعًا.' },
            { en: 'A radar detector is a device that detects police radar signals.', ar: 'كاشف الرادار جهاز يكشف إشارات رادار الشرطة.' },
            { en: 'Radar speed guns are still one of the most common ways to catch speeding drivers.', ar: 'ما تزال مسدّسات الرادار من أكثر وسائل ضبط السائقين المسرعين شيوعًا.' },
          ],
        },
        {
          type: 'explain',
          title: 'حقائق يحبّها الامتحان الوزاري',
          paragraphs: ['أربعة عشر موضع سؤال رسميًا عن هذا الدرس. تأكد أنك تستطيع الإجابة عن كل نقطة:'],
          bullets: [
            'اخترع الرادار قبل الحرب العالمية الثانية لرصد طائرات العدو.',
            'تستخدم الشرطة مسدّس الرادار لقياس سرعة السيارات وضبط المخالفين.',
            'يعمل الجهاز بموجات تصطدم بالسيارة وترتدّ إليه، فيحسب السرعة فورًا.',
            'لا يمكن تفادي المخالفة بالهروب مسرعًا، لأن الجهاز سجّل السرعة أصلًا.',
            'كاشف الرادار جهاز ينبّه السائق إلى رادار شرطة قريب، فيبطئ سرعته.',
            'تقلّ أخطاء القياس بحسن تدريب الشرطي وفحص الجهاز بانتظام.',
            'تُصان المسدّسات بإبقائها نظيفة وفحصها ومعايرتها دوريًا.',
            'أحيانًا لا يحتاج الشرطي لإيقاف السائق فورًا، لأن السرعة سُجّلت ويمكن إرسال المخالفة لاحقًا.',
          ],
          callout: 'أسئلة هذا الدرس تأتي بصيغة «أجب أو أكمل» من معلومات الكتاب؛ احفظ آلية العمل بجملة واحدة: موجات تذهب، ترتدّ، تُحسب السرعة.',
        },
      ],
    },
    {
      id: 'u2-l2',
      title: 'القواعد — الوجوب والنصح والتوقّع، والسببية',
      kind: 'grammar',
      minutes: 20,
      intro: 'قواعد الوحدة الثانية عائلة كاملة من الأفعال الناقصة والوظائف: متى تقول must ومتى have to؟ وما الفرق القاتل بين mustn’t و don’t have to؟ ثم صيغة السببية have/get/make التي تأتي في كل دور تقريبًا.',
      sections: [
        {
          type: 'grammar',
          title: 'أولًا: الوجوب والحظر وانعدام الضرورة',
          paragraphs: ['ثلاث درجات يخلط بينها الطلاب، والوزارة تختبر الفرق بينها بدقة:'],
          table: {
            head: ['الأداة', 'المعنى', 'مثال'],
            rows: [
              ['must / have to', 'وجوب وضرورة (قانون أو قاعدة)', 'When you get in a car, you must put on your seat belt.'],
              ['mustn’t', 'حظر صارم — ممنوع منعًا باتًا', 'You mustn’t drive without a licence.'],
              ['don’t have to / needn’t', 'لا ضرورة — مسموح ألّا تفعل', 'You don’t have to give me a lift. I’ll take a taxi.'],
              ['had to', 'وجوب في الماضي', 'My ATM card was stolen, so I had to get a new one.'],
            ],
            ltrCols: [0, 2],
          },
          callout: 'الخطأ الأشهر في الامتحان: mustn’t لا تعني «لا يجب عليك» بلفظ رقيق — إنها حظر كامل. أما «لا داعي» فهي don’t have to.',
        },
        {
          type: 'grammar',
          title: 'ثانيًا: should للنصح والتوقّع، و shall للعروض',
          paragraphs: [
            'لـ should وظيفتان تختبرهما الوزارة بصيغة «عبّر عن التوقّع/النصيحة»: التوقّع المبني على دليل (This is a new computer, so it should be faster)، والنصيحة (You should keep your passport in a safe place). وللعروض والاقتراحات نستخدم Shall I / Shall we، وللنصح القاطع تأتي صيغة الأمر Imperative: Get enough sleep.',
          ],
          examples: [
            { en: 'I’ve studied hard for the test, so I should pass.', ar: 'توقّع مبني على دليل — درست جيدًا، فيُتوقّع أن أنجح.' },
            { en: 'Shall I help you with your baggage?', ar: 'عرض مساعدة بصيغة Shall I — من وظائف هذه الوحدة.' },
            { en: 'They left two hours early. They shouldn’t miss the plane.', ar: 'توقّع سلبي: غادروا مبكرًا جدًا، فلا يُتوقّع أن تفوتهم الطائرة.' },
            { en: 'You should slow down. You are driving too fast.', ar: 'نصيحة بـ should في سياق درسنا: أبطئ، أنت تقود بسرعة زائدة.' },
          ],
        },
        {
          type: 'grammar',
          title: 'ثالثًا: السببية — have / get / make',
          paragraphs: [
            'حين لا يفعل الشخص الشيء بنفسه بل يجعل غيره يفعله، نستخدم السببية بصور ثلاث: have/get + شيء + تصريف ثالث (ترتيب أن يُنجز لك شيء)، و have/get + شخص + فعل (تكليف شخص)، و make + شخص + فعل مجرّد (إجبار شخص على فعل).',
          ],
          table: {
            head: ['الصيغة', 'التكوين', 'مثال'],
            rows: [
              ['شيء يُنجَز لك', 'have/get + object + p.p.', 'The lady had her picture taken. / She got her picture taken.'],
              ['تكليف شخص', 'have + person + verb / get + person + to + verb', 'I had the mechanic check the car. / I got him to check it.'],
              ['إجبار شخص', 'make + person + verb', 'The red signal made him stop. / The noise made her look outside.'],
              ['حدث ضدّك', 'have + object + p.p. (بمعنى المصيبة)', 'I had my television stolen.'],
            ],
            ltrCols: [1, 2],
          },
          bullets: [
            'لاحظ: بعد make يأتي الفعل مجرّدًا دون to: made him stop — لا made him to stop.',
            'وبعد get + شخص لا بد من to: got him to fix it.',
          ],
        },
      ],
    },
    {
      id: 'u2-l3',
      title: 'مفردات الوحدة — الأمن والمرور',
      kind: 'vocab',
      minutes: 10,
      intro: 'كلمات هذه الوحدة من عالمين متجاورين: تقنية الرادار وقياس السرعة، وقوانين الطريق وسلامته. هي نفسها كلمات بطاقات مراجعة الوحدة.',
      sections: [
        {
          type: 'vocab',
          title: 'كلمات الوحدة الثانية',
          paragraphs: ['تخيّل نفسك واقفًا عند نقطة تفتيش: الجهاز، الموجات، الكاشف، المخالفة — سلسلة واحدة تربط الكلمات كلها بدرس القراءة.'],
          vocabIds: [
            'u2-radar', 'u2-speed-gun', 'u2-detector', 'u2-wave', 'u2-bounce-back',
            'u2-ticket', 'u2-speeding', 'u2-maintain', 'u2-accurate', 'u2-device',
            'u2-signal', 'u2-limit', 'u2-record', 'u2-warn', 'u2-avoid',
            'u2-measure', 'u2-licence', 'u2-seat-belt', 'u2-traffic', 'u2-check',
          ],
        },
      ],
    },
    {
      id: 'u2-l4',
      title: 'شرح — وظائف الكلام اليومية، وخلاصة الوحدة',
      kind: 'explain',
      minutes: 10,
      intro: 'نصف قواعد هذه الوحدة «وظائف»: كلام نؤدي به أفعالًا في الحياة — نعرض مساعدة، نقترح، ننصح، نتوقّع. هنا تجميع عملي لها بعبارات جاهزة من أجواء الوحدة.',
      sections: [
        {
          type: 'explain',
          title: 'ماذا تقول حين…؟',
          bullets: [
            'تعرض المساعدة: Shall I help you with your baggage?',
            'تقترح نشاطًا: Shall we stop for lunch?',
            'تنصح سائقًا متهوّرًا: You should slow down — and you mustn’t use your phone while driving.',
            'تعبّر عن توقّع: The road is empty, so we should arrive early.',
            'تطمئن شخصًا: You don’t have to drive me home; I’ll take a taxi.',
            'تتحدث عمّا رتّبته: I had my car checked before the long trip.',
          ],
          examples: [
            { en: 'Keep your passport in a safe place.', ar: 'صيغة أمر للنصح المباشر — نمط وزاري متكرر: «عبّر عن النصيحة بصيغة الأمر».' },
            { en: 'He got his computer fixed yesterday.', ar: 'رتّب أن يُصلح له الحاسوب — سببية get الشهيرة.' },
          ],
        },
        {
          type: 'explain',
          title: 'خلاصة الوحدة الثانية',
          paragraphs: [
            'ركائز الوحدة: فهم درس «Security Technology» (أصل الرادار، آلية الارتداد، الكاشف، الصيانة والدقة)، وإتقان سلم الوجوب (must/have to مقابل mustn’t مقابل don’t have to)، ووظائف should و shall، وصيغ السببية الثلاث. هذه المواضع من أكثر ما يتكرر في أوراق الوزارة عامًا بعد عام.',
          ],
          bullets: [
            'اختبر نفسك في «اختبار الوحدة» مع شرح لكل إجابة.',
            'ثبّت كلمات الأمن والمرور في «بطاقات المراجعة».',
            'ثم واجه «الامتحان الوزاري» للوحدة بمؤقّته ودرجاته.',
          ],
        },
      ],
    },
  ],
  quiz: [
    { id: 'u2q-r1', skill: 'reading', type: 'mcq', q: 'لماذا اختُرع الرادار أصلًا؟', options: ['لقياس سرعة السيارات الرياضية', 'لرصد طائرات العدو قبل الحرب العالمية الثانية', 'لإرشاد السفن في الضباب فقط', 'لتصوير لوحات السيارات'], answer: 1, explain: 'الرادار تقنية عسكرية الأصل: طُوّر لرصد الطائرات المعادية، ثم انتقل إلى شرطة المرور بعد الحرب.', marks: 1 },
    { id: 'u2q-r2', skill: 'reading', type: 'mcq', q: 'كيف يقيس مسدّس الرادار سرعة السيارة؟', options: ['بكاميرا تصوّر العجلات', 'بموجات تصطدم بالسيارة وترتدّ إليه فيحسب السرعة', 'بميقاتي يحسب الزمن بين عمودين', 'بسؤال السائق عن سرعته'], answer: 1, explain: 'مبدأ العمل: موجات مُرسلة ترتدّ عن السيارة، ومن الفرق بينهما تُحسب السرعة لحظيًا.', marks: 1 },
    { id: 'u2q-r3', skill: 'reading', type: 'tf', q: 'يستطيع السائق تفادي المخالفة إذا أسرع هاربًا قبل أن يوقفه الشرطي.', options: ['صح', 'خطأ'], answer: 1, explain: 'خطأ — من عبارات الدرس الصريحة: الجهاز سجّل السرعة في اللحظة نفسها، فالهروب لا يمحو المخالفة.', marks: 1 },
    { id: 'u2q-r4', skill: 'reading', type: 'mcq', q: 'ما وظيفة كاشف الرادار (radar detector)؟', options: ['يزيد سرعة السيارة تلقائيًا', 'يلتقط إشارات رادار الشرطة وينبّه السائق ليبطئ', 'يعطّل مسدّس الشرطة عن بُعد', 'يطبع المخالفات للسائقين'], answer: 1, explain: 'الكاشف جهاز تنبيه: يكشف إشارة الرادار القريب فيحذّر سائقه قبل الوصول إلى نقطة التفتيش.', marks: 1 },
    { id: 'u2q-r5', skill: 'reading', type: 'mcq', q: 'كيف تُصان مسدّسات الرادار لتبقى دقيقة؟', options: ['تُترك في الشمس دائمًا', 'تُحفظ نظيفة وتُفحص وتُعايَر بانتظام', 'تُستخدم مرة واحدة في السنة', 'تُغسل بالماء بعد كل استخدام'], answer: 1, explain: 'الصيانة في الدرس: نظافة وفحص ومعايرة دورية — لأن قراءات الجهاز تُبنى عليها غرامات.', marks: 1 },
    { id: 'u2q-g1', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة لإكمال الجملة:', qEn: 'When you get in a car, you ___ put on your seat belt.', options: ['must', 'needn’t', 'don’t have to', 'mustn’t to'], answer: 0, explain: 'وضع حزام الأمان وجوب قانوني: must. أما needn’t و don’t have to فتعنيان انعدام الضرورة — عكس المطلوب.', marks: 1 },
    { id: 'u2q-g2', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة لإكمال الجملة:', qEn: 'You ___ give me a lift. I’ll take a taxi.', options: ['mustn’t', 'don’t have to', 'must', 'should be'], answer: 1, explain: 'المعنى «لا داعي» — انعدام ضرورة لا حظر: don’t have to. لو قلنا mustn’t لصار المعنى ممنوعًا تمامًا.', marks: 1 },
    { id: 'u2q-g3', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة التي تعبّر عن التوقّع:', qEn: 'This is a new computer, so it ___ faster than the other one.', options: ['should be', 'mustn’t be', 'is being yesterday', 'needn’t to be'], answer: 0, explain: 'توقّع مبني على دليل (الحاسوب جديد) يأتي بـ should + المصدر: should be — نمط وزاري صريح.', marks: 1 },
    { id: 'u2q-g4', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة لإكمال الجملة:', qEn: 'The red signal made him ___.', options: ['stop', 'to stop', 'stopped yesterday', 'stopping now'], answer: 0, explain: 'بعد make + مفعول يأتي الفعل مجرّدًا دون to: made him stop.', marks: 1 },
    { id: 'u2q-g5', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة لإكمال الجملة:', qEn: 'She had her picture ___.', options: ['taken', 'take', 'took yesterday', 'takes'], answer: 0, explain: 'سببية have: have + شيء + التصريف الثالث (p.p.) — رتّبت أن تُؤخذ صورتها: had her picture taken.', marks: 1 },
    { id: 'u2q-v1', skill: 'vocab', type: 'mcq', q: 'ما معنى عبارة bounce back في درس الرادار؟', options: ['تنكسر وتسقط', 'ترتدّ عائدة بعد الاصطدام', 'تختفي في الهواء', 'تتضاعف سرعتها'], answer: 1, explain: 'موجات الرادار تصطدم بالسيارة وترتدّ عائدة إلى الجهاز — ومنها تُحسب السرعة.', marks: 1 },
    { id: 'u2q-v2', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة لإكمال الجملة:', qEn: 'A radar ___ is a device that warns drivers about nearby police radar.', options: ['detector', 'ticket', 'licence', 'wave'], answer: 0, explain: 'detector هو الكاشف الذي ينبّه السائق — من كلمات الدرس الأساسية.', marks: 1 },
    { id: 'u2q-v3', skill: 'vocab', type: 'tf', q: 'كلمة maintain تعني «يصون ويحافظ على الشيء بحالة جيدة».', options: ['صح', 'خطأ'], answer: 0, explain: 'صحيح. صيانة الأجهزة (فحص ونظافة ومعايرة) شرط دقّتها كما في الدرس.', marks: 1 },
    { id: 'u2q-v4', skill: 'vocab', type: 'mcq', q: 'ما الترجمة الإنجليزية الصحيحة لعبارة «مخالفة سرعة»؟', options: ['a speeding ticket', 'a seat belt', 'a speed limit book', 'a traffic wave'], answer: 0, explain: 'ticket هي المخالفة/الغرامة، و speeding تجاوز السرعة — معًا: مخالفة سرعة.', marks: 1 },
  ],
  exam: [
    { id: 'u2e-r1', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'Why do police use radar speed guns?', options: ['To take photographs of cars', 'To measure the speed of cars and catch speeding drivers', 'To repair traffic lights', 'To test new cars for factories'], answer: 1, explain: 'وظيفة الجهاز: قياس سرعة السيارات وضبط المتجاوزين لحدّ السرعة.', marks: 4 },
    { id: 'u2e-r2', skill: 'reading', type: 'mcq', q: 'أكمل الجملة مستخدمًا معلومات الدرس:', qEn: 'When the waves of the radar speed gun hit the car, they ___.', options: ['disappear at once', 'bounce back to the gun', 'make the car stop', 'turn into light'], answer: 1, explain: 'الموجات ترتدّ عائدة إلى الجهاز — تعبئة فراغ بنصّ نماذج الوزارة.', marks: 4 },
    { id: 'u2e-r3', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'What is a radar detector?', options: ['A camera that photographs drivers', 'A device that detects police radar and warns the driver', 'A kind of speed gun', 'A machine that prints tickets'], answer: 1, explain: 'الكاشف يلتقط إشارات رادار الشرطة وينبّه السائق فيبطئ قبل نقطة التفتيش.', marks: 4 },
    { id: 'u2e-r4', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'A driver can’t avoid a ticket by speeding away because ___.', options: ['the road is always closed', 'the gun has already recorded his speed', 'his car will stop suddenly', 'the detector will switch off'], answer: 1, explain: 'الجهاز سجّل السرعة في لحظة القياس نفسها؛ الهروب لا يغيّر الرقم المسجّل.', marks: 4 },
    { id: 'u2e-r5', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'Radar speed gun mistakes can be avoided if ___.', options: ['drivers drive faster', 'police are well trained and the guns are checked regularly', 'the guns are never used', 'tickets are cancelled'], answer: 1, explain: 'تجنّب الأخطاء في الدرس مشروط بأمرين: تدريب الشرطي وفحص الجهاز بانتظام.', marks: 4 },
    { id: 'u2e-g1', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'My ATM card was stolen yesterday, so I ___ get a new one.', options: ['have to', 'needn’t', 'mustn’t to', 'don’t have to yesterday'], answer: 0, explain: 'ضرورة فرضها ظرف حقيقي: have to. (في الماضي نقول had to، والجملة بصيغة الحال بعد so.)', marks: 4 },
    { id: 'u2e-g2', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'You ___ drive without your seat belt on.', options: ['mustn’t', 'needn’t', 'don’t have to', 'should yesterday'], answer: 0, explain: 'القيادة دون حزام محظورة قانونًا: mustn’t — حظر لا انعدام ضرورة.', marks: 4 },
    { id: 'u2e-g3', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة التي تعبّر عن عرض:', qEn: '___ help you with your baggage?', options: ['Shall I', 'Mustn’t I', 'Did I yesterday', 'Am I help'], answer: 0, explain: 'عرض المساعدة يأتي بـ Shall I — من وظائف الوحدة الثابتة في نماذج الوزارة.', marks: 4 },
    { id: 'u2e-g4', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'The noise made her ___ outside.', options: ['look', 'to look', 'looked', 'looking now'], answer: 0, explain: 'make + شخص + فعل مجرّد: made her look — جملة من نماذج الوزارة نفسها.', marks: 4 },
    { id: 'u2e-g5', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'My father ___ the computer fixed by a technician.', options: ['got', 'made to', 'should yesterday', 'is get'], answer: 0, explain: 'سببية get: got + شيء + تصريف ثالث — رتّب إصلاح الحاسوب ولم يصلحه بنفسه.', marks: 4 },
    { id: 'u2e-g6', skill: 'grammar', type: 'tf', q: 'حدّد صحة العبارة التالية:', qEn: '“Mustn’t” and “don’t have to” have exactly the same meaning.', options: ['True', 'False'], answer: 1, explain: 'خاطئة: mustn’t حظر صارم، و don’t have to انعدام ضرورة — والخلط بينهما أشهر أخطاء هذا الباب.', marks: 4 },
    { id: 'u2e-v1', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'A ___ is an electronic object used for a special purpose, like measuring speed.', options: ['device', 'ticket', 'limit', 'wave goodbye'], answer: 0, explain: 'device تعني جهازًا إلكترونيًا لغرض محدد — مسدّس الرادار والكاشف كلاهما device.', marks: 4 },
    { id: 'u2e-v2', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'Drivers must not break the speed ___.', options: ['limit', 'belt', 'signal red', 'ticket office'], answer: 0, explain: 'speed limit هو حدّ السرعة القانوني الذي يقيس الجهاز تجاوزَه.', marks: 4 },
    { id: 'u2e-v3', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'Well-maintained guns give ___ readings that drivers can trust.', options: ['accurate', 'proud', 'unconscious', 'alone'], answer: 0, explain: 'accurate تعني دقيقة — ثمرة الصيانة والفحص المنتظم كما في الدرس.', marks: 4 },
    { id: 'u2e-v4', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'The detector ___ the driver when a speed gun is near.', options: ['warns', 'borrows', 'faints', 'recovers'], answer: 0, explain: 'warn ينبّه ويحذّر — وظيفة الكاشف الوحيدة.', marks: 4 },
  ],
};
