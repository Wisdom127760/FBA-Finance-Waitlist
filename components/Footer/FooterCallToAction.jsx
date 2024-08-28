"use client";
import React, { useState } from "react";
import Modal from "@components/Modal"; // Assuming you have a Modal component
import GoogleForm from "@app/create-form/GoogleForm";

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
    <div className="flex items-start">
      <button
        onClick={openGoogleForm}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
      >
        Get Early Access
      </button>
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <GoogleForm onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default FooterCallToAction;
