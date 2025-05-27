import Image from 'next/image';

const Hero = () => (
  <section className='w-full flex flex-col items-center gap-6 py-10 bg-[#FFF7E6] border-b border-[#F5A623]/20'>
    {/* Static/animated map preview */}
    <div className='w-full max-w-2xl h-48 relative rounded-2xl overflow-hidden mb-2'>
      <Image
        src='/hero-map-demo.png'
        alt='Demo map preview of local listings'
        fill
        className='object-cover'
        priority
        sizes='(max-width: 768px) 100vw, 50vw'
      />
    </div>
    {/* Location search bar */}
    <input
      className='w-full max-w-md px-5 py-3 rounded-full border border-[#F5A623] focus:outline-none focus:ring-2 focus:ring-[#F5A623] text-lg shadow'
      placeholder='Search Items or Services Near You'
      aria-label='Location or item search'
    />
    {/* Tagline and subtext */}
    <h1 className='text-3xl sm:text-4xl font-bold text-center text-[#222]'>
      Find, Trade, Bid – All in Your Neighborhood!
    </h1>
    <p className='text-lg text-[#555] text-center'>
      Trade what you don&apos;t need, bid on what you want – hyper-local,
      hassle-free.
    </p>
    {/* CTA Button */}
    <a
      href='#join'
      className='px-8 py-4 rounded-full font-bold text-white bg-[#27ae60] hover:bg-[#219150] text-xl shadow transition-colors'>
      Join Now – List Your First Item in 60 Seconds!
    </a>
  </section>
);

export default Hero;
