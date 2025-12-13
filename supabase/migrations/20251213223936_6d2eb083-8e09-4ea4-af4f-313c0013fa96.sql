-- Drop the existing restrictive insert policy and recreate as permissive
DROP POLICY IF EXISTS "Anyone can insert submissions" ON public.submissions;

CREATE POLICY "Anyone can insert submissions" 
ON public.submissions 
FOR INSERT 
TO public
WITH CHECK (true);