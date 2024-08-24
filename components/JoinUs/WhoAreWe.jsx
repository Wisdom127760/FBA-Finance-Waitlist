import React from "react";

function WhoAreWe() {
  return (
    <section
      id="whoweare"
      className="pt-12 flex flex-col items-center justify-center "
    >
      <div className=" flex flex-col px-6 pt-6 pb-11 w-full max-w-5xl bg-fuchsia-200 rounded-3xl border-4 border-white border-dashed text-zinc-800 max-md:px-5 max-md:max-w-full">
        <h2 className="self-center px-7 max-w-full text-4xl font-bold border-l-4 border-violet-400 border-solid w-[286px] max-md:px-5">
          Who are we?
        </h2>
        <p className="mt-3 text-lg font-semibold text-center max-md:max-w-full">
          At FBA Finance, our mission is to revolutionize the way businesses
          access funding. We believe that every entrepreneur deserves a chance
          to thrive, and we're dedicated to providing innovative, accessible,
          and collaborative funding solutions that empower businesses to achieve
          their full potential.
        </p>
      </div>
    </section>
  );
}

export default WhoAreWe;
