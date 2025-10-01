-- Drop the existing public read policy for division_metrics
DROP POLICY IF EXISTS "Allow public read access to division_metrics" ON public.division_metrics;

-- Create a new policy that requires authentication
CREATE POLICY "Authenticated users can read division_metrics"
ON public.division_metrics
FOR SELECT
TO authenticated
USING (true);