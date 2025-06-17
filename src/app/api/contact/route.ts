import { NextRequest, NextResponse } from 'next/server';
import * as yup from 'yup';

// Simple validation schema that matches our contact form
const simpleContactSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  phone: yup
    .string()
    .optional(),
  company: yup
    .string()
    .optional(),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate the data with our simple schema
    const validatedData = await simpleContactSchema.validate(data, { abortEarly: false });
    
    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification to team
    // 3. Send confirmation email to user
    // 4. Integrate with CRM (HubSpot, Salesforce, etc.)
    // 5. Add to email marketing list
    
    console.log('Contact Form Submission:', validatedData);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We\'ll get back to you within 24 hours.',
      data: {
        submissionId: `CONTACT-${Date.now()}`,
        priority: 'normal',
        estimatedResponse: '24 hours',
        nextSteps: [
          'Our team will review your message',
          'We\'ll prepare a customized response',
          'You\'ll receive a call or email to discuss your needs',
          'Get a detailed proposal and next steps'
        ]
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