import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SERVICES = [
  { icon: '🧠', name: 'AI Strategy & Consulting', desc: 'We map your entire operation and show you exactly where AI creates leverage — no fluff, no theory. Pure execution.' },
  { icon: '🤖', name: 'Custom Agent Deployment', desc: 'We build and deploy autonomous AI agents that work for your business 24/7. Marketing, ops, customer service, research.' },
  { icon: '🎵', name: 'Music Industry AI Systems', desc: 'AI-powered A&R, release strategies, fan analytics, and royalty tracking. Built by someone who lived the industry.' },
  { icon: '⚡', name: 'Automation Architecture', desc: 'We wire your tools together so your team stops doing repetitive work and starts doing real work.' },
  { icon: '📊', name: 'AI-Powered Analytics', desc: 'Know what your audience is doing, why they do it, and what to do next — before your competitors figure it out.' },
  { icon: '🚀', name: 'Launch & Scale Systems', desc: 'From idea to automated revenue engine. We build the infrastructure that lets you operate at scale without a big team.' },
];

const AGENTS = [
  { name: 'HERMES', role: 'Chief Operating Officer', color: '#7C3AED', desc: 'Orchestrates all operations, task delegation, and executive decision support.' },
  { name: 'AXIOM', role: 'Research Intelligence', color: '#6366F1', desc: 'Deep research, market intelligence, and competitive analysis at machine speed.' },
  { name: 'FORGE', role: 'Engineering Lead', color: '#7C3AED', desc: 'Code generation, debugging, system architecture, and technical execution.' },
  { name: 'AURORA', role: 'Creative Director', color: '#A855F7', desc: 'Copy, content strategy, brand voice, and creative campaign generation.' },
  { name: 'MAVEN', role: 'Chief Marketing Officer', color: '#6366F1', desc: 'Campaign planning, social strategy, growth hacking, and audience targeting.' },
  { name: 'CIPHER', role: 'Security & Compliance', color: '#7C3AED', desc: 'Data protection, access control, security audits, and compliance monitoring.' },
];

const TIERS = [
  { name: 'Launch', price: '$297', per: '/mo', features: ['1 Custom AI Agent', 'Automation Blueprint', 'Monthly Strategy Call', 'Email + Chat Support'], color: '#6366F1' },
  { name: 'Scale', price: '$997', per: '/mo', features: ['3 Custom AI Agents', 'Full Automation Stack', 'Weekly Strategy Sessions', 'Priority Support', 'Custom Integrations'], color: '#7C3AED', featured: true },
  { name: 'Empire', price: '$1,997', per: '/mo', features: ['Unlimited AI Agents', 'Enterprise Architecture', 'Daily Monitoring', 'Dedicated AI Engineer', 'White Glove Onboarding', 'Revenue Guarantee'], color: '#A855F7' },
];

