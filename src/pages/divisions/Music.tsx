import { Music as MusicIcon, Users, Mic2, Award, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Music = () => {
  const artists = [
    { name: "My Guy Mars", role: "Diamond-selling Producer", achievements: "Multiple Grammy nominations", spotifyUrl: "https://open.spotify.com/artist/3KdGFQsNhXcHGQRjLBKNKz" },
    { name: "Ryan Toby", role: "City High Legend", achievements: "Multi-platinum artist", spotifyUrl: "https://open.spotify.com/artist/2UazAtjfzqBF0Nho2awK4z" },
    { name: "James Fauntleroy", role: "Award-winning Songwriter", achievements: "Grammy winner", spotifyUrl: "https://open.spotify.com/artist/4W6JxFwlNdPJRNf9B5156w" }
  ];

  const services = [
    { icon: Mic2, title: "Artist Development", description: "Comprehensive talent nurturing with AI-powered insights" },
    { icon: Award, title: "Production Services", description: "Grammy-level production with cutting-edge AI enhancement" },
    { icon: Users, title: "Marketing & Distribution", description: "Strategic release planning and global distribution" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <MusicIcon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Grammy-Affiliated Label</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                Red Vision <span className="text-primary">Music</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Grammy-affiliated AI record label featuring Diamond-selling producer My Guy Mars, City High's Ryan Toby,
                and songwriter James Fauntleroy. True artist partnerships with AI-enhanced production.
              </p>

              <div className="flex gap-4">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg transition-all">
                  Submit Your Music
                </button>
                <button className="px-8 py-4 border-2 border-border rounded-full font-semibold hover:bg-secondary transition-all flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Listen Now
                </button>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <MusicIcon className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Artists</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {artists.map((artist) => (
              <div
                key={artist.name}
                className="bg-card rounded-2xl p-8 hover:shadow-xl transition-all flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Mic2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                <p className="text-muted-foreground mb-4">{artist.role}</p>

                <div className="mt-auto">
                  <iframe
                    src={artist.spotifyUrl.replace('artist/', 'embed/artist/')}
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-xl mb-4"
                    title={`${artist.name} Spotify Player`}
                  />
                  <p className="text-sm text-primary font-medium">{artist.achievements}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="text-center p-8 rounded-2xl hover:bg-secondary transition-all">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Music;
