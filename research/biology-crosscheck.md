# Biology — independent cross-check record (Stage E)

Files-only re-verification of `src/content/biology/b1.ts`–`b5.ts` and
`capstone.ts` against `research/biology-structure.md` and general
scientific accuracy. Every MCQ key, every worked value and every
genetics probability was re-derived from the printed givens — not
skimmed from the authors' self-audits.

**Process note (disclosed):** the two checker subagents commissioned for
this pass could not be spawned (runtime reservation error at spawn
time). The check was therefore performed by the stage coordinator, who
authored NONE of the five chapter files (they were written by five
independent author agents) — the chapters' check is a genuine
non-author check. The capstone WAS coordinator-authored, so it received
a full cold re-derivation pass instead; that pass caught two real
defects in it (below), which is the strongest available evidence the
pass was adversarial rather than ceremonial.

## Verdict

- **70 chapter MCQs (14 × 5): 69 keys correct as recorded; 1 wrong key
  found and fixed** (bc5-e2, below). Every key is also uniquely correct
  (no second defensible option).
- **All worked values re-derived: correct.** Ch.1 chromosome tracking
  (2n=8 mitosis with the temporary anaphase doubling to 16 inside one
  cell; meiosis halving at division I; exam 2n=12 → n=6), osmosis
  predictions (plant turgor vs RBC lysis), glycolysis net 2 ATP with
  NO aerobic total stated anywhere (the standing instruction).
  Ch.3 accounting: 2n=24 → egg 12 / sperm nucleus 12 / zygote 24 /
  endosperm 36; 2n=46 → 4 sperm vs 1 ovum + 3 polar bodies, n=23;
  2n=20 (exam) → 10/20/30; 2n=18 (drill) → 9/9/18/18/27; bacterial
  fission 2⁶ = 64 after 2 h at 20-min generations; embryo sac
  8 nuclei / 7 cells with the book's composition; ovarian-cycle
  sequence FSH → estrogen → LH surge ~day 14 → corpus luteum →
  progesterone → degeneration → menstruation. Ch.2 blood figures are
  presented as approximations (نحو/تقريبية) at standard textbook
  values (plasma ≈55%).
- **Every genetics probability in b5 re-derived: correct** —
  Tt×Tt 1:2:1 / 3:1; YyRr self-cross 9:3:3:1 with yellow-wrinkled
  3/16 = 18.75% (also verified by the product rule ¾ × ¼);
  incomplete dominance 1:2:1 genotypic = phenotypic; test crosses
  Aa×aa → 50% recessive phenotype; TT×tt → 100% Tt; hemophilia
  (carrier mother): daughters 100% phenotypically normal (½ carriers),
  sons 50% affected, P(affected child) = ¼; colour-blindness
  (affected father × pure normal mother): daughters 100% carriers,
  sons 100% normal, 0 affected; blood groups I^A i × I^B i → 1:1:1:1
  at 25% each, and I^A I^B × ii → ½ A : ½ B with O/AB impossible for
  the stated reason; creeper chicken Cc×Cc → 2:1 among survivors
  (66.7%/33.3%); sickle cell carrier × carrier → 1:2:1 with the book's
  three phenotypes; Andalusian blue × blue → 1:2:1; dihybrid test
  cross AaBb × aabb → 1:1:1:1 at 25% each.
- **b4 accuracy: clean** — germ-layer derivatives exact (incl. the
  deliberate traps: liver/pancreas endoderm, spleen/dermis mesoderm,
  lens/enamel ectoderm, bladder lining endoderm), monozygotic twins,
  IVF vs ICSI indications, SCNT genetics (nuclear donor = genetic
  source; Dolly 1996), stem-cell source (inner cell mass), egg-type →
  cleavage-pattern logic. No amphioxus development taught anywhere.
- **حذوفات compliance: clean.** Grep of all five chapter files:
  الهايدرا appears only as an organisation-level EXAMPLE (اللاسعات) in
  b4 — standard book content for مستويات التعظي, not the deleted
  reproduction section; بلاناريا، دودة الأرض، تكاثر خضري، وراثة كمية
  appear nowhere in taught content; الرميح appears only in b4's
  header/theme as an explicit deletion note.

## Defects found and fixed pre-delivery

