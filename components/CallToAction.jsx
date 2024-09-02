"use client";
import React, { useState } from "react";
import Modal from "./Modal"; // Assuming you have a Modal component
import GoogleForm from "../app/create-form/GoogleForm"; // Import your Google form component
import { ArrowRight } from "lucide-react";

function CallToAction() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const openGoogleForm = () => {
    window.open("https://forms.gle/n2795F4jih9Kf792A", "_blank");
  };

  return (
    <div className="animate-fade-up flex flex-col gap-5 mt-16 text-lg font-semibold max-md:mt-10">
      <h2 className="text-zinc-950 font-semibold text-neutral-500 subpixel-antialiased max-md:text-lg">
        Get early access to our platform
      </h2>
      <div className="flex gap-5 items-start">
        <button
          onClick={openGoogleForm}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get Early Access
          <ArrowRight size={24} className="inline-block ml-2" />
        </button>
      </div>
      <h2 className="text-base font-light text-neutral-600 max-md:text-lg">
        Be one of the first to know and get early access to our platform
      </h2>
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <GoogleForm onClose={handleCloseModal} />
      </Modal>
    </div>
  );
}

export default CallToAction;
