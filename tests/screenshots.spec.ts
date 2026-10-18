import { test, expect } from '@playwright/test';
import { mkdirSync } from 'fs';

const DIR = 'qa/screenshots';
mkdirSync(DIR, { recursive: true });

test('screenshots: mobile flow + desktop home', async ({ page, browser }) => {
  // ---- mobile 414x896 ----
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'أكاديمية أوروك' })).toBeVisible();
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${DIR}/01-home-mobile.png`, fullPage: true });
  await page.screenshot({ path: `${DIR}/01-home-mobile-v2.png`, fullPage: true });

  await page.getByRole('button', { name: /اللغة الإنجليزية/ }).first().click();
  await expect(page.getByText('الوحدة الأولى')).toBeVisible();
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${DIR}/02-subject-mobile.png`, fullPage: true });

  await page.getByRole('button', { name: /القراءة — سأظلّ/ }).click();
  await expect(page.getByText('القصة بملخّصنا')).toBeVisible();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${DIR}/03-lesson-mobile.png`, fullPage: true });
  await page.screenshot({ path: `${DIR}/03-lesson-mobile-v2.png`, fullPage: true });
  await page.getByRole('button', { name: /العودة إلى الوحدة/ }).click();
  await expect(page.getByText('الوحدة الأولى')).toBeVisible();

  await page.getByRole('button', { name: /اختبار الوحدة/ }).click();
  await page.getByTestId('quiz-option-1').click();
  await expect(page.getByText(/إجابة صحيحة|ليست الإجابة الصحيحة/)).toBeVisible();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${DIR}/04-quiz-mobile.png` });
  await page.getByRole('button', { name: /العودة إلى الوحدة/ }).click();
  await expect(page.getByText('الوحدة الأولى')).toBeVisible();

  await page.getByRole('button', { name: /البطاقات/ }).first().click();
  const card = page.getByTestId('flashcard');
  await expect(card).toBeVisible();
  await card.click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${DIR}/05-flashcards-mobile.png` });
  await page.screenshot({ path: `${DIR}/05-flashcards-mobile-v2.png` });
  await page.getByRole('button', { name: /العودة/ }).first().click();
  await expect(page.getByText('الوحدة الأولى')).toBeVisible();

  await page.getByRole('button', { name: /محاكاة وزارية|الامتحان/ }).first().click();
  await page.getByTestId('exam-start').click();
  await page.getByTestId('exam-option-2').click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${DIR}/06-exam-mobile.png` });

  // ---- desktop 1280x800 ----
  const desk = await browser.newPage({ viewport: { width: 1280, height: 800 }, locale: 'ar-IQ' });
  await desk.goto('/');
  await expect(desk.getByRole('heading', { name: 'أكاديمية أوروك' })).toBeVisible();
  await desk.waitForTimeout(700);
  await desk.screenshot({ path: `${DIR}/07-home-desktop.png`, fullPage: true });
  await desk.screenshot({ path: `${DIR}/07-home-desktop-v2.png`, fullPage: true });
  await desk.getByRole('button', { name: /اللغة الإنجليزية/ }).first().click();
  await expect(desk.getByText('الوحدة الأولى')).toBeVisible();
  await desk.getByRole('button', { name: /القواعد — أزمنة/ }).click();
  await expect(desk.getByText('أولًا: الماضي البسيط')).toBeVisible();
  await desk.waitForTimeout(300);
  await desk.screenshot({ path: `${DIR}/08-lesson-desktop.png`, fullPage: true });
  await desk.close();
});

test('screenshots p2: all-units subject page, a U3 lesson, U4 revision hub, capstone exam', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'أكاديمية أوروك' })).toBeVisible();
  await page.getByRole('button', { name: /اللغة الإنجليزية/ }).first().click();
  await expect(page.getByText('الكتاب مكتمل')).toBeVisible();
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${DIR}/09-subject-all-units-p2.png`, fullPage: true });

  // U3 reading lesson
  await page.getByRole('button', { name: /الوحدة الثالثة/ }).first().click();
  await page.getByRole('button', { name: /القراءة — مترجمة المؤتمرات/ }).click();
  await expect(page.getByText('الدرس بملخّصنا')).toBeVisible();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${DIR}/10-u3-lesson-p2.png`, fullPage: true });
  await page.getByRole('button', { name: /العودة إلى الوحدة/ }).click();
  await expect(page.getByText('الوحدة الثالثة')).toBeVisible();

  // U4 revision hub
  const hubBtn = page.getByRole('button', { name: /بطاقات المراجعة/ });
  if (!(await hubBtn.isVisible().catch(() => false))) {
    await page.getByRole('button', { name: /الوحدة الرابعة/ }).first().click();
  }
  await expect(page.getByText('بطاقات مجمّعة: 62 كلمة')).toBeVisible();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${DIR}/11-u4-revision-hub-p2.png`, fullPage: true });

  // capstone exam in progress
  await page.getByTestId('capstone-open').click();
  await page.getByTestId('exam-start').click();
  await page.getByTestId('exam-option-1').click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${DIR}/12-capstone-exam-p2.png` });
});