export default function AIPage() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [tick, setTick] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const h = (e: MouseEvent) => setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 50);
    return () => clearInterval(id);
  }, []);

  // Neural network canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes = Array.from({ length: 28 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2.5 + 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(124,58,237,${0.15 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        });
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(124,58,237,0.6)';
        ctx.fill();
      });
      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#020202', color: '#fff', overflowX: 'hidden', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;700;900&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-thumb { background: #1a0040; border-radius: 2px; }
        @keyframes ai-o1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-40px,30px)} }
        @keyframes ai-o2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(50px,-40px)} }
        @keyframes ai-shimmer { 0%{background-position:-400% center} 100%{background-position:400% center} }
        @keyframes ai-scan { 0%{transform:translateY(-100%)} 100%{transform:translateY(200vh)} }
        @keyframes ai-up { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ai-pulse { 0%,100%{box-shadow:0 0 0 0 rgba(124,58,237,0.4)} 50%{box-shadow:0 0 0 12px rgba(124,58,237,0)} }
        @keyframes ai-cursor { 0%,100%{opacity:1} 50%{opacity:0} }
        .ai-orb { position:absolute; border-radius:50%; pointer-events:none; }
        .ai-glass { background:rgba(255,255,255,0.025); backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px); border:1px solid rgba(255,255,255,0.07); }
        .ai-glass-v { background:linear-gradient(135deg,rgba(124,58,237,0.09),rgba(99,102,241,0.03)); backdrop-filter:blur(28px); -webkit-backdrop-filter:blur(28px); border:1px solid rgba(124,58,237,0.2); }
        .ai-card { background:linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01)); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.07); transition:all 0.4s cubic-bezier(0.23,1,0.32,1); }
        .ai-card:hover { border-color:rgba(124,58,237,0.45); transform:translateY(-8px); box-shadow:0 32px 80px rgba(124,58,237,0.12); }
        .ai-shimmer { background:linear-gradient(90deg,rgba(255,255,255,0.85) 15%,#7C3AED 40%,#A78BFA 55%,rgba(255,255,255,0.85) 85%); background-size:400% auto; -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; animation:ai-shimmer 4s linear infinite; }
        .ai-tag { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:0.2em; text-transform:uppercase; }
        .ai-display { font-family:'Bebas Neue',sans-serif; }
        .ai-grid { background-image:radial-gradient(rgba(124,58,237,0.06) 1px,transparent 1px); background-size:36px 36px; }
        .ai-up { animation:ai-up 0.7s cubic-bezier(0.23,1,0.32,1) both; }
        .ai-agent-pulse { animation:ai-pulse 3s ease-in-out infinite; }
        .ai-cursor::after { content:'_'; animation:ai-cursor 1s step-end infinite; color:#7C3AED; }
      `}</style>
      <Navbar />

      {/* ── HERO */}
      <section style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', overflow:'hidden', paddingTop:80 }}>
        <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.6 }} />
        <div className="ai-orb" style={{ width:800, height:800, background:'radial-gradient(circle,rgba(124,58,237,0.18) 0%,transparent 70%)', top:-300, right:-200, animation:'ai-o1 18s ease-in-out infinite' }} />
        <div className="ai-orb" style={{ width:500, height:500, background:'radial-gradient(circle,rgba(99,102,241,0.12) 0%,transparent 70%)', bottom:-100, left:-150, animation:'ai-o2 14s ease-in-out infinite' }} />
        <div className="ai-grid" style={{ position:'absolute', inset:0 }} />
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', background:`radial-gradient(700px circle at ${mouse.x*100}% ${mouse.y*100}%, rgba(124,58,237,0.08), transparent 60%)` }} />
        <div style={{ position:'absolute', left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,rgba(124,58,237,0.35),transparent)', animation:'ai-scan 5s linear infinite', pointerEvents:'none' }} />

        <div style={{ position:'relative', zIndex:10, maxWidth:1200, width:'100%', margin:'0 auto', padding:'0 32px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 440px', gap:60, alignItems:'center' }}>

            <div className="ai-up">
              <Link to="/" style={{ display:'inline-flex', alignItems:'center', gap:8, color:'rgba(255,255,255,0.28)', textDecoration:'none', marginBottom:40, fontSize:13 }}>← Back to Red Vision</Link>
              <div className="ai-glass" style={{ display:'inline-flex', alignItems:'center', gap:10, borderRadius:100, padding:'9px 20px', marginBottom:28 }}>
                <div style={{ width:6, height:6, borderRadius:'50%', background:'#7C3AED', boxShadow:'0 0 8px rgba(124,58,237,0.8)' }} />
                <span className="ai-tag" style={{ color:'#A78BFA' }}>AI Agency · Los Angeles</span>
              </div>
              <h1 className="ai-display" style={{ lineHeight:0.88, marginBottom:22 }}>
                <span style={{ display:'block', fontFamily:"'DM Mono',monospace", fontSize:13, letterSpacing:'0.5em', color:'rgba(255,255,255,0.18)', marginBottom:10 }}>RED VISION</span>
                <span className="ai-shimmer" style={{ display:'block', fontSize:'clamp(58px,8vw,106px)' }}>AI AGENCY</span>
              </h1>
              <p style={{ color:'rgba(255,255,255,0.38)', fontSize:16, lineHeight:1.8, maxWidth:500, marginBottom:40, fontWeight:300 }}>
                We don't sell AI hype. We build AI infrastructure that actually works — for music labels, entertainment companies, and brands that need to operate smarter. Built by someone who's been in the industry for 25 years.
              </p>
              <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
                <a href="/divisions/ai/consulting" style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'14px 32px', borderRadius:100, background:'linear-gradient(135deg,#7C3AED,#4F46E5)', color:'#fff', fontWeight:900, fontSize:14, textDecoration:'none', boxShadow:'0 6px 40px rgba(124,58,237,0.45)', fontFamily:"'DM Sans',sans-serif", letterSpacing:'0.04em' }}>
                  🚀 Book a Strategy Call
                </a>
                <a href="/divisions/ai/services" style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'14px 32px', borderRadius:100, background:'rgba(124,58,237,0.08)', color:'#A78BFA', fontWeight:700, fontSize:14, border:'1px solid rgba(124,58,237,0.25)', textDecoration:'none', fontFamily:"'DM Sans',sans-serif" }}>
                  View Services
                </a>
              </div>
            </div>

            {/* Terminal panel */}
            <div className="ai-up" style={{ animationDelay:'0.2s', position:'relative' }}>
              <div style={{ position:'absolute', inset:-20, background:'radial-gradient(ellipse,rgba(124,58,237,0.22) 0%,transparent 70%)', borderRadius:36, filter:'blur(18px)', pointerEvents:'none' }} />
              <div className="ai-glass-v" style={{ borderRadius:28, overflow:'hidden', position:'relative', transform:'perspective(900px) rotateX(2deg) rotateY(-1deg)' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,rgba(124,58,237,0.4),transparent)' }} />
                {/* Terminal header */}
                <div style={{ background:'rgba(0,0,0,0.4)', padding:'14px 20px', display:'flex', alignItems:'center', gap:8, borderBottom:'1px solid rgba(124,58,237,0.15)' }}>
                  <div style={{ width:10, height:10, borderRadius:'50%', background:'#ff5f56' }} />
                  <div style={{ width:10, height:10, borderRadius:'50%', background:'#ffbd2e' }} />
                  <div style={{ width:10, height:10, borderRadius:'50%', background:'#27c93f' }} />
                  <span className="ai-tag" style={{ color:'rgba(124,58,237,0.6)', fontSize:9, marginLeft:10 }}>HERMES · RED VISION AI</span>
                </div>
                {/* Terminal body */}
                <div style={{ padding:'20px 24px', fontFamily:"'DM Mono',monospace", fontSize:12, lineHeight:1.9 }}>
                  {[
                    { c:'rgba(124,58,237,0.6)', t:'$ hermes --status' },
                    { c:'rgba(167,139,250,0.9)', t:'→ All 6 agents online ✓' },
                    { c:'rgba(124,58,237,0.6)', t:'$ axiom --research "music AI 2026"' },
                    { c:'rgba(167,139,250,0.9)', t:'→ 847 sources indexed...' },
                    { c:'rgba(167,139,250,0.9)', t:'→ Report generated ✓' },
                    { c:'rgba(124,58,237,0.6)', t:'$ maven --campaign "Q3 launch"' },
                    { c:'rgba(167,139,250,0.9)', t:'→ 14 content pieces queued ✓' },
                    { c:'rgba(124,58,237,0.6)', t:'$ forge --deploy "merch-api v2"' },
                    { c:'rgba(167,139,250,0.9)', t:'→ Deployed in 3.2s ✓' },
                    { c:'rgba(124,58,237,0.6)', t:'$ _', cursor: true },
                  ].map((l, i) => (
                    <div key={i} style={{ color: l.c }}>{l.t}{l.cursor ? '' : ''}</div>
                  ))}
                </div>
                <div style={{ padding:'14px 24px', borderTop:'1px solid rgba(124,58,237,0.12)', display:'flex', justifyContent:'space-between' }}>
                  <span className="ai-tag" style={{ color:'rgba(124,58,237,0.5)', fontSize:9 }}>6/6 AGENTS ACTIVE</span>
                  <span className="ai-tag" style={{ color:'#27c93f', fontSize:9 }}>● SYSTEM NOMINAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES */}
      <section style={{ padding:'110px 32px', position:'relative' }}>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg,transparent,rgba(124,58,237,0.04) 50%,transparent)', pointerEvents:'none' }} />
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:60 }}>
            <span className="ai-tag" style={{ color:'#7C3AED', display:'block', marginBottom:14 }}>What We Build</span>
            <h2 className="ai-display" style={{ fontSize:'clamp(48px,7vw,76px)', lineHeight:0.9 }}>OUR <span style={{ color:'#7C3AED' }}>SERVICES.</span></h2>
            <div style={{ width:60, height:1, background:'linear-gradient(90deg,transparent,#7C3AED,transparent)', margin:'20px auto 0' }} />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:18 }}>
            {SERVICES.map(s => (
              <div key={s.name} className="ai-card" style={{ borderRadius:22, padding:28 }}>
                <div style={{ height:2, background:'linear-gradient(90deg,#7C3AED,transparent)', borderRadius:100, marginBottom:20 }} />
                <div style={{ fontSize:28, marginBottom:14 }}>{s.icon}</div>
                <h3 style={{ fontWeight:900, fontSize:18, marginBottom:10, lineHeight:1.2 }}>{s.name}</h3>
                <p style={{ color:'rgba(255,255,255,0.38)', fontSize:13, lineHeight:1.7, fontWeight:300 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENT TEAM */}
      <section style={{ padding:'80px 32px', position:'relative' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <span className="ai-tag" style={{ color:'#7C3AED', display:'block', marginBottom:14 }}>The Infrastructure</span>
            <h2 className="ai-display" style={{ fontSize:'clamp(44px,6vw,70px)', lineHeight:0.9 }}>MEET THE <span style={{ color:'#7C3AED' }}>AGENTS.</span></h2>
            <div style={{ width:60, height:1, background:'linear-gradient(90deg,transparent,#7C3AED,transparent)', margin:'20px auto 0' }} />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:16 }}>
            {AGENTS.map(a => (
              <div key={a.name} className="ai-card" style={{ borderRadius:20, padding:24 }}>
                <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:14 }}>
                  <div className="ai-agent-pulse" style={{ width:44, height:44, borderRadius:12, background:`linear-gradient(135deg,${a.color}30,${a.color}10)`, border:`1px solid ${a.color}40`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <div style={{ width:10, height:10, borderRadius:'50%', background:a.color, boxShadow:`0 0 10px ${a.color}` }} />
                  </div>
                  <div>
                    <div className="ai-display" style={{ fontSize:20, lineHeight:1, color:'#fff' }}>{a.name}</div>
                    <div className="ai-tag" style={{ color:'rgba(167,139,250,0.6)', fontSize:9, marginTop:3 }}>{a.role}</div>
                  </div>
                </div>
                <p style={{ color:'rgba(255,255,255,0.38)', fontSize:13, lineHeight:1.65, fontWeight:300 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING */}
      <section style={{ padding:'80px 32px 130px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <span className="ai-tag" style={{ color:'#7C3AED', display:'block', marginBottom:14 }}>Investment</span>
            <h2 className="ai-display" style={{ fontSize:'clamp(44px,6vw,70px)', lineHeight:0.9 }}>SIMPLE <span style={{ color:'#7C3AED' }}>PRICING.</span></h2>
            <div style={{ width:60, height:1, background:'linear-gradient(90deg,transparent,#7C3AED,transparent)', margin:'20px auto 0' }} />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:18 }}>
            {TIERS.map(t => (
              <div key={t.name} style={{ borderRadius:24, padding:32, position:'relative', overflow:'hidden', background: t.featured ? 'linear-gradient(135deg,rgba(124,58,237,0.14),rgba(99,102,241,0.06))' : 'linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))', border: t.featured ? '1px solid rgba(124,58,237,0.4)' : '1px solid rgba(255,255,255,0.07)', boxShadow: t.featured ? '0 0 60px rgba(124,58,237,0.15)' : 'none', transition:'all 0.4s' }}>
                {t.featured && <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:'linear-gradient(90deg,transparent,#7C3AED,#A78BFA,transparent)' }} />}
                {t.featured && <div className="ai-tag" style={{ background:'rgba(124,58,237,0.9)', color:'#fff', padding:'5px 14px', borderRadius:100, fontSize:8, position:'absolute', top:20, right:20 }}>MOST POPULAR</div>}
                <div className="ai-tag" style={{ color:'rgba(167,139,250,0.5)', display:'block', marginBottom:12 }}>{t.name}</div>
                <div style={{ display:'flex', alignItems:'baseline', gap:4, marginBottom:24 }}>
                  <span className="ai-display" style={{ fontSize:52, color:'#fff', lineHeight:1 }}>{t.price}</span>
                  <span style={{ color:'rgba(255,255,255,0.3)', fontSize:14 }}>{t.per}</span>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:28 }}>
                  {t.features.map(f => (
                    <div key={f} style={{ display:'flex', alignItems:'center', gap:10 }}>
                      <div style={{ width:16, height:16, borderRadius:'50%', background:`linear-gradient(135deg,${t.color},${t.color}80)`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:9, flexShrink:0 }}>✓</div>
                      <span style={{ color:'rgba(255,255,255,0.55)', fontSize:13 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <button style={{ width:'100%', padding:'14px', borderRadius:14, border:'none', cursor:'pointer', fontWeight:900, fontSize:14, fontFamily:"'DM Sans',sans-serif", background: t.featured ? 'linear-gradient(135deg,#7C3AED,#4F46E5)' : 'rgba(124,58,237,0.1)', color: t.featured ? '#fff' : '#A78BFA', border: t.featured ? 'none' : '1px solid rgba(124,58,237,0.3)', boxShadow: t.featured ? '0 4px 24px rgba(124,58,237,0.4)' : 'none', transition:'all 0.3s' }}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
