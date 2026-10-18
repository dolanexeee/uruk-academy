/* Uruk Academy — Unit One of «English for Iraq», 6th Preparatory.
   Content derived from the official textbook (Iraqi Ministry of Education),
   rewritten as original interactive lessons in our own words.
   See CONTENT.md and the in-app «عن المحتوى والمصادر» note. */

import type { Unit, VocabWord } from './types';

const vocab: VocabWord[] = [
  { id: 'diabetes', word: 'diabetes', pos: 'اسم', meaning: 'داء السكّري — مرض مزمن يرتفع فيه سكّر الدم أو يضطرب', example: 'Diabetes is a condition that needs daily care and attention.', exampleAr: 'السكّري حالة صحية تحتاج إلى عناية ومتابعة يومية.' },
  { id: 'diabetic', word: 'diabetic', pos: 'صفة / اسم', meaning: 'مصاب بالسكّري؛ مريض سكّري', example: 'She is diabetic, so she always carries her medicine with her.', exampleAr: 'هي مصابة بالسكّري، لذلك تحمل دواءها معها دائمًا.' },
  { id: 'insulin', word: 'insulin', pos: 'اسم', meaning: 'الإنسولين — هرمون ينظّم مستوى السكّر في الدم', example: 'Insulin helps the body control the level of sugar in the blood.', exampleAr: 'يساعد الإنسولين الجسم على ضبط مستوى السكّر في الدم.' },
  { id: 'injection', word: 'injection', pos: 'اسم', meaning: 'حُقنة', example: 'He takes an injection of insulin every morning.', exampleAr: 'يأخذ حقنة إنسولين كل صباح.' },
  { id: 'unconscious', word: 'unconscious', pos: 'صفة', meaning: 'فاقد للوعي', example: 'They found the old man unconscious on the floor.', exampleAr: 'وجدوا الرجل المسنّ فاقدًا للوعي على الأرض.' },
  { id: 'paramedic', word: 'paramedic', pos: 'اسم', meaning: 'مسعف — مختصّ بالإسعافات الأولية يصل مع سيارة الإسعاف', example: 'The paramedic checked her breathing at once.', exampleAr: 'فحص المسعف تنفّسها على الفور.' },
  { id: 'emergency', word: 'emergency', pos: 'اسم', meaning: 'حالة طارئة؛ قسم الطوارئ', example: 'In an emergency, stay calm and call for help.', exampleAr: 'عند حدوث طارئ، حافظ على هدوئك واطلب المساعدة.' },
  { id: 'operator', word: 'operator', pos: 'اسم', meaning: 'موظّف الاستقبال الذي يتلقّى مكالمات الطوارئ', example: 'The emergency operator asked the boy for his address.', exampleAr: 'سألت موظّفة الطوارئ الولدَ عن عنوانه.' },
  { id: 'ambulance', word: 'ambulance', pos: 'اسم', meaning: 'سيارة إسعاف', example: 'The ambulance arrived at the house within ten minutes.', exampleAr: 'وصلت سيارة الإسعاف إلى البيت خلال عشر دقائق.' },
  { id: 'proud', word: 'proud', pos: 'صفة', meaning: 'فخور', example: 'Her parents are proud of her success at school.', exampleAr: 'والداها فخوران بنجاحها في المدرسة.' },
  { id: 'recover', word: 'recover', pos: 'فعل', meaning: 'يتعافى؛ يستردّ صحّته', example: 'He is recovering well after the treatment.', exampleAr: 'إنه يتعافى بشكل جيد بعد العلاج.' },
  { id: 'bracelet', word: 'bracelet', pos: 'اسم', meaning: 'سوار — وهنا: سوار طبي يعرّف بحالة حامله الصحية', example: 'Her bracelet tells doctors that she is diabetic.', exampleAr: 'يخبر سوارها الأطباء بأنها مصابة بالسكّري.' },
  { id: 'condition', word: 'condition', pos: 'اسم', meaning: 'حالة صحية؛ مرض مزمن', example: 'Diabetes is a serious condition, but it can be controlled.', exampleAr: 'السكّري حالة صحية خطيرة، لكن يمكن السيطرة عليها.' },
  { id: 'blood-sugar', word: 'blood sugar', pos: 'اسم', meaning: 'سكّر الدم — مستوى الغلوكوز في الدم', example: 'Low blood sugar can make a person feel weak and dizzy.', exampleAr: 'انخفاض سكّر الدم قد يجعل الشخص يشعر بالضعف والدوخة.' },
  { id: 'dose', word: 'dose', pos: 'اسم', meaning: 'جرعة دواء', example: 'Never change your dose without asking a doctor.', exampleAr: 'لا تغيّر جرعتك أبدًا دون سؤال الطبيب.' },
  { id: 'faint', word: 'faint', pos: 'فعل', meaning: 'يُغمى عليه؛ يفقد الوعي لحظيًا', example: 'She felt dizzy and nearly fainted in the heat.', exampleAr: 'شعرت بالدوخة وكادت يُغمى عليها من الحرّ.' },
  { id: 'treatment', word: 'treatment', pos: 'اسم', meaning: 'علاج؛ معالجة', example: 'Quick treatment at the right moment saved her life.', exampleAr: 'العلاج السريع في اللحظة المناسبة أنقذ حياتها.' },
  { id: 'wake-up', word: 'wake up', pos: 'فعل مركّب', meaning: 'يستيقظ', example: 'I usually wake up early on school days.', exampleAr: 'أستيقظ عادةً باكرًا في أيام المدرسة.' },
  { id: 'reach', word: 'reach', pos: 'فعل', meaning: 'يصل إلى؛ يتناول شيئًا بيده', example: 'He stood on a chair to reach the phone.', exampleAr: 'وقف على كرسي ليصل إلى الهاتف.' },
  { id: 'alone', word: 'alone', pos: 'صفة / حال', meaning: 'وحده؛ بمفرده', example: 'The boy was alone at home that morning.', exampleAr: 'كان الولد وحده في البيت ذلك الصباح.' },
  { id: 'neighbour', word: 'neighbour', pos: 'اسم', meaning: 'جار', example: 'Our kind neighbour helped us carry the heavy bags.', exampleAr: 'ساعدنا جارنا الطيب في حمل الحقائب الثقيلة.' },
  { id: 'immediately', word: 'immediately', pos: 'حال', meaning: 'فورًا؛ على الفور', example: 'When she fell down, we called for help immediately.', exampleAr: 'عندما سقطت، طلبنا المساعدة فورًا.' },
];

