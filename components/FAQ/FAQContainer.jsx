// FAQContainer.jsx is a functional component that takes in an array of questions and maps over them to render a FAQItem component for each question. It also renders a title for the FAQ section.
"use client";
import React from "react";
import FAQItem from "./FAQItem";

const FAQContainer = ({ questions }) => (
  <div className="mt-24 max-w-6xl mx-auto p-4">
    <h1 className="text-5xl font-bold text-center text-zinc-800 mb-6">
      Frequently Asked Questions
    </h1>
    <div className="max-h-96 overflow-y-scroll ">
      <div className="space-y-4">
        {questions.map((q, index) => (
          <FAQItem key={index} question={q.question} answer={q.answer} />
        ))}
      </div>
    </div>
  </div>
);

export default FAQContainer;
