-- Add validation constraints to submissions table for defense-in-depth
-- Using a trigger-based approach for time-independent validations

-- Add length and format constraints to submissions table
ALTER TABLE public.submissions
ADD CONSTRAINT submissions_artist_name_length CHECK (length(artist_name) BETWEEN 1 AND 100),
ADD CONSTRAINT submissions_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND length(email) <= 255),
ADD CONSTRAINT submissions_track_url_length CHECK (length(track_url) BETWEEN 1 AND 2000),
ADD CONSTRAINT submissions_message_length CHECK (message IS NULL OR length(message) <= 5000);