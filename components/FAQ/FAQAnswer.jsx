// FAQAnswer.jsx is a functional component that renders the answer to a question. It uses the motion component from Framer Motion to animate the answer's height and opacity when it is opened or closed.
import React from "react";
import { motion } from "framer-motion";

const FAQAnswer = ({ answer }) => (
  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: "auto", opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="px-4 pb-4"
  >
    <p className="text-gray-600">{answer}</p>
  </motion.div>
);

export default FAQAnswer;
