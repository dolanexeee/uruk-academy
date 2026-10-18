import { useState } from 'react';
import { books, subjects, allBooksUnits, allBooksVocab } from '../content/curriculum';
import type { AcademyState } from '../lib/store';
import { streak, lastStudyDay } from '../lib/store';
import { ProgressRing, fmtDate, pct, ZigguratMark } from '../components/ui';
import { IconCheck, IconFlame, IconChevronStart } from '../components/icons';

interface Props {
  state: AcademyState;
  onBack: () => void;
  onSetName: (name: string) => void;
  onReset: () => void;
}

export default function Profile({ state, onBack, onSetName, onReset }: Props) {
  const [draft, setDraft] = useState(state.name);
  const [confirmReset, setConfirmReset] = useState(false);
  const allContentUnits = books.flatMap((b) => b.contentUnits);
  const lessonsTotal = allContentUnits.reduce((a, u) => a + u.lessons.length, 0);
  const lessonsDone = allContentUnits.reduce((a, u) => a + u.lessons.filter((l) => state.lessonsDone[l.id]).length, 0);
  const mastered = allBooksVocab.filter((v) => (state.srs[v.id]?.box ?? 0) >= 4).length;
  const quizBests = allBooksUnits
    .map((u) => ({ unit: u, best: state.quizBest[u.id] }))
    .filter((x) => x.best);
  const quizTop = quizBests.sort((a, b) => b.best!.score / Math.max(1, b.best!.total) - a.best!.score / Math.max(1, a.best!.total))[0];
  const subjectTitle = (id: string) => subjects.find((s) => s.id === id)?.titleAr ?? id;

  return (
    <div className="screen mx-auto w-full max-w-3xl px-4 pb-28 pt-5 lg:max-w-[1120px] lg:px-6">
      <button onClick={onBack} className="press inline-flex items-center gap-1.5 text-[13px] font-bold text-gold-300">
        <IconChevronStart size={15} /> العودة إلى الرئيسية
      </button>

      <header className="rise mt-3 flex items-center gap-4 rounded-3xl bg-cream-50 p-5 shadow-lg">
        <ZigguratMark size={58} />
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-xl font-black text-lapis-900">{state.name || 'طالب أوروك'}</h2>
          <p className="text-[13px] text-ink-600">السادس الإعدادي · كل بياناتك محفوظة على جهازك فقط</p>
        </div>
        <ProgressRing value={lessonsDone / lessonsTotal} size={58} stroke={5}>
          <span className="font-display text-[13px] font-extrabold text-lapis-800">{pct(lessonsDone, lessonsTotal)}٪</span>
        </ProgressRing>
      </header>

      <section className="rise rise-1 mt-4 rounded-3xl bg-cream-50 p-5 shadow-md">
        <h3 className="font-display text-[15.5px] font-extrabold text-lapis-900">اسم الطالب (اختياري)</h3>
        <div className="mt-3 flex gap-2">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="اكتب اسمك هنا…"
            data-testid="student-name"
            className="min-w-0 flex-1 rounded-2xl border-2 border-cream-300 bg-white/70 px-4 py-2.5 text-[15px] font-semibold outline-none focus:border-lapis-500"
          />
          <button
            onClick={() => onSetName(draft.trim())}
            data-testid="save-name"
            className="press shrink-0 rounded-2xl bg-lapis-700 px-5 py-2.5 font-display text-[14.5px] font-bold text-cream-50 shadow"
          >
            حفظ
          </button>
        </div>
        <p className="mt-2 text-[12px] text-ink-400">يُحفظ على هذا الجهاز فقط، ولا يُرسل إلى أي خادم.</p>
      </section>

      <section className="rise rise-2 mt-4 grid grid-cols-2 gap-3">
        <div className="space-y-3">
          {books.map((b) => {
            const bTotal = b.contentUnits.reduce((a, u) => a + u.lessons.length, 0);
            const bDone = b.contentUnits.reduce((a, u) => a + u.lessons.filter((l) => state.lessonsDone[l.id]).length, 0);
            return (
              <div key={b.subjectId} className="rounded-3xl bg-cream-50 p-4 shadow-md">
                <p className="text-[12px] font-bold text-ink-400">دروس {subjectTitle(b.subjectId)}</p>
                <p className="font-display mt-1 text-2xl font-black text-lapis-900">{bDone}<span className="text-sm text-ink-400"> / {bTotal}</span></p>
                <div className="mt-2 space-y-1.5">
                  {b.contentUnits.map((u) => {
                    const d = u.lessons.filter((l) => state.lessonsDone[l.id]).length;
                    return (
                      <div key={u.id} className="flex items-center gap-2 text-[12px] leading-5 text-ink-600">
                        <span className={d === u.lessons.length ? 'text-tealdeep-600' : 'text-ink-400'}>
                          <IconCheck size={13} />
                        </span>
                        <span className="min-w-0 flex-1 truncate">{u.titleAr}</span>
                        <span className="font-bold">{d}/{u.lessons.length}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="space-y-3">
          <div className="rounded-3xl bg-cream-50 p-4 shadow-md">
            <p className="text-[12px] font-bold text-ink-400">سلسلة أيام الدراسة</p>
            <p className="font-display mt-1 flex items-center gap-2 text-2xl font-black text-lapis-900">
              <span className="text-gold-600"><IconFlame size={24} /></span>
              {streak(state)} <span className="text-sm text-ink-400">يوم متتالٍ</span>
            </p>
            <p className="mt-1 text-[12px] text-ink-600">آخر يوم دراسة: {fmtDate(lastStudyDay(state))}</p>
          </div>
          <div className="rounded-3xl bg-cream-50 p-4 shadow-md">
            <p className="text-[12px] font-bold text-ink-400">البطاقات المتقنة (صندوق ٤+)</p>
            <p className="font-display mt-1 text-2xl font-black text-lapis-900">{mastered}<span className="text-sm text-ink-400"> / {allBooksVocab.length} بطاقة</span></p>
          </div>
        </div>
      </section>

      <section className="rise rise-3 mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-3xl bg-lapis-900/70 p-4 ring-1 ring-cream-100/15">
          <p className="text-[12px] font-bold text-lapis-100/70">أفضل اختبار {quizTop ? `— ${quizTop.unit.titleAr}` : ''}</p>
          <p className="font-display mt-1 text-xl font-black text-cream-50">{quizTop?.best ? `${quizTop.best.score}/${quizTop.best.total}` : '— لم يُجرَ بعد'}</p>
          {quizTop?.best && <p className="text-[11.5px] text-lapis-100/60">{fmtDate(quizTop.best.at)}</p>}
        </div>
        {books.map((b) => {
          const cb = state.examBest[b.capstone.id];
          return (
            <div key={b.subjectId} className="rounded-3xl bg-lapis-900/70 p-4 ring-1 ring-cream-100/15">
              <p className="text-[12px] font-bold text-lapis-100/70">أفضل نتيجة — {b.capstone.titleAr}</p>
              <p className="font-display mt-1 text-xl font-black text-cream-50">{cb ? `${cb.score}/${cb.total}` : '— لم يُجرَ بعد'}</p>
              {cb && <p className="text-[11.5px] text-lapis-100/60">{fmtDate(cb.at)}</p>}
            </div>
          );
        })}
      </section>

      <section className="rise rise-3 mt-4 rounded-3xl bg-cream-50 p-5 shadow-md">
        <h3 className="font-display text-[15.5px] font-extrabold text-lapis-900">نتائج الوحدات والفصول</h3>
        <div className="mt-3 divide-y divide-cream-300/70">
          {allBooksUnits.map((u) => {
            const qb = state.quizBest[u.id];
            const eb = state.examBest[u.id];
            return (
              <div key={u.id} className="flex items-center gap-3 py-2.5 text-[13px]">
                <span className="font-display min-w-0 flex-1 truncate font-bold text-lapis-900">{u.titleAr}</span>
                <span className="shrink-0 text-ink-600">
                  {u.kind === 'revision' ? 'اختبار المراجعة' : 'الاختبار'}: <strong className="text-lapis-800">{qb ? `${qb.score}/${qb.total}` : '—'}</strong>
                </span>
                <span className="shrink-0 text-ink-600">
                  {u.kind === 'revision' ? 'نصف الكتاب' : 'الامتحان'}: <strong className="text-lapis-800">{eb ? `${eb.score}/${eb.total}` : '—'}</strong>
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rise rise-4 mt-4 rounded-3xl bg-cream-50 p-5 shadow-md">
        <h3 className="font-display text-[15.5px] font-extrabold text-lapis-900">عن المحتوى والمصادر</h3>
        {books.map((b) => (
          <p key={b.subjectId} className="mt-2 text-[13.5px] leading-7 text-ink-600">{b.aboutSources}</p>
        ))}
        <p className="mt-3 text-[12.5px] leading-6 text-ink-400">
          أكاديمية أوروك هي المشروع الثالث في ثلاثية أوروك مفتوحة المصدر (بعد Uruk Cut وUruk OS). المرحلة الثانية: كتاب الإنجليزية كاملًا، والمرحلة «أ»: محرك الأسئلة المقالية والحلول المفصّلة وكتاب الرياضيات كاملًا — ٢٠٢٦.
        </p>
      </section>

      <section className="rise rise-5 mt-4 rounded-3xl border border-red-300/40 bg-lapis-900/50 p-5">
        <h3 className="font-display text-[15px] font-extrabold text-red-200">تصفير التقدّم</h3>
        <p className="mt-1 text-[12.5px] leading-6 text-lapis-100/70">يحذف كل الدروس والنتائج والبطاقات من هذا الجهاز نهائيًا.</p>
        {confirmReset ? (
          <div className="mt-3 flex gap-2">
            <button
              onClick={() => { onReset(); setConfirmReset(false); }}
              className="press rounded-full bg-red-500 px-5 py-2.5 font-display text-[14px] font-extrabold text-white shadow"
            >
              نعم، احذف كل شيء
            </button>
            <button onClick={() => setConfirmReset(false)} className="press rounded-full border border-cream-100/30 px-5 py-2.5 font-display text-[14px] font-bold text-cream-100">
              إلغاء
            </button>
          </div>
        ) : (
          <button onClick={() => setConfirmReset(true)} className="press mt-3 rounded-full border border-red-300/50 px-5 py-2.5 font-display text-[14px] font-bold text-red-200">
            تصفير التقدّم…
          </button>
        )}
      </section>
    </div>
  );
}
