import { test, expect, type Page } from '@playwright/test';
import { arabChapter1 } from '../src/content/arabic/a1';

/* Stage F — the Arabic book (the fifteen chapters of the integrative
   print: ten أساليب, four أدب groupings, one guided إنشاء chapter).
   Mirrors tests/stage-e.spec.ts: tests click the recorded correct option
   from the content data itself, so full-flow scores stay deterministic
   no matter where each key sits among the options. */

async function openArabicSubject(page: Page) {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'أكاديمية أوروك' })).toBeVisible();
  await page.getByRole('button', { name: /اللغة العربية Arabic/ }).click();
  await expect(page.getByText('أسلوب الاستفهام').first()).toBeVisible();
}

test('arabic subject: fifteen chapters listed, chapter 1 expanded with four lessons', async ({ page }) => {
  await openArabicSubject(page);
  await expect(page.getByText('15 فصول')).toBeVisible();
  await expect(page.getByText('252 بطاقة مراجعة')).toBeVisible();
  await expect(page.getByText('أسلوبا التحذير والإغراء').first()).toBeVisible();
  await expect(page.getByText('الإنشاء والتعبير').first()).toBeVisible();
  // Chapter 1 (initially open) offers the four standard lesson kinds
  await expect(page.getByRole('button', { name: /المفهوم — الاستفهام/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /أمثلة محلولة/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /خلاصة الفصل/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /تمارين متدرجة/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /اختبار الفصل/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /^الامتحان/ }).first()).toBeVisible();
});

test('worked إعراب solution: parsing steps reveal progressively, final rule carries the مبتدأ rule', async ({ page }) => {
  await openArabicSubject(page);
  await page.getByRole('button', { name: /أمثلة محلولة — إعراب جمل الاستفهام/ }).click();
  await expect(page.getByText('المثال ١ — مَنْ بَنَى المَدْرَسَةَ؟ ومتى أُسِّسَتْ؟')).toBeVisible();
  await expect(page.getByTestId('solution-final').first()).toHaveCount(0);
  for (let i = 0; i < 12; i++) {
    const next = page.getByTestId('solution-next').first();
    if ((await next.count()) === 0 || !(await next.isVisible().catch(() => false))) break;
    await next.click();
    if ((await page.getByTestId('solution-final').count()) > 0) break;
  }
  await expect(page.getByTestId('solution-final').first()).toBeVisible();
  await expect(page.getByTestId('solution-final').first()).toContainText('استوفى مفعوله');
  await expect(page.locator('.katex-error')).toHaveCount(0);
});

test('written flow (quiz): write → reveal model answer → self-mark rubric → score stored honestly', async ({ page }) => {
  await openArabicSubject(page);
  await page.getByRole('button', { name: /اختبار الفصل/ }).click();
  await expect(page.getByText('السؤال 1 من 12')).toBeVisible();
  // 10 MCQs — click each question's recorded correct option (10/10)
  for (let i = 0; i < 10; i++) {
    await page.getByTestId(`quiz-option-${arabChapter1.quiz[i].answer}`).click();
    await page.getByTestId('quiz-next').click();
  }
  // Written question 11: the model answer is hidden until requested
  await expect(page.getByText(/اكتب حلك هنا/)).toBeVisible();
  await page.getByTestId('written-answer').fill('من: اسم استفهام مبني على السكون في محل رفع مبتدأ، بنى: فعل ماض مبني على الفتح وفاعله ضمير مستتر يعود على من والجملة خبر، المدرسة: مفعول به منصوب بالفتحة');
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
  await page.getByTestId('written-answer').fill('إعراب كامل مسبب لكل كلمة مع بيان نوع الاستفهام من الجواب بالتعيين');
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
  expect(stored.quizBest['arab6-c1']).toMatchObject({ score: 15, total: 16 });
});

