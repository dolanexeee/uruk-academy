/* Uruk Academy — content model.
   Content lives as structured data, fully separate from UI code.
   See CONTENT.md for the authoring format. */

export type SectionType = 'explain' | 'reading' | 'vocab' | 'grammar' | 'solution';

/** Lesson kinds: the English book uses the four section types; the science
    books add 'solution' (أمثلة محلولة), 'laws' (قوانين وخلاصة) and
    'practice' (تمارين متدرجة) lessons. */
export type LessonKind = SectionType | 'laws' | 'practice';

/** One step of a worked solution: an optional formula line (KaTeX source
    between $$…$$ or plain $…$) and a one-line Arabic justification. */
export interface SolutionStep {
  formula?: string;
  note: string;
}

export interface LessonSection {
  type: SectionType;
  title: string;
  /** Arabic explanation paragraphs (guidance written in our own words). */
  paragraphs?: string[];
  /** Bullet points (Arabic). */
  bullets?: string[];
  /** English example lines shown LTR: { en, ar? } — ar is an Arabic gloss. */
  examples?: { en: string; ar?: string }[];
  /** Vocabulary rows for a vocab section. */
  vocabIds?: string[];
  /** Grammar table: header + rows of cells (first col may be English). */
  table?: { head: string[]; rows: string[][]; ltrCols?: number[] };
  /** A highlighted callout (Arabic). */
  callout?: string;
  /** Worked-solution sections ('solution'): the problem statement. */
  problem?: string;
  /** Worked-solution sections: ordered steps, revealed progressively. */
  steps?: SolutionStep[];
  /** Worked-solution sections: the final answer, shown after all steps. */
  finalAnswer?: string;
}

export interface Lesson {
  id: string;
  title: string;
  kind: LessonKind;
  minutes: number;
  intro: string;
  sections: LessonSection[];
}

export interface VocabWord {
  id: string;
  word: string;
  pos: string; // part of speech, Arabic label
  meaning: string; // Arabic meaning
  example: string; // original English example sentence
  exampleAr: string; // Arabic translation of the example
}

/** One marking point of a written question's key (مفتاح التصحيح):
    a step/result the student's answer must contain, and its marks.
    The rubric points' marks sum to the question's `marks`. */
export interface RubricPoint {
  point: string;
  marks: number;
}

export interface QuizQuestion {
  id: string;
  skill: 'reading' | 'grammar' | 'vocab' | 'concept' | 'compute' | 'apply';
  type: 'mcq' | 'tf' | 'written';
  /** Question text (Arabic, may embed English and $…$ math). */
  q: string;
  /** English question line shown LTR, when the question itself is English. */
  qEn?: string;
  /** Options for mcq/tf. Empty for written questions. */
  options: string[];
  /** Index of the correct option. -1 for written questions. */
  answer: number;
  /** Arabic explanation shown after answering. */
  explain: string;
  marks: number;
  /** Written questions: the model answer (الحل النموذجي), revealed only
      for self-marking — the platform never pretends to grade free text. */
  modelAnswer?: string;
  /** Written questions: the marking key the student self-marks against. */
  rubric?: RubricPoint[];
  /** Source unit number — set on composed pools (revision mocks, capstone)
      so reports can break results down per unit. */
  unit?: number;
}

export interface Unit {
  id: string;
  number: number;
  titleAr: string;
  titleEn?: string;
  theme: string;
  status: 'live' | 'soon';
  /** 'content' = a teaching unit with lessons; 'revision' = a review hub
      (Units 4 and 8 in the book) with no new lessons of its own. */
  kind: 'content' | 'revision';
  /** For revision units: the unit numbers it revises (e.g. [1, 2, 3]). */
  revises?: number[];
  lessons: Lesson[];
  vocab: VocabWord[];
  quiz: QuizQuestion[];
  /** Dedicated exam pool (ministry-style). */
  exam: QuizQuestion[];
  examMinutes: number;
}

/** A normalized exam definition the Exam view can run: a unit exam, a
    revision half-book mock, or the full-book capstone. */
export interface ExamSpec {
  id: string;
  titleAr: string;
  subtitleEn?: string;
  minutes: number;
  questions: QuizQuestion[];
  /** 'skill' groups the report by reading/grammar/vocab;
      'unit' groups it by source unit number (capstone, revision mocks). */
  groupBy: 'skill' | 'unit';
  backLabel: string;
  /** Optional replacement for the first intro bullet. */
  introNote?: string;
  /** Optional display labels for unit groups (`unit-3` -> chapter title),
      used by books whose unit numbers collide with another book's. */
  groupLabels?: Record<string, string>;
}

/** One subject's complete book: its units, capstone and display strings.
    Views render any book through this single shape. */
export interface Book {
  subjectId: string;
  units: Unit[];
  /** Teaching units only (revision hubs excluded). */
  contentUnits: Unit[];
  capstone: ExamSpec;
  /** 'وحدة' for English, 'فصل' for the science books. */
  unitWord: string;
  /** Plural used in stat chips: 'وحدات' | 'فصول'. */
  unitsPlural: string;
  /** Suffix after the vocab count: 'كلمة مفردات' | 'قانونًا وتعريفًا'. */
  vocabSuffix: string;
  /** Singular noun for a flashcard item: 'كلمة' | 'قانون'. */
  cardNoun: string;
  /** Blurb under the capstone card on the subject page. */
  capstoneBlurb: string;
  /** «عن المحتوى والمصادر» text for this book. */
  aboutSources: string;
}

export interface CurriculumUnitMeta {
  number: number;
  titleAr: string;
  titleEn?: string;
  status: 'live' | 'soon' | 'revision';
}

export interface Subject {
  id: string;
  titleAr: string;
  titleEn: string;
  grade: string;
  status: 'live' | 'soon';
  blurb: string;
  units: CurriculumUnitMeta[];
}
