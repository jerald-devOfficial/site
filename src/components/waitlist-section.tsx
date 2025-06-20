import WaitlistSignup from './waitlist-signup'

const WaitlistSection = () => {
  return (
    <section className='w-full bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-16 sm:py-24'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4'>
            🚀 Coming Soon to Your Area
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

          {/* Social proof */}
          <div className='flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm text-gray-600 mb-8'>
            <div className='flex items-center gap-2'>
              <span className='text-2xl'>👥</span>
              <span>
                <strong>2,500+</strong> people waiting
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-2xl'>📍</span>
              <span>
                <strong>15+</strong> cities covered
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-2xl'>⭐</span>
              <span>
                <strong>4.9/5</strong> expected rating
              </span>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left side - Benefits */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              Why Join the Waitlist?
            </h3>

            <div className='space-y-4'>
              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#F5A623] to-[#F7931E] rounded-full flex items-center justify-center text-white font-bold text-lg'>
                  1
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    Early Access
                  </h4>
                  <p className='text-gray-600'>
                    Be among the first to use TindaMo when we launch in your
                    area
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#F5A623] to-[#F7931E] rounded-full flex items-center justify-center text-white font-bold text-lg'>
                  2
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    Exclusive Perks
                  </h4>
                  <p className='text-gray-600'>
                    Get special discounts, free features, and VIP treatment
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#F5A623] to-[#F7931E] rounded-full flex items-center justify-center text-white font-bold text-lg'>
                  3
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    Shape the Future
                  </h4>
                  <p className='text-gray-600'>
                    Help us build the perfect marketplace for your community
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#F5A623] to-[#F7931E] rounded-full flex items-center justify-center text-white font-bold text-lg'>
                  4
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    Priority Support
                  </h4>
                  <p className='text-gray-600'>
                    Get dedicated customer support when you need help
                  </p>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className='mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100'>
              <div className='flex items-center justify-between mb-4'>
                <span className='text-sm font-medium text-gray-600'>
                  Current Waitlist
                </span>
                <span className='text-2xl font-bold text-[#F5A623]'>
                  2,500+
                </span>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-2'>
                <div
                  className='bg-gradient-to-r from-[#F5A623] to-[#F7931E] h-2 rounded-full'
                  style={{ width: '75%' }}
                ></div>
              </div>
              <p className='text-xs text-gray-500 mt-2'>
                Goal: 5,000 early adopters
              </p>
            </div>
          </div>

          {/* Right side - Signup form */}
          <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-100'>
            <div className='text-center mb-6'>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                Join the Waitlist
              </h3>
              <p className='text-gray-600'>
                Get notified when TindaMo launches in your area
              </p>
            </div>

            <WaitlistSignup />

            <div className='mt-6 text-center'>
              <p className='text-xs text-gray-500'>
                🔒 We respect your privacy. No spam, just updates about TindaMo.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-16'>
          <p className='text-gray-600 mb-4'>
            Already joined? Share TindaMo with your friends!
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <button className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2'>
              <span>📘</span> Share on Facebook
            </button>
            <button className='px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2'>
              <span>💬</span> Share on WhatsApp
            </button>
            <button className='px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors flex items-center gap-2'>
              <span>🐦</span> Share on Twitter
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WaitlistSection
