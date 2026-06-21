import { useState } from 'react';
import { ArrowRight, CheckCircle, Shield, Users, BarChart3, Calendar, CreditCard, Download, Zap, Crown, Lock, HelpCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PivotTourSystem = () => {
  const [selectedTier, setSelectedTier] = useState<'core' | 'pro' | 'enterprise'>('pro');
  const [showCheckout, setShowCheckout] = useState(false);

  const tiers = {
    core: {
      name: 'PIVOT Core',
      price: 49,
      period: '/mo',
      tagline: 'Essential tour management for independent artists',
      description: 'Perfect for artists and managers running club-level tours who need professional systems without the enterprise complexity.',
      features: [
        'Tour Budget Builder (10 tours/year)',
        'Advance Sheet Generator',
        'Venue Contact Database (100 contacts)',
        'Merch Inventory Tracker',
        'Basic Settlement Calculator',
        'Contract & Rider Templates',
        'Email Support',
        'Mobile Web App Access',
      ],
      limits: ['1 user', '10 active tours', '100 venues', 'No API access', 'No team collaboration'],
      cta: 'Start Free Trial',
      color: '#10B981',
      gradient: 'from-emerald-600 to-teal-600',
      popular: false,
    },
    pro: {
      name: 'PIVOT Pro',
      price: 79,
      period: '/mo',
      tagline: 'Full tour management suite for working professionals',
      description: 'The complete system Jason uses. Unlimited tours, team collaboration, advanced analytics, and priority support.',
      features: [
        'Everything in Core, plus:',
        'Unlimited Tours & Venues',
        'Team Collaboration (5 seats)',
        'Advanced Analytics Dashboard',
        'Real-time Budget Tracking',
        'Automated Settlement Reports',
        'Merch P&L Analytics',
        'Routing Optimizer',
        'API Access (1,000 calls/mo)',
        'Priority Email/Chat Support',
        'iOS/Android Native Apps',
        'Custom Branded Reports',
      ],
      limits: ['5 team members', '1,000 API calls/mo', 'Standard support hours'],
      cta: 'Get Started',
      color: '#E5192A',
      gradient: 'from-red-600 to-orange-600',
      popular: true,
    },
    enterprise: {
      name: 'PIVOT Enterprise',
      price: 99,
      period: '/mo',
      tagline: 'White-label tour management for labels & agencies',
      description: 'Multi-artist management, white-label branding, dedicated support, and custom integrations for labels and management companies.',
      features: [
        'Everything in Pro, plus:',
        'Unlimited Team Seats',
        'Multi-Artist Management',
        'White-Label Branding',
        'Custom Domain & SSL',
        'SSO/SAML Authentication',
        'Unlimited API Access',
        'Dedicated Account Manager',
        '24/7 Phone Support',
        'Custom Integrations',
        'Data Export & Ownership',
        'SLA Guarantee (99.9%)',
        'Onboarding & Training Included',
      ],
      limits: ['Custom limits', 'Dedicated infrastructure', 'Contract required'],
      cta: 'Contact Sales',
      color: '#8B5CF6',
      gradient: 'from-violet-600 to-purple-600',
      popular: false,
    },
  };

  const tier = tiers[selectedTier];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        .orb { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; }
        .glass { background:rgba(255,255,255,0.03); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.08); }
        .glass-card { background:linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01)); backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px); border:1px solid rgba(255,255,255,0.1); transition:all 0.4s cubic-bezier(0.23,1,0.32,1); }
        .tag { font-family:'DM Mono',monospace; font-size:0.65rem; letter-spacing:0.2em; text-transform:uppercase; }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="orb w-[700px] h-[700px] bg-red-700/12 -top-40 -left-40" style={{animation:'float 8s ease-in-out infinite'}} />
        <div className="orb w-[500px] h-[500px] bg-purple-700/10 top-1/2 right-0" style={{animation:'float 10s ease-in-out infinite 2s'}} />
        <div className="orb w-[400px] h-[400px] bg-cyan-700/8 bottom-0 left-1/3" style={{animation:'float 7s ease-in-out infinite 4s'}} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 mb-12 transition-colors text-sm">
            <ArrowRight className="w-3 h-3 rotate-180" /> Back
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="tag text-red-400">Tour Management System</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black leading-none mb-6 tracking-tighter">
              <span className="block text-white">PIVOT</span>
              <span className="block bg-gradient-to-r from-red-500 via-red-400 to-amber-400 bg-clip-text text-transparent">TOUR SYSTEM</span>
              <span className="block text-white/15 text-3xl md:text-4xl font-light mt-4 tracking-[0.5em]">Run Tours Like a Major Label</span>
            </h1>

            <p className="text-xl text-white/40 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              The only tour management platform built by someone who's actually advanced shows, negotiated riders, and made tours profitable for 25 years.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => setShowCheckout(true)}
                className="group px-8 py-4 bg-red-600 text-white rounded-full font-black text-lg hover:bg-red-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(229,25,42,0.4)] transition-all flex items-center gap-3"
              >
                Start Free Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link to="/pivot-book" className="px-8 py-4 glass rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2">
                Get the Book First <HelpCircle className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[{n:'25+',l:'Years Experience'},{n:'500+',l:'Shows Advanced'},{n:'$50M+',l:'Budgets Managed'},{n:'99.9%',l:'Uptime SLA'}].map((s,i) => (
              <div key={s.l} className="glass-card rounded-2xl p-5 text-center" style={{animation:`float ${5+i}s ease-in-out infinite`,animationDelay:`${i*0.5}s`}}>
                <div className="text-3xl font-black text-red-500 mb-1">{s.n}</div>
                <div className="text-xs text-white/30 uppercase tracking-widest font-mono">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIER SELECTOR */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Choose Your <span className="text-red-500">Level</span></h2>
            <p className="text-white/50 text-lg">Start free. Upgrade anytime. No long-term contracts.</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="glass rounded-full p-1 flex gap-1">
              {(['core','pro','enterprise'] as const).map((key) => {
                const t = tiers[key];
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedTier(key)}
                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${selectedTier === key ? `bg-gradient-to-r ${t.gradient} text-white shadow-[0_0_30px_${t.color}40]` : 'text-white/50 hover:text-white hover:bg-white/5'}`}
                  >
                    {t.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* PRICING CARDS */}
          <div className="grid md:grid-cols-3 gap-6">
            {(['core','pro','enterprise'] as const).map((key) => {
              const t = tiers[key];
              return (
                <div
                  key={key}
                  className={`relative glass-card rounded-3xl p-8 flex flex-col ${selectedTier === key ? `ring-2 ring-${t.color}/50 scale-[1.02]` : ''}`}
                  style={{border: selectedTier === key ? `2px solid ${t.color}40` : '1px solid rgba(255,255,255,0.1)'}}
                >
                  {t.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="tag text-xs px-3 py-1.5 rounded-full" style={{background:`${t.color}18`,color:t.color,border:`1px solid ${t.color}28`}}>{t.tagline}</span>
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{background:t.color,boxShadow:`0 0 8px ${t.color}`}} />
                    </div>
                    <h3 className="text-2xl font-black mb-2" style={{color:t.color}}>{t.name}</h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-6 font-light">{t.description}</p>

                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-5xl font-black" style={{color:t.color}}>${t.price}</span>
                      <span className="text-white/40 text-lg">{t.period}</span>
                    </div>
                    <p className="text-white/30 text-xs">Billed monthly. Cancel anytime.</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {t.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{color:t.color}} />
                        <span className="text-white/80 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-white/10 pt-6 mb-6">
                    <p className="text-white/40 text-xs mb-3">Limitations</p>
                    <ul className="space-y-1.5 text-xs text-white/30">
                      {t.limits.map((limit, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Lock className="w-3 h-3" style={{color:t.color}} />
                          <span>{limit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full py-4 rounded-2xl font-black text-lg transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                    style={{
                      background: selectedTier === key ? `linear-gradient(135deg, ${t.color}, ${t.color}dd)` : 'rgba(255,255,255,0.05)',
                      color: selectedTier === key ? '#000' : '#fff',
                      border: selectedTier === key ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {t.cta} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Annual discount note */}
          <div className="text-center mt-12">
            <p className="text-white/40 text-sm">
              <span className="text-amber-400 font-bold">Save 20%</span> with annual billing. All tiers include 14-day free trial. No credit card required to start.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE DEEP DIVE */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="tag text-red-400 block mb-4">What You Get</span>
            <h2 className="text-5xl md:text-7xl font-black mb-6">Every Tool. <span className="text-white/15">One Platform.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Calendar, title: 'Advancing & Routing', desc: 'Build routes that make geographic and financial sense. Advance sheets auto-generate from your calendar.', color: '#E5192A' },
              { icon: BarChart3, title: 'Real-Time Budgets', desc: 'Track every dollar in real time. Know your P&L before you leave the house. No surprises at settlement.', color: '#06B6D4' },
              { icon: Shield, title: 'Contracts & Riders', desc: 'Battle-tested templates for every scenario. Artist, production, hospitality — all reviewed by entertainment attorneys.', color: '#10B981' },
              { icon: Users, title: 'Team Collaboration', desc: 'Assign roles, share documents, communicate in-context. Everyone sees what they need, when they need it.', color: '#8B5CF6' },
              { icon: Download, title: 'Merch Management', desc: 'Inventory, pricing, reorder points, venue splits. The merch system that actually makes you money.', color: '#F59E0B' },
              { icon: Zap, title: 'Automation & API', desc: 'Webhooks, Zapier, custom integrations. Connect PIVOT to your existing stack in minutes.', color: '#C9A84C' },
            ].map((feature, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 group hover:border-white/20 hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{background:`${feature.color}15`,border:`1px solid ${feature.color}30`}}>
                  <feature.icon className="w-7 h-7" style={{color:feature.color}} />
                </div>
                <h3 className="text-xl font-black mb-3 group-hover:text-red-400 transition-colors">{feature.title}</h3>
                <p className="text-white/40 leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Side-by-Side <span className="text-red-500">Comparison</span></h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 text-white/40 text-sm font-medium">Feature</th>
                  {(['core','pro','enterprise'] as const).map((key) => {
                    const t = tiers[key];
                    return (
                      <th key={key} className="pb-4 px-4 font-black" style={{color:t.color}}>{t.name}</th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Tour Budgets', core: '10/year', pro: 'Unlimited', enterprise: 'Unlimited' },
                  { feature: 'Active Tours', core: '10', pro: 'Unlimited', enterprise: 'Unlimited' },
                  { feature: 'Venue Database', core: '100 contacts', pro: 'Unlimited', enterprise: 'Unlimited' },
                  { feature: 'Team Seats', core: '1', pro: '5', enterprise: 'Unlimited' },
                  { feature: 'Analytics Dashboard', core: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
                  { feature: 'API Access', core: 'No', pro: '1,000/mo', enterprise: 'Unlimited' },
                  { feature: 'Native Mobile Apps', core: 'Web only', pro: 'iOS/Android', enterprise: 'iOS/Android' },
                  { feature: 'White-Label', core: 'No', pro: 'No', enterprise: 'Yes' },
                  { feature: 'SSO/SAML', core: 'No', pro: 'No', enterprise: 'Yes' },
                  { feature: 'Support', core: 'Email', pro: 'Priority Chat', enterprise: '24/7 Phone + Manager' },
                  { feature: 'SLA', core: 'Best effort', pro: '99.5%', enterprise: '99.9% + credits' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-4 text-white/70 font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-white/50 text-sm">{row.core}</td>
                    <td className="py-4 px-4 text-white/70 text-sm font-medium text-red-400">{row.pro}</td>
                    <td className="py-4 px-4 text-white/70 text-sm font-medium text-violet-400">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Built For <span className="text-red-500">You</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Independent Artists', desc: 'You manage your own tours. You need professional tools without a label budget.', icon: Crown },
              { title: 'Tour Managers', desc: 'You run tours for clients. You need systems that scale and reports that impress.', icon: Users },
              { title: 'Labels & Agencies', desc: 'You manage multiple artists. You need multi-artist views, white-label, and team control.', icon: Shield },
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

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="orb w-[800px] h-[400px] bg-red-700/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-12 md:p-16" style={{background:'rgba(5,5,5,0.95)',border:'1px solid rgba(229,25,42,0.2)'}}>
            <Zap className="w-10 h-10 text-red-500 mx-auto mb-6" />
            <span className="tag text-red-400 block mb-6">Ready to Stop Losing Money on Tours?</span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Your Tour Business.<br /><span className="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">Professionalized.</span>
            </h2>
            <p className="text-white/35 text-lg mb-10 max-w-xl mx-auto font-light">Join the managers and artists running profitable tours with PIVOT. 14-day free trial. No credit card. Cancel anytime.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => setShowCheckout(true)}
                className="px-10 py-5 bg-red-600 text-white rounded-full font-black text-lg hover:bg-red-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(229,25,42,0.4)] transition-all flex items-center gap-3"
              >
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </button>
              <Link to="/pivot-book" className="px-10 py-5 glass rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3">
                <BookOpen className="w-5 h-5" /> Read the Book First
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKOUT MODAL */}
      {showCheckout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowCheckout(false)}>
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 max-w-md w-full relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowCheckout(false)} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">×</button>

            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-2">Start Your 14-Day Free Trial</h3>
              <p className="text-white/60">{tier.name} — ${tier.price}{tier.period} after trial</p>
            </div>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className="space-y-4">
              <input type="hidden" name="cmd" value="_xclick-subscriptions" />
              <input type="hidden" name="business" value="redvisionmusic@gmail.com" />
              <input type="hidden" name="item_name" value={`PIVOT Tour System - ${tier.name}`} />
              <input type="hidden" name="a3" value={tier.price.toString()} />
              <input type="hidden" name="p3" value="1" />
              <input type="hidden" name="t3" value="M" />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="hidden" name="src" value="1" />
              <input type="hidden" name="sra" value="1" />
              <input type="hidden" name="return" value="https://redvisioncreativestudio.com/pivot-tour/success" />
              <input type="hidden" name="cancel_return" value="https://redvisioncreativestudio.com/pivot-tour" />

              <button
                type="submit"
                className="w-full py-4 bg-[#0070BA] text-white rounded-xl font-black text-lg hover:bg-[#005ea6] transition-all flex items-center justify-center gap-3"
              >
                <CreditCard className="w-5 h-5" /> Subscribe with PayPal
              </button>
            </form>

            <p className="text-center text-white/40 text-sm mt-4">
              First 14 days free. Cancel anytime in PayPal settings.
            </p>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-center text-white/50 text-xs">
                Prefer Stripe? Email <a href="mailto:redvisionmusic@gmail.com" className="text-red-400 hover:underline">redvisionmusic@gmail.com</a> for invoice billing.
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PivotTourSystem;