test('written flow (exam): chapter exam mixes MCQ + written, report self-marking updates the stored score', async ({ page }) => {
  await openArabicSubject(page);
  await page.getByRole('button', { name: /^الامتحان/ }).first().click();
  await expect(page.getByText('الامتحان الوزاري — أسلوب الاستفهام')).toBeVisible();
  await page.getByTestId('exam-start').click();
  // 4 MCQs answered correctly (20 marks), then 4 written questions
  for (let i = 0; i < 4; i++) {
    await page.getByTestId(`exam-option-${arabChapter1.exam[i].answer}`).click();
    await page.getByTestId('exam-next').click();
  }
  for (let i = 0; i < 3; i++) {
    await page.getByTestId('written-answer').fill('إعراب مكتوب بخطوات');
    await page.getByTestId('exam-next').click();
  }
  await page.getByTestId('written-answer').fill('إعراب مكتوب بخطوات');
  await page.getByRole('button', { name: 'إنهاء وتسليم' }).click();
  await expect(page.getByText('تقرير الامتحان')).toBeVisible();
  // self-mark the first written question's first three rubric points => stored best updates
  const firstWritten = arabChapter1.exam[4];
  const n = Math.min(3, firstWritten.rubric?.length ?? 0);
  const gained = (firstWritten.rubric ?? []).slice(0, n).reduce((s, r) => s + r.marks, 0);
  for (let i = 0; i < n; i++) {
    await page.getByTestId(`rubric-yes-${i}`).first().click();
  }
  await expect
    .poll(async () =>
      page.evaluate(() => {
        const s = JSON.parse(window.localStorage.getItem('uruk-academy-v1')!);
        return s.examBest['arab6-c1']?.score ?? -1;
      }),
    )
    .toBe(20 + gained);
});

test('arabic capstone: faithful وزاري paper — 26 written items, 145 marks, ترك 45, per-part report', async ({ page }) => {
  await openArabicSubject(page);
  await page.getByRole('button', { name: /ابدأ الامتحان الشامل/ }).click();
  await expect(page.getByText('الامتحان الوزاري الشامل — اللغة العربية')).toBeVisible();
  await expect(page.getByText(/تترك منها ما مجموعه 45 درجة/)).toBeVisible();
  await page.getByTestId('exam-start').click();
  await expect(page.getByText(/السؤال الأول — القواعد/)).toBeVisible();
  // walk the whole paper: all 26 items are written (no MCQ block in the Arabic paper)
  for (let i = 0; i < 25; i++) {
    await page.getByTestId('written-answer').fill('حل مكتوب بخطوات كاملة');
    await page.getByTestId('exam-next').click();
  }
  await page.getByTestId('written-answer').fill('حل مكتوب بخطوات كاملة');
  await page.getByRole('button', { name: 'إنهاء وتسليم' }).click();
  await expect(page.getByText('تقرير الامتحان')).toBeVisible();
  await expect(page.getByText('القواعد', { exact: true })).toBeVisible();
  await expect(page.getByText('الأدب', { exact: true })).toBeVisible();
  await expect(page.getByText('الإنشاء', { exact: true })).toBeVisible();
  await expect(page.getByText('من 145')).toBeVisible();
});

test('chapter smoke: complete an interrogation lesson, progress persists under the arabic id', async ({ page }) => {
  await openArabicSubject(page);
  await page.getByRole('button', { name: /المفهوم — الاستفهام/ }).click();
  await expect(page.getByText('تعريف الاستفهام ونوعاه من حيث الجواب')).toBeVisible();
  await page.getByTestId('complete-lesson').click();
  await expect(page.getByText('أنجزت هذا الدرس')).toBeVisible();
  await page.getByRole('button', { name: /المنهج/ }).click();
  await expect(page.getByText('1/4 دروس منجزة')).toHaveCount(1);
  const raw = await page.evaluate(() => window.localStorage.getItem('uruk-academy-v1'));
  expect(raw).toContain('ac1-l1');
});
