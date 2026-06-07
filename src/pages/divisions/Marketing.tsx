import { useState } from 'react';
import { Megaphone, TrendingUp, Target, Users, BarChart3, Globe, ArrowRight,
         CheckCircle, Sparkles, ExternalLink, Star, Zap, Brain,
         Instagram, Mail, Send, PlayCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const SERVICES = [
  { icon: Target, title: 'AI-Powered Campaigns', desc: 'Data-driven ad campaigns that target your ideal audience with precision across every platform.', color: '#b89144' },
  { icon: TrendingUp, title: 'Content Strategy', desc: 'From idea to execution — content calendars, copywriting, and brand voice development.', color: '#7c3aed' },
  { icon: Globe, title: 'Social Media Management', desc: 'Full-service social for Instagram, TikTok, Twitter/X, and YouTube. Posting, engagement, growth.', color: '#06b6d4' },
  { icon: BarChart3, title: 'Analytics & Reporting', desc: 'Real-time dashboards and weekly performance reports so you always know what\'s working.', color: '#10b981' },
  { icon: Megaphone, title: 'Influencer Partnerships', desc: 'Curated influencer network and authentic partnership campaigns that move culture.', color: '#f59e0b' },
  { icon: Users, title: 'Community Building', desc: 'Email/SMS lists, fan communities, and brand loyalty systems that create lasting connections.', color: '#ef4444' },
  { icon: Brain, title: 'AI Brand Identity', desc: 'Logo, visual identity, brand voice, and guidelines — all AI-assisted, human-approved.', color: '#8b5cf6' },
  { icon: Zap, title: 'Launch Campaigns', desc: 'Product launches, album drops, merch releases — full-funnel campaigns from teaser to sale.', color: '#f472b6' },
];

const STATS = [
  { value: '200+', label: 'Campaigns Run' },
  { value: '50M+', label: 'Impressions Generated' },
  { value: '40+', label: 'Brands Served' },
  { value: '25yrs', label: 'Industry Experience' },
];

const BENEFITS = [
  'Music & entertainment industry specialists',
  'AI-powered content creation at scale',
  'Dedicated account management',
  'Real-time performance dashboards',
  'Cross-platform campaign execution',
  'Influencer & playlist network access',
  'Full-funnel strategy (awareness → sale)',
  'Weekly reporting & optimization',
];

const PACKAGES = [
  {
    name: 'Launch', price: '$497', period: '/mo',
    desc: 'Perfect for independent artists and small brands launching something new.',
    features: ['Social media strategy', '12 posts/mo (copy + design)', 'Monthly analytics report', '1 campaign per month', 'Email support'],
    color: '#b89144', cta: 'Get Started',
  },
  {
    name: 'Growth', price: '$997', period: '/mo',
    desc: 'Full-service management for brands ready to scale.',
    features: ['Everything in Launch', '30 posts/mo across all platforms', 'Weekly analytics calls', '3 campaigns per month', 'Influencer outreach', 'Paid ad management', 'Priority support'],
    color: '#7c3aed', cta: 'Apply Now', highlight: true,
  },
  {
    name: 'Empire', price: '$1,997', period: '/mo',
    desc: 'Done-for-you brand empire. Maximum reach. Full team.',
    features: ['Everything in Growth', 'Unlimited content creation', 'Full brand identity refresh', 'PR & press outreach', 'Launch strategy included', 'Weekly video reports', 'Dedicated strategist'],
    color: '#06b6d4', cta: 'Book a Call',
  },
];

const TABS = ['Overview', 'Services', 'Packages', 'AI Tools', 'Contact'];

export default function Marketing() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [formData, setFormData] = useState({ name:'', email:'', company:'', budget:'$500–$1,000', goals:'' });
  const [submitStatus, setSubmitStatus] = useState<'idle'|'sending'|'done'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('sending');
    setTimeout(() => setSubmitStatus('done'), 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors text-sm">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to home
          </Link>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                <Megaphone className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-amber-400">Full Service Agency</span>
              </div>
              <div className="text-xs text-muted-foreground tracking-[4px] uppercase mb-3 font-medium">#4429 Lifestyle + Marketing & Branding</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-none">
                We Build <span className="text-primary">Brands</span><br/>That Move<br/><span className="text-amber-400">Culture.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                A full-service creative agency specializing in music, entertainment, 
                and culture-forward brands. AI-powered execution. Human-led strategy.
              </p>
              <p className="text-base text-muted-foreground/70 mb-8">
                15 years in the music industry. 50M+ impressions generated. 
                We know how culture moves — and how to put your brand at the center of it.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="#contact" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all">
                  Get a Free Strategy Call
                </a>
                <button onClick={() => setActiveTab('Services')}
                  className="px-8 py-4 border-2 border-border rounded-full font-semibold hover:bg-secondary transition-all flex items-center gap-2">
                  Our Services <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            {/* Visual */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(s => (
                <div key={s.label} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-all hover:-translate-y-1">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent mb-2">{s.value}</div>
                  <div className="text-muted-foreground text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TABS ─────────────────────────────────────────────────────────── */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {TABS.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-secondary'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── OVERVIEW ─────────────────────────────────────────────────────── */}
      {activeTab === 'Overview' && (
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl font-bold mb-6">Why #4429?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  #4429 is the agency arm of Red Vision Creative Studio. Born inside the music industry, 
                  we understand what it takes to build a brand in one of the most competitive cultural spaces on the planet.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We've worked alongside Grammy-winning artists, platinum producers, and culture-defining brands. 
                  Now we bring that same level of execution to independent artists, labels, and lifestyle brands.
                </p>
                <div className="space-y-3">
                  {BENEFITS.map(b => (
                    <div key={b} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Base44 App Embed */}
              <div className="rounded-2xl overflow-hidden border border-border bg-card">
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-xs text-muted-foreground ml-2 font-mono">#4429 Brand Builder — Powered by Base44</span>
                  <a href="https://app.base44.com/apps/6a1afa13ed2e0533fc0e8c23/editor/preview"
                    target="_blank" rel="noopener noreferrer"
                    className="ml-auto text-primary hover:text-primary/80 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <iframe
                  src="https://app.base44.com/apps/6a1afa13ed2e0533fc0e8c23/editor/preview"
                  width="100%" height="520"
                  frameBorder="0"
                  title="#4429 Brand Builder"
                  className="block w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      {activeTab === 'Services' && (
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Full-stack creative services — strategy, execution, and analytics all under one roof.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {SERVICES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="bg-card border border-border hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}>
                      <Icon className="w-6 h-6" style={{ color: s.color }} />
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors text-sm">{s.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── PACKAGES ─────────────────────────────────────────────────────── */}
      {activeTab === 'Packages' && (
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h2>
              <p className="text-muted-foreground">No hidden fees. No long-term contracts. Cancel anytime.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {PACKAGES.map(pkg => (
                <div key={pkg.name}
                  className={`relative bg-card border rounded-2xl p-8 flex flex-col transition-all ${pkg.highlight ? 'border-primary shadow-xl shadow-primary/10 scale-105' : 'border-border hover:border-primary/30'}`}>
                  {pkg.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-1" style={{ color: pkg.color }}>{pkg.name}</h3>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      <span className="text-muted-foreground text-sm">{pkg.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{pkg.desc}</p>
                  </div>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-sm">
                        <CheckCircle className="w-4 h-4 shrink-0" style={{ color: pkg.color }} />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => setActiveTab('Contact')}
                    className="w-full py-3 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 hover:shadow-lg"
                    style={{ background: pkg.color }}>
                    {pkg.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── AI TOOLS TAB ─────────────────────────────────────────────────── */}
      {activeTab === 'AI Tools' && (
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">AI-Powered Marketing Tools</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The same tools we use internally — now available to #4429 clients.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-xs text-muted-foreground ml-2 font-mono">#4429 AI Brand Builder — Base44</span>
                <a href="https://app.base44.com/apps/6a1afa13ed2e0533fc0e8c23/editor/preview"
                  target="_blank" rel="noopener noreferrer" className="ml-auto text-primary">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <iframe
                src="https://app.base44.com/apps/6a1afa13ed2e0533fc0e8c23/editor/preview"
                width="100%" height="600" frameBorder="0"
                title="#4429 AI Brand Builder" className="block w-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      {activeTab === 'Contact' && (
        <section id="contact" className="py-24 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Let's Talk Strategy</h2>
              <p className="text-muted-foreground">Free 30-minute strategy call. No obligation. Just real talk about your brand.</p>
            </div>
            {submitStatus === 'done' ? (
              <div className="text-center py-16 bg-card border border-border rounded-2xl">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">We'll be in touch within 24 hours.</h3>
                <p className="text-muted-foreground text-sm">Check your inbox — we're booking strategy calls this week.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  {[{k:'name',l:'Name',t:'text',ph:'Your name'},{k:'email',l:'Email',t:'email',ph:'your@email.com'}].map(f => (
                    <div key={f.k}>
                      <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">{f.l}</label>
                      <input type={f.t} required value={(formData as any)[f.k]} placeholder={f.ph}
                        onChange={e => setFormData(p=>({...p,[f.k]:e.target.value}))}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Company / Brand Name</label>
                  <input type="text" value={formData.company} placeholder="Your brand or company"
                    onChange={e => setFormData(p=>({...p,company:e.target.value}))}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Monthly Budget</label>
                  <select value={formData.budget} onChange={e => setFormData(p=>({...p,budget:e.target.value}))}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors">
                    {['Under $500','$500–$1,000','$1,000–$2,500','$2,500–$5,000','$5,000+'].map(b=>(
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Goals & Vision</label>
                  <textarea required value={formData.goals} onChange={e => setFormData(p=>({...p,goals:e.target.value}))}
                    placeholder="What are you trying to achieve? Launch a product? Grow a fanbase? Build a brand from scratch?"
                    rows={4} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none" />
                </div>
                <button type="submit" disabled={submitStatus === 'sending'}
                  className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-60 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  {submitStatus === 'sending' ? 'Booking...' : 'Book Free Strategy Call →'}
                </button>
                <p className="text-center text-xs text-muted-foreground/50">
                  By submitting you agree to receive communications from #4429 Agency. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
