"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const GetStartedButton = () => {
  const openGoogleForm = () => {
    window.open("https://forms.gle/n2795F4jih9Kf792A", "_blank");
  };
  return (
    <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full ">
      <button
        onClick={openGoogleForm}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
      >
        Get Early Access
        <ArrowRight size={24} className="inline-block ml-2" />
      </button>
    </div>
  );
};

export default GetStartedButton;
