import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Wand2,
  MousePointer2,
  BarChart3,
  LineChart,
  Briefcase,
  ListMusic,
  ArrowRight,
  Cpu,
  Sparkles,
  Zap,
  Globe,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ArtistHub = () => {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Professional Dashboard",
      description: "A centralized command center for your entire music career. Monitor performance, tasks, and growth metrics in real-time.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Wand2,
      title: "AI Bio & Content Gen",
      description: "Never suffer from writer's block again. Our AI crafting professional bios, press releases, and social media content tailored to your voice.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MousePointer2,
      title: "Landing Page Builder",
      description: "Convert fans into customers. Deploy stunning, high-converting landing pages for your latest releases and merch in seconds.",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: BarChart3,
      title: "Spotify Analytics",
      description: "Deep-dive data integration. Understand your audience demographics, playlist placements, and streaming trends with surgical precision.",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: LineChart,
      title: "Apple Music Analytics",
      description: "Comprehensive insight into one of the world's largest streaming platforms. Track your reach and performance across the Apple ecosystem.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Briefcase,
      title: "Project Management",
      description: "Stay organized. From collaboration invites to budget tracking, manage every aspect of your creative projects in one place.",
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: ListMusic,
      title: "Release Tracking",
      description: "Master your rollouts. Schedule and monitor your releases across all major platforms to ensure every drop hits with maximum impact.",
      color: "from-accent to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '3s' }} />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="inline-block mb-12"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <img
                  src="/images/visionary-logo.png"
                  alt="Visionary Logo"
                  className="relative w-48 md:w-64 mx-auto drop-shadow-2xl"
                />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">
              ARTIST <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">HUB</span>
            </h1>

            <p className="text-xl md:text-3xl font-bold text-white max-w-5xl mx-auto leading-tight mb-8">
              Everything an independent artist needs in one place.
            </p>

            <p className="text-lg md:text-xl font-light text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
              Manage your releases, track analytics across <span className="text-white font-bold">ALL platforms</span>, generate professional content with AI, and build your landing page.
              <br /><br />
              <span className="italic">"Built by a tour manager with <span className="text-primary font-bold">15 years in the industry</span> who knows what you actually need."</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-12 py-8 text-xl font-bold bg-primary hover:bg-primary/90 rounded-none transform transition hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                LAUNCH DASHBOARD
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button size="lg" variant="outline" className="px-12 py-8 text-xl font-bold border-white/20 hover:bg-white/5 rounded-none backdrop-blur-sm">
                VIEW DEMO
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#050505] to-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-[#1a1a1a]/50 border-white/5 backdrop-blur-md hover:border-primary/50 transition-all duration-500 group overflow-hidden">
                    <CardContent className="p-10 relative">
                      {/* Hover Gradient Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform shadow-lg shadow-black/50`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>

                      <p className="text-white/60 leading-relaxed text-lg">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}

            {/* The A.I. Assistant Product Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="h-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-[2px] rounded-3xl overflow-hidden group">
                <div className="h-full bg-[#111] rounded-[22px] p-12 flex flex-col md:flex-row items-center gap-12 group-hover:bg-[#151515] transition-colors">
                  <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/40 rounded-full">
                      <Sparkles className="w-4 h-4 text-accent" />
                      <span className="text-xs font-black uppercase tracking-widest text-accent italic">Featured Product</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black">RED VISION A.I.</h2>
                    <p className="text-xl text-white/70 leading-relaxed">
                      Beyond just a dashboard, <span className="text-accent font-bold">Visionary</span> is your silent partner.
                      An intelligent bridge between your creative soul and the technical demands of the music industry.
                    </p>
                    <ul className="grid grid-cols-2 gap-4">
                      {["Predictive Trends", "Smart Scheduling", "Audience Scoring", "Growth Hacks"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-white/50">
                          <Zap className="w-4 h-4 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-64 h-64 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] animate-pulse" />
                    <Cpu className="w-32 h-32 text-primary drop-shadow-[0_0_20px_rgba(239,68,68,0.5)] relative z-10" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Logos or Stats */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/40 uppercase tracking-[0.5em] text-sm mb-12">Native Integrations</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 grayscale opacity-50 contrast-125">
            <div className="flex items-center gap-3"><Globe className="w-8 h-8" /> <span className="text-2xl font-black">SPOTIFY</span></div>
            <div className="flex items-center gap-3"><Database className="w-8 h-8" /> <span className="text-2xl font-black">APPLE MUSIC</span></div>
            <div className="flex items-center gap-3"><Zap className="w-8 h-8" /> <span className="text-2xl font-black">TIKTOK</span></div>
            <div className="flex items-center gap-3"><Cpu className="w-8 h-8" /> <span className="text-2xl font-black">META</span></div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom Styles */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(0.5deg); }
          75% { transform: rotate(-0.5deg); }
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default ArtistHub;
