'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ContrastEnhancer } from '@/utils/contrastEnhancer';
import { Layout } from '@/components/templates/Layout';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { SEOHead } from '@/components/atoms/SEOHead';
import {
  StarIcon,
  ChatBubbleLeftIcon,
  ChartBarIcon,
  ArrowRightIcon,
  PlayIcon,
  UserIcon,
  BuildingOfficeIcon,
  CalendarDaysIcon,
  SparklesIcon,
  TrophyIcon,
  HeartIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      company: 'FashionForward Co.',
      role: 'CEO & Founder',
      industry: 'Fashion E-commerce',
      companySize: '50-100 employees',
      revenue: '$2M - $5M',
      duration: '18 months',
      rating: 5,
      quote: 'CHLEARX transformed our entire marketing approach. Within 6 months, we saw a 312% increase in ROI and our conversion rate doubled. Their data-driven strategies and transparent communication made them feel like an extension of our team.',
      longTestimonial: 'Working with CHLEARX has been a game-changer for our business. When we started, our ROAS was barely 2:1 and we were struggling with cart abandonment rates above 70%. The team conducted a comprehensive audit and immediately identified key issues in our funnel. Their A/B testing methodology is incredibly thorough - they tested everything from our product pages to our email sequences. The results speak for themselves: 312% ROI increase, 45% boost in conversion rate, and a 60% reduction in customer acquisition cost. What I appreciate most is their proactive communication and the way they explain complex data in terms we can understand and act upon.',
      results: [
        { metric: 'ROI Increase', value: '312%', description: 'From 2:1 to 8.2:1 ROAS' },
        { metric: 'Conversion Rate', value: '+45%', description: 'From 1.8% to 2.6%' },
        { metric: 'Cart Abandonment', value: '-35%', description: 'Reduced from 70% to 45%' },
        { metric: 'Revenue Growth', value: '+180%', description: 'Year-over-year increase' }
      ],
      image: '/images/testimonials/sarah-mitchell.jpg',
      companyLogo: '/images/companies/fashionforward.png',
      videoUrl: '/videos/testimonials/sarah-mitchell.mp4',
      category: 'Fashion',
      featured: true,
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      name: 'David Chen',
      company: 'TechGadgets Plus',
      role: 'Marketing Director',
      industry: 'Electronics E-commerce',
      companySize: '100-250 employees',
      revenue: '$5M - $10M',
      duration: '12 months',
      rating: 5,
      quote: 'The team at CHLEARX doesn\'t just run campaigns - they become strategic partners. Their advanced attribution modeling helped us understand our customer journey better than ever before, leading to a 240% revenue increase.',
      longTestimonial: 'Before CHLEARX, we were flying blind with our attribution. We had multiple touchpoints but couldn\'t figure out which channels were actually driving conversions. The team implemented their proprietary attribution model and suddenly everything became clear. We were over-investing in brand awareness channels and under-investing in bottom-funnel activities. They helped us reallocate budget more effectively and introduced new automation sequences that nurture leads through the entire buying process. The transformation has been remarkable - not just in terms of revenue, but in how we think about marketing as a whole.',
      results: [
        { metric: 'Revenue Growth', value: '240%', description: 'Year-over-year increase' },
        { metric: 'Attribution Accuracy', value: '+85%', description: 'Better tracking and insights' },
        { metric: 'Customer LTV', value: '+67%', description: 'Improved retention strategies' },
        { metric: 'Marketing Efficiency', value: '+120%', description: 'Better budget allocation' }
      ],
      image: '/images/testimonials/david-chen.jpg',
      companyLogo: '/images/companies/techgadgets.png',
      videoUrl: '/videos/testimonials/david-chen.mp4',
      category: 'Technology',
      featured: true,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      company: 'GreenLife Organics',
      role: 'Co-Founder',
      industry: 'Health & Wellness',
      companySize: '25-50 employees',
      revenue: '$1M - $2M',
      duration: '24 months',
      rating: 5,
      quote: 'CHLEARX helped us scale from a small startup to a multi-million dollar brand. Their expertise in organic growth and conversion optimization is unmatched. We\'ve maintained profitable growth throughout our partnership.',
      longTestimonial: 'As a health and wellness brand, we needed partners who understood our values and could help us grow sustainably. CHLEARX delivered on both fronts. They optimized our organic search presence while building conversion-focused landing pages that resonate with our health-conscious audience. Their email marketing strategies have been particularly effective - our email revenue now accounts for 35% of total sales. What sets them apart is their long-term thinking and commitment to sustainable growth rather than quick wins.',
      results: [
        { metric: 'Organic Traffic', value: '+450%', description: 'Significant SEO improvements' },
        { metric: 'Email Revenue', value: '35%', description: 'Of total sales from email' },
        { metric: 'Customer Retention', value: '+78%', description: 'Improved loyalty programs' },
        { metric: 'Brand Authority', value: '+200%', description: 'Increased market presence' }
      ],
      image: '/images/testimonials/emma-rodriguez.jpg',
      companyLogo: '/images/companies/greenlife.png',
      category: 'Health & Wellness',
      featured: false,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 4,
      name: 'Michael Torres',
      company: 'FitnessPro Equipment',
      role: 'CEO',
      industry: 'Fitness Equipment',
      companySize: '75-150 employees',
      revenue: '$3M - $5M',
      duration: '15 months',
      rating: 5,
      quote: 'The ROI we\'ve achieved with CHLEARX is incredible. They increased our conversion rate by 65% and helped us expand into new markets successfully. Their strategic approach to scaling paid campaigns is phenomenal.',
      longTestimonial: 'We came to CHLEARX with aggressive growth targets and tight timelines. Not only did they meet our expectations, they exceeded them significantly. Their approach to scaling paid campaigns while maintaining profitability is something we hadn\'t seen before. They introduced us to new advertising platforms and helped us expand internationally. The conversion rate optimization work they did on our product pages resulted in a 65% improvement in conversions. Their team feels like our internal marketing department.',
      results: [
        { metric: 'Conversion Rate', value: '+65%', description: 'Significant funnel optimization' },
        { metric: 'Market Expansion', value: '3 Countries', description: 'Successful international launch' },
        { metric: 'Paid Campaign ROAS', value: '7.2:1', description: 'Highly profitable scaling' },
        { metric: 'Customer Acquisition', value: '+300%', description: 'Dramatic growth in new customers' }
      ],
      image: '/images/testimonials/michael-torres.jpg',
      companyLogo: '/images/companies/fitnesspro.png',
      category: 'Fitness',
      featured: false,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      name: 'Lisa Park',
      company: 'HomeDecor Luxe',
      role: 'Marketing Manager',
      industry: 'Home & Garden',
      companySize: '30-75 employees',
      revenue: '$2M - $3M',
      duration: '20 months',
      rating: 5,
      quote: 'CHLEARX\'s creative approach to our campaigns brought fresh energy to our brand. Our social commerce revenue increased by 280% and our brand awareness reached new heights.',
      longTestimonial: 'Our industry is highly visual and competitive, so we needed a team that understood both the creative and analytical sides of marketing. CHLEARX delivered beautifully. Their creative team developed stunning campaigns that captured our brand essence while their data team ensured every dollar was optimized. The social commerce strategies they implemented transformed our Instagram and Pinterest presence into significant revenue drivers. We\'ve also seen tremendous improvement in our organic reach and brand engagement.',
      results: [
        { metric: 'Social Commerce Revenue', value: '+280%', description: 'Instagram and Pinterest sales' },
        { metric: 'Brand Awareness', value: '+150%', description: 'Increased market recognition' },
        { metric: 'Organic Reach', value: '+190%', description: 'Social media engagement' },
        { metric: 'Creative Performance', value: '+85%', description: 'Ad creative effectiveness' }
      ],
      image: '/images/testimonials/lisa-park.jpg',
      companyLogo: '/images/companies/homedecor.png',
      category: 'Home & Garden',
      featured: false,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 6,
      name: 'James Wilson',
      company: 'AutoParts Direct',
      role: 'Founder',
      industry: 'Automotive',
      companySize: '20-50 employees',
      revenue: '$1M - $2M',
      duration: '14 months',
      rating: 5,
      quote: 'CHLEARX helped us modernize our entire digital presence. Our B2B sales process is now streamlined and efficient, resulting in a 195% increase in qualified leads and much shorter sales cycles.',
      longTestimonial: 'As a B2B automotive parts supplier, our marketing needs were quite different from typical B2C e-commerce. CHLEARX understood this from day one and developed a strategy specifically for our industry and sales process. They redesigned our lead qualification system, implemented marketing automation for our sales team, and created content that speaks directly to automotive professionals. The results have been transformative - our sales team now spends time on qualified prospects instead of chasing cold leads.',
      results: [
        { metric: 'Qualified Leads', value: '+195%', description: 'Higher quality prospects' },
        { metric: 'Sales Cycle Length', value: '-40%', description: 'Faster conversions' },
        { metric: 'B2B Conversion Rate', value: '+120%', description: 'Better lead qualification' },
        { metric: 'Sales Team Efficiency', value: '+160%', description: 'More productive prospecting' }
      ],
      image: '/images/testimonials/james-wilson.jpg',
      companyLogo: '/images/companies/autoparts.png',
      category: 'Automotive',
      featured: false,
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  const categories = ['all', 'Fashion', 'Technology', 'Health & Wellness', 'Fitness', 'Home & Garden', 'Automotive'];

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  const featuredTestimonials = testimonials.filter(t => t.featured);

  const stats = [
    { label: 'Client Satisfaction Rate', value: '98%', icon: HeartIcon },
    { label: 'Average ROI Increase', value: '285%', icon: TrophyIcon },
    { label: 'Long-term Partnerships', value: '92%', icon: CheckCircleIcon },
    { label: 'Industries Served', value: '25+', icon: BuildingOfficeIcon }
  ];

  const TestimonialCard = ({ testimonial, featured = false }: { testimonial: any, featured?: boolean }) => (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group h-full"
    >
      <div className={`p-8 h-full rounded-3xl transition-all duration-500 border ${
        featured 
          ? 'bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 border-blue-200 shadow-xl hover:shadow-2xl' 
          : 'bg-white border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-200'
      }`}>
        {featured && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <StarIconSolid className="w-6 h-6 text-yellow-400" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ⭐ Featured Success Story
            </span>
          </motion.div>
        )}
        
        <div className="flex items-start space-x-4 mb-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className={`w-20 h-20 bg-gradient-to-br ${testimonial.gradient || 'from-blue-500 to-purple-500'} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl`}
          >
            <span className="text-white text-xl font-bold">
              {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
            </span>
          </motion.div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1" style={ContrastEnhancer.forceHighContrast}>
              {testimonial.name}
            </h3>
            <p className="text-blue-600 font-semibold mb-1">{testimonial.role}</p>
            <p className="text-gray-600 text-sm mb-3">{testimonial.company}</p>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                >
                  <StarIconSolid className="w-5 h-5 text-yellow-400" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="relative mb-6"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute -top-2 -left-2">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center"
            >
              <ChatBubbleLeftIcon className="w-4 h-4 text-white" />
            </motion.div>
          </div>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 p-6 rounded-2xl border border-gray-100">
            <p className="italic text-lg leading-relaxed" style={ContrastEnhancer.forceDescriptionContrast}>
              "{testimonial.quote}"
            </p>
          </div>
        </motion.div>

        {testimonial.results && (
          <div className="grid grid-cols-2 gap-4 mb-6">
                         {testimonial.results.slice(0, 2).map((result: any, idx: number) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
                className="text-center p-4 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                  {result.value}
                </div>
                <div className="text-xs font-medium" style={ContrastEnhancer.forceDescriptionContrast}>
                  {result.metric}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between text-sm mb-4" style={ContrastEnhancer.forceDescriptionContrast}>
          <span className="flex items-center">
            <BuildingOfficeIcon className="w-4 h-4 mr-2 text-blue-500" />
            {testimonial.industry}
          </span>
          <span className="flex items-center">
            <CalendarDaysIcon className="w-4 h-4 mr-2 text-blue-500" />
            {testimonial.duration}
          </span>
        </div>

        {featured && (
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedTestimonial(testimonial)}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl"
            >
              Read Full Story
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );

  return (
    <>
      <SEOHead
        title="Client Testimonials - Real Success Stories | CHLEARX"
        description="Read real testimonials from our clients who achieved exceptional growth with CHLEARX. See how our performance-driven marketing strategies delivered results."
        keywords={['client testimonials', 'marketing success stories', 'e-commerce growth results', 'client reviews', 'case studies']}
        type="website"
      />
      <Layout>
        <div className="min-h-screen">
          {/* Enhanced Hero Section */}
          <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
              
              {/* Floating particles */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
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
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <TrophyIcon className="w-5 h-5 text-yellow-400" />
                  </motion.div>
                  <span style={ContrastEnhancer.forceLightContrast} className="font-medium">
                    Success Stories
                  </span>
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 text-xs px-2 py-1 rounded-full font-bold"
                  >
                    98% SATISFACTION
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
                  Client Success
                  <motion.span
                    className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Stories
                  </motion.span>
                  <motion.div
                    className="h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mt-4 mx-auto rounded-full"
                    style={{ width: '250px' }}
                    initial={{ width: 0 }}
                    animate={{ width: '250px' }}
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
                  Real stories from real clients who achieved exceptional growth with our 
                  performance-driven marketing strategies and partnership approach.
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
                          className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-3"
                        >
                          <stat.icon className="w-6 h-6 text-slate-900" />
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
                  <Link href="/audit">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 hover:from-yellow-500 hover:to-orange-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-bold"
                    >
                      Get Your Success Story
                      <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                    >
                      Schedule Consultation
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Enhanced Featured Testimonials */}
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
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-6 py-3 mb-6"
                >
                  <StarIconSolid className="w-5 h-5 text-yellow-600" />
                  <span className="text-yellow-700 font-medium">Featured Success Stories</span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={ContrastEnhancer.forceHighContrast}>
                  Our Most Impactful Partnerships
                </h2>
                <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={ContrastEnhancer.centeredDarkDescriptionContrast}>
                  These extraordinary results showcase what's possible when you partner with 
                  the right team and commit to data-driven growth strategies.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {featuredTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <TestimonialCard testimonial={testimonial} featured={true} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced All Testimonials */}
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
                  <SparklesIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-700 font-medium">All Success Stories</span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={ContrastEnhancer.forceHighContrast}>
                  Client Testimonials by Industry
                </h2>
                <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8" style={ContrastEnhancer.centeredDarkDescriptionContrast}>
                  Browse testimonials by industry to see how we've helped businesses like yours achieve exceptional growth.
                </p>

                {/* Enhanced Category Filter */}
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map(category => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300 shadow-md hover:shadow-lg'
                      }`}
                    >
                      {category === 'all' ? 'All Industries' : category}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                  <TrophyIcon className="w-5 h-5 text-yellow-400" />
                  <span style={ContrastEnhancer.forceLightContrast} className="font-medium">
                    Your Success Awaits
                  </span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={ContrastEnhancer.forceHighContrast}>
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-xl mb-8 leading-relaxed" style={ContrastEnhancer.forceDescriptionContrast}>
                  Join hundreds of successful businesses who trust CHLEARX to drive their growth 
                  and achieve exceptional marketing ROI. Your transformation starts here.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/audit">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="secondary" 
                        size="lg" 
                        className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 hover:from-yellow-500 hover:to-orange-500 shadow-lg hover:shadow-xl font-bold"
                      >
                        Get Free Audit
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/contact">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl"
                      >
                        Schedule Consultation
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        {/* Enhanced Modal for detailed testimonial */}
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-screen overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${selectedTestimonial.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <span className="text-white text-lg font-bold">
                                                 {selectedTestimonial.name.split(' ').map((n: string) => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold" style={ContrastEnhancer.forceHighContrast}>
                        {selectedTestimonial.name}
                      </h3>
                      <p className="text-blue-600 font-semibold">
                        {selectedTestimonial.role}, {selectedTestimonial.company}
                      </p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setSelectedTestimonial(null)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4" style={ContrastEnhancer.forceHighContrast}>
                      Full Success Story
                    </h4>
                    <p className="mb-6 leading-relaxed text-lg" style={ContrastEnhancer.forceDescriptionContrast}>
                      {selectedTestimonial.longTestimonial}
                    </p>
                    
                    <div className="space-y-3 p-6 bg-gray-50 rounded-2xl">
                      <div><strong>Industry:</strong> {selectedTestimonial.industry}</div>
                      <div><strong>Company Size:</strong> {selectedTestimonial.companySize}</div>
                      <div><strong>Revenue Range:</strong> {selectedTestimonial.revenue}</div>
                      <div><strong>Partnership Duration:</strong> {selectedTestimonial.duration}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4" style={ContrastEnhancer.forceHighContrast}>
                      Key Results Achieved
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                                             {selectedTestimonial.results.map((result: any, idx: number) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                            {result.value}
                          </div>
                          <div className="text-sm font-semibold mb-1" style={ContrastEnhancer.forceHighContrast}>
                            {result.metric}
                          </div>
                          <div className="text-xs" style={ContrastEnhancer.forceDescriptionContrast}>
                            {result.description}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </Layout>
    </>
  );
}