import Link from 'next/link'

const Hero = () => (
  <section className='w-full min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-red-800 text-white relative overflow-hidden flex items-center'>
    {/* Enhanced animated background shapes */}
    <div className='absolute inset-0 opacity-20'>
      <div className='absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute top-32 right-20 w-40 h-40 bg-red-400 rounded-full blur-2xl animate-pulse delay-300'></div>
      <div className='absolute bottom-20 left-32 w-24 h-24 bg-blue-400 rounded-full blur-2xl animate-pulse delay-700'></div>
      <div className='absolute bottom-32 right-10 w-36 h-36 bg-green-400 rounded-full blur-3xl animate-pulse delay-500'></div>
      <div className='absolute top-1/2 left-1/3 w-20 h-20 bg-purple-400 rounded-full blur-xl animate-pulse delay-1000'></div>
    </div>

    {/* Main hero content */}
    <div className='relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
      {/* Pre-launch indicator */}
      <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium mb-8 border border-white/20 shadow-lg'>
        <span className='animate-pulse'>🚀</span>
        <span>Pre-Launch Phase • Join the Waitlist!</span>
      </div>

      {/* Main headline */}
      <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight'>
        <span className='block'>Tinda, Trade, Bid</span>
        <span className='block bg-gradient-to-r from-yellow-400 via-red-500 to-orange-400 bg-clip-text text-transparent'>
          Sa Inyong Kalapit-Bahay!
        </span>
      </h1>

      {/* Subtitle */}
      <p className='text-xl sm:text-2xl text-blue-200 max-w-4xl mx-auto mb-10 px-4 leading-relaxed'>
        Ang first-ever hyper-local marketplace para sa mga Pinoy! Trade gamit
        mo, sell extra mo, o mag-bid sa gusto mo – lahat within your barangay
        lang!
      </p>

      {/* Enhanced value proposition */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10 px-4'>
        <div className='group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105'>
          <div className='text-3xl mb-4 group-hover:scale-110 transition-transform'>
            🔄
          </div>
          <div className='font-semibold mb-2 text-lg'>Barter System</div>
          <div className='text-sm text-blue-200'>Trade without money</div>
        </div>
        <div className='group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105'>
          <div className='text-3xl mb-4 group-hover:scale-110 transition-transform'>
            ⚡
          </div>
          <div className='font-semibold mb-2 text-lg'>Bidding Hub</div>
          <div className='text-sm text-blue-200'>Win local auctions</div>
        </div>
        <div className='group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105'>
          <div className='text-3xl mb-4 group-hover:scale-110 transition-transform'>
            📍
          </div>
          <div className='font-semibold mb-2 text-lg'>Hyper-Local</div>
          <div className='text-sm text-blue-200'>In your neighborhood</div>
        </div>
      </div>

      {/* Enhanced call-to-action section */}
      <div className='max-w-2xl mx-auto mb-10'>
        <div className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-8 shadow-2xl'>
          <div className='w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg'>
            <span className='text-white text-2xl'>🎯</span>
          </div>
          <h3 className='text-2xl font-bold mb-3'>
            Ready to Transform Your Neighborhood Trading?
          </h3>
          <p className='text-blue-200 mb-4 text-lg'>
            Be among the first Filipinos to experience safe, local, and
            community-driven marketplace right in your area!
          </p>
        </div>
      </div>

      {/* Enhanced CTA Buttons */}
      <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 px-4'>
        <Link
          href='/waitlist'
          className='group w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-black bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-lg sm:text-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-400/25 text-center flex items-center justify-center gap-3'
        >
          <span className='text-2xl'>🚀</span>
          <span className='hidden sm:inline'>
            Join the Waitlist – Be Among the First!
          </span>
          <span className='sm:hidden'>Join Waitlist</span>
          <span className='group-hover:translate-x-1 transition-transform text-xl'>
            →
          </span>
        </Link>
        <button className='group w-full sm:w-auto px-6 py-4 rounded-2xl font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg flex items-center justify-center gap-3 hover:scale-105'>
          <span className='text-xl'>📱</span>
          <span>Paano Gumagana?</span>
        </button>
      </div>

      {/* Enhanced trust indicators with Filipino touch */}
      <div className='flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base text-blue-200 px-4'>
        <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20'>
          <span className='text-green-400 text-lg'>🛡️</span>
          <span className='whitespace-nowrap font-medium'>
            Safe & Secure Trading
          </span>
        </div>
        <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20'>
          <span className='text-yellow-400 text-lg'>⭐</span>
          <span className='whitespace-nowrap font-medium'>
            Verified Filipino Community
          </span>
        </div>
        <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20'>
          <span className='text-red-400 text-lg'>❤️</span>
          <span className='whitespace-nowrap font-medium'>
            Built for Kapamilya
          </span>
        </div>
      </div>
    </div>

    {/* Enhanced bottom wave decoration */}
    <div className='absolute bottom-0 left-0 w-full overflow-hidden'>
      <svg
        className='relative block w-full h-20'
        viewBox='0 0 1200 120'
        preserveAspectRatio='none'
      >
        <path
          d='M0,120 L0,60 Q300,0 600,60 T1200,60 L1200,120 Z'
          fill='#F9FAFB'
        />
      </svg>
    </div>
  </section>
)

export default Hero
