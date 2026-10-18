import { test, expect, type Page } from '@playwright/test';
import { bioChapter1 } from '../src/content/biology/b1';

/* Stage E — the Biology book (the five chapters of the current print).
   Mirrors tests/stage-d.spec.ts: tests click the recorded correct option
   from the content data itself, so full-flow scores stay deterministic
   no matter where each key sits among the options. */

async function openBiologySubject(page: Page) {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'أكاديمية أوروك' })).toBeVisible();
  await page.getByRole('button', { name: /الأحياء Biology/ }).click();
  await expect(page.getByText('الخلية').first()).toBeVisible();
}

test('biology subject: five chapters listed, chapter 1 expanded with four lessons', async ({ page }) => {
  await openBiologySubject(page);
  await expect(page.getByText('5 فصول')).toBeVisible();
  await expect(page.getByText('120 تعريفًا')).toBeVisible();
  await expect(page.getByText('التكوين الجنيني').first()).toBeVisible();
  await expect(page.getByText('الوراثة').first()).toBeVisible();
  // Chapter 1 (initially open) offers the four science-book lesson kinds
  await expect(page.getByRole('button', { name: /المفهوم — الخلية/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /أمثلة محلولة/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /خلاصة الفصل/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /تمارين متدرجة/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /اختبار الفصل/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /^الامتحان/ }).first()).toBeVisible();
});

test('worked genetics solution: Punnett steps reveal progressively, final answer carries the 3:1 ratio', async ({ page }) => {
  await openBiologySubject(page);
  // expand chapter 5 (الوراثة) and open its worked-solutions lesson
  await page.getByRole('button', { name: /الوراثة Genetics/ }).click();
  await page.getByRole('button', { name: /أمثلة محلولة — مسائل الوراثة/ }).click();
  await expect(page.getByText('المثال ١ — أحادي الهجين: هجين في الطول مع هجين')).toBeVisible();
  await expect(page.locator('.katex').first()).toBeVisible();
  await expect(page.getByTestId('solution-final').first()).toHaveCount(0);
  for (let i = 0; i < 12; i++) {
    const next = page.getByTestId('solution-next').first();
    if ((await next.count()) === 0 || !(await next.isVisible().catch(() => false))) break;
    await next.click();
    if ((await page.getByTestId('solution-final').count()) > 0) break;
  }
  await expect(page.getByTestId('solution-final').first()).toBeVisible();
  await expect(page.getByTestId('solution-final').first()).toContainText('75%');
  await expect(page.locator('.katex-error')).toHaveCount(0);
});

test('written flow (quiz): write → reveal model answer → self-mark rubric → score stored honestly', async ({ page }) => {
  await openBiologySubject(page);
  await page.getByRole('button', { name: /اختبار الفصل/ }).click();
  await expect(page.getByText('السؤال 1 من 12')).toBeVisible();
  // 10 MCQs — click each question's recorded correct option (10/10)
  for (let i = 0; i < 10; i++) {
    await page.getByTestId(`quiz-option-${bioChapter1.quiz[i].answer}`).click();
    await page.getByTestId('quiz-next').click();
  }
  // Written question 11: the model answer is hidden until requested
  await expect(page.getByText(/اكتب حلك هنا/)).toBeVisible();
  await page.getByTestId('written-answer').fill('جهاز كولجي يقع في السيتوبلازم قرب النواة، وظيفته تعديل المواد وفرزها وتغليفها في حويصلات، وفي النباتية يشارك في تكوين الصفيحة الخلوية');
  await page.getByTestId('written-reveal').click();
  await expect(page.getByText('الحل النموذجي')).toBeVisible();
  await expect(page.getByText('مفتاح التصحيح')).toBeVisible();
  // self-mark: two points earned, one missed => 2 of 3
  await page.getByTestId('rubric-yes-0').click();
  await page.getByTestId('rubric-yes-1').click();
  await page.getByTestId('rubric-no-2').click();
  await page.getByTestId('written-confirm').click();
  await page.getByTestId('quiz-next').click();
  // Written question 12 (علّل): full marks
  await page.getByTestId('written-answer').fill('يدخل الماء تناضحيًا إلى الخليتين، فتنفجر الحمراء لعدم وجود جدار يقاوم الضغط، وتمتلئ النباتية لأن جدارها السليلوزي يقاوم ضغط الامتلاء');
  await page.getByTestId('written-reveal').click();
  await page.getByTestId('rubric-yes-0').click();
  await page.getByTestId('rubric-yes-1').click();
  await page.getByTestId('rubric-yes-2').click();
  await page.getByTestId('written-confirm').click();
  await page.getByTestId('quiz-next').click();
  // finish: 10 (MCQ) + 2 + 3 = 15 of 16
  await expect(page.getByText('نتيجتك في اختبار الفصل')).toBeVisible();
  const raw = await page.evaluate(() => window.localStorage.getItem('uruk-academy-v1'));
  const stored = JSON.parse(raw!);
  expect(stored.quizBest['bio6-c1']).toMatchObject({ score: 15, total: 16 });
});

