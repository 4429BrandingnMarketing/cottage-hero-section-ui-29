import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const TVHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Cinematic grain overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

      {/* Dramatic radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />

      {/* Dramatic light streaks */}
      <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
      <div className="absolute top-0 left-[60%] w-px h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      {/* Horizontal accent lines */}
      <div className="absolute top-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="absolute bottom-[25%] left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/8 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="inline-flex items-center text-secondary-foreground/50 hover:text-secondary-foreground mb-16 transition-colors text-xs tracking-[0.4em] uppercase group">
            <ArrowRight className="w-3 h-3 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-primary" />
            <p className="text-primary text-xs font-bold tracking-[0.4em] uppercase">
              Red Vision TV Division
            </p>
            <div className="w-8 h-px bg-primary" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl sm:text-8xl md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-[-0.04em] text-secondary-foreground mb-10"
        >
          We craft
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            cinematic
          </span>
          <br />
          <span className="text-secondary-foreground/80">experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-secondary-foreground/50 text-lg md:text-xl max-w-lg mx-auto mb-14 leading-relaxed font-light"
        >
          4K/8K production, music videos, documentaries, and interviews — elevated by AI-enhanced post-production.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="text-sm px-12 py-7 rounded-full group tracking-wide uppercase font-bold">
            Start a Project
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="text-sm px-12 py-7 rounded-full border-secondary-foreground/15 text-secondary-foreground hover:bg-secondary-foreground/5 group tracking-wide uppercase font-bold">
            <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Showreel
          </Button>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-primary/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-primary/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-primary/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-primary/20" />
    </section>
  );
};

export default TVHero;
