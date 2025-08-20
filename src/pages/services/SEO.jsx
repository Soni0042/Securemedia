// src/pages/SEOService.jsx
import React from "react";
import { FaSearch, FaChartLine, FaLink, FaCogs, FaMapMarkerAlt, FaShoppingCart, FaYoutube, FaUsers } from "react-icons/fa";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function SEOService() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          
          {/* Text */}
          <motion.div
            className="text-center md:text-left md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl mb-4 leading-tight">
              Elevate Your Online Presence with Professional SEO
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Stand out in the digital landscape. Our expert SEO services improve search engine visibility, drive organic traffic, and help potential customers find your business effortlessly.
            </p>
            <button className="mt-6 bg-white text-red-600 font-bold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
              Get Started
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/seo.png" alt="SEO Services" className="w-full max-w-md " />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our SEO Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[/* service items */].map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-gray-200 text-center">
              {service.icon}
              <h3 className="text-xl font-bold mb-3 text-red-600">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Secure Media?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[/* why choose items */].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border border-gray-200 text-center">
              <h3 className="text-xl font-semibold mb-3 text-red-600">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 leading-relaxed">
          Connect with our SEO experts today and take the first step towards higher rankings, increased traffic, and business growth.
        </p>
        <button className="bg-white text-red-600 font-bold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
          Get Started Today
        </button>
      </section>

      <Footer />
    </div>
  );
}
