'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { Layout } from '@/components/templates/Layout';
import { Button } from '@/components/atoms/Button';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { RevenueAuditModal } from '@/components/organisms/RevenueAuditModal';
import toast, { Toaster } from 'react-hot-toast';
import { 
  ArrowRightIcon, 
  CheckCircleIcon,
  StarIcon,
  TrophyIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import '../styles/pages/homepage.css';

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

export default function HomePage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  // Intersection observers for animations
  const { ref: statsRef, isIntersecting: statsInView } = useIntersectionObserver({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Layout>
      <main className="homepage">
        {/* Hero Section */}
        <section className="homepage-hero">
          <div className="hero-background-pattern"></div>
          <div className="hero-content">
            <motion.h1 
              className="hero-headline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Scale Your E-commerce Revenue with Performance-Driven Marketing
            </motion.h1>
            
            <motion.p 
              className="hero-subheadline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We've helped 200+ e-commerce brands achieve 350% ROAS increase and 64% lower CAC through data-driven strategies that actually work.
            </motion.p>
            
            <motion.div 
              className="hero-cta-group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button
                onClick={() => setIsAuditModalOpen(true)}
                className="hero-cta-primary"
              >
                Get Your Free Revenue Audit
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              
              <div className="hero-trust-indicators">
                <div className="trust-indicator">
                  <CheckCircleIcon className="w-4 h-4" />
                  <span>Free 30-min consultation</span>
                </div>
                <div className="trust-indicator">
                  <StarIcon className="w-4 h-4" />
                  <span>4.9/5 client rating</span>
                </div>
                <div className="trust-indicator">
                  <TrophyIcon className="w-4 h-4" />
                  <span>97% client retention</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="homepage-services">
          <div className="services-container">
            <div className="services-header">
              <h2 className="services-title">Our E-commerce Marketing Services</h2>
              <p className="services-subtitle">
                Comprehensive solutions designed specifically for e-commerce brands ready to scale
              </p>
            </div>
            
            <div className="services-grid">
              <motion.div 
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">
                  <ChartBarIcon className="w-8 h-8" />
                </div>
                <h3 className="service-title">Discovery & Strategy</h3>
                <p className="service-description">
                  Market analysis, competitor research, and data-driven strategy development for sustainable growth.
                </p>
                <Link href="/services/discovery-strategy" className="service-cta">
                  Learn More <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </motion.div>
              
              <motion.div 
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">
                  <RocketLaunchIcon className="w-8 h-8" />
                </div>
                <h3 className="service-title">Creative Excellence</h3>
                <p className="service-description">
                  High-converting ad creatives, brand development, and content that drives engagement and sales.
                </p>
                <Link href="/services/creative-excellence" className="service-cta">
                  Learn More <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </motion.div>
              
              <motion.div 
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">
                  <ShoppingBagIcon className="w-8 h-8" />
                </div>
                <h3 className="service-title">Growth Acceleration</h3>
                <p className="service-description">
                  Performance marketing, conversion optimization, and scaling strategies that maximize ROI.
                </p>
                <Link href="/services/growth-acceleration" className="service-cta">
                  Learn More <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="homepage-case-studies">
          <div className="case-studies-container">
            <div className="case-studies-header">
              <h2 className="case-studies-title">Proven Results for E-commerce Brands</h2>
            </div>
            
            <motion.div 
              className="case-study-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="case-study-title">D2C Beauty Brand: ₹1.2Cr Revenue Transformation</h3>
              <p className="case-study-description">
                Achieved 350% ROAS increase and 64% lower CAC through strategic campaign optimization and audience targeting. Complete transformation from struggling startup to market leader in just 6 months.
              </p>
              <Link href="/case-studies" className="case-study-cta">
                View Full Case Study <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div 
              className="case-study-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="case-study-title">Fashion E-commerce: 5X Revenue Growth</h3>
              <p className="case-study-description">
                Scaled monthly revenue from ₹8L to ₹40L in 8 months through multi-channel marketing strategy and conversion rate optimization. 400% improvement in customer lifetime value.
              </p>
              <Link href="/case-studies" className="case-study-cta">
                View Full Case Study <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="homepage-social-proof" ref={statsRef}>
          <div className="social-proof-pattern"></div>
          <div className="social-proof-content">
            <div className="social-proof-stats">
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="stat-number">
                  <AnimatedCounter 
                    end={100} 
                    suffix="M+" 
                    prefix="₹" 
                    isInView={statsInView}
                    duration={2.5}
                  />
                </span>
                <span className="stat-label">Revenue Generated</span>
              </motion.div>
              
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span className="stat-number">
                  <AnimatedCounter 
                    end={350} 
                    suffix="%" 
                    isInView={statsInView}
                    duration={2.5}
                  />
                </span>
                <span className="stat-label">Average ROAS</span>
              </motion.div>
              
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="stat-number">
                  <AnimatedCounter 
                    end={200} 
                    suffix="+" 
                    isInView={statsInView}
                    duration={2.5}
                  />
                </span>
                <span className="stat-label">Happy Clients</span>
              </motion.div>
              
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="stat-number">
                  <AnimatedCounter 
                    end={97} 
                    suffix="%" 
                    isInView={statsInView}
                    duration={2.5}
                  />
                </span>
                <span className="stat-label">Client Retention</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="homepage-cta">
          <div className="cta-background-elements"></div>
          <div className="cta-content">
            <motion.h2 
              className="cta-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Scale Your E-commerce Revenue?
            </motion.h2>
            <motion.p 
              className="cta-description"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Join 200+ successful e-commerce brands who trust CHLEARX for their growth marketing needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/contact" className="cta-button">
                Start Your Growth Journey
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Modals */}
        <RevenueAuditModal
          isOpen={isAuditModalOpen}
          onClose={() => setIsAuditModalOpen(false)}
        />
      </main>
      
      <Toaster />
    </Layout>
  );
}
