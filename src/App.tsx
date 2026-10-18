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
import { IconHome, IconBook, IconCards, IconUser } from './components/icons';

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
    `press flex flex-1 flex-col items-center gap-1 rounded-2xl py-2 text-[11px] font-bold ${
      active ? 'text-gold-300' : 'text-lapis-100/65 hover:text-lapis-100'
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

      {/* bottom navigation — a full-width bar on mobile; a centered floating
          pill on desktop */}
      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-cream-100/10 bg-lapis-900/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:pointer-events-none lg:border-t-0 lg:bg-transparent lg:pb-0 lg:backdrop-blur-none">
        <div className="mx-auto flex max-w-3xl items-stretch gap-1 px-3 py-1.5 lg:pointer-events-auto lg:mb-5 lg:max-w-xl lg:rounded-full lg:border lg:border-gold-300/25 lg:bg-lapis-900/95 lg:px-4 lg:py-2 lg:shadow-2xl lg:backdrop-blur">
          <button className={navBtn(route.name === 'home')} onClick={() => go({ name: 'home' })}>
            <IconHome size={21} /> الرئيسية
          </button>
          <button className={navBtn(route.name === 'subject' || route.name === 'lesson')} onClick={() => go({ name: 'subject' })}>
            <IconBook size={21} /> المنهج
          </button>
          <span className="flex items-center px-1">
            <ZigguratMark size={30} />
          </span>
          <button className={`${navBtn(route.name === 'cards')} relative`} onClick={() => go({ name: 'cards' })}>
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
