import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BLOG_POSTS = [
  {
    slug: 'how-to-download-meta-ai-videos-without-watermark',
    title: 'How to Download Meta AI Videos Without Watermark in 2026',
    excerpt: 'Learn the exact steps to save pristine HD MP4 files directly from Meta AI, free from any distracting branding or watermarks.',
    date: 'May 28, 2026',
  },
  {
    slug: 'meta-ai-video-generator-review',
    title: 'Meta AI Video Generator: Complete Guide & Review',
    excerpt: "Discover the capabilities of Meta AI's video generation tools and why creators are switching to it.",
    date: 'May 25, 2026',
  },
  {
    slug: 'top-5-ai-video-downloader-tools',
    title: 'Top 5 Meta AI Video Downloader Tools Compared',
    excerpt: 'We compare features, speed, and watermark removal capabilities of the industry top tools.',
    date: 'May 20, 2026',
  }
];

export default function Blog() {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('seo.blogTitle')} 
        description={t('seo.blogDesc')} 
      />
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Blog & Guides</h1>
        <p className="text-xl text-slate-600 mb-12">Insights, tutorials, and news about Meta AI video generation.</p>

        <div className="grid gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 transition-all hover:border-indigo-300">
              <time className="text-indigo-600 text-sm font-medium mb-3 block">{post.date}</time>
              <h2 className="text-2xl font-bold text-slate-900 mb-3 hover:text-indigo-600 transition-colors">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-slate-600 text-lg mb-6">{post.excerpt}</p>
              <Link 
                to={`/blog/${post.slug}`}
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-500"
              >
                Read Article &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
