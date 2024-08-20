import React from "react";

function CallToAction() {
  return (
    <div className="flex flex-col gap-5 mt-16 text-lg font-semibold max-md:mt-10">
      <h2 className="text-xl font-medium max-md:text-lg">
        Get early access to our platform
      </h2>
      <div className="flex gap-5 items-start">
        <input
          type="text"
          className="gap-4 self-stretch px-4 py-2.5 text-black text-sm font-normal bg-white border border-indigo-100 rounded-lg w-[400px]"
          placeholder="Enter your email"
        />
        <button className="gap-4 self-stretch px-4 py-2.5 text-base text-white bg-indigo-600 rounded-lg w-[258px]">
          Get Early Access
        </button>
      </div>
      <h2 className="text-base font-light text-neutral-600 max-md:text-lg">
        Be one of the first to know and get early access to our platform
      </h2>
    </div>
  );
}

export default CallToAction;
