'use client'

import Link from 'next/link'
import { useState } from 'react'

const BlogFaq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: 'Paano gumagana ang TindaMo?',
      answer:
        'TindaMo ay isang hyper-local marketplace na nakatuon sa Filipino communities. Pwede kayong mag-post ng mga items na gusto ninyong i-trade, i-bid, o i-sell sa inyong neighborhood. May in-app messaging system kami para sa safe communication at may verification system para sa mga users.'
    },
    {
      question: 'Safe ba ang makipagkita para sa trades?',
      answer:
        'Oo! Nire-recommend namin na mag-meet kayo sa public places tulad ng malls, coffee shops, o barangay halls. May in-app chat din kami na documented lahat ng conversations ninyo. Plus, may rating system kami para sa mga traders kaya makikita ninyo yung reputation ng kausap ninyo.'
    },
    {
      question: 'Ano-anong pwedeng i-trade o i-bid?',
      answer:
        'Halos lahat ng legal items! Popular categories ay electronics, furniture, appliances, books, clothing, kitchen items, at collectibles. Hindi lang items - may mga services din tulad ng tutoring, food delivery, o skilled work. Basta legal at safe, welcome sa TindaMo!'
    },
    {
      question: 'May bayad ba ang paggamit ng TindaMo?',
      answer:
        'Basic features ay libre! May premium features kami para sa mga business sellers, pero para sa regular users na nag-ttrrade lang ng personal items, totally free ang platform. Walang listing fees o transaction fees sa basic trades.'
    },
    {
      question: 'Paano kung may problema sa trade?',
      answer:
        'May dispute resolution system kami. Report lang sa support team namin through the app, at tutulong kami mag-mediate. May mga community moderators din kami na nakamonitor sa platform para sa mga suspicious activities.'
    }
  ]

  return (
    <section
      className='w-full max-w-6xl mx-auto flex flex-col gap-12 py-16 px-4'
      id='blog'
    >
      {/* Blog Section */}
      <div>
        <h2 className='text-3xl font-bold mb-8 text-center text-gray-800'>
          Resources & Mga Kwentong Pinoy 📚
        </h2>
        <p className='text-center text-gray-600 mb-8 max-w-2xl mx-auto'>
          Mga tips, strategies, at inspiring stories mula sa aming TindaMo
          community
        </p>

        <div className='grid md:grid-cols-3 gap-6'>
          <Link
            href='/blog/5-creative-barter-ideas-for-spring-cleaning'
            className='group'
          >
            <div className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 h-full border-l-4 border-green-500'>
              <div className='mb-4'>
                <span className='text-2xl'>🌸</span>
              </div>
              <h3 className='font-bold mb-3 text-lg group-hover:text-green-600 transition-colors'>
                5 Creative na Barter Ideas para sa Spring Cleaning
              </h3>
              <p className='text-gray-600 text-sm mb-4'>
                Paano mo ma-turn ang mga clutter mo into valuable trades ngayong
                spring cleaning season.
              </p>
              <div className='flex items-center gap-2 text-xs text-gray-500'>
                <span>📅 Marso 15, 2025</span>
                <span>•</span>
                <span>⏱️ 5 min read</span>
              </div>
              <div className='mt-4 text-green-600 text-sm font-medium group-hover:translate-x-1 transition-transform'>
                Basahin ang buong kwento →
              </div>
            </div>
          </Link>

          <Link
            href='/blog/how-to-win-auctions-without-overbidding'
            className='group'
          >
            <div className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 h-full border-l-4 border-blue-500'>
              <div className='mb-4'>
                <span className='text-2xl'>🏆</span>
              </div>
              <h3 className='font-bold mb-3 text-lg group-hover:text-blue-600 transition-colors'>
                Paano Manalo sa Auctions Nang Hindi Nag-overbid
              </h3>
              <p className='text-gray-600 text-sm mb-4'>
                Mga proven strategies para makakuha ng best deals sa inyong
                neighborhood auctions.
              </p>
              <div className='flex items-center gap-2 text-xs text-gray-500'>
                <span>📅 Marso 20, 2025</span>
                <span>•</span>
                <span>⏱️ 7 min read</span>
              </div>
              <div className='mt-4 text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform'>
                Alamin ang mga secrets →
              </div>
            </div>
          </Link>

          <Link
            href='/blog/success-story-furnished-apartment-via-trades'
            className='group'
          >
            <div className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 h-full border-l-4 border-purple-500'>
              <div className='mb-4'>
                <span className='text-2xl'>🏠</span>
              </div>
              <h3 className='font-bold mb-3 text-lg group-hover:text-purple-600 transition-colors'>
                Success Story: Na-furnish ang Buong Apartment via Trades
              </h3>
              <p className='text-gray-600 text-sm mb-4'>
                Real user journey: from empty apartment to fully furnished home
                through smart trading.
              </p>
              <div className='flex items-center gap-2 text-xs text-gray-500'>
                <span>📅 Marso 25, 2025</span>
                <span>•</span>
                <span>⏱️ 8 min read</span>
              </div>
              <div className='mt-4 text-purple-600 text-sm font-medium group-hover:translate-x-1 transition-transform'>
                Inspiring story →
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* FAQ Section with Accordions */}
      <div>
        <h2 className='text-3xl font-bold mb-8 text-center text-gray-800'>
          Frequently Asked Questions 🤔
        </h2>
        <p className='text-center text-gray-600 mb-8 max-w-2xl mx-auto'>
          Mga tanong na madalas natatanong ng mga bagong TindaMo users
        </p>

        <div className='max-w-3xl mx-auto space-y-4'>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md overflow-hidden'
            >
              <button
                className='w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors'
                onClick={() => toggleFaq(index)}
              >
                <span className='font-semibold text-gray-800 pr-4'>
                  {faq.question}
                </span>
                <span
                  className={`text-2xl transition-transform duration-200 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                >
                  ⌄
                </span>
              </button>
              {openFaq === index && (
                <div className='px-6 pb-4 pt-2 bg-gray-50 border-t border-gray-100'>
                  <p className='text-gray-700 leading-relaxed'>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='text-center mt-8'>
          <p className='text-gray-600 mb-4'>
            May iba pang tanong? Kontakin kami!
          </p>
          <Link
            href='/support'
            className='inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
          >
            📞 Contact Support
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogFaq
