import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FashionSection = () => {
  return (
    <section id="fashion" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#3a3330] via-[#4a403a] to-[#3a3330]">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4a574]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b7355]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4a574]/10 border border-[#8b7355] rounded-full mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-[#d4a574]" />
            <span className="text-sm font-medium text-[#d4a574]" style={{ fontFamily: 'Didot, Bodoni MT, Garamond, serif' }}>
              Luxury Fashion House
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-light mb-4 text-[#d4a574]" style={{ fontFamily: 'Didot, Bodoni MT, Garamond, serif', letterSpacing: '0.1em' }}>
            GiFTD N' PrVLGD Co.
          </h2>
          <p className="text-2xl italic text-[#d4c5b0] mb-6" style={{ fontFamily: 'Didot, Bodoni MT, Garamond, serif' }}>
            Harlem Renaissance Edition
          </p>
          <p className="text-xl text-[#c4b5a0] max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Garamond, serif' }}>
            A forward-thinking fashion house dedicated to reframing the narrative of African American excellence. 
            More than clothing, it is a cultural statement — a blend of history, artistry, and innovation.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Tagline + Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="border-l-4 border-[#d4a574] pl-8">
              <p className="text-3xl italic text-[#d4a574] mb-6" style={{ fontFamily: 'Didot, serif' }}>
                "Always dress like you're going to see your worst enemy."
              </p>
            </div>

            <div className="space-y-6 text-[#d4c5b0]" style={{ fontFamily: 'Garamond, serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
              <p>
                <strong className="text-[#d4a574]">Jason Salvador</strong> is a cultural architect whose career has seamlessly bridged music, fashion, and global storytelling.
              </p>
              <p>
                Early in his journey, Jason worked with a then-unknown Virgil Abloh, who would later rise to helm Louis Vuitton and redefine contemporary design.
              </p>
              <p>
                Jason's reach extends far beyond collaborations — he's cultivated lasting relationships with pioneers like Hardy Blechman of Maharishi in London, Don C of Air Jordan and Nigo of A Bathing Ape.
              </p>
              <p>
                With <strong className="text-[#d4a574]">GiFTD N' PrVLGD</strong>, Salvador channels decades of experience into a fashion house rooted in heritage and elevated by innovation.
              </p>
            </div>

            <div className="text-3xl italic text-[#d4a574] mt-8" style={{ fontFamily: 'Didot, serif' }}>
              Jason Salvador
            </div>
          </motion.div>

          {/* Right: Fashion Image/Collections */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Brand Hero Card — Harlem Renaissance Aesthetic */}
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-4 border-[#8b7355] relative group cursor-pointer">
              {/* Dark vintage base */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(160deg, #0d0a07 0%, #1e1610 35%, #2d2218 65%, #0d0a07 100%)',
                }}
              />
              {/* Grain/film noise texture */}
              <div
                className="absolute inset-0 opacity-40 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                  backgroundSize: '150px',
                }}
              />
              {/* Warm amber light from center */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse 70% 50% at 50% 45%, rgba(180,120,40,0.15) 0%, transparent 70%)',
                }}
              />
              {/* Deep vignette */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.85) 100%)',
                }}
              />

              {/* Top label */}
              <div className="absolute top-8 left-0 right-0 text-center z-20">
                <p
                  className="text-[#a88c5a] tracking-[0.5em] uppercase"
                  style={{ fontFamily: 'Garamond, "Times New Roman", serif', fontSize: '0.7rem' }}
                >
                  Welcome To
                </p>
              </div>

              {/* Horizontal rule lines */}
              <div className="absolute top-16 left-8 right-8 z-20 flex items-center gap-2">
                <div className="flex-1 h-px bg-[#8b7355]/40" />
                <div className="w-1 h-1 rounded-full bg-[#c8962a]/60" />
                <div className="flex-1 h-px bg-[#8b7355]/40" />
              </div>

              {/* Center brand overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20 px-6">
                <div
                  className="w-full py-8 px-6 text-center"
                  style={{
                    background: 'rgba(5,3,1,0.72)',
                    border: '1px solid rgba(200,150,42,0.35)',
                    boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5), 0 0 30px rgba(0,0,0,0.6)',
                  }}
                >
                  {/* Decorative top line */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="h-px w-8 bg-[#c8962a]/60" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#c8962a]/60" />
                    <div className="h-px w-8 bg-[#c8962a]/60" />
                  </div>

                  {/* Brand script name */}
                  <h3
                    className="text-[#c8962a] leading-none mb-5"
                    style={{
                      fontFamily: '"Dancing Script", "Brush Script MT", "Segoe Script", cursive',
                      fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
                      fontWeight: 700,
                      textShadow: '0 0 20px rgba(200,150,42,0.4), 0 2px 4px rgba(0,0,0,0.8)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Giftd n' Privlgd
                  </h3>

                  {/* Divider */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="h-px w-12 bg-[#8b7355]/50" />
                    <div className="h-px w-12 bg-[#8b7355]/50" />
                  </div>

                  {/* Taglines */}
                  <div
                    className="space-y-1.5 text-[#b89a6a]"
                    style={{
                      fontFamily: 'Garamond, "Times New Roman", serif',
                      letterSpacing: '0.22em',
                      fontSize: '0.62rem',
                    }}
                  >
                    <p>MADE BY, YOURS TRULY</p>
                    <p>CULTURALLY CONSCIOUS CRAFTED</p>
                    <p>FINE CLOTHING</p>
                  </div>

                  {/* Hash tag */}
                  <p
                    className="mt-4 text-[#c8962a] font-bold tracking-widest"
                    style={{
                      fontFamily: 'Garamond, serif',
                      fontSize: '0.75rem',
                      letterSpacing: '0.3em',
                      textShadow: '0 0 10px rgba(200,150,42,0.3)',
                    }}
                  >
                    #4429
                  </p>

                  {/* Decorative bottom line */}
                  <div className="flex items-center justify-center gap-3 mt-4">
                    <div className="h-px w-8 bg-[#c8962a]/60" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#c8962a]/60" />
                    <div className="h-px w-8 bg-[#c8962a]/60" />
                  </div>
                </div>
              </div>

              {/* Hover shimmer */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
                style={{
                  background: 'radial-gradient(ellipse at 50% 50%, rgba(200,150,42,0.06) 0%, transparent 65%)',
                }}
              />
            </div>

            {/* Collections */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#4a403a] border-2 border-[#8b7355] hover:border-[#d4a574] transition-all duration-300">
                <h4 className="text-xl font-bold text-[#d4a574] mb-2" style={{ fontFamily: 'Didot, serif' }}>
                  Season I
                </h4>
                <p className="text-sm text-[#d4c5b0]" style={{ fontFamily: 'Garamond, serif' }}>
                  Harlem Renaissance — A cinematic tribute to 1920s Harlem, blending vintage elegance and modern Black artistry.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#4a403a] border-2 border-[#8b7355] hover:border-[#d4a574] transition-all duration-300">
                <h4 className="text-xl font-bold text-[#d4a574] mb-2" style={{ fontFamily: 'Didot, serif' }}>
                  Season II
                </h4>
                <p className="text-sm text-[#d4c5b0]" style={{ fontFamily: 'Garamond, serif' }}>
                  Greenwood — Inspired by Tulsa's Black Wall Street, embodying entrepreneurship and resilience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-light text-center text-[#d4a574] mb-12" style={{ fontFamily: 'Didot, serif' }}>
            Core Values
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: 'Heritage', desc: 'Every season draws inspiration from pivotal eras in African American history.' },
              { title: 'Excellence', desc: 'From design to execution, the brand upholds a luxury standard.' },
              { title: 'Authenticity', desc: 'Storytelling is at the heart of every piece.' },
              { title: 'Innovation', desc: 'Modern tools and AI-powered tech drive collections.' },
              { title: 'Empowerment', desc: 'Each drop amplifies the richness of Black identity.' },
              { title: 'Community', desc: 'Building a movement of individuals who wear their heritage with pride.' }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h4 className="text-xl font-bold text-[#d4a574] mb-3" style={{ fontFamily: 'Didot, serif' }}>
                  {value.title}
                </h4>
                <p className="text-sm text-[#d4c5b0]" style={{ fontFamily: 'Garamond, serif' }}>
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#8b7355] to-[#6b5345] hover:from-[#d4a574] hover:to-[#b48a5a] text-white px-12 py-6 text-lg border-2 border-[#d4a574] rounded-none"
            style={{ fontFamily: 'Didot, serif', letterSpacing: '0.15em' }}
          >
            EXPLORE COLLECTIONS
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-[#c4b5a0] mt-6" style={{ fontFamily: 'Garamond, serif' }}>
            Red Vision Creative Studio Presents
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FashionSection;
