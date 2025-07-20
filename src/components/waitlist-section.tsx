'use client'

import { Share2 } from 'lucide-react'
import WaitlistCount from './waitlist-count'
import WaitlistSignup from './waitlist-signup'

const WaitlistSection = () => {
  // Unified sharing function
  const shareTindaMo = () => {
    const shareData = {
      title: 'TindaMo - Hyper-local Filipino Marketplace',
      text: 'Join me on TindaMo - the first hyper-local Filipino marketplace! Trade, sell, and bid within your barangay. 🚀🇵🇭',
      url: window.location.href
    }

    // Use native sharing if available
    if (navigator.share) {
      navigator.share(shareData).catch((error) => {
        console.log('Error sharing:', error)
        // Fallback: copy to clipboard
        copyToClipboard()
      })
    } else {
      // Fallback: copy to clipboard
      copyToClipboard()
    }
  }

  // Fallback function to copy link to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard! Share it with your friends.')
    } catch (err) {
      console.log('Failed to copy: ', err)
      // Final fallback: open in new tab
      window.open(window.location.href, '_blank')
    }
  }

  return (
    <section className='w-full bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-16 sm:py-24 relative overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-20 w-40 h-40 bg-orange-400 rounded-full blur-2xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-400 rounded-full blur-xl'></div>
      </div>

      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-yellow-200 shadow-sm'>
            <span className='animate-pulse'>🚀</span>
            <span>Coming Soon to Your Area</span>
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            Be Among the{' '}
            <span className='bg-gradient-to-r from-[#F5A623] to-[#F7931E] bg-clip-text text-transparent'>
              First to Experience
            </span>{' '}
            TindaMo
          </h2>
          <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
            Join thousands of Filipinos who are already waiting to trade, sell,
            and discover amazing deals in their local community. Get early
            access and exclusive perks when we launch in your area!
          </p>

          {/* Social proof - Updated with better icons and layout */}
          <div className='flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm sm:text-base text-gray-600 mb-8'>
            <div className='flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-sm'>
              <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center'>
                <span className='text-white text-sm'>👥</span>
              </div>
              <div className='text-left'>
                <div className='font-bold text-lg text-[#F5A623]'>
                  <WaitlistCount />
                </div>
                <div className='text-xs text-gray-500'>people waiting</div>
              </div>
            </div>
            <div className='flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-sm'>
              <div className='w-8 h-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center'>
                <span className='text-white text-sm'>🇵🇭</span>
              </div>
              <div className='text-left'>
                <div className='font-bold text-lg text-[#F5A623]'>Filipino</div>
                <div className='text-xs text-gray-500'>community focused</div>
              </div>
            </div>
            <div className='flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-sm'>
              <div className='w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center'>
                <span className='text-white text-sm'>⚡</span>
              </div>
              <div className='text-left'>
                <div className='font-bold text-lg text-[#F5A623]'>Early</div>
                <div className='text-xs text-gray-500'>access perks</div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
          {/* Left side - Benefits */}
          <div className='space-y-8'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              Why Join the Waitlist?
            </h3>

            <div className='space-y-6'>
              <div className='flex items-start gap-4 group hover:bg-white/50 p-4 rounded-xl transition-all duration-300'>
                <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#F5A623] to-[#F7931E] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform'>
                  1
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-2 flex items-center gap-2'>
                    <span className='text-green-600'>🎯</span>
                    Early Access
                  </h4>
                  <p className='text-gray-600'>
                    Be among the first to use TindaMo when we launch in your
                    area
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 group hover:bg-white/50 p-4 rounded-xl transition-all duration-300'>
                <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#F5A623] to-[#F7931E] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform'>
                  2
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-2 flex items-center gap-2'>
                    <span className='text-purple-600'>🎁</span>
                    Exclusive Perks
                  </h4>
                  <p className='text-gray-600'>
                    Get special discounts, free features, and VIP treatment
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 group hover:bg-white/50 p-4 rounded-xl transition-all duration-300'>
                <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#F5A623] to-[#F7931E] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform'>
                  3
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-2 flex items-center gap-2'>
                    <span className='text-blue-600'>🏗️</span>
                    Shape the Platform
                  </h4>
                  <p className='text-gray-600'>
                    Your feedback will directly influence TindaMo&apos;s
                    features and development. Help us build the perfect
                    marketplace for Filipino communities.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 group hover:bg-white/50 p-4 rounded-xl transition-all duration-300'>
                <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#F5A623] to-[#F7931E] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform'>
                  4
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-2 flex items-center gap-2'>
                    <span className='text-red-600'>🤝</span>
                    Community Building
                  </h4>
                  <p className='text-gray-600'>
                    Connect with like-minded Filipinos in your area and get
                    invited to exclusive community events and meetups.
                  </p>
                </div>
              </div>
            </div>

            {/* Progress indicator with real data */}
            <div className='mt-8 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg'>
              <WaitlistCount showProgress={true} goalCount={5000} />
            </div>
          </div>

          {/* Right side - Signup form */}
          <div className='bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden'>
            {/* Decorative elements */}
            <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full -translate-y-16 translate-x-16 opacity-50'></div>
            <div className='absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-red-100 to-pink-100 rounded-full translate-y-12 -translate-x-12 opacity-50'></div>

            <div className='relative z-10'>
              <div className='text-center mb-8'>
                <div className='w-16 h-16 bg-gradient-to-br from-[#F5A623] to-[#F7931E] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg'>
                  <span className='text-white text-2xl'>📝</span>
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                  Join the Waitlist
                </h3>
                <p className='text-gray-600'>
                  Get notified when TindaMo launches in your area
                </p>
              </div>

              <WaitlistSignup />

              <div className='mt-6 text-center'>
                <p className='text-xs text-gray-500 flex items-center justify-center gap-2'>
                  <span className='text-green-500'>🔒</span>
                  We respect your privacy. No spam, just updates about TindaMo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA with unified sharing button */}
        <div className='text-center mt-16'>
          <p className='text-gray-600 mb-6 text-lg'>
            Already joined? Share TindaMo with your friends!
          </p>
          <div className='flex justify-center'>
            <button
              onClick={shareTindaMo}
              className='group px-8 py-4 bg-gradient-to-r from-[#F5A623] to-[#F7931E] text-white rounded-2xl hover:from-[#F7931E] hover:to-[#F5A623] transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer font-semibold text-lg'
            >
              <Share2 className='w-6 h-6' />
              <span>Share TindaMo</span>
            </button>
          </div>
          <p className='text-sm text-gray-500 mt-4'>
            Share via your preferred app - Facebook, WhatsApp, Twitter,
            LinkedIn, or any other platform
          </p>
        </div>
      </div>
    </section>
  )
}

export default WaitlistSection
