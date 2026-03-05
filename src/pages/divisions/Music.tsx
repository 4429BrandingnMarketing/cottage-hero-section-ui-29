import { Music as MusicIcon, Users, Mic2, Award, ArrowRight, Play, ExternalLink, Disc } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Music = () => {
  const artists = [
    {
      name: "My Guy Mars",
      role: "Diamond-Selling Producer",
      achievements: "Multiple Grammy nominations • Diamond-certified records",
      spotifyUrl: "https://open.spotify.com/artist/3KdGFQsNhXcHGQRjLBKNKz",
      description: "One of hip-hop's most prolific hitmakers — Diamond sales, Grammy nominations, and a catalog that defined an era."
    },
    {
      name: "Ryan Toby",
      role: "City High — Multi-Platinum Artist",
      achievements: "Multi-platinum • Iconic R&B duo",
      spotifyUrl: "https://open.spotify.com/artist/2UazAtjfzqBF0Nho2awK4z",
      description: "One half of City High, whose debut single remains one of R&B's most recognizable voices of the 2000s."
    },
    {
      name: "James Fauntleroy",
      role: "Grammy-Winning Songwriter",
      achievements: "Grammy winner • Written for Beyoncé, Drake, Justin Timberlake",
      spotifyUrl: "https://open.spotify.com/artist/4W6JxFwlNdPJRNf9B5156w",
      description: "Grammy-winning songwriter behind some of the biggest records in modern R&B. A true architect of sound."
    }
  ];

  const services = [
    { icon: Mic2, title: "Artist Development", description: "Comprehensive talent nurturing with AI-powered insights and real-world industry strategy." },
    { icon: Award, title: "Production Services", description: "Grammy-level production infrastructure with cutting-edge AI enhancement tools." },
    { icon: Users, title: "Marketing & Distribution", description: "Strategic release planning, playlist pitching, and global distribution networks." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <MusicIcon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Grammy-Affiliated Label</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                Red Vision <span className="text-primary">Music</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A Grammy-affiliated AI record label. Home to Diamond-selling producer My Guy Mars, City High's Ryan Toby,
                and Grammy-winning songwriter James Fauntleroy. True artist partnerships built on trust and innovation.
              </p>

              <div className="flex gap-4 flex-wrap">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg transition-all">
                  Submit Your Music
                </button>
                <button className="px-8 py-4 border-2 border-border rounded-full font-semibold hover:bg-secondary transition-all flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Listen Now
                </button>
              </div>
            </motion.div>

            {/* Visual: Vinyl / Studio Aesthetic */}
            <motion.div
              className="relative h-[500px] rounded-3xl overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)', border: '1px solid rgba(255,255,255,0.08)' }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Animated vinyl record */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  <div
                    className="w-64 h-64 rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, #1a1a1a, #2a2a2a, #1a1a1a, #333, #1a1a1a)',
                      boxShadow: '0 0 60px rgba(139,92,246,0.3)',
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'repeating-conic-gradient(rgba(255,255,255,0.02) 0deg, transparent 1deg, transparent 4deg)', borderRadius: '50%' }}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>
                      <Disc className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Glow */}
              <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.1) 0%, transparent 70%)' }} />

              {/* Label */}
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-white/40 text-xs tracking-widest uppercase">Red Vision Music</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Artists */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Artists</h2>
          <p className="text-center text-muted-foreground mb-12">Click any artist to listen on Spotify</p>
          <div className="grid md:grid-cols-3 gap-8">
            {artists.map((artist, i) => (
              <motion.a
                key={artist.name}
                href={artist.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-2xl p-8 hover:shadow-xl transition-all block group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <MusicIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{artist.name}</h3>
                <p className="text-sm text-primary mb-3 font-medium">{artist.role}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{artist.description}</p>
                <p className="text-xs text-muted-foreground italic mb-4">{artist.achievements}</p>
                <div className="flex items-center gap-2 text-[#1DB954] text-sm font-medium">
                  <Play className="w-4 h-4" />
                  <span>Listen on Spotify</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Label Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="bg-card rounded-2xl p-8 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Music;
