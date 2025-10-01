import React from 'react'

function Cta() {
  return (
      <section className="py-16 bg-white font-myfont">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-myfont  leading-normal md:text-4xl  text-gray-900 mb-4">
            Let us know <br /> what you think!
          </h2>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit   
            phasellus mollis sit aliquam sit nullam.
          </p>
          <p className="text-sm text-gray-600">
            Copyright © 2025{" "}
            <a href="#" className="text-teal-500 ">
              Route my Claim.
            </a><br></br>
            All rights reserved.
          </p>
        </div>

        {/* Right Side (Form) */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm  font-myfont  font-normal mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Brian Clark"
                className="w-full font-myfont   rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block  font-myfont  text-sm font-normal  mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="example@youremail.com"
                className="w-full  font-myfont  rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4  font-myfont ">
            <div>
              <label className="block text-sm font-normal mb-1  font-myfont  ">
                Phone
              </label>
              <input
                type="text"
                placeholder="(123) 456 - 7890"
                className="w-full rounded-full border  font-myfont   border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm   font-myfont  font-normal  mb-1">
                Company
              </label>
              <input
                type="text"
                placeholder="Tesla"
                className="w-full rounded-full  font-myfont  border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm  font-myfont   font-normal  mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Type your message here..."
              className="w-full  font-myfont  rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full  font-myfont  md:w-auto px-12 py-2 rounded-full text-white font-normal bg-gradient-to-r from-green-400 to-blue-600 hover:from-green-500 hover:to-blue-700 transition-colors"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  )
}

export default Cta