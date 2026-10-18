import { useEffect, useMemo } from 'react';
import { liveUnit } from '../content/curriculum';
import type { LessonSection } from '../content/types';
import type { AcademyState } from '../lib/store';

interface Props {
  state: AcademyState;
  lessonId: string;
  onBack: () => void;
  onComplete: (lessonId: string) => void;
  onOpenCards: () => void;
}

function Section({ s }: { s: LessonSection }) {
  const vocabById = useMemo(() => Object.fromEntries(liveUnit.vocab.map((v) => [v.id, v])), []);
  return (
    <section className="rise rounded-3xl bg-cream-50 p-5 shadow-md">
      <h3 className="font-display text-[17px] font-extrabold text-lapis-900">{s.title}</h3>
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
            <div key={i} className="rounded-2xl bg-lapis-50 px-4 py-3">
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
        <div className="mt-3 rounded-2xl border border-gold-500/40 bg-gold-200/40 px-4 py-3 text-[13.5px] leading-6 text-gold-700">
          ⭐ {s.callout}
        </div>
      )}
    </section>
  );
}

export default function Lesson({ state, lessonId, onBack, onComplete, onOpenCards }: Props) {
  const lesson = liveUnit.lessons.find((l) => l.id === lessonId) ?? liveUnit.lessons[0];
  const done = !!state.lessonsDone[lesson.id];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [lesson.id]);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-28 pt-5">
      <button onClick={onBack} className="press text-[13px] font-bold text-gold-300">→ العودة إلى الوحدة</button>

      <header className="rise mt-3">
        <h2 className="font-display text-[22px] font-black leading-8 text-cream-50">{lesson.title}</h2>
        <p className="mt-1 text-[12.5px] text-lapis-100/80">الوحدة الأولى · {lesson.minutes} دقيقة تقريبًا {done ? '· ✅ منجز' : ''}</p>
        <p className="mt-3 rounded-3xl border border-cream-100/15 bg-lapis-900/70 p-4 text-[14.5px] leading-7 text-lapis-100">{lesson.intro}</p>
      </header>

      <div className="mt-4 space-y-4">
        {lesson.sections.map((s, i) => (
          <Section key={i} s={s} />
        ))}
      </div>

      <div className="rise mt-5 rounded-3xl bg-gradient-to-b from-lapis-700 to-lapis-900 p-5 text-center shadow-lg">
        {done ? (
          <>
            <p className="font-display text-lg font-extrabold text-cream-50">✅ أنجزت هذا الدرس</p>
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
              className="press rounded-full bg-gold-500 px-6 py-3 font-display text-[15px] font-extrabold text-lapis-950 shadow"
            >
              ✓ علّم الدرس كمنجز
            </button>
          )}
          {lesson.kind === 'vocab' && (
            <button onClick={onOpenCards} className="press rounded-full bg-cream-50 px-6 py-3 font-display text-[15px] font-extrabold text-lapis-900 shadow">
              🃏 ابدأ مراجعة البطاقات
            </button>
          )}
          <button onClick={onBack} className="press rounded-full border border-cream-100/30 px-6 py-3 font-display text-[15px] font-bold text-cream-100">
            بقية الدروس
          </button>
        </div>
      </div>
    </div>
  );
}
