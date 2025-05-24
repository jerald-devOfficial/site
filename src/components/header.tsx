import { Baloo_2 } from 'next/font/google'
import Image from 'next/image'

const baloo2 = Baloo_2({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-baloo2'
})

const Header = () => (
  <header className='w-full flex items-center justify-between px-4 py-3 bg-white shadow-sm sticky top-0 z-30'>
    <div className='flex items-end gap-px'>
      <div className='block drop-shadow-2xl drop-shadow-black/25'>
        <Image
          src='/logo.png'
          alt='TindaMo Logo'
          width={40}
          height={40}
          sizes='100vw'
          priority
        />
      </div>
      <span
        className={`text-black font-bold leading-normal text-[28px] tracking-tight tindamo-shadow ${baloo2.className}`}
      >
        TindaMo
      </span>
    </div>
    <nav className='hidden md:flex gap-6 text-base font-medium'>
      <a href='#features' className='hover:text-[#0ea5e9]'>
        Features
      </a>
      <a href='#listings' className='hover:text-[#0ea5e9]'>
        Listings
      </a>
      <a href='#blog' className='hover:text-[#0ea5e9]'>
        Blog
      </a>
      <a href='#safety' className='hover:text-[#0ea5e9]'>
        Safety
      </a>
      <a href='#contact' className='hover:text-[#0ea5e9]'>
        Contact
      </a>
    </nav>
    <a
      href='#join'
      className='ml-4 px-5 py-2 rounded-full font-bold text-white bg-[#27ae60] hover:bg-[#219150] transition-colors'
    >
      Join Now
    </a>
  </header>
)

export default Header
