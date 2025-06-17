'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

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
  color: '#e5e7eb !important' as const,
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' as const
};

import { Layout } from '@/components/templates/Layout';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { SEOHead } from '@/components/atoms/SEOHead';
import {
  SparklesIcon,
  CameraIcon,
  PaintBrushIcon,
  VideoCameraIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
  StarIcon,
  EyeIcon,
  HeartIcon,
  FireIcon,
  SwatchIcon,
  PhotoIcon,
  PlayIcon,
  AdjustmentsHorizontalIcon,
  TrophyIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function CreativeExcellencePage() {
  const [activePortfolioItem, setActivePortfolioItem] = useState(0);

  // Force white text styles with highest specificity
  React.useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      /* Force white text with maximum specificity */
      [data-creative-title="true"] {
        color: #FFFFFF !important;
        -webkit-text-fill-color: #FFFFFF !important;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9) !important;
        font-size: clamp(2.5rem, 8vw, 4rem) !important;
        font-weight: 900 !important;
        margin-bottom: 1.5rem !important;
        line-height: 1.1 !important;
      }
      
      [data-key-features="true"] {
        color: #FFFFFF !important;
        -webkit-text-fill-color: #FFFFFF !important;
        text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9) !important;
        font-size: 0.875rem !important;
        font-weight: 700 !important;
        margin-bottom: 0.75rem !important;
        text-transform: uppercase !important;
        letter-spacing: 0.05em !important;
      }
    `;
    document.head.appendChild(styleElement);
    
    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);
  const [colorPalette, setColorPalette] = useState(['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B']);
  const [isCreativeMode, setIsCreativeMode] = useState(false);
  const [conversionRate, setConversionRate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setConversionRate(prev => {
        const target = 18.6;
        const increment = target / 150;
        return prev < target ? prev + increment : target;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Color palette animation
  useEffect(() => {
    const interval = setInterval(() => {
      const colors = [
        ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B'],
        ['#10B981', '#06B6D4', '#8B5CF6', '#F59E0B'],
        ['#EF4444', '#F97316', '#84CC16', '#06B6D4'],
        ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981']
      ];
      setColorPalette(colors[Math.floor(Math.random() * colors.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const creativeImpactMetrics = [
    { label: 'Conversion Rate Boost', value: '180%', icon: ArrowTrendingUpIcon, trend: '+47%', color: 'from-green-500 to-emerald-500' },
    { label: 'Brand Recognition', value: '240%', icon: EyeIcon, trend: '+62%', color: 'from-blue-500 to-cyan-500' },
    { label: 'Social Engagement', value: '320%', icon: HeartIcon, trend: '+89%', color: 'from-pink-500 to-rose-500' },
    { label: 'Customer Trust Score', value: '94%', icon: ShieldCheckIcon, trend: '+23%', color: 'from-purple-500 to-indigo-500' }
  ];

  const creativeServices = [
    {
      title: 'Visual Brand Identity',
      description: 'Complete brand transformation that captivates your audience and builds instant trust',
      icon: PaintBrushIcon,
      features: ['Logo Design & Variations', 'Color Psychology Application', 'Typography Systems', 'Brand Guidelines'],
      showcase: 'Brand makeover portfolio',
      color: 'from-blue-600 to-purple-600',
      results: '+240% brand recognition'
    },
    {
      title: 'Product Photography',
      description: 'Professional product shoots that turn browsers into buyers with stunning visual storytelling',
      icon: CameraIcon,
      features: ['Studio Photography', 'Lifestyle Contexts', '360° Product Views', 'Detail & Macro Shots'],
      showcase: 'Photo gallery preview',
      color: 'from-purple-600 to-pink-600',
      results: '+180% conversion rates'
    },
    {
      title: 'Video Production',
      description: 'Engaging video content that demonstrates value and builds emotional connections with customers',
      icon: VideoCameraIcon,
      features: ['Product Demos', 'Brand Story Videos', 'Social Media Content', 'Promotional Campaigns'],
      showcase: 'Video portfolio reel',
      color: 'from-pink-600 to-red-600',
      results: '+320% engagement rates'
    }
  ];

  const portfolioShowcase = [
    {
      client: 'LuxFashion',
      project: 'Complete Brand Overhaul',
      before: 'Generic fashion brand with low conversion',
      after: 'Premium luxury brand with 340% sales increase',
      image: '/placeholder-before-after.jpg',
      metrics: { conversion: '+340%', revenue: '+$2.4M', engagement: '+280%' }
    },
    {
      client: 'TechGadgets Pro',
      project: 'Product Photography Suite',
      before: 'Basic product images with poor lighting',
      after: 'Professional studio shots with lifestyle context',
      image: '/placeholder-product-photos.jpg',
      metrics: { conversion: '+180%', revenue: '+$850K', engagement: '+150%' }
    },
    {
      client: 'HomeStyle Living',
      project: 'Video Marketing Campaign',
      before: 'Static product listings only',
      after: 'Dynamic video content across all platforms',
      image: '/placeholder-video-campaign.jpg',
      metrics: { conversion: '+420%', revenue: '+$1.8M', engagement: '+380%' }
    }
  ];

  const creativeProcess = [
    {
      phase: '01',
      title: 'Creative Brief & Discovery',
      description: 'Deep dive into your brand personality, target audience, and competitive landscape',
      duration: '2-3 days',
      deliverables: ['Brand Audit', 'Competitor Analysis', 'Creative Strategy', 'Style Direction'],
      icon: SwatchIcon
    },
    {
      phase: '02',
      title: 'Concept Development',
      description: 'Multiple creative concepts with mood boards, color palettes, and style explorations',
      duration: '3-5 days',
      deliverables: ['Concept Presentations', 'Mood Boards', 'Color Palettes', 'Style Guides'],
      icon: PhotoIcon
    },
    {
      phase: '03',
      title: 'Production & Refinement',
      description: 'Professional execution with multiple revision rounds to achieve perfection',
      duration: '5-10 days',
      deliverables: ['Final Assets', 'Brand Guidelines', 'Usage Instructions', 'Asset Library'],
      icon: AdjustmentsHorizontalIcon
    }
  ];

  return (
    <>
      <SEOHead
        title="E-commerce Creative Excellence Services | CHLEARX"
        description="Transform your brand with world-class creative services. Professional product photography, brand design, and video production that drives conversions and builds trust."
        keywords={['creative services', 'brand design', 'product photography', 'video production', 'e-commerce creative']}
        type="website"
      />
      <Layout>
        <div ref={containerRef} className="min-h-screen bg-light theme-light overflow-hidden">
          {/* Dynamic Creative Particles */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 8 + 4,
                  height: Math.random() * 8 + 4,
                  background: colorPalette[i % colorPalette.length],
                  opacity: 0.1 + Math.random() * 0.2,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 200 - 100],
                  y: [0, Math.random() * 200 - 100],
                  scale: [1, 1.5, 1],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: Math.random() * 15 + 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
          </div>

          {/* Hero Section - Creative Powerhouse */}
          <section className="relative pt-24 pb-16 min-h-screen flex items-center">
            <motion.div 
              className="absolute inset-0 opacity-30"
              style={{ y: backgroundY }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20" />
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center max-w-6xl mx-auto"
                style={{ y: textY }}
              >
                {/* Morphing Creative Elements */}
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
                          'linear-gradient(45deg, #8B5CF6, #EC4899)',
                          'linear-gradient(45deg, #EC4899, #F59E0B)',
                          'linear-gradient(45deg, #F59E0B, #10B981)',
                          'linear-gradient(45deg, #10B981, #8B5CF6)'
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="relative z-10"
                    >
                      <SparklesIcon className="w-16 h-16 text-white" />
                    </motion.div>
                  </div>
                  
                  {/* Floating Creative Metrics */}
                  <motion.div
                    className="absolute -top-4 -right-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold"
                    animate={{ 
                      y: [-10, 10, -10],
                      rotate: [-5, 5, -5]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    +180% Conversion
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 -left-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold"
                    animate={{ 
                      y: [10, -10, 10],
                      rotate: [5, -5, 5]
                    }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                  >
                    240% Recognition
                  </motion.div>
                </motion.div>

                {/* Animated Title with Creative Typography */}
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-on-light mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Creative Excellence
                  <motion.span 
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    That Converts
                  </motion.span>
                </motion.h1>

                {/* Live Conversion Rate Counter */}
                <motion.div 
                  className="mb-8 p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 max-w-lg mx-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                >
                  <div className="text-sm text-gray-600 mb-2">Real-time Conversion Impact</div>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                    {conversionRate.toFixed(1)}%
                  </div>
                  <motion.div 
                    className="text-sm text-pink-600 font-medium flex items-center justify-center"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FireIcon className="w-4 h-4 mr-1" />
                    Live creative optimization in progress
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
                    Transform your brand with world-class creative services that drive conversions and build lasting customer relationships
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
                      className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 text-lg group"
                    >
                      <span className="relative">
                        Start Creative Project
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-lg"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                      <SparklesIcon className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto border-2 border-gray-300 hover:border-purple-600 hover:text-purple-600 font-semibold px-8 py-4 text-lg group"
                    onClick={() => setIsCreativeMode(!isCreativeMode)}
                  >
                    {isCreativeMode ? 'Exit Creative Mode' : 'Enter Creative Mode'}
                    <PlayIcon className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Floating Brand Elements */}
            <motion.div
              className="absolute top-1/4 left-10 hidden lg:block"
              animate={{ 
                y: [0, -30, 0],
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20">
                <div className="text-xs font-medium text-gray-600 mb-2">Brand Impact Score</div>
                <div className="text-3xl font-bold text-purple-600">9.8/10</div>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/3 right-10 hidden lg:block"
              animate={{ 
                y: [0, 25, 0],
                rotate: [0, -8, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20">
                <div className="text-xs font-medium text-gray-600 mb-2">Engagement Rate</div>
                <div className="text-3xl font-bold text-pink-600">+320%</div>
                <div className="text-xs text-green-600 font-medium">vs industry average</div>
              </div>
            </motion.div>
          </section>

          {/* Creative Impact Metrics Dashboard */}
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
                  Creative Impact That Drives Results
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-lg text-secondary-on-light max-w-2xl leading-relaxed" style={forceCenter}>
                    See how our creative excellence transforms business metrics across the board
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {creativeImpactMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      rotateY: 15
                    }}
                    className="group cursor-pointer"
                  >
                    <Card className="p-6 text-center hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-white/20 relative overflow-hidden">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />
                      
                                             <div className={`w-14 h-14 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                         {React.createElement(metric.icon, { className: "w-7 h-7 text-white" })}
                       </div>
                      
                      <motion.div 
                        className="text-4xl font-bold text-gray-900 mb-2"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          color: ['#111827', '#8B5CF6', '#111827']
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          delay: index * 0.5 
                        }}
                      >
                        {metric.value}
                      </motion.div>
                      
                      <div className="text-sm text-gray-600 mb-3">{metric.label}</div>
                      
                      <div className="text-xs text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full">
                        {metric.trend} this month
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Portfolio Showcase */}
          <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-on-light mb-4">
                  Creative Transformations That Wow
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-lg text-secondary-on-light max-w-2xl leading-relaxed" style={forceCenter}>
                    Before and after showcases that demonstrate the power of exceptional creative work
                  </p>
                </div>
              </motion.div>

              {/* Portfolio Navigation */}
              <div className="flex justify-center mb-12">
                <div className="flex space-x-2 bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                  {portfolioShowcase.map((item, index) => (
                    <motion.button
                      key={item.client}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        activePortfolioItem === index
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                          : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                      }`}
                      onClick={() => setActivePortfolioItem(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.client}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Active Portfolio Item */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePortfolioItem}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-6xl mx-auto"
                >
                  <Card className="p-8 bg-white/90 backdrop-blur-sm border border-white/20 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                            <SparklesIcon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{portfolioShowcase[activePortfolioItem].client}</h3>
                            <p className="text-gray-600">{portfolioShowcase[activePortfolioItem].project}</p>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                            <div className="text-sm font-medium text-red-600 mb-2">BEFORE</div>
                            <p className="text-red-700">{portfolioShowcase[activePortfolioItem].before}</p>
                          </div>

                          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                            <div className="text-sm font-medium text-green-600 mb-2">AFTER</div>
                            <p className="text-green-700">{portfolioShowcase[activePortfolioItem].after}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl p-6 text-white mb-6">
                          <h4 className="text-lg font-bold mb-4 text-white">Performance Results</h4>
                          <div className="grid grid-cols-3 gap-4">
                            {Object.entries(portfolioShowcase[activePortfolioItem].metrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-2xl font-bold text-green-400">{value}</div>
                                <div className="text-xs text-gray-100 capitalize" style={{
                                  color: '#f3f4f6 !important',
                                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)'
                                }}>{key}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <motion.div
                          className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 text-center"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="text-sm text-purple-600 font-medium mb-2">Total Business Impact</div>
                          <div className="text-3xl font-bold text-purple-700 mb-2">
                            ${Math.floor(Math.random() * 3000000 + 1000000).toLocaleString()}
                          </div>
                          <div className="text-xs text-purple-600">Additional revenue generated</div>
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* Creative Services Deep Dive */}
          <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30" />
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Complete Creative Excellence Suite
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-lg text-white max-w-2xl leading-relaxed" style={forceCenter}>
                    Professional creative services that combine aesthetic excellence with performance optimization
                  </p>
                </div>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {creativeServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -15, 
                      scale: 1.02,
                      rotateY: 5 
                    }}
                    className="group cursor-pointer"
                  >
                    <Card className="p-8 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/25 transition-all duration-500 h-full relative overflow-hidden">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      />
                      
                                             <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                         {React.createElement(service.icon, { className: "w-10 h-10 text-white" })}
                       </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-white mb-6 leading-relaxed" style={{
                        color: '#ffffff !important',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                        fontWeight: '400',
                        opacity: '0.95'
                      }}>
                        {service.description}
                      </p>

                      <div className="mb-6">
                        <h4 data-key-features="true">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center text-sm" style={{
                              color: 'white !important',
                              textShadow: '0 2px 4px rgba(0, 0, 0, 0.8) !important',
                              opacity: '1 !important'
                            }}>
                              <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-white/20">
                        <div>
                          <div className="text-xs text-purple-300 font-medium">{service.showcase}</div>
                          <div className="text-lg font-bold text-green-400">{service.results}</div>
                        </div>
                        <motion.div
                          whileHover={{ rotate: 45, scale: 1.2 }}
                          className="w-8 h-8 text-purple-300 group-hover:text-white transition-colors"
                        >
                          <PlayIcon className="w-8 h-8" />
                        </motion.div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Creative Process */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-on-light mb-4">
                  Our Creative Excellence Process
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-lg text-secondary-on-light max-w-2xl leading-relaxed" style={forceCenter}>
                    Our proven creative process delivers stunning visuals that convert browsers into loyal customers
                  </p>
                </div>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                {creativeProcess.map((phase, index) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`flex items-center mb-16 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="flex-1">
                      <Card className="p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg">
                        <div className="flex items-center mb-4">
                                                     <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                             {React.createElement(phase.icon, { className: "w-6 h-6 text-white" })}
                           </div>
                          <div>
                            <div className="text-sm text-purple-600 font-medium">Phase {phase.phase}</div>
                            <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4">{phase.description}</p>

                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Duration: {phase.duration}</span>
                          <span className="text-purple-600 font-medium">{phase.deliverables.length} deliverables</span>
                        </div>
                      </Card>
                    </div>

                    <div className="mx-8">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="text-white font-bold text-lg">{phase.phase}</span>
                      </motion.div>
                    </div>

                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section with Creative Urgency */}
          <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-32 h-32 rounded-full bg-white/10"
                  animate={{
                    x: [Math.random() * 1200, Math.random() * 1200],
                    y: [Math.random() * 800, Math.random() * 800],
                    scale: [1, 1.5, 1],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    duration: Math.random() * 20 + 15,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center text-white max-w-4xl mx-auto"
              >
                {/* Creative Urgency Indicator */}
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
                  <span className="font-medium">Limited creative slots available - 5 projects this month</span>
                </motion.div>

                <h2 data-creative-title="true">
                  Ready to Transform Your Brand?
                </h2>
                
                <p className="text-xl text-white mb-8 leading-relaxed" style={{
                  color: '#ffffff !important',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                  opacity: '0.98'
                }}>
                  Don't let poor visuals cost you customers. Join the brands that are crushing their competition 
                  with creative excellence that converts browsers into buyers.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/contact">
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-50 font-semibold px-8 py-4 text-lg group"
                    >
                      <span className="relative">
                        Start Your Creative Journey
                        <motion.div
                          className="absolute inset-0 bg-purple-600/10 rounded-lg"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                      <RocketLaunchIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  
                  <Link href="/case-studies">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 text-lg group"
                    >
                      View Creative Portfolio
                      <GlobeAltIcon className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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
                    <div className="text-3xl font-bold text-white mb-2">98%</div>
                    <div className="text-sm text-white/80">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">180%</div>
                    <div className="text-sm text-white/80">Avg. Conversion Boost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">$50M+</div>
                    <div className="text-sm text-white/80">Revenue Generated</div>
                  </div>
                </motion.div>

                <motion.div
                  className="mt-8 text-sm text-white/70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <div className="flex items-center justify-center space-x-6">
                    <div className="flex items-center">
                      <ShieldCheckIcon className="w-4 h-4 mr-2" />
                      Creative Excellence Guarantee
                    </div>
                    <div className="flex items-center">
                      <TrophyIcon className="w-4 h-4 mr-2" />
                      Award-Winning Design Team
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