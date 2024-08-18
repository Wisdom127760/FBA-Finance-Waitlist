import React from "react";

function HeroSection() {
  return (
    <div className="flex flex-col items-start w-full font-bold max-md:mt-10 max-md:max-w-full">
      <h1 className="text-5xl bg-clip-text text-zinc-800 max-md:max-w-full max-md:text-4xl">
        An incubator for proftable businesses in{" "}
        <span className="font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          Africa
        </span>
        .{" "}
      </h1>
      <p className="self-stretch px-3 py-1 mt-3 text-2xl border-l-4 border-violet-400 border-solid border-l-violet-400 text-neutral-600 max-md:max-w-full">
        No Equity Dilution. Flexible Repayment Terms.
      </p>
    </div>
  );
}

export default HeroSection;
