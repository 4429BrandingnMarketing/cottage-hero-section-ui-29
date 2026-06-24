import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HQ = 'http://localhost:3030';

const BOOKS = [
  {
    id: 'elbows', title: 'KEEP YOUR ELBOWS\nOFF THE TABLE',
    subtitle: 'Lessons In Etiquette, Culture & Self-Respect',
    author: 'Jason Salvador', price: '$24.99', ebook: '$9.99',
    tag: 'FLAGSHIP', tagColor: '#C0392B', genre: 'Professional Development',
    desc: '25 years of hard-won wisdom. A guide for people from humble beginnings who are ready to claim their seat at the table. 11 chapters. Real talk.',
    cover: '/elbows-cover.png', amazonUrl: 'https://kdp.amazon.com/en_US/title-setup/kindle/new/details',
    chapters: 11, ready: true,
  },
  {
    id: 'pivot', title: 'PIVOT', subtitle: "The Tour Manager's Playbook",
    author: 'Jason Salvador', price: '$27.00', ebook: '$9.99',
    tag: 'IN PROGRESS', tagColor: '#C9A84C', genre: 'Music Business',
    desc: 'The complete system for tour management from a 25-year music industry veteran.',
    cover: '', amazonUrl: '', chapters: 0, ready: false,
  },
];

type JobStatus = { id: string; topic: string; status: string; recentLog: {msg:string}[]; files: {name:string}[]; };

