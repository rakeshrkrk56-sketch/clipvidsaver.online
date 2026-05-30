import Hero from '../components/Hero';
import DownloaderSection from '../components/DownloaderSection';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import AdPlaceholder from '../components/AdPlaceholder';
import SEO from '../components/SEO';
import RelatedArticles from '../components/RelatedArticles';
import SupportedPlatforms from '../components/SupportedPlatforms';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PLATFORMS } from '../data/platforms';

interface HomeProps {
  isHomePage?: boolean;
  platformId?: string;
}

export default function Home({ isHomePage = true, platformId }: HomeProps) {
  const { t } = useTranslation();

  const platform = PLATFORMS.find(p => p.id === platformId);

  // SEO configuration based on platform or homepage context
  const seoTitle = platform 
    ? t('platform.seoTitle', { name: platform.name })
    : t('seo.homeTitle');

  const seoDescription = platform
    ? t('platform.seoDesc', { name: platform.name })
    : t('seo.description');

  const canonicalPath = isHomePage 
    ? "/" 
    : platform 
      ? `/${platform.slug}` 
      : "/meta-ai-video-downloader";

  return (
    <>
      <SEO 
        title={seoTitle}
        description={seoDescription}
        canonicalPath={canonicalPath}
      />
      <Hero platform={platform} />
      <DownloaderSection platform={platform} />
      
      {/* Supported Platforms card grid is prominently displayed on the main homepage */}
      {isHomePage && <SupportedPlatforms />}
      
      {/* Middle Content Ad Container */}
      <AdPlaceholder id="ad-middle-content" className="w-full max-w-3xl mx-auto py-6 px-4 mb-4" />

      <Features platform={platform} />
      <FAQ platform={platform} />

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
