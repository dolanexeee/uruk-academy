import { useMemo, useState } from 'react';
import Home from './views/Home';
import Subject from './views/Subject';
import Lesson from './views/Lesson';
import Quiz from './views/Quiz';
import Cards from './views/Cards';
import Exam from './views/Exam';
import Profile from './views/Profile';
import {
  loadState,
  saveState,
  emptyState,
  completeLesson as storeCompleteLesson,
  recordQuiz,
  recordExam,
  encounterVocab,
  srsAnswer,
  dueVocabIds,
  type AcademyState,
} from './lib/store';
import {
  allBooksVocab,
  bookBySubjectId,
  bookOfCapstone,
  bookOfUnit,
  capstone,
  deckFor,
  examSpecForUnit,
  unitById,
} from './content/curriculum';
import { ZigguratMark } from './components/ui';
import { IconHome, IconBook, IconCards, IconUser } from './components/icons';

type Route =
  | { name: 'home' }
  | { name: 'subject'; subjectId: string }
  | { name: 'lesson'; unitId: string; id: string }
  | { name: 'quiz'; unitId: string }
  | { name: 'cards'; deckId: string }
  | { name: 'exam'; examId: string }
  | { name: 'profile' };

export default function App() {
  const [state, setState] = useState<AcademyState>(() => loadState());
  const [route, setRoute] = useState<Route>({ name: 'home' });
  /** Which unit the subject accordion opens on (last unit the student touched). */
  const [subjectFocus, setSubjectFocus] = useState(1);
  /** The subject the bottom-nav «المنهج» returns to. */
  const [lastSubjectId, setLastSubjectId] = useState('en6');

  function update(fn: (s: AcademyState) => void) {
    setState((prev) => {
      const next: AcademyState = {
        ...prev,
        lessonsDone: { ...prev.lessonsDone },
        quizBest: { ...prev.quizBest },
        quizLast: { ...prev.quizLast },
        examBest: { ...prev.examBest },
        examLast: { ...prev.examLast },
        srs: { ...prev.srs },
        days: { ...prev.days },
      };
      fn(next);
      saveState(next);
      return next;
    });
  }

  const dueCount = useMemo(
    () => dueVocabIds(state, allBooksVocab.map((v) => v.id)).length,
    [state],
  );

  const go = (r: Route) => {
    setRoute(r);
    window.scrollTo({ top: 0 });
  };

  const goSubject = (subjectId: string) => {
    setLastSubjectId(subjectId);
    go({ name: 'subject', subjectId });
  };

  const openUnit = (unitId: string, r: Route) => {
    const u = unitById(unitId);
    if (u) setSubjectFocus(u.number);
    const b = bookOfUnit(unitId);
    if (b) setLastSubjectId(b.subjectId);
    go(r);
  };

  /** Back target for anything inside a unit: that unit's subject page. */
  const backToUnitSubject = (unitId: string) => goSubject(bookOfUnit(unitId)?.subjectId ?? 'en6');

  const navBtn = (active: boolean) =>
    `press flex flex-1 flex-col items-center gap-1 rounded-2xl py-2 text-[11px] font-bold ${
      active ? 'text-gold-300' : 'text-lapis-100/65 hover:text-lapis-100'
    }`;

  const quizUnit = route.name === 'quiz' ? unitById(route.unitId) : undefined;
  const examSpec =
    route.name === 'exam'
      ? (() => {
          const cap = bookOfCapstone(route.examId);
          if (cap) return cap.capstone;
          const u = unitById(route.examId);
          return u ? examSpecForUnit(u) : capstone;
        })()
      : null;
  const lessonUnit = route.name === 'lesson' ? unitById(route.unitId) : undefined;
  const subjectBook = route.name === 'subject' ? bookBySubjectId(route.subjectId) : undefined;
  /** Where an exam's back button lands: its book's subject page. */
  const examBackSubject = (examId: string): string => {
    const cap = bookOfCapstone(examId);
    if (cap) return cap.subjectId;
    return bookOfUnit(examId)?.subjectId ?? 'en6';
  };

  return (
    <div className="min-h-dvh bg-lapis-950 bg-[radial-gradient(120%_60%_at_50%_0%,#123064_0%,#0a1c40_55%,#050f26_100%)]">
      {route.name === 'home' && (
        <Home
          state={state}
          dueCount={dueCount}
          onOpenSubject={(subjectId) => goSubject(subjectId)}
          onOpenCards={() => go({ name: 'cards', deckId: 'all' })}
          onOpenExam={() => go({ name: 'exam', examId: capstone.id })}
          onOpenProfile={() => go({ name: 'profile' })}
        />
      )}
      {route.name === 'subject' && subjectBook && (
        <Subject
          state={state}
          book={subjectBook}
          initialOpen={subjectFocus}
          onBack={() => go({ name: 'home' })}
          onOpenLesson={(unitId, id) => openUnit(unitId, { name: 'lesson', unitId, id })}
          onOpenQuiz={(unitId) => openUnit(unitId, { name: 'quiz', unitId })}
          onOpenCards={(unitId) => openUnit(unitId, { name: 'cards', deckId: unitId })}
          onOpenExam={(examId) => {
            const u = unitById(examId);
            if (u) setSubjectFocus(u.number);
            const cap = bookOfCapstone(examId);
            if (cap) setLastSubjectId(cap.subjectId);
            go({ name: 'exam', examId });
          }}
        />
      )}
      {route.name === 'lesson' && lessonUnit && (
        <Lesson
          key={route.id}
          state={state}
          unit={lessonUnit}
          lessonId={route.id}
          onBack={() => backToUnitSubject(lessonUnit.id)}
          onComplete={(id) => update((s) => storeCompleteLesson(s, id))}
          onOpenCards={() => go({ name: 'cards', deckId: lessonUnit.id })}
        />
      )}
      {route.name === 'quiz' && quizUnit && (
        <Quiz
          key={quizUnit.id}
          questions={quizUnit.quiz}
          finishTitle={quizUnit.kind === 'revision' ? 'نتيجتك في اختبار المراجعة' : `نتيجتك في اختبار ${bookOfUnit(quizUnit.id)?.unitWord ?? 'الوحدة'}`}
          backLabel={quizUnit.kind === 'revision' ? 'العودة إلى وحدة المراجعة' : `العودة إلى ${bookOfUnit(quizUnit.id)?.unitWord ?? 'الوحدة'}`}
          examLabel={quizUnit.kind === 'revision' ? 'جرّب امتحان نصف الكتاب' : 'جرّب الامتحان الوزاري'}
          onBack={() => backToUnitSubject(quizUnit.id)}
          onFinish={(score, total) => update((s) => recordQuiz(s, quizUnit.id, score, total))}
          onOpenExam={() => go({ name: 'exam', examId: quizUnit.id })}
        />
      )}
      {route.name === 'cards' && (
        <Cards
          key={route.deckId}
          state={state}
          deck={deckFor(route.deckId)}
          onBack={() => goSubject(route.deckId === 'all' ? lastSubjectId : (bookOfUnit(route.deckId)?.subjectId ?? lastSubjectId))}
          onEncounter={(ids) => update((s) => encounterVocab(s, ids))}
          onAnswer={(id, correct) => update((s) => srsAnswer(s, id, correct))}
        />
      )}
      {route.name === 'exam' && examSpec && (
        <Exam
          key={examSpec.id}
          state={state}
          spec={examSpec}
          onBack={() => goSubject(examBackSubject(examSpec.id))}
          onFinish={(score, total, perGroup) => update((s) => recordExam(s, examSpec.id, score, total, perGroup))}
        />
      )}
      {route.name === 'profile' && (
        <Profile
          state={state}
          onBack={() => go({ name: 'home' })}
          onSetName={(name) => update((s) => { s.name = name; })}
          onReset={() => { const e = emptyState(); saveState(e); setState(e); }}
        />
      )}

      {/* bottom navigation — a full-width bar on mobile; a centered floating
          pill on desktop */}
      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-cream-100/10 bg-lapis-900/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:pointer-events-none lg:border-t-0 lg:bg-transparent lg:pb-0 lg:backdrop-blur-none">
        <div className="mx-auto flex max-w-3xl items-stretch gap-1 px-3 py-1.5 lg:pointer-events-auto lg:mb-5 lg:max-w-xl lg:rounded-full lg:border lg:border-gold-300/25 lg:bg-lapis-900/95 lg:px-4 lg:py-2 lg:shadow-2xl lg:backdrop-blur">
          <button className={navBtn(route.name === 'home')} onClick={() => go({ name: 'home' })}>
            <IconHome size={21} /> الرئيسية
          </button>
          <button className={navBtn(route.name === 'subject' || route.name === 'lesson')} onClick={() => goSubject(lastSubjectId)}>
            <IconBook size={21} /> المنهج
          </button>
          <span className="flex items-center px-1">
            <ZigguratMark size={30} />
          </span>
          <button className={`${navBtn(route.name === 'cards')} relative`} onClick={() => go({ name: 'cards', deckId: 'all' })}>
            <IconCards size={21} /> البطاقات
            {dueCount > 0 && (
              <span className="absolute end-3 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold-500 px-1 text-[10px] font-black text-lapis-950">
                {dueCount}
              </span>
            )}
          </button>
          <button className={navBtn(route.name === 'profile')} onClick={() => go({ name: 'profile' })}>
            <IconUser size={21} /> حسابي
          </button>
        </div>
      </nav>
    </div>
  );
}
