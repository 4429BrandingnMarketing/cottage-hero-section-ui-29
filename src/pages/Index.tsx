import HeroSection from "@/components/HeroSection";
import DivisionsSection from "@/components/DivisionsSection";
import FashionSection from "@/components/FashionSection";
import OverviewSection from "@/components/OverviewSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DivisionsSection />
      <FashionSection />
      <OverviewSection />
      <GallerySection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
