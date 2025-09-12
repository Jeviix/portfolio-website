-- Simple email notification setup using Supabase Edge Functions
-- This will send emails when new contact messages are inserted

-- First, we need to enable the http extension
CREATE EXTENSION IF NOT EXISTS http;

-- Create a function that will call our Edge Function
CREATE OR REPLACE FUNCTION send_contact_email_notification()
RETURNS TRIGGER AS $$
DECLARE
  response http_response;
BEGIN
  -- Call the Edge Function to send email
  SELECT * INTO response
  FROM http((
    'POST',
    'https://wbwfwpztgrwgtlgfjxov.supabase.co/functions/v1/send-contact-email',
    ARRAY[http_header('Content-Type', 'application/json'), http_header('Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true))],
    'application/json',
    json_build_object('record', row_to_json(NEW))::text
  ));
  
  -- Log the response (optional)
  RAISE NOTICE 'Email notification sent, status: %', response.status;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create the trigger
DROP TRIGGER IF EXISTS contact_email_trigger ON contact_messages;
CREATE TRIGGER contact_email_trigger
  AFTER INSERT ON contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION send_contact_email_notification();
