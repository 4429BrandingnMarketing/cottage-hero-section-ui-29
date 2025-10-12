import { Music, Mic, Brain, Users, Zap, Star } from 'lucide-react';
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

const OverviewSection = () => {
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
    <div className="w-full py-12 md:py-24 lg:py-[200px] px-6 flex flex-col items-center">
      <div className="w-full max-w-[1600px] flex flex-col lg:flex-row items-center gap-6">
        {/* Left side - Video with quote */}
        <div className="flex-1 self-stretch p-6 rounded-[40px] flex flex-col justify-end items-start bg-black/5 min-h-[400px] md:min-h-[500px] lg:min-h-[639px] relative overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
            src={founderProfile.video_url || companyInfo.video_url}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="w-full max-w-[400px] px-6 py-5 bg-glass-gradient backdrop-blur-sm rounded-3xl border border-white/20 shadow-lg flex flex-col gap-6 relative z-10">
            <div className="w-5 h-5 relative">
              <div className="w-[16.25px] h-[11.88px] absolute top-[4.38px] left-[1.88px] bg-white/65"></div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="max-w-[328px] text-white text-sm font-space-grotesk font-medium leading-[19.04px]">
                "{founderProfile.quote}"
              </div>
              <div className="text-white/65 text-sm font-space-grotesk font-medium leading-[19.04px]">
                {founderProfile.name}, {founderProfile.title}
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Overview content */}
        <div className="flex-1 flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="text-black/50 text-xs font-dm-mono font-medium uppercase tracking-wider-2 leading-[16.32px]">
              {companyInfo.subheading}
            </div>
            <div className="max-w-[640px] text-black text-3xl md:text-[48px] font-space-grotesk font-normal uppercase leading-tight md:leading-[51.84px]">
              {companyInfo.heading}
            </div>
          </div>

          {/* Features Grid */}
          <div className="bg-black/5 flex flex-col gap-px">
            {/* First row */}
            <div className="flex gap-px">
              {features.slice(0, 3).map((feature) => {
                const Icon = iconMap[feature.icon] || Star;
                return (
                  <div key={feature.id} className="flex-1 px-6 py-12 bg-white flex flex-col items-center gap-2.5">
                    <Icon className="w-6 h-6 text-primary" />
                    <div className="text-center text-black text-sm font-space-grotesk font-medium leading-[19.04px]">
                      {feature.title}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Second row */}
            <div className="flex gap-px">
              {features.slice(3, 6).map((feature) => {
                const Icon = iconMap[feature.icon] || Star;
                return (
                  <div key={feature.id} className="flex-1 px-6 py-12 bg-white flex flex-col items-center gap-2.5">
                    <Icon className="w-6 h-6 text-primary" />
                    <div className="text-center text-black text-sm font-space-grotesk font-medium leading-[19.04px]">
                      {feature.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
