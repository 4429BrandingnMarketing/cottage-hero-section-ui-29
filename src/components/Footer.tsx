import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white px-6 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-primary font-bold text-2xl tracking-tight">RED VISION</Link>
            <p className="text-white/50 text-sm mt-3 leading-relaxed">
              AI-powered entertainment company redefining music, fashion, and culture.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-5">
              <a href="https://instagram.com/redvisioncreativestudio" target="_blank" rel="noopener noreferrer"
                className="text-white/50 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="https://twitter.com/redvisionmusic" target="_blank" rel="noopener noreferrer"
                className="text-white/50 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@redvisioncreativestudio" target="_blank" rel="noopener noreferrer"
                className="text-white/50 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://tiktok.com/@redvisioncreativestudio" target="_blank" rel="noopener noreferrer"
                className="text-white/50 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/50 hover:text-primary text-sm transition-colors">Home</Link></li>
              <li><a href="/#divisions" className="text-white/50 hover:text-primary text-sm transition-colors">Divisions</a></li>
              <li><a href="/#about" className="text-white/50 hover:text-primary text-sm transition-colors">About Jason</a></li>
              <li><a href="/#contact" className="text-white/50 hover:text-primary text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Divisions</h4>
            <ul className="space-y-2">
              <li><Link to="/music" className="text-white/50 hover:text-primary text-sm transition-colors">Red Vision Music</Link></li>
              <li><Link to="/divisions/fashion" className="text-white/50 hover:text-primary text-sm transition-colors">GiFTD N' PrVLGD</Link></li>
              <li><Link to="/divisions/tv" className="text-white/50 hover:text-primary text-sm transition-colors">Red Vision TV</Link></li>
              <li><Link to="/divisions/radio" className="text-white/50 hover:text-primary text-sm transition-colors">Red Vision Radio</Link></li>
              <li><Link to="/divisions/ai" className="text-white/50 hover:text-primary text-sm transition-colors">Red Vision AI</Link></li>
              <li><Link to="/divisions/blog" className="text-white/50 hover:text-primary text-sm transition-colors">A Tragic Mulatto</Link></li>
              <li><Link to="/divisions/marketing" className="text-white/50 hover:text-primary text-sm transition-colors">4429 Marketing</Link></li>
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Our Properties</h4>
            <ul className="space-y-2">
              <li><a href="https://redvisionmusic-official.netlify.app" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary text-sm transition-colors">Red Vision Music Label</a></li>
              <li><a href="https://rv-ai-agency.netlify.app" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary text-sm transition-colors">Red Vision AI Agency</a></li>
              <li><a href="https://pivot-tour-app.netlify.app" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary text-sm transition-colors">PIVOT Tour System</a></li>
              <li><a href="https://mindfulvision-wellness.netlify.app" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary text-sm transition-colors">Mindful Vision Wellness</a></li>
              <li><a href="https://cosmicvision-astrology.netlify.app" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary text-sm transition-colors">Cosmic Vision Astrology</a></li>
              <li><a href="https://wd6ype73psnk2.mocha.app" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary text-sm transition-colors">Jason Salvador Consulting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Get In Touch</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:redvision.ai@gmail.com" className="text-white/50 hover:text-primary text-sm transition-colors">
                  redvision.ai@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/18186442687" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary text-sm transition-colors">
                  WhatsApp: (818) 644-2687
                </a>
              </li>
              <li className="pt-2">
                <a href="/#contact"
                  className="inline-block bg-primary text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-primary/90 transition-colors">
                  Work With Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {currentYear} Red Vision Creative Studio. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Founded in memory of Rashad "RED" Liston • Built on the RED legacy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
