import React from "react";
import Phone from "../../assets/images/Banner_mobile_image.svg";

function Banner() {
  return (
    <section class="bg-gradient-to-bl from-green-400 to-blue-600 lg:rounded-[3rem] ">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-[16rem] lg:grid-cols-12">
        <div class="hidden lg:mt-0 lg:col-span-6 lg:flex">
          <img
            src={Phone}
            alt="mockup"
            style={{
              width: "81.25rem", // instead of 81.25rem
              position: "absolute",
              top: "6rem", // instead of 6rem
              left: "2.5rem", // instead of 2.5rem
            }}
          />
        </div>
        <div class="mr-auto place-self-center lg:col-span-6 lg:px-10">
         <h1
  className="
    max-w-2xl text-white mb-4 text-4xl font-myfont font-semibold 
    md:text-5xl xl:text-6xl
    lg:tracking-wide lg:leading-loose lg:[word-spacing:0.2rem]
  "
>
  Simplify Your Claims Routing
</h1>


          <p class="max-w-2xl mb-6  text-white lg:mb-8 md:text-lg lg:text-xl font-myfont ">
            Streamline the handling of claims with our intuitive, all-in-one
            platform.
          </p>

          <a
            href="#"
            className="inline-flex font-myfont cursor-pointer bg-white items-center justify-center rounded-3xl px-12 py-3 text-base text-center text-blue-600 border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 transition"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
