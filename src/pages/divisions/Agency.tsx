import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Music2, Shirt, Youtube, Code2, Search, Share2, 
         Megaphone, Bot, ChevronRight, Play, Star, Zap, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    desc: "Premium websites, landing pages, and digital experiences. From Wix to custom React builds — we make brands look like empires.",
    price: "From $497",
    color: "#E5192A",
    agent: "AURORA / Creative Agent"
  },
  {
    icon: Search,
    title: "SEO & Search Domination",
    desc: "AI-powered SEO strategy that gets you found. Keyword research, on-page optimization, link building, and content strategy.",
    price: "From $297/mo",
    color: "#06B6D4",
    agent: "AXIOM / Research Agent"
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Full social media management — content creation, scheduling, community management, and paid campaigns across all platforms.",
    price: "From $497/mo",
    color: "#8B5CF6",
    agent: "MAVEN / CMO Agent"
  },
  {
    icon: Youtube,
    title: "YouTube Marketing & Page Building",
    desc: "Channel setup, optimization, thumbnail design, SEO, community posts, and growth strategy. We make channels that convert.",
    price: "From $397/mo",
    color: "#FF0000",
    agent: "AURORA / Creative Agent"
  },
  {
    icon: Megaphone,
    title: "Sales & Marketing Campaigns",
    desc: "End-to-end campaign strategy and execution. Email funnels, ad creative, copy, and analytics. Results-driven, always.",
    price: "From $997",
    color: "#F59E0B",
    agent: "MAVEN / CMO Agent"
  },
  {
    icon: Music2,
    title: "Music Production Services",
    desc: "Beats, mixing, mastering, and full production services. Grammy-adjacent quality at indie-friendly prices.",
    price: "From $197/track",
    color: "#10B981",
    agent: "Red Vision Music"
  },
  {
    icon: Shirt,
    title: "Merch & Fashion Design",
    desc: "Custom merchandise design, Printful integration, and full brand apparel lines. From logo tees to full fashion collections.",
    price: "From $197",
    color: "#C9A84C",
    agent: "GiFTD N' PrVLGD"
  },
  {
    icon: Code2,
    title: "Software & App Development",
    desc: "Web apps, mobile apps, AI tools, and custom software. Our engineers build the tools your business needs to scale.",
    price: "From $1,997",
    color: "#6366F1",
    agent: "FORGE / Engineer Agent"
  },
  {
    icon: Bot,
    title: "AI Agent Deployment",
    desc: "We build, train, and deploy custom AI agents for your business. Customer service, sales, content, research — all automated.",
    price: "From $497/mo",
    color: "#E5192A",
    agent: "Mission Control"
  },
];

const agents = [
  { name: "AURORA", role: "Creative Director", handles: ["Website Design", "Content Creation", "Brand Identity", "Merch Design", "YouTube Thumbnails"], color: "#E5192A" },
  { name: "MAVEN", role: "CMO / Marketing", handles: ["Social Media", "Ad Campaigns", "Email Funnels", "Analytics", "Growth Strategy"], color: "#8B5CF6" },
  { name: "AXIOM", role: "Research & SEO", handles: ["SEO Strategy", "Keyword Research", "Competitor Analysis", "Market Research", "Link Building"], color: "#06B6D4" },
  { name: "FORGE", role: "Engineer", handles: ["Web Development", "App Development", "API Integration", "Automation", "Custom Software"], color: "#10B981" },
  { name: "CIPHER", role: "Security & Ops", handles: ["System Security", "Data Protection", "Infrastructure", "Monitoring", "Compliance"], color: "#F59E0B" },
  { name: "HERMES", role: "COO / Orchestrator", handles: ["Agent Coordination", "Project Management", "Task Routing", "Quality Control", "Reporting"], color: "#C9A84C" },
];

