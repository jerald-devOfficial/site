import Footer from '@/components/footer'
import Header from '@/components/header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About TindaMo - Hyper-Local Filipino Marketplace',
  description:
    'Learn about TindaMo, the first hyper-local marketplace built specifically for Filipino communities. Discover our mission, values, and vision for neighborhood trading.',
  openGraph: {
    title: 'About TindaMo - Hyper-Local Filipino Marketplace',
    description:
      'Learn about TindaMo, the first hyper-local marketplace built specifically for Filipino communities. Discover our mission, values, and vision for neighborhood trading.',
    images: {
      url: `${process.env.NEXT_PUBLIC_R2_FILES_URL}/images/brand/tindamo.png`,
      alt: 'About TindaMo',
      type: 'image/png',
      width: 300,
      height: 300
    }
  },
  twitter: {
    images: {
      url: `${process.env.NEXT_PUBLIC_R2_FILES_URL}/images/brand/tindamo.png`,
      alt: 'About TindaMo',
      type: 'image/png',
      width: 300,
      height: 300
    }
  }
}

export default function AboutPage() {
  return (
    <div className='flex flex-col min-h-screen bg-[#F9FAFB] text-[#222] font-sans'>
      <Header />
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='w-full bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white py-16 sm:py-24'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6 border border-white/20'>
              <span>🇵🇭</span>
              <span>Proudly Filipino</span>
            </div>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6'>
              Tinda<span className='text-yellow-400'>Mo</span>: Where Neighbors
              Trade
            </h1>
            <p className='text-xl sm:text-2xl text-blue-200 max-w-3xl mx-auto mb-8'>
              The first hyper-local marketplace designed specifically for
              Filipino communities. Building stronger neighborhoods, one trade
              at a time.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className='w-full py-16 sm:py-24'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
              <div>
                <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
                  Our Mission
                </h2>
                <p className='text-lg text-gray-600 mb-6'>
                  To strengthen Filipino communities by making local trading
                  safe, simple, and accessible. We believe in the power of
                  neighborhood connections and the Filipino values of{' '}
                  <strong>kapamilya</strong>, <strong>pakikipagkapwa</strong>,
                  and <strong>bayanihan</strong>.
                </p>
                <div className='space-y-4'>
                  <div className='flex items-start gap-3'>
                    <span className='text-yellow-500 text-xl'>🏘️</span>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Hyper-Local Focus
                      </h4>
                      <p className='text-gray-600 text-sm'>
                        Everything happens within your neighborhood, keeping
                        transactions close to home.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <span className='text-green-500 text-xl'>🤝</span>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Community First
                      </h4>
                      <p className='text-gray-600 text-sm'>
                        Built with Filipino values at the core, fostering trust
                        and mutual respect.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <span className='text-blue-500 text-xl'>🔄</span>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Circular Economy
                      </h4>
                      <p className='text-gray-600 text-sm'>
                        Promoting reuse and sustainable living through barter
                        and local trade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative'>
                <div className='aspect-square rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 p-8 border border-yellow-200'>
                  <div className='w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center'>
                    <div className='text-center'>
                      <div className='text-6xl mb-4'>🇵🇭</div>
                      <h3 className='text-xl font-bold text-gray-900 mb-2'>
                        Filipino Values
                      </h3>
                      <p className='text-gray-600 text-sm'>
                        Kapamilya • Pakikipagkapwa • Bayanihan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem We're Solving */}
        <section className='w-full bg-gray-50 py-16 sm:py-24'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
                The Problem We&apos;re Solving
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                Filipino communities are losing the traditional way of helping
                neighbors and sharing resources locally.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='bg-white rounded-2xl p-8 shadow-sm border border-gray-100'>
                <div className='text-red-500 text-4xl mb-4'>😞</div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  Disconnected Communities
                </h3>
                <p className='text-gray-600'>
                  People don&apos;t know their neighbors anymore. Items sit
                  unused while someone nearby needs exactly that.
                </p>
              </div>
              <div className='bg-white rounded-2xl p-8 shadow-sm border border-gray-100'>
                <div className='text-orange-500 text-4xl mb-4'>💸</div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  Wasteful Consumption
                </h3>
                <p className='text-gray-600'>
                  People buy new items instead of borrowing or trading with
                  neighbors, leading to unnecessary spending.
                </p>
              </div>
              <div className='bg-white rounded-2xl p-8 shadow-sm border border-gray-100'>
                <div className='text-purple-500 text-4xl mb-4'>🌍</div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  Generic Solutions
                </h3>
                <p className='text-gray-600'>
                  Existing platforms don&apos;t understand Filipino culture and
                  community values.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section className='w-full py-16 sm:py-24'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
                Our Solution: TindaMo
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                A hyper-local marketplace that brings back the Filipino spirit
                of community trading, but with modern safety and convenience.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200'>
                <div className='text-3xl mb-4'>🔄</div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  Barter System
                </h3>
                <p className='text-gray-600'>
                  Trade items without money. Perfect for when you need something
                  but have something else to offer.
                </p>
              </div>
              <div className='bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200'>
                <div className='text-3xl mb-4'>⚡</div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  Local Auctions
                </h3>
                <p className='text-gray-600'>
                  Bid on items in your neighborhood. Get great deals while
                  supporting local sellers.
                </p>
              </div>
              <div className='bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200'>
                <div className='text-3xl mb-4'>📍</div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  Geo-Mapping
                </h3>
                <p className='text-gray-600'>
                  See what&apos;s available near you in real-time. Filter by
                  distance and category.
                </p>
              </div>
              <div className='bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border border-yellow-200'>
                <div className='text-3xl mb-4'>🛡️</div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  Safety First
                </h3>
                <p className='text-gray-600'>
                  User verification, safe meetup guidelines, and community
                  moderation ensure secure trading.
                </p>
              </div>
              <div className='bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border border-red-200'>
                <div className='text-3xl mb-4'>💬</div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  Secure Chat
                </h3>
                <p className='text-gray-600'>
                  In-app messaging keeps conversations private until you&apos;re
                  ready to share contact details.
                </p>
              </div>
              <div className='bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200'>
                <div className='text-3xl mb-4'>🏆</div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  Community Rewards
                </h3>
                <p className='text-gray-600'>
                  Earn points for being a good community member. Get badges and
                  special perks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why TindaMo */}
        <section className='w-full bg-gradient-to-br from-yellow-50 to-orange-50 py-16 sm:py-24'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
                Why TindaMo?
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                We&apos;re building more than just a marketplace – we&apos;re
                reviving the Filipino spirit of community cooperation.
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
              <div>
                <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                  Built for Filipino Communities
                </h3>
                <p className='text-gray-600 mb-6'>
                  Unlike generic global platforms, TindaMo understands Filipino
                  culture, values, and ways of connecting. Every feature is
                  designed with the Filipino community experience in mind.
                </p>

                <div className='space-y-6'>
                  <div className='bg-white p-6 rounded-lg border border-yellow-200'>
                    <h4 className='font-semibold text-gray-900 mb-2'>
                      🏡 Truly Local
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      Everything happens within walking distance or a short ride
                      from your home.
                    </p>
                  </div>
                  <div className='bg-white p-6 rounded-lg border border-yellow-200'>
                    <h4 className='font-semibold text-gray-900 mb-2'>
                      💝 Values-Driven
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      Built on Filipino values of helping neighbors and sharing
                      resources within the community.
                    </p>
                  </div>
                  <div className='bg-white p-6 rounded-lg border border-yellow-200'>
                    <h4 className='font-semibold text-gray-900 mb-2'>
                      🌱 Sustainable Future
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      Promoting reuse, sharing, and local circular economy for a
                      better environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                <h3 className='text-xl font-bold text-gray-900 mb-6 text-center'>
                  Our Vision for Communities 🌟
                </h3>
                <p className='text-gray-600 mb-6 text-center'>
                  We envision Filipino neighborhoods where helping each other is
                  the norm again. Here&apos;s what we&apos;re working towards:
                </p>

                <div className='space-y-4'>
                  <div className='bg-green-50 p-4 rounded-lg'>
                    <h4 className='font-semibold text-green-800 mb-2'>
                      🤝 Stronger Connections
                    </h4>
                    <p className='text-green-700 text-sm'>
                      Neighbors knowing and helping each other like the old days
                    </p>
                  </div>
                  <div className='bg-blue-50 p-4 rounded-lg'>
                    <h4 className='font-semibold text-blue-800 mb-2'>
                      🌍 Sustainable Living
                    </h4>
                    <p className='text-blue-700 text-sm'>
                      Reduced waste through local sharing and circular economy
                    </p>
                  </div>
                  <div className='bg-purple-50 p-4 rounded-lg'>
                    <h4 className='font-semibold text-purple-800 mb-2'>
                      💪 Economic Resilience
                    </h4>
                    <p className='text-purple-700 text-sm'>
                      Local value creation and community economic independence
                    </p>
                  </div>
                  <div className='bg-orange-50 p-4 rounded-lg'>
                    <h4 className='font-semibold text-orange-800 mb-2'>
                      🏘️ Vibrant Neighborhoods
                    </h4>
                    <p className='text-orange-700 text-sm'>
                      Active, engaged communities where everyone feels connected
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className='w-full py-16 sm:py-24'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
                Meet the Team
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                Passionate Filipinos working to bring back the spirit of
                community trading to neighborhoods across the Philippines.
              </p>
            </div>

            <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center'>
              <div className='w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mx-auto mb-6 flex items-center justify-center'>
                <span className='text-3xl text-white'>👥</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Diverse Filipino Team
              </h3>
              <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
                Our team consists of developers, designers, community builders,
                and Filipino culture enthusiasts who understand the unique needs
                of Filipino neighborhoods.
              </p>
              <div className='flex flex-wrap justify-center gap-4 text-sm'>
                <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full'>
                  🇵🇭 100% Filipino Team
                </span>
                <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full'>
                  💻 Tech Experts
                </span>
                <span className='bg-purple-100 text-purple-800 px-3 py-1 rounded-full'>
                  🏘️ Community Focused
                </span>
                <span className='bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full'>
                  💝 Values-Driven
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className='w-full bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white py-16 sm:py-24'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-6'>
              Ready to Strengthen Your Community?
            </h2>
            <p className='text-xl text-blue-200 mb-8 max-w-2xl mx-auto'>
              Join thousands of Filipinos who are already waiting to experience
              the future of neighborhood trading. Be part of building stronger
              communities.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/waitlist'
                className='px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors shadow-lg'
              >
                🚀 Join the Waitlist
              </a>
              <a
                href='/support'
                className='px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors'
              >
                💬 Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
