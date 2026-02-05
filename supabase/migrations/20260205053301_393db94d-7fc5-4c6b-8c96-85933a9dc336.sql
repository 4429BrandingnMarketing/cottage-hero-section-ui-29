-- Drop any remaining overly permissive RLS policies that allow any authenticated user to modify content
-- These policies may still exist from earlier migrations and need to be removed for security

-- Drop overly permissive policies from founder_profile
DROP POLICY IF EXISTS "Authenticated users can update founder profile" ON public.founder_profile;
DROP POLICY IF EXISTS "Authenticated users can insert founder profile" ON public.founder_profile;

-- Drop overly permissive policies from company_features  
DROP POLICY IF EXISTS "Authenticated users can insert company_features" ON public.company_features;
DROP POLICY IF EXISTS "Authenticated users can update company_features" ON public.company_features;
DROP POLICY IF EXISTS "Authenticated users can delete company_features" ON public.company_features;

-- Drop overly permissive policies from gallery_items
DROP POLICY IF EXISTS "Authenticated users can insert gallery_items" ON public.gallery_items;
DROP POLICY IF EXISTS "Authenticated users can update gallery_items" ON public.gallery_items;
DROP POLICY IF EXISTS "Authenticated users can delete gallery_items" ON public.gallery_items;

-- Drop overly permissive policies from about_accordion
DROP POLICY IF EXISTS "Authenticated users can insert about accordion" ON public.about_accordion;
DROP POLICY IF EXISTS "Authenticated users can update about accordion" ON public.about_accordion;
DROP POLICY IF EXISTS "Authenticated users can delete about accordion" ON public.about_accordion;

-- Drop overly permissive policies from company_info
DROP POLICY IF EXISTS "Authenticated users can insert company info" ON public.company_info;
DROP POLICY IF EXISTS "Authenticated users can update company info" ON public.company_info;