import Image from 'next/image'

const Hero = () => (
  <section className='relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white overflow-hidden'>
    {/* Background decoration */}
    <div className='absolute inset-0 opacity-10'>
      <div className='absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-xl'></div>
      <div className='absolute top-32 right-20 w-24 h-24 bg-red-400 rounded-full blur-lg'></div>
      <div className='absolute bottom-20 left-32 w-40 h-40 bg-blue-400 rounded-full blur-2xl'></div>
      <div className='absolute bottom-10 right-10 w-28 h-28 bg-green-400 rounded-full blur-lg'></div>
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

    <div className='relative z-10 max-w-6xl mx-auto px-4 text-center'>
      {/* Hero image with Filipino marketplace vibe */}
      <div className='mb-8 relative'>
        <div className='w-full max-w-3xl mx-auto h-64 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm'>
          <Image
            src='/hero-map-demo.png'
            alt='Filipino neighborhood marketplace'
            fill
            className='object-cover'
            priority
            sizes='(max-width: 768px) 100vw, 75vw'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'></div>
          <div className='absolute bottom-4 left-4 text-white'>
            <p className='text-sm font-medium'>
              🏪 Your Local Filipino Marketplace
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className='absolute -top-4 -left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-bounce'>
          🇵🇭 Pinoy
        </div>
        <div className='absolute -bottom-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse'>
          Mabuhay!
        </div>
      </div>

      {/* Main headline with Filipino flavor */}
      <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight'>
        <span className='bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 bg-clip-text text-transparent'>
          TindaMo
        </span>
        <br />
        <span className='text-white'>Tinda, Trade, Bid sa Inyong</span>
        <br />
        <span className='text-yellow-300 text-3xl sm:text-4xl lg:text-5xl'>
          Kalapit-Bahay! 🏘️
        </span>
      </h1>

      {/* Subtitle with Taglish */}
      <p className='text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed'>
        Ipagpalit ang hindi mo na kailangan, mag-bid sa gusto mo –
        <span className='text-yellow-300 font-semibold'>
          {' '}
          hyper-local, hassle-free
        </span>{' '}
        na marketplace para sa mga Pinoy!
      </p>

      {/* Enhanced search bar */}
      <div className='mb-8 max-w-2xl mx-auto'>
        <div className='relative'>
          <input
            className='w-full px-6 py-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400 text-white placeholder-white/70 text-lg shadow-xl'
            placeholder='Hanapin ang mga produkto o serbisyo malapit sa iyo...'
            aria-label='Paghahanap ng mga item o serbisyo'
          />
          <button className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-bold transition-colors shadow-lg'>
            🔍 Hanap
          </button>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
        <a
          href='#join'
          className='group px-8 py-4 rounded-full font-bold text-black bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-400/25'
        >
          <span className='flex items-center gap-2'>
            🚀 Sumali Na – I-list ang Unang Item mo sa 60 Seconds!
            <span className='group-hover:translate-x-1 transition-transform'>
              →
            </span>
          </span>
        </a>
        <button className='px-6 py-3 rounded-full font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-colors backdrop-blur-sm'>
          📱 Paano Gumagana?
        </button>
      </div>

      {/* Trust indicators with Filipino touch */}
      <div className='flex flex-wrap justify-center items-center gap-6 text-sm text-blue-100'>
        <div className='flex items-center gap-2'>
          <span className='text-green-400'>✅</span>
          <span>10,000+ Ligtas na Palitan</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-yellow-400'>⭐</span>
          <span>Verified Filipino Sellers</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-red-400'>❤️</span>
          <span>Trusted sa Buong Pilipinas</span>
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
