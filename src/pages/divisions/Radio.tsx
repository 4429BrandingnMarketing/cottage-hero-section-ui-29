import { useEffect, useState } from 'react';
import { Radio as RadioIcon, Podcast, Mic, ArrowRight, Play, Headphones,
         Share2, Music, ExternalLink, Rss, Users, Clock, Globe,
         CheckCircle, Send, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const iconMap: Record<string, any> = { Podcast, Radio: RadioIcon, Mic, Share2, Headphones, Music };

interface RadioService { id: string; title: string; description: string; icon: string; order_index: number; link: string | null; }
interface RadioStat { id: string; value: string; label: string; order_index: number; }

// Fallback data if Supabase is empty
const FALLBACK_STATS = [
  { id:'1', value:'50+', label:'Episodes', order_index:0 },
  { id:'2', value:'12K+', label:'Monthly Listeners', order_index:1 },
  { id:'3', value:'6', label:'Platforms', order_index:2 },
  { id:'4', value:'15+', label:'Guest Interviews', order_index:3 },
];

const FALLBACK_SERVICES = [
  { id:'1', title:'Podcast Production', description:'Full-service podcast editing, mixing, and mastering. AI removes filler words, cleans audio, and optimizes for every platform.', icon:'Podcast', order_index:0, link:null },
  { id:'2', title:'AI Audio Editing', description:'Automated transcription, noise removal, and intelligent scene selection that keeps conversations natural.', icon:'Mic', order_index:1, link:null },
  { id:'3', title:'Multi-Platform Distribution', description:'One upload — we push your episode to Spotify, Apple Podcasts, Google, Amazon, and all emerging platforms simultaneously.', icon:'Share2', order_index:2, link:null },
  { id:'4', title:'Audience Analytics', description:'Deep listener analytics — who\'s tuning in, where they drop off, and which topics drive the most engagement.', icon:'Headphones', order_index:3, link:null },
  { id:'5', title:'Show Notes & SEO', description:'AI-generated show notes, chapter markers, and SEO-optimized descriptions that build organic search traffic.', icon:'Music', order_index:4, link:null },
  { id:'6', title:'Live Stream Production', description:'Real-time audience interaction and live recording sessions with professional stream quality.', icon:'Radio', order_index:5, link:null },
];

const PLATFORMS = [
  { name: 'Spotify', color: '#1db954', icon: '🎵' },
  { name: 'Apple Podcasts', color: '#953d96', icon: '🎙️' },
  { name: 'Google Podcasts', color: '#4285f4', icon: '📻' },
  { name: 'Amazon Music', color: '#ff9900', icon: '🎧' },
  { name: 'YouTube', color: '#ff0000', icon: '▶️' },
  { name: 'iHeart Radio', color: '#c6002b', icon: '📡' },
];

const SHOW_IDEAS = [
  'The Independent Artist Blueprint',
  'AI & The Future of Music',
  'Behind the Boards with 1500 or Nothin\'',
  'Tour Life — Unfiltered',
  'Harlem Renaissance Revisited',
];

const Radio = () => {
  const [services, setServices] = useState<RadioService[]>([]);
  const [stats, setStats] = useState<RadioStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name:'', email:'', show_name:'', format:'Interview', description:'' });
  const [submitStatus, setSubmitStatus] = useState<'idle'|'sending'|'done'>('idle');
  const [activeEpisode, setActiveEpisode] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const [servicesRes, statsRes] = await Promise.all([
        supabase.from('radio_services').select('*').order('order_index'),
        supabase.from('radio_stats').select('*').order('order_index'),
      ]);
      setServices(servicesRes.data?.length ? servicesRes.data : FALLBACK_SERVICES);
      setStats(statsRes.data?.length ? statsRes.data : FALLBACK_STATS);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('sending');
    setTimeout(() => setSubmitStatus('done'), 1500);
  };

  const displayStats = stats.length ? stats : FALLBACK_STATS;
  const displayServices = services.length ? services : FALLBACK_SERVICES;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors text-sm">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to home
          </Link>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <RadioIcon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Podcast & Audio Division</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-none">
                Red Vision <span className="text-primary">Radio</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                Conversations that shape culture. Stories that move the industry.
                AI-powered production that sounds like a major studio.
              </p>
              <p className="text-base text-muted-foreground/70 mb-8">
                From in-depth artist interviews to music industry insights — 
                Red Vision Radio amplifies independent voices at scale.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="#listen" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center gap-2">
                  <Play className="w-4 h-4" /> Listen Now
                </a>
                <a href="#submit-show" className="px-8 py-4 border-2 border-border rounded-full font-semibold hover:bg-secondary transition-all flex items-center gap-2">
                  <Mic className="w-4 h-4" /> Pitch Your Show
                </a>
              </div>
            </div>
            {/* Live waveform visual */}
            <div className="relative h-[460px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/10 flex flex-col items-center justify-center gap-5 p-8">
              <div className="flex items-end gap-1.5 h-24">
                {Array.from({length:20}).map((_,i) => (
                  <div key={i} className="w-2 bg-primary/60 rounded-full animate-pulse"
                    style={{ height:`${20 + Math.sin(i * 0.8) * 50 + 30}%`, animationDelay:`${i*0.07}s`, animationDuration:`${0.8+i*0.05}s` }} />
                ))}
              </div>
              <div className="text-center">
                <div className="text-xs text-primary tracking-widest uppercase mb-1 font-medium">Now Playing</div>
                <div className="font-bold text-lg mb-1">{SHOW_IDEAS[activeEpisode]}</div>
                <div className="text-xs text-muted-foreground">Red Vision Radio · Episode {activeEpisode + 1}</div>
              </div>
              <div className="flex gap-3">
                {SHOW_IDEAS.map((_, i) => (
                  <button key={i} onClick={() => setActiveEpisode(i)}
                    className={`w-2 h-2 rounded-full transition-all ${activeEpisode === i ? 'bg-primary scale-125' : 'bg-muted-foreground/30'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      {!loading && (
        <section className="py-12 px-4 bg-card/50 border-y border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {displayStats.map((stat) => (
                <div key={stat.id} className="text-center p-6 rounded-2xl hover:bg-card transition-colors">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SPOTIFY EMBED ────────────────────────────────────────────────── */}
      <section id="listen" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1db954]/10 border border-[#1db954]/20 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#1db954]" />
              <span className="text-xs text-[#1db954] tracking-wider uppercase font-medium">Stream Now</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Latest Episodes</h2>
            <p className="text-muted-foreground">Available on all major platforms. New episodes drop every week.</p>
          </div>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <iframe
              src="https://open.spotify.com/embed/show/4rOoJ6Egrf8K2IrywzwOMk?utm_source=generator&theme=0"
              width="100%" height="352" frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy" className="block"
            />
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ────────────────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs text-muted-foreground tracking-widest uppercase mb-6 font-medium">Available On</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {PLATFORMS.map(p => (
              <div key={p.name} className="flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all cursor-pointer group">
                <span className="text-2xl">{p.icon}</span>
                <span className="text-[11px] text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      {!loading && (
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Production Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional podcast and audio services — powered by AI, run by humans who know the industry.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayServices.map((service) => {
                const Icon = iconMap[service.icon] || RadioIcon;
                return (
                  <Card key={service.id} className="bg-card border-border hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl">
                    {service.link ? (
                      <a href={service.link} target="_blank" rel="noopener noreferrer" className="block">
                        <CardContent className="p-8">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <Icon className="w-7 h-7 text-primary" />
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{service.title}</h3>
                            <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                        </CardContent>
                      </a>
                    ) : (
                      <CardContent className="p-8">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                      </CardContent>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── PITCH YOUR SHOW ──────────────────────────────────────────────── */}
      <section id="submit-show" className="py-24 px-4 bg-gradient-to-br from-primary/5 to-accent/5 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <Mic className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs text-primary tracking-wider uppercase font-medium">Open Submissions</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Pitch Your Show</h2>
            <p className="text-muted-foreground">
              Red Vision Radio is always looking for bold voices. Independent artists, industry insiders, 
              cultural commentators — if you have something to say, we want to amplify it.
            </p>
          </div>

          {submitStatus === 'done' ? (
            <div className="text-center py-12 bg-card border border-border rounded-2xl">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Pitch Received</h3>
              <p className="text-muted-foreground text-sm">Our team reviews submissions within 5 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Your Name</label>
                  <input type="text" required value={formData.name} onChange={e => setFormData(p=>({...p,name:e.target.value}))}
                    placeholder="Full name"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Email</label>
                  <input type="email" required value={formData.email} onChange={e => setFormData(p=>({...p,email:e.target.value}))}
                    placeholder="your@email.com"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Show Name</label>
                <input type="text" required value={formData.show_name} onChange={e => setFormData(p=>({...p,show_name:e.target.value}))}
                  placeholder="What's your show called?"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Format</label>
                <select value={formData.format} onChange={e => setFormData(p=>({...p,format:e.target.value}))}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors">
                  {['Interview','Solo Commentary','Panel Discussion','Documentary Audio','Music Showcase','Other'].map(f=>(
                    <option key={f}>{f}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Pitch</label>
                <textarea required value={formData.description} onChange={e => setFormData(p=>({...p,description:e.target.value}))}
                  placeholder="What's the show about? Who's the audience? Why Red Vision Radio?" rows={4}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none" />
              </div>
              <button type="submit" disabled={submitStatus === 'sending'}
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-60 flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                {submitStatus === 'sending' ? 'Sending...' : 'Submit Pitch to Red Vision Radio'}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Radio;
