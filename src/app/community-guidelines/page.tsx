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
            <li>Respect others' personal information and privacy</li>
            <li>Don't share private conversations without permission</li>
            <li>Use the platform's messaging system for initial contact</li>
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
            <li>Content must be relevant to the platform's purpose</li>
            <li>
              Images should be clear, well-lit, and accurately represent items
            </li>
            <li>Descriptions should be honest and detailed</li>
            <li>Language should be appropriate for all ages</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            5.2 Prohibited Content
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Explicit, sexual, or adult content</li>
            <li>Violent, graphic, or disturbing imagery</li>
            <li>Hate speech, discriminatory language, or offensive symbols</li>
            <li>False, misleading, or deceptive information</li>
            <li>Copyrighted material used without permission</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            5.3 Item Listings
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Only list items you own and have the right to sell</li>
            <li>Provide accurate condition assessments</li>
            <li>Include all relevant details and potential issues</li>
            <li>Update listings promptly when items are sold</li>
          </ul>

          <div className='bg-yellow-50 border-l-4 border-yellow-400 p-4'>
            <p className='text-sm text-yellow-800'>
              <strong>Content Review:</strong> We reserve the right to review,
              edit, or remove any content that violates these standards or our
              Terms of Service.
            </p>
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
            Your safety is our top priority. Follow these guidelines to protect
            yourself and others:
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            6.1 Meeting in Person
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Meet in well-lit, public places</li>
            <li>Bring a friend or let someone know your plans</li>
            <li>Trust your instincts - if something feels wrong, leave</li>
            <li>
              Avoid sharing personal information until you feel comfortable
            </li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            6.2 Online Safety
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Keep initial conversations on the platform</li>
            <li>Be cautious about sharing personal contact information</li>
            <li>Don't click suspicious links or download unknown files</li>
            <li>Report any suspicious or inappropriate behavior</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            6.3 Transaction Safety
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Use secure payment methods when possible</li>
            <li>Be wary of deals that seem too good to be true</li>
            <li>
              Verify item authenticity before completing expensive purchases
            </li>
            <li>Document transactions for your records</li>
          </ul>

          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <p className='text-sm text-red-800'>
              <strong>Emergency:</strong> If you ever feel unsafe or encounter
              illegal activity, contact local authorities immediately. Then
              report the incident to us.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'reporting-violations',
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
            <li>Use the report button on profiles, listings, or messages</li>
            <li>Contact our support team directly for serious violations</li>
            <li>Provide detailed information about the incident</li>
            <li>Include screenshots or evidence when possible</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            7.2 What to Report
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Harassment, threats, or abusive behavior</li>
            <li>Fraudulent or misleading listings</li>
            <li>Inappropriate or offensive content</li>
            <li>Suspected illegal activity</li>
            <li>Privacy violations or doxxing</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>7.3 Our Response</h4>
          <p className='mb-4'>We take all reports seriously and will:</p>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Review reports promptly and thoroughly</li>
            <li>Take appropriate action based on our investigation</li>
            <li>Protect the privacy of all parties involved</li>
            <li>Follow up with reporters when necessary</li>
          </ul>

          <p className='text-sm font-medium'>
            False or malicious reports may result in consequences for the
            reporting user.
          </p>
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
            Violations of these Community Guidelines may result in various
            consequences, depending on the severity and frequency of the
            violation:
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            8.1 Warning System
          </h4>
          <p className='mb-4'>
            For minor or first-time violations, users may receive warnings with
            guidance on how to improve their behavior.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            8.2 Temporary Restrictions
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Temporary suspension of messaging privileges</li>
            <li>Restriction from creating new listings</li>
            <li>Limited access to certain platform features</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            8.3 Account Suspension
          </h4>
          <p className='mb-4'>
            Repeated violations or serious misconduct may result in temporary
            account suspension, ranging from days to weeks.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            8.4 Permanent Ban
          </h4>
          <p className='mb-4'>
            The most serious violations, including illegal activities,
            harassment, or repeated offenses, may result in permanent account
            termination.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            8.5 Appeals Process
          </h4>
          <p>
            Users may appeal enforcement actions by contacting our support team
            within 30 days of the action. We will review appeals fairly and may
            reverse decisions if warranted.
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
            We're committed to supporting our community members and providing
            resources for a positive experience:
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>9.1 Help Center</h4>
          <p className='mb-4'>
            Access our comprehensive Help Center for guides on using the
            platform safely and effectively.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            9.2 Community Forums
          </h4>
          <p className='mb-4'>
            Connect with other users, share tips, and get advice in our
            community forums (coming soon).
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            9.3 Safety Resources
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Safety tips and best practices guides</li>
            <li>How-to videos for secure transactions</li>
            <li>Information about common scams and how to avoid them</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>9.4 Support Team</h4>
          <p>
            Our dedicated support team is available to help with questions,
            concerns, or issues. Don't hesitate to reach out when you need
            assistance.
          </p>
        </div>
      )
    },
    {
      id: 'updates-changes',
      title: '10. Updates and Changes',
      icon: <MessageSquare className='w-5 h-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            10.1 Guideline Updates
          </h4>
          <p className='mb-4'>
            We may update these Community Guidelines from time to time to
            reflect changes in our community, new features, or legal
            requirements. We will notify users of significant changes through:
          </p>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Email notifications to all users</li>
            <li>In-app announcements</li>
            <li>Updates on our website and social media</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            10.2 Community Input
          </h4>
          <p className='mb-4'>
            We value feedback from our community and may consider suggestions
            for improving these guidelines. Feel free to share your thoughts
            with our support team.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            10.3 Effective Date
          </h4>
          <p>
            These guidelines become effective immediately upon posting. By
            continuing to use TindaMo after updates, you agree to follow the
            revised guidelines.
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
              Community Guidelines
            </h2>
            <p className='text-gray-600'>
              Building a safe, respectful, and inclusive community together
            </p>
          </div>
        </div>

        <div className='max-w-4xl mx-auto p-6'>
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <div className='p-8'>
              <div className='mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg'>
                <div className='flex items-start space-x-3'>
                  <Heart className='w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0' />
                  <div>
                    <h3 className='text-lg font-semibold text-blue-800 mb-2'>
                      Welcome to Our Community
                    </h3>
                    <p className='text-blue-700 text-sm leading-relaxed'>
                      These guidelines help us maintain a positive, safe, and
                      welcoming environment for everyone. By following them,
                      you're contributing to a community built on trust,
                      respect, and mutual support.
                    </p>
                  </div>
                </div>
              </div>

              <div className='mb-8 p-6 bg-gray-50 rounded-lg'>
                <h3 className='text-lg font-semibold text-gray-800 mb-4'>
                  Table of Contents
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
            title='Questions About Community Guidelines?'
            subtitle='If you have questions about these guidelines or need to report a violation, please contact us:'
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CommunityGuidelines
