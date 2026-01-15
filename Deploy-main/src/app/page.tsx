"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Smartphone,
  Cloud,
  Search,
  Palette,
  Shield,
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedText from "@/components/ui/AnimatedText";
import Accordion from "@/components/ui/Accordion";
import ContactForm from "@/components/shared/ContactForm";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import { useAnalytics } from "@/contexts/AnalyticsContext";

export default function HomePage() {
  const { trackPageVisit, trackCTAClick } = useAnalytics();
  const hasTracked = useRef(false);

  useEffect(() => {
    if (!hasTracked.current) {
      trackPageVisit("/");
      hasTracked.current = true;
    }
  }, [trackPageVisit]);

  const handleCTAClick = (ctaName: string) => {
    trackCTAClick(ctaName);
  };

  const mainServices = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Digital Experience Solutions",
      description:
        "Web Development, Mobile App Development, and UI/UX Design Solutions that create exceptional user experiences.",
      slug: "services",
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Intelligent & Automated Systems",
      description:
        "AI & Machine Learning, API Integration & Automation, and ERP & CRM Solutions for business efficiency.",
      slug: "services",
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "Digital Presence & Growth",
      description:
        "SEO Services, Digital Marketing, and Social Media Management to boost your online visibility.",
      slug: "services",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "IT Hardware & Trade",
      description:
        "Import & Export of IT-related products and hardware solutions for businesses.",
      slug: "services",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discover",
      description: "We analyze your business goals and digital requirements.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "We create a comprehensive digital strategy tailored to your needs.",
    },
    {
      number: "03",
      title: "Execute",
      description:
        "Our expert team implements solutions using cutting-edge technologies.",
    },
    {
      number: "04",
      title: "Optimize",
      description:
        "We continuously monitor, measure, and optimize for maximum results.",
    },
  ];

  const clients = [
    { name: "Chen 5", logo: "/pics/Dubai-Companies-Logos/2.png" },
    {
      name: "Global Chen 5 Group",
      logo: "/pics/Dubai-Companies-Logos/9.png",
    },
    {
      name: "Gateway Group",
      logo: "/pics/Dubai-Companies-Logos/4.png",
    },
    {
      name: "MV Medico",
      logo: "/pics/Dubai-Companies-Logos/5.png",
    },
    { name: "Ometra", logo: "/pics/Dubai-Companies-Logos/8.png" },
    { name: "Global Client 6", logo: "/pics/Dubai-Companies-Logos/6.png" },
  ];

  const faqItems = [
    {
      id: "1",
      question: "What services does STARSYNX offer?",
      answer:
        "We offer comprehensive digital solutions organized into four main categories: Digital Experience Solutions (Web Dev, Mobile App Dev, UI/UX), Intelligent & Automated Systems (AI/ML, API Integration, ERP/CRM), Digital Presence & Growth (SEO, Digital Marketing, Social Media), and IT Hardware & Trade (Import & Export of IT products).",
    },
    {
      id: "2",
      question: "Which countries does STARSYNX operate in?",
      answer:
        "STARSYNX has a global presence with offices in Pakistan (Lahore - Head Office), UAE (Dubai), and Australia (Canberra Region). We serve clients worldwide with our comprehensive digital solutions.",
    },
    {
      id: "3",
      question: "What makes STARSYNX different from other digital agencies?",
      answer:
        "We provide end-to-end digital services under one roof with a highly skilled, innovative team. Our proven results with satisfied clients worldwide, combined with our global presence and local expertise, sets us apart.",
    },
    {
      id: "4",
      question: "How does STARSYNX approach digital marketing campaigns?",
      answer:
        "We follow a strategic approach: Discover (analyze business goals), Strategy (create tailored digital strategy), Execute (implement with cutting-edge technologies), and Optimize (continuously monitor and improve for maximum ROI).",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 lg:py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <ParticlesBackground id="hero-particles" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Synchronizing Technology
              <span className="block text-cyan-400 text-3xl sm:text-4xl lg:text-5xl mt-4">
                Accelerating Results
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="/services"
                size="lg"
                onClick={() => handleCTAClick("Learn More - Hero")}
              >
                Learn More
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                onClick={() => handleCTAClick("Get Started - Hero")}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Icons Bar */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <Link
                  href={`/services`}
                  className="block"
                  onClick={() =>
                    handleCTAClick(`Service Icon - ${service.title}`)
                  }
                >
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 text-cyan-500 group-hover:text-cyan-600 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-sm font-medium text-slate-800 leading-tight group-hover:text-cyan-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="w-full h-80 sm:h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-2xl"></div>
                <div className="absolute inset-4 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="w-16 sm:w-20 h-16 sm:h-20 text-cyan-500 mx-auto mb-4" />
                    <p className="text-xl sm:text-2xl font-bold text-slate-800">
                      3+ Years
                    </p>
                    <p className="text-slate-600">of Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AnimatedText
                variant="h2"
                className="text-3xl sm:text-4xl font-bold text-white mb-6"
              >
                About STARSYNX (PVT) LTD. - Your Partner in Digital Growth
              </AnimatedText>
              <AnimatedText
                variant="p"
                className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed"
                delay={0.1}
              >
                At STARSYNX, we synchronize technology with your business goals
                to accelerate results. With offices in Pakistan (Head Office),
                UAE, and Australia, our team of experts provides cutting-edge
                solutions across Digital Experience, Intelligent Automation,
                Digital Marketing, and IT Hardware Trade.
              </AnimatedText>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-8">
                {[
                  {
                    icon: <CheckCircle className="w-8 h-8" />,
                    title: "Global Presence",
                    description: "Offices in UAE, Pakistan & Australia",
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Expert Team",
                    description: "Skilled digital professionals",
                  },
                  {
                    icon: <Award className="w-8 h-8" />,
                    title: "Proven Results",
                    description: "Satisfied clients worldwide",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-cyan-400 mb-3 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <Button href="/about" variant="outline" className="mt-4">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <AnimatedText
              variant="h2"
              className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4"
            >
              Our Process: Transforming Ideas into Digital Success
            </AnimatedText>
            <AnimatedText
              variant="p"
              className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
              delay={0.1}
            >
              Our proven methodology ensures successful project delivery from
              conception to optimization.
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 text-xl sm:text-2xl font-bold text-white shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-cyan-200 -z-10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <AnimatedText
              variant="h2"
              className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4"
            >
              Certified & Registered
            </AnimatedText>
            <AnimatedText
              variant="p"
              className="text-base sm:text-lg text-slate-600"
              delay={0.1}
            >
              STARSYNX (PVT) LTD. is officially certified and registered with
              leading Pakistani authorities
            </AnimatedText>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-5xl mx-auto">
            {[
              {
                name: "Pakistan Software Export Board",
                logo: "/certifications/pseb.jpg",
                alt: "PSEB Certified",
              },
              {
                name: "Securities & Exchange Commission",
                logo: "/certifications/secp.png",
                alt: "SECP Registered",
              },
              {
                name: "Lahore Chamber of Commerce",
                logo: "/certifications/lcci.jpg",
                alt: "LCCI Member",
              },
              {
                name: "Federal Board of Revenue",
                logo: "/certifications/fbr.jpg",
                alt: "FBR Registered",
              },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto hover:shadow-xl transition-shadow duration-300 p-4 border border-slate-100">
                  <Image
                    src={cert.logo}
                    alt={cert.alt}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      if (e.currentTarget.nextElementSibling) {
                        e.currentTarget.nextElementSibling.classList.remove(
                          "hidden"
                        );
                      }
                    }}
                  />
                  <div className="hidden text-center">
                    <Award className="w-12 h-12 text-cyan-500 mx-auto mb-2" />
                    <span className="text-xs font-semibold text-slate-600">
                      {cert.name}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-3 font-medium">
                  {cert.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <AnimatedText
              variant="h2"
              className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4"
            >
              Trusted by Businesses Worldwide
            </AnimatedText>
            <AnimatedText
              variant="p"
              className="text-base sm:text-lg text-slate-600"
              delay={0.1}
            >
              Global companies trust STARSYNX for their digital transformation
            </AnimatedText>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center  transition-all duration-300"
              >
                <div className="w-20 sm:w-24 h-20 sm:h-24 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto hover:shadow-xl transition-shadow duration-300 p-3">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={60}
                    height={60}
                    className="w-full h-full object-contain  transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling?.classList.remove(
                        "hidden"
                      );
                    }}
                  />
                  <span className="hidden text-sm font-bold text-slate-600">
                    {client.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <AnimatedText
                variant="h2"
                className="text-3xl sm:text-4xl font-bold text-white mb-4"
              >
                Frequently Asked Questions
              </AnimatedText>
              <AnimatedText
                variant="p"
                className="text-base sm:text-lg text-slate-300"
                delay={0.1}
              >
                Get answers to the most common questions about our services
              </AnimatedText>
            </div>

            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100 rounded-full opacity-20 -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full opacity-20 translate-y-24 -translate-x-24"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 lg:mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <AnimatedText
                  variant="h2"
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3"
                >
                  Get In Touch
                </AnimatedText>
                <AnimatedText
                  variant="p"
                  className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
                  delay={0.1}
                >
                  Ready to transform your business? Let&apos;s discuss your
                  project requirements.
                </AnimatedText>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
