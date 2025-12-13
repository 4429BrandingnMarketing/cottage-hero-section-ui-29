import { Megaphone, TrendingUp, Target, Users, BarChart3, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MarketingAgencySection = () => {
  const services = [
    {
      icon: Target,
      title: "Brand Strategy",
      description: "Craft compelling brand narratives that resonate with your audience and drive engagement."
    },
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      description: "Data-driven campaigns that scale your reach and maximize ROI across all channels."
    },
    {
      icon: Globe,
      title: "Digital Presence",
      description: "Build a powerful online presence with SEO, content marketing, and social media mastery."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Turn data into actionable insights with advanced tracking and reporting systems."
    }
  ];

  const benefits = [
    "AI-Powered Campaign Optimization",
    "Multi-Platform Advertising",
    "Influencer Partnership Network",
    "Content Creation Studio",
    "Real-Time Performance Dashboards",
    "Dedicated Account Management"
  ];

  const stats = [
    { value: "500+", label: "Campaigns Launched" },
    { value: "$50M+", label: "Ad Spend Managed" },
    { value: "300%", label: "Avg. ROI Increase" },
    { value: "150+", label: "Happy Clients" }
  ];

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Megaphone className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Marketing Division</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">4429</span>
            {" "}Marketing Agency
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Full-service digital marketing agency combining creative excellence with data-driven strategies 
            to amplify brands and drive measurable results.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features + CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits List */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">What Sets Us Apart</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Let's Grow Together</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Schedule a free consultation to discover how 4429 Marketing can transform 
                your brand's digital presence and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1">
                  Get Free Consultation
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  View Case Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketingAgencySection;
