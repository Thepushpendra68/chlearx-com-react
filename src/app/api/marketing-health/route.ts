import { NextRequest, NextResponse } from 'next/server';
import { marketingHealthSchema } from '@/lib/validationSchemas';

// Scoring weights for different aspects
const SCORING_WEIGHTS = {
  businessAge: { 'less-than-1-year': 1, '1-3-years': 2, '3-5-years': 3, 'more-than-5-years': 4 },
  marketingBudget: { 'less-than-50k': 1, '50k-2l': 2, '2l-5l': 3, '5l-10l': 4, 'more-than-10l': 5 },
  contentStrategy: { 'no-strategy': 1, 'basic-content': 2, 'planned-content': 3, 'advanced-strategy': 4 },
  customerFeedback: { 'no-system': 1, 'basic-reviews': 2, 'regular-surveys': 3, 'comprehensive-system': 4 },
  competitorAnalysis: { 'never': 1, 'rarely': 2, 'monthly': 3, 'weekly': 4 },
  dataAnalysis: { 'never': 1, 'monthly': 2, 'weekly': 3, 'daily': 4 }
};

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate the data
    const validatedData = await marketingHealthSchema.validate(data, { abortEarly: false });
    
    // Calculate health score
    const healthScore = calculateHealthScore(validatedData);
    const recommendations = generateRecommendations(validatedData, healthScore);
    const priorityActions = getPriorityActions(validatedData, healthScore);
    
    console.log('Marketing Health Check:', { ...validatedData, healthScore });
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({
      success: true,
      message: 'Marketing health assessment completed!',
      data: {
        healthScore: Math.round(healthScore),
        scoreCategory: getScoreCategory(healthScore),
        breakdown: getScoreBreakdown(validatedData),
        recommendations,
        priorityActions,
        nextSteps: getNextSteps(healthScore),
        estimatedImprovementTime: getEstimatedTime(healthScore),
        benchmarkComparison: getBenchmarkComparison(healthScore, validatedData.businessAge)
      }
    });
    
  } catch (error: any) {
    console.error('Marketing Health API Error:', error);
    
    if (error.name === 'ValidationError') {
      return NextResponse.json({
        success: false,
        message: 'Please complete all required fields',
        errors: error.errors
      }, { status: 400 });
    }
    
    return NextResponse.json({
      success: false,
      message: 'An error occurred during assessment. Please try again.'
    }, { status: 500 });
  }
}

function calculateHealthScore(data: any): number {
  let totalScore = 0;
  let maxScore = 0;
  
  // Business maturity (20% weight)
  const businessAgeScore = SCORING_WEIGHTS.businessAge[data.businessAge as keyof typeof SCORING_WEIGHTS.businessAge] || 1;
  totalScore += businessAgeScore * 20;
  maxScore += 4 * 20;
  
  // Budget allocation (25% weight)
  const budgetScore = SCORING_WEIGHTS.marketingBudget[data.marketingBudget as keyof typeof SCORING_WEIGHTS.marketingBudget] || 1;
  totalScore += budgetScore * 25;
  maxScore += 5 * 25;
  
  // Channel diversity (15% weight)
  const channelScore = Math.min(data.currentChannels.length, 5);
  totalScore += channelScore * 15;
  maxScore += 5 * 15;
  
  // Content strategy (15% weight)
  const contentScore = SCORING_WEIGHTS.contentStrategy[data.contentStrategy as keyof typeof SCORING_WEIGHTS.contentStrategy] || 1;
  totalScore += contentScore * 15;
  maxScore += 4 * 15;
  
  // Customer feedback (10% weight)
  const feedbackScore = SCORING_WEIGHTS.customerFeedback[data.customerFeedback as keyof typeof SCORING_WEIGHTS.customerFeedback] || 1;
  totalScore += feedbackScore * 10;
  maxScore += 4 * 10;
  
  // Competitor analysis (10% weight)
  const competitorScore = SCORING_WEIGHTS.competitorAnalysis[data.competitorAnalysis as keyof typeof SCORING_WEIGHTS.competitorAnalysis] || 1;
  totalScore += competitorScore * 10;
  maxScore += 4 * 10;
  
  // Data analysis (5% weight)
  const dataScore = SCORING_WEIGHTS.dataAnalysis[data.dataAnalysis as keyof typeof SCORING_WEIGHTS.dataAnalysis] || 1;
  totalScore += dataScore * 5;
  maxScore += 4 * 5;
  
  return (totalScore / maxScore) * 100;
}

function getScoreCategory(score: number): string {
  if (score >= 80) return 'Excellent';
  if (score >= 65) return 'Good';
  if (score >= 50) return 'Average';
  if (score >= 35) return 'Needs Improvement';
  return 'Critical';
}