export default function ScriptsPage() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [tab, setTab] = useState<'store'|'write'|'chapter'>('store');
  // Pipeline state
  const [topic, setTopic] = useState('');
  const [genre, setGenre] = useState('non-fiction');
  const [chapters, setChapters] = useState(8);
  const [audience, setAudience] = useState('music industry professionals and aspiring entertainers');
  const [launching, setLaunching] = useState(false);
  const [jobId, setJobId] = useState<string|null>(null);
  const [jobStatus, setJobStatus] = useState<JobStatus|null>(null);
  const [allJobs, setAllJobs] = useState<any[]>([]);
  const logRef = useRef<HTMLDivElement>(null);
  // Quick chapter state
  const [chTitle, setChTitle] = useState('');
  const [chBook, setChBook] = useState('Keep Your Elbows Off the Table');
  const [chSummary, setChSummary] = useState('');
  const [chResult, setChResult] = useState('');
  const [chLoading, setChLoading] = useState(false);

  useEffect(() => {
    const h = (e: MouseEvent) => setMouse({ x: e.clientX/window.innerWidth, y: e.clientY/window.innerHeight });
    window.addEventListener('mousemove', h);
    loadJobs();
    return () => window.removeEventListener('mousemove', h);
  }, []);

  // Poll job status
  useEffect(() => {
    if (!jobId) return;
    const iv = setInterval(async () => {
      try {
        const r = await fetch(`${HQ}/api/book/pipeline/status/${jobId}`);
        const d = await r.json();
        setJobStatus(d);
        if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
        if (d.status === 'complete' || d.status === 'error') {
          clearInterval(iv);
          loadJobs();
        }
      } catch(e) {}
    }, 3000);
    return () => clearInterval(iv);
  }, [jobId]);

  const loadJobs = async () => {
    try {
      const r = await fetch(`${HQ}/api/book/pipeline/jobs`);
      const d = await r.json();
      setAllJobs(d.jobs || []);
    } catch(e) {}
  };

  const startPipeline = async () => {
    if (!topic.trim()) return;
    setLaunching(true);
    try {
      const r = await fetch(`${HQ}/api/book/pipeline/start`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, genre, chapters, audience, penName: 'Jason Salvador' })
      });
      const d = await r.json();
      if (d.jobId) { setJobId(d.jobId); setJobStatus(null); }
      else alert('Error: ' + (d.error || 'Unknown'));
    } catch(e: any) { alert('HQ not responding: ' + e.message); }
    setLaunching(false);
  };

  const writeChapter = async () => {
    if (!chTitle.trim()) return;
    setChLoading(true); setChResult('');
    try {
      const r = await fetch(`${HQ}/api/book/pipeline/quick-chapter`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookTitle: chBook, chapterTitle: chTitle, chapterSummary: chSummary })
      });
      const d = await r.json();
      setChResult(d.chapter || d.error || 'Error');
    } catch(e: any) { setChResult('Error: ' + e.message); }
    setChLoading(false);
  };

  const statusColor = (s: string) => s === 'complete' ? '#22C55E' : s === 'error' ? '#EF4444' : s === 'running' ? '#F59E0B' : '#6B7280';

  return (
    <div style={{ minHeight:'100vh', background:'#020202', color:'#fff', overflowX:'hidden', fontFamily:"'DM Sans',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;700;900&family=DM+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        *{box-sizing:border-box}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:#1a0010;border-radius:2px}
        @keyframes sn-o1{0%,100%{transform:translate(0,0)}50%{transform:translate(40px,-30px)}}
        @keyframes sn-o2{0%,100%{transform:translate(0,0)}50%{transform:translate(-30px,40px)}}
        @keyframes sn-shimmer{0%{background-position:-400% center}100%{background-position:400% center}}
        @keyframes sn-up{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        @keyframes sn-float{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-14px) rotate(-1deg)}}
        @keyframes sn-pulse{0%,100%{opacity:1}50%{opacity:0.3}}
        @keyframes sn-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        .sn-orb{position:absolute;border-radius:50%;pointer-events:none}
        .sn-glass{background:rgba(255,255,255,0.025);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,0.07)}
        .sn-glass-red{background:linear-gradient(135deg,rgba(192,57,43,0.08),rgba(192,57,43,0.02));backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);border:1px solid rgba(192,57,43,0.2)}
        .sn-glass-blue{background:linear-gradient(135deg,rgba(59,130,246,0.08),rgba(29,78,216,0.03));backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);border:1px solid rgba(59,130,246,0.18)}
        .sn-glass-purple{background:linear-gradient(135deg,rgba(124,58,237,0.08),rgba(99,102,241,0.02));backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);border:1px solid rgba(124,58,237,0.2)}
        .sn-card{background:linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01));backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.08);transition:all 0.4s cubic-bezier(0.23,1,0.32,1)}
        .sn-card:hover{border-color:rgba(255,255,255,0.2);transform:translateY(-6px)}
        .sn-shimmer{background:linear-gradient(90deg,rgba(255,255,255,0.8) 15%,#C0392B 40%,#E8A090 55%,rgba(255,255,255,0.8) 85%);background-size:400% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:sn-shimmer 5s linear infinite}
        .sn-tag{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.2em;text-transform:uppercase}
        .sn-display{font-family:'Bebas Neue',sans-serif}
        .sn-serif{font-family:'Playfair Display',serif}
        .sn-grid{background-image:radial-gradient(rgba(192,57,43,0.045) 1px,transparent 1px);background-size:36px 36px}
        .sn-up{animation:sn-up 0.7s cubic-bezier(0.23,1,0.32,1) both}
        .sn-float{animation:sn-float 6s ease-in-out infinite}
        .sn-pulse-dot{animation:sn-pulse 1.5s ease-in-out infinite}
        .sn-spin{animation:sn-spin 1.2s linear infinite}
        .sn-tab{font-family:'DM Mono',monospace;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;padding:11px 24px;border-radius:100px;cursor:pointer;transition:all 0.3s;border:1px solid rgba(255,255,255,0.1);background:transparent;color:rgba(255,255,255,0.35)}
        .sn-tab:hover{color:rgba(255,255,255,0.7)}
        .sn-tab.active{background:rgba(192,57,43,0.15);border-color:rgba(192,57,43,0.5);color:#E8A090}
        .sn-input{width:100%;padding:14px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:12px;color:#fff;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;transition:border 0.3s}
        .sn-input:focus{border-color:rgba(192,57,43,0.5)}
        .sn-input::placeholder{color:rgba(255,255,255,0.22)}
        .sn-select{padding:12px 16px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:12px;color:#fff;font-size:13px;font-family:'DM Mono',monospace;outline:none;cursor:pointer;letter-spacing:0.05em}
        .sn-btn{padding:13px 28px;border-radius:100px;border:none;cursor:pointer;font-weight:900;font-size:13px;font-family:'DM Sans',sans-serif;letter-spacing:0.05em;transition:all 0.3s}
        .sn-log{background:rgba(0,0,0,0.5);border-radius:12px;padding:16px;font-family:'DM Mono',monospace;font-size:11px;line-height:1.7;max-height:220px;overflow-y:auto;border:1px solid rgba(255,255,255,0.05)}
        .sn-textarea{width:100%;padding:14px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:12px;color:#fff;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;resize:vertical;min-height:80px;transition:border 0.3s}
        .sn-textarea:focus{border-color:rgba(192,57,43,0.5)}
        .sn-chapter-output{background:rgba(0,0,0,0.4);border-radius:16px;padding:24px;font-size:14px;line-height:1.9;color:rgba(255,255,255,0.75);max-height:500px;overflow-y:auto;border:1px solid rgba(255,255,255,0.06);white-space:pre-wrap;font-family:'Georgia',serif}
      `}</style>
      <Navbar />

      {/* HERO */}
      <section style={{position:'relative',minHeight:'70vh',display:'flex',alignItems:'center',overflow:'hidden',paddingTop:80}}>
        <div className="sn-orb" style={{width:700,height:700,background:'radial-gradient(circle,rgba(192,57,43,0.14) 0%,transparent 70%)',top:-200,right:-200,animation:'sn-o1 18s ease-in-out infinite'}} />
        <div className="sn-orb" style={{width:500,height:500,background:'radial-gradient(circle,rgba(124,58,237,0.08) 0%,transparent 70%)',bottom:-100,left:-150,animation:'sn-o2 14s ease-in-out infinite'}} />
        <div className="sn-grid" style={{position:'absolute',inset:0}} />
        <div style={{position:'absolute',inset:0,pointerEvents:'none',background:`radial-gradient(700px circle at ${mouse.x*100}% ${mouse.y*100}%, rgba(192,57,43,0.06), transparent 60%)`}} />

        <div style={{position:'relative',zIndex:10,maxWidth:1200,width:'100%',margin:'0 auto',padding:'0 32px'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 340px',gap:60,alignItems:'center'}}>
            <div className="sn-up">
              <Link to="/" style={{display:'inline-flex',alignItems:'center',gap:8,color:'rgba(255,255,255,0.28)',textDecoration:'none',marginBottom:36,fontSize:13}}>← Back to Red Vision</Link>
              <div className="sn-glass" style={{display:'inline-flex',alignItems:'center',gap:10,borderRadius:100,padding:'9px 20px',marginBottom:24}}>
                <div style={{width:6,height:6,borderRadius:'50%',background:'#C0392B'}} />
                <span className="sn-tag" style={{color:'rgba(192,57,43,0.9)'}}>Books · AI Publishing · Culture</span>
              </div>
              <h1 className="sn-display" style={{lineHeight:0.88,marginBottom:18}}>
                <span style={{display:'block',fontFamily:"'DM Mono',monospace",fontSize:13,letterSpacing:'0.5em',color:'rgba(255,255,255,0.18)',marginBottom:10}}>RED VISION</span>
                <span className="sn-shimmer" style={{display:'block',fontSize:'clamp(56px,8vw,100px)'}}>SCRIPTS N</span>
                <span className="sn-shimmer" style={{display:'block',fontSize:'clamp(56px,8vw,100px)'}}>SCRIBBLES</span>
              </h1>
              <p style={{color:'rgba(255,255,255,0.38)',fontSize:15,lineHeight:1.85,maxWidth:500,marginBottom:32,fontWeight:300}}>
                25 years of music industry knowledge — packaged into books. Plus a full AI publishing pipeline that writes, formats, and packages books for Amazon KDP automatically.
              </p>
              <div style={{display:'flex',gap:12}}>
                <a href="https://www.amazon.com/s?k=jason+salvador+music" target="_blank" rel="noreferrer"
                  style={{display:'inline-flex',alignItems:'center',gap:8,padding:'13px 26px',borderRadius:100,background:'linear-gradient(135deg,#FF9900,#E67E00)',color:'#000',fontWeight:900,fontSize:13,textDecoration:'none',boxShadow:'0 4px 24px rgba(255,153,0,0.4)',fontFamily:"'DM Sans',sans-serif"}}>
                  📦 Amazon
                </a>
                <a href="https://www.amazon.com/kindle-dbs/entity/id/B004Z10K2A" target="_blank" rel="noreferrer"
                  style={{display:'inline-flex',alignItems:'center',gap:8,padding:'13px 26px',borderRadius:100,background:'rgba(255,255,255,0.06)',color:'rgba(255,255,255,0.7)',fontWeight:700,fontSize:13,border:'1px solid rgba(255,255,255,0.12)',textDecoration:'none',fontFamily:"'DM Sans',sans-serif"}}>
                  📱 Kindle
                </a>
              </div>
            </div>

            {/* Floating cover */}
            <div className="sn-up sn-float" style={{animationDelay:'0.15s',position:'relative',display:'flex',justifyContent:'center'}}>
              <div style={{position:'absolute',inset:-24,background:'radial-gradient(ellipse,rgba(192,57,43,0.18) 0%,transparent 70%)',borderRadius:40,filter:'blur(20px)',pointerEvents:'none'}} />
              <img src="/elbows-cover.png" alt="Keep Your Elbows Off the Table"
                style={{width:230,height:'auto',borderRadius:6,boxShadow:'0 40px 100px rgba(0,0,0,0.8),0 0 60px rgba(192,57,43,0.15)',border:'1px solid rgba(255,255,255,0.08)',position:'relative',zIndex:1}}
                onError={e => { const t = e.currentTarget; t.style.display='none'; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TABS */}
      <div style={{position:'sticky',top:0,zIndex:50,background:'rgba(2,2,2,0.92)',backdropFilter:'blur(20px)',borderBottom:'1px solid rgba(255,255,255,0.06)',padding:'14px 32px'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'flex',gap:8}}>
          {(['store','write','chapter'] as const).map(t=>(
            <button key={t} className={`sn-tab ${tab===t?'active':''}`} onClick={()=>setTab(t)}>
              {t==='store'?'📚 Bookstore':t==='write'?'🤖 Write a Book':'✍️ Write a Chapter'}
            </button>
          ))}
        </div>
      </div>

      {/* ── TAB: STORE */}
      {tab === 'store' && (
        <section style={{padding:'60px 32px 100px'}}>
          <div style={{maxWidth:1200,margin:'0 auto'}}>
            {/* Featured */}
            <div className="sn-glass-red" style={{borderRadius:28,overflow:'hidden',marginBottom:28,position:'relative'}}>
              <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:'linear-gradient(90deg,transparent,#C0392B,transparent)'}} />
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:0}}>
                <div style={{padding:'40px'}}>
                  <span className="sn-tag" style={{color:'#C0392B',display:'block',marginBottom:14}}>Flagship Title · Ready to Publish</span>
                  <h2 className="sn-display" style={{fontSize:'clamp(32px,4vw,50px)',lineHeight:0.9,marginBottom:10}}>KEEP YOUR ELBOWS<br/>OFF THE TABLE</h2>
                  <p className="sn-serif" style={{color:'rgba(255,255,255,0.45)',fontSize:15,fontStyle:'italic',marginBottom:16}}>Lessons In Etiquette, Culture & Self-Respect</p>
                  <p style={{color:'rgba(255,255,255,0.38)',fontSize:13,lineHeight:1.8,marginBottom:24,fontWeight:300}}>
                    The book Jason Salvador wrote for every person who came from humble beginnings and was never taught the unwritten rules of the professional world. 11 chapters including a brand new chapter on winning in the age of AI.
                  </p>
                  <div style={{display:'flex',gap:10,marginBottom:24}}>
                    {[{l:'$24.99',s:'Paperback'},{l:'$9.99',s:'Kindle'},{l:'11',s:'Chapters'}].map(i=>(
                      <div key={i.s} style={{background:'rgba(0,0,0,0.3)',borderRadius:10,padding:'12px 18px',textAlign:'center'}}>
                        <div style={{fontWeight:900,fontSize:20,color:'#fff'}}>{i.l}</div>
                        <div className="sn-tag" style={{color:'rgba(255,255,255,0.3)',fontSize:8}}>{i.s}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{display:'flex',gap:10}}>
                    <a href="https://kdp.amazon.com/en_US/title-setup/kindle/new/details" target="_blank" rel="noreferrer"
                      style={{display:'inline-flex',alignItems:'center',gap:8,padding:'13px 26px',borderRadius:100,background:'linear-gradient(135deg,#FF9900,#E67E00)',color:'#000',fontWeight:900,fontSize:13,textDecoration:'none',fontFamily:"'DM Sans',sans-serif"}}>
                      📦 Buy on Amazon
                    </a>
                    <a href="https://kdp.amazon.com" target="_blank" rel="noreferrer"
                      style={{display:'inline-flex',alignItems:'center',gap:8,padding:'13px 26px',borderRadius:100,background:'rgba(192,57,43,0.1)',color:'#E8A090',fontWeight:700,fontSize:13,border:'1px solid rgba(192,57,43,0.3)',textDecoration:'none',fontFamily:"'DM Sans',sans-serif"}}>
                      📱 Kindle
                    </a>
                  </div>
                </div>
                <div style={{padding:'40px',borderLeft:'1px solid rgba(192,57,43,0.12)'}}>
                  <span className="sn-tag" style={{color:'rgba(255,255,255,0.3)',display:'block',marginBottom:18}}>Table of Contents</span>
                  {['Embracing Your Power','The Power of First Impressions','Soap & Water','Dressing for the Dream','Talking the Talk, Walking the Walk','Time is Money, Be Punctual','Common Sense is Uncommonly Powerful','The Art of Perception','Etiquette: The Universal Language','Navigating Professional Social Waters','The New Game: Winning in the Age of AI ✦'].map((ch,i)=>(
                    <div key={i} style={{display:'flex',alignItems:'center',gap:12,paddingBottom:9,borderBottom:'1px solid rgba(255,255,255,0.04)',marginBottom:9}}>
                      <span className="sn-tag" style={{color:'rgba(192,57,43,0.5)',fontSize:8,minWidth:24}}>CH{i+1}</span>
                      <span style={{fontSize:12,color:i===10?'#E8A090':'rgba(255,255,255,0.48)',fontWeight:i===10?700:300}}>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Other titles */}
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:16}}>
              {BOOKS.filter(b=>b.id!=='elbows').map(book=>(
                <div key={book.id} className="sn-card" style={{borderRadius:20,padding:26}}>
                  <div style={{height:2,background:`linear-gradient(90deg,${book.tagColor},transparent)`,borderRadius:100,marginBottom:18}} />
                  <div style={{display:'flex',justifyContent:'space-between',marginBottom:12}}>
                    <span className="sn-tag" style={{color:'rgba(255,255,255,0.25)',fontSize:9}}>{book.genre}</span>
                    <span className="sn-tag" style={{background:`${book.tagColor}18`,color:book.tagColor,border:`1px solid ${book.tagColor}40`,padding:'4px 10px',borderRadius:100,fontSize:8}}>{book.tag}</span>
                  </div>
                  <h3 className="sn-display" style={{fontSize:26,lineHeight:1,marginBottom:6}}>{book.title}</h3>
                  <div className="sn-serif" style={{color:'rgba(255,255,255,0.4)',fontSize:13,fontStyle:'italic',marginBottom:12}}>{book.subtitle}</div>
                  <p style={{color:'rgba(255,255,255,0.35)',fontSize:13,lineHeight:1.7,fontWeight:300,marginBottom:18}}>{book.desc}</p>
                  <div style={{fontWeight:900,fontSize:18}}>{book.price} <span style={{color:'rgba(255,255,255,0.3)',fontSize:13,fontWeight:300}}>· Kindle {book.ebook}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TAB: WRITE A BOOK (full pipeline) */}
      {tab === 'write' && (
        <section style={{padding:'60px 32px 100px'}}>
          <div style={{maxWidth:900,margin:'0 auto'}}>
            <div style={{textAlign:'center',marginBottom:40}}>
              <span className="sn-tag" style={{color:'#7C3AED',display:'block',marginBottom:12}}>Powered by wesleyscholl/book-generator + Groq AI</span>
              <h2 className="sn-display" style={{fontSize:'clamp(40px,6vw,64px)',lineHeight:0.9,marginBottom:14}}>FULL BOOK<br/><span style={{color:'#7C3AED'}}>PIPELINE.</span></h2>
              <p style={{color:'rgba(255,255,255,0.38)',fontSize:14,lineHeight:1.75,maxWidth:540,margin:'0 auto'}}>Type a topic. Hit Launch. The AI writes the full outline, all chapters, appendices, references, and compiles an EPUB + PDF ready for Amazon KDP. No manual work. Just review and publish.</p>
            </div>

            <div className="sn-glass-purple" style={{borderRadius:28,padding:'36px 36px',marginBottom:20,position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',top:0,left:0,right:0,height:1,background:'linear-gradient(90deg,transparent,rgba(124,58,237,0.5),transparent)'}} />
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:16}}>
                <div style={{gridColumn:'1/-1'}}>
                  <div className="sn-tag" style={{color:'rgba(124,58,237,0.7)',marginBottom:8,display:'block'}}>Book Topic / Title Concept *</div>
                  <input className="sn-input" placeholder="e.g. 'How to break into the music industry with no connections'" value={topic} onChange={e=>setTopic(e.target.value)} onKeyDown={e=>e.key==='Enter'&&!launching&&startPipeline()} />
                </div>
                <div>
                  <div className="sn-tag" style={{color:'rgba(124,58,237,0.7)',marginBottom:8,display:'block'}}>Genre</div>
                  <select className="sn-select" value={genre} onChange={e=>setGenre(e.target.value)} style={{width:'100%'}}>
                    {['non-fiction','music business','self-help','how-to','memoir','professional development'].map(g=>(
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <div className="sn-tag" style={{color:'rgba(124,58,237,0.7)',marginBottom:8,display:'block'}}>Number of Chapters: {chapters}</div>
                  <input type="range" min={5} max={15} value={chapters} onChange={e=>setChapters(Number(e.target.value))} style={{width:'100%',accentColor:'#7C3AED'}} />
                </div>
                <div style={{gridColumn:'1/-1'}}>
                  <div className="sn-tag" style={{color:'rgba(124,58,237,0.7)',marginBottom:8,display:'block'}}>Target Audience</div>
                  <input className="sn-input" value={audience} onChange={e=>setAudience(e.target.value)} />
                </div>
              </div>
              <button onClick={startPipeline} disabled={launching||!topic.trim()}
                style={{width:'100%',padding:'16px',borderRadius:16,border:'none',cursor:topic.trim()&&!launching?'pointer':'not-allowed',fontWeight:900,fontSize:15,fontFamily:"'DM Sans',sans-serif",background:launching?'rgba(124,58,237,0.12)':'linear-gradient(135deg,#7C3AED,#4F46E5)',color:launching?'#A78BFA':'#fff',opacity:!topic.trim()?0.5:1,boxShadow:!launching&&topic.trim()?'0 4px 30px rgba(124,58,237,0.45)':'none',transition:'all 0.3s'}}>
                {launching ? '⏳ Launching pipeline...' : '🚀 Launch Full Book Pipeline'}
              </button>
            </div>

            {/* Active job */}
            {jobStatus && (
              <div className="sn-glass-purple" style={{borderRadius:24,padding:28,marginBottom:20}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
                  <div>
                    <div className="sn-tag" style={{color:'rgba(124,58,237,0.7)',marginBottom:6}}>Active Job</div>
                    <div style={{fontWeight:900,fontSize:16}}>{jobStatus.topic}</div>
                  </div>
                  <div style={{display:'flex',alignItems:'center',gap:8,padding:'8px 16px',borderRadius:100,background:`${statusColor(jobStatus.status)}18`,border:`1px solid ${statusColor(jobStatus.status)}40`}}>
                    {jobStatus.status === 'running' && <span className="sn-spin" style={{display:'inline-block'}}>⏳</span>}
                    {jobStatus.status === 'complete' && '✅'}
                    {jobStatus.status === 'error' && '❌'}
                    <span className="sn-tag" style={{color:statusColor(jobStatus.status),fontSize:9}}>{jobStatus.status.toUpperCase()}</span>
                  </div>
                </div>
                <div className="sn-log" ref={logRef}>
                  {jobStatus.recentLog.length === 0 ? (
                    <span style={{color:'rgba(255,255,255,0.3)'}}>Starting pipeline...</span>
                  ) : jobStatus.recentLog.map((l,i)=>(
                    <div key={i} style={{color: l.msg.startsWith('ERR') ? '#EF4444' : l.msg.includes('✅')||l.msg.includes('complete') ? '#22C55E' : 'rgba(255,255,255,0.55)'}}>{l.msg}</div>
                  ))}
                </div>
                {jobStatus.status === 'complete' && jobStatus.files.length > 0 && (
                  <div style={{marginTop:16}}>
                    <div className="sn-tag" style={{color:'#22C55E',marginBottom:10,display:'block'}}>📁 Generated Files</div>
                    <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                      {jobStatus.files.filter(f=>f.name.match(/\.(epub|pdf|md|docx)$/i)).map(f=>(
                        <a key={f.name} href={`${HQ}/api/book/pipeline/download/${jobStatus.id}/${f.name}`} target="_blank" rel="noreferrer"
                          style={{display:'inline-flex',alignItems:'center',gap:6,padding:'8px 16px',borderRadius:100,background:'rgba(34,197,94,0.1)',color:'#22C55E',border:'1px solid rgba(34,197,94,0.3)',fontSize:12,textDecoration:'none',fontWeight:700,fontFamily:"'DM Mono',monospace"}}>
                          ⬇ {f.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Past jobs */}
            {allJobs.length > 0 && (
              <div>
                <div className="sn-tag" style={{color:'rgba(255,255,255,0.3)',display:'block',marginBottom:14}}>Previous Jobs</div>
                <div style={{display:'flex',flexDirection:'column',gap:10}}>
                  {allJobs.map(j=>(
                    <div key={j.id} className="sn-card" style={{borderRadius:16,padding:'16px 20px',display:'flex',alignItems:'center',justifyContent:'space-between',cursor:'pointer'}} onClick={()=>setJobId(j.id)}>
                      <div>
                        <div style={{fontWeight:700,fontSize:14,marginBottom:2}}>{j.topic}</div>
                        <div className="sn-tag" style={{color:'rgba(255,255,255,0.25)',fontSize:8}}>{new Date(j.startedAt).toLocaleDateString()}</div>
                      </div>
                      <span className="sn-tag" style={{color:statusColor(j.status),background:`${statusColor(j.status)}15`,border:`1px solid ${statusColor(j.status)}35`,padding:'5px 12px',borderRadius:100,fontSize:8}}>{j.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── TAB: QUICK CHAPTER */}
      {tab === 'chapter' && (
        <section style={{padding:'60px 32px 100px'}}>
          <div style={{maxWidth:900,margin:'0 auto'}}>
            <div style={{textAlign:'center',marginBottom:36}}>
              <span className="sn-tag" style={{color:'#3B82F6',display:'block',marginBottom:12}}>Instant Chapter Writer</span>
              <h2 className="sn-display" style={{fontSize:'clamp(40px,6vw,60px)',lineHeight:0.9,marginBottom:12}}>WRITE ONE<br/><span style={{color:'#3B82F6'}}>CHAPTER.</span></h2>
              <p style={{color:'rgba(255,255,255,0.38)',fontSize:14,lineHeight:1.7,maxWidth:480,margin:'0 auto'}}>Need a single chapter fast? Type the title, give a summary, and the AI writes it in your voice — 1,500+ words, ready to paste into your manuscript.</p>
            </div>

            <div className="sn-glass-blue" style={{borderRadius:28,padding:32,marginBottom:20,position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',top:0,left:0,right:0,height:1,background:'linear-gradient(90deg,transparent,rgba(59,130,246,0.5),transparent)'}} />
              <div style={{display:'flex',flexDirection:'column',gap:14,marginBottom:16}}>
                <div>
                  <div className="sn-tag" style={{color:'rgba(59,130,246,0.7)',marginBottom:8,display:'block'}}>Book Title</div>
                  <input className="sn-input" value={chBook} onChange={e=>setChBook(e.target.value)} placeholder="e.g. Keep Your Elbows Off the Table" />
                </div>
                <div>
                  <div className="sn-tag" style={{color:'rgba(59,130,246,0.7)',marginBottom:8,display:'block'}}>Chapter Title *</div>
                  <input className="sn-input" value={chTitle} onChange={e=>setChTitle(e.target.value)} placeholder="e.g. The Power of the Follow-Up" />
                </div>
                <div>
                  <div className="sn-tag" style={{color:'rgba(59,130,246,0.7)',marginBottom:8,display:'block'}}>What this chapter covers (optional)</div>
                  <textarea className="sn-textarea" value={chSummary} onChange={e=>setChSummary(e.target.value)} placeholder="e.g. Why most people fail at networking — they never follow up. Jason shares his system for consistent follow-through..." />
                </div>
              </div>
              <button onClick={writeChapter} disabled={chLoading||!chTitle.trim()}
                style={{width:'100%',padding:'15px',borderRadius:14,border:'none',cursor:chTitle.trim()&&!chLoading?'pointer':'not-allowed',fontWeight:900,fontSize:14,fontFamily:"'DM Sans',sans-serif",background:chLoading?'rgba(59,130,246,0.12)':'linear-gradient(135deg,#3B82F6,#1D4ED8)',color:chLoading?'#93C5FD':'#fff',opacity:!chTitle.trim()?0.5:1,boxShadow:!chLoading&&chTitle.trim()?'0 4px 28px rgba(59,130,246,0.4)':'none',transition:'all 0.3s'}}>
                {chLoading ? '✍️ Writing your chapter...' : '✍️ Write This Chapter'}
              </button>
            </div>

            {chResult && (
              <div style={{borderRadius:20,overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)'}}>
                <div style={{background:'rgba(255,255,255,0.04)',padding:'14px 20px',display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
                  <span className="sn-tag" style={{color:'#93C5FD',fontSize:9}}>✅ Chapter Generated — {chResult.split(/\s+/).length.toLocaleString()} words</span>
                  <button onClick={()=>navigator.clipboard.writeText(chResult)}
                    style={{padding:'6px 14px',borderRadius:100,background:'rgba(59,130,246,0.12)',color:'#93C5FD',border:'1px solid rgba(59,130,246,0.3)',cursor:'pointer',fontSize:11,fontFamily:"'DM Mono',monospace"}}>
                    Copy
                  </button>
                </div>
                <div className="sn-chapter-output">{chResult}</div>
              </div>
            )}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
