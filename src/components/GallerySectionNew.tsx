import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const GallerySectionNew = () => {
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [companyInfo, setCompanyInfo] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [itemsRes, infoRes] = await Promise.all([
      supabase.from('gallery_items').select('*').order('order_index'),
      supabase.from('company_info').select('*').eq('section', 'gallery').maybeSingle()
    ]);

    if (itemsRes.data) setGalleryItems(itemsRes.data);
    if (infoRes.data) setCompanyInfo(infoRes.data);
  };

  const pillars = [
    { icon: Target, title: 'Our Mission', description: 'To redefine creative entertainment through bold innovation and AI-human collaboration.' },
    { icon: Users, title: 'Our Team', description: 'Industry veterans and emerging talent united by a passion for pushing creative boundaries.' },
    { icon: Lightbulb, title: 'Our Vision', description: 'Building the future of media where technology amplifies human creativity, not replaces it.' },
    { icon: Award, title: 'Our Legacy', description: 'Multi-platinum records, award-winning campaigns, and a track record of cultural impact.' },
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            {companyInfo?.subheading || 'Who We Are'}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {companyInfo?.heading || 'About Our Company'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Red Vision Creative Studios is a multi-disciplinary entertainment powerhouse spanning music, technology, marketing, fashion, TV, and radio — driven by innovation and creative excellence.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
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
                src={companyInfo?.video_url || 'https://res.cloudinary.com/da7s1izqw/video/upload/v1751346494/Animate_this_image_202506291634_dcwn5_wgvkba.mp4'}
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

export default GallerySectionNew;
