-- Create a secure SECURITY INVOKER function for client-side admin check
-- This only allows users to check their OWN admin status, preventing role enumeration
CREATE OR REPLACE FUNCTION public.check_my_admin_role()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = auth.uid()
      AND role = 'admin'::app_role
  )
$$;