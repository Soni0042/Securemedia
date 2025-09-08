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
      "url": "https://thesecuremedia.com/services/affiliate-marketing"
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
      "url": "https://thesecuremedia.com/services/performance-marketing"
    },
    "areaServed": "IN"
  },
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": "https://thesecuremedia.com/contact-us",
    "name": "Contact Us",
    "description": "Contact The Secure Media for inquiries, support, or feedback."
  },
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
