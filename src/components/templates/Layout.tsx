'use client';

import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import type { LayoutProps } from '@/types';

interface PageLayoutProps extends LayoutProps {
  showHeader?: boolean;
  showFooter?: boolean;
  headerVariant?: 'default' | 'transparent';
  footerVariant?: 'default' | 'minimal';
}

export function Layout({
  children,
  className,
  maxWidth = 'full',
  showHeader = true,
  showFooter = true,
  headerVariant = 'default',
  footerVariant = 'default',
}: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && <Header />}
      
      <main 
        className={`flex-1 ${showHeader ? 'pt-16 md:pt-20' : ''} ${className || ''}`}
        style={{
          maxWidth: maxWidth === 'full' ? '100%' : undefined,
        }}
      >
        {children}
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
} 