# REPORT — Uruk Academy, Phase 1

**Status: DELIVERED and verified end-to-end.**

- 🌐 Live: **https://uruk-academy.vercel.app** — HTTP 200, serves the Phase 1 build
  (verified by fetching the page and every critical asset: JS bundle 306,242 B matches
  the local production build byte-size; sw.js, manifest, fonts, icons all 200).
- 💻 Repo: **https://github.com/dolanexeee/uruk-academy** (public, all code + content +
  tests + qa/screenshots pushed).

## What was built

Arabic-first (RTL), offline-first PWA (Vite + React + TS + Tailwind v4), mobile-first
at 414×896, URUK identity (lapis lazuli / gold / bronze / deep teal, original stepped-
ziggurat + Ishtar-star artwork, Cairo + IBM Plex Sans Arabic fonts bundled locally).

**Engine — all features real and tested:**
1. **Home** — subjects grid (English live; رياضيات/فيزياء/كيمياء/أحياء/عربية badged
   «قريبًا», rendered non-navigable), overall progress strip driven by real stored
   progress, streak + due-cards counts, quick actions.
2. **Curriculum tree** — English → 8 units listed with their documented titles
   (U2 Security Technology, U3 Conference Interpreter, U5 Why are holidays so
   important?, U4/U8 badged as revision) — only Unit One navigable.
3. **Lesson player** — 4 complete lessons (قراءة، قواعد، مفردات، شرح) with section
   types شرح/قراءة/مفردات/قواعد, grammar tables, EN examples LTR, vocab tables;
   completion persists across reload.
4. **Quiz** — 14 questions (reading/grammar/vocab), instant feedback with an Arabic
   explanation per question, final score stored (last + best).
5. **Flashcards** — the unit's 22 words, 3D flip, Leitner 5 boxes with due-date
   scheduling (Sahla-proven pattern), box distribution chart, persistence verified.
6. **Exam mode (وزاري)** — intro with rules; 15 questions / 60 marks / 20-minute live
   timer with auto-submit; question navigator; NO feedback until submit; full report:
   total + per-skill breakdown + per-question corrections with explanations.
7. **Profile** — optional local student name, per-lesson completion, study-day streak,
   last-study date, mastered-word count, best quiz/exam, «عن المحتوى والمصادر» note,
   progress reset with confirmation.
8. **PWA** — installable manifest (192/512/maskable icons), Workbox precache of
   52 entries (~745 KiB: app, content, fonts), verified offline by a real
   network-disabled reload test that still opened lessons.

**Content — Unit One of «English for Iraq», 6th Preparatory:**
Cross-checked against the Ministry of Education's own published sample-questions
document (found via academia.edu copy): Unit One Lesson 10 «I'll always be proud of
him» and its official comprehension points match the build anchors exactly. All
explanations/summaries/examples are original writing derived from the verified facts
(the diabetic mother, insulin injections, the bracelet, standing on a chair to reach
the phone, what he told the operator…); grammar spine = Past Simple vs Past
Continuous, including the official sample lines («What was he doing when the phone
rang?», «Suha fell asleep while she was reading»). 22 vocabulary words with Arabic
meanings and original examples. Content lives as typed data files (`src/content/`)
with `CONTENT.md` documenting the authoring format and rules for future phases.

## Tests — exact counts from a real run

Playwright (Chromium, mobile viewport) against the **production build** (`vite preview`):

```
7 passed (55.2s)
  ✓ home: branding, live subject, honest قريبًا subjects, progress strip
  ✓ lesson: complete grammar lesson → progress persists after reload
  ✓ quiz: instant feedback ×14, final score stored, shown after reload
  ✓ flashcards: flip + know-answer promotes Leitner box 1→2, persists after reload
  ✓ exam: timer ticks, zero feedback during run, submit → scored report (/60)
  ✓ offline: network disabled reload still serves app + lesson content
  ✓ screenshots: full mobile flow + desktop captures
```

First run was 4/7 — two selector typos («الأزمنة السردية» vs the actual lesson title
«أزمنة السرد») and one bad `goBack()` in the screenshot flow (SPA has no history);
fixed the tests (not the app) and re-ran to 7/7.

Screenshots in `qa/screenshots/`: home/subject/lesson/quiz/flashcards/exam (mobile)
+ home/lesson (desktop) — visually inspected: identity, RTL, typography all render
as designed.

## Known limits (honest)

- Only Unit One has content; Units 2–8 and other subjects are placeholders by design
  (Phase 1 scope). The curriculum tree shows documented titles only.
- The story summary is a faithful retelling from the ministry-verified facts; it is
  a study aid, not a substitute for reading the textbook passage itself.
- Exam/quiz questions are multiple-choice/true-false (auto-markable). The real
  ministry paper also has written answers — a future phase could add self-checked
  written questions.
- Progress lives in localStorage on one device/browser (by design: no accounts, no
  server). Clearing site data erases it; the profile screen says so.
- Deployment protection note: Vercel CLI warned that Deployment Protection exists on
  the account's projects; the production alias was verified publicly accessible
  (unauthenticated fetch returned 200 with the app), so students are not gated.
- Production browser smoke via local headless Chromium was blocked by this sandbox's
  egress proxy (ERR_TUNNEL_CONNECTION_FAILED); production was instead verified by
  direct HTTP fetches of the page + all assets and an independent rendered fetch.
