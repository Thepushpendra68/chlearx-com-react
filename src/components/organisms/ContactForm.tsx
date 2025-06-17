'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  BuildingOfficeIcon,
  PaperAirplaneIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

// Simplified validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^\+?[\d\s\-\(\)]+$/, 'Please enter a valid phone number').optional().or(z.literal('')),
  company: z.string().min(2, 'Company name must be at least 2 characters').optional().or(z.literal('')),
  message: z.string().min(10, 'Please provide at least 10 characters describing your inquiry'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  className?: string;
  onSuccess?: (data: ContactFormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ className, onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
        reset();
        onSuccess?.(data);
      } else {
        throw new Error('Failed to send message');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 border-0 shadow-2xl">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
            <SparklesIcon className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
            Send us a message
          </h2>
        </div>
        <p className="text-slate-600 text-lg leading-relaxed">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-3">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative group">
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 shadow-sm group-hover:shadow-md text-slate-900 placeholder-slate-400"
              {...register('name')}
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          {errors.name && (
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mt-2 text-sm text-red-600 flex items-center"
            >
              <div className="w-1 h-1 bg-red-500 rounded-full mr-2"></div>
              {errors.name.message}
            </motion.p>
          )}
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
              <EnvelopeIcon className="h-5 w-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
            </div>
            <input
              type="email"
              id="email"
              placeholder="john@company.com"
              className="w-full pl-12 pr-5 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 shadow-sm group-hover:shadow-md text-slate-900 placeholder-slate-400"
              {...register('email')}
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          {errors.email && (
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mt-2 text-sm text-red-600 flex items-center"
            >
              <div className="w-1 h-1 bg-red-500 rounded-full mr-2"></div>
              {errors.email.message}
            </motion.p>
          )}
        </motion.div>

        {/* Phone and Company Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-3">
              Phone Number
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <PhoneIcon className="h-5 w-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <input
                type="tel"
                id="phone"
                placeholder="+1 (555) 123-4567"
                className="w-full pl-12 pr-5 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 shadow-sm group-hover:shadow-md text-slate-900 placeholder-slate-400"
                {...register('phone')}
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            {errors.phone && (
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="mt-2 text-sm text-red-600 flex items-center"
              >
                <div className="w-1 h-1 bg-red-500 rounded-full mr-2"></div>
                {errors.phone.message}
              </motion.p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-3">
              Company
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <BuildingOfficeIcon className="h-5 w-5 text-slate-400 group-hover:text-purple-500 transition-colors" />
              </div>
              <input
                type="text"
                id="company"
                placeholder="Your Company"
                className="w-full pl-12 pr-5 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 shadow-sm group-hover:shadow-md text-slate-900 placeholder-slate-400"
                {...register('company')}
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            {errors.company && (
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="mt-2 text-sm text-red-600 flex items-center"
              >
                <div className="w-1 h-1 bg-red-500 rounded-full mr-2"></div>
                {errors.company.message}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-3">
            Message <span className="text-red-500">*</span>
          </label>
          <div className="relative group">
            <textarea
              id="message"
              rows={6}
              placeholder="Tell us about your project or ask us a question..."
              className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 shadow-sm group-hover:shadow-md resize-vertical text-slate-900 placeholder-slate-400"
              {...register('message')}
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          {errors.message && (
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mt-2 text-sm text-red-600 flex items-center"
            >
              <div className="w-1 h-1 bg-red-500 rounded-full mr-2"></div>
              {errors.message.message}
            </motion.p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.div 
          className="pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            loading={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 py-4 text-lg font-semibold"
            icon={PaperAirplaneIcon}
            iconPosition="right"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          <div className="mt-4 text-center">
            <p className="text-sm text-slate-500 flex items-center justify-center">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
              We'll get back to you within 24 hours
            </p>
          </div>
        </motion.div>
      </form>
    </Card>
  );
};

export { ContactForm };
export type { ContactFormProps }; 