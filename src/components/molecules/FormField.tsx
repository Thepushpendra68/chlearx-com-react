'use client';

import React, { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'textarea' | 'select' | 'checkbox' | 'radio';
  placeholder?: string;
  value?: string | boolean;
  defaultValue?: string | boolean;
  options?: Array<{ label: string; value: string | number; disabled?: boolean }>;
  error?: string;
  touched?: boolean;
  disabled?: boolean;
  required?: boolean;
  description?: string;
  className?: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  icon?: React.ComponentType<{ className?: string }>;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
}

const FormField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  FormFieldProps
>(
  (
    {
      label,
      name,
      type = 'text',
      placeholder,
      value,
      defaultValue,
      options = [],
      error,
      touched = false,
      disabled = false,
      required = false,
      description,
      className,
      rows = 4,
      onChange,
      onBlur,
      onFocus,
      icon: Icon,
      suffix,
      prefix,
      ...props
    },
    ref
  ) => {
    const hasError = error && touched;
    const isValid = touched && !error && value;

    const baseInputClasses = [
      'w-full px-3 py-2 border rounded-lg transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
      'placeholder:text-gray-400',
    ];

    const inputStateClasses = {
      default: [
        'border-gray-300 focus:border-primary-500 focus:ring-primary-500',
        'hover:border-gray-400',
      ],
      error: [
        'border-red-300 focus:border-red-500 focus:ring-red-500',
        'bg-red-50',
      ],
      valid: [
        'border-green-300 focus:border-green-500 focus:ring-green-500',
        'bg-green-50',
      ],
    };

    const getInputClasses = () => {
      let stateClasses = inputStateClasses.default;
      if (hasError) stateClasses = inputStateClasses.error;
      else if (isValid) stateClasses = inputStateClasses.valid;

      return cn(
        baseInputClasses,
        stateClasses,
        (Icon || prefix) && 'pl-10',
        suffix && 'pr-10',
        className
      );
    };

    const renderInput = () => {
      const commonProps = {
        id: name,
        name,
        disabled,
        onChange,
        onBlur,
        onFocus,
        className: getInputClasses(),
        'aria-describedby': description ? `${name}-description` : undefined,
        'aria-invalid': hasError ? ('true' as const) : ('false' as const),
        ...props,
      };

      switch (type) {
        case 'textarea':
          return (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              placeholder={placeholder}
              value={value as string}
              defaultValue={defaultValue as string}
              rows={rows}
              {...commonProps}
            />
          );

        case 'select':
          return (
            <select
              ref={ref as React.Ref<HTMLSelectElement>}
              value={value as string}
              defaultValue={defaultValue as string}
              {...commonProps}
            >
              {placeholder && (
                <option value="" disabled>
                  {placeholder}
                </option>
              )}
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </option>
              ))}
            </select>
          );

        case 'checkbox':
          return (
            <div className="flex items-center">
                             <input
                 ref={ref as React.Ref<HTMLInputElement>}
                 type="checkbox"
                 checked={value as boolean}
                 defaultChecked={defaultValue as boolean}
                 {...commonProps}
                 className="w-4 h-4 text-primary-600 bg-white border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
               />
              <label htmlFor={name} className="ml-2 text-sm text-gray-700 cursor-pointer">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
              </label>
            </div>
          );

        case 'radio':
          return (
            <div className="space-y-2">
              {options.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    ref={ref as React.Ref<HTMLInputElement>}
                    type="radio"
                    name={name}
                    value={option.value}
                    checked={value === option.value}
                    disabled={disabled || option.disabled}
                    onChange={onChange}
                    className="w-4 h-4 text-primary-600 bg-white border-gray-300 focus:ring-primary-500 focus:ring-2"
                    {...props}
                  />
                  <label className="ml-2 text-sm text-gray-700 cursor-pointer">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          );

        default:
          return (
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              type={type}
              placeholder={placeholder}
              value={value as string}
              defaultValue={defaultValue as string}
              {...commonProps}
            />
          );
      }
    };

    if (type === 'checkbox') {
      return (
        <div className={cn('space-y-1', className)}>
          {renderInput()}
          {description && (
            <p id={`${name}-description`} className="text-sm text-gray-500">
              {description}
            </p>
          )}
          <AnimatePresence>
            {hasError && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-red-600 flex items-center"
              >
                <ExclamationCircleIcon className="w-4 h-4 mr-1" />
                {error}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <div className={cn('space-y-1', className)}>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>

        <div className="relative">
          {(Icon || prefix) && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {Icon && <Icon className="w-5 h-5 text-gray-400" />}
              {prefix}
            </div>
          )}

          {renderInput()}

          {suffix && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {suffix}
            </div>
          )}

          {/* Status Icons */}
          {(hasError || isValid) && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              {hasError && (
                <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
              )}
              {isValid && (
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
              )}
            </div>
          )}
        </div>

        {description && (
          <p id={`${name}-description`} className="text-sm text-gray-500">
            {description}
          </p>
        )}

        <AnimatePresence>
          {hasError && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-sm text-red-600 flex items-center"
            >
              <ExclamationCircleIcon className="w-4 h-4 mr-1" />
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

FormField.displayName = 'FormField';

export { FormField };
export type { FormFieldProps }; 