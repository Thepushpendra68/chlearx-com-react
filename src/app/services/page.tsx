'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
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
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { SEOHead } from '@/components/atoms/SEOHead';
import {
  MagnifyingGlassIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  ChartBarIcon,
  UserGroupIcon,
  BoltIcon,
  HeartIcon,
  ShieldCheckIcon,
  TrophyIcon,
  FireIcon,
  GlobeAltIcon,

  AcademicCapIcon,
  LightBulbIcon,
  ChartPieIcon
} from '@heroicons/react/24/outline';

// Floating animation component
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

const services = [
  {
    title: 'Discovery & Strategy',
    description: 'Comprehensive e-commerce market analysis, competitive intelligence, and strategic roadmap development to position your online store for success.',
    shortDescription: 'Strategic foundation for e-commerce success',
    icon: MagnifyingGlassIcon,
    href: '/services/discovery-strategy',
    features: ['E-commerce Platform Audits', 'Customer Journey Mapping', 'Product Positioning Strategy', 'Growth Roadmap Development'],
    isPopular: false,
    gradient: 'from-blue-500 via-purple-500 to-indigo-600',
    bgGradient: 'from-blue-50 via-purple-50 to-indigo-100',
    iconColor: 'text-blue-600',
    badgeColor: 'bg-blue-100 text-blue-800'
  },
  {
    title: 'Creative Excellence',
    description: 'Professional e-commerce brand development, product photography, and creative campaigns designed to captivate customers and drive conversions.',
    shortDescription: 'Stunning visuals that convert browsers into buyers',
    icon: SparklesIcon,
    href: '/services/creative-excellence',
    features: ['Product Photography', 'Brand Development', 'Social Commerce Creative', 'Video Production'],
    isPopular: true,
    gradient: 'from-pink-500 via-rose-500 to-purple-600',
    bgGradient: 'from-pink-50 via-rose-50 to-purple-100',
    iconColor: 'text-pink-600',
    badgeColor: 'bg-pink-100 text-pink-800'
  },
  {
    title: 'Growth Acceleration',
    description: 'Performance marketing, conversion optimization, and retention strategies that scale your e-commerce business and maximize customer lifetime value.',
    shortDescription: 'Scale your e-commerce business exponentially',
    icon: RocketLaunchIcon,
    href: '/services/growth-acceleration',
    features: ['Performance Marketing', 'Conversion Rate Optimization', 'Email Marketing Automation', 'Amazon Marketplace Optimization'],
    isPopular: true,
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    bgGradient: 'from-emerald-50 via-teal-50 to-cyan-100',
    iconColor: 'text-emerald-600',
    badgeColor: 'bg-emerald-100 text-emerald-800'
  }
];

const stats = [
  { 
    label: 'Average Revenue Increase', 
    value: '340%', 
    icon: ChartBarIcon,
    gradient: 'from-violet-500 to-purple-600',
    bgGradient: 'from-violet-100 to-purple-200'
  },
  { 
    label: 'E-commerce Clients Served', 
    value: '250+', 
    icon: UserGroupIcon,
    gradient: 'from-blue-500 to-cyan-600',
    bgGradient: 'from-blue-100 to-cyan-200'
  },
  { 
    label: 'Successful Campaigns', 
    value: '800+', 
    icon: TrophyIcon,
    gradient: 'from-amber-500 to-orange-600',
    bgGradient: 'from-amber-100 to-orange-200'
  },
  { 
    label: 'Client Satisfaction', 
    value: '98%', 
    icon: HeartIcon,
    gradient: 'from-rose-500 to-pink-600',
    bgGradient: 'from-rose-100 to-pink-200'
  }
];

const whyChooseUsData = [
  {
    icon: ChartBarIcon,
    title: 'Data-Driven Approach',
    description: 'Every decision backed by comprehensive analytics and performance metrics.',
    gradient: 'from-indigo-500 to-purple-600',
    bgGradient: 'from-indigo-100 to-purple-200'
  },
  {
    icon: UserGroupIcon,
    title: 'E-commerce Expertise',
    description: 'Deep understanding of online retail platforms, customer behavior, and conversion optimization.',
    gradient: 'from-emerald-500 to-teal-600',
    bgGradient: 'from-emerald-100 to-teal-200'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Scalable Solutions',
    description: 'Strategies that grow with your business, from startup to enterprise level.',
    gradient: 'from-orange-500 to-red-600',
    bgGradient: 'from-orange-100 to-red-200'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Proven Results',
    description: 'Track record of delivering measurable ROI and sustainable growth.',
    gradient: 'from-cyan-500 to-blue-600',
    bgGradient: 'from-cyan-100 to-blue-200'
  },
  {
    icon: BoltIcon,
    title: 'Rapid Implementation',
    description: 'Quick setup and fast time-to-market with our streamlined processes.',
    gradient: 'from-yellow-500 to-amber-600',
    bgGradient: 'from-yellow-100 to-amber-200'
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Reach',
    description: 'Experience scaling businesses across multiple markets and geographies.',
    gradient: 'from-violet-500 to-fuchsia-600',
    bgGradient: 'from-violet-100 to-fuchsia-200'
  }
];

