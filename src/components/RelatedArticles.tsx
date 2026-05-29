import { Link, useLocation } from 'react-router-dom';
import { getAllBlogPosts } from '../data/blogData';

export default function RelatedArticles({ currentSlug }: { currentSlug?: string }) {
  const location = useLocation();

  const allPosts = getAllBlogPosts();
  // Simply filter out the current post, we could add category matching logic later!
  const relatedPosts = allPosts.filter(p => !currentSlug || p.slug !== currentSlug).slice(0, 3);

  if (relatedPosts.length === 0) return null;

  // Helper to build localized links
  const getLink = (path: string) => {
    const lang = location.pathname.split('/')[1];
    const prefix = ['es', 'pt', 'de'].includes(lang) ? `/${lang}` : '';
    return `${prefix}${path}`;
  };

  return (
    <section className="max-w-3xl mx-auto px-4 mb-24" aria-labelledby="related-articles-heading">
      <h2 id="related-articles-heading" className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">
        Related Meta AI Resources
      </h2>
      <ul className="space-y-4">
        {relatedPosts.map((article) => (
          <li key={article.slug}>
            <Link 
              to={getLink(`/blog/${article.slug}`)}
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-indigo-300 shadow-sm transition-colors"
            >
              <h3 className="font-medium text-slate-800 group-hover:text-indigo-600 transition-colors mb-2 sm:mb-0">
                {article.title}
              </h3>
              <span className="text-indigo-600 text-sm font-medium shrink-0">Read More &rarr;</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
