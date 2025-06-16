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
  QuestionMarkCircleIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  DocumentTextIcon,
  PlayCircleIcon,
  AcademicCapIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UserIcon,
  CogIcon,
  CalendarDaysIcon,
  SparklesIcon,
  LifebuoyIcon,
  LightBulbIcon,
  StarIcon,
  ShieldCheckIcon,
  HeartIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Categories', icon: DocumentTextIcon, color: 'from-blue-500 to-cyan-500' },
    { id: 'getting-started', name: 'Getting Started', icon: PlayCircleIcon, color: 'from-green-500 to-emerald-500' },
    { id: 'campaigns', name: 'Campaign Management', icon: ChartBarIcon, color: 'from-purple-500 to-indigo-500' },
    { id: 'analytics', name: 'Growth Analytics', icon: ChartBarIcon, color: 'from-orange-500 to-red-500' },
    { id: 'billing', name: 'Billing & Payments', icon: CurrencyDollarIcon, color: 'from-yellow-500 to-amber-500' },
    { id: 'account', name: 'Account Settings', icon: UserIcon, color: 'from-pink-500 to-rose-500' },
    { id: 'technical', name: 'Technical Support', icon: CogIcon, color: 'from-gray-500 to-slate-500' }
  ];

  const helpArticles = [
    {
      id: 1,
      title: 'Getting Started with CHLEARX Services',
      category: 'getting-started',
      description: 'Complete guide to onboarding and setting up your first marketing campaign.',
      readTime: '5 min read',
      popular: true,
      difficulty: 'Beginner',
      lastUpdated: '2024-01-15'
    },
    {
      id: 2,
      title: 'Understanding Your Analytics Dashboard',
      category: 'analytics',
      description: 'Learn how to read and interpret your marketing performance metrics.',
      readTime: '8 min read',
      popular: true,
      difficulty: 'Intermediate',
      lastUpdated: '2024-01-10'
    },
    {
      id: 3,
      title: 'Setting Up Campaign Tracking',
      category: 'campaigns',
      description: 'Step-by-step guide to implementing proper tracking for your campaigns.',
      readTime: '6 min read',
      popular: false,
      difficulty: 'Advanced',
      lastUpdated: '2024-01-12'
    },
    {
      id: 4,
      title: 'Managing Your Billing and Invoices',
      category: 'billing',
      description: 'How to view invoices, update payment methods, and manage your account.',
      readTime: '4 min read',
      popular: false,
      difficulty: 'Beginner',
      lastUpdated: '2024-01-08'
    },
    {
      id: 5,
      title: 'Troubleshooting Common Issues',
      category: 'technical',
      description: 'Solutions to frequently encountered technical problems.',
      readTime: '10 min read',
      popular: true,
      difficulty: 'Intermediate',
      lastUpdated: '2024-01-14'
    },
    {
      id: 6,
      title: 'Optimizing Campaign Performance',
      category: 'campaigns',
      description: 'Best practices for improving your marketing campaign results.',
      readTime: '12 min read',
      popular: true,
      difficulty: 'Advanced',
      lastUpdated: '2024-01-16'
    }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How long does it take to see results from CHLEARX campaigns?',
      answer: 'Most clients start seeing initial improvements within 2-4 weeks of campaign launch. However, significant results typically become apparent after 6-8 weeks of optimization. Our team works continuously to improve performance throughout our partnership.',
      category: 'getting-started',
      helpful: 247,
      tags: ['timeline', 'results', 'expectations']
    },
    {
      id: 2,
      question: 'What is included in your monthly reporting?',
      answer: 'Our monthly reports include comprehensive performance metrics, ROI analysis, campaign insights, competitor analysis, and strategic recommendations for the following month. You\'ll also receive access to our real-time dashboard for ongoing monitoring.',
      category: 'analytics',
      helpful: 189,
      tags: ['reporting', 'analytics', 'dashboard']
    },
    {
      id: 3,
      question: 'Can I cancel my service at any time?',
      answer: 'Yes, our contracts are flexible. You can cancel with 30 days\' notice. We believe in earning your business through results, not locking you into long-term commitments you\'re not happy with.',
      category: 'billing',
      helpful: 156,
      tags: ['cancellation', 'contract', 'flexibility']
    },
    {
      id: 4,
      question: 'Do you work with businesses in my industry?',
      answer: 'We work with e-commerce businesses across 25+ industries including fashion, electronics, health & wellness, home & garden, B2B services, and more. Our strategies are customized based on your specific industry dynamics and target audience.',
      category: 'getting-started',
      helpful: 203,
      tags: ['industry', 'customization', 'strategy']
    },
    {
      id: 5,
      question: 'What platforms do you advertise on?',
      answer: 'We manage campaigns across Google Ads, Facebook/Instagram, Amazon, LinkedIn, TikTok, Pinterest, and other emerging platforms. The platform mix is customized based on where your target audience is most active and engaged.',
      category: 'campaigns',
      helpful: 178,
      tags: ['platforms', 'advertising', 'multi-channel']
    },
    {
      id: 6,
      question: 'How do you measure and report ROI?',
      answer: 'We use advanced attribution modeling to track the complete customer journey across all touchpoints. Our ROI calculations include direct response metrics, assisted conversions, and long-term customer value to give you a comprehensive view of performance.',
      category: 'analytics',
      helpful: 234,
      tags: ['ROI', 'measurement', 'attribution']
    },
    {
      id: 7,
      question: 'What if I\'m not satisfied with the results?',
      answer: 'Client satisfaction is our top priority. If you\'re not seeing the results we\'ve outlined in your strategy, we\'ll work with you to adjust the approach. We also offer a satisfaction guarantee for the first 90 days of our partnership.',
      category: 'billing',
      helpful: 167,
      tags: ['satisfaction', 'guarantee', 'results']
    },
    {
      id: 8,
      question: 'Do you provide training for our internal team?',
      answer: 'Yes, we offer team training sessions and knowledge transfer as part of our service. We believe in empowering your team with marketing knowledge while handling the execution and optimization for you.',
      category: 'account',
      helpful: 145,
      tags: ['training', 'team', 'knowledge-transfer']
    }
  ];

  const contactOptions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: ChatBubbleLeftRightIcon,
      availability: 'Mon-Fri 9AM-6PM EST',
      action: 'Start Chat',
      priority: 'high',
      responseTime: '< 2 minutes',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: EnvelopeIcon,
      availability: 'Response within 24 hours',
      action: 'Send Email',
      priority: 'medium',
      responseTime: '< 24 hours',
      color: 'from-emerald-500 to-green-500'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with an expert',
      icon: PhoneIcon,
      availability: 'Mon-Fri 9AM-6PM EST',
      action: 'Call Now',
      priority: 'high',
      responseTime: 'Immediate',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Schedule Consultation',
      description: 'Book a dedicated strategy session',
      icon: CalendarDaysIcon,
      availability: 'Flexible scheduling',
      action: 'Book Now',
      priority: 'medium',
      responseTime: 'Within 2 days',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { label: 'Average Response Time', value: '< 2 hrs', icon: ClockIcon },
    { label: 'Customer Satisfaction', value: '98%', icon: HeartIcon },
    { label: 'Issues Resolved', value: '15k+', icon: CheckCircleIcon },
    { label: 'Support Articles', value: '500+', icon: DocumentTextIcon }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? helpArticles 
    : helpArticles.filter(article => article.category === selectedCategory);

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <SEOHead
        title="Support Center - Help & Documentation | CHLEARX"
        description="Find answers to your questions with our comprehensive support center. Access help articles, FAQs, and contact our expert support team."
        keywords={['support center', 'help', 'customer support', 'FAQs', 'documentation', 'marketing help']}
        type="website"
      />
      <Layout>
        <div className="min-h-screen relative overflow-hidden">
          {/* Enhanced Hero Section with Dark Gradient Background */}
          <section className="relative pt-24 pb-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
              {[...Array(25)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-indigo-400/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="relative container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-5xl mx-auto"
              >
                {/* Enhanced Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-400/30 rounded-full px-6 py-3 mb-8"
                >
                  <LifebuoyIcon className="w-5 h-5 text-indigo-400" />
                  <span style={ContrastEnhancer.forceLightContrast} className="text-sm font-medium">
                    24/7 Support Center
                  </span>
                  <SparklesIcon className="w-4 h-4 text-yellow-400" />
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-black mb-6"
                  style={ContrastEnhancer.forceLightContrast}
                >
                  How Can We
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                    Help You?
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl md:text-2xl mb-10 leading-relaxed max-w-4xl mx-auto"
                  style={ContrastEnhancer.centeredDarkDescriptionContrast}
                >
                  Get the help you need with our comprehensive support resources and expert assistance. 
                  <span className="text-indigo-300 font-semibold"> Find answers instantly or connect with our team.</span>
                </motion.p>

                {/* Enhanced Search Bar */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="relative max-w-3xl mx-auto mb-12"
                >
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search for help articles, FAQs, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-16 pr-6 py-5 border-2 border-white/20 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 font-medium"
                  />
                  <div className="absolute inset-y-0 right-0 pr-6 flex items-center">
                    <kbd className="bg-white/20 text-white px-3 py-1 rounded-lg text-sm font-medium">Enter</kbd>
                  </div>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                    >
                      <stat.icon className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="flex flex-wrap justify-center gap-8 text-sm"
                >
                  <div className="flex items-center space-x-2 text-gray-300">
                    <ClockIcon className="w-5 h-5 text-indigo-400" />
                    <span>24/7 Self-Service</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 text-purple-400" />
                    <span>Live Chat Available</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400" />
                    <span>Expert Support Team</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <ShieldCheckIcon className="w-5 h-5 text-cyan-400" />
                    <span>Guaranteed Response</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Enhanced Quick Actions */}
          <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5"></div>
            
            <div className="relative container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-6 py-3 mb-6">
                  <HeartIcon className="w-5 h-5 text-indigo-600" />
                  <span className="text-indigo-800 font-semibold">We're Here for You</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={ContrastEnhancer.forceHighContrast}>
                  Need Help? Choose Your Channel
                </h2>
                <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={ContrastEnhancer.centeredDarkDescriptionContrast}>
                  Connect with our expert team through your preferred communication method for personalized assistance
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {contactOptions.map((option, index) => (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className={`p-8 text-center h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                      option.priority === 'high' ? 'ring-2 ring-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50' : 'bg-white'
                    }`}>
                      <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                        <option.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3" style={ContrastEnhancer.forceHighContrast}>{option.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{option.description}</p>
                      <div className="mb-4">
                        <div className="text-sm text-gray-500 mb-1">{option.availability}</div>
                        <div className="text-xs font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full inline-block">
                          {option.responseTime}
                        </div>
                      </div>
                      <Button 
                        variant={option.priority === 'high' ? 'primary' : 'outline'} 
                        size="sm" 
                        className={`w-full ${option.priority === 'high' ? `bg-gradient-to-r ${option.color} border-0` : ''}`}
                      >
                        {option.action}
                      </Button>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Category Navigation */}
          <section className="py-12 bg-gradient-to-br from-white to-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <h3 className="text-2xl font-bold mb-4" style={ContrastEnhancer.forceHighContrast}>Browse by Category</h3>
                <p className="text-gray-600">Find help articles and FAQs organized by topic</p>
              </motion.div>
              
              <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                {categories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 flex items-center space-x-3 shadow-lg ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-xl`
                        : 'bg-white text-gray-600 hover:bg-gray-50 hover:shadow-xl border border-gray-200'
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    <span>{category.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Help Articles */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-3 mb-6">
                  <LightBulbIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-800 font-semibold">Knowledge Base</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={ContrastEnhancer.forceHighContrast}>
                  Help Articles & Guides
                </h2>
                <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={ContrastEnhancer.centeredDarkDescriptionContrast}>
                  Step-by-step guides and detailed documentation to help you get the most out of our services
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {filteredArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          {article.popular && (
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                              <StarIcon className="w-3 h-3 fill-current" />
                              <span>Popular</span>
                            </span>
                          )}
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
                            {article.difficulty}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4 leading-tight" style={ContrastEnhancer.forceHighContrast}>
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{article.description}</p>
                      
                      <div className="mt-auto">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span className="flex items-center space-x-1">
                            <ClockIcon className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </span>
                          <span className="text-xs">Updated {article.lastUpdated}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <Button variant="outline" size="sm" className="flex-1 mr-3">
                            Read Article
                          </Button>
                          <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced FAQs */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 mb-6">
                  <QuestionMarkCircleIcon className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-800 font-semibold">Frequently Asked Questions</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={ContrastEnhancer.forceHighContrast}>
                  Quick Answers
                </h2>
                <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={ContrastEnhancer.centeredDarkDescriptionContrast}>
                  Find instant answers to the most common questions about our services and processes
                </p>
              </motion.div>

              <div className="max-w-5xl mx-auto">
                <div className="space-y-6">
                  {filteredFaqs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                        <button
                          onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                          className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex-1 pr-4">
                            <h3 className="text-lg font-bold mb-2" style={ContrastEnhancer.forceHighContrast}>
                              {faq.question}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="flex items-center space-x-1">
                                <HeartIcon className="w-4 h-4" />
                                <span>{faq.helpful} found this helpful</span>
                              </span>
                              <div className="flex space-x-2">
                                {faq.tags.slice(0, 2).map(tag => (
                                  <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {expandedFaq === faq.id && (
                              <span className="text-green-600 text-sm font-medium">Expanded</span>
                            )}
                            <ChevronDownIcon 
                              className={`w-6 h-6 text-gray-500 transform transition-transform ${
                                expandedFaq === faq.id ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                        </button>
                        {expandedFaq === faq.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-gray-100"
                          >
                            <div className="px-8 py-6 bg-gray-50">
                              <p className="text-gray-700 leading-relaxed mb-4">{faq.answer}</p>
                                                             <div className="flex items-center justify-between">
                                 <div className="flex space-x-2">
                                   <Button variant="outline" size="sm">
                                     👍 Helpful
                                   </Button>
                                   <Button variant="outline" size="sm">
                                     👎 Not Helpful
                                   </Button>
                                 </div>
                                 <Button variant="outline" size="sm">
                                   Copy Link
                                 </Button>
                               </div>
                            </div>
                          </motion.div>
                        )}
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Emergency Support */}
          <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5"></div>
            
            <div className="relative container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center max-w-4xl mx-auto"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl"
                >
                  <ExclamationTriangleIcon className="w-10 h-10 text-white" />
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={ContrastEnhancer.forceHighContrast}>
                  Urgent Issue or Campaign Emergency?
                </h2>
                <p className="text-xl mb-10 leading-relaxed" style={ContrastEnhancer.forceDescriptionContrast}>
                  If you're experiencing a critical issue affecting your campaigns or website, 
                  our emergency response team is available to help immediately.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-8 py-4 text-lg font-bold shadow-xl"
                    >
                      <PhoneIcon className="w-5 h-5 mr-2" />
                      Emergency Hotline: (555) 911-HELP
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-bold"
                    >
                      <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                      Priority Chat Support
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <section className="relative py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center max-w-4xl mx-auto"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl"
                >
                  <RocketLaunchIcon className="w-10 h-10 text-white" />
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold mb-8" style={ContrastEnhancer.forceLightContrast}>
                  Still Need Help?
                </h2>
                <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={ContrastEnhancer.centeredDarkDescriptionContrast}>
                  Can't find what you're looking for? Our expert support team is ready to provide 
                  personalized assistance for your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/contact">
                      <Button 
                        variant="secondary" 
                        size="lg" 
                        className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 text-lg font-bold shadow-xl"
                      >
                        Contact Support Team
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg font-bold"
                    >
                      <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                      Start Live Chat
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}