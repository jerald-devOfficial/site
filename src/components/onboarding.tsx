import { ArrowRight, Download, MapPin, Search } from 'lucide-react'

const Onboarding = () => (
  <section
    className='w-full bg-gradient-to-br from-blue-50 via-white to-green-50 py-16'
    id='onboarding'
  >
    <div className='max-w-6xl mx-auto px-6'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
          Start Trading in Minutes
        </h2>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          Join thousands of neighbors who are already trading, bartering, and
          building community connections
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
        {/* Step 1 */}
        <div className='relative group'>
          <div className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full border border-gray-100'>
            <div className='flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto group-hover:bg-blue-200 transition-colors'>
              <Search className='w-8 h-8 text-blue-600' />
            </div>
            <div className='text-center'>
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                Discover Local Items
              </h3>
              <p className='text-gray-600 mb-4'>
                Browse thousands of items near you. From furniture to tools,
                find exactly what you need sa inyong neighborhood.
              </p>
              <div className='bg-gray-50 rounded-lg p-3 text-sm text-gray-500'>
                🔍 Search: &quot;coffee table&quot; within 2 kilometers
              </div>
            </div>
          </div>
          {/* Connection line */}
          <div className='hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2'>
            <ArrowRight className='w-6 h-6 text-gray-300' />
          </div>
        </div>

        {/* Step 2 */}
        <div className='relative group'>
          <div className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full border border-gray-100'>
            <div className='flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto group-hover:bg-green-200 transition-colors'>
              <MapPin className='w-8 h-8 text-green-600' />
            </div>
            <div className='text-center'>
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                Connect & Negotiate
              </h3>
              <p className='text-gray-600 mb-4'>
                Message sellers directly, propose trades, or place bids. Our
                secure chat keeps you safe while you negotiate.
              </p>
              <div className='bg-gray-50 rounded-lg p-3 text-sm text-gray-500'>
                💬 &quot;Pwede bang i-trade mo sa desk lamp ko?&quot;
              </div>
            </div>
          </div>
          {/* Connection line */}
          <div className='hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2'>
            <ArrowRight className='w-6 h-6 text-gray-300' />
          </div>
        </div>

        {/* Step 3 */}
        <div className='group'>
          <div className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full border border-gray-100'>
            <div className='flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6 mx-auto group-hover:bg-yellow-200 transition-colors'>
              <Download className='w-8 h-8 text-yellow-600' />
            </div>
            <div className='text-center'>
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                Meet & Exchange
              </h3>
              <p className='text-gray-600 mb-4'>
                Meet safely in public spaces, complete your trade, and build
                lasting community connections.
              </p>
              <div className='bg-gray-50 rounded-lg p-3 text-sm text-gray-500'>
                📍 Meet sa mall or barangay hall
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-100'>
        <h3 className='text-2xl font-semibold text-gray-900 text-center mb-8'>
          See What&apos;s Available Near You
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Demo Listing 1 */}
          <div className='group cursor-pointer'>
            <div className='bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg'>
              <div className='flex items-center justify-between mb-4'>
                <span className='bg-blue-600 text-white text-xs px-2 py-1 rounded-full'>
                  For Sale
                </span>
                <span className='text-blue-600 text-sm font-medium'>
                  300 meters
                </span>
              </div>
              <h4 className='font-semibold text-gray-900 mb-2'>
                Vintage Coffee Table
              </h4>
              <p className='text-gray-600 text-sm mb-3'>
                Great condition, perfect for small spaces
              </p>
              <div className='flex items-center justify-between'>
                <span className='text-lg font-bold text-blue-600'>₱3,500</span>
                <span className='text-xs text-gray-500'>2 hours ago</span>
              </div>
            </div>
          </div>

          {/* Demo Listing 2 */}
          <div className='group cursor-pointer'>
            <div className='bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg'>
              <div className='flex items-center justify-between mb-4'>
                <span className='bg-green-600 text-white text-xs px-2 py-1 rounded-full'>
                  Barter
                </span>
                <span className='text-green-600 text-sm font-medium'>
                  700 meters
                </span>
              </div>
              <h4 className='font-semibold text-gray-900 mb-2'>
                Power Drill Set
              </h4>
              <p className='text-gray-600 text-sm mb-3'>
                Trade for kitchen appliances or tools
              </p>
              <div className='flex items-center justify-between'>
                <span className='text-lg font-bold text-green-600'>Trade</span>
                <span className='text-xs text-gray-500'>1 day ago</span>
              </div>
            </div>
          </div>

          {/* Demo Listing 3 */}
          <div className='group cursor-pointer'>
            <div className='bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200 hover:border-yellow-300 transition-all duration-300 hover:shadow-lg'>
              <div className='flex items-center justify-between mb-4'>
                <span className='bg-yellow-600 text-white text-xs px-2 py-1 rounded-full'>
                  Auction
                </span>
                <span className='text-yellow-600 text-sm font-medium'>
                  1.2 kilometers
                </span>
              </div>
              <h4 className='font-semibold text-gray-900 mb-2'>
                Designer Lamp
              </h4>
              <p className='text-gray-600 text-sm mb-3'>
                Bidding ends in 2 hours
              </p>
              <div className='flex items-center justify-between'>
                <span className='text-lg font-bold text-yellow-600'>
                  ₱1,850 bid
                </span>
                <span className='text-xs text-gray-500'>⏰ 2h left</span>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center mt-8'>
          <button className='bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold px-8 py-3 rounded-full hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl'>
            Start Exploring Your Neighborhood
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Onboarding
