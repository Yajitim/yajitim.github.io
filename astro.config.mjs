import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://yajitim.github.io',
  base: '/',
  output: 'static',
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
  },
});
