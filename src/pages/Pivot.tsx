import { motion } from 'framer-motion';
import {
    Navigation,
    AppWindow,
    BookOpen,
    MapPin,
    DollarSign,
    Truck,
    Users,
    Calendar,
    ShieldAlert,
    BarChart,
    Smartphone,
    CheckCircle2,
    ArrowRight,
    Cpu
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Pivot = () => {
    const systemFeatures = [
        "Routing & scheduling",
        "Budget forecasting & cost tracking",
        "Vendor & venue coordination",
        "Talent & crew management",
        "Production timelines",
        "Sponsorship integration",
        "Crisis contingency planning"
    ];

    const appFeatures = [
        { icon: Calendar, title: "Real-time Itinerary", description: "Instant access to schedules wherever you are." },
        { icon: BookOpen, title: "Centralized Docs", description: "Contracts, riders, and stage plots in one place." },
        { icon: Users, title: "Team Dashboards", description: "Direct communication with crew and talent." },
        { icon: BarChart, title: "Financial Visibility", description: "Track performance per city or leg." }
    ];

    const manualSections = [
        "Pre-tour preparation protocols",
        "30/60/90-day tour rollout structure",
        "Budget discipline framework",
        "Venue negotiation strategy",
        "Crisis response playbooks",
        "Revenue maximization checkpoints"
    ];

    return (
        <div className="min-h-screen bg-[#0a0a10] text-white selection:bg-green-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-32 overflow-hidden">
                {/* Banner Image Mockup - Placeholder for the car banner provided by user */}
                <div className="absolute top-0 left-0 w-full h-[70vh] z-0 opacity-40">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a10]/80 to-[#0a0a10]" />
                    <img
                        src="/images/pivot-car-banner.png"
                        alt="The Pivot Banner"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            // Fallback if the image doesn't exist yet
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1493238541251-894c19d4f0bc?auto=format&fit=crop&q=80";
                        }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="flex flex-col items-center gap-4 mb-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-md">
                                <Cpu className="w-4 h-4 text-primary" />
                                <span className="text-primary text-xs font-black uppercase tracking-[0.2em]">A Product of Red Vision AI</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                                <Navigation className="w-4 h-4 text-green-500" />
                                <span className="text-green-500 text-sm font-bold tracking-widest uppercase italic">Operational System</span>
                            </div>
                        </div>

                        <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter leading-none uppercase">
                            THE <span className="text-green-500 italic">PIVOT</span>
                        </h1>

                        <p className="text-2xl md:text-3xl font-light text-white/80 max-w-4xl mx-auto leading-tight mb-12">
                            The Pivot is not a motivational concept. <br />
                            <span className="text-white font-bold italic underline decoration-green-500 underline-offset-8">It is an operational system.</span>
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                            <Button size="lg" className="h-20 px-12 text-2xl font-black bg-green-600 hover:bg-green-500 rounded-none transform transition hover:scale-105 shadow-[0_0_30px_rgba(34,197,94,0.3)] uppercase">
                                Control the Tour
                                <ArrowRight className="ml-3 w-8 h-8" />
                            </Button>
                            <div className="text-white/40 font-mono text-sm tracking-widest uppercase italic">
                // CONTROL THE OUTCOME
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Concept Section */}
            <section className="py-24 bg-white text-black">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter uppercase">
                                TOURING IS <span className="text-green-600">HIGH-REVENUE</span> — AND HIGH-RISK.
                            </h2>
                            <p className="text-xl md:text-2xl leading-relaxed text-black/70 mb-10">
                                Missed logistics, budget overruns, miscommunication, and last-minute changes cost real money.
                                The Pivot eliminates those variables, transforming reactive chaos into controlled, scalable execution.
                            </p>

                            <div className="space-y-6">
                                {["Lack of operational structure", "Poor financial visibility", "No pivot strategy when things shift"].map((problem, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold group-hover:bg-red-600 group-hover:text-white transition-colors">
                                            !
                                        </div>
                                        <span className="text-lg font-bold uppercase tracking-tight">{problem}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="/images/pivot-book.png"
                                alt="The Pivot Instruction Manual"
                                className="w-full h-auto rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                            />
                            <div className="absolute -bottom-10 -left-10 bg-green-600 text-white p-10 font-black text-4xl transform -rotate-3 uppercase">
                                15+ YEARS <br /> INDUSTRY <br /> PROVEN
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Three Pillars Section */}
            <section className="py-32 bg-[#0a0a10] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Pillar 1: System */}
                        <div className="space-y-8">
                            <div className="w-20 h-20 bg-green-500/20 rounded-3xl flex items-center justify-center">
                                <Navigation className="w-10 h-10 text-green-500" />
                            </div>
                            <h3 className="text-4xl font-black uppercase italic tracking-tighter">1. The System</h3>
                            <p className="text-white/60 leading-relaxed text-lg">
                                A centralized framework that standardizes every moving part of a tour routing, budget, and scheduling.
                            </p>
                            <ul className="space-y-4 pt-4 border-t border-white/10">
                                {systemFeatures.map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase text-white/40">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Pillar 2: App */}
                        <div className="space-y-8">
                            <div className="w-20 h-20 bg-blue-500/20 rounded-3xl flex items-center justify-center">
                                <Smartphone className="w-10 h-10 text-blue-500" />
                            </div>
                            <h3 className="text-4xl font-black uppercase italic tracking-tighter">2. The App</h3>
                            <p className="text-white/60 leading-relaxed text-lg">
                                A digital command center for real-time itinerary access and team-wide communication dashboards.
                            </p>
                            <div className="grid grid-cols-1 gap-4 pt-4 border-t border-white/10">
                                {appFeatures.map((f, i) => (
                                    <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                                        <div className="flex items-center gap-3 mb-2">
                                            <f.icon className="w-5 h-5 text-blue-400" />
                                            <span className="font-bold uppercase tracking-widest text-xs text-blue-400">{f.title}</span>
                                        </div>
                                        <p className="text-sm text-white/50">{f.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pillar 3: Manual */}
                        <div className="space-y-8">
                            <div className="w-20 h-20 bg-purple-500/20 rounded-3xl flex items-center justify-center">
                                <BookOpen className="w-10 h-10 text-purple-500" />
                            </div>
                            <h3 className="text-4xl font-black uppercase italic tracking-tighter">3. The Manual</h3>
                            <p className="text-white/60 leading-relaxed text-lg">
                                The intellectual property behind the system: pre-tour protocols and crisis response playbooks.
                            </p>
                            <ul className="space-y-4 pt-4 border-t border-white/10">
                                {manualSections.map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase text-white/40">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Audience Section */}
            <section className="py-24 bg-green-600 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 py-20 opacity-10">
                    <span className="text-[20rem] font-black leading-none select-none">PIVOT</span>
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <h2 className="text-5xl md:text-8xl font-black mb-16 tracking-tighter italic uppercase text-center md:text-left">
                        WHO IT’S FOR
                    </h2>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        {[
                            "Independent Artists Scaling up",
                            "Record Labels Expansion",
                            "Talent Managers",
                            "Production Coordinators",
                            "Entertainment Companies"
                        ].map((target, i) => (
                            <div key={i} className="bg-black text-white px-8 py-6 text-2xl font-black uppercase border-b-8 border-white/20 hover:translate-y-[-4px] transition-transform cursor-default">
                                {target}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Pitch Section */}
            <section className="py-40 bg-[#0a0a10] text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-green-500 font-mono tracking-[0.5em] uppercase mb-12">Conclusion</p>
                    <h2 className="text-5xl md:text-8xl font-black mb-10 leading-none tracking-tighter uppercase italic">
                        MANAGE THE <span className="text-green-500">MOMENTUM.</span>
                    </h2>
                    <p className="text-2xl md:text-3xl text-white/60 leading-tight mb-16 max-w-2xl mx-auto font-light">
                        The Pivot transforms touring from an art into a disciplined operation.
                        It doesn’t just manage movement.
                    </p>
                    <div className="relative inline-block group mb-32">
                        <div className="absolute -inset-1 bg-green-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <Button size="lg" className="relative h-24 px-16 text-4xl font-black bg-black text-white border-2 border-green-500 rounded-none transform transition active:scale-95 uppercase">
                            GET THE PIVOT
                        </Button>
                    </div>

                    <div className="border-t border-white/10 pt-20">
                        <div className="flex justify-center items-center gap-12 grayscale opacity-30">
                            <div className="flex flex-col items-center">
                                <Users className="w-12 h-12 mb-2" />
                                <span className="text-[10px] uppercase font-black">Labels</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Smartphone className="w-12 h-12 mb-2" />
                                <span className="text-[10px] uppercase font-black">Artists</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Truck className="w-12 h-12 mb-2" />
                                <span className="text-[10px] uppercase font-black">Production</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Pivot;
