import { Linkedin } from 'lucide-react'
import Link from 'next/link'
import WaitlistCount from './waitlist-count'

const Footer = () => (
  <footer className='w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden'>
    {/* Background decoration */}
    <div className='absolute inset-0 opacity-10'>
      <div className='absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 right-20 w-40 h-40 bg-purple-400 rounded-full blur-2xl'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-yellow-400 rounded-full blur-xl'></div>
    </div>

    <div className='relative z-10'>
      {/* Main Footer Content */}
      <div className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Brand Section */}
          <div className='lg:col-span-2'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg'>
                <span className='text-white text-xl font-bold'>T</span>
              </div>
              <div>
                <h3 className='text-2xl font-bold text-white'>TindaMo</h3>
                <p className='text-blue-200 text-sm'>
                  Hyper-local Filipino marketplace
                </p>
              </div>
            </div>
            <p className='text-gray-300 mb-6 leading-relaxed'>
              Ang first-ever hyper-local marketplace para sa mga Pinoy! Trade,
              sell, at bid sa mga items at services within your barangay. Built
              with Filipino values of kapamilya, pakikipagkapwa, at bayanihan.
            </p>

            {/* Waitlist Status */}
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm'>🚀</span>
                </div>
                <span className='font-semibold text-white'>
                  Join the Waitlist
                </span>
              </div>
              <div className='text-2xl font-bold text-yellow-400 mb-2'>
                <WaitlistCount /> people waiting
              </div>
              <p className='text-blue-200 text-sm mb-4'>
                Be among the first to experience TindaMo in your area
              </p>
              <Link
                href='/waitlist'
                className='inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-xl font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25'
              >
                <span>Join Now</span>
                <span className='text-lg'>→</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-bold text-white mb-6 flex items-center gap-2'>
              <span className='text-blue-400'>📋</span>
              Quick Links
            </h4>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/about'
                  className='text-gray-300 hover:text-white transition-colors flex items-center gap-2 group'
                >
                  <span className='w-1 h-1 bg-blue-400 rounded-full group-hover:bg-white transition-colors'></span>
                  About TindaMo
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-gray-300 hover:text-white transition-colors flex items-center gap-2 group'
                >
                  <span className='w-1 h-1 bg-blue-400 rounded-full group-hover:bg-white transition-colors'></span>
                  Blog & Resources
                </Link>
              </li>
              <li>
                <Link
                  href='/safety-tips'
                  className='text-gray-300 hover:text-white transition-colors flex items-center gap-2 group'
                >
                  <span className='w-1 h-1 bg-blue-400 rounded-full group-hover:bg-white transition-colors'></span>
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link
                  href='/community-guidelines'
                  className='text-gray-300 hover:text-white transition-colors flex items-center gap-2 group'
                >
                  <span className='w-1 h-1 bg-blue-400 rounded-full group-hover:bg-white transition-colors'></span>
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href='/support'
                  className='text-gray-300 hover:text-white transition-colors flex items-center gap-2 group'
                >
                  <span className='w-1 h-1 bg-blue-400 rounded-full group-hover:bg-white transition-colors'></span>
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className='text-lg font-bold text-white mb-6 flex items-center gap-2'>
              <span className='text-green-400'>📞</span>
              Contact & Legal
            </h4>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/privacy-policy'
                  className='text-gray-300 hover:text-white transition-colors flex items-center gap-2 group'
                >
                  <span className='w-1 h-1 bg-green-400 rounded-full group-hover:bg-white transition-colors'></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/terms-of-service'
                  className='text-gray-300 hover:text-white transition-colors flex items-center gap-2 group'
                >
                  <span className='w-1 h-1 bg-green-400 rounded-full group-hover:bg-white transition-colors'></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href='/support'
                  className='text-gray-300 hover:text-white transition-colors flex items-center gap-2 group'
                >
                  <span className='w-1 h-1 bg-green-400 rounded-full group-hover:bg-white transition-colors'></span>
                  Contact Support
                </Link>
              </li>
              <li>
                <a
                  href='mailto:team@tindamo.store'
                  className='text-gray-300 hover:text-white transition-colors flex items-center gap-2 group'
                >
                  <span className='w-1 h-1 bg-green-400 rounded-full group-hover:bg-white transition-colors'></span>
                  team@tindamo.store
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className='mt-8'>
              <h5 className='text-sm font-semibold text-white mb-4 flex items-center gap-2'>
                <span className='text-purple-400'>🌐</span>
                Follow Us
              </h5>
              <div className='flex gap-3'>
                <a
                  href='https://www.linkedin.com/company/107833440'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors group'
                  aria-label='LinkedIn'
                >
                  <Linkedin className='w-5 h-5 text-white group-hover:scale-110 transition-transform' />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-12'>
          <div className='text-center'>
            <div className='w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg'>
              <span className='text-white text-2xl'>📧</span>
            </div>
            <h3 className='text-2xl font-bold text-white mb-3'>
              Stay Updated with TindaMo
            </h3>
            <p className='text-blue-200 mb-6 max-w-2xl mx-auto'>
              Get notified about our launch, exclusive early access perks, and
              community updates. Join thousands of Filipinos waiting for
              TindaMo!
            </p>
            <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Enter your email address'
                className='flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent'
              />
              <button className='px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-white/20 bg-black/20 backdrop-blur-sm'>
        <div className='max-w-6xl mx-auto px-6 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='text-gray-400 text-sm'>
              © {new Date().getFullYear()} TindaMo. All rights reserved. Built
              with ❤️ for the Filipino community.
            </div>
            <div className='flex items-center gap-6 text-sm'>
              <span className='text-gray-400'>🇵🇭 Made in the Philippines</span>
              <span className='text-gray-400'>•</span>
              <span className='text-gray-400'>Pre-Launch Phase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
