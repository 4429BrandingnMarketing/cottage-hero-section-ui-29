import { Palette, Zap, Music, Film, Gamepad2, Brain } from 'lucide-react';

const DivisionsSection = () => {
  const divisions = [
    {
      name: "AI Fashion",
      icon: Palette,
      description: "Revolutionary fashion design powered by artificial intelligence, creating unique styles that blend technology with haute couture.",
      color: "from-primary to-accent"
    },
    {
      name: "Digital Entertainment",
      icon: Film,
      description: "Immersive digital experiences that push the boundaries of storytelling through cutting-edge technology.",
      color: "from-accent to-gold"
    },
    {
      name: "Interactive Media",
      icon: Gamepad2,
      description: "Next-generation interactive content that responds and adapts to user engagement in real-time.",
      color: "from-gold to-primary"
    },
    {
      name: "AI Music Production",
      icon: Music,
      description: "Algorithmic composition and sound design that creates emotionally resonant musical experiences.",
      color: "from-primary to-gold"
    },
    {
      name: "Neural Networks",
      icon: Brain,
      description: "Advanced AI systems that learn and evolve, powering all our creative and technological innovations.",
      color: "from-accent to-primary"
    },
    {
      name: "Future Tech",
      icon: Zap,
      description: "Experimental technologies and research into the next frontier of human-AI collaborative creativity.",
      color: "from-gold to-accent"
    }
  ];

  return (
    <section id="divisions" className="py-24 bg-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-accent/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent drop-shadow-red-glow">
              Our Creative Divisions
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Explore the convergence of artificial intelligence and human creativity across our specialized divisions, 
            each pushing the boundaries of what's possible in the digital realm.
          </p>
        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => {
            const IconComponent = division.icon;
            return (
              <div
                key={division.name}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-red-glow cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${division.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                    {division.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {division.description}
                  </p>
                  
                  {/* Hover arrow */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="inline-flex items-center text-accent font-medium">
                      <span>Explore Division</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white/60 mb-6">Ready to collaborate with the future?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-red-glow hover:-translate-y-1 transition-all duration-300">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;