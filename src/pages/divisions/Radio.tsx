import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ─── STREAM URL ──────────────────────────────────────────────────────────────
// Replace this with your actual Zeno.fm / Radio.co / IceCast stream URL
const STREAM_URL = '';
// ─────────────────────────────────────────────────────────────────────────────

const SHOWS = [
  { name: 'The Red Vision Frequency', host: 'Jason Salvador', time: 'Mon–Fri · 8PM PT', desc: 'Music, culture, and the business behind the music. Real talk from the inside of an industry that changed forever.', tag: 'CULTURE & BUSINESS', color: '#C0392B' },
  { name: 'Artist Spotlight', host: 'Red Vision Music', time: 'Saturdays · 6PM PT', desc: 'Deep dives into the artists shaping the future of independent music. Unfiltered. Uncompromised.', tag: 'ARTIST FEATURES', color: '#C9A84C' },
  { name: 'The AI Music Report', host: 'Hermes AI', time: 'Daily · 12PM PT', desc: 'How AI is reshaping the music industry — news, analysis, and the opportunities others are sleeping on.', tag: 'TECH & MUSIC', color: '#8B5CF6' },
  { name: 'Late Night Frequencies', host: 'My Guy Mars', time: 'Fri & Sat · 10PM PT', desc: 'Lo-fi beats, late night vibes, and the sounds that move you when the city goes quiet.', tag: 'MUSIC & VIBES', color: '#C0392B' },
];

const STATS = [
  { num: '24/7', label: 'Broadcast' },
  { num: '4', label: 'Live Shows' },
  { num: 'LA', label: 'Originating' },
  { num: '∞', label: 'Frequencies' },
];

