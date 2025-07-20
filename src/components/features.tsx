import {
  Gavel,
  Heart,
  MapPin,
  RefreshCw,
  Shield,
  Star,
  Users,
  Zap
} from 'lucide-react'

const Features = () => (
  <section className='w-full bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-24 relative overflow-hidden'>
    {/* Background decoration */}
    <div className='absolute inset-0 opacity-5'>
      <div className='absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 right-20 w-40 h-40 bg-green-400 rounded-full blur-2xl'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-400 rounded-full blur-xl'></div>
    </div>

    <div className='max-w-6xl mx-auto px-6 relative z-10'>
      <div className='text-center mb-16'>
        <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-blue-200'>
          <Zap className='w-4 h-4' />
          <span>Core Features</span>
        </div>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
          How TindaMo Works
        </h2>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          Three powerful features designed specifically for Filipino
          communities. Trade, sell, and bid - all within your neighborhood!
        </p>
      </div>

      {/* Main Features Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>
        {/* Geo-Mapping Feature */}
        <div className='group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden'>
          {/* Background decoration */}
          <div className='absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-50'></div>

          <div className='relative z-10'>
            <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform'>
              <MapPin className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              Hyper-Local Discovery
            </h3>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              Find items and services within your barangay! Our smart location
              system shows you exactly what&apos;s available nearby, making
              trading convenient and safe.
            </p>

            <div className='space-y-3 mb-6'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
                  <span className='text-blue-600 text-sm font-bold'>1</span>
                </div>
                <span className='text-gray-700 font-medium'>
                  Set your location
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
                  <span className='text-blue-600 text-sm font-bold'>2</span>
                </div>
                <span className='text-gray-700 font-medium'>
                  Browse local listings
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
                  <span className='text-blue-600 text-sm font-bold'>3</span>
                </div>
                <span className='text-gray-700 font-medium'>
                  Connect with neighbors
                </span>
              </div>
            </div>

            <div className='bg-blue-50 rounded-xl p-4 border border-blue-200'>
              <div className='flex items-center gap-2 text-blue-700 font-medium mb-2'>
                <span className='text-lg'>💡</span>
                <span>Pro Tip</span>
              </div>
              <p className='text-sm text-blue-600'>
                Need something urgent? Find it within walking distance from your
                home!
              </p>
            </div>
          </div>
        </div>

        {/* Barter System Feature */}
        <div className='group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden'>
          {/* Background decoration */}
          <div className='absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -translate-y-16 translate-x-16 opacity-50'></div>

          <div className='relative z-10'>
            <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform'>
              <RefreshCw className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              Smart Barter System
            </h3>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              Trade what you have for what you need! Our intelligent matching
              system helps you find perfect trade partners in your community.
            </p>

            <div className='space-y-3 mb-6'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center'>
                  <span className='text-green-600 text-sm font-bold'>1</span>
                </div>
                <span className='text-gray-700 font-medium'>
                  List your items
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center'>
                  <span className='text-green-600 text-sm font-bold'>2</span>
                </div>
                <span className='text-gray-700 font-medium'>
                  Find trade matches
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center'>
                  <span className='text-green-600 text-sm font-bold'>3</span>
                </div>
                <span className='text-gray-700 font-medium'>
                  Swap and save money
                </span>
              </div>
            </div>

            <div className='bg-green-50 rounded-xl p-4 border border-green-200'>
              <div className='flex items-center gap-2 text-green-700 font-medium mb-2'>
                <span className='text-lg'>💰</span>
                <span>Save Money</span>
              </div>
              <p className='text-sm text-green-600'>
                No cash needed! Trade items directly and keep your money for
                other needs.
              </p>
            </div>
          </div>
        </div>

        {/* Bidding Hub Feature */}
        <div className='group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden'>
          {/* Background decoration */}
          <div className='absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50'></div>

          <div className='relative z-10'>
            <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform'>
              <Gavel className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              Local Bidding Hub
            </h3>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              Win amazing deals through local auctions! Bid on items you want
              and get notified when you&apos;re outbid - all within your
              community.
            </p>

            <div className='space-y-3 mb-6'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center'>
                  <span className='text-purple-600 text-sm font-bold'>1</span>
                </div>
                <span className='text-gray-700 font-medium'>
                  Browse auctions
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center'>
                  <span className='text-purple-600 text-sm font-bold'>2</span>
                </div>
                <span className='text-gray-700 font-medium'>
                  Place your bids
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center'>
                  <span className='text-purple-600 text-sm font-bold'>3</span>
                </div>
                <span className='text-gray-700 font-medium'>
                  Win and collect
                </span>
              </div>
            </div>

            <div className='bg-purple-50 rounded-xl p-4 border border-purple-200'>
              <div className='flex items-center gap-2 text-purple-700 font-medium mb-2'>
                <span className='text-lg'>⚡</span>
                <span>Real-time Updates</span>
              </div>
              <p className='text-sm text-purple-600'>
                Get instant notifications when someone outbids you!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
        <div className='text-center group hover:bg-white/80 p-6 rounded-2xl transition-all duration-300 hover:scale-105'>
          <div className='w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform'>
            <Shield className='w-8 h-8 text-white' />
          </div>
          <h4 className='font-semibold text-gray-900 mb-2'>Safe Trading</h4>
          <p className='text-sm text-gray-600'>
            Verified users and secure meetup guidelines
          </p>
        </div>

        <div className='text-center group hover:bg-white/80 p-6 rounded-2xl transition-all duration-300 hover:scale-105'>
          <div className='w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform'>
            <Heart className='w-8 h-8 text-white' />
          </div>
          <h4 className='font-semibold text-gray-900 mb-2'>Community First</h4>
          <p className='text-sm text-gray-600'>
            Built for Filipino values and culture
          </p>
        </div>

        <div className='text-center group hover:bg-white/80 p-6 rounded-2xl transition-all duration-300 hover:scale-105'>
          <div className='w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform'>
            <Users className='w-8 h-8 text-white' />
          </div>
          <h4 className='font-semibold text-gray-900 mb-2'>Neighbor Network</h4>
          <p className='text-sm text-gray-600'>
            Connect with people in your area
          </p>
        </div>

        <div className='text-center group hover:bg-white/80 p-6 rounded-2xl transition-all duration-300 hover:scale-105'>
          <div className='w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform'>
            <Star className='w-8 h-8 text-white' />
          </div>
          <h4 className='font-semibold text-gray-900 mb-2'>Quality Assured</h4>
          <p className='text-sm text-gray-600'>
            Honest descriptions and fair pricing
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className='text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden'>
        {/* Background decoration */}
        <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16'></div>
        <div className='absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12'></div>

        <div className='relative z-10'>
          <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4'>
            <span className='text-white text-2xl'>🚀</span>
          </div>
          <h3 className='text-2xl font-bold mb-4'>
            Ready to Transform Your Neighborhood?
          </h3>
          <p className='text-blue-100 mb-6 max-w-2xl mx-auto'>
            Join thousands of Filipinos who are already waiting to experience
            safe, local, and community-driven trading right in their area!
          </p>
          <button className='bg-white text-blue-600 px-8 py-3 rounded-2xl font-bold hover:bg-gray-100 transition-colors shadow-lg'>
            Join the Waitlist Today
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Features
