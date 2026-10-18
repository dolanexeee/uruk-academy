# REPORT — Uruk Academy, Phase 1 UI Polish Pass

**Status: DELIVERED and verified end-to-end.**

- 🌐 Live: **https://uruk-academy.vercel.app** — HTTP 200; the served JS bundle is
  **318,561 B** (`index-TfvVFpCR.js`), byte-identical to the local production build
  (previous production bundle was 306,242 B — the live app demonstrably changed).
- 🧪 Tests: **Playwright 7/7 passed** against the production build (`vite preview`),
  re-run after the polish (54.5s): home honesty, lesson completion persistence,
  quiz feedback + stored score, Leitner box promotion persistence, exam timer +
  no-feedback rule + scored report, real offline reload, screenshot flow.
- 📸 Screenshots regenerated: the same 8 in `qa/screenshots/`, plus fresh-named
  delivery copies `01-home-mobile-v2.png`, `03-lesson-mobile-v2.png`,
  `05-flashcards-mobile-v2.png`, `07-home-desktop-v2.png`.

No content data (`src/content/`) was touched; no engine behavior changed.

## What changed, per fix-list item

1. **Emoji eliminated from all UI chrome.** New `src/components/icons.tsx`: an
   original stroke icon set in one style (1.8 stroke, rounded caps/joins,
   currentColor → gold/lapis palette): home, book, stacked-cards, clipboard,
   user, flame, calendar, lock, check, x, both chevrons, clock, pen, type,
   bulb, Ishtar star, trophy, refresh, quiz mark, circle, plus a filled
   cuneiform `WedgeMark`. Every emoji in the bottom nav, home quick-action
   cards, streak/due chips, quiz/exam feedback marks, lesson-kind tiles,
   profile marks and result medallions was replaced with these. The dead
   placeholder span in the nav became a real due-count badge. Verified by a
   full source scan: zero emoji/glyph marks remain in UI code.
2. **Real desktop layout (≥1024px).** Content container widens from 768px to
   **1120px** on all views. Home: subjects in a 2-column grid (the live subject
   spans both columns), quick-action cards grow, the hero becomes a two-part
   arrangement (brand text + greeting beside the progress card). Reading-heavy
   screens (lesson prose, quiz/exam cards, exam report) center a readable
   ≤880px/768px column inside the wide shell instead of stretching text.
   Navigation: on mobile the full-width bottom bar stays; on desktop it becomes
   a **centered floating pill** (translucent lapis, gold hairline ring, shadow).
   Mobile layout is otherwise unchanged.
3. **Flashcards distribution redesigned.** The 5 skinny vertical bars on a tall
   empty plot are gone. Replaced with one horizontal stacked bar (5 palette
   shades — lapis→bronze→gold, counts inside wide segments) plus compact
   per-box rows (color dot, box number, card count, due count in gold). No dead
   vertical space.
4. **Designed «قريبًا» rows.** Locked subjects (home) and locked units
   (subject view) now share one treatment: lock icon in a circular gold-ringed
   medallion, diagonal-hatch pattern background over deep lapis, dashed hairline
   border, title raised to full cream contrast, and the «قريبًا» chip moved to
   the gold chip family so it reads as one system with «متاحة الآن».
5. **Palette discipline.** English quote/example cards left the periwinkle
   `lapis-50` tint for a lapis-family paper tone (`.paper-quote`: #E7EDF6 with a
   lapis inset hairline) — applied in lesson examples, quiz/exam English
   questions, exam report quotes, the flashcards part-of-speech pill and the
   subject lesson medallions. Borders unified: a single gold hairline marks
   live/interactive cards (subject card, live unit, flashcard), slate/cream
   hairlines for inert surfaces; card radii sit on one scale (3xl outer /
   2xl inner / full pills) — the flashcard's stray 1.8rem radius included.
6. **Quiz/exam vertical rhythm.** Both screens now compose the column: the
   question card is anchored in a flex column and vertically centered on tall
   screens with its action row pinned to the card foot, the faint lapis-brick
   **ground motif** fills the remaining ground, and the exam navigator/timer
   align to the same centered column. Every view root gained a `screen` entry
   transition (fade + 10px rise); press states (`.press`) were extended to the
   new icon buttons and option rows.
7. **Lesson view refinement.** A slim sticky sub-header rides inside the lesson:
   «الوحدة الأولى» chip, the lesson title, a live reading-progress readout
   (sections count + % read from scroll) and a gold progress hairline. Each
   section header now carries a numbered marker — the cuneiform wedge glyph in a
   lapis pill with the section number. All lesson content is byte-for-byte the
   original writing.

## Deployment note (incident, resolved)

Two first deploy attempts run from the repo working tree were left **BLOCKED**
by Vercel: the CLI attached GitHub metadata (the repo is GitHub-connected) and
the platform blocked those deployments, leaving the CLI polling forever. The
fix was the project's established **git-free route**: deploy from a clean copy
without `.git` (keeping `.vercel/project.json`). That deployment
(`dpl_JBSJUBZwxkPz85rL3ocYVHDeQTJN`) is READY and aliased to
uruk-academy.vercel.app; the two blocked deployments were deleted via the API.
Note the project has Vercel Deployment Protection (Vercel Authentication)
enabled — direct `curl` to some surfaces may be challenged; verification above
used the public alias + asset fetches, which return 200.
