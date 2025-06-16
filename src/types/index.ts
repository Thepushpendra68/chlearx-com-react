// Core Types
export interface BaseComponent {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType<any>;
  children?: NavItem[];
  isExternal?: boolean;
}

export interface NavigationProps extends BaseComponent {
  items: NavItem[];
  isOpen?: boolean;
  onToggle?: () => void;
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: React.ComponentType<any>;
  features: string[];
  benefits: string[];
  pricing?: ServicePricing;
  category: ServiceCategory;
  isPopular?: boolean;
  slug: string;
}

export interface ServicePricing {
  type: 'fixed' | 'custom' | 'tiered';
  startingPrice?: number;
  currency: string;
  period?: 'one-time' | 'monthly' | 'quarterly' | 'annually';
  tiers?: PricingTier[];
}

export interface PricingTier {
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export type ServiceCategory = 
  | 'ecommerce-marketing'
  | 'seo-optimization'
  | 'conversion-optimization'
  | 'analytics-reporting'
  | 'automation'
  | 'consulting';

// Case Study Types
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  testimonial?: Testimonial;
  images: CaseStudyImage[];
  tags: string[];
  duration: string;
  team: TeamMember[];
  publishedAt: Date;
  slug: string;
  featured?: boolean;
}

export interface CaseStudyResult {
  metric: string;
  before: number | string;
  after: number | string;
  improvement: string;
  icon?: React.ComponentType<any>;
}

export interface CaseStudyImage {
  url: string;
  alt: string;
  caption?: string;
  type: 'before' | 'after' | 'process' | 'screenshot' | 'chart';
}

// Team Types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  expertise: string[];
}

// Testimonial Types
export interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar?: string;
  };
  rating?: number;
  featured?: boolean;
  caseStudyId?: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
  services: string[];
  budget: BudgetRange;
  timeline: Timeline;
  source: string;
  newsletter?: boolean;
}

export interface QuoteFormData extends ContactFormData {
  projectType: string;
  currentWebsite?: string;
  goals: string[];
  challenges: string[];
  targetAudience: string;
  competitors: string[];
  additionalInfo?: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  preferredDate: Date;
  preferredTime: string;
  timezone: string;
  topics: string[];
  experience: ExperienceLevel;
  currentChallenges: string;
}

export type BudgetRange = 
  | 'under-5k'
  | '5k-15k'
  | '15k-30k'
  | '30k-50k'
  | '50k-100k'
  | 'over-100k'
  | 'not-sure';

export type Timeline = 
  | 'asap'
  | '1-3-months'
  | '3-6-months'
  | '6-12-months'
  | 'over-1-year'
  | 'flexible';

export type ExperienceLevel = 
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'expert';

// Animation Types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  repeat?: number | boolean;
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
}

export interface ScrollAnimationConfig extends AnimationConfig {
  triggerPoint?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

// Component Props Types
export interface ButtonProps extends BaseComponent {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  icon?: React.ComponentType<any>;
  iconPosition?: 'left' | 'right';
}

export interface CardProps extends BaseComponent {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  onClick?: () => void;
  footer?: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface ModalProps extends BaseComponent {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  footer?: React.ReactNode;
}

// Layout Types
export interface LayoutProps extends BaseComponent {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full';
}

export interface SectionProps extends BaseComponent {
  title?: string;
  subtitle?: string;
  description?: string;
  background?: 'none' | 'muted' | 'gradient' | 'pattern';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  centered?: boolean;
}

// API Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
  meta?: {
    total: number;
    page: number;
    limit: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
  field?: string;
}

// Analytics Types
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: Date;
  userId?: string;
  sessionId?: string;
}

export interface MetricsData {
  conversions: number;
  revenue: number;
  traffic: number;
  engagement: number;
  period: 'day' | 'week' | 'month' | 'quarter' | 'year';
  comparison?: {
    value: number;
    percentage: number;
    trend: 'up' | 'down' | 'stable';
  };
}

// SEO Types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  structuredData?: Record<string, any>;
  robots?: string;
  alternates?: {
    canonical?: string;
    languages?: Record<string, string>;
  };
}

// Theme Types
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
    border: string;
  };
  fonts: {
    sans: string;
    display: string;
    mono: string;
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  shadows: Record<string, string>;
}

// Store Types (Zustand)
export interface AppState {
  // UI State
  theme: 'light' | 'dark' | 'system';
  sidebarOpen: boolean;
  loading: boolean;
  
  // User State
  user?: User;
  isAuthenticated: boolean;
  
  // Actions
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  toggleSidebar: () => void;
  setLoading: (loading: boolean) => void;
  setUser: (user: User | undefined) => void;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatar?: string;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
  language: string;
  timezone: string;
}

// Utility Types
export type Maybe<T> = T | null | undefined;
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Generic List Types
export interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor?: (item: T, index: number) => string | number;
  loading?: boolean;
  error?: string;
  emptyMessage?: string;
  className?: string;
}

// Form Validation Types
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validate?: (value: any) => boolean | string;
  message?: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'file' | 'date';
  placeholder?: string;
  options?: Array<{ label: string; value: string | number }>;
  validation?: ValidationRule;
  disabled?: boolean;
  hidden?: boolean;
  description?: string;
}

export interface FormConfig {
  fields: FormField[];
  submitText?: string;
  loadingText?: string;
  successMessage?: string;
  errorMessage?: string;
  resetOnSubmit?: boolean;
} 