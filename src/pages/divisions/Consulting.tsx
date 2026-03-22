import { motion } from 'framer-motion';
import { Star, Clock, Phone, CheckCircle, ArrowRight, Award, Users, Mic } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PAYPAL_EMAIL = 'redvision.ai@gmail.com';

const packages = [
  {
    name: 'Discovery Session',
    price: '150',
    duration: '60 min',
    description: 'A single focused session for artists, managers, or entrepreneurs who need expert guidance on one specific challenge.',
    features: [
      'One 60-minute 1-on-1 session',
      'Tour routing & booking strategy',
      'Label deal evaluation',
      'Brand positioning advice',
      'Follow-up action plan via email',
    ],
    paypalAmount: '150.00',
    highlight: false,
    badge: null,
  },
  {
    name: 'Strategy Package',
    price: '497',
    duration: '3 Sessions',
    description: 'Three deep-dive sessions to build your roadmap — from artist development to business infrastructure.',
    features: [
      'Three 60-minute sessions',
      'Full career & business audit',
      'Revenue stream development',
      'Touring & logistics planning',
      'Brand & marketing strategy',
      'Contract review guidance',
      'Priority email support between sessions',
    ],
    paypalAmount: '497.00',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Full Mentorship',
    price: '1,500',
    duration: '30-Day',
    description: 'A full month of direct access to Jason — unlimited check-ins, strategy calls, and real-time guidance as you build.',
    features: [
      'Unlimited 30-min check-in calls',
      'Weekly 90-minute strategy session',
      'Direct line via text/email',
      'Full business & artist review',
      'Revenue & deal negotiation support',
      'Marketing & release strategy',
      'Industry introductions (as applicable)',
    ],
    paypalAmount: '1500.00',
    highlight: false,
    badge: 'Premium',
  },
];

const expertise = [
  { icon: Mic, title: 'Tour Management', desc: '15+ years managing tours for major artists. Every logistic, every rider, every routing decision.' },
  { icon: Award, title: 'Label Operations', desc: 'Grammy-affiliated label founder. Deal structures, artist development, release strategy.' },
  { icon: Users, title: 'Brand Building', desc: 'From GiFTD N\' PrVLGD to Red Vision AI — building brands that last at the intersection of culture and commerce.' },
  { icon: Star, title: '1500 or Nothin\'', desc: 'In the room with the best since 2004. Connected to the infrastructure that drives the industry.' },
];

const makePayPalUrl = (amount: string, itemName: string) => {
  const base = 'https://www.paypal.com/paypalme/redvisionai';
  return `${base}/${amount}`;
};

