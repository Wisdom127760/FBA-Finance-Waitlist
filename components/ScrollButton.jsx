// components/ScrollButtons.jsx (Client Component)
"use client"; // Mark this as a Client Component to use event handlers

import { useState, useEffect } from "react";

const ScrollButtons = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Handle scroll behavior to toggle visibility of the buttons
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user is at the top
      setIsAtTop(window.scrollY < 100);

      // Check if the user is at the bottom
      const bottomThreshold = 50; // You can adjust this value
      const hasReachedBottom =
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - bottomThreshold;
      setIsAtBottom(hasReachedBottom);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" z-10 fixed bottom-5 right-5 space-y-4 flex flex-col ">
      {/* Scroll to Top Button (shown when not at the top) */}
      {!isAtTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className=" bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
          <svg
            className="w-6 h-6 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}

      {/* Scroll to Bottom Button (hidden at the bottom) */}
      {!isAtBottom && (
        <button
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
          className="  bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
          <svg
            className="w-6 h-6 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollButtons;
