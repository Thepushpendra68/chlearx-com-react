'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ContrastEnhancer } from '@/utils/contrastEnhancer';

import { Layout } from '@/components/templates/Layout';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { SEOHead } from '@/components/atoms/SEOHead';
import {
  CalculatorIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  LightBulbIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  TrophyIcon,
  RocketLaunchIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function ROICalculatorPage() {
  const [formData, setFormData] = useState({
    monthlyRevenue: '',
    conversionRate: '',
    averageOrderValue: '',
    monthlyVisitors: '',
    marketingBudget: '',
    currentRoas: ''
  });

  const [results, setResults] = useState({
    currentROI: 0,
    projectedROI: 0,
    monthlyGrowth: 0,
    yearlyGrowth: 0,
    breakEvenTime: 0,
    potentialRevenue: 0
  });

  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateROI = () => {
    const revenue = parseFloat(formData.monthlyRevenue) || 0;
    const conversionRate = parseFloat(formData.conversionRate) || 0;
    const avgOrderValue = parseFloat(formData.averageOrderValue) || 0;
    const visitors = parseFloat(formData.monthlyVisitors) || 0;
    const budget = parseFloat(formData.marketingBudget) || 0;
    const currentRoas = parseFloat(formData.currentRoas) || 0;

    // Current ROI calculation
    const currentROI = budget > 0 ? ((revenue - budget) / budget) * 100 : 0;

    // Projected improvements (conservative estimates)
    const conversionImprovement = 0.25; // 25% improvement
    const aovImprovement = 0.15; // 15% improvement
    const trafficImprovement = 0.20; // 20% improvement

    const newConversionRate = conversionRate * (1 + conversionImprovement);
    const newAOV = avgOrderValue * (1 + aovImprovement);
    const newVisitors = visitors * (1 + trafficImprovement);

    const projectedRevenue = (newVisitors * (newConversionRate / 100) * newAOV);
    const projectedROI = budget > 0 ? ((projectedRevenue - budget) / budget) * 100 : 0;

    const monthlyGrowth = projectedRevenue - revenue;
    const yearlyGrowth = monthlyGrowth * 12;
    const breakEvenTime = budget > 0 ? budget / monthlyGrowth : 0;

    setResults({
      currentROI,
      projectedROI,
      monthlyGrowth,
      yearlyGrowth,
      breakEvenTime,
      potentialRevenue: projectedRevenue
    });

    setShowResults(true);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const benefits = [
    {
      title: 'Conversion Rate Optimization',
      description: 'Increase your conversion rate by 25-40% through A/B testing and UX improvements',
      icon: ArrowTrendingUpIcon,
      improvement: '+25%',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Average Order Value',
      description: 'Boost AOV by 15-30% with upselling, cross-selling, and bundle strategies',
      icon: CurrencyDollarIcon,
      improvement: '+15%',
      color: 'from-emerald-500 to-green-500'
    },
    {
      title: 'Traffic Quality',
      description: 'Improve traffic quality and quantity through targeted campaigns',
      icon: ChartBarIcon,
      improvement: '+20%',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'FashionForward Co.',
      result: '312% ROI increase',
      quote: 'CHLEARX transformed our e-commerce performance. The ROI calculator was just the beginning!',
      avatar: 'S',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'TechGadgets Plus',
      result: '240% revenue growth',
      quote: 'The projections were conservative - we actually exceeded the calculator\'s estimates.',
      avatar: 'D',
      rating: 5
    }
  ];

  const stats = [
    { label: 'Average ROI Increase', value: '285%', icon: TrophyIcon },
    { label: 'Client Success Rate', value: '98%', icon: SparklesIcon },
    { label: 'Revenue Generated', value: '$50M+', icon: RocketLaunchIcon }
  ];

  return (
    <>
      <SEOHead
        title="ROI Calculator - Calculate Your Marketing Return on Investment | CHLEARX"
        description="Free ROI calculator to estimate your potential marketing returns. Calculate conversion optimization, traffic growth, and revenue projections for your e-commerce business."
        keywords={['ROI calculator', 'marketing ROI', 'conversion rate calculator', 'e-commerce ROI', 'marketing investment calculator']}
        type="website"
      />
      <Layout>
        <div className="min-h-screen relative overflow-hidden">
          {/* Enhanced Hero Section with Dark Gradient Background */}
          <section className="relative pt-24 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
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
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-8"
                >
                  <CalculatorIcon className="w-5 h-5 text-blue-400" />
                  <span style={ContrastEnhancer.forceLightContrast} className="text-sm font-medium">
                    100% FREE ROI Calculator
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
                  Calculate Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                    ROI Potential
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl md:text-2xl mb-10 leading-relaxed max-w-4xl mx-auto"
                  style={ContrastEnhancer.centeredDarkDescriptionContrast}
                >
                  Discover exactly how much revenue growth you could achieve with our proven optimization strategies. 
                  <span className="text-blue-300 font-semibold"> Get accurate projections in under 2 minutes.</span>
                </motion.p>

                {/* Stats Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                    >
                      <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Enhanced Trust Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-400/30 rounded-2xl p-4 inline-flex items-center space-x-3 max-w-md mx-auto"
                >
                  <ExclamationTriangleIcon className="w-6 h-6 text-amber-400 flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-amber-300 font-bold text-sm">Trusted by 500+ Businesses</div>
                    <div className="text-amber-200 text-xs">Based on real client results & industry benchmarks</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Enhanced Calculator Section */}
          <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
            
            <div className="relative container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                {/* Enhanced Calculator Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Card className="p-8 border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                    <div className="flex items-center space-x-3 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <CalculatorIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold" style={ContrastEnhancer.forceHighContrast}>
                          Enter Your Metrics
                        </h2>
                        <p className="text-gray-600">Fill in your current business data</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold mb-3" style={ContrastEnhancer.forceHighContrast}>
                          Monthly Revenue ($)
                        </label>
                        <div className="relative">
                          <CurrencyDollarIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="number"
                            placeholder="50,000"
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg font-medium"
                            value={formData.monthlyRevenue}
                            onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-3" style={ContrastEnhancer.forceHighContrast}>
                          Current Conversion Rate (%)
                        </label>
                        <div className="relative">
                          <ArrowTrendingUpIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="number"
                            step="0.1"
                            placeholder="2.5"
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg font-medium"
                            value={formData.conversionRate}
                            onChange={(e) => handleInputChange('conversionRate', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-3" style={ContrastEnhancer.forceHighContrast}>
                          Average Order Value ($)
                        </label>
                        <div className="relative">
                          <CurrencyDollarIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="number"
                            placeholder="85"
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg font-medium"
                            value={formData.averageOrderValue}
                            onChange={(e) => handleInputChange('averageOrderValue', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-3" style={ContrastEnhancer.forceHighContrast}>
                          Monthly Website Visitors
                        </label>
                        <div className="relative">
                          <ChartBarIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="number"
                            placeholder="25,000"
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg font-medium"
                            value={formData.monthlyVisitors}
                            onChange={(e) => handleInputChange('monthlyVisitors', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-3" style={ContrastEnhancer.forceHighContrast}>
                          Monthly Marketing Budget ($)
                        </label>
                        <div className="relative">
                          <CurrencyDollarIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="number"
                            placeholder="10,000"
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg font-medium"
                            value={formData.marketingBudget}
                            onChange={(e) => handleInputChange('marketingBudget', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-3" style={ContrastEnhancer.forceHighContrast}>
                          Current ROAS (Return on Ad Spend)
                        </label>
                        <div className="relative">
                          <TrophyIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="number"
                            step="0.1"
                            placeholder="4.2"
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg font-medium"
                            value={formData.currentRoas}
                            onChange={(e) => handleInputChange('currentRoas', e.target.value)}
                          />
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          onClick={calculateROI}
                          size="lg" 
                          className="w-full py-4 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                          disabled={!formData.monthlyRevenue || !formData.marketingBudget}
                        >
                          <RocketLaunchIcon className="w-5 h-5 mr-2" />
                          Calculate My ROI Potential
                          <ArrowRightIcon className="w-5 h-5 ml-2" />
                        </Button>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>

                {/* Enhanced Results Section */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {showResults ? (
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        <Card className="p-8 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 border-0 shadow-2xl overflow-hidden relative">
                          {/* Background decoration */}
                          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                          
                          <div className="relative">
                            <div className="flex items-center space-x-3 mb-8">
                              <TrophyIcon className="w-8 h-8 text-yellow-300" />
                              <h3 className="text-3xl font-bold text-white">Your ROI Projection</h3>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-6">
                              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                                <p className="text-white/80 text-sm mb-2">Current ROI</p>
                                <p className="text-3xl font-bold text-white">{formatPercentage(results.currentROI)}</p>
                              </div>
                              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                                <p className="text-white/80 text-sm mb-2">Projected ROI</p>
                                <p className="text-3xl font-bold text-yellow-300">{formatPercentage(results.projectedROI)}</p>
                              </div>
                              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                                <p className="text-white/80 text-sm mb-2">Monthly Growth</p>
                                <p className="text-2xl font-bold text-green-300">{formatCurrency(results.monthlyGrowth)}</p>
                              </div>
                              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                                <p className="text-white/80 text-sm mb-2">Yearly Growth</p>
                                <p className="text-2xl font-bold text-green-300">{formatCurrency(results.yearlyGrowth)}</p>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>

                      <Card className="p-6 border-0 shadow-xl">
                        <h4 className="text-xl font-bold mb-6" style={ContrastEnhancer.forceHighContrast}>Key Insights</h4>
                        <div className="space-y-4">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl"
                          >
                            <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
                            <span style={ContrastEnhancer.forceDescriptionContrast}>
                              Potential revenue increase: <strong>{formatCurrency(results.potentialRevenue - parseFloat(formData.monthlyRevenue || '0'))}</strong>/month
                            </span>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                            className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl"
                          >
                            <CheckCircleIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                            <span style={ContrastEnhancer.forceDescriptionContrast}>
                              ROI improvement: <strong>{formatPercentage(results.projectedROI - results.currentROI)}</strong>
                            </span>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.0, duration: 0.6 }}
                            className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl"
                          >
                            <CheckCircleIcon className="w-6 h-6 text-purple-600 flex-shrink-0" />
                            <span style={ContrastEnhancer.forceDescriptionContrast}>
                              Break-even time: <strong>{results.breakEvenTime > 0 ? Math.ceil(results.breakEvenTime) : 'Immediate'}</strong> months
                            </span>
                          </motion.div>
                        </div>
                      </Card>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                      >
                        <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                              <RocketLaunchIcon className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-2xl font-bold text-green-800 mb-3">Ready to Achieve These Results?</h4>
                            <p className="text-green-700 mb-6 text-lg">
                              Get a free consultation to create your custom growth strategy
                            </p>
                            <Link href="/contact">
                              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 text-lg font-semibold">
                                Get Free Consultation
                                <ArrowRightIcon className="w-5 h-5 ml-2" />
                              </Button>
                            </Link>
                          </div>
                        </Card>
                      </motion.div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <Card className="p-8 text-center border-0 shadow-xl">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <LightBulbIcon className="w-10 h-10 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4" style={ContrastEnhancer.forceHighContrast}>
                          Your Results Will Appear Here
                        </h3>
                        <p className="text-lg" style={ContrastEnhancer.forceDescriptionContrast}>
                          Fill out the form to see your personalized ROI projections and growth potential
                        </p>
                      </Card>

                      <Card className="p-8 border-0 shadow-xl">
                        <h4 className="text-2xl font-bold mb-8" style={ContrastEnhancer.forceHighContrast}>What We Optimize</h4>
                        <div className="space-y-6">
                          {benefits.map((benefit, index) => (
                            <motion.div
                              key={benefit.title}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.6 }}
                              className="flex items-start space-x-6 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300"
                            >
                              <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                <benefit.icon className="w-7 h-7 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-3">
                                  <h5 className="text-lg font-bold" style={ContrastEnhancer.forceHighContrast}>{benefit.title}</h5>
                                  <span className="text-lg font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">{benefit.improvement}</span>
                                </div>
                                <p className="text-base leading-relaxed" style={ContrastEnhancer.forceDescriptionContrast}>{benefit.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </Card>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </section>

          {/* Enhanced Testimonials Section */}
          <section className="py-20 bg-gradient-to-br from-white to-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-6">
                  <TrophyIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-800 font-semibold">Client Success Stories</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={ContrastEnhancer.forceHighContrast}>
                  Real Results from Real Clients
                </h2>
                <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={ContrastEnhancer.centeredDarkDescriptionContrast}>
                  See how our optimization strategies delivered exceptional ROI for businesses like yours
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                          {testimonial.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <div className="text-2xl font-bold text-green-600 mb-2">{testimonial.result}</div>
                        </div>
                      </div>
                      <p className="text-lg italic mb-6 leading-relaxed" style={ContrastEnhancer.forceDescriptionContrast}>
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <p className="font-bold text-lg" style={ContrastEnhancer.forceHighContrast}>{testimonial.name}</p>
                        <p className="text-gray-600">{testimonial.company}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
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
                  className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8"
                >
                  <RocketLaunchIcon className="w-10 h-10 text-white" />
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold mb-8" style={ContrastEnhancer.forceLightContrast}>
                  Ready to Turn Projections into Profits?
                </h2>
                <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={ContrastEnhancer.centeredDarkDescriptionContrast}>
                  Get a free consultation and custom strategy to achieve the ROI growth you calculated above.
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
                        className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg font-bold shadow-xl"
                      >
                        Get Free Consultation
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/case-studies">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-bold"
                      >
                        View Case Studies
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
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