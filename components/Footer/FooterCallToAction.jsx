"use client";
import React, { useState } from "react";
import Modal from "@components/Modal"; // Assuming you have a Modal component
import GoogleForm from "@app/create-form/GoogleForm";
import { ArrowRight } from "lucide-react";

const FooterCallToAction = () => {
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
    <div className="flex gap-5 items-start max-sm:hidden md:grid-36 lg:grid-36">
      <button
        onClick={openGoogleForm}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
      >
        Get Early Access
        <ArrowRight size={24} className="inline-block ml-2" />
      </button>
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <GoogleForm onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default FooterCallToAction;
