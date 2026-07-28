import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://yajitim.github.io';
  const today = new Date().toISOString().split('T')[0];

  const blogPosts = await getCollection('blog', ({ data }) => !data.draft);
  const projects = await getCollection('projects', ({ data }) => !data.draft);

  const staticPages = ['', 'about', 'work', 'blog'];

  const staticUrls = staticPages.map((page) => ({
    url: page,
    lastmod: today,
    priority: page === '' ? '1.0' : '0.9',
    changefreq: 'daily',
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `blog/${post.slug}`,
    lastmod: post.data.pubDate ? new Date(post.data.pubDate).toISOString().split('T')[0] : today,
    priority: '0.8',
    changefreq: 'weekly',
  }));

  const projectUrls = projects.map((project) => ({
    url: `work/${project.slug}`,
    lastmod: today,
    priority: '0.8',
    changefreq: 'monthly',
  }));

  const allUrls = [...staticUrls, ...blogUrls, ...projectUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (item) => `  <url>
    <loc>${baseUrl}/${item.url}${item.url ? '/' : ''}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
