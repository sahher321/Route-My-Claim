import React, { useState } from "react";
import PricingPlans from "./Component/PricingPlans/Pricing";
import Banner from "./Component/ClaimsBanner/Banner";
import Header from "./Component/Header/Header";
import About from "./Section/About/About";
import Showcase from "./Section/Showcase/Showcase";
import Cta from "./Section/CTA/Cta";
import Features from "./Section/Features/Features";
import AppScreensSlider from "./Component/AppScreensSlider/AppScreensSlider";


const App = () => {
 
  return (
  <div className="font-MyFont h-full">
  <Header />
  <Banner />
  <About/>
  <Features/>
  <PricingPlans />
  <Showcase/>
  <AppScreensSlider/>
  <Cta/>
  
  </div>
  )
};

export default App;
