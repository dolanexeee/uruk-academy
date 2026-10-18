import { useEffect, useMemo, useRef, useState } from 'react';
import { liveUnit } from '../content/curriculum';
import type { AcademyState } from '../lib/store';
import { ProgressRing, pct } from '../components/ui';
import {
  IconCheck,
  IconX,
  IconBulb,
  IconClock,
  IconClipboard,
  IconRefresh,
  IconChevronEnd,
  IconChevronStart,
} from '../components/icons';

interface Props {
  state: AcademyState;
  onBack: () => void;
  onFinish: (score: number, total: number, perSkill: Record<string, { score: number; total: number }>) => void;
}

const skillLabel: Record<string, string> = { reading: 'الاستيعاب القرائي', grammar: 'القواعد', vocab: 'المفردات' };
const skillOrder = ['reading', 'grammar', 'vocab'];

export default function Exam({ state, onBack, onFinish }: Props) {
  const questions = useMemo(() => liveUnit.exam, []);
  const totalMarks = useMemo(() => questions.reduce((a, q) => a + q.marks, 0), []);
  const [phase, setPhase] = useState<'intro' | 'run' | 'report'>('intro');
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [idx, setIdx] = useState(0);
  const [left, setLeft] = useState(liveUnit.examMinutes * 60);
  const submitted = useRef(false);

  const best = state.examBest[liveUnit.id];

  function submit() {
    if (submitted.current) return;
    submitted.current = true;
    const perSkill: Record<string, { score: number; total: number }> = {};
    let score = 0;
    for (const q of questions) {
      perSkill[q.skill] ??= { score: 0, total: 0 };
      perSkill[q.skill].total += q.marks;
      if (answers[q.id] === q.answer) {
        score += q.marks;
        perSkill[q.skill].score += q.marks;
      }
    }
    onFinish(score, totalMarks, perSkill);
    setPhase('report');
  }

  useEffect(() => {
    if (phase !== 'run') return;
    const t = setInterval(() => {
      setLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          setTimeout(submit, 0);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const mm = String(Math.floor(left / 60)).padStart(2, '0');
  const ss = String(left % 60).padStart(2, '0');
  const answeredCount = Object.keys(answers).length;

  /* ------------------------------ intro ------------------------------ */
  if (phase === 'intro') {
    return (
      <div className="screen ground mx-auto flex min-h-[calc(100dvh-2rem)] w-full max-w-3xl flex-col px-4 pb-28 pt-5 lg:max-w-[1120px] lg:px-6">
        <button onClick={onBack} className="press inline-flex items-center gap-1.5 self-start text-[13px] font-bold text-gold-300">
          <IconChevronStart size={15} /> العودة إلى الوحدة
        </button>
        <div className="rise my-auto mt-3 w-full rounded-3xl bg-cream-50 p-6 shadow-xl lg:mx-auto lg:max-w-3xl">
          <div className="text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lapis-700 text-gold-300 shadow">
              <IconClipboard size={32} />
            </span>
            <h2 className="font-display mt-3 text-2xl font-black text-lapis-900">الامتحان الوزاري — الوحدة الأولى</h2>
            <p className="en mt-1 text-[12px] font-semibold text-ink-400" dir="ltr">English for Iraq · Sixth Preparatory · Unit One</p>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-2xl bg-lapis-50 px-2 py-3">
              <p className="font-display text-xl font-black text-lapis-800">{questions.length}</p>
              <p className="text-[11.5px] font-semibold text-ink-600">سؤالًا</p>
            </div>
            <div className="rounded-2xl bg-lapis-50 px-2 py-3">
              <p className="font-display text-xl font-black text-lapis-800">{totalMarks}</p>
              <p className="text-[11.5px] font-semibold text-ink-600">درجة كلية</p>
            </div>
            <div className="rounded-2xl bg-lapis-50 px-2 py-3">
              <p className="font-display text-xl font-black text-lapis-800">{liveUnit.examMinutes}</p>
              <p className="text-[11.5px] font-semibold text-ink-600">دقيقة</p>
            </div>
          </div>
          <ul className="mt-5 space-y-2 text-[14px] leading-7 text-ink-900/90">
            <li className="flex gap-2"><span className="mt-[9px] h-2 w-2 shrink-0 rotate-45 bg-gold-500" />ثلاثة أقسام بأسلوب الورقة الوزارية: استيعاب قرائي، وقواعد، ومفردات — والدرجات ظاهرة لكل قسم.</li>
            <li className="flex gap-2"><span className="mt-[9px] h-2 w-2 shrink-0 rotate-45 bg-gold-500" />لا تصحيح فوريًا أثناء الامتحان؛ النتيجة والتقرير الكامل بتصحيح كل سؤال بعد التسليم فقط.</li>
            <li className="flex gap-2"><span className="mt-[9px] h-2 w-2 shrink-0 rotate-45 bg-gold-500" />عند انتهاء الوقت يُسلَّم الامتحان تلقائيًا بما أجبت عنه.</li>
          </ul>
          {best && (
            <p className="mt-4 rounded-2xl bg-gold-200/50 px-4 py-3 text-center text-[13.5px] font-bold text-gold-700">
              أفضل نتيجة سابقة لك: {best.score}/{best.total} · بتاريخ {best.at}
            </p>
          )}
          <button
            onClick={() => { submitted.current = false; setAnswers({}); setIdx(0); setLeft(liveUnit.examMinutes * 60); setPhase('run'); }}
            data-testid="exam-start"
            className="press font-display mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 py-3.5 text-[16px] font-black text-lapis-950 shadow"
          >
            ابدأ الامتحان <IconClock size={19} />
          </button>
        </div>
      </div>
    );
  }

  /* ------------------------------ report ------------------------------ */
  if (phase === 'report') {
    const perSkill: Record<string, { score: number; total: number }> = {};
    let score = 0;
    for (const q of questions) {
      perSkill[q.skill] ??= { score: 0, total: 0 };
      perSkill[q.skill].total += q.marks;
      if (answers[q.id] === q.answer) {
        score += q.marks;
        perSkill[q.skill].score += q.marks;
      }
    }
    return (
      <div className="screen ground mx-auto w-full max-w-3xl px-4 pb-28 pt-5 lg:max-w-[1120px] lg:px-6">
        <div className="pop rounded-3xl bg-cream-50 p-6 shadow-xl lg:mx-auto lg:max-w-3xl">
          <h2 className="font-display text-center text-2xl font-black text-lapis-900">تقرير الامتحان</h2>
          <div className="mt-4 flex justify-center">
            <ProgressRing value={score / totalMarks} size={120} stroke={10} track="rgba(18,48,100,0.10)" bar="#D9A441">
              <div className="text-center">
                <p className="font-display text-3xl font-black text-lapis-900">{score}</p>
                <p className="text-[11px] font-bold text-ink-400">من {totalMarks}</p>
              </div>
            </ProgressRing>
          </div>
          <p className="mt-3 text-center text-[14px] font-semibold text-ink-600">
            {pct(score, totalMarks)}٪ — {score / totalMarks >= 0.85 ? 'أداء ممتاز، مستوى وزاري واثق.' : score / totalMarks >= 0.6 ? 'أداء جيد، وبعض المواضع تحتاج تثبيتًا.' : 'راجع التصحيح أدناه موضعًا موضعًا، ثم أعد المحاولة.'}
          </p>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {skillOrder.map((sk) => (
              <div key={sk} className="rounded-2xl bg-lapis-50 px-2 py-3 text-center">
                <p className="text-[12px] font-bold text-ink-600">{skillLabel[sk]}</p>
                <p className="font-display mt-1 text-lg font-black text-lapis-800">
                  {perSkill[sk]?.score ?? 0}<span className="text-[12px] text-ink-400">/{perSkill[sk]?.total ?? 0}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="font-display mt-6 text-lg font-black text-cream-50 lg:mx-auto lg:max-w-3xl">تصحيح الأسئلة سؤالًا سؤالًا</h3>
        <div className="mt-3 space-y-3">
          {questions.map((q, i) => {
            const mine = answers[q.id];
            const ok = mine === q.answer;
            return (
              <article key={q.id} className={`rise rounded-3xl border-2 p-4 shadow lg:mx-auto lg:max-w-3xl ${ok ? 'border-tealdeep-500/40 bg-cream-50' : 'border-red-300/70 bg-cream-50'}`}>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[12px] font-bold text-ink-400">سؤال {i + 1} · {skillLabel[q.skill]} · {q.marks} درجات</span>
                  <span className={`font-display inline-flex items-center gap-1 text-[13px] font-extrabold ${ok ? 'text-tealdeep-600' : 'text-red-600'}`}>
                    {ok ? <><IconCheck size={15} /> صحيح</> : <><IconX size={15} /> خطأ</>}
                  </span>
                </div>
                <p className="mt-2 text-[14.5px] font-semibold leading-7 text-ink-900">{q.q}</p>
                {q.qEn && <p className="en paper-quote mt-1 rounded-xl px-3 py-2 text-[14.5px] font-semibold leading-6 text-lapis-900" dir="ltr">{q.qEn}</p>}
                <div className="mt-2 space-y-1 text-[13.5px] leading-6">
                  <p>
                    <span className="font-bold text-ink-600">إجابتك: </span>
                    <span className={ok ? 'text-tealdeep-600 font-semibold' : 'text-red-600 font-semibold'}>
                      {mine === undefined ? '— لم تُجب —' : q.options[mine]}
                    </span>
                  </p>
                  {!ok && (
                    <p>
                      <span className="font-bold text-ink-600">الإجابة الصحيحة: </span>
                      <span className="font-semibold text-tealdeep-600">{q.options[q.answer]}</span>
                    </p>
                  )}
                  <p className="flex gap-1.5 text-ink-600">
                    <span className="mt-0.5 shrink-0 text-gold-600"><IconBulb size={16} /></span>
                    <span>{q.explain}</span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => setPhase('intro')} className="press inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-display text-[15px] font-extrabold text-lapis-950 shadow">
            <IconRefresh size={16} /> إعادة الامتحان
          </button>
          <button onClick={onBack} className="press rounded-full bg-lapis-700 px-6 py-3 font-display text-[15px] font-bold text-cream-50 shadow">
            العودة إلى الوحدة
          </button>
        </div>
      </div>
    );
  }

  /* ------------------------------ run ------------------------------ */
  const q = questions[idx];
  return (
    <div className="screen ground mx-auto flex min-h-[calc(100dvh-2rem)] w-full max-w-3xl flex-col px-4 pb-28 pt-5 lg:max-w-[1120px] lg:px-6">
      <div className="sticky top-3 z-10 flex items-center justify-between gap-2 rounded-full bg-lapis-900/95 py-2 pe-2 ps-4 shadow-lg backdrop-blur lg:mx-auto lg:w-full lg:max-w-3xl">
        <span className={`font-display inline-flex items-center gap-1.5 text-[15px] font-black tabular-nums ${left <= 60 ? 'text-red-300' : 'text-gold-300'}`} data-testid="exam-timer">
          <IconClock size={17} /> {mm}:{ss}
        </span>
        <span className="text-[12.5px] font-bold text-lapis-100">أجبت عن {answeredCount} من {questions.length}</span>
        <button onClick={submit} data-testid="exam-submit" className="press rounded-full bg-gold-500 px-4 py-1.5 font-display text-[13.5px] font-extrabold text-lapis-950">
          تسليم الامتحان
        </button>
      </div>

      {/* navigator */}
      <div className="mt-4 flex flex-wrap gap-1.5 lg:mx-auto lg:w-full lg:max-w-3xl">
        {questions.map((qq, i) => (
          <button
            key={qq.id}
            onClick={() => setIdx(i)}
            className={`press h-8 w-8 rounded-full text-[12.5px] font-bold ${
              i === idx
                ? 'bg-gold-500 text-lapis-950'
                : answers[qq.id] !== undefined
                  ? 'bg-tealdeep-500 text-white'
                  : 'bg-lapis-900/70 text-lapis-100 ring-1 ring-cream-100/20'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="flex flex-1 items-center justify-center py-4">
      <div className="rise w-full max-w-3xl rounded-3xl bg-cream-50 p-5 shadow-xl" key={q.id}>
        <div className="flex items-center justify-between">
          <span className="paper-quote rounded-full px-3 py-0.5 text-[11.5px] font-bold text-lapis-700">{skillLabel[q.skill]}</span>
          <span className="text-[12px] font-bold text-ink-400">السؤال {idx + 1} · {q.marks} درجات</span>
        </div>
        <h3 className="mt-3 text-[16px] font-bold leading-8 text-ink-900">{q.q}</h3>
        {q.qEn && <p className="en paper-quote mt-1 rounded-2xl px-4 py-3 text-[15.5px] font-semibold leading-6 text-lapis-900" dir="ltr">{q.qEn}</p>}
        <div className="mt-4 grid gap-2">
          {q.options.map((opt, i) => {
            const selected = answers[q.id] === i;
            const isEn = /[A-Za-z]/.test(opt) && !/[\u0600-\u06FF]/.test(opt);
            return (
              <button
                key={i}
                onClick={() => setAnswers((a) => ({ ...a, [q.id]: i }))}
                data-testid={`exam-option-${i}`}
                className={`press w-full rounded-2xl border-2 px-4 py-3 text-start text-[15px] font-semibold leading-6 ${
                  selected ? 'border-lapis-600 bg-lapis-600 text-cream-50' : 'border-cream-300 bg-white/60 hover:border-lapis-500/50'
                } ${isEn ? 'en' : ''}`}
                dir={isEn ? 'ltr' : 'rtl'}
              >
                {opt}
              </button>
            );
          })}
        </div>
        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={() => setIdx((i) => Math.max(0, i - 1))}
            disabled={idx === 0}
            className="press inline-flex items-center gap-1.5 rounded-full border border-ink-900/15 px-5 py-2.5 font-display text-[14px] font-bold text-ink-900 disabled:opacity-40"
          >
            <IconChevronStart size={15} /> السابق
          </button>
          {idx < questions.length - 1 ? (
            <button
              onClick={() => setIdx((i) => i + 1)}
              data-testid="exam-next"
              className="press inline-flex items-center gap-1.5 rounded-full bg-lapis-700 px-5 py-2.5 font-display text-[14px] font-bold text-cream-50 shadow"
            >
              التالي <IconChevronEnd size={15} />
            </button>
          ) : (
            <button onClick={submit} className="press rounded-full bg-gold-500 px-5 py-2.5 font-display text-[14px] font-extrabold text-lapis-950 shadow">
              إنهاء وتسليم
            </button>
          )}
        </div>
      </div>
      </div>
      <p className="text-center text-[12px] text-lapis-100/60">لن يظهر أي تصحيح حتى تُسلّم الامتحان — تمامًا كالقاعة الحقيقية.</p>
    </div>
  );
}