export default function ServicesPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <SEOHead
        title="E-commerce Marketing Services | CHLEARX"
        description="Performance-driven e-commerce marketing services including discovery & strategy, creative excellence, and growth acceleration to scale your online business."
        keywords={['e-commerce marketing', 'online store optimization', 'e-commerce strategy', 'performance marketing', 'conversion optimization']}
        type="website"
      />
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5" />
          <FloatingElements />
          
          {/* Interactive Cursor Follow Effect */}
          <div 
            className="fixed w-96 h-96 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out z-0"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
            }}
          />

          {/* Hero Section */}
          <section className="pt-32 pb-20 relative z-10">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-5xl mx-auto"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg"
                >
                  <SparklesIcon className="w-5 h-5 mr-2" />
                  Trusted by 250+ E-commerce Brands
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                >
                  <span className="text-gray-900">E-commerce Marketing</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-shift">
                    That Scales Your Business
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-4xl mx-auto"
                >
                  From strategic foundation to creative excellence and growth acceleration, we offer comprehensive 
                  e-commerce marketing services designed to transform your online store into a 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-semibold"> revenue-generating powerhouse.</span>
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <RocketLaunchIcon className="w-5 h-5 mr-2" />
                      Get Free E-commerce Audit
                    </Button>
                  </Link>
                  <Link href="/case-studies">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-4 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg">
                      <TrophyIcon className="w-5 h-5 mr-2" />
                      View Success Stories
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Stats Section - Enhanced with Glassmorphism */}
          <section className="py-20 relative z-10">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center group"
                  >
                    <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:bg-white/30">
                      <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {stat.value}
                      </div>
                      <div className="text-sm md:text-base font-medium text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Grid - Ultra Modern Design */}
          <section className="py-20 relative z-10">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg"
                >
                  <FireIcon className="w-5 h-5 mr-2" />
                  Our Premium Services
                </motion.div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Comprehensive E-commerce
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                    Marketing Solutions
                  </span>
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-xl text-gray-600 max-w-3xl leading-relaxed" style={forceCenter}>
                    Three powerful service pillars designed specifically for online retailers looking to 
                    <span className="text-emerald-600 font-semibold"> dominate their market</span> and achieve sustainable growth.
                  </p>
                </div>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 40, rotateY: -10 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, rotateY: 5 }}
                    className="group perspective-1000"
                  >
                    <div className={`relative bg-gradient-to-br ${service.bgGradient} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform-gpu`}>
                      {/* Animated Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      {/* Popular Badge */}
                      {service.isPopular && (
                        <motion.div 
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.5 + index * 0.2 }}
                          className="absolute -top-3 -right-3 z-10"
                        >
                          <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                            ⭐ Popular
                          </div>
                        </motion.div>
                      )}
                      
                      <div className="relative p-8 md:p-10">
                        {/* Icon */}
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        >
                          <service.icon className="w-10 h-10 text-white" />
                        </motion.div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                          {service.shortDescription}
                        </p>
                        
                        {/* Features List */}
                        <ul className="space-y-4 mb-10">
                          {service.features.map((feature, idx) => (
                            <motion.li 
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 + idx * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                            >
                              <div className={`w-6 h-6 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md`}>
                                <CheckCircleIcon className="w-4 h-4 text-white" />
                              </div>
                              <span className="font-medium">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                        
                                                 {/* CTA Button */}
                         <Link href={service.href}>
                           <Button 
                             variant="outline" 
                             className="w-full border-2 border-gray-400 bg-white text-gray-900 font-bold hover:border-transparent hover:bg-gradient-to-r hover:text-white transition-all duration-500 rounded-xl py-4 text-lg shadow-md hover:shadow-lg"
                           >
                             <span className="flex items-center justify-center text-gray-900 group-hover:text-white">
                               Learn More
                               <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                             </span>
                           </Button>
                         </Link>
                       </div>
                     </div>
                   </motion.div>
                 ))}
               </div>
             </div>
           </section>

          {/* Why Choose Us Section - Redesigned */}
          <section className="py-20 relative z-10">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg"
                >
                  <TrophyIcon className="w-5 h-5 mr-2" />
                  Why Choose CHLEARX
                </motion.div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Why E-commerce Brands
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600">
                    Choose CHLEARX
                  </span>
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-xl text-gray-600 max-w-3xl leading-relaxed" style={forceCenter}>
                    We specialize exclusively in e-commerce marketing, understanding the unique challenges 
                    and opportunities of online retail. Here's what sets us apart.
                  </p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {whyChooseUsData.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group"
                  >
                    <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:bg-white/80 h-full">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section - Spectacular Design */}
          <section className="py-20 relative z-10">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl overflow-hidden shadow-2xl relative">
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
                  <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-8 py-16 md:py-20">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg"
                    >
                      <FireIcon className="w-5 h-5 mr-2" />
                      Ready to Transform Your Business?
                    </motion.div>

                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight"
                    >
                      Ready to Scale Your
                      <span className="block text-yellow-300">E-commerce Business?</span>
                    </motion.h2>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto"
                    >
                      Join successful e-commerce brands that have transformed their revenue with our specialized 
                      marketing strategies and proven methodologies. 
                      <span className="text-yellow-300 font-semibold"> Start your growth journey today!</span>
                    </motion.p>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                      <Link href="/contact">
                        <Button 
                          size="lg" 
                          className="w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                          <RocketLaunchIcon className="w-6 h-6 mr-2" />
                          Get Free Consultation
                        </Button>
                      </Link>
                      <Link href="/audit">
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="w-full sm:w-auto border-4 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl"
                        >
                          <ChartPieIcon className="w-6 h-6 mr-2" />
                          Free E-commerce Audit
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}