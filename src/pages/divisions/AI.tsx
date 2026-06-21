import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Code2, Globe, Music2, Share2, Search, Youtube, Shirt, Bot, Play, ChevronRight, ExternalLink, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  { icon: Globe, title: "Web Design & Development", desc: "Premium glassmorphic 3D sites that stop scrollers cold. React, Next.js, Wix, Framer.", tag: "DESIGN", color: "#E5192A" },
  { icon: Search, title: "SEO Domination", desc: "AI-powered keyword strategy, technical SEO, and content that ranks and converts.", tag: "SEO", color: "#06B6D4" },
  { icon: Share2, title: "Social Media Marketing", desc: "Full management across all platforms. Content, community, paid campaigns — automated.", tag: "SOCIAL", color: "#8B5CF6" },
  { icon: Youtube, title: "YouTube Marketing", desc: "Channel buildout, SEO, thumbnails, community posts — grow from zero to monetized.", tag: "VIDEO", color: "#FF0000" },
  { icon: Music2, title: "Music Distribution", desc: "Get on every major DSP. Playlist pitching, royalty tracking, release strategy.", tag: "MUSIC", color: "#10B981" },
  { icon: Code2, title: "Software & App Dev", desc: "Web apps, mobile apps, AI tools, automation. MVP to full scale.", tag: "DEV", color: "#F59E0B" },
  { icon: Shirt, title: "Fashion & Merch Design", desc: "Brand apparel, luxury drops, merch lines — designed by AI, fulfilled by Printful.", tag: "FASHION", color: "#C9A84C" },
  { icon: Bot, title: "AI Agent Creation", desc: "Custom agents for sales, support, content, and research. Built and deployed for you.", tag: "AI", color: "#E5192A" },
  { icon: Share2, title: "Sales & Marketing Campaigns", desc: "Full funnel strategy. Email, ads, landing pages, copy — built to convert.", tag: "CAMPAIGNS", color: "#8B5CF6" },
];

const products = [
  { name: "The Visionary", tag: "AI ASSISTANT", desc: "The proprietary AI powering every Red Vision division. Built for entertainment workflows.", link: "https://aistudio.google.com/apps/e182b0fd-9585-4aa5-ba1c-94e753c678ff?showPreview=true", color: "#E5192A", grad: "from-red-600/20 to-orange-600/5" },
  { name: "PIVOT Tour System", tag: "TOUR MANAGEMENT", desc: "AI-powered tour management. Advance shows, manage budgets, run tours like a major label.", link: "https://aistudio.google.com/apps/6ff86395-d125-4068-a96a-5c2e4b7cdb4a?showPreview=true", color: "#06B6D4", grad: "from-cyan-600/20 to-blue-600/5" },
  { name: "Red Vision Radio", tag: "MEDIA PLATFORM", desc: "24/7 independent music and culture radio, built on Readdy AI.", link: "https://readdy.ai/cooperation-invite?token=xAnjNolTPOO79Q36Sd1pzSQFzu8EwsXW&ref=link", color: "#10B981", grad: "from-emerald-600/20 to-green-600/5" },
  { name: "BLACKSIDE TV", tag: "STREAMING", desc: "AI-powered creative studio and streaming platform. Original content for the culture.", link: "https://blackside-tv-ai-creative-studio.rork.app", color: "#8B5CF6", grad: "from-violet-600/20 to-purple-600/5" },
  { name: "4429 Marketing Suite", tag: "MARKETING AI", desc: "Full AI marketing agency platform — social, SEO, web design, YouTube — all automated.", link: "https://app.base44.com/apps/6a1afa13ed2e0533fc0e8c23/editor/preview444", color: "#F59E0B", grad: "from-amber-600/20 to-yellow-600/5" },
  { name: "Red Vision Mall Portraits", tag: "AI CREATIVE", desc: "Studio-quality AI portrait photography. Custom styles, professional finishes.", link: "https://wd6ype73psnk2.mocha.app", color: "#C9A84C", grad: "from-yellow-600/20 to-amber-600/5" },
];

