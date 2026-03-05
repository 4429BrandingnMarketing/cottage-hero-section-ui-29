import { Sparkles, ShoppingBag, ArrowRight, Crown, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Fashion = () => {
  const collections = [
    {
      name: "Season I — Harlem Renaissance",
      year: "2024",
      description: "A cinematic tribute to 1920s Harlem. Vintage elegance meets modern Black artistry. Every stitch tells a story of cultural resilience and unapologetic excellence.",
      tags: ["Limited Edition", "Heritage Collection", "Cultural Statement"]
    },
    {
      name: "Season II — Greenwood",
      year: "2025",
      description: "Inspired by Tulsa's Black Wall Street. Embodying entrepreneurship, resilience, and the unstoppable spirit of Black economic power.",
      tags: ["Exclusive Drop", "Black Excellence", "Legacy Wear"]
    },
    {
      name: "Season III — The Diaspora",
      year: "2026",
      description: "A global perspective on Black identity across continents. Where roots meet the future — a wearable passport of pride.",
      tags: ["Coming Soon", "Global Edition", "Pan-African"]
    }
  ];

  const influences = [
    { name: "Virgil Abloh", role: "Louis Vuitton / Off-White", note: "Early collaborator before his historic rise" },
    { name: "Hardy Blechman", role: "Maharishi, London", note: "Pioneer of culturally conscious fashion" },
    { name: "Don C", role: "Just Don / Air Jordan", note: "Luxury streetwear iconography" },
    { name: "Nigo", role: "A Bathing Ape / Kenzo", note: "The architect of modern hype culture" }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #0d0a07 0%, #1a1410 40%, #0d0a07 100%)' }}>
      <Navbar />

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundSize: '200px' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-[#8b7355] hover:text-[#d4a574] mb-12 transition-colors" style={{ fontFamily: 'Garamond, serif', letterSpacing: '0.1em' }}>
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#8b7355] rounded-full mb-8" style={{ background: 'rgba(200,150,42,0.08)' }}>
                <Crown className="w-4 h-4 text-[#c8962a]" />
                <span className="text-sm font-medium text-[#c8962a]" style={{ fontFamily: 'Garamond, serif', letterSpacing: '0.2em' }}>LUXURY FASHION HOUSE</span>
              </div>
              <h1 className="leading-none mb-4 text-[#c8962a]" style={{ fontFamily: '"Dancing Script", "Brush Script MT", cursive', fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 700, textShadow: '0 0 40px rgba(200,150,42,0.3)' }}>
                Giftd n' Privlgd
              </h1>
              <p className="text-2xl italic text-[#b89a6a] mb-8" style={{ fontFamily: 'Garamond, serif', letterSpacing: '0.15em' }}>
                Harlem Renaissance Edition
              </p>
              <div className="border-l-4 border-[#c8962a] pl-6 mb-10">
                <p className="text-xl italic text-[#d4c5b0]" style={{ fontFamily: 'Garamond, serif' }}>
                  "Always dress like you're going to see your worst enemy."
                </p>
                <p className="text-sm text-[#8b7355] mt-2" style={{ fontFamily: 'Garamond, serif', letterSpacing: '0.1em' }}>— Jason Salvador</p>
              </div>
              <p className="text-[#c4b5a0] mb-10 leading-relaxed" style={{ fontFamily: 'Garamond, serif', fontSize: '1.1rem' }}>
                More than clothing — a cultural statement. A blend of history, artistry, and innovation dedicated to reframing the narrative of African American excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://redvisioncreativestudio.myshopify.com" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #8b7355, #6b5345)', border: '2px solid #c8962a', fontFamily: 'Garamond, serif', letterSpacing: '0.2em' }}>
                  <ShoppingBag className="w-4 h-4" />
                  SHOP COLLECTION
                </a>
                <button className="inline-flex items-center gap-2 px-8 py-4 text-[#c8962a] font-semibold"
                  style={{ border: '2px solid #8b7355', fontFamily: 'Garamond, serif', letterSpacing: '0.2em', background: 'transparent' }}>
                  <Gem className="w-4 h-4" />
                  VIEW LOOKBOOK
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: '4/5', border: '4px solid #8b7355', boxShadow: '0 0 80px rgba(200,150,42,0.15)' }}>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #0d0a07 0%, #1e1610 35%, #2d2218 65%, #0d0a07 100%)' }} />
                <div className="absolute inset-0 opacity-35 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundSize: '150px' }} />
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 45%, rgba(180,120,40,0.18) 0%, transparent 70%)' }} />
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.88) 100%)' }} />
                <div className="absolute top-8 left-0 right-0 text-center z-20">
                  <p className="text-[#a88c5a] tracking-[0.5em] uppercase" style={{ fontFamily: 'Garamond, serif', fontSize: '0.7rem' }}>Welcome To</p>
                </div>
                <div className="absolute top-16 left-8 right-8 z-20 flex items-center gap-2">
                  <div className="flex-1 h-px bg-[#8b7355]/40" />
                  <div className="w-1 h-1 rounded-full bg-[#c8962a]/60" />
                  <div className="flex-1 h-px bg-[#8b7355]/40" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-20 px-6">
                  <div className="w-full py-10 px-8 text-center" style={{ background: 'rgba(5,3,1,0.75)', border: '1px solid rgba(200,150,42,0.35)', boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5)' }}>
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="h-px w-8 bg-[#c8962a]/60" />
                      <div className="w-1.5 h-1.5 rotate-45 bg-[#c8962a]/60" />
                      <div className="h-px w-8 bg-[#c8962a]/60" />
                    </div>
                    <h2 className="text-[#c8962a] leading-none mb-6" style={{ fontFamily: '"Dancing Script", "Brush Script MT", cursive', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, textShadow: '0 0 20px rgba(200,150,42,0.4)' }}>
                      Giftd n' Privlgd
                    </h2>
                    <div className="flex items-center justify-center gap-3 mb-5">
                      <div className="h-px w-12 bg-[#8b7355]/50" />
                      <div className="h-px w-12 bg-[#8b7355]/50" />
                    </div>
                    <div className="space-y-2 text-[#b89a6a]" style={{ fontFamily: 'Garamond, serif', letterSpacing: '0.22em', fontSize: '0.65rem' }}>
                      <p>MADE BY, YOURS TRULY</p>
                      <p>CULTURALLY CONSCIOUS CRAFTED</p>
                      <p>FINE CLOTHING</p>
                    </div>
                    <p className="mt-5 text-[#c8962a] font-bold" style={{ fontFamily: 'Garamond, serif', fontSize: '0.8rem', letterSpacing: '0.35em' }}>#4429</p>
                    <div className="flex items-center justify-center gap-3 mt-4">
                      <div className="h-px w-8 bg-[#c8962a]/60" />
                      <div className="w-1.5 h-1.5 rotate-45 bg-[#c8962a]/60" />
                      <div className="h-px w-8 bg-[#c8962a]/60" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ background: 'rgba(200,150,42,0.04)', borderTop: '1px solid rgba(139,115,85,0.3)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-[#c8962a] mb-16" style={{ fontFamily: 'Garamond, serif', fontSize: '2.5rem', fontWeight: 300, letterSpacing: '0.3em' }}>THE COLLECTIONS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((col, i) => (
              <motion.div key={col.name} className="p-8 rounded-2xl" style={{ background: 'rgba(26,20,16,0.8)', border: '1px solid rgba(139,115,85,0.4)' }}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <p className="text-[#8b7355] text-sm mb-3" style={{ fontFamily: 'Garamond, serif', letterSpacing: '0.2em' }}>{col.year}</p>
                <h3 className="text-[#c8962a] text-xl mb-4" style={{ fontFamily: 'Garamond, serif', fontWeight: 600 }}>{col.name}</h3>
                <p className="text-[#c4b5a0] text-sm leading-relaxed mb-6" style={{ fontFamily: 'Garamond, serif' }}>{col.description}</p>
                <div className="flex flex-wrap gap-2">
                  {col.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs text-[#8b7355]" style={{ border: '1px solid rgba(139,115,85,0.4)', fontFamily: 'Garamond, serif', letterSpacing: '0.1em' }}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-[#c8962a] mb-4" style={{ fontFamily: 'Garamond, serif', fontSize: '2.5rem', fontWeight: 300, letterSpacing: '0.3em' }}>CRAFTED IN THE CULTURE</h2>
          <p className="text-center text-[#8b7355] mb-16" style={{ fontFamily: 'Garamond, serif', letterSpacing: '0.15em' }}>Jason Salvador — relationships built at the apex of fashion</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {influences.map((inf, i) => (
              <motion.div key={inf.name} className="p-6 text-center rounded-2xl" style={{ background: 'rgba(26,20,16,0.6)', border: '1px solid rgba(139,115,85,0.3)' }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Sparkles className="w-6 h-6 text-[#c8962a] mx-auto mb-3" />
                <h4 className="text-[#d4c5b0] text-lg mb-1" style={{ fontFamily: 'Garamond, serif', fontWeight: 600 }}>{inf.name}</h4>
                <p className="text-[#c8962a] text-xs mb-3" style={{ fontFamily: 'Garamond, serif', letterSpacing: '0.1em' }}>{inf.role}</p>
                <p className="text-[#8b7355] text-xs italic" style={{ fontFamily: 'Garamond, serif' }}>{inf.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 text-center" style={{ borderTop: '1px solid rgba(139,115,85,0.3)' }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-[#8b7355] mb-4" style={{ fontFamily: 'Garamond, serif', letterSpacing: '0.3em', fontSize: '0.8rem' }}>RED VISION CREATIVE STUDIO PRESENTS</p>
          <h2 className="text-[#c8962a] mb-8" style={{ fontFamily: '"Dancing Script", "Brush Script MT", cursive', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, textShadow: '0 0 30px rgba(200,150,42,0.25)' }}>
            Giftd n' Privlgd
          </h2>
          <a href="https://redvisioncreativestudio.myshopify.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 text-white"
            style={{ background: 'linear-gradient(135deg, #8b7355, #6b5345)', border: '2px solid #c8962a', fontFamily: 'Garamond, serif', letterSpacing: '0.25em', fontSize: '0.9rem' }}>
            <ShoppingBag className="w-5 h-5" />
            EXPLORE COLLECTIONS
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fashion;
