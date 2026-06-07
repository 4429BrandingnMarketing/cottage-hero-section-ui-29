import { useState } from 'react';
import { Brain, Sparkles, Zap, ArrowRight, Bot, Code2, BarChart3, Target,
         ShoppingCart, Star, CheckCircle, ExternalLink, Play, Globe,
         Cpu, Lock, TrendingUp, MessageSquare, Wand2, Music2, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ── MARKETPLACE PRODUCTS ──────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1, category: 'Free', badge: 'FREE LEAD MAGNET',
    name: 'Spotify + YouTube Player',
    tagline: 'The ultimate music discovery tool',
    desc: 'A fully configured Spotify + YouTube dual player. Drop your email, get instant access. Built on Qwen 3 — showcases the future of AI-powered music UX.',
    price: 'Free', priceNote: 'Email required',
    color: '#1db954', icon: Music2,
    features: ['Dual Spotify + YouTube embed', 'Playlist sync', 'Mobile optimized', 'Powered by Qwen 3'],
    cta: 'Get Free Access', href: '#funnel',
    highlight: false,
  },
  {
    id: 2, category: 'Starter', badge: 'BEST VALUE',
    name: 'AI Starter Kit — Basic',
    tagline: 'Your first AI toolkit',
    desc: 'The Spotify+YouTube player plus 3 pre-configured AI tools, a setup guide, and step-by-step walkthrough. Everything a creator needs to start using AI today.',
    price: '$27', priceNote: 'One-time',
    color: '#b89144', icon: Package,
    features: ['Spotify + YouTube Player', '3 pre-configured AI tools', 'Setup guide (PDF)', 'Video walkthrough', 'Email support'],
    cta: 'Buy Now — $27', href: 'https://paypal.com',
    highlight: false,
  },
  {
    id: 3, category: 'Pro', badge: 'MOST POPULAR',
    name: 'AI Starter Kit — Pro',
    tagline: 'Full AI creative suite',
    desc: 'The complete AI Marketplace — 10+ tools, Qwen 3 model access walkthrough, music production AI, content automation, and audience targeting systems.',
    price: '$97', priceNote: 'One-time',
    color: '#7c3aed', icon: Wand2,
    features: ['Everything in Basic', 'Full AI marketplace (10+ tools)', 'Qwen 3 model walkthrough', 'Music production AI tools', 'Content automation suite', 'Audience targeting system', 'Priority email support'],
    cta: 'Buy Now — $97', href: 'https://paypal.com',
    highlight: true,
  },
  {
    id: 4, category: 'Agency', badge: 'WHITE LABEL',
    name: 'AI Starter Kit — Agency',
    tagline: 'Resell as your own product',
    desc: 'White-label rights to the entire AI Starter Kit. Remove Red Vision branding, add yours, sell it to your own clients. Your product, your revenue.',
    price: '$297', priceNote: 'One-time + resell rights',
    color: '#06b6d4', icon: Globe,
    features: ['Everything in Pro', 'Full white-label rights', 'Remove RV branding', 'Resell to your clients', 'Agency license', 'Onboarding call (30 min)', 'Ongoing updates included'],
    cta: 'Buy Now — $297', href: 'https://paypal.com',
    highlight: false,
  },
  {
    id: 5, category: 'Service', badge: 'DONE FOR YOU',
    name: 'RV AI Agency — Starter',
    tagline: 'We build it for you',
    desc: 'Our team integrates AI into your creative business. Strategy, setup, and a custom automation pipeline — all done for you in 2 weeks.',
    price: '$297', priceNote: '/mo',
    color: '#f59e0b', icon: Bot,
    features: ['AI strategy session', 'Custom automation pipeline', 'Tool setup & configuration', 'Monthly optimization call', '2-week delivery'],
    cta: 'Get Started', href: 'https://rv-ai-agency.netlify.app',
    highlight: false,
  },
  {
    id: 6, category: 'Service', badge: 'FULL SERVICE',
    name: 'RV AI Agency — Pro',
    tagline: 'Full AI transformation',
    desc: 'End-to-end AI implementation for labels, managers, and creative agencies. Custom agents, marketing automation, analytics dashboards, and ongoing management.',
    price: '$997', priceNote: '/mo',
    color: '#ef4444', icon: Cpu,
    features: ['Everything in Starter', 'Custom AI agents built', 'Marketing automation', 'Analytics dashboard', 'Content generation pipeline', 'Weekly strategy calls', 'Priority support'],
    cta: 'Apply Now', href: 'https://rv-ai-agency.netlify.app',
    highlight: false,
  },
  {
    id: 7, category: 'Tool', badge: 'LIVE',
    name: 'PIVOT Tour System',
    tagline: 'AI-powered tour management',
    desc: 'The professional tour management platform for independent artists. Routing, budgeting, scheduling, and settlement — all in one AI-enhanced system.',
    price: '$49', priceNote: '/mo',
    color: '#10b981', icon: TrendingUp,
    features: ['Route optimization', 'Budget tracking', 'Venue database', 'Settlement reports', 'Artist portal', 'Mobile app'],
    cta: 'Start Free Trial', href: 'https://pivot-tour-app.netlify.app',
    highlight: false,
  },
  {
    id: 8, category: 'Tool', badge: 'NEW',
    name: 'AI Content Engine',
    tagline: 'Content on autopilot',
    desc: 'Generate 30 days of social content in 10 minutes. Captions, hashtags, video scripts, email sequences — all tailored to your brand voice using Qwen 3.',
    price: '$47', priceNote: '/mo',
    color: '#8b5cf6', icon: MessageSquare,
    features: ['30-day content calendar', 'Caption generator', 'Hashtag optimizer', 'Email sequences', 'Brand voice training', 'Qwen 3 powered'],
    cta: 'Coming Soon', href: '#',
    highlight: false,
  },
];

