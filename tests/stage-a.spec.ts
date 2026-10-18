import { test, expect, type Page } from '@playwright/test';
import { chapter1 } from '../src/content/math/m1';

/* Stage A — engine upgrades (written questions, worked solutions, KaTeX)
   + the Mathematics book. Tests click the recorded correct option from
   the content data itself, so full-flow scores stay deterministic no
   matter where each key sits among the options. */

async function openMathSubject(page: Page) {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'أكاديمية أوروك' })).toBeVisible();
  await page.getByRole('button', { name: /الرياضيات Mathematics/ }).click();
  await expect(page.getByText('الأعداد المركبة').first()).toBeVisible();
}

test('math subject: chapters listed, chapter 1 expanded with four lessons', async ({ page }) => {
  await openMathSubject(page);
  await expect(page.getByText('6 فصول')).toBeVisible();
  await expect(page.getByText('الهندسة الفضائية').first()).toBeVisible();
  await expect(page.getByText('المعادلات التفاضلية الاعتيادية').first()).toBeVisible();
  // Chapter 1 (initially open) offers the four Stage-A lesson kinds
  await expect(page.getByRole('button', { name: /المفهوم — لماذا نحتاج/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /أمثلة محلولة/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /قوانين وخلاصة الفصل/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /تمارين متدرجة/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /اختبار الفصل/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /^الامتحان/ }).first()).toBeVisible();
});

test('katex + worked solutions: formulas render, steps reveal one by one, final answer appears last', async ({ page }) => {
  await openMathSubject(page);
  await page.getByRole('button', { name: /أمثلة محلولة/ }).click();
  await expect(page.getByText('المثال ١ — ضرب وقسمة')).toBeVisible();
  // KaTeX actually rendered (not raw $…$ source)
  await expect(page.locator('.katex').first()).toBeVisible();
  const katexBefore = await page.locator('.katex').count();
  expect(katexBefore).toBeGreaterThan(2);
  // final answer of the first worked example is gated behind the steps
  await expect(page.getByTestId('solution-final').first()).toHaveCount(0);
  for (let i = 0; i < 12; i++) {
    const next = page.getByTestId('solution-next').first();
    if ((await next.count()) === 0 || !(await next.isVisible().catch(() => false))) break;
    await next.click();
    if ((await page.getByTestId('solution-final').count()) > 0) break;
  }
  await expect(page.getByTestId('solution-final').first()).toBeVisible();
  await expect(page.getByTestId('solution-final').first()).toContainText('7');
  // revealing steps rendered more formulas than the gated initial view
  expect(await page.locator('.katex').count()).toBeGreaterThan(katexBefore);
});

test('written flow (quiz): write → reveal model answer → self-mark rubric → score stored honestly', async ({ page }) => {
  await openMathSubject(page);
  await page.getByRole('button', { name: /اختبار الفصل/ }).click();
  await expect(page.getByText('السؤال 1 من 12')).toBeVisible();
  // 10 MCQs — click each question's recorded correct option (10/10)
  for (let i = 0; i < 10; i++) {
    await page.getByTestId(`quiz-option-${chapter1.quiz[i].answer}`).click();
    await page.getByTestId('quiz-next').click();
  }
  // Written question 11: the model answer is hidden until requested
  await expect(page.getByText(/اكتب حلك هنا/)).toBeVisible();
  await page.getByTestId('written-answer').fill('حلي: وسّعت القوس ثم ضربت في المرافق');
  await page.getByTestId('written-reveal').click();
  await expect(page.getByText('الحل النموذجي')).toBeVisible();
  await expect(page.getByText('مفتاح التصحيح')).toBeVisible();
  // self-mark: two points earned, one missed => 2 of 3
  await page.getByTestId('rubric-yes-0').click();
  await page.getByTestId('rubric-yes-1').click();
  await page.getByTestId('rubric-no-2').click();
  await page.getByTestId('written-confirm').click();
  await page.getByTestId('quiz-next').click();
  // Written question 12: full marks
  await page.getByTestId('written-answer').fill('الجذور هي 1 و أوميغا و أوميغا تربيع ومجموعها صفر');
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
  expect(stored.quizBest['ma6-c1']).toMatchObject({ score: 15, total: 16 });
});

test('written flow (exam): chapter exam mixes MCQ + written, report self-marking updates the stored score', async ({ page }) => {
  await openMathSubject(page);
  await page.getByRole('button', { name: /^الامتحان/ }).first().click();
  await expect(page.getByText('الامتحان الوزاري — الأعداد المركبة')).toBeVisible();
  await page.getByTestId('exam-start').click();
  // 4 MCQs answered correctly (20 marks), then 4 written questions
  for (let i = 0; i < 4; i++) {
    await page.getByTestId(`exam-option-${chapter1.exam[i].answer}`).click();
    await page.getByTestId('exam-next').click();
  }
  for (let i = 0; i < 3; i++) {
    await page.getByTestId('written-answer').fill('حل مكتوب بخطوات');
    await page.getByTestId('exam-next').click();
  }
  await page.getByTestId('written-answer').fill('حل مكتوب بخطوات');
  await page.getByRole('button', { name: 'إنهاء وتسليم' }).click();
  await expect(page.getByText('تقرير الامتحان')).toBeVisible();
  // self-mark the first written question in full (10) => stored best becomes 20 + 10 = 30
  await page.getByTestId('rubric-yes-0').first().click();
  await page.getByTestId('rubric-yes-1').first().click();
  await page.getByTestId('rubric-yes-2').first().click();
  await expect
    .poll(async () =>
      page.evaluate(() => {
        const s = JSON.parse(window.localStorage.getItem('uruk-academy-v1')!);
        return s.examBest['ma6-c1']?.score ?? -1;
      }),
    )
    .toBe(30);
});

test('math capstone: faithful وزاري paper — 19 items, 150 marks, per-chapter report', async ({ page }) => {
  await openMathSubject(page);
  await page.getByRole('button', { name: /ابدأ الامتحان الشامل/ }).click();
  await expect(page.getByText('الامتحان الوزاري الشامل — الرياضيات')).toBeVisible();
  await expect(page.getByText(/تترك ما مجموعه 50 درجة/)).toBeVisible();
  await page.getByTestId('exam-start').click();
  await expect(page.getByText(/السؤال الأول — فرع أ/)).toBeVisible();
  // walk the whole paper: fill written branches, answer the composite points
  for (let i = 0; i < 18; i++) {
    const ta = page.getByTestId('written-answer');
    if (await ta.isVisible().catch(() => false)) await ta.fill('حل مكتوب بخطوات كاملة');
    const opt = page.getByTestId('exam-option-1');
    if (await opt.isVisible().catch(() => false)) await opt.click();
    await page.getByTestId('exam-next').click();
  }
  const ta = page.getByTestId('written-answer');
  if (await ta.isVisible().catch(() => false)) await ta.fill('حل مكتوب بخطوات كاملة');
  await page.getByRole('button', { name: 'إنهاء وتسليم' }).click();
  await expect(page.getByText('تقرير الامتحان')).toBeVisible();
  await expect(page.getByText('الفصل ١ — الأعداد المركبة', { exact: true })).toBeVisible();
  await expect(page.getByText('الفصل ٣ — تطبيقات التفاضل', { exact: true })).toBeVisible();
  await expect(page.getByText('من 150')).toBeVisible();
});

test('chapter smoke: complete a geometry lesson, progress persists', async ({ page }) => {
  await openMathSubject(page);
  await page.getByRole('button', { name: /الهندسة الفضائية/ }).first().click();
  await page.getByRole('button', { name: /المفهوم — الزاوية الزوجية/ }).click();
  await expect(page.getByText('الزاوية المستوية العائدة').first()).toBeVisible();
  await page.getByTestId('complete-lesson').click();
  await expect(page.getByText('أنجزت هذا الدرس')).toBeVisible();
  await page.getByRole('button', { name: /المنهج/ }).click();
  await expect(page.getByText('1/4 دروس منجزة')).toHaveCount(1);
  const raw = await page.evaluate(() => window.localStorage.getItem('uruk-academy-v1'));
  expect(raw).toContain('c6-l1');
});
