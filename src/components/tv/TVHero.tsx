import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const TVHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-secondary">
      {/* Cinematic grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
      
      {/* Dramatic light streaks */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <Link to="/" className="inline-flex items-center text-secondary-foreground/60 hover:text-secondary-foreground mb-12 transition-colors text-sm tracking-widest uppercase group">
          <ArrowRight className="w-3 h-3 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Home
        </Link>

        <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-6">
          Red Vision TV Division
        </p>

        <h1 className="text-5xl sm:text-7xl md:text-[6.5rem] font-black leading-[0.9] tracking-tighter text-secondary-foreground mb-8">
          We craft
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            cinematic
          </span>
          <br />
          experiences
        </h1>

        <p className="text-secondary-foreground/60 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
          4K/8K production, music videos, documentaries, and interviews — elevated by AI-enhanced post-production.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base px-10 py-6 rounded-full group">
            Start a Project
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="text-base px-10 py-6 rounded-full border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 group">
            <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Watch Showreel
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default TVHero;
