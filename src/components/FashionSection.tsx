import { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Zap, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import vintageNewsletter from '@/assets/vintage-newsletter.png';
import page2 from '@/assets/page-2.png';
import page3 from '@/assets/page-3.png';
import page4 from '@/assets/page-4.png';
import page5 from '@/assets/page-5.png';
const FashionSection = () => {
  const seasons = [{
    id: 0,
    title: "Harlem Renaissance Edition",
    season: "Heritage Collection",
    description: "A cinematic tribute to 1920s Harlem, blending vintage elegance, jazz culture, and the birth of modern Black artistry with luxury streetwear.",
    image: vintageNewsletter,
    badge: "HERITAGE",
    tech: "Cultural storytelling through fashion"
  }, {
    id: 1,
    title: "Giftd 'n Privlgd",
    season: "Classic Collection",
    description: "Made by yours truly - culturally conscious crafted fine clothing that celebrates African American excellence and sophistication.",
    image: page2,
    badge: "CLASSIC",
    tech: "Premium tailoring and heritage"
  }, {
    id: 2,
    title: "Burning Fashion",
    season: "Street Couture",
    description: "Own that runway with style on a budget. Trends that you should try - modern streetwear meets cultural authenticity.",
    image: page3,
    badge: "STREET",
    tech: "Accessible luxury design"
  }, {
    id: 3,
    title: "Industry First",
    season: "Mission Collection",
    description: "A forward-thinking fashion house dedicated to reframing the narrative of African American excellence through luxury streetwear and cultural storytelling.",
    image: page4,
    badge: "VISION",
    tech: "Cultural empowerment through design"
  }, {
    id: 4,
    title: "The Burning Fashion",
    season: "Legacy Collection",
    description: "Always dress like you're going to see your worst enemy. Heritage meets innovation in designs that amplify the richness of Black identity.",
    image: page5,
    badge: "LEGACY",
    tech: "Storytelling through premium garments"
  }];
  return <section id="fashion" className="py-24 bg-gradient-to-br from-secondary via-primary/5 to-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent drop-shadow-red-glow">
                    Fashion Division
                  </span>
                </h2>
                <p className="text-accent font-medium">AI × Haute Couture</p>
              </div>
            </div>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Revolutionizing fashion through artificial intelligence, creating garments that adapt, 
              evolve, and respond to the wearer's environment and emotions.
            </p>
          </div>
        </div>

        {/* Fashion Collections Carousel */}
        <Carousel className="w-full max-w-7xl mx-auto">
          <CarouselContent>
            {seasons.map((season) => (
              <CarouselItem key={season.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Collection Image */}
                  <div className="relative group">
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 relative">
                      <img src={season.image} alt={season.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      
                      {/* Badge */}
                      <div className="absolute top-6 right-6">
                        <div className="px-4 py-2 bg-gold text-secondary rounded-full font-bold text-sm tracking-wide">
                          {season.badge}
                        </div>
                      </div>
                      
                      {/* Bottom info */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="text-white/80 text-sm mb-2">{season.season}</div>
                        <div className="text-white text-2xl font-bold">{season.title}</div>
                      </div>
                    </div>
                  </div>

                  {/* Collection Details */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {season.title}
                      </h3>
                      <p className="text-xl text-white/80 leading-relaxed mb-6">
                        {season.description}
                      </p>
                    </div>

                    {/* Tech Integration */}
                    <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <Zap className="w-5 h-5 text-accent" />
                        <h4 className="text-lg font-semibold text-accent">Technology Integration</h4>
                      </div>
                      <p className="text-white/70">
                        {season.tech}
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
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Carousel Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="relative translate-x-0 translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="relative translate-x-0 translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </div>
        </Carousel>

        {/* Product Gallery Preview */}
        <div className="mt-24 p-12 bg-primary/5 rounded-3xl border border-primary/30 backdrop-blur-sm relative overflow-hidden shadow-red-glow/20">
          {/* Background decoration */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4 flex items-center justify-center gap-3">
                <Sparkles className="w-6 h-6" />
                Exclusive Digital Showcase
                <Sparkles className="w-6 h-6" />
              </h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                Experience our collections in virtual reality, where fashion transcends physical limitations
              </p>
            </div>
            
            <div className="text-center">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-red-glow hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Enter Virtual Showroom</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FashionSection;