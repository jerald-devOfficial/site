import ContactInfo from '@/components/contact-info'
import Footer from '@/components/footer'
import Header from '@/components/header'
import {
  CreditCard,
  HelpCircle,
  Mail,
  Map,
  MessageCircle,
  Phone,
  Search,
  Settings,
  Shield,
  Users
} from 'lucide-react'
import Image from 'next/image'

const SupportCenter = () => {
  const faqSections = [
    {
      id: 'getting-started',
      title: '1. Getting Started',
      icon: <Users className='w-5 h-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            How do I create an account?
          </h4>
          <p className='mb-4 text-gray-600'>
            Download the TindaMo app or visit our website and click &quot;Sign
            Up&quot;. You&apos;ll need to provide your email, create a password,
            and verify your location. We may ask for additional verification to
            ensure community safety.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            How do I verify my profile?
          </h4>
          <p className='mb-4 text-gray-600'>
            Profile verification helps build trust in our community. You can
            verify your profile by confirming your phone number, uploading a
            government ID, or connecting your social media accounts. Verified
            profiles get priority visibility.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            What can I trade on TindaMo?
          </h4>
          <p className='mb-4 text-gray-600'>
            You can trade most household items, electronics, furniture, books,
            clothing, tools, and services. Check our prohibited items list for
            what&apos;s not allowed. Remember, everything should be legal to own
            and sell in your area.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            How do I find items near me?
          </h4>
          <p className='text-gray-600'>
            Use our map view to see items visually, or browse by category and
            set your distance radius. You can filter by type (buy, sell, barter,
            auction) and sort by distance, price, or posting date.
          </p>
        </div>
      )
    },
    {
      id: 'buying-selling',
      title: '2. Buying & Selling',
      icon: <CreditCard className='w-5 h-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            How do I list an item for sale?
          </h4>
          <p className='mb-4 text-gray-600'>
            Tap the &quot;+&quot; button, add clear photos, write a detailed
            description, set your price, and choose your listing type (sale,
            barter, or auction). Include dimensions, condition, and any flaws to
            build trust with buyers.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            What payment methods are accepted?
          </h4>
          <p className='mb-4 text-gray-600'>
            Cash is the most common for local trades. For larger transactions,
            you can use Venmo, PayPal, or other digital payment apps. Always
            verify payment before handing over items. We don&apos;t currently
            process payments directly.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            How do I negotiate prices?
          </h4>
          <p className='mb-4 text-gray-600'>
            Use our built-in messaging system to make offers. Be respectful and
            realistic. Many sellers expect some negotiation, especially for
            higher-priced items. Don&apos;t lowball - start with a reasonable
            offer.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            Can I return items?
          </h4>
          <p className='text-gray-600'>
            Returns depend on the individual seller&apos;s policy. Always
            inspect items carefully before completing the transaction. For
            expensive items, consider asking about return policies before
            meeting.
          </p>
        </div>
      )
    },
    {
      id: 'bartering',
      title: '3. Bartering & Trading',
      icon: <Users className='w-5 h-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            How does bartering work?
          </h4>
          <p className='mb-4 text-gray-600'>
            Instead of money, you trade items of similar value. Look for
            listings marked &quot;Barter Accepted&quot; and propose a trade
            using items from your profile. Both parties must agree on the trade
            value before meeting.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            How do I determine fair trade value?
          </h4>
          <p className='mb-4 text-gray-600'>
            Research similar items online, consider condition and age, and be
            honest about your item&apos;s value. Our trade suggestion feature
            can help recommend fair swaps based on category and condition.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            What if the trade values don&apos;t match exactly?
          </h4>
          <p className='mb-4 text-gray-600'>
            You can add cash to even out the trade, include multiple items, or
            find additional items to trade. Many traders are flexible if the
            values are close and both items are wanted.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            Can I cancel a barter agreement?
          </h4>
          <p className='text-gray-600'>
            Yes, until you meet and complete the trade. Be respectful and
            communicate clearly if you need to cancel. Repeated cancellations
            may affect your reputation score.
          </p>
        </div>
      )
    },
    {
      id: 'bidding-auctions',
      title: '4. Bidding & Auctions',
      icon: <Map className='w-5 h-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            How do auctions work?
          </h4>
          <p className='mb-4 text-gray-600'>
            Sellers set a starting price and auction duration. Bidders compete
            until time runs out. The highest bidder wins and must complete the
            transaction within 24 hours. You can set maximum bids to auto-bid
            for you.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            What happens if I win an auction?
          </h4>
          <p className='mb-4 text-gray-600'>
            You&apos;ll receive a notification and have 24 hours to contact the
            seller and arrange payment/pickup. Failure to follow through may
            result in account restrictions and negative feedback.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            Can I retract a bid?
          </h4>
          <p className='mb-4 text-gray-600'>
            Bids are binding commitments. You can only retract in exceptional
            circumstances (seller changed item description, etc.). Contact
            support immediately if you need help with a bid issue.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            How do reserve prices work?
          </h4>
          <p className='text-gray-600'>
            Some auctions have hidden reserve prices - minimum amounts the
            seller will accept. If bidding doesn&apos;t reach the reserve, the
            item won&apos;t sell. You&apos;ll see &quot;Reserve not met&quot;
            until bidding reaches the minimum.
          </p>
        </div>
      )
    },
    {
      id: 'safety-security',
      title: '5. Safety & Security',
      icon: <Shield className='w-5 h-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            How do I stay safe when meeting buyers/sellers?
          </h4>
          <p className='mb-4 text-gray-600'>
            Always meet in public, well-lit places. Consider police station safe
            exchange zones. Bring a friend for expensive items. Trust your
            instincts - if something feels wrong, leave. Never meet at private
            homes for initial transactions.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            How do I report suspicious activity?
          </h4>
          <p className='mb-4 text-gray-600'>
            Use the report button on any profile or listing. Contact our support
            team immediately for urgent safety concerns. We take all reports
            seriously and will investigate promptly. Keep screenshots as
            evidence.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            What information should I keep private?
          </h4>
          <p className='mb-4 text-gray-600'>
            Don&apos;t share your home address, workplace, or personal schedule
            until you&apos;ve met and trust the other person. Use our in-app
            messaging initially. Consider using a Google Voice number for phone
            communication.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            How do I avoid scams?
          </h4>
          <p className='text-gray-600'>
            Be wary of deals that seem too good to be true. Never send money
            upfront or pay for shipping on local items. Verify payment before
            handing over items. Trust verified profiles more than new accounts.
          </p>
        </div>
      )
    },
    {
      id: 'technical-issues',
      title: '6. Technical Issues',
      icon: <Settings className='w-5 h-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            The app is running slowly or crashing
          </h4>
          <p className='mb-4 text-gray-600'>
            Try force-closing and reopening the app. Check for app updates in
            your app store. Restart your device if problems persist. Clear the
            app cache if you&apos;re on Android. Contact support if issues
            continue.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            I can&apos;t upload photos
          </h4>
          <p className='mb-4 text-gray-600'>
            Check that TindaMo has camera and photo permissions in your device
            settings. Ensure you have sufficient storage space. Try reducing
            photo file sizes. Make sure you&apos;re connected to WiFi for large
            uploads.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            My location isn&apos;t showing correctly
          </h4>
          <p className='mb-4 text-gray-600'>
            Enable location services for TindaMo in your device settings. Ensure
            you&apos;re in an area with good GPS signal. Try toggling location
            services off and on. Update your address manually in profile
            settings if needed.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            I&apos;m not receiving notifications
          </h4>
          <p className='text-gray-600'>
            Check notification permissions for TindaMo in your device settings.
            Verify your notification preferences in the app settings. Ensure
            your phone isn&apos;t in Do Not Disturb mode. Check if notifications
            are working for other apps.
          </p>
        </div>
      )
    }
  ]

  const contactOptions = [
    {
      icon: <MessageCircle className='w-6 h-6' />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      details: 'Available Mon-Fri, 9 AM - 6 PM PST',
      action: 'Start Chat',
      available: true
    },
    {
      icon: <Mail className='w-6 h-6' />,
      title: 'Email Support',
      description: 'Send us an email',
      details: 'support@tindamo.com',
      action: 'Send Email',
      available: true
    },
    {
      icon: <Phone className='w-6 h-6' />,
      title: 'Phone Support',
      description: 'Talk to our team',
      details: '1-800-TINDAMO (1-800-846-3266)',
      action: 'Call Now',
      available: false
    },
    {
      icon: <Search className='w-6 h-6' />,
      title: 'Help Articles',
      description: 'Browse our knowledge base',
      details: 'Detailed guides and tutorials',
      action: 'Browse Articles',
      available: true
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
              Support Center
            </h2>
            <p className='text-gray-600'>
              Get help, find answers, and connect with our support team
            </p>
          </div>
        </div>

        <div className='max-w-4xl mx-auto p-6'>
          {/* Contact Options */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden mb-8'>
            <div className='p-8'>
              <h3 className='text-xl font-semibold text-gray-800 mb-6'>
                How can we help you?
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {contactOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`p-4 border rounded-lg ${
                      option.available
                        ? 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                        : 'border-gray-100 bg-gray-50'
                    } transition-colors`}
                  >
                    <div className='flex items-start space-x-3'>
                      <div
                        className={`p-2 rounded-lg ${
                          option.available
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {option.icon}
                      </div>
                      <div className='flex-1'>
                        <h4
                          className={`font-semibold mb-1 ${
                            option.available ? 'text-gray-800' : 'text-gray-500'
                          }`}
                        >
                          {option.title}
                        </h4>
                        <p
                          className={`text-sm mb-2 ${
                            option.available ? 'text-gray-600' : 'text-gray-400'
                          }`}
                        >
                          {option.description}
                        </p>
                        <p
                          className={`text-xs mb-3 ${
                            option.available ? 'text-gray-500' : 'text-gray-400'
                          }`}
                        >
                          {option.details}
                        </p>
                        <button
                          className={`px-4 py-2 rounded text-sm font-medium ${
                            option.available
                              ? 'bg-blue-600 text-white hover:bg-blue-700'
                              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          }`}
                          disabled={!option.available}
                        >
                          {option.action}
                          {!option.available && ' (Coming Soon)'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Sections */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <div className='p-8'>
              <div className='mb-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg'>
                <div className='flex items-start space-x-3'>
                  <HelpCircle className='w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0' />
                  <div>
                    <h3 className='text-lg font-semibold text-blue-800 mb-2'>
                      How Can We Help You?
                    </h3>
                    <p className='text-blue-700 text-sm leading-relaxed'>
                      Whether you&apos;re new to TindaMo or a seasoned trader,
                      our support center has the resources you need to succeed.
                      Find answers below or contact us directly.
                    </p>
                  </div>
                </div>
              </div>

              <div className='mb-8 p-6 bg-gray-50 rounded-lg'>
                <h3 className='text-lg font-semibold text-gray-800 mb-4'>
                  Browse by Category
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                  {faqSections.map((section) => (
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
                {faqSections.map((section) => (
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
            title='Still Need Help?'
            subtitle="Can't find what you're looking for? Our friendly support team is here to assist you:"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SupportCenter
