import { motion } from 'framer-motion';
import {
  Megaphone,
  Bot,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Users,
  Music,
  FileText,
  Share2,
  Mail,
  Search,
  Dices,
  Briefcase,
  Layers,
  BarChart4,
  PlayCircle,
  DollarSign,
  Layout,
  Zap,
  Kanban,
  Repeat,
  Terminal,
  Activity,
  CreditCard,
  ShoppingBag,
  Tv
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Marketing = () => {
  const agents = [
    { icon: FileText, title: "Content Creator", description: "Writes blogs, social posts, newsletters 24/7." },
    { icon: Share2, title: "Social Media Manager", description: "Posts and engages across all major platforms." },
    { icon: Music, title: "Music Promoter", description: "Pitches to playlists and influencers autonomously." },
    { icon: Mail, title: "Email Marketer", description: "Manages campaigns and lifecycle automation." },
    { icon: Search, title: "SEO Optimizer", description: "Optimizes content for search engines in real-time." },
    { icon: Dices, title: "Licensing Scout", description: "Finds and pitches for synchronization opportunities." }
  ];

  const musicBusiness = [
    "Licensing deal tracking",
    "Release management",
    "Revenue monitoring",
    "Streaming analytics",
    "Client relationship management"
  ];

  const marketingBranding = [
    "Marketing campaign management",
    "Social media command center",
    "Content calendar",
    "Email marketing automation",
    "Funnel builder"
  ];

  const contentStudio = [
    "Podcast management",
    "Video platform (YouTube alternative)",
    "Blog & newsletter system",
    "Multi-platform distribution"
  ];

  const revenueStreams = [
    { title: "Music Licensing", icon: CreditCard },
    { title: "Streaming Royalties", icon: Activity },
    { title: "Merch Store", icon: ShoppingBag },
    { title: "Amazon Stores", icon: ShoppingBag },
    { title: "Digital Products", icon: Layout },
    { title: "Wellness Apps", icon: Activity },
    { title: "Ad Revenue", icon: DollarSign }
  ];

  const aiIntegrations = [
    { icon: Repeat, title: "12 Concurrent Agents", description: "Build features in parallel at scale." },
    { icon: Bot, title: "Autonomous Execution", description: "Describe goals, agents handle implementation." },
    { icon: Layers, title: "Isolated Workspaces", description: "Git worktrees keep main branch safe." },
    { icon: CheckCircle2, title: "Self-Validating QA", description: "Catches issues before human review." },
    { icon: Kanban, title: "Visual Kanban Board", description: "Track agent progress in real-time." },
    { icon: Terminal, title: "CLI Automation", description: "Headless operation for CI/CD." }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05)_1px,transparent_1px)] bg-[length:40px_40px]" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
              <Bot className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-black tracking-widest uppercase">AI Agent Hub</span>
            </div>

            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none uppercase">
              #4429 <span className="text-primary italic">Lifestyle</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-light text-white/60 mb-12 max-w-4xl mx-auto leading-tight italic">
              Lifestyle + Marketing Agency Deploying <span className="text-white font-bold">Autonomous Agents</span> 24/7.
            </h2>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="h-20 px-12 text-2xl font-black bg-primary hover:bg-primary/90 rounded-none shadow-[15px_15px_0px_0px_rgba(239,68,68,0.2)] hover:shadow-none transition-all duration-300">
                ACTIVATE YOUR WORKFORCE
                <ArrowRight className="ml-3 w-8 h-8" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Agents Hub Grid */}
      <section className="py-32 bg-white text-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-end mb-20">
            <div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase mb-8">
                THE <span className="text-primary">WORKFORCE</span> OF THE FUTURE.
              </h2>
              <p className="text-2xl text-black/60 font-medium leading-relaxed">
                Stop managing people. Start managing agents. Deploy and manage autonomous workers that never sleep, never quit, and never lose momentum.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {agents.map((agent, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 bg-black text-white hover:bg-primary transition-colors duration-500"
              >
                <agent.icon className="w-12 h-12 mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 italic">{agent.title}</h3>
                <p className="text-white/60 group-hover:text-white transition-colors">{agent.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Business & Branding */}
      <section className="py-32 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Music Business */}
            <div className="space-y-10">
              <div className="w-20 h-20 bg-primary/10 flex items-center justify-center">
                <Music className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-4xl font-black uppercase italic tracking-tighter">Music Business</h3>
              <ul className="space-y-4">
                {musicBusiness.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/40 font-bold uppercase text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Marketing & Branding */}
            <div className="space-y-10">
              <div className="w-20 h-20 bg-accent/10 flex items-center justify-center">
                <Megaphone className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-4xl font-black uppercase italic tracking-tighter">Branding</h3>
              <ul className="space-y-4">
                {marketingBranding.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/40 font-bold uppercase text-sm">
                    <Zap className="w-5 h-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Studio */}
            <div className="space-y-10">
              <div className="w-20 h-20 bg-white/5 flex items-center justify-center">
                <Tv className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-black uppercase italic tracking-tighter">Content Studio</h3>
              <ul className="space-y-4">
                {contentStudio.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/40 font-bold uppercase text-sm">
                    <PlayCircle className="w-5 h-5 text-white/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Streams */}
      <section className="py-32 bg-primary group relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-6xl md:text-9xl font-black mb-20 tracking-tighter italic uppercase text-center md:text-left">
            REVENUE STREAMS
          </h2>
          <div className="flex flex-wrap gap-4">
            {revenueStreams.map((stream, i) => (
              <div key={i} className="bg-black text-white px-10 py-8 flex items-center gap-6 group/item hover:bg-white hover:text-black transition-colors">
                <stream.icon className="w-8 h-8 group-hover/item:scale-125 transition-transform" />
                <span className="text-3xl font-black uppercase italic tracking-tighter">{stream.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Integrations / Parallel Development */}
      <section className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase italic tracking-tighter">AI <span className="text-primary">INTEGRATIONS</span></h2>
            <p className="text-2xl text-white/40 max-w-3xl mx-auto">
              Supercharge your development with autonomous multi-agent coding. Describe the goal, agents handle the implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {aiIntegrations.map((item, i) => (
              <div key={i} className="bg-[#050505] p-12 hover:bg-white/5 transition-colors">
                <item.icon className="w-12 h-12 text-primary mb-8" />
                <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">{item.title}</h3>
                <p className="text-white/40 leading-relaxed font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">
                UNRELENTING <span className="text-primary italic">ANALYTICS.</span>
              </h2>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "Revenue Analytics", val: "REAL-TIME" },
                  { label: "Audience Growth", val: "PREDICTIVE" },
                  { label: "Engagement", val: "DEEP METRIC" },
                  { label: "Performance", val: "AI INSIGHT" }
                ].map((stat, i) => (
                  <div key={i} className="border-l-4 border-black pl-6 py-2">
                    <div className="text-xs font-black uppercase tracking-widest text-black/40 mb-1">{stat.label}</div>
                    <div className="text-3xl font-black italic">{stat.val}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative bg-black p-12 shadow-2xl">
                <BarChart4 className="w-full h-auto text-primary opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-8xl font-black text-white italic tracking-tighter">DATA</span>
                    <p className="text-primary font-mono tracking-widest text-sm uppercase mt-4">IS THE NEW CURRENCY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Pitch */}
      <section className="py-40 bg-[#050505] text-center">
        <h2 className="text-5xl md:text-9xl font-black mb-12 uppercase italic tracking-tighter">
          OWN THE <span className="text-primary italic">OUTCOME.</span>
        </h2>
        <p className="text-2xl md:text-4xl text-white/40 max-w-4xl mx-auto mb-20 leading-tight">
          #4429 Lifestyle isn't just an agency. It's an automated growth engine.
          Stop hiring and start scaling.
        </p>
        <Button size="lg" className="h-24 px-16 text-3xl font-black bg-primary hover:bg-primary/90 rounded-none shadow-2xl transition-all transform hover:scale-110">
          DEPLOY AGENTS NOW
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default Marketing;