test('screenshots p2.1: U3 grammar with reported speech + wish, U5 grammar with past perfect + relatives, U7 grammar without future perfect', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'أكاديمية أوروك' })).toBeVisible();
  await page.getByRole('button', { name: /اللغة الإنجليزية/ }).first().click();
  await expect(page.getByText('الوحدة الأولى')).toBeVisible();

  // U3 grammar lesson — the two Activity-Book systems added in P2.1
  await page.getByRole('button', { name: /الوحدة الثالثة/ }).first().click();
  await page.getByRole('button', { name: /القواعد — الجمل الشرطية/ }).click();
  await expect(page.getByText('ثالثًا: الكلام المنقول Reported Speech')).toBeVisible();
  await expect(page.getByText('رابعًا: أبنية التمنّي Wish Structures')).toBeVisible();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${DIR}/13-u3-lesson-p21.png`, fullPage: true });
  await page.getByRole('button', { name: /العودة إلى الوحدة/ }).click();
  await expect(page.getByText('الوحدة الثالثة')).toBeVisible();

  // U5 grammar lesson — third section: past perfect + relative clauses
  await page.getByRole('button', { name: /الوحدة الخامسة/ }).first().click();
  await page.getByRole('button', { name: /القواعد — المضارع التام/ }).click();
  await expect(page.getByText(/ثالثًا: الماضي التام والجمل الموصولة/)).toBeVisible();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${DIR}/14-u5-grammar-p21.png`, fullPage: true });
  await page.getByRole('button', { name: /العودة إلى الوحدة/ }).click();
  await expect(page.getByText('الوحدة الخامسة')).toBeVisible();

  // U7 grammar lesson — five Activity-Book future types; future perfect is gone
  await page.getByRole('button', { name: /الوحدة السابعة/ }).first().click();
  await page.getByRole('button', { name: /القواعد — أزمنة المستقبل/ }).click();
  await expect(page.getByText('أولًا: خريطة صور المستقبل')).toBeVisible();
  await expect(page.getByText('المستقبل التام')).toHaveCount(0);
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${DIR}/15-u7-grammar-p21.png`, fullPage: true });
});

test('screenshots stage A: math subject, worked solution, written question, capstone', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'أكاديمية أوروك' })).toBeVisible();
  await page.getByRole('button', { name: /الرياضيات Mathematics/ }).click();
  await expect(page.getByText('الأعداد المركبة').first()).toBeVisible();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${DIR}/20-math-subject-stageA.png`, fullPage: true });

  // worked-solution lesson with steps revealed
  await page.getByRole('button', { name: /أمثلة محلولة/ }).click();
  await expect(page.getByText('المثال ١ — ضرب وقسمة')).toBeVisible();
  for (let i = 0; i < 4; i++) {
    const next = page.getByTestId('solution-next').first();
    if ((await next.count()) === 0) break;
    await next.click();
  }
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${DIR}/21-math-lesson-solution.png`, fullPage: true });
  await page.getByRole('button', { name: /العودة إلى الفصل/ }).click();
  await expect(page.getByText('الأعداد المركبة').first()).toBeVisible();

  // written question with the model answer + rubric revealed
  await page.getByRole('button', { name: /اختبار الفصل/ }).click();
  for (let i = 0; i < 10; i++) {
    await page.getByTestId('quiz-option-1').click();
    await page.getByTestId('quiz-next').click();
  }
  await page.getByTestId('written-answer').fill('وسّعت القوس أولًا ثم ضربت البسط والمقام في مرافق المقام');
  await page.getByTestId('written-reveal').click();
  await expect(page.getByText('مفتاح التصحيح')).toBeVisible();
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${DIR}/22-written-question.png`, fullPage: true });
  await page.getByRole('button', { name: /العودة إلى الفصل/ }).click();

  // math capstone intro
  await page.getByRole('button', { name: /ابدأ الامتحان الشامل/ }).click();
  await expect(page.getByText('الامتحان الوزاري الشامل — الرياضيات')).toBeVisible();
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${DIR}/23-math-capstone.png`, fullPage: true });
});
