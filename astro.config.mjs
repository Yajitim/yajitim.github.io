import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://timoyaj.github.io',
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
  },
});
