import Link from 'next/link'
import NewsletterSignup from './newsletter-signup'

const Footer = () => (
  <footer className='w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden'>
    {/* Background decoration */}
    <div className='absolute inset-0 opacity-10'>
      <div className='absolute top-5 sm:top-10 left-5 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 bg-yellow-400 rounded-full blur-xl'></div>
      <div className='absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-20 sm:w-40 h-20 sm:h-40 bg-red-400 rounded-full blur-2xl'></div>
      <div className='absolute top-16 sm:top-32 right-16 sm:right-32 w-12 sm:w-24 h-12 sm:h-24 bg-blue-400 rounded-full blur-lg'></div>
    </div>

    {/* Sticky app download bar (mobile) - Coming Soon */}
    <div className='fixed bottom-0 left-0 w-full bg-gradient-to-r from-yellow-400 to-red-500 text-black flex items-center justify-center gap-2 sm:gap-4 py-2 sm:py-3 z-40 md:hidden shadow-lg'>
      <div className='flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-black/20 text-white font-bold cursor-not-allowed opacity-75 text-xs sm:text-sm'>
        📱 <span className='hidden xs:inline'>App Store</span> (Soon)
      </div>
      <div className='flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-black/20 text-white font-bold cursor-not-allowed opacity-75 text-xs sm:text-sm'>
        📱 <span className='hidden xs:inline'>Google Play</span> (Soon)
      </div>
    </div>

    <div className='relative z-10 pt-16 pb-8 mb-16 md:mb-0'>
      {/* Main footer content */}
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Top section with logo and description */}
        <div className='text-center mb-8 sm:mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
            <span className='bg-gradient-to-r from-yellow-400 via-red-500 to-blue-400 bg-clip-text text-transparent'>
              TindaMo
            </span>
          </h2>
          <p className='text-blue-200 text-base sm:text-lg max-w-2xl mx-auto mb-6 px-4'>
            Ang numero unong hyper-local marketplace para sa mga Pinoy. Tinda,
            trade, bid - lahat sa inyong kalapit-bahay!
          </p>
          <div className='flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm px-4'>
            <span className='bg-green-500/20 text-green-300 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap'>
              ✅ Verified Safe
            </span>
            <span className='bg-blue-500/20 text-blue-300 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap'>
              🇵🇭 Proudly Filipino
            </span>
            <span className='bg-purple-500/20 text-purple-300 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap'>
              🚀 Community Driven
            </span>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12'>
          {/* Quick Links */}
          <div>
            <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-yellow-300'>
              Quick Links
            </h3>
            <nav className='flex flex-col gap-3'>
              <Link
                href='/about'
                className='text-blue-200 hover:text-yellow-300 transition-colors flex items-center gap-2'
              >
                <span>🏢</span> About TindaMo
              </Link>
              <Link
                href='/blog'
                className='text-blue-200 hover:text-yellow-300 transition-colors flex items-center gap-2'
              >
                <span>📝</span> Blog & Stories
              </Link>
              <Link
                href='/support'
                className='text-blue-200 hover:text-yellow-300 transition-colors flex items-center gap-2'
              >
                <span>💬</span> Support Center
              </Link>
              <Link
                href='/safety-tips'
                className='text-blue-200 hover:text-yellow-300 transition-colors flex items-center gap-2'
              >
                <span>🛡️</span> Safety Tips
              </Link>
            </nav>
          </div>

          {/* Trading Categories */}
          <div>
            <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-yellow-300'>
              Popular Categories
            </h3>
            <div className='flex flex-col gap-3'>
              <span className='text-blue-200 flex items-center gap-2'>
                <span>📱</span> Electronics
              </span>
              <span className='text-blue-200 flex items-center gap-2'>
                <span>🛋️</span> Furniture
              </span>
              <span className='text-blue-200 flex items-center gap-2'>
                <span>👕</span> Fashion
              </span>
              <span className='text-blue-200 flex items-center gap-2'>
                <span>📚</span> Books & Education
              </span>
              <span className='text-blue-200 flex items-center gap-2'>
                <span>🍳</span> Kitchen & Home
              </span>
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-yellow-300'>
              Join Our Community
            </h3>
            <div className='flex flex-col gap-3'>
              <a
                href='https://facebook.com/tindamo'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-200 hover:text-yellow-300 transition-colors flex items-center gap-2'
              >
                <span className='text-xl'>📘</span> Facebook Community
              </a>
              <a
                href='https://instagram.com/tindamo'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-200 hover:text-yellow-300 transition-colors flex items-center gap-2'
              >
                <span className='text-xl'>📸</span> Instagram Stories
              </a>
              <a
                href='https://twitter.com/tindamo'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-200 hover:text-yellow-300 transition-colors flex items-center gap-2'
              >
                <span className='text-xl'>🐦</span> Twitter Updates
              </a>
              <a
                href='https://tiktok.com/@tindamo'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-200 hover:text-yellow-300 transition-colors flex items-center gap-2'
              >
                <span className='text-xl'>🎵</span> TikTok Videos
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-yellow-300'>
              Stay Updated
            </h3>
            <p className='text-blue-200 text-sm mb-4'>
              Get deals, tips, at mga bagong features straight sa inyong inbox!
            </p>
            <NewsletterSignup />

            {/* Trust indicators */}
            <div className='mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20'>
              <div className='text-center'>
                <div className='text-2xl font-bold text-yellow-300'>
                  10,000+
                </div>
                <div className='text-xs text-blue-200'>Safe Trades</div>
              </div>
              <div className='flex justify-center gap-2 mt-2'>
                <span className='text-green-400'>⭐</span>
                <span className='text-green-400'>⭐</span>
                <span className='text-green-400'>⭐</span>
                <span className='text-green-400'>⭐</span>
                <span className='text-green-400'>⭐</span>
              </div>
              <div className='text-xs text-center text-blue-200 mt-1'>
                Trusted by Pinoys
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className='border-t border-white/20 pt-6 sm:pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            {/* Legal links */}
            <div className='flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-blue-200'>
              <Link
                href='/terms-of-service'
                className='hover:text-yellow-300 transition-colors'
              >
                Terms of Service
              </Link>
              <span className='hidden sm:inline'>•</span>
              <Link
                href='/privacy-policy'
                className='hover:text-yellow-300 transition-colors'
              >
                Privacy Policy
              </Link>
              <span className='hidden sm:inline'>•</span>
              <Link
                href='/community-guidelines'
                className='hover:text-yellow-300 transition-colors'
              >
                Community Guidelines
              </Link>
            </div>

            {/* Copyright and location */}
            <div className='text-center text-xs sm:text-sm text-blue-200'>
              <p>
                &copy; {new Date().getFullYear()} TindaMo. Made with ❤️ in the
                Philippines.
              </p>
              <p className='text-xs mt-1'>
                Serving Filipino communities nationwide 🇵🇭
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom wave decoration */}
    <div className='absolute bottom-0 left-0 w-full overflow-hidden'>
      <svg
        className='relative block w-full h-12'
        viewBox='0 0 1200 120'
        preserveAspectRatio='none'
      >
        <path
          d='M0,0 L0,60 Q300,120 600,60 T1200,60 L1200,0 Z'
          fill='rgba(0,0,0,0.1)'
        />
      </svg>
    </div>
  </footer>
)

export default Footer
