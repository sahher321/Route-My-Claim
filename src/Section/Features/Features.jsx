// src/components/FeaturesSection.jsx
import React from "react";
import UploadIcon from "../../assets/images/gallery.svg"; 
import ScheduleIcon from "../../assets/images/Doc.svg"; 
import CalendarIcon from "../../assets/images/calendar.svg"; 
import ArrowIcon from "../../assets/images/Right_arrow.svg"; 

const features = [
  {
    title: "Easy Uploads",
    desc: "Quickly upload claims documents with a few clicks",
    icon: UploadIcon,
  },
  {
    title: "Smart Scheduling",
    desc: "Automatically assign claims to the right adjuster",
    icon: ScheduleIcon,
  },
  {
    title: "Visual Calendar",
    desc: "View and manage tasks with an interactive calendar",
    icon: CalendarIcon,
  },
];

function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 class="text-gray-900 text-3xl font-myfont  leading-normal  text-center mb-5">
          Route My Claims Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`cursor-pointer relative bg-gradient-to-b from-white to-gray-100 rounded-xl shadow-sm py-4 px-8 flex flex-col text-left transition-all duration-300 `}
            >
              {/* Icon */}
              <div className="">
                <img src={feature.icon} alt={feature.title} className="w-14 h-14" />
              </div>

              {/* Title + Description */}
              <h3 className="text-lg font-semibold text-gray-900 mt-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-10">
                {feature.desc}
              </p>

              {/* Arrow Button */}
              <div className="absolute bottom-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white ">
                <img src={ArrowIcon} alt="arrow" className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features;
