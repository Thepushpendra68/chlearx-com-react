import * as yup from 'yup';

// Revenue Audit Form Schema
export const revenueAuditSchema = yup.object({
  businessName: yup
    .string()
    .required('Business name is required')
    .min(2, 'Business name must be at least 2 characters'),
  websiteUrl: yup
    .string()
    .required('Website URL is required')
    .url('Please enter a valid URL')
    .matches(/^https?:\/\//, 'URL must start with http:// or https://'),
  monthlyRevenue: yup
    .string()
    .required('Monthly revenue range is required'),
  primaryChallenges: yup
    .array()
    .of(yup.string())
    .min(1, 'Please select at least one challenge'),
  contactEmail: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  phoneNumber: yup
    .string()
    .optional()
    .matches(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'),
  currentGoals: yup
    .string()
    .required('Please describe your current goals')
    .min(20, 'Please provide more details about your goals'),
  timeline: yup
    .string()
    .required('Expected timeline is required'),
  budget: yup
    .string()
    .required('Budget range is required'),
  previousExperience: yup
    .string()
    .optional(),
  additionalInfo: yup
    .string()
    .optional()
});

// Contact Form Schema
export const contactSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  company: yup
    .string()
    .optional(),
  phone: yup
    .string()
    .optional()
    .matches(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'),
  service: yup
    .string()
    .required('Please select a service'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
  preferredContact: yup
    .string()
    .required('Please select preferred contact method'),
  timeline: yup
    .string()
    .required('Please select timeline'),
  budget: yup
    .string()
    .optional(),
  marketingGoals: yup
    .array()
    .of(yup.string())
    .min(1, 'Please select at least one marketing goal'),
  currentChallenges: yup
    .array()
    .of(yup.string())
    .optional()
});

// Newsletter Subscription Schema
export const newsletterSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  interests: yup
    .array()
    .of(yup.string())
    .optional(),
  frequency: yup
    .string()
    .optional()
});

// Strategy Assessment Schema
export const strategyAssessmentSchema = yup.object({
  businessType: yup
    .string()
    .required('Business type is required'),
  industry: yup
    .string()
    .required('Industry is required'),
  monthlyRevenue: yup
    .number()
    .required('Monthly revenue is required')
    .min(0, 'Revenue must be positive'),
  currentMarketingChannels: yup
    .array()
    .of(yup.string())
    .min(1, 'Please select at least one marketing channel'),
  biggestChallenges: yup
    .array()
    .of(yup.string())
    .min(1, 'Please select at least one challenge'),
  growthGoals: yup
    .array()
    .of(yup.string())
    .min(1, 'Please select at least one growth goal'),
  targetAudience: yup
    .string()
    .required('Target audience description is required')
    .min(20, 'Please provide more details about your target audience'),
  competitorAnalysis: yup
    .string()
    .optional(),
  currentConversionRate: yup
    .number()
    .optional()
    .min(0, 'Conversion rate must be positive')
    .max(100, 'Conversion rate cannot exceed 100%'),
  averageOrderValue: yup
    .number()
    .optional()
    .min(0, 'Average order value must be positive'),
  monthlyTraffic: yup
    .number()
    .optional()
    .min(0, 'Monthly traffic must be positive')
});

// Creative Brief Schema
export const creativeBriefSchema = yup.object({
  projectType: yup
    .string()
    .required('Project type is required'),
  brandPersonality: yup
    .array()
    .of(yup.string())
    .min(3, 'Please select at least 3 brand personality traits'),
  targetAudience: yup
    .string()
    .required('Target audience is required')
    .min(20, 'Please provide more details about your target audience'),
  competitorBrands: yup
    .string()
    .optional(),
  likedBrands: yup
    .string()
    .optional(),
  dislikedElements: yup
    .string()
    .optional(),
  colorPreferences: yup
    .array()
    .of(yup.string())
    .optional(),
  stylePreferences: yup
    .array()
    .of(yup.string())
    .min(1, 'Please select at least one style preference'),
  deliverables: yup
    .array()
    .of(yup.string())
    .min(1, 'Please select at least one deliverable'),
  timeline: yup
    .string()
    .required('Timeline is required'),
  budget: yup
    .string()
    .required('Budget range is required'),
  additionalRequirements: yup
    .string()
    .optional()
});

