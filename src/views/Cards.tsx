import { useEffect, useMemo, useState } from 'react';
import { liveUnit } from '../content/curriculum';
import type { AcademyState } from '../lib/store';
import { dueVocabIds } from '../lib/store';

interface Props {
  state: AcademyState;
  onBack: () => void;
  onEncounter: (ids: string[]) => void;
  onAnswer: (id: string, correct: boolean) => void;
}

export default function Cards({ state, onBack, onEncounter, onAnswer }: Props) {
  const allIds = useMemo(() => liveUnit.vocab.map((v) => v.id), []);
  const vocabById = useMemo(() => Object.fromEntries(liveUnit.vocab.map((v) => [v.id, v])), []);

  useEffect(() => {
    onEncounter(allIds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [queue, setQueue] = useState<string[] | null>(null);
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [reviewAll, setReviewAll] = useState(false);

  // Build the session queue once the encounter has registered the cards.
  useEffect(() => {
    if (queue === null && Object.keys(state.srs).length > 0) {
      setQueue(reviewAll ? allIds : dueVocabIds(state, allIds));
    }
  }, [state.srs, queue, allIds, reviewAll]);

  const currentId = queue && pos < queue.length ? queue[pos] : null;
  const word = currentId ? vocabById[currentId] : null;
  const box = currentId ? (state.srs[currentId]?.box ?? 1) : 1;
  const done = queue !== null && pos >= queue.length;

  function answer(correct: boolean) {
    if (!currentId) return;
    onAnswer(currentId, correct);
    if (correct) setKnown((k) => k + 1);
    setFlipped(false);
    setPos((p) => p + 1);
  }

  function restartAll() {
    setQueue(allIds);
    setPos(0);
    setKnown(0);
    setFlipped(false);
    setReviewAll(true);
  }

  const boxesCount = [1, 2, 3, 4, 5].map((b) => allIds.filter((id) => (state.srs[id]?.box ?? 0) === b).length);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-28 pt-5">
      <button onClick={onBack} className="press text-[13px] font-bold text-gold-300">→ العودة</button>

      <header className="rise mt-3 flex items-end justify-between">
        <div>
          <h2 className="font-display text-[22px] font-black text-cream-50">بطاقات المراجعة</h2>
          <p className="mt-1 text-[13px] text-lapis-100/85">
            نظام لايتنر: خمسة صناديق. الإجابة الصحيحة تنقل الكلمة لصندوق أبعد، والخطأ يعيدها للأول.
          </p>
        </div>
      </header>

      {/* box distribution */}
      <div className="rise rise-1 mt-4 flex items-end justify-between gap-1 rounded-3xl bg-lapis-900/70 px-4 py-3">
        {boxesCount.map((n, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div
              className={`w-full max-w-10 rounded-t-lg ${i === 4 ? 'bg-gold-400' : 'bg-lapis-600'}`}
              style={{ height: `${10 + n * 5}px` }}
            />
            <span className="text-[10.5px] font-bold text-lapis-100">ص{i + 1}: {n}</span>
          </div>
        ))}
      </div>

      {done ? (
        <div className="pop mt-5 rounded-3xl bg-cream-50 p-6 text-center shadow-xl">
          <div className="text-5xl">🎉</div>
          <h3 className="font-display mt-3 text-xl font-black text-lapis-900">انتهت جلسة المراجعة</h3>
          <p className="mt-2 text-[14.5px] leading-7 text-ink-600">
            راجعت {queue.length} بطاقة، وأجبت بشكل صحيح عن {known} منها.
            الكلمات التي أخطأت فيها عادت إلى الصندوق الأول وستظهر لك غدًا من جديد.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <button onClick={restartAll} className="press rounded-full bg-lapis-700 px-6 py-3 font-display text-[15px] font-bold text-cream-50 shadow">
              ↻ مراجعة كل الكلمات
            </button>
            <button onClick={onBack} className="press rounded-full border border-ink-900/15 px-6 py-3 font-display text-[15px] font-bold text-ink-900">
              العودة إلى الوحدة
            </button>
          </div>
        </div>
      ) : word ? (
        <div className="mt-5">
          <p className="mb-2 text-center text-[12.5px] font-bold text-lapis-100/80">
            البطاقة {pos + 1} من {queue!.length} · الصندوق الحالي: {box} من 5
          </p>
          <div className="flip-scene mx-auto h-64 max-w-md">
            <button
              className={`flip-inner ${flipped ? 'flipped' : ''}`}
              onClick={() => setFlipped((f) => !f)}
              data-testid="flashcard"
              aria-label="بطاقة مفردات — اضغط للقلب"
            >
              <span className="flip-face flex flex-col items-center justify-center rounded-[1.8rem] border-2 border-gold-500/50 bg-cream-50 p-6 shadow-xl">
                <span className="en font-display text-4xl font-black text-lapis-900" dir="ltr">{word.word}</span>
                <span className="mt-2 rounded-full bg-lapis-50 px-3 py-0.5 text-[12px] font-bold text-lapis-700">{word.pos}</span>
                <span className="mt-6 text-[12.5px] text-ink-400">اضغط البطاقة لترى المعنى 👆</span>
              </span>
              <span className="flip-face flip-back flex flex-col items-center justify-center rounded-[1.8rem] bg-gradient-to-b from-lapis-700 to-lapis-900 p-6 text-center shadow-xl">
                <span className="text-[19px] font-bold leading-8 text-cream-50">{word.meaning}</span>
                <span className="en mt-4 text-[14px] leading-6 text-lapis-100" dir="ltr">{word.example}</span>
                <span className="mt-1 text-[12.5px] leading-5 text-lapis-100/75">{word.exampleAr}</span>
              </span>
            </button>
          </div>

          {flipped ? (
            <div className="pop mx-auto mt-5 grid max-w-md grid-cols-2 gap-3">
              <button
                onClick={() => answer(false)}
                data-testid="card-dontknow"
                className="press rounded-full border-2 border-red-300 bg-red-50 px-4 py-3.5 font-display text-[15px] font-extrabold text-red-700 shadow"
              >
                ✗ لا أعرفها
              </button>
              <button
                onClick={() => answer(true)}
                data-testid="card-know"
                className="press rounded-full bg-tealdeep-500 px-4 py-3.5 font-display text-[15px] font-extrabold text-white shadow"
              >
                ✓ أعرفها
              </button>
            </div>
          ) : (
            <p className="mt-5 text-center text-[13px] text-lapis-100/70">حاول تذكّر المعنى أولًا، ثم اقلب البطاقة وقيّم نفسك بصدق.</p>
          )}
        </div>
      ) : (
        <div className="mt-5 rounded-3xl bg-cream-50 p-6 text-center shadow">
          <p className="text-[15px] leading-7 text-ink-600">لا توجد بطاقات مستحقة الآن. عُد غدًا، أو راجع كل الكلمات متى شئت.</p>
          <button onClick={restartAll} className="press mt-4 rounded-full bg-lapis-700 px-6 py-3 font-display text-[15px] font-bold text-cream-50 shadow">
            ↻ مراجعة كل الكلمات ({allIds.length})
          </button>
        </div>
      )}
    </div>
  );
}
