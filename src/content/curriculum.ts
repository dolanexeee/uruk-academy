/* Uruk Academy — curriculum map.
   Two complete books are live: «English for Iraq» (Phase 2: all 8 units,
   two revision hubs, full-book capstone) and «Mathematics» for the
   Scientific branch (Stage A: all chapters, chapter capstones and the
   full وزاري mock). Every other subject stays honestly badged «قريبًا».
   Views are book-agnostic: they render any Book through the registry
   below and never hardcode a subject. */

import type { Book, ExamSpec, Subject, Unit, VocabWord } from './types';
import { unit1 } from './unit1';
import { unit2 } from './unit2';
import { unit3 } from './unit3';
import { unit5 } from './unit5';
import { unit6 } from './unit6';
import { unit7 } from './unit7';
import { unit4, unit8 } from './revisions';
import { capstoneExam } from './capstone';
import { mathChapters, mathCapstone } from './math';

export const contentUnits: Unit[] = [unit1, unit2, unit3, unit5, unit6, unit7];
export const revisionUnits: Unit[] = [unit4, unit8];
export const allUnits: Unit[] = [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8];

/** Every vocabulary word in the English book, in unit order. */
export const allVocab: VocabWord[] = contentUnits.flatMap((u) => u.vocab);

/** The English full-book capstone. */
export const capstone: ExamSpec = capstoneExam;

export const ABOUT_SOURCES = `محتوى هذه الأكاديمية مُشتق من الكتاب المدرسي الرسمي «English for Iraq» للصف السادس الإعدادي، الصادر عن وزارة التربية في جمهورية العراق. أُعيدت صياغة الدروس والشروحات والملخصات بكلماتنا الخاصة كدروس تفاعلية أصلية، ولم تُنسخ نصوص الكتاب حرفيًا. أما أسلوب الأسئلة فيتبع نماذج الأسئلة المنشورة من الوزارة. أكاديمية أوروك مشروع تعليمي مفتوح المصدر لا يتبع لوزارة التربية.`;

export const MATH_ABOUT_SOURCES = `محتوى الرياضيات في هذه الأكاديمية مبني على بنية الكتاب المدرسي الرسمي «الرياضيات للصف السادس الإعدادي — الفرع العلمي» الصادر عن وزارة التربية في جمهورية العراق (الفصول الستة وبنيتها الموثّقة في CONTENT.md). كل الشروحات والأمثلة والمسائل مكتوبة ومحلولَة بأسلوبنا الخاص ولم تُنسخ تمارين الكتاب حرفيًا، أما صيغ الامتحانات فتحاكي الورقة الوزارية الرسمية في بنيتها ودرجاتها. أكاديمية أوروك مشروع تعليمي مفتوح المصدر لا يتبع لوزارة التربية.`;

const englishBook: Book = {
  subjectId: 'en6',
  units: allUnits,
  contentUnits,
  capstone: capstoneExam,
  unitWord: 'الوحدة',
  unitsPlural: 'وحدات',
  vocabSuffix: 'كلمة مفردات',
  cardNoun: 'كلمة',
  capstoneBlurb:
    'محاكاة كاملة للورقة الوزارية من الكتاب كله: قراءة وقواعد ومفردات من كل الوحدات في امتحان واحد — والتقرير النهائي يفصّل نتيجتك في كل وحدة لتعرف موضع ضعفك بالضبط.',
  aboutSources: ABOUT_SOURCES,
};

const mathBook: Book = {
  subjectId: 'math6',
  units: mathChapters,
  contentUnits: mathChapters,
  capstone: mathCapstone,
  unitWord: 'الفصل',
  unitsPlural: 'فصول',
  vocabSuffix: 'قانونًا وتعريفًا',
  cardNoun: 'قانون',
  capstoneBlurb:
    'محاكاة أمينة للورقة الوزارية الحقيقية: ستة أسئلة مرقّمة بأفرعها ودرجاتها كما في الامتحان الرسمي، فيها أسئلة مقالية بحلول نموذجية ومفاتيح تصحيح — والتقرير يفصّل نتيجتك في كل فصل.',
  aboutSources: MATH_ABOUT_SOURCES,
};

