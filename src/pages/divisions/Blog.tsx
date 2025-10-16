import { FileText, PenTool, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blog = () => {
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
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Blog & Media</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                A Tragic <span className="text-primary">Mulatto</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Blog and media platform providing cultural commentary, artist spotlights, and storytelling 
                that bridges traditional media with AI-enhanced content creation.
              </p>
              
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Read Articles
                </button>
                <button className="px-8 py-4 border-2 border-border rounded-full font-semibold hover:bg-secondary transition-all">
                  Subscribe
                </button>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <FileText className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
