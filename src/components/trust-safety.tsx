import { CheckCircle, MessageCircle, Shield, Star, Users } from 'lucide-react'

const TrustSafety = () => (
  <section className='w-full bg-white py-16' id='trust-safety'>
    <div className='max-w-6xl mx-auto px-6'>
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
          Trusted by Your Community
        </h2>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          Built with safety and trust at the core. Every feature is designed to
          create secure, positive experiences for all community members.
        </p>
      </div>

      {/* Stats Section */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-16'>
        <div className='text-center group'>
          <div className='bg-gradient-to-br from-green-100 to-green-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
            <CheckCircle className='w-10 h-10 text-green-600' />
          </div>
          <div className='text-2xl md:text-3xl font-bold text-gray-900 mb-2'>
            15,000+
          </div>
          <div className='text-gray-600 font-medium'>Verified Users</div>
          <div className='text-sm text-gray-500 mt-1'>Identity confirmed</div>
        </div>

        <div className='text-center group'>
          <div className='bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
            <Shield className='w-10 h-10 text-blue-600' />
          </div>
          <div className='text-2xl md:text-3xl font-bold text-gray-900 mb-2'>
            50,000+
          </div>
          <div className='text-gray-600 font-medium'>Safe Trades</div>
          <div className='text-sm text-gray-500 mt-1'>
            Zero incidents reported
          </div>
        </div>

        <div className='text-center group'>
          <div className='bg-gradient-to-br from-purple-100 to-purple-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
            <MessageCircle className='w-10 h-10 text-purple-600' />
          </div>
          <div className='text-2xl md:text-3xl font-bold text-gray-900 mb-2'>
            2.3M+
          </div>
          <div className='text-gray-600 font-medium'>Messages Sent</div>
          <div className='text-sm text-gray-500 mt-1'>Secure chat system</div>
        </div>

        <div className='text-center group'>
          <div className='bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
            <Star className='w-10 h-10 text-yellow-600' />
          </div>
          <div className='text-2xl md:text-3xl font-bold text-gray-900 mb-2'>
            4.9/5
          </div>
          <div className='text-gray-600 font-medium'>Safety Rating</div>
          <div className='text-sm text-gray-500 mt-1'>User satisfaction</div>
        </div>
      </div>

      {/* Features Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
        <div className='bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200'>
          <div className='bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm'>
            <CheckCircle className='w-8 h-8 text-green-600' />
          </div>
          <h3 className='text-xl font-semibold text-gray-900 mb-3'>
            Identity Verification
          </h3>
          <p className='text-gray-600 mb-4'>
            Multi-step verification process including phone, email, and optional
            ID verification for enhanced trust.
          </p>
          <ul className='text-sm text-gray-600 space-y-1'>
            <li>✓ Phone number verification</li>
            <li>✓ Email confirmation</li>
            <li>✓ Optional government ID</li>
            <li>✓ Social media linking</li>
          </ul>
        </div>

        <div className='bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200'>
          <div className='bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm'>
            <Shield className='w-8 h-8 text-blue-600' />
          </div>
          <h3 className='text-xl font-semibold text-gray-900 mb-3'>
            Secure Communications
          </h3>
          <p className='text-gray-600 mb-4'>
            Built-in encrypted messaging keeps your personal information private
            until you&apos;re ready to share.
          </p>
          <ul className='text-sm text-gray-600 space-y-1'>
            <li>✓ End-to-end encryption</li>
            <li>✓ No personal info sharing</li>
            <li>✓ Report & block features</li>
            <li>✓ Safe meetup suggestions</li>
          </ul>
        </div>

        <div className='bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200'>
          <div className='bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm'>
            <Users className='w-8 h-8 text-purple-600' />
          </div>
          <h3 className='text-xl font-semibold text-gray-900 mb-3'>
            Community Moderation
          </h3>
          <p className='text-gray-600 mb-4'>
            24/7 community support team actively monitors and maintains a safe
            trading environment.
          </p>
          <ul className='text-sm text-gray-600 space-y-1'>
            <li>✓ 24/7 support team</li>
            <li>✓ Rapid response times</li>
            <li>✓ User reporting system</li>
            <li>✓ Safety guidelines</li>
          </ul>
        </div>
      </div>

      {/* Testimonials */}
      <div className='bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8'>
        <h3 className='text-2xl font-semibold text-gray-900 text-center mb-8'>
          What Our Community Says
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200'>
            <div className='flex items-center mb-4'>
              <div className='flex text-yellow-400 mb-2'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='w-4 h-4 fill-current' />
                ))}
              </div>
            </div>
            <p className='text-gray-700 italic mb-4'>
              &quot;I&apos;ve completed over 20 trades and every experience has
              been amazing. The verification process makes me feel so much
              safer.&quot;
            </p>
            <div className='flex items-center'>
              <div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3'>
                <span className='text-blue-600 font-semibold'>AS</span>
              </div>
              <div>
                <div className='font-semibold text-gray-900'>Ana Santos</div>
                <div className='text-sm text-gray-500'>Quezon City</div>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200'>
            <div className='flex items-center mb-4'>
              <div className='flex text-yellow-400 mb-2'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='w-4 h-4 fill-current' />
                ))}
              </div>
            </div>
            <p className='text-gray-700 italic mb-4'>
              &quot;The secure chat feature is brilliant. I never have to share
              my phone number until I&apos;m comfortable with the person.&quot;
            </p>
            <div className='flex items-center'>
              <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3'>
                <span className='text-green-600 font-semibold'>MR</span>
              </div>
              <div>
                <div className='font-semibold text-gray-900'>Miguel Rivera</div>
                <div className='text-sm text-gray-500'>Makati City</div>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200'>
            <div className='flex items-center mb-4'>
              <div className='flex text-yellow-400 mb-2'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='w-4 h-4 fill-current' />
                ))}
              </div>
            </div>
            <p className='text-gray-700 italic mb-4'>
              &quot;As a single parent, safety is my top priority.
              TindaMo&apos;s verification and meetup guidelines give me peace of
              mind.&quot;
            </p>
            <div className='flex items-center'>
              <div className='w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3'>
                <span className='text-purple-600 font-semibold'>JL</span>
              </div>
              <div>
                <div className='font-semibold text-gray-900'>Jasmine Lopez</div>
                <div className='text-sm text-gray-500'>Cebu City</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default TrustSafety
