'use client';

import React, { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { CardProps } from '@/types';

interface MotionCardProps extends Omit<HTMLMotionProps<'div'>, keyof CardProps>, CardProps {}

const Card = forwardRef<HTMLDivElement, MotionCardProps>(
  (
    {
      className,
      title,
      description,
      image,
      imageAlt,
      href,
      onClick,
      footer,
      variant = 'default',
      padding = 'md',
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = [
      'rounded-xl transition-all duration-200',
      'focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2',
    ];

    const variants = {
      default: [
        'bg-white border border-gray-200',
        'hover:shadow-lg hover:-translate-y-1',
      ],
      elevated: [
        'bg-white shadow-md',
        'hover:shadow-xl hover:-translate-y-1',
      ],
      outlined: [
        'bg-transparent border-2 border-gray-200',
        'hover:border-primary-300 hover:shadow-md',
      ],
      glass: [
        'bg-white/10 backdrop-blur-md border border-white/20',
        'hover:bg-white/20 hover:shadow-lg',
      ],
    };

    const paddingClasses = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
    };

    const classes = cn(
      baseClasses,
      variants[variant],
      paddingClasses[padding],
      (href || onClick) && 'cursor-pointer',
      className
    );

    const cardContent = (
      <>
        {image && (
          <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
            <img
              src={image}
              alt={imageAlt || title || 'Card image'}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        
        {title && (
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {description}
          </p>
        )}
        
        {children}
        
        {footer && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            {footer}
          </div>
        )}
      </>
    );

    const motionProps = {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      transition: { type: 'spring', stiffness: 400, damping: 17 },
    };

    if (href) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...motionProps}
          {...(props as any)}
        >
          {cardContent}
        </motion.a>
      );
    }

    return (
      <motion.div
        ref={ref}
        className={classes}
        onClick={onClick}
        {...((href || onClick) ? motionProps : {})}
        {...props}
      >
        {cardContent}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export { Card };
export type { MotionCardProps as CardProps }; 