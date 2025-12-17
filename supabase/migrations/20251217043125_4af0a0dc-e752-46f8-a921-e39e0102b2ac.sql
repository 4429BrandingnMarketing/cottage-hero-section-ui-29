-- Create marketing_services table
CREATE TABLE public.marketing_services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL DEFAULT 'Target',
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create marketing_stats table
CREATE TABLE public.marketing_stats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  value TEXT NOT NULL,
  label TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create marketing_benefits table
CREATE TABLE public.marketing_benefits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  benefit TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.marketing_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.marketing_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.marketing_benefits ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Anyone can read marketing_services" ON public.marketing_services FOR SELECT USING (true);
CREATE POLICY "Anyone can read marketing_stats" ON public.marketing_stats FOR SELECT USING (true);
CREATE POLICY "Anyone can read marketing_benefits" ON public.marketing_benefits FOR SELECT USING (true);

-- Admin write policies for marketing_services
CREATE POLICY "Admins can insert marketing_services" ON public.marketing_services FOR INSERT WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update marketing_services" ON public.marketing_services FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete marketing_services" ON public.marketing_services FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));

-- Admin write policies for marketing_stats
CREATE POLICY "Admins can insert marketing_stats" ON public.marketing_stats FOR INSERT WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update marketing_stats" ON public.marketing_stats FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete marketing_stats" ON public.marketing_stats FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));

-- Admin write policies for marketing_benefits
CREATE POLICY "Admins can insert marketing_benefits" ON public.marketing_benefits FOR INSERT WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update marketing_benefits" ON public.marketing_benefits FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete marketing_benefits" ON public.marketing_benefits FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));

-- Insert default data
INSERT INTO public.marketing_services (title, description, icon, order_index) VALUES
('Brand Strategy', 'Craft compelling brand narratives that resonate with your audience and drive engagement.', 'Target', 0),
('Growth Marketing', 'Data-driven campaigns that scale your reach and maximize ROI across all channels.', 'TrendingUp', 1),
('Digital Presence', 'Build a powerful online presence with SEO, content marketing, and social media mastery.', 'Globe', 2),
('Analytics & Insights', 'Turn data into actionable insights with advanced tracking and reporting systems.', 'BarChart3', 3);

INSERT INTO public.marketing_stats (value, label, order_index) VALUES
('500+', 'Campaigns Launched', 0),
('$50M+', 'Ad Spend Managed', 1),
('300%', 'Avg. ROI Increase', 2),
('150+', 'Happy Clients', 3);

INSERT INTO public.marketing_benefits (benefit, order_index) VALUES
('AI-Powered Campaign Optimization', 0),
('Multi-Platform Advertising', 1),
('Influencer Partnership Network', 2),
('Content Creation Studio', 3),
('Real-Time Performance Dashboards', 4),
('Dedicated Account Management', 5);