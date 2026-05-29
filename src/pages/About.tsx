import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Learn more about ClipVidSaver - the premier Meta AI video downloader for saving HD MP4s without watermarks." />
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">About ClipVidSaver</h1>
      <p className="text-xl text-slate-600 mb-12">The dedicated platform for downloading Meta AI videos without watermarks.</p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">ClipVidSaver was created to make saving Meta AI generated videos easier, faster, and more reliable for everyone.</p>
            <p className="mb-4">Many creators use Meta AI daily but struggle to keep their generated content safely stored without intrusive branding. Temporary links expire, videos disappear, and watermarks can ruin professional presentations. ClipVidSaver solves that problem with a custom-built processing engine.</p>
            <p>No complicated tools, no unnecessary steps — just paste the Meta AI link and download your pristine HD MP4 instantly.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why ClipVidSaver</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-slate-600">
            <li>Natively removes Meta AI watermarks</li>
            <li>Fast HD MP4 video processing</li>
            <li>Clean and mobile-friendly experience</li>
            <li>No registration or hidden fees</li>
            <li>Built specifically for Meta AI creators</li>
            <li>Continuously improved based on platform updates</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Goal</h2>
          <p className="text-lg text-slate-600">
            Our goal is to provide creators with a dedicated Meta AI video downloader that enables them to present their AI generations cleanly and professionally.
          </p>
        </section>
      </div>
    </div>
    </>
  );
}
