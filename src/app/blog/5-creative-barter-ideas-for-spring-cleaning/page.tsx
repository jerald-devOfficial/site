import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'
import Link from 'next/link'

const CreativeBarterIdeas = () => {
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
            <header className='px-8 py-8 bg-gradient-to-r from-green-50 to-emerald-50'>
              <h1 className='text-4xl font-black text-gray-900 mb-4 leading-tight'>
                5 Creative na Barter Ideas para sa Spring Cleaning 🌸
              </h1>
              <div className='flex flex-wrap items-center gap-4 text-gray-600 text-sm'>
                <span className='flex items-center gap-1'>
                  <span>📅</span> Marso 15, 2025
                </span>
                <span className='flex items-center gap-1'>
                  <span>👤</span> Maria Santos
                </span>
                <span className='flex items-center gap-1'>
                  <span>⏱️</span> 5 minuto read
                </span>
              </div>
            </header>

            <div className='p-8'>
              <div className='relative w-full h-64 mb-8 rounded-xl overflow-hidden'>
                <Image
                  src='/images/blog/spring-cleaning-filipino.png'
                  alt='Filipino family spring cleaning'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
                />
              </div>

              <div className='prose prose-lg max-w-none'>
                <p className='text-lg text-gray-700 leading-relaxed mb-8'>
                  Spring cleaning season na naman! Instead na itapon ang mga
                  gamit na hindi mo na ginagamit, bakit hindi mo nalang i-barter
                  sa TindaMo? Narito ang 5 creative na paraan kung paano mo
                  ma-turn ang mga clutter mo into valuable trades.
                </p>

                <h2 className='text-2xl font-bold text-gray-800 mb-4 mt-8'>
                  1. Clothes Swap Party 👗
                </h2>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Organize ka ng <strong>&ldquo;Palitan ng Damit&rdquo;</strong>{' '}
                  sa inyong barangay! Ang mga damit na hindi mo na suot ay
                  pwedeng maging bagong fashion statement ng iba. Napansin namin
                  sa TindaMo na ang vintage Filipino dresses at barong tagalog
                  ay sobrang in-demand ngayon.
                </p>
                <div className='bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r-lg'>
                  <p className='text-yellow-800'>
                    <strong>Tip ni Ate:</strong> I-categorize mo ang mga damit
                    ayon sa size at style. Mas madali makakita ng interested na
                    mag-trade!
                  </p>
                </div>

                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  2. Kitchen Gadgets Exchange 🍳
                </h2>
                <p className='text-gray-700 leading-relaxed mb-8'>
                  Maraming Pinoy families ang may duplicate na kitchen gadgets
                  galing sa wedding gifts o impulse buying. Yung rice cooker na
                  dalawa? Perfect for trade! Yung blender na hindi ginagamit?
                  May hanap niyan na kapitbahay mo for sure.
                </p>

                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  3. Plant Parents Paradise 🌱
                </h2>
                <p className='text-gray-700 leading-relaxed mb-8'>
                  Uso ngayon ang mga plants, lalo na during pandemic. Kung
                  marami kang cuttings o seedlings, pwede mo silang i-trade for
                  other plant varieties. May mga plant parents sa TindaMo na
                  nag-eexchange ng rare plants like monstera o fiddle leaf fig.
                </p>

                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  4. Books and Educational Materials 📚
                </h2>
                <p className='text-gray-700 leading-relaxed mb-8'>
                  Perfect timing para sa back-to-school season! Yung mga
                  textbooks ng anak mo na graduate na, pwedeng i-trade sa mas
                  bago o sa ibang grade level. Maraming parents sa TindaMo ang
                  nag-eexchange ng educational materials para ma-save sa gastos.
                </p>

                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  5. Hobby Items Swap 🎨
                </h2>
                <p className='text-gray-700 leading-relaxed mb-8'>
                  Naging guitar player ka during quarantine pero ngayon
                  nakalimutan mo na? Trade mo sa art supplies! Maraming Pinoys
                  ang nag-explore ng bagong hobbies during pandemic, at marami
                  ring nag-move on sa iba. Perfect opportunity para sa hobby
                  items exchange.
                </p>

                <div className='bg-blue-50 border-l-4 border-blue-400 p-6 my-8 rounded-r-lg'>
                  <h3 className='text-lg font-bold text-blue-800 mb-2'>
                    Success Story ni Kuya Jun:
                  </h3>
                  <p className='text-blue-700'>
                    &ldquo;Nakakuha ako ng mountain bike through barter!
                    Nag-trade ako ng gaming setup ko na hindi ko na ginagamit
                    dahil busy na sa work. Mas healthy pa ang naging lifestyle
                    ko ngayon. Salamat TindaMo!&rdquo; - Jun, Quezon City
                  </p>
                </div>

                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  Mga Tips para sa Successful Barter:
                </h2>
                <ul className='list-disc list-inside mb-8 space-y-2 text-gray-700'>
                  <li>I-describe mo nang maayos ang condition ng item mo</li>
                  <li>Mag-take ng maraming photos from different angles</li>
                  <li>Be honest about any flaws o damages</li>
                  <li>Meet sa public places para sa safety</li>
                  <li>Use in-app chat para documented ang lahat</li>
                </ul>

                <div className='bg-green-50 border border-green-200 rounded-xl p-6 text-center'>
                  <h3 className='text-xl font-bold text-green-800 mb-2'>
                    Ready na ba kayo mag-spring cleaning? 🧹
                  </h3>
                  <p className='text-green-700 mb-4'>
                    Join na sa TindaMo at simulan ang inyong barter journey
                    ngayong spring cleaning season!
                  </p>
                  <Link
                    href='/#join'
                    className='inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors'
                  >
                    Sumali sa TindaMo Ngayon!
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

export default CreativeBarterIdeas
