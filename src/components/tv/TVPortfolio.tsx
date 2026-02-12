import { Play, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
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
  },
  {
    title: 'The Journey Within',
    category: 'Documentary',
    year: '2025',
    aspect: 'col-span-1 row-span-1',
    image: portfolioJourneyWithin,
  },
  {
    title: 'Neon Nights',
    category: 'Commercial',
    year: '2024',
    aspect: 'col-span-1 row-span-1',
    image: portfolioNeonNights,
  },
  {
    title: 'Breaking Ground',
    category: 'Interview Series',
    year: '2024',
    aspect: 'col-span-1 row-span-1',
    image: portfolioBreakingGround,
  },
  {
    title: 'Velocity',
    category: 'Brand Film',
    year: '2024',
    aspect: 'col-span-1 row-span-1',
    image: portfolioVelocity,
  },
  {
    title: 'Echoes',
    category: 'Short Film',
    year: '2023',
    aspect: 'col-span-2 row-span-1',
    image: portfolioEchoes,
  },
];

const TVPortfolio = () => {
  return (
    <section className="py-32 px-6 bg-secondary relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" />
              <p className="text-primary text-xs font-bold tracking-[0.4em] uppercase">
                Selected Work
              </p>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-[-0.03em] text-secondary-foreground">
              Portfolio
            </h2>
          </div>
          <p className="text-secondary-foreground/40 text-sm max-w-xs leading-relaxed">
            A curated collection of our most impactful visual stories and productions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[160px] md:auto-rows-[240px]">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`${item.aspect} group relative rounded-xl overflow-hidden cursor-pointer`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                loading="lazy"
              />

              {/* Cinematic letterbox bars on hover */}
              <div className="absolute inset-x-0 top-0 h-0 group-hover:h-[8%] bg-secondary transition-all duration-700" />
              <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-[8%] bg-secondary transition-all duration-700" />

              {/* Dark vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Play icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_hsl(var(--primary)/0.4)]">
                  <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
                </div>
              </div>

              {/* Title + meta */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">
                    {item.category}
                  </p>
                  <span className="text-secondary-foreground/30 text-[10px]">•</span>
                  <p className="text-[10px] text-secondary-foreground/40">{item.year}</p>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-secondary-foreground">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-secondary-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TVPortfolio;
