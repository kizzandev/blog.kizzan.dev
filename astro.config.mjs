import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kizendev.github.io',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => page !== 'https://kizendev.github.io/404',
      serialize(item) {
        // Exclude 404 page
        if (item.url === 'https://kizendev.github.io/404') {
          return undefined;
        }
        // Check if item.url ends with /page/${number}/ or /en/page/${number}/
        // if so, extract the number
        const match = item.url.match(/\/page\/(\d+)\/?$/);
        const matchEn = item.url.match(/\/en\/page\/(\d+)\/?$/);

        let number;
        if (match) number = match[1];
        let numberEn;
        if (matchEn) numberEn = matchEn[1];

        if (
          item.url === 'https://kizendev.github.io/' ||
          item.url === 'https://kizendev.github.io/en/' ||
          item.url ===
            `https://kizendev.github.io/page/${
              match ? `${number + '/'}` : ''
            }` ||
          item.url === `https://kizendev.github.io/en/page/${matchEn ? `${numberEn + '/'}` : ''}`
        ) {
          return {
            url: item.url,
            changefreq: 'weekly',
            priority: 1,
            lastmod: new Date(),
          };
        }
        if (
          item.url === 'https://kizendev.github.io/cv/' ||
          item.url === 'https://kizendev.github.io/en/cv/'
        ) {
          return {
            url: item.url,
            changefreq: 'monthly',
            priority: 0.8,
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
