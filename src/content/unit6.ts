/* Uruk Academy — Unit Six of «English for Iraq», 6th Preparatory.
   Reading: Lesson 10 «Making Money» — saving, interest, investing and
   pensions; facts verified against the Ministry of Education's
   published sample questions for this lesson. Grammar: the passive
   voice — the unit's grammar focus per Iraqi teacher guides.
   The unit's وزاري writing topic (a complaint letter to a bank) is taken
   from the Ministry's published writing samples. All text our own. */

import type { Unit, VocabWord } from './types';

const vocab: VocabWord[] = [
  { id: 'u6-save', word: 'save', pos: 'فعل', meaning: 'يدّخر — يحتفظ بالمال للمستقبل بدل إنفاقه', example: 'People should save money for the future.', exampleAr: 'ينبغي للناس أن يدّخروا المال للمستقبل.' },
  { id: 'u6-savings-account', word: 'savings account', pos: 'اسم', meaning: 'حساب التوفير — حساب مصرفي يدفع فائدة على المال المودَع', example: 'She keeps her money in a savings account.', exampleAr: 'تحتفظ بمالها في حساب توفير.' },
  { id: 'u6-interest', word: 'interest', pos: 'اسم', meaning: 'الفائدة — مال إضافي يدفعه المصرف مقابل إيداعك', example: 'You get more interest if you leave your money in the account longer.', exampleAr: 'تحصل على فائدة أكبر إذا تركت مالك في الحساب مدة أطول.' },
  { id: 'u6-invest', word: 'invest', pos: 'فعل', meaning: 'يستثمر — يضع المال في مشروع أو أصل لينمو', example: 'People invest their money in different ways.', exampleAr: 'يستثمر الناس أموالهم بطرق مختلفة.' },
  { id: 'u6-investment', word: 'investment', pos: 'اسم', meaning: 'استثمار — ما تضع فيه مالك توقّعًا للربح', example: 'Buying property is the most popular investment in the UK.', exampleAr: 'شراء العقار هو أشهر استثمار في بريطانيا.' },
  { id: 'u6-shares', word: 'shares', pos: 'اسم', meaning: 'أسهم — حصص ملكية صغيرة في الشركات', example: 'He bought shares in a large company.', exampleAr: 'اشترى أسهمًا في شركة كبيرة.' },
  { id: 'u6-property', word: 'property', pos: 'اسم', meaning: 'عقار — أرض أو مبنى يُشترى للسكن أو الاستثمار', example: 'Property prices have risen in recent years.', exampleAr: 'ارتفعت أسعار العقارات في السنوات الأخيرة.' },
  { id: 'u6-pension', word: 'pension', pos: 'اسم', meaning: 'راتب تقاعدي — دخل منتظم بعد التوقف عن العمل', example: 'When we start work, we are encouraged to put money into a pension plan.', exampleAr: 'حين نبدأ العمل، نُشجَّع على وضع المال في خطة تقاعد.' },
  { id: 'u6-retire', word: 'retire', pos: 'فعل', meaning: 'يتقاعد — يتوقف عن العمل لكبر السن', example: 'A pension gives you money when you retire.', exampleAr: 'يمنحك التقاعد مالًا حين تتقاعد.' },
  { id: 'u6-deposit', word: 'deposit', pos: 'فعل / اسم', meaning: 'يودِع مالًا في المصرف؛ مبلغ الإيداع', example: 'She deposits part of her salary every month.', exampleAr: 'تودِع جزءًا من راتبها كل شهر.' },
  { id: 'u6-withdraw', word: 'withdraw', pos: 'فعل', meaning: 'يسحب مالًا من حسابه المصرفي', example: 'He withdrew some money from his account.', exampleAr: 'سحب بعض المال من حسابه.' },
  { id: 'u6-statement', word: 'statement', pos: 'اسم', meaning: 'كشف الحساب — قائمة بحركات حسابك المصرفي', example: 'Check your bank statement carefully every month.', exampleAr: 'افحص كشف حسابك المصرفي بعناية كل شهر.' },
  { id: 'u6-salary', word: 'salary', pos: 'اسم', meaning: 'راتب شهري مقابل العمل', example: 'Part of his salary goes into a pension plan.', exampleAr: 'يذهب جزء من راتبه إلى خطة تقاعد.' },
  { id: 'u6-profit', word: 'profit', pos: 'اسم', meaning: 'ربح — ما يزيد عن رأس المال', example: 'If you sell the shares for more than you paid, you make a profit.', exampleAr: 'إذا بعت الأسهم بأكثر مما دفعت، حقّقت ربحًا.' },
  { id: 'u6-earn', word: 'earn', pos: 'فعل', meaning: 'يكسب — يحصل على مال مقابل عمل أو استثمار', example: 'Savings accounts earn interest for their owners.', exampleAr: 'حسابات التوفير تكسب فائدة لأصحابها.' },
  { id: 'u6-spend', word: 'spend', pos: 'فعل', meaning: 'ينفق المال', example: 'Wise people do not spend everything they earn.', exampleAr: 'الحكماء لا ينفقون كل ما يكسبونه.' },
  { id: 'u6-borrow', word: 'borrow', pos: 'فعل', meaning: 'يقترض — يأخذ مالًا على أن يعيده', example: 'It is better to save than to borrow at high interest.', exampleAr: 'الادّخار أفضل من الاقتراض بفائدة عالية.' },
  { id: 'u6-future', word: 'the future', pos: 'اسم', meaning: 'المستقبل — الزمن القادم الذي نخطّط له', example: 'Saving today protects you in the future.', exampleAr: 'الادّخار اليوم يحميك في المستقبل.' },
  { id: 'u6-encourage', word: 'encourage', pos: 'فعل', meaning: 'يشجّع — يدفع شخصًا لفعل شيء نافع', example: 'Young workers are encouraged to join a pension plan.', exampleAr: 'يُشجَّع العاملون الشباب على الانضمام إلى خطة تقاعد.' },
  { id: 'u6-benefit', word: 'benefit', pos: 'اسم / فعل', meaning: 'فائدة ومنفعة؛ يستفيد', example: 'People can benefit from their money in several ways.', exampleAr: 'يمكن للناس الاستفادة من أموالهم بطرق عدة.' },
];

