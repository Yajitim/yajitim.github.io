import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

function remarkReadingTime() {
  return function (tree, { data }) {
    let wordCount = 0;
    function visit(node) {
      if (node && (node.type === 'text' || node.type === 'inlineCode')) {
        const words = (node.value || '').trim().split(/\s+/).filter(Boolean);
        wordCount += words.length;
      }
      if (node && node.children) {
        node.children.forEach(visit);
      }
    }
    visit(tree);
    const minutes = Math.max(1, Math.ceil(wordCount / 200));
    data.astro = data.astro || {};
    data.astro.frontmatter = data.astro.frontmatter || {};
    data.astro.frontmatter.readingTime = minutes;
    data.astro.frontmatter.minutesRead = `${minutes} min read`;
  };
}

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
    sitemap({
      filter: (page) => !page.includes('/admin'),
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkMath, remarkReadingTime],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
  },
});
