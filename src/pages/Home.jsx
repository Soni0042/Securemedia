import NumbersMatter from "../components/NumbersMatter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-black font-sans min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 md:px-20 lg:px-32 gap-10">
        
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 uppercase tracking-tight">
            Performance <span className="text-[#E53935]">Marketing</span> Company
          </h1>
          <p className="text-base sm:text-lg md:text-2xl mb-8 max-w-xl mx-auto md:mx-0 font-light">
            Unleash your performance with{" "}
            <strong className="text-[#E53935]">Secure Affiliate Media</strong>.
          </p>
          <hr className="border-t-4 border-gray-300 w-28 mx-auto md:mx-0 mb-8 opacity-60" />
          <p className="uppercase text-xs sm:text-sm tracking-widest text-gray-500">
            _______Estb. 2019_______
          </p>
        </div>

        {/* Right: Hero Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/src/images/pm.png"
            alt="Performance Marketing"
            className="w-full max-w-md object-contain"
          />
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {[
            {
              title: "Omni-Channel Strategy & Growth",
              icon: (
                <>
                  <path strokeLinecap="round" d="M5 8v12M12 4v16M19 12v8" />
                  <path strokeLinecap="round" d="M2 8l3-3 3 3M9 4l3-3 3 3M16 12l3-3 3 3" />
                </>
              )
            },
            {
              title: "CTR Optimized Digital Ads",
              icon: (
                <>
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" fill="#FFD600" />
                </>
              )
            },
            {
              title: "Multi-type Conversion Rate Optimization",
              icon: <path d="M3 4h18l-7 9v5l-4 2v-7l-7-9z" />
            },
            {
              title: "Agile Performance",
              icon: (
                <>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 12l4-4M12 2v2M2 12h2M12 22v-2M22 12h-2" />
                </>
              )
            },
            {
              title: "AI & Data Driven Results",
              icon: (
                <>
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M2 12h2M20 12h2M12 2v2M12 20v2" />
                </>
              )
            }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-[#d42027] rounded-xl p-6 text-center shadow-xl hover:scale-105 transition-transform"
            >
              <svg
                className="w-10 h-10 mb-4 text-[#FFD600]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {feature.icon}
              </svg>
              <h3 className="font-semibold text-lg mb-2 text-white">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TOP VERTICALS AUTO-SCROLL ================= */}
      <div className="bg-gradient-to-r from-red-900 to-red-600 text-white">
        <section className="w-full py-16 px-6 md:px-20 overflow-hidden">
          
          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center md:text-left mb-10">
            <p className="text-yellow-400 font-semibold uppercase tracking-widest">
              Our Top Verticals
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
              We Generate <span className="text-white">Millions</span> <br />
              In These Verticals
            </h2>
            <p className="mt-4 text-gray-200 max-w-2xl">
              We are always working towards offering meaningful marketing through:
            </p>
          </div>

          {/* Marquee */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[
                "Igaming",
                "E-Commerce",
                "Travel",
                "Home Improvement",
                "Debt",
                "Nutra"
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="mx-8 text-xl sm:text-2xl font-bold tracking-wide"
                >
                  {item}
                </span>
              ))}
              {[
                "Igaming",
                "E-Commerce",
                "Travel",
                "Home Improvement",
                "Debt",
                "Nutra"
              ].map((item, idx) => (
                <span
                  key={`dup-${idx}`}
                  className="mx-8 text-xl sm:text-2xl font-bold tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ================= NUMBERS MATTER SECTION ================= */}
      <NumbersMatter />

      {/* ================= FOUNDERS SECTION ================= */}
      <section className="bg-gray-50 py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Meet Our Founders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Himanshu Singh */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <img
              src="https://thesecuremedia.com/wp-content/uploads/2025/04/Untitled-1600-x-1068-px-1024x684.png"
              alt="Himanshu Singh"
              className="w-32 h-32 rounded-full object-cover"
            />
            <h3 className="mt-6 text-2xl font-semibold text-gray-800">Himanshu Singh</h3>
            <p className="text-red-600 font-medium">CEO of Secure Affiliate Media</p>
            <p className="mt-4 text-gray-600 leading-relaxed text-sm">
              Himanshu has a compelling vision for performance marketing influenced by his early
              days in the affiliate sector. With six months of direct CPL delivery experience, he
              gained an excellent grip on lead generation dynamics. This expertise fueled the
              creation of Secure Affiliate Media, initially dominating the domestic CPL space.
              Under his leadership, the company achieved massive growth in under three years,
              built a strong international presence, and expanded into new performance marketing
              verticals.
            </p>
          </div>

          {/* Alok Singh */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <img
              src="src/images/Screenshot 2025-08-14 141743.png"
              alt="Alok Singh"
              className="w-32 h-32 rounded-full object-cover"
            />
            <h3 className="mt-6 text-2xl font-semibold text-gray-800">Alok Singh</h3>
            <p className="text-red-600 font-medium">Global Business Director</p>
            <p className="mt-4 text-gray-600 leading-relaxed text-sm">
              As Global Business Director, Alok drives Secure Affiliate Media’s global strategy
              and expansion. From starting as a finance executive at ADMS & Co. to working as a Tax
              Auditor at a Big 4 firm, his career took a pivotal turn in 2022 when he joined the
              company. His passion for the affiliate market and exceptional business development
              skills have broadened the company’s global footprint and secured major international
              partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY SECURE MEDIA ================= */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Secure Media?</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              At Secure Affiliate Media, your success is our success. We are different due to our highly trained
              and deeply skilled staff. Our experts aren't only smart; they've worked hard for years mastering
              the art of affiliate and performance marketing industry. All this experience manifests itself in a
              tangible real-time return that stands on its own merit. We're not speaking about potential; we're
              about delivering tangible, measurable results that inspire real growth for our partners.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold text-green-600 mb-3">Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To enable companies with the strategic knowledge of our highly skilled team, providing
                  outstanding real-time outcomes in affiliate and performance marketing that promote
                  sustainable growth and accomplish their specific goals.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold text-blue-600 mb-3">Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To create long-term relationships with companies around the globe, to become their go-to
                  partner in reaching their marketing goals by continuously strengthening our extremely
                  talented team and our commitment to provide better real-time results.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="src/images/Affiliate-Marketing-Blog-Graphics-01.jpg"
              alt="Why Secure Media"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= CORE STRENGTHS ================= */}
      <section className="bg-gray-50 py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Strengths</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            At Secure Affiliate Media, we pride ourselves on the values and capabilities that set us apart in the performance marketing industry.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { number: 1, title: "Experienced Team", color: "green" },
              { number: 2, title: "Real-Time Results", color: "blue" },
              { number: 3, title: "Tangible Outcomes", color: "yellow" },
              { number: 4, title: "Proven Performance", color: "red" },
              { number: 5, title: "Dedicated Experts", color: "purple" },
              { number: 6, title: "Leading Force", color: "pink" },
            ].map((item, idx) => (
              <div key={idx} className={`bg-white rounded-xl shadow hover:shadow-lg transition-shadow p-8`}>
                <div className={`flex items-center justify-center w-14 h-14 bg-${item.color}-100 text-${item.color}-600 rounded-full mx-auto mb-4 text-2xl font-bold`}>
                  {item.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our success, echoed by our clients. Unfiltered feedback and true testament to our service quality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rajat Sharma", text: `"I recently partnered with Secure Affiliate Media for digital marketing services, and I couldn't be more impressed. From day one, their team has been incredibly professional, responsive, and results-driven. They took the time to understand my business goals and crafted a customized strategy that truly delivered."` },
              { name: "Rohit Choudhary", text: `"Secure Affiliate Media did a fantastic job with our Google Ads and Facebook Ads, delivering great leads and ROI. Professional, responsive, and strategic — highly recommend them for anyone serious about growing their business."` },
              { name: "Jahid Ali", text: `"This agency expertly handled our Google Ads, Facebook Ads, and social media marketing. Their strategic approach boosted engagement, brand visibility, and quality leads. Professional, responsive, and results-driven — highly recommend for business growth!"` }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition-shadow">
                <p className="text-gray-700 italic mb-6">{testimonial.text}</p>
                <div className="flex items-center justify-center">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}
