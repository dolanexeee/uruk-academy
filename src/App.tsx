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
import { liveUnit } from './content/curriculum';
import { ZigguratMark } from './components/ui';

type Route =
  | { name: 'home' }
  | { name: 'subject' }
  | { name: 'lesson'; id: string }
  | { name: 'quiz' }
  | { name: 'cards' }
  | { name: 'exam' }
  | { name: 'profile' };

export default function App() {
  const [state, setState] = useState<AcademyState>(() => loadState());
  const [route, setRoute] = useState<Route>({ name: 'home' });

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
    () => dueVocabIds(state, liveUnit.vocab.map((v) => v.id)).length,
    [state],
  );

  const go = (r: Route) => {
    setRoute(r);
    window.scrollTo({ top: 0 });
  };

  const navBtn = (active: boolean) =>
    `press flex flex-1 flex-col items-center gap-0.5 rounded-2xl py-2 text-[11px] font-bold ${
      active ? 'text-gold-300' : 'text-lapis-100/70'
    }`;

  return (
    <div className="min-h-dvh bg-lapis-950 bg-[radial-gradient(120%_60%_at_50%_0%,#123064_0%,#0a1c40_55%,#050f26_100%)]">
      {route.name === 'home' && (
        <Home
          state={state}
          dueCount={dueCount}
          onOpenSubject={() => go({ name: 'subject' })}
          onOpenCards={() => go({ name: 'cards' })}
          onOpenExam={() => go({ name: 'exam' })}
          onOpenProfile={() => go({ name: 'profile' })}
        />
      )}
      {route.name === 'subject' && (
        <Subject
          state={state}
          onBack={() => go({ name: 'home' })}
          onOpenLesson={(id) => go({ name: 'lesson', id })}
          onOpenQuiz={() => go({ name: 'quiz' })}
          onOpenCards={() => go({ name: 'cards' })}
          onOpenExam={() => go({ name: 'exam' })}
        />
      )}
      {route.name === 'lesson' && (
        <Lesson
          state={state}
          lessonId={route.id}
          onBack={() => go({ name: 'subject' })}
          onComplete={(id) => update((s) => storeCompleteLesson(s, id))}
          onOpenCards={() => go({ name: 'cards' })}
        />
      )}
      {route.name === 'quiz' && (
        <Quiz
          onBack={() => go({ name: 'subject' })}
          onFinish={(score, total) => update((s) => recordQuiz(s, liveUnit.id, score, total))}
          onOpenExam={() => go({ name: 'exam' })}
        />
      )}
      {route.name === 'cards' && (
        <Cards
          state={state}
          onBack={() => go({ name: 'subject' })}
          onEncounter={(ids) => update((s) => encounterVocab(s, ids))}
          onAnswer={(id, correct) => update((s) => srsAnswer(s, id, correct))}
        />
      )}
      {route.name === 'exam' && (
        <Exam
          state={state}
          onBack={() => go({ name: 'subject' })}
          onFinish={(score, total, perSkill) => update((s) => recordExam(s, liveUnit.id, score, total, perSkill))}
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

      {/* bottom navigation */}
      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-cream-100/10 bg-lapis-900/95 pb-[env(safe-area-inset-bottom)] backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-stretch gap-1 px-3 py-1.5">
          <button className={navBtn(route.name === 'home')} onClick={() => go({ name: 'home' })}>
            <span className="text-lg">🏠</span> الرئيسية
          </button>
          <button className={navBtn(route.name === 'subject' || route.name === 'lesson')} onClick={() => go({ name: 'subject' })}>
            <span className="text-lg">📚</span> المنهج
          </button>
          <span className="flex items-center px-1">
            <ZigguratMark size={30} />
          </span>
          <button className={navBtn(route.name === 'cards')} onClick={() => go({ name: 'cards' })}>
            <span className="text-lg">🃏</span> البطاقات
            {dueCount > 0 && <span className="absolute" />}
          </button>
          <button className={navBtn(route.name === 'profile')} onClick={() => go({ name: 'profile' })}>
            <span className="text-lg">🎓</span> حسابي
          </button>
        </div>
      </nav>
    </div>
  );
}
