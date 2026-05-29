import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
  articleData?: any;
  structuredData?: any;
}

export default function SEO({ title, description, canonicalPath, type = 'website', articleData, structuredData }: SEOProps) {
  const location = useLocation();
  const { t, i18n } = useTranslation();

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

    // Type
    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) ogType.setAttribute('content', type);

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

    // 5. Inject JSON-LD Schema
    const baseSchemas = [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": `${siteUrl}/`,
        "name": "ClipVidSaver",
        "description": t('seo.description') || finalDesc,
        "inLanguage": i18n.language || "en"
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "ClipVidSaver",
        "url": `${siteUrl}/`,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/og-image.jpg`
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support",
          "email": "claire9360@gmail.com"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#webapp`,
        "name": "Meta AI Video Downloader",
        "url": fullCanonicalUrl,
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0"
        }
      }
    ];

    // Breadcrumb schema
    const pathParts = cleanlyPath.split('/').filter(Boolean);
    const isLangPrefixOnly = languages.includes(pathParts[0]) && pathParts.length === 1;
    let breadcrumbSchema = null;
    
    if (pathParts.length > 0 && !isLangPrefixOnly) {
      let currentPath = '';
      const listElements = [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      }];

      let position = 2;
      for (const part of pathParts) {
        if (languages.includes(part)) continue;
        currentPath += `/${part}`;
        listElements.push({
          "@type": "ListItem",
          "position": position,
          "name": part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' '),
          "item": `${siteUrl}${currentPath}`
        });
        position++;
      }

      breadcrumbSchema = {
        "@type": "BreadcrumbList",
        "itemListElement": listElements
      };
    }

    let finalSchemaData = [...baseSchemas];
    if (breadcrumbSchema) {
      finalSchemaData.push(breadcrumbSchema);
    }
    
    if (type === 'article' && articleData) {
      finalSchemaData.push({
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": fullCanonicalUrl
        },
        "headline": articleData.title,
        "description": articleData.description || finalDesc,
        "image": articleData.image || `${siteUrl}/og-image.jpg`,
        "author": {
          "@type": "Organization",
          "name": "ClipVidSaver"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ClipVidSaver",
          "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/og-image.jpg`
          }
        },
        "datePublished": articleData.date || new Date().toISOString(),
        "dateModified": articleData.date || new Date().toISOString()
      });
    }

    if (structuredData) {
      if (Array.isArray(structuredData)) {
        finalSchemaData.push(...structuredData);
      } else {
        finalSchemaData.push(structuredData);
      }
    }

    const schemaJson = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": finalSchemaData
    });

    let scriptTag = document.getElementById('seo-jsonld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'seo-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = schemaJson;

  }, [title, description, canonicalPath, location.pathname, type, articleData, structuredData, t, i18n.language]);

  return null;
}
