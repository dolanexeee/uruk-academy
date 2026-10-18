import { chromium } from '@playwright/test';
import { readFileSync } from 'fs';
const svg = readFileSync('public/icon.svg', 'utf8');
const browser = await chromium.launch({ args: ['--no-sandbox'] });
async function shot(size, scale, out) {
  const page = await browser.newPage({ viewport: { width: size, height: size } });
  const inner = Math.round(size * scale);
  await page.setContent(`<body style="margin:0;background:#0A1C40;display:flex;align-items:center;justify-content:center;width:${size}px;height:${size}px">
    <div style="width:${inner}px;height:${inner}px">${svg.replace('<svg ', '<svg width="100%" height="100%" ')}</div></body>`);
  await page.waitForTimeout(150);
  await page.screenshot({ path: out });
  await page.close();
}
await shot(192, 1, 'public/icon-192.png');
await shot(512, 1, 'public/icon-512.png');
await shot(512, 0.78, 'public/icon-maskable-512.png');
await browser.close();
console.log('icons done');
