import React from "react";
import aboutImage from "../../assets/images/about_image.svg";
import IconTOuch from "../../assets/images/about_upper_logo.svg";


function About() {
  return (
    <section
      class="max-w-6xl mx-auto py-[3rem] lg:pt-[17rem]  relative font-myfont"
      data-aos="fade-right"
    >
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div class="w-full flex-col justify-start items-start inline-flex">
            <h2 class="text-3xl font-myfont font-medium leading-normal text-start mb-5">
              About RouteMyClaims
            </h2>
            <div class="w-full flex flex-col justify-start lg:items-start items-center gap-6">
              <p class="text-[#787878] text-lg font-normal leading-relaxed text-start ">
                At RouteMyClaims, we understand that your time is your most
                valuable asset. Our platform was created by claims professionals
                who know firsthand the challenges of juggling inspections,
                paperwork, and travel.
              </p>
              <p class="text-[#787878] text-lg  font-normal leading-relaxed text-start">
                We help you reclaim your day by simplifying scheduling,
                streamlining claim management, and cutting down wasted miles.
                With RouteMyClaims, every appointment is organized, every route
                is efficient, and every day is more productive.
              </p>
              <p class="text-[#787878] text-lg  font-normal leading-relaxed text-start">
                Our mission is simple: to give adjusters, inspectors, and
                contractors the tools to get more done in less time while
                staying focused on what matters most—accurate assessments and
                client satisfaction.
              </p>
              <p class="text-[#787878] text-lg  font-normal leading-relaxed text-start">
                Combining smart scheduling with organized workflows,
                RouteMyClaims makes your workdays predictable, profitable, and
                stress-free.
              </p>
            </div>
          </div>
    <div className="relative inline-block w-full max-w-lg mx-auto">
  {/* Main image */}
  <img
    className="w-full h-auto object-cover rounded-2xl"
    src={aboutImage}
    alt="About Us image"
  />

  {/* Floating icon overlay */}
  <div className="absolute -top-8 -right-6  md:-top-28 md:-right-24 z-10">
    <img
      className="w-28 md:w-64 md:h-64 object-contain"
      src={IconTOuch}
      alt="App Icon"
    />
  </div>
</div>



       
        </div>
      </div>
    </section>
  );
}

export default About;
