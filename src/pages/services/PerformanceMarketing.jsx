// src/pages/PerformanceMarketing.jsx
import React from "react";
import Footer from "../../components/Footer";

export default function PerformanceMarketing() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-800 text-white font-sans min-h-screen flex flex-col">
      {/* ================= HERO SECTION ================= */}
      <main className="flex-grow">
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Performance Marketing
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              From Clicks to Conversions
            </h2>
            <p className="text-lg mb-6 leading-relaxed max-w-xl">
              Stop chasing just clicks; start driving real business outcomes. Our strategies focus on converting ad interactions into measurable results, maximizing your ROI and fueling your growth.
            </p>
            <button className="mt-4 bg-white text-red-600 font-bold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition self-start">
              Get Started
            </button>
          </div>

          {/* Right: Hero Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/pmg.png"
              alt="Performance Marketing Illustration"
              className="w-full max-w-md rounded-xl object-contain"
            />
          </div>
        </section>

        {/* ================= KEY METRICS SECTION ================= */}
        <section className="py-20 px-6 md:px-20 bg-gray-50 text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Key Metrics Indicating Business Performance
          </h2>
          <p className="text-lg mb-10 leading-relaxed text-center max-w-3xl mx-auto text-gray-700">
            Effective marketing campaigns rely on precise measurement. At Secure Affiliate Media, we focus on the most vital metrics that make a difference:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <MetricBox label="CPL" desc="Cost Per Lead" />
            <MetricBox label="CPA" desc="Cost Per Acquisition" />
            <MetricBox label="CPC" desc="Cost Per Click" />
            <MetricBox label="CPS" desc="Cost Per Sale" />
          </div>
        </section>

        {/* ================= OFFER SECTION ================= */}
        <section className="py-20 px-6 md:px-20 text-center text-black bg-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What We Offer
          </h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto text-gray-700 mb-4">
            Our data-driven performance marketing efforts are tailored to help you achieve your specific business goals. 
            We continuously monitor key performance indicators such as clicks, conversions, and ROI to ensure your investment is optimized.
          </p>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto text-gray-700">
            Our commitment is to design and execute campaigns that deliver clear, measurable results — turning your marketing budget into tangible business growth.
          </p>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}

function MetricBox({ label, desc }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center shadow hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
      <div className="text-3xl font-bold text-red-600 mb-2">{label}</div>
      <div className="uppercase text-sm text-gray-600 font-semibold tracking-wider">
        {desc}
      </div>
    </div>
  );
}
