import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CustomNextArrow = ({ className, onClick }) => (
  <button
    aria-label="Next Slide"
    type="button"
    className={`${className} custom-arrow-button`}
    onClick={onClick}
    style={{ display: "flex" }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-8 h-8 text-red-600"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const CustomPrevArrow = ({ className, onClick }) => (
  <button
    aria-label="Previous Slide"
    type="button"
    className={`${className} custom-arrow-button`}
    onClick={onClick}
    style={{ display: "flex" }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-8 h-8 text-red-600"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
    adaptiveHeight: true, // dynamically adjust height to current slide
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const banners = [
    { id: 1, image: "/1.png", alt: "Banner 1" },
    { id: 2, image: "/2.png", alt: "Banner 2" },
    { id: 3, image: "/3.png", alt: "Banner 3" },
    { id: 5, image: "/5.png", alt: "Banner 5" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id}>
            <img
              src={banner.image}
              alt={banner.alt}
              className="w-full object-cover rounded-xl"
            />
          </div>
        ))}
      </Slider>

      <style jsx>{`
        /* Hide default slick arrows */
        .slick-prev:before,
        .slick-next:before {
          content: '';
          display: none;
        }
        /* Custom arrow styling */
        .custom-arrow-button {
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0,0,0,0.15);
          width: 50px;
          height: 50px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s ease;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          border: none;
          padding: 0;
        }
        .custom-arrow-button:hover {
          background-color: white;
        }
        .slick-prev.custom-arrow-button {
          left: 20px;
        }
        .slick-next.custom-arrow-button {
          right: 20px;
        }
      `}</style>
    </div>
  );
};

export default BannerSlider;
