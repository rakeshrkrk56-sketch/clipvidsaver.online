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
    const baseTitle = 'ClipVidSaver.online';
    const finalTitle = title ? `${title} | ${baseTitle}` : `AI Video Downloader - Download HD MP4 Without Watermark | ${baseTitle}`;
    document.title = finalTitle;
    
    // Update og:title and twitter:title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', finalTitle);
    
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', finalTitle);

    // 2. Update Description
    const finalDesc = description || "Download AI videos easily with our free AI video downloader. Save AI-generated files locally in HD MP4 with audio and no watermark. Fast, secure, and reliable.";
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

  }, [title, description, canonicalPath, location.pathname]);

  return null;
}
