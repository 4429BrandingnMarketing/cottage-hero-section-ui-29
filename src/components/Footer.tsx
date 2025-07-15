
import { Circle } from 'lucide-react';

const Footer = () => {
  return (
    <div className="w-full px-6 py-20 bg-black/[0.02] border-t border-black/[0.05] flex flex-col justify-start items-center">
      <div className="w-full max-w-[1600px] flex flex-col justify-start items-center gap-14">
        {/* Logo and Brand */}
        <div className="flex justify-start items-center gap-3">
          <div className="p-2.5 bg-black rounded-full flex justify-center items-center">
            <Circle className="w-3 h-3 text-white fill-white" />
          </div>
          <div className="text-black text-xs font-dm-mono font-medium uppercase tracking-wider-2 leading-[16.32px] text-center sm:text-left">
            Digital Property Platform
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
          <div className="p-1 flex justify-center items-center">
            <div className="text-black text-2xl sm:text-[40px] font-space-grotesk font-normal uppercase leading-[28.80px] sm:leading-[38.40px]">
              Overview
            </div>
          </div>
          <div className="p-1 flex justify-center items-center">
            <div className="text-black text-2xl sm:text-[40px] font-space-grotesk font-normal uppercase leading-[28.80px] sm:leading-[38.40px]">
              Gallery
            </div>
          </div>
          <div className="p-1 flex justify-center items-center">
            <div className="text-black text-2xl sm:text-[40px] font-space-grotesk font-normal uppercase leading-[28.80px] sm:leading-[38.40px]">
              About
            </div>
          </div>
          <div className="p-1 flex justify-center items-center">
            <div className="text-black text-2xl sm:text-[40px] font-space-grotesk font-normal uppercase leading-[28.80px] sm:leading-[38.40px]">
              Contact
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">
          <div className="text-black/50 text-xs font-dm-mono font-medium uppercase leading-[16.32px] tracking-wider-2">
            © 2025, Digital Platform
          </div>
          <div className="w-[3px] h-[3px] bg-black/50 rounded-full hidden sm:block"></div>
          <div className="py-0.5 flex justify-center items-center">
            <div className="text-black/50 text-xs font-dm-mono font-medium uppercase leading-[16.32px] tracking-wider-2">
              Licenses
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
