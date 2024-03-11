/*import { test, expect } from '@playwright/test';

test('rss feed argentian version', async ({ page, browserName }) => {
  await page.goto('https://kizendev.github.io/rss.xml');

  const rss = await page.content();

  if (browserName !== 'webkit') {
    expect(rss).toContain('<rss');
    expect(rss).toContain('<channel>');
    expect(rss).toContain('<title>Kizen Blog</title>');
    expect(rss).toContain('<link>https://kizendev.github.io/</link>');
    expect(rss).toContain('<language>es</language>');
  }
});

test('rss feed english version', async ({ page, browserName }) => {
  await page.goto('https://kizendev.github.io/en/rss.xml');

  const rss = await page.content();

  if (browserName !== 'webkit') {
    expect(rss).toContain('<rss');
    expect(rss).toContain('<channel>');
    expect(rss).toContain('<title>Kizen Blog</title>');
    expect(rss).toContain('<link>https://kizendev.github.io/en/</link>');
    expect(rss).toContain('<language>en</language>');
  }
});
// */