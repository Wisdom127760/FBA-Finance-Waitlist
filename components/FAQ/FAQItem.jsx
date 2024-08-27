// FAQItem.jsx is a functional component that renders a question and answer.
//It uses the useState hook to manage whether the answer is open or closed, and the AnimatePresence component from Framer Motion to allow for exit animations.
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FAQAnswer from "./FAQAnswer";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
      >
        <span className="font-bold">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-violet-500 text-3xl"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && <FAQAnswer answer={answer} />}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
