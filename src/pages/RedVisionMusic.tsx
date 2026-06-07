import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ExternalLink, ChevronDown, Music2, Award, Mic2, Globe, TrendingUp, Brain, Users, Star, Upload, Mail, Send } from 'lucide-react';
import MusicNavbar from '@/components/music/MusicNavbar';
import ArtistShowcase from '@/components/music/ArtistShowcase';
import Footer from '@/components/Footer';

// ─── ARTIST ROSTER ────────────────────────────────────────────────────────────
const ARTISTS = [
  {
    id: '1', name: 'James Fauntleroy', genre: 'R&B · Songwriting', catalog: 'RV-001',
    bio: 'Grammy Award-winning songwriter and recording artist. Credited on records for Beyoncé, Jay-Z, Bruno Mars, Kendrick Lamar, and Justin Timberlake. One of the most sought-after voices in the industry.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80&fit=crop',
    spotifyUrl: 'https://open.spotify.com/artist/6uHmJNmCGWjmDkMJUguMqd',
    spotifyEmbed: 'https://open.spotify.com/embed/artist/6uHmJNmCGWjmDkMJUguMqd?utm_source=generator&theme=0',
    accolade: 'Grammy Award Winner',
  },
  {
    id: '2', name: 'My Guy Mars', genre: 'Experimental · Production', catalog: 'RV-002',
    bio: 'Los Angeles native and member of the legendary 1500 or Nothin production team. Blends live instrumentation with AI-assisted production to create sounds that defy categorization.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80&fit=crop',
    spotifyUrl: 'https://open.spotify.com/artist/0oH03sDsnxkWo7jFl6nZQ6',
    spotifyEmbed: 'https://open.spotify.com/embed/artist/0oH03sDsnxkWo7jFl6nZQ6?utm_source=generator&theme=0',
    accolade: '1500 or Nothin',
  },
  {
    id: '3', name: 'Ryan Toby', genre: 'R&B · City High', catalog: 'RV-003',
    bio: 'Original member of City High, the platinum-selling R&B group known for "What Would You Do?" Ryan brings two decades of industry experience and an undeniable vocal gift to the Red Vision family.',
    image: 'https://images.unsplash.com/photo-1598387846148-47e82ee120cc?w=600&q=80&fit=crop',
    spotifyUrl: 'https://open.spotify.com/artist/4pRG2hM0S5MCiZ8KGcXn1S',
    spotifyEmbed: 'https://open.spotify.com/embed/artist/4pRG2hM0S5MCiZ8KGcXn1S?utm_source=generator&theme=0',
    accolade: 'City High · Platinum',
  },
  {
    id: '4', name: '1500 or Nothin\'', genre: 'Production · Live Music', catalog: 'RV-004',
    bio: 'The legendary production collective behind hits for Beyoncé, MJ, and countless others. Pioneers of the live-band-meets-hip-hop sound that defined a generation.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80&fit=crop',
    spotifyUrl: 'https://open.spotify.com/artist/1tIzHCZ3OSmFMXdOJmMmIV',
    spotifyEmbed: 'https://open.spotify.com/embed/artist/1tIzHCZ3OSmFMXdOJmMmIV?utm_source=generator&theme=0',
    accolade: 'Industry Icons',
  },
  {
    id: '5', name: 'TRUZY', genre: 'Hip-Hop · Rap', catalog: 'RV-005',
    bio: 'Rising voice with razor-sharp lyricism and an undeniable stage presence. TRUZY represents the next wave of Red Vision Music — authentic, hungry, and impossible to ignore.',
    image: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=600&q=80&fit=crop',
    spotifyUrl: 'https://open.spotify.com/artist/5EKlA6ylecmqkGLMJCCtck',
    spotifyEmbed: 'https://open.spotify.com/embed/artist/5EKlA6ylecmqkGLMJCCtck?utm_source=generator&theme=0',
    accolade: 'Rising Star',
  },
  {
    id: '6', name: 'Oscar Lee', genre: 'Lyrical Rap · Poetry', catalog: 'RV-006',
    bio: 'Hailing from South Carolina, Oscar Lee redefines lyrical rap with intricate verses that weave together street wisdom and poetic artistry. Every bar is a testament to lived experience.',
    image: 'https://images.unsplash.com/photo-1510915228340-d926af981b29?w=600&q=80&fit=crop',
    spotifyUrl: 'https://open.spotify.com/artist/5EKlA6ylecmqkGLMJCCtck',
    spotifyEmbed: 'https://open.spotify.com/embed/artist/5EKlA6ylecmqkGLMJCCtck?utm_source=generator&theme=0',
    accolade: 'South Carolina',
  },
  {
    id: '7', name: 'King Fatz', genre: 'Hip-Hop · Street', catalog: 'RV-007',
    bio: 'Raw, unfiltered, and relentlessly authentic. King Fatz brings the energy of the streets with the vision of an artist who refuses to be boxed in.',
    image: 'https://images.unsplash.com/photo-1605722243979-fe0be8cbb4b9?w=600&q=80&fit=crop',
    spotifyUrl: 'https://open.spotify.com/artist/0vbDro2arv5i6ubKMHs6Fc',
    spotifyEmbed: 'https://open.spotify.com/embed/artist/0vbDro2arv5i6ubKMHs6Fc?utm_source=generator&theme=0',
    accolade: 'Street Certified',
  },
];

