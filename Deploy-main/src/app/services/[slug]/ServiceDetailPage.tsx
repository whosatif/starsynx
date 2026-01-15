"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Palette,
  Cloud,
  Globe,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Database,
  Zap,
  Brain,
} from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedText from "@/components/ui/AnimatedText";
import ContactForm from "@/components/shared/ContactForm";

interface ServiceDetailProps {
  service: {
    title: string;
    description: string;
    longDescription: string;
    features: string[];
    technologies: string[];
    icon: string;
    overview?: string;
    serviceCategories?: {
      name: string;
      items: string[];
    }[];
    keyMetrics?: {
      value: string;
      label: string;
    }[];
    caseStudies?: {
      title: string;
      description: string;
      results: string[];
    }[];
  };
}

const iconComponents = {
  Code,
  Smartphone,
  Palette,
  Cloud,
  Globe,
  Shield,
  Database,
  Zap,
  Brain,
};

export default function ServiceDetailPage({ service }: ServiceDetailProps) {
  const IconComponent =
    iconComponents[service.icon as keyof typeof iconComponents] || Code;

  const benefits = [
    {
      title: "Expert Team",
      description:
        "Work with certified professionals who have years of experience in the field.",
    },
    {
      title: "Proven Process",
      description:
        "Our time-tested methodology ensures successful project delivery every time.",
    },
    {
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality control measures guarantee exceptional results.",
    },
    {
      title: "Ongoing Support",
      description:
        "24/7 support and maintenance to keep your solutions running smoothly.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirements Analysis",
      description:
        "We start by understanding your specific needs and business objectives.",
    },
    {
      step: "02",
      title: "Solution Design",
      description:
        "Our team creates a detailed technical solution tailored to your requirements.",
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "We build your solution using industry best practices and latest technologies.",
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description:
        "Thorough testing followed by smooth deployment and go-live support.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-cyan-400 mb-6">
                <IconComponent className="w-20 h-20" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {service.longDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Get Started
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  View All Services
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden"
            >
              {/* Blue corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 bg-cyan-400 rounded-br-xl"></div>

              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Key Features
              </h3>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedText
                variant="h2"
                className="text-4xl font-bold text-slate-800 mb-4"
              >
                Comprehensive {service.title} Solutions
              </AnimatedText>
              <AnimatedText
                variant="p"
                className="text-lg text-slate-600 max-w-3xl mx-auto"
                delay={0.1}
              >
                {service.overview ||
                  `Our ${service.title.toLowerCase()} services are designed to deliver exceptional results through proven methodologies, cutting-edge technologies, and expert execution. We focus on understanding your unique business needs and delivering solutions that drive measurable growth.`}
              </AnimatedText>
            </div>

            {service.serviceCategories && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {service.serviceCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-8 h-8 bg-cyan-400 rounded-br-xl"></div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 mt-4">
                      {category.name}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            )}

            {service.keyMetrics && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {service.keyMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-cyan-500 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-slate-600 text-sm">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedText
              variant="h2"
              className="text-4xl font-bold text-slate-800 mb-4"
            >
              Technologies & Tools We Use
            </AnimatedText>
            <AnimatedText
              variant="p"
              className="text-lg text-slate-600 max-w-2xl mx-auto"
              delay={0.1}
            >
              We leverage industry-leading technologies and tools to deliver
              robust, scalable, and future-proof solutions.
            </AnimatedText>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {service.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 text-center hover:shadow-lg hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 group"
              >
                <div className="text-lg font-bold text-slate-700 group-hover:text-cyan-600 transition-colors duration-300">
                  {tech}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {service.caseStudies && (
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <AnimatedText
                variant="h2"
                className="text-4xl font-bold text-slate-800 mb-4"
              >
                Success Stories
              </AnimatedText>
              <AnimatedText
                variant="p"
                className="text-lg text-slate-600 max-w-2xl mx-auto"
                delay={0.1}
              >
                Real results from real clients who trusted us with their{" "}
                {service.title.toLowerCase()} needs.
              </AnimatedText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-8 h-8 bg-cyan-400 rounded-br-xl"></div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 mt-4">
                    {caseStudy.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {caseStudy.description}
                  </p>
                  <div className="space-y-2">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-slate-700 text-sm font-semibold">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedText
              variant="h2"
              className="text-4xl font-bold text-slate-800 mb-4"
            >
              Why Choose Our {service.title} Services?
            </AnimatedText>
            <AnimatedText
              variant="p"
              className="text-lg text-slate-600 max-w-2xl mx-auto"
              delay={0.1}
            >
              We deliver exceptional results through our expertise, proven
              processes, and commitment to quality.
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center relative overflow-hidden"
              >
                {/* Blue corner accent */}
                <div className="absolute top-0 left-0 w-8 h-8 bg-cyan-400 rounded-br-xl"></div>

                <Star className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedText
              variant="h2"
              className="text-4xl font-bold text-white mb-4"
            >
              Our Development Process
            </AnimatedText>
            <AnimatedText
              variant="p"
              className="text-lg text-slate-300 max-w-2xl mx-auto"
              delay={0.1}
            >
              We follow a proven methodology to ensure your project is delivered
              on time and within budget.
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
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

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl p-8 text-white">
              <div className="text-6xl mb-6">&quot;</div>
              <p className="text-xl md:text-2xl leading-relaxed mb-8">
                STARSYNX transformed our business with their exceptional{" "}
                {service.title.toLowerCase()} services. Their team&apos;s
                expertise and attention to detail exceeded our expectations.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">JS</span>
                </div>
                <div>
                  <p className="font-semibold">MUHAMMAD HAMZA NADEEM</p>
                  <p className="opacity-90">CEO,STARSYNX (PVT) LTD.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedText
                variant="h2"
                className="text-4xl font-bold text-slate-800 mb-4"
              >
                Ready to Get Started?
              </AnimatedText>
              <AnimatedText
                variant="p"
                className="text-lg text-slate-600"
                delay={0.1}
              >
                Let&apos;s discuss your {service.title.toLowerCase()} project
                and how we can help you achieve your goals.
              </AnimatedText>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    Why Start Today?
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Free consultation and project assessment",
                      "Detailed project proposal within 48 hours",
                      "Flexible engagement models to fit your budget",
                      "Dedicated project manager for seamless communication",
                    ].map((reason, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Special Offer</h4>
                  <p className="mb-4">
                    Get a free consultation and 10% off your first project when
                    you contact us this month!
                  </p>
                  <Button href="/contact" variant="secondary">
                    Claim Your Offer
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
