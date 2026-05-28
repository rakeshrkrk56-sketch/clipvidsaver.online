import { useState, useEffect } from 'react';
import { RefreshCw, PlayCircle, Lock, Download, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { VideoResult } from '../types';

type Status = 'IDLE' | 'PROCESSING' | 'READY' | 'DOWNLOADABLE' | 'ERROR';

export default function DownloaderSection() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<Status>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');
  const [countdown, setCountdown] = useState(10);
  const [videoData, setVideoData] = useState<VideoResult | null>(null);

  const handleDownloadClick = async () => {
    if (!url.trim()) return;

    try {
      const parsedUrl = new URL(url.trim());
      if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
        throw new Error();
      }
    } catch {
      setErrorMessage('Please enter a valid HTTP or HTTPS URL (e.g., https://example.com/video).');
      setStatus('ERROR');
      return;
    }

    setStatus('PROCESSING');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      
      let resData;
      try {
        resData = await response.json();
      } catch (e) {
        throw new Error('Invalid response from server. Please try again later.');
      }

      if (!response.ok) {
        const errorMsg = resData?.error || resData?.message;
        if (response.status === 400) {
          throw new Error(errorMsg || 'Invalid AI video URL provided.');
        } else if (response.status === 404) {
          throw new Error(errorMsg || 'Video not found. The link might be expired or invalid.');
        } else if (response.status === 429) {
          throw new Error(errorMsg || 'Too many requests. Please try again in a few minutes.');
        } else {
          throw new Error(errorMsg || `Server error (${response.status}). Please try again.`);
        }
      }
      
      if (resData?.success) {
        setVideoData(resData.data);
        // Simulate processing time
        setTimeout(() => {
          setStatus('READY');
          setCountdown(10);
        }, 1500); // reduced delay as we actually requested stuff
      } else {
        throw new Error(resData?.error || resData?.message || 'Failed to analyze the video link. Please check the URL and try again.');
      }
    } catch (e: any) {
      console.error(e);
      setErrorMessage(e.message || 'A network error occurred. Please check your connection and try again.');
      setStatus('ERROR');
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (status === 'READY') {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setStatus('DOWNLOADABLE');
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [status]);

  const handleFileDownload = () => {
    if (videoData?.url) {
      // Create a temporary link to trigger the download
      const a = document.createElement('a');
      a.href = videoData.url;
      a.download = 'meta-ai-video.mp4';
      a.target = '_blank'; // In case it cannot download forcefully
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 mb-20 relative z-10 min-h-[350px] md:min-h-[400px]" aria-label="AI Video Downloader">
      <AnimatePresence mode="wait">
        
        {status === 'IDLE' && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-3xl shadow-2xl shadow-indigo-500/5 backdrop-blur-xl"
          >
            <div className="space-y-4 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl blur-xl opacity-50 pointer-events-none" />
              <input
                type="url"
                aria-label="Paste Meta AI Video URL"
                placeholder="Paste Meta AI video URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-5 py-4 bg-slate-950/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-slate-950 transition-all text-slate-100 placeholder:text-slate-500 relative z-10"
              />
              <button
                onClick={handleDownloadClick}
                disabled={!url.trim()}
                aria-label="Download Meta AI Video"
                className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 text-white font-medium py-4 rounded-xl transition-colors shadow-lg shadow-indigo-600/20 relative z-10"
              >
                Download Meta AI Video
              </button>
            </div>
          </motion.div>
        )}

        {status === 'PROCESSING' && (
          <motion.div
            key="processing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-slate-900 p-8 md:p-12 rounded-3xl shadow-2xl shadow-indigo-500/5 border border-slate-800 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
              <motion.div 
                className="h-full bg-indigo-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "linear" }}
              />
            </div>
            
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 relative">
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-indigo-500/20 border-t-indigo-500" 
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-2 rounded-full border-2 border-purple-500/20 border-b-purple-500" 
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-xl animate-pulse" />
              <RefreshCw size={32} className="text-indigo-400 w-8 h-8 relative z-10" />
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-2">Analyzing Link</h2>
            <p className="text-slate-400 mb-8 font-medium tracking-wide">Secure connection established...</p>
            
            <div className="h-1.5 w-full max-w-sm mx-auto bg-slate-800 rounded-full overflow-hidden mb-8">
              <motion.div 
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "linear" }}
              />
            </div>
            
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-left max-w-sm mx-auto flex gap-4 backdrop-blur-sm">
              <AlertTriangle size={24} className="text-amber-400 w-6 h-6 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-300 text-sm mb-1">Queue Active</p>
                <p className="text-amber-200/70 text-sm">Validating media source. Process will complete momentarily.</p>
              </div>
            </div>
          </motion.div>
        )}

        {status === 'ERROR' && (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-slate-900 p-8 md:p-12 rounded-3xl shadow-2xl shadow-red-500/5 border border-slate-800 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500/20">
              <div className="h-full bg-red-500 w-full" />
            </div>
            
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-500/10 mb-8 border border-red-500/20">
              <AlertTriangle size={40} className="text-red-400 w-10 h-10" />
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4">Processing Failed</h2>
            <p className="text-slate-400 mb-8 font-medium max-w-md mx-auto leading-relaxed">{errorMessage}</p>
            
            <button 
              onClick={() => { setStatus('IDLE'); setUrl(''); setErrorMessage(''); }}
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors font-medium border border-slate-700 mx-auto block"
            >
              Try Another Link
            </button>
          </motion.div>
        )}

        {(status === 'READY' || status === 'DOWNLOADABLE') && (
          <motion.div
            key="ready"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {(status === 'READY' || status === 'DOWNLOADABLE') && (
              <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                 {videoData?.thumbnail && (
                   <div className="w-full aspect-video bg-slate-950 relative overflow-hidden">
                     <img 
                       src={videoData.thumbnail} 
                       alt="Generated AI Video Thumbnail Preview" 
                       width={1280}
                       height={720}
                       loading="lazy" 
                       className={`w-full h-full object-cover transition-all duration-700 ${status === 'READY' ? 'blur-xl opacity-30 scale-110' : 'blur-0 opacity-90 scale-100'}`} 
                     />
                     {status === 'READY' && (
                       <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 backdrop-blur-sm">
                         <div className="bg-slate-800/90 border border-slate-700 px-5 py-2.5 rounded-xl font-medium text-slate-200 shadow-xl flex items-center gap-3">
                           <Lock size={18} className="text-slate-400" />
                           Unlock in Progress
                         </div>
                       </div>
                     )}
                   </div>
                )}
                <div className="p-6 border-t border-slate-800">
                   <h3 className="font-semibold text-lg text-white mb-1">AI Generated Video</h3>
                   <p className="text-slate-500 text-sm truncate">{videoData?.title || 'Use AI generator tools to get this'}</p>
                </div>
              </div>
            )}

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 flex items-center gap-4">
               <div className="bg-emerald-500/20 p-2 rounded-full shrink-0">
                  <CheckCircle2 size={24} className="text-emerald-400 w-6 h-6" />
               </div>
               <div>
                 <h4 className="font-semibold text-emerald-300">Processing Complete</h4>
                 <p className="text-emerald-200/70 text-sm mt-0.5">Your <span className="font-medium text-emerald-100">HD MP4 file</span> is ready.</p>
               </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-800 text-center relative overflow-hidden">
              {status === 'READY' ? (
                <>
                  <p className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4">Generating Secure Link</p>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden mb-6">
                    <motion.div 
                      className="h-full bg-indigo-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 10, ease: "linear" }}
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-8">
                    Wait <span className="text-indigo-400">{countdown}</span>s
                  </h3>
                  
                  <button disabled className="w-full flex items-center justify-center gap-3 bg-slate-800 text-slate-500 border border-slate-700 font-medium py-4 rounded-xl transition-colors">
                    <Lock size={20} />
                    <span>Link Locked</span>
                  </button>
                </>
              ) : (
                <>
                   <div className="absolute inset-0 bg-indigo-500/5 pulse animate-pulse pointer-events-none" />
                   <p className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-4 relative z-10">Link Ready</p>
                   <h3 className="text-3xl font-bold text-white mb-8 relative z-10">
                     Ready to Download
                   </h3>
                   <button 
                    onClick={handleFileDownload}
                    className="w-full relative z-10 flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-4 rounded-xl transition-all shadow-lg shadow-indigo-600/30"
                   >
                     <Download size={20} />
                     <span>Download File</span>
                   </button>
                   <button 
                    onClick={() => { setStatus('IDLE'); setUrl(''); setVideoData(null); }}
                    className="text-slate-500 text-sm mt-8 hover:text-indigo-400 font-medium relative z-10 transition-colors"
                   >
                     Download Another Video
                   </button>
                </>
              )}
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </section>
  );
}