export const books: Book[] = [englishBook, mathBook];
export const bookBySubjectId = (id: string): Book | undefined => books.find((b) => b.subjectId === id);

export const allBooksUnits: Unit[] = books.flatMap((b) => b.units);
export const allBooksVocab: VocabWord[] = books.flatMap((b) => b.contentUnits.flatMap((u) => u.vocab));

const unitIndex = new Map<string, Unit>(allBooksUnits.map((u) => [u.id, u]));
export const unitById = (id: string): Unit | undefined => unitIndex.get(id);
export const bookOfUnit = (unitId: string): Book | undefined => books.find((b) => b.units.some((u) => u.id === unitId));
export const bookOfCapstone = (capstoneId: string): Book | undefined => books.find((b) => b.capstone.id === capstoneId);

/** English-scoped unit lookup by number (legacy label resolution for the
    English capstone/revision reports). */
export const unitByNumber = (n: number): Unit | undefined => allUnits.find((u) => u.number === n);

/** Build the ExamSpec for a unit: content units get their own exam
    (report by skill); revision units get their half-book mock
    (report broken down per source unit). */
export function examSpecForUnit(u: Unit): ExamSpec {
  const book = bookOfUnit(u.id);
  if (u.kind === 'revision') {
    const src = (u.revises ?? []).map((n) => unitByNumber(n)?.titleAr ?? '').join('، ');
    return {
      id: u.id,
      titleAr: `امتحان نصف الكتاب — ${u.titleAr}`,
      subtitleEn: 'English for Iraq · Sixth Preparatory · Half-Book Mock',
      minutes: u.examMinutes,
      questions: u.exam,
      groupBy: 'unit',
      backLabel: 'العودة إلى وحدة المراجعة',
      introNote: `ورقة واحدة تجمع الاستيعاب والقواعد والمفردات من ${src} — كما تأتي أسئلة المراجعة في الامتحان الحقيقي، والتقرير يفصّل نتيجتك في كل وحدة على حدة.`,
    };
  }
  const isMath = book?.subjectId === 'math6';
  return {
    id: u.id,
    titleAr: `الامتحان الوزاري — ${u.titleAr}`,
    subtitleEn: isMath
      ? `Mathematics · Sixth Preparatory · Chapter ${u.number}`
      : `English for Iraq · Sixth Preparatory · Unit ${u.number}`,
    minutes: u.examMinutes,
    questions: u.exam,
    groupBy: 'skill',
    backLabel: `العودة إلى ${book?.unitWord ?? 'الوحدة'}`,
    introNote: isMath
      ? 'ورقة بأسلوب الوزاري من هذا الفصل وحده: أسئلة اختيارية تُصحَّح فورًا بعد التسليم، وأسئلة مقالية تقارن فيها حلك بالحل النموذجي وتصحّح لنفسك بمفتاح التصحيح — كما يجب أن تتدرب للامتحان الحقيقي.'
      : undefined,
  };
}

/** Resolve a flashcard deck: a content unit's own words, a revision
    unit's combined source-unit words, or 'all' for the English book. */
export function deckFor(id: string): { id: string; title: string; vocab: VocabWord[]; noun: string } {
  if (id === 'all') return { id, title: 'كل كلمات الكتاب', vocab: allVocab, noun: 'كلمة' };
  const u = unitById(id);
  if (!u) return { id, title: '', vocab: [], noun: 'كلمة' };
  const noun = bookOfUnit(id)?.cardNoun ?? 'كلمة';
  if (u.kind === 'revision') {
    const vocab = (u.revises ?? []).flatMap((n) => unitByNumber(n)?.vocab ?? []);
    return { id, title: `${u.titleAr} — كلمات الوحدات ${(u.revises ?? []).join('–')}`, vocab, noun };
  }
  return { id, title: u.titleAr, vocab: u.vocab, noun };
}

