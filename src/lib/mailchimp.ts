interface MailchimpListStats {
  member_count: number
  unsubscribe_count: number
  cleaned_count: number
  member_count_since_send: number
  unsubscribe_count_since_send: number
  cleaned_count_since_send: number
  campaign_count: number
  campaign_last_sent: string
  merge_field_count: number
  avg_sub_rate: number
  avg_unsub_rate: number
  target_sub_rate: number
  open_rate: number
  click_rate: number
  last_sub_date: string
  last_unsub_date: string
}

interface MailchimpListResponse {
  id: string
  web_id: number
  name: string
  contact: object
  permission_reminder: string
  use_archive_bar: boolean
  campaign_defaults: object
  notify_on_subscribe: string
  notify_on_unsubscribe: string
  date_created: string
  list_rating: number
  email_type_option: boolean
  subscribe_url_short: string
  subscribe_url_long: string
  beamer_address: string
  visibility: string
  double_optin: boolean
  has_welcome: boolean
  marketing_permissions: boolean
  modules: unknown[]
  stats: MailchimpListStats
  _links: unknown[]
}

export async function getMailchimpWaitlistCount(): Promise<{
  count: number
  error?: string
}> {
  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
  const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID
  const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER

  if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER) {
    console.warn('Mailchimp credentials not configured, using fallback count')
    return { count: 0, error: 'Mailchimp not configured' }
  }

  try {
    const response = await fetch(
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}`,
      {
        method: 'GET',
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    )

    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ detail: 'Unknown error' }))
      console.error('Mailchimp API error:', error)
      return { count: 0, error: `Mailchimp API error: ${error.detail}` }
    }

    const data: MailchimpListResponse = await response.json()
    return { count: data.stats.member_count }
  } catch (error) {
    console.error('Error fetching Mailchimp data:', error)
    return { count: 0, error: 'Failed to fetch data' }
  }
}

export async function getMailchimpMemberPosition(email: string): Promise<{
  position: number
  error?: string
}> {
  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
  const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID
  const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER

  if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER) {
    return { position: 0, error: 'Mailchimp not configured' }
  }

  try {
    // Get all members to find position (this is expensive for large lists)
    // In production, you'd want a more efficient way to track positions
    const response = await fetch(
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members?count=10000&sort_field=timestamp_signup&sort_dir=ASC`,
      {
        method: 'GET',
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    )

    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ detail: 'Unknown error' }))
      return { position: 0, error: `Mailchimp API error: ${error.detail}` }
    }

    const data = await response.json()
    const memberIndex = data.members.findIndex(
      (member: { email_address: string }) =>
        member.email_address.toLowerCase() === email.toLowerCase()
    )

    return { position: memberIndex >= 0 ? memberIndex + 1 : 0 }
  } catch (error) {
    console.error('Error fetching member position:', error)
    return { position: 0, error: 'Failed to fetch position' }
  }
}
