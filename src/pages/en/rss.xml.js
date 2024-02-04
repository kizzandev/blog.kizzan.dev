import rss, { pagesGlobToRssItems } from '@astrojs/rss';

import { basics } from '@cv/cv-en.json';

export async function GET(context) {
  return rss({
    title: 'Kizen Blog',
    description: basics.summary,
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./blog/article/*.{md,mdx}')
    ),
    customData: `<language>en</language>`,
  });
}
