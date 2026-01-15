import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/shared/WhatsAppButton";
import Schema from "../components/shared/Schema";
import { AuthProvider } from "@/contexts/AuthContext";
import { AnalyticsProvider } from "@/contexts/AnalyticsContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "STARSYNX (PVT) LTD. - Synchronizing Technology, Accelerating Results",
  description:
    "STARSYNX (PVT) LTD. delivers cutting-edge digital solutions across four categories: Digital Experience Solutions, Intelligent & Automated Systems, Digital Presence & Growth, and IT Hardware & Trade. Founded by Muhammad Nadeem Ashraf, led by CEO Muhammad Hamza Nadeem. Global presence with Head Office in Pakistan, and regional offices in UAE and Australia.",
  keywords:
    "STARSYNX, SEO services, digital marketing, web development, mobile app development, UI/UX design, AI machine learning, API integration, ERP CRM, social media management, IT hardware trade, import export, Meta ads, Google ads, WordPress, Shopify, Lahore, Dubai, Canberra, Pakistan, UAE, Australia",
  authors: [{ name: "STARSYNX (PVT) LTD." }, { name: "Muhammad Hamza Nadeem" }],
  openGraph: {
    title:
      "STARSYNX (PVT) LTD. - Synchronizing Technology, Accelerating Results",
    description:
      "End-to-end digital services under one roof with proven results. Offices in Pakistan (Head Office), UAE, and Australia.",
    url: "https://www.starsynx.com",
    siteName: "STARSYNX (PVT) LTD.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@starsynx",
    creator: "@starsynx",
    title: "STARSYNX - Synchronizing Technology, Accelerating Results",
    description:
      "Your partner in digital growth across Pakistan, UAE, and Australia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-slate-900`}>
        <AuthProvider>
          <AnalyticsProvider>
            <Schema />
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <WhatsAppButton />
          </AnalyticsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
