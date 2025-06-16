'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { cn } from '@/lib/utils';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

// Validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^\+?[\d\s\-\(\)]+$/, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  website: z.string().url('Please enter a valid website URL').optional().or(z.literal('')),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  budget: z.string().min(1, 'Please select your budget range'),
  projectDescription: z.string().min(20, 'Please provide at least 20 characters describing your project'),
  consent: z.boolean().refine(val => val === true, 'You must agree to our terms to proceed'),
  newsletter: z.boolean().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  className?: string;
  onSuccess?: (data: ContactFormData) => void;
}

const SERVICES = [
  { value: 'discovery-strategy', label: 'Discovery & Strategy' },
  { value: 'creative-excellence', label: 'Creative Excellence' },
  { value: 'growth-acceleration', label: 'Growth Acceleration' },
  { value: 'performance-marketing', label: 'Performance Marketing' },
  { value: 'conversion-optimization', label: 'Conversion Rate Optimization' },
  { value: 'email-marketing', label: 'Email Marketing Automation' },
  { value: 'amazon-optimization', label: 'Amazon Marketplace Optimization' },
  { value: 'other', label: 'Other (Please specify in description)' },
];

const BUDGET_RANGES = [
  { value: '5k-15k', label: '$5,000 - $15,000' },
  { value: '15k-30k', label: '$15,000 - $30,000' },
  { value: '30k-50k', label: '$30,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: '100k+', label: '$100,000+' },
  { value: 'discuss', label: 'Let\'s discuss' },
];

const ContactForm: React.FC<ContactFormProps> = ({ className, onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    defaultValues: {
      services: [],
      consent: false,
      newsletter: false,
    },
  });

  const handleServiceToggle = (serviceValue: string) => {
    const newServices = selectedServices.includes(serviceValue)
      ? selectedServices.filter(s => s !== serviceValue)
      : [...selectedServices, serviceValue];
    
    setSelectedServices(newServices);
    setValue('services', newServices);
  };

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Handle success
      toast.success('Thank you! Your request has been submitted successfully. We\'ll get back to you within 24 hours.');
      onSuccess?.(data);
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className={cn('max-w-4xl mx-auto p-8', className)}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Started Today</h2>
        <p className="text-gray-600">Tell us about your project and we'll get back to you within 24 hours</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="John"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              {...register('firstName')}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              {...register('lastName')}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                placeholder="john@company.com"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                {...register('email')}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <PhoneIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="tel"
                id="phone"
                placeholder="+1 (555) 123-4567"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                {...register('phone')}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BuildingOfficeIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="company"
                placeholder="Your Company"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                {...register('company')}
              />
            </div>
            {errors.company && (
              <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
              Website (Optional)
            </label>
            <input
              type="url"
              id="website"
              placeholder="https://yourcompany.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              {...register('website')}
            />
            {errors.website && (
              <p className="mt-1 text-sm text-red-600">{errors.website.message}</p>
            )}
          </div>
        </div>

        {/* Services */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Services Needed <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {SERVICES.map((service) => (
              <Card
                key={service.value}
                variant={selectedServices.includes(service.value) ? 'default' : 'outlined'}
                className={cn(
                  'p-4 cursor-pointer transition-all duration-200 hover:shadow-md',
                  selectedServices.includes(service.value) && 'ring-2 ring-primary-500 bg-primary-50'
                )}
                onClick={() => handleServiceToggle(service.value)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{service.label}</span>
                  {selectedServices.includes(service.value) && (
                    <CheckCircleIcon className="w-5 h-5 text-primary-600" />
                  )}
                </div>
              </Card>
            ))}
          </div>
          {errors.services && (
            <p className="mt-1 text-sm text-red-600">{errors.services.message}</p>
          )}
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
            Budget Range <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="budget"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              {...register('budget')}
            >
              <option value="">Select your budget range</option>
              {BUDGET_RANGES.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
          {errors.budget && (
            <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
          )}
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-2">
            Project Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="projectDescription"
            rows={4}
            placeholder="Tell us about your project, goals, and any specific requirements..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            {...register('projectDescription')}
          />
          {errors.projectDescription && (
            <p className="mt-1 text-sm text-red-600">{errors.projectDescription.message}</p>
          )}
        </div>

        {/* Consent */}
        <div className="space-y-4">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="consent"
              className="w-4 h-4 text-primary-600 bg-white border-gray-300 rounded focus:ring-primary-500 focus:ring-2 mt-1"
              {...register('consent')}
            />
            <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
              I agree to the terms and conditions and privacy policy <span className="text-red-500">*</span>
            </label>
          </div>
          {errors.consent && (
            <p className="text-sm text-red-600">{errors.consent.message}</p>
          )}
          
          <div className="flex items-start">
            <input
              type="checkbox"
              id="newsletter"
              className="w-4 h-4 text-primary-600 bg-white border-gray-300 rounded focus:ring-primary-500 focus:ring-2 mt-1"
              {...register('newsletter')}
            />
            <label htmlFor="newsletter" className="ml-2 text-sm text-gray-700">
              I'd like to receive marketing updates and newsletters
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            loading={isSubmitting}
            className="w-full"
            icon={PaperAirplaneIcon}
            iconPosition="right"
          >
            {isSubmitting ? 'Submitting...' : 'Send Message'}
          </Button>
          <p className="text-center text-sm text-gray-500 mt-3">
            We'll get back to you within 24 hours
          </p>
        </div>
      </form>
    </Card>
  );
};

export { ContactForm };
export type { ContactFormProps }; 