import { useEffect, useState } from 'react';
import { Megaphone, TrendingUp, Target, Users, BarChart3, Globe, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const iconMap: Record<string, any> = {
  Target,
  TrendingUp,
  Globe,
  BarChart3,
  Megaphone,
  Users,
};

interface MarketingService {
  id: string;
  title: string;
  description: string;
  icon: string;
  order_index: number;
}

interface MarketingStat {
  id: string;
  value: string;
  label: string;
  order_index: number;
}

interface MarketingBenefit {
  id: string;
  benefit: string;
  order_index: number;
}

const Marketing = () => {
  const [services, setServices] = useState<MarketingService[]>([]);
  const [stats, setStats] = useState<MarketingStat[]>([]);
  const [benefits, setBenefits] = useState<MarketingBenefit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [servicesRes, statsRes, benefitsRes] = await Promise.all([
        supabase.from('marketing_services').select('*').order('order_index'),
        supabase.from('marketing_stats').select('*').order('order_index'),
        supabase.from('marketing_benefits').select('*').order('order_index'),
      ]);

      if (servicesRes.data) setServices(servicesRes.data);
      if (statsRes.data) setStats(statsRes.data);
      if (benefitsRes.data) setBenefits(benefitsRes.data);
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
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-accent/10 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8">
              <Megaphone className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Marketing Division</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">4429</span>
              {" "}Marketing Agency
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Full-service digital marketing agency combining creative excellence with data-driven strategies 
              to amplify brands and drive measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Sparkles className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <ArrowRight className="w-5 h-5 mr-2" />
                View Case Studies
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
                Comprehensive marketing solutions tailored to elevate your brand and accelerate growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => {
                const Icon = iconMap[service.icon] || Target;
                return (
                  <Card 
                    key={service.id} 
                    className="bg-card border-border hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl"
                  >
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {benefits.length > 0 && (
        <section className="py-24 px-4 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
                  What Sets Us Apart
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
                    >
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{item.benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <Card className="bg-gradient-to-br from-primary/10 via-card to-accent/10 border-primary/20">
                <CardContent className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center">
                      <Users className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Let's Grow Together</h3>
                  </div>
                  <p className="text-muted-foreground mb-8 text-lg">
                    Schedule a free consultation to discover how 4429 Marketing can transform 
                    your brand's digital presence and drive sustainable growth.
                  </p>
                  <div className="flex flex-col gap-4">
                    <Button size="lg" className="w-full">
                      Get Free Consultation
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      View Case Studies
                    </Button>
                  </div>
                </CardContent>
              </Card>
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

export default Marketing;
