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
import { Layout } from '@/components/templates/Layout';
import { Card } from '@/components/atoms/Card';
import { SEOHead } from '@/components/atoms/SEOHead';
import {
  ShieldCheckIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';
import { ContrastEnhancer } from '@/utils/contrastEnhancer';

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      title: 'Essential Cookies',
      icon: ShieldCheckIcon,
      description: 'Necessary for the website to function properly. These cannot be disabled.',
      cookies: [
        {
          name: 'session_token',
          purpose: 'Maintains user session and login state',
          duration: 'Session',
          thirdParty: false
        },
        {
          name: 'csrf_token',
          purpose: 'Security protection against cross-site request forgery',
          duration: 'Session',
          thirdParty: false
        },
        {
          name: 'cookie_consent',
          purpose: 'Remembers your cookie preferences',
          duration: '1 year',
          thirdParty: false
        }
      ]
    },
    {
      title: 'Analytics Cookies',
      icon: ChartBarIcon,
      description: 'Help us understand how visitors interact with our website.',
      cookies: [
        {
          name: '_ga',
          purpose: 'Google Analytics - tracks unique visitors',
          duration: '2 years',
          thirdParty: true,
          provider: 'Google'
        },
        {
          name: '_gid',
          purpose: 'Google Analytics - tracks unique visitors in 24-hour period',
          duration: '24 hours',
          thirdParty: true,
          provider: 'Google'
        },
        {
          name: '_gat',
          purpose: 'Google Analytics - throttles request rate',
          duration: '1 minute',
          thirdParty: true,
          provider: 'Google'
        },
        {
          name: 'hotjar_*',
          purpose: 'Hotjar analytics for user behavior tracking',
          duration: '1 year',
          thirdParty: true,
          provider: 'Hotjar'
        }
      ]
    },
    {
      title: 'Marketing Cookies',
      icon: GlobeAltIcon,
      description: 'Used to track visitors and display relevant advertisements.',
      cookies: [
        {
          name: '_fbp',
          purpose: 'Facebook Pixel - tracks conversions and user behavior',
          duration: '3 months',
          thirdParty: true,
          provider: 'Facebook'
        },
        {
          name: '__gcl_*',
          purpose: 'Google Ads click tracking and conversion measurement',
          duration: '90 days',
          thirdParty: true,
          provider: 'Google'
        },
        {
          name: 'linkedin_oauth',
          purpose: 'LinkedIn conversion tracking',
          duration: '30 days',
          thirdParty: true,
          provider: 'LinkedIn'
        },
        {
          name: 'hubspot_*',
          purpose: 'HubSpot marketing automation and lead tracking',
          duration: '13 months',
          thirdParty: true,
          provider: 'HubSpot'
        }
      ]
    },
    {
      title: 'Functionality Cookies',
      icon: CogIcon,
      description: 'Enable enhanced functionality and personalization.',
      cookies: [
        {
          name: 'user_preferences',
          purpose: 'Stores user interface preferences',
          duration: '1 year',
          thirdParty: false
        },
        {
          name: 'language',
          purpose: 'Remembers selected language preference',
          duration: '1 year',
          thirdParty: false
        },
        {
          name: 'theme',
          purpose: 'Remembers dark/light mode preference',
          duration: '1 year',
          thirdParty: false
        }
      ]
    }
  ];

  const sections = [
    {
      title: 'What Are Cookies?',
      content: `Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site. Cookies allow us to distinguish you from other users of our website, which helps us to provide you with a good experience when you browse our website and allows us to improve our site.`
    },
    {
      title: 'Why We Use Cookies',
      content: `We use cookies for several reasons:
      • To ensure our website functions properly and securely
      • To analyze how our website is used and improve user experience
      • To remember your preferences and settings
      • To measure the effectiveness of our marketing campaigns
      • To provide personalized content and advertisements
      • To comply with legal and regulatory requirements`
    },
    {
      title: 'Third-Party Cookies',
      content: `We work with trusted third-party partners who may also set cookies on your device when you visit our website. These partners include:
      • Google Analytics for website analytics
      • Google Ads for advertising and conversion tracking
      • Facebook for social media integration and advertising
      • LinkedIn for business networking and advertising
      • HubSpot for customer relationship management
      • Hotjar for user experience analysis
      
      These third parties have their own privacy policies and cookie policies, which we encourage you to review.`
    },
    {
      title: 'Managing Your Cookie Preferences',
      content: `You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in our cookie consent banner that appears when you first visit our website.
      
      You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
      
      Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit www.aboutcookies.org or www.allaboutcookies.org.`
    },
    {
      title: 'Cookie Retention',
      content: `Different cookies have different lifespans:
      • Session cookies are temporary and are deleted when you close your browser
      • Persistent cookies remain on your device for a set period or until you delete them
      • The retention period for each cookie is detailed in the tables above
      
      We regularly review and delete cookies that are no longer necessary for the purposes for which they were collected.`
    },
    {
      title: 'International Transfers',
      content: `Some of our third-party partners may transfer your personal data collected through cookies to countries outside of your jurisdiction. When this happens, we ensure that appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.`
    },
    {
      title: 'Updates to This Policy',
      content: `We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. When we make significant changes, we will notify you by posting a prominent notice on our website or by other means as required by law.`
    },
    {
      title: 'Contact Us',
      content: `If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
      
      Email: privacy@chlearx.com
      Address: CHLEARX Marketing Agency, 123 Business Ave, Suite 100, New York, NY 10001
      Phone: +1 (555) 123-4567
      
      You can also contact our Data Protection Officer at dpo@chlearx.com for any data protection related inquiries.`
    }
  ];

  return (
    <>
      <SEOHead
        title="Cookie Policy - CHLEARX Marketing Agency"
        description="Learn about how CHLEARX uses cookies on our website. Understand our cookie policy, types of cookies used, and how to manage your preferences."
        keywords={['cookie policy', 'cookies', 'privacy', 'data protection', 'website cookies', 'marketing cookies']}
        type="website"
      />
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
          {/* Hero Section */}
          <section className="pt-24 pb-16 relative overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600">
              <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
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
                  Cookie Policy
                </h1>
                
                <p className="text-xl mb-8 leading-relaxed" style={ContrastEnhancer.forceLightContrast}>
                  This Cookie Policy explains how CHLEARX uses cookies and similar technologies 
                  when you visit our website. Learn about the types of cookies we use and how 
                  to manage your preferences.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 bg-white/10 backdrop-blur-sm border-white/20">
                  <div className="flex items-start space-x-3">
                    <InformationCircleIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-left">
                      <p className="font-medium mb-1" style={ContrastEnhancer.forceLightContrast}>Last Updated: January 15, 2024</p>
                      <p className="text-sm" style={ContrastEnhancer.forceLightContrast}>
                        This policy applies to all users of chlearx.com and our related services.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Cookie Types Section */}
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
                  Types of Cookies We Use
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-lg max-w-2xl leading-relaxed" style={{...forceCenter, ...ContrastEnhancer.forceDescriptionContrast}}>
                    We use different types of cookies for various purposes. Here's a detailed breakdown 
                    of each category and the specific cookies we use.
                  </p>
                </div>
              </motion.div>

              <div className="space-y-8">
                {cookieTypes.map((type, index) => (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <type.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2" style={ContrastEnhancer.forceHighContrast}>{type.title}</h3>
                          <div className="w-full flex justify-center" style={forceCenter}>
                            <p className="leading-relaxed" style={{...forceCenter, ...ContrastEnhancer.forceDescriptionContrast}}>{type.description}</p>
                          </div>
                        </div>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-3 px-4 font-semibold" style={ContrastEnhancer.forceHighContrast}>Cookie Name</th>
                              <th className="text-left py-3 px-4 font-semibold" style={ContrastEnhancer.forceHighContrast}>Purpose</th>
                              <th className="text-left py-3 px-4 font-semibold" style={ContrastEnhancer.forceHighContrast}>Duration</th>
                              <th className="text-left py-3 px-4 font-semibold" style={ContrastEnhancer.forceHighContrast}>Provider</th>
                            </tr>
                          </thead>
                          <tbody>
                            {type.cookies.map((cookie, idx) => (
                              <tr key={idx} className="border-b border-gray-100">
                                <td className="py-3 px-4 font-mono text-primary-600">{cookie.name}</td>
                                <td className="py-3 px-4" style={ContrastEnhancer.forceDescriptionContrast}>{cookie.purpose}</td>
                                <td className="py-3 px-4" style={ContrastEnhancer.forceDescriptionContrast}>{cookie.duration}</td>
                                <td className="py-3 px-4">
                                  {cookie.thirdParty ? (
                                    <span className="text-orange-600">{(cookie as any).provider || 'Third Party'}</span>
                                  ) : (
                                    <span className="text-green-600">CHLEARX</span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Policy Sections */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-2xl font-bold mb-4" style={ContrastEnhancer.forceHighContrast}>{section.title}</h3>
                      <div className="leading-relaxed whitespace-pre-line" style={ContrastEnhancer.forceDescriptionContrast}>
                        {section.content}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Cookie Preferences CTA */}
          <section className="py-16 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-green-500/5 rounded-full blur-2xl"></div>
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
                  Manage Your Cookie Preferences
                </h2>
                <p className="text-xl mb-8 leading-relaxed" style={ContrastEnhancer.forceLightContrast}>
                  You have control over the cookies we use. Update your preferences at any time 
                  or learn more about your privacy rights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button 
                    onClick={() => window.location.reload()}
                    className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cookie Preferences
                  </motion.button>
                  <motion.a
                    href="/privacy"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Privacy Policy
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}