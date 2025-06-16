'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { revenueAuditSchema, type RevenueAuditFormData } from '@/lib/validationSchemas';
import { Button } from '@/components/atoms/Button';
import { 
  XMarkIcon, 
  CheckCircleIcon, 
  ExclamationTriangleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  DocumentCheckIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarDaysIcon,
  SparklesIcon,
  TrophyIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

interface RevenueAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const REVENUE_RANGES = [
  '₹0 - ₹5L per month',
  '₹5L - ₹20L per month',
  '₹20L - ₹50L per month',
  '₹50L - ₹1Cr per month',
  '₹1Cr+ per month'
];

const CHALLENGES = [
  'Low conversion rates',
  'High customer acquisition costs',
  'Poor ROAS on ad spend',
  'Difficulty scaling campaigns',
  'Lack of marketing strategy',
  'Poor website performance',
  'Low customer retention',
  'Intense competition',
  'Limited marketing budget',
  'Tracking and analytics issues'
];

const TIMELINES = [
  'ASAP - Need help immediately',
  '1-2 weeks',
  '1 month',
  '2-3 months',
  'Flexible timeline'
];

const BUDGETS = [
  '₹50K - ₹2L per month',
  '₹2L - ₹5L per month',
  '₹5L - ₹10L per month',
  '₹10L+ per month',
  'Need recommendations'
];

export function RevenueAuditModal({ isOpen, onClose }: RevenueAuditModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState<any>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    trigger,
    reset
  } = useForm<RevenueAuditFormData>({
    resolver: yupResolver(revenueAuditSchema),
    mode: 'onChange',
    defaultValues: {
      primaryChallenges: [],
      previousExperience: ''
    }
  });

  const watchedValues = watch();
  const totalSteps = 4;

  const onSubmit = async (data: RevenueAuditFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/revenue-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmissionData(result.data);
        setIsSubmitted(true);
        setShowConfetti(true);
        
        // Hide confetti after 3 seconds
        setTimeout(() => setShowConfetti(false), 3000);
        
        toast.success('Audit request submitted successfully!');
      } else {
        toast.error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isStepValid = await trigger(fieldsToValidate);
    
    if (isStepValid) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    } else {
      toast.error('Please fill in all required fields');
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const getFieldsForStep = (step: number) => {
    switch (step) {
      case 1:
        return ['businessName', 'websiteUrl', 'contactEmail'] as const;
      case 2:
        return ['monthlyRevenue', 'primaryChallenges'] as const;
      case 3:
        return ['currentGoals', 'timeline'] as const;
      case 4:
        return ['budget'] as const;
      default:
        return [] as const;
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      reset();
      setCurrentStep(1);
      setIsSubmitted(false);
      setSubmissionData(null);
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-xl z-50 flex items-center justify-center p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
      >
        <motion.div
          className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-lg lg:max-w-2xl overflow-hidden relative border border-white/20"
          style={{ 
            maxHeight: 'calc(100vh - 2rem)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'
          }}
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
          onClick={e => e.stopPropagation()}
        >
          {/* iOS-Style Header */}
          <div className="relative bg-gradient-to-br from-blue-600/95 via-purple-600/95 to-indigo-700/95 backdrop-blur-xl text-white px-6 py-5 border-b border-white/10">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-12 h-12 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20"
                >
                  <DocumentCheckIcon className="w-7 h-7" />
                </motion.div>
                <div>
                  <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl sm:text-3xl font-bold tracking-tight"
                  >
                    Free Revenue Audit
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-blue-100/90 text-sm font-medium"
                  >
                    {isSubmitted ? 'Request Submitted!' : `Step ${currentStep} of ${totalSteps}`}
                  </motion.p>
                </div>
              </div>
              
              {!isSubmitted && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5 }}
                  className="w-full bg-white/20 rounded-full h-1.5 overflow-hidden backdrop-blur-sm"
                >
                  <motion.div
                    className="bg-gradient-to-r from-white to-blue-200 rounded-full h-full"
                    initial={{ width: '25%' }}
                    animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </motion.div>
              )}
              
              {/* Value proposition */}
              {!isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-3 inline-flex items-center space-x-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-300/30 rounded-full px-3 py-1 text-xs font-medium"
                >
                  <SparklesIcon className="w-4 h-4 text-yellow-200" />
                  <span className="text-yellow-100">Worth ₹25,000 - Absolutely Free</span>
                </motion.div>
              )}
            </div>
          </div>

          {/* Content Area with fixed height and proper scrolling */}
          <div className="flex flex-col" style={{ height: 'calc(100vh - 14rem)', maxHeight: '500px' }}>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl flex items-center justify-center mx-auto relative border border-green-100"
                  >
                    <CheckCircleIcon className="w-10 h-10 text-green-600" />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.3, 1] }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="absolute inset-0 bg-green-400/10 rounded-3xl"
                    />
                  </motion.div>
                  
                  <div className="space-y-3">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl font-bold text-gray-900"
                    >
                      Request Confirmed! 🎉
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-600 leading-relaxed max-w-md mx-auto"
                    >
                      Our expert team will review your information and prepare a customized audit framework for your business.
                    </motion.p>
                  </div>
                  
                  {submissionData && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-gradient-to-br from-gray-50/80 to-blue-50/50 rounded-2xl p-5 text-left border border-gray-100/50 backdrop-blur-sm"
                    >
                      <div className="flex items-center space-x-2 mb-4">
                        <ChartBarIcon className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-gray-900">What Happens Next:</span>
                      </div>
                      
                      <div className="space-y-3">
                        {submissionData.nextSteps?.map((step: string, index: number) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5 flex-shrink-0">
                              {index + 1}
                            </div>
                            <span className="text-gray-700 text-sm leading-relaxed">{step}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-5 p-4 bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-xl border border-blue-100/50"
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <CalendarDaysIcon className="w-5 h-5 text-blue-600" />
                          <span className="font-semibold text-blue-900 text-sm">Expected Response:</span>
                        </div>
                        <span className="text-blue-700 font-medium text-sm">{submissionData.estimatedResponse}</span>
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {/* Step 1: Business Information */}
                      {currentStep === 1 && (
                        <div className="space-y-6">
                          <div className="text-center mb-6">
                            <motion.h3
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-xl font-bold text-gray-900 mb-2"
                            >
                              Tell Us About Your Business
                            </motion.h3>
                            <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="text-gray-600"
                            >
                              We need some basic information to prepare your personalized audit
                            </motion.p>
                          </div>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-2"
                          >
                            <label className="block text-sm font-semibold text-gray-700">
                              Business Name *
                            </label>
                            <Controller
                              name="businessName"
                              control={control}
                              render={({ field }) => (
                                <input
                                  {...field}
                                  type="text"
                                  className="w-full px-4 py-3.5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-400 bg-gray-50/50"
                                  placeholder="Enter your business name"
                                />
                              )}
                            />
                            {errors.businessName && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-sm text-red-600 flex items-center space-x-1 mt-1"
                              >
                                <ExclamationTriangleIcon className="w-4 h-4" />
                                <span>{errors.businessName.message}</span>
                              </motion.p>
                            )}
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-2"
                          >
                            <label className="block text-sm font-semibold text-gray-700">
                              Website URL *
                            </label>
                            <Controller
                              name="websiteUrl"
                              control={control}
                              render={({ field }) => (
                                <input
                                  {...field}
                                  type="url"
                                  className="w-full px-4 py-3.5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-400 bg-gray-50/50"
                                  placeholder="https://your-website.com"
                                />
                              )}
                            />
                            {errors.websiteUrl && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-sm text-red-600 flex items-center space-x-1 mt-1"
                              >
                                <ExclamationTriangleIcon className="w-4 h-4" />
                                <span>{errors.websiteUrl.message}</span>
                              </motion.p>
                            )}
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-2"
                          >
                            <label className="block text-sm font-semibold text-gray-700">
                              Email Address *
                            </label>
                            <Controller
                              name="contactEmail"
                              control={control}
                              render={({ field }) => (
                                <input
                                  {...field}
                                  type="email"
                                  className="w-full px-4 py-3.5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-400 bg-gray-50/50"
                                  placeholder="your@email.com"
                                />
                              )}
                            />
                            {errors.contactEmail && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-sm text-red-600 flex items-center space-x-1 mt-1"
                              >
                                <ExclamationTriangleIcon className="w-4 h-4" />
                                <span>{errors.contactEmail.message}</span>
                              </motion.p>
                            )}
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="space-y-2"
                          >
                            <label className="block text-sm font-semibold text-gray-700">
                              Phone Number (Optional)
                            </label>
                            <Controller
                              name="phoneNumber"
                              control={control}
                              render={({ field }) => (
                                <input
                                  {...field}
                                  type="tel"
                                  className="w-full px-4 py-3.5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-400 bg-gray-50/50"
                                  placeholder="+91 9876543210"
                                />
                              )}
                            />
                            {errors.phoneNumber && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-sm text-red-600 flex items-center space-x-1 mt-1"
                              >
                                <ExclamationTriangleIcon className="w-4 h-4" />
                                <span>{errors.phoneNumber.message}</span>
                              </motion.p>
                            )}
                          </motion.div>
                        </div>
                      )}

                      {/* Step 2: Current Performance */}
                      {currentStep === 2 && (
                        <div className="space-y-6">
                          <div className="text-center mb-6">
                            <motion.h3
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-xl font-bold text-gray-900 mb-2"
                            >
                              Current Performance
                            </motion.h3>
                            <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="text-gray-600"
                            >
                              Help us understand your current business metrics and challenges
                            </motion.p>
                          </div>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-2"
                          >
                            <label className="block text-sm font-semibold text-gray-700">
                              Monthly Revenue Range *
                            </label>
                            <Controller
                              name="monthlyRevenue"
                              control={control}
                              render={({ field }) => (
                                <select
                                  {...field}
                                  className="w-full px-4 py-3.5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 bg-gray-50/50"
                                >
                                  <option value="">Select revenue range</option>
                                  {REVENUE_RANGES.map(range => (
                                    <option key={range} value={range}>{range}</option>
                                  ))}
                                </select>
                              )}
                            />
                            {errors.monthlyRevenue && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-sm text-red-600 flex items-center space-x-1 mt-1"
                              >
                                <ExclamationTriangleIcon className="w-4 h-4" />
                                <span>{errors.monthlyRevenue.message}</span>
                              </motion.p>
                            )}
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-3"
                          >
                            <label className="block text-sm font-semibold text-gray-700">
                              Primary Challenges * (Select all that apply)
                            </label>
                            <Controller
                              name="primaryChallenges"
                              control={control}
                              render={({ field: { value, onChange } }) => (
                                <div className="grid grid-cols-1 gap-2.5 max-h-48 overflow-y-auto pr-2">
                                  {CHALLENGES.map((challenge, index) => (
                                    <motion.label
                                      key={challenge}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 0.4 + index * 0.03 }}
                                      className="flex items-center space-x-3 p-3 border border-gray-200 rounded-xl hover:bg-blue-50/50 cursor-pointer transition-all duration-200 hover:border-blue-300 group bg-gray-50/30"
                                    >
                                      <input
                                        type="checkbox"
                                        checked={value?.includes(challenge) || false}
                                        onChange={(e) => {
                                          const newValue = value || [];
                                          if (e.target.checked) {
                                            onChange([...newValue, challenge]);
                                          } else {
                                            onChange(newValue.filter((v: string | undefined) => v !== challenge));
                                          }
                                        }}
                                        className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500/20 border-gray-300"
                                      />
                                      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{challenge}</span>
                                    </motion.label>
                                  ))}
                                </div>
                              )}
                            />
                            {errors.primaryChallenges && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-sm text-red-600 flex items-center space-x-1 mt-2"
                              >
                                <ExclamationTriangleIcon className="w-4 h-4" />
                                <span>{errors.primaryChallenges.message}</span>
                              </motion.p>
                            )}
                          </motion.div>
                        </div>
                      )}

                      {/* Step 3: Goals & Timeline */}
                      {currentStep === 3 && (
                        <div className="space-y-6">
                          <div className="text-center mb-6">
                            <motion.h3
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-xl font-bold text-gray-900 mb-2"
                            >
                              Goals & Timeline
                            </motion.h3>
                            <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="text-gray-600"
                            >
                              Tell us about your goals and when you'd like to achieve them
                            </motion.p>
                          </div>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-2"
                          >
                            <label className="block text-sm font-semibold text-gray-700">
                              Current Goals & Objectives *
                            </label>
                            <Controller
                              name="currentGoals"
                              control={control}
                              render={({ field }) => (
                                <textarea
                                  {...field}
                                  rows={4}
                                  className="w-full px-4 py-3.5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 resize-none text-gray-900 placeholder-gray-400 bg-gray-50/50"
                                  placeholder="Describe your current business goals, revenue targets, and what you want to achieve..."
                                />
                              )}
                            />
                            {errors.currentGoals && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-sm text-red-600 flex items-center space-x-1 mt-1"
                              >
                                <ExclamationTriangleIcon className="w-4 h-4" />
                                <span>{errors.currentGoals.message}</span>
                              </motion.p>
                            )}
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-2"
                          >
                            <label className="block text-sm font-semibold text-gray-700">
                              Expected Timeline *
                            </label>
                            <Controller
                              name="timeline"
                              control={control}
                              render={({ field }) => (
                                <select
                                  {...field}
                                  className="w-full px-4 py-3.5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 bg-gray-50/50"
                                >
                                  <option value="">Select timeline</option>
                                  {TIMELINES.map(timeline => (
                                    <option key={timeline} value={timeline}>{timeline}</option>
                                  ))}
                                </select>
                              )}
                            />
                            {errors.timeline && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-sm text-red-600 flex items-center space-x-1 mt-1"
                              >
                                <ExclamationTriangleIcon className="w-4 h-4" />
                                <span>{errors.timeline.message}</span>
                              </motion.p>
                            )}
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-2"
                          >
                            <label className="block text-sm font-semibold text-gray-700">
                              Previous Marketing Experience (Optional)
                            </label>
                            <Controller
                              name="previousExperience"
                              control={control}
                              render={({ field }) => (
                                <textarea
                                  {...field}
                                  rows={3}
                                  className="w-full px-4 py-3.5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 resize-none text-gray-900 placeholder-gray-400 bg-gray-50/50"
                                  placeholder="Tell us about your previous marketing efforts, what worked, what didn't..."
                                />
                              )}
                            />
                          </motion.div>
                        </div>
                      )}

                      {/* Step 4: Budget & Additional Info */}
                      {currentStep === 4 && (
                        <div className="space-y-6">
                          <div className="text-center mb-6">
                            <motion.h3
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-xl font-bold text-gray-900 mb-2"
                            >
                              Budget & Final Details
                            </motion.h3>
                            <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="text-gray-600"
                            >
                              Help us understand your budget to provide the most relevant recommendations
                            </motion.p>
                          </div>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-2"
                          >
                            <label className="block text-sm font-semibold text-gray-700">
                              Marketing Budget Range *
                            </label>
                            <Controller
                              name="budget"
                              control={control}
                              render={({ field }) => (
                                <select
                                  {...field}
                                  className="w-full px-4 py-3.5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 bg-gray-50/50"
                                >
                                  <option value="">Select budget range</option>
                                  {BUDGETS.map(budget => (
                                    <option key={budget} value={budget}>{budget}</option>
                                  ))}
                                </select>
                              )}
                            />
                            {errors.budget && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-sm text-red-600 flex items-center space-x-1 mt-1"
                              >
                                <ExclamationTriangleIcon className="w-4 h-4" />
                                <span>{errors.budget.message}</span>
                              </motion.p>
                            )}
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-2"
                          >
                            <label className="block text-sm font-semibold text-gray-700">
                              Additional Information (Optional)
                            </label>
                            <Controller
                              name="additionalInfo"
                              control={control}
                              render={({ field }) => (
                                <textarea
                                  {...field}
                                  rows={4}
                                  className="w-full px-4 py-3.5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 resize-none text-gray-900 placeholder-gray-400 bg-gray-50/50"
                                  placeholder="Any additional information you'd like us to know about your business, specific requirements, or questions..."
                                />
                              )}
                            />
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-gradient-to-br from-blue-50/80 to-purple-50/60 border border-blue-200/50 rounded-3xl p-5 backdrop-blur-sm"
                          >
                            <div className="flex items-start space-x-3">
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0"
                              >
                                <TrophyIcon className="w-6 h-6 text-white" />
                              </motion.div>
                              <div>
                                <h4 className="font-bold text-blue-900 mb-3">What You'll Receive:</h4>
                                <div className="space-y-2.5">
                                  {[
                                    'Comprehensive business & market analysis',
                                    'Competitive intelligence report', 
                                    'Revenue growth opportunities identification',
                                    'Custom strategic recommendations',
                                    '30-minute strategy consultation call'
                                  ].map((item, index) => (
                                    <motion.div
                                      key={item}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.6 + index * 0.1 }}
                                      className="flex items-center space-x-2"
                                    >
                                      <StarIcon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                      <span className="text-sm text-blue-800 font-medium">{item}</span>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </form>
              )}
            </div>

            {/* Fixed Footer with iOS-style buttons */}
            {!isSubmitted && (
              <div className="px-6 py-4 bg-white/60 backdrop-blur-xl border-t border-gray-200/50">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col sm:flex-row justify-between items-center gap-3"
                >
                  <div className="flex items-center space-x-3 order-2 sm:order-1">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        disabled={isSubmitting}
                        className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl transition-all duration-200 font-medium text-sm border border-gray-200"
                      >
                        <ArrowLeftIcon className="w-4 h-4" />
                        <span>Previous</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={handleClose}
                      disabled={isSubmitting}
                      className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl transition-all duration-200 font-medium text-sm border border-gray-200"
                    >
                      Cancel
                    </button>
                  </div>
                  
                  <div className="order-1 sm:order-2 w-full sm:w-auto">
                    {currentStep < totalSteps ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
                      >
                        <span>Next Step</span>
                        <ArrowRightIcon className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        onClick={handleSubmit(onSubmit)}
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-2xl transition-all duration-200 font-semibold shadow-lg hover:shadow-xl disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Request</span>
                            <RocketLaunchIcon className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </motion.div>
              </div>
            )}

            {/* Success state buttons */}
            {isSubmitted && (
              <div className="px-6 py-4 bg-white/60 backdrop-blur-xl border-t border-gray-200/50">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 justify-center"
                >
                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl transition-all duration-200 font-medium border border-gray-200"
                  >
                    Close
                  </button>
                  <button
                    className="inline-flex items-center justify-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl transition-all duration-200 font-medium shadow-lg"
                  >
                    <EnvelopeIcon className="w-4 h-4" />
                    <span>Check Your Email</span>
                  </button>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 