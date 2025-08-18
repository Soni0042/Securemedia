import React from "react";
import Footer from "../../components/Footer";

const Event = () => {
  // Array of images for global events
  const images = [
    "../src/images/event (1).jpeg",
    "../src/images/event (2).jpeg",
    "../src/images/event (3).jpeg",
    "../src/images/event (4).jpeg",
    "../src/images/event (5).jpeg",
    "../src/images/event (6).jpeg",
    "../src/images/event (7).jpeg",
    "../src/images/event (8).jpeg",
    "../src/images/event (9).jpeg",
    "../src/images/event (10).jpeg",
    "../src/images/event (11).jpeg",
    "../src/images/event (12).jpeg",
  ];

  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* ================= HEADER ================= */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">EVENT GALLERY</h1>
        <p className="text-lg md:text-xl text-gray-600">
          Event highlights captured in stunning photos
        </p>
      </section>

      {/* ================= SUBHEADING ================= */}
      <section className="text-center mb-12 px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          GLOBAL EVENTS
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          Making waves worldwide: See vCommission in action at global events
        </p>
      </section>

      {/* ================= GALLERY GRID ================= */}
      <section className="px-6 md:px-20 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
            >
              <img
                src={img}
                alt={`Global Event ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default Event;
