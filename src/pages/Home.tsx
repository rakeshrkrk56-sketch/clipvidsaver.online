import Hero from '../components/Hero';
import DownloaderSection from '../components/DownloaderSection';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import AdPlaceholder from '../components/AdPlaceholder';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <DownloaderSection />
      
      {/* Middle Content Ad Container */}
      <AdPlaceholder id="ad-middle-content" className="w-full max-w-3xl mx-auto py-6 px-4 mb-4" />

      <Features />
      <FAQ />
    </>
  );
}
