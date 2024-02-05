import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // site: 'http://192.168.0.5:3000', // dev
  site: 'https://kizendev.github.io', // gh-pages
  // integrations: [react(), tailwind()],
  integrations: [tailwind()],
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
  sitemap: {
    hostname: 'https://kizendev.github.io',
  },
});
