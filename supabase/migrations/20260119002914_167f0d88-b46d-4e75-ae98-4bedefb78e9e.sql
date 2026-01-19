-- Update marketing_benefits with real example URLs pointing to relevant industry resources
UPDATE public.marketing_benefits 
SET link = 'https://www.hubspot.com/products/marketing/marketing-automation' 
WHERE benefit = 'AI-Powered Campaign Optimization';

UPDATE public.marketing_benefits 
SET link = 'https://business.google.com/us/google-ads/' 
WHERE benefit = 'Multi-Platform Advertising';

UPDATE public.marketing_benefits 
SET link = 'https://influencermarketinghub.com/' 
WHERE benefit = 'Influencer Partnership Network';

UPDATE public.marketing_benefits 
SET link = 'https://www.canva.com/designschool/' 
WHERE benefit = 'Content Creation Studio';

UPDATE public.marketing_benefits 
SET link = 'https://analytics.google.com/' 
WHERE benefit = 'Real-Time Performance Dashboards';

UPDATE public.marketing_benefits 
SET link = 'https://www.salesforce.com/products/service-cloud/' 
WHERE benefit = 'Dedicated Account Management';