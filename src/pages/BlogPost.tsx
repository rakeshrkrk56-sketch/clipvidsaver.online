import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Simplified mock data
const POST_CONTENT: Record<string, { title: string; date: string; content: React.ReactNode }> = {
  'how-to-download-meta-ai-videos-without-watermark': {
    title: 'How to Download Meta AI Videos Without Watermark in 2026',
    date: 'May 28, 2026',
    content: (
      <>
        <p>Creating videos with Meta AI is incredible, but dealing with watermarks makes professional use challenging. In this guide, we'll show you exactly how to download your files cleanly.</p>
        <h2>Why You Need a No Watermark Downloader</h2>
        <p>A watermark-free video ensures your audience focuses on your content, not the tool you used to create it. ClipVidSaver provides a dedicated pipeline to natively extract the highest quality MP4 directly from Meta AI sources.</p>
        <h2>Steps to Download</h2>
        <ol>
          <li>Generate your video on Meta AI.</li>
          <li>Copy the public share link.</li>
          <li>Paste the link into ClipVidSaver.</li>
          <li>Click download to receive your HD video.</li>
        </ol>
      </>
    )
  },
  'meta-ai-video-generator-review': {
    title: 'Meta AI Video Generator: Complete Guide & Review',
    date: 'May 25, 2026',
    content: (
      <>
        <p>Meta AI has revolutionized the video generation space with incredible fidelity and motion consistency.</p>
        <h2>Features Overview</h2>
        <p>We take a deep dive into the 2026 features that make this generator stand out from competitors...</p>
      </>
    )
  },
  'top-5-ai-video-downloader-tools': {
    title: 'Top 5 Meta AI Video Downloader Tools Compared',
    date: 'May 20, 2026',
    content: (
      <>
        <p>With so many tools on the market, finding the right downloader is crucial for workflow efficiency.</p>
        <h2>Comparisons</h2>
        <p>We tested download speeds, quality retention, and most importantly: true watermark removal.</p>
      </>
    )
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? POST_CONTENT[slug] : null;

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Post not found</h1>
        <Link to="/blog" className="text-indigo-600 hover:underline">Return to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${post.title} | ClipVidSaver Blog`} 
        description={post.title}
        type="article"
        articleData={{
          title: post.title,
          description: post.title,
          date: new Date(post.date).toISOString()
        }}
      />
      <article className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-12 text-center">
          <time className="text-indigo-600 font-medium mb-4 block">{post.date}</time>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">{post.title}</h1>
        </div>
        
        <div className="prose prose-lg  prose-indigo mx-auto text-slate-700">
          {post.content}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Ready to download?</h3>
          <p className="text-slate-600 mb-6">Use our free tool to grab your Meta AI videos in HD.</p>
          <Link 
            to="/meta-ai-video-downloader" 
            className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-6 rounded-xl transition-colors shadow-lg shadow-indigo-600/20"
          >
            Go to Downloader
          </Link>
        </div>
      </article>
    </>
  );
}
