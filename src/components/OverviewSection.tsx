
import { Music, Mic, Brain, Users, Zap, Star } from 'lucide-react';

const OverviewSection = () => {
  return (
    <div className="w-full py-[200px] px-6 flex flex-col items-center">
      <div className="w-full max-w-[1600px] flex flex-col lg:flex-row items-center gap-6">
        {/* Left side - Video with quote */}
        <div className="flex-1 self-stretch p-6 rounded-[40px] flex flex-col justify-end items-start bg-black/5 min-h-[639px] relative overflow-hidden">
          <video 
            className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
            src="https://res.cloudinary.com/da7s1izqw/video/upload/v1751346384/It_shoudl_levitate_202506291707_k7ajz_wxrevo.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="w-full max-w-[400px] px-6 py-5 bg-glass-gradient backdrop-blur-sm rounded-3xl border border-white/20 shadow-lg flex flex-col gap-6 relative z-10">
            <div className="w-5 h-5 relative">
              <div className="w-[16.25px] h-[11.88px] absolute top-[4.38px] left-[1.88px] bg-white/65"></div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="max-w-[328px] text-white text-sm font-space-grotesk font-medium leading-[19.04px]">
                "AI amplifies human stories rather than replacing human creativity. We're creating the future where technology enhances authentic cultural narratives."
              </div>
              <div className="text-white/65 text-sm font-space-grotesk font-medium leading-[19.04px]">
                Jason Salvador, Founder & Visionary
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Overview content */}
        <div className="flex-1 flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="text-black/50 text-xs font-dm-mono font-medium uppercase tracking-wider-2 leading-[16.32px]">
              Overview
            </div>
            <div className="max-w-[640px] text-black text-3xl md:text-[48px] font-space-grotesk font-normal uppercase leading-tight md:leading-[51.84px]">
              Revolutionary AI-powered entertainment studio amplifying human creativity across music, fashion, and digital experiences
            </div>
          </div>

          {/* Features Grid */}
          <div className="bg-black/5 flex flex-col gap-px">
            {/* First row */}
            <div className="flex gap-px">
              <div className="flex-1 px-6 py-12 bg-white flex flex-col items-center gap-2.5">
                <Music className="w-6 h-6 text-primary" />
                <div className="text-center text-black text-sm font-space-grotesk font-medium leading-[19.04px]">
                  Grammy-Affiliated
                </div>
              </div>
              <div className="flex-1 px-6 py-12 bg-white flex flex-col items-center gap-2.5">
                <Brain className="w-6 h-6 text-primary" />
                <div className="text-center text-black text-sm font-space-grotesk font-medium leading-[19.04px]">
                  AI-Enhanced
                </div>
              </div>
              <div className="flex-1 px-6 py-12 bg-white flex flex-col items-center gap-2.5">
                <Users className="w-6 h-6 text-primary" />
                <div className="text-center text-black text-sm font-space-grotesk font-medium leading-[19.04px]">
                  Artist Partnerships
                </div>
              </div>
            </div>
            
            {/* Second row */}
            <div className="flex gap-px">
              <div className="flex-1 px-6 py-12 bg-white flex flex-col items-center gap-2.5">
                <Zap className="w-6 h-6 text-primary" />
                <div className="text-center text-black text-sm font-space-grotesk font-medium leading-[19.04px]">
                  Tech Innovation
                </div>
              </div>
              <div className="flex-1 px-6 py-12 bg-white flex flex-col items-center gap-2.5">
                <Mic className="w-6 h-6 text-primary" />
                <div className="text-center text-black text-sm font-space-grotesk font-medium leading-[19.04px]">
                  Content Creation
                </div>
              </div>
              <div className="flex-1 px-6 py-12 bg-white flex flex-col items-center gap-2.5">
                <Star className="w-6 h-6 text-primary" />
                <div className="text-center text-black text-sm font-space-grotesk font-medium leading-[19.04px]">
                  Cultural Impact
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
