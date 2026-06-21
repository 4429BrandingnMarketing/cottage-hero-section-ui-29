import { useState } from 'react';
import { ArrowRight, CheckCircle, Globe, Search, Share2, Youtube, Music2, Code2, Shirt, Bot, Play, ChevronRight, ExternalLink, Zap, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AIServices = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Design & Development",
      tag: "DESIGN",
      color: "#E5192A",
      desc: "Premium glassmorphic 3D sites that stop scrollers cold. React, Next.js, Wix, Framer — custom builds that convert.",
      details: [
        "Custom React/Next.js applications",
        "3D & WebGL experiences (Three.js, R3F)",
        "Glassmorphism & modern UI systems",
        "CMS integration (Contentful, Sanity, WordPress)",
        "Performance optimization & Core Web Vitals",
        "E-commerce (Shopify, custom Stripe builds)",
      ],
      deliverables: ["Live website", "Component library", "CMS setup", "Analytics & tracking", "30-day support"],
      price: "Starting at $4,997",
      timeline: "4-8 weeks",
      link: "https://wd6ype73psnk2.mocha.app",
    },
    {
      icon: Search,
      title: "SEO Domination",
      tag: "SEO",
      color: "#06B6D4",
      desc: "AI-powered keyword strategy, technical SEO, and content that ranks and converts. We own the SERPs for your terms.",
      details: [
        "Technical SEO audit & fixes",
        "Keyword research & clustering (AI-enhanced)",
        "Content strategy & production",
        "Link building & digital PR",
        "Local SEO & GMB optimization",
        "Monthly ranking reports",
      ],
      deliverables: ["Audit report", "Keyword map", "Content calendar", "Monthly reports", "Ranking dashboard"],
      price: "Starting at $1,997/mo",
      timeline: "Ongoing",
      link: "https://wd6ype73psnk2.mocha.app",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      tag: "SOCIAL",
      color: "#8B5CF6",
      desc: "Full management across all platforms. Content, community, paid campaigns — automated with AI, approved by humans.",
      details: [
        "Strategy & brand voice development",
        "Content creation (posts, reels, stories, videos)",
        "Community management & engagement",
        "Paid social campaigns (Meta, TikTok, X)",
        "Influencer outreach & partnerships",
        "Weekly analytics & optimization",
      ],
      deliverables: ["Content calendar", "30+ posts/mo", "Ad management", "Monthly report", "Growth dashboard"],
      price: "Starting at $2,497/mo",
      timeline: "Ongoing",
      link: "https://wd6ype73psnk2.mocha.app",
    },
    {
      icon: Youtube,
      title: "YouTube Marketing",
      tag: "VIDEO",
      color: "#FF0000",
      desc: "Channel buildout, SEO, thumbnails, community posts — grow from zero to monetized. We build channels that compound.",
      details: [
        "Channel strategy & niche positioning",
        "Video SEO & keyword optimization",
        "Thumbnail & title A/B testing",
        "Shorts strategy & repurposing",
        "Community tab & membership setup",
        "Monetization roadmap",
      ],
      deliverables: ["Channel audit", "Content strategy", "SEO-optimized uploads", "Monthly analytics", "Growth roadmap"],
      price: "Starting at $1,497/mo",
      timeline: "Ongoing",
      link: "https://wd6ype73psnk2.mocha.app",
    },
    {
      icon: Music2,
      title: "Music Distribution & Marketing",
      tag: "MUSIC",
      color: "#10B981",
      desc: "Get on every major DSP. Playlist pitching, royalty tracking, release strategy — built for independent artists.",
      details: [
        "Global DSP distribution (Spotify, Apple, etc.)",
        "Playlist pitching (editorial & algorithmic)",
        "Pre-save campaigns & release strategy",
        "Royalty collection & reporting",
        "Sync licensing opportunities",
        "Artist dashboard & analytics",
      ],
      deliverables: ["Release checklist", "Pitch deck", "Royalty dashboard", "Monthly statements", "Marketing assets"],
      price: "Starting at $997/release",
      timeline: "Per release",
      link: "https://wd6ype73psnk2.mocha.app",
    },
    {
      icon: Code2,
      title: "Software & App Development",
      tag: "DEV",
      color: "#F59E0B",
      desc: "Web apps, mobile apps, AI tools, automation. MVP to full scale — we ship production code, not prototypes.",
      details: [
        "Custom web applications (React, Next.js, Node)",
        "Mobile apps (React Native, Expo)",
        "AI agent development & deployment",
        "Workflow automation (Zapier, Make, custom)",
        "API development & integration",
        "DevOps & cloud infrastructure",
      ],
      deliverables: ["Working application", "Source code", "Documentation", "Deployment", "90-day warranty"],
      price: "Starting at $15,000",
      timeline: "8-16 weeks",
      link: "https://wd6ype73psnk2.mocha.app",
    },
    {
      icon: Shirt,
      title: "Fashion & Merch Design",
      tag: "FASHION",
      color: "#C9A84C",
      desc: "Brand apparel, luxury drops, merch lines — designed by AI, fulfilled by Printful. Zero inventory risk.",
      details: [
        "Collection design & tech packs",
        "AI-generated patterns & artwork",
        "Printful/Printify store setup",
        "Mockup & lifestyle photography",
        "Launch campaign & email flows",
        "Inventory & fulfillment management",
      ],
      deliverables: ["Design files", "Store setup", "Product mockups", "Launch assets", "Ongoing support"],
      price: "Starting at $2,997",
      timeline: "4-6 weeks",
      link: "https://wd6ype73psnk2.mocha.app",
    },
    {
      icon: Bot,
      title: "AI Agent Creation",
      tag: "AI",
      color: "#E5192A",
      desc: "Custom agents for sales, support, content, and research. Built and deployed for you — running 24/7.",
      details: [
        "Sales qualification agents",
        "Customer support automation",
        "Content generation pipelines",
        "Research & analysis agents",
        "Multi-agent orchestration",
        "Monitoring & analytics",
      ],
      deliverables: ["Deployed agents", "Prompt library", "Integration guide", "Analytics dashboard", "Monthly optimization"],
      price: "Starting at $4,997",
      timeline: "3-6 weeks",
      link: "https://wd6ype73psnk2.mocha.app",
    },
    {
      icon: Share2,
      title: "Sales & Marketing Campaigns",
      tag: "CAMPAIGNS",
      color: "#8B5CF6",
      desc: "Full funnel strategy. Email, ads, landing pages, copy — built to convert. We own the numbers.",
      details: [
        "Campaign strategy & funnel design",
        "Landing page design & development",
        "Email/SMS sequence writing",
        "Paid ad management (Google, Meta, TikTok)",
        "Conversion rate optimization",
        "Attribution & reporting",
      ],
      deliverables: ["Funnel map", "Landing pages", "Email sequences", "Ad creative", "Weekly reports"],
      price: "Starting at $3,997/mo",
      timeline: "Ongoing",
      link: "https://wd6ype73psnk2.mocha.app",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        .orb { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; }
        .glass { background:rgba(255,255,255,0.03); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.08); }
        .glass-card { background:linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01)); backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px); border:1px solid rgba(255,255,255,0.1); transition:all 0.4s cubic-bezier(0.23,1,0.32,1); }
        .glass-card:hover { border-color:rgba(229,25,42,0.3); transform:translateY(-6px); box-shadow:0 24px 60px rgba(229,25,42,0.15); }
        .tag { font-family:'DM Mono',monospace; font-size:0.65rem; letter-spacing:0.2em; text-transform:uppercase; }
      `}</style>

      <Navbar />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="orb w-[700px] h-[700px] bg-red-700/12 -top-40 -left-40" style={{animation:'float 8s ease-in-out infinite'}} />
        <div className="orb w-[500px] h-[500px] bg-purple-700/10 top-1/2 right-0" style={{animation:'float 10s ease-in-out infinite 2s'}} />
        <div className="orb w-[400px] h-[400px] bg-cyan-700/8 bottom-0 left-1/3" style={{animation:'float 7s ease-in-out infinite 4s'}} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <Link to="/divisions/ai" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 mb-10 transition-colors text-sm">
            <ArrowRight className="w-3 h-3 rotate-180" /> Back to AI Division
          </Link>

          <div className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="tag text-red-400">Red Vision AI — Services</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tighter">
            <span className="block text-white">Every Service.</span>
            <span className="block bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">One Team.</span>
          </h1>

          <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            Eight specialized services. AI-powered execution. Human-led strategy. Built for the entertainment industry.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  className="glass-card rounded-3xl p-8 flex flex-col group cursor-pointer"
                  style={{border:`1px solid ${svc.color}18`}}
                  onClick={() => window.open(svc.link, '_blank')}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="tag text-xs px-3 py-1.5 rounded-full" style={{background:`${svc.color}18`,color:svc.color,border:`1px solid ${svc.color}28`}}>{svc.tag}</span>
                    <div className="w-2 h-2 rounded-full" style={{background:svc.color}} />
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{background:`${svc.color}12`,border:`1px solid ${svc.color}28`}}>
                      <Icon className="w-7 h-7" style={{color:svc.color}} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-2" style={{color:svc.color}}>{svc.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed">{svc.desc}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 flex-1">
                    <p className="text-white/50 text-xs uppercase tracking-wider font-medium mb-2">What's Included</p>
                    <ul className="space-y-2">
                      {svc.details.map((detail, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-white/60">
                          <CheckCircle className="w-4 h-4 flex-shrink-0" style={{color:svc.color}} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/10 pt-6 mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Timeline</p>
                        <p className="font-medium text-white">{svc.timeline}</p>
                      </div>
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Starting At</p>
                        <p className="font-black text-lg" style={{color:svc.color}}>{svc.price}</p>
                      </div>
                    </div>
                  </div>

                  <a href={svc.link} target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-2 p-4 rounded-2xl transition-all" style={{background:`${svc.color}12`,border:`1px solid ${svc.color}22`}}>
                    <span className="text-sm font-bold" style={{color:svc.color}}>Start Project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" style={{color:svc.color}} />
                  </a>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <p className="text-white/50 mb-6">Need something custom? Multiple services? Let's build a package.</p>
            <a href="https://wd6ype73psnk2.mocha.app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-full font-black text-lg hover:bg-red-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(229,25,42,0.4)] transition-all">
              Book a Strategy Call <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServices;