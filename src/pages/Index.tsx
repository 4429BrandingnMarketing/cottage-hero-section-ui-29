import HeroSection from "@/components/HeroSection";
import MarketingAgencySection from "@/components/MarketingAgencySection";
import DivisionsSection from "@/components/DivisionsSection";
import FashionSection from "@/components/FashionSection";
import TragicMulattoSection from "@/components/TragicMulattoSection";
import TechnologySection from "@/components/TechnologySection";
import OverviewSectionNew from "@/components/OverviewSectionNew";
import GallerySectionNew from "@/components/GallerySectionNew";
import AboutSectionNew from "@/components/AboutSectionNew";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MarketingAgencySection />
      <DivisionsSection />
      <FashionSection />
      <TragicMulattoSection />
      <TechnologySection />
      <OverviewSectionNew />
      <GallerySectionNew />
      <AboutSectionNew />
      <Footer />
    </div>
  );
};

export default Index;
