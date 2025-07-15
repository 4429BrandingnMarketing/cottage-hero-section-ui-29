
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const AboutSection = () => {
  const [openItem, setOpenItem] = useState(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  const accordionItems = [
    {
      title: "Built with Blockchain and Innovation",
      content: "We didn't start this platform just to digitize – we started it to help people truly own and control their digital assets. Secure ownership creates peace of mind, and we're here for that."
    },
    {
      title: "We Put Security First, Always",
      content: "Every transaction on our platform is secured by smart contracts and blockchain technology, ensuring your digital property ownership is transparent and immutable."
    },
    {
      title: "Building a Future That's Decentralized",
      content: "Our vision extends beyond traditional ownership models, creating a global ecosystem where digital property rights are accessible to everyone, everywhere."
    },
    {
      title: "We Take Pride in Every Transaction",
      content: "From smart contract deployment to ownership verification, every detail matters in creating the most reliable digital property platform available today."
    },
    {
      title: "Rooted in the Digital Community",
      content: "We're building more than a platform – we're fostering a community of forward-thinking individuals who believe in the power of decentralized ownership."
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
              Who We Are. Why We Innovate
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
