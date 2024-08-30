import React from "react";

function StepCard({ stepNumber, title, description, icon: Icon }) {
  return (
    <article className="flex flex-col bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <header className="flex items-start mb-4">
        <div className="bg-violet-100 p-3 rounded-full mr-4 flex-shrink-0">
          <Icon size={24} className="text-violet-600" />
        </div>
        <div>
          <div className="text-sm font-semibold text-violet-600 mb-1">
            STEP {stepNumber}
          </div>
          <h2 className="text-xl font-bold text-zinc-800 mb-2">{title}</h2>
          <p className="text-base text-zinc-600">{description}</p>
        </div>
      </header>
    </article>
  );
}

export default StepCard;