const SERVICES = [
  { icon: Brain, title: 'AI Integration Consulting', desc: 'We audit your current workflow and map exactly where AI saves you time and money. Then we build it.' },
  { icon: Code2, title: 'Custom Agent Development', desc: 'Bespoke AI agents for your specific business — A&R analysis, content creation, customer service, or operations.' },
  { icon: BarChart3, title: 'Predictive Analytics', desc: 'Turn your streaming, social, and sales data into actionable forecasts. Know what\'s working before your competition.' },
  { icon: Target, title: 'Marketing Automation', desc: 'AI-powered campaigns that run themselves. Audience targeting, A/B testing, and optimization on autopilot.' },
  { icon: Lock, title: 'AI Security & Compliance', desc: 'Protect your creative assets. CIPHER ensures your AI systems are secure, compliant, and audit-ready.' },
  { icon: Zap, title: 'Rapid Prototyping', desc: 'Go from idea to working AI demo in 48 hours. We build proof-of-concepts that win clients and close deals.' },
];

const CATEGORIES = ['All', 'Free', 'Starter', 'Pro', 'Agency', 'Service', 'Tool'];

export default function AI() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [funnelStatus, setFunnelStatus] = useState<'idle'|'sending'|'done'>('idle');

  const filtered = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleFunnelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFunnelStatus('sending');
    setTimeout(() => setFunnelStatus('done'), 1400);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-purple-500/5 pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors text-sm">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to home
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <Cpu className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI Technology Division</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-none">
                Red Vision <span className="text-primary">AI</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                The engine behind the entire Red Vision ecosystem. We build, deploy, and sell
                AI tools — and now you can access them too.
              </p>
              <p className="text-base text-muted-foreground/70 mb-8">
                From a free Spotify+YouTube player to white-label agency kits — every product 
                is battle-tested inside our own operation before it reaches you.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="#marketplace" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all">
                  Browse Marketplace
                </a>
                <a href="https://rv-ai-agency.netlify.app" target="_blank" rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-border rounded-full font-semibold hover:bg-secondary transition-all flex items-center gap-2">
                  AI Agency <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            {/* Animated grid visual */}
            <div className="relative h-[480px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-purple-900/20 border border-primary/10">
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-6 opacity-40">
                {Array.from({length:16}).map((_,i) => (
                  <div key={i} className="rounded-xl bg-primary/20 border border-primary/10 flex items-center justify-center"
                    style={{animationDelay:`${i*0.1}s`}}>
                    {i % 4 === 0 && <Brain className="w-5 h-5 text-primary/60" />}
                    {i % 4 === 1 && <Zap className="w-5 h-5 text-purple-400/60" />}
                    {i % 4 === 2 && <Bot className="w-5 h-5 text-cyan-400/60" />}
                    {i % 4 === 3 && <Sparkles className="w-5 h-5 text-amber-400/60" />}
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary/80 mb-2">119</div>
                  <div className="text-sm text-muted-foreground tracking-widest uppercase">AI Agents Active</div>
                  <div className="mt-3 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400">All systems live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FREE LEAD MAGNET FUNNEL ───────────────────────────────────────── */}
      <section id="funnel" className="py-16 px-4 bg-gradient-to-r from-[#1db954]/8 via-primary/5 to-purple-900/8 border-y border-border">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1db954]/15 border border-[#1db954]/25 rounded-full mb-4">
            <Music2 className="w-3.5 h-3.5 text-[#1db954]" />
            <span className="text-xs text-[#1db954] tracking-wider uppercase font-medium">Free Download</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Get the Spotify + YouTube Player <span className="text-primary">Free</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Drop your email. Get instant access to the AI-powered dual music player — the same one built into the Red Vision ecosystem. Built on Qwen 3.
          </p>
          {funnelStatus === 'done' ? (
            <div className="flex items-center justify-center gap-3 text-[#1db954] py-6">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-medium">Check your inbox — your player is on the way.</span>
            </div>
          ) : (
            <form onSubmit={handleFunnelSubmit} className="flex gap-3 max-w-md mx-auto flex-wrap sm:flex-nowrap">
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com" required
                className="flex-1 px-4 py-3 bg-card border border-border rounded-full text-sm outline-none focus:border-primary transition-colors"
              />
              <button type="submit" disabled={funnelStatus === 'sending'}
                className="px-6 py-3 bg-[#1db954] hover:bg-green-400 text-black font-semibold rounded-full text-sm transition-all whitespace-nowrap disabled:opacity-60">
                {funnelStatus === 'sending' ? 'Sending...' : 'Get Free Access →'}
              </button>
            </form>
          )}
          <p className="text-xs text-muted-foreground/50 mt-3">No spam. Unsubscribe anytime. Your info stays with Red Vision.</p>
        </div>
      </section>

      {/* ── MARKETPLACE ──────────────────────────────────────────────────── */}
      <section id="marketplace" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <ShoppingCart className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs text-primary tracking-wider uppercase font-medium">AI Marketplace</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Products & Tools</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every product is built and battle-tested inside Red Vision's own operation. 
              From a free player to full agency kits — built with Qwen 3 and the best models available.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex gap-2 flex-wrap justify-center mb-12">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' : 'bg-secondary text-muted-foreground hover:text-foreground border border-border'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(product => {
              const Icon = product.icon;
              return (
                <div key={product.id}
                  className={`relative bg-card border rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${product.highlight ? 'border-primary shadow-lg shadow-primary/15' : 'border-border hover:border-primary/30'}`}>
                  {product.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full tracking-wide">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center border"
                      style={{ background: `${product.color}18`, borderColor: `${product.color}30` }}>
                      <Icon className="w-6 h-6" style={{ color: product.color }} />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider px-2 py-1 rounded-full border"
                      style={{ color: product.color, borderColor: `${product.color}30`, background: `${product.color}12` }}>
                      {product.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-xs text-muted-foreground/70 mb-2 tracking-wide">{product.tagline}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{product.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {product.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: product.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-2xl font-bold">{product.price}</span>
                      <span className="text-xs text-muted-foreground">{product.priceNote}</span>
                    </div>
                    <a href={product.href} target={product.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl text-sm font-semibold text-center block transition-all hover:opacity-90"
                      style={{ background: product.color, color: '#fff' }}>
                      {product.cta}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AI SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Consulting Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Done-for-you AI implementation. We've spent 3 years building our own AI infrastructure — now we build yours.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="bg-card border border-border hover:border-primary/30 rounded-2xl p-8 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <a href="https://rv-ai-agency.netlify.app" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all">
              View Full Agency Services <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── QWEN SHOWCASE ────────────────────────────────────────────────── */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Star className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs text-purple-400 tracking-wider uppercase font-medium">Powered by Qwen 3</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built with the <span className="text-primary">Most Powerful</span> Models Available
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            We don't use one AI — we route every task to the best model for the job. 
            Qwen 3, Claude, GPT-4, Gemini, DeepSeek. The AI Starter Kit gives you access to the same infrastructure.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Qwen 3', 'Claude', 'GPT-4', 'Gemini', 'DeepSeek'].map(m => (
              <div key={m} className="bg-card border border-border rounded-xl py-3 text-center">
                <div className="text-sm font-semibold text-foreground">{m}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">Integrated</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
