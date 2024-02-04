import { test, expect } from '@playwright/test';

test('rss feed argentian version', async ({ page, browserName }) => {
  await page.goto('http://192.168.0.5:3000/rss.xml');

  const rss = await page.content();

  if (browserName !== 'webkit') {
    expect(rss).toContain('<rss');
    expect(rss).toContain('<channel>');
    expect(rss).toContain('<title>Kizen Blog</title>');
    expect(rss).toContain('<link>http://192.168.0.5:3000/</link>');
    expect(rss).toContain('<language>es</language>');
  }
});

test('rss feed english version', async ({ page, browserName }) => {
  await page.goto('http://192.168.0.5:3000/en/rss.xml');

  const rss = await page.content();

  if (browserName !== 'webkit') {
    expect(rss).toContain('<rss');
    expect(rss).toContain('<channel>');
    expect(rss).toContain('<title>Kizen Blog</title>');
    expect(rss).toContain('<link>http://192.168.0.5:3000/</link>');
    expect(rss).toContain('<language>en</language>');
  }
});
