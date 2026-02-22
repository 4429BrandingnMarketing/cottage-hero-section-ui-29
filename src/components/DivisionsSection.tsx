import { Music, Video, Radio, Cpu, Shirt, FileText, Navigation, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const DivisionsSection = () => {
  const divisions = [
    {
      name: "The Pivot",
      icon: Navigation,
      description: "A product of Red Vision AI. An operational tour management system, application, and instruction manual designed for scaling artists.",
      color: "from-green-600 to-emerald-600",
      highlights: ["Tour Management System", "Digital Command App", "Industry Methodology"],
      link: "/the-pivot"
    },
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
      link: "https://lovable.dev/projects/530a5e02-ed78-4b07-aea9-ef8883ee33ea"
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
      name: "#4429 Lifestyle",
      icon: Megaphone,
      description: "Lifestyle + Marketing Agency AI Agent Hub. Deploy autonomous agents 24/7 for content creation, promotion, and business growth.",
      color: "from-primary to-accent",
      highlights: ["AI Agent Workforce", "Revenue Monitoring", "Content Studio"],
      link: "/divisions/marketing"
    },
    {
      name: "Visionary OS",
      icon: Cpu,
      description: "Red Vision AI's staple product. A complete autonomous business operating system allowing music entrepreneurs to scale via AI workforce and intelligent distribution.",
      color: "from-primary to-purple-600",
      highlights: ["Autonomous AI Workforce", "Red Vision Music Distro", "Strategic Intelligence"],
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
    <section id="divisions" className="py-24 bg-black relative overflow-hidden">
      {/* Dynamic Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-red-vision-gradient animate-gradient-shift opacity-5" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] opacity-20 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase">
            Strategic <span className="text-primary">Divisions</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
            Seven high-execution ecosystems leveraging AI to amplify human creativity across music, fashion, and tech.
          </p>
        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => {
            const IconComponent = division.icon;
            const isExternal = division.link.startsWith('http');
            const DivisionWrapper = isExternal ? 'a' as any : Link;
            const wrapperProps = isExternal
              ? { href: division.link, target: "_blank", rel: "noopener noreferrer" }
              : { to: division.link };

            return (
              <DivisionWrapper
                key={division.name}
                {...wrapperProps}
                className="group h-full glass-card p-10 relative overflow-hidden cursor-pointer block"
              >
                {/* Individual Gradient Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${division.color} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity duration-500 rounded-2xl`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${division.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter italic group-hover:text-primary transition-colors duration-300">
                    {division.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed font-light mb-6 line-clamp-3 group-hover:text-white transition-colors duration-300">
                    {division.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-8">
                    {division.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-red-glow"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover indicator */}
                  <div className="pt-6 border-t border-white/10 opacity-60 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-widest">EXPLORE HUB</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5-5 5M6 7l5 5-5 5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </DivisionWrapper>
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