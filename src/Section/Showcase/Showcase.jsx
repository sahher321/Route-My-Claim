import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Showcase() {
  // detect when section is visible
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3, // start when 30% of section is visible
  });

  return (
    <section ref={ref} className="py-20">
      <h2 className="text-gray-900 text-3xl font-myfont font-medium leading-normal text-center mb-5">
        Numbers That Showcase Our Success
      </h2>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* 1st Counter */}
          <div className="w-full lg:w-1/4 border-b pb-10 lg:border-b-0 lg:border-r border-gray-100">
            <div className="font-bold font-myfont text-[52px] mb-5 text-center bg-gradient-to-b from-green-400 to-blue-600 bg-clip-text text-transparent">
              {inView && <CountUp end={200} duration={3} suffix="+" />}
            </div>
            <span className="text-xl font-myfont text-[#787878] text-center block">
              Expert Consultants
            </span>
          </div>

          {/* 2nd Counter */}
          <div className="w-full lg:w-1/4 border-b pb-10 lg:border-b-0 lg:border-r border-gray-100">
            <div className="font-bold font-myfont text-[52px] mb-5 text-center bg-gradient-to-b from-green-400 to-blue-600 bg-clip-text text-transparent">
              {inView && <CountUp end={97} duration={3} suffix="+" />}
            </div>
            <span className="text-xl font-myfont text-[#787878] text-center block">
              Active Clients
            </span>
          </div>

          {/* 3rd Counter */}
          <div className="w-full lg:w-1/4 border-b pb-10 lg:border-b-0 lg:border-r border-gray-100">
            <div className="font-bold font-myfont text-[52px] mb-5 text-center bg-gradient-to-b from-green-400 to-blue-600 bg-clip-text text-transparent">
              {inView && <CountUp end={34} duration={3} suffix="+" />}
            </div>
            <span className="text-xl font-myfont text-[#787878] text-center block">
              Projects Delivered
            </span>
          </div>

          {/* 4th Counter */}
          <div className="w-full lg:w-1/4">
            <div className="font-bold font-myfont text-[52px] mb-5 text-center bg-gradient-to-b from-green-400 to-blue-600 bg-clip-text text-transparent">
              {inView && <CountUp end={100} duration={3} suffix="+" />}
            </div>
            <span className="text-xl font-myfont text-[#787878] text-center block">
              Orders in Queue
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
