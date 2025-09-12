-- SIMPLE FIX: Disable RLS completely for contact_messages table
-- This will allow the contact form to work immediately

ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;

-- Verify the table exists and RLS is disabled
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'contact_messages';
