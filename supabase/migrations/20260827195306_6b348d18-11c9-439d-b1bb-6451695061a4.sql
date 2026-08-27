CREATE TABLE public.marketing_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  budget TEXT,
  goals TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.marketing_leads TO anon;
GRANT SELECT, INSERT ON public.marketing_leads TO authenticated;
GRANT ALL ON public.marketing_leads TO service_role;

ALTER TABLE public.marketing_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a marketing lead"
  ON public.marketing_leads FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(name) BETWEEN 1 AND 200
    AND length(email) BETWEEN 3 AND 320
    AND length(goals) BETWEEN 1 AND 5000
    AND (company IS NULL OR length(company) <= 200)
    AND (budget IS NULL OR length(budget) <= 100)
  );

CREATE POLICY "Admins can read marketing leads"
  ON public.marketing_leads FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));