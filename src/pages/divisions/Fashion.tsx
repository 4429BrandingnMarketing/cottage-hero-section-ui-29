import { Shirt, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Fashion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                <Shirt className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Fashion & Lifestyle</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                GiFTD N' <span className="text-accent">PrVLGD</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Fashion and lifestyle brand creating tech-integrated apparel and limited edition collections 
                that reflect music culture, technological innovation, and social consciousness.
              </p>
              
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Shop Collection
                </button>
                <button className="px-8 py-4 border-2 border-border rounded-full font-semibold hover:bg-secondary transition-all">
                  View Lookbook
                </button>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <Shirt className="w-32 h-32 text-accent/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fashion;
