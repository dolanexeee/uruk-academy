import { test, expect } from '@playwright/test';

/* Final audit (2026-10-18): the two platform-integrity guarantees that the
   six-book completion must not break —
   1. the home page tells the truth: all six books complete, nothing «قريبًا»;
   2. a returning student's saved state (older, partial shape under the same
      versioned key) loads intact: no key renamed, no progress dropped. */

test('final audit: home footer states six complete books; no قريبًا anywhere', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'أكاديمية أوروك' })).toBeVisible();
  await expect(page.getByText(/كتب السادس الإعدادي الستة مكتملة هنا/)).toBeVisible();
  await expect(page.getByText('قريبًا')).toHaveCount(0);
  await expect(page.getByText(/تُبنى تباعًا/)).toHaveCount(0);
  // every one of the six subjects is a live, navigable card
  for (const name of [/اللغة الإنجليزية/, /الرياضيات/, /الفيزياء/, /الكيمياء/, /الأحياء/, /اللغة العربية/]) {
    await expect(page.getByRole('button', { name }).first()).toBeVisible();
  }
  // platform lesson total across the six books, computed from content: 196
  await expect(page.getByText(/من 196 درسًا/)).toBeVisible();
});

test('final audit: legacy partial state survives — progress intact after load and reload', async ({ page }) => {
  // A Phase-1/Stage-C-era saved state: same key, several fields missing
  // (no quizLast / examBest / examLast), progress in two different books.
  await page.addInitScript(() => {
    const legacy = {
      name: 'طالب عائد',
      lessonsDone: { 'u1-l1': '2026-10-10', 'pc1-l1': '2026-10-17' },
      quizBest: { 'en6-u1': { score: 10, total: 14, at: '2026-10-10' } },
      srs: { diabetes: { box: 3, due: '2026-01-01' } },
      days: { '2026-10-10': true, '2026-10-17': true },
    };
    if (!window.localStorage.getItem('uruk-academy-v1')) {
      window.localStorage.setItem('uruk-academy-v1', JSON.stringify(legacy));
    }
  });

  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'أكاديمية أوروك' })).toBeVisible();
  // both seeded lessons count toward the platform total
  await expect(page.getByText(/أنجزت 2 من 196 درسًا/)).toBeVisible();
  await expect(page.getByText(/أفضل اختبار: 10\/14/)).toBeVisible();

  // the English subject still shows Unit One at 1/4 from the legacy key
  await page.getByRole('button', { name: /اللغة الإنجليزية/ }).first().click();
  await expect(page.getByText('1/4 دروس منجزة')).toBeVisible();

  // after a full reload the app has re-saved a merged state WITHOUT
  // dropping the legacy records
  await page.reload();
  const raw = await page.evaluate(() => window.localStorage.getItem('uruk-academy-v1'));
  expect(raw).toContain('u1-l1');
  expect(raw).toContain('pc1-l1');
  expect(raw).toContain('diabetes');
  const parsed = JSON.parse(raw ?? '{}');
  expect(parsed.quizBest['en6-u1'].score).toBe(10);
  expect(parsed.srs['diabetes'].box).toBe(3);
  expect(parsed.name).toBe('طالب عائد');
});
