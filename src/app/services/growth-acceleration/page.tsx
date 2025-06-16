'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

/**
 * ===============================================
 * TEXT CONTRAST SOLUTION - COMPREHENSIVE GUIDE
 * ===============================================
 * 
 * PROBLEM: Dark text on dark backgrounds and light text with opacity issues
 * causing poor readability across the website.
 * 
 * SOLUTION: Force contrast styles with !important overrides and text shadows
 * 
 * STYLE OBJECTS TO USE:
 * 
 * 1. forceCenter - For center alignment issues
 * 2. forceHighContrast - For white text on dark backgrounds (headings, important text)
 * 3. forceDescriptionContrast - For gray/light text on dark backgrounds (descriptions)
 * 4. forceLightContrast - For very light text on extremely dark backgrounds
 * 
 * HOW TO IDENTIFY CONTRAST ISSUES:
 * 
 * 🔍 SEARCH PATTERNS:
 * - Search for: text-gray-[300-600] on dark backgrounds
 * - Search for: text-white/[low-opacity] (like text-white/70, text-white/80)
 * - Search for: bg-white/[low-opacity] with dark text
 * - Search for: backdrop-blur-sm with light text colors
 * 
 * 🎯 BACKGROUND CONTEXTS TO CHECK:
 * - bg-gray-900, bg-black, bg-gradient dark colors
 * - bg-white/10, bg-white/20 (very transparent backgrounds)
 * - backdrop-blur-sm sections
 * - Overlays with bg-black/20 or similar
 * 
 * 📋 SYSTEMATIC AUDIT CHECKLIST:
 * 1. Find all text-gray-[number] classes
 * 2. Check their parent containers for dark backgrounds
 * 3. Find all text-white/[opacity] classes
 * 4. Check all backdrop-blur sections
 * 5. Test hover states with color changes
 * 
 * 🚀 QUICK FIX FORMULA:
 * - Dark background + gray text = forceDescriptionContrast
 * - Dark background + white text with opacity = forceHighContrast
 * - Very dark background + any light text = forceLightContrast
 * - Always add text-shadow for better readability
 */

// Custom styles to force center alignment
const forceCenter = {
  textAlign: 'center' as const,
  display: 'block' as const,
  width: '100%',
  margin: '0 auto',
  textAlignLast: 'center' as const
};

// Custom styles to force high contrast on dark backgrounds
const forceHighContrast = {
  color: '#ffffff !important' as const,
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' as const
};

// Custom styles for description text on dark backgrounds
const forceDescriptionContrast = {
  color: '#f3f4f6 !important' as const,
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' as const
};

// Custom styles for light text on very dark backgrounds
const forceLightContrast = {
  color: '#f3f4f6 !important' as const,
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.7)' as const
};

