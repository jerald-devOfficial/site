const Footer = () => (
  <footer className='w-full bg-white border-t border-[#F5A623]/20 pt-8 pb-4 mt-8'>
    {/* Sticky app download bar (mobile) */}
    <div className='fixed bottom-0 left-0 w-full bg-[#FFF7E6] flex items-center justify-center gap-4 py-3 z-40 md:hidden shadow-lg'>
      <a
        href='#'
        className='flex items-center gap-2 px-4 py-2 rounded-full bg-[#0ea5e9] text-white font-bold'
      >
        App Store
      </a>
      <a
        href='#'
        className='flex items-center gap-2 px-4 py-2 rounded-full bg-[#27ae60] text-white font-bold'
      >
        Google Play
      </a>
    </div>
    <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4'>
      {/* Quick links */}
      <nav className='flex flex-wrap gap-4 text-sm'>
        <a href='#about' className='hover:text-[#0ea5e9]'>
          About Us
        </a>
        <a href='#blog' className='hover:text-[#0ea5e9]'>
          Blog
        </a>
        <a href='#careers' className='hover:text-[#0ea5e9]'>
          Careers
        </a>
        <a href='#support' className='hover:text-[#0ea5e9]'>
          Support Center
        </a>
        <a href='#safety' className='hover:text-[#0ea5e9]'>
          Safety Tips
        </a>
      </nav>
      {/* Newsletter signup */}
      <form className='flex gap-2'>
        <input
          type='email'
          placeholder='Get local deals & bidding alerts!'
          className='px-4 py-2 rounded-full border border-[#F5A623] text-sm'
        />
        <button
          type='submit'
          className='px-4 py-2 rounded-full bg-[#F5A623] text-white font-bold'
        >
          Sign Up
        </button>
      </form>
      {/* Social proof and icons */}
      <div className='flex flex-col items-center gap-2'>
        <span className='text-xs text-[#555]'>10,000+ safe trades</span>
        <div className='flex gap-2'>
          <a href='#' aria-label='Twitter' className='text-[#0ea5e9] text-xl'>
            🐦
          </a>
          <a href='#' aria-label='Facebook' className='text-[#0ea5e9] text-xl'>
            📘
          </a>
          <a href='#' aria-label='Instagram' className='text-[#0ea5e9] text-xl'>
            📸
          </a>
        </div>
      </div>
    </div>
    {/* Legal links */}
    <div className='mt-6 text-center text-xs text-[#555]'>
      <a href='#terms' className='hover:underline'>
        Terms of Service
      </a>{' '}
      ·{' '}
      <a href='#privacy' className='hover:underline'>
        Privacy Policy
      </a>{' '}
      ·{' '}
      <a href='#community' className='hover:underline'>
        Community Guidelines
      </a>
    </div>
  </footer>
)

export default Footer