export const subjects: Subject[] = [
  {
    id: 'en6',
    titleAr: 'اللغة الإنجليزية',
    titleEn: 'English for Iraq',
    grade: 'السادس الإعدادي',
    status: 'live',
    blurb: 'منهج «English for Iraq» للسادس الإعدادي كاملًا: ثماني وحدات — قراءة وقواعد ومفردات وامتحانات بأسلوب الوزاري، ووحدتا مراجعة، وامتحان شامل ختامي.',
    units: [
      { number: 1, titleAr: 'سأظلّ فخورةً بك دائمًا — الصحة والطوارئ', titleEn: "I'll always be proud of him", status: 'live' },
      { number: 2, titleAr: 'تكنولوجيا الأمن', titleEn: 'Security Technology', status: 'live' },
      { number: 3, titleAr: 'المترجم الفوري في المؤتمرات', titleEn: 'Conference Interpreter', status: 'live' },
      { number: 4, titleAr: 'وحدة مراجعة — مراجعة الوحدات ١–٣', titleEn: 'Revision: Units 1–3', status: 'revision' },
      { number: 5, titleAr: 'لماذا العطلات مهمة جدًا؟', titleEn: 'Why are holidays so important?', status: 'live' },
      { number: 6, titleAr: 'صناعة المال — الادّخار والاستثمار', titleEn: 'Making Money', status: 'live' },
      { number: 7, titleAr: 'استخدام المكتبة — الوظائف والمقابلات', titleEn: 'Using the Library', status: 'live' },
      { number: 8, titleAr: 'وحدة مراجعة — مراجعة الوحدات ٥–٧', titleEn: 'Revision: Units 5–7', status: 'revision' },
    ],
  },
  {
    id: 'math6',
    titleAr: 'الرياضيات',
    titleEn: 'Mathematics',
    grade: 'السادس الإعدادي',
    status: 'live',
    blurb: 'كتاب الرياضيات للسادس العلمي كاملًا: ستة فصول — شرح بالمفهوم، وأمثلة محلولة خطوة بخطوة، وأسئلة مقالية بحلول نموذجية ومفاتيح تصحيح، وامتحان وزاري شامل يحاكي الورقة الرسمية.',
    units: [
      { number: 1, titleAr: 'الأعداد المركبة', titleEn: 'Complex Numbers', status: 'live' },
      { number: 2, titleAr: 'القطوع المخروطية', titleEn: 'Conic Sections', status: 'live' },
      { number: 3, titleAr: 'تطبيقات التفاضل', titleEn: 'Applications of Differentiation', status: 'live' },
      { number: 4, titleAr: 'التكامل', titleEn: 'Integration', status: 'live' },
      { number: 5, titleAr: 'المعادلات التفاضلية الاعتيادية', titleEn: 'Ordinary Differential Equations', status: 'live' },
      { number: 6, titleAr: 'الهندسة الفضائية', titleEn: 'Space Geometry', status: 'live' },
    ],
  },
  { id: 'phys6', titleAr: 'الفيزياء', titleEn: 'Physics', grade: 'السادس الإعدادي', status: 'soon', blurb: '', units: [] },
  { id: 'chem6', titleAr: 'الكيمياء', titleEn: 'Chemistry', grade: 'السادس الإعدادي', status: 'soon', blurb: '', units: [] },
  { id: 'bio6', titleAr: 'الأحياء', titleEn: 'Biology', grade: 'السادس الإعدادي', status: 'soon', blurb: '', units: [] },
  { id: 'ar6', titleAr: 'اللغة العربية', titleEn: 'Arabic', grade: 'السادس الإعدادي', status: 'soon', blurb: '', units: [] },
];

/** Back-compat alias (Phase 1 name for Unit One). */
export const liveUnit = unit1;
