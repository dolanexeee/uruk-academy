/* Uruk Academy — on-device store (localStorage, versioned key).
   Progress, Leitner SRS scheduling, quiz/exam results — everything stays
   on the student's own device. Pattern proven in the Sahla app. */

export interface SrsRecord {
  box: number; // 1..5
  due: string; // YYYY-MM-DD
}

export interface QuizResult {
  score: number;
  total: number;
  at: string; // ISO date
}

export interface ExamResult {
  score: number;
  total: number;
  perSkill: Record<string, { score: number; total: number }>;
  at: string;
}

export interface AcademyState {
  name: string;
  lessonsDone: Record<string, string>; // lessonId -> date completed
  quizBest: Record<string, QuizResult>; // unitId -> best quiz result
  quizLast: Record<string, QuizResult>;
  examBest: Record<string, ExamResult>;
  examLast: Record<string, ExamResult>;
  srs: Record<string, SrsRecord>; // vocabId -> record
  days: Record<string, true>; // study days for streak
}

const KEY = 'uruk-academy-v1';

/** Days until due again for a card sitting in box b. */
const INTERVAL: Record<number, number> = { 1: 0, 2: 1, 3: 2, 4: 4, 5: 7 };

export function todayStr(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function addDays(dateStr: string, n: number): string {
  const d = new Date(dateStr + 'T12:00:00');
  d.setDate(d.getDate() + n);
  return todayStr(d);
}

export function emptyState(): AcademyState {
  return {
    name: '',
    lessonsDone: {},
    quizBest: {},
    quizLast: {},
    examBest: {},
    examLast: {},
    srs: {},
    days: {},
  };
}

export function loadState(): AcademyState {
  if (typeof window === 'undefined') return emptyState();
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return emptyState();
    const p = JSON.parse(raw) as Partial<AcademyState>;
    return { ...emptyState(), ...p };
  } catch {
    return emptyState();
  }
}

export function saveState(s: AcademyState): void {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* storage blocked/full — the app keeps working, progress just won't persist */
  }
}

export function markToday(s: AcademyState): void {
  s.days[todayStr()] = true;
}

export function completeLesson(s: AcademyState, lessonId: string): void {
  if (!s.lessonsDone[lessonId]) s.lessonsDone[lessonId] = todayStr();
  markToday(s);
}

export function recordQuiz(s: AcademyState, unitId: string, score: number, total: number): void {
  const r: QuizResult = { score, total, at: todayStr() };
  s.quizLast[unitId] = r;
  const best = s.quizBest[unitId];
  if (!best || score / Math.max(1, total) > best.score / Math.max(1, best.total)) {
    s.quizBest[unitId] = r;
  }
  markToday(s);
}

export function recordExam(
  s: AcademyState,
  unitId: string,
  score: number,
  total: number,
  perSkill: Record<string, { score: number; total: number }>,
): void {
  const r: ExamResult = { score, total, perSkill, at: todayStr() };
  s.examLast[unitId] = r;
  const best = s.examBest[unitId];
  if (!best || score / Math.max(1, total) > best.score / Math.max(1, best.total)) {
    s.examBest[unitId] = r;
  }
  markToday(s);
}

/** Register vocabulary the student has met: new cards enter box 1, due today. */
export function encounterVocab(s: AcademyState, ids: string[]): void {
  const t = todayStr();
  for (const id of ids) {
    if (!s.srs[id]) s.srs[id] = { box: 1, due: t };
  }
}

/** Leitner answer: correct promotes the card, wrong returns it to box 1. */
export function srsAnswer(s: AcademyState, id: string, correct: boolean): void {
  const t = todayStr();
  const rec = s.srs[id] ?? { box: 1, due: t };
  if (correct) {
    rec.box = Math.min(5, rec.box + 1);
    rec.due = addDays(t, INTERVAL[rec.box]);
  } else {
    rec.box = 1;
    rec.due = t;
  }
  s.srs[id] = rec;
  markToday(s);
}

export function dueVocabIds(s: AcademyState, allIds: string[]): string[] {
  const t = todayStr();
  return allIds.filter((id) => {
    const r = s.srs[id];
    return !r || r.due <= t;
  });
}

/** Consecutive-day streak ending today (or yesterday if today hasn't started). */
export function streak(s: AcademyState): number {
  let cursor = todayStr();
  if (!s.days[cursor]) {
    cursor = addDays(cursor, -1);
    if (!s.days[cursor]) return 0;
  }
  let n = 0;
  while (s.days[cursor]) {
    n++;
    cursor = addDays(cursor, -1);
  }
  return n;
}

export function lastStudyDay(s: AcademyState): string | null {
  const ds = Object.keys(s.days).sort();
  return ds.length ? ds[ds.length - 1] : null;
}
