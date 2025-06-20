'use server'

import { z } from 'zod'

// WAITLIST INTEGRATION GUIDE
// ==========================
//
// This file handles waitlist signups. To integrate with email services:
//
// 1. MAILCHIMP:
//    - Get API key from Mailchimp dashboard
//    - Create audience/list and get List ID
//    - Add MAILCHIMP_API_KEY and MAILCHIMP_LIST_ID to .env.local

const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(1, 'Please enter your name'),
  location: z.string().min(1, 'Please enter your location'),
  interests: z.array(z.string()).optional()
})

export interface WaitlistResult {
  success: boolean
  message: string
  waitlistNumber?: number
}

export async function joinWaitlist(
  formData: FormData
): Promise<WaitlistResult> {
  try {
    const validatedData = waitlistSchema.parse({
      email: formData.get('email'),
      name: formData.get('name'),
      location: formData.get('location'),
      interests: formData.getAll('interests')
    })

    console.log(
      `Waitlist signup request: ${validatedData.email} from ${validatedData.location}`
    )

    // Generate a waitlist number (in a real app, this would come from a database)
    const waitlistNumber = Math.floor(Math.random() * 1000) + 1

    // === MAILCHIMP INTEGRATION ===
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID
    const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER // e.g., 'us1'

    if (MAILCHIMP_API_KEY && MAILCHIMP_LIST_ID && MAILCHIMP_SERVER) {
      try {
        const response = await fetch(
          `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
          {
            method: 'POST',
            headers: {
              Authorization: `apikey ${MAILCHIMP_API_KEY}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email_address: validatedData.email,
              status: 'subscribed',
              tags: ['waitlist', 'early-access', 'local-marketplace'],
              merge_fields: {
                FNAME: validatedData.name,
                LOCATION: validatedData.location,
                INTERESTS: validatedData.interests?.join(', ') || '',
                SOURCE: 'Website Waitlist'
              }
            })
          }
        )

        if (!response.ok) {
          const error = await response.json().catch(() => ({
            detail: 'An unknown error occurred with the subscription service.'
          }))
          console.error('Mailchimp API error:', error)

          // Provide a more user-friendly error message
          const errorMessage =
            error.title === 'Member Exists'
              ? 'This email address is already on our waitlist. Thank you!'
              : `Failed to subscribe: ${error.detail}`

          return {
            success: false,
            message: errorMessage
          }
        }

        // Also log to internal system as a backup
        await sendNotificationToTeam(validatedData, waitlistNumber)

        return {
          success: true,
          message: `🎉 Welcome to TindaMo! You're #${waitlistNumber} on our waitlist. We'll notify you when we launch in your area!`,
          waitlistNumber
        }
      } catch (e) {
        console.error(
          'Network or fetch error during Mailchimp subscription:',
          e
        )
        return {
          success: false,
          message:
            'Could not connect to the subscription service. Please try again later.'
        }
      }
    }

    // Fallback if Mailchimp is not configured
    console.warn(
      'Mailchimp environment variables not set. Falling back to local notification.'
    )
    await sendNotificationToTeam(validatedData, waitlistNumber)

    return {
      success: true,
      message: `🎉 (Dev Mode) Welcome to TindaMo! You're #${waitlistNumber} on our waitlist.`,
      waitlistNumber
    }
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message
      }
    }

    console.error('Waitlist signup error:', error)
    return {
      success: false,
      message: 'Something went wrong. Please try again.'
    }
  }
}

async function sendNotificationToTeam(
  data: {
    email: string
    name: string
    location: string
    interests?: string[]
  },
  waitlistNumber: number
) {
  // Logs the signup and could send notification to team@tindamo.store
  console.log(`📧 New waitlist signup: ${data.email} (#${waitlistNumber})`)
  console.log(`💌 Notify: team@tindamo.store`)
}