export const unit6: Unit = {
  id: 'en6-u6',
  number: 6,
  titleAr: 'الوحدة السادسة',
  titleEn: 'Making Money',
  theme: 'صناعة المال — الادّخار والفائدة والاستثمار والتقاعد، والمبني للمجهول بكل أزمنته.',
  status: 'live',
  kind: 'content',
  vocab,
  examMinutes: 20,
  lessons: [
    {
      id: 'u6-l1',
      title: 'القراءة — صناعة المال',
      kind: 'reading',
      minutes: 15,
      intro: 'درس القراءة في الوحدة السادسة (الدرس العاشر من الكتاب) عنوانه «Making Money»: درس في الثقافة المالية الشخصية — ماذا تفعل بمالك ليعمل من أجلك؟ أسئلة نماذج الوزارة الستة عن هذا الدرس ترسم خريطته كاملة.',
      sections: [
        {
          type: 'explain',
          title: 'قبل أن تقرأ',
          paragraphs: [
            'الفكرة التي يبني عليها الدرس بسيطة وعميقة: المال الذي تنفقه كله اليوم لن يحميك غدًا. يشرح الدرس ثلاث أدوات مالية أساسية يعرفها كل بالغ: حساب التوفير الذي يدفع فائدة، والاستثمار الذي قد ينمّي المال أكثر، وخطة التقاعد التي تضمن دخلًا حين تتوقف عن العمل. احفظ أسماء الأدوات الثلاث، فهي هيكل كل سؤال.',
          ],
        },
        {
          type: 'reading',
          title: 'الدرس بملخّصنا',
          paragraphs: [
            'يبدأ الدرس من المستقبل: ينبغي للناس أن يدّخروا جزءًا من مالهم للمستقبل، لأن الحياة تحمل طوارئ، ولأن الإنسان سيكبر ويتوقف يومًا عن العمل. فالادّخار ليس بخلًا — إنه أمان الغد يُبنى من فائض اليوم.',
            'أبسط صور الادّخار حسابُ التوفير في المصرف: تودِع مالك فيدفع لك المصرف فائدة عليه، وكلما طال بقاء المال في الحساب ازدادت الفائدة — فمدة البقاء هي العامل الحاسم الذي يقرّره الدرس. المال هنا آمن، ونموّه بطيء لكنه مؤكد.',
            'أما الاستثمار فيضع المال في أصول قد تزيد قيمتها: كشراء أسهم في الشركات، أو شراء عقار — وهو أشهر استثمار في بريطانيا في الوقت الحاضر. الاستثمار قد يربح أكثر من حساب التوفير، لكنه يحمل مخاطرة: فالقيم تصعد وتهبط.',
            'وهكذا يستفيد الناس من أموالهم بوجوه متكاملة: مال آمن ينمو ببطء في التوفير، ومال مغامر قد ينمو بسرعة في الاستثمار، والتخطيط المبكر للنهاية: فحين نبدأ العمل نُشجَّع على وضع المال في خطط التقاعد (pension plans) ليكون لنا دخل منتظم حين نتقاعد.',
          ],
          examples: [
            { en: 'People should save money for the future.', ar: 'ينبغي للناس ادّخار المال للمستقبل — فكرة الدرس الأولى.' },
            { en: 'When we start work, we are encouraged to put money into a pension plan.', ar: 'حين نبدأ العمل نُشجَّع على وضع المال في خطة تقاعد.' },
            { en: 'People can invest their money in shares or in property.', ar: 'يمكن للناس استثمار أموالهم في الأسهم أو في العقار.' },
            { en: 'A pension gives you an income when you retire.', ar: 'يمنحك التقاعد دخلًا حين تتقاعد.' },
          ],
        },
        {
          type: 'explain',
          title: 'حقائق يحبّها الامتحان الوزاري',
          paragraphs: ['ستة مواضع سؤال رسمية عن هذا الدرس — وهي وحدها خريطة الدرس:'],
          bullets: [
            'يدّخر الناس للمستقبل: للطوارئ، ولزمن التوقف عن العمل.',
            'يحصل أصحاب حسابات التوفير على فائدة أكبر كلما طال بقاء المال في الحساب — فالمدة وحدها هي العامل الذي يقرّره الدرس.',
            'يستثمر الناس أموالهم في الأسهم وفي العقارات (طريقتان يطلبهما السؤال صراحة).',
            'يستفيد الناس من أموالهم بجعلها تنمو: فائدة التوفير وأرباح الاستثمار.',
            'شراء العقار هو أشهر استثمار في بريطانيا حاليًا.',
            'حين نبدأ العمل نُشجَّع على الاشتراك في خطط التقاعد لنضمن دخلًا عند التقاعد.',
          ],
          callout: 'سؤال «كيف يستثمر الناس أموالهم؟» يطلب طريقتين دائمًا — جهّز إجابتك بثنائية: shares و property.',
        },
      ],
    },
    {
      id: 'u6-l2',
      title: 'القواعد — المبني للمجهول Passive Voice',
      kind: 'grammar',
      minutes: 20,
      intro: 'قواعد الوحدة السادسة هي المبني للمجهول بكل أزمنته: صيغة تأتي في كل ورقة وزارية، وتتحوّل إليها الجمل بنمط ثابت إذا أتقنته صارت درجاتها مضمونة. وفي نهاية الدرس قسم تذكير قصير بالجمل الشرطية — لأن تدريب «اختبر نفسك» في كتاب النشاط يختبرها في هذه الوحدة أيضًا، وأصلها ومعالجتها الكاملة في الوحدة الثالثة.',
      sections: [
        {
          type: 'grammar',
          title: 'أولًا: متى ولماذا نستخدم المبني للمجهول؟',
          paragraphs: [
            'نستخدمه حين يكون الفاعل مجهولًا أو غير مهم أو بديهيًا، أو حين نهتم بالمفعول والحدث أكثر من صانعه: «سُرق محفظتي» أهمّ من «سرقها شخص ما». تركيبه ثابت لا يتغيّر: صورة مناسبة من الفعل be + التصريف الثالث (p.p.)، والفاعل الأصلي (إن ذُكر) يأتي بعد by.',
          ],
          table: {
            head: ['الزمن', 'التكوين', 'مثال'],
            rows: [
              ['المضارع البسيط', 'am/is/are + p.p.', 'Hundreds of people are attacked in the streets every year.'],
              ['الماضي البسيط', 'was/were + p.p.', 'Somebody took my wallet. → My wallet was taken.'],
              ['المضارع المستمر', 'am/is/are being + p.p.', 'My bedroom is being painted, so I’m sleeping in the living room.'],
              ['الماضي المستمر', 'was/were being + p.p.', 'He was being followed until he got to the office.'],
              ['المضارع التام', 'have/has been + p.p.', 'The bank was robbed. → It has been robbed.'],
              ['المستقبل / الناقصة', 'will be / can be / must be + p.p.', 'The building won’t be finished by May.'],
            ],
            ltrCols: [1, 2],
          },
        },
        {
          type: 'grammar',
          title: 'ثانيًا: خطوات التحويل — وخدعة الجمل ذات المفعولين',
          bullets: [
            'انقل المفعول به إلى موقع الفاعل، وحوّل الفعل إلى be + p.p. بنفس زمن الجملة الأصلية، وأبقِ بقية الجملة كما هي.',
            'بعض الأفعال تأخذ مفعولين (ask, give, send): A journalist asked the prime minister questions. يمكن البدء بأي مفعول، والأشهر البدء بالشخص: The prime minister was asked a lot of difficult questions.',
            'في النفي والسؤال تتحرك be فقط: Was the bank robbed yesterday? — تُفكّ هذه الجملة أيضًا في تمارين ترتيب الكلمات الوزارية.',
          ],
          examples: [
            { en: 'The prime minister was asked a lot of difficult questions by journalists.', ar: 'سُئل رئيس الوزراء أسئلة صعبة كثيرة — مثال مدرّسي عراقي شهير لهذا الباب.' },
            { en: 'These coins are used in Egypt.', ar: 'تُستخدم هذه العملات في مصر — فكّ جملة مبعثرة من نماذج الوزارة.' },
            { en: 'The bank was robbed yesterday.', ar: 'سُرق المصرف أمس — هدف تمارين الترتيب في الورقة الوزارية.' },
          ],
          callout: 'ثلثا الخطأ في هذا الباب سببه نسيان be أو كتابة الفعل بصيغته العادية بعدها. القاعدة الذهبية: لا مبني للمجهول بلا be + تصريف ثالث.',
        },
        {
          type: 'grammar',
          title: 'ثالثًا: تذكير — الجمل الشرطية تُختبر في هذه الوحدة أيضًا',
          paragraphs: [
            'بأمانة التوثيق: الجمل الشرطية ليست نظام هذه الوحدة الأصلي — معالجتها الكاملة هي درس قواعد الوحدة الثالثة. لكن تدريب «اختبر نفسك» (Test yourself) في كتاب النشاط للوحدة السادسة يختبرها أيضًا، فإليك خلاصة أنواعها الأربعة بأمثلة من عالم مال هذه الوحدة، ثم ارجع إلى الوحدة الثالثة للإتقان.',
          ],
          table: {
            head: ['النوع', 'التكوين', 'مثال من عالم المال'],
            rows: [
              ['الصفري', 'If + مضارع بسيط، مضارع بسيط', 'If you keep money at home, it earns nothing.'],
              ['الأول', 'If + مضارع بسيط، will + مصدر', 'If you save a little every month, you will have enough for emergencies.'],
              ['الثاني', 'If + ماضٍ بسيط، would + مصدر', 'If I earned more, I would invest in property.'],
              ['الثالث', 'If + ماضٍ تام، would have + p.p.', 'If she had joined a pension plan early, she would have had a bigger income in retirement.'],
            ],
            ltrCols: [2],
          },
          callout: 'للمعالجة الكاملة — تسمية النوع من المعنى، وwere مع كل الضمائر، وخدع الامتحان — ادرس درس «القواعد — الجمل الشرطية والجمل المؤكِّدة» في الوحدة الثالثة.',
        },
      ],
    },
    {
      id: 'u6-l3',
      title: 'مفردات الوحدة — المال والمصارف',
      kind: 'vocab',
      minutes: 10,
      intro: 'كلمات هذه الوحدة هي قاموسك المالي الأول بالإنجليزية: الادّخار والفائدة والاستثمار والتقاعد وكشوف الحساب. هي نفسها كلمات بطاقات مراجعة الوحدة.',
      sections: [
        {
          type: 'vocab',
          title: 'كلمات الوحدة السادسة',
          paragraphs: ['رتّب الكلمات في ذهنك كرحلة مال: يُكسب (earn)، يُودع (deposit)، يدّخر (save)، يكسب فائدة (interest)، يستثمر (invest)، ويُحصَّل عند التقاعد (pension).'],
          vocabIds: [
            'u6-save', 'u6-savings-account', 'u6-interest', 'u6-invest', 'u6-investment',
            'u6-shares', 'u6-property', 'u6-pension', 'u6-retire', 'u6-deposit',
            'u6-withdraw', 'u6-statement', 'u6-salary', 'u6-profit', 'u6-earn',
            'u6-spend', 'u6-borrow', 'u6-future', 'u6-encourage', 'u6-benefit',
          ],
        },
      ],
    },
    {
      id: 'u6-l4',
      title: 'شرح — رسالة شكوى إلى المصرف، وخلاصة الوحدة',
      kind: 'explain',
      minutes: 10,
      intro: 'موضوع الإنشاء الوزاري المرتبط بهذه الوحدة رسمي ومعروف: «اكتب رسالة إلى مصرفك تشكو فيها سحبًا ظهر في كشف حسابك لم تقم به». هنا هيكل الرسالة الناجحة بصيغ جاهزة.',
      sections: [
        {
          type: 'explain',
          title: 'هيكل رسالة الشكوى المصرفية',
          bullets: [
            'ابدأ بالتحية الرسمية وعرّف بنفسك ورقم حسابك باختصار.',
            'اعرض المشكلة بدقة: تاريخ السحب ومبلغه كما ظهر في كشف الحساب (statement).',
            'أكّد بوضوح أنك لم تقم بهذا السحب ولم تأذن به لأحد.',
            'اطلب التحقيق وتصحيح الخطأ وإعادة المبلغ إلى حسابك.',
            'اختم بطلب ردّ سريع، ووقّع باسمك الكامل.',
          ],
          examples: [
            { en: 'I am writing to complain about a withdrawal shown on my statement that I did not make.', ar: 'جملة الافتتاح الوزارية النموذجية لرسالة الشكوى.' },
            { en: 'I would be grateful if you could look into this matter and return the money to my account.', ar: 'طلب مهذّب وحازم: التحقيق في الأمر وإعادة المال إلى حسابي.' },
          ],
          callout: 'رسائل الشكوى تُقيَّم على: وضوح المشكلة، ودقة التفاصيل (تاريخ ومبلغ)، والأدب الحازم — لا الغضب ولا التوسّل.',
        },
        {
          type: 'explain',
          title: 'خلاصة الوحدة السادسة',
          paragraphs: [
            'ركائز الوحدة: فهم درس «Making Money» بأدواته الثلاث (توفير بفائدة، استثمار بأسهم وعقار، تقاعد مخطّط)، وإتقان تحويل الجمل إلى المبني للمجهول بكل الأزمنة مع قاعدة be + التصريف الثالث، وتذكير بالجمل الشرطية لأن «اختبر نفسك» في كتاب النشاط يختبرها هنا أيضًا (ومعالجتها الكاملة في الوحدة الثالثة)، ومفردات المال والمصارف العشرون.',
          ],
          bullets: [
            'اختبر نفسك في «اختبار الوحدة» مع شرح لكل إجابة.',
            'ثبّت الكلمات المالية في «بطاقات المراجعة».',
            'ثم واجه «الامتحان الوزاري» للوحدة: ٦٠ درجة في ٢٠ دقيقة.',
          ],
        },
      ],
    },
  ],
  quiz: [
    { id: 'u6q-r1', skill: 'reading', type: 'mcq', q: 'لماذا ينبغي للناس أن يدّخروا المال حسب درس «Making Money»؟', options: ['ليشتروا سيارات أسرع', 'للمستقبل: للطوارئ ولزمن التقاعد', 'لأن المصارف تفرض ذلك بالقوة', 'لإقراض الأصدقاء دون فائدة'], answer: 1, explain: 'الادّخار في الدرس أمان للمستقبل: طوارئ الحياة ودخل ما بعد التوقف عن العمل.', marks: 1 },
    { id: 'u6q-r2', skill: 'reading', type: 'mcq', q: 'متى يحصل صاحب حساب التوفير على فائدة أكبر؟', options: ['حين يسحب ماله كل أسبوع', 'حين يبقى المال في الحساب مدة أطول', 'حين يفتح حسابًا في مصرف أجنبي فقط', 'حين يخفي ماله في البيت'], answer: 1, explain: 'بحسب الدرس وكتاب النشاط، العامل الحاسم هو مدة بقاء المال في الحساب (keep it for a long time) — كلما طالت المدة زادت الفائدة.', marks: 1 },
    { id: 'u6q-r3', skill: 'reading', type: 'mcq', q: 'ما الطريقتان اللتان يذكرهما الدرس لاستثمار المال؟', options: ['القمار واليانصيب', 'شراء الأسهم وشراء العقار', 'إقراض الغرباء وشراء الذهب فقط', 'الادّخار في الجيب وشراء السيارات'], answer: 1, explain: 'ثنائية الدرس الشهيرة التي يطلبها سؤال الوزارة صراحة: shares و property.', marks: 1 },
    { id: 'u6q-r4', skill: 'reading', type: 'tf', q: 'حين نبدأ العمل نُشجَّع على وضع المال في خطط التقاعد.', options: ['صح', 'خطأ'], answer: 0, explain: 'صحيح — جملة الدرس بنصّها تقريبًا، وهدفها دخل منتظم عند التقاعد.', marks: 1 },
    { id: 'u6q-r5', skill: 'reading', type: 'mcq', q: 'ما أشهر استثمار في بريطانيا في الوقت الحاضر حسب الدرس؟', options: ['شراء العقار', 'تجارة السيارات المستعملة', 'حسابات التوفير فقط', 'شراء الذهب'], answer: 0, explain: 'العقار property هو الاستثمار الأشهر في بريطانيا كما يقرر الدرس.', marks: 1 },
    { id: 'u6q-g1', skill: 'grammar', type: 'mcq', q: 'حوّل الجملة إلى المبني للمجهول:', qEn: 'Somebody took my wallet last week. → My wallet ___.', options: ['was taken last week', 'took last week', 'is take last week', 'takes last week'], answer: 0, explain: 'الماضي البسيط في المجهول: was + التصريف الثالث (taken) — جملة من نماذج الوزارة.', marks: 1 },
    { id: 'u6q-g2', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة لإكمال الجملة:', qEn: 'Hundreds of people ___ in the streets every year.', options: ['are attacked', 'attack by people', 'is attack', 'attacked by them yesterday'], answer: 0, explain: 'عادة متكررة (every year) بمضارع مجهول: are attacked — والمفعول جمع فيأخذ are.', marks: 1 },
    { id: 'u6q-g3', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة لإكمال الجملة:', qEn: 'The building ___ by May.', options: ['won’t be finished', 'won’t finished', 'won’t been finish', 'isn’t finish yesterday'], answer: 0, explain: 'مستقبل مجهول منفي: will not be + التصريف الثالث — من أمثلة تدريبات الوحدة.', marks: 1 },
    { id: 'u6q-g4', skill: 'grammar', type: 'mcq', q: 'حوّل الجملة إلى المبني للمجهول:', qEn: 'A journalist asked the prime minister many questions. → The prime minister ___.', options: ['was asked many questions', 'asked many questions by himself', 'is ask many questions', 'asking many questions'], answer: 0, explain: 'مع الأفعال ذات المفعولين نبدأ بالشخص: was asked — والمفعول الثاني يبقى بعده.', marks: 1 },
    { id: 'u6q-g5', skill: 'grammar', type: 'tf', q: 'في المبني للمجهول يأتي الفعل الرئيسي دائمًا بصيغة التصريف الثالث بعد صورة من be.', options: ['صح', 'خطأ'], answer: 0, explain: 'صحيح — قاعدة الباب الذهبية: be + p.p. في كل الأزمنة.', marks: 1 },
    { id: 'u6q-v1', skill: 'vocab', type: 'mcq', q: 'ما معنى كلمة interest في سياق المصارف؟', options: ['اهتمام شخصي', 'الفائدة التي يدفعها المصرف على الإيداع', 'رسوم فتح الحساب', 'خصم على المشتريات'], answer: 1, explain: 'interest هنا مالية: مال إضافي يكسبه صاحب حساب التوفير مقابل إيداعه.', marks: 1 },
    { id: 'u6q-v2', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة لإكمال الجملة:', qEn: 'When we start work, we are encouraged to put money into a ___ plan.', options: ['pension', 'ticket', 'statement of marks', 'speed'], answer: 0, explain: 'pension plan خطة التقاعد — عبارة الدرس الختامية الشهيرة.', marks: 1 },
    { id: 'u6q-v3', skill: 'vocab', type: 'tf', q: 'فعل withdraw يعني «يسحب مالًا من حسابه».', options: ['صح', 'خطأ'], answer: 0, explain: 'صحيح. withdraw يسحب، وعكسها deposit يودِع — ثنائية كشوف الحساب.', marks: 1 },
    { id: 'u6q-v4', skill: 'vocab', type: 'mcq', q: 'ما الترجمة الإنجليزية الصحيحة لعبارة «حساب توفير»؟', options: ['savings account', 'speed account', 'ticket account', 'future letter'], answer: 0, explain: 'savings account هو حساب التوفير الذي يدفع فائدة على المال المودَع.', marks: 1 },
  ],
  exam: [
    { id: 'u6e-r1', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'Why should people save money for the future?', options: ['To spend it all on holidays', 'For emergencies and for when they stop working', 'Because banks force them to', 'To lend it to strangers'], answer: 1, explain: 'الادّخار للمستقبل: طوارئ الحياة ودخل زمن ما بعد العمل.', marks: 4 },
    { id: 'u6e-r2', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'How can people invest their money? (two ways)', options: ['By gambling and lotteries', 'By buying shares and buying property', 'By hiding it at home', 'By spending it quickly'], answer: 1, explain: 'طريقتا الدرس: الأسهم والعقار — والسؤال الوزاري يطلب اثنتين دائمًا.', marks: 4 },
    { id: 'u6e-r3', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'What is the most popular investment in the UK at the moment?', options: ['Savings accounts', 'Property', 'Gold coins', 'Used cars'], answer: 1, explain: 'العقار هو الاستثمار الأشهر في بريطانيا حسب الدرس.', marks: 4 },
    { id: 'u6e-r4', skill: 'reading', type: 'mcq', q: 'أكمل الجملة مستخدمًا معلومات الدرس:', qEn: 'When we start work, we are encouraged to put money into a pension plan in order to ___.', options: ['travel every year', 'have an income when we retire', 'avoid paying for food', 'buy a bigger house at once'], answer: 1, explain: 'غاية خطة التقاعد: دخل منتظم حين نتوقف عن العمل.', marks: 4 },
    { id: 'u6e-r5', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'When do people get a lot of interest on their savings accounts?', options: ['When they empty the account weekly', 'When they keep their money in the account for a long time', 'When the bank is closed', 'When they borrow more money'], answer: 1, explain: 'حسب الدرس: الفائدة الأكبر ثمرة طول بقاء المال في الحساب وحده — مدة البقاء هي العامل المقرَّر.', marks: 4 },
    { id: 'u6e-g1', skill: 'grammar', type: 'mcq', q: 'رتّب الكلمات لتكوين جملة مبنية للمجهول:', qEn: '(was / The / yesterday / bank / robbed)', options: ['The bank was robbed yesterday.', 'The yesterday bank was robbed the.', 'Was bank the robbed yesterday the.', 'The robbed was bank yesterday.'], answer: 0, explain: 'ترتيب نماذج الوزارة الشهير: فاعل (المفعول أصلًا) + was + p.p. + ظرف الزمان.', marks: 4 },
    { id: 'u6e-g2', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'My bedroom ___ at the moment, so I’m sleeping in the living room.', options: ['is being painted', 'is painting by me', 'paints now', 'being paint'], answer: 0, explain: 'مضارع مستمر مجهول (يحدث الآن): is being + p.p. — من أسئلة نماذج الوزارة.', marks: 4 },
    { id: 'u6e-g3', skill: 'grammar', type: 'mcq', q: 'حوّل إلى المبني للمجهول:', qEn: 'People use these coins in Egypt. → These coins ___.', options: ['are used in Egypt', 'use in Egypt', 'is used by people hands', 'used yesterday in Egypt'], answer: 0, explain: 'مضارع بسيط مجهول لجمع: are used — والفاعل العام (people) يُحذف لأنه غير مهم.', marks: 4 },
    { id: 'u6e-g4', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'He ___ until he got to the office. (passive, past continuous)', options: ['was being followed', 'is follow', 'follows him', 'being follow yesterday'], answer: 0, explain: 'ماضٍ مستمر مجهول: was being followed — كان يُتتبَّع طوال الطريق.', marks: 4 },
    { id: 'u6e-g5', skill: 'grammar', type: 'tf', q: 'حدّد صحة العبارة النحوية التالية:', qEn: 'In the passive, the verb “be” changes with the tense, and the main verb is always in the past participle form.', options: ['True', 'False'], answer: 0, explain: 'صحيحة تمامًا — هذا هو قانون الباب الذي تُبنى عليه كل التحويلات.', marks: 4 },
    { id: 'u6e-g6', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'The report ___ by the secretary tomorrow.', options: ['will be written', 'will written', 'writes by her', 'is write tomorrow'], answer: 0, explain: 'مستقبل مجهول: will be + p.p. (written — التصريف الثالث الشاذ لـ write).', marks: 4 },
    { id: 'u6e-v1', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'Money that a bank pays you for keeping your savings with it is called ___.', options: ['interest', 'a ticket', 'a statement page', 'a pension book'], answer: 0, explain: 'interest هي الفائدة — أجر مالك عند المصرف.', marks: 4 },
    { id: 'u6e-v2', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'Small parts of a company that people buy as an investment are called ___.', options: ['shares', 'statements', 'shelves', 'signals'], answer: 0, explain: 'shares أسهم — حصص ملكية في الشركات، أول طريقتَي الاستثمار في الدرس.', marks: 4 },
    { id: 'u6e-v3', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'A list of all the money going into and out of your bank account is a bank ___.', options: ['statement', 'pension', 'profit', 'salary slip only'], answer: 0, explain: 'statement كشف الحساب — وثيقة رسالة الشكوى الشهيرة في هذه الوحدة.', marks: 4 },
    { id: 'u6e-v4', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'When you stop working because of old age, you ___.', options: ['retire', 'withdraw a book', 'deposit', 'bounce back'], answer: 0, explain: 'retire يتقاعد — ولحظتها تبدأ فائدة خطة التقاعد.', marks: 4 },
  ],
};
