import SEO from '../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getAllBlogPosts } from '../data/blogData';

export default function Blog() {
  const { t } = useTranslation();
  const location = useLocation();
  const posts = getAllBlogPosts();

  // Helper to build localized links
  const getLink = (path: string) => {
    const lang = location.pathname.split('/')[1];
    const prefix = ['es', 'pt', 'de'].includes(lang) ? `/${lang}` : '';
    return `${prefix}${path}`;
  };

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
          {posts.map((post) => (
            <article key={post.slug} className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 transition-all hover:border-indigo-300">
              <time className="text-indigo-600 text-sm font-medium mb-3 block">{post.date}</time>
              <h2 className="text-2xl font-bold text-slate-900 mb-3 hover:text-indigo-600 transition-colors">
                <Link to={getLink(`/blog/${post.slug}`)}>{post.title}</Link>
              </h2>
              <p className="text-slate-600 text-lg mb-6">{post.excerpt}</p>
              <Link 
                to={getLink(`/blog/${post.slug}`)}
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
