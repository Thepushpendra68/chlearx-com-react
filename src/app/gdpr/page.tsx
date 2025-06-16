'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Custom styles to force center alignment
const forceCenter = {
  textAlign: 'center' as const,
  display: 'block' as const,
  width: '100%',
  margin: '0 auto',
  textAlignLast: 'center' as const
};
import Link from 'next/link';
import { Layout } from '@/components/templates/Layout';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { SEOHead } from '@/components/atoms/SEOHead';
import {
  ShieldCheckIcon,
  UserIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  KeyIcon,
  TrashIcon,
  ArrowDownTrayIcon,
  PencilIcon,
  EnvelopeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { ContrastEnhancer } from '@/utils/contrastEnhancer';

export default function GDPRPage() {
  const rights = [
    {
      title: 'Right to Information',
      icon: InformationCircleIcon,
      description: 'You have the right to know what personal data we collect, how we use it, and who we share it with.',
      details: 'We provide clear information about our data processing activities in our Privacy Policy and this GDPR page.'
    },
    {
      title: 'Right of Access',
      icon: UserIcon,
      description: 'You can request access to your personal data and receive a copy of the information we hold about you.',
      details: 'Submit a data access request and we will provide your data within 30 days, free of charge.'
    },
    {
      title: 'Right to Rectification',
      icon: PencilIcon,
      description: 'You can ask us to correct or update your personal data if it is inaccurate or incomplete.',
      details: 'Contact us with the correct information and we will update your records promptly.'
    },
    {
      title: 'Right to Erasure',
      icon: TrashIcon,
      description: 'You can request deletion of your personal data under certain circumstances (right to be forgotten).',
      details: 'We will delete your data unless we have legitimate grounds to retain it for legal or business purposes.'
    },
    {
      title: 'Right to Restrict Processing',
      icon: KeyIcon,
      description: 'You can limit how we use your personal data in specific situations.',
      details: 'You can request restriction while disputing accuracy, during legal proceedings, or if you object to processing.'
    },
    {
      title: 'Right to Data Portability',
      icon: ArrowDownTrayIcon,
      description: 'You can receive your personal data in a structured, machine-readable format.',
      details: 'We will provide your data in JSON or CSV format so you can transfer it to another service provider.'
    },
    {
      title: 'Right to Object',
      icon: ExclamationTriangleIcon,
      description: 'You can object to processing of your personal data for direct marketing or legitimate interests.',
      details: 'We will stop processing your data for marketing purposes immediately upon request.'
    },
    {
      title: 'Rights Related to Automated Decision Making',
      icon: DocumentTextIcon,
      description: 'You have rights regarding automated processing and profiling that affects you.',
      details: 'We will inform you about any automated decision-making and allow you to request human intervention.'
    }
  ];

  const lawfulBases = [
    {
      title: 'Consent',
      description: 'When you explicitly consent to processing for marketing communications or cookies.',
      examples: ['Email marketing subscriptions', 'Cookie preferences', 'Newsletter sign-ups']
    },
    {
      title: 'Contract',
      description: 'When processing is necessary to perform our contract or take steps before entering a contract.',
      examples: ['Service delivery', 'Client onboarding', 'Invoice processing']
    },
    {
      title: 'Legal Obligation',
      description: 'When we must process data to comply with legal requirements.',
      examples: ['Tax reporting', 'Anti-money laundering checks', 'Data breach notifications']
    },
    {
      title: 'Legitimate Interest',
      description: 'When we have legitimate business interests that don\'t override your rights.',
      examples: ['Website analytics', 'Fraud prevention', 'Business development']
    }
  ];

  const dataTypes = [
    {
      category: 'Identity Data',
      examples: ['Name', 'Job title', 'Company name', 'Username'],
      retention: '7 years after last contact',
      purpose: 'Client identification and communication'
    },
    {
      category: 'Contact Data',
      examples: ['Email address', 'Phone number', 'Postal address'],
      retention: '7 years after last contact',
      purpose: 'Communication and service delivery'
    },
    {
      category: 'Marketing Data',
      examples: ['Marketing preferences', 'Communication preferences'],
      retention: 'Until consent withdrawn',
      purpose: 'Marketing communications and personalization'
    },
    {
      category: 'Technical Data',
      examples: ['IP address', 'Browser type', 'Device information', 'Cookies'],
      retention: '2 years from collection',
      purpose: 'Website functionality and analytics'
    },
    {
      category: 'Usage Data',
      examples: ['Website interactions', 'Page views', 'Time spent'],
      retention: '2 years from collection',
      purpose: 'Service improvement and analytics'
    },
    {
      category: 'Financial Data',
      examples: ['Payment information', 'Billing address', 'Tax information'],
      retention: '7 years for tax purposes',
      purpose: 'Payment processing and financial compliance'
    }
  ];

  const protections = [
    {
      title: 'Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption.'
    },
    {
      title: 'Access Controls',
      description: 'Strict access controls ensure only authorized personnel can access personal data.'
    },
    {
      title: 'Regular Audits',
      description: 'We conduct regular security audits and vulnerability assessments.'
    },
    {
      title: 'Staff Training',
      description: 'All staff receive regular training on data protection and GDPR compliance.'
    },
    {
      title: 'Data Minimization',
      description: 'We only collect and process data that is necessary for specified purposes.'
    },
    {
      title: 'Vendor Management',
      description: 'All third-party processors are contractually bound to GDPR compliance standards.'
    }
  ];

  return (
    <>
      <SEOHead
        title="GDPR Compliance - Data Protection Rights | CHLEARX"
        description="Learn about your GDPR rights and how CHLEARX protects your personal data. Understand our data processing practices and exercise your privacy rights."
        keywords={['GDPR', 'data protection', 'privacy rights', 'data security', 'personal data', 'data compliance']}
        type="website"
      />
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
          {/* Hero Section */}
          <section className="pt-24 pb-16 relative overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600">
              <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto"
              >
                <motion.div 
                  className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={ContrastEnhancer.forceLightContrast}>
                  GDPR Compliance
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                    & Data Protection
                  </span>
                </h1>
                
                <p className="text-xl mb-8 leading-relaxed" style={ContrastEnhancer.forceLightContrast}>
                  CHLEARX is committed to protecting your personal data and respecting your privacy rights 
                  under the General Data Protection Regulation (GDPR) and other applicable data protection laws.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 bg-white/10 backdrop-blur-sm border-white/20">
                  <div className="flex items-start space-x-3">
                    <ShieldCheckIcon className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <div className="text-left">
                      <p className="font-medium mb-1" style={ContrastEnhancer.forceLightContrast}>GDPR Compliant Since May 25, 2018</p>
                      <p className="text-sm" style={ContrastEnhancer.forceLightContrast}>
                        We maintain the highest standards of data protection and privacy compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Your Rights Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={ContrastEnhancer.forceHighContrast}>
                  Your Privacy Rights Under GDPR
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-lg max-w-2xl leading-relaxed" style={{...forceCenter, ...ContrastEnhancer.forceDescriptionContrast}}>
                    You have comprehensive rights regarding your personal data that we are committed to upholding
                  </p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {rights.map((right, index) => (
                  <motion.div
                    key={right.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <right.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-center" style={ContrastEnhancer.forceHighContrast}>{right.title}</h3>
                      <p className="text-sm mb-3" style={ContrastEnhancer.forceDescriptionContrast}>{right.description}</p>
                      <p className="text-xs" style={ContrastEnhancer.forceDescriptionContrast}>{right.details}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Data Processing Information */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={ContrastEnhancer.forceHighContrast}>
                  How We Process Your Data
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-lg max-w-2xl leading-relaxed" style={{...forceCenter, ...ContrastEnhancer.forceDescriptionContrast}}>
                    We are committed to transparently handling your personal data and respecting your privacy choices
                  </p>
                </div>
              </motion.div>

              {/* Lawful Bases */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Lawful Bases for Processing</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {lawfulBases.map((basis, index) => (
                    <motion.div
                      key={basis.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="p-6 h-full">
                        <h4 className="text-lg font-bold text-primary-600 mb-3">{basis.title}</h4>
                        <p className="text-gray-600 text-sm mb-4">{basis.description}</p>
                        <div className="space-y-1">
                          {basis.examples.map((example, idx) => (
                            <div key={idx} className="text-xs text-gray-500 flex items-center">
                              <div className="w-1 h-1 bg-primary-400 rounded-full mr-2"></div>
                              {example}
                            </div>
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Data Types */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Types of Data We Process</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {dataTypes.map((dataType, index) => (
                    <motion.div
                      key={dataType.category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="p-6 h-full">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">{dataType.category}</h4>
                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-2">Examples:</p>
                          <div className="flex flex-wrap gap-1">
                            {dataType.examples.map((example, idx) => (
                              <span key={idx} className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Purpose:</span>
                            <span className="text-gray-600 ml-1">{dataType.purpose}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Retention:</span>
                            <span className="text-gray-600 ml-1">{dataType.retention}</span>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Data Protection Measures */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  How We Protect Your Data
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-lg text-gray-600 max-w-2xl leading-relaxed" style={forceCenter}>
                    We implement comprehensive technical and organizational measures to ensure 
                    the security and confidentiality of your personal data.
                  </p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {protections.map((protection, index) => (
                  <motion.div
                    key={protection.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 text-center h-full">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <ShieldCheckIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{protection.title}</h3>
                      <p className="text-gray-600 text-sm">{protection.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Data Protection Contacts
                  </h2>
                  <p className="text-lg text-gray-600">
                    For any questions about your data rights or our GDPR compliance practices.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Data Controller</h3>
                      <div className="space-y-3 text-gray-700">
                        <p><strong>Company:</strong> CHLEARX Marketing Agency</p>
                        <p><strong>Address:</strong> 123 Business Ave, Suite 100<br />New York, NY 10001, United States</p>
                        <p><strong>Email:</strong> privacy@chlearx.com</p>
                        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                      </div>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Data Protection Officer</h3>
                      <div className="space-y-3 text-gray-700">
                        <p><strong>Name:</strong> Sarah Johnson</p>
                        <p><strong>Email:</strong> dpo@chlearx.com</p>
                        <p><strong>Response Time:</strong> Within 72 hours</p>
                        <p className="text-sm text-gray-600">
                          Our DPO is available to help with data protection inquiries, 
                          privacy concerns, and exercising your GDPR rights.
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <Card className="p-8 bg-blue-50 border-blue-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Supervisory Authority</h3>
                    <p className="text-gray-700 mb-4">
                      If you are not satisfied with our response to your privacy concerns, you have the right 
                      to lodge a complaint with your local data protection authority. For EU residents, 
                      you can find your local authority at: 
                      <a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" rel="noopener noreferrer" 
                         className="text-primary-600 hover:text-primary-700 underline ml-1">
                        https://edpb.europa.eu/about-edpb/board/members_en
                      </a>
                    </p>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center text-white max-w-4xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={ContrastEnhancer.forceLightContrast}>
                  Exercise Your Data Rights
                </h2>
                <p className="text-xl mb-8 leading-relaxed" style={ContrastEnhancer.forceLightContrast}>
                  Need to access, update, or delete your personal data? We're here to help you 
                  exercise your privacy rights quickly and securely.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact?subject=data-rights">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white text-primary-600 hover:bg-gray-50">
                        <EnvelopeIcon className="w-4 h-4 mr-2" />
                        Contact Data Protection
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/privacy">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-600">
                        Read Privacy Policy
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}