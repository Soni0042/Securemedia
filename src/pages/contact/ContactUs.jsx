import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
  const form = useRef();
  const [resultMessage, setResultMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jqebicj",      // Replace with your EmailJS Service ID
        "template_wp03vjk",     // Replace with your EmailJS Template ID
        form.current,
        "cUHFy_7JRJgi-veRT"       // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setResultMessage("Message sent successfully!");
          e.target.reset(); // Clear form after successful submission
        },
        () => {
          setResultMessage("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-white text-gray-800 font-sans flex flex-col min-h-screen">
      {/* Hero, Contact Info Cards, Social Icons as you had them */}
      <section className="relative w-full min-h-screen bg-gradient-to-r from-red-800 to-red-600 text-white flex items-center py-10 md:py-0">
        <div className="max-w-6xl mx-auto px-6 md:px-20 flex flex-col md:grid md:grid-cols-2 items-center gap-10">
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Let’s Start Something Great Together
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 text-gray-200 mb-8"
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
              onClick={() => {
                document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Send a Message
            </motion.button>
          </div>
          <motion.div
            className="flex justify-center md:justify-center w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <img
              src="/cus.png"
              alt="Contact Illustration"
              className="w-full max-w-xs md:max-w-md md:ml-50 object-contain"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <InfoCard icon={<FaPhoneAlt />} title="Phone Number" text="+91 8527875483" />
          <InfoCard icon={<FaEnvelope />} title="Email Address" text="support@thesecuremedia.com" />
          <InfoCard icon={<FaMapMarkerAlt />} title="Office Address" text="Plot No-664, Udyog Vihar, Phase-5, Gurugram, Haryana - 122016" />
          <InfoCard icon={<FaClock />} title="Business Hours" text="Mon - Sat: 10:00am - 7:00pm" />
        </div>
        <div className="mt-10 text-center">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Connect with us</h4>
          <div className="flex justify-center space-x-5">
            <SocialIcon href="https://www.facebook.com/" icon={<FaFacebookF />} />
            <SocialIcon href="https://www.linkedin.com/" icon={<FaLinkedinIn />} />
            <SocialIcon href="https://www.instagram.com/" icon={<FaInstagram />} />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Send Us a Message
          </h2>
          <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="First Name" placeholder="Enter your first name" name="first_name" />
              <InputField label="Last Name" placeholder="Enter your last name" name="last_name" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Email Address" placeholder="Enter your email" type="email" name="email" />
              <InputField label="Phone Number" placeholder="Enter your phone number" type="tel" name="phone" />
            </div>
            <InputField label="Subject" placeholder="Enter subject" name="subject" />
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="5"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
              />
            </div>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition w-full"
            >
              Send Message
            </button>
          </form>
          {resultMessage && (
            <p className="mt-6 text-center font-semibold text-gray-700">{resultMessage}</p>
          )}
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Office Location
          </h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2458391956993!2d77.084111!3d28.5022504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f547d4da333%3A0x18377a48c79bf137!2sSecure%20Affiliate%20Media%20Pvt%20Ltd%20%7C%20Best%20Affiliate%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1755857554546!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px] rounded-2xl"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

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

function InputField({ label, placeholder, type = "text", name }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
      />
    </div>
  );
}
