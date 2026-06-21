import { BookOpen, PenTool, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Scripts = () => {
  const books = [
    { title: "PIVOT: The Tour Management Bible", desc: "85,000 words of real tour management knowledge. Everything from budgeting and advancing to managing artists on the road. The definitive guide for music industry professionals.", price: "$27", link: "https://pivot-book-jason-salvador.netlify.app", badge: "BESTSELLER" },
    { title: "The Red Vision AI Playbook", desc: "How to build an AI-powered music and entertainment business from scratch. Tools, systems, workflows, and the exact stack Red Vision uses.", price: "$47", link: "https://wd6ype73psnk2.mocha.app", badge: "NEW" },
    { title: "Scripts N Scribbles Vol. 1", desc: "A curated collection of creative writing, cultural commentary, and industry insights from Jason Salvador and the Red Vision family.", price: "$19", link: "https://wd6ype73psnk2.mocha.app", badge: "COMING SOON" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-primary/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-white/50 hover:text-white mb-8 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />Back to home
          </Link>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6">
              <PenTool className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">Scripts N Scribbles</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Words That <span className="text-yellow-400">Move</span> the Industry.
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Books, guides, and written works from the Red Vision family. Real knowledge from real experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {books.map((book) => (
              <div key={book.title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-yellow-400/40 transition-all duration-300 flex flex-col relative">
                <div className="absolute top-4 right-4 px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs font-bold rounded-full">{book.badge}</div>
                <BookOpen className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 pr-16">{book.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed flex-1 mb-6">{book.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-yellow-400">{book.price}</span>
                  <a href={book.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-bold hover:bg-yellow-300 transition-colors">
                    <ShoppingBag className="w-3 h-3" /> Get It
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Scripts;
