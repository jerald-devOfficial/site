import {
  AlertTriangle,
  CheckCircle,
  Heart,
  MessageCircle,
  Shield,
  Star,
  Users
} from 'lucide-react'

const Safety = () => (
  <section className='w-full bg-gradient-to-br from-red-50 to-orange-50 py-16 sm:py-24 relative overflow-hidden'>
    {/* Background decoration */}
    <div className='absolute inset-0 opacity-5'>
      <div className='absolute top-10 left-10 w-32 h-32 bg-red-400 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 right-20 w-40 h-40 bg-orange-400 rounded-full blur-2xl'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-yellow-400 rounded-full blur-xl'></div>
    </div>

    <div className='max-w-6xl mx-auto px-6 relative z-10'>
      <div className='text-center mb-16'>
        <div className='inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-red-200'>
          <Shield className='w-4 h-4' />
          <span>Safety First</span>
        </div>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
          Safe Trading Guidelines
        </h2>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          Your safety is our top priority. Follow these guidelines to ensure
          secure and positive trading experiences within your Filipino
          community.
        </p>
      </div>

      {/* Safety Guidelines Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
        {/* Secure Transactions */}
        <div className='group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105'>
          <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform'>
            <CheckCircle className='w-8 h-8 text-white' />
          </div>
          <h3 className='text-xl font-bold text-gray-900 mb-4'>
            Secure Transactions
          </h3>
          <ul className='space-y-3 text-gray-600'>
            <li className='flex items-start gap-3'>
              <span className='text-green-500 mt-1'>✓</span>
              <span>Meet in public, well-lit locations</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-green-500 mt-1'>✓</span>
              <span>Bring a friend or family member</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-green-500 mt-1'>✓</span>
              <span>Inspect items thoroughly before payment</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-green-500 mt-1'>✓</span>
              <span>Use cash or secure payment methods</span>
            </li>
          </ul>
        </div>

        {/* Communication Safety */}
        <div className='group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105'>
          <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform'>
            <MessageCircle className='w-8 h-8 text-white' />
          </div>
          <h3 className='text-xl font-bold text-gray-900 mb-4'>
            Communication Safety
          </h3>
          <ul className='space-y-3 text-gray-600'>
            <li className='flex items-start gap-3'>
              <span className='text-blue-500 mt-1'>✓</span>
              <span>Use TindaMo&apos;s in-app messaging only</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-blue-500 mt-1'>✓</span>
              <span>Never share personal financial information</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-blue-500 mt-1'>✓</span>
              <span>Be cautious of urgent or pressured requests</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-blue-500 mt-1'>✓</span>
              <span>
                Trust your instincts - if something feels off, walk away
              </span>
            </li>
          </ul>
        </div>

        {/* User Verification */}
        <div className='group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105'>
          <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform'>
            <Users className='w-8 h-8 text-white' />
          </div>
          <h3 className='text-xl font-bold text-gray-900 mb-4'>
            User Verification
          </h3>
          <ul className='space-y-3 text-gray-600'>
            <li className='flex items-start gap-3'>
              <span className='text-purple-500 mt-1'>✓</span>
              <span>Look for verified user badges</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-purple-500 mt-1'>✓</span>
              <span>Check user ratings and reviews</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-purple-500 mt-1'>✓</span>
              <span>Verify profile photos match the person</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-purple-500 mt-1'>✓</span>
              <span>Report suspicious or fake profiles</span>
            </li>
          </ul>
        </div>

        {/* Item Authenticity */}
        <div className='group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105'>
          <div className='w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform'>
            <Star className='w-8 h-8 text-white' />
          </div>
          <h3 className='text-xl font-bold text-gray-900 mb-4'>
            Item Authenticity
          </h3>
          <ul className='space-y-3 text-gray-600'>
            <li className='flex items-start gap-3'>
              <span className='text-yellow-500 mt-1'>✓</span>
              <span>Request detailed photos of items</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-yellow-500 mt-1'>✓</span>
              <span>Ask about item condition and history</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-yellow-500 mt-1'>✓</span>
              <span>Test electronics and appliances</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-yellow-500 mt-1'>✓</span>
              <span>Be wary of prices that seem too good to be true</span>
            </li>
          </ul>
        </div>

        {/* Community Respect */}
        <div className='group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105'>
          <div className='w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform'>
            <Heart className='w-8 h-8 text-white' />
          </div>
          <h3 className='text-xl font-bold text-gray-900 mb-4'>
            Community Respect
          </h3>
          <ul className='space-y-3 text-gray-600'>
            <li className='flex items-start gap-3'>
              <span className='text-red-500 mt-1'>✓</span>
              <span>Be punctual and respectful of others&apos; time</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-red-500 mt-1'>✓</span>
              <span>Communicate clearly and honestly</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-red-500 mt-1'>✓</span>
              <span>Follow Filipino values of pakikipagkapwa</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-red-500 mt-1'>✓</span>
              <span>Resolve disputes amicably</span>
            </li>
          </ul>
        </div>

        {/* Red Flags */}
        <div className='group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105'>
          <div className='w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform'>
            <AlertTriangle className='w-8 h-8 text-white' />
          </div>
          <h3 className='text-xl font-bold text-gray-900 mb-4'>
            Red Flags to Watch
          </h3>
          <ul className='space-y-3 text-gray-600'>
            <li className='flex items-start gap-3'>
              <span className='text-red-600 mt-1'>⚠</span>
              <span>Requests for personal financial information</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-red-600 mt-1'>⚠</span>
              <span>Pressure to meet in isolated locations</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-red-600 mt-1'>⚠</span>
              <span>Unwillingness to show item in person</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-red-600 mt-1'>⚠</span>
              <span>Aggressive or threatening behavior</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Safety Tips Section */}
      <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden'>
        {/* Background decoration */}
        <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16'></div>
        <div className='absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12'></div>

        <div className='relative z-10'>
          <div className='text-center mb-8'>
            <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Shield className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-2xl font-bold mb-4'>
              Remember: Safety is Kapamilya
            </h3>
            <p className='text-blue-100 max-w-3xl mx-auto'>
              In Filipino culture, we protect our kapamilya. Every member of our
              community deserves to feel safe and respected. If you ever feel
              uncomfortable or unsafe, trust your instincts and walk away.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='text-center group hover:bg-white/10 p-4 rounded-xl transition-all duration-300'>
              <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3'>
                <span className='text-white text-xl'>🛡️</span>
              </div>
              <h4 className='font-semibold mb-2'>Trust Your Gut</h4>
              <p className='text-sm text-blue-100'>
                If something doesn&apos;t feel right, it probably isn&apos;t
              </p>
            </div>
            <div className='text-center group hover:bg-white/10 p-4 rounded-xl transition-all duration-300'>
              <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3'>
                <span className='text-white text-xl'>📞</span>
              </div>
              <h4 className='font-semibold mb-2'>Stay Connected</h4>
              <p className='text-sm text-blue-100'>
                Let someone know where you&apos;re going and when
              </p>
            </div>
            <div className='text-center group hover:bg-white/10 p-4 rounded-xl transition-all duration-300'>
              <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3'>
                <span className='text-white text-xl'>🚨</span>
              </div>
              <h4 className='font-semibold mb-2'>Report Issues</h4>
              <p className='text-sm text-blue-100'>
                Help keep our community safe by reporting problems
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className='text-center mt-12'>
        <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-2xl mx-auto'>
          <div className='w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
            <AlertTriangle className='w-6 h-6 text-red-600' />
          </div>
          <h4 className='font-bold text-gray-900 mb-2'>Need Help?</h4>
          <p className='text-gray-600 mb-4'>
            If you encounter any safety issues or suspicious activity, please
            report it immediately through our app or contact support.
          </p>
          <button className='bg-red-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-700 transition-colors'>
            Report Safety Issue
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Safety
