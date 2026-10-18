import { useEffect, useMemo, useState } from 'react';
import type { VocabWord } from '../content/types';
import type { AcademyState } from '../lib/store';
import { dueVocabIds, todayStr } from '../lib/store';
import MathText from '../components/MathText';
import { IconCheck, IconX, IconRefresh, IconIshtarStar, IconChevronStart } from '../components/icons';

const BOX_COLORS = ['#1D56B4', '#2F6FD0', '#C99A5F', '#D9A441', '#F6D67C'];

export interface CardDeck {
  id: string;
  title: string;
  vocab: VocabWord[];
  /** Singular noun for one card item: 'كلمة' (English) | 'قانون' (Math). */
  noun?: string;
}

interface Props {
  state: AcademyState;
  deck: CardDeck;
  onBack: () => void;
  onEncounter: (ids: string[]) => void;
  onAnswer: (id: string, correct: boolean) => void;
}

export default function Cards({ state, deck, onBack, onEncounter, onAnswer }: Props) {
  const allIds = useMemo(() => deck.vocab.map((v) => v.id), [deck]);
  const vocabById = useMemo(() => Object.fromEntries(deck.vocab.map((v) => [v.id, v])), [deck]);

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

  const today = todayStr();
  const boxesCount = [1, 2, 3, 4, 5].map((b) => allIds.filter((id) => (state.srs[id]?.box ?? 0) === b).length);
  const boxesDue = [1, 2, 3, 4, 5].map(
    (b) => allIds.filter((id) => state.srs[id]?.box === b && state.srs[id].due <= today).length,
  );
  const placed = boxesCount.reduce((a, n) => a + n, 0);

  return (
    <div className="screen ground mx-auto w-full max-w-3xl px-4 pb-28 pt-5 lg:max-w-[1120px] lg:px-6">
      <button onClick={onBack} className="press inline-flex items-center gap-1.5 text-[13px] font-bold text-gold-300">
        <IconChevronStart size={15} /> العودة
      </button>

      <header className="rise mt-3 flex items-end justify-between">
        <div>
          <h2 className="font-display text-[22px] font-black text-cream-50">بطاقات المراجعة</h2>
          <p className="mt-1.5">
            <span className="inline-flex rounded-full bg-gold-500/15 px-3 py-0.5 text-[12px] font-bold text-gold-300 ring-1 ring-gold-300/25">
              {deck.title} · {deck.vocab.length} {deck.noun ?? 'كلمة'}
            </span>
          </p>
          <p className="mt-1.5 text-[13px] text-lapis-100/85">
            نظام لايتنر: خمسة صناديق. الإجابة الصحيحة تنقل الكلمة لصندوق أبعد، والخطأ يعيدها للأول.
          </p>
        </div>
      </header>

      {/* box distribution — one stacked bar + compact per-box rows */}
      <div className="rise rise-1 mt-4 rounded-3xl bg-lapis-900/70 p-4 ring-1 ring-cream-100/10">
        <div className="flex h-7 w-full overflow-hidden rounded-full bg-lapis-950/70 ring-1 ring-cream-100/10" dir="ltr">
          {boxesCount.map((n, i) =>
            n > 0 ? (
              <div
                key={i}
                className="flex items-center justify-center text-[11px] font-black text-lapis-950 transition-all duration-500"
                style={{ width: `${(n / Math.max(1, placed)) * 100}%`, background: BOX_COLORS[i] }}
              >
                {n / Math.max(1, placed) >= 0.09 ? n : ''}
              </div>
            ) : null,
          )}
          {placed === 0 && <div className="flex flex-1 items-center justify-center text-[11px] font-bold text-lapis-100/60">لا بطاقات بعد</div>}
        </div>
        <div className="mt-3 grid grid-cols-1 gap-y-1.5 lg:grid-cols-5 lg:gap-x-4">
          {boxesCount.map((n, i) => (
            <div key={i} className="flex items-center gap-2 text-[12px] lg:flex-wrap lg:gap-x-2">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full ring-1 ring-cream-100/20" style={{ background: BOX_COLORS[i] }} />
                <span className="font-bold text-cream-50">صندوق {i + 1}</span>
              </span>
              <span className="ms-auto whitespace-nowrap text-lapis-100/75 lg:ms-0">
                {n} بطاقة
                {boxesDue[i] > 0 && <span className="font-bold text-gold-300"> · {boxesDue[i]} مستحقة</span>}
              </span>
            </div>
          ))}
        </div>
      </div>

      {done ? (
        <div className="pop mt-5 rounded-3xl bg-cream-50 p-6 text-center shadow-xl">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/15 text-gold-600 ring-1 ring-gold-500/35">
            <IconIshtarStar size={32} />
          </span>
          <h3 className="font-display mt-3 text-xl font-black text-lapis-900">انتهت جلسة المراجعة</h3>
          <p className="mt-2 text-[14.5px] leading-7 text-ink-600">
            راجعت {queue.length} بطاقة، وأجبت بشكل صحيح عن {known} منها.
            الكلمات التي أخطأت فيها عادت إلى الصندوق الأول وستظهر لك غدًا من جديد.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <button onClick={restartAll} className="press inline-flex items-center gap-2 rounded-full bg-lapis-700 px-6 py-3 font-display text-[15px] font-bold text-cream-50 shadow">
              <IconRefresh size={16} /> مراجعة كل الكلمات
            </button>
            <button onClick={onBack} className="press rounded-full border border-ink-900/15 px-6 py-3 font-display text-[15px] font-bold text-ink-900">
              العودة إلى المنهج
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
              <span className="flip-face flex flex-col items-center justify-center rounded-3xl border border-gold-500/60 bg-cream-50 p-6 shadow-xl">
                <span
                  className={`en font-display font-black text-lapis-900 ${word.word.includes('$') ? 'text-[24px] leading-relaxed' : 'text-4xl'}`}
                  dir="ltr"
                >
                  <MathText text={word.word} />
                </span>
                <span className="paper-quote mt-2 rounded-full px-3 py-0.5 text-[12px] font-bold text-lapis-700">{word.pos}</span>
                <span className="mt-6 text-[12.5px] text-ink-400">اضغط البطاقة لترى المعنى</span>
              </span>
              <span className="flip-face flip-back flex flex-col items-center justify-center rounded-3xl border border-gold-300/25 bg-gradient-to-b from-lapis-700 to-lapis-900 p-6 text-center shadow-xl">
                <span className="text-[19px] font-bold leading-8 text-cream-50"><MathText text={word.meaning} /></span>
                <span className="en mt-4 text-[14px] leading-6 text-lapis-100" dir="ltr"><MathText text={word.example} /></span>
                <span className="mt-1 text-[12.5px] leading-5 text-lapis-100/75"><MathText text={word.exampleAr} /></span>
              </span>
            </button>
          </div>

          {flipped ? (
            <div className="pop mx-auto mt-5 grid max-w-md grid-cols-2 gap-3">
              <button
                onClick={() => answer(false)}
                data-testid="card-dontknow"
                className="press inline-flex items-center justify-center gap-2 rounded-full border-2 border-red-300 bg-red-50 px-4 py-3.5 font-display text-[15px] font-extrabold text-red-700 shadow"
              >
                <IconX size={17} /> لا أعرفها
              </button>
              <button
                onClick={() => answer(true)}
                data-testid="card-know"
                className="press inline-flex items-center justify-center gap-2 rounded-full bg-tealdeep-500 px-4 py-3.5 font-display text-[15px] font-extrabold text-white shadow"
              >
                <IconCheck size={17} /> أعرفها
              </button>
            </div>
          ) : (
            <p className="mt-5 text-center text-[13px] text-lapis-100/70">حاول تذكّر المعنى أولًا، ثم اقلب البطاقة وقيّم نفسك بصدق.</p>
          )}
        </div>
      ) : (
        <div className="mt-5 rounded-3xl bg-cream-50 p-6 text-center shadow">
          <p className="text-[15px] leading-7 text-ink-600">لا توجد بطاقات مستحقة الآن. عُد غدًا، أو راجع كل الكلمات متى شئت.</p>
          <button onClick={restartAll} className="press mt-4 inline-flex items-center gap-2 rounded-full bg-lapis-700 px-6 py-3 font-display text-[15px] font-bold text-cream-50 shadow">
            <IconRefresh size={16} /> مراجعة كل الكلمات ({allIds.length})
          </button>
        </div>
      )}
    </div>
  );
}
