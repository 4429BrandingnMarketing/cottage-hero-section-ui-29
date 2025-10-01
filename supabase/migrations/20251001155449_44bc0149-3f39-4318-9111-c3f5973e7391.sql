-- Drop the existing public read policy for business_divisions
DROP POLICY IF EXISTS "Allow public read access to business_divisions" ON public.business_divisions;

-- Create a new policy that requires authentication
CREATE POLICY "Authenticated users can read business_divisions"
ON public.business_divisions
FOR SELECT
TO authenticated
USING (true);