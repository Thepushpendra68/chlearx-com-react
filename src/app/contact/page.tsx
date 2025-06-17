'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/templates/Layout';
import { ContactForm } from '@/components/organisms/ContactForm';
import { Card } from '@/components/atoms/Card';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email', 
      value: 'hello@chlearx.com',
      href: 'mailto:hello@chlearx.com',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: MapPinIcon,
      title: 'Address',
      value: '123 Business Avenue, Suite 456, New York, NY 10001',
      href: '#',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      href: '#',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const benefits = [
    '24-hour response time',
    'Free initial consultation',
    'Data-driven strategies',
    'Proven track record',
    'Dedicated account manager',
    'Monthly performance reports'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Enhanced Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/50 rounded-full text-sm font-semibold text-blue-700 mb-8 shadow-lg"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
                Let's Start Something Amazing Together
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
                Get in Touch
              </h1>
              <div className="flex justify-center">
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl text-center" style={{ textAlign: 'center' }}>
                  Ready to grow your business? Send us a message and we'll get back to you within 
                  <span className="font-semibold text-blue-600"> 24 hours</span>.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <ContactForm />
                </motion.div>
              </div>

              {/* Contact Information */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-8"
                >
                  {/* Contact Info Card */}
                  <Card className="p-8 bg-gradient-to-br from-white to-blue-50/50 border-0 shadow-xl">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
                    <div className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <motion.div 
                          key={info.title} 
                          className="flex items-start group cursor-pointer"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {info.title}
                            </h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {info.value}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </Card>

                  {/* Benefits Card */}
                  <Card className="p-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white border-0 shadow-xl">
                    <h3 className="text-2xl font-bold mb-6 text-white">Why Choose Us?</h3>
                    <div className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <motion.div
                          key={benefit}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                          className="flex items-center group"
                        >
                          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-white/30 transition-colors">
                            <CheckCircleIcon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm font-medium">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* CTA in benefits card */}
                    <div className="mt-8 pt-6 border-t border-white/20">
                      <p className="text-sm text-white mb-4">Ready to get started?</p>
                      <motion.div
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-sm font-semibold text-white">Free Consultation</p>
                        <p className="text-xs text-white mt-1">30-minute strategy session</p>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 