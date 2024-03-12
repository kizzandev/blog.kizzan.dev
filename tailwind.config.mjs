// const defaultTheme = require('tailwindcss/defaultTheme');

// './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
// content: [
//   './src/components/{atom,common,design}/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
//   './src/components/design/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',

//   './src/layouts/{Layout,LayoutAside,LayoutDesignSystem,LayoutMDArticle}.astro',

//   './src/pages/{api,page}/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
//   './src/pages/{blog,diseno}/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
// ],

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    '!./src/components/icons/*.astro',
  ],
  safelist: ['max-w-[700px]', 'max-w-[732px]'],
  theme: {
    extend: {
      colors: {
        primary: '#66ccff',
        secondary: '#deb1f0',
        accent: '#f39c12',
      },
      textDecorationColor: {
        accent: '#f39c12',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
};
