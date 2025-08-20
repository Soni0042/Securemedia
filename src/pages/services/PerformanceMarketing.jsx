// src/pages/PerformanceMarketing.jsx
import React from "react";
import Footer from "../../components/Footer";

export default function PerformanceMarketing() {
  return (
    <div className="bg-white text-black font-sans min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow px-6 py-20 md:px-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Section */}
          <section className="flex flex-col-reverse md:flex-row items-center gap-12 mb-20">
            {/* Left: Text */}
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-6 tracking-tight text-gray-900">
                Performance Marketing
              </h1>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                From Clicks to Conversions: Drive Tangible Returns on Your Ads
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Stop chasing just clicks; start driving real business outcomes. Our strategies focus on converting ad interactions into measurable results, maximizing your ROI and fueling your growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Leverage our data-driven performance marketing solutions to unlock the full potential of your digital campaigns. You only pay for actual, measurable results — whether that’s clicks, leads, or purchases — because we are truly results-driven.
              </p>
            </div>
            {/* Right: Hero Image */}
            <div className="flex-1 flex justify-center">
              <img
                src="/pmg.png" // Place your image inside public/images/
                alt="Performance Marketing Illustration"
                className="w-full max-w-md rounded-xl object-contain "
              />
            </div>
          </section>

          {/* Key Metrics Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
              Key Metrics Indicating Business Performance
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed text-center max-w-3xl mx-auto">
              Effective marketing campaigns rely on precise measurement. At Secure Affiliate Media, we focus on the most vital metrics that make a difference:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <MetricBox label="CPL" desc="Cost Per Lead" />
              <MetricBox label="CPA" desc="Cost Per Acquisition" />
              <MetricBox label="CPC" desc="Cost Per Click" />
              <MetricBox label="CPS" desc="Cost Per Sale" />
            </div>
          </section>

          {/* Offer Section */}
          <section className="mb-20 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              What We Offer
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Our data-driven performance marketing efforts are tailored to help you achieve your specific business goals. 
              We continuously monitor key performance indicators such as clicks, conversions, and ROI to ensure your investment is optimized.
            </p>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed max-w-4xl mx-auto">
              Our commitment is to design and execute campaigns that deliver clear, measurable results — turning your marketing budget into tangible business growth.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function MetricBox({ label, desc }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center shadow hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
      <div className="text-3xl font-bold text-[#E53935] mb-2">{label}</div>
      <div className="uppercase text-sm text-gray-600 font-semibold tracking-wider">
        {desc}
      </div>
    </div>
  );
}