// Growth Assessment Schema
export const growthAssessmentSchema = yup.object({
  currentRevenue: yup
    .number()
    .required('Current revenue is required')
    .min(0, 'Revenue must be positive'),
  revenueGoal: yup
    .number()
    .required('Revenue goal is required')
    .min(0, 'Revenue goal must be positive'),
  currentROAS: yup
    .number()
    .optional()
    .min(0, 'ROAS must be positive'),
  currentCAC: yup
    .number()
    .optional()
    .min(0, 'CAC must be positive'),
  currentLTV: yup
    .number()
    .optional()
    .min(0, 'LTV must be positive'),
  marketingChannels: yup
    .array()
    .of(yup.string())
    .min(1, 'Please select at least one marketing channel'),
  growthChallenges: yup
    .array()
    .of(yup.string())
    .min(1, 'Please select at least one growth challenge'),
  priorityAreas: yup
    .array()
    .of(yup.string())
    .min(1, 'Please select at least one priority area'),
  timeline: yup
    .string()
    .required('Timeline is required'),
  budget: yup
    .string()
    .required('Budget range is required')
});

// ROI Calculator Schema
export const roiCalculatorSchema = yup.object({
  currentRevenue: yup
    .number()
    .required('Current monthly revenue is required')
    .min(1000, 'Revenue must be at least ₹1,000')
    .max(10000000, 'Please contact us for enterprise solutions'),
  conversionRate: yup
    .number()
    .required('Current conversion rate is required')
    .min(0.1, 'Conversion rate must be at least 0.1%')
    .max(50, 'Conversion rate cannot exceed 50%'),
  averageOrderValue: yup
    .number()
    .required('Average order value is required')
    .min(100, 'AOV must be at least ₹100'),
  monthlyTraffic: yup
    .number()
    .required('Monthly traffic is required')
    .min(100, 'Traffic must be at least 100 visitors'),
  industry: yup
    .string()
    .required('Industry is required'),
  marketingChannels: yup
    .array()
    .of(yup.string())
    .min(1, 'Please select at least one current marketing channel')
});

// Marketing Health Check Schema
export const marketingHealthSchema = yup.object({
  businessAge: yup
    .string()
    .required('Business age is required'),
  marketingBudget: yup
    .string()
    .required('Marketing budget is required'),
  currentChannels: yup
    .array()
    .of(yup.string())
    .min(1, 'Please select at least one current channel'),
  trackingSetup: yup
    .array()
    .of(yup.string())
    .optional(),
  contentStrategy: yup
    .string()
    .required('Content strategy status is required'),
  customerFeedback: yup
    .string()
    .required('Customer feedback process is required'),
  competitorAnalysis: yup
    .string()
    .required('Competitor analysis frequency is required'),
  marketingGoals: yup
    .array()
    .of(yup.string())
    .min(1, 'Please select at least one marketing goal'),
  biggestChallenges: yup
    .array()
    .of(yup.string())
    .min(1, 'Please select at least one challenge'),
  dataAnalysis: yup
    .string()
    .required('Data analysis frequency is required')
});

export type RevenueAuditFormData = yup.InferType<typeof revenueAuditSchema>;
export type ContactFormData = yup.InferType<typeof contactSchema>;
export type NewsletterFormData = yup.InferType<typeof newsletterSchema>;
export type StrategyAssessmentFormData = yup.InferType<typeof strategyAssessmentSchema>;
export type CreativeBriefFormData = yup.InferType<typeof creativeBriefSchema>;
export type GrowthAssessmentFormData = yup.InferType<typeof growthAssessmentSchema>;
export type ROICalculatorFormData = yup.InferType<typeof roiCalculatorSchema>;
export type MarketingHealthFormData = yup.InferType<typeof marketingHealthSchema>; 