import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ARTISTS = [
  { name: 'James Fauntleroy', role: 'Grammy-Winning Songwriter', credits: 'Bruno Mars · Timberlake · Rihanna · Beyoncé', spot: 'https://open.spotify.com/artist/4W6JxFwlNdPJRNf9B5156w' },
  { name: 'My Guy Mars', role: 'Diamond-Selling Producer', credits: 'Multi-Grammy Nominated · Platinum Records', spot: '' },
  { name: 'Ryan Toby', role: 'City High · Multi-Platinum Artist', credits: "Grammy-Nominated · 'What Would You Do?' Legacy", spot: 'https://open.spotify.com/artist/2UazAtjfzqBF0Nho2awK4z' },
  { name: "1500 or Nothin'", role: 'Legendary Production House', credits: 'Co-founded with Jay-Z · Lupe Fiasco Debut', spot: '' },
  { name: 'King Fatz', role: 'Independent Artist', credits: 'Red Vision Music · AI-Powered Release Strategy', spot: '' },
  { name: 'TRUZY', role: 'Singer · Songwriter', credits: 'Red Vision Music Roster', spot: '' },
  { name: 'Oscar Lee', role: 'Emerging Artist', credits: 'Red Vision Music Roster', spot: '' },
];

export default function MusicPage() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const h = (e: MouseEvent) => setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);
  useEffect(() => { const id = setInterval(() => setTick(t => t + 1), 70); return () => clearInterval(id); }, []);
  const wave = (i: number) => { const t = Date.now() / 1000; return 10 + Math.abs(Math.sin(t * 0.9 + i * 0.55)) * 55 + Math.abs(Math.sin(t * 1.4 + i * 0.3)) * 20; };

  return (
    <div style={{ minHeight:'100vh', background:'#020202', color:'#fff', overflowX:'hidden', fontFamily:"'DM Sans',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;700;900&family=DM+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:#1a1200;border-radius:2px}
        @keyframes mu-o1{0%,100%{transform:translate(0,0)}50%{transform:translate(50px,-30px)}}
        @keyframes mu-o2{0%,100%{transform:translate(0,0)}50%{transform:translate(-40px,50px)}}
        @keyframes mu-shimmer{0%{background-position:-400% center}100%{background-position:400% center}}
        @keyframes mu-scan{0%{transform:translateY(-100%)}100%{transform:translateY(200vh)}}
        @keyframes mu-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes mu-up{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
        .mu-orb{position:absolute;border-radius:50%;pointer-events:none}
        .mu-glass{background:rgba(255,255,255,0.025);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,0.07)}
        .mu-glass-gold{background:linear-gradient(135deg,rgba(201,168,76,0.09),rgba(201,168,76,0.02));backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);border:1px solid rgba(201,168,76,0.18)}
        .mu-card{background:linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01));backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.07);transition:all 0.4s cubic-bezier(0.23,1,0.32,1)}
        .mu-card:hover{border-color:rgba(201,168,76,0.45);transform:translateY(-8px);box-shadow:0 32px 80px rgba(201,168,76,0.12)}
        .mu-shimmer{background:linear-gradient(90deg,rgba(255,255,255,0.85) 20%,#C9A84C 45%,#FFD87A 55%,rgba(255,255,255,0.85) 80%);background-size:400% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:mu-shimmer 4s linear infinite}
        .mu-tag{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.2em;text-transform:uppercase}
        .mu-display{font-family:'Bebas Neue',sans-serif}
        .mu-grid{background-image:radial-gradient(rgba(201,168,76,0.055) 1px,transparent 1px);background-size:38px 38px}
        .mu-up{animation:mu-up 0.7s cubic-bezier(0.23,1,0.32,1) both}
        .mu-record{animation:mu-spin 8s linear infinite}.mu-record:hover{animation-play-state:paused}
      `}</style>
      <Navbar />
      <section style={{position:'relative',minHeight:'100vh',display:'flex',alignItems:'center',overflow:'hidden',paddingTop:80}}>
        <div className="mu-orb" style={{width:700,height:700,background:'radial-gradient(circle,rgba(201,168,76,0.16) 0%,transparent 70%)',top:-200,right:-200,animation:'mu-o1 16s ease-in-out infinite'}} />
        <div className="mu-orb" style={{width:500,height:500,background:'radial-gradient(circle,rgba(201,168,76,0.10) 0%,transparent 70%)',bottom:-100,left:-150,animation:'mu-o2 20s ease-in-out infinite'}} />
        <div className="mu-grid" style={{position:'absolute',inset:0}} />
        <div style={{position:'absolute',inset:0,pointerEvents:'none',background:`radial-gradient(700px circle at ${mouse.x*100}% ${mouse.y*100}%, rgba(201,168,76,0.07), transparent 60%)`}} />
        <div style={{position:'absolute',left:0,right:0,height:1,background:'linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)',animation:'mu-scan 5s linear infinite',pointerEvents:'none'}} />
        <div style={{position:'relative',zIndex:10,maxWidth:1200,width:'100%',margin:'0 auto',padding:'0 32px'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 420px',gap:60,alignItems:'center'}}>
            <div className="mu-up">
              <Link to="/" style={{display:'inline-flex',alignItems:'center',gap:8,color:'rgba(255,255,255,0.28)',textDecoration:'none',marginBottom:40,fontSize:13}}>← Back to Red Vision</Link>
              <div className="mu-glass" style={{display:'inline-flex',alignItems:'center',gap:10,borderRadius:100,padding:'9px 20px',marginBottom:28}}>
                <div style={{width:6,height:6,borderRadius:'50%',background:'#C9A84C'}} />
                <span className="mu-tag" style={{color:'#C9A84C'}}>Grammy-Affiliated · Independent Label</span>
              </div>
              <h1 className="mu-display" style={{lineHeight:0.88,marginBottom:22}}>
                <span style={{display:'block',fontFamily:"'DM Mono',monospace",fontSize:13,letterSpacing:'0.5em',color:'rgba(255,255,255,0.18)',marginBottom:10}}>RED VISION</span>
                <span className="mu-shimmer" style={{display:'block',fontSize:'clamp(72px,10vw,116px)'}}>MUSIC</span>
              </h1>
              <p style={{color:'rgba(255,255,255,0.38)',fontSize:16,lineHeight:1.8,maxWidth:480,marginBottom:40,fontWeight:300}}>Founded by Jason Salvador — who discovered Keyshia Cole at 19, co-founded 1500 or Nothin' with Jay-Z, and partnered with Scooter Braun on Justin Bieber. Now reimagining the independent label with AI at its core.</p>
              <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
                <a href="https://open.spotify.com" target="_blank" rel="noreferrer" style={{display:'inline-flex',alignItems:'center',gap:10,padding:'14px 32px',borderRadius:100,background:'linear-gradient(135deg,#C9A84C,#9A7A2E)',color:'#000',fontWeight:900,fontSize:14,textDecoration:'none',boxShadow:'0 6px 36px rgba(201,168,76,0.4)',fontFamily:"'DM Sans',sans-serif"}}>♫ Stream Our Artists</a>
              </div>
            </div>
            <div className="mu-up" style={{animationDelay:'0.2s',display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}}>
              <div style={{position:'absolute',width:420,height:420,background:'radial-gradient(circle,rgba(201,168,76,0.22) 0%,transparent 70%)',borderRadius:'50%',filter:'blur(20px)'}} />
              <div className="mu-record" style={{width:340,height:340,borderRadius:'50%',background:'conic-gradient(from 0deg,#0d0d0d 0deg,#181818 30deg,#0d0d0d 60deg,#181818 90deg,#0d0d0d 120deg,#181818 150deg,#0d0d0d 180deg,#181818 210deg,#0d0d0d 240deg,#181818 270deg,#0d0d0d 300deg,#181818 330deg)',position:'relative',boxShadow:'0 0 60px rgba(0,0,0,0.8),0 0 120px rgba(201,168,76,0.1)',border:'1px solid rgba(255,255,255,0.04)'}}>
                {[75,105,135,155].map(r=>(<div key={r} style={{position:'absolute',top:`calc(50% - ${r}px)`,left:`calc(50% - ${r}px)`,width:r*2,height:r*2,borderRadius:'50%',border:'1px solid rgba(255,255,255,0.04)'}} />))}
                <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:108,height:108,borderRadius:'50%',background:'linear-gradient(135deg,#1a1000,#0d0800)',border:'2px solid rgba(201,168,76,0.35)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',boxShadow:'0 0 30px rgba(201,168,76,0.15)'}}>
                  <div className="mu-display" style={{fontSize:12,color:'#C9A84C',lineHeight:1,marginBottom:4}}>RED VISION</div>
                  <div className="mu-tag" style={{fontSize:8,color:'rgba(201,168,76,0.5)'}}>MUSIC</div>
                  <div style={{width:8,height:8,borderRadius:'50%',background:'#C9A84C',marginTop:6,boxShadow:'0 0 8px rgba(201,168,76,0.6)'}} />
                </div>
              </div>
              <div style={{position:'absolute',bottom:-14,left:'50%',transform:'translateX(-50%)',display:'flex',alignItems:'flex-end',gap:2,height:44,width:180}}>
                {Array.from({length:26}).map((_,i)=>(<div key={i} style={{flex:1,background:'linear-gradient(to top,#C9A84C,rgba(201,168,76,0.12))',borderRadius:2,height:`${wave(i)}%`,transition:'height 0.09s ease'}} />))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{padding:'110px 32px',position:'relative'}}>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,transparent,rgba(201,168,76,0.03) 50%,transparent)',pointerEvents:'none'}} />
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:60}}>
            <span className="mu-tag" style={{color:'#C9A84C',display:'block',marginBottom:14}}>The Roster</span>
            <h2 className="mu-display" style={{fontSize:'clamp(48px,7vw,76px)',lineHeight:0.9}}>THE <span style={{color:'#C9A84C'}}>ARTISTS.</span></h2>
            <div style={{width:60,height:1,background:'linear-gradient(90deg,transparent,#C9A84C,transparent)',margin:'20px auto 0'}} />
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(290px,1fr))',gap:16}}>
            {ARTISTS.map(a=>(<div key={a.name} className="mu-card" style={{borderRadius:22,padding:26}}>
              <div style={{height:2,background:'linear-gradient(90deg,#C9A84C,transparent)',borderRadius:100,marginBottom:20}} />
              <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',marginBottom:12}}>
                <div><h3 style={{fontWeight:900,fontSize:19,marginBottom:4,lineHeight:1.2}}>{a.name}</h3><div className="mu-tag" style={{color:'#C9A84C',fontSize:9}}>{a.role}</div></div>
                <div style={{width:38,height:38,borderRadius:'50%',background:'linear-gradient(135deg,rgba(201,168,76,0.15),rgba(201,168,76,0.04))',border:'1px solid rgba(201,168,76,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:15,flexShrink:0}}>♫</div>
              </div>
              <p style={{color:'rgba(255,255,255,0.38)',fontSize:13,lineHeight:1.65,fontWeight:300,marginBottom:a.spot?14:0}}>{a.credits}</p>
              {a.spot && <a href={a.spot} target="_blank" rel="noreferrer" style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:11,color:'#1DB954',textDecoration:'none',fontWeight:700,fontFamily:"'DM Mono',monospace"}}>▶ Spotify</a>}
            </div>))}
          </div>
        </div>
      </section>
      <section style={{padding:'60px 32px 130px'}}>
        <div style={{maxWidth:780,margin:'0 auto',textAlign:'center'}}>
          <div className="mu-glass-gold" style={{borderRadius:30,padding:'52px 44px',position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:1,background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)'}} />
            <span className="mu-tag" style={{color:'#C9A84C',display:'block',marginBottom:16}}>Founded by Jason Salvador</span>
            <h3 className="mu-display" style={{fontSize:'clamp(36px,5vw,56px)',lineHeight:0.95,marginBottom:20}}>BUILT FROM THE<br /><span style={{color:'#C9A84C'}}>INSIDE OUT.</span></h3>
            <p style={{color:'rgba(255,255,255,0.4)',fontSize:15,lineHeight:1.8,fontWeight:300}}>From discovering Keyshia Cole to co-founding 1500 or Nothin' with Jay-Z — Red Vision Music is built on real relationships, real results, and a vision always ahead of the industry.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
