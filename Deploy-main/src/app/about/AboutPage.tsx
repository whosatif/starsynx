"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Users,
  CheckCircle,
  TrendingUp,
  Lightbulb,
  Shield,
} from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description:
        "Constantly evolving with new ideas and cutting-edge technologies.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Excellence",
      description:
        "Commitment to delivering quality results with measurable ROI.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description:
        "Honest and transparent business practices with our global clients.",
    },
  ];

  const whyChooseUs = [
    "End-to-end digital services under one roof",
    "Highly skilled, innovative, and passionate team",
    "Proven results with satisfied clients worldwide",
    "Global presence in UAE, Pakistan, and Australia",
    "Specialized in result-oriented strategies",
    "Customer-centric approach with collaborative mindset",
    "Sustainable growth solutions that last",
    "Transparent communication and project delivery",
  ];

  const clients = [
    { name: "Chen 5", logo: "/pics/Dubai-Companies-Logos/Chen5.png" },
    {
      name: "Global Chen 5 Group",
      logo: "/pics/Dubai-Companies-Logos/1.png",
    },
    {
      name: "Gateway Group",
      logo: "/pics/Dubai-Companies-Logos/Global Gateway Group Logo.png",
    },
    {
      name: "MV Medico",
      logo: "/pics/Dubai-Companies-Logos/Medico Gateway Trading.png",
    },
    { name: "Ometra", logo: "/pics/Dubai-Companies-Logos/Ometra Trading.png" },
    { name: "Global Client 6", logo: "/pics/Dubai-Companies-Logos/7.png" },
  ];

  const stats = [
    { number: "3", label: "Global Offices" },
    { number: "100+", label: "Satisfied Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

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
              About STARSYNX (PVT) LTD.
              <span className="block text-cyan-400">
                Synchronizing Technology, Accelerating Results
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Founded by Muhammad Nadeem Ashraf and led by CEO Muhammad Hamza
              Nadeem, STARSYNX delivers cutting-edge digital solutions across
              Pakistan (Head Office), UAE, and Australia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium text-sm sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <AnimatedText
                variant="h2"
                className="text-4xl font-bold text-slate-800 mb-4"
              >
                Message From CEO
              </AnimatedText>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* CEO Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <div className="relative inline-block">
                  <div className="w-80 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-2xl mx-auto lg:mx-0 p-1">
                    <div className="w-full h-full rounded-xl overflow-hidden bg-white">
                      <Image
                        src="/CEO.jpg"
                        alt="Muhammad Hamza Nadeem - CEO of STARSYNX"
                        width={320}
                        height={384}
                        className="w-full h-full object-cover"
                      />

                      {/* Temporary placeholder - remove when image is added */}
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                        <div className="text-center p-6">
                          <div className="w-20 h-20 bg-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <Users className="w-10 h-10 text-white" />
                          </div>
                          <p className="text-slate-600 font-medium">
                            CEO Photo
                          </p>
                          <p className="text-xs text-slate-500 mt-2">
                            Save CEO image as /public/ceo-message.jpg
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    MUHAMMAD HAMZA NADEEM
                  </h3>
                  <p className="text-cyan-600 font-semibold text-lg">
                    Chief Executive Officer
                  </p>
                  <p className="text-slate-600 text-sm mt-2">
                    STARSYNX (PVT) LTD.
                  </p>
                </div>
              </motion.div>

              {/* CEO Message Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-cyan-400">
                  <p className="text-lg text-slate-700 leading-relaxed mb-4">
                    &ldquo;At{" "}
                    <strong className="text-cyan-600">
                      STARSYNX (Pvt) Ltd.
                    </strong>
                    , our vision has always been to empower businesses with
                    digital solutions that truly make an impact. We believe that
                    success in today&apos;s fast-paced world comes from blending
                    innovation, creativity, and technology to create lasting
                    value.&rdquo;
                  </p>

                  <p className="text-lg text-slate-700 leading-relaxed mb-4">
                    &ldquo;From day one, our goal has been simple: deliver
                    excellence and build trust with every project we take on.
                    Whether it&apos;s developing advanced applications,
                    designing meaningful user experiences, or driving growth
                    through digital marketing, we are committed to helping our
                    clients thrive and stay ahead in the digital era.&rdquo;
                  </p>

                  <p className="text-lg text-slate-700 leading-relaxed">
                    &ldquo;As we look to the future, we remain dedicated to
                    continuous growth, strong partnerships, and transforming
                    ideas into powerful realities. Together, let&apos;s shape a
                    smarter and more connected tomorrow.&rdquo;
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-4">
                  <div className="h-px bg-slate-300 flex-grow"></div>
                  <div className="text-slate-600 italic font-medium">
                    MUHAMMAD HAMZA NADEEM
                  </div>
                  <div className="h-px bg-slate-300 flex-grow"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                    <div className="text-2xl font-bold text-cyan-600 mb-1">
                      3+
                    </div>
                    <div className="text-sm text-slate-600">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                    <div className="text-2xl font-bold text-cyan-600 mb-1">
                      3
                    </div>
                    <div className="text-sm text-slate-600">Global Offices</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                    <div className="text-2xl font-bold text-cyan-600 mb-1">
                      100+
                    </div>
                    <div className="text-sm text-slate-600">Happy Clients</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Information from the image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 bg-slate-900 rounded-xl p-6 text-center"
            >
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-white">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm">
                    Pakistan (Head Office): +92 303 073 5555
                  </span>
                </div>
                <div className="hidden sm:block text-slate-400">|</div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm">UAE: +971 56 485 3101</span>
                </div>
                <div className="hidden sm:block text-slate-400">|</div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm">Australia: +61 460 928 401</span>
                </div>
              </div>
              <div className="mt-4 flex flex-col items-center gap-2">
                <span className="text-cyan-400 font-medium">
                  www.starsynx.com
                </span>
                <span className="text-slate-300 text-sm">
                  contact@starsynx.com
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Value Section */}
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
                  <div className="text-center p-4 sm:p-8">
                    <Target className="w-16 sm:w-20 h-16 sm:h-20 text-cyan-500 mx-auto mb-4" />
                    <p className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
                      Our Mission
                    </p>
                    <p className="text-slate-600 text-sm sm:text-base">
                      Transforming businesses through technology
                    </p>
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
                className="text-4xl font-bold text-white mb-6"
              >
                Our Vision & Mission
              </AnimatedText>
              <AnimatedText
                variant="p"
                className="text-lg text-slate-300 mb-8 leading-relaxed"
                delay={0.1}
              >
                <strong className="text-cyan-400">Founder:</strong> Muhammad
                Nadeem Ashraf
                <br />
                <strong className="text-cyan-400">CEO:</strong> Muhammad Hamza
                Nadeem
                <br />
                <br />
                <strong className="text-cyan-400">Our Vision:</strong> To be a
                global leader in digital innovation, synchronizing technology
                with business needs to create sustainable growth and value for
                businesses worldwide.
                <br />
                <br />
                <strong className="text-cyan-400">Our Mission:</strong> Deliver
                high-quality digital solutions that transform businesses by
                combining creativity, technology, and strategy for measurable
                results. We accelerate your digital journey with intelligent
                automation and innovative solutions.
              </AnimatedText>

              <div className="grid grid-cols-1 gap-6 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="text-cyan-400 mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-slate-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button href="/contact" variant="outline">
                Work With Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedText
                variant="h2"
                className="text-4xl font-bold text-slate-800 mb-4"
              >
                What Makes STARSYNX The Right Choice For Your Business
              </AnimatedText>
              <AnimatedText
                variant="p"
                className="text-lg text-slate-600"
                delay={0.1}
              >
                We combine technical expertise with business strategy to deliver
                solutions that drive growth.
              </AnimatedText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                  <span className="text-slate-700">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedText
              variant="h2"
              className="text-4xl font-bold text-slate-800 mb-4"
            >
              Meet Our Expert Team
            </AnimatedText>
            <AnimatedText
              variant="p"
              className="text-lg text-slate-600"
              delay={0.1}
            >
              Passionate professionals dedicated to your success
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "CEO Message",
                role: "Leadership Vision",
                expertise:
                  '"At STARSYNX, we believe in innovation with impact. Our mission is to bridge the gap between businesses and technology."',
                experience: "Global Leader",
              },
              {
                name: "Digital Marketing",
                role: "SEO & Marketing Expert",
                expertise: "Meta Ads, Google Ads, Performance Tracking",
                experience: "ROI Focused",
              },
              {
                name: "Development Team",
                role: "Web & App Development",
                expertise: "WordPress, Shopify, iOS, Android",
                experience: "Full-Stack",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center relative overflow-hidden"
              >
                {/* Blue corner accent */}
                <div className="absolute top-0 left-0 w-8 h-8 bg-cyan-400 rounded-br-xl"></div>

                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-cyan-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm mb-2">
                  {member.expertise}
                </p>
                <p className="text-slate-500 text-sm">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedText
              variant="h2"
              className="text-4xl font-bold text-slate-800 mb-4"
            >
              Officially Certified & Registered
            </AnimatedText>
            <AnimatedText
              variant="p"
              className="text-lg text-slate-600"
              delay={0.1}
            >
              STARSYNX (PVT) LTD. is certified and registered with
              Pakistan&apos;s leading regulatory authorities
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
                    <Shield className="w-12 h-12 text-cyan-500 mx-auto mb-2" />
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

      {/* Clients Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedText
              variant="h2"
              className="text-4xl font-bold text-white mb-4"
            >
              Our Global Reach
            </AnimatedText>
            <AnimatedText
              variant="p"
              className="text-lg text-slate-300"
              delay={0.1}
            >
              Serving clients across UAE, Pakistan, and Australia with localized
              expertise
            </AnimatedText>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto group-hover:shadow-xl transition-shadow duration-300 p-3">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={60}
                    height={60}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText
              variant="h2"
              className="text-4xl font-bold text-slate-800 mb-6"
            >
              Ready To Transform Your Business?
            </AnimatedText>
            <AnimatedText
              variant="p"
              className="text-lg text-slate-600 mb-8"
              delay={0.1}
            >
              Let&apos;s discuss how our expertise can help you achieve your
              digital transformation goals.
            </AnimatedText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Start Your Project
              </Button>
              <Button href="/services" variant="outline" size="lg">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