function getScoreBreakdown(data: any) {
  return {
    businessMaturity: SCORING_WEIGHTS.businessAge[data.businessAge as keyof typeof SCORING_WEIGHTS.businessAge] || 1,
    budgetAllocation: SCORING_WEIGHTS.marketingBudget[data.marketingBudget as keyof typeof SCORING_WEIGHTS.marketingBudget] || 1,
    channelDiversity: Math.min(data.currentChannels.length, 5),
    contentStrategy: SCORING_WEIGHTS.contentStrategy[data.contentStrategy as keyof typeof SCORING_WEIGHTS.contentStrategy] || 1,
    customerFeedback: SCORING_WEIGHTS.customerFeedback[data.customerFeedback as keyof typeof SCORING_WEIGHTS.customerFeedback] || 1,
    competitorAnalysis: SCORING_WEIGHTS.competitorAnalysis[data.competitorAnalysis as keyof typeof SCORING_WEIGHTS.competitorAnalysis] || 1,
    dataAnalysis: SCORING_WEIGHTS.dataAnalysis[data.dataAnalysis as keyof typeof SCORING_WEIGHTS.dataAnalysis] || 1
  };
}

function generateRecommendations(data: any, score: number): string[] {
  const recommendations = [];
  
  if (data.currentChannels.length < 3) {
    recommendations.push('Diversify your marketing channels to reduce dependency and increase reach');
  }
  
  if (data.contentStrategy === 'no-strategy' || data.contentStrategy === 'basic-content') {
    recommendations.push('Develop a comprehensive content strategy with regular publishing schedule');
  }
  
  if (data.customerFeedback === 'no-system' || data.customerFeedback === 'basic-reviews') {
    recommendations.push('Implement a systematic customer feedback collection and analysis process');
  }
  
  if (data.competitorAnalysis === 'never' || data.competitorAnalysis === 'rarely') {
    recommendations.push('Establish regular competitor monitoring to identify opportunities and threats');
  }
  
  if (data.dataAnalysis === 'never' || data.dataAnalysis === 'monthly') {
    recommendations.push('Increase data analysis frequency to enable faster optimization and decision-making');
  }
  
  if (score < 50) {
    recommendations.push('Consider working with a marketing agency to accelerate improvements');
  }
  
  return recommendations;
}

function getPriorityActions(data: any, score: number): Array<{action: string, impact: string, effort: string}> {
  const actions = [];
  
  if (data.dataAnalysis === 'never') {
    actions.push({
      action: 'Set up Google Analytics and conversion tracking',
      impact: 'High',
      effort: 'Low'
    });
  }
  
  if (data.currentChannels.length < 2) {
    actions.push({
      action: 'Add 2-3 new marketing channels',
      impact: 'High',
      effort: 'Medium'
    });
  }
  
  if (data.contentStrategy === 'no-strategy') {
    actions.push({
      action: 'Create a 3-month content calendar',
      impact: 'Medium',
      effort: 'Medium'
    });
  }
  
  return actions.slice(0, 3); // Return top 3 priority actions
}

function getNextSteps(score: number): string[] {
  if (score >= 80) {
    return [
      'Focus on advanced optimization and scaling',
      'Explore new emerging marketing channels',
      'Implement advanced automation and AI tools'
    ];
  } else if (score >= 65) {
    return [
      'Optimize existing channels for better performance',
      'Implement advanced tracking and attribution',
      'Scale successful campaigns and strategies'
    ];
  } else if (score >= 50) {
    return [
      'Improve data collection and analysis capabilities',
      'Diversify marketing channel portfolio',
      'Enhance content strategy and production'
    ];
  } else {
    return [
      'Establish basic marketing infrastructure',
      'Set up proper tracking and measurement',
      'Create foundational marketing processes'
    ];
  }
}

function getEstimatedTime(score: number): string {
  if (score >= 80) return '1-2 months for optimization';
  if (score >= 65) return '2-3 months for improvements';
  if (score >= 50) return '3-6 months for significant progress';
  return '6-12 months for complete transformation';
}

function getBenchmarkComparison(score: number, businessAge: string) {
  const benchmarks = {
    'less-than-1-year': { average: 45, good: 60 },
    '1-3-years': { average: 55, good: 70 },
    '3-5-years': { average: 65, good: 80 },
    'more-than-5-years': { average: 70, good: 85 }
  };
  
  const benchmark = benchmarks[businessAge as keyof typeof benchmarks] || benchmarks['1-3-years'];
  
  return {
    yourScore: Math.round(score),
    industryAverage: benchmark.average,
    goodScore: benchmark.good,
    percentile: score > benchmark.good ? 'Top 25%' : score > benchmark.average ? 'Above Average' : 'Below Average'
  };
} 