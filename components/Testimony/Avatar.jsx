import React from "react";

const Avatar = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-16 h-16 rounded-full mr-4 object-cover block"
  />
);

export default Avatar;
