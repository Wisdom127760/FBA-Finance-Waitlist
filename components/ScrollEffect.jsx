"use client"; // Marking this component as a client-side component

import { useEffect, useState } from "react";

const ScrollEffect = () => {
  const [gridOpacity, setGridOpacity] = useState(0.4); // Initial grid opacity

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = 300; // Adjust this for scroll effect
      const newOpacity = Math.max(0.4 - scrollTop / maxScroll, 0); // Adjust opacity
      setGridOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <style jsx>{`
      .main::after {
        opacity: ${gridOpacity}; // Dynamic opacity applied to the grid
      }
    `}</style>
  );
};

export default ScrollEffect;
