import React from 'react';
import { BLOG_POSTS_META, BlogPostMetadata } from './blogPosts';

export const BLOG_POSTS_CONTENT: Record<string, React.ReactNode> = {
  'how-to-download-meta-ai-videos-without-watermark': (
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
  ),
  'meta-ai-video-generator-review': (
    <>
      <p>Meta AI has revolutionized the video generation space with incredible fidelity and motion consistency.</p>
      <h2>Features Overview</h2>
      <p>We take a deep dive into the 2026 features that make this generator stand out from competitors...</p>
    </>
  ),
  'top-5-ai-video-downloader-tools': (
    <>
      <p>With so many tools on the market, finding the right downloader is crucial for workflow efficiency.</p>
      <h2>Comparisons</h2>
      <p>We tested download speeds, quality retention, and most importantly: true watermark removal.</p>
    </>
  )
};

export interface BlogPostFull extends BlogPostMetadata {
  content: React.ReactNode;
}

export const getBlogPostBySlug = (slug: string): BlogPostFull | undefined => {
  const meta = BLOG_POSTS_META.find(post => post.slug === slug);
  if (!meta) return undefined;
  
  return {
    ...meta,
    content: BLOG_POSTS_CONTENT[slug]
  };
};

export const getAllBlogPosts = (): BlogPostFull[] => {
  return BLOG_POSTS_META.map(meta => ({
    ...meta,
    content: BLOG_POSTS_CONTENT[meta.slug]
  }));
};

