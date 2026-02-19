import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const TVHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* Full-screen animated grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Cinematic grain overlay */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

      {/* Massive radial glow — hero focal point */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-primary/8 blur-[200px]" />
      <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-accent/6 blur-[150px]" />
      <div className="absolute bottom-[20%] left-[5%] w-[500px] h-[500px] rounded-full bg-primary/4 blur-[180px]" />

      {/* Dramatic vertical light streaks */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-0 left-[35%] w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-0 right-[25%] w-px h-full bg-gradient-to-b from-transparent via-accent/15 to-transparent" />
        <div className="absolute top-0 right-[45%] w-px h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      </motion.div>

      {/* Horizontal accent lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute inset-0"
      >
        <div className="absolute top-[25%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute bottom-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
      </motion.div>

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[20%] right-[20%] w-3 h-3 rounded-full bg-primary/40 blur-[2px]"
      />
      <motion.div
        animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[35%] left-[15%] w-2 h-2 rounded-full bg-accent/30 blur-[1px]"
      />
      <motion.div
        animate={{ y: [-10, 25, -10] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[60%] right-[35%] w-1.5 h-1.5 rounded-full bg-primary/50 blur-[1px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="inline-flex items-center text-secondary-foreground/40 hover:text-secondary-foreground mb-20 transition-colors text-[10px] tracking-[0.5em] uppercase group">
            <ArrowRight className="w-3 h-3 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
            <p className="text-primary text-[10px] font-black tracking-[0.6em] uppercase">
              Red Vision TV Division
            </p>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-7xl sm:text-9xl md:text-[10rem] lg:text-[13rem] font-black leading-[0.8] tracking-[-0.05em] text-secondary-foreground mb-12"
        >
          <span className="block">We craft</span>
          <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            cinematic
          </span>
          <span className="block text-secondary-foreground/70 text-[0.6em]">experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-secondary-foreground/40 text-base md:text-lg max-w-md mx-auto mb-16 leading-relaxed font-light tracking-wide"
        >
          4K/8K production, music videos, documentaries, and interviews — elevated by AI-enhanced post-production.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <Button size="lg" className="text-xs px-14 py-8 rounded-full group tracking-[0.3em] uppercase font-black shadow-[0_0_60px_hsl(var(--primary)/0.3)]">
            Start a Project
            <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="text-xs px-14 py-8 rounded-full border-secondary-foreground/10 text-secondary-foreground hover:bg-secondary-foreground/5 group tracking-[0.3em] uppercase font-black backdrop-blur-sm">
            <Play className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
            Showreel
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent"
          />
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-background to-transparent" />

      {/* Corner accents — thicker and more visible */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-primary/25" />
        <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-primary/25" />
        <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-primary/25" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-primary/25" />
      </motion.div>
    </section>
  );
};

export default TVHero;
