'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ContrastEnhancer } from '@/utils/contrastEnhancer';
import { Layout } from '@/components/templates/Layout';
import { ContactForm } from '@/components/organisms/ContactForm';
import { ROICalculator } from '@/components/organisms/ROICalculator';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  SparklesIcon,
  RocketLaunchIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'form' | 'calculator'>('form');

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      description: 'Call us for immediate assistance',
      value: '+1 (555) 123-4567',
      action: 'Call Now',
      href: 'tel:+15551234567',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      description: 'Send us your detailed requirements',
      value: 'hello@chlearx.com',
      action: 'Send Email',
      href: 'mailto:hello@chlearx.com',
      color: 'from-emerald-500 to-emerald-600',
      hoverColor: 'hover:from-emerald-600 hover:to-emerald-700'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Live Chat',
      description: 'Chat with our team online',
      value: 'Available 24/7',
      action: 'Start Chat',
      href: '/contact',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700'
    },
    {
      icon: CalendarDaysIcon,
      title: 'Schedule Meeting',
      description: 'Book a free consultation call',
      value: '30-minute slots',
      action: 'Book Now',
      href: '/audit',
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700'
    },
  ];

  const officeInfo = [
    {
      icon: MapPinIcon,
      title: 'Headquarters',
      lines: ['123 Business Avenue', 'Suite 456', 'New York, NY 10001'],
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      lines: ['Monday - Friday: 9:00 AM - 6:00 PM EST', 'Saturday: 10:00 AM - 4:00 PM EST', 'Sunday: Closed'],
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Enhanced Hero Section */}
        <section className="pt-20 pb-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-32 right-0 w-80 h-80 bg-gradient-to-bl from-secondary-500/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-40 bg-gradient-to-t from-emerald-500/5 to-transparent"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-32 left-1/4 w-4 h-4 bg-primary-400 rounded-full opacity-60"
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-40 right-1/3 w-3 h-3 bg-emerald-400 rounded-full opacity-50"
              animate={{ 
                y: [0, 20, 0],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="absolute bottom-40 left-1/6 w-5 h-5 bg-purple-400 rounded-full opacity-40"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
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
                className="inline-flex items-center px-6 py-3 bg-white shadow-lg border border-primary-100 rounded-full text-sm font-bold mb-8 hover:shadow-xl transition-all duration-300"
              >
                <motion.span
                  className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-primary-500 rounded-full mr-3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span style={ContrastEnhancer.forceDarkContrast}>💬 Ready to Get Started?</span>
                <motion.div
                  className="ml-3 px-2 py-1 bg-gradient-to-r from-emerald-500 to-primary-500 text-white rounded-full text-xs font-bold"
                  animate={{ 
                    boxShadow: [
                      '0 0 0 0 rgba(16, 185, 129, 0.7)',
                      '0 0 0 10px rgba(16, 185, 129, 0)',
                      '0 0 0 0 rgba(16, 185, 129, 0)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  FREE
                </motion.div>
              </motion.div>

              {/* Enhanced Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-8"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span style={ContrastEnhancer.forceDarkContrast}>Let's Grow Your Business</span>
                  <span className="block relative">
                    <span style={ContrastEnhancer.forceDarkContrast}>Together</span>
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-500 to-primary-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                    <motion.div
                      className="absolute -top-4 -right-8"
                      animate={{ 
                        rotate: [0, 15, -15, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <HeartIcon className="w-8 h-8 text-red-500" />
                    </motion.div>
                  </span>
                </h1>
              </motion.div>

              {/* Enhanced Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-12"
              >
                <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto" style={ContrastEnhancer.centeredDarkDescriptionContrast}>
                  Ready to transform your marketing performance? Get in touch with our experts 
                  and discover how we can <span className="font-semibold text-primary-600">accelerate your growth</span> with data-driven strategies.
                </p>
              </motion.div>

              {/* Enhanced Tab Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex justify-center mb-12"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/50">
                  <button
                    onClick={() => setActiveTab('form')}
                    className={`px-8 py-4 rounded-xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 ${
                      activeTab === 'form'
                        ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg transform scale-105'
                        : 'text-slate-700 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    <EnvelopeIcon className="w-4 h-4" />
                    <span>Contact Form</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('calculator')}
                    className={`px-8 py-4 rounded-xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 ${
                      activeTab === 'calculator'
                        ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg transform scale-105'
                        : 'text-slate-700 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    <SparklesIcon className="w-4 h-4" />
                    <span>ROI Calculator</span>
                  </button>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1" style={ContrastEnhancer.forceDarkContrast}>24h</div>
                  <div className="text-sm" style={ContrastEnhancer.forceDarkDescriptionContrast}>Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1" style={ContrastEnhancer.forceDarkContrast}>95%</div>
                  <div className="text-sm" style={ContrastEnhancer.forceDarkDescriptionContrast}>Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1" style={ContrastEnhancer.forceDarkContrast}>Free</div>
                  <div className="text-sm" style={ContrastEnhancer.forceDarkDescriptionContrast}>Initial Consultation</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            {activeTab === 'form' ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <ContactForm onSuccess={(data) => console.log('Form submitted:', data)} />
              </motion.div>
            ) : (
              <motion.div
                key="calculator"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <ROICalculator />
              </motion.div>
            )}
          </div>
        </section>

        {/* Enhanced Contact Methods */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px)', backgroundSize: '60px 60px' }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-bold mb-6">
                <RocketLaunchIcon className="w-4 h-4 mr-2" />
                Multiple Ways to Connect
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={ContrastEnhancer.forceDarkContrast}>
                Choose Your Preferred Method
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={ContrastEnhancer.centeredDarkDescriptionContrast}>
                Choose the method that works best for you. Our team is ready to help you achieve your marketing goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={ContrastEnhancer.forceDarkContrast}>
                      {method.title}
                    </h3>
                    <p className="text-sm mb-4" style={ContrastEnhancer.forceDarkDescriptionContrast}>
                      {method.description}
                    </p>
                    <p className="text-sm font-bold mb-6" style={ContrastEnhancer.forceDarkContrast}>
                      {method.value}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`w-full bg-gradient-to-r ${method.color} ${method.hoverColor} text-white border-0 hover:shadow-lg transition-all duration-300`}
                      onClick={() => window.open(method.href, '_blank')}
                    >
                      {method.action}
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Office Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {officeInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                    <div className="flex items-start">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-4" style={ContrastEnhancer.forceDarkContrast}>
                          {info.title}
                        </h3>
                        <div className="space-y-2">
                          {info.lines.map((line, lineIndex) => (
                            <p key={lineIndex} className="leading-relaxed" style={ContrastEnhancer.forceDarkDescriptionContrast}>
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(30deg, #3b82f6 12%, transparent 12.5%, transparent 87%, #3b82f6 87.5%, #3b82f6)', backgroundSize: '20px 20px' }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-bold mb-6">
                <SparklesIcon className="w-4 h-4 mr-2" />
                Frequently Asked Questions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={ContrastEnhancer.forceDarkContrast}>
                Quick Answers
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={ContrastEnhancer.centeredDarkDescriptionContrast}>
                Get quick answers to common questions about our services and process.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                {[
                  {
                    question: "How quickly can you start working on my project?",
                    answer: "We can typically begin within 1-2 weeks after our initial consultation and strategy session. Rush projects can be accommodated with additional planning."
                  },
                  {
                    question: "What's included in your marketing packages?",
                    answer: "Our packages include strategy development, campaign execution, ongoing optimization, detailed reporting, and regular strategy calls. Specific services vary by package level."
                  },
                  {
                    question: "Do you work with businesses in my industry?",
                    answer: "We work with e-commerce businesses across all industries. Our data-driven approach adapts to any market vertical, from fashion to electronics to B2B services."
                  },
                  {
                    question: "How do you measure and report success?",
                    answer: "We provide comprehensive monthly reports with key metrics, ROI analysis, and strategic recommendations. You'll have 24/7 access to real-time dashboards showing your campaign performance."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                      <h3 className="text-xl font-bold mb-4" style={ContrastEnhancer.forceDarkContrast}>
                        {faq.question}
                      </h3>
                      <p className="leading-relaxed text-lg" style={ContrastEnhancer.forceDarkDescriptionContrast}>
                        {faq.answer}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 