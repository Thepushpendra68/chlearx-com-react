'use client';

import React, { useState } from 'react';
import { Layout } from '@/components/templates/Layout';
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { RevenueAuditModal } from '@/components/organisms/RevenueAuditModal';
import { ROICalculator } from '@/components/organisms/ROICalculator';
import { 
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  CogIcon,
  ChartBarIcon,
  DocumentCheckIcon,
  EnvelopeIcon,
  CalculatorIcon
} from '@heroicons/react/24/outline';
import toast, { Toaster } from 'react-hot-toast';

export default function TestFunctionalityPage() {
  const [isRevenueAuditModalOpen, setIsRevenueAuditModalOpen] = useState(false);
  const [testResults, setTestResults] = useState<{[key: string]: 'pending' | 'success' | 'error'}>({});

  const testEndpoint = async (endpoint: string, data: any, testName: string) => {
    setTestResults(prev => ({ ...prev, [testName]: 'pending' }));
    
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (result.success) {
        setTestResults(prev => ({ ...prev, [testName]: 'success' }));
        toast.success(`${testName} test passed!`);
      } else {
        setTestResults(prev => ({ ...prev, [testName]: 'error' }));
        toast.error(`${testName} test failed: ${result.message}`);
      }
    } catch (error) {
      setTestResults(prev => ({ ...prev, [testName]: 'error' }));
      toast.error(`${testName} test failed: Network error`);
    }
  };

  const testRevenueAudit = () => {
    const testData = {
      businessName: 'Test Business',
      websiteUrl: 'https://test-business.com',
      monthlyRevenue: '₹5L - ₹20L per month',
      primaryChallenges: ['Low conversion rates', 'High customer acquisition costs'],
      contactEmail: 'test@testbusiness.com',
      phoneNumber: '+91 9876543210',
      currentGoals: 'We want to increase our revenue by 300% in the next 12 months through better marketing strategies and conversion optimization.',
      timeline: '2-3 months',
      budget: '₹2L - ₹5L per month',
      previousExperience: 'We have tried Google Ads and Facebook Ads but did not see good results.',
      additionalInfo: 'We are particularly interested in e-commerce optimization.'
    };
    
    testEndpoint('/api/revenue-audit', testData, 'Revenue Audit API');
  };

  const testROICalculator = () => {
    const testData = {
      currentRevenue: 150000,
      conversionRate: 2.5,
      averageOrderValue: 2000,
      monthlyTraffic: 15000,
      industry: 'fashion',
      marketingChannels: ['google-ads', 'facebook-ads', 'email-marketing']
    };
    
    testEndpoint('/api/calculate-roi', testData, 'ROI Calculator API');
  };

  const testContactForm = () => {
    const testData = {
      name: 'John Doe',
      email: 'john@example.com',
      company: 'Example Corp',
      phone: '+91 9876543210',
      service: 'Growth Acceleration',
      message: 'We need help scaling our e-commerce business.',
      preferredContact: 'email',
      timeline: '1 month',
      budget: '₹5L - ₹10L per month',
      marketingGoals: ['increase-revenue', 'improve-roas'],
      currentChallenges: ['Low conversion rates', 'High CAC']
    };
    
    testEndpoint('/api/contact', testData, 'Contact Form API');
  };

  const testNewsletter = () => {
    const testData = {
      email: 'subscriber@example.com',
      interests: ['e-commerce-tips', 'marketing-strategies'],
      frequency: 'weekly'
    };
    
    testEndpoint('/api/newsletter', testData, 'Newsletter API');
  };

  const testMarketingHealth = () => {
    const testData = {
      businessAge: '1-3-years',
      marketingBudget: '2l-5l',
      currentChannels: ['google-ads', 'facebook-ads', 'email-marketing'],
      trackingSetup: ['google-analytics', 'facebook-pixel'],
      contentStrategy: 'planned-content',
      customerFeedback: 'regular-surveys',
      competitorAnalysis: 'monthly',
      marketingGoals: ['increase-revenue', 'improve-roas'],
      biggestChallenges: ['Low conversion rates', 'High CAC'],
      dataAnalysis: 'weekly'
    };
    
    testEndpoint('/api/marketing-health', testData, 'Marketing Health API');
  };

  const getStatusIcon = (status: 'pending' | 'success' | 'error' | undefined) => {
    switch (status) {
      case 'pending':
        return <ClockIcon className="w-5 h-5 text-yellow-500 animate-spin" />;
      case 'success':
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      case 'error':
        return <XCircleIcon className="w-5 h-5 text-red-500" />;
      default:
        return <CogIcon className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: 'pending' | 'success' | 'error' | undefined) => {
    switch (status) {
      case 'pending':
        return 'border-yellow-200 bg-yellow-50';
      case 'success':
        return 'border-green-200 bg-green-50';
      case 'error':
        return 'border-red-200 bg-red-50';
      default:
        return 'border-gray-200 bg-white';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Functionality Test Dashboard
            </h1>
            <p className="text-xl text-gray-600">
              Test all interactive components and API endpoints
            </p>
          </div>

          {/* API Tests */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className={`p-6 border-2 ${getStatusColor(testResults['Revenue Audit API'])}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Revenue Audit API</h3>
                {getStatusIcon(testResults['Revenue Audit API'])}
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Tests the multi-step revenue audit form submission and validation
              </p>
              <Button
                onClick={testRevenueAudit}
                className="w-full"
                icon={DocumentCheckIcon}
                iconPosition="left"
                disabled={testResults['Revenue Audit API'] === 'pending'}
              >
                Test Revenue Audit
              </Button>
            </Card>

            <Card className={`p-6 border-2 ${getStatusColor(testResults['ROI Calculator API'])}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">ROI Calculator API</h3>
                {getStatusIcon(testResults['ROI Calculator API'])}
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Tests ROI calculations with industry benchmarks and projections
              </p>
              <Button
                onClick={testROICalculator}
                className="w-full"
                icon={CalculatorIcon}
                iconPosition="left"
                disabled={testResults['ROI Calculator API'] === 'pending'}
              >
                Test ROI Calculator
              </Button>
            </Card>

            <Card className={`p-6 border-2 ${getStatusColor(testResults['Contact Form API'])}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Contact Form API</h3>
                {getStatusIcon(testResults['Contact Form API'])}
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Tests contact form submission with service recommendations
              </p>
              <Button
                onClick={testContactForm}
                className="w-full"
                icon={EnvelopeIcon}
                iconPosition="left"
                disabled={testResults['Contact Form API'] === 'pending'}
              >
                Test Contact Form
              </Button>
            </Card>

            <Card className={`p-6 border-2 ${getStatusColor(testResults['Newsletter API'])}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Newsletter API</h3>
                {getStatusIcon(testResults['Newsletter API'])}
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Tests newsletter subscription with interest-based segmentation
              </p>
              <Button
                onClick={testNewsletter}
                className="w-full"
                disabled={testResults['Newsletter API'] === 'pending'}
              >
                Test Newsletter
              </Button>
            </Card>

            <Card className={`p-6 border-2 ${getStatusColor(testResults['Marketing Health API'])}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Marketing Health API</h3>
                {getStatusIcon(testResults['Marketing Health API'])}
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Tests marketing health assessment with scoring and recommendations
              </p>
              <Button
                onClick={testMarketingHealth}
                className="w-full"
                icon={ChartBarIcon}
                iconPosition="left"
                disabled={testResults['Marketing Health API'] === 'pending'}
              >
                Test Health Check
              </Button>
            </Card>
          </div>

          {/* Interactive Components */}
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Interactive Components Test
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Revenue Audit Modal</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Multi-step form with validation, progress tracking, and success states
                  </p>
                  <Button
                    onClick={() => setIsRevenueAuditModalOpen(true)}
                    icon={DocumentCheckIcon}
                    iconPosition="left"
                  >
                    Open Revenue Audit Modal
                  </Button>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Toast Notifications</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Success, error, and info notifications with custom styling
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => toast.success('Success notification!')}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Success
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => toast.error('Error notification!')}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      Error
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => toast('Info notification!')}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Info
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* ROI Calculator */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ROI Calculator Component
              </h3>
              <p className="text-gray-600 mb-6">
                Interactive calculator with real-time calculations, charts, and detailed insights
              </p>
              <ROICalculator />
            </Card>
          </div>

          {/* Test Results Summary */}
          <Card className="p-6 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Test Results Summary
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Object.entries(testResults).map(([testName, status]) => (
                <div key={testName} className="text-center">
                  <div className="flex justify-center mb-2">
                    {getStatusIcon(status)}
                  </div>
                  <div className="text-sm font-medium text-gray-900">{testName}</div>
                  <div className={`text-xs capitalize ${
                    status === 'success' ? 'text-green-600' :
                    status === 'error' ? 'text-red-600' :
                    status === 'pending' ? 'text-yellow-600' :
                    'text-gray-500'
                  }`}>
                    {status || 'Not tested'}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Revenue Audit Modal */}
      <RevenueAuditModal 
        isOpen={isRevenueAuditModalOpen}
        onClose={() => setIsRevenueAuditModalOpen(false)}
      />

      {/* Toast Notifications */}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10B981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: '#EF4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </Layout>
  );
} 