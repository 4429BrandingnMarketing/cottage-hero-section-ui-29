import { Play, Pause, Heart, Share2, Download, Music, Mic, Users, Star, Upload, Building2, Headphones } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import MusicNavbar from '@/components/music/MusicNavbar';
import Footer from '@/components/Footer';
import ArtistShowcase from '@/components/music/ArtistShowcase';
import MerchSection from '@/components/music/MerchSection';
import VisionSection from '@/components/music/VisionSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
const submissionSchema = z.object({
  artist_name: z.string().trim().min(1, {
    message: "Artist name is required"
  }).max(100, {
    message: "Artist name must be less than 100 characters"
  }),
  genre: z.string().trim().min(1, {
    message: "Genre is required"
  }).max(50, {
    message: "Genre must be less than 50 characters"
  }),
  email: z.string().trim().email({
    message: "Invalid email address"
  }).max(255, {
    message: "Email must be less than 255 characters"
  }),
  description: z.string().trim().min(10, {
    message: "Description must be at least 10 characters"
  }).max(2000, {
    message: "Description must be less than 2000 characters"
  }),
  music_links: z.string().trim().min(1, {
    message: "Music links are required"
  }).max(1000, {
    message: "Music links must be less than 1000 characters"
  }).refine(val => {
    const urls = val.split(/[\s,\n]+/).filter(Boolean);
    return urls.every(url => {
      try {
        new URL(url);
        return true;
      } catch {
        return false;
      }
    });
  }, {
    message: "Please provide valid URLs (e.g., https://soundcloud.com/...)"
  })
});
type SubmissionFormValues = z.infer<typeof submissionSchema>;
const RedVisionMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [artists, setArtists] = useState<any[]>([]);
  const [tracks, setTracks] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const {
    toast
  } = useToast();
  const form = useForm<SubmissionFormValues>({
    resolver: zodResolver(submissionSchema),
    defaultValues: {
      artist_name: '',
      genre: '',
      email: '',
      description: '',
      music_links: ''
    }
  });
  useEffect(() => {
    fetchArtists();
    fetchTracks();
    fetchServices();
  }, []);
  const fetchArtists = async () => {
    const {
      data,
      error
    } = await supabase.from('artists').select('*').order('created_at', {
      ascending: false
    });
    if (data && !error) setArtists(data);
  };
  const fetchTracks = async () => {
    const {
      data,
      error
    } = await supabase.from('tracks').select('*').order('created_at', {
      ascending: false
    });
    if (data && !error) setTracks(data);
  };
  const fetchServices = async () => {
    const {
      data,
      error
    } = await supabase.from('services').select('*').order('created_at', {
      ascending: false
    });
    if (data && !error) setServices(data);
  };
  const handleSubmit = async (values: SubmissionFormValues) => {
    const {
      error
    } = await supabase.from('submissions').insert([{
      artist_name: values.artist_name,
      email: values.email,
      track_url: values.music_links,
      message: `Genre: ${values.genre}\n\n${values.description}`
    }]);
    if (error) {
      toast({
        title: "Error",
        description: "Failed to submit application",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: "Your application has been submitted!"
      });
      form.reset();
    }
  };
  return <div className="min-h-screen bg-background">
      <MusicNavbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"></div>
        <div className="absolute inset-0 bg-stone-700">
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

      {/* Artist Showcase Section */}
      <div id="artists">
        <ArtistShowcase />
      </div>

      {/* Vision Section */}
      <div id="vision">
        <VisionSection />
      </div>

      {/* Music Catalog Section */}
      <section id="releases" className="py-20 px-4 bg-secondary/20">
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
                {tracks.map((track, index) => <div key={track.id} className={`flex items-center justify-between p-4 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer ${currentTrack === index ? 'bg-primary/10' : ''}`}>
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="icon" onClick={() => {
                    setCurrentTrack(index);
                    setIsPlaying(!isPlaying);
                  }} className="hover:bg-primary/20">
                        {isPlaying && currentTrack === index ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
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
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Google Stitch Integration */}
      <section id="experience" className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nemo - Interactive Experience</h2>
          <p className="text-xl text-muted-foreground mb-12">Explore our interactive music showcase</p>

          <div className="w-full aspect-video rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm border border-primary/20">
            <iframe src="https://stitch.withgoogle.com/projects/11569583431666638584" className="w-full h-full" frameBorder="0" allowFullScreen title="Google Stitch - Nemo"></iframe>
          </div>
        </div>
      </section>

      {/* Streaming Integration */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Stream Everywhere</h2>
          <p className="text-xl text-muted-foreground mb-12">Find Red Vision Music on all major platforms</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Spotify', 'Apple Music', 'YouTube Music', 'SoundCloud'].map((platform, index) => <Card key={index} className="group hover:scale-105 transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                    <Music className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{platform}</h3>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <div id="merch">
        <MerchSection />
      </div>

      {/* Artist Submission */}
      <section id="submit" className="py-20 px-4 bg-secondary/20">
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="artist_name" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Artist Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your artist name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    <FormField control={form.control} name="genre" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Genre</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Hip-Hop, Electronic, Rock" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                  </div>

                  <FormField control={form.control} name="email" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />

                  <FormField control={form.control} name="description" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Tell us about your music</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Describe your style, influences, and what makes you unique..." rows={4} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />

                  <FormField control={form.control} name="music_links" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Music Links</FormLabel>
                        <FormControl>
                          <Textarea placeholder="SoundCloud, YouTube, Spotify links to your best tracks..." rows={3} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />

                  <Button type="submit" className="w-full" size="lg">
                    Submit Application
                  </Button>
                </form>
              </Form>
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
            {services.map(service => <Card key={service.id} className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20">
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
                    {(service.features as string[]).map((feature, idx) => <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {feature}
                      </li>)}
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default RedVisionMusic;