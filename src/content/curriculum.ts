/* Uruk Academy — curriculum map.
   Phase 2: the English subject is COMPLETE — all 8 units of «English for
   Iraq» (6th Preparatory) are playable: six teaching units with full
   lessons/quizzes/exams, two revision hubs (Units 4 and 8, exactly as the
   book structures them), and a full-book capstone mock exam. */

import type { ExamSpec, Subject, Unit, VocabWord } from './types';
import { unit1 } from './unit1';
import { unit2 } from './unit2';
import { unit3 } from './unit3';
import { unit5 } from './unit5';
import { unit6 } from './unit6';
import { unit7 } from './unit7';
import { unit4, unit8 } from './revisions';
import { capstoneExam } from './capstone';

export const contentUnits: Unit[] = [unit1, unit2, unit3, unit5, unit6, unit7];
export const revisionUnits: Unit[] = [unit4, unit8];
export const allUnits: Unit[] = [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8];

export const unitById = (id: string): Unit | undefined => allUnits.find((u) => u.id === id);
export const unitByNumber = (n: number): Unit | undefined => allUnits.find((u) => u.number === n);

/** Every vocabulary word in the book, in unit order. */
export const allVocab: VocabWord[] = contentUnits.flatMap((u) => u.vocab);

/** The capstone: one full-book وزاري mock exam. */
export const capstone: ExamSpec = capstoneExam;

/** Build the ExamSpec for a unit: content units get their own exam
    (report by skill); revision units get their half-book mock
    (report broken down per source unit). */
export function examSpecForUnit(u: Unit): ExamSpec {
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
  return {
    id: u.id,
    titleAr: `الامتحان الوزاري — ${u.titleAr}`,
    subtitleEn: `English for Iraq · Sixth Preparatory · Unit ${u.number}`,
    minutes: u.examMinutes,
    questions: u.exam,
    groupBy: 'skill',
    backLabel: 'العودة إلى الوحدة',
  };
}

/** Resolve a flashcard deck: a content unit's own words, a revision
    unit's combined source-unit words, or 'all' for the whole book. */
export function deckFor(id: string): { id: string; title: string; vocab: VocabWord[] } {
  if (id === 'all') return { id, title: 'كل كلمات الكتاب', vocab: allVocab };
  const u = unitById(id);
  if (!u) return { id, title: '', vocab: [] };
  if (u.kind === 'revision') {
    const vocab = (u.revises ?? []).flatMap((n) => unitByNumber(n)?.vocab ?? []);
    return { id, title: `${u.titleAr} — كلمات الوحدات ${(u.revises ?? []).join('–')}`, vocab };
  }
  return { id, title: u.titleAr, vocab: u.vocab };
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
  { id: 'math6', titleAr: 'الرياضيات', titleEn: 'Mathematics', grade: 'السادس الإعدادي', status: 'soon', blurb: '', units: [] },
  { id: 'phys6', titleAr: 'الفيزياء', titleEn: 'Physics', grade: 'السادس الإعدادي', status: 'soon', blurb: '', units: [] },
  { id: 'chem6', titleAr: 'الكيمياء', titleEn: 'Chemistry', grade: 'السادس الإعدادي', status: 'soon', blurb: '', units: [] },
  { id: 'bio6', titleAr: 'الأحياء', titleEn: 'Biology', grade: 'السادس الإعدادي', status: 'soon', blurb: '', units: [] },
  { id: 'ar6', titleAr: 'اللغة العربية', titleEn: 'Arabic', grade: 'السادس الإعدادي', status: 'soon', blurb: '', units: [] },
];

/** Back-compat alias (Phase 1 name for Unit One). */
export const liveUnit = unit1;

export const ABOUT_SOURCES = `محتوى هذه الأكاديمية مُشتق من الكتاب المدرسي الرسمي «English for Iraq» للصف السادس الإعدادي، الصادر عن وزارة التربية في جمهورية العراق. أُعيدت صياغة الدروس والشروحات والملخصات بكلماتنا الخاصة كدروس تفاعلية أصلية، ولم تُنسخ نصوص الكتاب حرفيًا. أما أسلوب الأسئلة فيتبع نماذج الأسئلة المنشورة من الوزارة. أكاديمية أوروك مشروع تعليمي مفتوح المصدر لا يتبع لوزارة التربية.`;
