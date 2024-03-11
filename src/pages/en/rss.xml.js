import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Aurum',
    description: 'Software developer with remote experience in frontend using React, JavaScript, TypeScript, and Tailwind css. I developed my own blog through Astro, which is available in Spanish (ar) and English (en) along with their respective rss feeds, and is deployed with Cloudflare.',
    site: context.site + '/en/',
    items: await pagesGlobToRssItems(
      import.meta.glob('./article/*.{md,mdx}')
    ),
    customData: `<language>en</language>`,
  });
}
