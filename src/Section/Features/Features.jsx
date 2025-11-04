// src/components/FeaturesSection.jsx
import React from "react";
import UploadIcon from "../../assets/images/gallery.svg";
import ScheduleIcon from "../../assets/images/Doc.svg";
import CalendarIcon from "../../assets/images/calendar.svg";
import ArrowIcon from "../../assets/images/Right_arrow.svg";

const features = [
  {
    title: "Easy uploads",
    desc: "Add addresses by taking a picture of a list of claims or upload from a spreadsheet",
    icon: UploadIcon,
  },
  {
    title: "Smart Scheduling",
    desc: " RouteMyClaims will automatically optimize your route by scheduling based on the distance between inspections. Paper days set by you will be automatically blocked from scheduling inspections on those days.",
    icon: ScheduleIcon,
  },
  {
    title: "Visual Calendar",
    desc: "Inspections will be displayed in a printable calendar to allow easy viewing of your daily, weekly or monthly schedule.",
    icon: CalendarIcon,
  },
];

function Features() {
  return (
    <section className="py-16 bg-white" data-aos="zoom-in">
      <div className="max-w-6xl mx-auto text-center">
        <h2 class="text-gray-900 text-3xl font-myfont font-medium leading-normal text-center mb-10 md:mb-24">
          RouteMyClaims Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="cursor-pointer relative bg-gradient-to-b from-white to-gray-100 rounded-3xl py-6 px-8 flex flex-col text-left transition-transform duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="flex h-28 mb-3">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-24 h-24 object-contain"
                />
              </div>

              {/* Title + Description wrapper for equal height */}
              <div className="min-h-[140px] flex flex-col ">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-[#787878] text-lg leading-relaxed flex-grow">
                  {feature.desc}
                </p>
              </div>

              {/* Arrow Button */}
              <div className="absolute bottom-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white">
                <img src={ArrowIcon} alt="arrow" className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
