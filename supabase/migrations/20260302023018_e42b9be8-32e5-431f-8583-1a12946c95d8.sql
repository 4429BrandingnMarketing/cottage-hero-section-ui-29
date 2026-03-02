
-- Create tv_portfolio table for portfolio items
CREATE TABLE public.tv_portfolio (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  category text NOT NULL,
  year text NOT NULL,
  image_url text NOT NULL,
  video_url text,
  aspect text NOT NULL DEFAULT 'col-span-1 row-span-1',
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.tv_portfolio ENABLE ROW LEVEL SECURITY;

-- RLS policies
CREATE POLICY "Anyone can read tv_portfolio" ON public.tv_portfolio
  FOR SELECT USING (true);

CREATE POLICY "Admins can insert tv_portfolio" ON public.tv_portfolio
  FOR INSERT WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update tv_portfolio" ON public.tv_portfolio
  FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete tv_portfolio" ON public.tv_portfolio
  FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));

-- Seed with existing hardcoded data
INSERT INTO public.tv_portfolio (title, category, year, image_url, video_url, aspect, order_index) VALUES
  ('Urban Pulse', 'Music Video', '2025', '/assets/portfolio-urban-pulse.jpg', 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1', 'col-span-2 row-span-2', 0),
  ('The Journey Within', 'Documentary', '2025', '/assets/portfolio-journey-within.jpg', 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1', 'col-span-1 row-span-1', 1),
  ('Neon Nights', 'Commercial', '2024', '/assets/portfolio-neon-nights.jpg', 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1', 'col-span-1 row-span-1', 2),
  ('Breaking Ground', 'Interview Series', '2024', '/assets/portfolio-breaking-ground.jpg', 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1', 'col-span-1 row-span-1', 3),
  ('Velocity', 'Brand Film', '2024', '/assets/portfolio-velocity.jpg', 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1', 'col-span-1 row-span-1', 4),
  ('Echoes', 'Short Film', '2023', '/assets/portfolio-echoes.jpg', 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1', 'col-span-2 row-span-1', 5);
