import ContactInfo from '@/components/contact-info'
import Footer from '@/components/footer'
import Header from '@/components/header'
import {
  AlertTriangle,
  CheckCircle,
  Eye,
  Home,
  MapPin,
  MessageSquare,
  Shield,
  Users
} from 'lucide-react'
import Image from 'next/image'

const SafetyTips = () => {
  const sections = [
    {
      id: 'overview',
      title: '1. Safety First Philosophy',
      icon: <Shield className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            At TindaMo, your safety is our top priority. Local trading should be
            convenient, rewarding, and most importantly, safe for everyone
            involved. These safety tips will help you have positive experiences
            while protecting yourself and others.
          </p>
          <p className='mb-4'>
            Remember: if something doesn&apos;t feel right, trust your
            instincts. It&apos;s always better to walk away from a deal than to
            put yourself at risk.
          </p>
          <div className='bg-green-50 border-l-4 border-green-400 p-4'>
            <p className='text-sm text-green-800'>
              <strong>Golden Rule:</strong> If you wouldn&apos;t feel
              comfortable meeting someone in this situation, don&apos;t do it.
              Your safety is worth more than any deal.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'meeting-safety',
      title: '2. Safe Meeting Practices',
      icon: <MapPin className='w-5 h-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            2.1 Choose the Right Location
          </h4>
          <div className='mb-4'>
            <p className='mb-2'>
              <strong className='text-green-600'>
                ✅ Safe Places to Meet:
              </strong>
            </p>
            <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
              <li>Shopping center parking lots with good lighting</li>
              <li>Coffee shops or restaurants</li>
              <li>
                Police station parking lots (many offer safe exchange zones)
              </li>
              <li>Busy public areas with lots of foot traffic</li>
              <li>Bank parking lots with security cameras</li>
            </ul>
          </div>

          <div className='mb-4'>
            <p className='mb-2'>
              <strong className='text-red-600'>❌ Places to Avoid:</strong>
            </p>
            <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
              <li>Isolated areas or empty parking lots</li>
              <li>Residential addresses (yours or theirs)</li>
              <li>Dimly lit areas, especially at night</li>
              <li>Areas you&apos;re unfamiliar with</li>
              <li>Private properties or gated communities</li>
            </ul>
          </div>

          <h4 className='font-semibold text-gray-800 mb-3'>
            2.2 Timing Matters
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Meet during daylight hours when possible</li>
            <li>Avoid very early morning or late evening meetings</li>
            <li>Choose times when your meeting location will be busy</li>
            <li>Allow plenty of time - don&apos;t rush the interaction</li>
          </ul>
        </div>
      )
    },
    {
      id: 'personal-safety',
      title: '3. Personal Safety Guidelines',
      icon: <Users className='w-5 h-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            3.1 Before You Meet
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>
              Tell a friend or family member where you&apos;re going and when
            </li>
            <li>
              Share the other person&apos;s profile and contact information
            </li>
            <li>Set a check-in time with someone you trust</li>
            <li>Fully charge your phone before leaving</li>
            <li>Research the meeting location in advance</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            3.2 During the Meeting
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Bring a friend if possible, or meet in a group setting</li>
            <li>Keep your phone easily accessible</li>
            <li>Stay in public view - don&apos;t go to secluded areas</li>
            <li>Trust your instincts - if something feels wrong, leave</li>
            <li>Don&apos;t bring large amounts of cash</li>
            <li>Stay alert and avoid distractions</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            3.3 Transportation Safety
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Drive yourself when possible</li>
            <li>Park in a well-lit, visible area</li>
            <li>Keep your car doors locked until you&apos;re ready to leave</li>
            <li>Have your keys ready before walking to your car</li>
            <li>If using public transport, plan your route in advance</li>
          </ul>

          <div className='bg-yellow-50 border-l-4 border-yellow-400 p-4'>
            <p className='text-sm text-yellow-800'>
              <strong>Emergency Tip:</strong> If you feel unsafe at any point,
              don&apos;t hesitate to call 911 or local emergency services. Your
              safety is more important than completing any transaction.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'online-safety',
      title: '4. Online Communication Safety',
      icon: <MessageSquare className='w-5 h-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            4.1 Protecting Your Privacy
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Use TindaMo&apos;s messaging system for initial contact</li>
            <li>Don&apos;t share personal information too quickly</li>
            <li>
              Avoid sharing your home address, workplace, or daily routines
            </li>
            <li>Be cautious about sharing social media profiles</li>
            <li>
              Use a Google Voice number if you need to share a phone number
            </li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            4.2 Red Flags in Communication
          </h4>
          <div className='bg-red-50 p-4 rounded-lg mb-4'>
            <p className='text-red-800 font-semibold mb-2'>⚠️ Watch out for:</p>
            <ul className='list-disc list-inside text-red-700 space-y-1'>
              <li>Requests to move conversation off-platform immediately</li>
              <li>Pressure to meet immediately or in unusual locations</li>
              <li>Refusal to provide additional photos or information</li>
              <li>Overly emotional or urgent language</li>
              <li>Poor grammar that suggests automated responses</li>
              <li>Requests for personal financial information</li>
            </ul>
          </div>

          <h4 className='font-semibold text-gray-800 mb-3'>
            4.3 Verify Before You Meet
          </h4>
          <ul className='list-disc list-inside text-gray-600 space-y-1'>
            <li>Ask for additional photos of items from different angles</li>
            <li>Video chat if selling expensive items</li>
            <li>Check the person&apos;s profile history and reviews</li>
            <li>Ask specific questions about the item or service</li>
            <li>Confirm meeting details in writing before heading out</li>
          </ul>
        </div>
      )
    },
    {
      id: 'transaction-safety',
      title: '5. Safe Transaction Practices',
      icon: <CheckCircle className='w-5 h-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            5.1 Payment Safety
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Use cash for most local transactions</li>
            <li>For large amounts, meet at a bank to verify bills</li>
            <li>Consider using payment apps for added security</li>
            <li>Never wire money or use gift cards as payment</li>
            <li>Don&apos;t provide banking information or passwords</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            5.2 Item Verification
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Inspect items thoroughly before payment</li>
            <li>Test electronics and appliances if possible</li>
            <li>Check for all included accessories or parts</li>
            <li>Verify serial numbers for expensive items</li>
            <li>Take photos of the item and transaction</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            5.3 Documentation
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Keep records of your communications</li>
            <li>Take photos of items before and after transaction</li>
            <li>Save receipts or proof of payment</li>
            <li>Document any issues immediately</li>
          </ul>

          <div className='bg-blue-50 border-l-4 border-blue-400 p-4'>
            <p className='text-sm text-blue-800'>
              <strong>Barter Tip:</strong> When trading items, make sure both
              parties are satisfied with the condition and value of exchanged
              items before completing the trade.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'scam-prevention',
      title: '6. Avoiding Common Scams',
      icon: <Eye className='w-5 h-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            6.1 Common Scam Types
          </h4>

          <div className='mb-4'>
            <h5 className='font-medium text-gray-700 mb-2'>Overpayment Scam</h5>
            <p className='text-gray-600 text-sm mb-2'>
              Buyer sends more money than requested and asks for refund of
              difference.
            </p>
            <p className='text-red-600 text-sm'>
              <strong>Avoid:</strong> Never accept overpayment or provide
              refunds to strangers.
            </p>
          </div>

          <div className='mb-4'>
            <h5 className='font-medium text-gray-700 mb-2'>
              Fake Payment Confirmation
            </h5>
            <p className='text-gray-600 text-sm mb-2'>
              Scammer shows fake payment app screenshots or emails.
            </p>
            <p className='text-red-600 text-sm'>
              <strong>Avoid:</strong> Verify payments in your own app before
              completing transaction.
            </p>
          </div>

          <div className='mb-4'>
            <h5 className='font-medium text-gray-700 mb-2'>
              Shipping/Courier Scam
            </h5>
            <p className='text-gray-600 text-sm mb-2'>
              Buyer claims they&apos;ll send a courier or shipping label for
              pickup.
            </p>
            <p className='text-red-600 text-sm'>
              <strong>Avoid:</strong> TindaMo is for local trades only. Meet in
              person.
            </p>
          </div>

          <h4 className='font-semibold text-gray-800 mb-3'>
            6.2 Warning Signs
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Deals that seem too good to be true</li>
            <li>Urgency pressure (&quot;must decide now&quot;)</li>
            <li>Requests to go off-platform for communication</li>
            <li>Poor quality photos or stolen images</li>
            <li>Refusal to meet in person locally</li>
            <li>Requests for personal information upfront</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            6.3 If You Suspect a Scam
          </h4>
          <ul className='list-disc list-inside text-gray-600 space-y-1'>
            <li>Stop all communication immediately</li>
            <li>Report the user through TindaMo</li>
            <li>Don&apos;t provide any additional information</li>
            <li>Take screenshots as evidence</li>
            <li>Trust your instincts - when in doubt, walk away</li>
          </ul>
        </div>
      )
    },
    {
      id: 'reporting',
      title: '7. Reporting and Getting Help',
      icon: <AlertTriangle className='w-5 h-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            7.1 When to Report
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Suspicious or threatening behavior</li>
            <li>Requests for inappropriate information</li>
            <li>Suspected fraud or scam attempts</li>
            <li>Violation of community guidelines</li>
            <li>Harassment or inappropriate contact</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            7.2 How to Report
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Use the report button on user profiles or listings</li>
            <li>Contact TindaMo support directly for serious issues</li>
            <li>Provide detailed information and screenshots</li>
            <li>Block users who make you uncomfortable</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            7.3 Emergency Situations
          </h4>
          <div className='bg-red-50 border-l-4 border-red-400 p-4 mb-4'>
            <p className='text-red-800 font-semibold mb-2'>
              🚨 If you&apos;re in immediate danger:
            </p>
            <ul className='list-disc list-inside text-red-700 space-y-1'>
              <li>Call 911 or your local emergency number</li>
              <li>Move to a safe, public location</li>
              <li>
                Don&apos;t worry about the transaction - prioritize your safety
              </li>
              <li>Report the incident to TindaMo after you&apos;re safe</li>
            </ul>
          </div>

          <h4 className='font-semibold text-gray-800 mb-3'>
            7.4 Support Resources
          </h4>
          <ul className='list-disc list-inside text-gray-600 space-y-1'>
            <li>TindaMo Support Center for platform-related issues</li>
            <li>Local police for criminal activity</li>
            <li>Better Business Bureau for business disputes</li>
            <li>Consumer protection agencies for fraud</li>
          </ul>
        </div>
      )
    },
    {
      id: 'special-situations',
      title: '8. Special Safety Considerations',
      icon: <Home className='w-5 h-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            8.1 High-Value Items
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Meet at a police station for expensive transactions</li>
            <li>Bring a knowledgeable friend to verify authenticity</li>
            <li>Use secure payment methods that offer protection</li>
            <li>Verify serial numbers and documentation</li>
            <li>
              Consider meeting at the seller&apos;s bank for large cash
              transactions
            </li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            8.2 Vehicles and Large Items
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Meet at a public location with good lighting</li>
            <li>Inspect thoroughly and test drive in safe areas</li>
            <li>Verify ownership documents before payment</li>
            <li>Use a trusted mechanic for pre-purchase inspections</li>
            <li>Complete paperwork at the DMV when possible</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            8.3 Services and Work
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Verify credentials and insurance for professional services</li>
            <li>Get quotes in writing before work begins</li>
            <li>Check references and reviews</li>
            <li>Ensure proper licensing for regulated professions</li>
            <li>Use contracts for significant services</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            8.4 Family Safety
          </h4>
          <ul className='list-disc list-inside text-gray-600 space-y-1'>
            <li>Don&apos;t bring children to unknown meetups</li>
            <li>Keep family information private</li>
            <li>Be extra cautious with items marketed to children</li>
            <li>Teach older children about online safety</li>
          </ul>
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
              Safety Tips
            </h2>
            <p className='text-gray-600'>
              Your guide to safe and secure local trading
            </p>
          </div>
        </div>

        <div className='max-w-4xl mx-auto p-6'>
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <div className='p-8'>
              <div className='mb-8 p-6 bg-red-50 border border-red-200 rounded-lg'>
                <div className='flex items-start space-x-3'>
                  <Shield className='w-6 h-6 text-red-600 mt-0.5 flex-shrink-0' />
                  <div>
                    <h3 className='text-lg font-semibold text-red-800 mb-2'>
                      Safety First, Always
                    </h3>
                    <p className='text-red-700 text-sm leading-relaxed'>
                      These safety guidelines will help you have positive,
                      secure experiences while trading locally. Remember: no
                      deal is worth compromising your safety. Trust your
                      instincts and prioritize your well-being.
                    </p>
                  </div>
                </div>
              </div>

              <div className='mb-8 p-6 bg-gray-50 rounded-lg'>
                <h3 className='text-lg font-semibold text-gray-800 mb-4'>
                  Quick Safety Guide
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
            title='Need Help or Have Safety Concerns?'
            subtitle='If you have safety questions, need to report an incident, or require immediate assistance:'
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SafetyTips
