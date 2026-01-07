-- Create Radio services table
CREATE TABLE public.radio_services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL DEFAULT 'Radio',
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create Radio stats table
CREATE TABLE public.radio_stats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  value TEXT NOT NULL,
  label TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on both tables
ALTER TABLE public.radio_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.radio_stats ENABLE ROW LEVEL SECURITY;

-- RLS policies for radio_services
CREATE POLICY "Anyone can read radio_services" ON public.radio_services FOR SELECT USING (true);
CREATE POLICY "Admins can insert radio_services" ON public.radio_services FOR INSERT WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update radio_services" ON public.radio_services FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete radio_services" ON public.radio_services FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS policies for radio_stats
CREATE POLICY "Anyone can read radio_stats" ON public.radio_stats FOR SELECT USING (true);
CREATE POLICY "Admins can insert radio_stats" ON public.radio_stats FOR INSERT WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update radio_stats" ON public.radio_stats FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete radio_stats" ON public.radio_stats FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));

-- Insert sample data for radio_services
INSERT INTO public.radio_services (title, description, icon, order_index) VALUES
('Podcast Production', 'Professional podcast creation and editing services', 'Podcast', 1),
('Audio Broadcasting', 'Live radio streaming and broadcasting solutions', 'Radio', 2),
('Voice Recording', 'High-quality voice-over and narration services', 'Mic', 3),
('Audio Distribution', 'Multi-platform podcast and audio distribution', 'Share2', 4);

-- Insert sample data for radio_stats
INSERT INTO public.radio_stats (value, label, order_index) VALUES
('200+', 'Podcasts', 1),
('10M+', 'Listeners', 2),
('50+', 'Channels', 3),
('24/7', 'Streaming', 4);