'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { cn } from '@/lib/utils';
import {
  ArrowTrendingUpIcon,
  ArrowRightIcon,
  PlayIcon,
  ChartBarIcon,
  ClockIcon,
  TagIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';

interface CaseStudyMetric {
  label: string;
  before: string;
  after: string;
  improvement: string;
  color: 'green' | 'blue' | 'purple' | 'orange';
}

interface CaseStudyCardProps {
  title: string;
  client: string;
  industry: string;
  duration: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: CaseStudyMetric[];
  tags: string[];
  videoUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  className?: string;
  onViewDetails?: () => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  client,
  industry,
  duration,
  image,
  description,
  challenge,
  solution,
  results,
  metrics,
  tags,
  videoUrl,
  testimonial,
  className,
  onViewDetails,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'metrics' | 'testimonial'>('overview');

  const getMetricColor = (color: string) => {
    const colors = {
      green: 'from-green-50 to-emerald-50 border-green-200 text-green-600',
      blue: 'from-blue-50 to-indigo-50 border-blue-200 text-blue-600',
      purple: 'from-purple-50 to-violet-50 border-purple-200 text-purple-600',
      orange: 'from-orange-50 to-amber-50 border-orange-200 text-orange-600',
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <Card className={cn('overflow-hidden hover:shadow-xl transition-all duration-300', className)}>
      {/* Header Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Play Button for Video */}
        {videoUrl && (
          <motion.button
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
              <PlayIcon className="w-8 h-8 text-primary-600 ml-1" />
            </div>
          </motion.button>
        )}

        {/* Industry Tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {industry}
          </span>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <ClockIcon className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">{duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-lg font-semibold text-primary-600 mb-2">{client}</p>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Key Metrics Preview */}
        {metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mb-6">
            {metrics.slice(0, 2).map((metric, index) => (
              <motion.div
                key={index}
                className={cn(
                  'p-3 rounded-lg border bg-gradient-to-r',
                  getMetricColor(metric.color)
                )}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-sm font-medium mb-1">{metric.label}</div>
                <div className="flex items-center">
                  <span className="text-lg font-bold">{metric.improvement}</span>
                  <ArrowTrendingUpIcon className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
            >
              <TagIcon className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {/* Expand/Collapse Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mb-4"
          icon={isExpanded ? ChevronUpIcon : ChevronDownIcon}
          iconPosition="right"
        >
          {isExpanded ? 'Show Less' : 'View Case Study'}
        </Button>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200 mb-4">
                {[
                  { key: 'overview', label: 'Overview' },
                  { key: 'metrics', label: 'Results' },
                  ...(testimonial ? [{ key: 'testimonial', label: 'Testimonial' }] : []),
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={cn(
                      'px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-200',
                      activeTab === tab.key
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === 'overview' && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{results}</p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'metrics' && (
                    <div className="space-y-3">
                      {metrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={cn(
                            'p-4 rounded-lg border bg-gradient-to-r',
                            getMetricColor(metric.color)
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-gray-900 mb-1">{metric.label}</div>
                              <div className="text-sm text-gray-600">
                                {metric.before} → {metric.after}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold flex items-center">
                                {metric.improvement}
                                <ArrowTrendingUpIcon className="w-5 h-5 ml-1" />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'testimonial' && testimonial && (
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <blockquote className="text-gray-700 italic mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-gray-600">{testimonial.position}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* View Full Case Study Button */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Button
                  onClick={onViewDetails}
                  className="w-full"
                  icon={ArrowRightIcon}
                  iconPosition="right"
                >
                  View Full Case Study
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
};

export { CaseStudyCard };
export type { CaseStudyCardProps, CaseStudyMetric }; 