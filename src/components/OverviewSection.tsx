import { Music, Mic, Brain, Users, Zap, Star, Play, LucideIcon, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface FounderProfile {
  name: string;
  title: string;
  quote?: string;
  video_url?: string;
}

interface Feature {
  id: string;
  title: string;
  icon: string;
}

interface CompanyInfo {
  heading: string;
  subheading: string;
  video_url?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Music,
  Mic,
  Brain,
  Users,
  Zap,
  Star,
};

const OverviewSection = () => {
  const [founderProfile, setFounderProfile] = useState<FounderProfile | null>(null);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [profileRes, featuresRes, infoRes] = await Promise.all([
      supabase.from('founder_profile').select('*').maybeSingle(),
      supabase.from('company_features').select('*').order('order_index'),
      supabase.from('company_info').select('*').eq('section', 'overview').maybeSingle()
    ]);

    if (profileRes.data) setFounderProfile(profileRes.data as FounderProfile);
    if (featuresRes.data) setFeatures(featuresRes.data as Feature[]);
    if (infoRes.data) setCompanyInfo(infoRes.data as CompanyInfo);
  };

  if (!founderProfile || !companyInfo) return null;

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background Dynamics */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-red-vision-gradient animate-gradient-shift opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">
            {companyInfo.subheading}
          </p>
          <h2 className="text-5xl md:text-8xl font-black mb-8 italic tracking-tighter uppercase">
            {companyInfo.heading}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Video with Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden h-[600px] border border-white/10 group shadow-2xl"
          >
            <video
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              src={founderProfile.video_url || companyInfo.video_url}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

            {/* Quote Reveal Card */}
            <div className="absolute bottom-10 left-10 right-10 glass-dark rounded-3xl p-10 transform transition-all duration-700 group-hover:-translate-y-2">
              <div className="flex flex-col gap-6">
                <Quote className="w-12 h-12 text-primary opacity-50" />
                <div>
                  <p className="text-white text-2xl font-light italic leading-relaxed mb-6">"{founderProfile.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-12 bg-primary"></div>
                    <div>
                      <p className="text-white font-black uppercase tracking-widest text-sm">
                        {founderProfile.name}
                      </p>
                      <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                        {founderProfile.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* High-Execution Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon] ?? Star;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-[2rem] p-10 group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/5">
                    <Icon className="w-8 h-8 text-primary shadow-red-glow" />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase italic tracking-tighter group-hover:text-primary transition-colors">{feature.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
