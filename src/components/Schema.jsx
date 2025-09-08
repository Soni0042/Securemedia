import React from "react";

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Affiliate Marketing",
    "description": "Grow your business with our expert affiliate marketing services.",
    "provider": {
      "@type": "Organization",
      "name": "The Secure Media",
      "url": "https://www.thesecuremedia.com"
    },
    "areaServed": "IN"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Performance Marketing",
    "description": "Result-driven performance marketing to maximize your ROI.",
    "provider": {
      "@type": "Organization",
      "name": "The Secure Media",
      "url": "https://www.thesecuremedia.com"
    },
    "areaServed": "IN"
  },
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": "https://www.thesecuremedia.com/contact-us",
    "name": "Contact Us",
    "description": "Contact The Secure Media for inquiries, support, or feedback."
  },
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "url": "https://www.thesecuremedia.com/about-us",
    "name": "About Us",
    "description": "Learn more about The Secure Media, our team, and our mission."
  }
];

const SchemaMarkup = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaMarkup;
