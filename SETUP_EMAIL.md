# Email Setup Instructions

To receive emails from your portfolio contact form, follow these steps:

## Option 1: Web3Forms (Recommended - Completely Free)

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email: `shreyasinghrathore310@gmail.com`
3. Click "Create Access Key"
4. Copy the access key they give you
5. Open `components/sections/ContactSection.tsx`
6. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key

**Features:**
- ✅ Completely free
- ✅ No signup required
- ✅ 250 submissions per month
- ✅ Email notifications
- ✅ Spam protection

## Option 2: EmailJS (Free - Requires Signup)

1. Go to [https://www.emailjs.com](https://www.emailjs.com) and sign up
2. Add an email service (Gmail)
3. Create an email template
4. Get your:
   - Service ID
   - Template ID
   - Public Key
5. Add them to `.env.local`:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Current Fallback

If no email service is configured, the form will open the visitor's default email client (Outlook, Gmail app, etc.) with a pre-filled message. The visitor will need to click "Send" manually.

## Testing

After setup, test your form by:
1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your email inbox for the message

---

**Need help?** Contact support for the service you choose or check their documentation.
