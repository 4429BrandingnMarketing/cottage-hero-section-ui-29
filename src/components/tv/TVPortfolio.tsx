import { Play } from 'lucide-react';
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
    aspect: 'col-span-2 row-span-2',
    image: portfolioUrbanPulse,
  },
  {
    title: 'The Journey Within',
    category: 'Documentary',
    aspect: 'col-span-1 row-span-1',
    image: portfolioJourneyWithin,
  },
  {
    title: 'Neon Nights',
    category: 'Commercial',
    aspect: 'col-span-1 row-span-1',
    image: portfolioNeonNights,
  },
  {
    title: 'Breaking Ground',
    category: 'Interview Series',
    aspect: 'col-span-1 row-span-1',
    image: portfolioBreakingGround,
  },
  {
    title: 'Velocity',
    category: 'Brand Film',
    aspect: 'col-span-1 row-span-1',
    image: portfolioVelocity,
  },
  {
    title: 'Echoes',
    category: 'Short Film',
    aspect: 'col-span-2 row-span-1',
    image: portfolioEchoes,
  },
];

const TVPortfolio = () => {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground">
            Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className={`${item.aspect} group relative rounded-2xl overflow-hidden cursor-pointer`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/50 transition-all duration-500" />

              {/* Play icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center">
                  <Play className="w-5 h-5 text-foreground ml-0.5" />
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs font-medium tracking-widest uppercase text-background/70 mb-1">
                  {item.category}
                </p>
                <h3 className="text-lg font-bold text-background">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TVPortfolio;
