-- Create storage bucket for admin uploads
INSERT INTO storage.buckets (id, name, public) VALUES ('admin-uploads', 'admin-uploads', true);

-- Policy: Admins can upload files
CREATE POLICY "Admins can upload files"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'admin-uploads' 
  AND (SELECT has_role(auth.uid(), 'admin'))
);

-- Policy: Admins can update their uploads
CREATE POLICY "Admins can update files"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'admin-uploads' 
  AND (SELECT has_role(auth.uid(), 'admin'))
);

-- Policy: Admins can delete files
CREATE POLICY "Admins can delete files"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'admin-uploads' 
  AND (SELECT has_role(auth.uid(), 'admin'))
);

-- Policy: Anyone can view uploaded files (public bucket)
CREATE POLICY "Anyone can view admin uploads"
ON storage.objects
FOR SELECT
USING (bucket_id = 'admin-uploads');