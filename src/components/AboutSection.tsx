import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

const AboutSection = () => {
  const [openItem, setOpenItem] = useState(0);
  const [accordionItems, setAccordionItems] = useState<any[]>([]);
  const [companyInfo, setCompanyInfo] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [itemsRes, infoRes] = await Promise.all([
      supabase.from('about_accordion').select('*').order('order_index'),
      supabase.from('company_info').select('*').eq('section', 'about').maybeSingle()
    ]);

    if (itemsRes.data) setAccordionItems(itemsRes.data);
    if (infoRes.data) setCompanyInfo(infoRes.data);
  };

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  return (
    <div className="w-full bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-[1640px] flex flex-col lg:flex-row">
        <div className="flex-1 pt-12 lg:pt-20 pb-2 px-4 lg:px-7 flex flex-col gap-8 lg:gap-16">
          <div className="flex flex-col gap-3">
            <div className="text-black/50 text-xs font-dm-mono font-medium uppercase tracking-wider-2 leading-[16.32px]">
              {companyInfo?.subheading || 'ABOUT US'}
            </div>
            <div className="w-full lg:w-[402px] text-black text-3xl lg:text-[48px] font-space-grotesk font-normal uppercase leading-[36px] lg:leading-[51.84px]">
              {companyInfo?.heading || 'Redefining Entertainment Through AI-Human Collaboration'}
            </div>
          </div>
          
          <div className="flex flex-col overflow-hidden">
            {accordionItems.map((item, index) => (
              <div key={index} className="border-t border-black/[0.08] py-4 lg:py-5 flex flex-col gap-3 lg:gap-4">
                <div 
                  className="flex justify-between items-end gap-4 lg:gap-6 cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex-1 text-black text-sm font-space-grotesk font-medium leading-[19.04px]">
                    {item.title}
                  </div>
                  <div className="p-1.5 bg-white rounded-full flex items-center justify-center">
                    <ChevronDown 
                      className={`w-2.5 h-2.5 text-black transition-transform ${
                        openItem === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                </div>
                {openItem === index && (
                  <div className="pr-6 lg:pr-10">
                    <div className="flex-1 max-w-[560px] text-black/75 text-sm font-sans leading-[19.04px]">
                      {item.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <video
          className="flex-1 h-64 lg:h-auto object-cover"
          src={companyInfo?.video_url || 'https://res.cloudinary.com/da7s1izqw/video/upload/v1751346710/Aniamte_this_image_202506291716_wj8my_lpgovv.mp4'}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default AboutSection;
