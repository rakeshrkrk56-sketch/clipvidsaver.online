import Hero from '../components/Hero';
import DownloaderSection from '../components/DownloaderSection';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import AdPlaceholder from '../components/AdPlaceholder';
import SEO from '../components/SEO';
import RelatedArticles from '../components/RelatedArticles';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface HomeProps {
  isHomePage?: boolean;
}

export default function Home({ isHomePage = true }: HomeProps) {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={isHomePage ? t('seo.homeTitle') : t('seo.metaTitle')}
        description={t('seo.description')}
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
          <p className="text-slate-600">
            {t('home.lookMetaAi')} <Link to="/meta-ai-video-downloader" className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors">{t('home.metaAiLink')}</Link>.
          </p>
        ) : (
          <p className="text-slate-600">
            {t('home.lookOther')} <Link to="/" className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors">{t('home.mainLink')}</Link>.
          </p>
        )}
      </div>

      <RelatedArticles />
    </>
  );
}
