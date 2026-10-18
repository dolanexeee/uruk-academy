import { subjects, liveUnit } from '../content/curriculum';
import type { AcademyState } from '../lib/store';
import { Chip, pct } from '../components/ui';
import {
  IconBook,
  IconPen,
  IconType,
  IconBulb,
  IconCheck,
  IconLock,
  IconQuizMark,
  IconCards,
  IconClipboard,
  IconChevronEnd,
  IconChevronStart,
} from '../components/icons';
import type { ComponentType } from 'react';

interface Props {
  state: AcademyState;
  onBack: () => void;
  onOpenLesson: (lessonId: string) => void;
  onOpenQuiz: () => void;
  onOpenCards: () => void;
  onOpenExam: () => void;
}

const kindMeta: Record<string, { Icon: ComponentType<{ size?: number; className?: string }>; label: string }> = {
  reading: { Icon: IconBook, label: 'قراءة' },
  grammar: { Icon: IconPen, label: 'قواعد' },
  vocab: { Icon: IconType, label: 'مفردات' },
  explain: { Icon: IconBulb, label: 'شرح' },
};

export default function Subject({ state, onBack, onOpenLesson, onOpenQuiz, onOpenCards, onOpenExam }: Props) {
  const subject = subjects[0];
  const done = liveUnit.lessons.filter((l) => state.lessonsDone[l.id]).length;
  const quizBest = state.quizBest[liveUnit.id];
  const examBest = state.examBest[liveUnit.id];

  return (
    <div className="screen mx-auto w-full max-w-3xl px-4 pb-28 pt-5 lg:max-w-[1120px] lg:px-6">
      <button onClick={onBack} className="press inline-flex items-center gap-1.5 text-[13px] font-bold text-gold-300">
        <IconChevronStart size={15} /> العودة إلى الرئيسية
      </button>

      <header className="rise mt-3 rounded-3xl bg-cream-50 p-5 shadow-lg">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl font-black text-lapis-900">{subject.titleAr}</h2>
            <p className="en mt-1 text-[12px] font-semibold text-ink-400">{subject.titleEn} — Sixth Preparatory · Iraq</p>
          </div>
          <Chip tone="gold">{subject.grade}</Chip>
        </div>
        <p className="mt-2 text-[13.5px] leading-6 text-ink-600">{subject.blurb}</p>
      </header>

      {/* units tree */}
      <div className="mt-5 space-y-3">
        {subject.units.map((u) => {
          if (u.status === 'live') {
            return (
              <section key={u.number} className="rise overflow-hidden rounded-3xl border border-gold-500/60 bg-cream-50 shadow-lg">
                <div className="brick bg-gradient-to-l from-lapis-800 to-lapis-700 px-5 py-4 text-cream-50">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-[17px] font-extrabold">{u.titleAr}</h3>
                    <Chip tone="gold">الوحدة {u.number}</Chip>
                  </div>
                  <p className="en mt-1 text-[12px] text-lapis-100" dir="ltr">{u.titleEn}</p>
                  <p className="mt-2 text-[12.5px] leading-5 text-lapis-100/85">{liveUnit.theme}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-lapis-950/50">
                      <div className="h-full bg-gold-400 transition-all duration-700" style={{ width: `${pct(done, liveUnit.lessons.length)}%` }} />
                    </div>
                    <span className="text-[12px] font-bold text-gold-300">{done}/{liveUnit.lessons.length} دروس منجزة</span>
                  </div>
                </div>

                <div className="divide-y divide-cream-300/70">
                  {liveUnit.lessons.map((l, idx) => {
                    const isDone = !!state.lessonsDone[l.id];
                    const km = kindMeta[l.kind];
                    const KindIcon = km.Icon;
                    return (
                      <button
                        key={l.id}
                        onClick={() => onOpenLesson(l.id)}
                        className="press flex w-full items-center gap-3 px-5 py-4 text-start hover:bg-cream-100/60"
                      >
                        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${isDone ? 'bg-tealdeep-500/15 text-tealdeep-600' : 'paper-quote text-lapis-700'}`}>
                          {isDone ? <IconCheck size={20} /> : <KindIcon size={20} />}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="font-display block truncate text-[15px] font-bold text-lapis-900">
                            {idx + 1}. {l.title}
                          </span>
                          <span className="mt-0.5 block text-[12px] text-ink-600">
                            {km.label} · {l.minutes} دقيقة {isDone ? '· منجز' : ''}
                          </span>
                        </span>
                        <span className="text-lapis-600">
                          <IconChevronEnd size={17} />
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="grid grid-cols-3 gap-2 border-t border-cream-300/70 bg-cream-100/50 p-3">
                  <button onClick={onOpenQuiz} className="press rounded-2xl bg-lapis-700 px-2 py-3 text-center text-cream-50 shadow">
                    <span className="flex justify-center text-gold-300"><IconQuizMark size={21} /></span>
                    <span className="font-display mt-1 block text-[13px] font-bold">اختبار الوحدة</span>
                    <span className="block text-[11px] text-lapis-100">{quizBest ? `الأفضل: ${quizBest.score}/${quizBest.total}` : `${liveUnit.quiz.length} سؤالًا مع الشرح`}</span>
                  </button>
                  <button onClick={onOpenCards} className="press rounded-2xl bg-cream-50 px-2 py-3 text-center text-lapis-700 shadow ring-1 ring-cream-300">
                    <span className="flex justify-center"><IconCards size={21} /></span>
                    <span className="font-display mt-1 block text-[13px] font-bold text-lapis-900">البطاقات</span>
                    <span className="block text-[11px] text-ink-600">{liveUnit.vocab.length} كلمة · لايتنر</span>
                  </button>
                  <button onClick={onOpenExam} className="press rounded-2xl bg-gold-500 px-2 py-3 text-center text-lapis-950 shadow">
                    <span className="flex justify-center"><IconClipboard size={21} /></span>
                    <span className="font-display mt-1 block text-[13px] font-bold">الامتحان</span>
                    <span className="block text-[11px] font-semibold text-lapis-900/80">{examBest ? `الأفضل: ${examBest.score}/${examBest.total}` : 'محاكاة وزارية'}</span>
                  </button>
                </div>
              </section>
            );
          }
          return (
            <div key={u.number} aria-disabled="true" className="rise locked-pattern flex items-center gap-3.5 rounded-3xl border border-dashed border-cream-100/25 px-5 py-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lapis-950/60 text-gold-300 ring-1 ring-gold-300/30">
                <IconLock size={19} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-[15px] font-bold text-cream-50">
                  الوحدة {u.number} — {u.titleAr}
                </p>
                {u.titleEn && <p className="en mt-0.5 text-[11px] text-lapis-100/70" dir="ltr">{u.titleEn}</p>}
              </div>
              <Chip tone="gold">{u.status === 'revision' ? 'مراجعة · قريبًا' : 'قريبًا'}</Chip>
            </div>
          );
        })}
      </div>
    </div>
  );
}
