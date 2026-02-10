import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TVHero from '@/components/tv/TVHero';
import TVPortfolio from '@/components/tv/TVPortfolio';
import TVServices from '@/components/tv/TVServices';
import TVContact from '@/components/tv/TVContact';

const TV = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <TVHero />
      <TVPortfolio />
      <TVServices />
      <TVContact />
      <Footer />
    </div>
  );
};

export default TV;