const SERVICES = [
  { icon: Mic2, title: 'Artist Development', desc: 'Full 360° development — from raw talent to industry-ready artist.' },
  { icon: TrendingUp, title: 'AI-Powered A&R', desc: 'Data-driven talent scouting and market trend analysis.' },
  { icon: Globe, title: 'Global Distribution', desc: 'Intelligent release strategies across all streaming platforms.' },
  { icon: Brain, title: 'AI Production', desc: 'Cutting-edge AI-assisted beat creation, vocal arrangement, and mixing.' },
  { icon: Award, title: 'Grammy Standards', desc: 'All projects meet Grammy-affiliated quality requirements.' },
  { icon: Users, title: 'True Partnership', desc: 'Artist-first deals that prioritize ownership and creative control.' },
];

export default function RedVisionMusicPage() {
  const [activeArtist, setActiveArtist] = useState<typeof ARTISTS[0] | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [submitStatus, setSubmitStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');
  const [formData, setFormData] = useState({ artist_name:'', genre:'', email:'', description:'', music_links:'' });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('sending');
    await new Promise(r => setTimeout(r, 1500));
    setSubmitStatus('sent');
  };

  return (
    <div className="min-h-screen bg-[#060608] text-white overflow-x-hidden">
      <MusicNavbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax BG */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&q=80&fit=crop')`,
            transform: `translateY(${scrollY * 0.4}px)`,
            filter: 'brightness(0.18) saturate(0.6)',
          }}
        />
        {/* Gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060608]/60 to-[#060608]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#b89144]/8 via-transparent to-[#b89144]/8" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#b89144]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-900/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:1 }}>
            <p className="text-[#b89144] text-xs tracking-[6px] uppercase mb-6 font-light">
              Grammy · Affiliated · Independent
            </p>
            <h1
              className="font-light mb-6 leading-none tracking-tight"
              style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'clamp(3rem,9vw,7rem)' }}
            >
              Red Vision <span className="text-[#e8c97a]">Music</span>
            </h1>
            <p className="text-[#aaa] text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
              Where independent artistry meets industry excellence.<br/>
              AI-powered. Grammy-standard. Artist-first.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href="#artists"
                className="px-8 py-3 bg-[#b89144] hover:bg-[#e8c97a] text-black text-sm font-medium tracking-widest uppercase rounded-none transition-all duration-300">
                Our Artists
              </a>
              <a href="#submit"
                className="px-8 py-3 border border-[#b89144]/50 hover:border-[#e8c97a] text-[#b89144] hover:text-[#e8c97a] text-sm font-medium tracking-widest uppercase rounded-none transition-all duration-300">
                Submit Music
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-[#b89144]/50" size={24} />
        </motion.div>
      </section>

      {/* ── GRAMMY BADGE STRIP ───────────────────────────────────────────── */}
      <div className="border-y border-[#b89144]/15 bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between flex-wrap gap-4">
          {['Grammy Affiliated', 'AI-Enhanced Production', 'Independent & Artist-Owned', 'Los Angeles · Global', '15+ Years Industry Experience'].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#b89144]" />
              <span className="text-[10px] tracking-[3px] text-[#b89144] uppercase font-light">{badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── ARTIST ROSTER ────────────────────────────────────────────────── */}
      <section id="artists" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:.8 }}
            className="text-center mb-16"
          >
            <p className="text-[#b89144] text-xs tracking-[5px] uppercase mb-4">The Roster</p>
            <h2 style={{ fontFamily:'Cormorant Garamond, serif' }}
              className="text-5xl md:text-6xl font-light text-white mb-4">
              Our Artists
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#b89144] to-transparent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ARTISTS.map((artist, i) => (
              <motion.div
                key={artist.id}
                initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:.6, delay: i * 0.08 }}
                onClick={() => setActiveArtist(artist)}
                className="group relative cursor-pointer overflow-hidden bg-[#0d0d14] border border-white/5 hover:border-[#b89144]/40 transition-all duration-500"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={artist.image} alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/40 to-transparent" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <Star size={8} className="text-[#b89144] fill-[#b89144]" />
                    <span className="text-[9px] text-[#b89144] tracking-[2px] uppercase">{artist.accolade}</span>
                  </div>
                  <h3 style={{ fontFamily:'Cormorant Garamond, serif' }}
                    className="text-xl font-medium text-white mb-1">{artist.name}</h3>
                  <p className="text-[10px] text-[#888] tracking-[1px] uppercase">{artist.genre}</p>
                  <div className="flex items-center gap-3 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={artist.spotifyUrl} target="_blank" rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex items-center gap-1 text-[10px] text-[#1db954] hover:text-green-400 tracking-wider uppercase">
                      <Music2 size={10} /> Spotify
                    </a>
                    <button className="flex items-center gap-1 text-[10px] text-[#b89144] hover:text-[#e8c97a] tracking-wider uppercase">
                      <ExternalLink size={10} /> Profile
                    </button>
                  </div>
                </div>
                {/* Catalog tag */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm border border-[#b89144]/20 px-2 py-1">
                  <span className="text-[8px] text-[#b89144] tracking-[2px]">{artist.catalog}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTIST MODAL ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeArtist && (
          <motion.div
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setActiveArtist(null)}
          >
            <motion.div
              initial={{ opacity:0, scale:.95, y:20 }} animate={{ opacity:1, scale:1, y:0 }} exit={{ opacity:0, scale:.95, y:20 }}
              transition={{ duration:.3 }}
              className="bg-[#0d0d14] border border-[#b89144]/20 max-w-2xl w-full overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-48 aspect-square md:aspect-auto flex-shrink-0 overflow-hidden">
                  <img src={activeArtist.image} alt={activeArtist.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-[9px] text-[#b89144] tracking-[3px] uppercase mb-1">{activeArtist.accolade}</p>
                      <h3 style={{ fontFamily:'Cormorant Garamond, serif' }}
                        className="text-3xl font-light text-white">{activeArtist.name}</h3>
                      <p className="text-[11px] text-[#666] tracking-[2px] uppercase mt-1">{activeArtist.genre}</p>
                    </div>
                    <button onClick={() => setActiveArtist(null)}
                      className="text-[#555] hover:text-white transition-colors text-2xl leading-none">&times;</button>
                  </div>
                  <p className="text-[#aaa] text-sm leading-relaxed mb-6">{activeArtist.bio}</p>
                  {activeArtist.spotifyEmbed && (
                    <iframe
                      src={activeArtist.spotifyEmbed}
                      width="100%" height="80" frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded"
                    />
                  )}
                  <a href={activeArtist.spotifyUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-[11px] text-[#1db954] hover:text-green-300 tracking-widest uppercase">
                    <Music2 size={12} /> Full Profile on Spotify
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── YOUTUBE FEATURE ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#080810]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#b89144] text-xs tracking-[5px] uppercase mb-4">Watch</p>
            <h2 style={{ fontFamily:'Cormorant Garamond, serif' }} className="text-4xl md:text-5xl font-light text-white">
              Red Vision TV
            </h2>
          </div>
          <div className="relative aspect-video bg-[#0a0a0f] border border-[#b89144]/15 overflow-hidden group">
            <iframe
              src="https://www.youtube.com/embed/WeMfmwr5Qvs?rel=0&modestbranding=1&color=white"
              title="Red Vision Music" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#b89144] text-xs tracking-[5px] uppercase mb-4">What We Offer</p>
            <h2 style={{ fontFamily:'Cormorant Garamond, serif' }} className="text-5xl font-light text-white">
              Label Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#b89144]/10">
            {SERVICES.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay: i*0.1 }}
                className="bg-[#0a0a0f] p-8 hover:bg-[#0f0f18] transition-colors duration-300 group"
              >
                <s.icon className="text-[#b89144] mb-5 group-hover:text-[#e8c97a] transition-colors" size={22} />
                <h3 className="text-white text-base font-medium mb-3 tracking-wide">{s.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBMIT MUSIC ─────────────────────────────────────────────────── */}
      <section id="submit" className="py-28 px-6 bg-[#080810] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#b89144]/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#b89144] text-xs tracking-[5px] uppercase mb-4">A&R</p>
            <h2 style={{ fontFamily:'Cormorant Garamond, serif' }} className="text-5xl font-light text-white mb-4">
              Submit Your Music
            </h2>
            <p className="text-[#666] text-sm leading-relaxed">
              We listen to every submission. Our A&R team reviews all genres.
              Grammy-affiliated standards. Artist-first approach.
            </p>
          </div>

          {submitStatus === 'sent' ? (
            <motion.div initial={{ opacity:0, scale:.95 }} animate={{ opacity:1, scale:1 }}
              className="text-center py-16 border border-[#b89144]/20 bg-[#0d0d14]">
              <Award className="text-[#b89144] mx-auto mb-4" size={32} />
              <h3 style={{ fontFamily:'Cormorant Garamond, serif' }} className="text-2xl text-white mb-2">Submission Received</h3>
              <p className="text-[#666] text-sm">Our A&R team will review your submission within 5–7 business days.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { field:'artist_name', label:'Artist Name', type:'text', placeholder:'Your artist name' },
                { field:'genre', label:'Genre', type:'text', placeholder:'e.g. R&B, Hip-Hop, Pop' },
                { field:'email', label:'Email Address', type:'email', placeholder:'your@email.com' },
                { field:'music_links', label:'Music Links', type:'text', placeholder:'Spotify, SoundCloud, YouTube URLs' },
              ].map(({ field, label, type, placeholder }) => (
                <div key={field}>
                  <label className="block text-[10px] text-[#b89144] tracking-[2px] uppercase mb-2">{label}</label>
                  <input
                    type={type} value={(formData as any)[field]} placeholder={placeholder}
                    onChange={e => setFormData(p => ({ ...p, [field]: e.target.value }))}
                    required
                    className="w-full bg-[#0d0d14] border border-white/8 focus:border-[#b89144]/50 outline-none px-4 py-3 text-sm text-white placeholder:text-[#333] transition-colors duration-200"
                  />
                </div>
              ))}
              <div>
                <label className="block text-[10px] text-[#b89144] tracking-[2px] uppercase mb-2">About Your Music</label>
                <textarea
                  value={formData.description} placeholder="Tell us about your sound, influences, and goals..."
                  onChange={e => setFormData(p => ({ ...p, description: e.target.value }))}
                  required rows={4}
                  className="w-full bg-[#0d0d14] border border-white/8 focus:border-[#b89144]/50 outline-none px-4 py-3 text-sm text-white placeholder:text-[#333] transition-colors duration-200 resize-none"
                />
              </div>
              <button
                type="submit" disabled={submitStatus === 'sending'}
                className="w-full py-4 bg-[#b89144] hover:bg-[#e8c97a] disabled:opacity-50 text-black text-xs tracking-[4px] uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                {submitStatus === 'sending' ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <><Send size={14} /> Submit for A&R Review</>
                )}
              </button>
              <p className="text-center text-[10px] text-[#444] tracking-wide">
                By submitting you agree to our A&R review terms. We do not share your information.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── CONSULTING CTA ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-[#b89144]/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#b89144] text-xs tracking-[5px] uppercase mb-4">Work With Us</p>
          <h2 style={{ fontFamily:'Cormorant Garamond, serif' }} className="text-5xl font-light text-white mb-6">
            Ready to Build Something?
          </h2>
          <p className="text-[#666] text-sm mb-10 max-w-xl mx-auto leading-relaxed">
            15 years of industry experience. Grammy-affiliated network. AI-powered execution.
            Let's talk about what we can build together.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="mailto:jason@redvisioncreativestudio.com"
              className="flex items-center gap-2 px-8 py-3 bg-[#b89144] hover:bg-[#e8c97a] text-black text-xs tracking-[3px] uppercase font-medium transition-all duration-300">
              <Mail size={14} /> Get In Touch
            </a>
            <a href="https://redvisioncreativestudio.com"
              className="flex items-center gap-2 px-8 py-3 border border-[#b89144]/40 hover:border-[#b89144] text-[#b89144] hover:text-[#e8c97a] text-xs tracking-[3px] uppercase transition-all duration-300">
              <Globe size={14} /> Full Studio
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
