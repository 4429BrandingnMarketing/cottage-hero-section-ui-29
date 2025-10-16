import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Maximize2 } from 'lucide-react';

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

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            {companyInfo?.subheading || 'Gallery'}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {companyInfo?.heading || 'Creative Excellence Gallery'}
          </h2>
        </div>

        {/* Masonry Grid */}
        {galleryItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                style={{ minHeight: index % 5 === 0 ? '600px' : '300px' }}
              >
                {item.media_type === 'video' ? (
                  <video
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    src={item.media_url}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    src={item.media_url}
                    alt={item.title}
                  />
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {item.title && (
                      <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                    )}
                    {item.description && (
                      <p className="text-white/90 text-sm">{item.description}</p>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={companyInfo?.video_url || 'https://res.cloudinary.com/da7s1izqw/video/upload/v1751346494/Animate_this_image_202506291634_dcwn5_wgvkba.mp4'}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="bg-background/90 backdrop-blur-md rounded-3xl p-12 max-w-md text-center">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                  Gallery
                </p>
                <h3 className="text-3xl font-bold mb-4">
                  Add gallery items from admin
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySectionNew;
