import { useEffect, useState } from 'react';
import { Megaphone, TrendingUp, Target, Users, BarChart3, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

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

const MarketingAgencySection = () => {
  const [services, setServices] = useState<MarketingService[]>([]);
  const [stats, setStats] = useState<MarketingStat[]>([]);
  const [benefits, setBenefits] = useState<MarketingBenefit[]>([]);

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
    };

    fetchData();
  }, []);

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Megaphone className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Marketing Division</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">4429</span>
            {" "}Marketing Agency
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Full-service digital marketing agency combining creative excellence with data-driven strategies 
            to amplify brands and drive measurable results.
          </p>
        </div>

        {/* Stats Row */}
        {stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center p-6 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Services Grid */}
        {services.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Target;
              return (
                <Card key={service.id} className="bg-card border-border hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Features + CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits List */}
          {benefits.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">What Sets Us Apart</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item.benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Card */}
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Let's Grow Together</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Schedule a free consultation to discover how 4429 Marketing can transform 
                your brand's digital presence and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1">
                  Get Free Consultation
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  View Case Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketingAgencySection;