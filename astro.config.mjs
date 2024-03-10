import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.kizzan.dev',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => page !== 'https://blog.kizzan.dev/404',
      serialize(item) {
        // Exclude 404 page
        if (item.url === 'https://blog.kizzan.dev/404') {
          return undefined;
        }
        // Check if item.url ends with /page/${number}/ or /en/page/${number}/
        // if so, extract the number
        const match = item.url.match(/\/(\d+)\/?$/);
        const matchEn = item.url.match(/\/en\/(\d+)\/?$/);

        let number;
        if (match) number = match[1];
        let numberEn;
        if (matchEn) numberEn = matchEn[1];

        if (
          item.url === 'https://blog.kizzan.dev/' ||
          item.url === 'https://blog.kizzan.dev/en/' ||
          item.url ===
            `https://blog.kizzan.dev/${
              match ? `${number + '/'}` : ''
            }` ||
          item.url === `https://blog.kizzan.dev/en/${matchEn ? `${numberEn + '/'}` : ''}`
        ) {
          return {
            url: item.url,
            changefreq: 'weekly',
            priority: 1,
            lastmod: new Date(),
          };
        }
        return item;
      },

      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-AR',
          en: 'en-US',
        },
      },
    }),
  ],
  image: {
    service: passthroughImageService(),
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      en: 'es',
    },
  },
});
