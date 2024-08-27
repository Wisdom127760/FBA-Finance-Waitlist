import React from "react";

const TestimonialContent = ({ children }) => {
  return (
    <div className="text-white italic subpixel-antialiased text-lg md:text-2xl leading-relaxed mb-6 relative z-10 px-4 md:px-8">
      {children}
    </div>
  );
};

export default TestimonialContent;
