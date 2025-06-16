'use client';

import React, { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ButtonProps } from '@/types';

interface MotionButtonProps extends Omit<HTMLMotionProps<'button'>, keyof ButtonProps>, ButtonProps {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, MotionButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      children,
      onClick,
      type = 'button',
      href,
      target,
      icon: Icon,
      iconPosition = 'left',
      asChild = false,
      ...props
    },
    ref
  ) => {
    const baseClasses = [
      'inline-flex items-center justify-center gap-2',
      'font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'relative overflow-hidden',
      'select-none',
      'cursor-pointer',
    ];

    const variants = {
      primary: [
        'bg-primary-600 text-white',
        'hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5',
        'focus:ring-primary-500',
        'active:bg-primary-800 active:translate-y-0',
      ],
      secondary: [
        'bg-secondary-600 text-white',
        'hover:bg-secondary-700 hover:shadow-lg hover:-translate-y-0.5',
        'focus:ring-secondary-500',
        'active:bg-secondary-800 active:translate-y-0',
      ],
      outline: [
        'border-2 border-primary-600 text-primary-600 bg-transparent',
        'hover:bg-primary-600 hover:text-white hover:shadow-md',
        'focus:ring-primary-500',
        'active:bg-primary-700',
      ],
      ghost: [
        'text-gray-700 bg-transparent',
        'hover:bg-gray-100 hover:text-gray-900',
        'focus:ring-gray-500',
        'active:bg-gray-200',
      ],
      danger: [
        'bg-red-600 text-white',
        'hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5',
        'focus:ring-red-500',
        'active:bg-red-800 active:translate-y-0',
      ],
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm rounded-md',
      md: 'px-4 py-2 text-sm rounded-lg',
      lg: 'px-6 py-3 text-base rounded-lg',
      xl: 'px-8 py-4 text-lg rounded-xl',
    };

    const classes = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      loading && 'cursor-wait',
      className
    );

    const buttonContent = (
      <>
        {loading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-inherit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}
        
        <motion.div
          className={cn(
            'flex items-center gap-2',
            loading && 'opacity-0'
          )}
          initial={false}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {Icon && iconPosition === 'left' && (
            <Icon className={cn(
              'flex-shrink-0',
              size === 'sm' && 'w-3 h-3',
              size === 'md' && 'w-4 h-4',
              size === 'lg' && 'w-5 h-5',
              size === 'xl' && 'w-6 h-6'
            )} />
          )}
          
          {children}
          
          {Icon && iconPosition === 'right' && (
            <Icon className={cn(
              'flex-shrink-0',
              size === 'sm' && 'w-3 h-3',
              size === 'md' && 'w-4 h-4',
              size === 'lg' && 'w-5 h-5',
              size === 'xl' && 'w-6 h-6'
            )} />
          )}
        </motion.div>
      </>
    );

    const motionProps = {
      whileHover: disabled || loading ? {} : { scale: 1.02 },
      whileTap: disabled || loading ? {} : { scale: 0.98 },
      transition: { type: 'spring', stiffness: 400, damping: 17 },
    };

    if (href && !disabled && !loading) {
      return (
        <motion.a
          href={href}
          target={target}
          className={classes}
          {...motionProps}
          {...(props as any)}
        >
          {buttonContent}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        onClick={onClick}
        className={classes}
        {...motionProps}
        {...props}
      >
        {buttonContent}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { MotionButtonProps as ButtonProps }; 