# Contact Form Email Setup Guide

The contact form has been configured to send all submissions to **contact@starsynx.com**.

## Setup Instructions

### 1. Create Environment File

Create a `.env.local` file in the root directory with the following variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM="Starsynx Website <your-email@gmail.com>"
```

### 2. Configure Email Provider

#### Option A: Using Gmail

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to [Google Account App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and your device
   - Copy the generated 16-character password
3. **Update .env.local**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-gmail@gmail.com
   SMTP_PASS=your-16-char-app-password
   ```

#### Option B: Using SendGrid (Recommended for Production)

1. Sign up at [SendGrid](https://sendgrid.com/)
2. Create an API key
3. Update .env.local:
   ```env
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=apikey
   SMTP_PASS=your-sendgrid-api-key
   SMTP_FROM="Starsynx <noreply@starsynx.com>"
   ```

#### Option C: Using Your Custom Domain Email

If you have email hosting with your domain:

```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@starsynx.com
SMTP_PASS=your-email-password
SMTP_FROM="Starsynx <contact@starsynx.com>"
```

### 3. Test the Configuration

1. Start the development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check if the email arrives at contact@starsynx.com

## Email Features

The contact form emails include:

- ✅ All form fields (name, email, company, phone, service, message)
- ✅ Professional HTML formatting
- ✅ Reply-to address set to the sender's email
- ✅ Plain text fallback
- ✅ Timestamp of submission
- ✅ Sent to: contact@starsynx.com

## Troubleshooting

### Email not sending

- Check that all SMTP\_\* environment variables are set correctly
- Verify your email credentials
- Check the server console for error messages
- For Gmail, ensure App Password is used (not regular password)

### Email going to spam

- Use a custom domain email (not Gmail) for SMTP_FROM
- Set up SPF, DKIM, and DMARC records for your domain
- Consider using a dedicated email service like SendGrid

### Port 587 blocked

- Some networks block port 587
- Try port 465 with SMTP_SECURE=true
- Or use port 25 (not recommended)

## Security Notes

- ⚠️ Never commit `.env.local` to git
- ⚠️ Keep your SMTP credentials secure
- ⚠️ Use App Passwords for Gmail (never your main password)
- ⚠️ For production, use environment variables in your hosting platform

## Changing the Recipient Email

To change the recipient email address, edit `src/app/api/contact/route.ts`:

```typescript
const RECIPIENT_EMAILS = [
  "contact@starsynx.com", // You can add more emails here
  "support@starsynx.com",
];
```
