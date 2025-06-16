import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validationSchemas';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate the data
    const validatedData = await contactSchema.validate(data, { abortEarly: false });
    
    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification to team
    // 3. Send confirmation email to user
    // 4. Integrate with CRM (HubSpot, Salesforce, etc.)
    // 5. Add to email marketing list
    
    console.log('Contact Form Submission:', validatedData);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Determine urgency based on timeline and budget
    const isUrgent = validatedData.timeline === 'ASAP - Need help immediately' || 
                     (validatedData.budget && ['₹10L+ per month', '₹5L - ₹10L per month'].includes(validatedData.budget));
    
    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We\'ll get back to you within 24 hours.',
      data: {
        submissionId: `CONTACT-${Date.now()}`,
        priority: isUrgent ? 'high' : 'normal',
        estimatedResponse: isUrgent ? '2-4 hours' : '24 hours',
        nextSteps: [
          'Our team will review your requirements',
          'We\'ll prepare a customized proposal',
          'You\'ll receive a call to discuss your project',
          'Get a detailed strategy and timeline'
        ],
        recommendedServices: getRecommendedServices(validatedData.marketingGoals?.filter((goal): goal is string => goal !== undefined) || [])
      }
    });
    
  } catch (error: any) {
    console.error('Contact Form API Error:', error);
    
    if (error.name === 'ValidationError') {
      return NextResponse.json({
        success: false,
        message: 'Please check your form inputs',
        errors: error.errors
      }, { status: 400 });
    }
    
    return NextResponse.json({
      success: false,
      message: 'An error occurred while processing your request. Please try again.'
    }, { status: 500 });
  }
}

function getRecommendedServices(goals: string[]) {
  const serviceMap: { [key: string]: string[] } = {
    'increase-revenue': ['Growth Acceleration', 'Discovery & Strategy'],
    'improve-roas': ['Growth Acceleration', 'Creative Excellence'],
    'scale-business': ['Discovery & Strategy', 'Growth Acceleration'],
    'brand-awareness': ['Creative Excellence', 'Growth Acceleration'],
    'customer-acquisition': ['Growth Acceleration', 'Creative Excellence'],
    'retention': ['Growth Acceleration', 'Discovery & Strategy']
  };
  
  const recommendedServices = new Set<string>();
  
  goals.forEach(goal => {
    const services = serviceMap[goal] || [];
    services.forEach(service => recommendedServices.add(service));
  });
  
  return Array.from(recommendedServices);
} 