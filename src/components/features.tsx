import { ArrowRight, Clock, MapPin, RefreshCw, Zap } from 'lucide-react'

const Features = () => (
  <section
    className='w-full bg-gradient-to-br from-slate-50 to-blue-50 py-16'
    id='features'
  >
    <div className='max-w-6xl mx-auto px-6'>
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
          Three Ways to Trade
        </h2>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          Whether you want to buy, barter, or bid, TindaMo gives you the
          flexibility to trade your way
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Geo-Mapping Feature */}
        <div className='group'>
          <div className='bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full'>
            <div className='bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white relative overflow-hidden'>
              <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16'></div>
              <div className='relative z-10'>
                <div className='bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4'>
                  <MapPin className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold mb-2'>Geo-Mapping</h3>
                <p className='text-blue-100'>
                  See what&apos;s available around you
                </p>
              </div>
            </div>

            <div className='p-8'>
              <p className='text-gray-600 mb-6'>
                Discover items and services within walking distance. Our
                interactive map shows real-time availability with distance and
                pricing.
              </p>

              {/* Interactive Map Demo */}
              <div className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-6 border border-blue-200'>
                <div className='flex items-center justify-between mb-4'>
                  <h4 className='font-semibold text-gray-900'>Live Map View</h4>
                  <span className='text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full'>
                    LIVE
                  </span>
                </div>
                <div className='space-y-3'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                      <div className='w-3 h-3 bg-blue-500 rounded-full'></div>
                      <span className='text-sm text-gray-700'>
                        Vintage Chair
                      </span>
                    </div>
                    <span className='text-xs text-gray-500'>320m</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                      <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                      <span className='text-sm text-gray-700'>
                        Garden Tools
                      </span>
                    </div>
                    <span className='text-xs text-gray-500'>1.3km</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                      <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                      <span className='text-sm text-gray-700'>
                        Coffee Table
                      </span>
                    </div>
                    <span className='text-xs text-gray-500'>1.8km</span>
                  </div>
                </div>
              </div>

              <div className='flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors'>
                <span>Explore Map</span>
                <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
              </div>
            </div>
          </div>
        </div>

        {/* Barter System */}
        <div className='group'>
          <div className='bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full'>
            <div className='bg-gradient-to-br from-green-500 to-green-600 p-8 text-white relative overflow-hidden'>
              <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16'></div>
              <div className='relative z-10'>
                <div className='bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4'>
                  <RefreshCw className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold mb-2'>Barter System</h3>
                <p className='text-green-100'>Trade without money</p>
              </div>
            </div>

            <div className='p-8'>
              <p className='text-gray-600 mb-6'>
                Exchange items of similar value. Our smart matching suggests
                fair trades based on item categories and conditions.
              </p>

              {/* Barter Flow Demo */}
              <div className='bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 mb-6 border border-green-200'>
                <div className='text-center mb-4'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    Trade Flow
                  </h4>
                </div>
                <div className='flex items-center justify-between text-sm'>
                  <div className='text-center'>
                    <div className='w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold'>
                      1
                    </div>
                    <span className='text-gray-600'>List Item</span>
                  </div>
                  <ArrowRight className='w-4 h-4 text-gray-400' />
                  <div className='text-center'>
                    <div className='w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold'>
                      2
                    </div>
                    <span className='text-gray-600'>Propose</span>
                  </div>
                  <ArrowRight className='w-4 h-4 text-gray-400' />
                  <div className='text-center'>
                    <div className='w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold'>
                      3
                    </div>
                    <span className='text-gray-600'>Swap</span>
                  </div>
                </div>
                <div className='mt-4 text-center'>
                  <span className='text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full'>
                    💚 500+ trades this week
                  </span>
                </div>
              </div>

              <div className='flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors'>
                <span>Start Trading</span>
                <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
              </div>
            </div>
          </div>
        </div>

        {/* Bidding Hub */}
        <div className='group'>
          <div className='bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full'>
            <div className='bg-gradient-to-br from-yellow-500 to-orange-500 p-8 text-white relative overflow-hidden'>
              <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16'></div>
              <div className='relative z-10'>
                <div className='bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4'>
                  <Zap className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold mb-2'>Bidding Hub</h3>
                <p className='text-yellow-100'>Win exciting auctions</p>
              </div>
            </div>

            <div className='p-8'>
              <p className='text-gray-600 mb-6'>
                Participate in local auctions with countdown timers. Set maximum
                bids and let our auto-bid system compete for you.
              </p>

              {/* Live Auction Demo */}
              <div className='bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 mb-6 border border-yellow-200'>
                <div className='flex items-center justify-between mb-4'>
                  <h4 className='font-semibold text-gray-900'>Live Auctions</h4>
                  <div className='flex items-center space-x-1 text-orange-600'>
                    <Clock className='w-4 h-4' />
                    <span className='text-xs font-bold'>LIVE</span>
                  </div>
                </div>
                <div className='space-y-3'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-700'>Designer Lamp</span>
                    <div className='text-right'>
                      <div className='text-sm font-bold text-orange-600'>
                        ₱1,850
                      </div>
                      <div className='text-xs text-gray-500'>2h 15m left</div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-700'>
                      Vintage Camera
                    </span>
                    <div className='text-right'>
                      <div className='text-sm font-bold text-orange-600'>
                        ₱4,950
                      </div>
                      <div className='text-xs text-gray-500'>1h 42m left</div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-700'>Art Supplies</span>
                    <div className='text-right'>
                      <div className='text-sm font-bold text-orange-600'>
                        ₱1,025
                      </div>
                      <div className='text-xs text-gray-500'>4h 8m left</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors'>
                <span>Join Auction</span>
                <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className='text-center mt-16'>
        <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'>
          <h3 className='text-2xl font-bold text-gray-900 mb-4'>
            Ready to Join Your Local Community?
          </h3>
          <p className='text-gray-600 mb-6 max-w-xl mx-auto'>
            Over 25,000 neighbors are already trading, bartering, and building
            connections. Start your journey today.
          </p>
          <button className='bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105'>
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Features
