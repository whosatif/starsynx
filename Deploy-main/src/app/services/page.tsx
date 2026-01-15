import { Metadata } from "next";
import ServicesPage from "./ServicesPage";

export const metadata: Metadata = {
  title:
    "Our Services - STARSYNX (Pvt) Ltd. | Synchronizing Technology, Accelerating Results",
  description:
    "Explore STARSYNX (Pvt) Ltd. comprehensive digital services across four categories: Digital Experience Solutions, Intelligent & Automated Systems, Digital Presence & Growth, and IT Hardware & Trade. Serving Pakistan, UAE, and Australia.",
  keywords:
    "STARSYNX services, digital services, SEO services, digital marketing, web development, mobile app development, UI UX design, AI machine learning, ERP CRM, API integration, social media management, IT hardware trade, import export, Meta ads, Google ads, WordPress, Shopify, Pakistan, UAE, Australia",
  authors: [{ name: "STARSYNX (Pvt) Ltd." }],
  openGraph: {
    title: "Our Services - STARSYNX (Pvt) Ltd. | Digital Excellence Solutions",
    description:
      "Explore STARSYNX (Pvt) Ltd. comprehensive digital services across Pakistan (Head Office), UAE, and Australia.",
    url: "https://www.starsynx.com/services",
    siteName: "STARSYNX (Pvt) Ltd.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@starsynx",
    creator: "@starsynx",
    title: "STARSYNX Services - Synchronizing Technology, Accelerating Results",
    description:
      "Comprehensive digital services across four main categories serving global businesses.",
  },
};

export default function Services() {
  return <ServicesPage />;
}
