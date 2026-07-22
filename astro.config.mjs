import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yajitim.github.io',
  base: '/',
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
  },
});
