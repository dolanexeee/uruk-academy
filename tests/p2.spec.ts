import { test, expect, type Page } from '@playwright/test';

/* Phase 2 — the whole book. Per-unit smoke for the five new content
   units, the Unit 4 revision hub, the Unit 8 half-book mock, and the
   full-book capstone with its per-unit report breakdown. */

async function openSubject(page: Page) {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'أكاديمية أوروك' })).toBeVisible();
  await page.getByRole('button', { name: /اللغة الإنجليزية/ }).first().click();
  await expect(page.getByText('الوحدة الأولى')).toBeVisible();
}

async function expandUnit(page: Page, titleAr: string) {
  await page.getByRole('button', { name: new RegExp(titleAr) }).first().click();
}

test('p2 units: units 2, 3, 5, 6, 7 each open with 4 lessons + quiz + exam entries', async ({ page }) => {
  await openSubject(page);
  // the subject header itself announces the finished book
  await expect(page.getByText('الكتاب مكتمل')).toBeVisible();
  await expect(page.getByText('8 وحدات')).toBeVisible();
  await expect(page.getByText('24 درسًا')).toBeVisible();
  await expect(page.getByText('122 كلمة مفردات')).toBeVisible();

  const units: [string, string][] = [
    ['الوحدة الثانية', 'القراءة — تكنولوجيا الأمن'],
    ['الوحدة الثالثة', 'القراءة — مترجمة المؤتمرات'],
    ['الوحدة الخامسة', 'القراءة — لماذا العطل مهمة'],
    ['الوحدة السادسة', 'القراءة — صناعة المال'],
    ['الوحدة السابعة', 'القراءة — استخدام المكتبة'],
  ];
  for (const [title, reading] of units) {
    await expandUnit(page, title);
    await expect(page.getByRole('button', { name: new RegExp(reading) })).toBeVisible();
    await expect(page.getByRole('button', { name: /القواعد —/ }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /مفردات الوحدة/ }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /اختبار الوحدة/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /البطاقات/ }).first()).toBeVisible();
  }
});

test('p2 lesson: Unit Three grammar lesson completes and persists after reload (mid-book)', async ({ page }) => {
  await openSubject(page);
  await expandUnit(page, 'الوحدة الثالثة');
  await page.getByRole('button', { name: /القواعد — الجمل الشرطية/ }).click();
  await expect(page.getByText('أولًا: أنواع الشرط الأربعة')).toBeVisible();
  await expect(page.getByText('ثانيًا: الجمل المؤكِّدة Cleft Sentences')).toBeVisible();
  await page.getByTestId('complete-lesson').click();
  await expect(page.getByText('أنجزت هذا الدرس')).toBeVisible();

  await page.getByRole('button', { name: /المنهج/ }).click();
  await expect(page.getByText('1/4 دروس منجزة')).toBeVisible();

  await page.reload();
  await page.getByRole('button', { name: /المنهج/ }).click();
  await expect(page.getByText('1/4 دروس منجزة')).toBeVisible();
  const raw = await page.evaluate(() => window.localStorage.getItem('uruk-academy-v1'));
  expect(raw).toContain('u3-l2');
});

test('p2 quiz: Unit Six quiz renders 14 questions and produces a stored score', async ({ page }) => {
  await openSubject(page);
  await expandUnit(page, 'الوحدة السادسة');
  await page.getByRole('button', { name: /اختبار الوحدة/ }).click();
  await expect(page.getByText('السؤال 1 من 14')).toBeVisible();
  await expect(page.getByText('لماذا ينبغي للناس أن يدّخروا المال')).toBeVisible();

  for (let i = 0; i < 14; i++) {
    await page.getByTestId('quiz-option-1').click();
    await expect(page.getByText(/إجابة صحيحة|ليست الإجابة الصحيحة/)).toBeVisible();
    await page.getByTestId('quiz-next').click();
  }
  await expect(page.getByText('نتيجتك في اختبار الوحدة')).toBeVisible();
  await expect(page.getByText(/\/ 14/)).toBeVisible();
});

