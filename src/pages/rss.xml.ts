import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const blog = await getCollection('blog', ({ data }) => !data.draft);
  const sortedBlog = blog.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Yaji Timothy Terungwa · Blog & Insights',
    description: 'Articles on statistical modeling, spatial analytics (GIS), data science, and educational assessment.',
    site: context.site ?? 'https://yajitim.github.io',
    items: sortedBlog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      categories: [post.data.category, ...(post.data.tags || [])],
    })),
    customData: `<language>en-us</language>`,
  });
};
