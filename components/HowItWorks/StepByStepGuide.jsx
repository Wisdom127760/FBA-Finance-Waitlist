import React from "react";
import StepCard from "./StepCard";

const steps = [
  {
    stepNumber: 1,
    title: "Sign up and create your profile",
    description:
      "Register on our platform and set up your business profile with essential details.",
  },
  {
    stepNumber: 2,
    title: "Contribute to the funding pool",
    description:
      "Participate in the collaborative funding model by contributing to the pool, supporting other businesses while positioning yours for funding.",
  },
  {
    stepNumber: 3,
    title: "Take turns receiving funds",
    description:
      "Benefit from our fair rotational funding model, where every participant takes turns receiving support from the pool.",
  },
  {
    stepNumber: 4,
    title: "Grow without losing ownership",
    description:
      "Accelerate your growth and achieve your goals with funding access, all while maintaining full ownership and control.",
  },
];

function StepByStepGuide() {
  return (
    <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step) => (
        <StepCard
          key={step.stepNumber}
          stepNumber={step.stepNumber}
          title={step.title}
          description={step.description}
        />
      ))}
    </section>
  );
}

export default StepByStepGuide;
