import React from "react";

function StepCard({ stepNumber, title, description }) {
  return (
    <article className="flex flex-col min-w-[240px] w-[270px]">
      <header className="flex flex-col items-start self-start font-semibold text-center">
        <div className="px-2 text-base border-l-4 border-violet-400 border-solid border-l-violet-400 text-neutral-600 w-[80px]">
          STEP {stepNumber}
        </div>
        <h2 className="mt-2 text-lg text-zinc-800">{title}</h2>
      </header>
      <p className="mt-2 text-base text-zinc-800">{description}</p>
    </article>
  );
}

export default StepCard;
