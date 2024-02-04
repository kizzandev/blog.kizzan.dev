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
    '!./src/pages/cv.astro',
    '!./src/layouts/LayoutCV.astro',
    '!./src/components/cv/*.astro',
    '!./src/components/icons/*.astro',
  ],
  plugins: [],
};
