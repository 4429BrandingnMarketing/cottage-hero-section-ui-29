import { Zap } from 'lucide-react';

const FashionSection = () => {
  const collections = [
    {
      id: 0,
      title: "Harlem Renaissance Edition",
      collectionName: "Heritage Collection",
      description: "A cinematic tribute to 1920s Harlem, blending vintage elegance, jazz culture, and the birth of modern Black artistry with luxury streetwear.",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
      badge: "HERITAGE",
      tech: "Cultural storytelling through fashion"
    },
    {
      id: 1,
      title: "Giftd 'n Privlgd",
      collectionName: "Classic Collection",
      description: "Made by yours truly - culturally conscious crafted fine clothing that celebrates African American excellence and sophistication.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80",
      badge: "CLASSIC",
      tech: "Premium tailoring and heritage"
    },
    {
      id: 2,
      title: "Burning Fashion",
      collectionName: "Street Couture",
      description: "Own that runway with style on a budget. Trends that you should try - modern streetwear meets cultural authenticity.",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea00f4f5?auto=format&fit=crop&w=1000&q=80",
      badge: "STREET",
      tech: "Accessible luxury streetwear"
    }
  ];

  return (
    <section id="fashion" className="py-24 bg-gradient-to-br from-secondary via-primary/5 to-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent drop-shadow-red-glow">
              Fashion Division
            </span>
          </h2>
          <p className="text-accent font-medium text-lg mb-6">AI × Haute Couture</p>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Revolutionizing fashion through artificial intelligence, creating garments that adapt, 
            evolve, and respond to the wearer's environment and emotions.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="space-y-24">
          {collections.map((collection, index) => (
            <div 
              key={collection.id} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Collection Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 relative">
                  <img 
                    src={collection.image} 
                    alt={collection.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="px-4 py-2 bg-gold text-secondary rounded-full font-bold text-sm tracking-wide">
                      {collection.badge}
                    </div>
                  </div>
                  
                  {/* Bottom info */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white/80 text-sm mb-2">{collection.collectionName}</div>
                    <div className="text-white text-2xl font-bold">{collection.title}</div>
                  </div>
                </div>
              </div>

              {/* Collection Details */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {collection.title}
                  </h3>
                  <p className="text-xl text-white/80 leading-relaxed mb-6">
                    {collection.description}
                  </p>
                </div>

                {/* Tech Integration */}
                <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-5 h-5 text-accent" />
                    <h4 className="text-lg font-semibold text-accent">Technology Integration</h4>
                  </div>
                  <p className="text-white/70">
                    {collection.tech}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 px-6 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 hover:shadow-red-glow hover:-translate-y-1 transition-all duration-300">
                    View Collection
                  </button>
                  <button className="flex-1 px-6 py-4 bg-transparent border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-secondary hover:shadow-cyan-glow transition-all duration-300">
                    Design Process
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FashionSection;
