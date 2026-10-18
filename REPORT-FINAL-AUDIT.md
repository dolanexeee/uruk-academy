# REPORT — FINAL COMPREHENSIVE AUDIT (تدقيق نهائي شامل — «تتصلح كلشي»)

**Date:** 2026-10-18 · **Scope:** platform integrity/copy/consistency only — no
content facts changed. Any content-level suspicion is flagged, never silently
edited. **Method:** every displayed number recomputed programmatically from the
content files on disk (esbuild-bundled registry dump), every view and repo
surface swept for stale stage-era copy, full Playwright regression, git-free
production deploy, live verification.

## Computed platform totals (from the content files, not the reports)

| Book | Units | Lessons | Cards | Quiz Q | Exam Q | Capstone Q | Capstone marks | Capstone min |
|---|---|---|---|---|---|---|---|---|
| English (en6) | 8 (6 + 2 revision) | 24 | 122 | 114 | 120 | 25 | 100 | 45 |
| Mathematics (math6) | 6 | 24 | 97 | 72 | 48 | 19 | 150 | 180 |
| Physics (phys6) | 9 | 36 | 155 | 108 | 72 | 19 | 145 | 180 |
| Chemistry (chem6) | 8 | 32 | 138 | 96 | 64 | 19 | 145 | 180 |
| Biology (bio6) | 5 | 20 | 120 | 60 | 40 | 16 | 145 | 180 |
| Arabic (ar6) | 15 | 60 | 252 | 180 | 120 | 26 | 145 | 210 |
| **Platform** | **51** | **196** | **884** | **630** | **464** | **124** | **830 offered** | — |

Notes: English quiz/exam counts include the two revision hubs' composed pools
(U4/U8 quizzes 15q each; half-book mocks 15q each). Every stage report's claimed
book totals (lessons / cards / quiz / exam / capstone marks) match the computed
values exactly — no report overstated its book. Mechanical integrity re-verified
in the same dump: **zero rubric sums deviating from their question's marks**,
zero duplicate unit ids, zero duplicate lesson ids, zero duplicate vocab ids.

## Defects found → fix → verification

### D1 (the known defect) — home footer lied about the platform
`src/views/Home.tsx` footer still read «كتابا الإنجليزية والرياضيات للسادس
الإعدادي مكتملان هنا، وبقية المواد تُبنى تباعًا» — pre-Physics copy.
**Fix:** «كتب السادس الإعدادي الستة مكتملة هنا: الإنجليزية والرياضيات والفيزياء
والكيمياء والأحياء واللغة العربية.» **Verified:** new regression test
(`tests/final-audit.spec.ts`) asserts the new footer, zero «قريبًا» and zero
«تُبنى تباعًا» on the home page; eyeballed in the regenerated home screenshots.

### D2 — README described a two-stage, English-only platform
README said «المرحلتان الأولى والثانية — كتاب الإنجليزية مكتمل», listed the other
five subjects as «قريبًا», and claimed «اختبارات Playwright شاملة (١٤/١٤)».
**Fix:** full rewrite — all six books with the audited per-book totals above,
the engine section now covers written questions with self-marking rubrics,
progressive worked solutions, KaTeX + mhchem, the design-blend disclosure for
capstone weights, and the test count corrected (see regression section).
English summary rewritten to match.

### D3 — package.json metadata stale + license mismatch
`description` ended «Phase 1.» and `license` said `ISC` while the shipped
LICENSE file (and README) is Apache-2.0. **Fix:** description updated to the
six-books state; license → `Apache-2.0`.

### D4 — CONTENT.md content map documented only the English files
The «أين يعيش المحتوى؟» tree listed the English sources and stopped.
**Fix:** added the five book directories (math/physics/chemistry/biology/arabic)
and a computed platform-totals paragraph (51 units · 196 lessons · 884 cards ·
630 quiz · 464 exam · 830 capstone marks), cross-checked against the dump.

### D5 — stale SHARE-PACK.md still in the repo
v1 (English + Math only, «ديتبني هسه») was superseded twice over. **Fix:**
`git rm SHARE-PACK.md`; wrote **SHARE-PACK-v3.md** — the friends' copy-paste
message with ALL SIX books complete and the audited totals, no «باقي» line, and
private notes updated (footer fixed, v1/v2 both marked unusable). SHARE-PACK-v2.md
is retained in the repo as a historical record only; v3's notes say so.

### D6 — no regression guard for returning-student state
The suite never seeded a pre-completion saved state. **Fix:** new test in
`tests/final-audit.spec.ts` seeds a legacy partial state under the unchanged key
`uruk-academy-v1` (fields missing, progress in two books, an SRS record), and
asserts: home shows «أنجزت 2 من 196 درسًا» + the seeded best-quiz chip, the
English subject shows Unit One at 1/4, and after a reload + app re-save every
seeded record (both lesson ids, the quiz best, the SRS box, the name) is still
present. The store key and state shape were NOT changed in this audit — a
returning student's progress survives this deploy by construction and now by test.

