import { getMailchimpWaitlistCount } from '@/lib/mailchimp'
import { NextResponse } from 'next/server'

// Cache the count for 5 minutes to avoid hitting Mailchimp API too frequently
let cachedCount: number | null = null
let cacheTimestamp: number = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes in milliseconds

export async function GET() {
  try {
    const now = Date.now()

    // Return cached count if it's still fresh
    if (cachedCount !== null && now - cacheTimestamp < CACHE_DURATION) {
      return NextResponse.json({
        count: cachedCount,
        cached: true,
        timestamp: cacheTimestamp
      })
    }

    // Fetch fresh count from Mailchimp
    const result = await getMailchimpWaitlistCount()

    if (result.error) {
      console.error('Failed to fetch waitlist count:', result.error)
      // Return last known count if available, otherwise 0
      return NextResponse.json({
        count: cachedCount || 0,
        error: result.error,
        cached: cachedCount !== null
      })
    }

    // Update cache
    cachedCount = result.count
    cacheTimestamp = now

    return NextResponse.json({
      count: result.count,
      cached: false,
      timestamp: cacheTimestamp
    })
  } catch (error) {
    console.error('API error fetching waitlist count:', error)
    return NextResponse.json(
      {
        count: cachedCount || 0,
        error: 'Internal server error',
        cached: cachedCount !== null
      },
      { status: 500 }
    )
  }
}
