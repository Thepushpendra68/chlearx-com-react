'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Layout } from '@/components/templates/Layout';
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { SEOHead } from '@/components/atoms/SEOHead';
import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HeartIcon,
  TrophyIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  StarIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  HandRaisedIcon
} from '@heroicons/react/24/outline';

const openPositions = [
  {
    id: 1,
    title: 'Senior Performance Marketing Manager',
    department: 'Marketing',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '₹8-15 LPA',
    description: 'Lead performance marketing campaigns for e-commerce clients, driving growth through strategic paid advertising.',
    requirements: [
      'Bachelor\'s degree in Marketing, Business, or related field',
      '3+ years experience in performance marketing',
      'Expert knowledge of Google Ads, Facebook Ads, and analytics platforms',
      'Experience with e-commerce marketing and conversion optimization',
      'Strong analytical skills and data-driven mindset'
    ],
    responsibilities: [
      'Develop and execute performance marketing strategies',
      'Manage client relationships and campaign performance',
      'Analyze campaign data and optimize for ROI',
      'Collaborate with creative team on ad assets',
      'Present results and insights to clients'
    ],
    isPopular: true
  },
  {
    id: 2,
    title: 'Creative Director',
    department: 'Creative',
    location: 'Bangalore, India',
    type: 'Full-time',
    experience: '5-8 years',
    salary: '₹12-20 LPA',
    description: 'Lead our creative team in developing innovative campaigns that drive e-commerce growth and brand awareness.',
    requirements: [
      'Bachelor\'s/Master\'s degree in Design, Fine Arts, or related field',
      '5+ years of creative leadership experience',
      'Strong portfolio showcasing e-commerce and digital campaigns',
      'Proficiency in Adobe Creative Suite, Figma',
      'Understanding of brand strategy and consumer psychology'
    ],
    responsibilities: [
      'Lead creative strategy and execution',
      'Manage and mentor creative team',
      'Develop brand guidelines and creative assets',
      'Collaborate with clients on creative vision',
      'Ensure brand consistency across all touchpoints'
    ],
    isPopular: false
  },
  {
    id: 3,
    title: 'Data Analyst',
    department: 'Analytics',
    location: 'Remote',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '₹6-12 LPA',
    description: 'Analyze marketing data to uncover insights and drive strategic decisions for our e-commerce clients.',
    requirements: [
      'Bachelor\'s degree in Statistics, Mathematics, or related field',
      '2+ years experience in data analysis',
      'Proficiency in SQL, Python, R, and data visualization tools',
      'Experience with Google Analytics, Facebook Analytics',
      'Strong communication skills for presenting insights'
    ],
    responsibilities: [
      'Analyze marketing campaign performance',
      'Create dashboards and reports',
      'Identify optimization opportunities',
      'Support strategic decision making with data',
      'Collaborate with marketing teams on insights'
    ],
    isPopular: false
  }
];

const benefits = [
  {
    icon: CurrencyDollarIcon,
    title: 'Competitive Salary',
    description: 'Industry-leading compensation packages with performance bonuses'
  },
  {
    icon: AcademicCapIcon,
    title: 'Learning & Development',
    description: 'Continuous learning opportunities, certifications, and conference attendance'
  },
  {
    icon: HeartIcon,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, mental health support, and wellness programs'
  },
  {
    icon: ClockIcon,
    title: 'Flexible Work',
    description: 'Remote work options, flexible hours, and work-life balance'
  },
  {
    icon: TrophyIcon,
    title: 'Recognition',
    description: 'Performance-based recognition, career advancement, and leadership opportunities'
  },
  {
    icon: UserGroupIcon,
    title: 'Great Culture',
    description: 'Collaborative environment, team events, and inclusive workplace'
  }
];

const cultureValues = [
  {
    title: 'Growth Mindset',
    description: 'We believe in continuous learning and pushing boundaries',
    icon: RocketLaunchIcon
  },
  {
    title: 'Client-First',
    description: 'Our clients\' success is our success - we go above and beyond',
    icon: StarIcon
  },
  {
    title: 'Data-Driven',
    description: 'Every decision is backed by data and measurable results',
    icon: CheckCircleIcon
  },
  {
    title: 'Innovation',
    description: 'We embrace new ideas and creative solutions',
    icon: GlobeAltIcon
  }
];