export default function AIPage() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [visible, setVisible] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setVisible(prev => new Set([...prev, e.target.id])); });
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-observe]').forEach(el => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-20px) rotate(1deg)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes border-run { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes fade-up { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        .orb { position:absolute; border-radius:50%; filter:blur(100px); pointer-events:none; }
        .glass { background:rgba(255,255,255,0.03); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.08); }
        .glass-card { background:linear-gradient(135deg,rgba(255,255,255,0.06) 0%,rgba(255,255,255,0.02) 100%); backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px); border:1px solid rgba(255,255,255,0.1); transition:all 0.5s cubic-bezier(0.23,1,0.32,1); }
        .glass-card:hover { background:linear-gradient(135deg,rgba(255,255,255,0.09),rgba(229,25,42,0.04)); border-color:rgba(229,25,42,0.35); transform:translateY(-10px) scale(1.01); box-shadow:0 40px 80px rgba(229,25,42,0.12); }
        .product-card { background:linear-gradient(135deg,rgba(255,255,255,0.04),rgba(0,0,0,0.4)); backdrop-filter:blur(30px); -webkit-backdrop-filter:blur(30px); border:1px solid rgba(255,255,255,0.08); transition:all 0.5s cubic-bezier(0.23,1,0.32,1); }
        .product-card:hover { transform:translateY(-14px) rotateX(3deg); box-shadow:0 50px 100px rgba(0,0,0,0.6); }
        .tag { font-family:'DM Mono',monospace; font-size:0.65rem; letter-spacing:0.2em; text-transform:uppercase; }
        .shimmer-red { background:linear-gradient(90deg,#fff 25%,#E5192A 50%,#fff 75%); background-size:200% auto; -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; animation:shimmer 3s linear infinite; }
        .grid-overlay { background-image:linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px); background-size:60px 60px; }
        .running-border { position:relative; }
        .running-border::before { content:''; position:absolute; inset:-1px; border-radius:24px; background:linear-gradient(135deg,#E5192A,#8B5CF6,#06B6D4,#E5192A); background-size:300% 300%; animation:border-run 4s linear infinite; -webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0); -webkit-mask-composite:xor; mask-composite:exclude; padding:1px; }
        .fade-up { animation:fade-up 0.8s cubic-bezier(0.23,1,0.32,1) forwards; }
        .hidden-anim { opacity:0; transform:translateY(40px); }
        .visible-anim { opacity:1; transform:translateY(0); transition:all 0.7s cubic-bezier(0.23,1,0.32,1); }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="orb w-[700px] h-[700px] bg-red-700/12 -top-40 -left-40" style={{animation:'float 8s ease-in-out infinite'}} />
        <div className="orb w-[500px] h-[500px] bg-purple-700/10 top-1/2 right-0" style={{animation:'float 10s ease-in-out infinite 2s'}} />
        <div className="orb w-[400px] h-[400px] bg-cyan-700/8 bottom-0 left-1/3" style={{animation:'float 7s ease-in-out infinite 4s'}} />
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute inset-0 pointer-events-none" style={{background:`radial-gradient(700px circle at ${mousePos.x*100}% ${mousePos.y*100}%, rgba(229,25,42,0.07), transparent 50%)`}} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 mb-12 transition-colors text-sm">
            <ArrowRight className="w-3 h-3 rotate-180" /> Back to home
          </Link>

          <div className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full" style={{animation:'pulse 1.5s ease-in-out infinite',boxShadow:'0 0 10px #E5192A'}} />
            <span className="tag text-red-400">Red Vision AI — Software & Technology Division</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black leading-none mb-6 tracking-tighter">
            <span className="block text-white">WE BUILD</span>
            <span className="block shimmer-red">EMPIRES.</span>
            <span className="block text-white/15 text-3xl md:text-4xl font-light mt-4 tracking-[0.5em]">WITH ARTIFICIAL INTELLIGENCE</span>
          </h1>

          <p className="text-xl text-white/40 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Custom software, AI agents, web platforms, and digital infrastructure — built by a team that lives and breathes the entertainment industry.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-20">
            <a href="https://wd6ype73psnk2.mocha.app" target="_blank" rel="noreferrer"
              className="group px-8 py-4 bg-red-600 text-white rounded-full font-black text-lg hover:bg-red-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(229,25,42,0.4)] transition-all flex items-center gap-3">
              Start a Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#products" className="px-8 py-4 glass rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2">
              <Play className="w-4 h-4" /> See Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[{n:"6",l:"AI Agents"},{n:"15+",l:"Years Industry"},{n:"8",l:"Divisions"},{n:"24/7",l:"Always On"}].map((s,i) => (
              <div key={s.l} className="glass-card rounded-2xl p-5 text-center" style={{animation:`float ${5+i}s ease-in-out infinite`,animationDelay:`${i*0.5}s`}}>
                <div className="text-3xl font-black text-red-500 mb-1">{s.n}</div>
                <div className="text-xs text-white/30 uppercase tracking-widest font-mono">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-32 px-6 relative">
        <div className="orb w-[500px] h-[500px] bg-purple-700/8 top-0 right-0" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="tag text-red-400 block mb-4">What We've Built</span>
            <h2 className="text-5xl md:text-7xl font-black mb-6">Live <span className="text-red-500">Products.</span></h2>
            <p className="text-white/30 text-xl max-w-xl mx-auto font-light">Every tool below is live and being used right now. This is what we build for clients.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div key={p.name} id={`p${i}`} data-observe
                className={`product-card rounded-3xl p-8 flex flex-col relative overflow-hidden ${visible.has(`p${i}`) ? 'visible-anim' : 'hidden-anim'}`}
                style={{transitionDelay:`${i*0.08}s`,border:`1px solid ${p.color}18`}}>
                <div className={`absolute inset-0 bg-gradient-to-br ${p.grad}`} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="tag text-xs px-3 py-1.5 rounded-full" style={{background:`${p.color}18`,color:p.color,border:`1px solid ${p.color}28`}}>{p.tag}</span>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{background:p.color,boxShadow:`0 0 8px ${p.color}`}} />
                  </div>
                  <h3 className="text-2xl font-black mb-3" style={{color:p.color}}>{p.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed flex-1 mb-8 font-light">{p.desc}</p>
                  <a href={p.link} target="_blank" rel="noreferrer"
                    className="group flex items-center justify-between p-4 rounded-2xl transition-all"
                    style={{background:`${p.color}12`,border:`1px solid ${p.color}22`}}
                    onMouseEnter={e=>(e.currentTarget.style.background=`${p.color}22`)}
                    onMouseLeave={e=>(e.currentTarget.style.background=`${p.color}12`)}>
                    <span className="text-sm font-bold" style={{color:p.color}}>Launch App</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" style={{color:p.color}} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 px-6 relative" style={{background:'linear-gradient(180deg,#050505 0%,#080208 50%,#050505 100%)'}}>
        <div className="orb w-[400px] h-[400px] bg-red-700/8 bottom-0 left-0" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="tag text-red-400 block mb-4">Services</span>
            <h2 className="text-5xl md:text-7xl font-black mb-6">Every Service. <span className="text-white/15">One Team.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} id={`s${i}`} data-observe
                  className={`glass-card rounded-2xl p-6 group ${visible.has(`s${i}`) ? 'visible-anim' : 'hidden-anim'}`}
                  style={{transitionDelay:`${i*0.06}s`}}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                      style={{background:`${svc.color}12`,border:`1px solid ${svc.color}28`}}>
                      <Icon className="w-5 h-5" style={{color:svc.color}} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="tag text-xs" style={{color:svc.color}}>{svc.tag}</span>
                      </div>
                      <h3 className="font-bold text-base mb-2">{svc.title}</h3>
                      <p className="text-white/35 text-sm leading-relaxed font-light">{svc.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="orb w-[800px] h-[400px] bg-red-700/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-4xl mx-auto">
          <div className="running-border rounded-3xl">
            <div className="glass rounded-3xl p-16 text-center" style={{background:'rgba(5,5,5,0.95)'}}>
              <Zap className="w-10 h-10 text-red-500 mx-auto mb-6" />
              <span className="tag text-red-400 block mb-6">Ready to Build?</span>
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Your Vision.<br /><span className="shimmer-red">Our Technology.</span>
              </h2>
              <p className="text-white/35 text-lg mb-10 max-w-xl mx-auto font-light">Tell us what you're building. We'll tell you exactly how AI and custom software can make it real.</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="https://wd6ype73psnk2.mocha.app" target="_blank" rel="noreferrer"
                  className="px-10 py-5 bg-red-600 text-white rounded-full font-black text-lg hover:bg-red-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(229,25,42,0.4)] transition-all flex items-center gap-3">
                  Book a Call with Jason <ArrowRight className="w-5 h-5" />
                </a>
                <a href="https://rv-ai-agency.netlify.app" target="_blank" rel="noreferrer"
                  className="px-10 py-5 glass rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3">
                  See Agency Plans <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
