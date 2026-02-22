import HeroSection from "@/components/HeroSection";
import MarketingAgencySection from "@/components/MarketingAgencySection";
import DivisionsSection from "@/components/DivisionsSection";
import FashionSection from "@/components/FashionSection";
import TragicMulattoSection from "@/components/TragicMulattoSection";
import TechnologySection from "@/components/TechnologySection";
import OverviewSection from "@/components/OverviewSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
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
      <OverviewSection />
      <GallerySection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
