import { Zap } from 'lucide-react';
const FashionSection = () => {
  const collection = {
    title: "Giftd 'n Privlgd",
    collectionName: "Classic Collection",
    description: "Made by yours truly - culturally conscious crafted fine clothing that celebrates African American excellence and sophistication.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80",
    badge: "CLASSIC",
    tech: "Premium tailoring and heritage"
  };
  return <section id="fashion" className="py-24 bg-gradient-to-br from-secondary via-primary/5 to-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: "url(\"https://www.canva.com/design/DAG6mWCiPws/szRr4BU6q4tVgG7GhiCVTw/edit\")"
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
          <p className="text-xl leading-relaxed max-w-3xl mx-auto text-secondary-foreground">
            Revolutionizing fashion through artificial intelligence, creating garments that adapt, 
            evolve, and respond to the wearer's environment and emotions.
          </p>
        </div>

        {/* Collection Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Collection Image */}
          <div className="relative group">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 relative">
              <img src={collection.image} alt={collection.title} className="w-full h-full transition-transform duration-700 group-hover:scale-110 object-contain" />
              
              {/* Badge */}
              <div className="absolute top-6 right-6">
                <div className="px-4 py-2 bg-gold text-secondary rounded-full font-bold text-sm tracking-wide">
                  {collection.badge}
                </div>
              </div>
              
              {/* Bottom info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-sm mb-2 text-secondary">{collection.collectionName}</div>
                <div className="text-2xl font-bold text-rose-800">{collection.title}</div>
              </div>
            </div>
          </div>

          {/* Collection Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                {collection.title}
              </h3>
              <p className="text-xl leading-relaxed mb-6 text-secondary">
                {collection.description}
              </p>
            </div>

            {/* Tech Integration */}
            <div className="border border-accent/20 rounded-2xl p-6 backdrop-blur-sm bg-sidebar-foreground">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-accent" />
                <h4 className="text-lg font-semibold text-primary">Technology Integration</h4>
              </div>
              <p className="text-primary">
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
      </div>
    </section>;
};
export default FashionSection;