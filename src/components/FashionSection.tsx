import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FashionSection = () => {
  return (
    <section id="fashion" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#3a3330] via-[#4a403a] to-[#3a3330]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4a574]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b7355]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#b89144] text-xs tracking-[5px] uppercase mb-4 font-light">
            Luxury Fashion & Lifestyle
          </p>
          <h2
            className="text-5xl md:text-7xl font-light mb-6 text-[#e8c97a] leading-none"
            style={{ fontFamily: 'Didot, Georgia, serif' }}
          >
            GiFTD N&apos; PrVLGD
          </h2>
          <p className="text-[#c4b5a0] text-sm tracking-[3px] uppercase mb-6" style={{ fontFamily: 'Garamond, serif' }}>
            Harlem Renaissance Edition
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#b89144] to-transparent mx-auto" />
        </motion.div>

        {/* Main content grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Image / Visual */}
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border-4 border-[#8b7355] relative group">
            <img
              src="/images/fashion/collection-1.jpg"
              alt="GiFTD N' PrVLGD - Luxury Fashion"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[#d4a574] font-light text-lg italic" style={{ fontFamily: 'Didot, serif' }}>
                Harlem Renaissance Edition
              </p>
              <p className="text-[#d4c5b0] text-sm mt-1" style={{ fontFamily: 'Garamond, serif' }}>
                Where heritage meets haute couture
              </p>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6">
            <div>
              <p className="text-[#b89144] text-xs tracking-[4px] uppercase mb-3 font-light">The Brand</p>
              <h3
                className="text-3xl font-light text-[#e8c97a] mb-4"
                style={{ fontFamily: 'Didot, serif' }}
              >
                Where Style Meets Innovation
              </h3>
              <p className="text-[#c4b5a0] leading-relaxed" style={{ fontFamily: 'Garamond, serif' }}>
                GiFTD N&apos; PrVLGD is Red Vision&apos;s expansion into fashion and lifestyle branding —
                creating clothing and accessories that reflect the intersection of music culture,
                technological innovation, and social consciousness.
              </p>
            </div>

            <blockquote
              className="border-l-2 border-[#b89144] pl-4 italic text-[#d4c5b0] text-lg"
              style={{ fontFamily: 'Garamond, serif' }}
            >
              Always dress like you&apos;re going to see your worst enemy.
            </blockquote>

            <div>
              <p className="text-[#c4b5a0] leading-relaxed text-sm" style={{ fontFamily: 'Garamond, serif' }}>
                Born from two decades inside the music industry, GiFTD N&apos; PrVLGD channels the
                elegance and confidence of the Harlem Renaissance into a modern luxury line —
                fashion as a statement of Black excellence and self-possession.
              </p>
              <p className="text-[#c4b5a0] leading-relaxed text-sm mt-3" style={{ fontFamily: 'Garamond, serif' }}>
                Every piece is designed to make a statement: that craft, culture, and confidence
                belong together.
              </p>
            </div>

            {/* Seasons */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#4a403a] border-2 border-[#8b7355] hover:border-[#d4a574] transition-all duration-300">
                <h4
                  className="text-lg font-bold text-[#d4a574] mb-2"
                  style={{ fontFamily: 'Didot, serif' }}
                >
                  Season I
                </h4>
                <p className="text-sm text-[#d4c5b0]" style={{ fontFamily: 'Garamond, serif' }}>
                  Harlem Renaissance — Celebrating the golden era of Black art, music, and culture.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#4a403a] border-2 border-[#8b7355] hover:border-[#d4a574] transition-all duration-300">
                <h4
                  className="text-lg font-bold text-[#d4a574] mb-2"
                  style={{ fontFamily: 'Didot, serif' }}
                >
                  Season II
                </h4>
                <p className="text-sm text-[#d4c5b0]" style={{ fontFamily: 'Garamond, serif' }}>
                  Greenwood — Inspired by Tulsa&apos;s Black Wall Street, embodying entrepreneurship and resilience.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3
            className="text-4xl font-light text-center text-[#d4a574] mb-12"
            style={{ fontFamily: 'Didot, serif' }}
          >
            Core Values
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: 'Heritage', desc: 'Every season draws inspiration from pivotal eras in African American history.' },
              { title: 'Excellence', desc: 'From design to execution, the brand upholds a luxury standard.' },
              { title: 'Authenticity', desc: 'Storytelling is at the heart of every piece.' },
              { title: 'Innovation', desc: 'Modern tools and AI-powered tech drive collections.' },
              { title: 'Empowerment', desc: 'Each drop amplifies the richness of Black identity.' },
              { title: 'Community', desc: 'Building a movement of individuals who wear their heritage with pride.' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-[#4a403a]/50 border border-[#8b7355]/40"
              >
                <h4
                  className="text-lg font-bold text-[#d4a574] mb-2"
                  style={{ fontFamily: 'Didot, serif' }}
                >
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
            onClick={() => window.location.href = '/divisions/fashion'}
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
