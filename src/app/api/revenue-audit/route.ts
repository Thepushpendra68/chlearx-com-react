import { NextRequest, NextResponse } from 'next/server';
import { revenueAuditSchema } from '@/lib/validationSchemas';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate the data
    const validatedData = await revenueAuditSchema.validate(data, { abortEarly: false });
    
    // Add timestamp and unique ID
    const submissionData = {
      ...validatedData,
      submissionId: `AUDIT-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    };
    
    // Store data locally in a JSON file
    try {
      const dataDir = path.join(process.cwd(), 'data');
      const filePath = path.join(dataDir, 'audit-submissions.json');
      
      // Create directory if it doesn't exist
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      
      // Read existing data or initialize empty array
      let existingData = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        existingData = JSON.parse(fileContent);
      }
      
      // Add new submission
      existingData.push(submissionData);
      
      // Write back to file
      fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
      
      console.log('Data stored successfully:', submissionData.submissionId);
    } catch (fileError) {
      console.error('Error storing data locally:', fileError);
    }
    
    // Send email notification (you'll need to implement email service)
    try {
      // For now, we'll log the email content
      console.log('EMAIL NOTIFICATION:');
      console.log('To: pushpendrachl@gmail.com');
      console.log('Subject: New Audit Request Submission');
      console.log('Content:', JSON.stringify(submissionData, null, 2));
      
      // TODO: Implement actual email sending using services like:
      // - Resend
      // - SendGrid
      // - Nodemailer with SMTP
      // - AWS SES
      
      /*
      Example with Resend:
      const { Resend } = require('resend');
      const resend = new Resend('your-api-key');
      
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'pushpendrachl@gmail.com',
        subject: 'New Audit Request Submission',
        html: `
          <h2>New Audit Request</h2>
          <p><strong>Business:</strong> ${submissionData.businessName}</p>
          <p><strong>Contact:</strong> ${submissionData.firstName} ${submissionData.lastName}</p>
          <p><strong>Email:</strong> ${submissionData.contactEmail}</p>
          <p><strong>Website:</strong> ${submissionData.website}</p>
          <p><strong>Phone:</strong> ${submissionData.phoneNumber}</p>
          <p><strong>Monthly Revenue:</strong> ${submissionData.monthlyRevenue}</p>
          <p><strong>Marketing Budget:</strong> ${submissionData.marketingBudget}</p>
          <p><strong>Primary Goal:</strong> ${submissionData.primaryGoal}</p>
          <p><strong>Challenges:</strong> ${submissionData.currentChallenges}</p>
          <p><strong>Submitted At:</strong> ${submissionData.submittedAt}</p>
        `
      });
      */
      
    } catch (emailError) {
      console.error('Error sending email notification:', emailError);
    }
    
    // Log the successful submission
    console.log('Revenue Audit Submission Processed:', submissionData.submissionId);
    
    return NextResponse.json({
      success: true,
      message: 'Your audit request has been submitted successfully! We\'ll contact you within 24 hours.',
      data: {
        submissionId: submissionData.submissionId,
        estimatedResponse: '24 hours',
        nextSteps: [
          'Our team will review your submission',
          'We\'ll prepare a customized audit framework',
          'You\'ll receive a call to schedule your audit session',
          'Get your comprehensive audit report'
        ]
      }
    });
    
  } catch (error: any) {
    console.error('Revenue Audit API Error:', error);
    
    if (error.name === 'ValidationError') {
      return NextResponse.json({
        success: false,
        message: 'Validation failed',
        errors: error.errors
      }, { status: 400 });
    }
    
    return NextResponse.json({
      success: false,
      message: 'An error occurred while processing your request. Please try again.'
    }, { status: 500 });
  }
} 