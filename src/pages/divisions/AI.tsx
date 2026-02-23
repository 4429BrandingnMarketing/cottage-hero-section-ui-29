import { Cpu, Brain, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AI = () => {
  const services = [
    { icon: Brain, title: "AI Integration", description: "Seamless AI implementation for creative workflows" },
    { icon: Sparkles, title: "Content Optimization", description: "AI-powered content enhancement and strategy" },
    { icon: Zap, title: "Marketing Automation", description: "Intelligent campaign management and analytics" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Cpu className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI Technology</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                Red Vision <span className="text-primary">AI</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Technology services division offering AI integration consulting, marketing automation, 
                content optimization, and predictive analytics for creative businesses.
              </p>
              
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg transition-all">
                  Get Started
                </button>
                <button className="px-8 py-4 border-2 border-border rounded-full font-semibold hover:bg-secondary transition-all">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <Cpu className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-card rounded-2xl p-8 hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AI;
