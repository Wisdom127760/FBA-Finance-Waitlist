import React from "react";

function HeroSection() {
  return (
    <div className="animate-fade-right flex flex-col items-start w-full font-bold max-md:mt-10 max-md:max-w-full">
      <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        Welcome to FBA{" "}
        <span className="font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          Finance
        </span>
      </div>

      <h1 className="text-5xl bg-clip-text text-zinc-800 max-md:max-w-full max-md:text-4xl pt-6">
        Empowering Your Financial Future.{" "}
      </h1>
      <p className="self-stretch px-3 py-1 mt-014 text-xl border-l-4 border-violet-300 border-solid border-l-violet-300 text-neutral-600 max-md:max-w-full">
        No Equity Dilution. Flexible Repayment Terms.
      </p>
    </div>
  );
}

export default HeroSection;
