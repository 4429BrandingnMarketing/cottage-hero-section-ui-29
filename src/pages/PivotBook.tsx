import { useState } from 'react';
import { BookOpen, CheckCircle, ArrowRight, Shield, Star, Download, Clock, Users, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PivotBook = () => {
  const [showCheckout, setShowCheckout] = useState(false);

  const chapters = [
    { num: 1, title: "The Foundation — Why Tour Management Matters", pages: "1-45" },
    { num: 2, title: "Advancing Shows — The Art of the Deal", pages: "46-98" },
    { num: 3, title: "Budgeting — Making the Numbers Work", pages: "99-156" },
    { num: 4, title: "Routing — Building a Tour That Makes Sense", pages: "157-210" },
    { num: 5, title: "Contracts & Riders — Protecting Everyone", pages: "211-278" },
    { num: 6, title: "Production — From Soundcheck to Showtime", pages: "279-342" },
    { num: 7, title: "Merch — The Revenue Engine", pages: "343-398" },
    { num: 8, title: "Team Building — Hiring & Managing Road Crew", pages: "399-456" },
    { num: 9, title: "Crisis Management — When Things Go Wrong", pages: "457-512" },
    { num: 10, title: "Scaling — From Club Tours to Arenas", pages: "513-568" },
    { num: 11, title: "The Business — Labels, Managers, Agents", pages: "569-624" },
    { num: 12, title: "Legacy — Building a Career That Lasts", pages: "625-680" },
  ];

  const bonuses = [
    "Complete Tour Budget Template (Excel + Google Sheets)",
    "Advance Sheet & Contract Checklist Pack",
    "Merch Pricing Calculator & Inventory Tracker",
    "Sample Rider Templates (Artist, Production, Hospitality)",
    "Tour Accounting Spreadsheet with formulas",
    "Venue Contact Database Template",
    "Emergency Protocol Checklist",
    "Post-Tour Settlement Worksheet",
  ];

  const testimonials = [
    { name: "My Guy Mars", role: "Diamond-Selling Producer", quote: "Jason's PIVOT system is the only reason our tours actually make money. This book should be required reading for anyone touching a tour budget." },
    { name: "Ryan Toby", role: "City High / Solo Artist", quote: "I've seen Jason advance shows that other managers said were impossible. This book breaks down exactly how he does it." },
    { name: "Independent Tour Manager", role: "Verified Buyer", quote: "The budget template alone paid for this book 50x over on my last run. No fluff, just systems that work." },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-amber-600/5" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-white/40 hover:text-white mb-10 transition-colors text-sm">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to home
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-500/20 rounded-full mb-6">
                <BookOpen className="w-4 h-4 text-red-400" />
                <span className="text-sm font-medium text-red-400">85,000 Words · 680 Pages · 12 Chapters</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6">
                PIVOT: The <span className="text-red-500">Tour Management</span> Bible
              </h1>

              <p className="text-xl text-white/70 mb-8 leading-relaxed max-w-xl">
                The definitive guide to running profitable tours. 25 years of music industry experience compressed into one manual. No theory. Just systems that work.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => setShowCheckout(true)}
                  className="group px-8 py-4 bg-red-600 text-white rounded-full font-black text-lg hover:bg-red-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(229,25,42,0.4)] transition-all flex items-center justify-center gap-3"
                >
                  <BookOpen className="w-5 h-5" /> Get the Book — $27
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/divisions/university"
                  className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold hover:border-white/40 transition-all flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-5 h-5" /> Full University Access
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 text-white/40 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Instant PDF Download</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-400" />
                  <span>Lifetime Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-green-400" />
                  <span>All Bonus Templates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-green-400" />
                  <span>Community Access</span>
                </div>
              </div>
            </div>

            {/* Book Mockup */}
            <div className="relative">
              <div className="relative aspect-[3/4] max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-900 to-amber-900 rounded-2xl transform rotate-2 shadow-[0_60px_120px_rgba(229,25,42,0.3)]" />
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-900 to-amber-900 rounded-2xl transform -rotate-2 shadow-[0_40px_80px_rgba(229,25,42,0.2)]" />
                <div className="relative bg-gradient-to-br from-red-600 via-red-900 to-amber-900 rounded-2xl p-8 shadow-[0_20px_60px_rgba(229,25,42,0.4)] border border-red-500/30">
                  <div className="text-center">
                    <div className="text-xs text-amber-300 tracking-[4px] uppercase mb-2 font-mono">Red Vision University</div>
                    <h2 className="text-3xl md:text-4xl font-black mb-2" style={{fontFamily: 'Georgia, serif'}}>
                      PIVOT
                    </h2>
                    <p className="text-amber-200 text-lg font-light mb-6" style={{fontFamily: 'Georgia, serif'}}>
                      The Tour Management Bible
                    </p>
                    <div className="w-20 h-px bg-amber-400 mx-auto mb-6" />
                    <p className="text-white/60 text-sm">Jason Salvador · #4429</p>
                    <p className="text-white/40 text-xs mt-2">85,000 Words · 680 Pages</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-red-600/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-amber-600/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="py-24 px-4 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-400 text-xs tracking-[4px] uppercase font-mono block mb-4">What's Inside</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6">12 Chapters. Zero Fluff.</h2>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">Every chapter is a complete system. Read cover-to-cover or jump to what you need right now.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter) => (
              <div
                key={chapter.num}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600/20 border border-red-500/30 rounded-xl flex items-center justify-center flex-shrink-0 text-red-400 font-black text-xl">
                    {chapter.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-red-400 transition-colors">{chapter.title}</h3>
                    <p className="text-white/40 text-sm">{chapter.pages}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUS TEMPLATES */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs tracking-[4px] uppercase font-mono block mb-4">Included Free</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6">8 Bonus Templates <span className="text-amber-400">($497 Value)</span></h2>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">Every tool I use on actual tours. Ready to plug in your numbers and go.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {bonuses.map((bonus, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-amber-400 mb-3" />
                <p className="text-white/80 text-sm leading-relaxed">{bonus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-4 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-400 text-xs tracking-[4px] uppercase font-mono block mb-4">Real Results</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Used by <span className="text-red-500">Professionals</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />)}
                </div>
                <p className="text-white/70 leading-relaxed mb-6 font-light">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-white/50 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT JASON */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-square max-w-md mx-auto lg:mx-0">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-red-600/20 to-amber-600/20 border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-32 h-32 text-red-500/30" />
                </div>
              </div>
            </div>
            <div>
              <span className="text-red-400 text-xs tracking-[4px] uppercase font-mono block mb-4">About the Author</span>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Jason Salvador <span className="text-red-500">#4429</span></h2>
              <p className="text-white/70 leading-relaxed mb-6">
                25+ years in the music industry. Started as an Overbrook Entertainment intern at 18. Managed talent, ran tours, built labels, and produced records for Grammy-winning artists.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                He's advanced shows for My Guy Mars, Ryan Toby (City High), James Fauntleroy, and 1500 or Nothin'. He's negotiated contracts with major labels, built merch operations that gross seven figures, and managed international tours from clubs to arenas.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                PIVOT isn't theory. It's the exact system he uses. Every template, every checklist, every budget formula — battle-tested on real tours with real money on the line.
              </p>
              <div className="flex flex-wrap gap-4 text-white/50 text-sm">
                <div className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-red-400" /> Overbrook Intern → Producer</div>
                <div className="flex items-center gap-2"><Users className="w-4 h-4 text-red-400" /> 15+ Artists Managed</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-red-400" /> 25+ Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-red-600/10 via-transparent to-amber-600/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-amber-600/5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Stop Guessing. <span className="text-red-500">Start Running Tours Like a Pro.</span>
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            $27. One download. Lifetime access. The only tour management resource you'll ever need.
          </p>
          <button
            onClick={() => setShowCheckout(true)}
            className="group px-10 py-5 bg-red-600 text-white rounded-full font-black text-lg hover:bg-red-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(229,25,42,0.4)] transition-all flex items-center justify-center gap-3 mx-auto"
          >
            <BookOpen className="w-6 h-6" /> Get PIVOT Now — $27
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-white/40 text-sm mt-6">Instant PDF download · All 8 templates · Lifetime updates · Private community access</p>
        </div>
      </section>

      {/* PAYMENT MODAL */}
      {showCheckout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowCheckout(false)}>
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 max-w-md w-full relative" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setShowCheckout(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >×</button>

            <div className="text-center mb-8">
              <BookOpen className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-black mb-2">Complete Your Order</h3>
              <p className="text-white/60">PIVOT: The Tour Management Bible + 8 Bonus Templates</p>
              <div className="text-3xl font-black text-red-500 mt-4">$27</div>
            </div>

            <div className="space-y-4">
              {/* PayPal Button */}
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                <input type="hidden" name="cmd" value="_xclick" />
                <input type="hidden" name="business" value="redvisionmusic@gmail.com" />
                <input type="hidden" name="item_name" value="PIVOT: The Tour Management Bible" />
                <input type="hidden" name="amount" value="27.00" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="return" value="https://redvisioncreativestudio.com/pivot-book/success" />
                <input type="hidden" name="cancel_return" value="https://redvisioncreativestudio.com/pivot-book" />
                <button
                  type="submit"
                  className="w-full py-4 bg-[#0070BA] text-white rounded-xl font-black text-lg hover:bg-[#005ea6] transition-all flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c1.1 0 2-.9 2-2V7h2c1.1 0 2 .9 2 2v1h2c1.1 0 2 .9 2 2v2h-2v2h1c.9 0 1.66.58 1.9 1.39.25.84.38 1.72.38 2.65 0 2.08-1.2 3.76-2.88 4.42v.08h1c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-1v1.93c2.02.59 3 2.82 3 5.17 0 3.3-2.7 6-6 6zm-3.9-4.98c-.27-.8-1.04-1.30-1.9-1.30h-1V8.5c0-.83.67-1.5 1.5-1.5.83 0 1.5.67 1.5 1.5v6.9z"/></svg>
                  Pay with PayPal
                </button>
              </form>

              <p className="text-center text-white/40 text-sm">
                Secure checkout via PayPal. Instant download on confirmation.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-center text-white/50 text-xs">
                Questions? Email <a href="mailto:redvisionmusic@gmail.com" className="text-red-400 hover:underline">redvisionmusic@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PivotBook;