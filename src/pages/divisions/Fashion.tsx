import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const PIECES = [
  { name:'The Harlem Coat', desc:'Limited edition structured overcoat. Inspired by the power and elegance of the Harlem Renaissance.', tag:'OUTERWEAR · LIMITED' },
  { name:'Renaissance Blazer', desc:'Tailored perfection. Every stitch a tribute to the artists, thinkers, and visionaries of the movement.', tag:'TAILORING · SIGNATURE' },
  { name:'GiFTD Tee Series', desc:'The foundation of the line. Clean, premium, unmistakably intentional. For those who move different.', tag:'ESSENTIALS · ONGOING' },
  { name:'PrVLGD Accessories', desc:'Statement pieces that speak before you do. Handcrafted with the same attention the Renaissance demanded.', tag:'ACCESSORIES · SEASONAL' },
];
export default function FashionPage() {
  const [mouse, setMouse] = useState({ x:0.5, y:0.5 });
  const [tick, setTick] = useState(0);
  useEffect(()=>{const h=(e:MouseEvent)=>setMouse({x:e.clientX/window.innerWidth,y:e.clientY/window.innerHeight});window.addEventListener('mousemove',h);return()=>window.removeEventListener('mousemove',h);},[]);
  useEffect(()=>{const id=setInterval(()=>setTick(t=>t+1),50);return()=>clearInterval(id);},[]);
  return (
    <div style={{minHeight:'100vh',background:'#020202',color:'#fff',overflowX:'hidden',fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;700;900&family=DM+Mono:wght@400;500&family=Cormorant+Garamond:wght@300;400;600&display=swap');
        *{box-sizing:border-box}
        @keyframes fa-o1{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-40px)}}
        @keyframes fa-o2{0%,100%{transform:translate(0,0)}50%{transform:translate(-50px,30px)}}
        @keyframes fa-shimmer{0%{background-position:-400% center}100%{background-position:400% center}}
        @keyframes fa-up{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fa-float{0%,100%{transform:translateY(0) perspective(900px) rotateX(2deg) rotateY(1deg)}50%{transform:translateY(-12px) perspective(900px) rotateX(1deg) rotateY(2deg)}}
        .fa-orb{position:absolute;border-radius:50%;pointer-events:none}
        .fa-glass{background:rgba(255,255,255,0.025);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,0.07)}
        .fa-glass-warm{background:linear-gradient(135deg,rgba(212,175,112,0.08),rgba(212,175,112,0.02));backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);border:1px solid rgba(212,175,112,0.16)}
        .fa-card{background:linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01));backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.07);transition:all 0.4s cubic-bezier(0.23,1,0.32,1)}
        .fa-card:hover{border-color:rgba(212,175,112,0.4);transform:translateY(-8px);box-shadow:0 32px 80px rgba(212,175,112,0.1)}
        .fa-shimmer{background:linear-gradient(90deg,rgba(255,255,255,0.7) 15%,#D4AF70 40%,#F5D98B 55%,rgba(255,255,255,0.7) 85%);background-size:400% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:fa-shimmer 5s linear infinite}
        .fa-tag{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.2em;text-transform:uppercase}
        .fa-display{font-family:'Bebas Neue',sans-serif}
        .fa-serif{font-family:'Cormorant Garamond',serif}
        .fa-grid{background-image:radial-gradient(rgba(212,175,112,0.045) 1px,transparent 1px);background-size:40px 40px}
        .fa-up{animation:fa-up 0.8s cubic-bezier(0.23,1,0.32,1) both}
        .fa-float{animation:fa-float 7s ease-in-out infinite}
      `}</style>
      <Navbar />
      <section style={{position:'relative',minHeight:'100vh',display:'flex',alignItems:'center',overflow:'hidden',paddingTop:80}}>
        <div className="fa-orb" style={{width:700,height:700,background:'radial-gradient(circle,rgba(212,175,112,0.12) 0%,transparent 70%)',top:-200,right:-100,animation:'fa-o1 20s ease-in-out infinite'}} />
        <div className="fa-orb" style={{width:500,height:500,background:'radial-gradient(circle,rgba(139,69,19,0.08) 0%,transparent 70%)',bottom:-100,left:-200,animation:'fa-o2 16s ease-in-out infinite'}} />
        <div className="fa-grid" style={{position:'absolute',inset:0}} />
        <div style={{position:'absolute',inset:0,pointerEvents:'none',background:`radial-gradient(700px circle at ${mouse.x*100}% ${mouse.y*100}%, rgba(212,175,112,0.06), transparent 60%)`}} />
        <div style={{position:'relative',zIndex:10,maxWidth:1200,width:'100%',margin:'0 auto',padding:'0 32px'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 400px',gap:60,alignItems:'center'}}>
            <div className="fa-up">
              <Link to="/" style={{display:'inline-flex',alignItems:'center',gap:8,color:'rgba(255,255,255,0.28)',textDecoration:'none',marginBottom:40,fontSize:13}}>← Back to Red Vision</Link>
              <div className="fa-glass" style={{display:'inline-flex',alignItems:'center',gap:10,borderRadius:100,padding:'9px 20px',marginBottom:28}}>
                <div style={{width:6,height:6,borderRadius:'50%',background:'#D4AF70'}} />
                <span className="fa-tag" style={{color:'#D4AF70'}}>Luxury Fashion · Harlem Renaissance Edition</span>
              </div>
              <h1 className="fa-display" style={{lineHeight:0.85,marginBottom:10}}>
                <span className="fa-shimmer" style={{display:'block',fontSize:'clamp(52px,8vw,96px)'}}>GiFTD N'</span>
                <span className="fa-shimmer" style={{display:'block',fontSize:'clamp(52px,8vw,96px)'}}>PrVLGD</span>
              </h1>
              <p className="fa-serif" style={{color:'rgba(212,175,112,0.7)',fontSize:20,fontStyle:'italic',marginBottom:14,letterSpacing:'0.02em'}}>Harlem Renaissance Edition</p>
              <p style={{color:'rgba(255,255,255,0.38)',fontSize:15,lineHeight:1.85,maxWidth:460,marginBottom:40,fontWeight:300}}>A luxury fashion label born from the spirit of the Harlem Renaissance — where art, culture, and identity became the most powerful statement anyone could make. GiFTD N' PrVLGD is for those who carry that same fire.</p>
              <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
                <button style={{display:'inline-flex',alignItems:'center',gap:10,padding:'14px 32px',borderRadius:100,background:'linear-gradient(135deg,#D4AF70,#A07D40)',color:'#000',fontWeight:900,fontSize:14,border:'none',cursor:'pointer',boxShadow:'0 6px 36px rgba(212,175,112,0.35)',fontFamily:"'DM Sans',sans-serif"}}>Shop the Collection</button>
                <button style={{display:'inline-flex',alignItems:'center',gap:10,padding:'14px 32px',borderRadius:100,background:'rgba(212,175,112,0.07)',color:'#D4AF70',fontWeight:700,fontSize:14,border:'1px solid rgba(212,175,112,0.22)',cursor:'pointer',fontFamily:"'DM Sans',sans-serif"}}>Our Story</button>
              </div>
            </div>
            <div className="fa-up" style={{animationDelay:'0.2s',position:'relative'}}>
              <div style={{position:'absolute',inset:-24,background:'radial-gradient(ellipse,rgba(212,175,112,0.16) 0%,transparent 70%)',borderRadius:40,filter:'blur(20px)',pointerEvents:'none'}} />
              <div className="fa-glass-warm fa-float" style={{borderRadius:32,padding:40,position:'relative',overflow:'hidden'}}>
                <div style={{position:'absolute',top:0,left:0,right:0,height:1,background:'linear-gradient(90deg,transparent,rgba(212,175,112,0.3),transparent)'}} />
                <div style={{position:'absolute',top:0,left:0,bottom:0,width:1,background:'linear-gradient(180deg,rgba(212,175,112,0.15),transparent)'}} />
                <div style={{textAlign:'center',marginBottom:28}}>
                  <div className="fa-display" style={{fontSize:52,lineHeight:0.9,marginBottom:8}}>
                    <span style={{background:'linear-gradient(135deg,#D4AF70,#F5D98B)',WebkitBackgroundClip:'text',backgroundClip:'text',WebkitTextFillColor:'transparent'}}>GN'P</span>
                  </div>
                  <div className="fa-tag" style={{color:'rgba(212,175,112,0.5)',fontSize:9,letterSpacing:'0.3em'}}>HARLEM RENAISSANCE EDITION</div>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:24}}>
                  {['Luxury','Limited','Heritage','Culture'].map(l=>(<div key={l} style={{background:'rgba(212,175,112,0.07)',border:'1px solid rgba(212,175,112,0.14)',borderRadius:12,padding:'14px',textAlign:'center'}}><div className="fa-tag" style={{color:'rgba(212,175,112,0.6)',fontSize:8}}>{l}</div></div>))}
                </div>
                <div style={{borderTop:'1px solid rgba(212,175,112,0.1)',paddingTop:20,textAlign:'center'}}>
                  <div className="fa-serif" style={{color:'rgba(212,175,112,0.5)',fontSize:14,fontStyle:'italic',letterSpacing:'0.04em'}}>"Not for everyone. For the right ones."</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{padding:'110px 32px 130px',position:'relative'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:56}}>
            <span className="fa-tag" style={{color:'#D4AF70',display:'block',marginBottom:14}}>The Collection</span>
            <h2 className="fa-display" style={{fontSize:'clamp(48px,7vw,76px)',lineHeight:0.9}}>THE <span style={{color:'#D4AF70'}}>PIECES.</span></h2>
            <div style={{width:60,height:1,background:'linear-gradient(90deg,transparent,#D4AF70,transparent)',margin:'20px auto 0'}} />
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:18}}>
            {PIECES.map(p=>(<div key={p.name} className="fa-card" style={{borderRadius:22,padding:28}}>
              <div style={{height:2,background:'linear-gradient(90deg,#D4AF70,transparent)',borderRadius:100,marginBottom:20}} />
              <span className="fa-tag" style={{color:'rgba(212,175,112,0.5)',fontSize:9,display:'block',marginBottom:12}}>{p.tag}</span>
              <h3 style={{fontWeight:900,fontSize:20,marginBottom:10,lineHeight:1.2}}>{p.name}</h3>
              <p style={{color:'rgba(255,255,255,0.38)',fontSize:13,lineHeight:1.7,fontWeight:300}}>{p.desc}</p>
            </div>))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
