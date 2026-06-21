import { useEffect, useState } from 'react';
import { Radio, Play, Pause, ArrowRight, Mic2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const shows = [
  { name: "The Red Vision Frequency", host: "Jason Salvador", time: "Mon–Fri 8PM PT", desc: "Music, culture, and the business behind the music. Real talk from the inside.", genre: "Culture & Business" },
  { name: "Artist Spotlight", host: "Red Vision Music", time: "Saturdays 6PM PT", desc: "Deep dives into the artists shaping the future of independent music.", genre: "Artist Features" },
  { name: "The AI Music Report", host: "Hermes AI", time: "Daily 12PM PT", desc: "How AI is reshaping the music industry — news, analysis, and opportunity.", genre: "Tech & Music" },
  { name: "Late Night Frequencies", host: "My Guy Mars", time: "Fri & Sat 10PM PT", desc: "Lo-fi beats, late night vibes, and the sounds that move you.", genre: "Music & Vibes" },
];

export default function RadioPage() {
  const [playing, setPlaying] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [bars, setBars] = useState(Array.from({length:16},()=>30));

  useEffect(() => {
    const h = (e: MouseEvent) => setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setBars(prev => prev.map(() => Math.random() * 75 + 15)), 120);
    return () => clearInterval(id);
  }, [playing]);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
        @keyframes shimmer-green { 0%{background-position:-200% center} 100%{background-position:200% center} }
        .orb { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; }
        .glass { background:rgba(255,255,255,0.03); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.08); }
        .glass-card { background:linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)); backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px); border:1px solid rgba(255,255,255,0.1); transition:all 0.4s cubic-bezier(0.23,1,0.32,1); }
        .glass-card:hover { border-color:rgba(16,185,129,0.4); transform:translateY(-6px); box-shadow:0 24px 60px rgba(16,185,129,0.15); }
        .tag { font-family:'DM Mono',monospace; font-size:0.65rem; letter-spacing:0.2em; text-transform:uppercase; }
        .shimmer-green { background:linear-gradient(90deg,#fff 25%,#10B981 50%,#fff 75%); background-size:200% auto; -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; animation:shimmer-green 3s linear infinite; }
        .dot-grid { background-image:radial-gradient(rgba(16,185,129,0.07) 1px, transparent 1px); background-size:40px 40px; }
        .player-glow { box-shadow:0 0 60px rgba(16,185,129,0.2), inset 0 0 30px rgba(0,0,0,0.5); }
      `}</style>

      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="orb w-[600px] h-[600px] bg-emerald-600/15 -top-20 -left-20" style={{animation:'float 8s ease-in-out infinite'}} />
        <div className="orb w-[400px] h-[400px] bg-green-600/10 bottom-0 right-0" style={{animation:'float 6s ease-in-out infinite 2s'}} />
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 pointer-events-none" style={{background:`radial-gradient(500px circle at ${mousePos.x*100}% ${mousePos.y*100}%, rgba(16,185,129,0.07), transparent 60%)`}} />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Link to="/" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 mb-10 transition-colors text-sm">
                <ArrowRight className="w-3 h-3 rotate-180" /> Back
              </Link>
              <div className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-8">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="tag text-emerald-400">Live 24/7 · Red Vision Radio</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-black leading-none mb-6 tracking-tight">
                <span className="block text-white/20 text-2xl font-light tracking-[0.4em] mb-3">TUNE IN</span>
                <span className="block shimmer-green">THE<br/>SIGNAL.</span>
              </h1>
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-md mb-10">
                Independent music, culture, and the conversation that drives the industry forward. 24/7 from Los Angeles.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="https://readdy.ai/cooperation-invite?token=xAnjNolTPOO79Q36Sd1pzSQFzu8EwsXW&ref=link" target="_blank" rel="noreferrer"
                  className="px-8 py-4 rounded-full font-black flex items-center gap-3 transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(16,185,129,0.4)]"
                  style={{background:'#10B981',color:'#000'}}>
                  <Radio className="w-5 h-5" /> Open Studio
                </a>
              </div>
            </div>

            {/* Player */}
            <div>
              <div className="glass-card rounded-3xl p-8 player-glow" style={{border:'1px solid rgba(16,185,129,0.25)'}}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background:'rgba(16,185,129,0.15)',border:'1px solid rgba(16,185,129,0.3)'}}>
                    <Radio className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-sm">Red Vision Radio</div>
                    <div className="text-white/40 text-xs font-mono">Los Angeles · Live Stream</div>
                  </div>
                  <span className="tag text-xs px-2 py-1 rounded-full" style={{background:'rgba(16,185,129,0.15)',color:'#10B981'}}>LIVE</span>
                </div>

                {/* EQ Bars */}
                <div className="flex items-end justify-center gap-1 h-20 mb-6 px-4">
                  {bars.map((h, i) => (
                    <div key={i} className="flex-1 rounded-full transition-all"
                      style={{height:`${playing?h:15}%`,background:`linear-gradient(to top, #10B981, #34D399)`,opacity:playing?1:0.25,transitionDuration:'120ms'}} />
                  ))}
                </div>

                {/* Track info */}
                <div className="flex items-center gap-3 mb-6 p-3 rounded-2xl" style={{background:'rgba(255,255,255,0.03)'}}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'rgba(16,185,129,0.1)'}}>
                    <Mic2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">The Red Vision Frequency</div>
                    <div className="text-white/30 text-xs">Jason Salvador · Live Now</div>
                  </div>
                </div>

                <button onClick={() => setPlaying(!playing)}
                  className="w-full py-4 rounded-2xl font-black flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95"
                  style={{background:playing?'rgba(16,185,129,0.15)':'#10B981',color:playing?'#10B981':'#000',border:playing?'1px solid rgba(16,185,129,0.3)':'none'}}>
                  {playing ? <><Pause className="w-5 h-5" /> Pause</> : <><Play className="w-5 h-5" /> Listen Live</>}
                </button>

                <a href="https://readdy.ai/cooperation-invite?token=xAnjNolTPOO79Q36Sd1pzSQFzu8EwsXW&ref=link" target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 mt-4 text-sm transition-colors" style={{color:'rgba(16,185,129,0.5)'}}>
                  Open in Readdy Studio <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="tag text-emerald-400 block mb-4">Programming</span>
            <h2 className="text-5xl font-black">On Air Now.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {shows.map((show) => (
              <div key={show.name} className="glass-card rounded-2xl p-7">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{background:'rgba(16,185,129,0.1)',border:'1px solid rgba(16,185,129,0.2)'}}>
                    <Mic2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <span className="tag text-xs text-white/30 block mb-1">{show.genre}</span>
                    <h3 className="font-black text-lg mb-1">{show.name}</h3>
                    <div className="text-emerald-400 text-xs mb-3 font-mono">{show.host} · {show.time}</div>
                    <p className="text-white/40 text-sm font-light leading-relaxed">{show.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
