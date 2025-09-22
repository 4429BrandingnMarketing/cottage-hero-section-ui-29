import { Play, Pause, Heart, Share2, Download, Music, Mic, Users, Star, Upload, Building2, Headphones } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const RedVisionMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const artists = [
    {
      name: "Nova Flame",
      genre: "Electronic Pop",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      streams: "2.5M",
      verified: true
    },
    {
      name: "Echo Storm",
      genre: "Hip-Hop",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      streams: "1.8M", 
      verified: true
    },
    {
      name: "Crimson Waves",
      genre: "Alternative Rock",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      streams: "3.2M",
      verified: true
    },
    {
      name: "Digital Dreams",
      genre: "Synthwave",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      streams: "1.4M",
      verified: false
    }
  ];

  const tracks = [
    { title: "Red Vision", artist: "Nova Flame", duration: "3:42", streams: "850K" },
    { title: "Storm Chaser", artist: "Echo Storm", duration: "4:15", streams: "720K" },
    { title: "Neon Nights", artist: "Digital Dreams", duration: "3:28", streams: "650K" },
    { title: "Breaking Waves", artist: "Crimson Waves", duration: "4:01", streams: "920K" }
  ];

  const services = [
    {
      title: "Artist Development",
      description: "Complete artist coaching and career development",
      price: "Custom",
      features: ["Brand Development", "Image Consulting", "Career Strategy", "Industry Connections"]
    },
    {
      title: "Studio Recording",
      description: "Professional recording sessions with top-tier equipment",
      price: "$150/hr",
      features: ["Pro Tools Studio", "Live Room", "Mixing & Mastering", "Producer Available"]
    },
    {
      title: "Music Production",
      description: "Full production services from concept to release",
      price: "$500/track",
      features: ["Beat Production", "Arrangement", "Sound Design", "Final Mix"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920')] bg-cover bg-center opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8 backdrop-blur-sm">
            <Music className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Music Division</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              RED VISION
            </span>
            <br />
            <span className="text-foreground">MUSIC</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
            Discover, stream, and connect with the next generation of artists. From underground gems to chart-toppers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Listen Now
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              <Upload className="w-5 h-5 mr-2" />
              Submit Music
            </Button>
          </div>
        </div>
      </section>

      {/* Artist Roster Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Artists</h2>
            <p className="text-xl text-muted-foreground">Our roster of talented musicians making waves</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {artists.map((artist, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-0">
                  <div className="relative">
                    <img src={artist.image} alt={artist.name} className="w-full h-64 object-cover rounded-t-lg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-t-lg"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{artist.name}</h3>
                        {artist.verified && <Star className="w-4 h-4 text-primary fill-current" />}
                      </div>
                      <p className="text-muted-foreground text-sm">{artist.genre}</p>
                      <p className="text-accent text-sm font-medium">{artist.streams} monthly streams</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Music Catalog Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Latest Releases</h2>
            <p className="text-xl text-muted-foreground">Fresh tracks from Red Vision Music</p>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Headphones className="w-5 h-5 text-primary" />
                Now Playing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tracks.map((track, index) => (
                  <div key={index} className={`flex items-center justify-between p-4 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer ${currentTrack === index ? 'bg-primary/10' : ''}`}>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setCurrentTrack(index);
                          setIsPlaying(!isPlaying);
                        }}
                        className="hover:bg-primary/20"
                      >
                        {isPlaying && currentTrack === index ? 
                          <Pause className="w-4 h-4" /> : 
                          <Play className="w-4 h-4" />
                        }
                      </Button>
                      <div>
                        <h4 className="font-semibold text-foreground">{track.title}</h4>
                        <p className="text-muted-foreground text-sm">{track.artist}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground text-sm">{track.streams}</span>
                      <span className="text-muted-foreground text-sm">{track.duration}</span>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Streaming Integration */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Stream Everywhere</h2>
          <p className="text-xl text-muted-foreground mb-12">Find Red Vision Music on all major platforms</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Spotify', 'Apple Music', 'YouTube Music', 'SoundCloud'].map((platform, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                    <Music className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{platform}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Submission */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Submit Your Music</h2>
            <p className="text-xl text-muted-foreground">Ready to join Red Vision Music? Send us your best work</p>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-primary" />
                Artist Submission Form
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Artist Name</label>
                  <Input placeholder="Your artist name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Genre</label>
                  <Input placeholder="e.g., Hip-Hop, Electronic, Rock" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Tell us about your music</label>
                <Textarea placeholder="Describe your style, influences, and what makes you unique..." rows={4} />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Music Links</label>
                <Textarea placeholder="SoundCloud, YouTube, Spotify links to your best tracks..." rows={3} />
              </div>
              
              <Button className="w-full" size="lg">
                Submit Application
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Production Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Production Services</h2>
            <p className="text-xl text-muted-foreground">Professional music production and artist development</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RedVisionMusic;