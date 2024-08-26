import React from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
const Navigation = ({ currentIndex, total, onNext, onPrev }) => (
  <div className="px-8 absolute bottom-4 left-4 right-4 flex items-center justify-between">
    <div className="flex space-x-2">
      {[...Array(total)].map((_, i) => (
        <span
          key={i}
          className={`w-2 h-2 rounded-full ${
            i === currentIndex ? "bg-white" : "bg-white/50"
          }`}
        />
      ))}
    </div>
    <div className="flex space-x-2">
      <button
        onClick={onPrev}
        className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" aria-hidden="true" />
      </button>
      <button
        onClick={onNext}
        className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
      >
        <ChevronRightIcon className="w-6 h-6 text-white" aria-hidden="true" />
      </button>
    </div>
  </div>
);

export default Navigation;
