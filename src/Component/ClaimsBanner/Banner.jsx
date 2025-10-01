import React from 'react'
import Phone from '../../assets/images/Banner_mobile_image.svg'

function Banner() {
  return (
    <section class="bg-gradient-to-bl from-green-400 to-blue-600 rounded-[3rem]">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-[9rem] lg:grid-cols-12">
        
        <div class="hidden lg:mt-0 lg:col-span-6 lg:flex">
            <img 
            src={Phone}
             alt="mockup"
             style={{width: '1000px',position: 'absolute',top: '6rem'}}
             />
        </div> 
        <div class="mr-auto place-self-center lg:col-span-6 lg:px-10">
            <h1 class="max-w-2xl text-white mb-4 text-4xl  font-myfont leading-none md:text-5xl xl:text-6xl">Simplify Your Claims Routing</h1>
            <p class="max-w-2xl mb-6  text-white lg:mb-8 md:text-lg lg:text-xl font-myfont ">Streamline the handling of claims with our intuitive, all-in-one platform.</p>
           
            <a href="#" class="inline-flex font-myfont  bg-white items-center justify-center rounded-3xl b px-12 py-3 text-base  text-center text-blue-600 border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 ">
                Get Started Free
            </a> 
        </div>               
    </div>
</section>
  )
}

export default Banner