export default function RadioPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const contextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);

  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [tick, setTick] = useState(0);
  const [bars] = useState(() => Array.from({ length: 40 }, (_, i) => i));

  // ── Mouse parallax
  useEffect(() => {
    const h = (e: MouseEvent) => setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);

  // ── Idle bar animation (when not playing real audio)
  useEffect(() => {
    if (playing && analyserRef.current) return;
    const id = setInterval(() => setTick(t => t + 1), 80);
    return () => clearInterval(id);
  }, [playing]);

  // ── Web Audio visualizer
  const initAudio = async () => {
    if (!audioRef.current) return;
    if (!contextRef.current) {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 128;
      const source = ctx.createMediaElementSource(audioRef.current);
      source.connect(analyser);
      analyser.connect(ctx.destination);
      contextRef.current = ctx;
      analyserRef.current = analyser;
      sourceRef.current = source;
    }
    if (contextRef.current.state === 'suspended') await contextRef.current.resume();
  };

  const drawBars = () => {
    const canvas = canvasRef.current;
    const analyser = analyserRef.current;
    if (!canvas || !analyser) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(data);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const bw = (canvas.width / data.length) * 0.7;
    const gap = (canvas.width / data.length) * 0.3;
    data.forEach((v, i) => {
      const h = (v / 255) * canvas.height;
      const grad = ctx.createLinearGradient(0, canvas.height - h, 0, canvas.height);
      grad.addColorStop(0, '#C0392B');
      grad.addColorStop(1, '#7B0000');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(i * (bw + gap), canvas.height - h, bw, h, 2);
      ctx.fill();
    });
    animRef.current = requestAnimationFrame(drawBars);
  };

  const handlePlay = async () => {
    if (!STREAM_URL) {
      alert('Stream URL not configured yet. Check back soon!');
      return;
    }
    setLoading(true);
    await initAudio();
    if (playing) {
      audioRef.current?.pause();
      cancelAnimationFrame(animRef.current);
      setPlaying(false);
      setLoading(false);
    } else {
      audioRef.current!.src = STREAM_URL;
      try {
        await audioRef.current!.play();
        setPlaying(true);
        drawBars();
      } catch (e) {
        console.error('Stream error:', e);
      }
      setLoading(false);
    }
  };

  const idleBar = (i: number) => {
    const t = Date.now() / 1000;
    return 8 + Math.abs(Math.sin((t * 1.4) + i * 0.45)) * 55 + Math.abs(Math.sin((t * 0.7) + i * 0.9)) * 20;
  };

  return (
    <div style={{ minHeight: '100vh', background: '#020202', color: '#fff', overflowX: 'hidden', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;700;900&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0a0a0a; } ::-webkit-scrollbar-thumb { background: #2a0a0a; border-radius: 2px; }

        @keyframes orb1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(60px,-40px) scale(1.1)} 66%{transform:translate(-30px,50px) scale(0.95)} }
        @keyframes orb2 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-50px,30px) scale(1.08)} 66%{transform:translate(40px,-60px) scale(1.05)} }
        @keyframes orb3 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,40px)} }
        @keyframes pulse-ring { 0%{transform:scale(0.95);box-shadow:0 0 0 0 rgba(192,57,43,0.5)} 70%{transform:scale(1);box-shadow:0 0 0 14px rgba(192,57,43,0)} 100%{transform:scale(0.95);box-shadow:0 0 0 0 rgba(192,57,43,0)} }
        @keyframes scan { 0%{transform:translateY(-100%)} 100%{transform:translateY(100%)} }
        @keyframes shimmer { 0%{background-position:-400% center} 100%{background-position:400% center} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes glitch { 0%,100%{clip-path:inset(0 0 100% 0)} 10%{clip-path:inset(10% 0 85% 0)} 20%{clip-path:inset(0 0 100% 0)} 30%{clip-path:inset(55% 0 30% 0)} 40%{clip-path:inset(0 0 100% 0)} }

        .orb { position: absolute; border-radius: 50%; pointer-events: none; }
        .glass { background: rgba(255,255,255,0.025); backdrop-filter: blur(28px); -webkit-backdrop-filter: blur(28px); border: 1px solid rgba(255,255,255,0.07); }
        .glass-red { background: linear-gradient(135deg, rgba(192,57,43,0.08), rgba(192,57,43,0.02)); backdrop-filter: blur(28px); -webkit-backdrop-filter: blur(28px); border: 1px solid rgba(192,57,43,0.18); }
        .glass-card { background: linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01)); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,0.08); transition: all 0.4s cubic-bezier(0.23,1,0.32,1); }
        .glass-card:hover { border-color: rgba(192,57,43,0.4); transform: translateY(-6px); box-shadow: 0 30px 80px rgba(192,57,43,0.12); }

        .shimmer-red { background: linear-gradient(90deg, rgba(255,255,255,0.9) 25%, #C0392B 45%, #E8C96A 55%, rgba(255,255,255,0.9) 75%); background-size: 400% auto; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 4s linear infinite; }
        .live-pulse { animation: pulse-ring 2s cubic-bezier(0.455,0.03,0.515,0.955) infinite; }
        .dot-grid { background-image: radial-gradient(rgba(192,57,43,0.06) 1px, transparent 1px); background-size: 36px 36px; }
        .mono { font-family: 'DM Mono', monospace; }
        .display { font-family: 'Bebas Neue', sans-serif; }
        .tag { font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; }
        .scan-line { position: absolute; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(192,57,43,0.4), transparent); animation: scan 3s linear infinite; pointer-events: none; }
        .fadeUp { animation: fadeUp 0.7s cubic-bezier(0.23,1,0.32,1) both; }
        .player-3d { transform: perspective(1000px) rotateX(2deg); transition: transform 0.4s ease; }
        .player-3d:hover { transform: perspective(1000px) rotateX(0deg) rotateY(-2deg); }
        .noise::after { content:''; position:absolute; inset:0; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E"); pointer-events:none; border-radius:inherit; }
      `}</style>

      <audio ref={audioRef} preload="none" />
      <Navbar />

      {/* ════════════ HERO ════════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', paddingTop: 80 }}>

        {/* Background orbs */}
        <div className="orb" style={{ width: 700, height: 700, background: 'radial-gradient(circle, rgba(192,57,43,0.18) 0%, transparent 70%)', top: -200, left: -200, animation: 'orb1 14s ease-in-out infinite' }} />
        <div className="orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(192,57,43,0.12) 0%, transparent 70%)', bottom: -100, right: -100, animation: 'orb2 18s ease-in-out infinite' }} />
        <div className="orb" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', animation: 'orb3 10s ease-in-out infinite' }} />

        {/* Dot grid */}
        <div className="dot-grid" style={{ position: 'absolute', inset: 0 }} />

        {/* Mouse glow */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: `radial-gradient(600px circle at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(192,57,43,0.09), transparent 60%)` }} />

        {/* Horizontal scan line */}
        <div className="scan-line" style={{ top: '50%' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1200, width: '100%', margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

          {/* ── LEFT: Branding */}
          <div className="fadeUp">
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.3)', textDecoration: 'none', marginBottom: 40, fontSize: 13, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}>
              ← Back to Red Vision
            </Link>

            {/* Live badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 32 }}>
              <div className="glass" style={{ display: 'flex', alignItems: 'center', gap: 10, borderRadius: 100, padding: '10px 20px' }}>
                <div className="live-pulse" style={{ width: 8, height: 8, borderRadius: '50%', background: '#C0392B', flexShrink: 0 }} />
                <span className="tag" style={{ color: '#C0392B' }}>Broadcasting 24/7 · Los Angeles</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="display" style={{ lineHeight: 0.9, marginBottom: 24 }}>
              <span style={{ display: 'block', fontSize: 16, letterSpacing: '0.5em', color: 'rgba(255,255,255,0.2)', fontFamily: "'DM Mono', monospace", marginBottom: 12 }}>RED VISION</span>
              <span className="shimmer-red" style={{ fontSize: 'clamp(72px, 10vw, 120px)', display: 'block' }}>RADIO</span>
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 17, lineHeight: 1.7, maxWidth: 440, marginBottom: 40, fontWeight: 300 }}>
              Independent music, raw culture, and the conversation that drives the industry forward. 
              Built in LA. Broadcast everywhere.
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: 32, marginBottom: 40 }}>
              {STATS.map(s => (
                <div key={s.label}>
                  <div className="display" style={{ fontSize: 36, color: '#C0392B', lineHeight: 1 }}>{s.num}</div>
                  <div className="tag" style={{ color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={handlePlay}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12, padding: '16px 36px',
                borderRadius: 100, border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 900,
                background: playing ? 'rgba(192,57,43,0.15)' : 'linear-gradient(135deg, #C0392B, #922B21)',
                color: playing ? '#C0392B' : '#fff',
                outline: playing ? '1px solid rgba(192,57,43,0.4)' : 'none',
                transition: 'all 0.3s', letterSpacing: '0.05em',
                boxShadow: playing ? '0 0 40px rgba(192,57,43,0.3)' : '0 8px 40px rgba(192,57,43,0.4)',
                fontFamily: "'DM Sans', sans-serif"
              }}
              onMouseEnter={e => { if (!playing) (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.04)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}>
              {loading ? '⏳ Connecting...' : playing ? '⏸ Pause Stream' : '▶ Tune In Live'}
            </button>
          </div>

          {/* ── RIGHT: 3D Glass Player */}
          <div className="fadeUp player-3d noise" style={{ animationDelay: '0.2s', position: 'relative' }}>

            {/* Glow behind card */}
            <div style={{ position: 'absolute', inset: -20, background: 'radial-gradient(ellipse at center, rgba(192,57,43,0.2) 0%, transparent 70%)', borderRadius: 40, filter: 'blur(20px)', pointerEvents: 'none' }} />

            <div className="glass-red" style={{ borderRadius: 32, padding: 36, position: 'relative', overflow: 'hidden' }}>

              {/* Inner glass light refraction */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 1, background: 'linear-gradient(180deg, rgba(255,255,255,0.1), transparent)', pointerEvents: 'none' }} />

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, rgba(192,57,43,0.3), rgba(192,57,43,0.1))', border: '1px solid rgba(192,57,43,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>📻</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 15 }}>Red Vision Radio</div>
                    <div className="mono" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11 }}>Los Angeles · Independent</div>
                  </div>
                </div>
                <div className="tag" style={{ background: 'rgba(192,57,43,0.15)', color: '#C0392B', border: '1px solid rgba(192,57,43,0.3)', padding: '6px 14px', borderRadius: 100 }}>
                  {playing ? '● ON AIR' : '○ OFFLINE'}
                </div>
              </div>

              {/* Visualizer */}
              <div style={{ height: 100, borderRadius: 16, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', marginBottom: 20, overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: '12px 14px', gap: 3, position: 'relative' }}>
                {playing && analyserRef.current ? (
                  <canvas ref={canvasRef} width={400} height={76} style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} />
                ) : (
                  bars.map(i => (
                    <div key={i} style={{ flex: 1, borderRadius: 3, background: `linear-gradient(to top, #C0392B, rgba(192,57,43,0.3))`, height: `${playing ? 80 : idleBar(i)}%`, transition: 'height 0.08s ease', opacity: playing ? 1 : 0.5 }} />
                  ))
                )}
              </div>

              {/* Now Playing */}
              <div style={{ background: 'rgba(0,0,0,0.25)', borderRadius: 14, padding: '14px 18px', marginBottom: 20, border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, #C0392B, #7B0000)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>🎙</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>The Red Vision Frequency</div>
                  <div className="mono" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11 }}>Jason Salvador · Live Show</div>
                </div>
              </div>

              {/* Play button */}
              <button onClick={handlePlay} style={{
                width: '100%', padding: '16px', borderRadius: 16, border: '1px solid rgba(192,57,43,0.3)', cursor: 'pointer', fontWeight: 900, fontSize: 15, letterSpacing: '0.08em',
                background: playing ? 'rgba(192,57,43,0.15)' : 'linear-gradient(135deg, #C0392B 0%, #922B21 100%)',
                color: playing ? '#C0392B' : '#fff', transition: 'all 0.3s', fontFamily: "'DM Sans', sans-serif",
                boxShadow: playing ? 'inset 0 0 30px rgba(192,57,43,0.1)' : '0 4px 30px rgba(192,57,43,0.35)'
              }}>
                {loading ? 'CONNECTING TO SIGNAL...' : playing ? '⏸  PAUSE STREAM' : '▶  LISTEN LIVE'}
              </button>

              {/* Frequency display */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, padding: '10px 14px', borderRadius: 10, background: 'rgba(0,0,0,0.2)' }}>
                <span className="mono" style={{ color: 'rgba(255,255,255,0.25)', fontSize: 10 }}>FREQUENCY</span>
                <span className="mono" style={{ color: '#C0392B', fontSize: 13, letterSpacing: '0.15em' }}>RVCS · 001.FM</span>
                <span className="mono" style={{ color: 'rgba(255,255,255,0.25)', fontSize: 10 }}>HD SIGNAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ SHOW SCHEDULE ════════════ */}
      <section style={{ padding: '120px 32px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent, rgba(192,57,43,0.03) 50%, transparent)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <span className="tag" style={{ color: '#C0392B', display: 'block', marginBottom: 16 }}>Programming</span>
            <h2 className="display" style={{ fontSize: 'clamp(48px, 7vw, 80px)', lineHeight: 0.9 }}>
              ON AIR <span style={{ color: '#C0392B' }}>NOW.</span>
            </h2>
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, #C0392B, transparent)', margin: '24px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {SHOWS.map((show, i) => (
              <div key={show.name} className="glass-card" style={{ borderRadius: 24, padding: 28, animationDelay: `${i * 0.1}s` }}>
                {/* Color accent top */}
                <div style={{ height: 2, background: `linear-gradient(90deg, ${show.color}, transparent)`, borderRadius: 100, marginBottom: 24 }} />
                <span className="tag" style={{ color: show.color, display: 'block', marginBottom: 10 }}>{show.tag}</span>
                <h3 style={{ fontWeight: 900, fontSize: 20, marginBottom: 8, lineHeight: 1.2 }}>{show.name}</h3>
                <div className="mono" style={{ color: show.color, fontSize: 11, marginBottom: 14 }}>{show.host} · {show.time}</div>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, lineHeight: 1.7, fontWeight: 300 }}>{show.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ TUNE IN CTA ════════════ */}
      <section style={{ padding: '80px 32px 140px', textAlign: 'center', position: 'relative' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div className="glass-red" style={{ borderRadius: 32, padding: '56px 48px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)' }} />
            <span className="tag" style={{ color: '#C0392B', display: 'block', marginBottom: 20 }}>The Signal Is Live</span>
            <h3 className="display" style={{ fontSize: 'clamp(42px, 6vw, 64px)', marginBottom: 20, lineHeight: 0.95 }}>
              DON'T MISS<br /><span style={{ color: '#C0392B' }}>A BROADCAST.</span>
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 16, lineHeight: 1.7, marginBottom: 36, fontWeight: 300 }}>
              Red Vision Radio is independent. No major label backing. No corporate agenda.<br />Just the culture, the music, and the truth.
            </p>
            <button
              onClick={handlePlay}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12, padding: '16px 44px',
                borderRadius: 100, border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 900,
                background: 'linear-gradient(135deg, #C0392B, #922B21)', color: '#fff',
                boxShadow: '0 8px 50px rgba(192,57,43,0.45)', transition: 'transform 0.2s', fontFamily: "'DM Sans', sans-serif"
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.04)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}>
              {playing ? '⏸ Pause' : '▶ Tune In Now'}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