export default function CareersPage() {
  return (
    <Layout>
      <SEOHead
        title="Careers - Join Our High-Performance Marketing Team | CHLEARX"
        description="Join CHLEARX and help build the future of e-commerce marketing. Competitive salaries, growth opportunities, and a culture of innovation await."
        keywords={["marketing careers", "performance marketing jobs", "e-commerce marketing careers", "digital marketing jobs India"]}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent)]"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 mb-6">
                <BriefcaseIcon className="w-4 h-4 text-success mr-2" />
                <span className="text-sm text-on-dark font-medium">
                  Join India's Top Performance Marketing Agency
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                <span className="block text-on-dark mb-2">
                  Build Your Career in
                </span>
                <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Performance Marketing
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-secondary-on-dark font-medium mb-8 max-w-3xl mx-auto text-center">
                Join our mission to transform e-commerce businesses and grow with a team that values innovation, growth, and results
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-0 shadow-xl min-w-[250px] font-semibold"
                  icon={ArrowRightIcon}
                  iconPosition="right"
                  onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Open Positions
                </Button>
                
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/30 text-on-dark hover:bg-white/10 backdrop-blur-sm min-w-[200px] font-semibold"
                    icon={HandRaisedIcon}
                    iconPosition="right"
                  >
                    Contact HR Team
                  </Button>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">50+</div>
                  <div className="text-sm text-muted-on-dark">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-blue mb-2">97%</div>
                  <div className="text-sm text-muted-on-dark">Employee Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-orange mb-2">80%</div>
                  <div className="text-sm text-muted-on-dark">Internal Promotions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-purple mb-2">4.8</div>
                  <div className="text-sm text-muted-on-dark">Glassdoor Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-on-light mb-4">
                Our Culture & Values
              </h2>
              <p className="text-lg text-secondary-on-light max-w-2xl mx-auto text-center">
                Discover exciting opportunities to grow your career while making a real impact on e-commerce success stories
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-on-light mb-3">{value.title}</h3>
                  <p className="text-secondary-on-light">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-on-light mb-4">
                Why Join CHLEARX?
              </h2>
              <p className="text-lg text-secondary-on-light max-w-2xl mx-auto text-center">
                We offer comprehensive benefits designed to support your personal and professional growth
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-on-light mb-3">{benefit.title}</h3>
                  <p className="text-secondary-on-light">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-on-light mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-secondary-on-light max-w-2xl mx-auto text-center">
                Find your perfect role and start your journey with us
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <h3 className="text-2xl font-bold text-on-light">{position.title}</h3>
                          {position.isPopular && (
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                              POPULAR
                            </span>
                          )}
                        </div>
                        <p className="text-secondary-on-light mb-4">{position.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-secondary-on-light">
                          <div className="flex items-center">
                            <BriefcaseIcon className="w-4 h-4 mr-2" />
                            {position.department}
                          </div>
                          <div className="flex items-center">
                            <MapPinIcon className="w-4 h-4 mr-2" />
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <ClockIcon className="w-4 h-4 mr-2" />
                            {position.type}
                          </div>
                          <div className="flex items-center">
                            <CurrencyDollarIcon className="w-4 h-4 mr-2" />
                            {position.salary}
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 lg:mt-0 lg:ml-8">
                        <Link href={`/contact?position=${encodeURIComponent(position.title)}`}>
                          <Button
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full lg:w-auto"
                            icon={ArrowRightIcon}
                            iconPosition="right"
                          >
                            Apply Now
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-on-light mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-secondary-on-light text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-on-light mb-3">Responsibilities:</h4>
                        <ul className="space-y-2">
                          {position.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-secondary-on-light text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 mb-6">
                <RocketLaunchIcon className="w-4 h-4 text-success mr-2" />
                <span className="text-sm text-on-dark font-medium">
                  Ready to Start Your Journey?
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-on-dark mb-6">
                Don't See Your Role?
              </h2>
              
              <p className="text-xl text-secondary-on-dark mb-8 max-w-2xl mx-auto">
                We're always looking for exceptional talent. Send us your resume and let's explore opportunities together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-0 shadow-xl min-w-[250px] font-semibold"
                    icon={HandRaisedIcon}
                    iconPosition="right"
                  >
                    Send Your Resume
                  </Button>
                </Link>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-on-dark hover:bg-white/10 backdrop-blur-sm min-w-[200px] font-semibold"
                  icon={ArrowRightIcon}
                  iconPosition="right"
                  onClick={() => window.open('mailto:careers@chlearx.com', '_blank')}
                >
                  Email Us Directly
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}