"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import ContactForm from "@/components/shared/ContactForm";

export default function ContactPage() {
  const offices = [
    {
      country: "Pakistan (Head Office)",
      isHeadOffice: true,
      address:
        "Suit No. 9, Izhar Villas, Wafaqi Colony Road,\nJohar Town, Lahore, Pakistan",
      phone: "+92 303 073 5555",
      email: "contact@starsynx.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM",
      flag: "��",
      icon: <Building className="w-8 h-8" />,
    },
    {
      country: "UAE (Regional Office)",
      isHeadOffice: false,
      address: "Office M-06, Makeen Building,\nAl Garhoud, Dubai, UAE",
      phone: "+971 56 485 3101",
      email: "contact@starsynx.com",
      hours: "Sun - Thu: 9:00 AM - 6:00 PM",
      flag: "��",
      icon: <Building className="w-8 h-8" />,
    },
    {
      country: "Australia (Regional Office)",
      isHeadOffice: false,
      address:
        "4/56 Henderson Road, Queanbeyan\nNSW 2620, Canberra Region, Australia",
      phone: "+61 460 928 401",
      email: "contact@starsynx.com",
      hours: "Mon - Fri: 9:00 AM - 5:00 PM",
      flag: "🇦🇺",
      icon: <Building className="w-8 h-8" />,
    },
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+92 303 073 5555",
      action: "tel:+92 303 073 5555",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Send us your project details",
      contact: "contact@starsynx.com",
      action: "mailto:contact@starsynx.com",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      description: "We respond within 2 hours",
      contact: "24/7 Support Available",
      action: null,
    },
  ];

  const faqItems = [
    {
      question: "Which countries does STARSYNX operate in?",
      answer:
        "STARSYNX has offices in Pakistan (Lahore - Head Office), UAE (Dubai - Regional Office), and Australia (Canberra Region - Regional Office). We serve clients globally with localized expertise.",
    },
    {
      question: "What services does STARSYNX specialize in?",
      answer:
        "We specialize in four main areas: Digital Experience Solutions (Web Dev, Mobile App Dev, UI/UX), Intelligent & Automated Systems (AI/ML, API Integration, ERP/CRM), Digital Presence & Growth (SEO, Digital Marketing, Social Media), and IT Hardware & Trade.",
    },
    {
      question: "How quickly can STARSYNX start my project?",
      answer:
        "We typically start new projects within 1-2 weeks after project approval. Our global presence allows us to provide support across different time zones.",
    },
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
              Contact STARSYNX (PVT) LTD.
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to synchronize technology with your business goals? Get in
              touch with our global team. We&apos;re here to help you accelerate
              results across Pakistan (Head Office), UAE, and Australia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner - Matching Attachment Style */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-cyan-400">CONTACT</span>{" "}
                <span className="text-white">US</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                At{" "}
                <strong className="text-cyan-400">STARSYNX (PVT) LTD.</strong>,
                we&apos;re always ready to connect, collaborate, and create
                solutions tailored to your needs. Whether you&apos;re looking
                for digital experience solutions, intelligent automation,
                digital marketing expertise, or IT hardware trade, our teams
                across Pakistan (Head Office), UAE, and Australia are just a
                message away.
              </p>
            </div>

            <div className="space-y-6">
              {offices.map((office, index) => (
                <motion.div
                  key={office.country}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-xl overflow-hidden shadow-xl"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Flag Section */}
                    <div className="w-full md:w-1/3 h-32 md:h-auto flex items-center justify-center relative overflow-hidden bg-slate-100">
                      <Image
                        src={
                          office.country.includes("Pakistan")
                            ? "/pics/Pak.jpg"
                            : office.country.includes("Australia")
                            ? "/pics/aus.jpg"
                            : "/pics/uae.jpg"
                        }
                        alt={`${office.country} flag`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    {/* Contact Details */}
                    <div className="flex-1 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-800">
                          {office.country.replace("(Head Office)", "").trim()}
                        </h3>
                        {office.isHeadOffice && (
                          <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Head Office
                          </span>
                        )}
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-cyan-500" />
                          <span className="text-2xl font-bold text-slate-800">
                            {office.phone}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-cyan-500" />
                          <span className="text-lg text-slate-700">
                            {office.email}
                          </span>
                        </div>

                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-cyan-500 mt-0.5" />
                          <span className="text-slate-700 whitespace-pre-line">
                            {office.address}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-cyan-500 mb-4 flex justify-center">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {method.title}
                </h3>
                <p className="text-slate-600 mb-3">{method.description}</p>
                {method.action ? (
                  <a
                    href={method.action}
                    className="text-cyan-500 font-semibold hover:text-cyan-600 transition-colors duration-300"
                  >
                    {method.contact}
                  </a>
                ) : (
                  <span className="text-slate-700 font-semibold">
                    {method.contact}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedText
              variant="h2"
              className="text-4xl font-bold text-slate-800 mb-4"
            >
              Our Global Offices
            </AnimatedText>
            <AnimatedText
              variant="p"
              className="text-lg text-slate-600 max-w-2xl mx-auto"
              delay={0.1}
            >
              We have offices in key locations to serve our clients worldwide
              with local expertise and support.
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.country}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border"
              >
                {/* Country Header with Flag */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={
                      office.country.includes("Pakistan")
                        ? "/pics/Pak.jpg"
                        : office.country.includes("Australia")
                        ? "/pics/aus.jpg"
                        : "/pics/uae.jpg"
                    }
                    alt={`${office.country} flag`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4">
                    <div className="text-center">
                      <span className="text-white font-bold text-xl block mb-1">
                        {office.country}
                      </span>
                      {office.isHeadOffice && (
                        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                          Head Office
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4 text-left">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-slate-700 whitespace-pre-line">
                          {office.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="text-slate-700 hover:text-cyan-500 transition-colors duration-300"
                      >
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-slate-700 hover:text-cyan-500 transition-colors duration-300"
                      >
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <span className="text-slate-700">{office.hours}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Contact Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center mb-8">
                <MessageCircle className="w-12 h-12 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-800">
                  Quick WhatsApp Support
                </h2>
              </div>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                Need immediate assistance? Connect with our experts on WhatsApp
                for instant support and quick solutions
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.a
                  href="https://wa.me/923030735555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-green-500"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-green-100 p-4 rounded-full group-hover:bg-green-200 transition-colors">
                      <MessageCircle className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-4xl">🇵🇰</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-3 text-lg">
                    Pakistan Office
                  </h3>
                  <p className="text-green-600 font-mono text-xl font-bold">
                    +92 303 073 5555
                  </p>
                  <p className="text-sm text-slate-500 mt-2">
                    24/7 Support Available
                  </p>
                </motion.a>

                <motion.a
                  href="https://wa.me/971564853101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-green-500"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-green-100 p-4 rounded-full group-hover:bg-green-200 transition-colors">
                      <MessageCircle className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-4xl">🇦🇪</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-3 text-lg">
                    UAE Office
                  </h3>
                  <p className="text-green-600 font-mono text-xl font-bold">
                    +971 56 485 3101
                  </p>
                  <p className="text-sm text-slate-500 mt-2">
                    Business Hours Support
                  </p>
                </motion.a>

                <motion.a
                  href="https://wa.me/61460928401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-green-500"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-green-100 p-4 rounded-full group-hover:bg-green-200 transition-colors">
                      <MessageCircle className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-4xl">🇦🇺</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-3 text-lg">
                    Australia Office
                  </h3>
                  <p className="text-green-600 font-mono text-xl font-bold">
                    +61 460 928 401
                  </p>
                  <p className="text-sm text-slate-500 mt-2">
                    AEST Business Hours
                  </p>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedText
                variant="h2"
                className="text-4xl font-bold text-white mb-4"
              >
                Start Your Project Today
              </AnimatedText>
              <AnimatedText
                variant="p"
                className="text-lg text-slate-300"
                delay={0.1}
              >
                Fill out the form below and we&apos;ll get back to you within 2
                hours with a detailed proposal.
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
                  <h3 className="text-2xl font-bold text-white mb-4">
                    What Happens Next?
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        text: "We review your project requirements",
                      },
                      {
                        step: "2",
                        text: "Our team prepares a detailed proposal",
                      },
                      { step: "3", text: "We schedule a consultation call" },
                      {
                        step: "4",
                        text: "Project kickoff and development begins",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.step}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                        className="flex items-center space-x-4"
                      >
                        <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">
                          {item.step}
                        </div>
                        <span className="text-slate-300">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-4">
                    Frequently Asked Questions
                  </h4>
                  <div className="space-y-4">
                    {faqItems.map((faq, index) => (
                      <div
                        key={index}
                        className="border-b border-slate-700 pb-4 last:border-b-0"
                      >
                        <h5 className="font-semibold text-cyan-400 mb-2">
                          {faq.question}
                        </h5>
                        <p className="text-slate-300 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
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

      {/* Map Section (Placeholder) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedText
              variant="h2"
              className="text-4xl font-bold text-slate-800 mb-4"
            >
              Find Us on the Map
            </AnimatedText>
            <AnimatedText
              variant="p"
              className="text-lg text-slate-600"
              delay={0.1}
            >
              Visit our offices or meet us at your preferred location
            </AnimatedText>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-100 rounded-xl h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Interactive Map
              </h3>
              <p className="text-slate-600">Map integration coming soon</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