1. **bc5-e2 — WRONG RECORDED KEY (the stage's one serious defect).**
   The question asks the phenotypic ratio for a hybrid × hybrid cross
   under incomplete dominance. The options listed «1:2:1 منطبقة على
   النسبة الوراثية نفسها» at index 2 and «9:3:3:1» at index 3, but the
   recorded `answer` was 3 — while the item's own `explain` correctly
   teaches 1:2:1. (The author's report claimed the correct text sat at
   index 3; the file said otherwise — disk wins, as always.) Fix: the
   two option texts were swapped so the recorded key lands on the
   1:2:1 text; the chapter key distribution is unchanged (4/4/3/3) and
   the explain now agrees with the key.
2. **capstone cb-q5c — transcription mutation mis-derived (caught in
   the coordinator's own pre-check, before this pass).** As first
   written, mutating the template triplet GGA→AGA was claimed to change
   the mRNA codon CCU→CUU; the true complement of AGA is UCU (serine).
   Fix: the mutation was redesigned to the triplet's middle base
   (GGA→GAA), whose complement IS CUU — so the stated outcome
   (Pro→Leu, missense point substitution) is now exactly right, and
   the full item was re-derived base by base: template
   3′-TAC GGA TTA CCG-5′ → mRNA 5′-AUG CCU AAU GGC-3′ →
   Met–Pro–Asn–Gly ✓; mutant codon 2 CCU→CUU → Leu ✓.
3. **capstone cb-q5a part (2) — partial duplication of a chapter
   worked example.** The pink × pink cross (Rr×Rr → 1:2:1) repeated
   the second step of b5's L2 incomplete-dominance example. Rewritten
   to a fresh cross — pure red × pink (RR×Rr → ½ red : ½ pink, white
   impossible because every offspring inherits R from the pure
   parent) — re-derived before writing. Part (1) (Rr×rr backcross →
   1:1) was already fresh.
4. **capstone cb-q3b — موقع ووظيفة set overlap reduced.** The set
   originally shared 2 of 5 structures (البربخ، الحويصلة المنوية) with
   b3's exam e7 set. الحويصلة المنوية was replaced with غدة البروستات
   (location/function/model/rubric written fresh), leaving 1/5 overlap
   (البربخ — a canonical وزاري structure whose facts cannot differ).

## Capstone originality pass (per item, vs all chapter pools)

| Item | Verdict | Basis |
|---|---|---|
| cb-q1a موقع ووظيفة ×5 | similar-but-distinct | 4/5 structures absent from b1-e7's set (ميتوكوندريا/جسيم مركزي/جسم حركي/فجوة مركزية/بلاستيدات ملونة); الفجوة recurs in a different framing (عصارية: turgor + storage) |
| cb-q1b علّل ×3 | fresh | cell-size/surface ratio, mitochondria abundance, selective permeability — none in b1 pools |
| cb-q1c plant vs animal cell | fresh | b1 compares divisions and transport, never the two cell types head-to-head |
| cb-q2a collenchyma vs sclerenchyma | fresh | the pair is defined separately in b2 cards, never compared as an item |
| cb-q2b موقع ووظيفة ×5 | fresh | set (ثغور/غربالية/مرافقة/غضروف/عضلة قلبية) not used as a set in b2 (e7 used أقراص بينية/برنكيمية هوائية/كامبيوم/كريات بيض) |
| cb-q2c definitions ×4 of 5 | fresh | definition-block format new to this chapter's pools |
| cb-q3a cross-pollination essay | fresh | b3 teaches pollination types in lessons; no شرح item on agents/flower traits exists in its pools |
| cb-q3b male-system موقع ووظيفة | similar-but-distinct (after fix 4) | 1/5 overlap (البربخ); كيس الصفن/البروستات/كوبر/القناة القاذفة fresh as items |
| cb-q3c علّل ×3 | fresh | Fallopian-tube site, 3n endosperm, unequal gametogenesis — none are b3 pool items |
| cb-q3d gametogenesis counting | similar-but-distinct | same concept as b3-L2's walk-through but new organism number (2n=36, not 46) and a counting question (×5 mother cells), not a walk-through |
| cb-q4a stages + derivatives | similar-but-distinct | combines b4-e5 (stages) and b4-e6 (derivatives) topics into one item with different demanded outputs (two derivatives per layer inside a stages narrative) — core شرحيات re-asked as real papers do |
| cb-q4b definitions ×2 | fresh | twins + stem cells as a 2-mark block is a new format for the chapter |
| cb-q5a شب الليل | fresh (after fix 3) | backcross Rr×rr and RR×Rr — neither cross appears in b5 pools (which use RR×rr and Rr×Rr) |
| cb-q5b colour-blindness | fresh | affected father × CARRIER mother — a parental combination absent from b5 (hemophilia carrier-mother and colour-blind affected-father × pure-normal-mother); outcomes differ materially (affected daughters possible) |
| cb-q5c transcription sequence | fresh | b5's molecular written item (e7) is a شرح of transcription/translation; no sequence-derivation item exists in the pools |
| cb-q5d definitions ×5 of 6 | fresh | definition block; terms are chapter-canonical, the block format and selection are new |

No capstone item survives as a duplicate of chapter material.

## Frame re-verification

Capstone totals re-audited after fixes: 16 items, marks sum **145**,
per-chapter **30/28/40/12/35**, every rubric summing exactly to its
item's marks, minutes 180, introNote paraphrases ترك 45 / scored 100
(no verbatim quote claimed). Chapter audits: quiz 16 and exam 60 in all
five chapters; whole-book MCQ key distribution **17/18/18/17**.

## Stated limits of this check

- Model answers were verified for scientific correctness and
  book-terminology fidelity, not against the ministry markers' exact
  expected phrasing (unverifiable from public sources — the standing
  disclosure of every stage).
- Book-internal facts that could not be re-read from the book during
  this pass (e.g. mitosis phase durations) were checked for internal
  consistency only; the structure dossier's spot-checked facts were
  the anchor set.
