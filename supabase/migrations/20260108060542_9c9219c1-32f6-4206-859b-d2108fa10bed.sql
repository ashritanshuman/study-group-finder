-- Drop the public_profiles view since it exposes data without proper RLS
DROP VIEW IF EXISTS public.public_profiles;

-- The get_group_member_profile function already exists and properly enforces access control
-- It only returns profile data if the caller shares a group with the profile owner
-- No additional changes needed - the function-based approach is more secure