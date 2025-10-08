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
// import Screen5 from "../../assets/images/screen5.svg";
import Screen6 from "../../assets/images/screen6.svg";
import Screen7 from "../../assets/images/screen7.svg";

const screens = [Screen1, Screen2, Screen3, Screen4];

function AppScreensSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    variableWidth: true, // keep for desktop
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          variableWidth: false, // disable variable width on smaller screens
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          variableWidth: false, // disable variable width
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-white font-myfont">
      <div className="lg:max-w-[1550px]  ml-auto px-4 text-left">
        <div className="slider-wrapper overflow-hidden">
          <Slider {...settings}>
            {screens.map((screen, idx) => (
              <div key={idx} className="px-2">
                <div className="flex justify-center cursor-pointer">
                  <img
                    src={screen}
                    alt={`App screen ${idx + 1}`}
                    className="max-h-[800px] object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default AppScreensSlider;
