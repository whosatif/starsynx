import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailPage from "./ServiceDetailPage";

// Service data
const services = {
  "seo-services": {
    title: "SEO Services",
    description:
      "Comprehensive SEO optimization for maximum visibility and organic traffic growth",
    longDescription:
      "Our comprehensive SEO services help your business dominate search engine rankings and drive organic traffic. We provide advanced on-page optimization, strategic off-page SEO, technical SEO audits, competitor analysis, and data-driven SEO strategies tailored to your business goals and target audience.",
    overview:
      "At STARSYNX, we understand that effective SEO is more than just keywords—it's about creating a holistic digital presence that search engines love and users trust. Our proven SEO methodology combines technical expertise, creative content strategy, and data-driven insights to deliver sustainable organic growth for businesses across all industries.",
    features: [
      "Advanced Keyword Research & Analysis",
      "Comprehensive On-Page SEO Optimization",
      "Strategic Off-Page SEO & Link Building",
      "Technical SEO Audits & Site Speed Optimization",
      "Local SEO & Google My Business Optimization",
      "SEO Content Strategy & Content Marketing",
      "Competitor Analysis & Market Research",
      "Schema Markup Implementation",
      "Mobile SEO & Core Web Vitals Optimization",
      "E-commerce SEO & Product Optimization",
    ],
    serviceCategories: [
      {
        name: "Technical SEO",
        items: [
          "Website speed optimization",
          "Core Web Vitals improvement",
          "Mobile-first indexing setup",
          "XML sitemap creation",
          "Robots.txt optimization",
          "Schema markup implementation",
          "SSL certificate setup",
          "URL structure optimization",
        ],
      },
      {
        name: "On-Page SEO",
        items: [
          "Title tag & meta description optimization",
          "Header tag structuring (H1-H6)",
          "Internal linking strategy",
          "Image optimization & alt text",
          "Content optimization for target keywords",
          "User experience improvements",
          "Featured snippets optimization",
          "Page loading speed enhancement",
        ],
      },
      {
        name: "Off-Page SEO",
        items: [
          "High-quality backlink building",
          "Guest posting & content outreach",
          "Directory submissions",
          "Social media signal building",
          "Brand mention management",
          "Influencer collaborations",
          "Local citation building",
          "Online reputation management",
        ],
      },
    ],
    keyMetrics: [
      { value: "300%", label: "Average Organic Traffic Increase" },
      { value: "85%", label: "Keywords Ranking on Page 1" },
      { value: "150%", label: "Average ROI Improvement" },
      { value: "90%", label: "Client Retention Rate" },
    ],
    caseStudies: [
      {
        title: "E-commerce Store Growth",
        description:
          "A local e-commerce business wanted to increase their organic visibility and compete with larger retailers.",
        results: [
          "400% increase in organic traffic",
          "Top 3 rankings for 50+ keywords",
          "250% boost in online sales",
        ],
      },
      {
        title: "Local Service Business",
        description:
          "A professional services company needed to dominate local search results in their competitive market.",
        results: [
          "1st page rankings for all target keywords",
          "300% increase in local leads",
          "5-star Google My Business rating",
        ],
      },
      {
        title: "B2B Software Company",
        description:
          "A B2B software provider wanted to establish thought leadership and generate qualified leads through organic search.",
        results: [
          "500% increase in organic leads",
          "Top 10 rankings for industry terms",
          "150% improvement in conversion rate",
        ],
      },
    ],
    technologies: [
      "Google Analytics 4",
      "Google Search Console",
      "SEMrush Pro",
      "Ahrefs",
      "Screaming Frog SEO Spider",
      "Schema Markup",
      "GTMetrix",
      "Google PageSpeed Insights",
      "Moz Pro",
      "BrightLocal",
      "Yoast SEO",
      "Google Tag Manager",
    ],
    icon: "Search",
  },
  "web-development": {
    title: "Web Development",
    description:
      "Custom web applications and websites built with cutting-edge technologies",
    longDescription:
      "We create stunning, high-performance websites and powerful web applications using the latest technologies and frameworks. Our web development services focus on responsive design, performance optimization, security, SEO-friendliness, and exceptional user experience across all devices and browsers.",
    overview:
      "From concept to deployment, STARSYNX delivers web solutions that not only look exceptional but perform flawlessly. Our development process combines modern frameworks, best practices, and innovative design to create websites that drive engagement, conversions, and business growth. Whether you need a simple business website or a complex web application, we have the expertise to bring your vision to life.",
    features: [
      "Custom WordPress Development & Themes",
      "Shopify E-commerce Solutions & Customization",
      "React & Next.js Web Applications",
      "Responsive & Mobile-First Design",
      "Performance Optimization & Speed Enhancement",
      "SEO-Friendly Architecture & Implementation",
      "Security Best Practices & SSL Integration",
      "Cross-browser Compatibility Testing",
      "Content Management Systems (CMS)",
      "Progressive Web Apps (PWA) Development",
      "API Integration & Third-party Services",
      "Database Design & Management",
    ],
    serviceCategories: [
      {
        name: "Frontend Development",
        items: [
          "React & Next.js applications",
          "Vue.js & Angular development",
          "Responsive web design",
          "Progressive Web Apps (PWAs)",
          "Single Page Applications (SPAs)",
          "Component-based architecture",
          "State management (Redux, Context API)",
          "Modern CSS frameworks (Tailwind, Bootstrap)",
        ],
      },
      {
        name: "Backend Development",
        items: [
          "Node.js & Express server development",
          "PHP & Laravel applications",
          "Python & Django frameworks",
          "Database design & optimization",
          "RESTful API development",
          "GraphQL implementation",
          "Authentication & authorization",
          "Third-party integrations",
        ],
      },
      {
        name: "E-commerce Solutions",
        items: [
          "Shopify store development",
          "WooCommerce customization",
          "Custom e-commerce platforms",
          "Payment gateway integration",
          "Inventory management systems",
          "Multi-vendor marketplaces",
          "Shopping cart optimization",
          "Order management systems",
        ],
      },
    ],
    keyMetrics: [
      { value: "99.9%", label: "Uptime Guarantee" },
      { value: "<3s", label: "Average Page Load Time" },
      { value: "100%", label: "Mobile Responsive" },
      { value: "500+", label: "Websites Delivered" },
    ],
    caseStudies: [
      {
        title: "E-commerce Platform Redesign",
        description:
          "A fashion retailer needed a complete overhaul of their online store to improve user experience and increase sales.",
        results: [
          "200% increase in conversion rate",
          "50% reduction in bounce rate",
          "300% boost in mobile sales",
        ],
      },
      {
        title: "Corporate Website Development",
        description:
          "A multinational corporation required a scalable, multilingual website to showcase their global presence.",
        results: [
          "40% increase in lead generation",
          "60% improvement in page speed",
          "95% user satisfaction score",
        ],
      },
      {
        title: "SaaS Application Development",
        description:
          "A startup needed a full-stack web application for their innovative software-as-a-service platform.",
        results: [
          "Successfully launched in 4 months",
          "10,000+ active users within 6 months",
          "$2M+ in funding raised",
        ],
      },
    ],
    technologies: [
      "React & Next.js",
      "WordPress & PHP",
      "Shopify & Liquid",
      "TypeScript & JavaScript",
      "Node.js & Express",
      "MongoDB & MySQL",
      "PostgreSQL",
      "Tailwind CSS",
      "Bootstrap",
      "AWS & Vercel",
      "Docker",
      "Git & GitHub",
    ],
    icon: "Code",
  },
  "social-media-management": {
    title: "Social Media Management",
    description:
      "Comprehensive social media strategy and management for brand growth",
    longDescription:
      "Build meaningful connections on social platforms with our comprehensive social media management services. We handle content strategy, creative post design, video marketing, community engagement, and platform-specific optimization for Instagram, Facebook, LinkedIn, TikTok, and Twitter. From brand visibility to lead conversions, we handle it all.",
    overview:
      "Social media is where your customers spend their time, and STARSYNX ensures your brand makes a lasting impression. We create engaging content, build communities, manage interactions, and analyze performance to continuously improve your social media presence. Our data-driven approach combines creativity with strategy to turn followers into loyal customers.",
    features: [
      "Content Strategy & Planning",
      "Creative Post Design & Graphics",
      "Video Content Creation & Editing",
      "Community Management & Engagement",
      "Influencer Marketing & Partnerships",
      "Platform-Specific Optimization",
      "Social Media Advertising",
      "Analytics & Performance Reporting",
      "Brand Reputation Management",
      "Social Commerce Setup",
      "User-Generated Content Campaigns",
      "Crisis Management & Response",
    ],
    serviceCategories: [
      {
        name: "Content Creation",
        items: [
          "Custom graphics & visuals",
          "Short-form video content",
          "Reels & TikTok videos",
          "Stories & temporary content",
          "Blog posts & articles",
          "Infographics & data visualizations",
          "User-generated content curation",
          "Brand storytelling content",
        ],
      },
      {
        name: "Community Management",
        items: [
          "Daily engagement & responses",
          "Comment moderation",
          "Direct message management",
          "Community building strategies",
          "User feedback collection",
          "Social listening & monitoring",
          "Influencer relationship management",
          "Crisis communication",
        ],
      },
      {
        name: "Platform Management",
        items: [
          "Instagram management & growth",
          "Facebook page optimization",
          "LinkedIn company page management",
          "Twitter/X engagement strategy",
          "TikTok content creation",
          "YouTube channel management",
          "Pinterest marketing",
          "Platform-specific advertising",
        ],
      },
    ],
    keyMetrics: [
      { value: "300%", label: "Average Engagement Increase" },
      { value: "250%", label: "Follower Growth Rate" },
      { value: "85%", label: "Content Engagement Rate" },
      { value: "5M+", label: "Total Reach Generated" },
    ],
    caseStudies: [
      {
        title: "Fashion Brand Growth",
        description:
          "A fashion brand wanted to increase their Instagram following and drive sales through social media channels.",
        results: [
          "500% increase in Instagram followers",
          "10M+ organic reach achieved",
          "300% boost in social commerce sales",
        ],
      },
      {
        title: "B2B LinkedIn Strategy",
        description:
          "A professional services firm needed to establish thought leadership and generate leads on LinkedIn.",
        results: [
          "400% increase in LinkedIn engagement",
          "150 qualified leads per month",
          "Named industry thought leader",
        ],
      },
      {
        title: "Restaurant Social Media",
        description:
          "A local restaurant chain wanted to build brand awareness and drive foot traffic through social media marketing.",
        results: [
          "200K+ followers across platforms",
          "50% increase in restaurant visits",
          "4.8-star average social rating",
        ],
      },
    ],
    technologies: [
      "Meta Business Suite",
      "Hootsuite & Buffer",
      "Sprout Social",
      "Canva & Adobe Creative Suite",
      "CapCut & InShot",
      "Later & Planoly",
      "Brandwatch",
      "Google Analytics",
      "Instagram Insights",
      "Facebook Analytics",
      "LinkedIn Analytics",
      "TikTok Creator Tools",
    ],
    icon: "Users",
  },
  "ui-ux-design-solutions": {
    title: "UI/UX Design Solutions",
    description: "Creative design solutions and exceptional user experiences",
    longDescription:
      "At STARSYNX (Pvt) Ltd., we create stunning, intuitive interfaces that provide exceptional user experiences. From logo design and brand identity to interactive UI/UX wireframes and prototypes, our design solutions blend creativity with usability to convert visitors into customers.",
    overview:
      "Great design is more than aesthetics—it's about creating experiences that users love and that drive business results. Our design team combines user research, creative expertise, and technical knowledge to create interfaces that are both beautiful and functional. We focus on understanding your users, crafting intuitive experiences, and ensuring every design element serves a purpose.",
    features: [
      "Logo Design & Brand Identity",
      "UI/UX Wireframing & Prototyping",
      "Interactive Design & Animations",
      "User Research & Testing",
      "Design Systems & Style Guides",
      "Responsive Web Design",
      "Mobile App UI/UX Design",
      "Frontend Design Handoff (Figma/Sketch to Code)",
      "Conversion Rate Optimization",
      "Accessibility & Usability Testing",
      "Information Architecture",
      "Visual Design & Branding",
    ],
    serviceCategories: [
      {
        name: "Brand & Visual Design",
        items: [
          "Logo design & brand identity",
          "Color palette & typography",
          "Brand guidelines & style guides",
          "Marketing collateral design",
          "Social media graphics",
          "Presentation templates",
          "Print design & packaging",
          "Brand refresh & redesign",
        ],
      },
      {
        name: "UX Research & Strategy",
        items: [
          "User research & personas",
          "Competitive analysis",
          "User journey mapping",
          "Information architecture",
          "Wireframing & prototyping",
          "Usability testing",
          "A/B testing & optimization",
          "Heuristic evaluation",
        ],
      },
      {
        name: "UI Design & Development",
        items: [
          "Website UI design",
          "Mobile app UI design",
          "Interactive prototypes",
          "Design system creation",
          "Component libraries",
          "Responsive design",
          "Microinteractions & animations",
          "Figma to code handoff",
        ],
      },
    ],
    keyMetrics: [
      { value: "90%", label: "User Satisfaction Score" },
      { value: "65%", label: "Conversion Rate Improvement" },
      { value: "45%", label: "Reduction in Bounce Rate" },
      { value: "500+", label: "Designs Delivered" },
    ],
    caseStudies: [
      {
        title: "E-commerce Redesign",
        description:
          "An online store needed a complete UI/UX overhaul to improve user experience and increase conversions.",
        results: [
          "85% increase in conversion rate",
          "50% reduction in cart abandonment",
          "Improved user satisfaction to 4.7★",
        ],
      },
      {
        title: "SaaS Platform Design",
        description:
          "A software company required an intuitive interface design for their complex enterprise application.",
        results: [
          "40% reduction in user onboarding time",
          "90% user task completion rate",
          "30% increase in feature adoption",
        ],
      },
      {
        title: "Mobile App UI/UX",
        description:
          "A startup needed a mobile-first design for their innovative consumer application.",
        results: [
          "4.8★ average app store rating",
          "Featured on App Store homepage",
          "100K+ downloads in first month",
        ],
      },
    ],
    technologies: [
      "Figma & FigJam",
      "Adobe XD",
      "Sketch & InVision",
      "Adobe Creative Suite",
      "Principle & Framer",
      "Zeplin & Abstract",
      "Miro & Whimsical",
      "Hotjar & Crazy Egg",
      "UserTesting",
      "Optimal Workshop",
      "Maze & Lookback",
      "Webflow & Framer",
    ],
    icon: "Palette",
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    description:
      "High-performance native and cross-platform mobile applications",
    longDescription:
      "Build powerful, scalable mobile applications for iOS and Android platforms that deliver exceptional user experiences. We specialize in both native development and cross-platform solutions using industry-leading frameworks like React Native and Flutter, ensuring optimal performance and seamless functionality across all devices.",
    overview:
      "In today's mobile-first world, having a powerful mobile app is essential for business success. STARSYNX creates mobile applications that not only function flawlessly but also provide intuitive user experiences that keep customers engaged. Our comprehensive approach covers everything from initial concept and design to development, testing, deployment, and ongoing maintenance.",
    features: [
      "Native iOS Development with Swift",
      "Native Android Development with Kotlin",
      "Cross-platform Solutions (React Native & Flutter)",
      "App Store Optimization (ASO)",
      "Push Notifications & Real-time Messaging",
      "Offline Functionality & Data Synchronization",
      "In-app Purchases & Payment Integration",
      "Social Media Integration & Sharing",
      "GPS & Location-based Services",
      "Camera & Media Integration",
      "Performance Monitoring & Analytics",
      "App Maintenance & Updates",
    ],
    serviceCategories: [
      {
        name: "Native Development",
        items: [
          "iOS apps with Swift & SwiftUI",
          "Android apps with Kotlin & Jetpack Compose",
          "Platform-specific UI/UX optimization",
          "Native hardware integration",
          "Advanced security implementations",
          "Core Data & Room database integration",
          "Metal & Vulkan graphics programming",
          "ARKit & ARCore augmented reality",
        ],
      },
      {
        name: "Cross-Platform Solutions",
        items: [
          "React Native development",
          "Flutter & Dart applications",
          "Xamarin solutions",
          "Code sharing between platforms",
          "Unified user experience",
          "Faster time-to-market",
          "Cost-effective development",
          "Single codebase maintenance",
        ],
      },
      {
        name: "App Features & Integration",
        items: [
          "Push notifications & messaging",
          "In-app purchases & subscriptions",
          "Social media login & sharing",
          "GPS & location services",
          "Camera & photo editing",
          "Biometric authentication",
          "Offline data synchronization",
          "Real-time chat & video calling",
        ],
      },
    ],
    keyMetrics: [
      { value: "4.8★", label: "Average App Store Rating" },
      { value: "500K+", label: "App Downloads Generated" },
      { value: "99.9%", label: "Crash-Free Sessions" },
      { value: "2-6", label: "Months Development Time" },
    ],
    caseStudies: [
      {
        title: "Food Delivery App",
        description:
          "A restaurant chain needed a comprehensive food delivery app with real-time tracking and payment integration.",
        results: [
          "50,000+ downloads in first month",
          "4.7-star average rating",
          "300% increase in delivery orders",
        ],
      },
      {
        title: "Fitness & Wellness App",
        description:
          "A fitness startup required a feature-rich app for workout tracking, nutrition planning, and social features.",
        results: [
          "100,000+ active monthly users",
          "Featured on App Store",
          "$500K revenue in first year",
        ],
      },
      {
        title: "Business Management App",
        description:
          "A service company needed a mobile solution for field workers to manage tasks, time tracking, and customer communications.",
        results: [
          "40% improvement in productivity",
          "Real-time data synchronization",
          "Reduced paperwork by 80%",
        ],
      },
    ],
    technologies: [
      "React Native",
      "Flutter & Dart",
      "Swift & Xcode",
      "Kotlin & Android Studio",
      "Firebase & Cloud Services",
      "Redux & State Management",
      "Expo CLI",
      "TestFlight & Play Console",
      "Fastlane CI/CD",
      "Crashlytics",
      "GraphQL",
      "WebRTC",
    ],
    icon: "Smartphone",
  },
  "import-export-it": {
    title: "Import & Export (IT Related)",
    description:
      "Comprehensive IT hardware trade and international logistics solutions",
    longDescription:
      "At STARSYNX (Pvt) Ltd., we facilitate international trade of IT hardware and technology products. Our comprehensive import/export services cover computers, networking equipment, servers, and technology products with end-to-end supply chain management, customs clearance, and logistics solutions for businesses worldwide.",
    overview:
      "In the global IT hardware market, having a reliable trading partner is essential. STARSYNX provides complete import and export services for IT-related products, handling everything from sourcing and procurement to international shipping and customs clearance. We connect businesses with the technology products they need, ensuring smooth transactions and timely delivery across international borders.",
    features: [
      "IT Hardware Sourcing & Procurement",
      "Computer Equipment Import/Export",
      "Networking Equipment Trade",
      "Server & Data Center Hardware",
      "Technology Product Distribution",
      "International Logistics Management",
      "Customs Clearance & Documentation",
      "Quality Assurance & Product Verification",
      "Supply Chain Optimization",
      "Multi-Country Trade Solutions",
      "Vendor Management & Negotiation",
      "After-Sales Support & Warranty Management",
    ],
    serviceCategories: [
      {
        name: "Product Categories",
        items: [
          "Desktop computers & laptops",
          "Servers & storage devices",
          "Networking equipment (routers, switches)",
          "Computer components & peripherals",
          "Mobile devices & tablets",
          "Audio/visual equipment",
          "Security systems & surveillance",
          "Software & licensing solutions",
        ],
      },
      {
        name: "Trade Services",
        items: [
          "International sourcing",
          "Supplier verification & management",
          "Price negotiation & procurement",
          "Quality control & inspection",
          "Import/export documentation",
          "Customs brokerage services",
          "Freight forwarding & shipping",
          "Warehouse & distribution",
        ],
      },
      {
        name: "Geographic Coverage",
        items: [
          "Pakistan import/export operations",
          "UAE trading hub services",
          "Australia market access",
          "Asian market connections",
          "European supplier network",
          "Americas trade partnerships",
          "Cross-border trade facilitation",
          "Multi-currency transactions",
        ],
      },
    ],
    keyMetrics: [
      { value: "$10M+", label: "Annual Trade Volume" },
      { value: "50+", label: "Countries Served" },
      { value: "99%", label: "On-Time Delivery Rate" },
      { value: "1000+", label: "Successful Shipments" },
    ],
    caseStudies: [
      {
        title: "Enterprise Hardware Import",
        description:
          "A large corporation needed to import server equipment and networking hardware for their new data center.",
        results: [
          "$2M worth of equipment imported",
          "20% cost savings through bulk procurement",
          "On-time delivery for project timeline",
        ],
      },
      {
        title: "Technology Reseller Supply",
        description:
          "A technology reseller required consistent supply of computer equipment and peripherals from multiple countries.",
        results: [
          "Established reliable supply chain",
          "30% reduction in procurement costs",
          "Quarterly inventory management",
        ],
      },
      {
        title: "International Distribution",
        description:
          "A manufacturer needed distribution services to export their IT products to multiple international markets.",
        results: [
          "Expanded to 15 new markets",
          "Streamlined customs & compliance",
          "40% increase in international sales",
        ],
      },
    ],
    technologies: [
      "International Trade Systems",
      "Customs Management Software",
      "Logistics Tracking Platforms",
      "ERP Integration",
      "Supply Chain Management",
      "Inventory Management Systems",
      "Documentation & Compliance Tools",
      "Multi-Currency Payment Systems",
      "Freight Management Software",
      "Vendor Management Platforms",
      "Quality Control Systems",
      "CRM for Trade Management",
    ],
    icon: "Shield",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description:
      "Strategic digital marketing campaigns that drive sales and maximize ROI",
    longDescription:
      "Transform your online presence with our comprehensive digital marketing services. We create strategic Meta Ads, Google Ads, and targeted PPC campaigns that drive qualified leads and sales. Our data-driven approach includes advanced audience targeting, conversion tracking, A/B testing, and real-time analytics to ensure maximum return on your marketing investment.",
    overview:
      "Digital marketing success requires more than just running ads—it demands strategic thinking, creative execution, and continuous optimization. STARSYNX combines cutting-edge marketing technology with proven strategies to help businesses reach their target audience, generate qualified leads, and maximize their marketing ROI across all digital channels.",
    features: [
      "Google Ads & Search Engine Marketing (SEM)",
      "Meta Ads (Facebook & Instagram Advertising)",
      "LinkedIn & Professional Network Marketing",
      "Pay-Per-Click (PPC) Campaign Management",
      "Display & Remarketing Campaigns",
      "Advanced Audience Targeting & Segmentation",
      "Conversion Tracking & Analytics Setup",
      "A/B Testing & Campaign Optimization",
      "Landing Page Design & Optimization",
      "Marketing Automation & Email Campaigns",
      "Real-time Performance Monitoring & ROI Analysis",
      "Competitive Analysis & Market Research",
    ],
    serviceCategories: [
      {
        name: "Paid Advertising",
        items: [
          "Google Ads search campaigns",
          "Display & video advertising",
          "Facebook & Instagram ads",
          "LinkedIn sponsored content",
          "YouTube advertising campaigns",
          "Remarketing & retargeting",
          "Shopping & product ads",
          "Local advertising campaigns",
        ],
      },
      {
        name: "Social Media Marketing",
        items: [
          "Content strategy & creation",
          "Community management",
          "Influencer partnerships",
          "Social media advertising",
          "Brand reputation management",
          "Social commerce setup",
          "User-generated content campaigns",
          "Social media analytics",
        ],
      },
      {
        name: "Marketing Automation",
        items: [
          "Email marketing campaigns",
          "Lead nurturing sequences",
          "Customer journey mapping",
          "Marketing funnel optimization",
          "CRM integration",
          "Behavioral trigger campaigns",
          "Personalization strategies",
          "Lifecycle marketing",
        ],
      },
    ],
    keyMetrics: [
      { value: "400%", label: "Average ROAS Achieved" },
      { value: "75%", label: "Reduction in Cost Per Lead" },
      { value: "250%", label: "Average Traffic Increase" },
      { value: "85%", label: "Campaign Success Rate" },
    ],
    caseStudies: [
      {
        title: "E-commerce Brand Growth",
        description:
          "A fashion e-commerce brand wanted to scale their online sales and reach new customers across multiple platforms.",
        results: [
          "500% increase in online sales",
          "60% reduction in cost per acquisition",
          "10x return on ad spend (ROAS)",
        ],
      },
      {
        title: "B2B Lead Generation",
        description:
          "A software company needed to generate high-quality leads for their enterprise solutions through digital channels.",
        results: [
          "300% increase in qualified leads",
          "40% shorter sales cycle",
          "200% improvement in lead quality",
        ],
      },
      {
        title: "Local Service Business",
        description:
          "A home services company wanted to dominate their local market and increase bookings through digital advertising.",
        results: [
          "450% increase in service bookings",
          "80% of leads from digital channels",
          "25% increase in average order value",
        ],
      },
    ],
    technologies: [
      "Google Ads & Google Analytics",
      "Facebook Business Manager",
      "LinkedIn Campaign Manager",
      "Google Tag Manager",
      "HubSpot & Mailchimp",
      "Unbounce & Leadpages",
      "SEMrush & SpyFu",
      "Hotjar & Crazy Egg",
      "Zapier Automation",
      "Power BI & Data Studio",
      "Klaviyo",
      "ActiveCampaign",
    ],
    icon: "Globe",
  },
  cybersecurity: {
    title: "Cybersecurity",
    description: "Protect your business with comprehensive security solutions",
    longDescription:
      "Safeguard your digital assets with our cybersecurity services. We provide comprehensive security audits, penetration testing, and implement robust security measures.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Vulnerability Assessments",
      "Security Training",
      "Incident Response",
      "Compliance Management",
    ],
    technologies: [
      "Firewalls",
      "IDS/IPS",
      "SIEM",
      "Encryption",
      "VPN",
      "Multi-factor Auth",
    ],
    icon: "Shield",
  },
  "erp-crm-solutions": {
    title: "ERP & CRM Solutions",
    description:
      "Integrated business management systems for operational excellence",
    longDescription:
      "At STARSYNX (Pvt) Ltd., we deliver integrated ERP and CRM solutions that streamline business operations, enhance collaboration, and improve customer management. Our systems provide real-time insights, optimize workflows, and empower businesses to make smarter decisions.",
    overview:
      "Modern businesses need integrated systems that connect every aspect of their operations. Our ERP and CRM solutions eliminate data silos, automate workflows, and provide real-time visibility into business performance. From small businesses to large enterprises, we design and implement systems that grow with your business and adapt to changing needs.",
    features: [
      "Enterprise Resource Planning (ERP)",
      "Customer Relationship Management (CRM)",
      "Cross-department Integration",
      "Real-time Reporting & Analytics",
      "Workflow Automation",
      "Process Optimization",
      "Lead & Contact Management",
      "Automated Follow-ups and Notifications",
      "Customer Insights & Engagement Tracking",
      "Task Management & Alerts",
      "Secure and Scalable Platforms",
    ],
    serviceCategories: [
      {
        name: "ERP Solutions",
        items: [
          "Financial management & accounting",
          "Inventory & supply chain management",
          "Human resources & payroll",
          "Project management & tracking",
          "Manufacturing & production planning",
          "Quality management systems",
          "Business intelligence & reporting",
          "Multi-location & multi-currency support",
        ],
      },
      {
        name: "CRM Solutions",
        items: [
          "Lead management & qualification",
          "Sales pipeline & opportunity tracking",
          "Customer service & support ticketing",
          "Marketing automation & campaigns",
          "Contact & account management",
          "Sales forecasting & analytics",
          "Customer communication history",
          "Mobile CRM access & synchronization",
        ],
      },
      {
        name: "Integration & Automation",
        items: [
          "Cross-department data integration",
          "Automated workflow processes",
          "Real-time data synchronization",
          "Custom business rule engines",
          "Third-party system connections",
          "API development & management",
          "Data migration & cleansing",
          "Process optimization consulting",
        ],
      },
    ],
    keyMetrics: [
      { value: "50%", label: "Average Productivity Increase" },
      { value: "75%", label: "Reduction in Manual Tasks" },
      { value: "90%", label: "Data Accuracy Improvement" },
      { value: "60%", label: "Faster Decision Making" },
    ],
    caseStudies: [
      {
        title: "Manufacturing ERP Implementation",
        description:
          "A mid-size manufacturing company needed to integrate their production, inventory, and financial systems for better visibility and control.",
        results: [
          "40% reduction in inventory costs",
          "30% improvement in production efficiency",
          "Real-time visibility across all operations",
        ],
      },
      {
        title: "Sales CRM Transformation",
        description:
          "A growing service company required a comprehensive CRM solution to manage their expanding customer base and sales team.",
        results: [
          "200% increase in sales team productivity",
          "50% improvement in customer retention",
          "90% reduction in data entry time",
        ],
      },
      {
        title: "Integrated Business Solution",
        description:
          "A multi-location retail business needed an integrated ERP-CRM solution to unify their operations across all locations.",
        results: [
          "Unified operations across 15 locations",
          "60% faster financial reporting",
          "35% increase in customer satisfaction",
        ],
      },
    ],
    technologies: [
      "SAP Business One",
      "Salesforce CRM",
      "Microsoft Dynamics 365",
      "Oracle NetSuite",
      "Zoho CRM & ERP",
      "Custom Solutions",
      "Power BI & Tableau",
      "SQL Server & Oracle DB",
      "PostgreSQL & MongoDB",
      "REST APIs & GraphQL",
      "Azure & AWS Cloud",
      "Power Automate",
    ],
    icon: "Database",
  },
  "api-integration-automation": {
    title: "API Integration & Automation",
    description:
      "Seamless system connectivity and intelligent process automation",
    longDescription:
      "At STARSYNX (Pvt) Ltd., we help businesses connect systems and automate processes for seamless operations. Our services enable smooth data flow, reduce manual effort, enhance operational efficiency, and ensure your business stays agile across all platforms.",
    overview:
      "In today's interconnected business environment, systems need to work together seamlessly. Our API integration and automation services break down data silos, eliminate manual processes, and create intelligent workflows that adapt to your business needs. We connect disparate systems, automate repetitive tasks, and ensure data flows smoothly across your entire technology stack.",
    features: [
      "Third-party API Integration",
      "Payment Gateways, Social Media APIs, and More",
      "Secure and Reliable Data Transfer",
      "Internal System Automation",
      "Task Automation and Alerts",
      "Workflow Streamlining",
      "Error Reduction and Efficiency Improvement",
      "Custom Automation Solutions",
      "Integration with Existing Systems",
      "Optimized and Scalable Processes",
    ],
    serviceCategories: [
      {
        name: "Third-Party Integrations",
        items: [
          "Payment gateway integrations (Stripe, PayPal)",
          "Social media API connections",
          "Email marketing platform sync",
          "Accounting software integration",
          "E-commerce platform connections",
          "Shipping & logistics APIs",
          "Communication platform integration",
          "Analytics & reporting tool connections",
        ],
      },
      {
        name: "Internal System Automation",
        items: [
          "Database synchronization",
          "Automated data backup & recovery",
          "File processing & management",
          "Report generation automation",
          "Inventory management automation",
          "Customer onboarding workflows",
          "Order processing automation",
          "Notification & alert systems",
        ],
      },
      {
        name: "Custom Automation Solutions",
        items: [
          "Workflow design & optimization",
          "Business rule automation",
          "Event-driven process triggers",
          "Scheduled task automation",
          "Data validation & cleansing",
          "Error handling & recovery",
          "Performance monitoring",
          "Scalable microservices architecture",
        ],
      },
    ],
    keyMetrics: [
      { value: "80%", label: "Reduction in Manual Tasks" },
      { value: "95%", label: "Process Accuracy Rate" },
      { value: "60%", label: "Time Savings Achieved" },
      { value: "99.9%", label: "System Uptime" },
    ],
    caseStudies: [
      {
        title: "E-commerce Integration Hub",
        description:
          "An online retailer needed to integrate their website, inventory system, accounting software, and shipping providers for seamless operations.",
        results: [
          "90% reduction in manual data entry",
          "Real-time inventory synchronization",
          "50% faster order processing",
        ],
      },
      {
        title: "Customer Service Automation",
        description:
          "A service company wanted to automate their customer support workflow, integrating ticketing, CRM, and communication systems.",
        results: [
          "70% faster response times",
          "40% increase in customer satisfaction",
          "Automated escalation processes",
        ],
      },
      {
        title: "Financial Process Automation",
        description:
          "A growing business needed to automate their invoicing, payment processing, and financial reporting across multiple systems.",
        results: [
          "Eliminated manual invoice processing",
          "Real-time financial reporting",
          "99.5% payment processing accuracy",
        ],
      },
    ],
    technologies: [
      "REST APIs & GraphQL",
      "Webhook Integration",
      "Zapier & Microsoft Power Automate",
      "Node.js & Python",
      "PHP & Java",
      "Docker & Kubernetes",
      "AWS Lambda & Azure Functions",
      "RabbitMQ & Apache Kafka",
      "Redis & MongoDB",
      "JSON & XML Processing",
      "OAuth & JWT Authentication",
      "Microservices Architecture",
    ],
    icon: "Zap",
  },
  "ai-machine-learning": {
    title: "AI & Machine Learning Solutions",
    description:
      "Transform data into intelligent insights and automated decisions",
    longDescription:
      "At STARSYNX (Pvt) Ltd., we leverage AI and machine learning to transform data into actionable insights. Our intelligent solutions help businesses predict trends, optimize operations, and make data-driven decisions that drive growth and innovation.",
    overview:
      "Artificial Intelligence and Machine Learning are no longer futuristic concepts—they're essential tools for modern business success. Our AI solutions turn your data into competitive advantages, helping you predict customer behavior, optimize operations, automate complex processes, and stay ahead in a rapidly evolving digital landscape. We make AI accessible and practical for businesses of all sizes.",
    features: [
      "Predictive Analytics",
      "Trend Analysis and Forecasting",
      "Customer Behavior Prediction",
      "Business Performance Insights",
      "Machine Learning Models",
      "Classification, Regression, and Clustering Models",
      "AI-driven Recommendations",
      "Scalable Model Deployment",
      "AI-Powered Automation",
      "Process Automation using AI",
      "Smart Decision-making Tools",
      "Integration with Existing Systems",
    ],
    serviceCategories: [
      {
        name: "Predictive Analytics",
        items: [
          "Sales forecasting & demand prediction",
          "Customer churn prediction",
          "Market trend analysis",
          "Risk assessment & mitigation",
          "Inventory optimization",
          "Price optimization models",
          "Financial forecasting",
          "Performance prediction models",
        ],
      },
      {
        name: "Machine Learning Models",
        items: [
          "Classification & categorization",
          "Regression & prediction models",
          "Clustering & segmentation",
          "Recommendation systems",
          "Natural language processing",
          "Image & video recognition",
          "Anomaly detection",
          "Time series forecasting",
        ],
      },
      {
        name: "AI-Powered Automation",
        items: [
          "Intelligent document processing",
          "Automated decision making",
          "Smart chatbots & virtual assistants",
          "Process optimization algorithms",
          "Quality control automation",
          "Fraud detection systems",
          "Content generation & curation",
          "Intelligent routing & scheduling",
        ],
      },
    ],
    keyMetrics: [
      { value: "85%", label: "Prediction Accuracy Rate" },
      { value: "70%", label: "Process Efficiency Gain" },
      { value: "300%", label: "ROI on AI Investments" },
      { value: "50%", label: "Reduction in Decision Time" },
    ],
    caseStudies: [
      {
        title: "Retail Demand Forecasting",
        description:
          "A retail chain needed accurate demand forecasting to optimize inventory levels and reduce waste across multiple locations.",
        results: [
          "30% reduction in inventory costs",
          "95% forecast accuracy achieved",
          "50% decrease in stockouts",
        ],
      },
      {
        title: "Customer Churn Prevention",
        description:
          "A subscription-based service wanted to identify customers at risk of churning and implement proactive retention strategies.",
        results: [
          "85% accuracy in churn prediction",
          "40% reduction in customer churn",
          "25% increase in customer lifetime value",
        ],
      },
      {
        title: "Manufacturing Quality Control",
        description:
          "A manufacturing company implemented AI-powered quality control to detect defects and optimize production processes.",
        results: [
          "99.2% defect detection accuracy",
          "60% reduction in quality issues",
          "20% increase in production efficiency",
        ],
      },
    ],
    technologies: [
      "Python & R",
      "TensorFlow & Keras",
      "PyTorch & Scikit-learn",
      "Pandas & NumPy",
      "Jupyter & MLflow",
      "AWS SageMaker",
      "Google AI Platform",
      "Azure Machine Learning",
      "Apache Spark & Hadoop",
      "Docker & Kubernetes",
      "OpenCV & NLTK",
      "Tableau & Power BI",
    ],
    icon: "Brain",
  },
};

