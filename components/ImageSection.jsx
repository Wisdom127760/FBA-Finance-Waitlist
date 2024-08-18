"use client";
import React from "react";
import Image from "next/image";

function ImageSection() {
  return (
    <section className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
      <Image
        loading="lazy"
        src="/assets/images/laptopveiw1.png"
        alt="Business funding illustration"
        className="object-contain grow mt-4 w-full aspect-[1.66] max-md:mt-10 max-md:max-w-full"
        width={1000}
        height={1000}
      />
    </section>
  );
}

export default ImageSection;
