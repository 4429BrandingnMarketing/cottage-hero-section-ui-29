/*
  # Red Vision Music Database Schema

  1. New Tables
    - `artists`
      - `id` (uuid, primary key)
      - `name` (text, artist name)
      - `genre` (text, music genre)
      - `image_url` (text, artist image)
      - `streams` (text, monthly streams display)
      - `verified` (boolean, verification status)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `tracks`
      - `id` (uuid, primary key)
      - `title` (text, track title)
      - `artist` (text, artist name)
      - `duration` (text, track duration)
      - `streams` (text, stream count display)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `services`
      - `id` (uuid, primary key)
      - `title` (text, service title)
      - `description` (text, service description)
      - `price` (text, pricing display)
      - `features` (jsonb, array of feature strings)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `submissions`
      - `id` (uuid, primary key)
      - `artist_name` (text, submitted artist name)
      - `genre` (text, music genre)
      - `email` (text, contact email)
      - `description` (text, artist description)
      - `music_links` (text, links to music)
      - `status` (text, submission status: pending/approved/rejected)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public read access for artists, tracks, and services
    - Public insert access for submissions
    - Authenticated users can manage all content (admin access)
*/

CREATE TABLE IF NOT EXISTS artists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  genre text NOT NULL,
  image_url text NOT NULL,
  streams text NOT NULL DEFAULT '0',
  verified boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS tracks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  artist text NOT NULL,
  duration text NOT NULL,
  streams text NOT NULL DEFAULT '0',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  price text NOT NULL,
  features jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  artist_name text NOT NULL,
  genre text NOT NULL,
  email text NOT NULL,
  description text NOT NULL,
  music_links text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE tracks ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view artists"
  ON artists FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert artists"
  ON artists FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update artists"
  ON artists FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete artists"
  ON artists FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can view tracks"
  ON tracks FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert tracks"
  ON tracks FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update tracks"
  ON tracks FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete tracks"
  ON tracks FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can view services"
  ON services FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert services"
  ON services FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update services"
  ON services FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete services"
  ON services FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can view submissions"
  ON submissions FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can submit"
  ON submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update submissions"
  ON submissions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete submissions"
  ON submissions FOR DELETE
  TO authenticated
  USING (true);