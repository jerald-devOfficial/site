import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'
import Link from 'next/link'

const WinAuctionsGuide = () => {
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

        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8'>
          <article className='bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden'>
            <header className='px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-gradient-to-r from-blue-50 to-cyan-50'>
              <h1 className='text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 leading-tight'>
                Paano Manalo sa Auctions Nang Hindi Nag-overbid 🏆
              </h1>
              <div className='flex flex-wrap items-center gap-2 sm:gap-4 text-gray-600 text-xs sm:text-sm'>
                <span className='flex items-center gap-1'>
                  <span>📅</span> Marso 20, 2025
                </span>
                <span className='flex items-center gap-1'>
                  <span>👤</span> Carlos Dela Cruz
                </span>
                <span className='flex items-center gap-1'>
                  <span>⏱️</span> 7 minuto read
                </span>
              </div>
            </header>

            <div className='p-4 sm:p-6 lg:p-8'>
              <div className='relative w-full h-48 sm:h-56 lg:h-64 mb-6 sm:mb-8 rounded-lg sm:rounded-xl overflow-hidden'>
                <Image
                  src='/images/blog/auction-strategy-filipino.png'
                  alt='Filipino auction bidding strategy'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
                />
              </div>

              <div className='prose prose-base sm:prose-lg max-w-none'>
                <p className='text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8'>
                  Sa mundo ng online auctions sa TindaMo, hindi laging ang
                  pinakamataas na bid ang nananalo. Kailangan ng strategy,
                  timing, at diskarte para makakuha ng best deals sa inyong
                  neighborhood. Narito ang mga proven tips mula sa mga
                  successful bidders sa Pilipinas.
                </p>

                <h2 className='text-2xl font-bold text-gray-800 mb-4 mt-8'>
                  1. Research Muna Bago Mag-bid 🔍
                </h2>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Hindi porket maganda yung item sa picture, mag-bid ka na agad.
                  Check mo muna ang:
                </p>
                <ul className='list-disc list-inside mb-8 space-y-2 text-gray-700'>
                  <li>
                    Market price ng similar items sa iba&apos;t ibang platforms
                  </li>
                  <li>Condition ng item based sa photos at description</li>
                  <li>Seller rating at previous transaction history</li>
                  <li>Location ng seller (mas malapit, mas better)</li>
                </ul>

                <div className='bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg'>
                  <p className='text-blue-800'>
                    <strong>Pro Tip:</strong> Use Google Lens para ma-identify
                    ang exact model ng item. Minsan makakakita ka ng mas murang
                    brand new price sa mall!
                  </p>
                </div>

                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  2. Set Your Maximum Budget (At Stick To It!) 💰
                </h2>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Maraming tao ang na-caught up sa excitement ng bidding war at
                  nag-overbid. Bago ka mag-start ng bidding, tantyahin mo na
                  kung magkano lang ang willing mong gastusin.
                </p>

                <div className='bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8'>
                  <h3 className='font-bold text-yellow-800 mb-2'>
                    Budget Formula ni Kuya Carlos:
                  </h3>
                  <p className='text-yellow-700'>
                    <strong>
                      Maximum Bid = Market Price × 0.7 - Shipping Cost
                    </strong>
                    <br />
                    Example: iPhone 12 market price ₱35,000 × 0.7 = ₱24,500 -
                    ₱500 shipping = ₱24,000 max bid
                  </p>
                </div>

                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  3. Master the Art of Last-Minute Bidding ⏰
                </h2>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Sa TindaMo, maraming auctions ang natapos sa last few minutes.
                  Yung tinatawag namin na &ldquo;Sniping Strategy&rdquo; - hindi
                  ka mag-bid hanggang sa last 30 seconds ng auction.
                </p>

                <h3 className='text-lg font-semibold text-gray-700 mb-3'>
                  Bakit effective ang Last-Minute Bidding?
                </h3>
                <ul className='list-disc list-inside mb-8 space-y-2 text-gray-700'>
                  <li>Hindi ka na-caught up sa bidding war early on</li>
                  <li>Other bidders walang time mag-react</li>
                  <li>Mas focused ka sa actual value ng item</li>
                  <li>Less emotional attachment sa bidding process</li>
                </ul>

                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  4. Know Your Competition 👥
                </h2>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Observe mo yung mga frequent bidders sa mga auctions. May mga
                  patterns sila:
                </p>
                <ul className='list-disc list-inside mb-8 space-y-2 text-gray-700'>
                  <li>
                    <strong>Emotional Bidders:</strong> Mag-bid nang mataas agad
                    kapag nakita ang item
                  </li>
                  <li>
                    <strong>Patient Bidders:</strong> Wait till the last minute
                    (like you!)
                  </li>
                  <li>
                    <strong>Power Bidders:</strong> May malaking budget, hindi
                    sumusuko easily
                  </li>
                </ul>

                <div className='bg-green-50 border-l-4 border-green-400 p-6 my-8 rounded-r-lg'>
                  <h3 className='text-lg font-bold text-green-800 mb-2'>
                    Success Story ni Ate Jenny:
                  </h3>
                  <p className='text-green-700'>
                    &ldquo;Nakakuha ko ng washing machine worth ₱25,000 for only
                    ₱12,000! Inantay ko lang yung auction na malapit na matapos
                    at walang masyadong bidders. Timing lang talaga at patience.
                    Sa TindaMo kasi, maraming choices kaya hindi ka
                    ma-pressure.&rdquo; - Jenny, Makati City
                  </p>
                </div>

                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  5. Mga Red Flags na Iwasan 🚩
                </h2>
                <ul className='list-disc list-inside mb-8 space-y-2 text-gray-700'>
                  <li>Seller na bago at walang reviews pa</li>
                  <li>Photos na mukhang stock photos o galing sa internet</li>
                  <li>
                    Price na sobrang baba compared sa market value (baka
                    defective)
                  </li>
                  <li>Walang detailed description ng item condition</li>
                  <li>Hindi sumasagot sa mga tanong sa comments</li>
                </ul>

                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  6. Best Times to Bid 📅
                </h2>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Based sa data ng TindaMo, eto yung best times para mag-bid:
                </p>
                <ul className='list-disc list-inside mb-8 space-y-2 text-gray-700'>
                  <li>
                    <strong>Tuesday to Thursday:</strong> Less competition kasi
                    working days
                  </li>
                  <li>
                    <strong>Early morning (6-8 AM):</strong> Konti lang ang
                    active users
                  </li>
                  <li>
                    <strong>Late night (10 PM onwards):</strong> Marami nang
                    natutulog
                  </li>
                  <li>
                    <strong>During weekday lunch breaks:</strong> Quick bidding
                    lang
                  </li>
                </ul>

                <div className='bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8'>
                  <h3 className='text-lg font-bold text-purple-800 mb-2'>
                    Special Filipino Auction Tip: &ldquo;Pakimkim&rdquo;
                    Strategy
                  </h3>
                  <p className='text-purple-700'>
                    Pag nakita mo na maraming nag-bid sa isang item, huwag ka
                    muna makisali. Observe mo muna kung sino yung mga regular
                    bidders at maghanap ka ng similar item na mas konting
                    competition. Sa TindaMo, maraming similar items kaya hindi
                    ka ma-stuck sa isang auction lang.
                  </p>
                </div>

                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  Bonus: Mobile App Bidding Tips 📱
                </h2>
                <ul className='list-disc list-inside mb-8 space-y-2 text-gray-700'>
                  <li>
                    Enable notifications para sa mga auctions na nire-research
                    mo
                  </li>
                  <li>Save mo yung mga frequent search terms mo</li>
                  <li>Use quick bid buttons para sa last-minute bidding</li>
                  <li>Keep your payment methods updated para walang delay</li>
                </ul>

                <div className='bg-red-50 border border-red-200 rounded-xl p-6 text-center'>
                  <h3 className='text-xl font-bold text-red-800 mb-2'>
                    Ready na ba kayo maging Smart Bidder? 🎯
                  </h3>
                  <p className='text-red-700 mb-4'>
                    Join sa TindaMo at practice ang mga strategies na ito.
                    Remember: patience at strategy ang key sa successful
                    bidding!
                  </p>
                  <Link
                    href='/#join'
                    className='inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors'
                  >
                    Start Bidding sa TindaMo!
                  </Link>
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

export default WinAuctionsGuide
