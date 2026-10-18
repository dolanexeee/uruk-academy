import { subjects, liveUnit } from '../content/curriculum';
import type { AcademyState } from '../lib/store';
import { streak } from '../lib/store';
import { ProgressRing, Chip, pct, ZigguratMark } from '../components/ui';
import { IconFlame, IconCards, IconClipboard, IconLock, IconChevronEnd } from '../components/icons';

interface Props {
  state: AcademyState;
  dueCount: number;
  onOpenSubject: () => void;
  onOpenCards: () => void;
  onOpenExam: () => void;
  onOpenProfile: () => void;
}

export default function Home({ state, dueCount, onOpenSubject, onOpenCards, onOpenExam, onOpenProfile }: Props) {
  const lessonsTotal = liveUnit.lessons.length;
  const lessonsDone = liveUnit.lessons.filter((l) => state.lessonsDone[l.id]).length;
  const overall = lessonsDone / lessonsTotal;
  const days = streak(state);
  const quizBest = state.quizBest[liveUnit.id];
  const greet = state.name ? `أهلًا بعودتك، ${state.name}` : 'أهلًا بك في أكاديمية أوروك';

  return (
    <div className="screen mx-auto w-full max-w-3xl px-4 pb-28 lg:max-w-[1120px] lg:px-6">
      {/* ---------- hero ---------- */}
      <header className="brick relative overflow-hidden rounded-b-[2rem] bg-gradient-to-b from-lapis-700 via-lapis-850 to-lapis-900 px-5 pb-6 pt-8 text-cream-100 shadow-xl lg:rounded-[2rem] lg:px-8 lg:pt-10">
        <div className="pointer-events-none absolute -left-10 -top-10 opacity-[0.13]">
          <ZigguratMark size={210} />
        </div>
        <div className="relative lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-10">
          <div>
            <div className="rise flex items-center gap-3">
              <ZigguratMark size={52} />
              <div>
                <h1 className="font-display text-[26px] font-black leading-8 text-cream-50">أكاديمية أوروك</h1>
                <p className="en text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-300">Uruk Academy</p>
              </div>
            </div>
            <p className="rise rise-1 mt-4 text-[15px] leading-7 text-lapis-100">
              {greet}. منصّتك التفاعلية للمنهج العراقي — دروس مكتوبة بوضوح، واختبارات بشرح، وبطاقات مراجعة ذكية،
              وامتحانات بأسلوب الوزاري. كل شيء يعمل على جهازك، حتى دون إنترنت.
            </p>
          </div>

          {/* overall progress strip */}
          <button
            onClick={onOpenProfile}
            className="press rise rise-2 mt-5 flex w-full items-center gap-4 rounded-3xl border border-gold-300/25 bg-lapis-950/45 p-4 text-start backdrop-blur-sm lg:mt-0"
          >
            <ProgressRing value={overall} size={62} stroke={6} track="rgba(247,236,210,0.15)" bar="#F6D67C">
              <span className="font-display text-sm font-extrabold text-cream-50">{pct(lessonsDone, lessonsTotal)}٪</span>
            </ProgressRing>
            <div className="min-w-0 flex-1">
              <p className="font-display text-[15px] font-bold text-cream-50">تقدّمك في الوحدة الأولى</p>
              <p className="mt-0.5 text-[13px] text-lapis-100">
                أنجزت {lessonsDone} من {lessonsTotal} دروس
                {quizBest ? ` · أفضل اختبار: ${quizBest.score}/${quizBest.total}` : ''}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/20 px-2.5 py-0.5 text-[11px] font-bold text-gold-300">
                  <IconFlame size={13} /> سلسلة الدراسة: {days} {days === 1 ? 'يوم' : 'أيام'}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-100/10 px-2.5 py-0.5 text-[11px] font-bold text-cream-100">
                  <IconCards size={13} /> {dueCount} بطاقة بانتظارك اليوم
                </span>
              </div>
            </div>
            <span className="text-gold-300">
              <IconChevronEnd size={18} />
            </span>
          </button>
        </div>
      </header>

      {/* ---------- quick actions ---------- */}
      <section className="mt-5 grid grid-cols-2 gap-3 lg:gap-4">
        <button
          onClick={onOpenCards}
          className="press rise rise-2 rounded-3xl border border-gold-500/50 bg-cream-50 p-4 text-start shadow-sm lg:p-6"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lapis-700 text-gold-300 shadow">
            <IconCards size={22} />
          </span>
          <p className="font-display mt-3 text-[15px] font-extrabold text-lapis-900">بطاقات المراجعة</p>
          <p className="mt-1 text-[12.5px] leading-5 text-ink-600">
            {dueCount > 0 ? `${dueCount} كلمة مستحقة اليوم بنظام لايتنر` : 'لا كلمات مستحقة — أحسنت!'}
          </p>
        </button>
        <button
          onClick={onOpenExam}
          className="press rise rise-3 rounded-3xl border border-gold-300/25 bg-gradient-to-b from-lapis-700 to-lapis-900 p-4 text-start shadow-md lg:p-6"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-500/20 text-gold-300 ring-1 ring-gold-300/30">
            <IconClipboard size={22} />
          </span>
          <p className="font-display mt-3 text-[15px] font-extrabold text-cream-50">الامتحان الوزاري</p>
          <p className="mt-1 text-[12.5px] leading-5 text-lapis-100">مؤقّت ودرجات وتصحيح كامل — كما في القاعة</p>
        </button>
      </section>

      {/* ---------- subjects ---------- */}
      <section className="mt-7">
        <div className="rise rise-2 flex items-end justify-between">
          <h2 className="font-display text-lg font-black text-cream-50">المواد الدراسية</h2>
          <span className="text-[12px] text-lapis-100/70">السادس الإعدادي · العراق</span>
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-2 lg:gap-4">
          {subjects.map((s, i) =>
            s.status === 'live' ? (
              <button
                key={s.id}
                onClick={onOpenSubject}
                className={`press rise rise-${Math.min(i + 2, 5)} w-full rounded-3xl border border-gold-500/70 bg-cream-50 p-5 text-start shadow-lg lg:col-span-2`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-xl font-black text-lapis-900">{s.titleAr}</p>
                    <p className="en mt-0.5 text-[12px] font-semibold text-ink-400">{s.titleEn} · {s.grade}</p>
                  </div>
                  <Chip tone="teal">متاحة الآن</Chip>
                </div>
                <p className="mt-2 text-[13.5px] leading-6 text-ink-600">{s.blurb}</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-lapis-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-l from-gold-500 to-gold-400 transition-all duration-700"
                      style={{ width: `${pct(lessonsDone, lessonsTotal)}%` }}
                    />
                  </div>
                  <span className="text-[12px] font-bold text-lapis-700">{lessonsDone}/{lessonsTotal} دروس</span>
                </div>
              </button>
            ) : (
              <div
                key={s.id}
                aria-disabled="true"
                className={`rise rise-${Math.min(i + 2, 5)} locked-pattern flex items-center gap-3.5 rounded-3xl border border-dashed border-cream-100/25 p-4`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lapis-950/60 text-gold-300 ring-1 ring-gold-300/30">
                  <IconLock size={19} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-[15px] font-bold text-cream-50">{s.titleAr}</p>
                  <p className="en text-[11px] text-lapis-100/70">{s.titleEn} · {s.grade}</p>
                </div>
                <Chip tone="gold">قريبًا</Chip>
              </div>
            ),
          )}
        </div>
      </section>

      <p className="rise rise-5 mt-6 text-center text-[12px] leading-5 text-lapis-100/60">
        أكاديمية أوروك — مشروع تعليمي مفتوح المصدر، يُبنى على مراحل. المرحلة الأولى: الإنجليزية للسادس الإعدادي.
      </p>
    </div>
  );
}
