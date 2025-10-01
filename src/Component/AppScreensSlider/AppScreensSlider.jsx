// src/components/AppScreensSlider.jsx
import React from "react";
import Slider from "react-slick";

// Import Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your phone mockup images
import Screen1 from "../../assets/images/screen1.svg";
import Screen2 from "../../assets/images/screen2.svg";
import Screen3 from "../../assets/images/screen3.svg";
import Screen4 from "../../assets/images/screen4.svg";
import Screen5 from "../../assets/images/screen5.svg";

const screens = [Screen1, Screen2, Screen3, Screen4];

function AppScreensSlider() {
 const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "120px", // creates the "half slide" look
    arrows: true,
    responsive: [
      {
        breakpoint: 1280, // large screens
        settings: {
          slidesToShow: 4,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-white font-myfont">
      <div className="max-w-6xl mx-auto px-4 text-left">
        <h2 className="md:text-3xl text-3xl font-myfont  leading-normal mb-10">
          Get to Know Route my Claims.
        </h2>

        <Slider {...settings}>
          {screens.map((screen, idx) => (
            <div key={idx} className="px-3">
              <div className="flex justify-center">
                <img
                  src={screen}
                  alt={`App screen ${idx + 1}`}
                  className="max-h-[500px] object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default AppScreensSlider;
