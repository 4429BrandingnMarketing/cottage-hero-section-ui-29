import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

const AboutSectionNew = () => {
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
    <section className="py-24 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              {companyInfo?.subheading || 'ABOUT US'}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {companyInfo?.heading || 'Redefining Entertainment Through AI-Human Collaboration'}
            </h2>
            
            {/* Accordion */}
            <div className="space-y-4">
              {accordionItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all"
                >
                  <button
                    className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-secondary/50 transition-colors"
                    onClick={() => toggleItem(index)}
                  >
                    <span className="font-semibold text-foreground flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 transition-colors ${openItem === index ? 'text-primary' : 'text-muted-foreground'}`} />
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        openItem === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openItem === index && (
                    <div className="px-6 pb-5 text-muted-foreground leading-relaxed animate-fade-in">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Video */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={companyInfo?.video_url || 'https://res.cloudinary.com/da7s1izqw/video/upload/v1751346710/Aniamte_this_image_202506291716_wj8my_lpgovv.mp4'}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionNew;
