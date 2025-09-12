import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get the request body
    const { record } = await req.json()

    // Your email configuration
    const toEmail = 'alieddardoury@gmail.com'
    const fromEmail = 'noreply@yourdomain.com' // Replace with your domain
    const subject = `New Contact Form Message from ${record.name}`
    
    const emailBody = `
New contact form submission:

Name: ${record.name}
Email: ${record.email}
Subject: ${record.subject || 'Contact Form Submission'}
Message: ${record.message}

Submitted at: ${new Date(record.created_at).toLocaleString()}

---
This message was sent from your portfolio contact form.
    `

    // Option 1: Use Web3Forms (free, no signup required)
    const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Get from web3forms.com
        name: record.name,
        email: record.email,
        subject: subject,
        message: emailBody,
        from_name: 'Portfolio Contact Form',
        replyto: record.email,
      }),
    })

    if (!web3formsResponse.ok) {
      throw new Error(`Email failed: ${web3formsResponse.statusText}`)
    }

    const result = await web3formsResponse.json()
    
    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully', result }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})
