-- Populate company_info table with about section data
INSERT INTO public.company_info (section, heading, subheading, video_url)
VALUES (
  'about',
  'Meet Jason Salvador',
  '1500 or Nothin'' Alumni & Multi-Platinum Producer with collaborations including Kanye West, Jay-Z, Beyoncé, Bruno Mars, and Justin Bieber.',
  'https://res.cloudinary.com/da7s1izqw/video/upload/v1751346710/Aniamte_this_image_202506291716_wj8my_lpgovv.mp4'
)
ON CONFLICT DO NOTHING;