import { Play, ArrowUpRight, X } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import portfolioUrbanPulse from '@/assets/portfolio-urban-pulse.jpg';
import portfolioJourneyWithin from '@/assets/portfolio-journey-within.jpg';
import portfolioNeonNights from '@/assets/portfolio-neon-nights.jpg';
import portfolioBreakingGround from '@/assets/portfolio-breaking-ground.jpg';
import portfolioVelocity from '@/assets/portfolio-velocity.jpg';
import portfolioEchoes from '@/assets/portfolio-echoes.jpg';

const portfolioItems = [
  {
    title: 'Urban Pulse',
    category: 'Music Video',
    year: '2025',
    aspect: 'col-span-2 row-span-2',
    image: portfolioUrbanPulse,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
  },
  {
    title: 'The Journey Within',
    category: 'Documentary',
    year: '2025',
    aspect: 'col-span-1 row-span-1',
    image: portfolioJourneyWithin,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
  },
  {
    title: 'Neon Nights',
    category: 'Commercial',
    year: '2024',
    aspect: 'col-span-1 row-span-1',
    image: portfolioNeonNights,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
  },
  {
    title: 'Breaking Ground',
    category: 'Interview Series',
    year: '2024',
    aspect: 'col-span-1 row-span-1',
    image: portfolioBreakingGround,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
  },
  {
    title: 'Velocity',
    category: 'Brand Film',
    year: '2024',
    aspect: 'col-span-1 row-span-1',
    image: portfolioVelocity,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
  },
  {
    title: 'Echoes',
    category: 'Short Film',
    year: '2023',
    aspect: 'col-span-2 row-span-1',
    image: portfolioEchoes,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
  },
];

interface ParallaxCardProps {
  item: typeof portfolioItems[0];
  index: number;
  onPlay: (item: typeof portfolioItems[0]) => void;
}

const ParallaxCard = ({ item, index, onPlay }: ParallaxCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`${item.aspect} group relative rounded-2xl overflow-hidden cursor-pointer`}
      onClick={() => onPlay(item)}
    >
      {/* Parallax image */}
      <motion.div className="absolute inset-[-20%] w-[140%] h-[140%]" style={{ y }}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
          loading="lazy"
        />
      </motion.div>

      {/* Cinematic letterbox bars */}
      <div className="absolute inset-x-0 top-0 h-0 group-hover:h-[8%] bg-secondary transition-all duration-700 z-10" />
      <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-[8%] bg-secondary transition-all duration-700 z-10" />

      {/* Multi-layer vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

      {/* Play icon with glow pulse */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 z-20">
        <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_60px_hsl(var(--primary)/0.5),0_0_120px_hsl(var(--primary)/0.2)]">
          <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
        </div>
      </div>

      {/* Title + meta */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-2 mb-2">
          <p className="text-[9px] font-black tracking-[0.4em] uppercase text-primary">
            {item.category}
          </p>
          <span className="text-secondary-foreground/20 text-[9px]">•</span>
          <p className="text-[9px] text-secondary-foreground/30 tracking-wider">{item.year}</p>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-black text-secondary-foreground tracking-tight">
            {item.title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-secondary-foreground/30 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </div>
      </div>

      {/* Corner accent on hover */}
      <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-primary/0 group-hover:border-primary/40 transition-all duration-500 z-20" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-primary/0 group-hover:border-primary/40 transition-all duration-500 z-20" />
    </motion.div>
  );
};

const TVPortfolio = () => {
  const [lightbox, setLightbox] = useState<typeof portfolioItems[0] | null>(null);

  return (
    <>
      <section className="py-40 px-6 bg-secondary relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[150px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-24 gap-8"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
                <p className="text-primary text-[10px] font-black tracking-[0.6em] uppercase">
                  Selected Work
                </p>
              </div>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-[-0.04em] text-secondary-foreground leading-[0.9]">
                Portfolio
              </h2>
            </div>
            <p className="text-secondary-foreground/30 text-sm max-w-xs leading-relaxed tracking-wide">
              A curated collection of our most impactful visual stories and productions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[280px]">
            {portfolioItems.map((item, i) => (
              <ParallaxCard key={item.title} item={item} index={i} onPlay={setLightbox} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-secondary/98 backdrop-blur-xl"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 z-50 w-14 h-14 rounded-full bg-secondary-foreground/5 hover:bg-secondary-foreground/15 border border-secondary-foreground/10 flex items-center justify-center transition-all duration-300"
            >
              <X className="w-5 h-5 text-secondary-foreground" />
            </button>

            <div className="absolute top-6 left-6 z-50">
              <p className="text-[9px] font-black tracking-[0.4em] uppercase text-primary mb-1">{lightbox.category}</p>
              <h3 className="text-2xl font-black text-secondary-foreground tracking-tight">{lightbox.title}</h3>
            </div>

            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-[92vw] max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_100px_hsl(var(--primary)/0.2),0_40px_80px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={lightbox.videoUrl}
                title={lightbox.title}
                className="w-full h-full"
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TVPortfolio;
