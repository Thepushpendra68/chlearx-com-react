'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { cn } from '@/lib/utils';
import { 
  Bars3Icon, 
  XMarkIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  SparklesIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import type { NavItem } from '@/types';

const navigationItems: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Discovery & Strategy', href: '/services/discovery-strategy' },
      { label: 'Creative Excellence', href: '/services/creative-excellence' },
      { label: 'Growth Acceleration', href: '/services/growth-acceleration' },
    ],
  },
  {
    label: 'Case Studies',
    href: '/case-studies',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

// Clean CSS-in-JS styles to avoid global conflicts
const headerStyles = {
  header: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: 'all 0.3s ease-in-out',
  },
  headerScrolled: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(229, 231, 235, 0.5)',
  },
  headerDefault: {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  },
  headerHidden: {
    transform: 'translateY(-100%)',
  },
  menuItem: {
    color: '#374151',
    fontSize: '14px',
    fontWeight: '500',
    padding: '12px 16px',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    cursor: 'pointer' as const,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  logoText: {
    color: '#1f2937',
    fontSize: '24px',
    fontWeight: '700',
    textDecoration: 'none',
  },
  phoneText: {
    color: '#6b7280',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state
      setIsScrolled(currentScrollY > 20);
      
      // Auto-hide logic
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          // Scrolling down - hide header
          setIsHidden(true);
        } else {
          // Scrolling up - show header
          setIsHidden(false);
        }
      } else {
        // Always show header at top
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const getHeaderStyle = () => ({
    ...headerStyles.header,
    ...(isScrolled ? headerStyles.headerScrolled : headerStyles.headerDefault),
    ...(isHidden ? headerStyles.headerHidden : {}),
  });

  return (
    <motion.header
      style={getHeaderStyle()}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container-custom relative z-10">
        <nav className="flex items-center justify-between h-18 md:h-24">
          {/* Logo */}
          <motion.div
            className="flex items-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div 
                    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/30 group-hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #2563eb, #7c3aed, #ec4899)',
                    }}
                  >
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>C</span>
                  </div>
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #2563eb, #7c3aed, #ec4899)',
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <span style={headerStyles.logoText}>CHLEARX</span>
                  <span 
                    style={{
                      color: '#6b7280',
                      fontSize: '12px',
                      fontWeight: '500',
                      marginTop: '-2px',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                    className="group-hover:opacity-100"
                  >
                    Performance Marketing
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item, index) => (
              <motion.div 
                key={item.label} 
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.children && item.children.length > 0 ? (
                  <motion.button
                    style={headerStyles.menuItem}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group"
                  >
                    <span style={{ position: 'relative', zIndex: 10, transition: 'color 0.3s ease' }}>
                      {item.label}
                    </span>
                    <ChevronDownIcon 
                      style={{ 
                        width: '16px', 
                        height: '16px',
                        position: 'relative',
                        zIndex: 10,
                        transition: 'all 0.3s ease',
                      }}
                      className="group-hover:rotate-180 group-hover:scale-110"
                    />
                    
                    {/* Hover Effect */}
                    <div 
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
                        opacity: 0,
                        transition: 'all 0.3s ease',
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                      }}
                      className="group-hover:opacity-100 group-hover:scale-x-100"
                    />
                    
                    <style jsx>{`
                      .group:hover span {
                        color: white !important;
                      }
                      .group:hover svg {
                        color: white !important;
                      }
                    `}</style>
                  </motion.button>
                ) : (
                  <Link href={item.href} style={{ textDecoration: 'none' }}>
                    <motion.div
                      style={headerStyles.menuItem}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group"
                    >
                      <span style={{ position: 'relative', zIndex: 10, transition: 'color 0.3s ease' }}>
                        {item.label}
                      </span>
                      
                      {/* Hover Effect */}
                      <div 
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
                          opacity: 0,
                          transition: 'all 0.3s ease',
                          transform: 'scaleX(0)',
                          transformOrigin: 'left',
                        }}
                        className="group-hover:opacity-100 group-hover:scale-x-100"
                      />
                      
                      <style jsx>{`
                        .group:hover span {
                          color: white !important;
                        }
                      `}</style>
                    </motion.div>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && item.children.length > 0 && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          marginTop: '8px',
                          width: '288px',
                          background: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(12px)',
                          WebkitBackdropFilter: 'blur(12px)',
                          borderRadius: '16px',
                          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                          border: '1px solid rgba(229, 231, 235, 0.5)',
                          padding: '12px',
                          overflow: 'hidden',
                        }}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.children.map((child, childIndex) => (
                          <motion.a
                            key={child.label}
                            href={child.href}
                            style={{
                              display: 'block',
                              padding: '16px 24px',
                              fontSize: '14px',
                              color: '#374151',
                              textDecoration: 'none',
                              borderRadius: '8px',
                              margin: '4px 8px',
                              position: 'relative',
                              overflow: 'hidden',
                              transition: 'all 0.3s ease',
                            }}
                            className="group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: childIndex * 0.05 }}
                            whileHover={{ x: 4 }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 10 }}>
                              <span style={{ fontWeight: '500' }}>{child.label}</span>
                              <ArrowRightIcon 
                                style={{ 
                                  width: '16px', 
                                  height: '16px',
                                  opacity: 0,
                                  transform: 'translateX(-10px)',
                                  transition: 'all 0.3s ease',
                                }}
                                className="group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-110"
                              />
                            </div>
                            
                            {/* Hover background */}
                            <div 
                              style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)',
                                opacity: 0,
                                transition: 'all 0.3s ease',
                                transform: 'scaleX(0)',
                                transformOrigin: 'left',
                              }}
                              className="group-hover:opacity-100 group-hover:scale-x-100"
                            />
                            
                            {/* Left border accent */}
                            <div 
                              style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                background: 'linear-gradient(to bottom, #6366f1, #8b5cf6)',
                                opacity: 0,
                                transform: 'scaleY(0)',
                                transition: 'all 0.3s ease',
                              }}
                              className="group-hover:opacity-100 group-hover:scale-y-100"
                            />
                            
                            <style jsx>{`
                              .group:hover span {
                                color: white !important;
                              }
                              .group:hover svg {
                                color: white !important;
                              }
                            `}</style>
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="tel:+1234567890"
              style={{
                ...headerStyles.phoneText,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              className="group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PhoneIcon style={{ width: '16px', height: '16px', transition: 'all 0.3s ease' }} />
              <span>(123) 456-7890</span>
              
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  opacity: 0,
                  transition: 'all 0.3s ease',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                }}
                className="group-hover:opacity-100 group-hover:scale-x-100"
              />
              
              <style jsx>{`
                .group:hover {
                  color: #10b981 !important;
                }
                .group:hover span {
                  color: #10b981 !important;
                }
                .group:hover svg {
                  color: #10b981 !important;
                  transform: scale(1.1);
                }
              `}</style>
            </motion.a>
            
            <Link href="/audit">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button 
                  size="md" 
                  icon={RocketLaunchIcon} 
                  iconPosition="right"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 px-6 py-3"
                >
                  Get Free Audit
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            style={{
              color: '#374151',
              padding: '12px',
              borderRadius: '12px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            className="lg:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon style={{ width: '24px', height: '24px' }} />
              ) : (
                <Bars3Icon style={{ width: '24px', height: '24px' }} />
              )}
            </motion.div>
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderBottom: '1px solid rgba(229, 231, 235, 0.5)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="container-custom py-6">
              <div className="space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px',
                        borderRadius: '12px',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                      className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                    >
                      <a
                        href={item.href}
                        style={{
                          color: '#1f2937',
                          fontSize: '18px',
                          fontWeight: '600',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease',
                          position: 'relative',
                          zIndex: 10,
                        }}
                        onClick={() => !(item.children && item.children.length > 0) && setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                      
                      {item.children && item.children.length > 0 && (
                        <button
                          style={{
                            padding: '8px',
                            borderRadius: '8px',
                            border: 'none',
                            background: 'transparent',
                            cursor: 'pointer',
                          }}
                          onClick={() => handleDropdownToggle(item.label)}
                        >
                          <ChevronDownIcon 
                            style={{
                              width: '20px',
                              height: '20px',
                              color: '#6b7280',
                              transition: 'transform 0.3s ease',
                              transform: activeDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                            }}
                          />
                        </button>
                      )}
                      
                      {/* Left border accent */}
                      <div 
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: '4px',
                          background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6)',
                          opacity: 0,
                          transform: 'scaleY(0)',
                          transition: 'all 0.3s ease',
                        }}
                        className="group-hover:opacity-100 group-hover:scale-y-100"
                      />
                    </div>
                    
                    {/* Mobile Dropdown */}
                    {item.children && item.children.length > 0 && (
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            style={{
                              marginLeft: '24px',
                              marginTop: '8px',
                              background: 'rgba(255, 255, 255, 0.5)',
                              borderRadius: '12px',
                              padding: '12px',
                            }}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.children.map((child, childIndex) => (
                              <motion.a
                                key={child.label}
                                href={child.href}
                                style={{
                                  display: 'block',
                                  padding: '12px 16px',
                                  fontSize: '14px',
                                  fontWeight: '500',
                                  color: '#374151',
                                  textDecoration: 'none',
                                  borderRadius: '8px',
                                  transition: 'all 0.3s ease',
                                }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: childIndex * 0.05 }}
                              >
                                {child.label}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <motion.div 
                style={{
                  marginTop: '32px',
                  paddingTop: '24px',
                  borderTop: '1px solid #e5e7eb',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
                  <a
                    href="tel:+1234567890"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#374151',
                      textDecoration: 'none',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    className="group"
                  >
                    <PhoneIcon style={{ width: '20px', height: '20px', transition: 'all 0.3s ease' }} />
                    <span>(123) 456-7890</span>
                    
                    <div 
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '4px',
                        background: 'linear-gradient(to bottom, #10b981, #059669)',
                        opacity: 0,
                        transform: 'scaleY(0)',
                        transition: 'all 0.3s ease',
                      }}
                      className="group-hover:opacity-100 group-hover:scale-y-100"
                    />
                  </a>
                  
                  <a
                    href="mailto:info@chlearx.com"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#374151',
                      textDecoration: 'none',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    className="group"
                  >
                    <EnvelopeIcon style={{ width: '20px', height: '20px', transition: 'all 0.3s ease' }} />
                    <span>info@chlearx.com</span>
                    
                    <div 
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '4px',
                        background: 'linear-gradient(to bottom, #3b82f6, #6366f1)',
                        opacity: 0,
                        transform: 'scaleY(0)',
                        transition: 'all 0.3s ease',
                      }}
                      className="group-hover:opacity-100 group-hover:scale-y-100"
                    />
                  </a>
                </div>
                
                <Link href="/audit">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl font-semibold py-4" 
                    icon={RocketLaunchIcon} 
                    iconPosition="right"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Your Free Growth Audit
                  </Button>
                </Link>
                
                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', fontSize: '12px', color: '#9ca3af' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <SparklesIcon style={{ width: '12px', height: '12px' }} />
                    <span>No Credit Card</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <RocketLaunchIcon style={{ width: '12px', height: '12px' }} />
                    <span>Results in 30 Days</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 