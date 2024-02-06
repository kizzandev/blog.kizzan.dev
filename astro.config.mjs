import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // site: 'http://192.168.0.5:3000', // dev
  site: 'https://kizendev.github.io', // gh-pages
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => page !== 'https://kizendev.github.io/404',
      // changefreq: 'weekly',
      // priority: 0.7,
      // lastmod: new Date('2024-02-06'),

      serialize(item) {
        // Exclude 404 page
        if (item.url === 'https://kizendev.github.io/404') {
          return undefined;
        }
        if (
          item.url === 'https://kizendev.github.io/' ||
          item.url === 'https://kizendev.github.io/en/' ||
          item.url === `https://kizendev.github.io/page/${/\d+/}/` ||
          item.url === `https://kizendev.github.io/en/page/${/\d+/}/`
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
