-- Create TV services table
CREATE TABLE public.tv_services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL DEFAULT 'Tv',
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create TV stats table
CREATE TABLE public.tv_stats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  value TEXT NOT NULL,
  label TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on both tables
ALTER TABLE public.tv_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tv_stats ENABLE ROW LEVEL SECURITY;

-- RLS policies for tv_services
CREATE POLICY "Anyone can read tv_services" ON public.tv_services FOR SELECT USING (true);
CREATE POLICY "Admins can insert tv_services" ON public.tv_services FOR INSERT WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update tv_services" ON public.tv_services FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete tv_services" ON public.tv_services FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS policies for tv_stats
CREATE POLICY "Anyone can read tv_stats" ON public.tv_stats FOR SELECT USING (true);
CREATE POLICY "Admins can insert tv_stats" ON public.tv_stats FOR INSERT WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update tv_stats" ON public.tv_stats FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete tv_stats" ON public.tv_stats FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));

-- Insert sample data for tv_services
INSERT INTO public.tv_services (title, description, icon, order_index) VALUES
('Video Production', 'Professional video content creation from concept to final cut', 'Video', 1),
('Live Broadcasting', 'Real-time streaming and live event coverage', 'Radio', 2),
('Post-Production', 'Expert editing, color grading, and visual effects', 'Film', 3),
('Distribution', 'Multi-platform content delivery and syndication', 'Share2', 4);

-- Insert sample data for tv_stats
INSERT INTO public.tv_stats (value, label, order_index) VALUES
('500+', 'Productions', 1),
('50M+', 'Viewers Reached', 2),
('100+', 'Channels', 3),
('24/7', 'Broadcasting', 4);