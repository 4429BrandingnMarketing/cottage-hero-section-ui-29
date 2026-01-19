-- Add link column to marketing_benefits table for external URLs
ALTER TABLE public.marketing_benefits
ADD COLUMN link TEXT DEFAULT NULL;

-- Update existing benefits with example links
UPDATE public.marketing_benefits SET link = 'https://example.com/ai-campaign-optimization' WHERE benefit = 'AI-Powered Campaign Optimization';
UPDATE public.marketing_benefits SET link = 'https://example.com/multi-platform-advertising' WHERE benefit = 'Multi-Platform Advertising';
UPDATE public.marketing_benefits SET link = 'https://example.com/influencer-partnerships' WHERE benefit = 'Influencer Partnership Network';
UPDATE public.marketing_benefits SET link = 'https://example.com/content-creation' WHERE benefit = 'Content Creation Studio';
UPDATE public.marketing_benefits SET link = 'https://example.com/performance-dashboards' WHERE benefit = 'Real-Time Performance Dashboards';
UPDATE public.marketing_benefits SET link = 'https://example.com/account-management' WHERE benefit = 'Dedicated Account Management';