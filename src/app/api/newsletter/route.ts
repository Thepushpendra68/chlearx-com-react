import { NextRequest, NextResponse } from 'next/server';
import { newsletterSchema } from '@/lib/validationSchemas';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate the data
    const validatedData = await newsletterSchema.validate(data, { abortEarly: false });
    
    // Here you would typically:
    // 1. Add to email marketing platform (Mailchimp, ConvertKit, etc.)
    // 2. Send welcome email
    // 3. Tag based on interests
    // 4. Add to appropriate email sequences
    
    console.log('Newsletter Subscription:', validatedData);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // You would integrate with your email service here
    // await addToEmailList(validatedData.email, validatedData.interests);
    // await sendWelcomeEmail(validatedData.email);
    
    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed! Check your email for a welcome message.',
      data: {
        email: validatedData.email,
        interests: validatedData.interests || [],
        subscriptionDate: new Date().toISOString(),
        welcomeEmailSent: true,
        nextNewsletter: getNextNewsletterDate()
      }
    });
    
  } catch (error: any) {
    console.error('Newsletter API Error:', error);
    
    if (error.name === 'ValidationError') {
      return NextResponse.json({
        success: false,
        message: 'Please enter a valid email address',
        errors: error.errors
      }, { status: 400 });
    }
    
    return NextResponse.json({
      success: false,
      message: 'An error occurred while subscribing. Please try again.'
    }, { status: 500 });
  }
}

function getNextNewsletterDate() {
  const now = new Date();
  const nextFriday = new Date(now);
  nextFriday.setDate(now.getDate() + (5 - now.getDay() + 7) % 7);
  return nextFriday.toISOString().split('T')[0];
} 