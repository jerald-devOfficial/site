import Link from 'next/link'

const Safety = () => (
  <section
    className='w-full max-w-6xl mx-auto flex flex-col gap-8 py-16 px-4'
    id='safety'
  >
    <div className='text-center mb-8'>
      <h2 className='text-3xl font-bold mb-4 text-gray-800'>
        Safety & Community Guidelines 🛡️
      </h2>
      <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
        Ang inyong kaligtasan at magandang experience sa TindaMo ay aming
        priority. Sundin ang mga guidelines na ito para sa safe at masayang
        trading.
      </p>
    </div>

    <div className='grid md:grid-cols-3 gap-8 mb-12'>
      {/* Safe Exchanges */}
      <div className='bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 shadow-lg'>
        <div className='text-center mb-6'>
          <div className='w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg'>
            <span className='text-3xl text-white'>🤝</span>
          </div>
          <h3 className='text-xl font-bold text-green-800'>
            Safe na Exchanges
          </h3>
        </div>

        <div className='space-y-4'>
          <div className='flex items-start gap-3'>
            <span className='text-green-600 text-xl'>📍</span>
            <div>
              <h4 className='font-semibold text-green-800'>
                Meet sa Public Places
              </h4>
              <p className='text-green-700 text-sm'>
                Mall, coffee shop, barangay hall, o ibang mataong lugar
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <span className='text-green-600 text-xl'>💬</span>
            <div>
              <h4 className='font-semibold text-green-800'>In-app Chat Only</h4>
              <p className='text-green-700 text-sm'>
                Lahat ng usapan sa TindaMo app para documented
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <span className='text-green-600 text-xl'>🚨</span>
            <div>
              <h4 className='font-semibold text-green-800'>
                Report Suspicious Activity
              </h4>
              <p className='text-green-700 text-sm'>
                May nakita kayong hindi tama? I-report agad
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <span className='text-green-600 text-xl'>👥</span>
            <div>
              <h4 className='font-semibold text-green-800'>Bring a Friend</h4>
              <p className='text-green-700 text-sm'>
                Especially sa mga big ticket items o first time meeting
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fair Play */}
      <div className='bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-8 border border-blue-200 shadow-lg'>
        <div className='text-center mb-6'>
          <div className='w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg'>
            <span className='text-3xl text-white'>⚖️</span>
          </div>
          <h3 className='text-xl font-bold text-blue-800'>Fair Play</h3>
        </div>

        <div className='space-y-4'>
          <div className='flex items-start gap-3'>
            <span className='text-blue-600 text-xl'>❌</span>
            <div>
              <h4 className='font-semibold text-blue-800'>
                No Prohibited Items
              </h4>
              <p className='text-blue-700 text-sm'>
                Walang illegal, dangerous, o fake na products
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <span className='text-blue-600 text-xl'>📸</span>
            <div>
              <h4 className='font-semibold text-blue-800'>
                Honest Photos & Descriptions
              </h4>
              <p className='text-blue-700 text-sm'>
                Real photos, exact condition, walang hidden defects
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <span className='text-blue-600 text-xl'>💯</span>
            <div>
              <h4 className='font-semibold text-blue-800'>
                Transparent Pricing
              </h4>
              <p className='text-blue-700 text-sm'>
                Clear na presyo, walang hidden charges
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <span className='text-blue-600 text-xl'>⏰</span>
            <div>
              <h4 className='font-semibold text-blue-800'>
                Respect Time & Commitments
              </h4>
              <p className='text-blue-700 text-sm'>
                On time sa meetup, hindi ghost sa transactions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Moderation */}
      <div className='bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-200 shadow-lg'>
        <div className='text-center mb-6'>
          <div className='w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg'>
            <span className='text-3xl text-white'>👮</span>
          </div>
          <h3 className='text-xl font-bold text-purple-800'>
            Community Moderation
          </h3>
        </div>

        <div className='space-y-4'>
          <div className='flex items-start gap-3'>
            <span className='text-purple-600 text-xl'>📋</span>
            <div>
              <h4 className='font-semibold text-purple-800'>Reporting Tools</h4>
              <p className='text-purple-700 text-sm'>
                Easy reporting system para sa violations
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <span className='text-purple-600 text-xl'>🛡️</span>
            <div>
              <h4 className='font-semibold text-purple-800'>
                User Verification
              </h4>
              <p className='text-purple-700 text-sm'>
                ID verification para sa trusted sellers
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <span className='text-purple-600 text-xl'>⭐</span>
            <div>
              <h4 className='font-semibold text-purple-800'>Rating System</h4>
              <p className='text-purple-700 text-sm'>
                User ratings para makita ang reputation
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <span className='text-purple-600 text-xl'>👶</span>
            <div>
              <h4 className='font-semibold text-purple-800'>
                Age Restrictions
              </h4>
              <p className='text-purple-700 text-sm'>
                18+ requirement para sa certain categories
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Safety Infographic */}
    <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-200'>
      <h3 className='text-2xl font-bold text-center mb-8 text-gray-800'>
        TindaMo Safety Checklist ✅
      </h3>

      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <h4 className='text-lg font-bold text-gray-800 mb-4 flex items-center gap-2'>
            <span className='text-green-500'>✅</span> Bago Mag-meet
          </h4>
          <ul className='space-y-3'>
            <li className='flex items-center gap-3'>
              <span className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm'>
                1
              </span>
              <span className='text-gray-700'>
                Verify seller profile at ratings
              </span>
            </li>
            <li className='flex items-center gap-3'>
              <span className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm'>
                2
              </span>
              <span className='text-gray-700'>
                Confirm meetup details via app chat
              </span>
            </li>
            <li className='flex items-center gap-3'>
              <span className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm'>
                3
              </span>
              <span className='text-gray-700'>
                Choose public, mataong na lugar
              </span>
            </li>
            <li className='flex items-center gap-3'>
              <span className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm'>
                4
              </span>
              <span className='text-gray-700'>
                Inform friend o family ng plans
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-lg font-bold text-gray-800 mb-4 flex items-center gap-2'>
            <span className='text-blue-500'>✅</span> During Meetup
          </h4>
          <ul className='space-y-3'>
            <li className='flex items-center gap-3'>
              <span className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm'>
                1
              </span>
              <span className='text-gray-700'>
                Check item condition thoroughly
              </span>
            </li>
            <li className='flex items-center gap-3'>
              <span className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm'>
                2
              </span>
              <span className='text-gray-700'>
                Test electronics kung functional
              </span>
            </li>
            <li className='flex items-center gap-3'>
              <span className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm'>
                3
              </span>
              <span className='text-gray-700'>
                Kumpleto ang payment bago umalis
              </span>
            </li>
            <li className='flex items-center gap-3'>
              <span className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm'>
                4
              </span>
              <span className='text-gray-700'>
                Rate ang seller after transaction
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Emergency Contact */}
    <div className='bg-red-50 border border-red-200 rounded-2xl p-6 text-center'>
      <h3 className='text-xl font-bold text-red-800 mb-2'>
        Emergency o May Problem?
      </h3>
      <p className='text-red-700 mb-4'>
        Kung may emergency o suspicious activity kayo during transactions:
      </p>
      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <a
          href='tel:911'
          className='bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors'
        >
          🚨 Call 911 (Emergency)
        </a>
        <Link
          href='/support'
          className='bg-red-100 text-red-800 px-6 py-3 rounded-lg font-bold hover:bg-red-200 transition-colors border border-red-300'
        >
          📞 Contact TindaMo Support
        </Link>
      </div>
    </div>

    {/* Community Stats */}
    <div className='bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200'>
      <h3 className='text-2xl font-bold text-center mb-8 text-gray-800'>
        Trusted ng Filipino Community 🇵🇭
      </h3>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
        <div>
          <div className='text-3xl font-bold text-yellow-600'>10,000+</div>
          <div className='text-sm text-gray-600'>Safe Transactions</div>
        </div>
        <div>
          <div className='text-3xl font-bold text-orange-600'>95%</div>
          <div className='text-sm text-gray-600'>User Satisfaction</div>
        </div>
        <div>
          <div className='text-3xl font-bold text-red-600'>24/7</div>
          <div className='text-sm text-gray-600'>Support Available</div>
        </div>
        <div>
          <div className='text-3xl font-bold text-green-600'>0</div>
          <div className='text-sm text-gray-600'>Major Incidents</div>
        </div>
      </div>
    </div>
  </section>
)

export default Safety
