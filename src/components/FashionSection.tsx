import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FashionSection = () => {
  return (
    <section id="fashion" className="relative overflow-hidden selection:bg-[#d4a574] selection:text-[#3a3330]">
      {/* Hero-style Header for the Section */}
      <div className="bg-[#3a3330] py-32 px-4 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4a574]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b7355]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-light mb-4 text-[#d4a574]" style={{ fontFamily: 'Didot, serif', letterSpacing: '0.15em' }}>
              GiFTD N' PrVLGD Co.
            </h1>
            <div className="text-2xl md:text-3xl italic text-[#d4c5b0] mb-8 tracking-widest" style={{ fontFamily: 'Didot, serif' }}>
              Harlem Renaissance Edition
            </div>
            <p className="text-xl text-[#c4b5a0] max-w-3xl mx-auto leading-relaxed mb-12" style={{ fontFamily: 'Garamond, serif' }}>
              A forward-thinking fashion house dedicated to reframing the narrative of African American excellence.
              More than clothing, it is a cultural statement — a blend of history, artistry, and innovation.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#8b7355] to-[#6b5345] hover:from-[#d4a574] hover:to-[#b48a5a] text-white px-12 py-8 text-xl border-2 border-[#d4a574] rounded-none transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
              style={{ fontFamily: 'Didot, serif', letterSpacing: '0.2em' }}
            >
              SHOP NOW
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* About Segment */}
      <div className="bg-[#4a403a] py-24 px-4 border-y border-[#8b7355]/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-light text-[#d4a574] mb-8 italic" style={{ fontFamily: 'Didot, serif' }}>about</h2>
            <div className="space-y-6 text-[#d4c5b0] text-lg leading-relaxed" style={{ fontFamily: 'Garamond, serif' }}>
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
                With <strong>GiFTD N' PrVLGD</strong>, Salvador channels decades of experience into a fashion house rooted in heritage and elevated by innovation.
              </p>
            </div>
            <div className="text-4xl italic text-[#d4a574] mt-12" style={{ fontFamily: 'Didot, serif' }}>
              Jason Salvador
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] rounded-[2rem] overflow-hidden border-8 border-[#3a3330] shadow-2xl relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4a574]/20 to-transparent z-10 pointer-events-none" />
            <div className="w-full h-full bg-[#3a3330] flex items-center justify-center">
              <span className="text-9xl filter grayscale opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700">🎩</span>
            </div>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* The Burning Fashion - Collection Segment */}
      <div className="bg-[#3a3330] py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-light text-[#d4a574] mb-4 tracking-[0.1em]" style={{ fontFamily: 'Didot, serif' }}>
              THE BURNING FASHION
            </h2>
            <p className="text-xl italic text-[#c4b5a0]" style={{ fontFamily: 'Didot, serif' }}>
              "Always dress like you're going to see your worst enemy."
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                season: "Season I",
                title: "Harlem Renaissance",
                desc: "A cinematic tribute to 1920s Harlem, blending vintage elegance, jazz culture, and the birth of modern Black artistry."
              },
              {
                season: "Season II",
                title: "Greenwood",
                desc: "Inspired by Tulsa's Black Wall Street, embodying entrepreneurship, wealth, and resilience through bold elevated designs."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-[#4a403a] border-2 border-[#8b7355] p-12 transition-all duration-300 hover:border-[#d4a574] hover:-translate-y-2 group"
              >
                <div className="text-[#d4a574] text-sm uppercase tracking-widest mb-4 font-bold">{item.season}</div>
                <h3 className="text-3xl text-[#d4a574] mb-6 font-light" style={{ fontFamily: 'Didot, serif' }}>{item.title}</h3>
                <p className="text-[#d4c5b0] leading-relaxed text-lg" style={{ fontFamily: 'Garamond, serif' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-[#3a3330] px-12 py-8 text-xl rounded-none transition-all"
              style={{ fontFamily: 'Didot, serif', letterSpacing: '0.15em' }}
            >
              EXPLORE COLLECTIONS
            </Button>
          </div>
        </div>
      </div>

      {/* Philosophy Segment */}
      <div className="bg-[#2a2522] py-32 px-4 border-t border-[#d4a574]/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-light text-[#d4a574] mb-12 tracking-widest" style={{ fontFamily: 'Didot, serif' }}>OWN THAT RUNWAY</h2>
            <div className="relative py-12 px-8 border-x-4 border-[#d4a574] mb-12">
              <Quote className="absolute top-0 left-4 w-12 h-12 text-[#d4a574] opacity-20 -translate-y-1/2" />
              <p className="text-3xl md:text-4xl italic text-[#d4c5b0] leading-tight" style={{ fontFamily: 'Didot, serif' }}>
                "Always dress like you're going to see your worst enemy."
              </p>
              <Quote className="absolute bottom-0 right-4 w-12 h-12 text-[#d4a574] opacity-20 translate-y-1/2 rotate-180" />
            </div>
            <p className="text-xl text-[#c4b5a0] leading-relaxed" style={{ fontFamily: 'Garamond, serif' }}>
              GiFTD N' PrVLGD isn't just a fashion label — it's a cultural archive. Each garment carries history forward.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Core Values Segment */}
      <div className="bg-[#4a403a] py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-light text-center text-[#d4a574] mb-20 tracking-wider" style={{ fontFamily: 'Didot, serif' }}>
            Core Values
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
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
                className="space-y-4"
              >
                <div className="w-12 h-1px bg-[#d4a574] mx-auto mb-6 opacity-50" />
                <h4 className="text-2xl font-bold text-[#d4a574]" style={{ fontFamily: 'Didot, serif' }}>
                  {value.title}
                </h4>
                <p className="text-[#d4c5b0] max-w-[250px] mx-auto leading-relaxed" style={{ fontFamily: 'Garamond, serif' }}>
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionSection;
