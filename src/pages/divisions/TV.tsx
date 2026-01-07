import { useState, useEffect } from 'react';
import { Video, Film, Camera, ArrowRight, Play, Sparkles, Monitor, Clapperboard, Radio, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';

// Icon mapping for dynamic icon rendering
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

const TV = () => {
  const [services, setServices] = useState<TVService[]>([]);
  const [stats, setStats] = useState<TVStat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [servicesRes, statsRes] = await Promise.all([
        supabase.from('tv_services').select('*').order('order_index'),
        supabase.from('tv_stats').select('*').order('order_index')
      ]);
      
      if (servicesRes.data) setServices(servicesRes.data);
      if (statsRes.data) setStats(statsRes.data);
      setLoading(false);
    };
    
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/20 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/15 via-accent/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full"></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-40 left-20 w-20 h-20 bg-gradient-to-br from-accent/30 to-primary/20 rounded-2xl backdrop-blur-sm border border-white/10 animate-bounce hidden lg:block" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-60 right-32 w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full backdrop-blur-sm border border-white/10 animate-bounce hidden lg:block" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-br from-accent/40 to-transparent rounded-lg backdrop-blur-sm border border-white/10 animate-bounce hidden lg:block" style={{ animationDuration: '5s', animationDelay: '0.5s' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors group">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-8 backdrop-blur-sm">
              <Video className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">4K/8K Production</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-foreground">Red Vision</span>{" "}
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">TV</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Premium content creation platform specializing in 4K/8K video production, music videos, documentaries, 
              and exclusive interviews with AI-enhanced post-production.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 group">
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Request Production
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 backdrop-blur-sm group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Glass Effect */}
      {stats.length > 0 && (
        <section className="py-16 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div 
                  key={stat.id} 
                  className="text-center p-8 bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 group hover:-translate-y-2"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
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
        <section className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                End-to-end video production services powered by cutting-edge technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => {
                const Icon = iconMap[service.icon] || Video;
                return (
                  <Card 
                    key={service.id} 
                    className="bg-card/50 backdrop-blur-md border-border/50 hover:border-accent/40 transition-all duration-500 group hover:-translate-y-3 hover:shadow-2xl hover:shadow-accent/10 overflow-hidden"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {/* Glass shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardContent className="p-8 relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section with Glass Effect */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-accent/10 via-card/80 to-primary/10 backdrop-blur-lg border-accent/20 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            
            <CardContent className="p-10 md:p-16 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-accent/20">
                      <Monitor className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">Start Your Project</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-8">
                    From concept to final cut, our team delivers exceptional visual content 
                    that captivates audiences and elevates your brand.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="group">
                      <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      Get Quote
                    </Button>
                    <Button variant="outline" size="lg" className="backdrop-blur-sm group">
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      View Portfolio
                    </Button>
                  </div>
                </div>
                
                {/* Feature grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Film, label: '4K/8K Quality' },
                    { icon: Camera, label: 'Pro Equipment' },
                    { icon: Sparkles, label: 'AI Enhanced' },
                    { icon: Video, label: 'Fast Delivery' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center gap-3 p-4 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover:border-accent/30 hover:bg-card/50 transition-all duration-300">
                        <Icon className="w-5 h-5 text-accent" />
                        <span className="text-sm font-medium text-foreground">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TV;