test('p2 revision: Unit Four hub — honest revision labels, mixed quiz, combined 62-word deck', async ({ page }) => {
  await openSubject(page);
  await expandUnit(page, 'الوحدة الرابعة');
  await expect(page.getByText(/في كتابك هذه الوحدة/)).toBeVisible();
  await expect(page.getByText('اختبار مراجعة: 15 سؤالًا')).toBeVisible();
  await expect(page.getByText('بطاقات مجمّعة: 62 كلمة')).toBeVisible();
  await expect(page.getByText('نصف الكتاب: 15 سؤالًا · 60 درجة · 25 دقيقة')).toBeVisible();

  // mixed review quiz: 15 questions drawn from units 1–3
  await page.getByRole('button', { name: /اختبار المراجعة/ }).click();
  await expect(page.getByText('السؤال 1 من 15')).toBeVisible();
  await page.getByTestId('quiz-option-0').click();
  await expect(page.getByText(/إجابة صحيحة|ليست الإجابة الصحيحة/)).toBeVisible();
  await page.getByRole('button', { name: /العودة/ }).first().click();

  // combined Leitner deck of all three source units
  const deckBtn = page.getByRole('button', { name: /بطاقات المراجعة/ });
  if (!(await deckBtn.isVisible().catch(() => false))) await expandUnit(page, 'الوحدة الرابعة');
  await deckBtn.click();
  const card = page.getByTestId('flashcard');
  await expect(card).toBeVisible();
  await card.click();
  await page.getByTestId('card-know').click();
  const srsCount = await page.evaluate(() => {
    const s = JSON.parse(window.localStorage.getItem('uruk-academy-v1') ?? '{}');
    return Object.keys(s.srs ?? {}).length;
  });
  expect(srsCount).toBeGreaterThan(0);
});

test('p2 revision exam: Unit Eight half-book mock reports per-unit breakdown', async ({ page }) => {
  await openSubject(page);
  await expandUnit(page, 'الوحدة الثامنة');
  await page.getByRole('button', { name: /امتحان نصف الكتاب/ }).click();
  await expect(page.getByText('امتحان نصف الكتاب — الوحدة الثامنة — مراجعة')).toBeVisible();
  await page.getByTestId('exam-start').click();

  for (let i = 0; i < 15; i++) {
    await page.getByTestId('exam-option-0').click();
    if (i < 14) await page.getByTestId('exam-next').click();
  }
  await page.getByTestId('exam-submit').click();
  await expect(page.getByText('تقرير الامتحان')).toBeVisible();
  await expect(page.getByText('من 60')).toBeVisible();
  // per-unit breakdown groups (source units 5, 6, 7 by their titles)
  await expect(page.getByText('الوحدة الخامسة').first()).toBeVisible();
  await expect(page.getByText('الوحدة السادسة').first()).toBeVisible();
  await expect(page.getByText('الوحدة السابعة').first()).toBeVisible();
});

test('p2 capstone: full-book exam — 25 questions, report out of 100 with per-unit breakdown', async ({ page }) => {
  await openSubject(page);
  await page.getByTestId('capstone-open').click();
  await expect(page.getByText('الامتحان الوزاري الشامل')).toBeVisible();
  await page.getByTestId('exam-start').click();
  await expect(page.getByTestId('exam-timer')).toBeVisible();

  for (let i = 0; i < 25; i++) {
    await page.getByTestId('exam-option-0').click();
    await expect(page.getByText('الإجابة الصحيحة:')).toHaveCount(0);
    if (i < 24) await page.getByTestId('exam-next').click();
  }
  await page.getByTestId('exam-submit').click();
  await expect(page.getByText('تقرير الامتحان')).toBeVisible();
  await expect(page.getByText('من 100')).toBeVisible();
  // every unit appears in the breakdown — including both revision units
  await expect(page.getByText('الوحدة الثانية').first()).toBeVisible();
  await expect(page.getByText('الوحدة الرابعة — مراجعة').first()).toBeVisible();
  await expect(page.getByText('الوحدة الثامنة — مراجعة').first()).toBeVisible();
  await expect(page.getByText('تصحيح الأسئلة سؤالًا سؤالًا')).toBeVisible();
});
