'use client'

import { useEffect, useState } from 'react'

interface WaitlistCountProps {
  className?: string
  showProgress?: boolean
  goalCount?: number
}

interface WaitlistData {
  count: number
  cached?: boolean
  error?: string
}

const WaitlistCount = ({
  className = '',
  showProgress = false,
  goalCount = 5000
}: WaitlistCountProps) => {
  const [waitlistData, setWaitlistData] = useState<WaitlistData>({ count: 0 })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        const response = await fetch('/api/waitlist/count')
        const data = await response.json()
        setWaitlistData(data)
      } catch (error) {
        console.error('Failed to fetch waitlist count:', error)
        setWaitlistData({ count: 0, error: 'Failed to load count' })
      } finally {
        setIsLoading(false)
      }
    }

    fetchWaitlistCount()
  }, [])

  const formatCount = (count: number) => {
    if (count === 0) return '0'
    if (count < 1000) return count.toString()
    return `${Math.floor(count / 100) / 10}k+`
  }

  const progressPercentage =
    goalCount > 0 ? Math.min((waitlistData.count / goalCount) * 100, 100) : 0

  if (isLoading) {
    return (
      <div className={className}>
        <div className='animate-pulse'>
          <div className='h-8 bg-gray-200 rounded w-16'></div>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      {showProgress ? (
        <div>
          <div className='flex items-center justify-between mb-4'>
            <span className='text-lg font-medium text-gray-700'>
              Waitlist Progress
            </span>
            <span className='text-2xl font-bold text-[#F5A623]'>
              {formatCount(waitlistData.count)}
            </span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-3 mb-2'>
            <div
              className='bg-gradient-to-r from-[#F5A623] to-[#F7931E] h-3 rounded-full transition-all duration-500'
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className='text-sm text-gray-500'>
            {goalCount > 0 &&
              `Goal: ${formatCount(goalCount)} early adopters • ${Math.round(
                progressPercentage
              )}% complete`}
          </p>
        </div>
      ) : (
        <span className='font-bold text-2xl text-[#F5A623]'>
          {formatCount(waitlistData.count)}
        </span>
      )}

      {waitlistData.error && (
        <p className='text-xs text-gray-400 mt-1'>
          {waitlistData.cached ? 'Showing cached data' : 'Using fallback data'}
        </p>
      )}
    </div>
  )
}

export default WaitlistCount
