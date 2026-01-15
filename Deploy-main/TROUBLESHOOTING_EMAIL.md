# Email Configuration Troubleshooting

## Current Issue: "Failed to send message. Please try again."

The contact form is failing to send emails. This is likely due to incorrect SMTP settings for your email provider.

## Step 1: Determine Your Email Provider

Since you're using `contact@starsynx.com`, you need to find out which email hosting service provides this email. Common options:

### Option A: Custom Domain with cPanel/Hosting Provider
If your domain is hosted with a web hosting provider (GoDaddy, Bluehost, HostGator, etc.):

```env
SMTP_HOST=mail.starsynx.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@starsynx.com
SMTP_PASS=ozadswdybnpyfvzg
SMTP_FROM="Starsynx Website <contact@starsynx.com>"
```

### Option B: Microsoft 365 / Outlook Business
If using Microsoft 365 for your domain:

```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@starsynx.com
SMTP_PASS=ozadswdybnpyfvzg
SMTP_FROM="Starsynx Website <contact@starsynx.com>"
```

### Option C: Google Workspace (G Suite)
If using Google Workspace for your custom domain:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@starsynx.com
SMTP_PASS=your-app-password-here
SMTP_FROM="Starsynx Website <contact@starsynx.com>"
```

**Note:** For Google Workspace, you must use an App Password, not your regular password.

### Option D: Zoho Mail
If using Zoho Mail:

```env
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@starsynx.com
SMTP_PASS=ozadswdybnpyfvzg
SMTP_FROM="Starsynx Website <contact@starsynx.com>"
```

## Step 2: Find Your SMTP Server Settings

### Method 1: Check Your Email Client Settings
1. Open your email client (Outlook, Thunderbird, etc.)
2. Go to Account Settings
3. Look for "Outgoing Server" or "SMTP Server" settings
4. Copy those exact settings to `.env.local`

### Method 2: Contact Your Email Provider
Contact your email hosting provider's support and ask for:
- SMTP server hostname
- SMTP port (usually 587 or 465)
- Whether SSL/TLS is required
- Authentication requirements

### Method 3: Check Your Hosting Control Panel
If you have cPanel or Plesk:
1. Login to your hosting control panel
2. Look for "Email Accounts" or "Email Settings"
3. Find "Mail Configuration" or "Email Client Settings"
4. Copy the SMTP server details

## Step 3: Test Your Configuration

After updating `.env.local`:

1. **Restart the development server:**
   ```bash
   # Stop the current server (Ctrl+C)
   npm run dev
   ```

2. **Submit a test form** and check the terminal for detailed error logs

3. **Check for these common errors:**

   - **"Invalid login"** → Wrong password or username
   - **"Connection timeout"** → Wrong SMTP host or port
   - **"Authentication failed"** → Need App Password or 2FA enabled
   - **"Connection refused"** → Port blocked by firewall/ISP

## Step 4: Alternative Solution - Use SendGrid (Recommended)

If you can't get your email provider's SMTP working, use SendGrid (free for 100 emails/day):

1. **Sign up at** https://sendgrid.com/
2. **Create an API Key:**
   - Go to Settings → API Keys
   - Click "Create API Key"
   - Choose "Full Access"
   - Copy the generated key

3. **Update `.env.local`:**
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key-here
SMTP_FROM="Starsynx Website <noreply@starsynx.com>"
```

4. **Verify your domain in SendGrid** (required for production):
   - Go to Settings → Sender Authentication
   - Follow the domain verification process

## Step 5: Check Server Logs

After submitting the form, check the terminal where `npm run dev` is running. You should see:

```
New contact form submission:
Creating email transporter...
SMTP Host: [your host]
SMTP Port: [your port]
SMTP User: contact@starsynx.com
Attempting to send email...
```

If you see an error, share the full error message for further assistance.

## Common Fixes

### Fix 1: Remove Quotes from SMTP_FROM
```env
# Wrong
SMTP_FROM="Starsynx Website <contact@starsynx.com>"

# Correct
SMTP_FROM=Starsynx Website <contact@starsynx.com>
```

### Fix 2: Try Port 465 with SSL
```env
SMTP_HOST=mail.starsynx.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=contact@starsynx.com
SMTP_PASS=ozadswdybnpyfvzg
```

### Fix 3: Try Port 25 (Less Secure)
```env
SMTP_HOST=mail.starsynx.com
SMTP_PORT=25
SMTP_SECURE=false
SMTP_USER=contact@starsynx.com
SMTP_PASS=ozadswdybnpyfvzg
```

## Need Help?

1. **Check the terminal output** after submitting the form
2. **Look for error messages** in the browser console (F12)
3. **Contact your email provider** for correct SMTP settings
4. **Consider using SendGrid** as a reliable alternative

The enhanced error logging will now show exactly what's going wrong!
