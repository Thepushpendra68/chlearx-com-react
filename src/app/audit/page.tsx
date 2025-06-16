'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ContrastEnhancer } from '@/utils/contrastEnhancer';
import { Layout } from '@/components/templates/Layout';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { SEOHead } from '@/components/atoms/SEOHead';
import {
  ClipboardDocumentCheckIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ExclamationTriangleIcon,
  StarIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  TrophyIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export default function FreeAuditPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    website: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    monthlyRevenue: '',
    marketingBudget: '',
    primaryGoal: '',
    currentChallenges: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/revenue-audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contactEmail: formData.email,
          businessName: formData.businessName,
          websiteUrl: formData.website,
          phoneNumber: formData.phone,
          monthlyRevenue: formData.monthlyRevenue,
          primaryChallenges: [formData.currentChallenges || 'General optimization'],
          currentGoals: `Primary Goal: ${formData.primaryGoal || 'Increase revenue and optimize marketing performance'}. Our client ${formData.firstName} ${formData.lastName} from ${formData.businessName} is looking to improve their e-commerce marketing strategy and boost overall business growth.`,
          timeline: '3-6 months',
          budget: formData.marketingBudget || 'To be discussed',
          additionalInfo: `First Name: ${formData.firstName}, Last Name: ${formData.lastName}, Phone: ${formData.phone}`
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert('There was an error submitting your audit request. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your audit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const auditIncludes = [
    {
      title: 'Conversion Analysis',
      description: 'Complete audit of your conversion funnel, checkout process, and user experience optimization opportunities',
      icon: ArrowTrendingUpIcon,
    },
    {
      title: 'SEO Performance Review',
      description: 'Technical SEO audit, keyword analysis, and content optimization recommendations',
      icon: MagnifyingGlassIcon,
    },
    {
      title: 'Paid Advertising Assessment',
      description: 'Analysis of current campaigns, ad spend efficiency, and targeting optimization',
      icon: ChartBarIcon,
    },
    {
      title: 'Analytics & Tracking Setup',
      description: 'Review of tracking implementation, attribution models, and measurement accuracy',
      icon: ClipboardDocumentCheckIcon,
    }
  ];

  const auditBenefits = [
    'Identify revenue leaks in your marketing funnel',
    'Discover untapped growth opportunities',
    'Get actionable recommendations with priority rankings',
    'Receive a customized 90-day action plan',
    'Compare your performance against industry benchmarks',
    'Uncover technical issues affecting conversions',
    'Get expert insights from our marketing team',
    'No obligation - completely free and comprehensive'
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      company: 'StyleHub Boutique',
      result: 'Found $15K/month in lost revenue',
      quote: 'The free audit revealed issues we never knew existed. Within 30 days of implementing their recommendations, our revenue increased by 40%.',
      rating: 5
    },
    {
      name: 'Michael Torres',
      company: 'FitnessPro Equipment',
      result: 'Improved conversion rate by 65%',
      quote: 'Incredible detail and actionable insights. The audit was more comprehensive than reports we\'ve paid thousands for.',
      rating: 5
    }
  ];

  const stats = [
    { label: 'Average Revenue Increase', value: '40%', icon: ArrowTrendingUpIcon },
    { label: 'Issues Identified per Audit', value: '15+', icon: ExclamationTriangleIcon },
    { label: 'Delivery Time', value: '3 Days', icon: ClockIcon },
    { label: 'Client Satisfaction', value: '99%', icon: StarIcon }
  ];

  return (
    <>
      <SEOHead
        title="Free Marketing Audit - Comprehensive E-commerce Analysis | CHLEARX"
        description="Get a free, comprehensive marketing audit for your e-commerce business. Identify revenue opportunities and optimization strategies with our expert analysis."
        keywords={['free marketing audit', 'e-commerce audit', 'conversion audit', 'marketing analysis', 'free consultation']}
        type="website"
      />
      <Layout>
        <div className="min-h-screen">
          {/* Enhanced Hero Section */}
          <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-20 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
              
              {/* Floating particles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-5xl mx-auto"
              >
                {/* Enhanced Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 group hover:scale-105 transition-transform duration-300"
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ClipboardDocumentCheckIcon className="w-5 h-5 text-green-400" />
                  </motion.div>
                  <span style={ContrastEnhancer.forceLightContrast} className="font-medium">
                    Free Marketing Audit
                  </span>
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-gradient-to-r from-green-400 to-emerald-400 text-slate-900 text-xs px-2 py-1 rounded-full font-bold"
                  >
                    100% FREE
                  </motion.span>
                </motion.div>
                
                {/* Enhanced Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                  style={ContrastEnhancer.forceHighContrast}
                >
                  Get Your Free E-commerce
                  <motion.span
                    className="block bg-gradient-to-r from-green-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Marketing Audit
                  </motion.span>
                  <motion.div
                    className="h-1 bg-gradient-to-r from-green-400 to-blue-400 mt-4 mx-auto rounded-full"
                    style={{ width: '300px' }}
                    initial={{ width: 0 }}
                    animate={{ width: '300px' }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </motion.h1>
                
                {/* Enhanced Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto"
                  style={ContrastEnhancer.forceDescriptionContrast}
                >
                  Uncover hidden revenue opportunities and performance gaps in your e-commerce marketing. 
                  Get a comprehensive, actionable audit report with personalized recommendations - completely free.
                </motion.p>

                {/* Enhanced Stats Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="grid sm:grid-cols-3 gap-6 mb-8"
                >
                  {[
                    { value: '15+', label: 'Issues Average identified', icon: ExclamationTriangleIcon },
                    { value: '3 Days', label: 'Delivery time', icon: ClockIcon },
                    { value: '$0', label: 'Completely free', icon: CheckCircleIcon }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group"
                    >
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:border-white/30">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-3"
                        >
                          <stat.icon className="w-6 h-6 text-slate-900" />
                        </motion.div>
                        <div className="text-3xl md:text-4xl font-bold mb-2" style={ContrastEnhancer.forceHighContrast}>
                          {stat.value}
                        </div>
                        <div className="text-sm" style={ContrastEnhancer.forceDescriptionContrast}>
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Enhanced Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-gradient-to-r from-green-100/20 to-emerald-100/20 backdrop-blur-sm border border-green-200/30 rounded-2xl p-6 inline-flex items-center space-x-4 hover:scale-105 transition-transform duration-300"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center"
                  >
                    <CheckCircleIcon className="w-6 h-6 text-slate-900" />
                  </motion.div>
                  <div>
                    <p className="font-semibold" style={ContrastEnhancer.forceHighContrast}>
                      No strings attached
                    </p>
                    <p className="text-sm" style={ContrastEnhancer.forceDescriptionContrast}>
                      Get valuable insights with zero obligation
                    </p>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
                >
                  <a href="#audit-form">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="bg-gradient-to-r from-green-400 to-emerald-400 text-slate-900 hover:from-green-500 hover:to-emerald-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-bold"
                    >
                      Start Free Audit
                      <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                  <Link href="/calculator">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                    >
                      ROI Calculator
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Enhanced Form & Content Section */}
          <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/30" id="audit-form">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Enhanced Audit Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 group-hover:scale-[1.02]">
                  {!isSubmitted ? (
                    <>
                      <h2 className="text-2xl font-bold mb-6" style={ContrastEnhancer.forceHighContrast}>
                        Request Your Free Audit
                      </h2>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              First Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="John"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Last Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Smith"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Business Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Your Company Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            value={formData.businessName}
                            onChange={(e) => handleInputChange('businessName', e.target.value)}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Website URL *
                          </label>
                          <input
                            type="url"
                            required
                            placeholder="https://yourwebsite.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            value={formData.website}
                            onChange={(e) => handleInputChange('website', e.target.value)}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="john@company.com"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="+1 (555) 123-4567"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Monthly Revenue Range
                            </label>
                            <select
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              value={formData.monthlyRevenue}
                              onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                            >
                              <option value="">Select range</option>
                              <option value="under-10k">Under $10K</option>
                              <option value="10k-25k">$10K - $25K</option>
                              <option value="25k-50k">$25K - $50K</option>
                              <option value="50k-100k">$50K - $100K</option>
                              <option value="100k-250k">$100K - $250K</option>
                              <option value="250k-500k">$250K - $500K</option>
                              <option value="500k-1m">$500K - $1M</option>
                              <option value="over-1m">Over $1M</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Monthly Marketing Budget
                            </label>
                            <select
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              value={formData.marketingBudget}
                              onChange={(e) => handleInputChange('marketingBudget', e.target.value)}
                            >
                              <option value="">Select range</option>
                              <option value="under-1k">Under $1K</option>
                              <option value="1k-5k">$1K - $5K</option>
                              <option value="5k-10k">$5K - $10K</option>
                              <option value="10k-25k">$10K - $25K</option>
                              <option value="25k-50k">$25K - $50K</option>
                              <option value="50k-100k">$50K - $100K</option>
                              <option value="over-100k">Over $100K</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Primary Goal
                          </label>
                          <select
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            value={formData.primaryGoal}
                            onChange={(e) => handleInputChange('primaryGoal', e.target.value)}
                          >
                            <option value="">Select your main goal</option>
                            <option value="increase-revenue">Increase Revenue</option>
                            <option value="improve-roas">Improve ROAS</option>
                            <option value="boost-conversions">Boost Conversion Rate</option>
                            <option value="reduce-cpa">Reduce Cost Per Acquisition</option>
                            <option value="scale-ads">Scale Advertising</option>
                            <option value="improve-seo">Improve SEO Rankings</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Current Challenges (Optional)
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Tell us about your biggest marketing challenges..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            value={formData.currentChallenges}
                            onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full bg-blue-900 text-white hover:bg-blue-800 focus:ring-blue-500" disabled={isSubmitting}>
                          {isSubmitting ? 'Submitting...' : 'Request Your Free Audit'}
                          <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </Button>

                        <p className="text-xs text-gray-500 text-center">
                          By submitting this form, you agree to our{' '}
                          <Link href="/privacy" className="text-primary-600 hover:text-primary-700">
                            Privacy Policy
                          </Link>{' '}
                          and{' '}
                          <Link href="/terms" className="text-primary-600 hover:text-primary-700">
                            Terms of Service
                          </Link>
                        </p>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircleIcon className="w-16 h-16 text-green-600 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Audit Request Submitted!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for your request. Our team will analyze your website and send you a 
                        comprehensive audit report within 3 business days.
                      </p>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                        <p className="text-sm text-blue-800">
                          <strong>What's next?</strong> Check your email for a confirmation and expect your 
                          detailed audit report by {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()}.
                        </p>
                      </div>
                      <Link href="/calculator">
                        <Button variant="outline">
                          Try Our ROI Calculator
                        </Button>
                      </Link>
                    </div>
                  )}
                  </div>
                </motion.div>

                {/* Enhanced What's Included */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What's Included in Your Audit
                  </h3>
                  <div className="space-y-4">
                    {auditIncludes.map((item, index) => (
                      <div key={item.title} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Audit Benefits
                  </h3>
                  <div className="space-y-3">
                    {auditBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-white border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-black">Sample Audit Preview</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-black">Conversion Rate Issues:</span>
                      <span className="font-bold text-red-600">7 Found</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-black">SEO Opportunities:</span>
                      <span className="font-bold text-green-600">12 Found</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-black">Ad Optimization Potential:</span>
                      <span className="font-bold text-blue-600">$5,200/mo</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-black">Tracking Issues:</span>
                      <span className="font-bold text-orange-600">3 Critical</span>
                    </div>
                  </div>
                </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Enhanced Testimonials */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-3 mb-6"
                >
                  <SparklesIcon className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-medium">Client Success Stories</span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={ContrastEnhancer.forceHighContrast}>
                  What Our Clients Say
                </h2>
                <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={ContrastEnhancer.centeredDarkDescriptionContrast}>
                  See how our free audits have helped businesses identify and fix revenue-killing issues
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6">
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="mb-4">
                        <div className="text-xl font-bold text-primary-600 mb-2">{testimonial.result}</div>
                        <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.company}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center max-w-4xl mx-auto"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
                >
                  <TrophyIcon className="w-5 h-5 text-green-400" />
                  <span style={ContrastEnhancer.forceLightContrast} className="font-medium">
                    Don't Wait - Act Now
                  </span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={ContrastEnhancer.forceHighContrast}>
                  Don't Leave Money on the Table
                </h2>
                <p className="text-xl mb-8 leading-relaxed" style={ContrastEnhancer.forceDescriptionContrast}>
                  Every day you wait is potential revenue lost. Get your free audit now and start 
                  optimizing your marketing performance immediately.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#audit-form">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto bg-gray-900 text-white hover:bg-gray-800">
                      Get Your Free Audit
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                  <Link href="/contact">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto bg-blue-900 text-white hover:bg-black transition-all duration-200">
                      Schedule a Call
                    </Button>
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