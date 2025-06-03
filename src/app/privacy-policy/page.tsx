import React from 'react';
import { Shield, Lock, Eye, Users, FileText } from 'lucide-react';
import Header from '@/components/header';
import Image from 'next/image';
import Footer from '@/components/footer';
import ContactInfo from '@/components/contact-info';

const PrivacyPolicy = () => {
  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      icon: <Shield className='size-5' />,
      content: (
        <div>
          <p className='mb-4'>
            Welcome to TindaMo (&quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;). This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our service,
            website, or mobile application (collectively, the
            &quot;Service&quot;).
          </p>
          <p>
            By using our Service, you agree to the collection and use of
            information in accordance with this Privacy Policy. If you do not
            agree with our policies and practices, please do not use our
            Service.
          </p>
        </div>
      ),
    },
    {
      id: 'information-collection',
      title: '2. Information We Collect',
      icon: <Eye className='size-5' />,
      content: (
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>
            2.1 Personal Information
          </h4>
          <p className='mb-4'>
            We may collect personally identifiable information that you
            voluntarily provide to us, including but not limited to:
          </p>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Name and contact information (email address, phone number)</li>
            <li>Account credentials (username, password)</li>
            <li>Profile information and preferences</li>
            <li>Payment and billing information</li>
            <li>Communication records and correspondence</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>2.2 Usage Data</h4>
          <p className='mb-4'>
            We automatically collect certain information when you access and use
            our Service:
          </p>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>
              Device information (IP address, browser type, operating system)
            </li>
            <li>Usage patterns and interaction data</li>
            <li>Log files and analytics data</li>
            <li>Cookies and similar tracking technologies</li>
            <li>Location data (if permitted by your device settings)</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            2.3 Third-Party Information
          </h4>
          <p className='mb-4'>
            We may receive information about you from third-party sources,
            including:
          </p>
          <ul className='list-disc list-inside text-gray-600 space-y-1'>
            <li>Social media platforms (if you connect your accounts)</li>
            <li>Business partners and affiliates</li>
            <li>Public databases and directories</li>
            <li>Marketing and advertising partners</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'how-we-use',
      title: '3. How We Use Your Information',
      icon: <Users className='size-5' />,
      content: (
        <div>
          <p className='mb-4'>
            We use the collected information for various purposes, including:
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            3.1 Service Provision
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Providing, maintaining, and improving our Service</li>
            <li>Processing transactions and managing your account</li>
            <li>Personalizing your experience and content</li>
            <li>Responding to your inquiries and providing customer support</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            3.2 Communication
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Sending administrative and service-related communications</li>
            <li>Providing updates, newsletters, and promotional materials</li>
            <li>Responding to your comments, questions, and requests</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            3.3 Analytics and Improvement
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Analyzing usage patterns and trends</li>
            <li>Conducting research and development</li>
            <li>Improving our Service functionality and user experience</li>
            <li>Detecting and preventing fraud and security incidents</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            3.4 Legal and Compliance
          </h4>
          <ul className='list-disc list-inside text-gray-600 space-y-1'>
            <li>
              Complying with legal obligations and regulatory requirements
            </li>
            <li>Protecting our rights and interests</li>
            <li>Enforcing our terms of service and policies</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'information-sharing',
      title: '4. Information Sharing and Disclosure',
      icon: <Users className='size-5' />,
      content: (
        <div>
          <p className='mb-4'>
            We may share your information in the following circumstances:
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            4.1 Service Providers
          </h4>
          <p className='mb-2'>
            We may share information with third-party service providers who
            assist us in operating our Service, including:
          </p>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Cloud hosting and storage providers</li>
            <li>Payment processors and financial institutions</li>
            <li>Analytics and marketing platforms</li>
            <li>Customer support and communication tools</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            4.2 Business Transfers
          </h4>
          <p className='mb-4'>
            In the event of a merger, acquisition, or sale of assets, your
            information may be transferred as part of the business transaction.
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            4.3 Legal Requirements
          </h4>
          <p className='mb-2'>
            We may disclose your information if required to do so by law or in
            response to:
          </p>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Valid legal processes (subpoenas, court orders)</li>
            <li>Government investigations or regulatory requests</li>
            <li>Protection of our rights, property, or safety</li>
            <li>Prevention of fraud or other illegal activities</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>4.4 Consent</h4>
          <p>
            We may share your information with your explicit consent or at your
            direction.
          </p>
        </div>
      ),
    },
    {
      id: 'data-security',
      title: '5. Data Security',
      icon: <Lock className='size-5' />,
      content: (
        <div>
          <p className='mb-4'>
            We implement appropriate technical and organizational security
            measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction. These measures
            include:
          </p>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Encryption of data in transit and at rest</li>
            <li>Access controls and authentication systems</li>
            <li>Regular security assessments and monitoring</li>
            <li>Employee training on data protection practices</li>
          </ul>
          <p className='text-sm text-gray-600'>
            However, no method of transmission over the internet or electronic
            storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>
      ),
    },
    {
      id: 'your-rights',
      title: '7. Your Privacy Rights',
      icon: <Shield className='size-5' />,
      content: (
        <div>
          <p className='mb-4'>
            Depending on your location, you may have the following rights
            regarding your personal information:
          </p>

          <h4 className='font-semibold text-gray-800 mb-3'>
            7.1 Access and Portability
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Request access to your personal information</li>
            <li>Receive a copy of your data in a portable format</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            7.2 Correction and Updates
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Request correction of inaccurate or incomplete information</li>
            <li>Update your account information and preferences</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>7.3 Deletion</h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Request deletion of your personal information</li>
            <li>Withdraw consent for data processing (where applicable)</li>
          </ul>

          <h4 className='font-semibold text-gray-800 mb-3'>
            7.4 Restriction and Objection
          </h4>
          <ul className='list-disc list-inside mb-4 text-gray-600 space-y-1'>
            <li>Request restriction of processing in certain circumstances</li>
            <li>Object to processing based on legitimate interests</li>
          </ul>

          <p className='text-sm font-medium'>
            To exercise these rights, please contact us using the information
            provided in the Contact section below.
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
              Privacy Policy
            </h2>
          </div>
        </div>

        <div className='max-w-4xl mx-auto px-6 py-12'>
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <div className='p-8'>
              <div className='mb-8 p-6 bg-gray-50 rounded-lg'>
                <h3 className='text-lg font-semibold text-gray-800 mb-4'>
                  Table of Contents
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className='flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 py-1'>
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
                      <div className='p-2 bg-blue-100 rounded-lg text-blue-600'>
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

                <section id='data-retention' className='scroll-mt-20'>
                  <div className='flex items-center space-x-3 mb-4'>
                    <div className='p-2 bg-blue-100 rounded-lg text-blue-600'>
                      <FileText className='size-5' />
                    </div>
                    <h3 className='text-xl font-semibold text-gray-800'>
                      6. Data Retention
                    </h3>
                  </div>
                  <div className='text-gray-700 leading-relaxed pl-11'>
                    <p>
                      We retain your personal information for as long as
                      necessary to fulfill the purposes outlined in this Privacy
                      Policy, unless a longer retention period is required or
                      permitted by law. When we no longer need your information,
                      we will securely delete or anonymize it.
                    </p>
                  </div>
                </section>

                <section id='children-privacy' className='scroll-mt-20'>
                  <div className='flex items-center space-x-3 mb-4'>
                    <div className='p-2 bg-blue-100 rounded-lg text-blue-600'>
                      <Shield className='size-5' />
                    </div>
                    <h3 className='text-xl font-semibold text-gray-800'>
                      10. Children&apos;s Privacy
                    </h3>
                  </div>
                  <div className='text-gray-700 leading-relaxed pl-11'>
                    <p>
                      Our Service is not intended for children under the age of
                      13 (or the minimum age required in your jurisdiction). We
                      do not knowingly collect personal information from
                      children. If we become aware that we have collected
                      information from a child without parental consent, we will
                      take steps to delete such information.
                    </p>
                  </div>
                </section>

                <section id='policy-changes' className='scroll-mt-20'>
                  <div className='flex items-center space-x-3 mb-4'>
                    <div className='p-2 bg-blue-100 rounded-lg text-blue-600'>
                      <FileText className='size-5' />
                    </div>
                    <h3 className='text-xl font-semibold text-gray-800'>
                      12. Changes to This Privacy Policy
                    </h3>
                  </div>
                  <div className='text-gray-700 leading-relaxed pl-11'>
                    <p className='mb-4'>
                      We may update this Privacy Policy from time to time to
                      reflect changes in our practices or applicable laws. We
                      will notify you of any material changes by:
                    </p>
                    <ul className='list-disc list-inside text-gray-600 space-y-1'>
                      <li>Posting the updated policy on our website</li>
                      <li>Sending email notifications to registered users</li>
                      <li>Providing in-app notifications</li>
                    </ul>
                    <p className='mt-4'>
                      Your continued use of our Service after the effective date
                      of the updated policy constitutes acceptance of the
                      changes.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <ContactInfo
            title='Contact Information'
            subtitle='If you have any questions, concerns, or requests regarding this
          Privacy Policy or our data practices, please contact us:'
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
