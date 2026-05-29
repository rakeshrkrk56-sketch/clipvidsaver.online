import { Link } from 'react-router-dom';

const ARTICLES = [
  {
    slug: 'how-to-download-meta-ai-videos-without-watermark',
    title: 'How to Download Meta AI Videos Without Watermark in 2026'
  },
  {
    slug: 'meta-ai-video-generator-review',
    title: 'Meta AI Video Generator: Complete Guide & Review'
  },
  {
    slug: 'top-5-ai-video-downloader-tools',
    title: 'Top 5 Meta AI Video Downloader Tools Compared'
  }
];

export default function RelatedArticles() {
  return (
    <section className="max-w-3xl mx-auto px-4 mb-24" aria-labelledby="related-articles-heading">
      <h2 id="related-articles-heading" className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">
        Related Meta AI Resources
      </h2>
      <ul className="space-y-4">
        {ARTICLES.map((article) => (
          <li key={article.slug}>
            <Link 
              to={`/blog/${article.slug}`}
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