const tiers = [
  {
    name: "Starter",
    price: "$297/mo",
    desc: "Perfect for artists and small brands getting started with AI-powered marketing.",
    includes: ["1 AI Agent (MAVEN)", "Social media management (3 platforms)", "Monthly analytics report", "Email support", "2 content pieces/week"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$797/mo",
    desc: "Full marketing suite with multiple agents running your brand 24/7.",
    includes: ["3 AI Agents (MAVEN + AURORA + AXIOM)", "Full social media management", "SEO + content strategy", "Monthly strategy call with Jason", "Weekly analytics + reporting", "5 content pieces/week", "Ad campaign management"],
    cta: "Most Popular",
    highlight: true,
  },
  {
    name: "Empire",
    price: "$1,997/mo",
    desc: "The full Red Vision stack. All agents, all services, white-glove execution.",
    includes: ["All 6 AI Agents", "Full website management", "Unlimited social content", "SEO + paid ads + email", "Weekly calls with Jason", "Custom app/tool development", "Merch design + drops", "Priority everything"],
    cta: "Build Your Empire",
    highlight: false,
  },
];

export default function Agency() {
  const [activeAgent, setActiveAgent] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-white/50 hover:text-white mb-8 transition-colors text-sm">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />Back to home
          </Link>

          <div className="text-center max-w-5xl mx-auto mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">4429 Lifestyle + Marketing & Brands</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                AI Agents Running<br />
                <span className="bg-gradient-to-r from-primary via-red-400 to-primary bg-clip-text text-transparent">
                  Your Business.
                </span>
              </h1>
              <p className="text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed">
                We're not just a marketing agency. We're a full AI-powered brand operation — 
                with specialized agents handling design, SEO, social, campaigns, development, and more. 
                While you sleep, we're building your empire.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="https://wd6ype73psnk2.mocha.app" target="_blank" rel="noreferrer"
                  className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/80 transition-all flex items-center gap-2">
                  Start Working With Us <ArrowRight className="w-5 h-5" />
                </a>
                <a href="https://app.base44.com/apps/6a1afa13ed2e0533fc0e8c23/editor/preview444" target="_blank" rel="noreferrer"
                  className="px-8 py-4 border border-white/20 text-white rounded-full font-bold text-lg hover:border-white/40 transition-all flex items-center gap-2">
                  <Play className="w-4 h-4" /> See Live Demo
                </a>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {[
              { n: "6", l: "AI Agents On Staff" },
              { n: "24/7", l: "Always Operating" },
              { n: "15+", l: "Years Experience" },
              { n: "∞", l: "Scalability" },
            ].map(s => (
              <div key={s.l} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">{s.n}</div>
                <div className="text-sm text-white/50">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-xs tracking-[4px] uppercase font-mono mb-3">What We Do</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Every Service.<br/>One Roof.</h2>
            <p className="text-white/50 max-w-2xl mx-auto">From a single Instagram post to a full digital empire — we've got an AI agent for that.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 flex flex-col">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all"
                    style={{ background: `${svc.color}20`, border: `1px solid ${svc.color}40` }}>
                    <Icon className="w-5 h-5" style={{ color: svc.color }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{svc.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1 mb-4">{svc.desc}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-sm font-bold" style={{ color: svc.color }}>{svc.price}</span>
                    <span className="text-xs text-white/30 font-mono">{svc.agent}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI AGENTS */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-xs tracking-[4px] uppercase font-mono mb-3">The Team</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Meet Your<br/>AI Staff.</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Six specialized agents, always on, never sleeping. Click any agent to see what they handle.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {agents.map((agent, i) => (
              <motion.div key={agent.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                onClick={() => setActiveAgent(activeAgent === i ? null : i)}
                className="cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/25 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{ background: `${agent.color}20`, border: `2px solid ${agent.color}`, color: agent.color }}>
                    {agent.name[0]}
                  </div>
                  <div>
                    <div className="font-bold" style={{ color: agent.color }}>{agent.name}</div>
                    <div className="text-xs text-white/40">{agent.role}</div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                </div>
                {activeAgent === i && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                    className="mt-3 pt-3 border-t border-white/10 space-y-2">
                    {agent.handles.map(h => (
                      <div key={h} className="flex items-center gap-2 text-sm text-white/60">
                        <ChevronRight className="w-3 h-3" style={{ color: agent.color }} />
                        {h}
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Embed Base44 demo */}
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">Live Agent Demo</h3>
                <p className="text-white/50 text-sm">See our AI agents in action — powered by 4429</p>
              </div>
              <a href="https://app.base44.com/apps/6a1afa13ed2e0533fc0e8c23/editor/preview444"
                target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/80 transition-colors">
                Open Full Demo <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            <div className="relative" style={{ paddingBottom: "60%", height: 0 }}>
              <iframe
                src="https://app.base44.com/apps/6a1afa13ed2e0533fc0e8c23/editor/preview444"
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
                title="4429 AI Agent Demo"
                allow="clipboard-write; microphone"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-4 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-xs tracking-[4px] uppercase font-mono mb-3">Pricing</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Invest in Your<br/>Empire.</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Lease our AI agents and services at a fraction of what it costs to hire a full team.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div key={tier.name}
                className={`rounded-3xl p-8 flex flex-col relative overflow-hidden transition-all ${
                  tier.highlight
                    ? "bg-primary/10 border-2 border-primary scale-105"
                    : "bg-white/5 border border-white/10"
                }`}>
                {tier.highlight && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" /> Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{tier.price}</div>
                <p className="text-white/50 text-sm mb-6">{tier.desc}</p>
                <div className="space-y-3 flex-1 mb-8">
                  {tier.includes.map(item => (
                    <div key={item} className="flex items-start gap-2 text-sm text-white/70">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <a href="https://wd6ype73psnk2.mocha.app" target="_blank" rel="noreferrer"
                  className={`block text-center py-4 rounded-2xl font-bold transition-all ${
                    tier.highlight
                      ? "bg-primary text-white hover:bg-primary/80"
                      : "border border-white/20 text-white hover:border-white/40"
                  }`}>
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-white/30 text-sm mt-8">
            Need something custom? <a href="https://wd6ype73psnk2.mocha.app" target="_blank" rel="noreferrer" className="text-primary hover:underline">Book a call with Jason →</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
