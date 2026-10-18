/* Uruk Academy — Unit Three of «English for Iraq», 6th Preparatory.
   Reading: Lesson 10 «Conference Interpreter» — Samira's story; facts
   verified against the Ministry of Education's published sample
   questions for this lesson (all eight). Grammar: conditional
   sentences — the وزاري grammar the Ministry's samples drill with
   type-naming — plus cleft sentences, the unit's Activity Book strand
   per Iraqi teacher guides. All text our own writing. */

import type { Unit, VocabWord } from './types';

const vocab: VocabWord[] = [
  { id: 'u3-interpreter', word: 'interpreter', pos: 'اسم', meaning: 'مترجم فوري — ينقل الكلام من لغة إلى أخرى أثناء الحديث', example: 'Samira works as a conference interpreter.', exampleAr: 'تعمل سميرة مترجمة فورية للمؤتمرات.' },
  { id: 'u3-conference', word: 'conference', pos: 'اسم', meaning: 'مؤتمر — اجتماع رسمي كبير للنقاش', example: 'Interpreters work at international conferences.', exampleAr: 'يعمل المترجمون الفوريون في المؤتمرات الدولية.' },
  { id: 'u3-freelance', word: 'freelance', pos: 'صفة', meaning: 'يعمل لحسابه الخاص، لا لصالح شركة واحدة', example: 'She works freelance, so she chooses her own jobs.', exampleAr: 'تعمل لحسابها الخاص، لذا تختار أعمالها بنفسها.' },
  { id: 'u3-booth', word: 'booth', pos: 'اسم', meaning: 'كابينة الترجمة — غرفة زجاجية صغيرة يجلس فيها المترجم الفوري', example: 'Two interpreters share the same booth.', exampleAr: 'يشارك مترجمان الكابينة نفسها.' },
  { id: 'u3-simultaneous', word: 'simultaneous', pos: 'صفة', meaning: 'متزامن — يحدث في الوقت نفسه', example: 'Conference interpretation is simultaneous: you translate while the speaker talks.', exampleAr: 'الترجمة في المؤتمرات متزامنة: تترجم أثناء كلام المتحدث.' },
  { id: 'u3-prepare', word: 'prepare', pos: 'فعل', meaning: 'يستعدّ ويحضّر قبل الحدث', example: 'Samira read about oil to prepare for the conference.', exampleAr: 'قرأت سميرة عن النفط استعدادًا للمؤتمر.' },
  { id: 'u3-well-informed', word: 'well-informed', pos: 'صفة', meaning: 'واسع الاطّلاع — يعرف ما يجري حوله', example: 'A good interpreter must be well-informed.', exampleAr: 'يجب أن يكون المترجم الجيّد واسع الاطّلاع.' },
  { id: 'u3-follow-news', word: 'follow the news', pos: 'عبارة فعلية', meaning: 'يتابع الأخبار باستمرار', example: 'Interpreters read newspapers and follow the news.', exampleAr: 'يقرأ المترجمون الصحف ويتابعون الأخبار.' },
  { id: 'u3-subject', word: 'subject', pos: 'اسم', meaning: 'موضوع — ما يدور حوله الحديث أو المؤتمر', example: 'She prepared by reading about the subject of the conference.', exampleAr: 'استعدّت بالقراءة عن موضوع المؤتمر.' },
  { id: 'u3-take-turns', word: 'take turns', pos: 'عبارة فعلية', meaning: 'يتناوبون — يعمل كلٌّ بدوره', example: 'The two interpreters take turns in the booth.', exampleAr: 'يتناوب المترجمان العمل في الكابينة.' },
  { id: 'u3-waste-time', word: 'waste time', pos: 'عبارة فعلية', meaning: 'يضيّع الوقت دون فائدة', example: 'An interpreter mustn’t waste time thinking.', exampleAr: 'يجب ألّا يضيّع المترجم الوقت في التفكير.' },
  { id: 'u3-quality', word: 'quality', pos: 'اسم', meaning: 'صفة أو ميزة شخصية (كسرعة البديهة)', example: 'Quick thinking is an important quality in an interpreter.', exampleAr: 'سرعة التفكير صفة مهمة في المترجم الفوري.' },
  { id: 'u3-experience', word: 'experience', pos: 'اسم', meaning: 'خبرة عملية متراكمة في العمل', example: 'An interpreter’s pay depends on experience and languages.', exampleAr: 'يعتمد أجر المترجم على الخبرة واللغات.' },
  { id: 'u3-depend-on', word: 'depend on', pos: 'عبارة فعلية', meaning: 'يعتمد على — يتحدد بشيء آخر', example: 'How much she earns depends on the number of languages she knows.', exampleAr: 'يعتمد ما تكسبه على عدد اللغات التي تعرفها.' },
  { id: 'u3-employer', word: 'employer', pos: 'اسم', meaning: 'صاحب العمل — من يوظّف الآخرين', example: 'A freelance interpreter has no single employer.', exampleAr: 'المترجم المستقل ليس له صاحب عمل واحد.' },
  { id: 'u3-concentrate', word: 'concentrate', pos: 'فعل', meaning: 'يركّز انتباهه كاملًا على شيء', example: 'You must concentrate completely in the booth.', exampleAr: 'يجب أن تركّز كليًا داخل الكابينة.' },
  { id: 'u3-listen', word: 'listen carefully', pos: 'عبارة فعلية', meaning: 'يصغي بانتباه شديد', example: 'Interpreters listen carefully and translate at once.', exampleAr: 'يصغي المترجمون بانتباه ويترجمون فورًا.' },
  { id: 'u3-oil', word: 'oil', pos: 'اسم', meaning: 'النفط — الموضوع الذي قرأت عنه سميرة استعدادًا لمؤتمرها', example: 'Before the conference, Samira read about oil.', exampleAr: 'قبل المؤتمر، قرأت سميرة عن النفط.' },
  { id: 'u3-help', word: 'help each other', pos: 'عبارة فعلية', meaning: 'يساعد أحدهما الآخر', example: 'The interpreters in the booth help each other.', exampleAr: 'يساعد المترجمان في الكابينة أحدهما الآخر.' },
  { id: 'u3-skill', word: 'skill', pos: 'اسم', meaning: 'مهارة مكتسبة بالممارسة', example: 'Interpreting is a skill that needs years of practice.', exampleAr: 'الترجمة الفورية مهارة تحتاج سنوات من الممارسة.' },
];

