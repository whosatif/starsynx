# Quick Fix: Use Your Personal Gmail

Since `contact@starsynx.com` is not a Gmail/Google Workspace account, you need to use a different email for SMTP authentication.

## Solution: Use Your Personal Gmail to Send Emails

Update `.env.local` with these settings:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-personal-gmail@gmail.com
SMTP_PASS=your-gmail-app-password
SMTP_FROM="Starsynx Website <your-personal-gmail@gmail.com>"
```

**The emails will still be sent TO contact@starsynx.com** (this is configured in the code and won't change).

### Steps:

1. **Use your personal Gmail account** (e.g., tumputty1@gmail.com)
2. **Enable 2-Factor Authentication** on that Gmail account
3. **Generate an App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" → "Windows Computer" (or any device)
   - Click "Generate"
   - Copy the 16-character password (remove spaces)

4. **Update `.env.local`**:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tumputty1@gmail.com
SMTP_PASS=xxxx-xxxx-xxxx-xxxx
SMTP_FROM="Starsynx Website <tumputty1@gmail.com>"
```

Replace `tumputty1@gmail.com` with YOUR actual Gmail address and use the App Password you generated.

5. **Restart the dev server**: `npm run dev`

6. **Test the form again**

The form submissions will be sent FROM your Gmail but TO contact@starsynx.com ✅
