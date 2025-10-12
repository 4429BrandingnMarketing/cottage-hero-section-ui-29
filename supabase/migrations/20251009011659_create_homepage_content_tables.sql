/*
  # Homepage Content Management Schema

  1. New Tables
    - `founder_profile`
      - `id` (uuid, primary key)
      - `name` (text, founder name)
      - `title` (text, founder title/role)
      - `quote` (text, main quote)
      - `bio` (text, detailed bio)
      - `video_url` (text, profile video)
      - `image_url` (text, profile image)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `company_features`
      - `id` (uuid, primary key)
      - `title` (text, feature title)
      - `icon` (text, icon name)
      - `order_index` (integer, display order)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `gallery_items`
      - `id` (uuid, primary key)
      - `title` (text, media title)
      - `media_url` (text, image or video URL)
      - `media_type` (text, 'image' or 'video')
      - `description` (text, optional description)
      - `order_index` (integer, display order)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `about_accordion`
      - `id` (uuid, primary key)
      - `title` (text, accordion item title)
      - `content` (text, accordion content)
      - `order_index` (integer, display order)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `company_info`
      - `id` (uuid, primary key)
      - `section` (text, section identifier)
      - `heading` (text, section heading)
      - `subheading` (text, section subheading)
      - `video_url` (text, background video)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public read access for all content
    - Authenticated users can manage all content (admin access)
*/

CREATE TABLE IF NOT EXISTS founder_profile (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT 'Jason Salvador',
  title text NOT NULL DEFAULT 'Founder & Visionary',
  quote text NOT NULL,
  bio text NOT NULL,
  video_url text,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS company_features (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  icon text NOT NULL DEFAULT 'Star',
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS gallery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  media_url text NOT NULL,
  media_type text NOT NULL DEFAULT 'image',
  description text,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS about_accordion (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS company_info (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section text NOT NULL UNIQUE,
  heading text NOT NULL,
  subheading text NOT NULL,
  video_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE founder_profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE company_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_accordion ENABLE ROW LEVEL SECURITY;
ALTER TABLE company_info ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view founder profile"
  ON founder_profile FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can update founder profile"
  ON founder_profile FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can insert founder profile"
  ON founder_profile FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view company features"
  ON company_features FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert company features"
  ON company_features FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update company features"
  ON company_features FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete company features"
  ON company_features FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can view gallery items"
  ON gallery_items FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert gallery items"
  ON gallery_items FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update gallery items"
  ON gallery_items FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete gallery items"
  ON gallery_items FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can view about accordion"
  ON about_accordion FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert about accordion"
  ON about_accordion FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update about accordion"
  ON about_accordion FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete about accordion"
  ON about_accordion FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can view company info"
  ON company_info FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert company info"
  ON company_info FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update company info"
  ON company_info FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

INSERT INTO founder_profile (name, title, quote, bio, video_url)
VALUES (
  'Jason Salvador',
  'Founder & Visionary',
  'AI amplifies human stories rather than replacing human creativity. We''re creating the future where technology enhances authentic cultural narratives.',
  'From music producer to AI-entertainment pioneer, Jason''s journey began at Will Smith''s Overbrook Entertainment, rising from intern to executive at age 18. His Grammy-nominated work with Lupe Fiasco and collaborations with 1500 or Nothin shaped his industry credentials before the pandemic catalyzed his revolutionary vision.',
  'https://res.cloudinary.com/da7s1izqw/video/upload/v1751346384/It_shoudl_levitate_202506291707_k7ajz_wxrevo.mp4'
) ON CONFLICT DO NOTHING;

INSERT INTO company_features (title, icon, order_index)
VALUES
  ('Grammy-Affiliated', 'Music', 1),
  ('AI-Enhanced', 'Brain', 2),
  ('Artist Partnerships', 'Users', 3),
  ('Tech Innovation', 'Zap', 4),
  ('Content Creation', 'Mic', 5),
  ('Cultural Impact', 'Star', 6)
ON CONFLICT DO NOTHING;

INSERT INTO about_accordion (title, content, order_index)
VALUES
  ('Jason Salvador: The Visionary Founder', 'From music producer to AI-entertainment pioneer, Jason''s journey began at Will Smith''s Overbrook Entertainment, rising from intern to executive at age 18. His Grammy-nominated work with Lupe Fiasco and collaborations with 1500 or Nothin shaped his industry credentials before the pandemic catalyzed his revolutionary vision.', 1),
  ('Grammy-Affiliated Music Excellence', 'Red Vision Music features Diamond-selling Grammy-winner My Guy Mars (1500 or Nothin founding member), City High''s Ryan Toby, prolific songwriter James Fauntleroy, and emerging stars like Dat Boi H.O.P. We create true artist partnerships, not traditional contracts.', 2),
  ('AI Amplifies Human Stories', 'Our core philosophy centers on AI as an amplification tool that enhances artistic expression rather than replacing human creativity. We maintain authentic cultural narratives while leveraging technology for enhanced efficiency and reach.', 3),
  ('Six Integrated Creative Divisions', 'From Red Vision Music''s Grammy-affiliated record label to GiFTD N'' PrVLGD''s tech-integrated fashion, each division leverages AI to enhance human creativity while preserving cultural authenticity and independent artistry.', 4),
  ('Pioneering Partnership-Centric Model', 'Unlike traditional labels that sign artists, we make them true partners with shared creative control and financial success. Our AI-enhanced approach delivers major-label quality while preserving independent vision and cultural authenticity.', 5)
ON CONFLICT DO NOTHING;

INSERT INTO company_info (section, heading, subheading, video_url)
VALUES
  ('overview', 'Revolutionary AI-powered entertainment studio amplifying human creativity across music, fashion, and digital experiences', 'Overview', 'https://res.cloudinary.com/da7s1izqw/video/upload/v1751346384/It_shoudl_levitate_202506291707_k7ajz_wxrevo.mp4'),
  ('about', 'Redefining Entertainment Through AI-Human Collaboration', 'ABOUT US', 'https://res.cloudinary.com/da7s1izqw/video/upload/v1751346710/Aniamte_this_image_202506291716_wj8my_lpgovv.mp4'),
  ('gallery', 'Creative Excellence Gallery', 'Gallery', 'https://res.cloudinary.com/da7s1izqw/video/upload/v1751346494/Animate_this_image_202506291634_dcwn5_wgvkba.mp4')
ON CONFLICT (section) DO UPDATE SET
  heading = EXCLUDED.heading,
  subheading = EXCLUDED.subheading,
  video_url = EXCLUDED.video_url;