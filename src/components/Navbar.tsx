import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-secondary/90 backdrop-blur-md shadow-red-glow" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/src/assets/red-vision-logo.png" 
              alt="Red Vision Creative Studio" 
              className="h-12 w-auto filter drop-shadow-gold-glow"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#divisions" className="text-white hover:text-primary transition-all duration-300 relative group">
              Divisions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#fashion" className="text-white hover:text-primary transition-all duration-300 relative group">
              Fashion
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#technology" className="text-white hover:text-accent transition-all duration-300 relative group">
              Technology
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-white hover:text-gold transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 hover:shadow-red-glow hover:-translate-y-0.5 transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-secondary/95 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#divisions" className="block px-3 py-2 text-white hover:text-primary transition-colors">
                Divisions
              </a>
              <a href="#fashion" className="block px-3 py-2 text-white hover:text-primary transition-colors">
                Fashion
              </a>
              <a href="#technology" className="block px-3 py-2 text-white hover:text-accent transition-colors">
                Technology
              </a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-gold transition-colors">
                Contact
              </a>
              <button className="w-full mt-4 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;