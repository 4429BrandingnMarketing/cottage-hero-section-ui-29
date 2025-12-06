-- Add INSERT and DELETE policies for company_info table (admins only)
CREATE POLICY "Admins can insert company_info"
ON public.company_info
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete company_info"
ON public.company_info
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add INSERT and DELETE policies for founder_profile table (admins only)
CREATE POLICY "Admins can insert founder_profile"
ON public.founder_profile
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete founder_profile"
ON public.founder_profile
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Seed founder_profile with Jason Salvador's data
INSERT INTO public.founder_profile (name, title, quote, video_url)
VALUES (
  'Jason Salvador',
  '1500 or Nothin'' Alumni & Multi-Platinum Producer',
  'Collaborations including Kanye West, Jay-Z, Beyoncé, Bruno Mars, and Justin Bieber.',
  'https://res.cloudinary.com/da7s1izqw/video/upload/v1751346710/Aniamte_this_image_202506291716_wj8my_lpgovv.mp4'
)
ON CONFLICT DO NOTHING;