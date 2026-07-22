import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://timoyaj.github.io',
  base: '/',
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
  },
});
