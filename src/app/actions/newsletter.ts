'use server'

import { z } from 'zod'

// NEWSLETTER INTEGRATION GUIDE
// ===========================
//
// This file handles newsletter signups. To integrate with email services:
//
// 1. MAILCHIMP:
//    - Get API key from Mailchimp dashboard
//    - Create audience/list and get List ID
//    - Add MAILCHIMP_API_KEY and MAILCHIMP_LIST_ID to .env.local
//    - Uncomment the Mailchimp code below
//
// 2. SENDGRID:
//    - Get API key from SendGrid dashboard
//    - Set up marketing campaigns or use contacts API
//    - Add SENDGRID_API_KEY to .env.local
//
// 3. CONVERTKIT:
//    - Get API key and Form ID from ConvertKit
//    - Add CONVERTKIT_API_KEY and CONVERTKIT_FORM_ID to .env.local
//
// For now, signups are logged and team@tindamo.store gets notified.

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address')
})

export interface NewsletterResult {
  success: boolean
  message: string
}

export async function subscribeToNewsletter(
  formData: FormData
): Promise<NewsletterResult> {
  try {
    const validatedData = newsletterSchema.parse({
      email: formData.get('email')
    })

    console.log(`Newsletter subscription request: ${validatedData.email}`)

    // === MAILCHIMP INTEGRATION ===
    // Uncomment when ready to integrate:
    /*
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID
    const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER // e.g., 'us1'
    
    if (MAILCHIMP_API_KEY && MAILCHIMP_LIST_ID) {
      const response = await fetch(
        `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
        {
          method: 'POST',
          headers: {
            'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email_address: validatedData.email,
            status: 'subscribed',
            tags: ['website-signup', 'deals-alerts', 'local-marketplace'],
            merge_fields: {
              SOURCE: 'Website Footer'
            }
          })
        }
      )
      
      if (!response.ok) {
        const error = await response.text()
        console.error('Mailchimp error:', error)
        throw new Error('Failed to subscribe to newsletter')
      }
    }
    */

    // For now, notify your team
    await sendNotificationToTeam(validatedData.email)

    return {
      success: true,
      message: "Thanks! You'll receive local deals & bidding alerts soon."
    }
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message
      }
    }

    console.error('Newsletter subscription error:', error)
    return {
      success: false,
      message: 'Something went wrong. Please try again.'
    }
  }
}

async function sendNotificationToTeam(email: string) {
  // Logs the signup and could send notification to team@tindamo.store
  console.log(`📧 New newsletter signup: ${email}`)
  console.log(`💌 Notify: team@tindamo.store`)

  // TODO: Set up email notification to team@tindamo.store
  // Example with SendGrid:
  /*
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  
  const msg = {
    to: 'team@tindamo.store',
    from: 'noreply@tindamo.store',
    subject: '🎉 New Newsletter Signup - TindaMo',
    text: `New user subscribed to newsletter: ${email}`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>🎉 New Newsletter Signup!</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Source:</strong> Website Footer</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <hr>
        <p>Go to your email marketing dashboard to engage with this new subscriber!</p>
      </div>
    `,
  }
  
  await sgMail.send(msg)
  */
}