## Consistency sweep — verified, no defect

- **Subject cards / headers / profile** are fully data-driven (registry counts),
  so card stats, the nav due-badge (all-books vocab = 884), the home progress
  strip (196-lesson denominator) and Profile per-book rows all reconcile with
  the computed table by construction. Home quick-action «الامتحان الوزاري الشامل»
  opens the English capstone and says so («محاكاة كتاب الإنجليزية كله») — accurate.
- **Capstone groupLabels**: math/physics/chemistry/biology carry per-chapter
  labels for all units; Arabic labels its three paper parts (unit-1..3) — matches
  its report structure. No label gaps.
- **Question ids are unique within every pool** (verified programmatically).
  They are NOT globally unique: math and physics both use the bare `cN-qM`
  scheme, and English revision/capstone pools reuse unit-question ids. This is
  safe — question ids are never used as storage keys (progress is keyed by
  unit/lesson/vocab ids, all globally unique) and each quiz/exam renders one
  pool at a time. Documented here as a known cosmetic overlap, deliberately not
  churned (renaming would touch hundreds of content lines for zero user effect).
- **localStorage key** `uruk-academy-v1` unchanged; `loadState` merges over
  defaults, so older partial states load losslessly (D6 test).
- Views/components contain no other stage-era claims: a full `src/` sweep for
  «قريبًا» / «تُبنى» / «قيد» / per-stage counts found only content prose
  (e.g. «قريبًا من النواة» inside a biology lesson) and one accurate code
  comment in `curriculum.ts` («No subject remains badged قريبًا»).
- `index.html` meta description and the PWA manifest make no numeric claims —
  nothing to reconcile.

## Flagged, NOT fixed (content-level — outside this audit's mandate)

- No content-level defect was spotted in the eyeball pass. Two observations,
  neither a defect in the shipped app: (1) in `fullPage` Playwright captures
  the fixed bottom nav renders mid-page — a screenshot-stitching artifact
  present in every stage's canonical set, not a layout break (viewport
  captures and the live app are unaffected); (2) on the Arabic subject page,
  long English chapter subtitles truncate with an ellipsis — the established
  `truncate` design behaviour on all books.
- Cosmetic namespace note (from the consistency sweep): question ids are
  unique per pool but not globally (math/physics share the `cN-` prefix;
  English revision/capstone pools reuse unit-question ids). No persisted
  state is keyed by question id, so there is no user-facing effect; renaming
  was deliberately not churned in an integrity pass.

## Regression & deployment

- **Production build:** clean (`tsc -b && vite build`), bundle
  `index-Ch5nF8Ya.js` (3,692,292 B), PWA precache 71 entries.
- **Full Playwright suite: 52/52 passed** (8.2 min, single worker) — the 50
  pre-existing tests plus the 2 new final-audit guards (D1 footer truth, D6
  legacy-state migration). The offline test is inside the 52 and passes.
  README's test claim was corrected to ٥٢/٥٢ to match.
- **Screenshots:** the suite regenerated the full canonical set (39 files in
  `qa/screenshots/`) against the fixed build. Eyeballed: home desktop + mobile
  (new footer visible, six live cards, 196-lesson strip, 884 nav badge),
  Arabic subject (15 فصول · 60 درسًا · 252 بطاقة · الكتاب مكتمل), Arabic
  capstone intro (26 سؤالًا / 145 درجة / 210 دقيقة, honest ترك + self-marking
  wording). No layout breaks, no stale text, no emoji in UI.
- **Deploy:** git-free route (clean copy without `.git` →
  `npx vercel --prod`), production deployment
  `uruk-academy-g3fme5b3z-mustafaalshatab-1824s-projects.vercel.app`.
- **Live verification:** https://uruk-academy.vercel.app answers HTTP 200 and
  serves `index-Ch5nF8Ya.js`, **byte-identical** (`cmp` clean, 3,692,292 B) to
  the tested local build; the live bundle contains the new footer string and
  zero occurrences of «تُبنى تباعًا». Live home/Arabic/capstone behaviour is
  therefore the exact build the 52 tests and the eyeballed screenshots ran
  against.

## Not done / disclosures

- The GitHub repo's web-side description (repo About text on github.com) is
  outside the repo tree and could not be audited from disk; if it carries a
  stage-era line it must be edited in the GitHub UI.
- The launch campaign was NOT started and nothing was posted anywhere, per
  the audit's scope.
