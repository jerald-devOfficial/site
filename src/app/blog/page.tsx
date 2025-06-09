'use client'

import ContactInfo from '@/components/contact-info'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { Calendar, Clock, Tag, User } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null)

  const articles = [
    {
      id: 1,
      title: '5 Creative Barter Ideas for Spring Cleaning',
      category: 'Tips & Tricks',
      author: 'Sarah Chen',
      date: 'March 15, 2024',
      readTime: '4 min read',
      excerpt:
        'Spring cleaning season is here! Instead of throwing away items you no longer need, consider these creative bartering ideas that can help you declutter while gaining something valuable.',
      content: `
        <p>Spring cleaning season is upon us, and before you start filling up trash bags, consider this: one person's clutter could be another person's treasure. Bartering is not only environmentally friendly but can also help you get things you actually need while clearing out your space.</p>

        <h3>1. Clothing Swaps</h3>
        <p>That designer jacket you never wear could be perfect for someone who has professional tools you need for a DIY project. Clothing swaps are particularly popular because:</p>
        <ul>
          <li>Clothes retain value longer than most items</li>
          <li>Sizes and styles vary, making perfect matches likely</li>
          <li>Seasonal clothing can be especially valuable</li>
        </ul>

        <h3>2. Book for Plant Exchanges</h3>
        <p>Many book lovers are also plant enthusiasts. Trade that stack of books you've already read for some beautiful succulents or herb starters. It's a win-win that keeps giving!</p>

        <h3>3. Electronics for Sporting Goods</h3>
        <p>Have an old tablet collecting dust? Someone might trade it for that exercise bike they're not using. Electronics and sporting goods often have similar values and both tend to be underutilized.</p>

        <h3>4. Kids' Items Rotation</h3>
        <p>Children outgrow toys, clothes, and equipment so quickly. Connect with other parents for regular swaps:</p>
        <ul>
          <li>Toys for different age groups</li>
          <li>Outgrown clothes for current sizes</li>
          <li>Sports equipment as interests change</li>
        </ul>

        <h3>5. Skill-for-Stuff Trades</h3>
        <p>Don't overlook trading your skills! Offer tutoring, pet-sitting, or handyman services in exchange for items you need. Sometimes your expertise is more valuable than any physical item.</p>

        <p><strong>Remember:</strong> The key to successful bartering is being open-minded and creative. What seems worthless to you might be exactly what your neighbor has been searching for!</p>
      `,
      tags: ['Bartering', 'Spring Cleaning', 'Sustainability', 'Tips']
    },
    {
      id: 2,
      title: 'How to Win Auctions Without Overbidding',
      category: 'Strategy',
      author: 'Michael Rodriguez',
      date: 'March 10, 2024',
      readTime: '6 min read',
      excerpt:
        'Local auctions can be exciting, but they can also lead to overspending if you&apos;re not careful. Here are proven strategies to help you win the items you want at prices you can afford.',
      content: `
        <p>Local auctions are thrilling, but the excitement can lead to overbidding. With the right strategy, you can win items at great prices while staying within budget.</p>

        <h3>1. Set Your Maximum Before You Start</h3>
        <p>This is the golden rule of auction success. Before bidding begins:</p>
        <ul>
          <li>Research the item's market value</li>
          <li>Decide your absolute maximum bid</li>
          <li>Write it down where you can see it</li>
          <li>Stick to it no matter what</li>
        </ul>

        <h3>2. Understand Auction Psychology</h3>
        <p>Bidding wars trigger competitive instincts. Combat this by:</p>
        <ul>
          <li>Taking deep breaths between bids</li>
          <li>Focusing on value, not winning</li>
          <li>Remembering that losing a bid means saving money</li>
        </ul>

        <h3>3. Bid Strategically</h3>
        <p>Timing matters in auctions:</p>
        <ul>
          <li><strong>Early birds:</strong> Jump in early with small increments to establish interest</li>
          <li><strong>Snipers:</strong> Wait until the last moments to place your maximum bid</li>
          <li><strong>Steady climbers:</strong> Bid consistently in small increments</li>
        </ul>

        <h3>4. Watch Other Bidders</h3>
        <p>Pay attention to patterns:</p>
        <ul>
          <li>Who bids aggressively vs. cautiously?</li>
          <li>Who has unlimited budgets vs. clear limits?</li>
          <li>When do people typically drop out?</li>
        </ul>

        <h3>5. Know When to Walk Away</h3>
        <p>The best auction winners know when NOT to bid:</p>
        <ul>
          <li>When the price exceeds your research</li>
          <li>When emotions are running high</li>
          <li>When you're bidding just to win</li>
        </ul>

        <h3>6. Factor in Total Costs</h3>
        <p>Remember to include:</p>
        <ul>
          <li>Any buyer's premiums or fees</li>
          <li>Transportation costs</li>
          <li>Time investment</li>
          <li>Potential repair costs</li>
        </ul>

        <p><strong>Pro tip:</strong> The items you don't bid on often save you more money than the ones you win. Focus on finding great value, not just winning auctions.</p>
      `,
      tags: ['Auctions', 'Bidding', 'Strategy', 'Budget']
    },
    {
      id: 3,
      title:
        'Success Story: How I Furnished My Apartment via Hyper-Local Trades',
      category: 'Success Stories',
      author: 'Emma Thompson',
      date: 'March 5, 2024',
      readTime: '8 min read',
      excerpt:
        'When I moved to a new city, I had almost no furniture and a tight budget. Here&apos;s how I completely furnished my apartment using local trades and creative bartering.',
      content: `
        <p>Moving to Seattle for a new job, I found myself in a typical millennial dilemma: a nice apartment with absolutely no furniture and a budget stretched thin by moving expenses. Traditional furniture shopping would have cost thousands, but TindaMo helped me create a home for fraction of the cost.</p>

        <h3>The Challenge</h3>
        <p>My situation was pretty dire:</p>
        <ul>
          <li>Empty one-bedroom apartment</li>
          <li>Limited budget after moving expenses</li>
          <li>No car for furniture pickup</li>
          <li>Needed everything: bed, couch, table, chairs, storage</li>
        </ul>

        <h3>Starting with What I Had</h3>
        <p>I took inventory of items that might have trade value:</p>
        <ul>
          <li>Professional camera equipment from my old freelance days</li>
          <li>Designer clothes that didn't fit my new lifestyle</li>
          <li>Technical books from my computer science degree</li>
          <li>Kitchen appliances I'd received as graduation gifts</li>
        </ul>

        <h3>My First Trade: Camera for Couch</h3>
        <p>I posted my rarely-used DSLR camera and was contacted by Sarah, a photography student. She offered a beautiful leather couch her family was replacing. The trade value was fair, and suddenly I had my first major piece of furniture!</p>

        <h3>The Kitchen Table Barter</h3>
        <p>Maria, a young professional, wanted my stand mixer in exchange for a solid wood dining table and chairs. The table was slightly scratched, but the quality was incredible – much better than anything I could have afforded new.</p>

        <h3>Building Momentum</h3>
        <p>Success bred more success:</p>
        <ul>
          <li>Designer jeans → vintage dresser (from a young family downsizing)</li>
          <li>Programming books → desk and office chair (from a retiring developer)</li>
          <li>Food processor → bookshelf and lamp (from newlyweds combining households)</li>
        </ul>

        <h3>The Community Aspect</h3>
        <p>What surprised me most wasn't the money I saved over $3,000 while getting higher-quality items than I could have afforded otherwise), but the community I found. Sarah and I still trade items seasonally. Maria became a friend and occasional client. The young family invites me to neighborhood barbecues.</p>

        <h3>Lessons Learned</h3>
        <p>Through this experience, I discovered:</p>
        <ul>
          <li><strong>Quality over quantity:</strong> Each piece I traded for was chosen carefully</li>
          <li><strong>Patience pays off:</strong> Waiting for the right trade was always worth it</li>
          <li><strong>Stories matter:</strong> Every piece in my apartment has a story</li>
          <li><strong>Community is valuable:</strong> The relationships were often more valuable than the items</li>
        </ul>

        <h3>Tips for Furniture Trading</h3>
        <p>Based on my experience:</p>
        <ul>
          <li>Be flexible with style – cohesion can come with accessories</li>
          <li>Prioritize quality construction over brand names</li>
          <li>Consider transportation logistics before committing to trades</li>
          <li>Don't rush – the right piece will come along</li>
          <li>Build relationships, not just transactions</li>
        </ul>

        <p>Six months later, my apartment feels like home. Every piece has character and history. Most importantly, I'm part of a community that values sustainability, creativity, and connection over consumption.</p>

        <p><strong>The best part?</strong> When I eventually move again, I know I can trade these items forward to help someone else create their perfect space.</p>
      `,
      tags: ['Success Story', 'Furniture', 'Apartment', 'Budget', 'Community']
    }
  ]

  const closeArticle = () => {
    setSelectedArticle(null)
  }

  const selectedPost = selectedArticle
    ? articles.find((article) => article.id === selectedArticle)
    : null

  return (
    <div className='bg-[#F9FAFB] text-[#222] font-sans'>
      <Header />
      <div className='min-h-screen bg-gradient-to-br from-slate-50 to-gray-100'>
        {selectedPost ? (
          // Article View
          <div className='max-w-4xl mx-auto p-6'>
            <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
              <div className='p-8'>
                <button
                  onClick={closeArticle}
                  className='text-blue-600 hover:text-blue-800 mb-6 flex items-center'
                >
                  ← Back to Blog
                </button>

                <div className='mb-6'>
                  <span className='inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3'>
                    {selectedPost.category}
                  </span>
                  <h1 className='text-3xl font-bold text-gray-900 mb-4'>
                    {selectedPost.title}
                  </h1>

                  <div className='flex items-center space-x-4 text-sm text-gray-600 mb-6'>
                    <div className='flex items-center space-x-1'>
                      <User className='w-4 h-4' />
                      <span>{selectedPost.author}</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <Calendar className='w-4 h-4' />
                      <span>{selectedPost.date}</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <Clock className='w-4 h-4' />
                      <span>{selectedPost.readTime}</span>
                    </div>
                  </div>
                </div>

                <div
                  className='prose max-w-none text-gray-700 leading-relaxed'
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />

                <div className='mt-8 pt-6 border-t border-gray-200'>
                  <div className='flex items-center space-x-2 mb-4'>
                    <Tag className='w-4 h-4 text-gray-500' />
                    <span className='text-sm font-medium text-gray-700'>
                      Tags:
                    </span>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {selectedPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className='bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Blog Listing View
          <>
            <div className='bg-white shadow-sm'>
              <div className='max-w-4xl mx-auto px-6 py-8'>
                <div className='flex items-center space-x-3 mb-4'>
                  <Image
                    src='/logo.png'
                    alt='TindaMo Logo'
                    width={40}
                    height={40}
                    sizes='100vw'
                    priority
                  />
                  <h1 className='text-3xl font-bold text-gray-900'>TindaMo</h1>
                </div>
                <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
                  Blog
                </h2>
                <p className='text-gray-600'>
                  Tips, stories, and insights from our community
                </p>
              </div>
            </div>

            <div className='max-w-4xl mx-auto p-6'>
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <div className='p-8'>
                  <div className='mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg'>
                    <div className='flex items-start space-x-3'>
                      <div className='text-2xl'>📝</div>
                      <div>
                        <h3 className='text-lg font-semibold text-blue-800 mb-2'>
                          Community Stories & Tips
                        </h3>
                        <p className='text-blue-700 text-sm leading-relaxed'>
                          Discover real stories from our community members,
                          learn trading strategies, and get inspired by creative
                          bartering ideas. Have a story to share? We&apos;d love
                          to hear from you!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='space-y-8'>
                    {articles.map((article) => (
                      <article
                        key={article.id}
                        className='border-b border-gray-200 pb-8 last:border-b-0'
                      >
                        <div className='mb-3'>
                          <span className='inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full'>
                            {article.category}
                          </span>
                        </div>

                        <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                          <button
                            onClick={() => setSelectedArticle(article.id)}
                            className='hover:text-blue-600 transition-colors duration-200 text-left'
                          >
                            {article.title}
                          </button>
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

                        <p className='text-gray-700 mb-4'>{article.excerpt}</p>

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

                          <button
                            onClick={() => setSelectedArticle(article.id)}
                            className='text-blue-600 hover:text-blue-800 text-sm font-medium'
                          >
                            Read More →
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className='mt-12 text-center'>
                    <div className='bg-gray-50 rounded-lg p-6'>
                      <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                        Have a Story to Share?
                      </h3>
                      <p className='text-gray-600 mb-4'>
                        We love hearing success stories from our community!
                        Whether it&apos;s an amazing trade, a creative barter,
                        or tips that helped you succeed, we&apos;d love to
                        feature your story.
                      </p>
                      <button className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200'>
                        Share Your Story
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <ContactInfo
                title='Questions or Story Ideas?'
                subtitle="Want to contribute to our blog or have questions about trading? We're here to help:"
              />
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Blog
