import { motion } from 'framer-motion';

const stats = [
  { value: '25+', label: 'Years in the Industry' },
  { value: '100+', label: 'Artists Worked With' },
  { value: '6', label: 'Business Divisions' },
  { value: 'Grammy', label: 'Affiliated Label' },
];

const collaborators = [
  'Kanye West', 'Jay-Z', 'Beyoncé', 'Bruno Mars',
  'Justin Bieber', 'Ne-Yo', 'Keyshia Cole', 'Lupe Fiasco',
  'James Fauntleroy', 'Virgil Abloh', 'Don C', 'Nigo',
];

const timeline = [
  {
    year: '1999',
    title: 'The Beginning',
    desc: 'Entered the music industry at the ground level — learning the business from the inside out across touring, production, and artist development.',
  },
  {
    year: '2012',
    title: 'Breaking Through',
    desc: 'Running with Virgil Abloh and Lupe Fiasco since 2005 — before Louis Vuitton, before the world knew. Also built with Don C and Nigo. Connected with Hardy Blechman of Maharishi in London.',
  },
  {
    year: '2016',
    title: '1500 or Nothin\'',
    desc: 'Joined the legendary collective behind hits for Kanye, Jay-Z, Beyoncé, Bruno Mars, and Justin Bieber. A pivotal moment in the journey.',
  },
  {
    year: '2000',
    title: 'Red Vision Music Founded',
    desc: 'Founded Red Vision Music with his close friend Rashad "RED" Liston — the name Red Vision is a direct tribute to him. Rashad later passed away from AIDS. His memory and vision live on in everything Red Vision represents.',
  },
  {
    year: '2024',
    title: 'Red Vision Creative Studio',
    desc: 'Expanded into a full multi-division entertainment company: music, luxury fashion, satirical media, AI, podcast, radio, and merchandise.',
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #111008 50%, #0a0a0a 100%)',
        padding: '0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient gold glow top */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '400px',
        background: 'radial-gradient(ellipse at center top, rgba(212,165,116,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* ── HERO BANNER ── */}
      <div style={{
        position: 'relative',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        borderBottom: '1px solid rgba(212,165,116,0.12)',
      }}>
        {/* Diagonal rule line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 80px, rgba(212,165,116,0.015) 80px, rgba(212,165,116,0.015) 81px)',
          pointerEvents: 'none',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ textAlign: 'center', maxWidth: '900px', position: 'relative', zIndex: 1 }}
        >
          <p style={{
            fontFamily: 'Garamond, "Times New Roman", serif',
            fontSize: '0.7rem',
            letterSpacing: '0.5em',
            color: '#8b7355',
            textTransform: 'uppercase',
            marginBottom: '28px',
          }}>
            Founder · Visionary · Cultural Architect
          </p>

          <h2 style={{
            fontFamily: 'Didot, "Bodoni MT", Garamond, serif',
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            fontWeight: 300,
            color: '#f0e8d8',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            marginBottom: '12px',
          }}>
            Jason
          </h2>
          <h2 style={{
            fontFamily: 'Didot, "Bodoni MT", Garamond, serif',
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            fontWeight: 300,
            color: '#d4a574',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            marginBottom: '48px',
          }}>
            Salvador
          </h2>

          <div style={{
            width: '60px', height: '1px',
            background: 'linear-gradient(90deg, transparent, #d4a574, transparent)',
            margin: '0 auto 48px',
          }} />

          <p style={{
            fontFamily: 'Garamond, "Times New Roman", serif',
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            color: '#c4b5a0',
            lineHeight: 1.85,
            maxWidth: '680px',
            margin: '0 auto',
          }}>
            1500 or Nothin' since 2004. Tour manager. Producer. 
            Label founder. Fashion house architect. A man who moves at the intersection of culture, 
            commerce, and creativity — and built an empire doing it.
          </p>
        </motion.div>
      </div>

      {/* ── STATS ROW ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderBottom: '1px solid rgba(212,165,116,0.12)',
        }}
      >
        {stats.map((stat, i) => (
          <div key={i} style={{
            padding: '48px 24px',
            textAlign: 'center',
            borderRight: i < stats.length - 1 ? '1px solid rgba(212,165,116,0.12)' : 'none',
          }}>
            <div style={{
              fontFamily: 'Didot, Garamond, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#d4a574',
              fontWeight: 300,
              lineHeight: 1,
              marginBottom: '8px',
            }}>
              {stat.value}
            </div>
            <div style={{
              fontFamily: 'Garamond, serif',
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              color: '#8b7355',
              textTransform: 'uppercase',
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

          {/* LEFT: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p style={{
              fontFamily: 'Garamond, serif',
              fontSize: '0.65rem',
              letterSpacing: '0.4em',
              color: '#8b7355',
              textTransform: 'uppercase',
              marginBottom: '40px',
            }}>
              The Journey
            </p>

            <div style={{ position: 'relative' }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute',
                left: '52px',
                top: 0,
                bottom: 0,
                width: '1px',
                background: 'linear-gradient(180deg, rgba(212,165,116,0.5) 0%, rgba(212,165,116,0.05) 100%)',
              }} />

              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  style={{
                    display: 'flex',
                    gap: '28px',
                    marginBottom: i < timeline.length - 1 ? '44px' : 0,
                    position: 'relative',
                  }}
                >
                  {/* Year label */}
                  <div style={{ minWidth: '40px', textAlign: 'right', paddingTop: '3px' }}>
                    <span style={{
                      fontFamily: 'Garamond, serif',
                      fontSize: '0.7rem',
                      color: '#d4a574',
                      letterSpacing: '0.05em',
                    }}>
                      {item.year}
                    </span>
                  </div>

                  {/* Dot */}
                  <div style={{
                    width: '10px', height: '10px', minWidth: '10px',
                    borderRadius: '50%',
                    background: '#d4a574',
                    border: '2px solid #3a3330',
                    boxShadow: '0 0 8px rgba(212,165,116,0.5)',
                    marginTop: '5px',
                  }} />

                  {/* Content */}
                  <div style={{ paddingBottom: '8px' }}>
                    <h4 style={{
                      fontFamily: 'Didot, Garamond, serif',
                      fontSize: '1.1rem',
                      color: '#f0e8d8',
                      marginBottom: '8px',
                      fontWeight: 400,
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      fontFamily: 'Garamond, serif',
                      fontSize: '0.95rem',
                      color: '#9a8a7a',
                      lineHeight: 1.7,
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Photo + Collaborations + Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Jason Photo */}
            <div style={{
              position: 'relative',
              marginBottom: '60px',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid rgba(212,165,116,0.2)',
            }}>
              <img
                src="/images/jason-salvador.jpeg"
                alt="Jason Salvador — Founder, Red Vision Creative Studio"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                  filter: 'contrast(1.05) saturate(0.9)',
                }}
              />
              {/* Gold overlay gradient at bottom */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: '120px',
                background: 'linear-gradient(to top, rgba(10,8,5,0.85) 0%, transparent 100%)',
              }} />
              {/* Name overlay */}
              <div style={{
                position: 'absolute',
                bottom: '20px', left: '24px',
              }}>
                <p style={{
                  fontFamily: 'Didot, Garamond, serif',
                  fontSize: '1.1rem',
                  color: '#d4a574',
                  fontWeight: 300,
                  letterSpacing: '0.1em',
                }}>Jason Salvador</p>
                <p style={{
                  fontFamily: 'Garamond, serif',
                  fontSize: '0.65rem',
                  color: '#8b7355',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                }}>Founder · Red Vision Creative Studio</p>
              </div>
            </div>

            <p style={{
              fontFamily: 'Garamond, serif',
              fontSize: '0.65rem',
              letterSpacing: '0.4em',
              color: '#8b7355',
              textTransform: 'uppercase',
              marginBottom: '40px',
            }}>
              In The Room With
            </p>

            {/* Collaborator grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px',
              marginBottom: '64px',
            }}>
              {collaborators.map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    padding: '12px 8px',
                    textAlign: 'center',
                    background: 'rgba(212,165,116,0.04)',
                    border: '1px solid rgba(212,165,116,0.12)',
                    borderRadius: '4px',
                    cursor: 'default',
                    transition: 'all 0.2s',
                  }}
                  whileHover={{
                    background: 'rgba(212,165,116,0.09)',
                    borderColor: 'rgba(212,165,116,0.4)',
                  }}
                >
                  <span style={{
                    fontFamily: 'Garamond, serif',
                    fontSize: '0.82rem',
                    color: '#c4b5a0',
                    letterSpacing: '0.03em',
                  }}>
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Pull quote */}
            <div style={{
              borderTop: '1px solid rgba(212,165,116,0.2)',
              paddingTop: '48px',
            }}>
              <p style={{
                fontFamily: 'Didot, Garamond, serif',
                fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
                fontStyle: 'italic',
                color: '#d4a574',
                lineHeight: 1.5,
                marginBottom: '24px',
              }}>
                "I didn't just want to work in the industry. I wanted to build something that outlasts it."
              </p>
              <p style={{
                fontFamily: 'Garamond, serif',
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
                color: '#8b7355',
                textTransform: 'uppercase',
              }}>
                — Jason Salvador, Founder
              </p>
            </div>

            {/* Credential badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '48px' }}>
              {["Grammy-Affiliated Label", "1500 or Nothin' Alumni", "Tour Manager", "Cultural Architect"].map((badge) => (
                <span key={badge} style={{
                  fontFamily: 'Garamond, serif',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  color: '#d4a574',
                  border: '1px solid rgba(212,165,116,0.3)',
                  padding: '6px 14px',
                  borderRadius: '2px',
                  textTransform: 'uppercase',
                }}>
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── BOTTOM AMBIENT ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '200px',
        background: 'radial-gradient(ellipse at center bottom, rgba(212,165,116,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
    </section>
  );
};

export default AboutSection;
