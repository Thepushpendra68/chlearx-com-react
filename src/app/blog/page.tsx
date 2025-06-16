'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/templates/Layout';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';
import { ContrastEnhancer } from '@/utils/contrastEnhancer';
import {
  ClockIcon,
  EyeIcon,
  TagIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    image: string;
    role: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  views: number;
  image: string;
  featured: boolean;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock blog posts data
  const allPosts: BlogPost[] = [
    {
      id: '1',
      title: '10 E-commerce Conversion Rate Optimization Strategies That Actually Work',
      excerpt: 'Discover proven CRO techniques that have helped our clients increase conversions by up to 340%. From checkout optimization to personalized product recommendations.',
      content: 'Full article content...',
      author: {
        name: 'Sarah Martinez',
        image: '/api/placeholder/50/50',
        role: 'CRO Specialist'
      },
      category: 'Conversion Optimization',
      tags: ['CRO', 'E-commerce', 'Analytics', 'Testing'],
      publishedAt: '2024-01-15',
      readTime: 8,
      views: 1250,
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: '2',
      title: 'The Complete Guide to Google Ads for E-commerce in 2024',
      excerpt: 'Master Google Ads with our comprehensive guide covering Shopping campaigns, Performance Max, and advanced bidding strategies for maximum ROI.',
      content: 'Full article content...',
      author: {
        name: 'Michael Chen',
        image: '/api/placeholder/50/50',
        role: 'PPC Manager'
      },
      category: 'Paid Advertising',
      tags: ['Google Ads', 'PPC', 'E-commerce', 'ROI'],
      publishedAt: '2024-01-12',
      readTime: 12,
      views: 980,
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: '3',
      title: 'Email Marketing Automation: 7 Workflows That Drive Revenue',
      excerpt: 'Learn how to create email automation workflows that nurture leads, recover abandoned carts, and increase customer lifetime value.',
      content: 'Full article content...',
      author: {
        name: 'Emma Johnson',
        image: '/api/placeholder/50/50',
        role: 'Email Marketing Specialist'
      },
      category: 'Email Marketing',
      tags: ['Email', 'Automation', 'Revenue', 'Workflows'],
      publishedAt: '2024-01-10',
      readTime: 6,
      views: 750,
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: '4',
      title: 'SEO for E-commerce: Technical Optimization Checklist',
      excerpt: 'Essential technical SEO elements every e-commerce site needs to rank higher and drive more organic traffic.',
      content: 'Full article content...',
      author: {
        name: 'David Rodriguez',
        image: '/api/placeholder/50/50',
        role: 'SEO Specialist'
      },
      category: 'SEO',
      tags: ['SEO', 'Technical', 'E-commerce', 'Optimization'],
      publishedAt: '2024-01-08',
      readTime: 10,
      views: 890,
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: '5',
      title: 'Social Media Marketing: Platform-Specific Strategies for 2024',
      excerpt: 'Adapt your social media strategy for each platform with our comprehensive guide to Facebook, Instagram, TikTok, and LinkedIn marketing.',
      content: 'Full article content...',
      author: {
        name: 'Lisa Thompson',
        image: '/api/placeholder/50/50',
        role: 'Social Media Manager'
      },
      category: 'Social Media',
      tags: ['Social Media', 'Strategy', 'Facebook', 'Instagram'],
      publishedAt: '2024-01-05',
      readTime: 9,
      views: 675,
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: '6',
      title: 'Analytics & Attribution: Measuring Marketing ROI Effectively',
      excerpt: 'Set up proper attribution models and tracking to accurately measure the ROI of your marketing campaigns across all channels.',
      content: 'Full article content...',
      author: {
        name: 'Alex Park',
        image: '/api/placeholder/50/50',
        role: 'Analytics Manager'
      },
      category: 'Analytics',
      tags: ['Analytics', 'Attribution', 'ROI', 'Tracking'],
      publishedAt: '2024-01-03',
      readTime: 11,
      views: 920,
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const categories = ['all', 'Conversion Optimization', 'Paid Advertising', 'Email Marketing', 'SEO', 'Social Media', 'Analytics'];

  // Intersection observer for infinite scroll
  const { ref: loadMoreRef, isIntersecting: inView } = useIntersectionObserver({
    threshold: 0.1,
  });

  // Simulate loading posts
  const loadPosts = useCallback(async (pageNum: number) => {
    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const postsPerPage = 3;
    const startIndex = (pageNum - 1) * postsPerPage;
    const newPosts = allPosts.slice(startIndex, startIndex + postsPerPage);
    
    if (pageNum === 1) {
      setPosts(newPosts);
    } else {
      setPosts(prev => [...prev, ...newPosts]);
    }
    
    setHasMore(startIndex + postsPerPage < allPosts.length);
    setLoading(false);
  }, []);

  // Initial load
  useEffect(() => {
    loadPosts(1);
  }, [loadPosts]);

  // Load more when scrolling
  useEffect(() => {
    if (inView && hasMore && !loading) {
      setPage(prev => prev + 1);
      loadPosts(page + 1);
    }
  }, [inView, hasMore, loading, page, loadPosts]);

  // Filter posts
  useEffect(() => {
    let filtered = posts;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    setFilteredPosts(filtered);
  }, [posts, selectedCategory, searchQuery]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Enhanced Hero Section */}
        <section className="pt-20 pb-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-secondary-500/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-t from-primary-500/5 to-transparent"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-24 left-1/4 w-4 h-4 bg-primary-400 rounded-full opacity-60"
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-32 right-1/3 w-3 h-3 bg-secondary-400 rounded-full opacity-50"
              animate={{ 
                y: [0, 20, 0],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="absolute bottom-32 left-1/6 w-5 h-5 bg-emerald-400 rounded-full opacity-40"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
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
                className="inline-flex items-center px-6 py-3 bg-white shadow-lg border border-primary-100 rounded-full text-sm font-bold mb-8 hover:shadow-xl transition-all duration-300"
              >
                <motion.span
                  className="w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span style={ContrastEnhancer.forceDarkContrast}>🚀 Marketing Insights Hub</span>
                <motion.div
                  className="ml-3 px-2 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full text-xs font-bold"
                  animate={{ 
                    boxShadow: [
                      '0 0 0 0 rgba(37, 99, 235, 0.7)',
                      '0 0 0 10px rgba(37, 99, 235, 0)',
                      '0 0 0 0 rgba(37, 99, 235, 0)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  NEW
                </motion.div>
              </motion.div>

              {/* Enhanced Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-8"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span style={ContrastEnhancer.forceDarkContrast}>Expert Marketing</span>
                  <span className="block relative">
                    <span style={ContrastEnhancer.forceDarkContrast}>Insights & </span>
                    <span className="relative inline-block">
                      <span style={ContrastEnhancer.forceDarkContrast}>Strategies</span>
                      <motion.div
                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                    </span>
                  </span>
                </h1>
              </motion.div>

              {/* Enhanced Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-12"
              >
                <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto" style={ContrastEnhancer.centeredDarkDescriptionContrast}>
                  Stay ahead of the curve with <span className="font-semibold text-primary-600">actionable marketing insights</span>, 
                  proven strategies, and industry trends from our team of experts.
                </p>
              </motion.div>

              {/* Enhanced Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">6</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1" style={ContrastEnhancer.forceDarkContrast}>Expert Authors</div>
                    <div className="text-sm" style={ContrastEnhancer.forceDarkDescriptionContrast}>Industry specialists</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">12</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1" style={ContrastEnhancer.forceDarkContrast}>Articles Published</div>
                    <div className="text-sm" style={ContrastEnhancer.forceDarkDescriptionContrast}>Proven strategies</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">5K</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1" style={ContrastEnhancer.forceDarkContrast}>Monthly Readers</div>
                    <div className="text-sm" style={ContrastEnhancer.forceDarkDescriptionContrast}>Growing community</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-12"
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Start Reading Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-primary-200 text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    Subscribe to Newsletter
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                  {/* Search */}
                  <div className="flex-1 w-full lg:w-auto">
                    <div className="relative">
                      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-slate-900 placeholder-slate-500 shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="w-full lg:w-auto">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full lg:w-64 px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-slate-900 shadow-sm"
                    >
                      {categories.map(category => (
                        <option key={category} value={category} className="text-slate-900">
                          {category === 'all' ? 'All Categories' : category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Filter Icon */}
                  <div className="w-full lg:w-auto flex justify-center lg:justify-start">
                    <div className="p-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl shadow-lg">
                      <FunnelIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Results Count */}
                <div className="mt-4 text-sm" style={ContrastEnhancer.forceDarkDescriptionContrast}>
                  Showing {filteredPosts.length} articles
                  {selectedCategory !== 'all' && (
                    <span className="ml-2 px-2 py-1 bg-primary-100 text-primary-800 rounded-md text-xs">
                      {selectedCategory}
                    </span>
                  )}
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="pb-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>
                  <h2 className="text-3xl font-bold" style={ContrastEnhancer.forceDarkContrast}>Featured Articles</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary-200 to-transparent"></div>
                </div>
                <p style={ContrastEnhancer.forceDarkDescriptionContrast}>Our most popular and impactful content</p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg bg-white">
                      <div className="relative h-56 bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                          style={{ backgroundImage: `url(${post.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            ⭐ Featured
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-slate-600 mb-4 font-medium">
                          <span className="flex items-center bg-slate-100 px-2 py-1 rounded-md">
                            <CalendarDaysIcon className="w-4 h-4 mr-1 text-slate-700" />
                            <span className="text-slate-800">{formatDate(post.publishedAt)}</span>
                          </span>
                          <span className="flex items-center bg-slate-100 px-2 py-1 rounded-md">
                            <ClockIcon className="w-4 h-4 mr-1 text-slate-700" />
                            <span className="text-slate-800">{post.readTime} min read</span>
                          </span>
                          <span className="flex items-center bg-slate-100 px-2 py-1 rounded-md">
                            <EyeIcon className="w-4 h-4 mr-1 text-slate-700" />
                            <span className="text-slate-800">{post.views}</span>
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors duration-300 leading-tight" style={ContrastEnhancer.forceDarkContrast}>
                          {post.title}
                        </h3>
                        
                        <p className="mb-6 leading-relaxed" style={ContrastEnhancer.forceDarkDescriptionContrast}>
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div
                              className="w-10 h-10 bg-cover bg-center rounded-full ring-2 ring-primary-100"
                              style={{ backgroundImage: `url(${post.author.image})` }}
                            />
                            <div>
                              <div className="text-sm font-bold" style={ContrastEnhancer.forceDarkContrast}>{post.author.name}</div>
                              <div className="text-xs font-medium" style={ContrastEnhancer.forceDarkDescriptionContrast}>{post.author.role}</div>
                            </div>
                          </div>
                          
                          <Button variant="outline" size="sm" icon={ArrowRightIcon} iconPosition="right" className="hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300">
                            Read More
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            {featuredPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>
                  <h2 className="text-3xl font-bold" style={ContrastEnhancer.forceDarkContrast}>Latest Articles</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary-200 to-transparent"></div>
                </div>
                <p style={ContrastEnhancer.forceDarkDescriptionContrast}>Fresh insights and strategies for your business</p>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {regularPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 group h-full border-0 shadow-md bg-white hover:-translate-y-1">
                      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                          style={{ backgroundImage: `url(${post.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                        <div className="absolute top-3 right-3">
                          <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-2 py-1 rounded-full text-xs font-bold">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col h-full">
                        <div className="flex items-center space-x-3 text-sm text-slate-600 mb-3 font-medium">
                          <span className="flex items-center">
                            <CalendarDaysIcon className="w-4 h-4 mr-1 text-slate-700" />
                            <span className="text-slate-800">{formatDate(post.publishedAt)}</span>
                          </span>
                          <span className="flex items-center">
                            <ClockIcon className="w-4 h-4 mr-1 text-slate-700" />
                            <span className="text-slate-800">{post.readTime} min</span>
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2 leading-tight" style={ContrastEnhancer.forceDarkContrast}>
                          {post.title}
                        </h3>
                        
                        <p className="mb-4 leading-relaxed flex-1 line-clamp-3" style={ContrastEnhancer.forceDarkDescriptionContrast}>
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-full hover:bg-primary-100 transition-colors"
                            >
                              <TagIcon className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center space-x-2">
                            <div
                              className="w-8 h-8 bg-cover bg-center rounded-full ring-2 ring-slate-200"
                              style={{ backgroundImage: `url(${post.author.image})` }}
                            />
                            <div className="text-sm font-bold" style={ContrastEnhancer.forceDarkContrast}>{post.author.name}</div>
                          </div>
                          
                          <Button variant="ghost" size="sm" icon={ArrowRightIcon} iconPosition="right" className="hover:bg-primary-600 hover:text-white transition-all duration-300">
                            Read
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Load More Trigger */}
            {hasMore && (
              <div ref={loadMoreRef} className="flex justify-center mt-12">
                {loading && (
                  <div className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-lg border">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary-600 border-t-transparent"></div>
                    <span style={ContrastEnhancer.forceDarkContrast}>Loading more articles...</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-4" style={ContrastEnhancer.forceHighContrast}>
                Never Miss an Insight
              </h2>
              <p className="mb-8 leading-relaxed" style={ContrastEnhancer.forceDescriptionContrast}>
                Subscribe to our newsletter and get the latest marketing strategies, tips, and industry insights delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border-0 text-slate-900 placeholder-slate-500 shadow-lg focus:ring-2 focus:ring-primary-500/50 outline-none"
                />
                <Button variant="primary" className="bg-primary-600 text-white border-primary-600 hover:bg-primary-700 hover:border-primary-700 font-semibold px-6 py-3 shadow-lg">
                  Subscribe
                </Button>
              </div>
              <p className="mt-4 text-sm" style={ContrastEnhancer.forceLightContrast}>
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 