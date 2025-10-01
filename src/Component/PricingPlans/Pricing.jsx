import React, { useState } from "react";
import checkImage from "../../assets/images/check.svg";
import FacilityCheck from "../../assets/images/facility_check.svg";


const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Basic plan",
      price: { monthly: 19.99, annually: 199.99 },
      claims: "Up to 50 claims per month",
      features: [
        "Manual entry of ZIP codes or full addresses",
        "Optimized map displaying route lines with inspection order numbers",
        "Output: Spreadsheet-style table showing inspection order, city, and address",
      ],
      buttonColor:
        "group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-600 bg-gray-600",
      special: true,
    },
    {
      name: "Standard Plan",
      price: { monthly: 39.99, annually: 399.99 },
      claims: "Up to 100 claims per month",
      features: [
        "Includes all Basic Plan features, plus:",
        "Prompts for starting and ending location",
        "Displays distance between each inspection",
      ],
      buttonColor:
        "group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-600 bg-gray-600",
      special: true,
    },
    {
      name: "Pro Plan",
      price: { monthly: 59.99, annually: 599.99 },
      claims: "Up to 200 claims per month",
      freeTrial: "14 days",
      features: [
        "Includes all Standard Plan features, plus:",
        "OCR Uploads: Users can upload photos or spreadsheets with claim data",
      ],
      buttonColor:
        "group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-600 bg-gray-600",
      special: true,
    },
  ];

  return (
    <section className="w-full bg-white py-12 font-myfont">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-myfont  leading-normal ">
            Subscription Model
          </h2>
          {/* Billing Toggle */}
          <div className="flex justify-center items-center gap-3 mt-6">
            <span
              className={`${
                billingCycle === "monthly"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "annually" : "monthly"
                )
              }
              className="w-12 h-6 bg-gray-300 rounded-full flex items-center p-1 transition"
            >
              <span
                className={`w-4 h-4 bg-white rounded-full shadow transform transition ${
                  billingCycle === "annually" ? "translate-x-6" : ""
                }`}
              />
            </button>
            <span
              className={`${
                billingCycle === "annually"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-500"
              }`}
            >
              Annually
            </span>
          </div>
        </div>

        {/* Benefits - stacked vertically */}
        <div className="mt-4 text-gray-700 text-sm flex flex-col items-start space-y-2">
          <p className="flex items-center gap-2  font-myfont ">
            <span >
              <img src={checkImage} />
            </span>{" "}
            Yearly plans include a discount (
            <span className="text-green-600  font-myfont ">2 months free</span>)
          </p>

          <p className="flex items-center gap-2  font-myfont ">
            <span >
              <img src={checkImage} />
            </span>{" "}
            Users can upgrade or downgrade plans at any time
          </p>

          <p className="flex items-center gap-2  font-myfont ">
            <span >
              <img src={checkImage} />
            </span>{" "}
            In-app purchase management is supported
          </p>
        </div>

        {/* Plans */}
        <div className="grid sm:grid-cols-3 gap-6 mt-10">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`group p-6 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition flex flex-col h-full`}
            >
              <div className="flex-grow">
                <h3 className="text-start font-semibold text-3xl">
                  {plan.name}
                </h3>

                <p
                className={`text-5xl font-bold mt-3 text-start  font-myfont  ${
  plan.special
    ? "text-[#787878] group-hover:bg-gradient-to-r  font-myfont  group-hover:from-green-500 group-hover:to-blue-700 group-hover:bg-clip-text group-hover:text-transparent"
    : ""
}`}

                >
                  ${plan.price[billingCycle].toFixed(2)}
                  <span className="text-sm font-normal  font-myfont  text-black">
                    /{billingCycle === "monthly" ? "month" : "year"}
                  </span>
                </p>
                <hr class="border-[#E1E4ED] my-4"></hr>

                <p className="text-gray-500 text-sm mt-2">
                  Claims Limit: {plan.claims}
                </p>

                {/* {plan.freeTrial && (
                  <p className="text-green-600 text-sm mt-1">
                    Free Trial: {plan.freeTrial}
                  </p>
                )} */}

                {/* Features */}
                <ul className="mt-4 text-left text-sm text-gray-600 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex justify-start  font-myfont  gap-2 items-Start" ><img src={FacilityCheck} alt="✔" /> {feature}</li>
                  ))}
                </ul>
              </div>

              {/* Button aligned bottom */}
              <button
                className={`${plan.buttonColor} font-myfont  text-white font-medium py-4 px-12 md:py-2 md:px-5 rounded-3xl transition mt-6`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
