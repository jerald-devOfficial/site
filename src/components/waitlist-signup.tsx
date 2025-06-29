'use client'

import { joinWaitlist, type WaitlistResult } from '@/app/actions/waitlist'
import { useState, useTransition } from 'react'

interface WaitlistSignupProps {
  variant?: 'compact' | 'full'
  className?: string
}

const WaitlistSignup = ({
  variant = 'full',
  className = ''
}: WaitlistSignupProps) => {
  const [result, setResult] = useState<WaitlistResult | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await joinWaitlist(formData)
      setResult(result)

      // Clear success message after 8 seconds
      if (result.success) {
        setTimeout(() => setResult(null), 8000)
      }
    })
  }

  if (variant === 'compact') {
    return (
      <div className={`relative ${className}`}>
        <form action={handleSubmit} className='space-y-2'>
          <div className='flex gap-2'>
            <div className='flex-1'>
              <label className='block text-xs font-medium text-blue-200 mb-1'>
                First Name
              </label>
              <input
                type='text'
                name='firstName'
                placeholder='First name'
                className='w-full px-3 py-2 rounded-full border border-[#F5A623] text-xs text-gray-900 placeholder-gray-500'
                required
                disabled={isPending}
              />
            </div>
            <div className='flex-1'>
              <label className='block text-xs font-medium text-blue-200 mb-1'>
                Last Name
              </label>
              <input
                type='text'
                name='lastName'
                placeholder='Last name'
                className='w-full px-3 py-2 rounded-full border border-[#F5A623] text-xs text-gray-900 placeholder-gray-500'
                required
                disabled={isPending}
              />
            </div>
          </div>
          <div>
            <label className='block text-xs font-medium text-blue-200 mb-1'>
              Email Address
            </label>
            <input
              type='email'
              name='email'
              placeholder='Your email address'
              className='w-full px-3 py-2 rounded-full border border-[#F5A623] text-xs text-gray-900 placeholder-gray-500'
              required
              disabled={isPending}
            />
          </div>
          <div>
            <label className='block text-xs font-medium text-blue-200 mb-1'>
              City/Municipality
            </label>
            <input
              type='text'
              name='location'
              placeholder='e.g., Quezon City, Makati'
              className='w-full px-3 py-2 rounded-full border border-[#F5A623] text-xs text-gray-900 placeholder-gray-500'
              required
              disabled={isPending}
            />
          </div>
          <button
            type='submit'
            disabled={isPending}
            className='w-full px-4 py-2 rounded-full bg-[#F5A623] text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed text-xs'
          >
            {isPending ? 'Joining...' : 'Join Waitlist'}
          </button>
        </form>

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
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <form action={handleSubmit} className='space-y-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              First Name *
            </label>
            <input
              type='text'
              name='firstName'
              placeholder='First name'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 outline-none transition-all text-gray-900 placeholder-gray-500'
              required
              disabled={isPending}
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Last Name *
            </label>
            <input
              type='text'
              name='lastName'
              placeholder='Last name'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 outline-none transition-all text-gray-900 placeholder-gray-500'
              required
              disabled={isPending}
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Email Address *
          </label>
          <input
            type='email'
            name='email'
            placeholder='Your email address'
            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 outline-none transition-all text-gray-900 placeholder-gray-500'
            required
            disabled={isPending}
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            City/Municipality *
          </label>
          <input
            type='text'
            name='location'
            placeholder='e.g., Quezon City, Makati, Cebu City'
            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 outline-none transition-all text-gray-900 placeholder-gray-500'
            required
            disabled={isPending}
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            What interests you most? (Optional)
          </label>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
            {[
              'Electronics',
              'Furniture',
              'Fashion',
              'Books',
              'Sports',
              'Home & Garden'
            ].map((interest) => (
              <label key={interest} className='flex items-center gap-2 text-sm'>
                <input
                  type='checkbox'
                  name='interests'
                  value={interest}
                  className='rounded border-gray-300 text-[#F5A623] focus:ring-[#F5A623]'
                  disabled={isPending}
                />
                {interest}
              </label>
            ))}
          </div>
        </div>

        <button
          type='submit'
          disabled={isPending}
          className='w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#F5A623] to-[#F7931E] text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:from-[#F7931E] hover:to-[#F5A623] transition-all duration-200 shadow-lg hover:shadow-xl'
        >
          {isPending
            ? 'Joining Waitlist...'
            : '🚀 Join the Waitlist - Get Early Access!'}
        </button>
      </form>

      {result && (
        <div
          className={`mt-4 p-4 rounded-lg ${
            result.success
              ? 'text-green-800 bg-green-50 border border-green-200'
              : 'text-red-800 bg-red-50 border border-red-200'
          }`}
        >
          <div className='font-medium'>
            {result.success ? '🎉 Success!' : '❌ Error'}
          </div>
          <div className='text-sm mt-1'>{result.message}</div>
          {result.success && result.waitlistNumber && (
            <div className='mt-2 text-xs text-green-600'>
              Your waitlist number: #{result.waitlistNumber}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default WaitlistSignup
