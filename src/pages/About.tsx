import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Learn more about ClipVidSaver.online - a fast and simple platform for downloading AI-generated videos." />
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">About ClipVidSaver.online</h1>
      <p className="text-xl text-slate-400 mb-12">A fast and simple platform for downloading AI-generated videos.</p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <div className="prose prose-lg text-slate-400">
            <p className="mb-4">ClipVidSaver.online was created to make saving AI-generated videos easier, faster, and more reliable for everyone.</p>
            <p className="mb-4">Many creators use AI platforms daily but struggle to keep their generated content safely stored. Temporary links expire, videos disappear, and downloading can become frustrating. ClipVidSaver.online solves that problem with a simple and clean experience.</p>
            <p>No complicated tools, no unnecessary steps — just paste the link and download your video instantly.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Why ClipVidSaver.online</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-slate-400">
            <li>Fast video processing</li>
            <li>Clean and mobile-friendly experience</li>
            <li>No registration required</li>
            <li>Simple one-click downloads</li>
            <li>Built for creators and AI users</li>
            <li>Continuously improved based on user feedback</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Our Goal</h2>
          <p className="text-lg text-slate-400">
            Our goal is to provide creators with a lightweight and reliable tool that helps them keep access to their AI-generated content anytime they need it.
          </p>
        </section>
      </div>
    </div>
    </>
  );
}
