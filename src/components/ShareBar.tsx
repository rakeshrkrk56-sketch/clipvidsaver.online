import { Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

interface ShareBarProps {
  url: string;
  title: string;
}

export default function ShareBar({ url, title }: ShareBarProps) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:bottom-auto md:left-4 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 xl:left-8">
      <div className="flex flex-row md:flex-col items-center bg-white border border-slate-200 shadow-xl rounded-full md:rounded-2xl p-2 gap-2 bg-white/90 backdrop-blur">
        
        <a 
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 text-slate-500 hover:text-sky-500 hover:bg-sky-50 rounded-full transition-colors group relative"
          aria-label="Share on Twitter"
        >
          <Twitter size={20} className="fill-current" />
          <span className="sr-only">Twitter</span>
        </a>

        <a 
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors group relative"
          aria-label="Share on Facebook"
        >
          <Facebook size={20} className="fill-current" />
          <span className="sr-only">Facebook</span>
        </a>

        <a 
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors group relative"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={20} className="fill-current" />
          <span className="sr-only">LinkedIn</span>
        </a>

        <a 
          href={shareLinks.reddit}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 text-slate-500 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-colors group relative"
          aria-label="Share on Reddit"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="none" fill="none" />
            <path d="M22 11.5C22 13.9853 19.9853 16 17.5 16C16.3267 16 15.2582 15.5501 14.4449 14.808C13.689 15.228 12.8715 15.5 12 15.5C11.1285 15.5 10.311 15.228 9.55506 14.808C8.74177 15.5501 7.67332 16 6.5 16C4.01472 16 2 13.9853 2 11.5C2 9.01472 4.01472 7 6.5 7C7.67332 7 8.74177 7.44991 9.55506 8.19202C10.311 7.772 11.1285 7.5 12 7.5C12.8715 7.5 13.689 7.772 14.4449 8.19202C15.2582 7.44991 16.3267 7 17.5 7C19.9853 7 22 9.01472 22 11.5Z" fill="currentColor" stroke="none" />
            <circle cx="8" cy="11" r="1.5" fill="white" stroke="none" />
            <circle cx="16" cy="11" r="1.5" fill="white" stroke="none" />
          </svg>
          <span className="sr-only">Reddit</span>
        </a>

        <a 
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 text-slate-500 hover:text-green-500 hover:bg-green-50 rounded-full transition-colors group relative"
          aria-label="Share on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current">
            <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.525.146-.18.194-.3.297-.495.098-.21.046-.39-.034-.54-.075-.15-.673-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.246-.705.246-1.29.17-1.425-.07-.136-.269-.211-.569-.36Zm-5.432 7.463H12.06c-1.49-.001-2.954-.4-4.238-1.155l-.304-.179-3.147.825.84-3.069-.196-.312a8.031 8.031 0 0 1-1.226-4.275c0-4.444 3.616-8.06 8.063-8.06 2.155 0 4.181.84 5.702 2.366A8.026 8.026 0 0 1 19.92 12c.002 4.444-3.614 8.06-8.058 8.06l.199.1A9.99 9.99 0 0 0 22 12c0-5.514-4.486-10-10-10S2 6.486 2 12c0 1.767.458 3.491 1.328 5.01L2 22l5.127-1.344A9.957 9.957 0 0 0 12 22h.004c5.514 0 10-4.486 10-10h-.01c-.002-1.065-.219-2.12-.64-3.111a9.965 9.965 0 0 0-1.841-3.08Z" stroke="none" fill="currentColor"/>
          </svg>
          <span className="sr-only">WhatsApp</span>
        </a>

        <div className="w-px h-6 bg-slate-200 hidden md:block my-1"></div>
        <div className="h-px w-6 bg-slate-200 block md:hidden mx-1"></div>

        <button 
          onClick={handleCopyLink}
          className="p-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors group relative"
          aria-label="Copy Link"
        >
          <LinkIcon size={20} />
          {copied && (
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:left-full md:-translate-x-0 md:ml-3 bg-slate-800 text-white text-xs px-2 py-1 rounded shadow-sm opacity-100 transition-opacity whitespace-nowrap">
              Copied!
            </span>
          )}
        </button>

      </div>
    </div>
  );
}
