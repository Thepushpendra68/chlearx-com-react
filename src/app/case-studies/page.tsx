'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Custom styles to force center alignment
const forceCenter = {
  textAlign: 'center' as const,
  display: 'block' as const,
  width: '100%',
  margin: '0 auto',
  textAlignLast: 'center' as const
};
import { Layout } from '@/components/templates/Layout';
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { SEOHead } from '@/components/atoms/SEOHead';
import {
  ChartBarIcon,
  TrophyIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  EyeIcon,
  HeartIcon,
  FireIcon
} from '@heroicons/react/24/outline';

const caseStudies = [
  {
    id: 1,
    title: 'FashionForward: 420% ROAS Increase',
    subtitle: 'Premium Fashion E-commerce',
    description: 'Transformed struggling fashion brand into market leader with strategic creative campaigns and conversion optimization.',
    image: '/images/case-studies/fashion-forward.jpg',
    client: 'FashionForward',
    industry: 'Fashion & Lifestyle',
    duration: '6 months',
    results: {
      roas: '4.2X',
      revenue: '₹2.5 Crores',
      conversion: '350%',
      cac: '-65%'
    },
    challenge: 'Low brand awareness, poor conversion rates, high customer acquisition costs',
    solution: 'Multi-channel creative strategy, audience segmentation, conversion funnel optimization',
    testimonial: 'CHLEARX transformed our business completely. Our revenue went from ₹50L to ₹2.5 Crores in just 6 months!',
    clientName: 'Priya Sharma',
    clientTitle: 'Founder, FashionForward',
    tags: ['E-commerce', 'Fashion', 'Meta Ads', 'Google Ads'],
    isPopular: true
  },
  {
    id: 2,
    title: 'TechGadgets: ₹3 Crore Revenue Milestone',
    subtitle: 'Electronics & Technology',
    description: 'Scaled tech startup from ₹20L to ₹3 Crores annual revenue through strategic growth acceleration.',
    image: '/images/case-studies/tech-gadgets.jpg',
    client: 'TechGadgets Pro',
    industry: 'Technology',
    duration: '8 months',
    results: {
      roas: '5.8X',
      revenue: '₹3 Crores',
      conversion: '280%',
      cac: '-45%'
    },
    challenge: 'Limited market reach, complex product positioning, seasonal demand fluctuations',
    solution: 'Data-driven targeting, product bundling strategies, seasonal campaign optimization',
    testimonial: 'The team at CHLEARX understood our tech products better than we did. Incredible results!',
    clientName: 'Rahul Patel',
    clientTitle: 'CEO, TechGadgets Pro',
    tags: ['Technology', 'B2C', 'Growth Strategy', 'Analytics'],
    isPopular: false
  },
  {
    id: 3,
    title: 'HealthyLiving: 500% Growth in 4 Months',
    subtitle: 'Health & Wellness E-commerce',
    description: 'Revolutionized wellness brand\'s digital presence and achieved unprecedented growth in competitive market.',
    image: '/images/case-studies/healthy-living.jpg',
    client: 'HealthyLiving',
    industry: 'Health & Wellness',
    duration: '4 months',
    results: {
      roas: '6.2X',
      revenue: '₹1.8 Crores',
      conversion: '500%',
      cac: '-55%'
    },
    challenge: 'High competition, complex regulatory requirements, trust building in health sector',
    solution: 'Authority building content, scientific backing, trust-focused creative strategy',
    testimonial: 'CHLEARX helped us build trust and credibility that translated into amazing sales growth.',
    clientName: 'Dr. Anjali Mehta',
    clientTitle: 'Founder, HealthyLiving',
    tags: ['Health', 'Wellness', 'Content Marketing', 'Trust Building'],
    isPopular: true
  }
];

