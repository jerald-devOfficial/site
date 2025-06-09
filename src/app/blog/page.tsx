'use client'

import ContactInfo from '@/components/contact-info'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { Calendar, Clock, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: '5 Creative na Barter Ideas para sa Spring Cleaning',
      category: 'Tips & Tricks',
      author: 'Maria Santos',
      date: 'Marso 15, 2025',
      readTime: '5 min read',
      excerpt:
        'Paano mo ma-turn ang mga clutter mo into valuable trades ngayong spring cleaning season. Discover creative ways to transform your unused items into treasures.',
      href: '/blog/5-creative-barter-ideas-for-spring-cleaning',
      tags: ['Bartering', 'Spring Cleaning', 'Sustainability', 'Tips'],
      emoji: '🌸',
      borderColor: 'border-green-500',
      hoverColor: 'group-hover:text-green-600',
      linkColor: 'text-green-600'
    },
    {
      id: 2,
      title: 'Paano Manalo sa Auctions Nang Hindi Nag-overbid',
      category: 'Strategy',
      author: 'Carlos Dela Cruz',
      date: 'Marso 20, 2025',
      readTime: '7 min read',
      excerpt:
        'Mga proven strategies para makakuha ng best deals sa inyong neighborhood auctions. Learn the art of smart bidding without breaking the bank.',
      href: '/blog/how-to-win-auctions-without-overbidding',
      tags: ['Auctions', 'Bidding', 'Strategy', 'Budget'],
      emoji: '🏆',
      borderColor: 'border-blue-500',
      hoverColor: 'group-hover:text-blue-600',
      linkColor: 'text-blue-600'
    },
    {
      id: 3,
      title: 'Success Story: Na-furnish ang Buong Apartment via Trades',
      category: 'Success Stories',
      author: 'Miguel Santos',
      date: 'Marso 25, 2025',
      readTime: '8 min read',
      excerpt:
        'Real user journey: from empty apartment to fully furnished home through smart trading. An inspiring transformation story that shows what`s possible.',
      href: '/blog/success-story-furnished-apartment-via-trades',
      tags: ['Success Story', 'Furniture', 'Apartment', 'Budget', 'Community'],
      emoji: '🏠',
      borderColor: 'border-purple-500',
      hoverColor: 'group-hover:text-purple-600',
      linkColor: 'text-purple-600'
    }
  ]

  return (
    <div className='bg-[#F9FAFB] text-[#222] font-sans'>
      <Header />
      <div className='min-h-screen bg-gradient-to-br from-slate-50 to-gray-100'>
        {/* Blog Header */}
        <div className='bg-white shadow-sm'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8'>
            <div className='flex items-center space-x-3 mb-4'>
              <Image
                src='/logo.png'
                alt='TindaMo Logo'
                width={32}
                height={32}
                className='sm:w-10 sm:h-10'
                sizes='100vw'
                priority
              />
              <h1 className='text-2xl sm:text-3xl font-bold text-gray-900'>
                TindaMo
              </h1>
            </div>
            <h2 className='text-xl sm:text-2xl font-semibold text-gray-800 mb-2'>
              Blog
            </h2>
            <p className='text-sm sm:text-base text-gray-600'>
              Tips, stories, and insights from our Filipino trading community
            </p>
          </div>
        </div>

        {/* Blog Content */}
        <div className='max-w-4xl mx-auto p-4 sm:p-6 lg:p-8'>
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <div className='p-4 sm:p-6 lg:p-8'>
              <div className='mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg'>
                <div className='flex items-start space-x-3'>
                  <div className='text-2xl'>📝</div>
                  <div>
                    <h3 className='text-lg font-semibold text-blue-800 mb-2'>
                      Community Stories & Tips
                    </h3>
                    <p className='text-blue-700 text-sm leading-relaxed'>
                      Discover real stories from our Filipino community members,
                      learn trading strategies, and get inspired by creative
                      bartering ideas. May kwento ka rin ba? We&apos;d love to
                      hear from you!
                    </p>
                  </div>
                </div>
              </div>

              {/* Blog Articles Grid */}
              <div className='space-y-8'>
                {articles.map((article) => (
                  <article
                    key={article.id}
                    className='border-b border-gray-200 pb-8 last:border-b-0'
                  >
                    <Link href={article.href} className='group block'>
                      <div
                        className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 ${article.borderColor}`}
                      >
                        <div className='flex items-start gap-4'>
                          <div className='text-3xl'>{article.emoji}</div>
                          <div className='flex-1'>
                            <div className='mb-3'>
                              <span className='inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full'>
                                {article.category}
                              </span>
                            </div>

                            <h3
                              className={`text-xl font-semibold text-gray-900 mb-3 ${article.hoverColor} transition-colors duration-200`}
                            >
                              {article.title}
                            </h3>

                            <div className='flex items-center space-x-4 text-sm text-gray-600 mb-3'>
                              <div className='flex items-center space-x-1'>
                                <User className='w-4 h-4' />
                                <span>{article.author}</span>
                              </div>
                              <div className='flex items-center space-x-1'>
                                <Calendar className='w-4 h-4' />
                                <span>{article.date}</span>
                              </div>
                              <div className='flex items-center space-x-1'>
                                <Clock className='w-4 h-4' />
                                <span>{article.readTime}</span>
                              </div>
                            </div>

                            <p className='text-gray-700 mb-4 leading-relaxed'>
                              {article.excerpt}
                            </p>

                            <div className='flex items-center justify-between'>
                              <div className='flex flex-wrap gap-2'>
                                {article.tags.slice(0, 3).map((tag) => (
                                  <span
                                    key={tag}
                                    className='bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded'
                                  >
                                    {tag}
                                  </span>
                                ))}
                                {article.tags.length > 3 && (
                                  <span className='text-gray-500 text-xs'>
                                    +{article.tags.length - 3} more
                                  </span>
                                )}
                              </div>

                              <div
                                className={`${article.linkColor} text-sm font-medium group-hover:translate-x-1 transition-transform`}
                              >
                                Basahin ang buong kwento →
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {/* Call to Action */}
              <div className='mt-12 text-center'>
                <div className='bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200'>
                  <h3 className='text-xl font-bold text-gray-800 mb-3'>
                    May Kwento Ka Rin Ba? 📖
                  </h3>
                  <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
                    We love hearing success stories from our Filipino trading
                    community! Whether it&apos;s an amazing trade, a creative
                    barter, or tips that helped you succeed, gusto namin
                    i-feature ang inyong story.
                  </p>
                  <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Link
                      href='/#join'
                      className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium'
                    >
                      Join TindaMo Community
                    </Link>
                    <button className='bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium'>
                      Share Your Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ContactInfo
            title='Questions or Story Ideas?'
            subtitle='Want to contribute to our blog or have questions about trading? Nandito kami para tumulong:'
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog
