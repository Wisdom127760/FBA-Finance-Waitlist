import React from "react";
import StepCard from "./StepCard";
import {
  Users,
  PiggyBank,
  Repeat,
  TrendingUp,
  BookOpen,
  Building,
  ChartBar,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    stepNumber: 1,
    title: "Sign up and create your profile",
    description:
      "Register on our platform and set up your business profile with essential details. Join a community of like-minded entrepreneurs.",
    icon: Users,
  },
  {
    stepNumber: 2,
    title: "Contribute to the funding pool",
    description:
      "Participate in our collaborative funding model by contributing to the pool, supporting other businesses while positioning yours for funding.",
    icon: PiggyBank,
  },
  {
    stepNumber: 3,
    title: "Take turns receiving funds",
    description:
      "Benefit from our fair rotational funding model, where every participant takes turns receiving support from the pool, ensuring steady access to capital.",
    icon: Repeat,
  },
  {
    stepNumber: 4,
    title: "Receive expert guidance",
    description:
      "Access personalized mentorship, financial advice, and operational strategies tailored to your business needs.",
    icon: BookOpen,
  },
  {
    stepNumber: 5,
    title: "Implement growth strategies",
    description:
      "Leverage our platform's tools and support to optimize operations, enhance marketing, and scale effectively.",
    icon: TrendingUp,
  },
  {
    stepNumber: 6,
    title: "Build credit & credibility",
    description:
      "Improve your business's financial standing through consistent participation and successful fund utilization.",
    icon: Building,
  },
  {
    stepNumber: 7,
    title: "Accelerate tech integration",
    description:
      "Access cutting-edge tools and guidance to bridge the technological gap and streamline your operations.",
    icon: ChartBar,
  },
  {
    stepNumber: 8,
    title: "Grow without losing ownership",
    description:
      "Accelerate your growth and achieve your goals with funding access, all while maintaining full ownership and control.",
    icon: ShieldCheck,
  },
];

function StepByStepGuide() {
  return (
    <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {steps.map((step) => (
        <StepCard
          key={step.stepNumber}
          stepNumber={step.stepNumber}
          title={step.title}
          description={step.description}
          icon={step.icon}
        />
      ))}
    </section>
  );
}

export default StepByStepGuide;
