/* Uruk Academy — the full-book capstone exam «الامتحان الوزاري الشامل»
   for English for Iraq, 6th Preparatory: 25 questions / 100 marks /
   45 minutes, drawn from every unit's verified material, each question
   tagged with its unit so the report breaks the score down per unit. */

import type { ExamSpec } from './types';

export const capstoneExam: ExamSpec = {
  id: 'en6-capstone',
  titleAr: 'الامتحان الوزاري الشامل',
  subtitleEn: 'English for Iraq · Sixth Preparatory · Full-Book Mock',
  minutes: 45,
  groupBy: 'unit',
  backLabel: 'العودة إلى المادة',
  introNote:
    'هذا امتحان الكتاب كله: ٢٥ سؤالًا من الوحدات الثماني بوزن الورقة الوزارية (٤ درجات لكل سؤال). في نهايته ستحصل على تقرير يفصّل نتيجتك وحدةً وحدة — لتعرف بدقة أين قوتك وأين تحتاج مراجعة قبل الامتحان الحقيقي.',
  questions: [
    // — Unit One: «I'll always be proud of him» + narrative past
    { id: 'cap-u1-r', unit: 1, skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات قصة الوحدة الأولى:', qEn: 'Why did the mother tell her son to sit on the chair and not move?', options: ['So he would not fall asleep', 'So he would not touch the electrical wires hanging down', 'So visitors would not see him', 'So the house stays tidy'], answer: 1, explain: 'الأسلاك الكهربائية المتدلية بجانب الباب — خطر القصة المركزي.', marks: 4 },
    { id: 'cap-u1-g', unit: 1, skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'While my father ___ to work, it started to rain.', options: ['was driving', 'drives yesterday', 'has drive', 'drive now'], answer: 0, explain: 'حدث طويل متقطع بحدث قصير: ماضٍ مستمر مع while.', marks: 4 },
    { id: 'cap-u1-v', unit: 1, skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'The operator told the boy to tell his mother’s ___ so help could reach her.', options: ['address', 'diabetes', 'bracelet number', 'chair'], answer: 0, explain: 'العنوان هو ما طلبه عامل الهاتف ليُرسل الإسعاف إلى البيت.', marks: 4 },
    { id: 'cap-u1-r2', unit: 1, skill: 'reading', type: 'tf', q: 'حدّد صحة العبارة التالية من القصة:', qEn: 'The emergency operator kept the boy calm and told him exactly what to do.', options: ['True', 'False'], answer: 0, explain: 'صحيحة — هدوء الموظف وإرشاده الدقيق أنقذا الموقف.', marks: 4 },
    // — Unit Two: Security Technology + modals/causatives
    { id: 'cap-u2-r', unit: 2, skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس «Security Technology»:', qEn: 'Radar was developed in the 1930s, before the Second World War, and used during the war in order to ___.', options: ['measure car speeds', 'detect enemy aircraft', 'warn drivers politely', 'photograph number plates'], answer: 1, explain: 'الرادار طُوّر في ثلاثينيات القرن الماضي لكشف طائرات العدو — قبل الحرب العالمية الثانية وخلالها — وبعدها انتقل إلى خدمة الشرطة.', marks: 4 },
    { id: 'cap-u2-g', unit: 2, skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة (سببي causative):', qEn: 'I ___ my television stolen last week.', options: ['had', 'make her', 'must to', 'am steal'], answer: 0, explain: 'had + مفعول + p.p. لمصيبة وقعت للمتكلم — من نماذج الوزارة.', marks: 4 },
    { id: 'cap-u2-v', unit: 2, skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'The waves hit the car and ___ to the gun.', options: ['bounce back', 'take turns', 'follow the news', 'break down only'], answer: 0, explain: 'bounce back — ارتداد الموجات هو مبدأ عمل مسدس الرادار.', marks: 4 },
    // — Unit Three: Conference Interpreter + conditionals
    { id: 'cap-u3-r', unit: 3, skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس «Conference Interpreter»:', qEn: 'Samira read about ___ to prepare for one conference.', options: ['oil', 'medicine', 'fashion', 'football'], answer: 0, explain: 'النفط — موضوع ذلك المؤتمر.', marks: 4 },
    { id: 'cap-u3-g', unit: 3, skill: 'grammar', type: 'mcq', q: 'حدّد نوع الشرط:', qEn: 'If you hadn’t renewed your passport, you wouldn’t have been allowed to travel.', options: ['Zero conditional', 'First conditional', 'Second conditional', 'Third conditional'], answer: 3, explain: 'ماضٍ تام + would have: ندم على ماضٍ لم يحدث — شرط ثالث.', marks: 4 },
    { id: 'cap-u3-v', unit: 3, skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'A person who works for himself, not for one employer, works ___.', options: ['freelance', 'in a booth only', 'wasted', 'simultaneous'], answer: 0, explain: 'freelance — تعريف الوزارة لطريقة عمل سميرة.', marks: 4 },
    // — Unit Four (revision of 1–3)
    { id: 'cap-u4-g', unit: 4, skill: 'grammar', type: 'mcq', q: '(مراجعة الوحدات ١–٣) اختر الصيغة الصحيحة:', qEn: 'You ___ pick me up; I will get the bus. (no necessity)', options: ['don’t have to', 'must', 'mustn’t', 'had better hurry'], answer: 0, explain: 'غياب الضرورة = don’t have to — الخلط مع mustn’t خطأ وزاري شهير.', marks: 4 },
    { id: 'cap-u4-v', unit: 4, skill: 'vocab', type: 'mcq', q: '(مراجعة الوحدات ١–٣) اختر الكلمة الصحيحة:', qEn: 'The two interpreters sit in a ___ and take turns translating.', options: ['booth', 'bracelet', 'statement', 'shelf'], answer: 0, explain: 'booth كابينة الترجمة الزجاجية — من مفردات درس الوحدة الثالثة الموثّقة.', marks: 4 },
    // — Unit Five: Holidays + present perfect
    { id: 'cap-u5-r', unit: 5, skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس «Why are holidays so important?»:', qEn: 'A workaholic is a person who ___.', options: ['loves long holidays', 'is addicted to work', 'never works at all', 'works only on Fridays'], answer: 1, explain: 'مدمن على العمل — تعريف الدرس.', marks: 4 },
    { id: 'cap-u5-g', unit: 5, skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'She ___ letters since two o’clock.', options: ['has been writing', 'writes yesterday', 'is write', 'wrote since'], answer: 0, explain: 'since + نشاط مستمر = مضارع تام مستمر.', marks: 4 },
    { id: 'cap-u5-v', unit: 5, skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'High blood pressure can cause ___ and heart attacks.', options: ['strokes', 'holidays', 'opportunities', 'breaks'], answer: 0, explain: 'الجلطات الدماغية strokes — مع النوبات القلبية، ثنائية كتاب النشاط الطبية لدرس العطل.', marks: 4 },
    // — Unit Six: Making Money + passive
    { id: 'cap-u6-r', unit: 6, skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس «Making Money»:', qEn: 'People can invest their money by buying shares and by buying ___.', options: ['property', 'tickets only', 'speed guns', 'newspapers'], answer: 0, explain: 'العقار — ثاني طريقتَي الاستثمار في الدرس.', marks: 4 },
    { id: 'cap-u6-g', unit: 6, skill: 'grammar', type: 'mcq', q: 'رتّب الكلمات جملةً مبنية للمجهول:', qEn: '(was / The / yesterday / bank / robbed)', options: ['The bank was robbed yesterday.', 'The yesterday was bank robbed.', 'Robbed was the bank yesterday the.', 'The bank robbed was it yesterday.'], answer: 0, explain: 'فاعل + was + p.p. + الزمان — ترتيب الوزارة الشهير.', marks: 4 },
    { id: 'cap-u6-v', unit: 6, skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'When we start work, we are encouraged to put money into a ___ plan.', options: ['pension', 'statement', 'holiday', 'booth'], answer: 0, explain: 'خطة التقاعد — خاتمة درس صناعة المال.', marks: 4 },
    { id: 'cap-u6-g2', unit: 6, skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة:', qEn: 'The building ___ by May.', options: ['won’t be finished', 'won’t finished', 'won’t been finish', 'isn’t finish yesterday'], answer: 0, explain: 'مستقبل مجهول منفي: won’t be + p.p.', marks: 4 },
    // — Unit Seven: Using the Library + future forms
    { id: 'cap-u7-r', unit: 7, skill: 'reading', type: 'mcq', q: 'أجب مستخدمًا معلومات درس «Using the Library»:', qEn: 'In the library, the writer learnt the importance of ___ in job interviews.', options: ['body language', 'speed reading only', 'radar technology', 'oil prices'], answer: 0, explain: 'لغة الجسد — مهارة المقابلات التي تعلّمها الكاتب في المكتبة.', marks: 4 },
    { id: 'cap-u7-g', unit: 7, skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة (خطة مستقبلية):', qEn: 'Watch out! You ___ those books.', options: ['are going to drop', 'drop yesterday', 'have drop now', 'drops tomorrow morning early'], answer: 0, explain: 'going to لنتيجة وشيكة يراها المتكلم الآن.', marks: 4 },
    { id: 'cap-u7-v', unit: 7, skill: 'vocab', type: 'mcq', q: 'اختر الكلمة الصحيحة:', qEn: 'A summary of your education and work experience that you send when applying for a job is a ___.', options: ['CV', 'statement', 'booth', 'pension'], answer: 0, explain: 'CV السيرة الذاتية — وكتابتها جيدًا مما علّمته المكتبة للكاتب.', marks: 4 },
    { id: 'cap-u7-g2', unit: 7, skill: 'grammar', type: 'mcq', q: 'اختر الصيغة الصحيحة (جدول مواعيد):', qEn: 'The train ___ at 7.30 tomorrow morning.', options: ['departs', 'will being depart', 'departed next week', 'is depart yesterday'], answer: 0, explain: 'الجداول الثابتة بالمضارع البسيط وإن كانت في المستقبل.', marks: 4 },
    // — Unit Eight (revision of 5–7)
    { id: 'cap-u8-g', unit: 8, skill: 'grammar', type: 'tf', q: '(مراجعة الوحدات ٥–٧) حدّد صحة العبارة التالية:', qEn: 'In the passive voice, the main verb is always in the past participle form after a form of “be”.', options: ['True', 'False'], answer: 0, explain: 'صحيحة — قاعدة المبني للمجهول الذهبية من الوحدة السادسة.', marks: 4 },
    { id: 'cap-u8-v', unit: 8, skill: 'vocab', type: 'mcq', q: '(مراجعة الوحدات ٥–٧) اختر الكلمة الصحيحة:', qEn: 'Money a bank pays you for keeping your savings with it is called ___.', options: ['interest', 'pressure', 'a booth fee', 'body language'], answer: 0, explain: 'interest الفائدة — من مفردات درس صناعة المال.', marks: 4 },
  ],
};