// Custom metadata for each service
const serviceMetadata: Record<string, { title: string; description: string }> =
  {
    "seo-services": {
      title: "SEO Services – Boost Rankings | STARSYNX (Pvt) Ltd.",
      description:
        "Rank higher on Google with STARSYNX (Pvt) Ltd. SEO strategies built for measurable growth and visibility.",
    },
    "digital-marketing": {
      title: "Digital Marketing – Targeted Growth | STARSYNX (Pvt) Ltd.",
      description:
        "Drive engagement and conversions with data-driven marketing campaigns by STARSYNX (Pvt) Ltd.",
    },
    "social-media-management": {
      title: "Social Media Management | STARSYNX (Pvt) Ltd.",
      description:
        "Build and manage your brand presence with STARSYNX (Pvt) Ltd. expert social media management services.",
    },
    "web-development": {
      title: "Web Development – Modern & Secure | STARSYNX (Pvt) Ltd.",
      description:
        "STARSYNX (Pvt) Ltd. develops responsive, secure, and SEO-optimized websites for businesses worldwide.",
    },
    "mobile-app-development": {
      title: "Mobile App Development | STARSYNX (Pvt) Ltd.",
      description:
        "STARSYNX (Pvt) Ltd. builds Android and iOS apps with top-tier design, performance, and functionality.",
    },
    "ui-ux-design-solutions": {
      title: "UI/UX Design Solutions | STARSYNX (Pvt) Ltd.",
      description:
        "STARSYNX (Pvt) Ltd. creates modern, intuitive, and user-focused designs to enhance digital experiences.",
    },
    "erp-crm-solutions": {
      title: "ERP & CRM Solutions – Automation | STARSYNX (Pvt) Ltd.",
      description:
        "Streamline operations with ERP and CRM automation systems from STARSYNX (Pvt) Ltd.",
    },
    "api-integration-automation": {
      title: "API Integration & Automation | STARSYNX (Pvt) Ltd.",
      description:
        "STARSYNX (Pvt) Ltd. provides seamless API integration and workflow automation for smart business solutions.",
    },
    "ai-machine-learning-solutions": {
      title: "AI & Machine Learning | STARSYNX (Pvt) Ltd.",
      description:
        "Innovate with STARSYNX (Pvt) Ltd. AI and machine learning solutions that power intelligent business growth.",
    },
    "import-export-it": {
      title: "IT Hardware Import & Export | STARSYNX (Pvt) Ltd.",
      description:
        "STARSYNX (Pvt) Ltd. offers reliable IT hardware import and export services across global markets.",
    },
  };

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = services[params.slug as keyof typeof services];

  if (!service) {
    return {
      title: "Service Not Found - STARSYNX (Pvt) Ltd.",
    };
  }

  const customMeta = serviceMetadata[params.slug] || {
    title: `${service.title} - STARSYNX (Pvt) Ltd. | Professional Digital Services`,
    description: service.description,
  };

  return {
    title: customMeta.title,
    description: customMeta.description,
    keywords: `${service.title.toLowerCase()}, ${service.technologies
      .join(", ")
      .toLowerCase()}, digital services, STARSYNX (PVT) LTD, Pakistan, UAE, Australia`,
    authors: [{ name: "STARSYNX (Pvt) Ltd." }],
    openGraph: {
      title: customMeta.title,
      description: customMeta.description,
      url: `https://www.starsynx.com/services/${params.slug}`,
      siteName: "STARSYNX (Pvt) Ltd.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@starsynx",
      creator: "@starsynx",
      title: customMeta.title,
      description: customMeta.description,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export default function ServiceDetail({
  params,
}: {
  params: { slug: string };
}) {
  const service = services[params.slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
