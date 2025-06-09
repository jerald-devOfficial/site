'use client'

import {
  subscribeToNewsletter,
  type NewsletterResult
} from '@/app/actions/newsletter'
import { useState, useTransition } from 'react'

const NewsletterSignup = () => {
  const [result, setResult] = useState<NewsletterResult | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await subscribeToNewsletter(formData)
      setResult(result)

      // Clear success message after 5 seconds
      if (result.success) {
        setTimeout(() => setResult(null), 5000)
      }
    })
  }

  return (
    <form action={handleSubmit} className='flex gap-2'>
      <input
        type='email'
        name='email'
        placeholder='Get local deals & bidding alerts!'
        className='px-4 py-2 rounded-full border border-[#F5A623] text-sm min-w-0 flex-1'
        required
        disabled={isPending}
      />
      <button
        type='submit'
        disabled={isPending}
        className='px-4 py-2 rounded-full bg-[#F5A623] text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap'
      >
        {isPending ? 'Signing Up...' : 'Sign Up'}
      </button>

      {result && (
        <div
          className={`absolute top-full left-0 right-0 mt-2 text-xs p-2 rounded ${
            result.success
              ? 'text-green-700 bg-green-50 border border-green-200'
              : 'text-red-700 bg-red-50 border border-red-200'
          }`}
        >
          {result.message}
        </div>
      )}
    </form>
  )
}

export default NewsletterSignup
