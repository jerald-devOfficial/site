import { CheckCircle, Heart, MessageCircle, Shield, Users } from 'lucide-react'

const TrustSafety = () => (
  <section className='w-full bg-white py-16 sm:py-24 relative overflow-hidden'>
    {/* Background decoration */}
    <div className='absolute inset-0 opacity-5'>
      <div className='absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 right-20 w-40 h-40 bg-green-400 rounded-full blur-2xl'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-400 rounded-full blur-xl'></div>
    </div>

    <div className='max-w-6xl mx-auto px-6 relative z-10'>
      <div className='text-center mb-16'>
        <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-blue-200'>
          <Shield className='w-4 h-4' />
          <span>Trust & Safety First</span>
        </div>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
          Built for Trust & Safety
        </h2>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          Every feature is designed with Filipino community values in mind. We
          prioritize safe trading, verified identities, and positive experiences
          for all members.
        </p>
      </div>

      {/* Trust Features Section */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-16'>
        <div className='text-center group'>
          <div className='bg-gradient-to-br from-green-100 to-green-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg'>
            <CheckCircle className='w-10 h-10 text-green-600' />
          </div>
          <div className='text-gray-600 font-medium mb-2'>
            Identity Verification
          </div>
          <div className='text-sm text-gray-500 mt-1'>
            Phone & email verification required
          </div>
        </div>

        <div className='text-center group'>
          <div className='bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg'>
            <Shield className='w-10 h-10 text-blue-600' />
          </div>
          <div className='text-gray-600 font-medium mb-2'>Safe Trading</div>
          <div className='text-sm text-gray-500 mt-1'>
            Public meetup spots recommended
          </div>
        </div>

        <div className='text-center group'>
          <div className='bg-gradient-to-br from-purple-100 to-purple-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg'>
            <MessageCircle className='w-10 h-10 text-purple-600' />
          </div>
          <div className='text-gray-600 font-medium mb-2'>Secure Chat</div>
          <div className='text-sm text-gray-500 mt-1'>
            In-app messaging system
          </div>
        </div>

        <div className='text-center group'>
          <div className='bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg'>
            <Users className='w-10 h-10 text-yellow-600' />
          </div>
          <div className='text-gray-600 font-medium mb-2'>Community Focus</div>
          <div className='text-sm text-gray-500 mt-1'>
            Filipino values & culture
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
        <div className='bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 hover:shadow-xl transition-shadow duration-300'>
          <div className='bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm'>
            <CheckCircle className='w-8 h-8 text-green-600' />
          </div>
          <h3 className='text-xl font-bold text-gray-900 mb-4'>
            Profile Verification
          </h3>
          <p className='text-gray-600 mb-4'>
            Every user goes through identity verification including phone number
            and email confirmation before they can start trading.
          </p>
          <ul className='space-y-2 text-sm text-gray-600'>
            <li className='flex items-center gap-2'>
              <span className='text-green-500'>✓</span>
              <span>Phone number verification</span>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-green-500'>✓</span>
              <span>Email address confirmation</span>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-green-500'>✓</span>
              <span>Profile photo requirement</span>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-green-500'>✓</span>
              <span>Location verification</span>
            </li>
          </ul>
        </div>

        <div className='bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:shadow-xl transition-shadow duration-300'>
          <div className='bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm'>
            <Shield className='w-8 h-8 text-blue-600' />
          </div>
          <h3 className='text-xl font-bold text-gray-900 mb-4'>
            Safe Trading Practices
          </h3>
          <p className='text-gray-600 mb-4'>
            We provide guidelines and tools to help you trade safely within your
            local community, always prioritizing your security.
          </p>
          <ul className='space-y-2 text-sm text-gray-600'>
            <li className='flex items-center gap-2'>
              <span className='text-blue-500'>✓</span>
              <span>Public meeting place recommendations</span>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-blue-500'>✓</span>
              <span>Safety tips and guidelines</span>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-blue-500'>✓</span>
              <span>Report and block features</span>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-blue-500'>✓</span>
              <span>Community moderation</span>
            </li>
          </ul>
        </div>

        <div className='bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200 hover:shadow-xl transition-shadow duration-300'>
          <div className='bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm'>
            <MessageCircle className='w-8 h-8 text-purple-600' />
          </div>
          <h3 className='text-xl font-bold text-gray-900 mb-4'>
            Secure Communication
          </h3>
          <p className='text-gray-600 mb-4'>
            All conversations happen within our secure platform, keeping your
            personal information private until you&apos;re ready to share.
          </p>
          <ul className='space-y-2 text-sm text-gray-600'>
            <li className='flex items-center gap-2'>
              <span className='text-purple-500'>✓</span>
              <span>In-app messaging only</span>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-purple-500'>✓</span>
              <span>Photo sharing capabilities</span>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-purple-500'>✓</span>
              <span>Message history preservation</span>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-purple-500'>✓</span>
              <span>Privacy controls</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Community Guidelines */}
      <div className='bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200 relative overflow-hidden'>
        {/* Background decoration */}
        <div className='absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full -translate-y-16 translate-x-16 opacity-30'></div>
        <div className='absolute bottom-0 left-0 w-24 h-24 bg-orange-200 rounded-full translate-y-12 -translate-x-12 opacity-30'></div>

        <div className='relative z-10'>
          <div className='text-center mb-8'>
            <div className='w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg'>
              <Heart className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              Filipino Community Values 🇵🇭
            </h3>
            <p className='text-gray-600 max-w-3xl mx-auto'>
              TindaMo is built around Filipino values of kapamilya,
              pakikipagkapwa, and bayanihan. We foster a community where
              neighbors help neighbors, just like the traditional Filipino way.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='text-center group hover:bg-white/50 p-4 rounded-xl transition-all duration-300'>
              <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform'>
                <span className='text-white text-2xl'>🤝</span>
              </div>
              <h4 className='font-semibold text-gray-900 mb-2'>
                Kapamilya Spirit
              </h4>
              <p className='text-sm text-gray-600'>
                Treating every community member like family with respect and
                care
              </p>
            </div>
            <div className='text-center group hover:bg-white/50 p-4 rounded-xl transition-all duration-300'>
              <div className='w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform'>
                <span className='text-white text-2xl'>❤️</span>
              </div>
              <h4 className='font-semibold text-gray-900 mb-2'>
                Pakikipagkapwa
              </h4>
              <p className='text-sm text-gray-600'>
                Shared identity and genuine concern for fellow community members
              </p>
            </div>
            <div className='text-center group hover:bg-white/50 p-4 rounded-xl transition-all duration-300'>
              <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform'>
                <span className='text-white text-2xl'>🏘️</span>
              </div>
              <h4 className='font-semibold text-gray-900 mb-2'>Bayanihan</h4>
              <p className='text-sm text-gray-600'>
                Community cooperation and helping each other succeed together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default TrustSafety
