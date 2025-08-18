// src/pages/AboutSAM.jsx
import Footer from "../../components/Footer";
import { FaGlobe, FaChartLine, FaLightbulb, FaSyncAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutSAM() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-800 to-red-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.img
            src="../src/images/abus.png"
            alt="Secure Affiliate Media"
            className="mx-auto w-80 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Secure Affiliate Media
          </motion.h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-200">
            We’re not just a performance marketing company – we’re your partner in achieving real-time, measurable outcomes.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-4xl font-bold text-red-600">98%</h2>
            <p className="mt-2 text-gray-600">Client Retention</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-4xl font-bold text-red-600">100+</h2>
            <p className="mt-2 text-gray-600">Global Clients</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-4xl font-bold text-red-600">6+</h2>
            <p className="mt-2 text-gray-600">Years Experience</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-4xl font-bold text-red-600">∞</h2>
            <p className="mt-2 text-gray-600">Growth Potential</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          Secure Affiliate Media started its journey focusing on the domestic CPL market. 
          Under strong leadership, we quickly expanded into international markets, which became the turning point of our growth. 
          We’ve since evolved into a global leader in performance marketing, delivering meaningful results for our partners.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Our Mission</h3>
            <p>
              To enable companies with the strategic knowledge of our skilled team,
              providing outstanding real-time outcomes in affiliate and performance marketing
              that promote sustainable growth and accomplish specific goals.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Our Vision</h3>
            <p>
              To create long-term relationships with companies around the globe, becoming their go-to partner for achieving marketing goals through continuous improvement and real-time results.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <FaChartLine className="mx-auto text-red-600 text-4xl mb-4" />
            <h4 className="font-semibold">Performance-Driven</h4>
            <p className="text-gray-600">Measurable impact for every client.</p>
          </div>
          <div>
            <FaLightbulb className="mx-auto text-red-600 text-4xl mb-4" />
            <h4 className="font-semibold">Strategic Growth</h4>
            <p className="text-gray-600">Visionary leadership and innovation.</p>
          </div>
          <div>
            <FaGlobe className="mx-auto text-red-600 text-4xl mb-4" />
            <h4 className="font-semibold">Global Reach</h4>
            <p className="text-gray-600">Worldwide partnerships and markets.</p>
          </div>
          <div>
            <FaSyncAlt className="mx-auto text-red-600 text-4xl mb-4" />
            <h4 className="font-semibold">Adaptability</h4>
            <p className="text-gray-600">Agile approach to diverse markets.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Samantha Milner",
                company: "Mindful LLC",
                text: "We now have a fantastic website that perfectly encapsulates our company thanks to them. Their service has exceeded expectations."
              },
              {
                name: "Mike Johnson",
                company: "DEF Technologies",
                text: "Our company now has a state-of-the-art website that is easy to navigate. Their digital marketing expertise is undeniable."
              },
              {
                name: "Emma Smith",
                company: "GHI Industries",
                text: "Extremely knowledgeable, professional, and quick to respond. An outstanding digital partner for us."
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <p className="text-gray-700 mb-4">"{t.text}"</p>
                <h4 className="font-bold text-red-600">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
