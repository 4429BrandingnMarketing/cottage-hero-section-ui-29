import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const SHOWS = [
  { title:'Red Vision Uncut', genre:'Documentary Series', desc:'Behind the scenes of building a music empire with AI. No filter, no script — the real story of what it takes.', status:'COMING SOON' },
  { title:'The Frequency', genre:'Music Talk Show', desc:'Deep conversations with the artists, producers, and executives shaping the future of the music industry.', status:'IN DEVELOPMENT' },
  { title:'AI & The Artist', genre:'Tech Documentary', desc:'Exploring how artificial intelligence is reshaping creativity, ownership, and the business of music.', status:'IN DEVELOPMENT' },
  { title:'From The Block', genre:'Artist Origin Stories', desc:'Raw, uncut stories from artists who built something from nothing — on their own terms.', status:'COMING SOON' },
];
export default function TVPage() {
  const [mouse, setMouse] = useState({ x:0.5, y:0.5 });
  useEffect(() => { const h=(e:MouseEvent)=>setMouse({x:e.clientX/window.innerWidth,y:e.clientY/window.innerHeight}); window.addEventListener('mousemove',h); return()=>window.removeEventListener('mousemove',h); },[]);
  return (
    <div style={{minHeight:'100vh',background:'#020202',color:'#fff',overflowX:'hidden',fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;700;900&family=DM+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box}
        @keyframes tv-o1{0%,100%{transform:translate(0,0)}50%{transform:translate(-40px,30px)}}
        @keyframes tv-o2{0%,100%{transform:translate(0,0)}50%{transform:translate(50px,-40px)}}
        @keyframes tv-shimmer{0%{background-position:-400% center}100%{background-position:400% center}}
        @keyframes tv-scan{0%{transform:translateY(-100%)}100%{transform:translateY(200vh)}}
        @keyframes tv-up{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}
        @keyframes tv-blink{0%,100%{opacity:1}50%{opacity:0.3}}
        .tv-orb{position:absolute;border-radius:50%;pointer-events:none}
        .tv-glass{background:rgba(255,255,255,0.025);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,0.07)}
        .tv-glass-red{background:linear-gradient(135deg,rgba(229,25,42,0.08),rgba(229,25,42,0.02));backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);border:1px solid rgba(229,25,42,0.18)}
        .tv-card{background:linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01));backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.07);transition:all 0.4s cubic-bezier(0.23,1,0.32,1)}
        .tv-card:hover{border-color:rgba(229,25,42,0.4);transform:translateY(-6px);box-shadow:0 28px 70px rgba(229,25,42,0.1)}
        .tv-shimmer{background:linear-gradient(90deg,rgba(255,255,255,0.85) 20%,#E5192A 45%,#FF6B7A 55%,rgba(255,255,255,0.85) 80%);background-size:400% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:tv-shimmer 4s linear infinite}
        .tv-tag{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.2em;text-transform:uppercase}
        .tv-display{font-family:'Bebas Neue',sans-serif}
        .tv-grid{background-image:radial-gradient(rgba(229,25,42,0.05) 1px,transparent 1px);background-size:38px 38px}
        .tv-up{animation:tv-up 0.7s cubic-bezier(0.23,1,0.32,1) both}
        .tv-blink{animation:tv-blink 2s ease-in-out infinite}
      `}</style>
      <Navbar />
      <section style={{position:'relative',minHeight:'100vh',display:'flex',alignItems:'center',overflow:'hidden',paddingTop:80}}>
        <div className="tv-orb" style={{width:800,height:800,background:'radial-gradient(circle,rgba(229,25,42,0.14) 0%,transparent 70%)',top:-300,left:-300,animation:'tv-o1 18s ease-in-out infinite'}} />
        <div className="tv-orb" style={{width:500,height:500,background:'radial-gradient(circle,rgba(229,25,42,0.10) 0%,transparent 70%)',bottom:-100,right:-150,animation:'tv-o2 14s ease-in-out infinite'}} />
        <div className="tv-grid" style={{position:'absolute',inset:0}} />
        <div style={{position:'absolute',inset:0,pointerEvents:'none',background:`radial-gradient(700px circle at ${mouse.x*100}% ${mouse.y*100}%, rgba(229,25,42,0.07), transparent 60%)`}} />
        <div style={{position:'absolute',left:0,right:0,height:1,background:'linear-gradient(90deg,transparent,rgba(229,25,42,0.3),transparent)',animation:'tv-scan 6s linear infinite',pointerEvents:'none'}} />
        <div style={{position:'relative',zIndex:10,maxWidth:1200,width:'100%',margin:'0 auto',padding:'0 32px'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 440px',gap:60,alignItems:'center'}}>
            <div className="tv-up">
              <Link to="/" style={{display:'inline-flex',alignItems:'center',gap:8,color:'rgba(255,255,255,0.28)',textDecoration:'none',marginBottom:40,fontSize:13}}>← Back to Red Vision</Link>
              <div className="tv-glass" style={{display:'inline-flex',alignItems:'center',gap:10,borderRadius:100,padding:'9px 20px',marginBottom:28}}>
                <div className="tv-blink" style={{width:6,height:6,borderRadius:'50%',background:'#E5192A'}} />
                <span className="tv-tag" style={{color:'#E5192A'}}>Original Programming · Independent</span>
              </div>
              <h1 className="tv-display" style={{lineHeight:0.88,marginBottom:22}}>
                <span style={{display:'block',fontFamily:"'DM Mono',monospace",fontSize:13,letterSpacing:'0.5em',color:'rgba(255,255,255,0.18)',marginBottom:10}}>RED VISION</span>
                <span className="tv-shimmer" style={{display:'block',fontSize:'clamp(72px,10vw,116px)'}}>TV</span>
              </h1>
              <p style={{color:'rgba(255,255,255,0.38)',fontSize:16,lineHeight:1.8,maxWidth:480,marginBottom:40,fontWeight:300}}>Original content built for the culture. Documentaries, talk shows, and storytelling that the mainstream won't touch. Real stories. Real people. Real impact.</p>
              <button style={{display:'inline-flex',alignItems:'center',gap:10,padding:'14px 32px',borderRadius:100,background:'linear-gradient(135deg,#E5192A,#A01020)',color:'#fff',fontWeight:900,fontSize:14,border:'none',cursor:'pointer',boxShadow:'0 6px 36px rgba(229,25,42,0.4)',fontFamily:"'DM Sans',sans-serif"}}>▶ Watch Trailers</button>
            </div>
            <div className="tv-up" style={{animationDelay:'0.2s',position:'relative'}}>
              <div style={{position:'absolute',inset:-20,background:'radial-gradient(ellipse,rgba(229,25,42,0.2) 0%,transparent 70%)',borderRadius:36,filter:'blur(18px)',pointerEvents:'none'}} />
              <div className="tv-glass-red" style={{borderRadius:28,padding:32,position:'relative',overflow:'hidden',transform:'perspective(800px) rotateX(2deg) rotateY(-1deg)'}}>
                <div style={{position:'absolute',top:0,left:0,right:0,height:1,background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)'}} />
                <div style={{aspectRatio:'16/9',borderRadius:16,background:'linear-gradient(135deg,#0d0000,#1a0005)',border:'1px solid rgba(229,25,42,0.15)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:20,position:'relative',overflow:'hidden'}}>
                  <div style={{position:'absolute',inset:0,background:'repeating-linear-gradient(0deg,rgba(255,255,255,0.015) 0px,rgba(255,255,255,0.015) 1px,transparent 1px,transparent 4px)'}} />
                  <div style={{width:60,height:60,borderRadius:'50%',background:'rgba(229,25,42,0.15)',border:'1px solid rgba(229,25,42,0.3)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:24}}>▶</div>
                  <div className="tv-tag" style={{position:'absolute',top:14,left:14,background:'rgba(229,25,42,0.9)',color:'#fff',padding:'5px 12px',borderRadius:6,fontSize:9}}>ORIGINAL SERIES</div>
                </div>
                <div style={{fontWeight:900,fontSize:16,marginBottom:6}}>Red Vision Uncut</div>
                <div className="tv-tag" style={{color:'rgba(255,255,255,0.3)',fontSize:9,marginBottom:14}}>Documentary · Coming Soon</div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
                  {['Original','Unfiltered','Culture','AI-Focused'].map(l=>(<div key={l} style={{background:'rgba(229,25,42,0.07)',border:'1px solid rgba(229,25,42,0.14)',borderRadius:8,padding:'8px 10px',display:'flex',alignItems:'center',gap:6}}><div style={{width:4,height:4,borderRadius:'50%',background:'#E5192A',flexShrink:0}} /><span className="tv-tag" style={{color:'rgba(255,255,255,0.5)',fontSize:8}}>{l}</span></div>))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{padding:'110px 32px 130px',position:'relative'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:56}}>
            <span className="tv-tag" style={{color:'#E5192A',display:'block',marginBottom:14}}>Programming</span>
            <h2 className="tv-display" style={{fontSize:'clamp(48px,7vw,76px)',lineHeight:0.9}}>THE <span style={{color:'#E5192A'}}>LINEUP.</span></h2>
            <div style={{width:60,height:1,background:'linear-gradient(90deg,transparent,#E5192A,transparent)',margin:'20px auto 0'}} />
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:18}}>
            {SHOWS.map(s=>(<div key={s.title} className="tv-card" style={{borderRadius:22,padding:28}}>
              <div style={{height:2,background:'linear-gradient(90deg,#E5192A,transparent)',borderRadius:100,marginBottom:20}} />
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:12}}>
                <span className="tv-tag" style={{color:'rgba(255,255,255,0.3)',fontSize:9}}>{s.genre}</span>
                <span className="tv-tag" style={{background:'rgba(229,25,42,0.1)',color:'#E5192A',border:'1px solid rgba(229,25,42,0.2)',padding:'4px 10px',borderRadius:100,fontSize:8}}>{s.status}</span>
              </div>
              <h3 style={{fontWeight:900,fontSize:19,marginBottom:10,lineHeight:1.2}}>{s.title}</h3>
              <p style={{color:'rgba(255,255,255,0.38)',fontSize:13,lineHeight:1.65,fontWeight:300}}>{s.desc}</p>
            </div>))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
