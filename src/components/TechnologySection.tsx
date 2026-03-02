import { motion } from 'framer-motion';
import { Cpu, Brain, Zap, Code, Bot, Radio, Mic2, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CAPABILITIES = [
  {
    icon: Brain,
    title: 'The Visionary OS',
    description: 'A proprietary AI-powered desktop application integrating Claude, GPT-4, and Gemini into one unified creative command center — purpose-built for music and entertainment professionals.',
    features: ['Multi-AI orchestration', 'Claude + GPT-4 + Gemini', 'Custom creative workflows', 'Real-time generation'],
    color: '#d4a574',
  },
  {
    icon: Bot,
    title: 'AI Agent Ecosystem',
    description: 'A network of autonomous AI agents — each specialized — running 24/7 to handle content creation, social media, marketing, podcasting, and distribution across every Red Vision division.',
    features: ['Autonomous content agents', 'Marketing automation', 'Social media scheduling', 'Multi-platform publishing'],
    color: '#a78bfa',
  },
  {
    icon: Code,
    title: 'OpenClaw Orchestration',
    description: 'Custom-built multi-agent framework that coordinates dozens of AI agents in concert. One prompt, infinite execution — from idea to deployment without human bottlenecks.',
    features: ['Multi-agent coordination', 'Task orchestration', 'Parallel execution', 'Error recovery'],
    color: '#34d399',
  },
  {
    icon: Radio,
    title: 'AI-Powered Radio & Podcast',
    description: 'Fully automated radio programming and podcast production pipeline. AI handles scripting, editing, scheduling, and distribution — creating a 24/7 broadcast presence with minimal manual effort.',
    features: ['Automated scripting', 'AI voice production', 'Auto-distribution', '24/7 programming'],
    color: '#f59e0b',
  },
  {
    icon: Mic2,
    title: 'Music Production Intelligence',
    description: 'AI tools integrated directly into the music production workflow — from beat analysis and arrangement suggestions to lyric assistance and mixing optimization using Logic Pro X.',
    features: ['Logic Pro X integration', 'Beat & stem analysis', 'Lyric assistance', 'Mix optimization'],
    color: '#ec4899',
  },
  {
    icon: Globe,
    title: 'E-Commerce Automation',
    description: 'Full Printful integration powering the Red Vision merch store — automatically syncing products, processing orders, and updating inventory across every sales channel.',
    features: ['Printful integration', 'Auto order fulfillment', 'Inventory sync', 'Multi-channel sales'],
    color: '#60a5fa',
  },
];

const STATS = [
  { value: '6+', label: 'AI Models Integrated' },
  { value: '24/7', label: 'Autonomous Operation' },
  { value: '100%', label: 'Division Coverage' },
  { value: '∞', label: 'Scale' },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 px-4 bg-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6 backdrop-blur-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Cpu className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Technology Division</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powering the Future of
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> Entertainment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Red Vision runs on a fully autonomous AI infrastructure — a living ecosystem of agents, models, and automation tools purpose-built for the music industry.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {STATS.map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {CAPABILITIES.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-2xl p-8 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${cap.color}20`, border: `1px solid ${cap.color}40` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: cap.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{cap.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cap.features.map((f, i) => (
                        <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 border border-white/10 rounded-3xl p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Sparkles className="w-12 h-12 mx-auto mb-6 text-accent" />
          <h3 className="text-3xl font-bold mb-4 text-white">Built to Run Without You</h3>
          <p className="mb-8 max-w-2xl mx-auto text-muted-foreground">
            Every Red Vision division is backed by AI infrastructure that works autonomously — so the vision keeps moving even when you step away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Zap className="w-4 h-4 mr-2" />
              Partner With Us
            </Button>
            <Button variant="outline" size="lg" className="px-8 border-accent/40 hover:bg-accent/10 text-foreground">
              <ArrowRight className="w-4 h-4 mr-2" />
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
