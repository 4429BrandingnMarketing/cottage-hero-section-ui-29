-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Update submissions table RLS policies - make admin-only
DROP POLICY IF EXISTS "Authenticated users can read submissions" ON public.submissions;

CREATE POLICY "Only admins can read submissions"
ON public.submissions FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update submissions"
ON public.submissions FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete submissions"
ON public.submissions FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Add write policies for artists table
CREATE POLICY "Admins can insert artists"
ON public.artists FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update artists"
ON public.artists FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete artists"
ON public.artists FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Add write policies for tracks table
CREATE POLICY "Admins can insert tracks"
ON public.tracks FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update tracks"
ON public.tracks FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete tracks"
ON public.tracks FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Add write policies for services table
CREATE POLICY "Admins can insert services"
ON public.services FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update services"
ON public.services FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete services"
ON public.services FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Add write policies for gallery_items table
CREATE POLICY "Admins can insert gallery_items"
ON public.gallery_items FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update gallery_items"
ON public.gallery_items FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete gallery_items"
ON public.gallery_items FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Add write policies for company_features table
CREATE POLICY "Admins can insert company_features"
ON public.company_features FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update company_features"
ON public.company_features FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete company_features"
ON public.company_features FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Add write policies for about_accordion table
CREATE POLICY "Admins can insert about_accordion"
ON public.about_accordion FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update about_accordion"
ON public.about_accordion FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete about_accordion"
ON public.about_accordion FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Add write policies for founder_profile table
CREATE POLICY "Admins can update founder_profile"
ON public.founder_profile FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Add write policies for company_info table
CREATE POLICY "Admins can update company_info"
ON public.company_info FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Allow users to view their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
USING (auth.uid() = user_id);

-- Only admins can manage roles
CREATE POLICY "Admins can manage all roles"
ON public.user_roles FOR ALL
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));