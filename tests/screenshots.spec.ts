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

  await page.getByRole('button', { name: /اللغة الإنجليزية/ }).first().click();
  await expect(page.getByText('الوحدة الأولى')).toBeVisible();
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${DIR}/02-subject-mobile.png`, fullPage: true });

  await page.getByRole('button', { name: /القراءة — سأظلّ/ }).click();
  await expect(page.getByText('القصة بملخّصنا')).toBeVisible();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${DIR}/03-lesson-mobile.png`, fullPage: true });
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
  await desk.getByRole('button', { name: /اللغة الإنجليزية/ }).first().click();
  await expect(desk.getByText('الوحدة الأولى')).toBeVisible();
  await desk.getByRole('button', { name: /القواعد — أزمنة/ }).click();
  await expect(desk.getByText('أولًا: الماضي البسيط')).toBeVisible();
  await desk.waitForTimeout(300);
  await desk.screenshot({ path: `${DIR}/08-lesson-desktop.png`, fullPage: true });
  await desk.close();
});
