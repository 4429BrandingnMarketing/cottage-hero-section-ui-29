
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const AboutSection = () => {
  const [openItem, setOpenItem] = useState(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  const accordionItems = [
    {
      title: "Jason Salvador: The Visionary Founder",
      content: "From music producer to AI-entertainment pioneer, Jason's journey began at Will Smith's Overbrook Entertainment, rising from intern to executive at age 18. His Grammy-nominated work with Lupe Fiasco and collaborations with 1500 or Nothin shaped his industry credentials before the pandemic catalyzed his revolutionary vision."
    },
    {
      title: "Grammy-Affiliated Music Excellence",
      content: "Red Vision Music features Diamond-selling Grammy-winner My Guy Mars (1500 or Nothin founding member), City High's Ryan Toby, prolific songwriter James Fauntleroy, and emerging stars like Dat Boi H.O.P. We create true artist partnerships, not traditional contracts."
    },
    {
      title: "AI Amplifies Human Stories",
      content: "Our core philosophy centers on AI as an amplification tool that enhances artistic expression rather than replacing human creativity. We maintain authentic cultural narratives while leveraging technology for enhanced efficiency and reach."
    },
    {
      title: "Six Integrated Creative Divisions",
      content: "From Red Vision Music's Grammy-affiliated record label to GiFTD N' PrVLGD's tech-integrated fashion, each division leverages AI to enhance human creativity while preserving cultural authenticity and independent artistry."
    },
    {
      title: "Pioneering Partnership-Centric Model",
      content: "Unlike traditional labels that sign artists, we make them true partners with shared creative control and financial success. Our AI-enhanced approach delivers major-label quality while preserving independent vision and cultural authenticity."
    }
  ];

  return (
    <div className="w-full bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-[1640px] flex flex-col lg:flex-row">
        <div className="flex-1 pt-12 lg:pt-20 pb-2 px-4 lg:px-7 flex flex-col gap-8 lg:gap-16">
          <div className="flex flex-col gap-3">
            <div className="text-black/50 text-xs font-dm-mono font-medium uppercase tracking-wider-2 leading-[16.32px]">
              ABOUT US
            </div>
            <div className="w-full lg:w-[402px] text-black text-3xl lg:text-[48px] font-space-grotesk font-normal uppercase leading-[36px] lg:leading-[51.84px]">
              Redefining Entertainment Through AI-Human Collaboration
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
          src="https://res.cloudinary.com/da7s1izqw/video/upload/v1751346710/Aniamte_this_image_202506291716_wj8my_lpgovv.mp4"
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
