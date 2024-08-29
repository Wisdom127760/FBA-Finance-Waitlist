import React from "react";

const GetStartedButton = () => {
  return (
    <div className="flex flex-col ml-5 w-[25%] max-md:ml-0 max-md:w-full ">
      <button
        onClick={openGoogleForm}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
      >
        Get Early Access
      </button>
    </div>
  );
};

export default GetStartedButton;
