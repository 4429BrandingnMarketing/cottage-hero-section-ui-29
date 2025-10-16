import { Music, Mic, Brain, Users, Zap, Star, Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

const iconMap: Record<string, any> = {
  Music,
  Mic,
  Brain,
  Users,
  Zap,
  Star
};

const OverviewSectionNew = () => {
  const [founderProfile, setFounderProfile] = useState<any>(null);
  const [features, setFeatures] = useState<any[]>([]);
  const [companyInfo, setCompanyInfo] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [profileRes, featuresRes, infoRes] = await Promise.all([
      supabase.from('founder_profile').select('*').maybeSingle(),
      supabase.from('company_features').select('*').order('order_index'),
      supabase.from('company_info').select('*').eq('section', 'overview').maybeSingle()
    ]);

    if (profileRes.data) setFounderProfile(profileRes.data);
    if (featuresRes.data) setFeatures(featuresRes.data);
    if (infoRes.data) setCompanyInfo(infoRes.data);
  };

  if (!founderProfile || !companyInfo) return null;

  return (
    <section className="py-24 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            {companyInfo.subheading}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {companyInfo.heading}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Video with quote */}
          <div className="relative rounded-3xl overflow-hidden h-[500px] group">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={founderProfile.video_url || companyInfo.video_url}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            {/* Quote Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-background/90 backdrop-blur-md rounded-2xl p-6 transform transition-transform group-hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Play className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium mb-2">"{founderProfile.quote}"</p>
                  <p className="text-sm text-muted-foreground">
                    {founderProfile.name}, {founderProfile.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => {
              const Icon = iconMap[feature.icon] || Star;
              return (
                <div
                  key={feature.id}
                  className="bg-card rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSectionNew;
