
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const AboutSection = () => {
  const [openItem, setOpenItem] = useState(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  const accordionItems = [
    {
      title: "Grammy-Winning Production Legacy",
      content: "Our roster includes Diamond-selling Grammy-winner My Guy Mars, founding member of 1500 or Nothin, whose production credits span Jay-Z, Kanye West, Drake, and Nipsey Hussle. Collaborating with City High's Ryan Toby and prolific songwriter James Fauntleroy, we bring decades of chart-topping expertise to every project."
    },
    {
      title: "Revolutionary Artist Partnership Model",
      content: "We've redefined the record label paradigm by creating true partnerships instead of traditional contracts. Artists like Dat Boi H.O.P, King Fatz, and TRUZY X TRUZY maintain creative control while benefiting from our major-label quality production, AI-enhanced marketing, and industry-veteran guidance from executives like Shorty Capone."
    },
    {
      title: "Multi-Platform Entertainment Ecosystem",
      content: "Beyond music production, Red Vision TV creates premium visual content, Red Vision Radio hosts thought-provoking podcasts, and our AI division develops cutting-edge tools for content optimization. This integrated approach ensures artists reach audiences across every digital touchpoint with consistent, high-quality experiences."
    },
    {
      title: "AI-Enhanced Creative Processes",
      content: "Our proprietary AI tools amplify human creativity without replacing artistic vision. From intelligent A&R scouting and data-driven audience targeting to AI-assisted mixing and automated content distribution, we deliver major-label results while preserving the authentic cultural narratives that make independent artistry powerful."
    },
    {
      title: "Cultural Impact Through Innovation",
      content: "Jason Salvador's journey from Will Smith's Overbrook Entertainment executive to AI-entertainment pioneer reflects our commitment to bridging traditional industry excellence with technological innovation. We're not just creating music—we're shaping the future of how authentic cultural stories reach and impact global audiences."
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
