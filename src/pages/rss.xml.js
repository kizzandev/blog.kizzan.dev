import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Aurum',
    description:
      'Desarrollador de software con experiencia remota en frontend utilizando React, JavaScript, TypeScript, y Tailwind css. Desarrollé mi propio blog a través de Astro, el cual está disponible en español (ar) e inglés (en) junto a sus respectivos rss feeds, y se encuentra desplegado con Cloudflare.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./article/*.{md,mdx}')),
    customData: `<language>es</language>`,
  });
}
