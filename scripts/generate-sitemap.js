import fs from 'fs';
import path from 'path';
import { VALID_BLOG_SLUGS } from '../src/data/blogPosts.js';

const SITE_URL = 'https://clipvidsaver.online';
const LANGUAGES = ['en', 'es', 'pt', 'de'];

const BLOG_POSTS = VALID_BLOG_SLUGS;

const ROUTES = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: '/meta-ai-video-downloader', priority: '1.0', changefreq: 'daily' },
  { path: '/how-it-works', priority: '0.8', changefreq: 'weekly' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/founder', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.5', changefreq: 'monthly' },
  { path: '/copyright', priority: '0.3', changefreq: 'yearly' },
  { path: '/safety', priority: '0.3', changefreq: 'yearly' },
  { path: '/blog', priority: '0.9', changefreq: 'weekly' }
];

BLOG_POSTS.forEach(slug => {
  ROUTES.push({
    path: `/blog/${slug}`,
    priority: '0.8',
    changefreq: 'monthly'
  });
});

const today = new Date().toISOString().split('T')[0];

function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  for (const route of ROUTES) {
    // Generate an entry for each language
    for (const lang of LANGUAGES) {
      const isDefault = lang === 'en';
      const langPath = isDefault ? route.path : `/${lang}${route.path}`;
      const fullUrl = `${SITE_URL}${langPath === '' ? '/' : langPath}`;

      xml += `  <url>\n`;
      xml += `    <loc>${fullUrl}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
      xml += `    <priority>${route.priority}</priority>\n`;

      // hreflang attributes for all languages including itself
      for (const altLang of LANGUAGES) {
        const isAltDefault = altLang === 'en';
        const altLangPath = isAltDefault ? route.path : `/${altLang}${route.path}`;
        const altUrl = `${SITE_URL}${altLangPath === '' ? '/' : altLangPath}`;
        xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${altUrl}" />\n`;
      }
      
      // x-default is English
      const defaultUrl = `${SITE_URL}${route.path === '' ? '/' : route.path}`;
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}" />\n`;

      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>\n`;

  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
  console.log('Successfully generated sitemap.xml');

  // Also generate robots.txt
  const robots = `User-agent: GPTBot\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
  console.log('Successfully generated robots.txt');
}

generateSitemap();