test('written flow (exam): chapter exam mixes MCQ + written, report self-marking updates the stored score', async ({ page }) => {
  await openBiologySubject(page);
  await page.getByRole('button', { name: /^الامتحان/ }).first().click();
  await expect(page.getByText('الامتحان الوزاري — الخلية')).toBeVisible();
  await page.getByTestId('exam-start').click();
  // 4 MCQs answered correctly (20 marks), then 4 written questions
  for (let i = 0; i < 4; i++) {
    await page.getByTestId(`exam-option-${bioChapter1.exam[i].answer}`).click();
    await page.getByTestId('exam-next').click();
  }
  for (let i = 0; i < 3; i++) {
    await page.getByTestId('written-answer').fill('حل مكتوب بخطوات');
    await page.getByTestId('exam-next').click();
  }
  await page.getByTestId('written-answer').fill('حل مكتوب بخطوات');
  await page.getByRole('button', { name: 'إنهاء وتسليم' }).click();
  await expect(page.getByText('تقرير الامتحان')).toBeVisible();
  // self-mark the first written question's first three rubric points => stored best updates
  const firstWritten = bioChapter1.exam[4];
  const n = Math.min(3, firstWritten.rubric?.length ?? 0);
  const gained = (firstWritten.rubric ?? []).slice(0, n).reduce((s, r) => s + r.marks, 0);
  for (let i = 0; i < n; i++) {
    await page.getByTestId(`rubric-yes-${i}`).first().click();
  }
  await expect
    .poll(async () =>
      page.evaluate(() => {
        const s = JSON.parse(window.localStorage.getItem('uruk-academy-v1')!);
        return s.examBest['bio6-c1']?.score ?? -1;
      }),
    )
    .toBe(20 + gained);
});

test('biology capstone: faithful وزاري paper — 16 written items, 145 marks, ترك 45, per-chapter report', async ({ page }) => {
  await openBiologySubject(page);
  await page.getByRole('button', { name: /ابدأ الامتحان الشامل/ }).click();
  await expect(page.getByText('الامتحان الوزاري الشامل — الأحياء')).toBeVisible();
  await expect(page.getByText(/تترك منها ما مجموعه 45 درجة/)).toBeVisible();
  await page.getByTestId('exam-start').click();
  await expect(page.getByText(/السؤال الأول — فرع أ/)).toBeVisible();
  // walk the whole paper: all 16 items are written branches (no MCQ block in the biology paper)
  for (let i = 0; i < 15; i++) {
    await page.getByTestId('written-answer').fill('حل مكتوب بخطوات كاملة');
    await page.getByTestId('exam-next').click();
  }
  await page.getByTestId('written-answer').fill('حل مكتوب بخطوات كاملة');
  await page.getByRole('button', { name: 'إنهاء وتسليم' }).click();
  await expect(page.getByText('تقرير الامتحان')).toBeVisible();
  await expect(page.getByText('الفصل ١ — الخلية', { exact: true })).toBeVisible();
  await expect(page.getByText('الفصل ٥ — الوراثة', { exact: true })).toBeVisible();
  await expect(page.getByText('من 145')).toBeVisible();
});

test('chapter smoke: complete a cell lesson, progress persists under the biology id', async ({ page }) => {
  await openBiologySubject(page);
  await page.getByRole('button', { name: /المفهوم — الخلية/ }).click();
  await expect(page.getByText('نظرية الخلية وحجمها — من هوك وليفنهوك إلى فيرشو')).toBeVisible();
  await page.getByTestId('complete-lesson').click();
  await expect(page.getByText('أنجزت هذا الدرس')).toBeVisible();
  await page.getByRole('button', { name: /المنهج/ }).click();
  await expect(page.getByText('1/4 دروس منجزة')).toHaveCount(1);
  const raw = await page.evaluate(() => window.localStorage.getItem('uruk-academy-v1'));
  expect(raw).toContain('bc1-l1');
});
