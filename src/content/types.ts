/* Uruk Academy — content model.
   Content lives as structured data, fully separate from UI code.
   See CONTENT.md for the authoring format. */

export type SectionType = 'explain' | 'reading' | 'vocab' | 'grammar';

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
}

export interface Lesson {
  id: string;
  title: string;
  kind: SectionType;
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

export interface QuizQuestion {
  id: string;
  skill: 'reading' | 'grammar' | 'vocab';
  type: 'mcq' | 'tf';
  /** Question text (Arabic, may embed English). */
  q: string;
  /** English question line shown LTR, when the question itself is English. */
  qEn?: string;
  options: string[];
  /** index of the correct option */
  answer: number;
  /** Arabic explanation shown after answering. */
  explain: string;
  marks: number;
}

export interface Unit {
  id: string;
  number: number;
  titleAr: string;
  titleEn?: string;
  theme: string;
  status: 'live' | 'soon';
  lessons: Lesson[];
  vocab: VocabWord[];
  quiz: QuizQuestion[];
  /** Dedicated exam pool (ministry-style). */
  exam: QuizQuestion[];
  examMinutes: number;
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
