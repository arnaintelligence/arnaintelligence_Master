-- Add explicit restrictive policies to deny SELECT, UPDATE, DELETE for both tables
-- This makes the security posture explicit and prevents accidental exposure

-- For lead_magnet_signups: explicitly deny all read/update/delete operations
CREATE POLICY "No public read access to lead signups" 
ON public.lead_magnet_signups 
FOR SELECT 
USING (false);

CREATE POLICY "No public update access to lead signups" 
ON public.lead_magnet_signups 
FOR UPDATE 
USING (false);

CREATE POLICY "No public delete access to lead signups" 
ON public.lead_magnet_signups 
FOR DELETE 
USING (false);

-- For contact_submissions: explicitly deny all read/update/delete operations
CREATE POLICY "No public read access to contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (false);

CREATE POLICY "No public update access to contact submissions" 
ON public.contact_submissions 
FOR UPDATE 
USING (false);

CREATE POLICY "No public delete access to contact submissions" 
ON public.contact_submissions 
FOR DELETE 
USING (false);