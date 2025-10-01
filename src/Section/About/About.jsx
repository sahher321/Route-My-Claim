import React from "react";
import aboutImage from "../../assets/images/about_image.svg";

function About() {
  return (
    <section class="pt-[16rem] pb-[3rem] relative font-myfont ">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div class="w-full flex-col justify-start lg:items-start items-center inline-flex">
            <h2 class="text-3xl font-myfont  leading-normal  lg:text-start text-center mb-5">
              About Us Route my Claim
            </h2>
            <div class="w-full flex flex-col justify-start lg:items-start items-center gap-6">
              <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                At RouteMyClaims, we understand that your time is your most
                valuable asset. Our platform was created by claims professionals
                who know firsthand the challenges of juggling inspections,
                paperwork, and travel.
              </p>
              <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                We help you reclaim your day by simplifying scheduling,
                streamlining claim management, and cutting down wasted miles.
                With RouteMyClaims, every appointment is organized, every route
                is efficient, and every day is more productive.
              </p>
              <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Our mission is simple: to give adjusters, inspectors, and
                contractors the tools to get more done in less time while
                staying focused on what matters most—accurate assessments and
                client satisfaction.
              </p>
              <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Combining smart scheduling with organized workflows,
                RouteMyClaims makes your workdays predictable, profitable, and
                stress-free.
              </p>
            </div>
          </div>
          <img
            class="lg:mx-0 mx-auto h-full rounded-3xl object-contain"
            src={aboutImage}
            alt="about Us image"
            style={{ width: "600px", height: "400px" }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
