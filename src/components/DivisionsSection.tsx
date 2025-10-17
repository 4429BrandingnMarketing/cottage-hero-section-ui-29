import { Music, Video, Radio, Cpu, Shirt, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const DivisionsSection = () => {
  const divisions = [
    {
      name: "Red Vision Music",
      icon: Music,
      description: "Grammy-affiliated AI record label featuring Diamond-selling producer My Guy Mars, City High's Ryan Toby, and songwriter James Fauntleroy. True artist partnerships with AI-enhanced production.",
      color: "from-primary to-red-600",
      highlights: ["Grammy-winning artists", "AI-enhanced marketing", "True partnerships"],
      link: "/divisions/music"
    },
    {
      name: "Red Vision TV",
      icon: Video,
      description: "Premium content creation platform specializing in 4K/8K video production, music videos, documentaries, and exclusive interviews with AI-enhanced post-production.",
      color: "from-accent to-blue-600",
      highlights: ["4K/8K Production", "Music Videos", "Documentary Projects"],
      link: "/divisions/tv"
    },
    {
      name: "Red Vision Radio",
      icon: Radio,
      description: "Podcast and audio content division featuring thought-provoking discussions, industry insights, and cultural commentary with AI-powered editing and distribution.",
      color: "from-gold to-yellow-600",
      highlights: ["Multi-platform presence", "Real-time transcription", "Community building"],
      link: "/divisions/radio"
    },
    {
      name: "Red Vision AI",
      icon: Cpu,
      description: "Technology services division offering AI integration consulting, marketing automation, content optimization, and predictive analytics for creative businesses.",
      color: "from-primary to-purple-600",
      highlights: ["Content strategy automation", "Audience targeting systems", "Creative enhancement tools"],
      link: "/divisions/ai"
    },
    {
      name: "GiFTD N' PrVLGD",
      icon: Shirt,
      description: "Fashion and lifestyle brand creating tech-integrated apparel and limited edition collections that reflect music culture, technological innovation, and social consciousness.",
      color: "from-accent to-green-600",
      highlights: ["Limited edition releases", "Tech-integrated apparel", "Sustainable production"],
      link: "/divisions/fashion"
    },
    {
      name: "A Tragic Mulatto",
      icon: FileText,
      description: "Blog and media platform providing cultural commentary, artist spotlights, and storytelling that bridges traditional media with AI-enhanced content creation.",
      color: "from-gold to-orange-600",
      highlights: ["Cultural analysis", "Artist spotlights", "AI-enhanced content"],
      link: "/divisions/blog"
    }
  ];

  return (
    <section id="divisions" className="py-24 bg-[hsl(0,70%,15%)] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10"></div>
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
            Six integrated divisions leveraging AI to amplify human creativity across music, fashion, technology, 
            and cultural storytelling while maintaining authentic artist partnerships and industry-leading quality.
          </p>
        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => {
            const IconComponent = division.icon;
            return (
              <Link
                key={division.name}
                to={division.link}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-red-glow cursor-pointer block"
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
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300 mb-4">
                    {division.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="space-y-2 mb-4">
                    {division.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-red-glow"></div>
                        <span className="text-sm text-white/70">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
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
              </Link>
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