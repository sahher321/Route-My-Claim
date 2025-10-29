import React from "react";
import Phone from "../../assets/images/Banner_mobile_image.svg";
import { TypeAnimation } from "react-type-animation";
import bg_image from "../../assets/images/bg_Color.svg";

function Banner() {
  return (
    <section
      className="
        bg-gradient-to-bl from-green-400 to-blue-600 
        lg:bg-none lg:rounded-[3rem]
      "
      style={{
        backgroundImage: `url(${bg_image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-[16rem] lg:grid-cols-12">
        {/* Left image */}
        <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
          <img
            src={Phone}
            alt="mockup"
            className="animate-float"
            style={{
              width: "60.25rem",
              position: "absolute",
              top: "6rem",
              left: "2.5rem",
            }}
          />
        </div>

        {/* Right content */}
        <div
          className="mr-auto place-self-center lg:col-span-6 lg:px-10 xl:ml-10"
          data-aos="fade-left"
        >
          <h1
            className="
              max-w-2xl text-white mb-4 text-4xl font-myfont font-medium 
              md:text-5xl xl:text-6xl
              lg:tracking-wide lg:leading-loose lg:[word-spacing:0.2rem]
            "
          >
            Simplify Your Claims Routing
          </h1>

          <p
            className="max-w-2xl mb-6 text-white lg:mb-8 md:text-lg lg:text-xl font-myfont"
            style={{ minHeight: "3rem", display: "flex", alignItems: "center" }}
          >
            <TypeAnimation
              sequence={[
                "Streamline the handling of claims.",
                2000,
                "Manage claims faster and smarter.",
                2000,
                "Simplify workflows in every claims.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>

          <a
            href="#"
            className="inline-flex font-myfont cursor-pointer bg-white items-center justify-center rounded-3xl px-12 py-3 text-base text-center text-blue-600 border border-white transition"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
