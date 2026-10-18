import { useState, type ComponentType } from 'react';
import { subjects, deckFor } from '../content/curriculum';
import type { Book, Unit } from '../content/types';
import type { AcademyState } from '../lib/store';
import { Chip, pct } from '../components/ui';
import {
  IconBook,
  IconPen,
  IconType,
  IconBulb,
  IconCheck,
  IconRefresh,
  IconQuizMark,
  IconCards,
  IconClipboard,
  IconTrophy,
  IconChevronEnd,
  IconChevronStart,
} from '../components/icons';

interface Props {
  state: AcademyState;
  book: Book;
  initialOpen: number;
  onBack: () => void;
  onOpenLesson: (unitId: string, lessonId: string) => void;
  onOpenQuiz: (unitId: string) => void;
  onOpenCards: (unitId: string) => void;
  onOpenExam: (examId: string) => void;
}

const kindMeta: Record<string, { Icon: ComponentType<{ size?: number; className?: string }>; label: string }> = {
  reading: { Icon: IconBook, label: 'قراءة' },
  grammar: { Icon: IconPen, label: 'قواعد' },
  vocab: { Icon: IconType, label: 'مفردات' },
  explain: { Icon: IconBulb, label: 'شرح' },
  solution: { Icon: IconPen, label: 'أمثلة محلولة' },
  laws: { Icon: IconBook, label: 'قوانين وخلاصة' },
  practice: { Icon: IconBulb, label: 'تمارين' },
};

