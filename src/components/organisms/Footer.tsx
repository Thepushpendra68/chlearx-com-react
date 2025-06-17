'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/atoms/Button';
import { cn } from '@/lib/utils';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
// Using placeholder icons for social media (replace with actual icons from react-icons or custom icons)
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
);
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C8.396 0 7.989.016 7.784.048 7.579.081 7.416.126 7.27.186a3.83 3.83 0 00-1.38.895 3.83 3.83 0 00-.895 1.38c-.06.146-.105.309-.138.514C4.845 2.989 4.83 3.396 4.83 7.017v9.966c0 3.621.015 4.028.048 4.233.033.205.078.368.138.514.187.5.475.932.895 1.38.448.42.88.708 1.38.895.146.06.309.105.514.138.205.033.612.048 4.233.048h.085c3.621 0 4.028-.015 4.233-.048.205-.033.368-.078.514-.138.5-.187.932-.475 1.38-.895.42-.448.708-.88.895-1.38.06-.146.105-.309.138-.514.033-.205.048-.612.048-4.233V7.017c0-3.621-.015-4.028-.048-4.233a3.83 3.83 0 00-.138-.514 3.83 3.83 0 00-.895-1.38 3.83 3.83 0 00-1.38-.895 3.83 3.83 0 00-.514-.138C16.045.016 15.638 0 12.017 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);
const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

const footerLinks = {
  services: [
    { label: 'Discovery & Strategy', href: '/services/discovery-strategy' },
    { label: 'Creative Excellence', href: '/services/creative-excellence' },
    { label: 'Growth Acceleration', href: '/services/growth-acceleration' },
    { label: 'All Services', href: '/services' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
  ],
  resources: [
    { label: 'Free Audit', href: '/audit' },
    { label: 'ROI Calculator', href: '/calculator' },
    { label: 'Support Center', href: '/support' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'GDPR Compliance', href: '/gdpr' },
  ],
};

const socialLinks = [
  { 
    name: 'Facebook', 
    href: 'https://facebook.com/chlearx', 
    icon: FacebookIcon,
    color: 'hover:text-blue-600' 
  },
  { 
    name: 'Twitter', 
    href: 'https://twitter.com/chlearx', 
    icon: TwitterIcon,
    color: 'hover:text-blue-400' 
  },
  { 
    name: 'LinkedIn', 
    href: 'https://linkedin.com/company/chlearx', 
    icon: LinkedInIcon,
    color: 'hover:text-blue-700' 
  },
  { 
    name: 'Instagram', 
    href: 'https://instagram.com/chlearx', 
    icon: InstagramIcon,
    color: 'hover:text-pink-600' 
  },
  { 
    name: 'YouTube', 
    href: 'https://youtube.com/chlearx', 
    icon: YouTubeIcon,
    color: 'hover:text-red-600' 
  },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      const data = await response.json();
      
      if (data.success) {
        toast.success('🎉 Successfully subscribed! Welcome to the CHLEARX community.');
        setEmail('');
      } else {
        throw new Error(data.message || 'Subscription failed');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container-custom py-12 lg:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-2xl md:text-3xl font-display font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Stay Ahead of the Competition
            </motion.h2>
            
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <motion.p
                className="text-lg text-white mb-10 max-w-2xl"
                style={{ textAlign: 'center' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Get weekly insights, exclusive strategies, and the latest e-commerce marketing trends 
                delivered straight to your inbox.
              </motion.p>
            </div>

            <motion.form
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6"
              onSubmit={handleNewsletterSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                size="md"
                icon={ArrowRightIcon}
                iconPosition="right"
                className="whitespace-nowrap"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Subscribe Now'}
              </Button>
            </motion.form>

            <motion.p
              className="text-sm text-white mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Join 10,000+ marketers who trust our insights. Unsubscribe anytime.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  CHLEARX
                </span>
              </div>

              <p className="text-white mb-6 max-w-md">
                We're a performance-driven e-commerce marketing agency that helps businesses 
                scale their revenue through data-driven strategies and proven methodologies.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:info@chlearx.com"
                  className="flex items-center space-x-3 text-white hover:text-gray-200 transition-colors duration-200"
                >
                  <EnvelopeIcon className="w-5 h-5 text-primary-400" />
                  <span>info@chlearx.com</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-3 text-white hover:text-gray-200 transition-colors duration-200"
                >
                  <PhoneIcon className="w-5 h-5 text-primary-400" />
                  <span>(123) 456-7890</span>
                </a>
                <div className="flex items-center space-x-3 text-white">
                  <MapPinIcon className="w-5 h-5 text-primary-400" />
                  <span>123 Business Ave, Suite 100<br />New York, NY 10001</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white hover:text-gray-200 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white hover:text-gray-200 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white hover:text-gray-200 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-white text-sm">
                © 2024 CHLEARX. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                {footerLinks.legal.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white hover:text-gray-200 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center',
                    'text-gray-400 transition-all duration-200',
                    social.color,
                    'hover:bg-gray-700 hover:scale-110'
                  )}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
} 