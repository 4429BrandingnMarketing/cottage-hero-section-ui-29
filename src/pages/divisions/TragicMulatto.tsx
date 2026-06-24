import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FEATURES = [
  { tag: 'SATIRE', title: 'The Uncomfortable Truth', desc: 'We say what the industry is afraid to say. Through satire, we expose the absurdity of race, culture, and power in modern entertainment.' },
  { tag: 'CULTURE', title: 'Where Comedy Meets Commentary', desc: 'Every piece is a mirror held up to the industry. If you laugh, you recognized something real.' },
  { tag: 'IDENTITY', title: 'The Name Says Everything', desc: 'A Tragic Mulatto is not an insult. It is an archetype reclaimed — the one who exists between worlds and belongs to none. Sound familiar?' },
  { tag: 'PUBLICATION', title: 'Independent. Always.', desc: 'No editorial board. No advertiser pressure. No corporate agenda. Just the pen, the truth, and the nerve to put it in print.' },
];

const ISSUES = [
  { num: 'VOL 01', title: 'The Algorithm Ate My Soul', sub: 'How streaming platforms turned art into content and artists into product managers.' },
  { num: 'VOL 02', title: 'AI Didn\'t Take Your Job', sub: 'You gave it away. A satire on creative complacency in the age of generative everything.' },
  { num: 'VOL 03', title: 'The Diversity Hire', sub: 'Congratulations. You\'ve been invited to the table. Now perform.' },
];

