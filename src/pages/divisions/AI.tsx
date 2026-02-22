import { motion } from 'framer-motion';
import {
  Cpu,
  Sparkles,
  Zap,
  Globe,
  Database,
  ShieldCheck,
  TrendingUp,
  CreditCard,
  Layers,
  ArrowRight,
  ChevronRight,
  LineChart,
  Network
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AI = () => {
  const pillars = [
    {
      icon: Network,
      title: "Distribution Infrastructure",
      description: "Enterprise-grade DSP delivery system built for scale. We handle the technical heavy lifting of getting your music to every corner of the globe.",
      color: "from-blue-600 to-cyan-500"
    },
    {
      icon: CreditCard,
      title: "Red Vision Music Distro",
      description: "Premier music distribution with automated royalty splits and transparent ledgers. No pooled accounts—every collaborator is paid directly and instantly.",
      color: "from-green-600 to-emerald-500"
    },
    {
      icon: Sparkles,
      title: "Growth Automation",
      description: "AI-driven release strategies and campaign optimization. Proprietary models trained on internal performance data for maximum impact.",
      color: "from-purple-600 to-pink-500"
    },
    {
      icon: Layers,
      title: "White-Label Solution",
      description: "Full multi-tenant dashboards for labels and creative collectives. Maintain your brand while leveraging our world-class infrastructure.",
      color: "from-orange-600 to-red-500"
    }
  ];

  const valueProps = [
    {
      title: "No Pooled Royalty Accounts",
      description: "Every collaborator is paid directly. Transparency is a feature, not an afterthought."
    },
    {
      title: "AI-Driven Strategy",
      description: "Predictive marketing intelligence that evolves with every release."
    },
    {
      title: "True Data Ownership",
      description: "Your data compounds over time into a permanent competitive advantage."
    },
    {
      title: "Switching Cost Leverage",
      description: "Professional infrastructure designed for long-term valuation growth ($100M+)."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-4 overflow-hidden">
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px] opacity-20 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[140px] opacity-10 animate-pulse" style={{ animationDelay: '4s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>

        <div className="max-max-7xl mx-auto relative z-10 container">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-10 backdrop-blur-xl"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
              <span className="text-sm font-black uppercase tracking-[0.2em] text-white/60">Not just another distributor</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-[0.9]">
              THE AI <span className="text-primary italic">OPERATING</span> SYSTEM
            </h1>

            <p className="text-2xl md:text-4xl font-light text-white/80 leading-tight mb-12 max-w-4xl mx-auto">
              Red Vision AI is the full-stack infrastructure for the <span className="text-white font-bold underline decoration-primary/50 underline-offset-8">Independent Music Economy.</span>
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="h-20 px-12 text-2xl font-black bg-primary hover:bg-primary/90 rounded-none shadow-[20px_20px_0px_0px_rgba(239,68,68,0.2)] hover:shadow-none transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1">
                FOR SERIOUS OPERATORS
                <ChevronRight className="ml-3 w-8 h-8" />
              </Button>
              <div className="text-white/40 font-mono text-sm tracking-widest hidden md:block">
                // BUILT FOR VALUATION LEVERAGE
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-32 bg-white text-black relative">
        <div className="max-w-7xl mx-auto px-4 container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-10">
                WHILE OTHERS FOCUS ON UPLOADS, WE DELIVER <span className="text-primary">INFRASTRUCTURE.</span>
              </h2>
              <p className="text-2xl text-black/70 leading-relaxed font-medium">
                DistroKid and CD Baby are delivery services. Red Vision AI is an enterprise-grade ecosystem.
                We combine DSP delivery, Red Vision Music Distro, predictive intelligence, and modular multi-tenant dashboards into a single scalable platform.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-10">
                <div className="p-6 bg-black text-white">
                  <div className="text-4xl font-black mb-2">$100M+</div>
                  <div className="text-xs uppercase tracking-widest opacity-60">Valuation Target</div>
                </div>
                <div className="p-6 bg-gray-100 border border-black/10">
                  <div className="text-4xl font-black mb-2">100%</div>
                  <div className="text-xs uppercase tracking-widest opacity-60">Data Ownership</div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex gap-6 p-8 bg-gray-50 border border-black/5 hover:border-black/20 hover:bg-white hover:shadow-2xl transition-all duration-500"
                >
                  <div className={`w-16 h-16 shrink-0 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-lg`}>
                    <pillar.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors">{pillar.title}</h3>
                    <p className="text-black/60 leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Value Prop Grid */}
      <section className="py-32 px-4 relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-7xl mx-auto container relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6 italic">PROPRIETARY PERFORMANCE MODELS</h2>
            <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
              Our hybrid AI model uses best-in-class APIs while progressively replacing growth components with internal proprietary models. This creates defensibility, high switching costs, and true valuation leverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, i) => (
              <motion.div
                key={i}
                className="p-10 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div>
                  <h4 className="text-2xl font-bold mb-6 text-primary">{prop.title}</h4>
                  <p className="text-white/60 leading-relaxed">{prop.description}</p>
                </div>
                <div className="mt-12 pt-6 border-t border-white/10">
                  <Zap className="w-6 h-6 text-white/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-primary text-white text-center relative overflow-hidden">
        {/* Animated elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_40px)]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 container">
          <h2 className="text-5xl md:text-8xl font-black mb-10 leading-none tracking-tighter italic">
            READY TO SCALE TO $100M+?
          </h2>
          <p className="text-2xl md:text-3xl font-light mb-16 opacity-90 leading-tight italic">
            Build on the OS that understands infrastructure, distribution, and growth. White-label now.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="h-20 px-16 text-3xl font-black bg-black text-white hover:bg-black/90 rounded-none shadow-2xl transition-all transform hover:scale-110 active:scale-95">
              REQUEST ACCESS
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 grayscale opacity-50">
            <ShieldCheck className="w-12 h-12" />
            <TrendingUp className="w-12 h-12" />
            <Network className="w-12 h-12" />
            <LineChart className="w-12 h-12" />
          </div>
        </div>
      </section>

      <Footer />

      {/* Theme specific styles */}
      <style>{`
        @font-face {
          font-family: 'Integral CF';
          src: url('https://fonts.cdnfonts.com/css/integral-cf');
        }
        h1, h2, h3, h4, .font-black {
          font-family: 'Inter', sans-serif;
          font-weight: 900;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
};

export default AI;