const ConsultingPage = () => {
  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a' }}>
      <Navbar />

      {/* HERO */}
      <section style={{
        minHeight: '65vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '140px 24px 80px',
        background: 'linear-gradient(180deg, #0f0c08 0%, #0a0a0a 100%)',
        borderBottom: '1px solid rgba(212,165,116,0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '900px', height: '500px',
          background: 'radial-gradient(ellipse at center top, rgba(212,165,116,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 1 }}
        >
          <p style={{
            fontFamily: 'Garamond, serif',
            fontSize: '0.7rem',
            letterSpacing: '0.5em',
            color: '#8b7355',
            textTransform: 'uppercase',
            marginBottom: '28px',
          }}>
            1-on-1 Consulting · Music & Entertainment Industry
          </p>

          <h1 style={{
            fontFamily: 'Didot, "Bodoni MT", Garamond, serif',
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 300,
            color: '#f0e8d8',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            marginBottom: '12px',
          }}>
            Work With
          </h1>
          <h1 style={{
            fontFamily: 'Didot, "Bodoni MT", Garamond, serif',
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 300,
            color: '#d4a574',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            marginBottom: '48px',
          }}>
            Jason Salvador
          </h1>

          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #d4a574, transparent)', margin: '0 auto 48px' }} />

          <p style={{
            fontFamily: 'Garamond, "Times New Roman", serif',
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            color: '#c4b5a0',
            lineHeight: 1.85,
            maxWidth: '620px',
            margin: '0 auto',
          }}>
            25 years. 1500 or Nothin'. Grammy-affiliated label. Luxury fashion. AI entertainment infrastructure. 
            Now I'm sharing exactly how it's done — directly with you.
          </p>
        </motion.div>
      </section>

      {/* EXPERTISE GRID */}
      <section style={{ padding: '100px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <p style={{ fontFamily: 'Garamond, serif', fontSize: '0.65rem', letterSpacing: '0.45em', color: '#8b7355', textTransform: 'uppercase', marginBottom: '16px' }}>
            What I Bring To The Table
          </p>
          <h2 style={{ fontFamily: 'Didot, Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: '#f0e8d8' }}>
            Real Experience. Real Access.
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: '36px 28px',
                background: 'rgba(212,165,116,0.04)',
                border: '1px solid rgba(212,165,116,0.15)',
                borderRadius: '4px',
              }}
            >
              <item.icon size={28} color="#d4a574" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontFamily: 'Didot, Garamond, serif', fontSize: '1.2rem', color: '#f0e8d8', marginBottom: '12px', fontWeight: 400 }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: 'Garamond, serif', fontSize: '0.95rem', color: '#9a8a7a', lineHeight: 1.7 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PACKAGES + PAYPAL */}
      <section style={{
        padding: '80px 24px 120px',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0f0c08 100%)',
        borderTop: '1px solid rgba(212,165,116,0.1)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <p style={{ fontFamily: 'Garamond, serif', fontSize: '0.65rem', letterSpacing: '0.45em', color: '#8b7355', textTransform: 'uppercase', marginBottom: '16px' }}>
              Choose Your Level
            </p>
            <h2 style={{ fontFamily: 'Didot, Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: '#f0e8d8', marginBottom: '16px' }}>
              Consulting Packages
            </h2>
            <p style={{ fontFamily: 'Garamond, serif', fontSize: '1.05rem', color: '#9a8a7a' }}>
              Secure payment via PayPal. Sessions booked within 48 hours of payment.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  position: 'relative',
                  padding: '44px 36px',
                  background: pkg.highlight ? 'rgba(212,165,116,0.08)' : 'rgba(255,255,255,0.02)',
                  border: pkg.highlight ? '1px solid rgba(212,165,116,0.5)' : '1px solid rgba(212,165,116,0.15)',
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: pkg.highlight ? '0 0 40px rgba(212,165,116,0.1)' : 'none',
                }}
              >
                {pkg.badge && (
                  <div style={{
                    position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                    background: '#d4a574',
                    color: '#0a0a0a',
                    fontFamily: 'Garamond, serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    padding: '6px 20px',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                  }}>
                    {pkg.badge}
                  </div>
                )}

                <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Clock size={14} color="#8b7355" />
                  <span style={{ fontFamily: 'Garamond, serif', fontSize: '0.72rem', letterSpacing: '0.15em', color: '#8b7355', textTransform: 'uppercase' }}>
                    {pkg.duration}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'Didot, Garamond, serif', fontSize: '1.6rem', color: '#f0e8d8', marginBottom: '8px', fontWeight: 300 }}>
                  {pkg.name}
                </h3>

                <div style={{ marginBottom: '20px' }}>
                  <span style={{ fontFamily: 'Didot, Garamond, serif', fontSize: '3rem', color: '#d4a574', fontWeight: 300 }}>${pkg.price}</span>
                </div>

                <p style={{ fontFamily: 'Garamond, serif', fontSize: '0.95rem', color: '#9a8a7a', lineHeight: 1.7, marginBottom: '28px' }}>
                  {pkg.description}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px', flex: 1 }}>
                  {pkg.features.map((feat) => (
                    <li key={feat} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                      <CheckCircle size={15} color="#d4a574" style={{ minWidth: '15px', marginTop: '3px' }} />
                      <span style={{ fontFamily: 'Garamond, serif', fontSize: '0.9rem', color: '#c4b5a0', lineHeight: 1.5 }}>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* PAYPAL BUTTON */}
                <a
                  href={makePayPalUrl(pkg.paypalAmount, pkg.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '16px 28px',
                    background: pkg.highlight
                      ? 'linear-gradient(135deg, #d4a574, #b48a5a)'
                      : 'transparent',
                    border: pkg.highlight
                      ? '1px solid #d4a574'
                      : '1px solid rgba(212,165,116,0.4)',
                    color: pkg.highlight ? '#0a0a0a' : '#d4a574',
                    fontFamily: 'Garamond, serif',
                    fontSize: '0.85rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: pkg.highlight ? 700 : 400,
                    textDecoration: 'none',
                    borderRadius: '2px',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.background = 'linear-gradient(135deg, #d4a574, #b48a5a)';
                    el.style.color = '#0a0a0a';
                    el.style.borderColor = '#d4a574';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    if (!pkg.highlight) {
                      el.style.background = 'transparent';
                      el.style.color = '#d4a574';
                      el.style.borderColor = 'rgba(212,165,116,0.4)';
                    }
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 3.993-.032.17a.804.804 0 0 1-.794.679H8.293a.483.483 0 0 1-.477-.558L9.on 8.4a.483.483 0 0 1 .477-.408H15c2.07 0 3.6.7 4.6 1.93z"/>
                    <path d="M7.404 4.96c.356-.64.989-1.09 1.71-1.09h5.33c2.07 0 3.6.7 4.6 1.93-.052.47-.158.923-.317 1.353C17.48 5.7 15.87 5 13.5 5H8.77a.72.72 0 0 0-.71.607l-.63 3.993c-.1.553.345 1.065.91 1.065h2.16l.63-3.993A.804.804 0 0 1 12 6h.5c3.238 0 5.774-1.314 6.514-5.12.256-1.313.192-2.447-.3-3.327C18.214.553 17.27 0 16 0H7.404C6.45 0 5.62.63 5.38 1.553L3 15.447A.483.483 0 0 0 3.477 16H6.7l.704-11.04z"/>
                  </svg>
                  Book via PayPal
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>

          {/* CONTACT NOTE */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              marginTop: '64px',
              padding: '40px',
              background: 'rgba(212,165,116,0.04)',
              border: '1px solid rgba(212,165,116,0.15)',
              borderRadius: '4px',
              textAlign: 'center',
            }}
          >
            <Phone size={24} color="#d4a574" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontFamily: 'Didot, Garamond, serif', fontSize: '1.5rem', color: '#f0e8d8', marginBottom: '12px', fontWeight: 300 }}>
              Enterprise or Custom Projects
            </h3>
            <p style={{ fontFamily: 'Garamond, serif', fontSize: '1rem', color: '#9a8a7a', marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px' }}>
              Labels, management companies, and large-scale projects — reach out directly for a custom proposal.
            </p>
            <a
              href="mailto:redvision.ai@gmail.com?subject=Consulting Inquiry — Red Vision"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                border: '1px solid rgba(212,165,116,0.4)',
                color: '#d4a574',
                fontFamily: 'Garamond, serif',
                fontSize: '0.85rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '2px',
              }}
            >
              <ArrowRight size={14} />
              Email Jason Directly
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultingPage;
