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
    <section className="py-40 px-6 relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/4 blur-[180px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-24 max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
            <p className="text-primary text-[10px] font-black tracking-[0.6em] uppercase">
              What We Do
            </p>
          </div>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-[-0.04em] text-foreground mb-8 leading-[0.9]">
            Services
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            End-to-end video production powered by cutting-edge technology and creative excellence.
          </p>
        </motion.div>

        {/* Stats row — dramatic counter style */}
        {stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-32"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative group"
              >
                <div className="absolute -left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/80 via-primary/30 to-transparent" />
                <div className="pl-8">
                  <div className="text-5xl md:text-6xl font-black text-foreground tracking-tighter mb-2 group-hover:text-primary transition-colors duration-500">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Services grid — premium cards */}
        {services.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Video;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="group relative p-10 rounded-3xl border border-border/30 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-primary/5 transition-all duration-700 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/0 group-hover:bg-primary/15 blur-[80px] transition-all duration-1000" />
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-r border-t border-primary/0 group-hover:border-primary/20 rounded-tr-3xl transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-500">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-black text-foreground mb-4 tracking-tight">{service.title}</h3>
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
