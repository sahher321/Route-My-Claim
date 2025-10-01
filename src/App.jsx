import React from "react";
import { Routes, Route } from "react-router-dom";
import PricingPlans from "./Component/PricingPlans/Pricing";
import Banner from "./Component/ClaimsBanner/Banner";
import Header from "./Component/Header/Header";
import About from "./Section/About/About";
import Showcase from "./Section/Showcase/Showcase";
import Cta from "./Section/CTA/Cta";
import Features from "./Section/Features/Features";
import AppScreensSlider from "./Component/AppScreensSlider/AppScreensSlider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="font-MyFont h-full">
            <Header />
            <div className="overflow-x-hidden">
            <section id="home"><Banner /></section>
            <section id="about"><About /></section>
            <section id="features"><Features /></section>
            <section id="pricing"><PricingPlans /></section>
            <section id="showcase"><Showcase /></section> 
            <section id="screens"><AppScreensSlider /></section>
            <section id="cta"><Cta /></section>
            </div>
          </div>
        }
      />
    </Routes>
  );
};

export default App;
