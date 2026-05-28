import Hero from '../components/Hero';
import DownloaderSection from '../components/DownloaderSection';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import AdPlaceholder from '../components/AdPlaceholder';
import SEO from '../components/SEO';
import RelatedArticles from '../components/RelatedArticles';
import { Link } from 'react-router-dom';

interface HomeProps {
  isHomePage?: boolean;
}

export default function Home({ isHomePage = true }: HomeProps) {
  return (
    <>
      <SEO 
        title={isHomePage ? "Free AI Video Downloader" : "Meta AI Video Downloader"}
        canonicalPath={isHomePage ? "/" : "/meta-ai-video-downloader"}
      />
      <Hero />
      <DownloaderSection />
      
      {/* Middle Content Ad Container */}
      <AdPlaceholder id="ad-middle-content" className="w-full max-w-3xl mx-auto py-6 px-4 mb-4" />

      <Features />
      <FAQ />

      <div className="max-w-3xl mx-auto px-4 mb-16 text-center">
        {isHomePage ? (
          <p className="text-slate-400">
            Looking specifically for Meta AI? Check out our dedicated <Link to="/meta-ai-video-downloader" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">Meta AI Video Downloader</Link> page.
          </p>
        ) : (
          <p className="text-slate-400">
            Want to download videos from other AI tools? Head back to our <Link to="/" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">Main Homepage</Link>.
          </p>
        )}
      </div>

      <RelatedArticles />
    </>
  );
}
