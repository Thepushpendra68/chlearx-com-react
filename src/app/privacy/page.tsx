'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Layout } from '@/components/templates/Layout';
import { Card } from '@/components/atoms/Card';
import { SEOHead } from '@/components/atoms/SEOHead';
import { ShieldCheckIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { ContrastEnhancer } from '@/utils/contrastEnhancer';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal Information: When you visit our website, contact us, or use our services, we may collect personal information such as your name, email address, phone number, company name, and website URL.',
        'Usage Data: We automatically collect information about how you interact with our website, including IP address, browser type, pages visited, time spent on pages, and referral sources.',
        'Cookies and Tracking: We use cookies and similar technologies to enhance your experience, analyze website traffic, and personalize content.',
        'Communication Records: We maintain records of our communications with you, including emails, phone calls, and support inquiries.'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'Service Delivery: To provide marketing services, consultations, and support as requested.',
        'Communication: To respond to inquiries, send updates about our services, and provide customer support.',
        'Website Improvement: To analyze website usage and improve our user experience.',
        'Marketing: To send relevant marketing communications (with your consent where required).',
        'Legal Compliance: To comply with legal obligations and protect our legitimate business interests.'
      ]
    },
    {
      title: 'Information Sharing and Disclosure',
      content: [
        'Service Providers: We may share information with trusted third-party service providers who assist us in operating our website and delivering services.',
        'Legal Requirements: We may disclose information when required by law or to protect our rights, safety, or property.',
        'Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred.',
        'Consent: We will not sell, rent, or share your personal information with third parties without your explicit consent, except as described in this policy.'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'Encryption: We use industry-standard encryption to protect data in transit and at rest.',
        'Access Controls: Access to personal information is restricted to authorized personnel only.',
        'Regular Audits: We conduct regular security audits and assessments to maintain data protection.',
        'Incident Response: We have procedures in place to respond to potential data breaches promptly.'
      ]
    },
    {
      title: 'Your Rights and Choices',
      content: [
        'Access: You have the right to request access to your personal information.',
        'Correction: You can request correction of inaccurate or incomplete information.',
        'Deletion: You may request deletion of your personal information, subject to legal requirements.',
        'Portability: You have the right to receive your data in a portable format.',
        'Opt-out: You can opt out of marketing communications at any time.',
        'Cookies: You can control cookie settings through your browser preferences.'
      ]
    },
    {
      title: 'International Data Transfers',
      content: [
        'We may transfer your information to countries outside your residence for processing and storage.',
        'We ensure appropriate safeguards are in place for international transfers, including standard contractual clauses.',
        'By using our services, you consent to such transfers in accordance with this privacy policy.'
      ]
    },
    {
      title: 'Children\'s Privacy',
      content: [
        'Our services are not directed to individuals under 16 years of age.',
        'We do not knowingly collect personal information from children under 16.',
        'If we become aware of such collection, we will take steps to delete the information promptly.'
      ]
    },
    {
      title: 'Third-Party Links',
      content: [
        'Our website may contain links to third-party websites or services.',
        'We are not responsible for the privacy practices of these third parties.',
        'We encourage you to review the privacy policies of any third-party sites you visit.'
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Privacy Policy - CHLEARX Data Protection and Privacy Practices"
        description="Learn about CHLEARX's privacy policy, data protection practices, and how we collect, use, and protect your personal information."
        keywords={['privacy policy', 'data protection', 'GDPR compliance', 'data privacy']}
        type="website"
      />
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
          {/* Hero Section */}
          <section className="pt-24 pb-16 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 relative overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto text-white"
              >
                <motion.div 
                  className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6" style={ContrastEnhancer.forceLightContrast}>
                  Privacy Policy
                </h1>
                
                <p className="text-xl mb-6 leading-relaxed" style={ContrastEnhancer.forceLightContrast}>
                  Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                </p>
                
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 inline-block border border-white/20">
                  <p className="text-sm" style={ContrastEnhancer.forceLightContrast}>
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <Card className="p-8 mb-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <InformationCircleIcon className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-2xl font-bold mb-4" style={ContrastEnhancer.forceHighContrast}>Introduction</h2>
                      <div className="space-y-4" style={ContrastEnhancer.forceDescriptionContrast}>
                        <p>
                          CHLEARX ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                          This privacy policy describes how we collect, use, disclose, and safeguard your information when 
                          you visit our website, use our services, or interact with us.
                        </p>
                        <p>
                          By using our website or services, you agree to the collection and use of information in accordance 
                          with this policy. If you do not agree with our policies and practices, do not use our services.
                        </p>
                        <p>
                          This policy applies to information we collect on our website, through our services, in email and 
                          other electronic communications, and when you interact with our advertising and applications on 
                          third-party websites and services.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* Policy Sections */}
          <section className="pb-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  {sections.map((section, index) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-bold mb-4" style={ContrastEnhancer.forceHighContrast}>
                          {index + 1}. {section.title}
                        </h3>
                        <div className="space-y-3">
                          {section.content.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0 mt-2.5"></div>
                              <p style={ContrastEnhancer.forceDescriptionContrast}>{item}</p>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-bold mb-6" style={ContrastEnhancer.forceHighContrast}>Contact Us About Privacy</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4" style={ContrastEnhancer.forceHighContrast}>Data Protection Officer</h4>
                      <div className="space-y-2" style={ContrastEnhancer.forceDescriptionContrast}>
                        <p><strong>Email:</strong> privacy@chlearx.com</p>
                        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                        <p><strong>Address:</strong> 123 Marketing Street, Suite 100, Business City, BC 12345</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4" style={ContrastEnhancer.forceHighContrast}>Response Time</h4>
                      <div className="space-y-2" style={ContrastEnhancer.forceDescriptionContrast}>
                        <p>We will respond to privacy inquiries within <strong>30 days</strong>.</p>
                        <p>For urgent matters, please call our privacy hotline.</p>
                        <p>European residents have additional rights under GDPR.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-semibold mb-4" style={ContrastEnhancer.forceHighContrast}>Policy Updates</h4>
                    <p style={ContrastEnhancer.forceDescriptionContrast}>
                      We may update this privacy policy from time to time. We will notify you of any changes by posting 
                      the new policy on this page and updating the "Last Updated" date. We encourage you to review this 
                      policy periodically for any changes.
                    </p>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Link href="/contact">
                      <motion.button 
                        className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Contact Us About Privacy
                      </motion.button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}