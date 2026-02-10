import { Play } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Urban Pulse',
    category: 'Music Video',
    aspect: 'col-span-2 row-span-2',
    gradient: 'from-primary/80 to-primary/40',
  },
  {
    title: 'The Journey Within',
    category: 'Documentary',
    aspect: 'col-span-1 row-span-1',
    gradient: 'from-accent/60 to-accent/30',
  },
  {
    title: 'Neon Nights',
    category: 'Commercial',
    aspect: 'col-span-1 row-span-1',
    gradient: 'from-secondary to-secondary/60',
  },
  {
    title: 'Breaking Ground',
    category: 'Interview Series',
    aspect: 'col-span-1 row-span-1',
    gradient: 'from-primary/60 to-accent/40',
  },
  {
    title: 'Velocity',
    category: 'Brand Film',
    aspect: 'col-span-1 row-span-1',
    gradient: 'from-accent/70 to-primary/50',
  },
  {
    title: 'Echoes',
    category: 'Short Film',
    aspect: 'col-span-2 row-span-1',
    gradient: 'from-secondary/80 to-primary/30',
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
              {/* Gradient placeholder (replace with real thumbnails) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
              
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500" />

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
