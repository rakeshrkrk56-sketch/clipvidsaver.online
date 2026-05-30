export interface PlatformConfig {
  id: string; // 'meta-ai' | 'kling-ai' | 'pixverse' | etc.
  name: string; // e.g., 'Meta AI'
  slug: string; // e.g., 'meta-ai-video-downloader'
  color: string; // Tailwind accent border/text e.g. 'indigo-600'
  gradient: string; // Tailwind gradient classes e.g. 'from-indigo-600 to-violet-600'
  badgeBg: string; // Tailwind bg for badge e.g. 'bg-indigo-50 border-indigo-200 text-indigo-700'
  isSupported: boolean; // false for upcoming ones
  description: string; // Quick subtitle/description
  longDescription?: string; // Long paragraph for platform landing pages
}

export const PLATFORMS: PlatformConfig[] = [
  {
    id: 'meta-ai',
    name: 'Meta AI',
    slug: 'meta-ai-video-downloader',
    color: 'indigo-600',
    gradient: 'from-indigo-600 to-violet-600',
    badgeBg: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    isSupported: true,
    description: 'Natively download and extract Facebook, Instagram, and WhatsApp Meta AI videos without watermarks.'
  },
  {
    id: 'kling-ai',
    name: 'Kling AI',
    slug: 'kling-ai-video-downloader',
    color: 'purple-600',
    gradient: 'from-purple-600 to-pink-600',
    badgeBg: 'bg-purple-50 border-purple-200 text-purple-700',
    isSupported: true,
    description: 'Save premium high-definition Kling AI text-to-video generations entirely clean of branding.'
  },
  {
    id: 'pixverse',
    name: 'PixVerse',
    slug: 'pixverse-video-downloader',
    color: 'slate-600',
    gradient: 'from-slate-600 to-sky-600',
    badgeBg: 'bg-slate-50 border-slate-200 text-slate-700',
    isSupported: false,
    description: 'Upcoming: Professional PixVerse cinematic AI video downloads in pristine HD.'
  },
  {
    id: 'hailuo-ai',
    name: 'Hailuo AI',
    slug: 'hailuo-ai-video-downloader',
    color: 'slate-600',
    gradient: 'from-slate-600 to-teal-600',
    badgeBg: 'bg-slate-50 border-slate-200 text-slate-700',
    isSupported: false,
    description: 'Upcoming: Ultra-fast Hailuo AI (Minimax T2V) watermark remover and saver.'
  },
  {
    id: 'runway',
    name: 'Runway Gen-3',
    slug: 'runway-video-downloader',
    color: 'slate-600',
    gradient: 'from-slate-600 to-amber-600',
    badgeBg: 'bg-slate-50 border-slate-200 text-slate-700',
    isSupported: false,
    description: 'Upcoming: Save original fidelity text-to-video drafts from Runway Gen-2 and Gen-3.'
  },
  {
    id: 'pika',
    name: 'Pika Labs',
    slug: 'pika-video-downloader',
    color: 'slate-600',
    gradient: 'from-slate-600 to-emerald-600',
    badgeBg: 'bg-slate-50 border-slate-200 text-slate-700',
    isSupported: false,
    description: 'Upcoming: Download watermark-free Pika 1.0 and 2.0 animations instantly.'
  }
];

export const getPlatformBySlug = (slug: string): PlatformConfig | undefined => {
  return PLATFORMS.find(p => p.slug === slug);
};

export const getSupportedPlatforms = (): PlatformConfig[] => {
  return PLATFORMS.filter(p => p.isSupported);
};
