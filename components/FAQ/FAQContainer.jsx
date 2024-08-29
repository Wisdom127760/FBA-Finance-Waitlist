"use client";
import React from "react";
import Link from "next/link";
import FAQItem from "./FAQItem";

const FAQContainer = ({ questions }) => (
  <div className="mt-24 max-w-6xl mx-auto p-4">
    <h1 className="text-5xl font-bold text-center text-zinc-800 mb-6">
      Frequently Asked Questions
    </h1>
    <div className="mb-6">
      <p className="text-center text-indigo-600 text-3xl mb-4">
        Still have questions ?{" "}
      </p>
      <p className="text-center ">
        Visit our{"  "}
        {"  "}
        <span className="rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          <Link
            href="/faq"
            className="text-black-100 transition duration-300 ease-in-out transform hover:scale-105 hover:text-violet-400"
          >
            FAQ Page
          </Link>
        </span>
        {"  "}
        {"  "}
        or{"  "}
        {"  "}
        <span className="rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          <a
            href="mailto:support@fba.finance"
            className="text-black-100 transition duration-300 ease-in-out transform hover:scale-105 hover:text-violet-400"
          >
            Contact Us
          </a>
        </span>
      </p>
    </div>

    <div className="max-h-96 ">
      <div className="space-y-4">
        {questions.slice(0, 4).map((q, index) => (
          <FAQItem key={index} question={q.question} answer={q.answer} />
        ))}
      </div>
    </div>
  </div>
);

export default FAQContainer;
