import { useMemo, useState } from 'react';
import type { QuizQuestion } from '../content/types';
import { Chip } from '../components/ui';
import {
  IconCheck,
  IconX,
  IconTrophy,
  IconIshtarStar,
  IconFlame,
  IconClipboard,
  IconRefresh,
  IconChevronEnd,
  IconChevronStart,
} from '../components/icons';

interface Props {
  questions: QuizQuestion[];
  /** Heading on the result screen, e.g. «نتيجتك في اختبار الوحدة». */
  finishTitle: string;
  backLabel: string;
  examLabel: string;
  onBack: () => void;
  onFinish: (score: number, total: number) => void;
  onOpenExam: () => void;
}

const skillLabel: Record<string, string> = { reading: 'استيعاب قراءة', grammar: 'قواعد', vocab: 'مفردات' };

export default function Quiz({ questions: pool, finishTitle, backLabel, examLabel, onBack, onFinish, onOpenExam }: Props) {
  const questions = useMemo(() => pool, [pool]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[idx];
  const isLast = idx === questions.length - 1;

  function pick(i: number) {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + q.marks);
  }

  function next() {
    if (isLast) {
      setFinished(true);
      onFinish(score, questions.reduce((a, x) => a + x.marks, 0));
    } else {
      setIdx((i) => i + 1);
      setPicked(null);
    }
  }

  function restart() {
    setIdx(0);
    setPicked(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const total = questions.reduce((a, x) => a + x.marks, 0);
    const ratio = score / total;
    return (
      <div className="screen ground mx-auto flex min-h-[calc(100dvh-2rem)] w-full max-w-3xl flex-col px-4 pb-28 pt-5 lg:max-w-[1120px] lg:px-6">
        <div className="pop my-auto w-full rounded-3xl bg-cream-50 p-6 text-center shadow-xl lg:mx-auto lg:max-w-3xl">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/15 text-gold-600 ring-1 ring-gold-500/35">
            {ratio >= 0.85 ? <IconTrophy size={32} /> : ratio >= 0.6 ? <IconIshtarStar size={32} /> : <IconFlame size={32} />}
          </span>
          <h2 className="font-display mt-3 text-2xl font-black text-lapis-900">{finishTitle}</h2>
          <p className="font-display mt-2 text-4xl font-black text-gold-600">
            {score} <span className="text-xl text-ink-400">/ {total}</span>
          </p>
          <p className="mx-auto mt-2 max-w-md text-[14px] leading-6 text-ink-600">
            {ratio >= 0.85
              ? 'ممتاز! أنت جاهز تقريبًا لوضع الامتحان الوزاري.'
              : ratio >= 0.6
                ? 'جيد. راجع شروح الأسئلة التي أخطأت فيها، ثم جرّب الامتحان الوزاري.'
                : 'بداية طيبة. عُد إلى الدروس وركّز على المواضع التي أخطأت فيها، وستتحسّن النتيجة سريعًا.'}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <button onClick={onOpenExam} className="press inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-display text-[15px] font-extrabold text-lapis-950 shadow">
              <IconClipboard size={17} /> {examLabel}
            </button>
            <button onClick={restart} className="press inline-flex items-center gap-2 rounded-full bg-lapis-700 px-6 py-3 font-display text-[15px] font-bold text-cream-50 shadow">
              <IconRefresh size={16} /> إعادة الاختبار
            </button>
            <button onClick={onBack} className="press rounded-full border border-ink-900/15 px-6 py-3 font-display text-[15px] font-bold text-ink-900">
              {backLabel}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const correct = picked !== null && picked === q.answer;

  return (
    <div className="screen ground mx-auto flex min-h-[calc(100dvh-2rem)] w-full max-w-3xl flex-col px-4 pb-28 pt-5 lg:max-w-[1120px] lg:px-6">
      <button onClick={onBack} className="press inline-flex items-center gap-1.5 self-start text-[13px] font-bold text-gold-300">
        <IconChevronStart size={15} /> {backLabel}
      </button>

      <div className="flex flex-1 items-center justify-center py-4">
        <div className="rise flex w-full max-w-3xl flex-col rounded-3xl bg-cream-50 p-5 shadow-xl">
          <div className="flex items-center justify-between gap-2">
            <Chip tone="lapis">{skillLabel[q.skill]}</Chip>
            <span className="text-[12.5px] font-bold text-ink-400">
              السؤال {idx + 1} من {questions.length}
            </span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-lapis-100">
            <div className="h-full bg-gradient-to-l from-gold-500 to-gold-400 transition-all duration-500" style={{ width: `${((idx + (picked !== null ? 1 : 0)) / questions.length) * 100}%` }} />
          </div>

          <h3 className="mt-4 text-[16.5px] font-bold leading-8 text-ink-900">{q.q}</h3>
          {q.qEn && (
            <p className="en paper-quote mt-1 rounded-2xl px-4 py-3 text-[15.5px] font-semibold leading-6 text-lapis-900" dir="ltr">
              {q.qEn}
            </p>
          )}

          <div className="mt-4 grid gap-2">
            {q.options.map((opt, i) => {
              const isPicked = picked === i;
              const isAnswer = q.answer === i;
              let cls = 'border-cream-300 bg-white/60 hover:border-lapis-500/50';
              if (picked !== null) {
                if (isAnswer) cls = 'border-tealdeep-500 bg-tealdeep-500/10 text-tealdeep-800';
                else if (isPicked) cls = 'border-red-400 bg-red-50 text-red-800';
                else cls = 'border-cream-300 bg-white/40 opacity-60';
              }
              const isEn = /[A-Za-z]/.test(opt) && !/[\u0600-\u06FF]/.test(opt);
              return (
                <button
                  key={i}
                  onClick={() => pick(i)}
                  disabled={picked !== null}
                  data-testid={`quiz-option-${i}`}
                  className={`press flex w-full items-center gap-2 rounded-2xl border-2 px-4 py-3 text-start text-[15px] font-semibold leading-6 ${cls} ${isEn ? 'en' : ''}`}
                  dir={isEn ? 'ltr' : 'rtl'}
                >
                  <span className="flex-1">{opt}</span>
                  {picked !== null && isAnswer && (
                    <span className="shrink-0 text-tealdeep-600"><IconCheck size={18} /></span>
                  )}
                  {picked !== null && isPicked && !isAnswer && (
                    <span className="shrink-0 text-red-500"><IconX size={18} /></span>
                  )}
                </button>
              );
            })}
          </div>

          {picked !== null && (
            <div className={`pop mt-4 flex gap-2.5 rounded-2xl px-4 py-3 text-[14px] leading-7 ${correct ? 'bg-tealdeep-500/10 text-tealdeep-800' : 'bg-gold-200/50 text-gold-700'}`}>
              <span className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${correct ? 'bg-tealdeep-500 text-white' : 'bg-gold-500 text-lapis-950'}`}>
                {correct ? <IconCheck size={14} /> : <IconX size={14} />}
              </span>
              <span>
                <span className="font-display font-extrabold">{correct ? 'إجابة صحيحة! ' : 'ليست الإجابة الصحيحة. '}</span>
                {q.explain}
              </span>
            </div>
          )}

          <div className="mt-auto flex items-center justify-between pt-5">
            <span className="text-[13px] font-bold text-ink-400">درجتك حتى الآن: {score}</span>
            <button
              onClick={next}
              disabled={picked === null}
              data-testid="quiz-next"
              className="press inline-flex items-center gap-1.5 rounded-full bg-lapis-700 px-6 py-2.5 font-display text-[14.5px] font-bold text-cream-50 shadow disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isLast ? 'إنهاء وعرض النتيجة' : (
                <>السؤال التالي <IconChevronEnd size={15} /></>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
