import { Video, Film, Camera, Clapperboard, Radio, Share2, Monitor, Sparkles, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
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
    <section className="py-28 px-6 bg-muted/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6">
            Services
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            End-to-end video production powered by cutting-edge technology and creative excellence.
          </p>
        </div>

        {/* Stats row */}
        {stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat) => (
              <div key={stat.id} className="border-l-2 border-primary/30 pl-5">
                <div className="text-3xl md:text-4xl font-black text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Services grid */}
        {services.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Video;
              return (
                <div
                  key={service.id}
                  className="bg-background p-8 hover:bg-muted/60 transition-colors duration-300 group"
                >
                  <Icon className="w-7 h-7 text-primary mb-5 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default TVServices;
