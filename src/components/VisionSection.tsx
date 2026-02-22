import { motion } from 'framer-motion';
import { Sparkles, Video, Mic2, Film, Image as ImageIcon, Book, Camera, Brain, ExternalLink, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VisionSection = () => {
    const accolades = [
        {
            title: "1500 or Nothin' Alumni",
            desc: "Bridging the gap between legendary production and future innovation.",
            icon: Sparkles,
            color: "text-red-500"
        },
        {
            title: "Multi-Platinum Producer",
            desc: "20 years of delivering diamond-selling results for the world's biggest artists.",
            icon: Mic2,
            color: "text-black"
        },
        {
            title: "Direct Access Promise",
            desc: "Strategic creative direction that moves the needle on culture.",
            icon: ShieldCheck,
            color: "text-red-500"
        }
    ];

    const collaborations = [
        "Kanye West", "Jay-Z", "Beyoncé", "Virgil Abloh", "Don C", "Hardy Blechman", "Nigo", "James Fauntleroy", "My Guy Mars", "Ryan Toby"
    ];

    return (
        <section id="vision" className="py-24 px-4 bg-[#F9FAFB] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Authority Card (Collage) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="bg-white p-4 rounded-[2rem] shadow-2xl relative overflow-hidden flex">
                            {/* Vertical Name Accent */}
                            <div className="hidden md:flex flex-col items-center justify-center pr-6 py-8">
                                <span className="[writing-mode:vertical-lr] rotate-180 text-4xl font-black text-red-600/20 tracking-[0.2em] select-none">
                                    JASON SALVADOR
                                </span>
                            </div>

                            <div className="flex-1 relative">
                                <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-gray-100 border border-gray-100">
                                    <img
                                        src="/images/jason-salvador-actual.png"
                                        alt="Jason Salvador Bio Collage"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Legend Badge */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-red-600 text-white px-6 py-2 rounded-full inline-flex items-center gap-2 shadow-lg">
                                        <Sparkles className="w-4 h-4" />
                                        <span className="font-bold text-sm tracking-widest uppercase">Industry Legend</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Abstract Background Accents */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/5 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black/5 rounded-full blur-3xl" />
                    </motion.div>

                    {/* Right: Visionary Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div>
                            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
                                The Visionary
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black text-[#1F2937] leading-tight mb-6">
                                Meet <span className="text-red-600">Jason Salvador</span>
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                                Cultural architect and strategic consultant. Over two decades of dominating the intersection of music, high-fashion, and disruptive technology.
                            </p>
                        </div>

                        {/* Accolades List */}
                        <div className="space-y-8">
                            {accolades.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-6 items-start"
                                >
                                    <div className={`w-14 h-14 rounded-full border-2 border-gray-100 flex items-center justify-center flex-shrink-0 ${item.color}`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#1F2937] mb-1">{item.title}</h4>
                                        <p className="text-gray-500">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Collaborations Grid */}
                        <div className="pt-8 border-t border-gray-200">
                            <h5 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Notable Collaborations</h5>
                            <div className="flex flex-wrap gap-2">
                                {collaborations.map((name) => (
                                    <span
                                        key={name}
                                        className="px-4 py-2 bg-white border border-gray-100 rounded-full text-sm font-medium text-gray-600 shadow-sm"
                                    >
                                        {name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Button
                                size="lg"
                                className="bg-black hover:bg-red-600 text-white px-8 h-14 rounded-full text-lg font-bold transition-all"
                            >
                                Get in Touch
                            </Button>
                            <a
                                href="https://getmocha.com/apps/0199e288-befc-7ee6-b6bf-a33753f2a638"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-red-600 transition-colors"
                            >
                                <ExternalLink className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* AI Projects Teaser - Refined */}
                <div className="mt-32 pt-24 border-t border-gray-200">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full mb-6">
                            <Brain className="w-4 h-4" />
                            <span className="text-sm font-bold tracking-widest uppercase">Red Vision AI</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black text-[#1F2937] mb-4">Upcoming AI Projects</h3>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            Revolutionary AI tools for content creators, comedians, and digital artists.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Film, title: "AI Scriptwriter", desc: "Auto-writes comedic skits and scenes with satirical tone.", color: "bg-purple-50" },
                            { icon: Video, title: "Snitch Generator", desc: "Pixelated 'mafia snitch' viral video interview generator.", color: "bg-blue-50" },
                            { icon: Mic2, title: "Trailer Maker", desc: "Parody studio intros and cinematic RVM-branded logos.", color: "bg-orange-50" },
                            { icon: ImageIcon, title: "AI Card Creator", desc: "80s Garbage Pail-style card generator from selfies.", color: "bg-green-50" }
                        ].map((project, index) => (
                            <div key={index} className={`${project.color} p-8 rounded-3xl border border-white hover:shadow-xl transition-all duration-300 group`}>
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                                    <project.icon className="w-6 h-6 text-gray-900" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">{project.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionSection;
