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

export default function Contact() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-800 to-red-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s Start Something Great Together
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            We’re here to answer any questions you have and help you get
            started.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center">
            <FaPhoneAlt className="text-red-600 text-3xl mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-2">Phone Number</h4>
            <p className="text-gray-600">+91 8527875483</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center">
            <FaEnvelope className="text-red-600 text-3xl mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-2">Email Address</h4>
            <p className="text-gray-600">support@thesecuremedia.com</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center">
            <FaMapMarkerAlt className="text-red-600 text-3xl mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-2">Office Address</h4>
            <p className="text-gray-600">
              Plot No-664, Udyog Vihar, Phase-5
              <br />
              Gurugram, Haryana - 122016
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center">
            <FaClock className="text-red-600 text-3xl mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-2">Business Hours</h4>
            <p className="text-gray-600">Mon - Sat: 10:00am - 7:00pm</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-10 text-center">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">
            Connect with us
          </h4>
          <div className="flex justify-center space-x-5">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Send Us a Message
          </h2>
          <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
