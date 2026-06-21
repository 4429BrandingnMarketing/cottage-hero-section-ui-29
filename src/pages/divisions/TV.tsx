import { useEffect, useState } from 'react';
import { Tv2, Play, ArrowRight, Film, Zap, ExternalLink, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const shows = [
  { title: "Red Vision Uncut", genre: "Documentary Series", desc: "Behind the scenes of building a music empire with AI. No filter, no script — just the real story.", status: "COMING SOON", color: "#E5192A" },
  { title: "The Studio Sessions", genre: "Music Content", desc: "Live recording sessions, artist breakdowns, and the creative process behind the music.", status: "IN PRODUCTION", color: "#8B5CF6" },
  { title: "AI & The Industry", genre: "Tech Talk", desc: "How artificial intelligence is reshaping music, entertainment, and culture. Weekly deep dives.", status: "IN PRODUCTION", color: "#06B6D4" },
  { title: "PIVOT: The Series", genre: "Education", desc: "Tour management, label operations, and music business — the video series based on the PIVOT book.", status: "COMING SOON", color: "#10B981" },
  { title: "BLACKSIDE TV Presents", genre: "Original Content", desc: "Original programming from the BLACKSIDE TV creative studio. Culture-forward storytelling.", status: "STREAMING NOW", color: "#F59E0B" },
  { title: "Red Vision Live", genre: "Live Events", desc: "Live concerts, listening parties, and cultural events streamed directly to fans worldwide.", status: "COMING SOON", color: "#C9A84C" },
];

export default function TVPage() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        @keyframes scan { 0%{transform:translateY(-10%)} 100%{transform:translateY(110vh)} }
        @keyframes shimmer-purple { 0%{background-position:-200% center} 100%{background-position:200% center} }
        .orb { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; }
        .glass { background:rgba(255,255,255,0.03); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.08); }
        .glass-card { background:linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01)); backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px); border:1px solid rgba(255,255,255,0.08); transition:all 0.4s cubic-bezier(0.23,1,0.32,1); }
        .tag { font-family:'DM Mono',monospace; font-size:0.65rem; letter-spacing:0.2em; text-transform:uppercase; }
        .scan-line { position:absolute; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,rgba(139,92,246,0.5),transparent); animation:scan 5s linear infinite; pointer-events:none; z-index:5; }
        .shimmer-purple { background:linear-gradient(90deg,#fff 25%,#8B5CF6 50%,#fff 75%); background-size:200% auto; -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; animation:shimmer-purple 3s linear infinite; }
        .tv-glow { box-shadow:0 0 80px rgba(139,92,246,0.25), 0 0 160px rgba(139,92,246,0.1); }
        .grid-bg { background-image:linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px); background-size:100% 4px; }
      `}</style>

      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="orb w-[700px] h-[700px] bg-violet-700/12 -top-40 right-0" style={{animation:'float 9s ease-in-out infinite'}} />
        <div className="orb w-[400px] h-[400px] bg-purple-800/10 bottom-0 left-0" style={{animation:'float 7s ease-in-out infinite 3s'}} />
        <div className="orb w-[350px] h-[350px] bg-red-700/8 top-1/2 left-1/4" style={{animation:'float 6s ease-in-out infinite 1s'}} />
        <div className="absolute inset-0 grid-bg" />
        <div className="scan-line" />
        <div className="absolute inset-0 pointer-events-none" style={{background:`radial-gradient(600px circle at ${mousePos.x*100}% ${mousePos.y*100}%, rgba(139,92,246,0.08), transparent 55%)`}} />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Link to="/" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 mb-10 transition-colors text-sm">
                <ArrowRight className="w-3 h-3 rotate-180" /> Back
              </Link>
              <div className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-8">
                <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                <span className="tag text-violet-400">Red Vision TV · Original Content</span>
              </div>
              <h1 className="text-7xl md:text-8xl font-black leading-none mb-6 tracking-tight">
                <span className="block text-white/20 text-2xl font-light tracking-[0.4em] mb-3">NOW STREAMING</span>
                <span className="block shimmer-purple">RED<br/>VISION<br/>TV.</span>
              </h1>
              <p className="text-white/40 text-lg mb-10 font-light leading-relaxed max-w-md">
                Original content, documentaries, studio sessions, and live events — built for the culture, powered by AI.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="https://blackside-tv-ai-creative-studio.rork.app" target="_blank" rel="noreferrer"
                  className="group px-8 py-4 rounded-full font-black flex items-center gap-3 transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(139,92,246,0.4)]"
                  style={{background:'#8B5CF6'}}>
                  <Play className="w-4 h-4" /> Watch Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://wd6ype73psnk2.mocha.app" target="_blank" rel="noreferrer"
                  className="px-8 py-4 glass rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                  Submit Content <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card rounded-3xl overflow-hidden aspect-video tv-glow" style={{border:'2px solid rgba(139,92,246,0.3)'}}>
                <div className="absolute inset-0 flex items-center justify-center" style={{background:'linear-gradient(135deg,#0a0015,#05000d)'}}>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{background:'rgba(139,92,246,0.2)',border:'2px solid rgba(139,92,246,0.4)'}}>
                      <Tv2 className="w-8 h-8 text-violet-400" />
                    </div>
                    <div className="tag text-violet-400 block mb-2">Channel 01</div>
                    <div className="text-2xl font-black">RED VISION TV</div>
                    <div className="text-white/30 text-sm mt-2 font-mono">LIVE · HD · AI-POWERED</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 px-2 py-1 rounded text-xs font-bold" style={{background:'rgba(139,92,246,0.8)'}}>RV.TV</div>
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-1 rounded text-xs font-bold" style={{background:'rgba(229,25,42,0.8)'}}>
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />LIVE
                </div>
                <div className="absolute bottom-4 left-4 right-4 h-1 rounded-full bg-white/5">
                  <div className="h-full rounded-full w-1/3" style={{background:'linear-gradient(90deg,#8B5CF6,#E5192A)'}} />
                </div>
              </div>
              <div className="absolute -right-6 top-6 glass-card rounded-2xl p-4 w-36" style={{animation:'float 5s ease-in-out infinite'}}>
                <Film className="w-4 h-4 text-violet-400 mb-2" />
                <div className="text-xs font-bold">6 Shows</div>
                <div className="text-white/30 text-xs">In Dev</div>
              </div>
              <div className="absolute -left-6 bottom-6 glass-card rounded-2xl p-4 w-36" style={{animation:'float 6s ease-in-out infinite 2s'}}>
                <Zap className="w-4 h-4 text-yellow-400 mb-2" />
                <div className="text-xs font-bold">AI-Powered</div>
                <div className="text-white/30 text-xs">Production</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="tag text-violet-400 block mb-4">Programming</span>
            <h2 className="text-5xl font-black">Original <span className="text-violet-500">Shows.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {shows.map((show, i) => (
              <div key={show.title}
                className="glass-card rounded-2xl overflow-hidden cursor-default"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  borderColor: hovered===i ? `${show.color}50` : 'rgba(255,255,255,0.08)',
                  boxShadow: hovered===i ? `0 20px 60px ${show.color}20` : 'none',
                  transform: hovered===i ? 'translateY(-8px) scale(1.01)' : 'translateY(0)',
                }}>
                <div className="h-1" style={{background:show.color}} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4 gap-2">
                    <span className="tag text-xs px-2 py-1 rounded-full" style={{background:`${show.color}15`,color:show.color}}>{show.genre}</span>
                    <span className="tag text-xs px-2 py-1 rounded-full whitespace-nowrap" style={{background:show.status==='STREAMING NOW'?'rgba(16,185,129,0.15)':'rgba(255,255,255,0.05)',color:show.status==='STREAMING NOW'?'#10B981':'rgba(255,255,255,0.3)'}}>{show.status}</span>
                  </div>
                  <h3 className="text-xl font-black mb-3">{show.title}</h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed">{show.desc}</p>
                  {show.status==='STREAMING NOW' && (
                    <a href="https://blackside-tv-ai-creative-studio.rork.app" target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-sm font-bold transition-colors" style={{color:show.color}}>
                      <Play className="w-3 h-3" /> Watch Now <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-12" style={{border:'1px solid rgba(139,92,246,0.2)'}}>
            <Tv2 className="w-12 h-12 text-violet-400 mx-auto mb-6" />
            <h3 className="text-3xl font-black mb-4">Want to be on Red Vision TV?</h3>
            <p className="text-white/40 mb-8 font-light">Artists, creators, and brands — we're looking for compelling stories.</p>
            <a href="https://wd6ype73psnk2.mocha.app" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all hover:scale-105"
              style={{background:'#8B5CF6',boxShadow:'0 0 30px rgba(139,92,246,0.3)'}}>
              Submit Your Story <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
