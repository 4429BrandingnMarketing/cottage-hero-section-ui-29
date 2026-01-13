import { motion } from 'framer-motion';
import { Mic, Globe, TrendingUp, Brain, Zap, Users } from 'lucide-react';

const FEATURES = [
  {
    icon: Mic,
    title: 'Artist Development',
    description: 'Nurturing raw talent into industry-leading voices with personalized mentorship.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connecting our artists with audiences worldwide through strategic distribution.'
  },
  {
    icon: TrendingUp,
    title: 'Innovation Hub',
    description: 'Leveraging cutting-edge AI technology for unparalleled music experiences.'
  },
  {
    icon: Brain,
    title: 'AI-Enhanced Production',
    description: 'Blending human creativity with AI algorithms to push sonic boundaries.'
  },
  {
    icon: Zap,
    title: 'Rapid Release',
    description: 'Streamlined workflows that get your music to fans faster than ever.'
  },
  {
    icon: Users,
    title: 'True Partnerships',
    description: 'Fair deals that prioritize artist ownership and creative control.'
  }
];

// YouTube Video ID for Red Vision Music
const YOUTUBE_VIDEO_ID = 'WeMfmwr5Qvs';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
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
    <section className="py-24 px-4 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
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
            Harmonizing <span className="text-primary">Futures</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Red Vision Music is more than a label; it's a launchpad for auditory pioneers. 
            We cultivate groundbreaking talent, pushing the boundaries of sound and artistry.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* YouTube Video Embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
                title="Red Vision Music - Featured Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-primary/10 rounded-3xl -z-10" />
          </motion.div>

          {/* Vision Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-foreground">
              Where Creativity Meets <span className="text-primary">Innovation</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Jason Salvador's AI-powered record label redefines independent vision. We bring together 
              Grammy-affiliated producers, diamond-selling artists, and cutting-edge technology to 
              create music that transcends boundaries.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our roster includes industry legends like My Guy Mars from the 1500 or Nothin production team, 
              City High's Ryan Toby, and Grammy-winning songwriter James Fauntleroy—all united by a 
              commitment to artistic excellence and true artist partnerships.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-2xl font-bold text-primary">12+</span>
                <span className="text-muted-foreground text-sm">Artists</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-2xl font-bold text-primary">50+</span>
                <span className="text-muted-foreground text-sm">Releases</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-2xl font-bold text-primary">10M+</span>
                <span className="text-muted-foreground text-sm">Streams</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
