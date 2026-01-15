import { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About Us - STARSYNX | Your Partner in Digital Growth",
  description:
    "Learn about STARSYNX's mission to empower businesses with digital excellence. Discover our expertise in SEO, digital marketing, web development, app development, and UI/UX design across UAE, Pakistan, and Australia.",
  keywords:
    "about STARSYNX, digital marketing company, SEO services, web development team, app development experts, UI/UX design, Dubai, Lahore, Canberra",
  authors: [{ name: "STARSYNX" }],
  openGraph: {
    title: "About Us - STARSYNX | Your Partner in Digital Growth",
    description:
      "Learn about STARSYNX's mission to empower businesses with digital excellence across UAE, Pakistan, and Australia.",
    url: "https://www.starsynx.com/about",
    siteName: "STARSYNX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About STARSYNX - Digital Excellence Solutions",
    description:
      "Your partner in digital growth across UAE, Pakistan, and Australia.",
  },
};

export default function About() {
  return <AboutPage />;
}
