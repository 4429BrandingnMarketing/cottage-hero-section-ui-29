import { useEffect, useState } from 'react';
import { Cpu, Brain, Zap, Code, Database, Shield, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

const iconMap: {
  [key: string]: any;
} = {
  Brain,
  Code,
  Database,
  Shield,
  Cpu,
  Zap,
  Sparkles
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
const TechnologySection = () => {
  const [capabilities, setCapabilities] = useState<TechnologyCapability[]>([]);
  const [stats, setStats] = useState<TechnologyStat[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const [capabilitiesRes, statsRes] = await Promise.all([supabase.from('technology_capabilities').select('*').order('order_index'), supabase.from('technology_stats').select('*').order('order_index')]);
    if (capabilitiesRes.data) setCapabilities(capabilitiesRes.data);
    if (statsRes.data) setStats(statsRes.data);
    setLoading(false);
  };
  if (loading) {
    return <section id="technology" className="py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">Loading...</div>
        </div>
      </section>;
  }
  return <section id="technology" className="py-24 px-4 bg-secondary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `
               linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
             `,
      backgroundSize: '40px 40px'
    }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6 backdrop-blur-sm">
            <Cpu className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Technology Division</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powering the Future of
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> Entertainment</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proprietary technology stack combines artificial intelligence, cloud computing, 
            and creative tools to deliver next-generation entertainment experiences.
          </p>
        </div>

        {/* Stats Row */}
        {stats.length > 0 && <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map(stat => <div key={stat.id} className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>)}
          </div>}

        {/* Technology Cards */}
        {capabilities.length > 0 && <div className="grid md:grid-cols-2 gap-8 mb-16">
            {capabilities.map(tech => {
          const Icon = iconMap[tech.icon] || Cpu;
          const CardWrapper = tech.link ? 'a' : 'div';
          const cardProps = tech.link ? { href: tech.link, target: '_blank', rel: 'noopener noreferrer' } : {};
          
          return <Card key={tech.id} className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 group cursor-pointer">
                  <CardWrapper {...cardProps} className="block">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                          <Icon className="w-7 h-7 text-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{tech.title}</h3>
                            {tech.link && <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />}
                          </div>
                          <p className="mb-4 text-muted">{tech.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {tech.features.map((feature, idx) => <span key={idx} className="px-3 py-1 text-xs rounded-full text-muted bg-primary">
                                {feature}
                              </span>)}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </CardWrapper>
                </Card>;
        })}
          </div>}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 border border-white/10 rounded-3xl p-12">
          <Sparkles className="w-12 h-12 mx-auto mb-6 text-primary bg-secondary-foreground" />
          <h3 className="text-3xl font-bold mb-4 text-destructive-foreground">Ready to Build Something Amazing?</h3>
          <p className="mb-8 max-w-2xl mx-auto text-primary">
            Partner with Red Vision to leverage our technology stack for your next project. 
            From concept to deployment, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 text-muted">
              <Zap className="w-4 h-4 mr-2" />
              Start a Project
            </Button>
            <Button variant="outline" size="lg" className="px-8 border-accent hover:bg-accent text-secondary">
              <ArrowRight className="w-4 h-4 mr-2" />
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default TechnologySection;