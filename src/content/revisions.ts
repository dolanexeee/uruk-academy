/* Uruk Academy — Revision Units 4 and 8 of «English for Iraq».

   In the book itself, Units 4 and 8 are revision units: Unit 4 revises
   Units 1–3, Unit 8 revises Units 5–7. They contain no new reading lesson,
   so the Academy builds them as what they are — review hubs whose quiz,
   flashcard deck and half-book mock exam are composed from the source
   units' own verified pools (tagged per source unit so reports can break
   results down unit by unit). See CONTENT.md. */

import type { QuizQuestion, Unit } from './types';
import { unit1 } from './unit1';
import { unit2 } from './unit2';
import { unit3 } from './unit3';
import { unit5 } from './unit5';
import { unit6 } from './unit6';
import { unit7 } from './unit7';

/** Deterministically pick n evenly-spread items from a pool. */
function spread<T>(arr: T[], n: number): T[] {
  if (n >= arr.length) return [...arr];
  const out: T[] = [];
  const step = arr.length / n;
  for (let i = 0; i < n; i++) out.push(arr[Math.floor(i * step)]);
  return out;
}

/** Interleave per-unit picks so the paper is genuinely mixed. */
function interleave(picks: QuizQuestion[][]): QuizQuestion[] {
  const out: QuizQuestion[] = [];
  const max = Math.max(...picks.map((p) => p.length));
  for (let i = 0; i < max; i++) for (const p of picks) if (p[i]) out.push(p[i]);
  return out;
}

function reviewQuiz(sources: Unit[]): QuizQuestion[] {
  return interleave(sources.map((u) => spread(u.quiz, 5).map((q) => ({ ...q, unit: u.number }))));
}

function halfBookExam(sources: Unit[]): QuizQuestion[] {
  return interleave(sources.map((u) => spread(u.exam, 5).map((q) => ({ ...q, unit: u.number }))));
}

export const unit4: Unit = {
  id: 'en6-u4',
  number: 4,
  titleAr: 'الوحدة الرابعة — مراجعة',
  titleEn: 'Revision: Units 1–3',
  theme: 'وحدة مراجعة كما في الكتاب: تثبيت الوحدات ١–٣ (الصحة والطوارئ، تكنولوجيا الأمن، المترجم الفوري) قبل الانتقال إلى النصف الثاني.',
  status: 'live',
  kind: 'revision',
  revises: [1, 2, 3],
  lessons: [],
  vocab: [],
  quiz: reviewQuiz([unit1, unit2, unit3]),
  exam: halfBookExam([unit1, unit2, unit3]),
  examMinutes: 25,
};

export const unit8: Unit = {
  id: 'en6-u8',
  number: 8,
  titleAr: 'الوحدة الثامنة — مراجعة',
  titleEn: 'Revision: Units 5–7',
  theme: 'وحدة المراجعة الختامية كما في الكتاب: تثبيت الوحدات ٥–٧ قبل الامتحان الوزاري الشامل.',
  status: 'live',
  kind: 'revision',
  revises: [5, 6, 7],
  lessons: [],
  vocab: [],
  quiz: reviewQuiz([unit5, unit6, unit7]),
  exam: halfBookExam([unit5, unit6, unit7]),
  examMinutes: 25,
};
