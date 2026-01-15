# STARSYNX - Digital Excellence Solutions

A stunning, professional website for STARSYNX, a global digital solutions company. Built with Next.js 14+, Tailwind CSS, and Framer Motion for smooth animations.

## 🚀 Features

- **Modern Design**: Clean, professional UI with a navy blue and cyan color scheme
- **Global Presence**: Offices in UAE, Pakistan, and Australia
- **Comprehensive Services**: SEO, Digital Marketing, Web/App Development, UI/UX Design
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Built-in SEO optimization with metadata and structured data
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Fast Performance**: Next.js 14+ with App Router for optimal performance
- **Accessibility**: WCAG compliant with proper ARIA attributes
- **Dark Theme**: Professional dark theme with high contrast

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── /                  # Home page
│   ├── /about             # About us page
│   ├── /services          # Services listing
│   │   └── /[slug]        # Dynamic service detail pages
│   ├── /contact           # Contact page
│   ├── /admin             # Admin dashboard
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Site footer
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx     # Button component
│   │   ├── ServiceCard.tsx # Service card component
│   │   ├── AnimatedText.tsx # Text animation wrapper
│   │   └── Accordion.tsx  # FAQ accordion
│   ├── shared/            # Shared components
│   │   ├── ContactForm.tsx # Contact form
│   │   ├── WhatsAppButton.tsx # Floating WhatsApp button
│   │   ├── SocialLinks.tsx # Social media links
│   │   └── Schema.tsx     # SEO structured data
│   └── admin/             # Admin components
│       ├── Dashboard.tsx  # Admin dashboard
│       └── StatCard.tsx   # Statistics card
```

## 🎨 Design System

### Color Palette

- **Primary Background**: #0A192F (Deep navy blue)
- **Secondary Background**: #112240 (Lighter navy)
- **Accent Color**: #00AEEF (Cyan blue)
- **Text on Dark**: #CCD6F6 (Light slate)
- **Text on Light**: #112240 (Dark charcoal)
- **Card Background**: #FFFFFF (White)

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, clear hierarchy
- **Body Text**: Comfortable line spacing and readability

### UI Elements

- **Cards**: White background with subtle shadows and cyan corner accents
- **Buttons**: Primary (cyan), Secondary (slate), Outline variants
- **Animations**: Smooth fade-in and slide-up effects on scroll

## 📄 Pages

### Home Page (`/`)

- Hero section with compelling headline
- Service icons bar
- About section with features
- Process visualization (4 steps)
- Client logos
- FAQ accordion
- Contact form

### About Page (`/about`)

- Hero with mission statement
- Statistics showcase
- Core values with features
- Why choose us section
- Team showcase
- Client testimonials

### Services Page (`/services`)

- SEO Services (On-Page, Off-Page, Technical)
- Digital Marketing (Meta Ads, Google Ads, Campaigns)
- Social Media Management
- Web Development (WordPress, Shopify, Custom)
- App Development (iOS, Android, Hybrid)
- UI/UX & Design Solutions
- Technology showcase
- Call-to-action sections

### Service Detail Pages (`/services/[slug]`)

- Detailed service information
- Key features list
- Technology showcase
- Benefits and process
- Client testimonials
- Contact form

### Contact Page (`/contact`)

- Multiple contact methods
- Global office locations
- Contact form
- FAQ section
- Map placeholder

### Admin Dashboard (`/admin`)

- Website analytics (mock data)
- Statistics cards
- Visitor charts
- Recent activity feed

## 🔧 Components

### UI Components

- **Button**: Versatile button with variants and sizes
- **ServiceCard**: Reusable service display card
- **AnimatedText**: Text with scroll-triggered animations
- **Accordion**: Expandable FAQ component

### Layout Components

- **Header**: Sticky navigation with scroll effects
- **Footer**: Multi-column footer with newsletter signup

### Shared Components

- **ContactForm**: Full-featured contact form with validation
- **WhatsAppButton**: Floating WhatsApp contact button
- **SocialLinks**: Social media icons and links
- **Schema**: SEO structured data for search engines

## 🎯 SEO Features

- Dynamic metadata for each page
- Open Graph tags for social sharing
- JSON-LD structured data for search engines
- Semantic HTML5 structure
- Optimized images with Next.js Image component
- Fast loading times with Next.js optimization

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start the development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000`

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Desktop**: 1200px+ (Large screens)
- **Laptop**: 1024px - 1199px (Medium screens)
- **Tablet**: 768px - 1023px (Small screens)
- **Mobile**: 320px - 767px (Extra small screens)

## ⚡ Performance Features

- **Next.js 14+**: Latest framework with App Router
- **Image Optimization**: Automatic image optimization and lazy loading
- **Code Splitting**: Automatic code splitting for faster loads
- **Static Generation**: Pre-rendered pages for better performance
- **Turbopack**: Fast bundler for development

## 🔐 Features Implemented

- [x] Modern, professional design
- [x] Fully responsive layout
- [x] SEO optimization with metadata
- [x] Smooth animations with Framer Motion
- [x] Contact forms with validation
- [x] WhatsApp integration
- [x] Admin dashboard with mock data
- [x] Dynamic service pages
- [x] FAQ accordion
- [x] Newsletter signup
- [x] Social media integration
- [x] Structured data for SEO

## 🎨 Customization

To customize the website:

1. **Colors**: Update the CSS variables in `globals.css`
2. **Content**: Modify the data in each page component
3. **Branding**: Replace logo and company information
4. **Services**: Update the services data in `/services/[slug]/page.tsx`
5. **Contact Info**: Update contact details in components

## 📧 Contact Information

- **Email**: contact@starsynx.com
- **Website**: https://www.starsynx.com

### Global Offices

**UAE (Head Office)**:

- Office M-06, Makeen Building, Al Garhoud, Dubai, UAE
- Phone: +971 56 485 3101

**Pakistan**:

- Suit No. 9, Izhar Villas, Park Wafaqi Colony Road, Johar Town, Lahore
- Phone: +92 319 3070306

**Australia**:

- 4/56 Henderson Road, Queanbeyan NSW 2620, Canberra Region
- Phone: +61 460 928 401

### Social Media

- **LinkedIn**: STARSYNX
- **Instagram**: @starsynx
- **Facebook**: Starsynx

## 📄 License

This project is proprietary software for STARSYNX.

---

Built with ❤️ by the STARSYNX development team.

{
country: 'UAE (Head Office)',
address: 'Office M-06, Makeen Building\nAl Garhoud, Dubai, UAE',
phone: '+971 56 485 3101',
email: 'contact@starsynx.com',
hours: 'Sun - Thu: 9:00 AM - 6:00 PM',
icon: <Building className="w-8 h-8" />,
},
{
country: 'Pakistan',
address: 'Suit No. 9, Izhar Villas\nPark Wafaqi Colony Road\nJohar Town, Lahore',
phone: '+92 319 3070306',
email: 'contact@starsynx.com',
hours: 'Mon - Fri: 9:00 AM - 6:00 PM',
icon: <Building className="w-8 h-8" />,
},
{
country: 'Australia',
address: '4/56 Henderson Road\nQueanbeyan NSW 2620\nCanberra Region',
phone: '+61 460 928 401',
email: 'contact@starsynx.com',
hours: 'Mon - Fri: 9:00 AM - 5:00 PM',
icon: <Building className="w-8 h-8" />,
},
