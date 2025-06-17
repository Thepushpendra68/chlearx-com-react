'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useCurrency } from '@/hooks/use-currency';

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
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  MapIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  EyeIcon,
  BoltIcon,
  CogIcon,
  TrophyIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  PresentationChartLineIcon,
  BeakerIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

export default function DiscoveryStrategyPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [revenueProjection, setRevenueProjection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { currencyInfo, isLoading, formatCurrency, formatCurrencyRange, convertToUSD, convertFromUSD } = useCurrency();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenueProjection(prev => {
        // For Indian users: ₹2 crores to ₹43 crores (equivalent to $2.3M to $5M USD)
        // For USD users: $2.3M to $5M
        const startAmount = currencyInfo.isIndia ? 20000000 : 2300000;  // ₹2 crores or $2.3M
        const targetAmount = currencyInfo.isIndia ? 431200000 : 5000000; // ₹43.12 crores or $5M
        
        // Animation over 2 seconds (2000ms / 50ms = 40 steps)
        const increment = (targetAmount - startAmount) / 40;
        
        // Start from the minimum amount if it's the first run
        if (prev === 0) {
          return startAmount;
        }
        
        return prev < targetAmount ? prev + increment : targetAmount;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [currencyInfo.isIndia]);

  const strategicTools = [
    {
      name: 'Market Intelligence Scanner',
      description: 'Real-time competitor analysis and market opportunity identification',
      icon: EyeIcon,
      metrics: '50+ data points',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Customer Journey Mapper',
      description: 'Visual mapping of customer touchpoints and conversion optimization',
      icon: MapIcon,
      metrics: '15+ touchpoints',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Revenue Growth Predictor',
      description: 'AI-powered revenue forecasting and scaling strategy development',
      icon: ChartBarIcon,
      metrics: '12-month forecast',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Platform Performance Analyzer',
      description: 'Technical audit and optimization recommendations for e-commerce platforms',
      icon: CogIcon,
      metrics: '200+ checks',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Strategic Discovery',
      description: 'Deep-dive analysis of your business, market position, and growth opportunities using our proprietary framework.',
      duration: '5-7 days',
      deliverables: ['Market Analysis Report', 'Competitor Intelligence', 'Customer Personas', 'SWOT Analysis'],
      icon: DocumentMagnifyingGlassIcon,
      color: 'from-blue-600 to-purple-600'
    },
    {
      step: '02',
      title: 'Strategic Planning',
      description: 'Custom growth strategy development with prioritized initiatives, resource allocation, and success metrics.',
      duration: '7-10 days',
      deliverables: ['Growth Strategy Document', 'Implementation Roadmap', 'KPI Framework', 'Resource Planning'],
      icon: LightBulbIcon,
      color: 'from-purple-600 to-pink-600'
    },
    {
      step: '03',
      title: 'Implementation Roadmap',
      description: 'Detailed execution plan with timelines, milestones, and performance tracking systems.',
      duration: '3-5 days',
      deliverables: ['Project Timeline', 'Success Metrics', 'Review Schedule', 'Optimization Plan'],
      icon: RocketLaunchIcon,
      color: 'from-pink-600 to-red-600'
    }
  ];

  const liveMetrics = [
    { label: 'Strategies Developed', value: '247', icon: PresentationChartLineIcon, trend: '+12%' },
    { label: 'Revenue Growth', value: '340%', icon: ArrowTrendingUpIcon, trend: '+89%' },
    { label: 'Market Insights', value: '12.5K', icon: BeakerIcon, trend: '+156%' },
    { label: 'Success Rate', value: '98.2%', icon: TrophyIcon, trend: '+5%' }
  ];

  // Interactive Revenue Calculator
  const [calculatorInputs, setCalculatorInputs] = useState({
    currentRevenue: 100000,
    growthTarget: 50, // Reset to reasonable 50% growth
    timeframe: 12
  });

  // Update default revenue based on currency when it loads
  useEffect(() => {
    if (!isLoading && currencyInfo.isIndia) {
      setCalculatorInputs(prev => ({
        ...prev,
        currentRevenue: 8624000 // ₹86.24 lakh (reasonable amount for Indian businesses)
      }));
    }
  }, [isLoading, currencyInfo.isIndia, currencyInfo.conversionRate]);

  // Simple calculation - no need for complex conversions since input is already in user's currency
  const projectedRevenue = calculatorInputs.currentRevenue * (1 + calculatorInputs.growthTarget / 100);
  const monthlyGrowthRate = (calculatorInputs.growthTarget / calculatorInputs.timeframe).toFixed(1);
  
  // Investment calculation - convert investment amount to user's currency
  const investmentUSD = 18750; // Average of 12500-25000
  const investmentAmount = currencyInfo.isIndia ? investmentUSD * currencyInfo.conversionRate : investmentUSD;
  const roiMultiplier = Math.round((projectedRevenue - calculatorInputs.currentRevenue) / investmentAmount);

  return (
    <>
      <SEOHead
        title="E-commerce Discovery & Strategy Services | CHLEARX"
        description="Transform your e-commerce business with our comprehensive discovery and strategic planning services. Data-driven insights, competitive analysis, and growth roadmaps that deliver results."
        keywords={['e-commerce strategy', 'market analysis', 'competitive intelligence', 'business growth planning', 'strategic consulting']}
        type="website"
      />
      <Layout>
        <div ref={containerRef} className="min-h-screen bg-light theme-light overflow-hidden">
          {/* Animated Background Particles */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20"
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
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

          {/* Revolutionary Hero Section - Strategic Command Center */}
          <section className="relative pt-24 pb-16 min-h-screen flex items-center">
            <motion.div 
              className="absolute inset-0 opacity-30"
              style={{ y: backgroundY }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center max-w-6xl mx-auto"
                style={{ y: textY }}
              >
                {/* Animated Strategic Intelligence Dashboard */}
                <motion.div 
                  className="relative mb-8 mx-auto w-fit"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden">
                    <MagnifyingGlassIcon className="w-12 h-12 text-white z-10 relative" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>
                  
                  {/* Floating Strategic Metrics */}
                  <motion.div
                    className="absolute -top-4 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold"
                    animate={{ 
                      y: [-10, 10, -10],
                      rotate: [-5, 5, -5]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    98% Success
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 -left-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold"
                    animate={{ 
                      y: [10, -10, 10],
                      rotate: [5, -5, 5]
                    }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                  >
                    247 Strategies
                  </motion.div>
                </motion.div>

                {/* Typewriter Effect Title */}
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-on-light mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Strategic Intelligence
                  <motion.span 
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    Unlocked
                  </motion.span>
                </motion.h1>

                {/* Animated Revenue Counter */}
                <motion.div 
                  className="mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 max-w-md mx-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                >
                  <div className="text-sm text-gray-600 mb-2">Average Client Revenue Growth</div>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                    {currencyInfo.symbol}{Math.floor(revenueProjection).toLocaleString(currencyInfo.isIndia ? 'en-IN' : 'en-US')}
                  </div>
                  <motion.div 
                    className="text-sm text-green-600 font-medium"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    +340% growth in 12 months
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
                    Transform your e-commerce vision into reality with our comprehensive discovery process. 
                    We analyze your market, decode your competition, and architect a strategic roadmap 
                    that turns ambitious goals into measurable results.
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
                      className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg group"
                    >
                      <span className="relative">
                        Start Strategic Discovery
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-lg"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                      <RocketLaunchIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/audit">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 font-semibold px-8 py-4 text-lg group"
                    >
                      Free Strategic Audit
                      <BeakerIcon className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Floating Interactive Elements */}
            <motion.div
              className="absolute top-1/4 left-10 hidden lg:block"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
                <div className="text-sm font-medium text-gray-600">Market Share Analysis</div>
                <div className="text-2xl font-bold text-blue-600">+47%</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/3 right-10 hidden lg:block"
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
                <div className="text-sm font-medium text-gray-600">Conversion Rate</div>
                <div className="text-2xl font-bold text-green-600">12.8%</div>
              </div>
            </motion.div>
          </section>

          {/* Live Metrics Dashboard */}
          <section className="py-16 bg-white/50 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-on-light mb-4">
                  Strategic Intelligence in Action
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-lg text-secondary-on-light max-w-2xl leading-relaxed" style={forceCenter}>
                    Real-time performance metrics from our strategic discovery implementations
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {liveMetrics.map((metric, index) => (
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
                  >
                    <Card className="p-6 text-center hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-white/20 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                      />
                      
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        {React.createElement(metric.icon, { className: "w-8 h-8 text-white" })}
                      </div>
                      
                      <motion.div 
                        className="text-4xl font-bold text-gray-900 mb-2"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
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

          {/* Interactive Revenue Growth Calculator */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-on-light mb-4">
                  Revenue Growth Predictor
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-lg text-secondary-on-light max-w-2xl leading-relaxed" style={forceCenter}>
                    Discover your potential revenue growth with our strategic discovery process
                  </p>
                </div>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                <Card className="p-8 bg-white/90 backdrop-blur-sm border border-white/20">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Calculator Inputs */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Your Current Metrics</h3>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Annual Revenue
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10">
                            {isLoading ? '$' : currencyInfo.symbol}
                          </span>
                          <input
                            type="number"
                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white text-gray-900 font-medium shadow-sm"
                            value={calculatorInputs.currentRevenue}
                            onChange={(e) => setCalculatorInputs(prev => ({ ...prev, currentRevenue: Number(e.target.value) }))}
                            placeholder="Enter your current revenue"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Target Growth Percentage
                        </label>
                        <div className="relative">
                          <input
                            type="range"
                            min="50"
                            max="500"
                            step="10"
                            className="w-full"
                            value={calculatorInputs.growthTarget}
                            onChange={(e) => setCalculatorInputs(prev => ({ ...prev, growthTarget: Number(e.target.value) }))}
                          />
                          <div className="flex justify-between text-sm text-gray-500 mt-1">
                            <span>50%</span>
                            <span className="font-bold text-blue-600">{calculatorInputs.growthTarget}%</span>
                            <span>500%</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Timeframe (months)
                        </label>
                        <select
                          className="w-full p-3 border-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white text-gray-900 font-medium shadow-sm appearance-none"
                          value={calculatorInputs.timeframe}
                          onChange={(e) => setCalculatorInputs(prev => ({ ...prev, timeframe: Number(e.target.value) }))}
                        >
                          <option value={6}>6 months</option>
                          <option value={12}>12 months</option>
                          <option value={18}>18 months</option>
                          <option value={24}>24 months</option>
                        </select>
                      </div>
                    </div>

                    {/* Results Display */}
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                      <h3 className="text-xl font-bold mb-6 text-white">Your Growth Projection</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="text-sm opacity-90">Projected Revenue</div>
                          <motion.div 
                            className="text-4xl font-bold"
                            key={projectedRevenue}
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {currencyInfo.symbol}{projectedRevenue.toLocaleString(currencyInfo.isIndia ? 'en-IN' : 'en-US')}
                          </motion.div>
                        </div>

                        <div>
                          <div className="text-sm opacity-90">Monthly Growth Rate</div>
                          <div className="text-2xl font-bold">{monthlyGrowthRate}%</div>
                        </div>

                        <div>
                          <div className="text-sm opacity-90">Additional Revenue</div>
                          <div className="text-2xl font-bold text-green-300">
                            +{currencyInfo.symbol}{(projectedRevenue - calculatorInputs.currentRevenue).toLocaleString(currencyInfo.isIndia ? 'en-IN' : 'en-US')}
                          </div>
                        </div>
                      </div>

                      <motion.div
                        className="mt-6 p-4 bg-white/20 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="text-sm opacity-90 mb-2">Strategic Discovery Investment</div>
                        <div className="text-lg font-bold">
                          {currencyInfo.symbol}{(12500 * (currencyInfo.isIndia ? currencyInfo.conversionRate : 1)).toLocaleString(currencyInfo.isIndia ? 'en-IN' : 'en-US')} - {currencyInfo.symbol}{(25000 * (currencyInfo.isIndia ? currencyInfo.conversionRate : 1)).toLocaleString(currencyInfo.isIndia ? 'en-IN' : 'en-US')}
                        </div>
                        <div className="text-xs opacity-75 mt-1">
                          ROI: {roiMultiplier}x return
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Strategic Tools Arsenal */}
          <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Strategic Intelligence Arsenal
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-lg text-white max-w-2xl leading-relaxed" style={{
                    ...forceCenter,
                    color: '#ffffff !important',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                    opacity: '0.95'
                  }}>
                    Cutting-edge tools and methodologies that power our strategic discovery process
                  </p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {strategicTools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group cursor-pointer"
                  >
                    <Card className="p-6 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/25 transition-all duration-300 h-full">
                      <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {React.createElement(tool.icon, { className: "w-8 h-8 text-white" })}
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                        {tool.name}
                      </h3>
                      
                      <p className="text-white text-sm mb-4 leading-relaxed" style={{
                        color: '#ffffff !important',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                        fontWeight: '400',
                        opacity: '0.95'
                      }}>
                        {tool.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-blue-300 font-medium bg-blue-900/30 px-2 py-1 rounded-full">
                          {tool.metrics}
                        </span>
                        <motion.div
                          className="w-6 h-6 text-gray-200 group-hover:text-white transition-colors"
                          style={{
                            color: '#f3f4f6 !important',
                            textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)'
                          }}
                          whileHover={{ rotate: 90 }}
                        >
                          <BoltIcon className="w-6 h-6" />
                        </motion.div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Process Flow */}
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
                  Strategic Discovery Process
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-lg text-secondary-on-light max-w-2xl leading-relaxed" style={forceCenter}>
                    Our proven 3-phase methodology that transforms businesses through strategic intelligence
                  </p>
                </div>
              </motion.div>

              <div className="max-w-6xl mx-auto">
                {/* Process Step Navigation */}
                <div className="flex justify-center mb-12">
                  <div className="flex space-x-4">
                    {processSteps.map((step, index) => (
                      <motion.button
                        key={step.step}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                          currentStep === index
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        onClick={() => setCurrentStep(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {step.title}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Active Process Step */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xl">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <div className="flex items-center mb-6">
                            <div className={`w-16 h-16 bg-gradient-to-br ${processSteps[currentStep].color} rounded-xl flex items-center justify-center mr-4`}>
                              {React.createElement(processSteps[currentStep].icon, { className: "w-8 h-8 text-white" })}
                            </div>
                            <div>
                              <div className="text-sm text-gray-500 font-medium">Phase {processSteps[currentStep].step}</div>
                              <h3 className="text-2xl font-bold text-gray-900">{processSteps[currentStep].title}</h3>
                            </div>
                          </div>

                          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            {processSteps[currentStep].description}
                          </p>

                          <div className="flex items-center space-x-6 mb-6">
                            <div className="flex items-center text-gray-500">
                              <ClockIcon className="w-5 h-5 mr-2" />
                              <span className="font-medium">{processSteps[currentStep].duration}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-4">Key Deliverables</h4>
                          <div className="space-y-3">
                            {processSteps[currentStep].deliverables.map((deliverable, index) => (
                              <motion.div
                                key={deliverable}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                              >
                                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{deliverable}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* Social Proof & Trust Section */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-on-light mb-4">
                  Trusted by Industry Leaders
                </h2>
                <div className="w-full flex justify-center" style={forceCenter}>
                  <p className="text-lg text-secondary-on-light max-w-2xl leading-relaxed" style={forceCenter}>
                    Our strategic discovery process has transformed businesses across industries
                  </p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    company: "TechCommerce Inc.",
                    result: "340% revenue growth",
                    timeframe: "12 months",
                    quote: "CHLEARX's strategic discovery revealed opportunities we never knew existed."
                  },
                  {
                    company: "Fashion Forward",
                    result: "280% conversion rate increase",
                    timeframe: "8 months",
                    quote: "The market analysis completely transformed our approach to customer acquisition."
                  },
                  {
                    company: "HomeStyle Direct",
                    result: "450% ROI improvement",
                    timeframe: "10 months",
                    quote: "Their strategic roadmap became our blueprint for sustainable growth."
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={testimonial.company}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="p-6 bg-white/80 backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all duration-300 h-full">
                      <div className="flex items-center justify-between mb-4">
                        <div className="font-bold text-gray-900">{testimonial.company}</div>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      <blockquote className="text-gray-600 mb-4 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="border-t pt-4">
                        <div className="text-2xl font-bold text-green-600 mb-1">{testimonial.result}</div>
                        <div className="text-sm text-gray-500">in {testimonial.timeframe}</div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section with Urgency */}
          <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center text-white max-w-4xl mx-auto"
              >
                {/* Urgency Indicator */}
                <motion.div
                  className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  <span className="text-sm font-medium">Only 3 strategic discovery spots available this month</span>
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Ready to Unlock Your Strategic Advantage?
                </h2>
                
                <p className="text-xl text-white mb-8 leading-relaxed" style={{
                  color: '#ffffff !important',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                  opacity: '0.98'
                }}>
                  Don't let another quarter pass without a clear strategic direction. 
                  Our discovery process has generated over {currencyInfo.symbol}{(36200000 * (currencyInfo.isIndia ? currencyInfo.conversionRate : 1)).toLocaleString(currencyInfo.isIndia ? 'en-IN' : 'en-US')} in additional revenue for our clients.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/contact">
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-4 text-lg group"
                    >
                      <span className="relative">
                        Claim Your Discovery Session
                        <motion.div
                          className="absolute inset-0 bg-blue-600/10 rounded-lg"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                      <ShieldCheckIcon className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                    </Button>
                  </Link>
                  
                  <Link href="/case-studies">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg group"
                    >
                      View Success Stories
                      <TrophyIcon className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <motion.div
                  className="mt-8 text-sm text-white"
                  style={{
                    color: '#ffffff !important',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)',
                    opacity: '0.9'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex items-center justify-center space-x-6">
                    <div className="flex items-center">
                      <ShieldCheckIcon className="w-4 h-4 mr-2" />
                      100% Money-Back Guarantee
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 mr-2" />
                      24/7 Strategic Support
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Floating Achievements */}
            <motion.div
              className="absolute bottom-10 left-10 hidden lg:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg text-white text-center">
                <div className="text-lg font-bold">{currencyInfo.symbol}{(36200000 * (currencyInfo.isIndia ? currencyInfo.conversionRate : 1)).toLocaleString(currencyInfo.isIndia ? 'en-IN' : 'en-US')}+</div>
                <div className="text-xs">Revenue Generated</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-10 right-10 hidden lg:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg text-white text-center">
                <div className="text-lg font-bold">247</div>
                <div className="text-xs">Strategies Delivered</div>
              </div>
            </motion.div>
          </section>
        </div>
      </Layout>
    </>
  );
} 