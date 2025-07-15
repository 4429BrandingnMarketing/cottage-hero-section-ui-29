import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <OverviewSection />
      <GallerySection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
