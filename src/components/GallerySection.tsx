import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Target, Users, Lightbulb, Award, LucideIcon } from 'lucide-react';

interface GalleryItem {
  id: string;
  title?: string;
  description?: string;
  media_type: 'image' | 'video';
  media_url: string;
}

interface CompanyInfo {
  heading?: string;
  subheading?: string;
  video_url?: string;
}

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  { icon: Target, title: 'Our Mission', description: 'To redefine creative entertainment through bold innovation and AI-human collaboration.' },
  { icon: Users, title: 'Our Team', description: 'Industry veterans and emerging talent united by a passion for pushing creative boundaries.' },
  { icon: Lightbulb, title: 'Our Vision', description: 'Building the future of media where technology amplifies human creativity, not replaces it.' },
  { icon: Award, title: 'Our Legacy', description: 'Multi-platinum records, award-winning campaigns, and a track record of cultural impact.' },
];

const FALLBACK_VIDEO = 'https://res.cloudinary.com/da7s1izqw/video/upload/v1751346494/Animate_this_image_202506291634_dcwn5_wgvkba.mp4';

const GallerySection = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [itemsRes, infoRes] = await Promise.all([
      supabase.from('gallery_items').select('*').order('order_index'),
      supabase.from('company_info').select('*').eq('section', 'gallery').maybeSingle()
    ]);

    if (itemsRes.data) setGalleryItems(itemsRes.data as GalleryItem[]);
    if (infoRes.data) setCompanyInfo(infoRes.data as CompanyInfo);
  };

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-red-vision-gradient animate-gradient-shift opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">
            {companyInfo?.subheading || 'Who We Are'}
          </p>
          <h2 className="text-5xl md:text-8xl font-black mb-8 italic tracking-tighter uppercase">
            {companyInfo?.heading || 'About Our Company'}
          </h2>
          <p className="text-2xl text-white/40 max-w-4xl mx-auto font-light leading-relaxed italic">
            Red Vision Creative Studios is a multi-disciplinary entertainment powerhouse spanning music, technology, marketing, fashion, TV, and radio — driven by innovation and creative excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="glass-card p-10 text-center rounded-[2rem]"
            >
              <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-primary/10 flex items-center justify-center shadow-lg shadow-primary/5">
                <pillar.icon className="w-8 h-8 text-primary shadow-red-glow" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tighter">{pillar.title}</h3>
              <p className="text-white/60 font-light leading-relaxed group-hover:text-white transition-colors">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Media / Visual */}
        <div className="relative h-[400px] rounded-3xl overflow-hidden">
          {galleryItems.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-full">
              {galleryItems.slice(0, 4).map((item) => (
                <div key={item.id} className="relative overflow-hidden rounded-2xl group">
                  {item.media_type === 'video' ? (
                    <video
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={item.media_url}
                      autoPlay loop muted playsInline
                    />
                  ) : (
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={item.media_url}
                      alt={item.title || 'Company'}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4">
                      {item.title && <p className="text-white font-semibold text-sm">{item.title}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={companyInfo?.video_url || FALLBACK_VIDEO}
                autoPlay loop muted playsInline
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center text-white max-w-lg px-6">
                  <h3 className="text-3xl font-bold mb-3">Where Creativity Meets Innovation</h3>
                  <p className="text-white/80">From platinum records to cutting-edge tech — we build culture.</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
