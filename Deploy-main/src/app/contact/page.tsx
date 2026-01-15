import { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact Us - STARSYNX | Get Your Free Digital Consultation",
  description:
    "Contact STARSYNX for professional digital services including SEO, digital marketing, web development, and app development. Get a free consultation and project quote. Available in UAE, Pakistan, and Australia.",
  keywords:
    "contact STARSYNX, digital consultation, SEO services quote, digital marketing services, web development Dubai, app development Pakistan, UI/UX design Australia",
  authors: [{ name: "STARSYNX" }],
  openGraph: {
    title: "Contact Us - STARSYNX | Get Your Free Digital Consultation",
    description:
      "Contact STARSYNX for professional digital services across UAE, Pakistan, and Australia.",
    url: "https://www.starsynx.com/contact",
    siteName: "STARSYNX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact STARSYNX - Digital Excellence Solutions",
    description:
      "Get your free consultation for digital growth across UAE, Pakistan, and Australia.",
  },
};

export default function Contact() {
  return <ContactPage />;
}
