import React from "react";
import FeatureCard from "./FeaturesCard";

const features = [
  {
    icon: "assets/images/BuildingBank.svg",
    title: "Access to Flexible Funding",
    description: "Access capital without traditional banking hurdles.",
  },
  {
    icon: "assets/images/PeopleCommunity.svg",
    title: "Collaborative Community",
    description:
      "Leverage the power of community funding through our innovative ROSCA model.",
  },
  {
    icon: "assets/images/MoneyHand.svg",
    title: "Tailored Solutions",
    description:
      "Benefit from personalized funding options, designed to meet your unique business needs.",
  },
  {
    icon: "assets/images/growth.svg",
    title: "0% interest growth loans",
    description:
      "Empowering SMEs to reach their full potential through affordable funding and collaboration opportunities.",
  },
];

function JoinUsSection() {
  return (
    <section
      id="about-us"
      className="animate-fade-left relative flex overflow-hidden flex-col items-center py-11 px-32 w-full text-lg bg-indigo-500 rounded-3xl max-w-[1257px] min-h-[451px] max-md:px-5 max-md:max-w-full focus:animate-pulse focus:outline-none transition-all duration-300"
    >
      <img
        src="/assets/images/JoinUsToday.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative flex flex-col items-center w-full">
        <h2 className="text-center px-6 max-w-full text-4xl font-bold text-white w-[600px] max-md:pl-5">
          Why Choose FBA Finance?
        </h2>
        <p className="mt-3 font-semibold text-white text-center max-md:max-w-full">
          Unlock growth opportunities, amplify your impact, and connect with a
          supportive network
        </p>
        <div className="flex flex-wrap gap-2.5 justify-center items-start mt-6 text-base max-md:max-w-full">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <button className="gap-4 px-4 py-2.5 mt-6 max-w-full font-semibold bg-white rounded-lg text-zinc-800 w-[425px] transition duration-300 ease-in-out transform hover:scale-105">
          Find out more about business loans
        </button>
      </div>
    </section>
  );
}

export default JoinUsSection;