export default function TragicMulattoPage() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const h = (e: MouseEvent) => setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);

  return (
    <div style={{ minHeight:'100vh', background:'#020202', color:'#fff', overflowX:'hidden', fontFamily:"'DM Sans',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;700;900&family=DM+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        *{box-sizing:border-box}
        @keyframes tm-o1{0%,100%{transform:translate(0,0)}50%{transform:translate(40px,-20px)}}
        @keyframes tm-shimmer{0%{background-position:-400% center}100%{background-position:400% center}}
        @keyframes tm-up{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}
        @keyframes tm-flicker{0%,100%{opacity:1}92%{opacity:1}93%{opacity:0.4}94%{opacity:1}96%{opacity:0.3}97%{opacity:1}}
        .tm-orb{position:absolute;border-radius:50%;pointer-events:none}
        .tm-glass{background:rgba(255,255,255,0.025);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,0.07)}
        .tm-glass-w{background:linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01));backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);border:1px solid rgba(255,255,255,0.12)}
        .tm-card{background:linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01));backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.07);transition:all 0.4s cubic-bezier(0.23,1,0.32,1)}
        .tm-card:hover{border-color:rgba(255,255,255,0.25);transform:translateY(-6px);box-shadow:0 28px 70px rgba(255,255,255,0.04)}
        .tm-shimmer{background:linear-gradient(90deg,rgba(255,255,255,0.5) 10%,#fff 40%,rgba(180,180,180,0.9) 55%,#fff 80%);background-size:400% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:tm-shimmer 6s linear infinite}
        .tm-tag{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.2em;text-transform:uppercase}
        .tm-display{font-family:'Bebas Neue',sans-serif}
        .tm-editorial{font-family:'Playfair Display',serif}
        .tm-grid{background-image:radial-gradient(rgba(255,255,255,0.03) 1px,transparent 1px);background-size:38px 38px}
        .tm-up{animation:tm-up 0.7s cubic-bezier(0.23,1,0.32,1) both}
        .tm-flicker{animation:tm-flicker 8s ease-in-out infinite}
      `}</style>
      <Navbar />

      <section style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', overflow:'hidden', paddingTop:80 }}>
        <div className="tm-orb" style={{ width:600, height:600, background:'radial-gradient(circle,rgba(255,255,255,0.05) 0%,transparent 70%)', top:-150, right:-150, animation:'tm-o1 20s ease-in-out infinite' }} />
        <div className="tm-orb" style={{ width:400, height:400, background:'radial-gradient(circle,rgba(255,200,0,0.04) 0%,transparent 70%)', bottom:-80, left:-100, animation:'tm-o1 14s ease-in-out infinite 3s' }} />
        <div className="tm-grid" style={{ position:'absolute', inset:0 }} />
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', background:`radial-gradient(600px circle at ${mouse.x*100}% ${mouse.y*100}%, rgba(255,255,255,0.03), transparent 60%)` }} />

        <div style={{ position:'relative', zIndex:10, maxWidth:1200, width:'100%', margin:'0 auto', padding:'0 32px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 400px', gap:60, alignItems:'center' }}>

            <div className="tm-up">
              <Link to="/" style={{ display:'inline-flex', alignItems:'center', gap:8, color:'rgba(255,255,255,0.28)', textDecoration:'none', marginBottom:40, fontSize:13 }}>← Back to Red Vision</Link>
              <div className="tm-glass" style={{ display:'inline-flex', alignItems:'center', gap:10, borderRadius:100, padding:'9px 20px', marginBottom:28 }}>
                <div style={{ width:6, height:6, borderRadius:'50%', background:'#fff' }} />
                <span className="tm-tag" style={{ color:'rgba(255,255,255,0.6)' }}>Satirical Publication · Independent</span>
              </div>
              <h1 className="tm-display" style={{ lineHeight:0.85, marginBottom:22 }}>
                <span style={{ display:'block', fontFamily:"'DM Mono',monospace", fontSize:12, letterSpacing:'0.5em', color:'rgba(255,255,255,0.18)', marginBottom:10 }}>RED VISION PRESENTS</span>
                <span className="tm-shimmer" style={{ display:'block', fontSize:'clamp(44px,6.5vw,86px)' }}>A TRAGIC</span>
                <span className="tm-shimmer" style={{ display:'block', fontSize:'clamp(44px,6.5vw,86px)' }}>MULATTO</span>
              </h1>
              <p className="tm-editorial" style={{ color:'rgba(255,255,255,0.45)', fontSize:18, fontStyle:'italic', lineHeight:1.75, maxWidth:480, marginBottom:40, fontWeight:400 }}>
                "The satirical publication for people who laugh because the alternative is burning everything down."
              </p>
              <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
                <button style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'14px 32px', borderRadius:100, background:'rgba(255,255,255,0.9)', color:'#000', fontWeight:900, fontSize:14, border:'none', cursor:'pointer', fontFamily:"'DM Sans',sans-serif", letterSpacing:'0.04em' }}>
                  Read the Latest Issue
                </button>
                <button style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'14px 32px', borderRadius:100, background:'transparent', color:'rgba(255,255,255,0.6)', fontWeight:700, fontSize:14, border:'1px solid rgba(255,255,255,0.15)', cursor:'pointer', fontFamily:"'DM Sans',sans-serif" }}>
                  Subscribe
                </button>
              </div>
            </div>

            <div className="tm-up tm-flicker" style={{ animationDelay:'0.2s', position:'relative' }}>
              <div style={{ position:'absolute', inset:-16, background:'radial-gradient(ellipse,rgba(255,255,255,0.07) 0%,transparent 70%)', borderRadius:36, filter:'blur(16px)', pointerEvents:'none' }} />
              <div className="tm-glass-w" style={{ borderRadius:28, overflow:'hidden', position:'relative', transform:'perspective(900px) rotateX(2deg) rotateY(-1deg)' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)' }} />
                <div style={{ background:'rgba(0,0,0,0.3)', padding:'32px 28px', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
                  <div className="tm-tag" style={{ color:'rgba(255,255,255,0.25)', fontSize:9, display:'block', marginBottom:12, textAlign:'center' }}>A TRAGIC MULATTO · VOLUME III</div>
                  <div className="tm-editorial" style={{ fontSize:22, fontWeight:700, lineHeight:1.2, textAlign:'center', marginBottom:8 }}>THE DIVERSITY HIRE</div>
                  <div className="tm-editorial" style={{ fontSize:13, fontStyle:'italic', color:'rgba(255,255,255,0.4)', textAlign:'center' }}>A Satirical Essay on Progress That Isn't</div>
                </div>
                <div style={{ padding:'24px 28px', display:'flex', flexDirection:'column', gap:12 }}>
                  {['Culture & Identity','Industry Satire','Race & Power','The Entertainment Complex'].map(t => (
                    <div key={t} style={{ display:'flex', alignItems:'center', gap:10, paddingBottom:12, borderBottom:'1px solid rgba(255,255,255,0.04)' }}>
                      <div style={{ width:3, height:3, borderRadius:'50%', background:'rgba(255,255,255,0.3)', flexShrink:0 }} />
                      <span style={{ color:'rgba(255,255,255,0.45)', fontSize:12, fontWeight:300 }}>{t}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding:'14px 28px 20px', textAlign:'center' }}>
                  <span className="tm-tag" style={{ color:'rgba(255,255,255,0.2)', fontSize:9 }}>SUBSCRIBE TO READ IN FULL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding:'100px 32px 130px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <span className="tm-tag" style={{ color:'rgba(255,255,255,0.35)', display:'block', marginBottom:14 }}>The Archive</span>
            <h2 className="tm-display" style={{ fontSize:'clamp(44px,6vw,70px)', lineHeight:0.9 }}>RECENT <span style={{ color:'rgba(255,255,255,0.6)' }}>ISSUES.</span></h2>
            <div style={{ width:60, height:1, background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)', margin:'20px auto 0' }} />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:18 }}>
            {ISSUES.map(issue => (
              <div key={issue.num} className="tm-card" style={{ borderRadius:22, padding:30 }}>
                <div style={{ height:1, background:'linear-gradient(90deg,rgba(255,255,255,0.2),transparent)', marginBottom:22 }} />
                <span className="tm-tag" style={{ color:'rgba(255,255,255,0.25)', fontSize:9, display:'block', marginBottom:14 }}>{issue.num}</span>
                <h3 className="tm-editorial" style={{ fontWeight:700, fontSize:22, marginBottom:10, lineHeight:1.2 }}>{issue.title}</h3>
                <p style={{ color:'rgba(255,255,255,0.35)', fontSize:13, lineHeight:1.7, fontWeight:300 }}>{issue.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
