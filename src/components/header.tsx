import { Baloo_2 } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const baloo2 = Baloo_2({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-baloo2',
});

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
        className={`text-black font-bold leading-normal text-[28px] tracking-tight tindamo-shadow ${baloo2.className}`}>
        TindaMo
      </span>
    </div>
    <nav className='hidden md:flex gap-6 text-base font-medium'>
      <Link href='/#features' className='hover:text-[#0ea5e9]'>
        Features
      </Link>
      <Link href='/#listings' className='hover:text-[#0ea5e9]'>
        Listings
      </Link>
      <Link href='/#blog' className='hover:text-[#0ea5e9]'>
        Blog
      </Link>
      <Link href='/#safety' className='hover:text-[#0ea5e9]'>
        Safety
      </Link>
      <Link href='/#contact' className='hover:text-[#0ea5e9]'>
        Contact
      </Link>
    </nav>
    <Link
      href='https://calendly.com/team-tindamo/30min'
      rel='noopener noreferrer'
      target='_blank'
      className='ml-4 px-5 py-2 rounded-full font-bold text-white bg-[#27ae60] hover:bg-[#219150] transition-colors'>
      Schedule A Call
    </Link>
  </header>
);

export default Header;
