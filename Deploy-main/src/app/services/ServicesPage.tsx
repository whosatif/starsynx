"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Search,
  Palette,
  Globe,
  Users,
  Building,
  ArrowRight,
  Database,
  Zap,
  Brain,
  Shield,
} from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description:
        "Professional WordPress development, Shopify e-commerce solutions, and custom web applications. Responsive design, performance optimization, SEO-friendly architecture, and secure coding practices. Your website is your digital identity – we make it powerful, fast, and conversion-driven.",
      href: "/services/web-development",
      category: "Digital Experience Solutions",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description:
        "High-performance iOS apps, scalable Android applications, and cross-platform hybrid solutions using React Native and Flutter. Complete app lifecycle from UI/UX design to deployment and maintenance. We turn innovative concepts into user-friendly mobile experiences that drive engagement and growth.",
      href: "/services/mobile-app-development",
      category: "Digital Experience Solutions",
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design Solutions",
      description:
        "Unique logo designing, brand identity creation, interactive UI/UX wireframes and prototypes, frontend design handoff from Figma/Sketch to code. User research, usability testing, and conversion optimization. We blend creativity with usability for stunning digital experiences that convert visitors into customers.",
      href: "/services/ui-ux-design-solutions",
      category: "Digital Experience Solutions",
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & Machine Learning Solutions",
      description:
        "Transform data into intelligent insights with predictive analytics, machine learning models, and AI-powered automation. Custom AI solutions, trend analysis and forecasting, smart decision-making tools, and scalable model deployment. Drive growth and innovation with data-driven intelligence that keeps you ahead in the digital landscape.",
      href: "/services/ai-machine-learning",
      category: "Intelligent & Automated Systems",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "API Integration & Automation",
      description:
        "Seamless system connectivity and process automation for enhanced operational efficiency. Third-party API integration, internal system automation, custom automation solutions, and workflow optimization. Reduce manual effort, eliminate errors, and ensure your business stays agile across all platforms.",
      href: "/services/api-integration-automation",
      category: "Intelligent & Automated Systems",
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "ERP & CRM Solutions",
      description:
        "Integrated ERP and CRM solutions that streamline business operations, enhance collaboration, and improve customer management. Custom workflow automation, real-time reporting & analytics, cross-department integration, and process optimization. Empower your business to make smarter decisions and achieve sustainable growth.",
      href: "/services/erp-crm-solutions",
      category: "Intelligent & Automated Systems",
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "SEO Services",
      description:
        "Comprehensive SEO solutions including On-Page optimization, Off-Page strategy, and Technical SEO. Advanced keyword research, competitor analysis, and local SEO strategies. We ensure your brand doesn't just exist online – it thrives with maximum visibility and organic traffic growth.",
      href: "/services/seo-services",
      category: "Digital Presence & Growth",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Digital Marketing",
      description:
        "Strategic Meta Ads, Google Ads, and targeted PPC campaigns that drive sales. Advanced audience targeting, conversion tracking, and A/B testing. Real-time analytics, performance optimization, and ROI measurement to ensure maximum return on your marketing investment.",
      href: "/services/digital-marketing",
      category: "Digital Presence & Growth",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Social Media Management",
      description:
        "Build meaningful connections on social platforms with comprehensive content strategy, creative post design, video marketing, and community engagement. Platform-specific optimization for Instagram, Facebook, LinkedIn, TikTok, and Twitter. From brand visibility to lead conversions, we handle it all.",
      href: "/services/social-media-management",
      category: "Digital Presence & Growth",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Import & Export (IT Related)",
      description:
        "Comprehensive IT hardware import and export services. We facilitate international trade of computer hardware, networking equipment, servers, and technology products. End-to-end supply chain management, customs clearance, and logistics solutions for businesses looking to source or distribute IT products globally.",
      href: "/services/import-export-it",
      category: "IT Hardware & Trade",
    },
  ];

  // Define main categories and desired display order
  const mainCategories = [
    {
      key: "Digital Experience Solutions",
      title: "Digital Experience Solutions",
      description:
        "Web, Mobile & UI/UX solutions that deliver engaging and high-performing digital experiences.",
      icon: <Code className="w-10 h-10" />,
    },
    {
      key: "Intelligent & Automated Systems",
      title: "Intelligent & Automated Systems",
      description:
        "AI, automation and integration solutions to streamline operations and unlock intelligence.",
      icon: <Brain className="w-10 h-10" />,
    },
    {
      key: "Digital Presence & Growth",
      title: "Digital Presence & Growth",
      description:
        "SEO, digital marketing and social strategies to grow visibility and conversions.",
      icon: <Globe className="w-10 h-10" />,
    },
    {
      key: "IT Hardware & Trade",
      title: "IT Hardware & Trade",
      description:
        "Import/export and hardware trading services for enterprise-grade IT equipment.",
      icon: <Building className="w-10 h-10" />,
    },
  ];

  // Group services by category for ordered display
  const categoriesOrder = mainCategories.map((c) => c.key);
  const grouped: Record<string, typeof services> = {};
  services.forEach((s) => {
    if (!grouped[s.category]) grouped[s.category] = [];
    grouped[s.category].push(s);
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              STARSYNX (PVT) LTD. Services
              <span className="block text-cyan-400 text-2xl sm:text-3xl lg:text-4xl mt-4">
                Synchronizing Technology, Accelerating Results
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions across four main categories:
              Digital Experience, Intelligent Automation, Digital Marketing, and
              IT Hardware Trade.
            </p>
            <Button href="/contact" size="lg">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <AnimatedText
              variant="h2"
              className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4"
            >
              Our Digital Solutions Portfolio
            </AnimatedText>
            <AnimatedText
              variant="p"
              className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
              delay={0.1}
            >
              End-to-end digital services under one roof with a highly skilled,
              innovative team delivering result-oriented strategies for global
              clients.
            </AnimatedText>
          </div>

          {/* Main Categories Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {mainCategories.map((cat) => (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border rounded-xl p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 text-cyan-500">{cat.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-slate-600">{cat.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Sub-services grouped under each main category */}
          <div className="space-y-12">
            {categoriesOrder.map((category) => {
              const items = grouped[category] || [];
              if (!items.length) return null;

              return (
                <div key={category}>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-slate-800">
                      {category}
                    </h2>
                    <p className="text-slate-600 mt-2">
                      {
                        mainCategories.find((c) => c.key === category)
                          ?.description
                      }
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((service, idx) => (
                      <ServiceCard
                        key={service.title}
                        {...service}
                        delay={idx * 0.08}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <AnimatedText
              variant="h2"
              className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4"
            >
              Our Proven Development Process
            </AnimatedText>
            <AnimatedText
              variant="p"
              className="text-lg text-slate-600 max-w-2xl mx-auto"
              delay={0.1}
            >
              We follow a systematic approach to ensure project success and
              client satisfaction.
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discover",
                description:
                  "We analyze your business goals and digital requirements to create the perfect strategy.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Our team creates comprehensive digital strategies tailored to your specific needs.",
              },
              {
                step: "03",
                title: "Execute",
                description:
                  "We implement solutions using cutting-edge technologies and best practices.",
              },
              {
                step: "04",
                title: "Optimize",
                description:
                  "Continuous monitoring, measurement, and optimization for maximum results and ROI.",
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {phase.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {phase.description}
                </p>

                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-cyan-200 -z-10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Clients CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl p-8 text-white text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-8 h-8 bg-white/20 rounded-br-xl"></div>
              <Building className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">For Clients</h3>
              <p className="mb-6 opacity-90">
                Ready to transform your business with cutting-edge technology
                solutions?
              </p>
              <Button href="/contact" variant="secondary">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            {/* Vendors CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-8 text-white text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-8 h-8 bg-cyan-400 rounded-br-xl"></div>
              <Users className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">For Partners</h3>
              <p className="mb-6 opacity-90">
                Join our network of technology partners and grow your business
                with us.
              </p>
              <Button href="/contact" variant="outline">
                Become a Partner
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
