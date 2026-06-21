import { GraduationCap, BookOpen, Music, Cpu, DollarSign, Mic2, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const University = () => {
  const courses = [
    { icon: Mic2, title: "Tour Management Mastery", desc: "The complete PIVOT curriculum — budgeting, advancing shows, managing artists on the road. Based on the 85,000-word PIVOT book.", price: "$297", link: "https://pivot-tour-app.netlify.app" },
    { icon: Cpu, title: "AI for Music Professionals", desc: "How to use AI tools to grow your music career, automate your business, and stay 5 years ahead of the industry.", price: "$197", link: "https://redvisionu.aimentorpro.com/dashboard" },
    { icon: Music, title: "Label Operations", desc: "How to run an independent label — A&R, distribution, marketing, and artist development. Real systems from a real label.", price: "$397", link: "https://ailiveuniversity.live/dashboard/user" },
    { icon: DollarSign, title: "Music Business & Publishing", desc: "Publishing, licensing, sync deals, and the financial side of music nobody teaches you in school.", price: "$247", link: "https://wd6ype73psnk2.mocha.app" },
    { icon: BookOpen, title: "Artist Development", desc: "Build your brand, find your audience, and build a sustainable career in the streaming era.", price: "$297", link: "https://wd6ype73psnk2.mocha.app" },
    { icon: GraduationCap, title: "Full Curriculum Access", desc: "All courses, all materials, direct access to Jason for questions. The complete Red Vision University experience.", price: "$997", link: "https://redvisionu.aimentorpro.com/dashboard" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-white/50 hover:text-white mb-8 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />Back to home
          </Link>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Red Vision University</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Learn From Someone Who's <span className="text-primary">Actually Done It.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              15+ years of real music industry experience. No theory. No fluff. Just what actually works — from tour management to AI to label operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <div key={course.title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed flex-1 mb-4">{course.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                    <a href={course.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/80 transition-colors">
                      Enroll <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Access Both Platforms</h2>
            <p className="text-white/60 mb-8">Red Vision University is available on two platforms. Choose the one that works for you.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://redvisionu.aimentorpro.com/dashboard" target="_blank" rel="noreferrer" className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/80 transition-all flex items-center gap-2">
                AI Mentor Pro Platform <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://ailiveuniversity.live/dashboard/user" target="_blank" rel="noreferrer" className="px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:border-white/40 transition-all flex items-center gap-2">
                AI Live University <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default University;
