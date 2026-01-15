import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// All email addresses to receive form submissions
const RECIPIENT_EMAILS = [
  'starsynxofficial@gmail.com'
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the submission (for development)
    console.log('New contact form submission:');
    console.log('From:', name, '(' + email + ')');
    console.log('Company:', company || 'Not provided');
    console.log('Phone:', phone || 'Not provided');
    console.log('Service:', service || 'Not specified');
    console.log('Message:', message);

    // Check if SMTP credentials are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured!');
      console.error('SMTP_USER:', process.env.SMTP_USER ? 'Set' : 'Missing');
      console.error('SMTP_PASS:', process.env.SMTP_PASS ? 'Set' : 'Missing');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Create email transporter
    console.log('Creating email transporter...');
    console.log('SMTP Host:', process.env.SMTP_HOST);
    console.log('SMTP Port:', process.env.SMTP_PORT);
    console.log('SMTP User:', process.env.SMTP_USER);
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Create HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0891b2; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #334155; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ''}
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #0891b2; margin: 20px 0;">
          <h3 style="color: #334155; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="color: #64748b; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <p>This email was sent from the Starsynx contact form.</p>
          <p>Submitted on: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    // Send email
    console.log('Attempting to send email...');
    const mailOptions = {
      from: process.env.SMTP_FROM || `"Starsynx Website" <${process.env.SMTP_USER}>`,
      to: RECIPIENT_EMAILS.join(', '),
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: htmlContent,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}
Service: ${service || 'Not specified'}

Message:
${message}

---
Submitted on: ${new Date().toLocaleString()}
      `.trim(),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Recipients:', RECIPIENT_EMAILS.join(', '));

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully! We will get back to you soon.' 
    });

  } catch (error) {
    console.error('Contact form error details:');
    console.error('Error name:', error instanceof Error ? error.name : 'Unknown');
    console.error('Error message:', error instanceof Error ? error.message : String(error));
    console.error('Full error:', error);
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}