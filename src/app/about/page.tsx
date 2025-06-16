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

// Enhanced styles for better visual appeal
const enhancedCardStyle = {
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease'
};

// Bulletproof text contrast styles
const forceHighContrast = {
  color: '#000000 !important',
  textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
  fontWeight: '600',
  opacity: '1 !important'
};

const forceDescriptionContrast = {
  color: '#1f2937 !important',
  textShadow: '0 1px 2px rgba(255, 255, 255, 0.6)',
  fontWeight: '500',
  opacity: '1 !important'
};

const forceWhiteContrast = {
  color: '#ffffff !important',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
  fontWeight: '600',
  opacity: '1 !important'
};

import { Layout } from '@/components/templates/Layout';
import { Button } from '@/components/atoms/Button';
import { SEOHead } from '@/components/atoms/SEOHead';
import {
  UserGroupIcon,
  TrophyIcon,
  LightBulbIcon,
  HeartIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  ChartBarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const stats = [
    { label: 'Years of Experience', value: '8+', icon: ClockIcon },
    { label: 'Clients Served', value: '500+', icon: UserGroupIcon },
    { label: 'Revenue Generated', value: '$50M+', icon: ChartBarIcon },
    { label: 'Client Satisfaction', value: '98%', icon: StarIcon }
  ];

  const values = [
    {
      title: 'Performance-Driven',
      description: 'Every strategy we implement is backed by data and focused on delivering measurable results that impact your bottom line.',
      icon: ChartBarIcon,
    },
    {
      title: 'Transparent Communication',
      description: 'We believe in complete transparency with regular reporting, clear communication, and honest feedback about what works.',
      icon: LightBulbIcon,
    },
    {
      title: 'Long-term Partnerships',
      description: 'We&apos;re not just service providers; we&apos;re strategic partners invested in your long-term success and growth.',
      icon: HeartIcon,
    },
    {
      title: 'Continuous Innovation',
      description: 'We stay ahead of industry trends and continuously adapt our strategies to leverage the latest marketing technologies.',
      icon: TrophyIcon,
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: 'Former e-commerce executive with 12+ years experience scaling brands from startup to $100M+ revenue.',
      image: '/images/team/sarah.jpg',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Performance Marketing',
      description: 'Expert in paid advertising and conversion optimization with proven track record at top agencies.',
      image: '/images/team/michael.jpg',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Director of Analytics',
      description: 'Data scientist turned marketer, specializing in attribution modeling and revenue optimization.',
      image: '/images/team/emma.jpg',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'David Kim',
      role: 'Creative Director',
      description: 'Award-winning creative professional with expertise in brand development and user experience design.',
      image: '/images/team/david.jpg',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const achievements = [
    'Top 1% Marketing Agency by Client Results',
    'Google Premier Partner Status',
    'Facebook Marketing Partner',
    'Inc. 5000 Fastest Growing Companies',
    'Certified B Corporation',
    'Industry Innovation Award Winner'
  ];

  return (
    <>
      <SEOHead
        title="About CHLEARX - Performance-Driven E-commerce Marketing Agency"
        description="Learn about CHLEARX, a performance-driven e-commerce marketing agency helping businesses scale revenue through data-driven strategies and proven methodologies."
        keywords={['about CHLEARX', 'e-commerce marketing agency', 'performance marketing', 'digital marketing team']}
        type="website"
      />
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Enhanced Hero Section */}
          <section className="pt-24 pb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-secondary-600/20 to-accent-600/20"></div>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Performance-Driven
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                    Marketing Excellence
                  </span>
                </h1>
                
                <p className="text-xl mb-8 leading-relaxed" style={forceWhiteContrast}>
                  We're CHLEARX, a results-obsessed e-commerce marketing agency that helps ambitious businesses 
                  scale their revenue through data-driven strategies and cutting-edge optimization techniques.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-lg">
                      Start Your Growth Journey
                    </Button>
                  </Link>
                  <Link href="/case-studies">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                      View Our Results
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Enhanced Stats Section */}
          <section className="py-16 bg-white relative">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-2" style={forceHighContrast}>{stat.value}</div>
                    <div className="text-sm font-medium" style={forceDescriptionContrast}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Mission Section */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6" style={forceHighContrast}>
                    Our Mission
                  </h2>
                  <div className="w-full flex justify-center" style={forceCenter}>
                    <div className="p-8 rounded-2xl" style={enhancedCardStyle}>
                      <p className="text-lg max-w-2xl leading-relaxed font-medium" style={{...forceDescriptionContrast, ...forceCenter}}>
                        To empower e-commerce businesses with performance-driven marketing strategies that deliver 
                        sustainable growth, exceptional ROI, and long-term competitive advantages. We believe every 
                        business deserves marketing that works as hard as they do.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Enhanced Values Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={forceHighContrast}>
                  Our Values
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-lg max-w-2xl leading-relaxed" style={{...forceDescriptionContrast, ...forceCenter}}>
                    The principles that guide everything we do and every decision we make for our clients.
                  </p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="p-6 h-full rounded-2xl border border-gray-200 hover:border-primary-300 transition-all duration-300 group-hover:shadow-xl bg-white group-hover:-translate-y-2">
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <value.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3" style={forceHighContrast}>{value.title}</h3>
                          <p className="leading-relaxed" style={forceDescriptionContrast}>{value.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Team Section */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={forceHighContrast}>
                  Meet Our Expert Team
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-lg max-w-2xl leading-relaxed" style={{...forceDescriptionContrast, ...forceCenter}}>
                    Industry veterans and innovative thinkers who are passionate about driving your success.
                  </p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="p-6 text-center rounded-2xl border border-gray-200 hover:border-primary-300 transition-all duration-300 group-hover:shadow-xl bg-white group-hover:-translate-y-2">
                      <div className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-white text-2xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-1" style={forceHighContrast}>{member.name}</h3>
                      <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                      <p className="text-sm leading-relaxed" style={forceDescriptionContrast}>{member.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Achievements Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={forceHighContrast}>
                  Recognition & Achievements
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-lg max-w-2xl leading-relaxed" style={{...forceDescriptionContrast, ...forceCenter}}>
                    Our commitment to excellence has been recognized by industry leaders and clients alike.
                  </p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center space-x-3 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200 hover:border-primary-300 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircleIcon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium leading-relaxed" style={forceHighContrast}>{achievement}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-secondary-600/20 to-accent-600/20"></div>
            <div className="absolute inset-0 opacity-40">
              <div className="absolute inset-0 bg-gradient-to-bl from-white/10 via-transparent to-white/5"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center text-white max-w-4xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={forceWhiteContrast}>
                  Ready to Partner with Us?
                </h2>
                <p className="text-xl mb-8 leading-relaxed" style={forceWhiteContrast}>
                  Join hundreds of successful businesses who trust CHLEARX to drive their growth 
                  and maximize their marketing ROI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white text-primary-600 hover:bg-gray-50 shadow-lg">
                      Get Started Today
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                      Explore Our Services
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