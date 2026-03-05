import { Megaphone, TrendingUp, Target, Users, BarChart3, Globe, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const services = [
  { icon: Target, title: 'AI-Powered Campaigns', description: 'Data-driven ad campaigns that target your ideal audience with precision across every platform.' },
  { icon: TrendingUp, title: 'Content Strategy', description: 'From idea to execution — content calendars, copywriting, and brand voice development.' },
  { icon: Globe, title: 'Social Media Management', description: 'Full-service social media management for Instagram, TikTok, Twitter/X, and YouTube.' },
  { icon: BarChart3, title: 'Analytics & Reporting', description: 'Real-time dashboards and weekly performance reports so you always know what\'s working.' },
  { icon: Megaphone, title: 'Influencer Partnerships', description: 'Curated influencer network and authentic partnership campaigns that move culture.' },
  { icon: Users, title: 'Community Building', description: 'Email/SMS lists, fan communities, and brand loyalty systems that create lasting connections.' },
];

const stats = [
  { value: '200+', label: 'Campaigns Run' },
  { value: '50M+', label: 'Impressions Generated' },
  { value: '40+', label: 'Brands Served' },
  { value: '25yrs', label: 'Industry Experience' },
];

const benefits = [
  'Music & entertainment industry specialists',
  'AI-powered content creation at scale',
  'Dedicated account management',
  'Real-time performance dashboards',
  'Cross-platform campaign execution',
  'Influencer & playlist network access',
  'Full-funnel strategy (awareness → sale)',
  'Weekly reporting & optimization',
];

const Marketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-accent/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors text-sm">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to home
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8">
              <Megaphone className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Marketing Division</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">4429</span>{" "}
              Marketing Agency
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Full-service digital marketing for music, fashion, and entertainment brands.
              25 years of industry relationships. AI-powered execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Sparkles className="w-5 h-5 mr-2" /> Get Free Consultation
                </Button>
              </a>
              <a href="mailto:redvisionmusic@gmail.com">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <ArrowRight className="w-5 h-5 mr-2" /> Email Us Directly
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-8 bg-card border border-border rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to grow your brand, grow your audience, and grow your revenue.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="bg-card border-border hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + CTA */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">What Sets Us Apart</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <Card className="bg-gradient-to-br from-primary/10 via-card to-accent/10 border-primary/20">
            <CardContent className="p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Let's Grow Together</h3>
              </div>
              <p className="text-muted-foreground mb-8 text-lg">
                Ready to take your brand to the next level? Schedule a free consultation and let's build something powerful.
              </p>
              <div className="flex flex-col gap-4">
                <a href="/#contact">
                  <Button size="lg" className="w-full">Get Free Consultation</Button>
                </a>
                <a href="mailto:redvisionmusic@gmail.com">
                  <Button variant="outline" size="lg" className="w-full">Email Us Directly</Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketing;
