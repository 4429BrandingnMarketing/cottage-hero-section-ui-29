-- Create technology_capabilities table
CREATE TABLE public.technology_capabilities (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL DEFAULT 'Cpu',
  features TEXT[] NOT NULL DEFAULT '{}',
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create technology_stats table
CREATE TABLE public.technology_stats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  value TEXT NOT NULL,
  label TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.technology_capabilities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.technology_stats ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Anyone can read technology_capabilities" ON public.technology_capabilities FOR SELECT USING (true);
CREATE POLICY "Anyone can read technology_stats" ON public.technology_stats FOR SELECT USING (true);

-- Admin write policies for technology_capabilities
CREATE POLICY "Admins can insert technology_capabilities" ON public.technology_capabilities FOR INSERT WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update technology_capabilities" ON public.technology_capabilities FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete technology_capabilities" ON public.technology_capabilities FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));

-- Admin write policies for technology_stats
CREATE POLICY "Admins can insert technology_stats" ON public.technology_stats FOR INSERT WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update technology_stats" ON public.technology_stats FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete technology_stats" ON public.technology_stats FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));

-- Insert default data
INSERT INTO public.technology_capabilities (title, description, icon, features, order_index) VALUES
('AI & Machine Learning', 'Custom AI models for content creation, audience analysis, and predictive analytics.', 'Brain', ARRAY['Neural Networks', 'NLP Processing', 'Computer Vision'], 0),
('Custom Development', 'Full-stack solutions built with cutting-edge frameworks and cloud infrastructure.', 'Code', ARRAY['React & Next.js', 'Node.js APIs', 'Cloud Native'], 1),
('Data Infrastructure', 'Scalable data pipelines and real-time analytics for entertainment insights.', 'Database', ARRAY['Real-time Analytics', 'Big Data', 'ETL Pipelines'], 2),
('Security & Compliance', 'Enterprise-grade security protecting creative assets and user data.', 'Shield', ARRAY['Encryption', 'GDPR Ready', 'SOC 2'], 3);

INSERT INTO public.technology_stats (value, label, order_index) VALUES
('99.9%', 'Uptime SLA', 0),
('50ms', 'Avg Response', 1),
('10M+', 'API Calls/Day', 2),
('24/7', 'Support', 3);