export const unit1: Unit = {
  id: 'en6-u1',
  number: 1,
  titleAr: 'الوحدة الأولى',
  titleEn: "I'll always be proud of him",
  theme: 'الصحة والطوارئ — قصة إنسانية عن ولد أنقذ والدته المريضة بالسكّري، وأزمنة السرد في الماضي.',
  status: 'live',
  kind: 'content',
  vocab,
  examMinutes: 20,
  lessons: [
    {
      id: 'u1-l1',
      title: 'القراءة — سأظلّ فخورةً بك دائمًا',
      kind: 'reading',
      minutes: 15,
      intro: 'درس القراءة في الوحدة الأولى (الدرس العاشر من الكتاب) قصة إنسانية قصيرة تأتي منها أسئلة الاستيعاب في الامتحان الوزاري كل عام تقريبًا. نقرأها هنا بملخّص من صياغتنا ونستخرج الحقائق التي تتحوّل إلى أسئلة.',
      sections: [
        {
          type: 'explain',
          title: 'قبل أن تقرأ',
          paragraphs: [
            'بطل القصة ولد اسمه مصطفى يعيش مع والدته، ووالدته مريضة بداء السكّري. مرضى السكّري يحتاجون إلى أخذ حقن الإنسولين كل يوم، لأن الإنسولين هو الهرمون الذي ينظّم مستوى السكّر في الدم، وأجسامهم لا تنتجه بكميات كافية. تذكّر هذه المعلومة الطبية البسيطة، فهي مفتاح فهم كل ما سيحدث في القصة.',
          ],
        },
        {
          type: 'reading',
          title: 'القصة بملخّصنا',
          paragraphs: [
            'في أحد الصباحات استيقظ مصطفى من نومه، وكان أول ما فعله أن توجّه إلى غرفة والدته كعادته. لكنه وجدها هناك فاقدةً للوعي داخل البيت، لا تتحرك ولا تستجيب.',
            'حاول مصطفى مساعدتها بنفسه أولًا: ناداها وحاول إيقاظها، لكن محاولاته لم تنفع وبقيت الأم فاقدة للوعي. كان سبب فقدانها الوعي انخفاضَ مستوى السكّر في دمها بسبب مرض السكّري الذي تعاني منه.',
            'حين أدرك الولد أنه لا يستطيع مساعدتها وحده، قرر الاتصال بخدمات الطوارئ. ولأن الهاتف لم يكن في متناول يده، اضطر إلى الوقوف على كرسي ليصل إليه. تحدّث إلى موظّفة الطوارئ وأخبرها أن والدته مريضة بالسكّري وأنها فاقدة للوعي، وأعطاها المعلومات اللازمة عن البيت.',
            'وصل المسعفون بسرعة إلى البيت. وقد عرفوا فورًا أن الأم مريضة بالسكّري من السوار الطبي الذي كانت ترتديه، وهو سوار يعرّف بالحالة الصحية لحامله. قدّم المسعفون العلاج اللازم لها في المكان حتى بدأت تستعيد وعيها وتتعافى.',
            'وفي نهاية القصة تخبر الأم ابنها أنها ستظلّ فخورةً به دائمًا — ومن هنا جاء عنوان الدرس — لأنه لم يرتبك، بل تصرّف بهدوء وشجاعة في لحظة خطرة، وكان تصرّفه سببًا في إنقاذ حياتها.',
          ],
          examples: [
            { en: "I'll always be proud of him.", ar: 'عنوان الدرس: كلمات الأم عن ابنها — «سأظلّ فخورةً به دائمًا».' },
            { en: 'Diabetics take insulin injections every day.', ar: 'مرضى السكّري يأخذون حقن الإنسولين كل يوم.' },
            { en: 'He had to stand on a chair to reach the phone.', ar: 'اضطر إلى الوقوف على كرسي ليصل إلى الهاتف.' },
            { en: 'The paramedics knew she was diabetic because of her bracelet.', ar: 'عرف المسعفون أنها مريضة بالسكّري بسبب سوارها الطبي.' },
          ],
        },
        {
          type: 'explain',
          title: 'حقائق يحبّها الامتحان الوزاري',
          paragraphs: ['أسئلة الاستيعاب في نماذج الوزارة تدور حول حقائق محددة من هذا الدرس. راجع هذه القائمة وتأكد أنك تستطيع الإجابة عن كل نقطة فيها:'],
          bullets: [
            'أول ما فعله مصطفى حين استيقظ: توجّه إلى غرفة والدته.',
            'وجد والدته فاقدة للوعي داخل البيت.',
            'حاول إيقاظها ومساعدتها بنفسه أولًا، فلم تستجب.',
            'سبب فقدان الوعي: انخفاض سكّر الدم بسبب مرض السكّري.',
            'مرضى السكّري يأخذون حقن الإنسولين يوميًا لتنظيم سكّر الدم.',
            'وقف على كرسي ليصل إلى الهاتف ويتصل بالطوارئ.',
            'أخبر موظّفة الطوارئ أن أمّه مريضة بالسكّري وفاقدة للوعي.',
            'عرف المسعفون أنها مريضة بالسكّري من سوارها الطبي.',
            'عالجها المسعفون حتى بدأت تتعافى.',
            'الأم ستظل فخورة به لأنه تصرّف بشجاعة وهدوء وأنقذها.',
          ],
          callout: 'نصيحة وزارية: أجب بجمل كاملة قصيرة من معلومات القصة نفسها، ولا تضف معلومات من عندك.',
        },
      ],
    },
    {
      id: 'u1-l2',
      title: 'القواعد — أزمنة السرد: الماضي البسيط والماضي المستمر',
      kind: 'grammar',
      minutes: 20,
      intro: 'العمود الفقري لقواعد هذه الوحدة زمنان يعملان معًا في كل قصة: الماضي المستمر يرسم المشهد الخلفي، والماضي البسيط يحرّك الأحداث. إتقان الفرق بينهما من أكثر ما يُطلب في أسئلة القواعد الوزارية.',
      sections: [
        {
          type: 'grammar',
          title: 'أولًا: الماضي البسيط Past Simple',
          paragraphs: [
            'نستخدمه للحديث عن حدث بدأ وانتهى في الماضي، ولسرد سلسلة أحداث متتابعة في قصة: استيقظ، ثم ذهب، ثم وجد… كل حدث يكتمل ثم يبدأ الذي بعده.',
          ],
          table: {
            head: ['الضمير', 'التكوين', 'مثال'],
            rows: [
              ['I / he / she / it', 'verb + -ed (أو صيغة شاذة)', 'He phoned the emergency operator.'],
              ['you / we / they', 'verb + -ed (أو صيغة شاذة)', 'The paramedics arrived quickly.'],
              ['النفي', "didn't + verb (المصدر)", "She didn't answer him."],
              ['السؤال', 'Did + subject + verb?', 'Did he stand on a chair?'],
            ],
            ltrCols: [1, 2],
          },
          bullets: [
            'أفعال منتظمة: phoned, arrived, tried, stopped.',
            'أفعال شاذة يجب حفظها: wake → woke، find → found، stand → stood، tell → told، take → took، fall → fell.',
          ],
        },
        {
          type: 'grammar',
          title: 'ثانيًا: الماضي المستمر Past Continuous',
          paragraphs: [
            'نستخدمه للحديث عن حدث كان جاريًا ومستمرًا في لحظة معينة من الماضي، غالبًا حين قاطعه حدث آخر أقصر منه. هو «خلفية المشهد» في القصة.',
          ],
          table: {
            head: ['الضمير', 'التكوين', 'مثال'],
            rows: [
              ['I / he / she / it', 'was + verb-ing', 'She was reading a book.'],
              ['you / we / they', 'were + verb-ing', 'They were waiting outside.'],
              ['النفي', "wasn't / weren't + verb-ing", "He wasn't sleeping at that time."],
              ['السؤال', 'Was / Were + subject + verb-ing?', 'What was he doing?'],
            ],
            ltrCols: [1, 2],
          },
        },
        {
          type: 'grammar',
          title: 'ثالثًا: الزمنان معًا — when و while',
          paragraphs: [
            'الصيغة الذهبية للسرد: حدث طويل جارٍ (ماضٍ مستمر) يقطعه حدث قصير مكتمل (ماضٍ بسيط). نربطهما بـ when أو while.',
          ],
          bullets: [
            'when + ماضٍ بسيط: يأتي بعدها الحدث القصير القاطِع — rang the phone while he was talking.',
            'while + ماضٍ مستمر: يأتي بعدها الحدث الطويل الجاري.',
            'يمكن تقديم أي جزء على الآخر: While I was sleeping, the phone rang. = The phone rang while I was sleeping.',
          ],
          examples: [
            { en: 'What was he doing when the phone rang?', ar: 'سؤال وزاري نموذجي: الحدث القصير (رنّ الهاتف) يقاطع حدثًا جاريًا.' },
            { en: 'Suha fell asleep while she was reading.', ar: 'نامت سهى (ماضٍ بسيط) أثناء قراءتها (ماضٍ مستمر بعد while).' },
            { en: 'While Mustafa was talking to the operator, the paramedics arrived.', ar: 'من أجواء قصتنا: حديثه كان جاريًا حين وصل المسعفون.' },
            { en: 'The ambulance came while he was standing on the chair.', ar: 'وصلت سيارة الإسعاف أثناء وقوفه على الكرسي.' },
          ],
          callout: 'خطأ شائع: لا تستخدم الماضي المستمر لسلسلة أحداث قصيرة متتابعة؛ المتتابعة المكتملة مكانها الماضي البسيط دائمًا.',
        },
      ],
    },
    {
      id: 'u1-l3',
      title: 'مفردات الوحدة — الصحة والطوارئ',
      kind: 'vocab',
      minutes: 10,
      intro: 'كلمات هذه الوحدة تدور في حقلين: جسم الإنسان ومرض السكّري، وعالم الإسعاف والطوارئ. حفظها بمعانيها العربية وأمثلتها أسرع طريق لدرجات أسئلة المفردات، وهي نفسها كلمات بطاقات المراجعة في هذا التطبيق.',
      sections: [
        {
          type: 'vocab',
          title: 'كلمات الوحدة الأولى',
          paragraphs: [
            'اقرأ كل كلمة بمعناها ومثالها، وحاول أن تربطها بمشهد من قصة الدرس: الكلمة المرتبطة بصورة ذهنية تبقى في الذاكرة أطول. بعد هذا الدرس ستجد الكلمات نفسها في بطاقات المراجعة (نظام لايتنر) لتثبيتها على دفعات.',
          ],
          vocabIds: [
            'diabetes', 'diabetic', 'insulin', 'injection', 'unconscious', 'paramedic',
            'emergency', 'operator', 'ambulance', 'proud', 'recover', 'bracelet',
            'condition', 'blood-sugar', 'dose', 'faint', 'treatment', 'wake-up',
            'reach', 'alone', 'neighbour', 'immediately',
          ],
        },
      ],
    },
    {
      id: 'u1-l4',
      title: 'شرح — كيف تتصرّف في الطوارئ؟ وخلاصة الوحدة',
      kind: 'explain',
      minutes: 10,
      intro: 'درسنا ليس قصة للامتحان فقط؛ إنه درس حياة. هنا نلخّص خطوات التصرّف الصحيح التي قام بها بطل القصة، بعبارات إنجليزية بسيطة قد تحتاجها يومًا ما فعلًا، ثم نختم بخلاصة الوحدة.',
      sections: [
        {
          type: 'explain',
          title: 'خطوات أنقذت حياة',
          bullets: [
            'حافظ على هدوئك: الذعر يعطّل التفكير، والهدوء أول خطوة صحيحة.',
            'حاول إيقاظ المريض والتأكد من استجابته أولًا، كما فعل مصطفى مع والدته.',
            'إذا لم يستجب، لا تضيّع الوقت: اتصل بخدمات الطوارئ فورًا.',
            'أعطِ المشغّل معلومات واضحة: اسمك، عنوانك، وحالة المريض الصحية المعروفة.',
            'اذكر الأمراض المزمنة والأدوية: كلمة «diabetic» واحدة اختصرت على المسعفين وقتًا ثمينًا.',
            'ابقَ مع المريض وافتح الباب للمسعفين، ولا تحرّكه من مكانه إلا إذا كان في خطر مباشر.',
          ],
          examples: [
            { en: 'My mother is diabetic and she is unconscious.', ar: 'أهم جملة قالها مصطفى للمشغّلة: أمي مريضة بالسكّري وهي فاقدة للوعي.' },
            { en: 'We need an ambulance, please. Please hurry.', ar: 'نحتاج سيارة إسعاف من فضلك، أسرعوا رجاءً.' },
            { en: 'Please stay calm and wait for the paramedics.', ar: 'حافظ على هدوئك وانتظر المسعفين — ما يُقال غالبًا للمتصل.' },
          ],
        },
        {
          type: 'explain',
          title: 'خلاصة الوحدة الأولى',
          paragraphs: [
            'بهذه الوحدة تكون قد غطّيت ثلاث ركائز يبني عليها الامتحان الوزاري أسئلته في هذا الجزء من الكتاب: فهمُ قصة «سأظلّ فخورةً بك دائمًا» وحقائقها العشر، والتمييز بين الماضي البسيط والماضي المستمر ودمجهما بـ when وwhile، ومفردات الصحة والطوارئ الاثنتان والعشرون.',
          ],
          bullets: [
            'اختبر نفسك الآن في «اختبار الوحدة» لتثبيت المعلومات مع شرح لكل إجابة.',
            'راجع الكلمات في «بطاقات المراجعة»؛ النظام يذكّرك بكل كلمة في وقتها المناسب.',
            'حين تثق بنفسك، ادخل «وضع الامتحان الوزاري»: مؤقّت، ودرجات، وتصحيح كامل في النهاية — كما في القاعة الحقيقية.',
          ],
        },
      ],
    },
  ],
  quiz: [
    { id: 'q-r1', skill: 'reading', type: 'mcq', q: 'ما أول ما فعله مصطفى حين استيقظ في الصباح؟', options: ['اتصل بخدمات الطوارئ فورًا', 'توجّه إلى غرفة والدته', 'خرج إلى بيت الجيران', 'وقف على الكرسي مباشرة'], answer: 1, explain: 'حسب القصة، توجّه مصطفى أولًا إلى غرفة والدته كعادته، فوجدها فاقدة للوعي، وبدأت الأحداث من هناك.', marks: 1 },
    { id: 'q-r2', skill: 'reading', type: 'mcq', q: 'لماذا كانت والدة مصطفى فاقدة للوعي؟', options: ['بسبب إصابة في الرأس', 'لأنها لم تنم طوال الليل', 'بسبب انخفاض مستوى السكّر في دمها نتيجة مرض السكّري', 'بسبب ارتفاع حرارة جسمها'], answer: 2, explain: 'الأم مريضة بالسكّري، وانخفاض سكّر الدم عند مرضى السكّري قد يسبّب فقدان الوعي — وهذه حقيقة مركزية في الدرس.', marks: 1 },
    { id: 'q-r3', skill: 'reading', type: 'tf', q: 'عرف المسعفون أن الأم مريضة بالسكّري من السوار الطبي الذي كانت ترتديه.', options: ['صح', 'خطأ'], answer: 0, explain: 'صحيح. السوار الطبي يعرّف بالحالة الصحية لحامله، ومنه عرف المسعفون فورًا أنها مريضة بالسكّري.', marks: 1 },
    { id: 'q-r4', skill: 'reading', type: 'mcq', q: 'لماذا اضطر مصطفى إلى الوقوف على كرسي؟', options: ['ليرى سيارة الإسعاف من النافذة', 'ليصل إلى الهاتف ويتصل بالطوارئ', 'ليفتح باب البيت للمسعفين', 'ليأخذ دواء والدته من الرف'], answer: 1, explain: 'الهاتف لم يكن في متناول يده، فوقف على كرسي ليصل إليه ويطلب المساعدة — من أشهر حقائق الدرس في أسئلة الوزارة.', marks: 1 },
    { id: 'q-r5', skill: 'reading', type: 'mcq', q: 'ماذا أخبر مصطفى موظّفةَ الطوارئ حين اتصل بها؟', options: ['أن والدته خرجت من البيت', 'أن والدته مريضة بالسكّري وفاقدة للوعي', 'أن البيت تعرّض لحريق', 'أن سيارة الإسعاف تأخرت'], answer: 1, explain: 'أخبرها بالحالة الصحية الحاسمة: أمّه مريضة بالسكّري وفاقدة للوعي، فعرفت الجهة المختصة خطورة الموقف وسرعة التصرّف المطلوبة.', marks: 1 },
    { id: 'q-g1', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة لإكمال الجملة:', qEn: 'While I ___ dinner, the phone rang.', options: ['cooked at once', 'was cooking', 'am cooking', 'cook every day'], answer: 1, explain: 'الحدث الطويل الجاري (تحضير العشاء) يأتي بالماضي المستمر بعد while، والحدث القصير القاطع (رنين الهاتف) بالماضي البسيط.', marks: 1 },
    { id: 'q-g2', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة لإكمال الجملة:', qEn: 'Suha fell asleep while she ___.', options: ['is reading', 'was reading', 'reads now', 'has read yesterday'], answer: 1, explain: 'جملة من نماذج الوزارة: نامت سهى (ماضٍ بسيط) أثناء حدث جارٍ أطول (القراءة) فيأتي بالماضي المستمر بعد while.', marks: 1 },
    { id: 'q-g3', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة لإكمال السؤال:', qEn: 'What ___ at eight o’clock last night?', options: ['were you doing', 'do you do', 'you were doing', 'are you doing'], answer: 0, explain: 'السؤال عن نشاط كان جارِيًا في لحظة محددة من الماضي يكون بالماضي المستمر: What were you doing…?', marks: 1 },
    { id: 'q-g4', skill: 'grammar', type: 'tf', q: 'نستخدم الماضي المستمر لسرد سلسلة أحداث قصيرة متتابعة اكتملت في الماضي.', options: ['صح', 'خطأ'], answer: 1, explain: 'خطأ. الأحداث القصيرة المتتابعة والمكتملة تُروى بالماضي البسيط؛ الماضي المستمر مخصّص للحدث الجاري الذي يشكّل خلفية المشهد.', marks: 1 },
    { id: 'q-g5', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة لإكمال الجملة:', qEn: 'The paramedics ___ while Mustafa was opening the door.', options: ['arrive', 'arriving now', 'arrived', 'was arrive'], answer: 2, explain: 'وصول المسعفين حدث قصير مكتمل قاطع للحدث الجاري (فتح الباب)، فيأتي بالماضي البسيط: arrived.', marks: 1 },
    { id: 'q-v1', skill: 'vocab', type: 'mcq', q: 'ما معنى كلمة paramedic؟', options: ['طبيب جرّاح', 'مسعف يقدّم الإسعافات الأولية', 'سائق سيارة أجرة', 'ممرّض في عيادة أسنان'], answer: 1, explain: 'المسعف paramedic هو المختص الذي يصل مع سيارة الإسعاف ويقدّم العلاج الأولي في المكان.', marks: 1 },
    { id: 'q-v2', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة لإكمال الجملة:', qEn: 'A person who suffers from diabetes is called a ___.', options: ['operator', 'neighbour', 'diabetic', 'paramedic'], answer: 2, explain: 'diabetic تعني مصابًا بالسكّري، وهي من كلمات الدرس الأساسية وتصلح صفةً واسمًا.', marks: 1 },
    { id: 'q-v3', skill: 'vocab', type: 'tf', q: 'تُستخدم حقن الإنسولين لتنظيم مستوى السكّر في دم مرضى السكّري.', options: ['صح', 'خطأ'], answer: 0, explain: 'صحيح. الإنسولين هو الهرمون الذي يضبط سكّر الدم، ولهذا يأخذه مرضى السكّري يوميًا.', marks: 1 },
    { id: 'q-v4', skill: 'vocab', type: 'mcq', q: 'ما الترجمة الإنجليزية الصحيحة لعبارة «فاقد للوعي»؟', options: ['proud', 'unconscious', 'alone', 'immediately'], answer: 1, explain: 'unconscious تعني فاقدًا للوعي — وصف حالة الأم حين وجدها ابنها، وهي كلمة مفتاحية في الدرس كله.', marks: 1 },
  ],
  exam: [
    { id: 'e-r1', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'Where did Mustafa find his mother?', options: ['In the garden, talking to a neighbour', 'At home, unconscious', 'At the hospital, recovering', 'In the kitchen, cooking breakfast'], answer: 1, explain: 'وجدها داخل البيت فاقدة للوعي — نقطة انطلاق أحداث القصة كلها.', marks: 4 },
    { id: 'e-r2', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: "Why does Mustafa's mother take insulin injections every day?", options: ['To help her sleep at night', 'To cure a bad headache', 'To control the level of sugar in her blood', 'Because the paramedics told her to'], answer: 2, explain: 'الإنسولين ينظّم سكّر الدم عند مرضى السكّري، لذلك تؤخذ حقنه يوميًا.', marks: 4 },
    { id: 'e-r3', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'How did the paramedics know that his mother was diabetic?', options: ['Mustafa had phoned them the day before', 'From the medical bracelet she was wearing', 'They found a letter on the table', 'A neighbour told them at the door'], answer: 1, explain: 'السوار الطبي الذي كانت ترتديه عرّف المسعفين بحالتها فور وصولهم.', marks: 4 },
    { id: 'e-r4', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'What did Mustafa tell the emergency operator?', options: ['That his mother had gone out alone', 'That his mother was diabetic and unconscious', 'That he needed a doctor for himself', 'That the ambulance was late'], answer: 1, explain: 'أخبرها أن أمّه مريضة بالسكّري وفاقدة للوعي، وهي المعلومة الحاسمة التي حدّدت سرعة الاستجابة ونوعها.', marks: 4 },
    { id: 'e-r5', skill: 'reading', type: 'mcq', q: 'أكمل الجملة مستخدمًا معلومات الدرس:', qEn: 'Mustafa had to stand on a chair in order to ___.', options: ['open the front door', 'see the ambulance coming', 'reach the phone', 'take the medicine box'], answer: 2, explain: 'وقف على الكرسي ليصل إلى الهاتف ويتصل بخدمات الطوارئ.', marks: 4 },
    { id: 'e-g1', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'When the teacher entered the classroom, the students ___.', options: ['were talking', 'talk now', 'talks', 'talking yesterday'], answer: 0, explain: 'حديث الطلاب كان جاريًا حين دخل المعلّم، فالماضي المستمر هو الصحيح: were talking.', marks: 4 },
    { id: 'e-g2', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'I hurt my leg while I ___ football with my friends.', options: ['am playing', 'was playing', 'play every week', 'plays'], answer: 1, explain: 'اللعب حدث طويل جارٍ قاطعته الإصابة، فيأتي بالماضي المستمر بعد while.', marks: 4 },
    { id: 'e-g3', skill: 'grammar', type: 'mcq', q: 'اختر الجملة الصحيحة نحويًا:', options: ['While she was cooking, he arrived.', 'While she cooks now, he arrived.', 'While she cooking, he arrived.', 'While she was cooking, he arrives yesterday.'], answer: 0, explain: 'الجملة الوحيدة المنسجمة زمنيًا: حدث جارٍ بالماضي المستمر قاطعه حدث مكتمل بالماضي البسيط.', marks: 4 },
    { id: 'e-g4', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'What was he doing when the phone rang? — He ___ to the operator.', options: ['talks', 'talk now', 'was talking', 'is talking yesterday'], answer: 2, explain: 'السؤال نفسه بالماضي المستمر، فتكون الإجابة بالزمن نفسه: was talking.', marks: 4 },
    { id: 'e-g5', skill: 'grammar', type: 'tf', q: 'حدّد صحة العبارة النحوية التالية:', qEn: 'We use the Past Continuous to describe a short, completed action in a story.', options: ['True', 'False'], answer: 1, explain: 'العبارة خاطئة: الحدث القصير المكتمل مكانه الماضي البسيط؛ الماضي المستمر للحدث الجاري الخلفي.', marks: 4 },
    { id: 'e-g6', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'She ___ asleep while she was reading her book.', options: ['falling', 'was fall', 'fell', 'falls'], answer: 2, explain: 'النوم حدث قصير مكتمل قاطع القراءة الجارية، فيأتي بالماضي البسيط من الفعل الشاذ fall → fell.', marks: 4 },
    { id: 'e-v1', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'A ___ is a trained person who gives emergency medical help at the scene.', options: ['neighbour', 'operator', 'paramedic', 'diabetic'], answer: 2, explain: 'المسعف paramedic هو المدرّب على تقديم المساعدة الطبية الطارئة في مكان الحادث.', marks: 4 },
    { id: 'e-v2', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'The opposite of “conscious” is “___”.', options: ['proud', 'unconscious', 'immediate', 'alone'], answer: 1, explain: 'unconscious هي عكس conscious وتعني فاقد الوعي — وصف الأم في القصة.', marks: 4 },
    { id: 'e-v3', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'Diabetics take ___ injections to control their blood sugar.', options: ['insulin', 'bracelet', 'emergency', 'dose of water'], answer: 0, explain: 'حقن الإنسولين insulin هي العلاج اليومي لتنظيم سكّر الدم عند مرضى السكّري.', marks: 4 },
    { id: 'e-v4', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'His mother was ___ of him because he acted calmly and bravely.', options: ['unconscious', 'alone', 'afraid', 'proud'], answer: 3, explain: 'proud تعني فخور — ومنها عنوان الدرس كله: ستظلّ فخورةً به دائمًا.', marks: 4 },
  ],
};
