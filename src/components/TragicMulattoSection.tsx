import { FileText, PenTool, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const TragicMulattoSection = () => {
  const features = [
    {
      icon: PenTool,
      title: "Cultural Commentary",
      description: "Insightful analysis of culture, identity, and the intersection of art and society."
    },
    {
      icon: BookOpen,
      title: "Artist Spotlights",
      description: "In-depth features on emerging and established artists shaping the cultural landscape."
    },
    {
      icon: Sparkles,
      title: "AI-Enhanced Content",
      description: "Storytelling that bridges traditional media with next-generation content creation."
    }
  ];

  return (
    <section id="tragic-mulatto" className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      {/* Top border accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
              <FileText className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Blog & Media Division</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">A Tragic </span>
              <span className="bg-gradient-to-r from-gold to-orange-400 bg-clip-text text-transparent">
                Mulatto
              </span>
            </h2>

            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Blog and media platform providing cultural commentary, artist spotlights, and storytelling
              that bridges traditional media with AI-enhanced content creation.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/divisions/blog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-orange-500 text-black rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <BookOpen className="w-4 h-4" />
                Read Articles
              </Link>
              <Link
                to="/divisions/blog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-gold/50 text-gold rounded-full font-semibold hover:bg-gold/10 hover:border-gold transition-all duration-300"
              >
                Explore Division
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Main card */}
              <div className="w-full h-full bg-gradient-to-br from-gold/20 via-orange-500/10 to-primary/20 rounded-3xl border border-gold/20 flex items-center justify-center overflow-hidden">
                <FileText className="w-32 h-32 text-gold/30" />
              </div>

              {/* Floating accent cards */}
              <div className="absolute -top-4 -right-4 bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-4 w-40">
                <div className="text-2xl font-bold text-gold mb-1">100+</div>
                <div className="text-white/60 text-xs">Cultural articles</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-4 w-44">
                <div className="text-2xl font-bold text-gold mb-1">AI-Enhanced</div>
                <div className="text-white/60 text-xs">Storytelling platform</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
    </section>
  );
};

export default TragicMulattoSection;
