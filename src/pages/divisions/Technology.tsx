import { useEffect, useState } from 'react';
import { Cpu, Brain, Zap, Shield, Database, Cloud, ArrowRight, CheckCircle, Sparkles, Code, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const iconMap: Record<string, any> = {
  Cpu,
  Brain,
  Zap,
  Shield,
  Database,
  Cloud,
  Code,
};

interface TechnologyCapability {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  order_index: number;
  link: string | null;
}

interface TechnologyStat {
  id: string;
  value: string;
  label: string;
  order_index: number;
}

const Technology = () => {
  const [capabilities, setCapabilities] = useState<TechnologyCapability[]>([]);
  const [stats, setStats] = useState<TechnologyStat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [capabilitiesRes, statsRes] = await Promise.all([
        supabase.from('technology_capabilities').select('*').order('order_index'),
        supabase.from('technology_stats').select('*').order('order_index'),
      ]);

      if (capabilitiesRes.data) setCapabilities(capabilitiesRes.data);
      if (statsRes.data) setStats(statsRes.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-accent/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-primary/10 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-8">
              <Cpu className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Technology Division</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-accent via-accent to-primary bg-clip-text text-transparent">4429</span>
              {" "}Technology
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Next-generation AI solutions and enterprise technology infrastructure 
              powering the future of business automation and intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Sparkles className="w-5 h-5 mr-2" />
                Explore Solutions
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <ArrowRight className="w-5 h-5 mr-2" />
                Request Demo
              </Button>
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
                  className="text-center p-8 bg-card border border-border rounded-2xl hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Capabilities Section */}
      {capabilities.length > 0 && (
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Our Capabilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge technology solutions designed to transform your business operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability) => {
                const Icon = iconMap[capability.icon] || Cpu;
                const CardWrapper = capability.link ? 'a' : 'div';
                const cardProps = capability.link ? { href: capability.link, target: '_blank', rel: 'noopener noreferrer' } : {};
                
                return (
                  <Card 
                    key={capability.id} 
                    className="bg-card border-border hover:border-accent/30 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                  >
                    <CardWrapper {...cardProps} className="block">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-accent" />
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">{capability.title}</h3>
                          {capability.link && <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />}
                        </div>
                        <p className="text-muted-foreground mb-4">{capability.description}</p>
                        
                        {capability.features.length > 0 && (
                          <div className="space-y-2 mt-4 pt-4 border-t border-border">
                            {capability.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </CardWrapper>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-br from-accent/10 via-card to-primary/10 border-accent/20">
            <CardContent className="p-10 md:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center">
                      <Brain className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">Ready to Transform?</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-8">
                    Discover how 4429 Technology can revolutionize your operations with 
                    AI-powered solutions and enterprise-grade infrastructure.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg">
                      Schedule Consultation
                    </Button>
                    <Button variant="outline" size="lg">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      View Documentation
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Shield, label: 'Enterprise Security' },
                    { icon: Cloud, label: 'Cloud Infrastructure' },
                    { icon: Zap, label: 'Real-time Processing' },
                    { icon: Database, label: 'Data Analytics' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center gap-3 p-4 bg-card/50 border border-border rounded-xl">
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

export default Technology;
