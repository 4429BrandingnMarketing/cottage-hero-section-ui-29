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
        {/* Jason Salvador Hero Section */}
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            Industry Legend
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Meet <span className="text-primary">Jason Salvador</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            The mastermind behind Red Vision Creative Studios (formerly Red Vision Music). Get direct access to the producer behind hits for Kanye West, Jay-Z, Beyoncé, Bruno Mars, Justin Bieber, and countless other superstars.
          </p>
          
          {/* Credentials Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
              <span className="font-semibold text-primary">1500 or Nothin' Alumni</span>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
              <span className="font-semibold text-primary">Multi-Platinum Producer</span>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
              <span className="font-semibold text-primary">Red Vision Creative Studios</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Notable Collaborations</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
              {['Kanye West', 'Jay-Z', 'Beyoncé', 'Bruno Mars', 'Justin Bieber', 'Ne-Yo', 'Keyshia Cole', 'Lupe Fiasco', 'James Fauntleroy'].map((artist) => (
                <div key={artist} className="bg-card border border-border rounded-lg px-4 py-3 text-center hover:border-primary transition-colors">
                  <span className="font-medium text-sm">{artist}</span>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold mb-6">
              {companyInfo?.heading || 'About Red Vision Creative Studios'}
            </h3>
            
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

          {/* Right side - Image/Video */}
          <div className="lg:sticky lg:top-24">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-accent/20">
              {companyInfo?.video_url ? (
                <>
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={companyInfo.video_url}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/30 flex items-center justify-center">
                      <span className="text-6xl font-bold text-primary">JS</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Jason Salvador</p>
                    <p className="text-xs text-muted-foreground/60 mt-2">Multi-Platinum Producer</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionNew;
