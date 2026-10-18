import { useEffect, useMemo, useState } from 'react';
import type { LessonSection, Unit, VocabWord } from '../content/types';
import type { AcademyState } from '../lib/store';
import { IconCheck, IconCards, IconChevronStart, IconIshtarStar, WedgeMark } from '../components/icons';

interface Props {
  state: AcademyState;
  unit: Unit;
  lessonId: string;
  onBack: () => void;
  onComplete: (lessonId: string) => void;
  onOpenCards: () => void;
}

function Section({ s, index, vocab }: { s: LessonSection; index: number; vocab: VocabWord[] }) {
  const vocabById = useMemo(() => Object.fromEntries(vocab.map((v) => [v.id, v])), [vocab]);
  return (
    <section className="rise rounded-3xl bg-cream-50 p-5 shadow-md">
      <h3 className="font-display flex items-center gap-2.5 text-[17px] font-extrabold text-lapis-900">
        <span className="flex h-8 shrink-0 items-center gap-1.5 rounded-full bg-lapis-700 py-1 pe-3 ps-2 text-gold-300">
          <WedgeMark size={15} />
          <span className="text-[12px] font-black text-cream-50">{index + 1}</span>
        </span>
        {s.title}
      </h3>
      {s.paragraphs?.map((p, i) => (
        <p key={i} className="mt-2.5 text-[15px] leading-8 text-ink-900/90">{p}</p>
      ))}
      {s.bullets && (
        <ul className="mt-3 space-y-2">
          {s.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-[14.5px] leading-7 text-ink-900/90">
              <span className="mt-[9px] h-2 w-2 shrink-0 rotate-45 bg-gold-500" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {s.examples && (
        <div className="mt-3 space-y-2">
          {s.examples.map((e, i) => (
            <div key={i} className="paper-quote rounded-2xl px-4 py-3">
              <p className="en text-[15px] font-semibold leading-6 text-lapis-900" dir="ltr">{e.en}</p>
              {e.ar && <p className="mt-1 text-[13px] leading-6 text-ink-600">{e.ar}</p>}
            </div>
          ))}
        </div>
      )}
      {s.table && (
        <div className="mt-3 overflow-x-auto rounded-2xl ring-1 ring-cream-300">
          <table className="w-full min-w-[520px] text-[13.5px]">
            <thead>
              <tr className="bg-lapis-700 text-cream-50">
                {s.table.head.map((h, i) => (
                  <th key={i} className="px-3 py-2.5 text-start font-display font-bold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {s.table.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 ? 'bg-cream-100/70' : 'bg-cream-50'}>
                  {row.map((cell, ci) =>
                    s.table!.ltrCols?.includes(ci) ? (
                      <td key={ci} className="en px-3 py-2.5 font-semibold text-lapis-900" dir="ltr">{cell}</td>
                    ) : (
                      <td key={ci} className="px-3 py-2.5 leading-6">{cell}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {s.vocabIds && (
        <div className="mt-3 overflow-hidden rounded-2xl ring-1 ring-cream-300">
          {s.vocabIds.map((id, i) => {
            const v = vocabById[id];
            if (!v) return null;
            return (
              <div key={id} className={`px-4 py-3 ${i % 2 ? 'bg-cream-100/70' : 'bg-cream-50'}`}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="en text-[16px] font-bold text-lapis-800" dir="ltr">{v.word}</span>
                  <span className="text-[11px] font-semibold text-gold-700">{v.pos}</span>
                  <span className="text-[14px] font-semibold leading-6 text-ink-900">{v.meaning}</span>
                </div>
                <p className="en mt-1 text-[13.5px] leading-5 text-ink-600" dir="ltr">{v.example}</p>
                <p className="text-[12.5px] leading-5 text-ink-400">{v.exampleAr}</p>
              </div>
            );
          })}
        </div>
      )}
      {s.callout && (
        <div className="mt-3 flex gap-2.5 rounded-2xl border border-gold-500/40 bg-gold-200/40 px-4 py-3 text-[13.5px] leading-6 text-gold-700">
          <span className="mt-0.5 shrink-0 text-gold-600">
            <IconIshtarStar size={18} />
          </span>
          <span>{s.callout}</span>
        </div>
      )}
    </section>
  );
}

export default function Lesson({ state, unit, lessonId, onBack, onComplete, onOpenCards }: Props) {
  const lesson = unit.lessons.find((l) => l.id === lessonId) ?? unit.lessons[0];
  const done = !!state.lessonsDone[lesson.id];
  const [readPct, setReadPct] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [lesson.id]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setReadPct(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lesson.id]);

  return (
    <div className="screen mx-auto w-full max-w-3xl px-4 pb-28 pt-5 lg:max-w-[1120px] lg:px-6">
      <button onClick={onBack} className="press inline-flex items-center gap-1.5 text-[13px] font-bold text-gold-300">
        <IconChevronStart size={15} /> العودة إلى الوحدة
      </button>

      {/* slim sticky sub-header: unit + lesson + reading progress */}
      <div className="sticky top-3 z-10 mt-3 overflow-hidden rounded-2xl bg-lapis-900/95 shadow-lg ring-1 ring-gold-300/20 backdrop-blur">
        <div className="flex items-center gap-3 px-4 py-2.5">
          <span className="shrink-0 rounded-full bg-gold-500/15 px-2.5 py-0.5 text-[11px] font-bold text-gold-300 ring-1 ring-gold-300/25">
            {unit.titleAr}
          </span>
          <span className="font-display min-w-0 flex-1 truncate text-[13.5px] font-bold text-cream-50">{lesson.title}</span>
          <span className="shrink-0 text-[11px] font-bold text-lapis-100/75">
            {lesson.sections.length} أقسام · قرأت {Math.round(readPct * 100)}٪
          </span>
        </div>
        <div className="h-[3px] bg-lapis-950/70">
          <div className="h-full bg-gradient-to-l from-gold-500 to-gold-300 transition-[width] duration-200" style={{ width: `${readPct * 100}%` }} />
        </div>
      </div>

      <div className="mx-auto w-full lg:max-w-[880px]">
        <header className="rise mt-4">
          <h2 className="font-display text-[22px] font-black leading-8 text-cream-50">{lesson.title}</h2>
          <p className="mt-1 flex items-center gap-1.5 text-[12.5px] text-lapis-100/80">
            {unit.titleAr} · {lesson.minutes} دقيقة تقريبًا
            {done && (
              <span className="inline-flex items-center gap-1 font-bold text-tealdeep-500">
                · <IconCheck size={13} /> منجز
              </span>
            )}
          </p>
          <p className="mt-3 rounded-3xl border border-cream-100/15 bg-lapis-900/70 p-4 text-[14.5px] leading-7 text-lapis-100">{lesson.intro}</p>
        </header>

        <div className="mt-4 space-y-4">
          {lesson.sections.map((s, i) => (
            <Section key={i} s={s} index={i} vocab={unit.vocab} />
          ))}
        </div>

        <div className="rise mt-5 rounded-3xl border border-gold-300/25 bg-gradient-to-b from-lapis-700 to-lapis-900 p-5 text-center shadow-lg">
          {done ? (
            <>
              <p className="font-display flex items-center justify-center gap-2 text-lg font-extrabold text-cream-50">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-tealdeep-500/25 text-tealdeep-500 ring-1 ring-tealdeep-500/40">
                  <IconCheck size={17} />
                </span>
                أنجزت هذا الدرس
              </p>
              <p className="mt-1 text-[13px] text-lapis-100">تقدّمك محفوظ على جهازك. الخطوة التالية: ثبّت ما تعلّمته.</p>
            </>
          ) : (
            <>
              <p className="font-display text-lg font-extrabold text-cream-50">أنهيت القراءة؟</p>
              <p className="mt-1 text-[13px] text-lapis-100">علّم الدرس كمنجز ليُحتسب في تقدّمك وتُفتح مراجعة كلماته.</p>
            </>
          )}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {!done && (
              <button
                onClick={() => onComplete(lesson.id)}
                data-testid="complete-lesson"
                className="press inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-display text-[15px] font-extrabold text-lapis-950 shadow"
              >
                <IconCheck size={17} /> علّم الدرس كمنجز
              </button>
            )}
            {lesson.kind === 'vocab' && (
              <button onClick={onOpenCards} className="press inline-flex items-center gap-2 rounded-full bg-cream-50 px-6 py-3 font-display text-[15px] font-extrabold text-lapis-900 shadow">
                <IconCards size={17} /> ابدأ مراجعة البطاقات
              </button>
            )}
            <button onClick={onBack} className="press rounded-full border border-cream-100/30 px-6 py-3 font-display text-[15px] font-bold text-cream-100">
              بقية الدروس
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
