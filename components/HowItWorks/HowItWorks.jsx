import React from "react";
import StepCard from "./StepByStepGuide";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="mt-24 px-4 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-center text-zinc-800 mb-6">
        How It Works?
      </h2>

      <p className="mt-6 text-center text-lg text-gray-600 max-w-2xl mx-auto">
        Our platform combines innovative funding with comprehensive business
        support, addressing the unique challenges faced by SMEs and startups.
        It's flexible, transparent, and designed for your growth.
      </p>
      <div className="flex justify-center w-full my-12">
        <a
          href="https://docs.fba.finance/user-guide/creating-an-account"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-in relative inline-block font-medium text-xl text-center px-8 py-4 text-gray-700 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ring-2 ring-indigo-300 hover:ring-purple-400"
        >
          <span className="relative z-10">
            Here's how it works on FBA Finance
          </span>
          <span className="absolute inset-0 bg-white opacity-50 rounded-full blur-md"></span>
        </a>
      </div>
      <StepCard />
    </section>
  );
};

export default HowItWorks;
