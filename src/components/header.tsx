'use client'

import { Baloo_2 } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const baloo2 = Baloo_2({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-baloo2'
})

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className='w-full bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo Section */}
          <Link
            href='/'
            className='flex items-center space-x-3 group'
            onClick={closeMenu}
          >
            <div className='relative'>
              {/* Logo Background Circle */}
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300'></div>

              {/* Logo Container */}
              <div className='relative bg-gradient-to-br from-blue-500 to-green-500 p-2 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105'>
                <Image
                  src='/logo.png'
                  alt='TindaMo Logo'
                  width={32}
                  height={32}
                  className='relative z-10 drop-shadow-sm'
                  priority
                />
              </div>
            </div>

            {/* Brand Text */}
            <div className='flex flex-col'>
              <span
                className={`text-gray-900 font-bold text-xl tracking-tight group-hover:text-blue-600 transition-colors duration-300 ${baloo2.className}`}
              >
                TindaMo
              </span>
              <span className='text-xs text-gray-500 font-medium tracking-wide -mt-1'>
                Local Trading
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              href='/about'
              className='text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group'
            >
              About
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200'></span>
            </Link>
            <Link
              href='/blog'
              className='text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group'
            >
              Blog
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200'></span>
            </Link>
            <Link
              href='/safety-tips'
              className='text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group'
            >
              Safety
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200'></span>
            </Link>
            <Link
              href='/support'
              className='text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group'
            >
              Support
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200'></span>
            </Link>
            <Link
              href='/waitlist'
              className='text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group'
            >
              Join Waitlist
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200'></span>
            </Link>
          </nav>

          {/* Right side items */}
          <div className='flex items-center space-x-4'>
            {/* Mobile Menu Button */}
            <button
              className='md:hidden p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200'
              onClick={toggleMenu}
              aria-label='Toggle mobile menu'
            >
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${
                  isMenuOpen ? 'rotate-90' : ''
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>

            {/* CTA Button */}
            <Link
              href='https://calendly.com/team-tindamo/30min'
              rel='noopener noreferrer'
              target='_blank'
              className='bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold px-4 sm:px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base'
              onClick={closeMenu}
            >
              <span className='hidden sm:inline'>Get Started</span>
              <span className='sm:hidden'>Start</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-64 opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className='py-4 space-y-2 border-t border-gray-100 bg-white'>
            <Link
              href='/about'
              className='block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200'
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href='/blog'
              className='block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200'
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              href='/safety-tips'
              className='block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200'
              onClick={closeMenu}
            >
              Safety
            </Link>
            <Link
              href='/support'
              className='block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200'
              onClick={closeMenu}
            >
              Support
            </Link>
            <Link
              href='/waitlist'
              className='block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200'
              onClick={closeMenu}
            >
              Join Waitlist
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
