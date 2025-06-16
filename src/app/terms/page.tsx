'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Layout } from '@/components/templates/Layout';
import { Card } from '@/components/atoms/Card';
import { SEOHead } from '@/components/atoms/SEOHead';
import { DocumentTextIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { ContrastEnhancer } from '@/utils/contrastEnhancer';

export default function TermsOfServicePage() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using CHLEARX\'s website and services, you accept and agree to be bound by these Terms of Service.',
        'If you do not agree to these terms, you may not access or use our services.',
        'We reserve the right to modify these terms at any time, and such modifications will be effective immediately upon posting.'
      ]
    },
    {
      title: 'Description of Services',
      content: [
        'CHLEARX provides performance-driven e-commerce marketing services including but not limited to conversion optimization, SEO, paid advertising, analytics, and marketing automation.',
        'We offer consultation services, strategic planning, implementation, and ongoing optimization of marketing campaigns.',
        'Our services are provided on a project basis, retainer basis, or through customized service agreements.',
        'All services are subject to availability and may be modified or discontinued at our discretion.'
      ]
    },
    {
      title: 'User Obligations',
      content: [
        'You must provide accurate, current, and complete information when requested.',
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'You must not use our services for any unlawful or prohibited activities.',
        'You agree to cooperate with us in good faith to achieve the objectives of our services.',
        'You must not interfere with or disrupt our services or servers.'
      ]
    },
    {
      title: 'Payment Terms',
      content: [
        'Payment terms are specified in your individual service agreement or proposal.',
        'Unless otherwise specified, payments are due within 30 days of invoice date.',
        'Late payments may be subject to interest charges of 1.5% per month or the maximum allowed by law.',
        'You are responsible for all taxes related to our services unless exempted by law.',
        'Refund policies are detailed in your specific service agreement.'
      ]
    },
    {
      title: 'Intellectual Property',
      content: [
        'CHLEARX retains ownership of all methodologies, processes, and know-how developed by us.',
        'You retain ownership of your business data, content, and materials provided to us.',
        'We grant you a non-exclusive license to use deliverables created specifically for your project.',
        'You may not reproduce, distribute, or create derivative works from our proprietary materials without written consent.',
        'We respect intellectual property rights and expect our clients to do the same.'
      ]
    },
    {
      title: 'Confidentiality',
      content: [
        'Both parties agree to maintain confidentiality of non-public information shared during our engagement.',
        'Confidential information includes business strategies, financial data, customer lists, and proprietary processes.',
        'We may use aggregated, anonymized data for case studies and marketing purposes.',
        'Confidentiality obligations survive termination of our service agreement.',
        'We implement industry-standard security measures to protect your confidential information.'
      ]
    },
    {
      title: 'Disclaimers and Limitations',
      content: [
        'Our services are provided "as is" without warranties of any kind, express or implied.',
        'We do not guarantee specific results or outcomes from our marketing services.',
        'While we strive for excellence, marketing results depend on various factors beyond our control.',
        'Our liability is limited to the amount paid for our services in the 12 months preceding the claim.',
        'We are not liable for indirect, incidental, or consequential damages.'
      ]
    },
    {
      title: 'Performance and Results',
      content: [
        'We commit to performing our services with professional skill and care.',
        'Marketing results may vary based on market conditions, competition, and other external factors.',
        'We provide regular reporting and analysis but cannot guarantee specific performance metrics.',
        'Client cooperation and timely provision of materials are essential for optimal results.',
        'Performance benchmarks and goals are established collaboratively with each client.'
      ]
    },
    {
      title: 'Termination',
      content: [
        'Either party may terminate our services with 30 days written notice unless otherwise specified.',
        'We reserve the right to terminate services immediately for breach of these terms.',
        'Upon termination, you remain responsible for payment of all services provided through the termination date.',
        'We will provide a reasonable transition period to transfer materials and access.',
        'Certain obligations, including confidentiality and payment terms, survive termination.'
      ]
    },
    {
      title: 'Governing Law',
      content: [
        'These terms are governed by the laws of [Your State/Province] without regard to conflict of law provisions.',
        'Any disputes will be resolved through binding arbitration in [Your City, State/Province].',
        'You agree to first attempt resolution through good faith negotiation.',
        'These terms constitute the entire agreement between the parties regarding our services.',
        'If any provision is found unenforceable, the remaining provisions will remain in effect.'
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Terms of Service - CHLEARX Legal Terms and Conditions"
        description="Read CHLEARX's terms of service, including legal terms and conditions for our marketing services, payment terms, and user obligations."
        keywords={['terms of service', 'legal terms', 'service agreement', 'terms and conditions']}
        type="website"
      />
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
          {/* Hero Section */}
          <section className="pt-24 pb-16 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 relative overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
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
                  <DocumentTextIcon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6" style={ContrastEnhancer.forceLightContrast}>
                  Terms of Service
                </h1>
                
                <p className="text-xl mb-6 leading-relaxed" style={ContrastEnhancer.forceLightContrast}>
                  Please read these terms carefully before using our services. They outline the legal agreement between you and CHLEARX.
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

          {/* Important Notice */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <Card className="p-8 mb-8 bg-yellow-50 border-yellow-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <ExclamationTriangleIcon className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-2xl font-bold text-yellow-800 mb-4">Important Legal Notice</h2>
                      <div className="text-yellow-700 space-y-4">
                        <p>
                          These Terms of Service constitute a legally binding agreement between you and CHLEARX. 
                          By using our website or services, you acknowledge that you have read, understood, and 
                          agree to be bound by these terms.
                        </p>
                        <p>
                          If you are entering into these terms on behalf of a company or other legal entity, 
                          you represent that you have the authority to bind such entity to these terms.
                        </p>
                        <p>
                          For specific service engagements, additional terms may apply as outlined in your 
                          individual service agreement or proposal.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* Terms Sections */}
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

          {/* Additional Information */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-4" style={ContrastEnhancer.forceHighContrast}>Service Agreements</h3>
                    <div className="space-y-3" style={ContrastEnhancer.forceDescriptionContrast}>
                      <p>Individual service agreements may contain additional terms specific to your engagement.</p>
                      <p>In case of conflict between these general terms and specific service agreements, the service agreement terms will prevail.</p>
                      <p>All proposals and statements of work are incorporated by reference into these terms.</p>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-4" style={ContrastEnhancer.forceHighContrast}>Contact Information</h3>
                    <div className="space-y-3" style={ContrastEnhancer.forceDescriptionContrast}>
                      <p><strong>Legal Inquiries:</strong> legal@chlearx.com</p>
                      <p><strong>Business Address:</strong> 123 Marketing Street, Suite 100, Business City, BC 12345</p>
                      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    </div>
                  </Card>
                </div>

                <Card className="p-8 mt-8 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-bold mb-6" style={ContrastEnhancer.forceHighContrast}>Questions About These Terms?</h3>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="mb-4" style={ContrastEnhancer.forceDescriptionContrast}>
                        If you have questions about these Terms of Service or need clarification on any provision, 
                        please contact our legal team. We're here to help ensure you understand your rights and obligations.
                      </p>
                      <p style={ContrastEnhancer.forceDescriptionContrast}>
                        For service-specific questions, please reach out to your account manager or our customer success team.
                      </p>
                    </div>
                    <div className="text-center">
                      <Link href="/contact">
                        <motion.button 
                          className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors mb-4 w-full"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Contact Legal Team
                        </motion.button>
                      </Link>
                      <Link href="/privacy" className="text-primary-600 hover:text-primary-700 text-sm block">
                        View Privacy Policy →
                      </Link>
                    </div>
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