import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const ECOSYSTEM = [
  {
    name: 'Red Vision Music',
    tag: 'Grammy-Affiliated Label',
    desc: 'Independent record label. Artists include My Guy Mars, Ryan Toby, and James Fauntleroy.',
    url: 'https://redvisionmusic-official.netlify.app',
    icon: '🎵',
    color: '#ef4444',
    internal: false,
  },
  {
    name: 'Red Vision AI Agency',
    tag: 'AI-Powered Services',
    desc: 'Social media management, AI agents for your website, and done-for-you digital presence.',
    url: 'https://rv-ai-agency.netlify.app',
    icon: '🤖',
    color: '#a855f7',
    internal: false,
  },
  {
    name: 'PIVOT Tour System',
    tag: 'SaaS · Tour Management',
    desc: 'The tour manager\'s OS. Daily sheets, contacts, budget tracking, settlement, and AI crisis response.',
    url: 'https://pivot-tour-app.netlify.app',
    icon: '🎯',
    color: '#3b82f6',
    internal: false,
  },
  {
    name: 'Jason Salvador Consulting',
    tag: 'Music Industry Mentorship',
    desc: '15+ years of industry experience. 1-on-1 sessions, coaching programs, and direct access.',
    url: 'https://wd6ype73psnk2.mocha.app',
    icon: '🏆',
    color: '#f59e0b',
    internal: false,
  },
  {
    name: 'Mindful Vision',
    tag: 'Wellness & Yoga',
    desc: 'AI-powered yoga, guided meditation, breathwork, and holistic wellness coaching.',
    url: 'https://mindfulvision-wellness.netlify.app',
    icon: '🧘',
    color: '#10b981',
    internal: false,
  },
  {
    name: 'Cosmic Vision',
    tag: 'Astrology & Horoscopes',
    desc: 'Daily AI horoscopes, birth chart readings, compatibility analysis, and cosmic guidance.',
    url: 'https://cosmicvision-astrology.netlify.app',
    icon: '⭐',
    color: '#8b5cf6',
    internal: false,
  },
];

const EcosystemSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #080810 0%, #0c0c1a 50%, #080810 100%)' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/25 bg-red-500/10 mb-6">
            <span className="text-red-400 font-bold text-xs tracking-widest uppercase">The Red Vision Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4">One Vision.<br /><span className="text-red-500">Many Worlds.</span></h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Red Vision Creative Studio is more than a company — it's an ecosystem of AI-powered brands, products, and services built to dominate every space we enter.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ECOSYSTEM.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ textDecoration: 'none' }}
            >
              <div
                className="relative h-full rounded-2xl p-6 transition-all duration-300 group-hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid rgba(255,255,255,0.07)`,
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = `${item.color}40`;
                  el.style.background = `${item.color}08`;
                  el.style.boxShadow = `0 0 30px ${item.color}12`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = 'rgba(255,255,255,0.07)';
                  el.style.background = 'rgba(255,255,255,0.02)';
                  el.style.boxShadow = 'none';
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <div className="font-bold text-white text-base">{item.name}</div>
                      <div
                        className="text-xs font-bold tracking-wider uppercase mt-0.5"
                        style={{ color: item.color }}
                      >
                        {item.tag}
                      </div>
                    </div>
                  </div>
                  <ExternalLink
                    className="w-4 h-4 opacity-0 group-hover:opacity-60 transition-opacity flex-shrink-0 mt-1"
                    style={{ color: item.color }}
                  />
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                <div
                  className="flex items-center gap-1.5 mt-4 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: item.color }}
                >
                  Visit Site <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://rv-ai-agency.netlify.app/start.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-base transition-all duration-200 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #ef4444, #a855f7)',
              textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(239,68,68,0.3)',
            }}
          >
            Work With Red Vision AI Agency
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-white/30 text-sm mt-4">AI social media, agent embedding, full digital setup. Starting at $297/mo.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemSection;
