import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'
import Link from 'next/link'

const SuccessStoryFurnishedApartment = () => {
  return (
    <div className='flex flex-col min-h-screen bg-[#F9FAFB] text-[#222] font-sans'>
      <Header />

      <main className='flex-1'>
        {/* Sticky navigation */}
        <nav className='sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm'>
          <div className='max-w-4xl mx-auto px-4 py-4'>
            <Link
              href='/blog'
              className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors'
            >
              <span>←</span> Back to Blog
            </Link>
          </div>
        </nav>

        <div className='max-w-4xl mx-auto px-4 py-8'>
          <article className='bg-white rounded-2xl shadow-xl overflow-hidden'>
            <header className='px-8 py-8 bg-gradient-to-r from-purple-50 to-pink-50'>
              <h1 className='text-4xl font-black text-gray-900 mb-4 leading-tight'>
                Success Story: Paano Ko Na-furnish ang Buong Apartment through
                TindaMo Trades 🏠
              </h1>
              <div className='flex flex-wrap items-center gap-4 text-gray-600 text-sm'>
                <span className='flex items-center gap-1'>
                  <span>📅</span> Marso 25, 2025
                </span>
                <span className='flex items-center gap-1'>
                  <span>👤</span> Miguel Santos
                </span>
                <span className='flex items-center gap-1'>
                  <span>⏱️</span> 8 minuto read
                </span>
              </div>
            </header>

            <div className='p-8'>
              <div className='relative w-full h-64 mb-8 rounded-xl overflow-hidden'>
                <Image
                  src='/images/blog/apartment-transformation-filipino.png'
                  alt='Filipino apartment transformation through trades'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
                />
              </div>

              <div className='prose prose-lg max-w-none'>
                <div className='bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400 p-6 mb-8 rounded-r-lg'>
                  <p className='text-lg text-blue-800 font-medium italic'>
                    &ldquo;From empty apartment to fully furnished home in 6
                    months, spending less than ₱15,000 cash. Eto yung kwento ko
                    kung paano naging possible ang imposible through smart
                    trading sa TindaMo.&rdquo;
                    <br />
                    <span className='text-blue-600 font-semibold'>
                      - Miguel Santos, 28, Software Developer, Quezon City
                    </span>
                  </p>
                </div>

                <h2 className='text-2xl font-bold text-gray-800 mb-4 mt-8'>
                  Ang Simula: Empty Apartment, Limited Budget 🏗️
                </h2>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  Noong January 2025, nag-move ako sa bagong apartment sa QC.
                  Fresh graduate lang ako noon at yung sweldo ko, sakto lang sa
                  rent, utilities, at basic needs. Yung problema? Wala akong
                  furniture - literally walang sofa, dining table, bed frame,
                  ref, washing machine. Yung budget ko for furniture? ₱15,000
                  lang.
                </p>

                <p className='text-gray-700 leading-relaxed mb-8'>
                  Sa traditional shopping, imposible yang budget na yan. Pero
                  nakita ko yung TindaMo sa Facebook at naisip ko - bakit hindi
                  ko subukan yung barter system? May mga gamit naman ako galing
                  sa college na pwedeng i-trade.
                </p>

                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  Trade #1: Gaming Setup → Dining Set 🎮➡️🍽️
                </h2>
                <div className='bg-gray-50 rounded-xl p-6 mb-8'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <h4 className='font-bold text-gray-800 mb-3'>
                        What I Traded Away:
                      </h4>
                      <ul className='list-disc list-inside text-gray-700 space-y-1'>
                        <li>Gaming PC (3-year-old pero working pa)</li>
                        <li>Gaming chair</li>
                        <li>Gaming monitor 24&quot;</li>
                        <li>Mechanical keyboard</li>
                        <li>Gaming mouse</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className='font-bold text-gray-800 mb-3'>
                        What I Got:
                      </h4>
                      <ul className='list-disc list-inside text-gray-700 space-y-1'>
                        <li>4-seater dining table (solid wood)</li>
                        <li>4 dining chairs</li>
                        <li>₱3,000 cash (dagdag ng trader)</li>
                      </ul>
                    </div>
                  </div>
                  <div className='mt-4 p-3 bg-blue-50 rounded-lg'>
                    <p className='text-sm text-blue-800'>
                      <strong>Lesson learned:</strong> Naging practical ako.
                      Kailangan ko ng dining set para makapag-invite ng friends
                      at family. Gaming pwede na sa laptop.
                    </p>
                  </div>
                </div>

                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  Trade #2: Old Textbooks → Mini Ref 📚➡️❄️
                </h2>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Marami akong engineering textbooks na hindi ko na ginagamit.
                  Sa normal na trade, mga ₱50-100 lang per book sa secondhand
                  bookstores. Pero nakita ko sa TindaMo may nag-post ng mini ref
                  na looking for educational books para sa anak niya.
                </p>

                <div className='bg-green-50 border border-green-200 rounded-lg p-4 mb-8'>
                  <p className='text-green-700'>
                    <strong>Smart Move:</strong> Instead na i-sell individually
                    yung books, ni-bundle ko lahat (around 25 books) at na-trade
                    ko for mini refrigerator worth ₱8,000. Malaking tipid
                    compared sa pagbili ng brand new!
                  </p>
                </div>

                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  Trade #3: Collectibles → Sofa Set 🎭➡️🛋️
                </h2>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  College ako naging collector ng Funko Pops at mga anime
                  figures. May around 50+ items ako na naka-display lang sa
                  shelf. Nakita ko sa TindaMo may couple na nag-ooffload ng
                  2-seater sofa set kasi mag-uupgrade daw sila.
                </p>

                <p className='text-gray-700 leading-relaxed mb-8'>
                  Hindi nila interested sa cash pero collector din pala sila ng
                  toys! Perfect match. Nag-trade kami ng mga 30 pieces ng Funko
                  Pops for their sofa set na almost brand new pa.
                </p>

                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  Trade #4: Laptop + Cash → Washing Machine 💻➡️🧺
                </h2>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  May extra laptop ako na ginagamit ko lang for backup. Instead
                  na mag-laundromat palagi (around ₱200 per week), nag-decide
                  ako mag-invest sa washing machine. Nakita ko sa auctions may
                  semi-automatic washing machine.
                </p>

                <div className='bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8'>
                  <p className='text-yellow-800'>
                    <strong>Strategy:</strong> Nag-bid ako ng laptop + ₱2,000
                    cash. Nanalo ako kasi unique yung offer ko compared sa pure
                    cash bids ng iba. Total value ng trade: around ₱12,000 para
                    sa washing machine.
                  </p>
                </div>

                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  Trade #5: Bike + Gadgets → Bed Frame + Mattress 🚲➡️🛏️
                </h2>
                <p className='text-gray-700 leading-relaxed mb-8'>
                  Last major trade ko ay yung mountain bike ko na hindi ko na
                  nagagamit (dahil work from home), plus some gadgets like
                  tablet at speakers. Na-trade ko lahat for queen size bed frame
                  with foam mattress.
                </p>

                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  Final Cash Purchases: Yung mga Hindi Ma-trade 💰
                </h2>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Sa remaining ₱12,000 budget ko (₱15k original budget minus ₱3k
                  na nagastos sa mga miscellaneous), nag-focus ako sa mga
                  essentials na hindi ko ma-trade:
                </p>

                <ul className='list-disc list-inside mb-8 space-y-2 text-gray-700'>
                  <li>Electric fan - ₱2,500 (Hanabishi, brand new)</li>
                  <li>Basic cookware set - ₱1,500 (pots, pans, utensils)</li>
                  <li>Curtains at rods - ₱1,200</li>
                  <li>LED bulbs at electrical needs - ₱800</li>
                  <li>Storage boxes at organizers - ₱1,000</li>
                  <li>
                    Misc items (toilet paper holder, trash bins, etc.) - ₱1,500
                  </li>
                </ul>

                <div className='bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8'>
                  <h3 className='text-xl font-bold text-purple-800 mb-4'>
                    Final Results: Apartment Transformation 🎉
                  </h3>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <h4 className='font-bold text-purple-700 mb-2'>
                        Living Room:
                      </h4>
                      <ul className='text-purple-600 text-sm space-y-1'>
                        <li>✅ 2-seater sofa set</li>
                        <li>✅ Coffee table (bonus from sofa trade)</li>
                        <li>✅ Electric fan</li>
                        <li>✅ LED lighting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className='font-bold text-purple-700 mb-2'>
                        Bedroom:
                      </h4>
                      <ul className='text-purple-600 text-sm space-y-1'>
                        <li>✅ Queen size bed with mattress</li>
                        <li>✅ Storage boxes as makeshift dresser</li>
                        <li>✅ Curtains for privacy</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className='font-bold text-purple-700 mb-2'>
                        Kitchen/Dining:
                      </h4>
                      <ul className='text-purple-600 text-sm space-y-1'>
                        <li>✅ 4-seater dining set</li>
                        <li>✅ Mini refrigerator</li>
                        <li>✅ Complete cookware</li>
                        <li>✅ Storage solutions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className='font-bold text-purple-700 mb-2'>
                        Utility:
                      </h4>
                      <ul className='text-purple-600 text-sm space-y-1'>
                        <li>✅ Washing machine</li>
                        <li>✅ Laundry area setup</li>
                        <li>✅ Cleaning supplies storage</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  Mga Natutuhan Ko sa 6-Month Journey 📝
                </h2>

                <h3 className='text-lg font-semibold text-gray-700 mb-3'>
                  1. Value Assessment Skills
                </h3>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  Natuto ako mag-research ng market values ng mga items. Hindi
                  lahat ng trade ay equal value - minsan may dagdag cash, minsan
                  may bonus items. Importante na alam mo yung worth ng binibigay
                  mo.
                </p>

                <h3 className='text-lg font-semibold text-gray-700 mb-3'>
                  2. Negotiation at People Skills
                </h3>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  Sa TindaMo, hindi lang barter ang trade. Sometimes may dagdag
                  cash, sometimes may bonus items. Natuto ako makipag-negotiate
                  at makipag-usap sa iba&apos;t ibang klase ng tao.
                </p>

                <h3 className='text-lg font-semibold text-gray-700 mb-3'>
                  3. Patience is Key
                </h3>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  Hindi lahat ng trade nangyayari agad. May mga items na na-post
                  ko ng 2-3 weeks bago nakakuha ng good offer. Pero worth it
                  naman yung wait kasi nakakuha ako ng better deals.
                </p>

                <h3 className='text-lg font-semibold text-gray-700 mb-3'>
                  4. Community Building
                </h3>
                <p className='text-gray-700 leading-relaxed mb-8'>
                  Yung mga naging trading partners ko, naging friends ko na rin.
                  May mga repeat transactions ako sa kanila at minsan
                  nag-rerefer pa sila ng ibang traders. TindaMo is not just a
                  platform, it&apos;s a community.
                </p>

                <div className='bg-red-50 border border-red-200 rounded-xl p-6 text-center mb-8'>
                  <h3 className='text-xl font-bold text-red-800 mb-2'>
                    Want to Start Your Own Trading Journey? 🚀
                  </h3>
                  <p className='text-red-700 mb-4'>
                    Kung may mga items ka na hindi mo na ginagamit, simulan mo
                    na ang inyong sariling transformation story sa TindaMo!
                    Remember: one person&apos;s clutter is another person&apos;s
                    treasure.
                  </p>
                  <Link
                    href='/#join'
                    className='inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors'
                  >
                    Start Trading sa TindaMo!
                  </Link>
                </div>

                <div className='mt-8 pt-8 border-t border-gray-200'>
                  <p className='text-sm text-gray-600 italic'>
                    <strong>Update (Abril 2025):</strong> 4 months later, naging
                    trading hub na yung apartment ko! Marami na akong naging
                    trade partners na naging close friends. Currently,
                    nag-eexplore ako ng bigger trades para sa car. Stay tuned
                    for the next success story! 🚗
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default SuccessStoryFurnishedApartment
