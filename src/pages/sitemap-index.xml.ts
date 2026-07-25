import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const pages = [
    '',
    'about',
    'work',
    'blog',
    'work/world-bank-sftas',
    'work/bengis-mass-data-capture',
    'work/trafficcovert-analytics',
    'work/academic-assessment-system',
    'blog/the-mathematics-of-p-values-think-like-a-statistician-series--linkedin-campaign',
    'blog/two-phase-sampling-multiple-imputation',
    'blog/spatial-data-qgis-qfield-guide',
    'blog/building-interactive-power-bi-dashboards'
  ];

  const baseUrl = 'https://yajitim.github.io';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}/${page}${page ? '/' : ''}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
