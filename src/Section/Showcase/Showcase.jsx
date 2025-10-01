import React from "react";

function Showcase() {
  return (
    <section class="py-20">
      <h2 class="text-gray-900 text-3xl font-myfont  leading-normal lg:text-center text-center mb-5 ">
        Number That Showcase Our Success
      </h2>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between">
          <div class="w-full lg:w-1/4 border-b pb-10 lg:border-b-0 lg:pb-0 lg:border-r border-gray-100">
            <div class="font-bold  font-myfont   text-5xl  mb-5 text-center bg-gradient-to-b from-green-400 to-blue-600 bg-clip-text text-transparent">
              275+
            </div>
            <span class="text-xl  font-myfont  text-gray-500 text-center block ">
              Expert Consultants
            </span>
          </div>
          <div class="w-full lg:w-1/4 border-b pb-10 lg:border-b-0 lg:pb-0 lg:border-r border-gray-100">
            <div class="font-bold  font-myfont  text-5xl  mb-5 text-center bg-gradient-to-b from-green-400 to-blue-600 bg-clip-text text-transparent">
              975+
            </div>

            <span class="text-xl text-gray-500 text-center block ">
              Active Clients
            </span>
          </div>
          <div class="w-full lg:w-1/4 border-b pb-10 lg:border-b-0 lg:pb-0 lg:border-r border-gray-100">
            <div class="font-bold  font-myfont  text-5xl  mb-5 text-center bg-gradient-to-b from-green-400 to-blue-600 bg-clip-text text-transparent">
              724+
            </div>
            <span class="text-xl  font-myfont  text-gray-500 text-center block ">
              Projects Delivered
            </span>
          </div>
          <div class="w-full lg:w-1/4  ">
            <div class="font-bold text-5xl  font-myfont   mb-5 text-center bg-gradient-to-b from-green-400 to-blue-600 bg-clip-text text-transparent">
              95+
            </div>
            <span class="text-xl text-gray-500  font-myfont  text-center block ">
              Orders in Queue
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
