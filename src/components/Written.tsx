import { useState } from 'react';
import type { QuizQuestion } from '../content/types';
import MathText from './MathText';
import { IconCheck, IconX, IconBulb, IconPen } from './icons';

/* Written (مقالية) questions — honest self-assessment, never fake grading.
   The student writes a free answer, then reveals the model answer with its
   marking key (مفتاح التصحيح) and marks each rubric point achieved or not.
   The score is exactly the sum of the points the student confirms. */

/** The model-answer box: shown only when self-marking begins. */
export function ModelAnswer({ q }: { q: QuizQuestion }) {
  return (
    <div className="rounded-2xl border-2 border-lapis-600/50 bg-lapis-50 px-4 py-3">
      <p className="font-display text-[13px] font-extrabold text-lapis-800">الحل النموذجي</p>
      <div className="mt-1.5 text-[14.5px] font-semibold leading-7 text-ink-900">
        <MathText text={q.modelAnswer ?? ''} />
      </div>
    </div>
  );
}

/** Interactive rubric checklist: each point toggles «أنجزتها» / «لم أنجزها». */
export function RubricMarking({
  q,
  flags,
  onToggle,
}: {
  q: QuizQuestion;
  flags: (boolean | null)[];
  onToggle: (pointIndex: number, achieved: boolean) => void;
}) {
  const earned = (q.rubric ?? []).reduce((a, p, i) => a + (flags[i] ? p.marks : 0), 0);
  return (
    <div className="mt-3">
      <p className="font-display text-[13px] font-extrabold text-lapis-800">
        مفتاح التصحيح — قيّم حلك نقطةً نقطة بصدق
      </p>
      <div className="mt-2 space-y-2">
        {(q.rubric ?? []).map((p, i) => {
          const f = flags[i];
          return (
            <div
              key={i}
              className={`flex flex-wrap items-center gap-2 rounded-2xl border-2 px-3 py-2.5 ${
                f === true
                  ? 'border-tealdeep-500/60 bg-tealdeep-500/10'
                  : f === false
                    ? 'border-red-300 bg-red-50/70'
                    : 'border-cream-300 bg-white/60'
              }`}
            >
              <span className="min-w-0 flex-1 text-[13.5px] font-semibold leading-6 text-ink-900">
                <MathText text={p.point} />
              </span>
              <span className="shrink-0 rounded-full bg-lapis-100 px-2 py-0.5 text-[11.5px] font-black text-lapis-800">
                {p.marks} {p.marks === 1 ? 'درجة' : 'درجات'}
              </span>
              <span className="flex shrink-0 gap-1.5">
                <button
                  onClick={() => onToggle(i, true)}
                  data-testid={`rubric-yes-${i}`}
                  aria-pressed={f === true}
                  className={`press inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[12.5px] font-extrabold ${
                    f === true ? 'bg-tealdeep-500 text-white' : 'border border-tealdeep-500/50 text-tealdeep-700'
                  }`}
                >
                  <IconCheck size={13} /> أنجزتها
                </button>
                <button
                  onClick={() => onToggle(i, false)}
                  data-testid={`rubric-no-${i}`}
                  aria-pressed={f === false}
                  className={`press inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[12.5px] font-extrabold ${
                    f === false ? 'bg-red-500 text-white' : 'border border-red-300 text-red-600'
                  }`}
                >
                  <IconX size={13} /> لم أنجزها
                </button>
              </span>
            </div>
          );
        })}
      </div>
      <p className="mt-2 text-[13px] font-bold text-ink-600">
        درجتك بالتصحيح الذاتي حتى الآن: <span className="text-lapis-800">{earned}</span> من {q.marks}
      </p>
    </div>
  );
}

/** Quiz-mode written question: write → reveal key → self-mark → confirm. */
export function QuizWritten({ q, onComplete }: { q: QuizQuestion; onComplete: (earned: number) => void }) {
  const [text, setText] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [flags, setFlags] = useState<(boolean | null)[]>(() => (q.rubric ?? []).map(() => null));
  const [confirmed, setConfirmed] = useState(false);

  const allDecided = flags.every((f) => f !== null);
  const earned = (q.rubric ?? []).reduce((a, p, i) => a + (flags[i] ? p.marks : 0), 0);

  function toggle(i: number, v: boolean) {
    if (confirmed) return;
    setFlags((prev) => prev.map((f, j) => (j === i ? v : f)));
  }

  return (
    <div>
      <label className="font-display flex items-center gap-1.5 text-[13px] font-extrabold text-lapis-800">
        <IconPen size={15} /> اكتب حلك هنا — بخطواته كاملة كما في الدفتر
      </label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={revealed}
        rows={5}
        dir="auto"
        data-testid="written-answer"
        placeholder="اكتب الحل خطوة خطوة…"
        className="mt-2 w-full rounded-2xl border-2 border-cream-300 bg-white/70 px-4 py-3 text-[15px] font-semibold leading-7 outline-none focus:border-lapis-500 disabled:opacity-70"
      />
      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          data-testid="written-reveal"
          className="press font-display mt-3 inline-flex items-center gap-2 rounded-full bg-lapis-700 px-6 py-2.5 text-[14.5px] font-bold text-cream-50 shadow"
        >
          إظهار الحل النموذجي ومفتاح التصحيح
        </button>
      ) : (
        <div className="pop mt-4">
          <ModelAnswer q={q} />
          <RubricMarking q={q} flags={flags} onToggle={toggle} />
          {allDecided && !confirmed && (
            <button
              onClick={() => {
                setConfirmed(true);
                onComplete(earned);
              }}
              data-testid="written-confirm"
              className="press font-display mt-3 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-2.5 text-[14.5px] font-black text-lapis-950 shadow"
            >
              <IconCheck size={16} /> ثبّت درجتي: {earned} من {q.marks}
            </button>
          )}
          {confirmed && (
            <div className="mt-3 flex gap-2.5 rounded-2xl bg-gold-200/50 px-4 py-3 text-[14px] leading-7 text-gold-700">
              <span className="mt-1 shrink-0 text-gold-600">
                <IconBulb size={17} />
              </span>
              <span>
                <span className="font-display font-extrabold">سجّلنا درجتك بالتصحيح الذاتي ({earned}/{q.marks}). </span>
                {q.explain}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
