-- Drop the existing public read policy for ai_agents
DROP POLICY IF EXISTS "Allow public read access to ai_agents" ON public.ai_agents;

-- Create a new policy that requires authentication
CREATE POLICY "Authenticated users can read ai_agents"
ON public.ai_agents
FOR SELECT
TO authenticated
USING (true);