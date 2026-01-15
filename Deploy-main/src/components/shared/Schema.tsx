export default function Schema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "STARSYNX",
    url: "https://www.starsynx.com",
    logo: "https://www.starsynx.com/logo.png",
    description:
      "STARSYNX is a dynamic digital solutions company with global presence in UAE, Pakistan, and Australia. We specialize in SEO, digital marketing, web development, app development, and UI/UX design.",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Office M-06, Makeen Building, Al Garhoud",
        addressLocality: "Dubai",
        addressCountry: "UAE",
      },
      {
        "@type": "PostalAddress",
        streetAddress:
          "Suit No. 9, Izhar Villas, Wafaqi Colony Road, Johar Town",
        addressLocality: "Lahore",
        addressCountry: "Pakistan",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "4/56 Henderson Road, Queanbeyan NSW 2620",
        addressLocality: "Canberra Region",
        addressCountry: "Australia",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-303-073-5555",
      contactType: "customer service",
      email: "contact@starsynx.com",
    },
    sameAs: [
      "https://linkedin.com/company/starsynx",
      "https://instagram.com/starsynx",
      "https://facebook.com/starsynx",
    ],
    services: [
      "SEO Services",
      "Digital Marketing",
      "Social Media Management",
      "Web Development",
      "App Development",
      "UI/UX Design",
      "WordPress Development",
      "Shopify Development",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Marketing and Development Services",
    provider: {
      "@type": "Organization",
      name: "STARSYNX",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Services",
            description:
              "On-Page, Off-Page, and Technical SEO optimization for maximum visibility",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Marketing",
            description:
              "Strategic Meta Ads, Google Ads, and targeted PPC campaigns with real-time analytics",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description:
              "WordPress, Shopify, and custom web development solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "App Development",
            description:
              "iOS, Android, and hybrid mobile application development",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}
