'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Link from 'next/link';
import { Layout } from '@/components/templates/Layout';
import { Button } from '@/components/atoms/Button';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { RevenueAuditModal } from '@/components/organisms/RevenueAuditModal';
import { ROICalculator } from '@/components/organisms/ROICalculator';
import toast, { Toaster } from 'react-hot-toast';
import { 
  ArrowRightIcon, 
  PlayIcon, 
  ChartBarIcon, 
  RocketLaunchIcon, 
  ShoppingBagIcon,
  CheckCircleIcon,
  StarIcon,
  TrophyIcon,
  SparklesIcon,
  HandRaisedIcon,
  FireIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  // New icons for enhanced homepage
  ShieldCheckIcon,
  AcademicCapIcon,
  ClockIcon,
  BeakerIcon,
  PhoneIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  HeartIcon,
  PuzzlePieceIcon,
  WrenchScrewdriverIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

// Typewriter Effect Component
const TypewriterText = ({ words, speed = 100, className = '' }: {
  words: string[];
  speed?: number;
  className?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, speed]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = '', prefix = '', isInView }: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationId = requestAnimationFrame(updateCount);
      }
    };

    animationId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationId);
  }, [end, duration, isInView]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
};

// Live Success Feed Component
const LiveSuccessFeed = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  
  const notifications = [
    { brand: "FashionForward", metric: "4.2X ROAS", timeAgo: "2 minutes ago" },
    { brand: "TechGadgets Pro", metric: "₹2.5L revenue", timeAgo: "5 minutes ago" },
    { brand: "HealthyLiving", metric: "350% conversion boost", timeAgo: "8 minutes ago" },
    { brand: "BeautyEssentials", metric: "65% CAC reduction", timeAgo: "12 minutes ago" },
    { brand: "SportZone", metric: "₹1.8L in 30 days", timeAgo: "15 minutes ago" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [notifications.length]);

  return (
    <motion.div
      key={currentNotification}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-4 max-w-md"
    >
      <div className="flex items-center space-x-3">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <div>
          <div className="text-white font-semibold text-sm">
            🎉 {notifications[currentNotification].brand} just achieved {notifications[currentNotification].metric}!
          </div>
          <div className="text-gray-300 text-xs">
            {notifications[currentNotification].timeAgo}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Interactive Revenue Calculator Widget
const RevenueCalculatorWidget = ({ onShowCalculator }: { onShowCalculator: () => void }) => {
  const [currentRevenue, setCurrentRevenue] = useState(50000);
  
  const potentialRevenue = Math.round(currentRevenue * 3.5);
  const additionalRevenue = potentialRevenue - currentRevenue;

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-sm mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="text-center mb-4">
        <h3 className="text-white font-bold text-lg mb-2">Revenue Potential Calculator</h3>
        <p className="text-gray-300 text-sm">See what you could be earning</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-white text-sm font-medium block mb-2">
            Current Monthly Revenue: ₹{currentRevenue.toLocaleString()}
          </label>
          <input
            type="range"
            min="10000"
            max="500000"
            step="10000"
            value={currentRevenue}
            onChange={(e) => setCurrentRevenue(Number(e.target.value))}
            className="w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-4 border border-green-500/30">
          <div className="text-center">
            <div className="text-green-400 font-bold text-2xl">
              ₹{potentialRevenue.toLocaleString()}
            </div>
            <div className="text-white text-sm">Potential Monthly Revenue</div> 
            <div className="text-green-300 text-lg font-semibold mt-2">
              +₹{additionalRevenue.toLocaleString()} additional
            </div>
          </div>
        </div>
        
        <Button
          size="sm"
          className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white border-0"
          icon={ArrowRightIcon}
          iconPosition="right"
          onClick={onShowCalculator}
        >
          Get Full Analysis
        </Button>
      </div>
    </motion.div>
  );
};

export default function HomePage() {
  const [isRevenueAuditModalOpen, setIsRevenueAuditModalOpen] = useState(false);
  const [showROICalculator, setShowROICalculator] = useState(false);

  const { ref: heroRef, isIntersecting: heroInView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: statsRef, isIntersecting: statsInView } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: servicesRef, isIntersecting: servicesInView } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: testimonialRef, isIntersecting: testimonialInView } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  const stats = [
    { 
      label: 'Revenue Generated', 
      value: 100, 
      suffix: 'M+', 
      prefix: '₹',
      icon: CurrencyDollarIcon, 
      color: 'text-emerald-600',
      bgColor: 'from-emerald-500 to-green-500',
      lightBg: 'bg-emerald-50',
      description: 'Total revenue generated for our clients through strategic e-commerce campaigns',
      highlight: 'Industry Leading'
    },
    { 
      label: 'Average ROAS Increase', 
      value: 350, 
      suffix: '%', 
      prefix: '',
      icon: ChartBarIcon, 
      color: 'text-blue-600',
      bgColor: 'from-blue-500 to-cyan-500',
      lightBg: 'bg-blue-50',
      description: 'Average return on ad spend improvement across all our e-commerce campaigns',
      highlight: 'Proven Results'
    },
    { 
      label: 'E-commerce Brands Scaled', 
      value: 200, 
      suffix: '+', 
      prefix: '',
      icon: UserGroupIcon, 
      color: 'text-purple-600',
      bgColor: 'from-purple-500 to-pink-500',
      lightBg: 'bg-purple-50',
      description: 'Successful e-commerce brands that achieved their growth objectives with us',
      highlight: 'Trusted Partner'
    },
    { 
      label: 'Client Retention Rate', 
      value: 97, 
      suffix: '%', 
      prefix: '',
      icon: TrophyIcon, 
      color: 'text-orange-600',
      bgColor: 'from-orange-500 to-red-500',
      lightBg: 'bg-orange-50',
      description: 'Client satisfaction and retention rate based on consistent results delivery',
      highlight: 'Exceptional Service'
    },
  ];

  const services = [
    {
      title: 'Discovery & Strategy',
      description: 'Strategic Intelligence That Drives Growth',
      longDescription: 'Deep-dive market analysis and competitor intelligence to create your custom growth roadmap.',
      icon: BeakerIcon,
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Market Analysis', 'Competitor Intelligence', 'Growth Roadmap', 'KPI Strategy'],
      results: '180% efficiency boost',
      caseStudy: 'FashionForward: Identified untapped market worth ₹50L revenue',
      hoverIcon: BeakerIcon
    },
    {
      title: 'Creative Excellence',
      description: 'Creative That Converts, Not Just Looks Good',
      longDescription: 'Brand development, ad creative, and content strategy that drives measurable results.',
      icon: SparklesIcon,
      gradient: 'from-purple-500 to-pink-500',
      features: ['Brand Development', 'Ad Creative', 'Content Strategy', 'Visual Identity'],
      results: '250% CTR improvement',
      caseStudy: 'HealthyLiving: Creative refresh led to 4.2X ROAS increase',
      hoverIcon: HeartIcon
    },
    {
      title: 'Growth Acceleration',
      description: 'Scale Faster With Performance Marketing',
      longDescription: 'Paid advertising, conversion optimization, and retention strategies for explosive growth.',
      icon: RocketLaunchIcon,
      gradient: 'from-orange-500 to-red-500',
      features: ['Paid Advertising', 'Conversion Optimization', 'Email Marketing', 'Retention Strategy'],
      results: '350% ROAS average',
      caseStudy: 'TechGadgets: Scaled from ₹10L to ₹50L monthly revenue',
      hoverIcon: ChartBarIcon
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStyle Fashion',
      company: 'Fashion E-commerce',
      image: '/api/placeholder/60/60',
      content: 'CHLEARX transformed our online presence. We saw a 250% increase in revenue within 6 months. Their data-driven approach is unmatched.',
      rating: 5,
      results: '+250% Revenue'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, GreenTech Solutions',
      company: 'Sustainable Products',
      image: '/api/placeholder/60/60',
      content: 'The team at CHLEARX doesn\'t just deliver results – they exceed expectations. Our conversion rates doubled in just 3 months.',
      rating: 5,
      results: '+200% Conversions'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Marketing Director, Luxury Wellness',
      company: 'Health & Beauty',
      image: '/api/placeholder/60/60',
      content: 'Working with CHLEARX was a game-changer. Their strategic approach helped us achieve our annual goals in just 4 months.',
      rating: 5,
      results: '+180% Growth'
    }
  ];

  return (
    <Layout>
      <div id="main-content" className="min-h-screen">
        {/* Revolutionary Hero Section */}
        <section 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient theme-dark"
        >
          {/* Dynamic Animated Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.4),transparent)] animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.4),transparent)] animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,219,255,0.4),transparent)] animate-pulse"></div>
          </div>
          
          {/* Floating E-commerce Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[ShoppingBagIcon, CurrencyDollarIcon, ChartBarIcon, RocketLaunchIcon, TrophyIcon, SparklesIcon].map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${15 + (i * 15)}%`,
                  top: `${20 + Math.sin(i) * 30}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 10, -10, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                <Icon className="w-8 h-8 text-blue-400/30" />
              </motion.div>
            ))}
          </div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
              
              {/* Main Hero Content */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Trust Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 mb-6">
                    <TrophyIcon className="w-4 h-4 text-success mr-2" />
                    <span className="text-sm text-on-dark font-medium">
                      ₹100M+ Revenue Generated • 97% Client Retention
                    </span>
                  </div>
                  
                  {/* Dynamic Typewriter Headline */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                    <span className="block text-on-dark mb-2">
                      We Turn E-commerce Dreams Into
                    </span>
                    <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                      <TypewriterText 
                        words={["₹Crore Realities", "Success Stories", "Market Leaders", "Growth Machines"]}
                        speed={120}
                        className="font-black"
                      />
                    </span>
                  </h1>
                </motion.div>

                {/* Morphing Subheadings */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <TypewriterText 
                    words={[
                      "350% ROAS Increases • 64% Lower CAC",
                      "₹100M+ Revenue Generated Collectively", 
                      "97% Client Retention Rate • Proven Results",
                      "From Startup to Scale • Your Growth Partner"
                    ]}
                    speed={80}
                    className="text-xl md:text-2xl text-secondary-on-dark font-medium"
                  />
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 min-w-[280px] font-semibold text-lg relative overflow-hidden group"
                      icon={FireIcon}
                      iconPosition="right"
                      onClick={() => setIsRevenueAuditModalOpen(true)}
                    >
                      <span className="relative z-10">Get Your Free Revenue Audit</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </motion.div>
                  
                  <Link href="/case-studies">
                    <Button
                      variant="outline"
                      size="lg"
                      icon={PlayIcon}
                      className="btn-perfect-outline border-2 border-white/30 text-on-dark hover:bg-white/10 backdrop-blur-sm min-w-[250px] font-semibold"
                    >
                      Watch Success Stories
                    </Button>
                  </Link>
                </motion.div>

                {/* Live Success Counter */}
                <motion.div
                  className="flex items-center justify-center lg:justify-start space-x-6 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">
                      <AnimatedCounter end={200} suffix="+" isInView={heroInView} />
                    </div>
                    <div className="text-xs text-muted-on-dark">Clients Served</div>
                  </div>
                  <div className="w-px h-8 bg-gray-600"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-blue">
                      ₹<AnimatedCounter end={100} suffix="M+" isInView={heroInView} />
                    </div>
                    <div className="text-xs text-muted-on-dark">Revenue Generated</div>
                  </div>
                  <div className="w-px h-8 bg-gray-600"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-orange">
                      <AnimatedCounter end={350} suffix="%" isInView={heroInView} />
                    </div>
                    <div className="text-xs text-muted-on-dark">Avg ROAS Increase</div>
                  </div>
                </motion.div>
              </div>

              {/* Interactive Sidebar */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Live Success Feed */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={heroInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <LiveSuccessFeed />
                </motion.div>

                {/* Revenue Calculator Widget */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={heroInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <RevenueCalculatorWidget onShowCalculator={() => setShowROICalculator(true)} />
                </motion.div>

                {/* Urgency Indicators */}
                <motion.div
                  className="bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  <div className="flex items-center space-x-3">
                    <ClockIcon className="w-5 h-5 text-red-400" />
                    <div>
                      <div className="text-on-dark font-semibold text-sm">
                        ⚡ Only 3 Strategy Spots Left This Month
                      </div>
                      <div className="text-warning text-xs">
                        Free audit spots: 12/15 available
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 bg-red-500/30 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-400 to-orange-400"
                      initial={{ width: "0%" }}
                      animate={heroInView ? { width: "80%" } : {}}
                      transition={{ duration: 2, delay: 1.6 }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Floating Trust Badges */}
          <motion.div
            className="absolute bottom-20 left-8 hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center space-x-3 mb-2">
                <ShieldCheckIcon className="w-5 h-5 text-green-400" />
                <span className="text-white text-sm font-semibold">Certified Partners</span>
              </div>
              <div className="flex space-x-2">
                {['Meta', 'Google', 'Shopify'].map((platform) => (
                  <div key={platform} className="bg-white/20 px-2 py-1 rounded text-xs text-white">
                    {platform}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="text-white/60 text-xs font-medium">Scroll to explore</div>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Social Proof Explosion Section */}
        <section className="py-16 bg-dark theme-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent)]"></div>
          
          <div className="container-custom relative z-10">
            {/* Animated Logo Carousel */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-4">
                <TrophyIcon className="w-4 h-4 text-brand-blue mr-2" />
                <span className="text-sm text-on-dark font-medium">
                  Trusted by Leading E-commerce Brands
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-on-dark mb-8">
                Join the Success Stories
              </h2>
            </motion.div>

            {/* Client Logo Carousel */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex items-center space-x-12 mb-8"
                animate={{ x: [-100, -2000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {[
                  "FashionForward", "TechGadgets Pro", "HealthyLiving", "BeautyEssentials", 
                  "SportZone", "HomeDecor Plus", "ElectroWorld", "GreenLife", "PetCare Co",
                  "FashionForward", "TechGadgets Pro", "HealthyLiving", "BeautyEssentials"
                ].map((brand, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20"
                  >
                    <span className="text-on-dark font-semibold whitespace-nowrap">{brand}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Live Metrics Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { label: "Total Revenue Generated", value: "₹100M+", icon: CurrencyDollarIcon, color: "from-green-500 to-emerald-500" },
                { label: "Average ROAS Increase", value: "350%", icon: ChartBarIcon, color: "from-blue-500 to-cyan-500" },
                { label: "Clients Retained", value: "97%", icon: UserGroupIcon, color: "from-purple-500 to-pink-500" },
                { label: "CAC Reduction", value: "64%", icon: TrophyIcon, color: "from-orange-500 to-red-500" }
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-on-dark mb-2">{metric.value}</div>
                  <div className="text-secondary-on-dark text-sm">{metric.label}</div>
                  
                  {/* Animated Progress Bar */}
                  <div className="mt-3 bg-white/20 rounded-full h-1 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${metric.color}`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievement Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Award-Winning Agency",
                  description: "Recognized as Top E-commerce Marketing Agency 2024",
                  icon: TrophyIcon,
                  badges: ["Best Performance", "Client Choice", "Innovation Leader"]
                },
                {
                  title: "Certified Partners",
                  description: "Official partners with major platforms and tools",
                  icon: ShieldCheckIcon,
                  badges: ["Meta Partner", "Google Partner", "Shopify Plus"]
                },
                {
                  title: "Industry Expertise",
                  description: "63+ combined years of e-commerce marketing experience",
                  icon: AcademicCapIcon,
                  badges: ["E-commerce Focus", "Performance Driven", "Results Guaranteed"]
                }
              ].map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <achievement.icon className="w-8 h-8 text-brand-blue mb-4" />
                  <h3 className="text-xl font-bold text-on-dark mb-2">{achievement.title}</h3>
                  <p className="text-secondary-on-dark mb-4">{achievement.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {achievement.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs text-brand-blue border border-blue-500/30"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

                {/* Modern Stats Section */}
        <section 
          ref={statsRef}
          className="py-24 bg-light theme-light relative overflow-hidden"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>
          </div>

          <div className="container-custom relative z-10">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                <span className="text-sm font-semibold text-white">
                  Performance Metrics
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-on-light text-center">
                Numbers Don't Lie
              </h2>
              
              <p className="text-xl text-secondary-on-light max-w-3xl mx-auto leading-relaxed text-center">
                Our data-driven approach delivers consistent, measurable results that transform businesses and exceed expectations.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1
                  }}
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-white rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1"></div>
                  
                  {/* Content */}
                  <div className="relative p-6">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${stat.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <stat.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Number Display */}
                    <div className="mb-2">
                      <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                        <AnimatedCounter 
                          end={stat.value} 
                          duration={2} 
                          suffix={stat.suffix}
                          prefix={stat.prefix}
                          isInView={statsInView}
                        />
                      </span>
                    </div>

                    {/* Label */}
                    <h3 className="text-xl font-bold mb-2" style={{color: 'black'}}>
                      {stat.label}
                    </h3>

                    {/* Description */}
                    <p className="text-sm !text-black leading-relaxed max-w-xs mx-auto" style={{textAlign: 'center', color: 'black', display: 'block', width: '100%', margin: '0 auto'}}>
                      {stat.description}
                    </p>

                    {/* Progress Indicator */}
                    <div className="mt-4 mx-auto w-20 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${stat.bgColor} rounded-full`}
                        initial={{ width: 0 }}
                        animate={statsInView ? { width: '100%' } : {}}
                        transition={{ duration: 1.2, delay: index * 0.2 + 0.5 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 max-w-2xl mx-auto text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  Ready to achieve similar results?
                </h3>
                <p className="mb-6 text-white text-center">
                  Join hundreds of businesses that have transformed their growth with our proven strategies.
                </p>
                
                <motion.button
                  className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get Your Free Strategy Session</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </motion.button>
                
                <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-blue-100">
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4" />
                    <span>No commitment required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4" />
                    <span>Results in 30 days</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem-Solution Theater Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Problem Section - Dark Theme */}
          <div className="bg-gradient-to-br from-red-950 via-gray-900 to-black py-16 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(220,38,38,0.2),transparent)]"></div>
            
            <div className="container-custom relative z-10">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full border border-red-500/30 mb-6 mx-auto">
                  <ExclamationTriangleIcon className="w-4 h-4 text-red-400 mr-2" />
                  <span className="text-sm text-red-200 font-medium">
                    The E-commerce Reality Check
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                  Are You Tired of This?
                </h2>
                <div className="flex justify-center">
                  <p className="text-xl text-gray-300 max-w-3xl text-center" style={{ textAlign: 'center', display: 'block', width: '100%' }}>
                    Most e-commerce brands struggle with the same painful problems that keep them stuck...
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    stat: "80%",
                    problem: "E-commerce brands fail to scale profitably",
                    pain: "Burning through ad spend with no results to show",
                    icon: FireIcon
                  },
                  {
                    stat: "60%",
                    problem: "Average CAC increases year-over-year",
                    pain: "Getting more expensive to acquire customers",
                    icon: ChartBarIcon
                  },
                  {
                    stat: "67%",
                    problem: "Website traffic never converts",
                    pain: "Watching potential customers leave without buying",
                    icon: EyeIcon
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 rounded-2xl bg-red-500/10 backdrop-blur-sm border border-red-500/20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <item.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-red-400 mb-3">{item.stat}</div>
                    <div className="text-white font-semibold mb-2">{item.problem}</div>
                    <div className="text-gray-400 text-sm">{item.pain}</div>
                  </motion.div>
                ))}
              </div>

              {/* Pain Points Checklist */}
              <motion.div
                className="mt-16 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-white text-center mb-8">
                  Sound Familiar? You're Not Alone...
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Your ROAS is declining month over month",
                    "You're burning through marketing budgets with no results",
                    "Your conversion rates are stuck in the single digits",
                    "Customer acquisition costs keep rising",
                    "You're losing customers to competitors",
                    "Your marketing feels like throwing money into a black hole"
                  ].map((pain, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-red-500/20"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <XMarkIcon className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-gray-300">{pain}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Solution Section - Bright Theme */}
          <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent)]"></div>
            
            <div className="container-custom relative z-10">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 mb-6 mx-auto">
                  <RocketLaunchIcon className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-green-700 font-medium">
                    The CHLEARX Solution
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-on-light mb-6 text-center">
                  We Turn These Problems Into Profit
                </h2>
                <div className="flex justify-center">
                  <p className="text-xl text-secondary-on-light max-w-3xl text-center" style={{ textAlign: 'center', display: 'block', width: '100%' }}>
                    Our proven 3-phase methodology transforms struggling e-commerce brands into market leaders
                  </p>
                </div>
              </motion.div>

              {/* Before/After Transformation */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    phase: "Phase 1",
                    title: "Strategic Discovery",
                    before: "Scattered marketing efforts",
                    after: "Unified growth strategy",
                    improvement: "+180% efficiency",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    phase: "Phase 2", 
                    title: "Creative Excellence",
                    before: "Generic, low-performing ads",
                    after: "High-converting creative assets",
                    improvement: "+250% CTR",
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    phase: "Phase 3",
                    title: "Growth Acceleration",
                    before: "Stagnant revenue growth",
                    after: "Exponential scaling",
                    improvement: "+350% ROAS",
                    color: "from-green-500 to-emerald-500"
                  }
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    className="relative p-8 rounded-3xl bg-white shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${phase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${phase.color} rounded-full text-white text-sm font-semibold mb-4`}>
                        {phase.phase}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">{phase.title}</h3>
                      
                      {/* Before/After Comparison */}
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center space-x-3">
                          <XMarkIcon className="w-5 h-5 text-red-400" />
                          <span className="text-gray-600 line-through">{phase.before}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircleIcon className="w-5 h-5 text-green-500" />
                          <span className="text-gray-900 font-semibold">{phase.after}</span>
                        </div>
                      </div>
                      
                      <div className={`text-2xl font-bold bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`}>
                        {phase.improvement}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Success Formula */}
              <motion.div
                className="text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-blue-800 mb-8">
                  Our Proven Success Formula
                </h3>
                
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-2xl font-bold">
                  <span className="text-blue-800">
                    Strategic Discovery
                  </span>
                  <span className="text-gray-400">+</span>
                  <span className="text-blue-800">
                    Creative Excellence
                  </span>
                  <span className="text-gray-400">+</span>
                  <span className="text-blue-800">
                    Growth Acceleration
                  </span>
                  <span className="text-gray-400">=</span>
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Results
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section 
          ref={servicesRef}
          className="py-16 bg-light theme-light"
        >
          <div className="container-custom">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-6 mx-auto">
                <WrenchScrewdriverIcon className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm text-blue-700 font-medium">
                  Our Service Arsenal
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-on-light text-center">
                Services That Scale E-commerce
              </h2>
              <div className="flex justify-center">
                <p className="text-xl text-secondary-on-light max-w-3xl text-center leading-relaxed" style={{ textAlign: 'center', display: 'block', width: '100%' }}>
                  Each service is designed with one goal: measurable growth for your e-commerce business.
                </p>
              </div>
            </motion.div>

            {/* Interactive Service Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="group relative p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, rotateY: 5 }}
                >
                  {/* Hover Effect Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Animated Icon */}
                    <div className="relative mb-6">
                      <motion.div
                        className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <service.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      {/* Floating hover icon */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <service.hoverIcon className="w-4 h-4 text-gray-600" />
                      </motion.div>
                    </div>
                    
                    {/* Title and Description */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-lg font-semibold text-gray-700 mb-3">
                      {service.description}
                    </p>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.longDescription}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                        >
                          <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Results Highlight */}
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient} bg-opacity-10 mb-6`}>
                      <div className={`text-lg font-bold text-white`}>
                        {service.results}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">Average improvement</div>
                    </div>
                    
                    {/* Case Study Preview */}
                    <div className="p-4 bg-gray-50 rounded-xl mb-6">
                      <div className="text-sm font-semibold text-gray-700 mb-1">Success Story:</div>
                      <div className="text-sm text-gray-600">{service.caseStudy}</div>
                    </div>
                    
                    {/* CTA Button */}
                    <Link href={
                      service.title === 'Discovery & Strategy' ? '/services/discovery-strategy' :
                      service.title === 'Creative Excellence' ? '/services/creative-excellence' :
                      service.title === 'Growth Acceleration' ? '/services/growth-acceleration' :
                      '/services'
                    }>
                      <motion.button
                        className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105 cursor-pointer`}
                        whileTap={{ scale: 0.95 }}
                      >
                        Explore This Service
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Service Tools */}
            <motion.div
              className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4 text-white text-center">
                  Not Sure Which Service You Need?
                </h3>
                <div className="flex justify-center">
                  <p className="text-white max-w-2xl text-center" style={{ textAlign: 'center', display: 'block', width: '100%' }}>
                    Take our quick assessment to get a personalized service recommendation and ROI projection.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <PuzzlePieceIcon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-white">Service Recommender</h4>
                  <p className="text-white text-sm mb-4">2-minute quiz to find your perfect service match</p>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white border-0"
                    icon={ArrowRightIcon}
                    iconPosition="right"
                  >
                    Take Quiz
                  </Button>
                </div>
                
                <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <ChartBarIcon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-white">ROI Calculator</h4>
                  <p className="text-white text-sm mb-4">See potential returns for each service</p>
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white border-0"
                    icon={ArrowRightIcon}
                    iconPosition="right"
                    onClick={() => setShowROICalculator(true)}
                  >
                    Calculate ROI
                  </Button>
                </div>
                
                <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <PhoneIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-white">Expert Consultation</h4>
                  <p className="text-white text-sm mb-4">Free 30-min strategy call with our team</p>
                  <Button
                    size="sm"
                    className="bg-purple-600 hover:bg-purple-700 text-white border-0"
                    icon={ArrowRightIcon}
                    iconPosition="right"
                  >
                    Book Call
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section 
          ref={testimonialRef}
          className="py-24 bg-gradient-to-r from-gray-900 to-gray-800"
        >
          <div className="container-custom">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{textAlign: 'center', display: 'block', width: '100%', maxWidth: '768px', margin: '0 auto'}}>
                Don't just take our word for it. Here's what our clients say about the results we've delivered.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">{testimonial.name}</div>
                        <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold">{testimonial.results}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container-custom relative z-10">
            <div className="text-center text-white max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
              >
                <HandRaisedIcon className="w-16 h-16 text-white mx-auto mb-8 opacity-80" />
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                  Ready to Join the Winners?
                </h2>
                
                <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed" style={{textAlign: 'center', display: 'block', width: '100%', maxWidth: '768px', margin: '0 auto 3rem auto'}}>
                  Stop leaving money on the table. Get your free marketing audit today and discover exactly how we can 
                  <span className="font-bold text-yellow-300"> triple your revenue</span> in the next 90 days.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 min-w-[300px] font-semibold shadow-2xl"
                    icon={ArrowRightIcon}
                    iconPosition="right"
                    onClick={() => setIsRevenueAuditModalOpen(true)}
                  >
                    Get Your Free $2,500 Audit
                  </Button>
                  
                  <div className="text-center">
                    <div className="text-sm opacity-80">🔥 Limited Time Offer</div>
                    <div className="text-xs opacity-60">Usually $2,500 - Free for 48 hours</div>
                  </div>
                </div>
                
                <div className="mt-12 flex items-center justify-center space-x-8 text-sm opacity-80">
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-400" />
                    <span>No Credit Card Required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-400" />
                    <span>Results in 30 Days</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-400" />
                    <span>Money-Back Guarantee</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        {showROICalculator && (
          <section className="py-24 bg-gray-50">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Calculate Your ROI Potential
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  See exactly how much revenue you could be generating with our proven strategies
                </p>
              </motion.div>
              
              <ROICalculator className="max-w-6xl mx-auto" />
            </div>
          </section>
        )}
      </div>

      {/* Revenue Audit Modal */}
      <RevenueAuditModal 
        isOpen={isRevenueAuditModalOpen}
        onClose={() => setIsRevenueAuditModalOpen(false)}
      />

      {/* Toast Notifications */}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10B981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: '#EF4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </Layout>
  );
}
