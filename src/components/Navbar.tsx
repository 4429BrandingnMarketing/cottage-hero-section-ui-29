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
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? "bg-black backdrop-blur-md shadow-red-glow scale-100" 
        : "bg-black/50 backdrop-blur-sm scale-[0.99]"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-primary text-xl md:text-2xl font-bold tracking-wider">
              RED VISION
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#divisions" className="text-white hover:text-primary transition-all duration-300 relative group hover:-translate-y-0.5">
              Divisions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 ease-out group-hover:w-full shadow-[0_0_8px_rgba(239,68,68,0.5)] opacity-0 group-hover:opacity-100"></span>
            </a>
            <a href="/music" className="text-white hover:text-primary transition-all duration-300 relative group hover:-translate-y-0.5">
              Music
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 ease-out group-hover:w-full shadow-[0_0_8px_rgba(239,68,68,0.5)] opacity-0 group-hover:opacity-100"></span>
            </a>
            <a href="#fashion" className="text-white hover:text-primary transition-all duration-300 relative group hover:-translate-y-0.5">
              Fashion
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 ease-out group-hover:w-full shadow-[0_0_8px_rgba(239,68,68,0.5)] opacity-0 group-hover:opacity-100"></span>
            </a>
            <a href="#technology" className="text-white hover:text-accent transition-all duration-300 relative group hover:-translate-y-0.5">
              Technology
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 transition-all duration-300 ease-out group-hover:w-full shadow-[0_0_8px_rgba(168,85,247,0.5)] opacity-0 group-hover:opacity-100"></span>
            </a>
            <a href="#contact" className="text-white hover:text-primary transition-all duration-300 relative group hover:-translate-y-0.5">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 ease-out group-hover:w-full shadow-[0_0_8px_rgba(239,68,68,0.5)] opacity-0 group-hover:opacity-100"></span>
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
          <div className="md:hidden bg-secondary/95 backdrop-blur-md border-t border-white/10 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#divisions" className="block px-3 py-2 text-white hover:text-primary transition-all duration-300 hover:translate-x-2 hover:bg-white/5 rounded-lg">
                Divisions
              </a>
              <a href="/music" className="block px-3 py-2 text-white hover:text-primary transition-all duration-300 hover:translate-x-2 hover:bg-white/5 rounded-lg">
                Music
              </a>
              <a href="#fashion" className="block px-3 py-2 text-white hover:text-primary transition-all duration-300 hover:translate-x-2 hover:bg-white/5 rounded-lg">
                Fashion
              </a>
              <a href="#technology" className="block px-3 py-2 text-white hover:text-accent transition-all duration-300 hover:translate-x-2 hover:bg-white/5 rounded-lg">
                Technology
              </a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-primary transition-all duration-300 hover:translate-x-2 hover:bg-white/5 rounded-lg">
                Contact
              </a>
              <button className="w-full mt-4 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 hover:shadow-red-glow hover:-translate-y-0.5 transition-all duration-300">
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