import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
}

export default function SEO({ title, description, canonicalPath }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Title
    const baseTitle = 'ClipVidSaver';
    const finalTitle = title ? `${title} | ${baseTitle}` : `Meta AI Video Downloader - No Watermark | ${baseTitle}`;
    document.title = finalTitle;
    
    // Update og:title and twitter:title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', finalTitle);
    
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', finalTitle);

    // 2. Update Description
    const finalDesc = description || "Download Meta AI generated videos without watermark in HD. Free, fast & working 2026 tool by ClipVidSaver.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', finalDesc);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', finalDesc);

    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', finalDesc);

    // 3. Update Canonical URL
    const finalCanonicalPath = canonicalPath !== undefined ? canonicalPath : location.pathname;
    const siteUrl = 'https://clipvidsaver.online';
    
    // Remove trailing slash if it's not the home page
    let cleanlyPath = finalCanonicalPath;
    if (cleanlyPath !== '/' && cleanlyPath.endsWith('/')) {
        cleanlyPath = cleanlyPath.slice(0, -1);
    }
    const fullCanonicalUrl = `${siteUrl}${cleanlyPath}`;
    
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', fullCanonicalUrl);
    
    // Update og:url and twitter:url
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', fullCanonicalUrl);
    
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute('content', fullCanonicalUrl);

    // 4. Update hreflang alternate links
    const languages = ['en', 'es', 'pt', 'de'];
    
    // Clean current path from lang prefix for building alternates
    let pathWithoutLang = finalCanonicalPath;
    for (const lang of languages) {
      if (pathWithoutLang.startsWith(`/${lang}/`) || pathWithoutLang === `/${lang}`) {
        pathWithoutLang = pathWithoutLang.substring(lang.length + 1) || '/';
        break;
      }
    }
    
    // Add default
    let defaultHreflang = document.querySelector('link[hreflang="x-default"]');
    if (!defaultHreflang) {
      defaultHreflang = document.createElement('link');
      defaultHreflang.setAttribute('rel', 'alternate');
      defaultHreflang.setAttribute('hreflang', 'x-default');
      document.head.appendChild(defaultHreflang);
    }
    defaultHreflang.setAttribute('href', `${siteUrl}${pathWithoutLang === '/' ? '' : pathWithoutLang}`);

    languages.forEach((lang) => {
      let hreflangTag = document.querySelector(`link[hreflang="${lang}"]`);
      if (!hreflangTag) {
        hreflangTag = document.createElement('link');
        hreflangTag.setAttribute('rel', 'alternate');
        hreflangTag.setAttribute('hreflang', lang);
        document.head.appendChild(hreflangTag);
      }
      
      const langPath = lang === 'en' ? pathWithoutLang : `/${lang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
      hreflangTag.setAttribute('href', `${siteUrl}${langPath === '' ? '/' : langPath}`);
    });

  }, [title, description, canonicalPath, location.pathname]);

  return null;
}
