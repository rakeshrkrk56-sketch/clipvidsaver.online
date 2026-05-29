export interface BlogPostMetadata {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  updatedDate?: string;
  category: string;
  keywords: string[];
  image?: string;
}

export const BLOG_POSTS_META: BlogPostMetadata[] = [
  {
    slug: 'how-to-download-meta-ai-videos-without-watermark',
    title: 'How to Download Meta AI Videos Without Watermark in 2026',
    description: 'Learn the exact steps to save pristine HD MP4 files directly from Meta AI, free from any distracting branding or watermarks.',
    excerpt: 'Learn the exact steps to save pristine HD MP4 files directly from Meta AI, free from any distracting branding or watermarks.',
    date: 'May 28, 2026',
    updatedDate: 'May 29, 2026',
    category: 'Tutorials',
    keywords: ['Meta AI', 'video download', 'no watermark', 'HD video'],
  },
  {
    slug: 'meta-ai-video-generator-review',
    title: 'Meta AI Video Generator: Complete Guide & Review',
    description: "Discover the capabilities of Meta AI's video generation tools and why creators are switching to it.",
    excerpt: "Discover the capabilities of Meta AI's video generation tools and why creators are switching to it.",
    date: 'May 25, 2026',
    category: 'Reviews',
    keywords: ['Meta AI review', 'video generator', 'AI video', 'creators'],
  },
  {
    slug: 'top-5-ai-video-downloader-tools',
    title: 'Top 5 Meta AI Video Downloader Tools Compared',
    description: 'We compare features, speed, and watermark removal capabilities of the industry top tools.',
    excerpt: 'We compare features, speed, and watermark removal capabilities of the industry top tools.',
    date: 'May 20, 2026',
    category: 'Comparisons',
    keywords: ['top tools', 'AI video downloader', 'watermark removal', 'comparison'],
  }
];

export const VALID_BLOG_SLUGS = BLOG_POSTS_META.map(post => post.slug);

export const getBlogPostMetaBySlug = (slug: string): BlogPostMetadata | undefined => {
  return BLOG_POSTS_META.find(post => post.slug === slug);
};
