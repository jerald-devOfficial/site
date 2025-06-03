import React from 'react';
import {
  FileText,
  Shield,
  Users,
  AlertTriangle,
  Scale,
  Globe,
  CreditCard,
  Ban,
} from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactInfo from '@/components/contact-info';

const TermsOfService = () => {
  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      icon: <FileText className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            Welcome to TindaMo (&quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;). These Terms of Service (&quot;Terms&quot;) govern
            your use of our website, mobile application, and related services
            (collectively, the &quot;Service&quot;) operated by TindaMo.
          </p>
          <p className='mb-4'>
            By accessing or using our Service, you agree to be bound by these
            Terms. If you disagree with any part of these terms, then you may
            not access the Service.
          </p>
          <p className='font-medium text-gray-800'>
            These Terms constitute a legally binding agreement between you and
            TindaMo. Please read them carefully.
          </p>
        </div>
      ),
    },
    {
      id: 'description',
      title: '2. Description of Service',
      icon: <Globe className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            TindaMo provides [describe your service - e.g., a platform that
            connects users, offers digital services, etc.]. Our Service allows
            users to [describe main functionality].
          </p>
          <p className='mb-4'>
            We reserve the right to modify, suspend, or discontinue any aspect
            of the Service at any time, with or without notice. We may also
            impose limits on certain features or restrict access to parts or all
            of the Service without notice or liability.
          </p>
          <div className='bg-yellow-50 border-l-4 border-yellow-400 p-4'>
            <p className='text-sm text-yellow-800'>
              <strong>Note:</strong> Our Service is provided &quot;as is&quot;
              and we make no warranties about its availability, reliability, or
              functionality.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'user-accounts',
      title: '3. User Accounts and Registration',
      icon: <Users className='w-5 h-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            3.1 Account Creation
          </h4>
          <p className='mb-4'>
            To access certain features of our Service, you must create an
            account. You agree to provide accurate, current, and complete
            information during registration and to update such information to
            keep it accurate, current, and complete.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            3.2 Account Security
          </h4>
          <p className='mb-4'>You are responsible for:</p>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Safeguarding your password and account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use</li>
            <li>Ensuring your account information remains current</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            3.3 Account Termination
          </h4>
          <p className='mb-4'>
            You may terminate your account at any time by contacting us. We may
            terminate or suspend your account immediately, without prior notice,
            for conduct that we believe violates these Terms or is harmful to
            other users, us, or third parties.
          </p>
        </div>
      ),
    },
    {
      id: 'user-conduct',
      title: '4. User Conduct and Prohibited Activities',
      icon: <Ban className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>By using our Service, you agree not to:</p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            4.1 Prohibited Content
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>
              Post, upload, or share illegal, harmful, threatening, abusive, or
              defamatory content
            </li>
            <li>Violate intellectual property rights of others</li>
            <li>
              Share content that is obscene, pornographic, or sexually explicit
            </li>
            <li>Promote hate speech, discrimination, or violence</li>
            <li>Share false, misleading, or deceptive information</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            4.2 Prohibited Activities
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>
              Attempt to gain unauthorized access to our systems or other users
              accounts
            </li>
            <li>
              Use automated scripts, bots, or other automated means to access
              the Service
            </li>
            <li>
              Interfere with or disrupt the Service or servers connected to the
              Service
            </li>
            <li>
              Impersonate any person or entity or falsely state your affiliation
            </li>
            <li>Collect or harvest personal information of other users</li>
            <li>
              Use the Service for any commercial purpose without our written
              consent
            </li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>4.3 Enforcement</h4>
          <p>
            We reserve the right to remove content, suspend or terminate
            accounts, and take other appropriate action for violations of these
            Terms. We may also cooperate with law enforcement agencies when
            necessary.
          </p>
        </div>
      ),
    },
    {
      id: 'intellectual-property',
      title: '5. Intellectual Property Rights',
      icon: <Shield className='w-5 h-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            5.1 TindaMo&quot;s Rights
          </h4>
          <p className='mb-4'>
            The Service and its original content, features, and functionality
            are owned by TindaMo and are protected by international copyright,
            trademark, patent, trade secret, and other intellectual property
            laws.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>5.2 User Content</h4>
          <p className='mb-4'>
            You retain ownership of content you create and share through our
            Service. However, by posting content, you grant TindaMo a worldwide,
            non-exclusive, royalty-free license to use, reproduce, modify, and
            distribute your content in connection with operating and improving
            the Service.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            5.3 Trademark Policy
          </h4>
          <p className='mb-4'>
            TindaMo, our logo, and other marks are trademarks of TindaMo. You
            may not use our trademarks without our prior written permission.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            5.4 Copyright Infringement
          </h4>
          <p>
            We respect intellectual property rights and expect users to do the
            same. If you believe your copyright has been infringed, please
            contact us with details of the alleged infringement.
          </p>
        </div>
      ),
    },
    {
      id: 'privacy',
      title: '6. Privacy and Data Protection',
      icon: <Shield className='w-5 h-5' />,
      content: (
        <div>
          <p className='mb-4'>
            Your privacy is important to us. Our Privacy Policy explains how we
            collect, use, and protect your information when you use our Service.
            By using our Service, you agree to the collection and use of
            information in accordance with our Privacy Policy.
          </p>
          <p className='mb-4'>
            We implement appropriate security measures to protect your personal
            information, but we cannot guarantee complete security of data
            transmitted over the internet.
          </p>
          <div className='bg-blue-50 border-l-4 border-blue-400 p-4'>
            <p className='text-sm text-blue-800'>
              <strong>Privacy Policy:</strong> Please review our separate
              Privacy Policy for detailed information about our data practices.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'payments',
      title: '7. Payment Terms and Billing',
      icon: <CreditCard className='w-5 h-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            7.1 Paid Services
          </h4>
          <p className='mb-4'>
            Some aspects of our Service may be provided for a fee. You agree to
            pay all fees associated with your use of paid services. All fees are
            non-refundable unless otherwise stated.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            7.2 Billing and Payment
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>
              Fees are charged in advance on a recurring basis (monthly,
              annually, etc.)
            </li>
            <li>Payment is due immediately upon invoice</li>
            <li>
              We accept major credit cards and other payment methods as
              indicated
            </li>
            <li>You authorize us to charge your payment method for all fees</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            7.3 Price Changes
          </h4>
          <p className='mb-4'>
            We reserve the right to change our fees at any time. We will provide
            at least 30 days notice of any fee changes. Continued use of the
            Service after fee changes constitutes acceptance of the new fees.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>7.4 Refunds</h4>
          <p>
            Refunds are provided at our sole discretion. Contact us if you
            believe you are entitled to a refund. We will review your request
            and respond within a reasonable time.
          </p>
        </div>
      ),
    },
    {
      id: 'disclaimers',
      title: '8. Disclaimers and Limitations',
      icon: <AlertTriangle className='w-5 h-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            8.1 Service Availability
          </h4>
          <p className='mb-4'>
            We strive to maintain service availability but do not guarantee
            uninterrupted access. The Service may be temporarily unavailable due
            to maintenance, updates, or technical issues.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            8.2 Disclaimer of Warranties
          </h4>
          <div className='bg-red-50 border-l-4 border-red-400 p-4 mb-4'>
            <p className='text-sm text-red-800 uppercase font-semibold mb-2'>
              IMPORTANT DISCLAIMER
            </p>
            <p className='text-sm text-red-800'>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
              AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT.
            </p>
          </div>

          <h4 className='font-semibold text-gray-800 mb-3'>
            8.3 Limitation of Liability
          </h4>
          <p className='mb-4'>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, TINDAMO SHALL NOT BE LIABLE
            FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE,
            OR OTHER INTANGIBLE LOSSES.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            8.4 Third-Party Services
          </h4>
          <p>
            Our Service may contain links to third-party websites or services.
            We are not responsible for the content, privacy policies, or
            practices of third-party services.
          </p>
        </div>
      ),
    },
    {
      id: 'governing-law',
      title: '9. Governing Law and Dispute Resolution',
      icon: <Scale className='w-5 h-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            9.1 Governing Law
          </h4>
          <p className='mb-4'>
            These Terms shall be governed by and construed in accordance with
            the laws of [Your Jurisdiction], without regard to its conflict of
            law principles.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            9.2 Dispute Resolution
          </h4>
          <p className='mb-4'>
            Any disputes arising from these Terms or your use of the Service
            shall be resolved through binding arbitration, except that either
            party may seek injunctive relief in court for violations of
            intellectual property rights.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            9.3 Class Action Waiver
          </h4>
          <p className='mb-4'>
            You agree that any dispute resolution proceedings will be conducted
            only on an individual basis and not in a class, consolidated, or
            representative action.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>9.4 Jurisdiction</h4>
          <p>
            You agree to submit to the personal jurisdiction of the courts
            located in [Your Jurisdiction] for any actions not subject to
            arbitration.
          </p>
        </div>
      ),
    },
  ];

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
              Terms of Service
            </h2>
          </div>
        </div>

        <div className='max-w-4xl mx-auto px-6 py-12'>
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <div className='p-8'>
              <div className='mb-8 p-6 bg-amber-50 border border-amber-200 rounded-lg'>
                <div className='flex items-start space-x-3'>
                  <AlertTriangle className='w-6 h-6 text-amber-600 mt-0.5 flex-shrink-0' />
                  <div>
                    <h3 className='text-lg font-semibold text-amber-800 mb-2'>
                      Important Legal Agreement
                    </h3>
                    <p className='text-amber-700 text-sm leading-relaxed'>
                      These Terms of Service constitute a legally binding
                      agreement between you and TindaMo. By using our service,
                      you acknowledge that you have read, understood, and agree
                      to be bound by these terms. If you do not agree to these
                      terms, please do not use our service.
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
                      className='flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors duration-200 py-1'>
                      {section.icon}
                      <span className='text-sm'>{section.title}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className='space-y-8'>
                {sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className='scroll-mt-20'>
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

                <section id='termination' className='scroll-mt-20'>
                  <div className='flex items-center space-x-3 mb-4'>
                    <div className='p-2 bg-slate-100 rounded-lg text-slate-600'>
                      <Ban className='w-5 h-5' />
                    </div>
                    <h3 className='text-xl font-semibold text-gray-800'>
                      10. Termination
                    </h3>
                  </div>
                  <div className='text-gray-700 leading-relaxed pl-11'>
                    <p className='mb-4'>
                      We may terminate or suspend your account and access to the
                      Service immediately, without prior notice or liability,
                      for any reason, including breach of these Terms.
                    </p>
                    <p className='mb-4'>
                      Upon termination, your right to use the Service will cease
                      immediately. All provisions of these Terms that should
                      survive termination shall survive, including ownership
                      provisions, warranty disclaimers, and limitations of
                      liability.
                    </p>
                    <p>
                      You may terminate your account at any time by contacting
                      us or through your account settings, where available.
                    </p>
                  </div>
                </section>

                <section id='general-provisions' className='scroll-mt-20'>
                  <div className='flex items-center space-x-3 mb-4'>
                    <div className='p-2 bg-slate-100 rounded-lg text-slate-600'>
                      <FileText className='w-5 h-5' />
                    </div>
                    <h3 className='text-xl font-semibold text-gray-800'>
                      11. General Provisions
                    </h3>
                  </div>
                  <div className='text-gray-700 leading-relaxed pl-11'>
                    <h4 className='font-semibold text-gray-800 mb-3'>
                      11.1 Entire Agreement
                    </h4>
                    <p className='mb-4'>
                      These Terms constitute the entire agreement between you
                      and TindaMo regarding the Service and supersede all prior
                      agreements and understandings.
                    </p>

                    <h4 className='font-semibold text-gray-800 mb-3'>
                      11.2 Severability
                    </h4>
                    <p className='mb-4'>
                      If any provision of these Terms is found to be
                      unenforceable, the remaining provisions will remain in
                      full force and effect.
                    </p>

                    <h4 className='font-semibold text-gray-800 mb-3'>
                      11.3 Waiver
                    </h4>
                    <p className='mb-4'>
                      No waiver of any term of these Terms shall be deemed a
                      further or continuing waiver of such term or any other
                      term.
                    </p>

                    <h4 className='font-semibold text-gray-800 mb-3'>
                      11.4 Assignment
                    </h4>
                    <p className='mb-4'>
                      You may not assign or transfer these Terms or your rights
                      hereunder without our prior written consent. We may assign
                      these Terms without restriction.
                    </p>

                    <h4 className='font-semibold text-gray-800 mb-3'>
                      11.5 Changes to Terms
                    </h4>
                    <p>
                      We reserve the right to modify these Terms at any time. We
                      will notify users of material changes via email or through
                      the Service. Continued use after changes constitutes
                      acceptance of the new Terms.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <ContactInfo
            title='Questions About These Terms?'
            subtitle='If you have any questions about these Terms of Service, please contact us:'
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
