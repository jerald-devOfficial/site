import ContactInfo from '@/components/contact-info'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { Award, Globe, Heart, MapPin, Target, Users, Zap } from 'lucide-react'
import Image from 'next/image'

const AboutUs = () => {
  const sections = [
    {
      id: 'our-story',
      title: '1. Our Story',
      icon: <Heart className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            TindaMo was born from a simple observation: people have things they
            don&apos;t need, and there are others nearby who need exactly those
            things. Yet connecting these neighbors remained surprisingly
            difficult in our increasingly digital world.
          </p>
          <p className='mb-4'>
            Founded in 2025, TindaMo bridges this gap by creating a hyper-local
            marketplace that brings communities together through trade, barter,
            and meaningful exchanges. We believe that the best deals aren&apos;t
            just about price – they&apos;re about building connections with the
            people around you.
          </p>
          <div className='bg-yellow-50 border-l-4 border-yellow-400 p-4'>
            <p className='text-sm text-yellow-800'>
              <strong>Our Vision:</strong> A world where every neighborhood is a
              thriving community of mutual support, where what you need is just
              around the corner.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'mission',
      title: '2. Our Mission',
      icon: <Target className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            To revolutionize local commerce by making it simple, safe, and
            rewarding for neighbors to connect, trade, and build stronger
            communities together.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>What We Do</h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Connect neighbors through geo-mapped local listings</li>
            <li>Enable creative bartering without traditional currency</li>
            <li>Facilitate exciting local bidding and auctions</li>
            <li>Build trust through verified user profiles and reviews</li>
            <li>Promote sustainable consumption through reuse and sharing</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>Why It Matters</h4>
          <p>
            In an era of global e-commerce giants, we&apos;re bringing commerce
            back to its roots – personal, local, and community-driven. Every
            transaction on TindaMo strengthens neighborhood bonds and reduces
            environmental impact.
          </p>
        </div>
      )
    },
    {
      id: 'values',
      title: '3. Our Values',
      icon: <Award className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            Our values guide every decision we make and every feature we build:
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            🤝 Community First
          </h4>
          <p className='mb-4'>
            We prioritize community well-being over profit. Every feature is
            designed to strengthen local connections and build lasting
            relationships between neighbors.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            🛡️ Safety & Trust
          </h4>
          <p className='mb-4'>
            We&apos;re committed to creating the safest local marketplace.
            Through verification, reporting tools, and safety guidelines, we
            ensure every interaction is secure and trustworthy.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            🌱 Sustainability
          </h4>
          <p className='mb-4'>
            By encouraging reuse, sharing, and local exchange, we&apos;re
            reducing waste and promoting a more sustainable way of consuming
            goods and services.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>⚡ Innovation</h4>
          <p className='mb-4'>
            We continuously innovate to make local trading more convenient,
            exciting, and rewarding through features like geo-mapping, smart
            bidding, and creative barter systems.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>🌍 Inclusivity</h4>
          <p>
            TindaMo is for everyone. We&apos;re building an inclusive platform
            that welcomes people from all backgrounds, income levels, and walks
            of life.
          </p>
        </div>
      )
    },
    {
      id: 'how-it-works',
      title: '4. How TindaMo Works',
      icon: <Zap className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            TindaMo combines the best of modern technology with the timeless
            appeal of local community trading:
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            📍 Geo-Mapped Discovery
          </h4>
          <p className='mb-4'>
            See what&apos;s available near you on our interactive map. Filter by
            distance, category, and availability to find exactly what you need
            within walking distance.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            🔄 Creative Bartering
          </h4>
          <p className='mb-4'>
            No cash? No problem! Propose trades using items you have for things
            you need. Our smart matching system suggests potential barter
            opportunities based on your listings and interests.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>⏰ Timed Bidding</h4>
          <p className='mb-4'>
            Participate in exciting local auctions with countdown timers. Set
            maximum bids and let our system handle the competition while you go
            about your day.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            💬 Safe Communication
          </h4>
          <p>
            Connect with neighbors through our secure in-app messaging system.
            Share additional photos, negotiate terms, and arrange safe meetups
            in public spaces.
          </p>
        </div>
      )
    },
    {
      id: 'impact',
      title: '5. Our Impact',
      icon: <Globe className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            Since launching, TindaMo has been making a real difference in
            communities:
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <div className='bg-green-50 p-4 rounded-lg'>
              <h4 className='font-semibold text-green-800 mb-2'>
                10,000+ Successful Trades
              </h4>
              <p className='text-green-700 text-sm'>
                Neighbors helping neighbors find what they need locally
              </p>
            </div>
            <div className='bg-blue-50 p-4 rounded-lg'>
              <h4 className='font-semibold text-blue-800 mb-2'>
                500+ Communities Served
              </h4>
              <p className='text-blue-700 text-sm'>
                From urban neighborhoods to suburban communities
              </p>
            </div>
            <div className='bg-purple-50 p-4 rounded-lg'>
              <h4 className='font-semibold text-purple-800 mb-2'>
                ₱82M+ in Local Value
              </h4>
              <p className='text-purple-700 text-sm'>
                Economic value kept within local communities
              </p>
            </div>
            <div className='bg-orange-50 p-4 rounded-lg'>
              <h4 className='font-semibold text-orange-800 mb-2'>
                50,000+ Items Reused
              </h4>
              <p className='text-orange-700 text-sm'>
                Preventing waste through local sharing and trading
              </p>
            </div>
          </div>

          <h4 className='font-semibold text-gray-800 mb-3'>Success Stories</h4>
          <div className='bg-gray-50 p-4 rounded-lg'>
            <p className='text-gray-700 italic text-sm mb-2'>
              &quot;I traded my daughter&apos;s outgrown bike for a coffee
              machine that I use every morning. Not only did I get something I
              needed, but I met a wonderful neighbor who&apos;s become a
              friend.&quot;
            </p>
            <p className='text-gray-600 text-xs'>
              - Ana Marie Santos, Taguig City
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'team',
      title: '6. Our Team',
      icon: <Users className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            TindaMo is built by a passionate team of community advocates,
            technology innovators, and local commerce enthusiasts.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>Our Approach</h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>User-centered design based on real community needs</li>
            <li>Continuous feedback loops with our community members</li>
            <li>Agile development focused on safety and reliability</li>
            <li>Local-first thinking in every product decision</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>Join Our Mission</h4>
          <p className='mb-4'>
            We&apos;re always looking for talented individuals who share our
            passion for building stronger communities through technology.
            Whether you&apos;re a developer, designer, community manager, or
            have other skills, we&apos;d love to hear from you.
          </p>

          <div className='bg-blue-50 border-l-4 border-blue-400 p-4'>
            <p className='text-sm text-blue-800'>
              <strong>Interested in joining our team?</strong> Check out our
              current openings or reach out to us directly. We believe diverse
              teams build better products for diverse communities.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'future',
      title: '7. The Future of Local Commerce',
      icon: <MapPin className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            We&apos;re just getting started. Our roadmap includes exciting
            features that will make local trading even more convenient and
            rewarding:
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>Coming Soon</h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>AI-powered trade recommendations</li>
            <li>Community events and swap meets</li>
            <li>Local business integration</li>
            <li>Sustainability tracking and rewards</li>
            <li>Extended barter chains across multiple users</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>Long-term Vision</h4>
          <p className='mb-4'>
            We envision a future where every neighborhood has a thriving local
            economy, where resources are shared efficiently, and where
            technology brings people together rather than driving them apart.
          </p>

          <p>
            TindaMo is more than an app – it&apos;s a movement toward more
            connected, sustainable, and resilient communities. Join us in
            building this future, one local trade at a time.
          </p>
        </div>
      )
    }
  ]

  return (
    <div className='bg-[#F9FAFB] text-[#222] font-sans'>
      <Header />
      <div className='min-h-screen bg-gradient-to-br from-slate-50 to-gray-100'>
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
              About Us
            </h2>
            <p className='text-gray-600'>
              Building stronger communities through local commerce
            </p>
          </div>
        </div>

        <div className='max-w-4xl mx-auto p-6'>
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <div className='p-8'>
              <div className='mb-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg'>
                <div className='flex items-start space-x-3'>
                  <Heart className='w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0' />
                  <div>
                    <h3 className='text-lg font-semibold text-yellow-800 mb-2'>
                      Connecting Neighbors, Building Communities
                    </h3>
                    <p className='text-yellow-700 text-sm leading-relaxed'>
                      TindaMo is more than a marketplace – we&apos;re building a
                      movement that brings neighbors together through trade,
                      sharing, and mutual support. Every transaction strengthens
                      our communities.
                    </p>
                  </div>
                </div>
              </div>

              <div className='mb-8 p-6 bg-gray-50 rounded-lg'>
                <h3 className='text-lg font-semibold text-gray-800 mb-4'>
                  Quick Navigation
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className='flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors duration-200 py-1'
                    >
                      {section.icon}
                      <span className='text-sm'>{section.title}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className='space-y-12'>
                {sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className='scroll-mt-20'
                  >
                    <div className='flex items-center space-x-3 mb-4'>
                      <div className='p-2 bg-slate-100 rounded-lg text-slate-600'>
                        {section.icon}
                      </div>
                      <h3 className='text-xl font-semibold text-gray-800'>
                        {section.title}
                      </h3>
                    </div>
                    <div className='text-gray-700 leading-relaxed pl-11'>
                      {section.content}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>

          <ContactInfo
            title='Get in Touch'
            subtitle="Have questions about TindaMo or want to learn more about our mission? We'd love to hear from you:"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
