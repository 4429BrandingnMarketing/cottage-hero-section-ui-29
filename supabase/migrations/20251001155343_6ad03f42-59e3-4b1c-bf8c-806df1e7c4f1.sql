-- Drop the existing public read policy for empire_metrics
DROP POLICY IF EXISTS "Allow public read access to empire_metrics" ON public.empire_metrics;

-- Create a new policy that requires authentication
CREATE POLICY "Authenticated users can read empire_metrics"
ON public.empire_metrics
FOR SELECT
TO authenticated
USING (true);