import { useState } from 'react';
import { ArrowRight, CheckCircle, Crown, Shield, Zap, HelpCircle, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AIPricing = () => {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  const packages = [
    {
      name: 'Launch',
      tagline: 'Perfect for independent artists and small brands launching something new.',
      monthly: 497,
      annual: 397,
      color: '#B89144',
      gradient: 'from-amber-600 to-yellow-600',
      features: [
        'Social media strategy & brand voice',
        '12 posts/month (copy + design)',
        'Monthly analytics report',
        '1 campaign per month',
        'Email support (48hr response)',
        'Content calendar access',
        'Basic growth tracking',
      ],
      notIncluded: [
        'Paid ad management',
        'Influencer outreach',
        'Video content creation',
        'Weekly calls',
        'API access',
      ],
      cta: 'Get Started',
      highlight: false,
      link: 'https://wd6ype73psnk2.mocha.app',
    },
    {
      name: 'Growth',
      tagline: 'Full-service management for brands ready to scale.',
      monthly: 997,
      annual: 797,
      color: '#7C3AED',
      gradient: 'from-violet-600 to-purple-600',
      features: [
        'Everything in Launch, plus:',
        '30 posts/month across all platforms',
        'Weekly analytics calls (30 min)',
        '3 campaigns per month',
        'Influencer outreach & management',
        'Paid ad management ($2k/mo spend)',
        'Priority support (24hr response)',
        'Video content (4 reels/tiktoks/mo)',
        'Community management',
        'Monthly strategy session (1hr)',
      ],
      notIncluded: [
        'Custom software development',
        'White-label reporting',
        'Dedicated account manager',
        'API access',
        '24/7 phone support',
      ],
      cta: 'Apply Now',
      highlight: true,
      link: 'https://wd6ype73psnk2.mocha.app',
    },
    {
      name: 'Empire',
      tagline: 'Done-for-you brand empire. Maximum reach. Full team.',
      monthly: 1997,
      annual: 1597,
      color: '#06B6D4',
      gradient: 'from-cyan-600 to-blue-600',
      features: [
        'Everything in Growth, plus:',
        'Unlimited content creation',
        'Full brand identity refresh',
        'PR & press outreach',
        'Launch strategy included',
        'Weekly video reports',
        'Dedicated strategist',
        'Custom dashboard & reporting',
        'API access (10k calls/mo)',
        '24/7 Slack support',
        'Quarterly business review',
        'Custom automation workflows',
      ],
      notIncluded: [
        'Custom software development (separate)',
        'White-label platform',
        'SLA guarantee',
        'On-premise deployment',
      ],
      cta: 'Book a Call',
      highlight: false,
      link: 'https://wd6ype73psnk2.mocha.app',
    },
  ];

  const addOns = [
    { name: 'Extra Social Posts', price: 197, desc: 'Additional 10 posts/month', period: '/mo' },
    { name: 'Video Package', price: 497, desc: '8 reels/tiktoks + 2 YouTube shorts', period: '/mo' },
    { name: 'Paid Ad Management', price: 997, desc: 'Up to $5k/mo ad spend managed', period: '/mo' },
    { name: 'Email/SMS Marketing', price: 497, desc: 'Full funnel sequences + automation', period: '/mo' },
    { name: 'Influencer Campaign', price: 1497, desc: 'End-to-end campaign (5-10 creators)', period: '/campaign' },
    { name: 'Custom AI Agent', price: 4997, desc: 'Built & deployed for your workflow', period: '/agent' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .orb { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; }
        .glass { background:rgba(255,255,255,0.03); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.08); }
        .glass-card { background:linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01)); backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px); border:1px solid rgba(255,255,255,0.1); transition:all 0.4s cubic-bezier(0.23,1,0.32,1); }
        .tag { font-family:'DM Mono',monospace; font-size:0.65rem; letter-spacing:0.2em; text-transform:uppercase; }
      `}</style>

      <Navbar />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="orb w-[700px] h-[700px] bg-red-700/12 -top-40 -left-40" style={{animation:'float 8s ease-in-out infinite'}} />
        <div className="orb w-[500px] h-[500px] bg-purple-700/10 top-1/2 right-0" style={{animation:'float 10s ease-in-out infinite 2s'}} />
        <div className="orb w-[400px] h-[400px] bg-cyan-700/8 bottom-0 left-1/3" style={{animation:'float 7s ease-in-out infinite 4s'}} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <Link to="/divisions/ai" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 mb-10 transition-colors text-sm">
            <ArrowRight className="w-3 h-3 rotate-180" /> Back to AI Division
          </Link>

          <div className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="tag text-red-400">Red Vision AI — Pricing</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tighter">
            <span className="block text-white">Simple.</span>
            <span className="block bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">Transparent.</span>
            <span className="block text-white/15 text-3xl md:text-4xl font-light mt-4 tracking-[0.5em]">No Surprises.</span>
          </h1>

          <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            Three tiers. Monthly or annual. Cancel anytime. No hidden fees. No long-term contracts.
          </p>

          <div className="mt-10">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-2">
              {['monthly', 'annual'].map((period) => (
                <button
                  key={period}
                  onClick={() => setBilling(period)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    billing === period
                      ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-[0_0_20px_rgba(229,25,42,0.3)]'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {period === 'monthly' ? 'Monthly' : 'Annual (Save 20%)'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative glass-card rounded-3xl p-8 flex flex-col ${pkg.highlight ? 'ring-2 ring-red-500/50 scale-[1.02]' : ''}`}
                style={{
                  border: pkg.highlight ? `2px solid ${pkg.color}40` : '1px solid rgba(255,255,255,0.1)',
                  background: pkg.highlight ? `linear-gradient(135deg, ${pkg.color}08, transparent)` : 'linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))',
                }}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                    MOST POPULAR · SAVE 20% ANNUAL
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="tag text-xs px-3 py-1.5 rounded-full" style={{background:`${pkg.color}18`,color:pkg.color,border:`1px solid ${pkg.color}28`}}>{pkg.name}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-2" style={{color:pkg.color}}>{pkg.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">{pkg.tagline}</p>

                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-black" style={{color:pkg.color}}>${billing === 'monthly' ? pkg.monthly : pkg.annual}</span>
                    <span className="text-white/40 text-lg">/mo</span>
                  </div>
                  {billing === 'annual' && (
                    <p className="text-green-400 text-xs font-medium">Billed $${pkg.annual * 12}/year — Save ${(pkg.monthly - pkg.annual) * 12}/year</p>
                  )}
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{color:pkg.color}} />
                      <span className="text-white/80 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-white/10 pt-6 mb-6">
                  <p className="text-white/40 text-xs mb-3 uppercase tracking-wider">Not Included</p>
                  <ul className="space-y-1.5 text-xs text-white/30">
                    {pkg.notIncluded.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{background:pkg.color}} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={pkg.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-2xl font-black text-lg transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                  style={{
                    background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}dd)`,
                    color: '#000',
                  }}
                >
                  {pkg.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Add-Ons <span className="text-red-500">À La Carte</span></h2>
            <p className="text-white/50 text-lg">Enhance any package. Add only what you need.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 group hover:border-white/20 hover:-translate-y-1 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-lg group-hover:text-red-400 transition-colors">{addon.name}</h3>
                </div>
                <p className="text-white/50 text-sm mb-4">{addon.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-red-400">${addon.price}</span>
                  <span className="text-white/40 text-sm">{addon.period}</span>
                </div>
                <button className="mt-4 w-full py-2 px-4 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold hover:bg-white/10 transition-all">
                  Add to Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">What's <span className="text-red-500">Included</span> in Every Package</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Dedicated Strategist', desc: 'One point of contact who knows your brand inside out.' },
              { icon: Zap, title: 'AI-Powered Execution', desc: 'Content, ads, analytics — automated with our proprietary agents.' },
              { icon: Crown, title: 'Weekly Reporting', desc: 'Real dashboard access + human-written insights every week.' },
              { icon: HelpCircle, title: 'No Contracts', desc: 'Month-to-month. Cancel anytime. No questions asked.' },
              { icon: ExternalLink, title: 'Platform Access', desc: 'Base44 app, dashboards, all tools included.' },
              { icon: ArrowUpRight, title: 'Growth Guarantee', desc: 'If we don\'t hit agreed KPIs, we work free until we do.' },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-red-600/20 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="orb w-[800px] h-[400px] bg-red-700/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-12 md:p-16" style={{background:'rgba(5,5,5,0.95)',border:'1px solid rgba(229,25,42,0.2)'}}>
            <Zap className="w-10 h-10 text-red-500 mx-auto mb-6" />
            <span className="tag text-red-400 block mb-6">Ready to Grow?</span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Pick a Tier.<br /><span className="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">Start This Week.</span>
            </h2>
            <p className="text-white/35 text-lg mb-10 max-w-xl mx-auto font-light">Free strategy call. No pressure. Just a real conversation about where you're trying to go.</p>
            <a href="https://wd6ype73psnk2.mocha.app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-red-600 text-white rounded-full font-black text-lg hover:bg-red-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(229,25,42,0.4)] transition-all">
              Book Free Strategy Call <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIPricing;