import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

const GallerySection = () => {
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
  return <div className="w-full py-[100px] lg:py-[200px] px-4 lg:px-6 bg-black/[0.02] border-t border-b border-black/[0.05] flex justify-center items-start">
      <div className="flex-1 max-w-[1600px] flex flex-col justify-start items-center gap-12 lg:gap-20">
        {/* Header */}
        <div className="w-full flex flex-col justify-start items-center gap-4">
          <div className="w-full text-center text-black/50 text-xs font-dm-mono font-medium uppercase tracking-wider-2 leading-[16.32px]">
            {companyInfo?.subheading || 'Gallery'}
          </div>
          <div className="w-full max-w-[480px] text-center text-black text-2xl lg:text-3xl xl:text-[48px] font-space-grotesk font-normal uppercase leading-tight lg:leading-tight xl:leading-[51.84px]">
            {companyInfo?.heading || 'Creative Excellence Gallery'}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-[20px] lg:rounded-[40px] overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
              style={{ minHeight: '300px' }}
            >
              {item.media_type === 'video' ? (
                <video
                  className="w-full h-full object-cover"
                  src={item.media_url}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  className="w-full h-full object-cover"
                  src={item.media_url}
                  alt={item.title}
                />
              )}
              {item.title && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-space-grotesk font-medium">{item.title}</h3>
                  {item.description && (
                    <p className="text-white/75 text-sm mt-1">{item.description}</p>
                  )}
                </div>
              )}
            </div>
          ))}

          {galleryItems.length === 0 && (
            <div className="col-span-full w-full h-[500px] lg:h-[800px] p-4 lg:p-6 rounded-[20px] lg:rounded-[40px] flex flex-col justify-center items-center relative overflow-hidden">
              <video
                className="absolute inset-0 w-full h-full object-cover rounded-[20px] lg:rounded-[40px]"
                src={companyInfo?.video_url || 'https://res.cloudinary.com/da7s1izqw/video/upload/v1751346494/Animate_this_image_202506291634_dcwn5_wgvkba.mp4'}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="w-full max-w-[400px] lg:max-w-[480px] px-4 lg:px-6 py-6 lg:py-10 bg-glass-gradient backdrop-blur-[10px] rounded-2xl lg:rounded-3xl border border-white/20 shadow-[0px_24px_32px_rgba(0,0,0,0.05)] flex flex-col justify-start items-center gap-4 lg:gap-6 relative z-10">
                <div className="w-full flex flex-col justify-start items-center gap-3 lg:gap-4">
                  <div className="w-full text-center text-white/65 text-xs font-dm-mono font-medium uppercase tracking-wider-2 leading-[16.32px]">
                    Gallery
                  </div>
                  <div className="w-full max-w-[400px] lg:max-w-[480px] text-center text-white text-2xl lg:text-3xl xl:text-[48px] font-space-grotesk font-normal uppercase leading-tight lg:leading-tight xl:leading-[51.84px]">
                    Add gallery items from admin
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>;
};
export default GallerySection;