import { Layout } from '@/components/templates/Layout';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { SEOHead } from '@/components/atoms/SEOHead';
import {
  RocketLaunchIcon,
  ChartBarIcon,
  AdjustmentsHorizontalIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
  StarIcon,
  BoltIcon,
  TrophyIcon,
  FireIcon,

  BeakerIcon,
  CogIcon,
  ClockIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  PresentationChartLineIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

export default function GrowthAccelerationPage() {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [revenueGrowth, setRevenueGrowth] = useState(0);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [activePillar, setActivePillar] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenueGrowth(prev => {
        const target = 340;
        const increment = target / 100;
        return prev < target ? prev + increment : target;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const growthMetrics = [
    { label: 'Revenue Acceleration', value: '340%', icon: ArrowTrendingUpIcon, trend: '+127%', color: 'from-green-500 to-emerald-500' },
    { label: 'Conversion Optimization', value: '280%', icon: AdjustmentsHorizontalIcon, trend: '+89%', color: 'from-blue-500 to-cyan-500' },
    { label: 'Customer Lifetime Value', value: '450%', icon: TrophyIcon, trend: '+156%', color: 'from-purple-500 to-indigo-500' },
    { label: 'Market Expansion', value: '380%', icon: GlobeAltIcon, trend: '+98%', color: 'from-orange-500 to-red-500' }
  ];

  const accelerationPillars = [
    {
      title: 'Performance Marketing',
      description: 'Advanced advertising strategies that maximize ROI and scale your customer acquisition',
      icon: RocketLaunchIcon,
      features: ['Multi-Channel Campaigns', 'AI-Driven Targeting', 'Dynamic Budget Allocation', 'Real-Time Optimization'],
      results: '+340% ROAS improvement',
      color: 'from-blue-600 to-purple-600',
      metrics: { roas: '8.4x', cpa: '-67%', volume: '+420%' }
    },
    {
      title: 'Conversion Optimization',
      description: 'Scientific testing and optimization to turn more visitors into paying customers',
      icon: AdjustmentsHorizontalIcon,
      features: ['A/B Testing Framework', 'Funnel Analysis', 'UX Optimization', 'Psychological Triggers'],
      results: '+180% conversion rates',
      color: 'from-purple-600 to-pink-600',
      metrics: { conversion: '+180%', revenue: '+67%', retention: '+89%' }
    },
    {
      title: 'Retention & LTV Growth',
      description: 'Customer lifecycle strategies that increase repeat purchases and lifetime value',
      icon: ChartBarIcon,
      features: ['Email Marketing Automation', 'Loyalty Programs', 'Personalization Engine', 'Retention Analytics'],
      results: '+450% customer LTV',
      color: 'from-pink-600 to-red-600',
      metrics: { ltv: '+450%', retention: '+89%', frequency: '+67%' }
    }
  ];

  const growthProcess = [
    {
      phase: '01',
      title: 'Growth Audit & Strategy',
      description: 'Comprehensive analysis of your current performance and identification of growth opportunities',
      duration: '1 week',
      deliverables: ['Performance Audit', 'Growth Strategy', 'Competitive Analysis', 'Opportunity Map'],
      icon: MagnifyingGlassIcon
    },
    {
      phase: '02',
      title: 'Implementation & Testing',
      description: 'Rapid deployment of growth initiatives with continuous testing and optimization',
      duration: '2-4 weeks',
      deliverables: ['Campaign Launch', 'A/B Tests', 'Performance Tracking', 'Weekly Reports'],
      icon: BeakerIcon
    },
    {
      phase: '03',
      title: 'Scale & Optimize',
      description: 'Scaling successful strategies while continuously optimizing for maximum performance',
      duration: 'Ongoing',
      deliverables: ['Scaling Plans', 'Optimization Reports', 'Performance Reviews', 'Strategic Updates'],
      icon: RocketLaunchIcon
    }
  ];

  const successStories = [
    {
      company: 'EcoTech Solutions',
      industry: 'Sustainable Technology',
      challenge: 'Low conversion rates and high customer acquisition costs',
      solution: 'Complete growth acceleration strategy with performance optimization',
      results: { revenue: '+450%', roas: '12.3x', customers: '+380%' },
      timeframe: '8 months'
    },
    {
      company: 'FashionForward',
      industry: 'Fashion E-commerce',
      challenge: 'Plateauing growth and declining customer retention',
      solution: 'Multi-channel growth strategy with retention optimization',
      results: { revenue: '+280%', ltv: '+340%', retention: '+89%' },
      timeframe: '6 months'
    }
  ];

  return (
    <>
      <SEOHead
        title="E-commerce Growth Acceleration Services | CHLEARX"
        description="Accelerate your e-commerce growth with performance marketing, conversion optimization, and retention strategies that deliver explosive results and sustainable scaling."
        keywords={['growth acceleration', 'performance marketing', 'conversion optimization', 'e-commerce scaling', 'retention strategies']}
        type="website"
      />
      <Layout>
        <div ref={containerRef} className="min-h-screen bg-light theme-light overflow-hidden">
          {/* Dynamic Growth Particles */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-8 bg-gradient-to-t from-green-400 to-blue-400 rounded-full opacity-20"
                animate={{
                  y: [850, -50],
                  x: [0, Math.random() * 100 - 50],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Hero Section - Growth Engine */}
          <section className="relative pt-24 pb-16 min-h-screen flex items-center">
            <motion.div 
              className="absolute inset-0 opacity-30"
              style={{ y: backgroundY }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-blue-600/20 to-purple-600/20" />
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center max-w-6xl mx-auto"
                style={{ y: textY }}
              >
                {/* Rocket Launch Animation */}
                <motion.div 
                  className="relative mb-8 mx-auto w-fit"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-32 h-32 rounded-3xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 rounded-3xl"
                      animate={{
                        background: [
                          'linear-gradient(45deg, #10B981, #3B82F6)',
                          'linear-gradient(45deg, #3B82F6, #8B5CF6)',
                          'linear-gradient(45deg, #8B5CF6, #EC4899)',
                          'linear-gradient(45deg, #EC4899, #10B981)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="relative z-10"
                    >
                      <RocketLaunchIcon className="w-16 h-16 text-white" />
                    </motion.div>

                    {/* Rocket Trail Effect */}
                    <motion.div
                      className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-orange-400 to-transparent opacity-60"
                      animate={{ 
                        height: [16, 24, 16],
                        opacity: [0.6, 0.9, 0.6]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                  
                  {/* Growth Metrics Floating */}
                  <motion.div
                    className="absolute -top-4 -right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold"
                    animate={{ 
                      y: [-15, 15, -15],
                      rotate: [-10, 10, -10]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    +340% Growth
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 -left-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold"
                    animate={{ 
                      y: [15, -15, 15],
                      rotate: [10, -10, 10]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    12.3x ROAS
                  </motion.div>
                </motion.div>

                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-on-light mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Growth Velocity
                  <motion.span 
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    Maximized
                  </motion.span>
                </motion.h1>

                {/* Live Growth Counter */}
                <motion.div 
                  className="mb-8 p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 max-w-lg mx-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                >
                  <div className="text-sm text-gray-600 mb-2">Real-time Revenue Growth</div>
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                    {Math.floor(revenueGrowth)}%
                  </div>
                  <motion.div 
                    className="text-sm text-green-600 font-medium flex items-center justify-center"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <BoltIcon className="w-4 h-4 mr-1" />
                    Acceleration in progress
                  </motion.div>
                </motion.div>
                
                <div className="w-full flex justify-center" style={forceCenter}>
                  <motion.p 
                    className="text-xl md:text-2xl text-secondary-on-light mb-8 leading-relaxed max-w-4xl"
                    style={forceCenter}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    Accelerate your e-commerce growth with performance-driven strategies that scale. 
                    Our proven methodology combines advanced marketing, optimization, and retention 
                    strategies to unlock exponential growth and sustainable success.
                  </motion.p>
                </div>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6 justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <Link href="/contact">
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg group"
                    >
                      <span className="relative">
                        Accelerate My Growth
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-lg"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                      <RocketLaunchIcon className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/audit">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto border-2 border-gray-300 hover:border-green-600 hover:text-green-600 font-semibold px-8 py-4 text-lg group"
                    >
                      Free Growth Audit
                      <ChartBarIcon className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Floating Performance Indicators */}
            <motion.div
              className="absolute top-1/4 left-10 hidden lg:block"
              animate={{ 
                y: [0, -25, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20">
                <div className="text-xs font-medium text-gray-600 mb-2">Customer LTV</div>
                <div className="text-3xl font-bold text-green-600">+450%</div>
                <div className="text-xs text-green-600 font-medium">lifetime value increase</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/3 right-10 hidden lg:block"
              animate={{ 
                y: [0, 20, 0],
                scale: [1, 1.08, 1]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20">
                <div className="text-xs font-medium text-gray-600 mb-2">ROAS Achievement</div>
                <div className="text-3xl font-bold text-blue-600">12.3x</div>
                <div className="text-xs text-blue-600 font-medium">return on ad spend</div>
              </div>
            </motion.div>
          </section>

          {/* Growth Metrics Dashboard */}
          <section className="py-16 bg-white/60 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-on-light mb-4">
                  Growth Acceleration Results
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-lg text-secondary-on-light max-w-2xl leading-relaxed" style={forceCenter}>
                    Performance metrics that demonstrate the power of our growth acceleration methodology
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {growthMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -15,
                      rotateY: 10
                    }}
                    className="group cursor-pointer"
                    onHoverStart={() => setCurrentMetric(index)}
                  >
                    <Card className="p-6 text-center hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-white/20 relative overflow-hidden">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}
                      />
                      
                      <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {React.createElement(metric.icon, { className: "w-8 h-8 text-white" })}
                      </div>
                      
                      <motion.div 
                        className="text-4xl font-bold text-gray-900 mb-2"
                        animate={{ 
                          scale: currentMetric === index ? [1, 1.15, 1] : [1],
                          color: currentMetric === index ? ['#111827', '#10B981', '#111827'] : ['#111827']
                        }}
                        transition={{ duration: 1.5 }}
                      >
                        {metric.value}
                      </motion.div>
                      
                      <div className="text-sm text-gray-600 mb-3">{metric.label}</div>
                      
                      <div className="text-xs text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full">
                        {metric.trend} avg improvement
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Growth Acceleration Pillars */}
          <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-blue-900/30" />
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Three Pillars of Growth Acceleration
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-lg text-white max-w-2xl leading-relaxed" style={{...forceCenter, ...forceHighContrast}}>
                    Our comprehensive approach covers every aspect of sustainable e-commerce growth
                  </p>
                </div>
              </motion.div>

              {/* Pillar Navigation */}
              <div className="flex justify-center mb-12">
                <div className="flex space-x-2 bg-white/10 backdrop-blur-sm rounded-2xl p-2">
                  {accelerationPillars.map((pillar, index) => (
                    <motion.button
                      key={pillar.title}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        activePillar === index
                          ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                          : 'text-gray-200 hover:text-white hover:bg-white/10'
                      }`}
                      style={activePillar !== index ? forceLightContrast : undefined}
                      onClick={() => setActivePillar(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {pillar.title}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Active Pillar Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-6xl mx-auto"
                >
                  <Card className="p-8 bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-br ${accelerationPillars[activePillar].color} rounded-xl flex items-center justify-center mr-4`}>
                            {React.createElement(accelerationPillars[activePillar].icon, { className: "w-8 h-8 text-white" })}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{accelerationPillars[activePillar].title}</h3>
                            <p className="text-white" style={{
                              color: '#ffffff !important',
                              textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                              fontWeight: '400',
                              opacity: '0.95'
                            }}>{accelerationPillars[activePillar].description}</p>
                          </div>
                        </div>

                        <div className="space-y-3 mb-6">
                          {accelerationPillars[activePillar].features.map((feature, index) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center text-white"
                              style={{
                                color: '#ffffff !important',
                                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                                opacity: '0.9'
                              }}
                            >
                              <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                              {feature}
                            </motion.div>
                          ))}
                        </div>

                        <div className="text-lg font-bold text-green-400">
                          {accelerationPillars[activePillar].results}
                        </div>
                      </div>

                      <div>
                        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6">
                          <h4 className="text-lg font-bold text-white mb-4">Performance Metrics</h4>
                          <div className="grid grid-cols-3 gap-4">
                            {Object.entries(accelerationPillars[activePillar].metrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-2xl font-bold text-green-400">{value}</div>
                                <div className="text-xs text-gray-200 uppercase" style={forceLightContrast}>{key}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* Success Stories */}
          <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-on-light mb-4">
                  Growth Success Stories
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-lg text-secondary-on-light max-w-2xl leading-relaxed" style={forceCenter}>
                    Real businesses achieving extraordinary growth through our acceleration strategies
                  </p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {successStories.map((story, index) => (
                  <motion.div
                    key={story.company}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <Card className="p-8 bg-white/90 backdrop-blur-sm border border-white/20 hover:shadow-2xl transition-all duration-500 h-full">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                          <TrophyIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{story.company}</h3>
                          <p className="text-gray-600 text-sm">{story.industry}</p>
                        </div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div>
                          <div className="text-sm font-medium text-red-600 mb-1">Challenge</div>
                          <p className="text-gray-700 text-sm">{story.challenge}</p>
                        </div>

                        <div>
                          <div className="text-sm font-medium text-blue-600 mb-1">Solution</div>
                          <p className="text-gray-700 text-sm">{story.solution}</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-4 text-white">
                        <div className="text-sm font-medium mb-2">Results in {story.timeframe}</div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          {Object.entries(story.results).map(([key, value]) => (
                            <div key={key}>
                              <div className="text-lg font-bold">{value}</div>
                              <div className="text-xs opacity-90 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center text-white max-w-4xl mx-auto"
              >
                <motion.div
                  className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(255, 255, 255, 0.7)',
                      '0 0 0 10px rgba(255, 255, 255, 0)',
                      '0 0 0 0 rgba(255, 255, 255, 0)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FireIcon className="w-5 h-5 mr-2 text-orange-300" />
                  <span className="font-medium">Limited growth acceleration spots - 3 clients this quarter</span>
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Accelerate Your Growth?
                </h2>
                
                <p className="text-xl text-white mb-8 leading-relaxed" style={forceHighContrast}>
                  Don't let slow growth hold back your potential. Join the brands achieving 
                  explosive growth with our proven acceleration strategies.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/contact">
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="w-full sm:w-auto bg-white text-green-600 hover:bg-gray-50 font-semibold px-8 py-4 text-lg group"
                    >
                      <span className="relative">
                        Start Growth Acceleration
                        <motion.div
                          className="absolute inset-0 bg-green-600/10 rounded-lg"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                      <RocketLaunchIcon className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                    </Button>
                  </Link>
                  
                  <Link href="/case-studies">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4 text-lg group"
                    >
                      View Growth Results
                      <TrophyIcon className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <motion.div
                  className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">340%</div>
                    <div className="text-sm text-white" style={forceHighContrast}>Avg. Growth Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">12.3x</div>
                    <div className="text-sm text-white" style={forceHighContrast}>Average ROAS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">$75M+</div>
                    <div className="text-sm text-white" style={forceHighContrast}>Revenue Accelerated</div>
                  </div>
                </motion.div>

                <motion.div
                  className="mt-8 text-sm text-white"
                  style={forceDescriptionContrast}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <div className="flex items-center justify-center space-x-6">
                    <div className="flex items-center">
                      <ShieldCheckIcon className="w-4 h-4 mr-2" />
                      Growth Guarantee
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      Results in 30 Days
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
} 