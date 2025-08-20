// src/pages/Contact.jsx
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-white text-gray-800 font-sans flex flex-col min-h-screen">

      {/* ================= HERO (Full-screen landing section) ================= */}
      <section className="relative w-full h-screen bg-gradient-to-r from-red-800 to-red-600 text-white flex items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-20 text-center">
          <motion.h1
            className="text-4xl md:text-5xl  mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let’s Start Something Great Together
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            We’re here to answer any questions you have and help you get started.
          </motion.p>
          <motion.button
            className="bg-white text-red-600 font-bold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Contact Us
          </motion.button>
        </div>
      </section>

      {/* ================= CONTACT INFO CARDS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <InfoCard icon={<FaPhoneAlt />} title="Phone Number" text="+91 8527875483" />
          <InfoCard icon={<FaEnvelope />} title="Email Address" text="support@thesecuremedia.com" />
          <InfoCard icon={<FaMapMarkerAlt />} title="Office Address" text="Plot No-664, Udyog Vihar, Phase-5, Gurugram, Haryana - 122016" />
          <InfoCard icon={<FaClock />} title="Business Hours" text="Mon - Sat: 10:00am - 7:00pm" />
        </div>

        {/* Social Icons */}
        <div className="mt-10 text-center">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Connect with us</h4>
          <div className="flex justify-center space-x-5">
            <SocialIcon href="https://www.facebook.com/" icon={<FaFacebookF />} />
            <SocialIcon href="https://www.linkedin.com/" icon={<FaLinkedinIn />} />
            <SocialIcon href="https://www.instagram.com/" icon={<FaInstagram />} />
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Send Us a Message
          </h2>
          <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="First Name" placeholder="Enter your first name" />
              <InputField label="Last Name" placeholder="Enter your last name" />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Email Address" placeholder="Enter your email" type="email" />
              <InputField label="Phone Number" placeholder="Enter your phone number" type="tel" />
            </div>

            {/* Subject */}
            <InputField label="Subject" placeholder="Enter subject" />

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}

// ===== COMPONENTS =====
function InfoCard({ icon, title, text }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center">
      <div className="text-red-600 text-3xl mx-auto mb-4">{icon}</div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition"
    >
      {icon}
    </a>
  );
}

function InputField({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
      />
    </div>
  );
}
