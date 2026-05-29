import { useParams, Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { getBlogPostBySlug } from '../data/blogData';
import RelatedArticles from '../components/RelatedArticles';
import ShareBar from '../components/ShareBar';
import Breadcrumbs from '../components/Breadcrumbs';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  // Helper to build localized links
  const getLink = (path: string) => {
    const lang = location.pathname.split('/')[1];
    const prefix = ['es', 'pt', 'de'].includes(lang) ? `/${lang}` : '';
    return `${prefix}${path}`;
  };

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <SEO title="Page Not Found | ClipVidSaver" description="The requested blog post could not be found." noindex={true} />
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Post not found</h1>
        <p className="text-slate-600 mb-8">The blog article you are looking for does not exist.</p>
        <Link to={getLink("/blog")} className="text-indigo-600 hover:underline">Return to Blog</Link>
      </div>
    );
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://clipvidsaver.online/blog/${post.slug}`;

  const breadcrumbItems = [
    { name: 'Home', url: getLink('/') },
    { name: 'Blog', url: getLink('/blog') },
    { name: post.title, url: getLink(`/blog/${post.slug}`) }
  ];

  return (
    <>
      <SEO 
        title={`${post.title} | ClipVidSaver Blog`} 
        description={post.description}
        type="article"
        articleData={{
          title: post.title,
          description: post.description,
          date: new Date(post.date).toISOString()
        }}
      />
      
      <ShareBar url={currentUrl} title={post.title} />

      <article className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="mb-12 text-center md:text-left mt-8">
          <time className="text-indigo-600 font-medium mb-4 block">{post.date}</time>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">{post.title}</h1>
        </div>
        
        <div className="prose prose-lg prose-indigo mx-auto text-slate-700">
          {post.content}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Ready to download?</h3>
          <p className="text-slate-600 mb-6">Use our free tool to grab your Meta AI videos in HD.</p>
          <Link 
            to={getLink("/meta-ai-video-downloader")} 
            className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-medium py-3 px-6 rounded-xl transition-colors shadow-lg shadow-indigo-600/20 mb-12"
          >
            Go to Downloader
          </Link>
        </div>
      </article>

      <div className="bg-slate-50 pt-12 border-t border-slate-200">
        <RelatedArticles currentSlug={post.slug} />
      </div>
    </>
  );
}
