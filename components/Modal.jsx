import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      // Add overflow-hidden to body when the modal is open
      document.body.classList.add("overflow-hidden");
    } else {
      // Remove overflow-hidden when the modal is closed
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function to remove the class when the modal is unmounted or closed
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-600 bg-opacity-50 flex">
      <div className="relative p-8 bg-white w-full max-w-mdx m-auto flex-col flex rounded-lg ">
        <div className="flex flex-col overflow-hidden max-h-[80vh]">
          {children}
        </div>
        <span
          className="absolute top-0 right-0 p-4 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
      </div>
    </div>
  );
};

export default Modal;
