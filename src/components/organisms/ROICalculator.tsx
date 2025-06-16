'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { roiCalculatorSchema, type ROICalculatorFormData } from '@/lib/validationSchemas';
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { 
  CalculatorIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  UsersIcon,
  DocumentArrowDownIcon,
  SparklesIcon,
  AdjustmentsHorizontalIcon,
  TrophyIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import toast from 'react-hot-toast';

interface ROICalculatorProps {
  className?: string;
}

const INDUSTRIES = [
  { value: 'fashion', label: 'Fashion & Apparel' },
  { value: 'electronics', label: 'Electronics & Gadgets' },
  { value: 'beauty', label: 'Beauty & Cosmetics' },
  { value: 'home-garden', label: 'Home & Garden' },
  { value: 'health-wellness', label: 'Health & Wellness' },
  { value: 'sports-fitness', label: 'Sports & Fitness' },
  { value: 'other', label: 'Other' }
];

const MARKETING_CHANNELS = [
  { value: 'google-ads', label: 'Google Ads' },
  { value: 'facebook-ads', label: 'Facebook Ads' },
  { value: 'instagram-ads', label: 'Instagram Ads' },
  { value: 'email-marketing', label: 'Email Marketing' },
  { value: 'seo', label: 'SEO' },
  { value: 'content-marketing', label: 'Content Marketing' },
  { value: 'influencer-marketing', label: 'Influencer Marketing' },
  { value: 'affiliate-marketing', label: 'Affiliate Marketing' }
];

const COLORS = ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#06B6D4'];

export function ROICalculator({ className = '' }: ROICalculatorProps) {
  const [calculationResults, setCalculationResults] = useState<any>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [activeTab, setActiveTab] = useState('calculator');
  const [showAdvanced, setShowAdvanced] = useState(false);

    const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    trigger
  } = useForm<ROICalculatorFormData>({
    resolver: yupResolver(roiCalculatorSchema),
    mode: 'onChange',
    defaultValues: {
      currentRevenue: 100000,
      conversionRate: 2.5,
      averageOrderValue: 1500,
      monthlyTraffic: 10000,
      industry: 'other',
      marketingChannels: []
    }
  });

  const watchedValues = watch();

  // Real-time calculation as user types
  useEffect(() => {
    if (isValid && watchedValues.currentRevenue && watchedValues.conversionRate && 
        watchedValues.averageOrderValue && watchedValues.monthlyTraffic) {
      calculateROI(watchedValues);
    }
  }, [watchedValues, isValid]);

  const calculateROI = async (data: ROICalculatorFormData) => {
    setIsCalculating(true);
    
    try {
      const response = await fetch('/api/calculate-roi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (result.success) {
        setCalculationResults(result.data);
      } else {
        toast.error('Calculation failed. Please check your inputs.');
      }
    } catch (error) {
      console.error('ROI calculation error:', error);
      toast.error('An error occurred during calculation.');
    } finally {
      setIsCalculating(false);
    }
  };

  const onSubmit = (data: ROICalculatorFormData) => {
    calculateROI(data);
    setActiveTab('results');
  };

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)}Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)}L`;
    } else {
      return `₹${value.toLocaleString()}`;
    }
  };

  const generateProjectionData = () => {
    if (!calculationResults) return [];
    
    return [
      { month: 'Current', revenue: calculationResults.currentMetrics.revenue },
      { month: 'Month 3', revenue: Math.round(calculationResults.projections.month3.revenue) },
      { month: 'Month 6', revenue: Math.round(calculationResults.projections.month6.revenue) },
      { month: 'Month 12', revenue: Math.round(calculationResults.projections.month12.revenue) }
    ];
  };

  const generateComparisonData = () => {
    if (!calculationResults) return [];
    
    return [
      {
        metric: 'Revenue',
        current: calculationResults.currentMetrics.revenue,
        potential: calculationResults.potentialMetrics.revenue
      },
      {
        metric: 'Customers',
        current: calculationResults.currentMetrics.customers,
        potential: calculationResults.potentialMetrics.customers
      },
      {
        metric: 'Conversion Rate',
        current: calculationResults.currentMetrics.conversionRate,
        potential: calculationResults.potentialMetrics.conversionRate
      }
    ];
  };

  const generateChannelData = () => {
    if (!calculationResults?.channelRecommendations) return [];
    
    return calculationResults.channelRecommendations.map((channel: any, index: number) => ({
      name: channel.channel,
      improvement: parseInt(channel.improvement.replace('+', '').replace('%', '')),
      priority: channel.priority,
      color: COLORS[index % COLORS.length]
    }));
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-gray-200 ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
        <div className="flex items-center space-x-3 mb-4">
          <CalculatorIcon className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold">ROI Calculator</h2>
            <p className="text-blue-100">
              Discover your potential revenue growth with CHLEARX
            </p>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex space-x-4">
          {[
            { id: 'calculator', label: 'Calculator', icon: CalculatorIcon },
            { id: 'results', label: 'Results', icon: ChartBarIcon },
            { id: 'insights', label: 'Insights', icon: SparklesIcon }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === tab.id 
                  ? 'bg-white/20 text-white' 
                  : 'text-blue-100 hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        <AnimatePresence mode="wait">
          {/* Calculator Tab */}
          {activeTab === 'calculator' && (
            <motion.div
              key="calculator"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Current Revenue */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Monthly Revenue (₹) *
                </label>
                    <Controller
                      name="currentRevenue"
                      control={control}
                      render={({ field }) => (
                <div className="relative">
                  <CurrencyDollarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                            {...field}
                    type="number"
                            min="1000"
                            step="1000"
                            onChange={e => field.onChange(Number(e.target.value))}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="100000"
                  />
                </div>
                      )}
                    />
                    {errors.currentRevenue && (
                      <p className="mt-1 text-sm text-red-600">{errors.currentRevenue.message}</p>
                    )}
              </div>
              
                  {/* Conversion Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Conversion Rate (%) *
                </label>
                    <Controller
                      name="conversionRate"
                      control={control}
                      render={({ field }) => (
                        <div className="relative">
                          <AdjustmentsHorizontalIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                            {...field}
                  type="number"
                            min="0.1"
                            max="50"
                  step="0.1"
                            onChange={e => field.onChange(Number(e.target.value))}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="2.5"
                />
              </div>
                      )}
                    />
                    {errors.conversionRate && (
                      <p className="mt-1 text-sm text-red-600">{errors.conversionRate.message}</p>
                    )}
                  </div>

                  {/* Average Order Value */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Average Order Value (₹) *
                    </label>
                    <Controller
                      name="averageOrderValue"
                      control={control}
                      render={({ field }) => (
                        <div className="relative">
                          <CurrencyDollarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            {...field}
                            type="number"
                            min="100"
                            step="50"
                            onChange={e => field.onChange(Number(e.target.value))}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="1500"
                          />
                        </div>
                      )}
                    />
                    {errors.averageOrderValue && (
                      <p className="mt-1 text-sm text-red-600">{errors.averageOrderValue.message}</p>
                    )}
                  </div>

                  {/* Monthly Traffic */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Website Traffic *
                    </label>
                    <Controller
                      name="monthlyTraffic"
                      control={control}
                      render={({ field }) => (
                        <div className="relative">
                          <UsersIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            {...field}
                            type="number"
                            min="100"
                            step="100"
                            onChange={e => field.onChange(Number(e.target.value))}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="10000"
                          />
                        </div>
                      )}
                    />
                    {errors.monthlyTraffic && (
                      <p className="mt-1 text-sm text-red-600">{errors.monthlyTraffic.message}</p>
                    )}
                  </div>
                </div>

                {/* Industry Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry *
                  </label>
                  <Controller
                    name="industry"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {INDUSTRIES.map(industry => (
                          <option key={industry.value} value={industry.value}>
                            {industry.label}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                  {errors.industry && (
                    <p className="mt-1 text-sm text-red-600">{errors.industry.message}</p>
                  )}
            </div>

                {/* Marketing Channels */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Marketing Channels * (Select all that apply)
                  </label>
                  <Controller
                    name="marketingChannels"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {MARKETING_CHANNELS.map(channel => (
                          <label
                            key={channel.value}
                            className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={value?.includes(channel.value) || false}
                              onChange={(e) => {
                                const newValue = value || [];
                                if (e.target.checked) {
                                  onChange([...newValue, channel.value]);
                                } else {
                                  onChange(newValue.filter((v: string) => v !== channel.value));
                                }
                              }}
                              className="text-blue-600 rounded"
                            />
                            <span className="text-sm text-gray-700">{channel.label}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  />
                  {errors.marketingChannels && (
                    <p className="mt-1 text-sm text-red-600">{errors.marketingChannels.message}</p>
                  )}
          </div>

                {/* Quick Results Preview */}
                {calculationResults && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <TrophyIcon className="w-6 h-6 text-green-600 mr-2" />
                      Quick Results Preview
                  </h3>
                  
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          {formatCurrency(calculationResults.improvements.revenueIncrease)}
                        </div>
                        <div className="text-sm text-gray-600">Additional Revenue</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {calculationResults.improvements.revenueIncreasePercentage}%
                        </div>
                        <div className="text-sm text-gray-600">Growth Increase</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">
                          {calculationResults.investment.roi}%
                        </div>
                        <div className="text-sm text-gray-600">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">
                          {calculationResults.investment.paybackPeriod}m
                        </div>
                        <div className="text-sm text-gray-600">Payback Period</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    loading={isCalculating}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                    icon={ChartBarIcon}
                    iconPosition="left"
                  >
                    {isCalculating ? 'Calculating...' : 'Calculate My ROI'}
                  </Button>
                  
                  {calculationResults && (
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 sm:flex-none"
                      icon={DocumentArrowDownIcon}
                      iconPosition="left"
                      onClick={() => toast.success('Download feature coming soon!')}
                    >
                      Download Report
                    </Button>
                  )}
                </div>
              </form>
                      </motion.div>
          )}

          {/* Results Tab */}
          {activeTab === 'results' && calculationResults && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {formatCurrency(calculationResults.improvements.revenueIncrease)}
                  </div>
                  <div className="text-sm text-gray-600">Revenue Increase</div>
                  <div className="text-xs text-green-600 font-medium">
                    +{calculationResults.improvements.revenueIncreasePercentage}%
                  </div>
                </Card>
                
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {calculationResults.improvements.customerIncrease}
                  </div>
                  <div className="text-sm text-gray-600">New Customers</div>
                  <div className="text-xs text-blue-600 font-medium">per month</div>
                </Card>
                
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {calculationResults.investment.roi}%
                  </div>
                  <div className="text-sm text-gray-600">ROI</div>
                  <div className="text-xs text-purple-600 font-medium">annual return</div>
                </Card>
                
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    {calculationResults.investment.paybackPeriod}
                  </div>
                  <div className="text-sm text-gray-600">Payback Period</div>
                  <div className="text-xs text-orange-600 font-medium">months</div>
                </Card>
              </div>

              {/* Revenue Projection Chart */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Revenue Growth Projection</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={generateProjectionData()}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={formatCurrency} />
                    <Tooltip formatter={(value: number) => [formatCurrency(value), 'Revenue']} />
                    <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              {/* Current vs Potential Comparison */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Current vs Potential Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={generateComparisonData()}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="metric" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="current" fill="#94A3B8" name="Current" />
                    <Bar dataKey="potential" fill="#3B82F6" name="Potential" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              {/* Channel Recommendations */}
              {calculationResults.channelRecommendations && (
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Channel Optimization Recommendations</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                          <Pie
                            data={generateChannelData()}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="improvement"
                            label={({ name, improvement }) => `${name}: +${improvement}%`}
                          >
                            {generateChannelData().map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="space-y-3">
                      {calculationResults.channelRecommendations.map((channel: any, index: number) => (
                        <div key={channel.channel} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900">{channel.channel}</div>
                            <div className="text-sm text-gray-600">Priority: {channel.priority}</div>
                          </div>
                          <div className="text-lg font-bold text-green-600">
                            {channel.improvement}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              )}
              </motion.div>
            )}

          {/* Insights Tab */}
          {activeTab === 'insights' && calculationResults && (
            <motion.div
              key="insights"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <SparklesIcon className="w-6 h-6 text-blue-600 mr-2" />
                  Industry Benchmarks
                </h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Average Conversion Rate</div>
                    <div className="text-2xl font-bold text-blue-600">
                      {calculationResults.industryBenchmarks.averageConversionRate}
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Average ROAS</div>
                    <div className="text-2xl font-bold text-green-600">
                      {calculationResults.industryBenchmarks.averageROAS}
                    </div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">CAC Reduction Potential</div>
                    <div className="text-2xl font-bold text-purple-600">
                      {calculationResults.industryBenchmarks.averageCACReduction}
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Key Insights & Recommendations</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <ArrowTrendingUpIcon className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <div className="font-semibold text-green-900">Revenue Growth Opportunity</div>
                      <div className="text-green-800">
                        Based on your current metrics, you have significant potential to increase 
                        revenue by {calculationResults.improvements.revenueIncreasePercentage}% 
                        through strategic optimization.
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <AdjustmentsHorizontalIcon className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold text-blue-900">Conversion Rate Optimization</div>
                      <div className="text-blue-800">
                        Your current conversion rate of {calculationResults.currentMetrics.conversionRate}% 
                        can be improved to {calculationResults.potentialMetrics.conversionRate}% 
                        through targeted optimizations.
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <TrophyIcon className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <div className="font-semibold text-purple-900">ROI Potential</div>
                      <div className="text-purple-800">
                        With an estimated investment of {formatCurrency(calculationResults.investment.estimated)}, 
                        you can achieve a {calculationResults.investment.roi}% ROI 
                        with a payback period of {calculationResults.investment.paybackPeriod} months.
                      </div>
                    </div>
                  </div>
                  
                  {calculationResults.investment.roi < 200 && (
                    <div className="flex items-start space-x-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600 mt-1" />
                      <div>
                        <div className="font-semibold text-yellow-900">Optimization Needed</div>
                        <div className="text-yellow-800">
                          Your current setup may benefit from strategic improvements before scaling. 
                          Consider focusing on conversion optimization and customer retention first.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <h3 className="text-lg font-semibold mb-4">Ready to Achieve These Results?</h3>
                <p className="mb-6">
                  These projections are based on proven strategies and industry benchmarks. 
                  Our team can help you implement the optimizations needed to achieve these results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-white text-blue-600 hover:bg-gray-50"
                    icon={DocumentArrowDownIcon}
                    iconPosition="left"
                  >
                    Download Full Report
                  </Button>
                <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Schedule Strategy Call
                </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 