import React from "react";

function CallToAction() {
  return (
    <div className="flex gap-5 items-start mt-16 text-lg font-semibold max-md:mt-10">
      <button className="gap-4 self-stretch px-4 py-2.5 text-white bg-indigo-600 rounded-lg w-[186px]">
        Join the Waitlist
      </button>
      <button className="gap-4 self-stretch px-4 py-2.5 rounded-lg border border-solid border-neutral-600 text-zinc-800 w-[186px]">
        Learn More
      </button>
    </div>
  );
}

export default CallToAction;
