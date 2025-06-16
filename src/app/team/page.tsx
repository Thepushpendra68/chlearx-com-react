'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ContrastEnhancer } from '@/utils/contrastEnhancer';
import { Layout } from '@/components/templates/Layout';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { SEOHead } from '@/components/atoms/SEOHead';
import {
  UserGroupIcon,
  MapPinIcon,
  AcademicCapIcon,
  TrophyIcon,
  HeartIcon,
  ArrowRightIcon,
  EnvelopeIcon,
  LinkIcon,
  SparklesIcon,
  StarIcon,
  CheckCircleIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export default function TeamPage() {
  const leadership = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: 'Former VP of Growth at a $500M e-commerce company. Led teams that generated over $100M in revenue through data-driven marketing strategies.',
      image: '/images/team/sarah.jpg',
      location: 'New York, NY',
      experience: '12+ years',
      specialties: ['Growth Strategy', 'Team Leadership', 'Revenue Optimization'],
      education: 'MBA, Wharton School',
      linkedin: 'https://linkedin.com/in/sarah-johnson',
      email: 'sarah@chlearx.com',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Performance Marketing',
      description: 'Ex-Google Ads specialist who managed $50M+ in ad spend. Certified in Google, Facebook, and Amazon advertising platforms.',
      image: '/images/team/michael.jpg',
      location: 'San Francisco, CA',
      experience: '10+ years',
      specialties: ['Paid Advertising', 'ROAS Optimization', 'Campaign Strategy'],
      education: 'BS Computer Science, Stanford',
      linkedin: 'https://linkedin.com/in/michael-chen',
      email: 'michael@chlearx.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Director of Analytics',
      description: 'Data scientist turned marketer with expertise in attribution modeling, predictive analytics, and conversion optimization.',
      image: '/images/team/emma.jpg',
      location: 'Austin, TX',
      experience: '8+ years',
      specialties: ['Data Analytics', 'Attribution Modeling', 'Conversion Optimization'],
      education: 'PhD Data Science, UT Austin',
      linkedin: 'https://linkedin.com/in/emma-rodriguez',
      email: 'emma@chlearx.com',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const team = [
    {
      name: 'David Kim',
      role: 'Creative Director',
      description: 'Award-winning designer with experience at top creative agencies. Specializes in conversion-focused design and brand development.',
      image: '/images/team/david.jpg',
      location: 'Los Angeles, CA',
      experience: '9+ years',
      specialties: ['Creative Strategy', 'UX/UI Design', 'Brand Development'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'Jessica Williams',
      role: 'Senior SEO Strategist',
      description: 'SEO expert who has helped 100+ e-commerce sites achieve first-page rankings and increase organic traffic by 300%+.',
      image: '/images/team/jessica.jpg',
      location: 'Denver, CO',
      experience: '7+ years',
      specialties: ['Technical SEO', 'Content Strategy', 'Link Building'],
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      name: 'Alex Thompson',
      role: 'Conversion Optimization Lead',
      description: 'A/B testing specialist with 500+ successful tests. Increased client conversion rates by an average of 45%.',
      image: '/images/team/alex.jpg',
      location: 'Seattle, WA',
      experience: '6+ years',
      specialties: ['A/B Testing', 'CRO Strategy', 'User Research'],
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      name: 'Maria Gonzalez',
      role: 'Email Marketing Specialist',
      description: 'Email automation expert who has generated $20M+ in email revenue for e-commerce brands through strategic campaigns.',
      image: '/images/team/maria.jpg',
      location: 'Miami, FL',
      experience: '5+ years',
      specialties: ['Email Automation', 'Segmentation', 'Lifecycle Marketing'],
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Ryan O\'Connor',
      role: 'Social Media Strategist',
      description: 'Social commerce specialist who has built viral campaigns generating millions in revenue for D2C brands.',
      image: '/images/team/ryan.jpg',
      location: 'Chicago, IL',
      experience: '6+ years',
      specialties: ['Social Commerce', 'Influencer Marketing', 'Content Creation'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Lisa Park',
      role: 'Client Success Manager',
      description: 'Customer success expert ensuring our clients achieve their growth goals. 98% client satisfaction rate.',
      image: '/images/team/lisa.jpg',
      location: 'Portland, OR',
      experience: '4+ years',
      specialties: ['Client Relations', 'Project Management', 'Growth Planning'],
      gradient: 'from-amber-500 to-orange-500'
    }
  ];

  const values = [
    {
      title: 'Data-Driven Excellence',
      description: 'Every decision is backed by data, every strategy is tested, and every result is measured.',
      icon: TrophyIcon,
    },
    {
      title: 'Client-First Mentality',
      description: 'Our success is measured by our clients\' success. We are partners in your growth journey.',
      icon: HeartIcon,
    },
    {
      title: 'Continuous Learning',
      description: 'The marketing landscape evolves rapidly. We stay ahead through constant learning and adaptation.',
      icon: AcademicCapIcon,
    },
    {
      title: 'Collaborative Innovation',
      description: 'Great ideas come from collaboration. We work together to create innovative solutions.',
      icon: UserGroupIcon,
    }
  ];

  const stats = [
    { label: 'Team Members', value: '25+', icon: UserGroupIcon },
    { label: 'Combined Experience', value: '150+ years', icon: StarIcon },
    { label: 'Certifications Held', value: '50+', icon: CheckCircleIcon },
    { label: 'Client Satisfaction', value: '98%', icon: HeartIcon }
  ];

  return (
    <>
      <SEOHead
        title="Our Team - Meet the CHLEARX Marketing Experts"
        description="Meet our team of expert marketers, data scientists, and growth strategists who drive exceptional results for e-commerce businesses."
        keywords={['marketing team', 'e-commerce experts', 'digital marketing specialists', 'growth team', 'marketing agency team']}
        type="website"
      />
      <Layout>
        <div className="min-h-screen">
          {/* Enhanced Hero Section */}
          <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-32 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
              
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
                    y: [0, -20, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
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
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <UserGroupIcon className="w-5 h-5 text-blue-400" />
                  </motion.div>
                  <span style={ContrastEnhancer.forceLightContrast} className="font-medium">
                    Meet Our Expert Team
                  </span>
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-gradient-to-r from-blue-400 to-purple-400 text-white text-xs px-2 py-1 rounded-full font-bold"
                  >
                    25+ EXPERTS
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
                  The Minds Behind
                  <motion.span
                    className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Your Success
                  </motion.span>
                  <motion.div
                    className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mt-4 mx-auto rounded-full"
                    style={{ width: '200px' }}
                    initial={{ width: 0 }}
                    animate={{ width: '200px' }}
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
                  Our team combines decades of experience in e-commerce marketing, data science, and growth strategy 
                  to deliver exceptional results for ambitious businesses worldwide.
                </motion.p>

                {/* Enhanced Stats Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
                >
                  {stats.map((stat, index) => (
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
                          className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-3"
                        >
                          <stat.icon className="w-6 h-6 text-white" />
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

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Link href="/contact">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Work With Us
                      <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/careers">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                    >
                      Join Our Team
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Enhanced Leadership Team */}
          <section className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-6"
                >
                  <SparklesIcon className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-700 font-medium">Leadership Excellence</span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={ContrastEnhancer.forceHighContrast}>
                  Leadership Team
                </h2>
                <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={ContrastEnhancer.centeredDarkDescriptionContrast}>
                  Meet the visionaries and strategists who guide our mission to accelerate e-commerce growth 
                  and drive exceptional results for our clients.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {leadership.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 h-full group-hover:scale-[1.02]">
                      <div className="text-center mb-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className={`w-32 h-32 bg-gradient-to-br ${member.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl`}
                        >
                          <span className="text-white text-3xl font-bold">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-2" style={ContrastEnhancer.forceHighContrast}>
                          {member.name}
                        </h3>
                        <p className="text-purple-600 font-semibold text-lg mb-4">{member.role}</p>
                        <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-4">
                          <span className="flex items-center">
                            <MapPinIcon className="w-4 h-4 mr-1" />
                            {member.location}
                          </span>
                          <span>{member.experience}</span>
                        </div>
                      </div>

                      <p className="mb-6 leading-relaxed" style={ContrastEnhancer.forceDescriptionContrast}>
                        {member.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3" style={ContrastEnhancer.forceHighContrast}>
                          Specialties
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <span key={idx} className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-2 rounded-full text-sm font-medium">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-center text-sm mb-1" style={ContrastEnhancer.forceDescriptionContrast}>
                          <AcademicCapIcon className="w-5 h-5 mr-2 text-purple-600" />
                          {member.education}
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <motion.a 
                          href={`mailto:${member.email}`} 
                          className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <EnvelopeIcon className="w-5 h-5" />
                        </motion.a>
                        <motion.a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <LinkIcon className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Core Team */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-6"
                >
                  <RocketLaunchIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-700 font-medium">Core Excellence</span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={ContrastEnhancer.forceHighContrast}>
                  Core Team
                </h2>
                <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={ContrastEnhancer.centeredDarkDescriptionContrast}>
                  Our talented specialists who execute strategies and deliver exceptional results for our clients 
                  every single day.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 text-center h-full group-hover:scale-[1.02]">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        transition={{ duration: 0.3 }}
                        className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl`}
                      >
                        <span className="text-white text-xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2" style={ContrastEnhancer.forceHighContrast}>
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                      <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center">
                          <MapPinIcon className="w-4 h-4 mr-1" />
                          {member.location}
                        </span>
                        <span>{member.experience}</span>
                      </div>
                      <p className="mb-4 leading-relaxed" style={ContrastEnhancer.forceDescriptionContrast}>
                        {member.description}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-gradient-to-r from-gray-100 to-blue-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Company Values */}
          <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 mb-6"
                >
                  <HeartIcon className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-700 font-medium">Our Core Values</span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={ContrastEnhancer.forceHighContrast}>
                  Our Values
                </h2>
                <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={ContrastEnhancer.centeredDarkDescriptionContrast}>
                  The principles that unite our team and drive our commitment to delivering exceptional client success 
                  and innovative marketing solutions.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 h-full group-hover:scale-[1.02]">
                      <div className="flex items-start space-x-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl"
                        >
                          <value.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-4" style={ContrastEnhancer.forceHighContrast}>
                            {value.title}
                          </h3>
                          <p className="leading-relaxed text-lg" style={ContrastEnhancer.forceDescriptionContrast}>
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Join Our Team CTA */}
          <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
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
                  <SparklesIcon className="w-5 h-5 text-blue-400" />
                  <span style={ContrastEnhancer.forceLightContrast} className="font-medium">
                    Join Our Growing Team
                  </span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={ContrastEnhancer.forceHighContrast}>
                  Want to Join Our Team?
                </h2>
                <p className="text-xl mb-8 leading-relaxed" style={ContrastEnhancer.forceDescriptionContrast}>
                  We're always looking for talented individuals who share our passion for 
                  performance-driven marketing and client success. Join us in shaping the future of e-commerce growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/careers">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="secondary" size="lg" className="bg-gradient-to-r from-white to-gray-100 text-purple-600 hover:from-gray-100 hover:to-white shadow-lg hover:shadow-xl">
                        View Open Positions
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/contact">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl">
                        Get in Touch
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