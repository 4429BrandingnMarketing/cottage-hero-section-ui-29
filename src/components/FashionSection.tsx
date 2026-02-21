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
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-4 border-[#8b7355] bg-gradient-to-br from-[#3a3330] to-[#2a2522] flex items-center justify-center">
              <span className="text-8xl">👔</span>
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
