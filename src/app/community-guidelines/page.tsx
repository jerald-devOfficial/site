import ContactInfo from '@/components/contact-info'
import Footer from '@/components/footer'
import Header from '@/components/header'
import {
  AlertTriangle,
  Ban,
  Eye,
  Handshake,
  Heart,
  MessageSquare,
  Scale,
  Shield,
  Star,
  Users
} from 'lucide-react'
import Image from 'next/image'

const CommunityGuidelines = () => {
  const sections = [
    {
      id: 'welcome',
      title: '1. Welcome to Our Community',
      icon: <Heart className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            Welcome to TindaMo! Our community is built on trust, respect, and
            mutual support. These Community Guidelines help create a safe,
            inclusive, and positive environment for everyone to connect, trade,
            and build meaningful relationships.
          </p>
          <p className='mb-4'>
            By participating in our community, you agree to follow these
            guidelines and contribute to making TindaMo a welcoming space for
            all users.
          </p>
          <div className='bg-green-50 border-l-4 border-green-400 p-4'>
            <p className='text-sm text-green-800'>
              <strong>Our Mission:</strong> To foster a community where everyone
              feels safe, respected, and valued while engaging in meaningful
              connections and transactions.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'core-values',
      title: '2. Our Core Values',
      icon: <Star className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            Our community is guided by these fundamental values:
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>2.1 Respect</h4>
          <p className='mb-4'>
            Treat all community members with dignity and respect, regardless of
            their background, beliefs, or opinions. Personal attacks,
            harassment, and discriminatory behavior have no place in our
            community.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>2.2 Honesty</h4>
          <p className='mb-4'>
            Be truthful in all your interactions. Provide accurate descriptions
            of items, be transparent about conditions and pricing, and honor
            your commitments.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>2.3 Safety</h4>
          <p className='mb-4'>
            Prioritize the safety and well-being of all community members.
            Report suspicious activity, follow safety guidelines for
            transactions, and help create a secure environment.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>2.4 Inclusivity</h4>
          <p>
            Embrace diversity and welcome people from all walks of life. Our
            community is stronger when we celebrate our differences and support
            one another.
          </p>
        </div>
      )
    },
    {
      id: 'acceptable-behavior',
      title: '3. Acceptable Behavior',
      icon: <Handshake className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            We encourage behavior that promotes a positive community experience:
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            3.1 Respectful Communication
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Use polite and courteous language in all interactions</li>
            <li>Listen to others and consider different perspectives</li>
            <li>Provide constructive feedback when appropriate</li>
            <li>Resolve conflicts peacefully through dialogue</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>3.2 Fair Trading</h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Provide accurate and detailed item descriptions</li>
            <li>Use clear, recent photos of items for sale</li>
            <li>Respond promptly to inquiries and messages</li>
            <li>Honor agreed-upon prices and terms</li>
            <li>Complete transactions in a timely manner</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            3.3 Community Support
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Help newcomers understand the platform</li>
            <li>Share useful tips and experiences</li>
            <li>Report inappropriate content or behavior</li>
            <li>Participate in community discussions constructively</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            3.4 Privacy Respect
          </h4>
          <ul className='list-disc list-inside text-gray-600 space-y-1'>
            <li>Respect others&apos; personal information and privacy</li>
            <li>Don&apos;t share private conversations without permission</li>
            <li>
              Use the platform&apos;s messaging system for initial contact
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'prohibited-behavior',
      title: '4. Prohibited Behavior',
      icon: <Ban className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            The following behaviors are strictly prohibited and may result in
            account suspension or termination:
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            4.1 Harassment and Abuse
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Bullying, intimidation, or threatening behavior</li>
            <li>Personal attacks based on identity, appearance, or beliefs</li>
            <li>Unwanted sexual advances or inappropriate content</li>
            <li>Stalking or persistent unwanted contact</li>
            <li>Doxxing or sharing personal information without consent</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            4.2 Dishonest Practices
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Posting fake or misleading item descriptions</li>
            <li>Using stolen or copyrighted images</li>
            <li>Price manipulation or fraudulent pricing schemes</li>
            <li>Creating multiple accounts to circumvent restrictions</li>
            <li>Leaving false reviews or ratings</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            4.3 Illegal Activities
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Selling prohibited, illegal, or regulated items</li>
            <li>Money laundering or other financial crimes</li>
            <li>Facilitating illegal transactions</li>
            <li>Violating intellectual property rights</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            4.4 Platform Abuse
          </h4>
          <ul className='list-disc list-inside text-gray-600 space-y-1'>
            <li>Spamming or excessive self-promotion</li>
            <li>Using automated tools or bots</li>
            <li>Attempting to hack or compromise the platform</li>
            <li>Circumventing security measures or restrictions</li>
          </ul>
        </div>
      )
    },
    {
      id: 'content-standards',
      title: '5. Content Standards',
      icon: <Eye className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            All content shared on TindaMo must meet our community standards:
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            5.1 Appropriate Content
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Keep all content family-friendly and appropriate</li>
            <li>
              Use clear, high-quality photos that accurately represent items
            </li>
            <li>Write honest and detailed descriptions</li>
            <li>
              Include relevant information about condition, size, and features
            </li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            5.2 Prohibited Content
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Adult content, nudity, or sexually explicit material</li>
            <li>Violent, disturbing, or graphic content</li>
            <li>Hate speech, discriminatory language, or offensive material</li>
            <li>Content that promotes illegal activities</li>
            <li>Spam, advertisements, or irrelevant promotional content</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            5.3 Item Listings
          </h4>
          <div className='bg-blue-50 border-l-4 border-blue-400 p-4'>
            <p className='text-sm text-blue-800 mb-2'>
              <strong>Best Practices for Listings:</strong>
            </p>
            <ul className='list-disc list-inside text-blue-700 text-sm space-y-1'>
              <li>Use multiple photos showing different angles</li>
              <li>Clearly state the condition (new, used, refurbished)</li>
              <li>Include dimensions, brand, model, or other specifications</li>
              <li>Set fair and reasonable prices</li>
              <li>Update availability promptly when items are sold</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'safety-guidelines',
      title: '6. Safety Guidelines',
      icon: <Shield className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            Your safety is our top priority. Follow these guidelines to ensure
            safe and secure transactions:
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            6.1 Meeting Safety
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Meet in public, well-lit areas with good foot traffic</li>
            <li>Consider meeting at police station safe exchange zones</li>
            <li>
              Bring a friend when possible, especially for high-value items
            </li>
            <li>Trust your instincts - if something feels wrong, leave</li>
            <li>Don&apos;t invite strangers to your home or go to theirs</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            6.2 Online Safety
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Keep personal information private until you meet in person</li>
            <li>
              Use TindaMo&apos;s messaging system for initial communications
            </li>
            <li>Don&apos;t click suspicious links or download unknown files</li>
            <li>Be cautious of deals that seem too good to be true</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            6.3 Transaction Safety
          </h4>
          <ul className='list-disc list-inside text-gray-600 space-y-1'>
            <li>Inspect items thoroughly before making payment</li>
            <li>Use secure payment methods when possible</li>
            <li>Keep records of your transactions</li>
            <li>Report any suspicious or fraudulent activity immediately</li>
          </ul>
        </div>
      )
    },
    {
      id: 'reporting',
      title: '7. Reporting Violations',
      icon: <AlertTriangle className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            Help us maintain a safe community by reporting violations of these
            guidelines:
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            7.1 How to Report
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>
              Use the &quot;Report&quot; button on profiles, listings, or
              messages
            </li>
            <li>Contact our support team through the help center</li>
            <li>Provide detailed information about the violation</li>
            <li>Include screenshots or evidence when relevant</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            7.2 What to Report
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Harassment, threats, or abusive behavior</li>
            <li>Fraudulent listings or suspicious activity</li>
            <li>Inappropriate content or spam</li>
            <li>Safety concerns or dangerous situations</li>
            <li>Violations of these community guidelines</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            7.3 Our Response Process
          </h4>
          <p className='mb-4'>We take all reports seriously and will:</p>
          <ul className='list-disc list-inside text-gray-600 space-y-1'>
            <li>Review reports within 24-48 hours</li>
            <li>Investigate the situation thoroughly</li>
            <li>Take appropriate action based on our findings</li>
            <li>Follow up with reporters when necessary</li>
          </ul>
        </div>
      )
    },
    {
      id: 'enforcement',
      title: '8. Enforcement and Consequences',
      icon: <Scale className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            Violations of these guidelines may result in the following actions:
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            8.1 Warning System
          </h4>
          <p className='mb-4'>
            First-time or minor violations typically result in a warning and
            guidance on how to comply with our guidelines.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            8.2 Content Removal
          </h4>
          <p className='mb-4'>
            Content that violates our guidelines will be removed, and users will
            be notified of the reason for removal.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            8.3 Account Restrictions
          </h4>
          <p className='mb-4'>
            Serious or repeated violations may result in temporary restrictions
            on account features such as messaging, posting, or bidding.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            8.4 Account Suspension
          </h4>
          <p className='mb-4'>
            Severe violations or repeated offenses may result in temporary
            account suspension.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            8.5 Account Termination
          </h4>
          <p className='mb-4'>
            The most serious violations, including illegal activities, threats,
            or persistent abuse, may result in permanent account termination.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            8.6 Appeals Process
          </h4>
          <p>
            If you believe an enforcement action was taken in error, you can
            appeal through our support center within 30 days of the action.
          </p>
        </div>
      )
    },
    {
      id: 'community-support',
      title: '9. Community Support and Resources',
      icon: <Users className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            We&apos;re here to support you and help you succeed in our
            community:
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>9.1 Help Center</h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Comprehensive guides on using TindaMo effectively</li>
            <li>Frequently asked questions and answers</li>
            <li>Video tutorials and step-by-step instructions</li>
            <li>Best practices for safe trading</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            9.2 Community Forums
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Connect with other community members</li>
            <li>Share tips and success stories</li>
            <li>Ask questions and get advice</li>
            <li>Stay updated on platform changes and features</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            9.3 Safety Resources
          </h4>
          <ul className='list-disc list-inside text-gray-600 space-y-1'>
            <li>Local police safe exchange zones directory</li>
            <li>Safety checklists for different types of transactions</li>
            <li>Emergency contact information and reporting procedures</li>
            <li>Educational content on recognizing and avoiding scams</li>
          </ul>
        </div>
      )
    },
    {
      id: 'updates',
      title: '10. Updates and Changes',
      icon: <MessageSquare className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            These Community Guidelines may be updated from time to time to
            reflect changes in our platform, legal requirements, or community
            needs.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            10.1 Notification Process
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>We&apos;ll notify users of significant changes via email</li>
            <li>Updates will be posted on our website and in the app</li>
            <li>Changes take effect 30 days after notification</li>
            <li>Continued use of the platform constitutes acceptance</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            10.2 Feedback Welcome
          </h4>
          <p className='mb-4'>
            We value your input on these guidelines. If you have suggestions for
            improvements or questions about specific policies, please contact
            our community team.
          </p>

          <div className='bg-yellow-50 border-l-4 border-yellow-400 p-4'>
            <p className='text-sm text-yellow-800'>
              <strong>Last Updated:</strong> January 2025
            </p>
          </div>
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
              Community Guidelines
            </h2>
            <p className='text-gray-600'>
              Building a safe, respectful, and inclusive community for everyone
            </p>
          </div>
        </div>

        <div className='max-w-4xl mx-auto p-6'>
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <div className='p-8'>
              <div className='mb-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg'>
                <div className='flex items-start space-x-3'>
                  <Shield className='w-6 h-6 text-green-600 mt-0.5 flex-shrink-0' />
                  <div>
                    <h3 className='text-lg font-semibold text-green-800 mb-2'>
                      Community First, Always
                    </h3>
                    <p className='text-green-700 text-sm leading-relaxed'>
                      These guidelines help us maintain a welcoming, safe, and
                      positive environment where everyone can trade, connect,
                      and build meaningful relationships with their neighbors.
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
            title='Questions About Our Guidelines?'
            subtitle="Need clarification on our community standards or want to report a concern? We're here to help:"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CommunityGuidelines