export default function CaseStudiesPage() {
  return (
    <Layout>
      <SEOHead
        title="Case Studies - Proven E-commerce Success Stories | CHLEARX"
        description="Discover how we've helped e-commerce brands achieve 350%+ ROAS increases, ₹100M+ revenue generation, and market leadership. Real results, real clients."
        keywords={["e-commerce case studies", "ROAS increase", "revenue growth", "marketing success stories", "client results"]}
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
                <TrophyIcon className="w-4 h-4 text-success mr-2" />
                <span className="text-sm text-on-dark font-medium">
                  Real Results • Real Clients • Real Growth
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                <span className="block text-on-dark mb-2">
                  Success Stories That
                </span>
                <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Speak Numbers
                </span>
              </h1>
              
              <div className="w-full flex justify-center" style={forceCenter}>
                <p className="text-xl md:text-2xl text-secondary-on-dark font-medium mb-8 max-w-3xl leading-relaxed" style={forceCenter}>
                  See how we've transformed e-commerce businesses from struggling startups to market leaders
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link href="/audit">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-0 shadow-xl min-w-[250px] font-semibold"
                    icon={RocketLaunchIcon}
                    iconPosition="right"
                  >
                    Start Your Success Story
                  </Button>
                </Link>
                
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/30 text-on-dark hover:bg-white/10 backdrop-blur-sm min-w-[200px] font-semibold"
                    icon={ArrowRightIcon}
                    iconPosition="right"
                  >
                    Discuss Your Goals
                  </Button>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">200+</div>
                  <div className="text-sm text-muted-on-dark">Success Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-blue mb-2">₹100M+</div>
                  <div className="text-sm text-muted-on-dark">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-orange mb-2">350%</div>
                  <div className="text-sm text-muted-on-dark">Avg ROAS Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-purple mb-2">97%</div>
                  <div className="text-sm text-muted-on-dark">Client Retention</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
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
                Featured Success Stories
              </h2>
              <div className="w-full flex justify-center" style={forceCenter}>
                <p className="text-lg text-secondary-on-light max-w-2xl leading-relaxed" style={forceCenter}>
                  Discover how we've helped brands like yours achieve extraordinary growth
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <Card className="overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-64 lg:h-auto bg-gradient-to-br from-blue-600 to-purple-600">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white p-8">
                          <div className="text-6xl font-bold mb-2">{study.results.roas}</div>
                          <div className="text-lg font-medium">ROAS Achieved</div>
                        </div>
                      </div>
                      {study.isPopular && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                          POPULAR
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-2 mb-4">
                        {study.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-on-light mb-3">
                        {study.title}
                      </h3>
                      
                      <p className="text-secondary-on-light mb-6 text-lg">
                        {study.description}
                      </p>

                      {/* Results Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 mb-1">{study.results.roas}</div>
                          <div className="text-sm text-gray-600">ROAS</div>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 mb-1">{study.results.revenue}</div>
                          <div className="text-sm text-gray-600">Revenue</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600 mb-1">{study.results.conversion}</div>
                          <div className="text-sm text-gray-600">Growth</div>
                        </div>
                        <div className="text-center p-4 bg-orange-50 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600 mb-1">{study.results.cac}</div>
                          <div className="text-sm text-gray-600">CAC Reduction</div>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-gray-50 p-6 rounded-lg mb-6">
                        <p className="text-gray-700 italic mb-4">"{study.testimonial}"</p>
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                            {study.clientName.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold text-on-light">{study.clientName}</div>
                            <div className="text-sm text-secondary-on-light">{study.clientTitle}</div>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-secondary-on-light">
                          <span className="font-medium">Industry:</span> {study.industry} • 
                          <span className="font-medium"> Duration:</span> {study.duration}
                        </div>
                        <Link href="/contact">
                          <Button
                            variant="outline"
                            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                            icon={ArrowRightIcon}
                            iconPosition="right"
                          >
                            Get Similar Results
                          </Button>
                        </Link>
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
                <FireIcon className="w-4 h-4 text-success mr-2" />
                <span className="text-sm text-on-dark font-medium">
                  Ready to Join Our Success Stories?
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-on-dark mb-6">
                Your Success Story Starts Here
              </h2>
              
              <div className="w-full flex justify-center" style={forceCenter}>
                <p className="text-xl text-secondary-on-dark mb-8 max-w-2xl leading-relaxed" style={forceCenter}>
                  Join hundreds of successful brands who chose growth over stagnation
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/audit">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-0 shadow-xl min-w-[250px] font-semibold"
                    icon={RocketLaunchIcon}
                    iconPosition="right"
                  >
                    Get Free Strategy Session
                  </Button>
                </Link>
                
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/30 text-on-dark hover:bg-white/10 backdrop-blur-sm min-w-[200px] font-semibold"
                    icon={ArrowRightIcon}
                    iconPosition="right"
                  >
                    Contact Our Team
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 