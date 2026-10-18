import { test, expect, type Page } from '@playwright/test';

async function openSubject(page: Page) {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'أكاديمية أوروك' })).toBeVisible();
  await page.getByRole('button', { name: /اللغة الإنجليزية/ }).first().click();
  await expect(page.getByText('الوحدة الأولى')).toBeVisible();
}

test('home: branding, live subjects, progress strip', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'أكاديمية أوروك' })).toBeVisible();
  // The progress strip tracks all live books (English + Mathematics + Physics + Chemistry + Biology + Arabic).
  await expect(page.getByText('تقدّمك في الأكاديمية')).toBeVisible();
  await expect(page.getByText('متاحة الآن').first()).toBeVisible();
  // All six books are live (Arabic completed the program in Stage F) — no subject remains قريبًا.
  await expect(page.getByRole('button', { name: /الرياضيات/ }).first()).toBeVisible();
  await expect(page.getByRole('button', { name: /الفيزياء/ }).first()).toBeVisible();
  await expect(page.getByRole('button', { name: /الكيمياء/ }).first()).toBeVisible();
  await expect(page.getByRole('button', { name: /الأحياء/ }).first()).toBeVisible();
  await expect(page.getByRole('button', { name: /اللغة العربية/ }).first()).toBeVisible();
});

test('lesson: complete Unit One grammar lesson, progress persists after reload', async ({ page }) => {
  await openSubject(page);
  await page.getByRole('button', { name: /أزمنة السرد/ }).click();
  await expect(page.getByText('أولًا: الماضي البسيط')).toBeVisible();
  await expect(page.getByText('ثالثًا: الزمنان معًا')).toBeVisible();
  await page.getByTestId('complete-lesson').click();
  await expect(page.getByText('أنجزت هذا الدرس')).toBeVisible();

  // back to subject: progress shows 1/4
  await page.getByRole('button', { name: /المنهج/ }).click();
  await expect(page.getByText('1/4 دروس منجزة')).toBeVisible();

  // full reload: still persisted
  await page.reload();
  await page.getByRole('button', { name: /المنهج/ }).click();
  await expect(page.getByText('1/4 دروس منجزة')).toBeVisible();
  const raw = await page.evaluate(() => window.localStorage.getItem('uruk-academy-v1'));
  expect(raw).toContain('u1-l2');
});

test('quiz: instant feedback per question, final score stored and shown after reload', async ({ page }) => {
  await openSubject(page);
  await page.getByRole('button', { name: /اختبار الوحدة/ }).click();
  await expect(page.getByText('السؤال 1 من 14')).toBeVisible();

  for (let i = 0; i < 14; i++) {
    await page.getByTestId('quiz-option-1').click();
    await expect(page.getByText(/إجابة صحيحة|ليست الإجابة الصحيحة/)).toBeVisible();
    await page.getByTestId('quiz-next').click();
  }
  await expect(page.getByText('نتيجتك في اختبار الوحدة')).toBeVisible();
  await expect(page.getByText(/\/ 14/)).toBeVisible();

  await page.reload();
  await expect(page.getByText(/أفضل اختبار:/)).toBeVisible();
});

test('flashcards: flip, know-answer promotes the Leitner box and persists after reload', async ({ page }) => {
  await openSubject(page);
  await page.getByRole('button', { name: /البطاقات/ }).first().click();
  const card = page.getByTestId('flashcard');
  await expect(card).toBeVisible();
  const firstWord = (await card.textContent()) ?? '';
  expect(firstWord).toContain('diabetes');

  await card.click(); // flip
  await page.getByTestId('card-know').click();

  // a record must now sit in box 2
  const boxOf = await page.evaluate(() => {
    const s = JSON.parse(window.localStorage.getItem('uruk-academy-v1') ?? '{}');
    return s.srs?.['diabetes']?.box;
  });
  expect(boxOf).toBe(2);

  await page.reload();
  const boxAfter = await page.evaluate(() => {
    const s = JSON.parse(window.localStorage.getItem('uruk-academy-v1') ?? '{}');
    return s.srs?.['diabetes']?.box;
  });
  expect(boxAfter).toBe(2);
});

test('exam: timer runs, no feedback during run, submit produces a scored report', async ({ page }) => {
  await openSubject(page);
  await page.getByRole('button', { name: /محاكاة وزارية|الامتحان/ }).first().click();
  await expect(page.getByText('الامتحان الوزاري — الوحدة الأولى')).toBeVisible();
  await page.getByTestId('exam-start').click();

  const timer = page.getByTestId('exam-timer');
  await expect(timer).toBeVisible();
  const t0 = await timer.textContent();
  await page.waitForTimeout(2200);
  const t1 = await timer.textContent();
  expect(t0).not.toBe(t1); // clock is ticking

  for (let i = 0; i < 15; i++) {
    await page.getByTestId('exam-option-0').click();
    // no correction may appear while the exam is running
    await expect(page.getByText('الإجابة الصحيحة:')).toHaveCount(0);
    if (i < 14) await page.getByTestId('exam-next').click();
  }
  await page.getByTestId('exam-submit').click();
  await expect(page.getByText('تقرير الامتحان')).toBeVisible();
  await expect(page.getByText('تصحيح الأسئلة سؤالًا سؤالًا')).toBeVisible();
  await expect(page.getByText('من 60')).toBeVisible();
  await expect(page.getByText('إجابتك:').first()).toBeVisible();
});

test('offline: after first load, reload with network disabled still serves app and content', async ({ page, context }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'أكاديمية أوروك' })).toBeVisible();
  // wait until the service worker controls the page
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready;
  });
  await page.waitForTimeout(1500);

  await context.setOffline(true);
  await page.reload();
  await expect(page.getByRole('heading', { name: 'أكاديمية أوروك' })).toBeVisible();
  await page.getByRole('button', { name: /اللغة الإنجليزية/ }).first().click();
  await expect(page.getByText('الوحدة الأولى')).toBeVisible();
  await page.getByRole('button', { name: /أزمنة السرد/ }).click();
  await expect(page.getByText('أولًا: الماضي البسيط')).toBeVisible();
  await context.setOffline(false);
});
