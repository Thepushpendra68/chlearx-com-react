import { NextRequest, NextResponse } from 'next/server';
import { roiCalculatorSchema } from '@/lib/validationSchemas';

// Industry benchmarks and multipliers
const INDUSTRY_BENCHMARKS = {
  'fashion': { conversionImprovement: 2.8, roasImprovement: 3.4, cacReduction: 0.65 },
  'electronics': { conversionImprovement: 2.2, roasImprovement: 3.8, cacReduction: 0.55 },
  'beauty': { conversionImprovement: 3.2, roasImprovement: 4.1, cacReduction: 0.72 },
  'home-garden': { conversionImprovement: 2.5, roasImprovement: 3.2, cacReduction: 0.58 },
  'health-wellness': { conversionImprovement: 2.9, roasImprovement: 3.7, cacReduction: 0.68 },
  'sports-fitness': { conversionImprovement: 2.4, roasImprovement: 3.3, cacReduction: 0.61 },
  'other': { conversionImprovement: 2.6, roasImprovement: 3.5, cacReduction: 0.64 }
};

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate the data
    const validatedData = await roiCalculatorSchema.validate(data, { abortEarly: false });
    
    const {
      currentRevenue,
      conversionRate,
      averageOrderValue,
      monthlyTraffic,
      industry,
      marketingChannels
    } = validatedData;
    
    // Get industry benchmarks
    const benchmarks = INDUSTRY_BENCHMARKS[industry as keyof typeof INDUSTRY_BENCHMARKS] || INDUSTRY_BENCHMARKS.other;
    
    // Calculate current metrics
    const currentCustomers = Math.floor(monthlyTraffic * (conversionRate / 100));
    const currentCAC = currentRevenue / currentCustomers;
    
    // Calculate potential improvements
    const potentialConversionRate = Math.min(conversionRate * benchmarks.conversionImprovement, 25); // Cap at 25%
    const potentialCustomers = Math.floor(monthlyTraffic * (potentialConversionRate / 100));
    const potentialRevenue = potentialCustomers * averageOrderValue;
    const potentialCAC = currentCAC * benchmarks.cacReduction;
    
    // Calculate ROI projections
    const revenueIncrease = potentialRevenue - currentRevenue;
    const revenueIncreasePercentage = ((revenueIncrease / currentRevenue) * 100);
    
    // Timeline projections
    const projections = {
      month3: {
        revenue: currentRevenue + (revenueIncrease * 0.3),
        improvement: revenueIncreasePercentage * 0.3,
        customers: currentCustomers + ((potentialCustomers - currentCustomers) * 0.3)
      },
      month6: {
        revenue: currentRevenue + (revenueIncrease * 0.65),
        improvement: revenueIncreasePercentage * 0.65,
        customers: currentCustomers + ((potentialCustomers - currentCustomers) * 0.65)
      },
      month12: {
        revenue: potentialRevenue,
        improvement: revenueIncreasePercentage,
        customers: potentialCustomers
      }
    };
    
    // Investment estimation
    const estimatedInvestment = Math.max(currentRevenue * 0.15, 50000); // 15% of revenue or minimum 50k
    const roi = ((revenueIncrease * 12) - estimatedInvestment) / estimatedInvestment;
    
    // Channel-specific recommendations
    const channelRecommendations = marketingChannels.map((channel: string) => {
      switch (channel) {
        case 'google-ads':
          return { channel: 'Google Ads', improvement: '+45%', priority: 'High' };
        case 'facebook-ads':
          return { channel: 'Facebook Ads', improvement: '+38%', priority: 'High' };
        case 'email-marketing':
          return { channel: 'Email Marketing', improvement: '+67%', priority: 'Medium' };
        case 'seo':
          return { channel: 'SEO', improvement: '+89%', priority: 'Medium' };
        case 'content-marketing':
          return { channel: 'Content Marketing', improvement: '+52%', priority: 'Low' };
        default:
          return { channel, improvement: '+30%', priority: 'Medium' };
      }
    });
    
    return NextResponse.json({
      success: true,
      data: {
        currentMetrics: {
          revenue: currentRevenue,
          conversionRate: conversionRate,
          customers: currentCustomers,
          cac: Math.round(currentCAC),
          aov: averageOrderValue
        },
        potentialMetrics: {
          revenue: Math.round(potentialRevenue),
          conversionRate: Math.round(potentialConversionRate * 10) / 10,
          customers: potentialCustomers,
          cac: Math.round(potentialCAC),
          aov: averageOrderValue
        },
        improvements: {
          revenueIncrease: Math.round(revenueIncrease),
          revenueIncreasePercentage: Math.round(revenueIncreasePercentage),
          conversionImprovement: Math.round(((potentialConversionRate - conversionRate) / conversionRate) * 100),
          cacReduction: Math.round((1 - benchmarks.cacReduction) * 100),
          customerIncrease: potentialCustomers - currentCustomers
        },
        projections,
        investment: {
          estimated: Math.round(estimatedInvestment),
          roi: Math.round(roi * 100),
          paybackPeriod: Math.ceil(estimatedInvestment / (revenueIncrease / 12))
        },
        channelRecommendations,
        industryBenchmarks: {
          averageConversionRate: `${conversionRate * benchmarks.conversionImprovement}%`,
          averageROAS: `${benchmarks.roasImprovement}:1`,
          averageCACReduction: `${Math.round((1 - benchmarks.cacReduction) * 100)}%`
        }
      }
    });
    
  } catch (error: any) {
    console.error('ROI Calculator API Error:', error);
    
    if (error.name === 'ValidationError') {
      return NextResponse.json({
        success: false,
        message: 'Validation failed',
        errors: error.errors
      }, { status: 400 });
    }
    
    return NextResponse.json({
      success: false,
      message: 'An error occurred while calculating ROI. Please try again.'
    }, { status: 500 });
  }
} 