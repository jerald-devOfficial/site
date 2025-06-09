import Image from 'next/image'

const Hero = () => (
  <section className='relative w-full min-h-[80vh] sm:min-h-[85vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white overflow-hidden'>
    {/* Background decoration */}
    <div className='absolute inset-0 opacity-10'>
      <div className='absolute top-5 sm:top-10 left-5 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 bg-yellow-400 rounded-full blur-xl'></div>
      <div className='absolute top-20 sm:top-32 right-10 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 bg-red-400 rounded-full blur-lg'></div>
      <div className='absolute bottom-10 sm:bottom-20 left-16 sm:left-32 w-20 sm:w-40 h-20 sm:h-40 bg-blue-400 rounded-full blur-2xl'></div>
      <div className='absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-14 sm:w-28 h-14 sm:h-28 bg-green-400 rounded-full blur-lg'></div>
    </div>

    {/* Animated Filipino pattern overlay */}
    <div className='absolute inset-0 opacity-5'>
      <svg
        className='w-full h-full'
        viewBox='0 0 400 400'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <pattern
            id='filipinoPattern'
            x='0'
            y='0'
            width='40'
            height='40'
            patternUnits='userSpaceOnUse'
          >
            <path d='M20,0 L40,20 L20,40 L0,20 Z' fill='currentColor' />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#filipinoPattern)' />
      </svg>
    </div>

    <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
      {/* Hero image with Filipino marketplace vibe */}
      <div className='mb-6 sm:mb-8 relative'>
        <div className='w-full max-w-3xl mx-auto h-48 sm:h-64 lg:h-72 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white/20 backdrop-blur-sm'>
          <Image
            src='/images/landing-hero.png'
            alt='Filipino neighborhood marketplace'
            fill
            className='object-cover'
            priority
            sizes='(max-width: 768px) 100vw, 75vw'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'></div>
          <div className='absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white'>
            <p className='text-xs sm:text-sm font-medium'>
              🏪 Your Local Filipino Marketplace
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className='absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-yellow-400 text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-bounce'>
          🇵🇭 Pinoy
        </div>
        <div className='absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse'>
          Mabuhay!
        </div>
      </div>

      {/* Main headline with Filipino flavor */}
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight px-2'>
        <span className='bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 bg-clip-text text-transparent'>
          TindaMo
        </span>
        <br />
        <span className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
          Tinda, Trade, Bid sa Inyong
        </span>
        <br />
        <span className='text-yellow-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
          Kalapit-Bahay! 🏘️
        </span>
      </h1>

      {/* Subtitle with Taglish */}
      <p className='text-lg sm:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4'>
        Ipagpalit ang hindi mo na kailangan, mag-bid sa gusto mo –
        <span className='text-yellow-300 font-semibold'>
          {' '}
          hyper-local, hassle-free
        </span>{' '}
        na marketplace para sa mga Pinoy!
      </p>

      {/* Enhanced search bar */}
      <div className='mb-6 sm:mb-8 max-w-2xl mx-auto px-4'>
        <div className='relative'>
          <input
            className='w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400 text-white placeholder-white/70 text-sm sm:text-lg shadow-xl'
            placeholder='Hanapin ang mga produkto o serbisyo malapit sa iyo...'
            aria-label='Paghahanap ng mga item o serbisyo'
          />
          <button className='absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-black px-3 sm:px-6 py-2 rounded-full font-bold transition-colors shadow-lg text-sm sm:text-base'>
            <span className='hidden sm:inline'>🔍 Hanap</span>
            <span className='sm:hidden'>🔍</span>
          </button>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4'>
        <a
          href='#join'
          className='group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-black bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-base sm:text-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-400/25 text-center'
        >
          <span className='flex items-center justify-center gap-2'>
            <span className='hidden sm:inline'>
              🚀 Sumali Na – I-list ang Unang Item mo sa 60 Seconds!
            </span>
            <span className='sm:hidden'>🚀 Sumali Na Ngayon!</span>
            <span className='group-hover:translate-x-1 transition-transform'>
              →
            </span>
          </span>
        </a>
        <button className='w-full sm:w-auto px-4 sm:px-6 py-3 rounded-full font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-colors backdrop-blur-sm text-sm sm:text-base'>
          📱 Paano Gumagana?
        </button>
      </div>

      {/* Trust indicators with Filipino touch */}
      <div className='flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm text-blue-100 px-4'>
        <div className='flex items-center gap-1 sm:gap-2'>
          <span className='text-green-400'>✅</span>
          <span className='whitespace-nowrap'>10,000+ Ligtas na Palitan</span>
        </div>
        <div className='flex items-center gap-1 sm:gap-2'>
          <span className='text-yellow-400'>⭐</span>
          <span className='whitespace-nowrap'>Verified Filipino Sellers</span>
        </div>
        <div className='flex items-center gap-1 sm:gap-2'>
          <span className='text-red-400'>❤️</span>
          <span className='whitespace-nowrap'>Trusted sa Buong Pilipinas</span>
        </div>
      </div>
    </div>

    {/* Bottom wave decoration */}
    <div className='absolute bottom-0 left-0 w-full overflow-hidden'>
      <svg
        className='relative block w-full h-16'
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
