import React from "react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center min-w-[240px] w-[252px]">
      <div className="flex flex-col items-center font-semibold text-white">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain aspect-square w-[57px]"
        />
        <h3 className="mt-2.5">{title}</h3>
      </div>
      <p className="mt-2.5 text-center text-stone-100">{description}</p>
    </div>
  );
}

export default FeatureCard;
