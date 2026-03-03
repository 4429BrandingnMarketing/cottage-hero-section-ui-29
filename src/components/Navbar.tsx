import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    // If we're not on the homepage, navigate there first then scroll
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const linkClass = "text-white hover:text-primary transition-all duration-300 relative group hover:-translate-y-0.5";
  const underline = <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 ease-out group-hover:w-full shadow-[0_0_8px_rgba(239,68,68,0.5)] opacity-0 group-hover:opacity-100"></span>;
  const accentUnderline = <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 transition-all duration-300 ease-out group-hover:w-full shadow-[0_0_8px_rgba(168,85,247,0.5)] opacity-0 group-hover:opacity-100"></span>;

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
            <Link to="/" className="text-primary text-xl md:text-2xl font-bold tracking-wider">
              RED VISION
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('divisions')} className={linkClass}>
              Content{underline}
            </button>
            <Link to="/music" className={linkClass}>
              Music{underline}
            </Link>
            <button onClick={() => scrollTo('fashion')} className={linkClass}>
              Fashion{underline}
            </button>
            <Link to="/divisions/marketing" className={linkClass}>
              Marketing{underline}
            </Link>
            <button onClick={() => scrollTo('technology')} className={linkClass.replace('hover:text-primary', 'hover:text-accent')}>
              Technology{accentUnderline}
            </button>
            <button onClick={() => scrollTo('contact')} className={linkClass}>
              Contact{underline}
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo('contact')}
              className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 hover:shadow-red-glow hover:-translate-y-0.5 transition-all duration-300"
            >
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
              <button onClick={() => scrollTo('divisions')} className="block w-full text-left px-3 py-2 text-white hover:text-primary transition-all duration-300 hover:translate-x-2 hover:bg-white/5 rounded-lg">
                Content
              </button>
              <Link to="/music" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-white hover:text-primary transition-all duration-300 hover:translate-x-2 hover:bg-white/5 rounded-lg">
                Music
              </Link>
              <button onClick={() => scrollTo('fashion')} className="block w-full text-left px-3 py-2 text-white hover:text-primary transition-all duration-300 hover:translate-x-2 hover:bg-white/5 rounded-lg">
                Fashion
              </button>
              <Link to="/divisions/marketing" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-white hover:text-primary transition-all duration-300 hover:translate-x-2 hover:bg-white/5 rounded-lg">
                Marketing
              </Link>
              <button onClick={() => scrollTo('technology')} className="block w-full text-left px-3 py-2 text-white hover:text-accent transition-all duration-300 hover:translate-x-2 hover:bg-white/5 rounded-lg">
                Technology
              </button>
              <button onClick={() => scrollTo('contact')} className="block w-full text-left px-3 py-2 text-white hover:text-primary transition-all duration-300 hover:translate-x-2 hover:bg-white/5 rounded-lg">
                Contact
              </button>
              <button onClick={() => scrollTo('contact')} className="block w-full mt-4 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 hover:shadow-red-glow hover:-translate-y-0.5 transition-all duration-300 text-center">
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