export const unit3: Unit = {
  id: 'en6-u3',
  number: 3,
  titleAr: 'الوحدة الثالثة',
  titleEn: 'Conference Interpreter',
  theme: 'المترجمة الفورية للمؤتمرات — سميرة وحرفة الترجمة المتزامنة، والجمل الشرطية بأنواعها.',
  status: 'live',
  kind: 'content',
  vocab,
  examMinutes: 20,
  lessons: [
    {
      id: 'u3-l1',
      title: 'القراءة — مترجمة المؤتمرات',
      kind: 'reading',
      minutes: 15,
      intro: 'يحمل درس القراءة في الوحدة الثالثة (الدرس العاشر من الكتاب) عنوان «Conference Interpreter»: سميرة، مترجمة فورية تعمل في المؤتمرات الدولية. ثمانية أسئلة رسمية في نماذج الوزارة عن هذا الدرس — سنمرّ عليها كلها.',
      sections: [
        {
          type: 'explain',
          title: 'قبل أن تقرأ',
          paragraphs: [
            'الترجمة الفورية ليست ترجمة أوراق على مهل: المترجم يجلس في كابينة زجاجية، يسمع المتحدث بلغته، وينطق الترجمة في اللحظة نفسها تقريبًا. الدرس يرسم صورة كاملة لهذه الحرفة من خلال سميرة: كيف تعمل، وكيف تستعد، وبمَ تتميز، وكيف يُحسب أجرها.',
          ],
        },
        {
          type: 'reading',
          title: 'الدرس بملخّصنا',
          paragraphs: [
            'أول ما يلفت في سميرة طريقة عملها: إنها تعمل لحسابها الخاص (freelance) — أي أنها لا تعمل موظفة عند شركة أو جهة واحدة، بل تتعاقد مع من يحتاجها مؤتمرًا بعد مؤتمر. حرية أكبر، ومسؤولية أكبر في بناء سمعتها بنفسها.',
            'واستعدادها لمؤتمرها لا يبدأ في قاعة المؤتمر: المترجم الجيّد رجلُ (وامرأةُ) اطّلاع دائم — يقرأ الصحف ويتابع الأخبار ليبقى واسع الاطّلاع (well-informed)، وقبل أحد المؤتمرات قرأت سميرة عن النفط خصيصًا، لأن موضوع المؤتمر كان يدور حوله. فالمترجم لا يترجم كلمات، بل يترجم مواضيع يجب أن يفهمها أولًا.',
            'وفي الكابينة لا تجلس سميرة وحدها: يوجد مترجمان دائمًا في الكابينة الواحدة يتناوبان العمل ويساعد أحدهما الآخر، لأن الترجمة المتزامنة عمل مرهق للذهن لا يحتمل الاستمرار الطويل منفردًا.',
            'أما صفات المترجم الناجح فأهمها سرعة البديهة: المترجم الفوري ليس عنده وقت يضيّعه في التفكير — الترجمة تتم في اللحظة نفسها التي يتكلم فيها المتحدث. وأجر المترجم ليس ثابتًا: يعتمد على عاملين هما الخبرة وعدد اللغات التي يجيدها.',
          ],
          examples: [
            { en: 'Samira works freelance — she works for herself, not for one employer.', ar: 'سميرة تعمل لحسابها الخاص — تعريف الوزارة الدقيق لكلمة freelance.' },
            { en: 'To prepare for one conference, Samira read about oil.', ar: 'استعدادًا لأحد المؤتمرات قرأت سميرة عن النفط.' },
            { en: 'There are two interpreters in the booth; they take turns and help each other.', ar: 'في الكابينة مترجمان يتناوبان ويساعد أحدهما الآخر.' },
            { en: 'An interpreter’s pay depends on experience and the number of languages.', ar: 'أجر المترجم يعتمد على الخبرة وعدد اللغات.' },
          ],
        },
        {
          type: 'explain',
          title: 'حقائق يحبّها الامتحان الوزاري',
          paragraphs: ['المواضع الثمانية التي سألت عنها نماذج الوزارة في هذا الدرس:'],
          bullets: [
            '«freelance» تعني: يعمل لنفسه، لا لصالح صاحب عمل واحد.',
            'المترجمون يقرأون الصحف ويتابعون الأخبار ليكونوا واسعي الاطّلاع.',
            'قرأت سميرة عن النفط استعدادًا لأحد مؤتمراتها.',
            'في الكابينة مترجمان اثنان: يتناوبان العمل ويساعد أحدهما الآخر.',
            'من صفات المترجم الجيّد: الاطّلاع الواسع وسرعة التفكير والتركيز.',
            'المترجم لا يملك وقتًا يضيّعه في التفكير — الترجمة متزامنة مع الكلام.',
            'الأجر يعتمد على الخبرة وعدد اللغات.',
          ],
        },
      ],
    },
    {
      id: 'u3-l2',
      title: 'القواعد — الجمل الشرطية والجمل المؤكِّدة',
      kind: 'grammar',
      minutes: 20,
      intro: 'الجمل الشرطية بأنواعها الأربعة هي أكثر بنود القواعد تكرارًا في نماذج الوزارة — حتى إنها تطلب تسمية نوع الشرط صراحة. تليها الجمل المؤكِّدة (cleft sentences) وهي موضوع كتاب النشاط لهذه الوحدة.',
      sections: [
        {
          type: 'grammar',
          title: 'أولًا: أنواع الشرط الأربعة',
          table: {
            head: ['النوع', 'التكوين', 'المعنى', 'مثال'],
            rows: [
              ['الصفري Zero', 'If + مضارع بسيط، مضارع بسيط', 'حقيقة عامة دائمة', 'If you heat ice, it melts.'],
              ['الأول First', 'If + مضارع بسيط، will + مصدر', 'احتمال حقيقي في المستقبل', 'If Noor goes to the shop tomorrow, I won’t have to go.'],
              ['الثاني Second', 'If + ماضٍ بسيط، would + مصدر', 'تخيّل مخالف للواقع الحاضر', 'If you studied harder, you would pass the exam easily.'],
              ['الثالث Third', 'If + ماضٍ تام، would have + p.p.', 'ندم على ماضٍ لم يحدث', 'If you hadn’t renewed your passport, you wouldn’t have been allowed to travel.'],
            ],
            ltrCols: [3],
          },
          bullets: [
            'العلامة الأسرع للتمييز: انظر إلى جواب الشرط — will للأول، would للثاني، would have للثالث، والمضارع للحقائق (الصفري).',
            'في الثاني نستخدم were مع كل الضمائر في الكتابة الرسمية: If I were an interpreter, I would work at conferences.',
            'سؤال الوزارة الأشهر: «اختر الجملة بالمعنى نفسه وسمِّ نوع الشرط» — المعنى يكشف النوع: الماضي الذي لم يحدث = ثالث؛ الحاضر المتخيَّل = ثانٍ؛ المستقبل المحتمل = أول.',
          ],
        },
        {
          type: 'grammar',
          title: 'ثانيًا: الجمل المؤكِّدة Cleft Sentences',
          paragraphs: [
            'حين نريد تسليط الضوء على جزء بعينه من الجملة نعيد بناءها بصيغتين: What … is/was … (نقدّم ما يهمّنا بعد What)، أو It was … who/that … (نبدأ بـ It ونضع المهمّ في المنتصف). هذا باب كتاب النشاط في هذه الوحدة — تدريب على إعادة الصياغة بهدف التأكيد.',
          ],
          examples: [
            { en: 'Samira enjoys the preparation most. → What Samira enjoys most is the preparation.', ar: 'تقديم الأهم بعد What.' },
            { en: 'It was Samira who read about oil before the conference.', ar: 'It + was + محور التأكيد + who.' },
            { en: 'What an interpreter needs most is quick thinking.', ar: 'أكثر ما يحتاجه المترجم هو سرعة التفكير.' },
          ],
          callout: 'خدعة الامتحان في الشرط: «If my father knew I drove so fast…» ماضٍ بسيط بعد if وجواب بـ would — إذن تخيّل حاضر (ثانٍ)، وإن كان يتكلم عن قيادة حدثت فعلًا.',
        },
      ],
    },
    {
      id: 'u3-l3',
      title: 'مفردات الوحدة — عالم الترجمة والمؤتمرات',
      kind: 'vocab',
      minutes: 10,
      intro: 'عشرون كلمة من درس سميرة وعالم المؤتمرات — وهي نفسها كلمات بطاقات مراجعة الوحدة، تُحفظ بصيغة لايتنر حتى تثبت.',
      sections: [
        {
          type: 'vocab',
          title: 'كلمات الوحدة الثالثة',
          paragraphs: ['احفظ أولًا ثلاثية الدرس الذهبية: freelance (عمل حر)، booth (كابينة)، simultaneous (متزامن) — فهي تتصدر أسئلة الوزارة.'],
          vocabIds: [
            'u3-interpreter', 'u3-conference', 'u3-freelance', 'u3-booth', 'u3-simultaneous',
            'u3-prepare', 'u3-well-informed', 'u3-follow-news', 'u3-subject', 'u3-take-turns',
            'u3-waste-time', 'u3-quality', 'u3-experience', 'u3-depend-on', 'u3-employer',
            'u3-concentrate', 'u3-listen', 'u3-oil', 'u3-help', 'u3-skill',
          ],
        },
      ],
    },
    {
      id: 'u3-l4',
      title: 'شرح — إنشاء «وظيفة أحلم بها»، وخلاصة الوحدة',
      kind: 'explain',
      minutes: 10,
      intro: 'موضوع الإنشاء الرسمي لهذه الوحدة في نماذج الوزارة: «اكتب عن وظيفة تودّ أن تعملها في المستقبل». هنا هيكله الناجح — وسترون لماذا يتزاوج هذا الإنشاء مع قواعد الوحدة.',
      sections: [
        {
          type: 'explain',
          title: 'كيف تبني إنشاء الوظيفة المستقبلية؟',
          bullets: [
            'المقدمة: سمِّ الوظيفة وسبب اختيارك لها في جملتين.',
            'المتن: ماذا يفعل صاحبها يوميًا؟ ما المؤهلات والصفات التي تحتاجها؟ ولماذا تناسبك أنت؟',
            'جمل الشرط الثاني هي سلاح هذا الإنشاء السري: If I were a conference interpreter, I would travel the world… — تخيّلٌ بصيغة الوحدة نفسها.',
            'الخاتمة: خطوتك العملية القادمة نحو هذه الوظيفة (دراسة، لغة، مهارة).',
          ],
          examples: [
            { en: 'If I were a conference interpreter, I would work at international conferences.', ar: 'جملة شرط ثانٍ تصف وظيفة الحلم — قلب الإنشاء.' },
            { en: 'To do this job well, I would have to read newspapers and follow the news every day.', ar: 'صفة المترجم الجيّد التي عرفتها من درس سميرة — استخدمها في إنشائك.' },
          ],
        },
        {
          type: 'explain',
          title: 'خلاصة الوحدة الثالثة',
          paragraphs: [
            'ركائز الوحدة: درس سميرة بوقائعه الثماني (عمل حر، قراءة عن النفط، مترجمان في كابينة، أجر بالخبرة واللغات)، والجمل الشرطية بأنواعها الأربعة مع مهارة تسمية النوع من المعنى، والجمل المؤكِّدة صياغةً وتأكيدًا، ومفردات المؤتمرات العشرون.',
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
    { id: 'u3q-r1', skill: 'reading', type: 'mcq', q: 'ماذا يعني أن سميرة تعمل «freelance»؟', options: ['تعمل مجانًا دون أجر', 'تعمل لنفسها، لا لصالح صاحب عمل واحد', 'تعمل في فرنسا فقط', 'تعمل بدوام جزئي في مكتبة'], answer: 1, explain: 'تعريف الوزارة الدقيق: freelance = يعمل لحسابه الخاص، لا لجهة واحدة.', marks: 1 },
    { id: 'u3q-r2', skill: 'reading', type: 'mcq', q: 'عن أي موضوع قرأت سميرة استعدادًا لأحد مؤتمراتها؟', options: ['الطب', 'الرياضة', 'النفط', 'السياحة'], answer: 2, explain: 'قرأت عن النفط (oil) لأن موضوع المؤتمر كان يدور حوله.', marks: 1 },
    { id: 'u3q-r3', skill: 'reading', type: 'mcq', q: 'لماذا يوجد مترجمان في الكابينة الواحدة؟', options: ['لأن الكابينة واسعة جدًا', 'ليتناوبا العمل ويساعد أحدهما الآخر', 'لأن القانون يمنع جلوس شخص وحده', 'أحدهما يترجم والآخر يكتب المحضر فقط'], answer: 1, explain: 'الترجمة المتزامنة مرهقة: يتناوب المترجمان ويساعد كلٌّ منهما زميله.', marks: 1 },
    { id: 'u3q-r4', skill: 'reading', type: 'tf', q: 'يعتمد أجر المترجم الفوري على خبرته وعدد اللغات التي يجيدها.', options: ['صح', 'خطأ'], answer: 0, explain: 'صحيح — عاملا الأجر في الدرس: experience و languages.', marks: 1 },
    { id: 'u3q-r5', skill: 'reading', type: 'mcq', q: 'لماذا لا يملك المترجم الفوري وقتًا يضيّعه في التفكير؟', options: ['لأن المؤتمرات قصيرة جدًا', 'لأن الترجمة متزامنة مع كلام المتحدث', 'لأنه يعمل واقفًا دائمًا', 'لأن الكابينة بلا نوافذ'], answer: 1, explain: 'الترجمة تحدث في اللحظة نفسها — simultaneous — فلا مجال للتوقف والتفكير الطويل.', marks: 1 },
    { id: 'u3q-g1', skill: 'grammar', type: 'mcq', q: 'حدّد نوع الجملة الشرطية التالية:', qEn: 'If you studied harder, you would pass the exam easily.', options: ['شرط صفري', 'شرط أول', 'شرط ثانٍ', 'شرط ثالث'], answer: 2, explain: 'ماضٍ بسيط بعد if و would في الجواب — تخيّل مخالف لواقع الحاضر: شرط ثانٍ. (جملة من نماذج الوزارة)', marks: 1 },
    { id: 'u3q-g2', skill: 'grammar', type: 'mcq', q: 'أكمل الجملة الشرطية بالصيغة الصحيحة:', qEn: 'If you ___ your passport last month, you wouldn’t have been allowed to travel.', options: ['hadn’t renewed', 'don’t renew', 'won’t renew', 'not renew now'], answer: 0, explain: 'الجواب would have been يفرض شرطًا ثالثًا: ماضٍ تام بعد if — hadn’t renewed. (من نماذج الوزارة)', marks: 1 },
    { id: 'u3q-g3', skill: 'grammar', type: 'mcq', q: 'حدّد نوع الجملة الشرطية التالية:', qEn: 'If Noor goes to the shop tomorrow, I won’t have to go.', options: ['شرط صفري', 'شرط أول', 'شرط ثانٍ', 'شرط ثالث'], answer: 1, explain: 'مضارع بسيط + will: احتمال حقيقي في المستقبل — شرط أول. (من نماذج الوزارة)', marks: 1 },
    { id: 'u3q-g4', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة للجملة المؤكِّدة (cleft):', qEn: 'Samira read about oil. → It was Samira ___ read about oil.', options: ['who', 'which book', 'where', 'when reading'], answer: 0, explain: 'في الجمل المؤكِّدة بـ It was نصل المحور بـ who للأشخاص.', marks: 1 },
    { id: 'u3q-g5', skill: 'grammar', type: 'tf', q: 'في الشرط الثاني نستخدم were بدل was مع جميع الضمائر في الكتابة الرسمية (If I were you).', options: ['صح', 'خطأ'], answer: 0, explain: 'صحيح — If I were you صيغة ثابتة في الإنجليزية الرسمية وفي الامتحان.', marks: 1 },
    { id: 'u3q-v1', skill: 'vocab', type: 'mcq', q: 'ما معنى كلمة booth في درس المترجمة؟', options: ['حقيبة سماعات', 'كابينة الترجمة الزجاجية الصغيرة', 'قاعة المؤتمرات الكبرى', 'منصة المتحدث'], answer: 1, explain: 'booth هي كابينة الترجمة التي يجلس فيها المترجمان ويتناوبان.', marks: 1 },
    { id: 'u3q-v2', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة لإكمال الجملة:', qEn: 'A good interpreter must be ___: he reads newspapers and follows the news.', options: ['well-informed', 'freelance-booth', 'wasted', 'simultaneous-oil'], answer: 0, explain: 'well-informed واسع الاطّلاع — صفة المترجم الأولى في الدرس.', marks: 1 },
    { id: 'u3q-v3', skill: 'vocab', type: 'tf', q: 'عبارة take turns تعني «يتناوبون العمل».', options: ['صح', 'خطأ'], answer: 0, explain: 'صحيح — المترجمان في الكابينة يتناوبان لأن العمل مرهق.', marks: 1 },
    { id: 'u3q-v4', skill: 'vocab', type: 'mcq', q: 'ما الترجمة الإنجليزية الصحيحة لعبارة «في الوقت نفسه / متزامن»؟', options: ['simultaneous', 'freelance', 'subject', 'quality'], answer: 0, explain: 'simultaneous متزامن — وصف الترجمة الفورية نفسها في الدرس.', marks: 1 },
  ],
  exam: [
    { id: 'u3e-r1', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'What does it mean that Samira works “freelance”?', options: ['She works for free', 'She works for herself, not for one employer', 'She works only in France', 'She works part-time in a library'], answer: 1, explain: 'freelance: عمل لحساب النفس دون صاحب عمل واحد.', marks: 4 },
    { id: 'u3e-r2', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'What did Samira read about to prepare for one conference?', options: ['Medicine', 'Oil', 'Sport', 'Tourism'], answer: 1, explain: 'قرأت عن النفط — موضوع مؤتمرها ذاك.', marks: 4 },
    { id: 'u3e-r3', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'Why are there two interpreters in the booth?', options: ['Because the booth is very large', 'So they can take turns and help each other', 'Because one of them writes the reports', 'Because the law requires an audience'], answer: 1, explain: 'يتناوبان ويساعد أحدهما الآخر — الترجمة المتزامنة مرهقة.', marks: 4 },
    { id: 'u3e-r4', skill: 'reading', type: 'mcq', q: 'أكمل الجملة مستخدمًا معلومات الدرس:', qEn: 'An interpreter must be well-informed, so she reads newspapers and ___.', options: ['follows the news', 'wastes time thinking', 'avoids all subjects', 'works only at night'], answer: 0, explain: 'متابعة الأخبار وقراءة الصحف — روتين المترجم الواسع الاطّلاع.', marks: 4 },
    { id: 'u3e-r5', skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس القراءة:', qEn: 'An interpreter’s pay depends on ___.', options: ['the size of the booth', 'experience and the number of languages', 'the weather on the day', 'the number of listeners only'], answer: 1, explain: 'عاملا الأجر: الخبرة واللغات.', marks: 4 },
    { id: 'u3e-g1', skill: 'grammar', type: 'mcq', q: 'اسمِ نوع الشرط واختر الجملة بالمعنى نفسه:', qEn: 'If you studied harder, you would pass the exam easily.', options: ['Second conditional — You don’t study hard, so you won’t pass easily', 'First conditional — You study hard and will pass', 'Zero conditional — Studying always passes you', 'Third conditional — You studied hard in the past'], answer: 0, explain: 'شرط ثانٍ: الحاضر الحقيقي عكس المتخيَّل — أنت لا تدرس بجد الآن.', marks: 4 },
    { id: 'u3e-g2', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'If my father ___ I drove so fast, he would be very angry.', options: ['knew', 'knows tomorrow', 'will know', 'has knowing'], answer: 0, explain: 'جواب بـ would يفرض ماضيًا بسيطًا بعد if (شرط ثانٍ) — جملة من نماذج الوزارة.', marks: 4 },
    { id: 'u3e-g3', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'If it ___ tomorrow, we will stay at home.', options: ['rains', 'rained yesterday', 'would rain', 'had rained'], answer: 0, explain: 'شرط أول لمستقبل محتمل: مضارع بسيط بعد if و will في الجواب.', marks: 4 },
    { id: 'u3e-g4', skill: 'grammar', type: 'mcq', q: 'أعد صياغة الجملة مؤكِّدة (cleft) بالصيغة الصحيحة:', qEn: 'The interpreters need quick thinking most. → What the interpreters need most ___ quick thinking.', options: ['is', 'are yesterday', 'did', 'was been'], answer: 0, explain: 'صيغة What … is … — الحاضر لأن الحاجة قائمة الآن.', marks: 4 },
    { id: 'u3e-g5', skill: 'grammar', type: 'tf', q: 'حدّد صحة العبارة النحوية التالية:', qEn: 'The third conditional talks about an unreal past: If + past perfect, would have + past participle.', options: ['True', 'False'], answer: 0, explain: 'صحيحة — الشرط الثالث ندمٌ على ماضٍ لم يقع.', marks: 4 },
    { id: 'u3e-g6', skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'If I ___ an interpreter, I would work at international conferences.', options: ['were', 'am tomorrow', 'will be', 'been'], answer: 0, explain: 'شرط ثانٍ مع be: were لجميع الضمائر — التخيّل المهني نفسه في إنشاء الوحدة.', marks: 4 },
    { id: 'u3e-v1', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'The small glass room where interpreters sit at a conference is called a ___.', options: ['booth', 'subject', 'quality', 'salary'], answer: 0, explain: 'booth — كابينة الترجمة.', marks: 4 },
    { id: 'u3e-v2', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'Interpretation at conferences is ___: it happens at the same time as the speech.', options: ['simultaneous', 'freelance-wasted', 'late', 'written only'], answer: 0, explain: 'simultaneous متزامنة — تحدث مع الكلام في اللحظة نفسها.', marks: 4 },
    { id: 'u3e-v3', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'An interpreter hasn’t got time to ___ thinking; she must translate at once.', options: ['waste', 'prepare', 'follow', 'depend'], answer: 0, explain: 'waste time thinking — لا وقت يُضاع في التفكير.', marks: 4 },
    { id: 'u3e-v4', skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'Before the conference, Samira read a lot about the ___: oil.', options: ['subject', 'booth door', 'employer list', 'wage only'], answer: 0, explain: 'subject موضوع المؤتمر — والنفط كان موضوع تلك المرة.', marks: 4 },
  ],
};
