import Footer from '@/components/footer'
import Header from '@/components/header'
import WaitlistSignup from '@/components/waitlist-signup'

export const metadata = {
  title:
    'Join TindaMo Waitlist - Be Among the First to Experience Local Trading',
  description:
    'Join thousands of Filipinos waiting to trade, sell, and discover amazing deals in their local community. Get early access and exclusive perks when TindaMo launches in your area!',
  keywords:
    'TindaMo waitlist, early access, local marketplace, Filipino trading, community marketplace, pre-launch signup',
  openGraph: {
    title: 'Join TindaMo Waitlist - Early Access to Local Trading',
    description:
      'Be among the first to experience TindaMo when we launch in your area. Join 2,500+ Filipinos already waiting!',
    type: 'website'
  }
}

export default function WaitlistPage() {
  return (
    <div className='flex flex-col min-h-screen bg-[#F9FAFB] text-[#222] font-sans'>
      <Header />
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='w-full bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-16 sm:py-24'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <div className='inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6'>
              🚀 Coming Soon to Your Area
            </div>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
              Join the{' '}
              <span className='bg-gradient-to-r from-[#F5A623] to-[#F7931E] bg-clip-text text-transparent'>
                TindaMo Waitlist
              </span>
            </h1>
            <p className='text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-8'>
              Be among the first to experience the future of local trading in
              the Philippines. Join thousands of Filipinos who are already
              waiting to trade, sell, and discover amazing deals in their
              community.
            </p>

            {/* Social proof */}
            <div className='flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-lg text-gray-600 mb-12'>
              <div className='flex items-center gap-3'>
                <span className='text-3xl'>👥</span>
                <div className='text-left'>
                  <div className='font-bold text-2xl text-[#F5A623]'>
                    2,500+
                  </div>
                  <div className='text-sm'>people waiting</div>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-3xl'>📍</span>
                <div className='text-left'>
                  <div className='font-bold text-2xl text-[#F5A623]'>15+</div>
                  <div className='text-sm'>cities covered</div>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-3xl'>⭐</span>
                <div className='text-left'>
                  <div className='font-bold text-2xl text-[#F5A623]'>4.9/5</div>
                  <div className='text-sm'>expected rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className='py-16 sm:py-24'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
              {/* Left side - Benefits and Features */}
              <div className='space-y-8'>
                <div>
                  <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                    Why Join the Waitlist?
                  </h2>
                  <div className='space-y-6'>
                    <div className='flex items-start gap-4'>
                      <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#F5A623] to-[#F7931E] rounded-full flex items-center justify-center text-white font-bold text-lg'>
                        1
                      </div>
                      <div>
                        <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                          Early Access
                        </h3>
                        <p className='text-gray-600'>
                          Be among the first to use TindaMo when we launch in
                          your area. Get a head start on trading and selling in
                          your local community.
                        </p>
                      </div>
                    </div>

                    <div className='flex items-start gap-4'>
                      <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#F5A623] to-[#F7931E] rounded-full flex items-center justify-center text-white font-bold text-lg'>
                        2
                      </div>
                      <div>
                        <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                          Exclusive Perks
                        </h3>
                        <p className='text-gray-600'>
                          Get special discounts, free features, VIP treatment,
                          and exclusive access to premium marketplace features.
                        </p>
                      </div>
                    </div>

                    <div className='flex items-start gap-4'>
                      <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#F5A623] to-[#F7931E] rounded-full flex items-center justify-center text-white font-bold text-lg'>
                        3
                      </div>
                      <div>
                        <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                          Shape the Future
                        </h3>
                        <p className='text-gray-600'>
                          Help us build the perfect marketplace for your
                          community. Your feedback will directly influence
                          TindaMo&apos;s features and development.
                        </p>
                      </div>
                    </div>

                    <div className='flex items-start gap-4'>
                      <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#F5A623] to-[#F7931E] rounded-full flex items-center justify-center text-white font-bold text-lg'>
                        4
                      </div>
                      <div>
                        <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                          Priority Support
                        </h3>
                        <p className='text-gray-600'>
                          Get dedicated customer support when you need help. Our
                          team will be there to assist you every step of the
                          way.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    What You&apos;ll Get
                  </h3>
                  <ul className='space-y-3 text-gray-700'>
                    <li className='flex items-center gap-3'>
                      <span className='text-green-500 text-xl'>✓</span>
                      <span>Early access to the TindaMo app</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <span className='text-green-500 text-xl'>✓</span>
                      <span>Exclusive launch day discounts</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <span className='text-green-500 text-xl'>✓</span>
                      <span>Priority customer support</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <span className='text-green-500 text-xl'>✓</span>
                      <span>Special &ldquo;Founding Member&rdquo; badge</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <span className='text-green-500 text-xl'>✓</span>
                      <span>Regular updates on launch progress</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <span className='text-green-500 text-xl'>✓</span>
                      <span>Invitation to exclusive community events</span>
                    </li>
                  </ul>
                </div>

                {/* Progress indicator */}
                <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
                  <div className='flex items-center justify-between mb-4'>
                    <span className='text-lg font-medium text-gray-700'>
                      Waitlist Progress
                    </span>
                    <span className='text-2xl font-bold text-[#F5A623]'>
                      2,500+
                    </span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-3 mb-2'>
                    <div
                      className='bg-gradient-to-r from-[#F5A623] to-[#F7931E] h-3 rounded-full transition-all duration-500'
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                  <p className='text-sm text-gray-500'>
                    Goal: 5,000 early adopters • 75% complete
                  </p>
                </div>
              </div>

              {/* Right side - Signup form */}
              <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-100 sticky top-8'>
                <div className='text-center mb-8'>
                  <h2 className='text-3xl font-bold text-gray-900 mb-3'>
                    Join the Waitlist
                  </h2>
                  <p className='text-gray-600'>
                    Get notified when TindaMo launches in your area and receive
                    exclusive early access perks.
                  </p>
                </div>

                <WaitlistSignup />

                <div className='mt-8 text-center'>
                  <p className='text-xs text-gray-500 mb-4'>
                    🔒 We respect your privacy. No spam, just updates about
                    TindaMo.
                  </p>
                  <div className='flex items-center justify-center gap-2 text-xs text-gray-500'>
                    <span>✅</span>
                    <span>Free to join</span>
                    <span>•</span>
                    <span>✅</span>
                    <span>No commitment required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-16 bg-gray-50'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>
              Frequently Asked Questions
            </h2>
            <div className='space-y-6'>
              <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  When will TindaMo launch?
                </h3>
                <p className='text-gray-600'>
                  We&apos;re planning to launch TindaMo in phases, starting with
                  major cities in the Philippines. Waitlist members will be the
                  first to know when we launch in their area.
                </p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Is joining the waitlist free?
                </h3>
                <p className='text-gray-600'>
                  Yes! Joining the waitlist is completely free. There&apos;s no
                  cost or commitment required.
                </p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  What information do you collect?
                </h3>
                <p className='text-gray-600'>
                  We only collect your name, email, location, and optional
                  interests to better serve your area. We never share your
                  information with third parties.
                </p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Can I unsubscribe from the waitlist?
                </h3>
                <p className='text-gray-600'>
                  Yes, you can unsubscribe at any time by clicking the
                  unsubscribe link in our emails or contacting our support team.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