export default function Subject({ state, book, initialOpen, onBack, onOpenLesson, onOpenQuiz, onOpenCards, onOpenExam }: Props) {
  const subject = subjects.find((s) => s.id === book.subjectId) ?? subjects[0];
  const capstone = book.capstone;
  const totalLessons = book.contentUnits.reduce((a, u) => a + u.lessons.length, 0);
  const vocabCount = book.contentUnits.reduce((a, u) => a + u.vocab.length, 0);
  const [open, setOpen] = useState<number>(initialOpen);
  const capBest = state.examBest[capstone.id];
  const capMarks = capstone.questions.reduce((a, q) => a + q.marks, 0);

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
        <div className="mt-3 flex flex-wrap gap-2">
          <Chip tone="lapis">{book.units.length} {book.unitsPlural}</Chip>
          <Chip tone="lapis">{totalLessons} درسًا</Chip>
          <Chip tone="lapis">{vocabCount} {book.vocabSuffix}</Chip>
          <Chip tone="teal">الكتاب مكتمل</Chip>
        </div>
      </header>

      {/* units accordion */}
      <div className="mt-5 space-y-3">
        {book.units.map((u) => (
          <UnitCard
            key={u.id}
            unit={u}
            book={book}
            state={state}
            open={open === u.number}
            onToggle={() => setOpen(open === u.number ? 0 : u.number)}
            onOpenLesson={onOpenLesson}
            onOpenQuiz={onOpenQuiz}
            onOpenCards={onOpenCards}
            onOpenExam={onOpenExam}
          />
        ))}
      </div>

      {/* capstone */}
      <section className="rise mt-5 overflow-hidden rounded-3xl border border-gold-400/70 bg-gradient-to-b from-lapis-700 to-lapis-900 shadow-xl">
        <div className="brick px-5 py-5">
          <div className="flex items-start gap-3.5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-500/20 text-gold-300 ring-1 ring-gold-300/40">
              <IconTrophy size={24} />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-[18px] font-black text-cream-50">{capstone.titleAr}</h3>
              <p className="en mt-0.5 text-[11.5px] font-semibold text-lapis-100/80" dir="ltr">{capstone.subtitleEn}</p>
              <p className="mt-2 text-[13px] leading-6 text-lapis-100/90">{book.capstoneBlurb}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Chip tone="gold">{capstone.questions.length} سؤالًا</Chip>
            <Chip tone="gold">{capMarks} درجة</Chip>
            <Chip tone="gold">{capstone.minutes} دقيقة</Chip>
            {capBest && <Chip tone="teal">أفضل نتيجة: {capBest.score}/{capBest.total}</Chip>}
            <button
              onClick={() => onOpenExam(capstone.id)}
              data-testid="capstone-open"
              className="press font-display ms-auto rounded-full bg-gold-500 px-6 py-2.5 text-[14.5px] font-extrabold text-lapis-950 shadow"
            >
              ابدأ الامتحان الشامل
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function UnitCard({
  unit: u,
  book,
  state,
  open,
  onToggle,
  onOpenLesson,
  onOpenQuiz,
  onOpenCards,
  onOpenExam,
}: {
  unit: Unit;
  book: Book;
  state: AcademyState;
  open: boolean;
  onToggle: () => void;
  onOpenLesson: (unitId: string, lessonId: string) => void;
  onOpenQuiz: (unitId: string) => void;
  onOpenCards: (unitId: string) => void;
  onOpenExam: (examId: string) => void;
}) {
  const isRev = u.kind === 'revision';
  const done = u.lessons.filter((l) => state.lessonsDone[l.id]).length;
  const quizBest = state.quizBest[u.id];
  const examBest = state.examBest[u.id];
  const deckCount = isRev ? deckFor(u.id).vocab.length : u.vocab.length;
  const examMarks = u.exam.reduce((a, q) => a + q.marks, 0);

  return (
    <section className={`rise overflow-hidden rounded-3xl border shadow-lg ${isRev ? 'border-gold-300/40 bg-cream-50' : 'border-gold-500/60 bg-cream-50'}`}>
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="brick block w-full bg-gradient-to-l from-lapis-800 to-lapis-700 px-5 py-4 text-start text-cream-50"
      >
        <div className="flex items-center gap-3">
          <span className={`font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-[16px] font-black ${isRev ? 'bg-gold-500/20 text-gold-300 ring-1 ring-gold-300/40' : 'bg-lapis-950/45 text-gold-300 ring-1 ring-gold-300/25'}`}>
            {isRev ? <IconRefresh size={20} /> : u.number}
          </span>
          <span className="min-w-0 flex-1">
            <span className="font-display block truncate text-[17px] font-extrabold">{u.titleAr}</span>
            {u.titleEn && <span className="en mt-0.5 block truncate text-[12px] text-lapis-100" dir="ltr">{u.titleEn}</span>}
          </span>
          <Chip tone="gold">{isRev ? 'مراجعة' : `${book.unitWord} ${u.number}`}</Chip>
          <span className={`shrink-0 text-gold-300 transition-transform duration-300 ${open ? 'rotate-90' : ''}`}>
            <IconChevronEnd size={18} />
          </span>
        </div>
        {!isRev && (
          <span className="mt-3 flex items-center gap-2">
            <span className="h-2 flex-1 overflow-hidden rounded-full bg-lapis-950/50">
              <span className="block h-full bg-gold-400 transition-all duration-700" style={{ width: `${pct(done, u.lessons.length)}%` }} />
            </span>
            <span className="text-[12px] font-bold text-gold-300">{done}/{u.lessons.length} دروس منجزة</span>
          </span>
        )}
        {isRev && (
          <span className="mt-2 block text-[12px] font-bold text-lapis-100/85">
            مراجعة الوحدات {(u.revises ?? []).join('، ')} — لا دروس جديدة؛ تثبيت وقياس
          </span>
        )}
      </button>

      {open && !isRev && (
        <div>
          <p className="px-5 pt-4 text-[13px] leading-6 text-ink-600">{u.theme}</p>
          <div className="mt-2 divide-y divide-cream-300/70">
            {u.lessons.map((l, idx) => {
              const isDone = !!state.lessonsDone[l.id];
              const km = kindMeta[l.kind];
              const KindIcon = km.Icon;
              return (
                <button
                  key={l.id}
                  onClick={() => onOpenLesson(u.id, l.id)}
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
            <button onClick={() => onOpenQuiz(u.id)} className="press rounded-2xl bg-lapis-700 px-2 py-3 text-center text-cream-50 shadow">
              <span className="flex justify-center text-gold-300"><IconQuizMark size={21} /></span>
              <span className="font-display mt-1 block text-[13px] font-bold">اختبار {book.unitWord}</span>
              <span className="block text-[11px] text-lapis-100">{quizBest ? `الأفضل: ${quizBest.score}/${quizBest.total}` : `${u.quiz.length} سؤالًا مع الشرح`}</span>
            </button>
            <button onClick={() => onOpenCards(u.id)} className="press rounded-2xl bg-cream-50 px-2 py-3 text-center text-lapis-700 shadow ring-1 ring-cream-300">
              <span className="flex justify-center"><IconCards size={21} /></span>
              <span className="font-display mt-1 block text-[13px] font-bold text-lapis-900">البطاقات</span>
              <span className="block text-[11px] text-ink-600">{u.vocab.length} {book.cardNoun} · لايتنر</span>
            </button>
            <button onClick={() => onOpenExam(u.id)} className="press rounded-2xl bg-gold-500 px-2 py-3 text-center text-lapis-950 shadow">
              <span className="flex justify-center"><IconClipboard size={21} /></span>
              <span className="font-display mt-1 block text-[13px] font-bold">الامتحان</span>
              <span className="block text-[11px] font-semibold text-lapis-900/80">{examBest ? `الأفضل: ${examBest.score}/${examBest.total}` : 'محاكاة وزارية'}</span>
            </button>
          </div>
        </div>
      )}

      {open && isRev && (
        <div className="px-5 py-4">
          <p className="text-[13.5px] leading-7 text-ink-900/90">
            في كتابك هذه الوحدة <strong>وحدة مراجعة</strong> أصلًا — لا دروس جديدة فيها. هنا تجد أدوات المراجعة
            الثلاث: اختبارًا مختلطًا من أسئلة الوحدات {u.revises?.join(' و')} بأسلوبها، وبطاقات مجمّعة لكلماتها
            كلها في نظام لايتنر، وامتحان «نصف الكتاب» بورقة واحدة مؤقّتة وتقرير يفصّل مستواك في كل وحدة مصدر.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Chip tone="lapis">اختبار مراجعة: {u.quiz.length} سؤالًا</Chip>
            <Chip tone="lapis">بطاقات مجمّعة: {deckCount} {book.cardNoun}</Chip>
            <Chip tone="lapis">نصف الكتاب: {u.exam.length} سؤالًا · {examMarks} درجة · {u.examMinutes} دقيقة</Chip>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <button onClick={() => onOpenQuiz(u.id)} className="press rounded-2xl bg-lapis-700 px-2 py-3 text-center text-cream-50 shadow">
              <span className="flex justify-center text-gold-300"><IconQuizMark size={21} /></span>
              <span className="font-display mt-1 block text-[13px] font-bold">اختبار المراجعة</span>
              <span className="block text-[11px] text-lapis-100">{quizBest ? `الأفضل: ${quizBest.score}/${quizBest.total}` : 'أسئلة مختلطة مع الشرح'}</span>
            </button>
            <button onClick={() => onOpenCards(u.id)} className="press rounded-2xl bg-cream-50 px-2 py-3 text-center text-lapis-700 shadow ring-1 ring-cream-300">
              <span className="flex justify-center"><IconCards size={21} /></span>
              <span className="font-display mt-1 block text-[13px] font-bold text-lapis-900">بطاقات المراجعة</span>
              <span className="block text-[11px] text-ink-600">{deckCount} {book.cardNoun} · لايتنر</span>
            </button>
            <button onClick={() => onOpenExam(u.id)} className="press rounded-2xl bg-gold-500 px-2 py-3 text-center text-lapis-950 shadow">
              <span className="flex justify-center"><IconClipboard size={21} /></span>
              <span className="font-display mt-1 block text-[13px] font-bold">امتحان نصف الكتاب</span>
              <span className="block text-[11px] font-semibold text-lapis-900/80">{examBest ? `الأفضل: ${examBest.score}/${examBest.total}` : 'محاكاة نصف الكتاب'}</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
