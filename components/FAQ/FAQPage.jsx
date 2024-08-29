"use client";
import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import FAQItem from "./FAQItem";

const FAQPage = ({ questions = [] }) => {
  // Provide a default empty array
  const [searchTerm, setSearchTerm] = useState("");

  const filteredQuestions = useMemo(() => {
    if (!questions) return []; // Return empty array if questions is undefined
    return questions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [questions, searchTerm]);

  if (!questions) {
    return <div>Loading...</div>; // Or any other loading state you prefer
  }

  return (
    <div className="mt-4 md:mt-16 w-full max-w-[1273px] max-md:mt-10 max-md:max-w-full">
      <div className="max-w-6xl mx-auto relative ">
        <div className="mb-8 relative flex overflow-hidden flex-col items-center py-11 px-8 w-full text-lg rounded-3xl max-w-[1257px] min-h-[350px] max-md:px-5 max-md:max-w-full">
          <img
            src="/assets/images/JoinUsToday.svg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center px-6 py-6 text-center">
            <h1 className="text-white text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <h2 className="text-white text-xl font-medium mb-4">
              A Quick Guide to Understanding FBA Finance
            </h2>
            <p className="text-white text-base font-normal mb-6 max-w-4xl">
              Got questions? We’ve got the answers! Below, you’ll find all the
              information you need to get the most out of FBA Finance. Whether
              you’re just getting started or looking to dive deeper into our
              platform, these FAQs will guide you through every step.
            </p>
          </div>

          {/* Fixed Search Bar at the Bottom */}
          <div className="absolute bottom-0 w-full px-8 pb-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-400 focus:border-transparent"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((q, index) => (
              <FAQItem key={index} question={q.question} answer={q.answer} />
            ))
          ) : (
            <p className="text-center text-gray-600">
              No matching questions found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
