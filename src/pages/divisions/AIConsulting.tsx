import { useState } from 'react';
import { ArrowRight, Calendar, Clock, CheckCircle, Shield, Zap, Brain, Users, ArrowUpRight, MessageSquare, FileText, Target, HelpCircle, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AIConsulting = () => {
  const tiers = [
    {
      name: 'Strategy Session',
      price: 150,
      period: '/session',
      tagline: 'One focused hour. Clear direction. Immediate action items.',
      description: 'Perfect when you\'re at a crossroads — new release, tour planning, brand pivot, or just need an outside eye from someone who\'s been there.',
      features: [
        '60-minute video call with Jason',
        'Pre-call questionnaire (we do homework)',
        'Live strategy whiteboarding',
        'Recorded session + transcript',
        'Follow-up action plan (PDF)',
        '2 weeks email follow-up',
        'Access to relevant templates',
      ],
      outcomes: [
        'Clear next steps for your specific situation',
        'Budget/timeline reality check',
        'Resource & contact recommendations',
        'Risk assessment & mitigation',
      ],
      notIncluded: [
        'Ongoing management',
        'Implementation',
        'Team training',
        'Custom deliverables',
      ],
      cta: 'Book Session',
      color: '#10B981',
      gradient: 'from-emerald-600 to-teal-600',
      highlight: false,
      link: 'https://wd6ype73psnk2.mocha.app',
    },
    {
      name: 'Deep Dive',
      price: 497,
      period: '/engagement',
      tagline: 'Two weeks. Deep analysis. Complete roadmap.',
      description: 'For artists, managers, and labels who need a comprehensive plan — tour routing, release strategy, brand architecture, or business restructuring.',
      features: [
        'Everything in Strategy Session, plus:',
        '2 x 90-minute sessions (Week 1 & 2)',
        'Comprehensive audit (brand, biz, ops)',
        'Competitive landscape analysis',
        'Custom 90-day roadmap (20+ pages)',
        'Budget modeling & projections',
        'Vendor/partner recommendations',
        'Contract review (1 agreement)',
        '4 weeks Slack access to Jason',
        'Weekly check-ins (30 min)',
        'All relevant templates & tools',
      ],
      outcomes: [
        'Complete strategic plan with timelines',
        'Budget with scenarios (conservative/aggressive)',
        'Hiring/contracting roadmap',
        'Risk register & mitigation strategies',
        'KPIs & measurement framework',
      ],
      notIncluded: [
        'Ongoing execution',
        'Team management',
        'Custom software development',
        'Legal representation',
      ],
      cta: 'Apply Now',
      color: '#E5192A',
      gradient: 'from-red-600 to-orange-600',
      highlight: true,
      link: 'https://wd6ype73psnk2.mocha.app',
    },
    {
      name: 'Fractional Executive',
      price: 1500,
      period: '/month',
      tagline: 'Ongoing strategic leadership. Your fractional COO/CMO.',
      description: 'For established businesses needing consistent high-level guidance without a full-time executive hire. Jason joins your leadership team part-time.',
      features: [
        'Everything in Deep Dive, plus:',
        'Weekly 60-minute leadership call',
        'Unlimited Slack/email access (business hours)',
        'Monthly board/investor deck updates',
        'Team leadership & mentorship',
        'Vendor management & negotiation',
        'Quarterly strategic planning sessions',
        'Custom dashboard & reporting',
        'Contract & deal review (unlimited)',
        'Hiring support & interview panels',
        'Crisis management availability',
        'Network introductions (targeted)',
        'Annual retreat planning & facilitation',
      ],
      outcomes: [
        'Executed strategy with accountability',
        'Team operating at higher level',
        'Measurable business growth',
        'Risk mitigation in real-time',
        'Leadership development',
      ],
      notIncluded: [
        'Day-to-day operations',
        'Legal/financial advice',
        'Custom software builds (separate)',
        'On-site full-time presence',
      ],
      cta: 'Start Conversation',
      color: '#8B5CF6',
      gradient: 'from-violet-600 to-purple-600',
      highlight: false,
      link: 'https://wd6ype73psnk2.mocha.app',
    },
  ];

  const faqs = [
    {
      q: 'What\'s the difference between consulting and the agency packages?',
      a: 'Consulting is Jason\'s direct strategic guidance — you execute. Agency packages are execution — we do the work. Many clients start with consulting, then move to agency for implementation.'
    },
    {
      q: 'Can I upgrade from Strategy Session to Deep Dive?',
      a: 'Yes. Your Strategy Session fee applies as credit toward Deep Dive if you upgrade within 30 days.'
    },
    {
      q: 'What industries do you specialize in?',
      a: 'Music, entertainment, creator economy, fashion/lifestyle, and tech-enabled consumer brands. 25 years in music industry — that\'s the core.'
    },
    {
      q: 'Do you sign NDAs?',
      a: 'Standard mutual NDA included in every engagement. Your IP stays yours.'
    },
    {
      q: 'What\'s the time commitment?',
      a: 'Strategy Session: 1 hour. Deep Dive: 2 weeks part-time. Fractional: 4-8 hours/week of your team\'s time plus our calls.'
    },
    {
      q: 'Refund policy?',
      a: 'Strategy Session: full refund if not satisfied after call. Deep Dive: refund minus $150 if cancelled before Week 2 deliverable. Fractional: month-to-month, cancel anytime.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .orb { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; }
        .glass { background:rgba(255,255,255,0.03); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.08); }
        .glass-card { background:linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01)); backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px); border:1px solid rgba(255,255,255,0.1); transition:all 0.4s cubic-bezier(0.23,1,0.32,1); }
        .tag { font-family:'DM Mono',monospace; font-size:0.65rem; letter-spacing:0.2em; text-transform:uppercase; }
        details summary { cursor: pointer; list-style: none; }
        details summary::-webkit-details-marker { display: none; }
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
            <span className="tag text-red-400">Jason Salvador #4429 — Consulting</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tighter">
            <span className="block text-white">Strategic Guidance</span>
            <span className="block bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">From Someone</span>
            <span className="block text-white/15 text-3xl md:text-4xl font-light mt-4 tracking-[0.5em]">Who's Done It.</span>
          </h1>

          <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            25+ years. Grammy artists. Major label deals. International tours. Seven-figure merch. No theory — just what works.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative glass-card rounded-3xl p-8 flex flex-col ${tier.highlight ? 'ring-2 ring-red-500/50 scale-[1.02]' : ''}`}
                style={{
                  border: tier.highlight ? `2px solid ${tier.color}40` : '1px solid rgba(255,255,255,0.1)',
                  background: tier.highlight ? `linear-gradient(135deg, ${tier.color}08, transparent)` : 'linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))',
                }}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                    BEST VALUE · MOST POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="tag text-xs px-3 py-1.5 rounded-full" style={{background:`${tier.color}18`,color:tier.color,border:`1px solid ${tier.color}28`}}>{tier.name}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-2" style={{color:tier.color}}>{tier.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">{tier.tagline}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{tier.description}</p>

                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-black" style={{color:tier.color}}>${tier.price}</span>
                    <span className="text-white/40 text-lg">{tier.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6 flex-1">
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider font-medium mb-3 flex items-center gap-2">
                      <Target className="w-3 h-3" style={{color:tier.color}} />
                      What You Get
                    </p>
                    <ul className="space-y-2">
                      {tier.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{color:tier.color}} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider font-medium mb-3 flex items-center gap-2">
                      <Flag className="w-3 h-3" style={{color:tier.color}} />
                      Outcomes
                    </p>
                    <ul className="space-y-2">
                      {tier.outcomes.map((o, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                          <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5" style={{color:tier.color}} />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider font-medium mb-3 flex items-center gap-2">
                      <Shield className="w-3 h-3" style={{color:tier.color}} />
                      Not Included
                    </p>
                    <ul className="space-y-2">
                      {tier.notIncluded.map((n, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-white/40">
                          <span className="w-2 h-2 rounded-full" style={{background:tier.color}} />
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={tier.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-2xl font-black text-lg transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                  style={{
                    background: `linear-gradient(135deg, ${tier.color}, ${tier.color}dd)`,
                    color: '#000',
                  }}
                >
                  {tier.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Common <span className="text-red-500">Questions</span></h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card rounded-2xl p-6 group">
                <summary className="flex items-center justify-between font-medium text-lg">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-red-400" />
                    {faq.q}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="text-white/50 leading-relaxed mt-4 pt-4 border-t border-white/10">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Typical <span className="text-red-500">Engagements</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calendar, title: 'Tour Planning', desc: 'Routing, budgeting, advancing, team building for club-to-arena runs.' },
              { icon: Target, title: 'Release Strategy', desc: 'Singles, EPs, albums — timeline, marketing, playlisting, sync.' },
              { icon: Brain, title: 'AI Integration', desc: 'Audit your workflow, deploy agents, train your team on AI tools.' },
              { icon: Users, title: 'Team Building', desc: 'Hiring managers, agents, lawyers, crew. Org design for growth.' },
              { icon: Shield, title: 'Business Restructuring', desc: 'LLC setup, publishing admin, royalty collection, label deals.' },
              { icon: Zap, title: 'Crisis Management', desc: 'Show cancellations, contract disputes, PR issues, team conflicts.' },
              { icon: FileText, title: 'Contract Review', desc: 'Recording, publishing, management, touring, sync agreements.' },
              { icon: MessageSquare, title: 'Label/Management Ops', desc: 'Systems, reporting, artist development pipelines, A&R process.' },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 group hover:border-white/20">
                <div className="w-12 h-12 bg-red-600/20 border border-red-500/30 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="font-bold mb-2 group-hover:text-red-400 transition-colors">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
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
            <span className="tag text-red-400 block mb-6">Let's Talk Strategy</span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Your Business.<br /><span className="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">Next Level.</span>
            </h2>
            <p className="text-white/35 text-lg mb-10 max-w-xl mx-auto font-light">No pitch. No pressure. Just a real conversation about where you're trying to go and whether I can help you get there faster.</p>
            <a href="https://wd6ype73psnk2.mocha.app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-red-600 text-white rounded-full font-black text-lg hover:bg-red-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(229,25,42,0.4)] transition-all">
              Book Free Intro Call <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIConsulting;