import React from "react";

const FooterCallToAction = () => {
  return (
    <div className="flex gap-5 items-start max-sm:hidden">
      <input
        type="text"
        className="gap-4 self-stretch px-4  text-black text-sm font-normal bg-white border border-indigo-100 rounded-lg w-[400px]"
        placeholder="Enter your email"
      />
      <button className="gap-4 self-stretch px-4  text-base text-white bg-indigo-600 rounded-lg w-[258px]">
        Get Early Access
      </button>
    </div>
  );
};

export default FooterCallToAction;
