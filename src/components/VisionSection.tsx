import { motion } from 'framer-motion';
import { Sparkles, Video, Mic2, Film, Image as ImageIcon, Book, Camera, Brain, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AI_PROJECTS = [
    {
        icon: Film,
        title: 'AI Scriptwriter + Comedic Director',
        description: 'Auto-writes comedic skits, scenes, and fake interviews. Built-in tone: satire, parody, absurd humor. Auto-direct scenes, shot lists, and angles. One-click YouTube voice-over & character swap.',
        status: 'Coming Soon',
        color: 'from-purple-500 to-pink-500'
    },
    {
        icon: Video,
        title: 'Pixelated Snitch Interviews Generator',
        description: "Fake 'mafia snitch' interview generator. Pixelated faces, altered voices, anonymized characters. Generates 30-90 sec clips. Created for viral comedy content.",
        status: 'Coming Soon',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        icon: Mic2,
        title: 'Studio Trailer Maker',
        description: 'Parody versions of major studio intros (Universal/MGM/etc). RVM-branded cinematic logos. Turns any idea into cinematic trailers. 1080p + 4K export.',
        status: 'Coming Soon',
        color: 'from-orange-500 to-red-500'
    },
    {
        icon: ImageIcon,
        title: 'Garbage Pail-Style AI Card Creator',
        description: 'Upload selfie → AI generates 80s Garbage Pail-style card. Auto-creates funny name + stats. Optional NFT minting. RVM collectible series.',
        status: 'Coming Soon',
        color: 'from-green-500 to-emerald-500'
    }
];

const FEATURED_PROJECTS = [
    {
        title: 'The Pivot Book',
        subtitle: 'Complete Survival Guide with AI-Powered App Assistant for Tour Managers',
        image: '/images/pivot-book.png',
        link: 'https://redvisioncreativestudio.com/pivot-book',
        description: "All hacks, advice, contacts, do's and dont's from yours truly, Jason Salvador"
    },
    {
        title: 'A Tragic Mulatto',
        subtitle: 'A Satirical Journal of Identity, Absurdity, and Beige Confusion',
        image: '/images/tragic-mulatto.png',
        link: 'https://redvisioncreativestudio.com/tragic-mulatto',
        description: 'Letters to the Editor, The Beige Manifesto, and Fake Ads. By Yours Truly, #4429'
    },
    {
        title: 'Red Valley Mall Portrait Studio',
        subtitle: 'Studio Coming Soon',
        image: '/images/red-valley-portrait.jpg',
        link: '#',
        description: 'Professional portrait photography meets vintage mall aesthetics'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

const VisionSection = () => {
    return (
        <>
            {/* Main Vision Section */}
            <section id="vision" className="py-24 px-4 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-4">
                            THE VISION
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Meet <span className="text-primary">Jason Salvador</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Cultural architect. 20 years dominating music, fashion, and AI innovation.
                        </p>
                    </motion.div>

                    {/* Mocha App Embed */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto mb-20"
                    >
                        <div className="aspect-video rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10 bg-card">
                            <iframe
                                src="https://getmocha.com/apps/0199e288-befc-7ee6-b6bf-a33753f2a638"
                                title="Jason Salvador - Interactive Bio"
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                                style={{ border: 'none' }}
                            />
                        </div>
                    </motion.div>

                    {/* The Visionary Branding */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <div className="max-w-2xl mx-auto p-12 bg-gradient-to-br from-purple-900/20 via-red-900/20 to-pink-900/20 rounded-3xl border border-primary/20">
                            <img
                                src="/images/visionary-logo.png"
                                alt="The Visionary - Red Vision AI Assistant"
                                className="w-full max-w-md mx-auto"
                            />
                            <p className="text-muted-foreground mt-6 text-lg">
                                Red Vision Creative Studio A.I. Assistant
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* AI Projects Section */}
            <section className="py-24 px-4 bg-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                            <Brain className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">Red Vision AI</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">
                            <span className="text-foreground">Upcoming </span>
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI Projects</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Revolutionary AI tools for content creators, comedians, and digital artists
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
                    >
                        {AI_PROJECTS.map((project) => {
                            const Icon = project.icon;
                            return (
                                <motion.div
                                    key={project.title}
                                    variants={itemVariants}
                                    className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden"
                                >
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 rounded-full blur-2xl`} />

                                    <div className="relative">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>

                                        <div className="flex items-start justify-between mb-3">
                                            <h4 className="text-xl font-bold text-foreground pr-4">{project.title}</h4>
                                            <span className="px-3 py-1 text-xs font-bold bg-primary/20 text-primary rounded-full whitespace-nowrap">
                                                {project.status}
                                            </span>
                                        </div>

                                        <p className="text-muted-foreground leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-24 px-4 bg-background relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">Featured Projects</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">More from Red Vision</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {FEATURED_PROJECTS.map((project) => (
                            <motion.div
                                key={project.title}
                                variants={itemVariants}
                                className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                            >
                                <div className="aspect-[4/5] relative overflow-hidden bg-secondary/50">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                                    <div className="w-full h-full flex items-center justify-center text-6xl text-primary/20">
                                        {project.title.includes('Pivot') ? <Book className="w-24 h-24" /> :
                                            project.title.includes('Tragic') ? <ImageIcon className="w-24 h-24" /> :
                                                <Camera className="w-24 h-24" />}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-primary mb-2">{project.subtitle}</p>
                                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                                    {project.link !== '#' && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full"
                                            onClick={() => window.open(project.link, '_blank')}
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Learn More
                                        </Button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default VisionSection;
