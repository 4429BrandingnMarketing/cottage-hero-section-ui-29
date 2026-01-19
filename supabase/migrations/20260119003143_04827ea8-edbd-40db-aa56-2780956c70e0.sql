-- Add link column to technology_capabilities table
ALTER TABLE public.technology_capabilities
ADD COLUMN link TEXT DEFAULT NULL;

-- Add link column to radio_services table
ALTER TABLE public.radio_services
ADD COLUMN link TEXT DEFAULT NULL;