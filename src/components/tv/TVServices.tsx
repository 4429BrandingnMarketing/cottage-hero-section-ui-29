import { Video, Film, Camera, Clapperboard, Radio, Share2, Monitor, Sparkles, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Video, Film, Camera, Clapperboard, Radio, Share2, Monitor, Sparkles, Play
};

interface TVService {
  id: string;
  title: string;
  description: string;
  icon: string;
  order_index: number;
}

interface TVStat {
  id: string;
  value: string;
  label: string;
  order_index: number;
}

const TVServices = () => {
  const [services, setServices] = useState<TVService[]>([]);
  const [stats, setStats] = useState<TVStat[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [servicesRes, statsRes] = await Promise.all([
        supabase.from('tv_services').select('*').order('order_index'),
        supabase.from('tv_stats').select('*').order('order_index')
      ]);
      if (servicesRes.data) setServices(servicesRes.data);
      if (statsRes.data) setStats(statsRes.data);
    };
    fetchData();
  }, []);

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <p className="text-primary text-xs font-bold tracking-[0.4em] uppercase">
              What We Do
            </p>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-[-0.03em] text-foreground mb-6">
            Services
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            End-to-end video production powered by cutting-edge technology and creative excellence.
          </p>
        </motion.div>

        {/* Stats row — cinematic counter style */}
        {stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="absolute -left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
                <div className="pl-6">
                  <div className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-1 group-hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground tracking-widest uppercase">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Services grid — card with glow effect */}
        {services.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Video;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-primary/5 transition-all duration-500 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/0 group-hover:bg-primary/10 blur-[60px] transition-all duration-700" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default TVServices;
