import HeroSection from "@/components/HeroSection";
import DivisionsSection from "@/components/DivisionsSection";
import FashionSection from "@/components/FashionSection";
import OverviewSectionNew from "@/components/OverviewSectionNew";
import GallerySectionNew from "@/components/GallerySectionNew";
import AboutSectionNew from "@/components/AboutSectionNew";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DivisionsSection />
      <FashionSection />
      <OverviewSectionNew />
      <GallerySectionNew />
      <AboutSectionNew />
      <Footer />
    </div>
  );
};

export default Index;
