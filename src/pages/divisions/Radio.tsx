import { useEffect, useState } from 'react';
import { Radio as RadioIcon, Podcast, Mic, ArrowRight, Play, Headphones, Share2, Music, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const iconMap: Record<string, any> = {
  Podcast,
  Radio: RadioIcon,
  Mic,
  Share2,
  Headphones,
  Music,
};

interface RadioService {
  id: string;
  title: string;
  description: string;
  icon: string;
  order_index: number;
  link: string | null;
}

interface RadioStat {
  id: string;
  value: string;
  label: string;
  order_index: number;
}

const Radio = () => {
  const [services, setServices] = useState<RadioService[]>([]);
  const [stats, setStats] = useState<RadioStat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [servicesRes, statsRes] = await Promise.all([
        supabase.from('radio_services').select('*').order('order_index'),
        supabase.from('radio_stats').select('*').order('order_index'),
      ]);

      if (servicesRes.data) setServices(servicesRes.data);
      if (statsRes.data) setStats(statsRes.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <RadioIcon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Podcast & Audio</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                Red Vision <span className="text-primary">Radio</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Podcast and audio content division featuring thought-provoking discussions, industry insights, 
                and cultural commentary with AI-powered editing and distribution.
              </p>
              
              <div className="flex gap-4">
                <Button size="lg" className="px-8">
                  Start Podcast
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  <Play className="w-4 h-4 mr-2" />
                  Listen
                </Button>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <RadioIcon className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {stats.length > 0 && (
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div 
                  key={stat.id} 
                  className="text-center p-8 bg-card border border-border rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {services.length > 0 && (
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional audio production and podcast services powered by AI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = iconMap[service.icon] || RadioIcon;
                const CardWrapper = service.link ? 'a' : 'div';
                const cardProps = service.link ? { href: service.link, target: '_blank', rel: 'noopener noreferrer' } : {};
                
                return (
                  <Card 
                    key={service.id} 
                    className="bg-card border-border hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                  >
                    <CardWrapper {...cardProps} className="block">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                          {service.link && <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />}
                        </div>
                        <p className="text-muted-foreground">{service.description}</p>
                      </CardContent>
                    </CardWrapper>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Loading State */}
      {loading && (
        <div className="py-24 text-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Radio;
