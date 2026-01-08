import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Music, Award, Mic, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface Artist {
  id: string;
  name: string;
  genre: string;
  label: string;
  image: string;
  description: string;
  releases: { title: string; cover: string }[];
  spotifyEmbedUrl?: string;
}

const LINEUP: Artist[] = [
  { 
    id: '1', 
    name: 'Dat Boi H.O.P', 
    genre: 'Lyrical Rap', 
    label: 'RV001', 
    image: 'https://images.unsplash.com/photo-1594943260841-45f8f8f8b8e0?auto=format&fit=crop&q=80&w=600', 
    description: 'A lyrical rap sensation from the heart of South Carolina, symbolizing the potential of unexplored territories. Dat Boi H.O.P and Block Burna Entertainment are integral components of Red Vision Music\'s evolving landscape.',
    releases: [
      { title: 'The Block Burna Anthem', cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=300' },
      { title: 'Southern Flow', cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=300' }
    ],
    spotifyEmbedUrl: 'https://open.spotify.com/embed/artist/7zC7C0Q0J0D9J9L0X0X0X0?utm_source=generator'
  },
  { 
    id: '2', 
    name: 'My Guy Mars', 
    genre: 'Experimental Production', 
    label: 'RV002', 
    image: 'https://images.unsplash.com/photo-1517404215381-1c0e7698f1f5?auto=format&fit=crop&q=80&w=600',
    description: 'A Los Angeles native and member of the renowned 1500 or Nothin production team, My Guy Mars effortlessly collaborates with AI algorithms to produce beats that defy conventional categorization.',
    releases: [
      { title: 'AI Driven Rhythms', cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=300' },
      { title: 'Future Soundscapes', cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=300' }
    ],
    spotifyEmbedUrl: 'https://open.spotify.com/embed/artist/0oH03sDsnxkWo7jFl6nZQ6?utm_source=generator'
  },
  { 
    id: '3', 
    name: 'Oscar Lee', 
    genre: 'Poetic Lyrical Rap', 
    label: 'RV003', 
    image: 'https://images.unsplash.com/photo-1510915228340-d926af981b29?auto=format&fit=crop&q=80&w=600',
    description: 'Hailing from South Carolina, Oscar Lee redefines lyrical rap with his intricate verses that weave together the wisdom of the streets and the artistry of a poet.',
    releases: [
      { title: 'Street Wisdom', cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=300' },
      { title: 'Poetic Justice', cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=300' }
    ],
    spotifyEmbedUrl: 'https://open.spotify.com/embed/artist/5EKlA6ylecmqkGLMJCCtck?utm_source=generator'
  },
  { 
    id: '4', 
    name: 'Mya', 
    genre: 'Soulful Vocals', 
    label: 'RV004', 
    image: 'https://images.unsplash.com/photo-1593642531955-b62e17bbd959?auto=format&fit=crop&q=80&w=600',
    description: 'A soulful vocalist who finds herself in a harmonious dance with AI-generated harmonies that elevate her melodies to ethereal heights.',
    releases: [
      { title: 'Ethereal Harmonies', cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=300' },
      { title: 'Digital Soul', cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=300' }
    ],
    spotifyEmbedUrl: 'https://open.spotify.com/embed/artist/6lHL3ubAMgSasKjNqKb8HF?utm_source=generator'
  },
  { 
    id: '5', 
    name: 'King Fatz', 
    genre: 'Hip-Hop', 
    label: 'RV005', 
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=600',
    description: 'The next hip-hop superstar. King Fatz\'s infectious rhymes are charting a course for the future of music.',
    releases: [
      { title: 'Royal Rhymes', cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=300' },
      { title: 'The Crown', cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=300' }
    ]
  },
  { 
    id: '6', 
    name: 'Xcel', 
    genre: 'Grammy-Winning Production', 
    label: 'RV006', 
    image: 'https://images.unsplash.com/photo-1541701494587-d4645228c2e6?auto=format&fit=crop&q=80&w=600',
    description: 'A Grammy Award-winning producer and one of Kanye West\'s personal favorite collaborative producers. Xcel\'s masterful production completes the picture of a label at the forefront of innovation.',
    releases: [
      { title: 'Masterful Beats Vol. 1', cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=300' },
      { title: 'The Producer\'s Touch', cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=300' }
    ]
  },
  { 
    id: '7', 
    name: 'James Fauntleroy', 
    genre: 'R&B / Songwriter', 
    label: 'RV007', 
    image: 'https://images.unsplash.com/photo-1518013322197-0092c10b7b13?auto=format&fit=crop&q=80&w=600',
    description: 'A Grammy-winning songwriter and vocalist, known for his distinctive voice and prolific contributions to contemporary R&B and pop.',
    releases: [
      { title: 'Electric Soul', cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=300' },
      { title: 'The Dreamer\'s EP', cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=300' }
    ],
    spotifyEmbedUrl: 'https://open.spotify.com/embed/artist/5ooSG9S0glqP5ZrqqaHBvT?utm_source=generator'
  },
  { 
    id: '8', 
    name: 'Wiz Buchanan', 
    genre: 'Hip-Hop Producer / Rapper', 
    label: 'RV008', 
    image: 'https://images.unsplash.com/photo-1594943260841-45f8f8f8b8e0?auto=format&fit=crop&q=80&w=600',
    description: "A hip-hop producer and rapper from NY, known for working with Lupe Fiasco and producing Jay-Z's 'What More Can I Say'.",
    releases: [
      { title: 'What More Can I Say (Prod.)', cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=300' },
      { title: 'NY State of Mind', cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=300' }
    ]
  },
  { 
    id: '9', 
    name: 'TRUZY', 
    genre: 'Electronic Pop / Hip-Hop', 
    label: 'RV009', 
    image: 'https://images.unsplash.com/photo-1502899576140-ed873650226e?auto=format&fit=crop&q=80&w=600',
    description: 'The enigmatic artist TRUZY, known for pushing the boundaries of electronic pop with futuristic sounds and captivating vocals.',
    releases: [
      { title: 'YoursTruuly, TRUZY', cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=300' },
      { title: 'Cloth Talk', cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=300' }
    ],
    spotifyEmbedUrl: 'https://open.spotify.com/embed/artist/26KbkMxDWYyxzNWu2N5maX?utm_source=generator'
  },
  { 
    id: '10', 
    name: '1500 or Nothin', 
    genre: 'Hip-Hop Production', 
    label: 'RV010', 
    image: 'https://images.unsplash.com/photo-1533174072545-ea6b1622ed02?auto=format&fit=crop&q=80&w=600',
    description: 'A renowned Grammy-winning production and songwriting collective, instrumental in shaping the sound of modern hip-hop and R&B.',
    releases: [
      { title: 'The Hit Factory', cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=300' },
      { title: 'Sounds of L.A.', cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=300' }
    ],
    spotifyEmbedUrl: 'https://open.spotify.com/embed/artist/6cJJCGZS0v24IF476QbbJh?utm_source=generator'
  },
  {
    id: '11',
    name: 'Dave Young',
    genre: 'Neo-Soul / R&B',
    label: 'RV011',
    image: 'https://images.unsplash.com/photo-1518013322197-0092c10b7b13?auto=format&fit=crop&q=80&w=600',
    description: 'A smooth neo-soul artist known for his captivating vocals and heartfelt lyrics that blend traditional R&B with modern sensibilities.',
    releases: [
      { title: 'Midnight Groove', cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=300' },
      { title: 'City Lights EP', cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=300' }
    ]
  },
  {
    id: '12',
    name: 'Ryan ToBy',
    genre: 'Alternative Pop',
    label: 'RV012',
    image: 'https://images.unsplash.com/photo-1514337651-78939c394c5e?auto=format&fit=crop&q=80&w=600',
    description: 'An innovative alternative pop artist whose music is characterized by catchy melodies, introspective lyrics, and experimental soundscapes.',
    releases: [
      { title: 'Echoes in the Dark', cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=300' },
      { title: 'Synthetic Dreams', cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=300' }
    ]
  }
];

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const ArtistShowcase = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const navigateArtist = (direction: 'next' | 'prev') => {
    if (!selectedArtist) return;
    const currentIndex = LINEUP.findIndex(a => a.id === selectedArtist.id);
    let nextIndex;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % LINEUP.length;
    } else {
      nextIndex = (currentIndex - 1 + LINEUP.length) % LINEUP.length;
    }
    setSelectedArtist(LINEUP[nextIndex]);
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Grammy-Affiliated Label</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Artists</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the groundbreaking talent shaping the future of sound
          </p>
        </motion.div>

        {/* Artists Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {LINEUP.map((artist) => (
            <motion.div
              key={artist.id}
              variants={itemVariants}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredId(artist.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedArtist(artist)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-card border border-border/50 shadow-lg">
                {/* Image */}
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Label Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-bold bg-primary/90 text-primary-foreground rounded-full">
                    {artist.label}
                  </span>
                </div>

                {/* Play Button on Hover */}
                <AnimatePresence>
                  {hoveredId === artist.id && (
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <Play className="w-7 h-7 text-primary-foreground ml-1" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Artist Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 line-clamp-1">
                    {artist.name}
                  </h3>
                  <p className="text-sm text-white/70 line-clamp-1">{artist.genre}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { value: '12+', label: 'Signed Artists' },
            { value: '5', label: 'Grammy Winners' },
            { value: '100M+', label: 'Total Streams' },
            { value: 'Global', label: 'Reach' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Artist Detail Modal */}
      <Dialog open={!!selectedArtist} onOpenChange={() => setSelectedArtist(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-card border-border">
          {selectedArtist && (
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateArtist('prev'); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigateArtist('next'); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Hero Image */}
              <div className="relative h-64 md:h-80">
                <img 
                  src={selectedArtist.image} 
                  alt={selectedArtist.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-3 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full mb-3">
                    {selectedArtist.label}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {selectedArtist.name}
                  </h2>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mic className="w-4 h-4" />
                    <span>{selectedArtist.genre}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {selectedArtist.description}
                </p>

                {/* Releases */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Music className="w-5 h-5 text-primary" />
                    Latest Releases
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedArtist.releases.map((release, idx) => (
                      <div key={idx} className="group cursor-pointer">
                        <div className="relative aspect-square rounded-lg overflow-hidden mb-2">
                          <img 
                            src={release.cover} 
                            alt={release.title}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Play className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <p className="text-sm font-medium line-clamp-1">{release.title}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spotify Embed */}
                {selectedArtist.spotifyEmbedUrl && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <ExternalLink className="w-5 h-5 text-primary" />
                      Listen on Spotify
                    </h3>
                    <iframe
                      src={selectedArtist.spotifyEmbedUrl}
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-xl"
                    />
                  </div>
                )}

                {/* CTA */}
                <div className="flex gap-3 pt-4">
                  <Button className="flex-1">
                    <Play className="w-4 h-4 mr-2" />
                    Play All
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Full Profile
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ArtistShowcase;
