import { Cpu, Brain, Sparkles, ArrowRight, Zap, Film, Mic, Star, BookOpen, Camera, MessageSquare, ChevronRight, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AI = () => {
  const tools = [
    {
      icon: Film,
      name: "AI Scriptwriter",
      tagline: "From idea to full script in minutes",
      description: "Generate complete scripts, treatments, and story outlines for music videos, short films, and branded content. Powered by Red Vision's entertainment expertise baked into every prompt.",
      status: "Live",
      color: "#d4a574",
    },
    {
      icon: Mic,
      name: "Snitch Interviews",
      tagline: "Controversial. Compelling. AI-generated.",
      description: "AI-generated satirical celebrity interview content — crafted with the same sharp wit that powers A Tragic Mulatto. Perfect for social media content and entertainment media.",
      status: "Live",
      color: "#c8962a",
    },
    {
      icon: Star,
      name: "Trailer Maker",
      tagline: "Cinematic trailers, no production crew",
      description: "Input your concept, upload your footage or describe your project, and receive a fully scripted and structured trailer ready for production. Hollywood energy, startup speed.",
      status: "Live",
      color: "#d4a574",
    },
    {
      icon: Camera,
      name: "Red Valley Mall Portrait Studio",
      tagline: "AI-generated portrait photography",
      description: "Professional-grade AI portrait generation inspired by vintage mall photo studios. Create stunning artist press shots, fashion lookbook images, and promotional content without a camera crew.",
      status: "Beta",
      color: "#8b7355",
    },
    {
      icon: BookOpen,
      name: "The Pivot Book",
      tagline: "AI-assisted tour management intelligence",
      description: "Built from Jason Salvador's 384-page tour manager's survival guide. An AI-powered reference tool that draws on 25+ years of real entertainment industry experience to help artists and managers navigate the road.",
      status: "Coming Soon",
      color: "#c8962a",
    },
    {
      icon: MessageSquare,
      name: "Garbage Pail Cards",
      tagline: "AI-generated satirical collectibles",
      description: "Custom AI-generated Garbage Pail Kids-style cards for the entertainment industry. Roast your favorite (or least favorite) industry figures in collectible card format.",
      status: "Beta",
      color: "#8b7355",
    },
  ];

  const capabilities = [
    { icon: Brain, title: "Music Industry Intelligence", desc: "AI systems trained on 25+ years of real entertainment industry knowledge — not generic business advice." },
    { icon: Zap, title: "Automation Pipelines", desc: "End-to-end automation for content creation, marketing campaigns, and business operations across all Red Vision divisions." },
    { icon: Bot, title: "ARCHON Agent Network", desc: "44+ specialized AI agents operating across Red Vision divisions — from music A&R to fashion copywriting to satirical content generation." },
    { icon: Sparkles, title: "Creative AI Tools", desc: "Purpose-built tools for the entertainment and creative industries — not retrofitted corporate software." },
  ];

  const statusColors: Record<string, string> = {
    Live: '#22c55e',
    Beta: '#f59e0b',
    'Coming Soon': '#6b7280',
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #050305 0%, #0a0810 50%, #050305 100%)' }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(ellipse 80% 40% at 50% 0%, rgba(139,115,85,0.3) 0%, transparent 60%)`,
        }} />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M 30 0 L 60 30 L 30 60 L 0 30 Z' fill='none' stroke='%238b7355' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px',
        }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-[#8b7355] hover:text-[#d4a574] mb-12 transition-colors" style={{ fontFamily: 'Garamond, serif', letterSpacing: '0.1em' }}>
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#8b7355] rounded-full mb-8" style={{ background: 'rgba(139,115,85,0.1)' }}>
                <Cpu className="w-4 h-4 text-[#d4a574]" />
                <span className="text-sm font-medium text-[#d4a574]" style={{ fontFamily: 'Garamond, serif', letterSpacing: '0.2em' }}>AI DIVISION</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-light mb-6 text-white leading-none" style={{ fontFamily: 'Didot, Bodoni MT, Garamond, serif', letterSpacing: '-0.02em' }}>
                Red Vision
                <br />
                <span style={{ color: '#d4a574' }}>AI</span>
              </h1>

              <p className="text-xl text-[#c4b5a0] mb-10 leading-relaxed" style={{ fontFamily: 'Garamond, serif' }}>
                Purpose-built AI tools and automation systems for the music and entertainment industry. 
                Not generic AI — intelligence shaped by 25+ years of real industry experience.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="mailto:redvisionmusic@gmail.com?subject=Red Vision AI Inquiry"
                  className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold transition-all duration-300 hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #8b7355, #6b5345)', border: '2px solid #d4a574', fontFamily: 'Garamond, serif', letterSpacing: '0.2em' }}>
                  GET ACCESS
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Animated AI visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative h-[420px] rounded-3xl overflow-hidden"
              style={{ border: '1px solid rgba(139,115,85,0.3)', background: 'rgba(10,8,16,0.8)' }}
            >
              {/* Pulsing rings */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border"
                  style={{
                    width: `${i * 130}px`,
                    height: `${i * 130}px`,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderColor: `rgba(212,165,116,${0.15 / i})`,
                  }}
                  animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2 + i, repeat: Infinity, delay: i * 0.4 }}
                />
              ))}

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(139,115,85,0.2)', border: '2px solid rgba(212,165,116,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Brain className="w-10 h-10" style={{ color: '#d4a574' }} />
                </div>
              </div>

              {/* Floating agent labels */}
              {[
                { label: 'A&R Agent', top: '15%', left: '10%' },
                { label: 'Fashion AI', top: '15%', right: '10%' },
                { label: 'Script Agent', bottom: '20%', left: '10%' },
                { label: 'Merch AI', bottom: '20%', right: '10%' },
                { label: '44+ Agents', top: '50%', right: '5%' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="absolute text-xs px-3 py-1.5 rounded-full"
                  style={{
                    ...item,
                    background: 'rgba(139,115,85,0.15)',
                    border: '1px solid rgba(212,165,116,0.3)',
                    color: '#d4c5b0',
                    fontFamily: 'Garamond, serif',
                    letterSpacing: '0.05em',
                  }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
                >
                  {item.label}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-light text-[#d4a574] mb-4" style={{ fontFamily: 'Didot, Garamond, serif' }}>
              AI Tools & Products
            </h2>
            <p className="text-[#c4b5a0] text-xl max-w-2xl mx-auto" style={{ fontFamily: 'Garamond, serif' }}>
              Built specifically for creators, artists, and entertainment professionals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(139,115,85,0.25)',
                    cursor: 'default',
                  }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: `rgba(139,115,85,0.15)`, border: '1px solid rgba(212,165,116,0.2)' }}>
                      <Icon className="w-7 h-7" style={{ color: tool.color }} />
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full font-medium" style={{
                      background: `${statusColors[tool.status]}18`,
                      color: statusColors[tool.status],
                      border: `1px solid ${statusColors[tool.status]}40`,
                      fontFamily: 'Garamond, serif',
                      letterSpacing: '0.1em',
                    }}>
                      {tool.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-light text-white mb-2" style={{ fontFamily: 'Didot, Garamond, serif' }}>
                    {tool.name}
                  </h3>
                  <p className="text-sm text-[#d4a574] mb-4 italic" style={{ fontFamily: 'Garamond, serif' }}>
                    {tool.tagline}
                  </p>
                  <p className="text-[#c4b5a0] leading-relaxed" style={{ fontFamily: 'Garamond, serif' }}>
                    {tool.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ARCHON Agent Network */}
      <section className="py-20 px-4" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(139,115,85,0.15)', borderBottom: '1px solid rgba(139,115,85,0.15)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#8b7355] rounded-full mb-8" style={{ background: 'rgba(139,115,85,0.1)' }}>
                <Bot className="w-4 h-4 text-[#d4a574]" />
                <span className="text-sm font-medium text-[#d4a574]" style={{ fontFamily: 'Garamond, serif', letterSpacing: '0.2em' }}>ARCHON NETWORK</span>
              </div>

              <h2 className="text-5xl font-light text-white mb-6" style={{ fontFamily: 'Didot, Garamond, serif' }}>
                44 AI Agents.<br />
                <span style={{ color: '#d4a574' }}>One Vision.</span>
              </h2>

              <p className="text-xl text-[#c4b5a0] mb-8 leading-relaxed" style={{ fontFamily: 'Garamond, serif' }}>
                The ARCHON agent ecosystem powers Red Vision behind the scenes — specialized AI agents working 
                across every division simultaneously. From music A&R to fashion copywriting, content strategy 
                to business automation.
              </p>

              <div className="space-y-4">
                {[
                  'Music division agents — A&R, marketing, sync licensing',
                  'Fashion agents — lookbook copy, collection descriptions, trend analysis',
                  'Media agents — satirical content for A Tragic Mulatto',
                  'Business agents — reporting, task management, investor decks',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: '#d4a574' }} />
                    <p className="text-[#c4b5a0]" style={{ fontFamily: 'Garamond, serif' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div key={cap.title} className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(139,115,85,0.2)' }}>
                    <Icon className="w-8 h-8 mb-4" style={{ color: '#d4a574' }} />
                    <h4 className="text-lg font-medium text-white mb-2" style={{ fontFamily: 'Didot, Garamond, serif' }}>
                      {cap.title}
                    </h4>
                    <p className="text-sm text-[#c4b5a0]" style={{ fontFamily: 'Garamond, serif' }}>
                      {cap.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-light text-[#d4a574] mb-6" style={{ fontFamily: 'Didot, Garamond, serif' }}>
              Built for the Industry.<br />By the Industry.
            </h2>
            <p className="text-xl text-[#c4b5a0] mb-10" style={{ fontFamily: 'Garamond, serif' }}>
              No generic AI tools. No corporate templates. Red Vision AI is built on decades of real music 
              and entertainment experience — so every output actually understands the game.
            </p>
            <a
              href="mailto:redvisionmusic@gmail.com?subject=Red Vision AI — Access Request"
              className="inline-flex items-center gap-2 px-12 py-5 text-white font-semibold transition-all duration-300 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #8b7355, #6b5345)', border: '2px solid #d4a574', fontFamily: 'Garamond, serif', letterSpacing: '0.2em', fontSize: '1rem' }}
            >
              REQUEST ACCESS
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AI;
