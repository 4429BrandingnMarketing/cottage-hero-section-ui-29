import { Zap, Star, Cpu, Sparkles } from 'lucide-react';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen min-h-[900px] flex flex-col overflow-hidden">
      {/* Large Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.youtube.com/embed/YpdAMwl8Kls?autoplay=1&mute=1&loop=1&playlist=YpdAMwl8Kls&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
          title="Red Vision Creative Studio Showcase"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
        {/* Video Overlay for Content Readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10"></div>
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-red-vision-gradient animate-gradient-shift opacity-20 z-10"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.05] z-10" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}>
        </div>
        
        {/* Enhanced floating particles */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full animate-float opacity-80 shadow-red-glow z-10"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-primary rounded-full animate-float opacity-60 shadow-red-glow z-10" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-2.5 h-2.5 bg-primary rounded-full animate-float opacity-70 shadow-red-glow z-10" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-50 shadow-red-glow z-10" style={{animationDelay: '6s'}}></div>
        <div className="absolute top-60 left-1/2 w-4 h-4 bg-primary rounded-full animate-float opacity-90 shadow-red-glow z-10" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-float opacity-70 shadow-red-glow z-10" style={{animationDelay: '3s'}}></div>
      </div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 md:px-6 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8 backdrop-blur-sm shadow-red-glow">
            <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
            <span className="text-primary text-sm font-medium">AI-Powered Entertainment Studio</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-red-glow">
              RED VISION
            </span>
            <br />
            <span className="text-white drop-shadow-lg">
              CREATIVE STUDIO
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Where artificial intelligence meets human creativity to craft the future of entertainment, fashion, and digital experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 hover:shadow-red-glow hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Explore Our Universe</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-4 bg-transparent border-2 border-accent text-accent rounded-full font-semibold text-lg hover:bg-accent hover:text-secondary hover:shadow-cyan-glow hover:-translate-y-1 transition-all duration-300">
              Watch Our Story
            </button>
          </div>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-white text-sm">AI Fashion</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <Star className="w-4 h-4 text-gold" />
              <span className="text-white text-sm">Digital Entertainment</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-white text-sm">Tech Innovation</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;