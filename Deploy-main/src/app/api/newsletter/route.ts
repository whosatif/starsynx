import { NextRequest, NextResponse } from 'next/server';

// All email addresses to receive newsletter subscriptions
const RECIPIENT_EMAILS = [
  'contact@starsynx.com'
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Basic validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // For now, just log the subscription (you can integrate with email service later)
    console.log('New newsletter subscription:', email);
    console.log('Notification would be sent to:', RECIPIENT_EMAILS);

    // Here you would typically:
    // 1. Save the email to your newsletter database
    // 2. Send a notification to all recipient emails
    // 3. Send a confirmation email to the subscriber

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter!' 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}