"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Quote from "./Quote";
import TestimonialContent from "./TestimonialContent";
import Avatar from "./Avatar";
import AuthorInfo from "./AuthorInfo";
import Navigation from "./Navigation";
import BackgroundPattern from "./BackgroundPattern";
import { testimonials } from "./testimonialData";

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 10000); // Auto-advance every 10 seconds
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className=" mt-24 bg-indigo-600 rounded-3xl p-8 relative overflow-hidden w-full max-w-6xl mx-auto">
      <BackgroundPattern />
      <Quote />
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentTestimonial.author.name}-${currentIndex}`} // Unique key for each testimonial
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <TestimonialContent>{currentTestimonial.content}</TestimonialContent>
          <div className="pl-020 mb-8 flex items-center mt-6 mb-8">
            <Avatar
              src={currentTestimonial.image}
              alt={currentTestimonial.author.name}
            />
            <AuthorInfo
              name={currentTestimonial.author.name}
              title={currentTestimonial.author.title}
            />
          </div>
        </motion.div>
      </AnimatePresence>
      <Navigation
        currentIndex={currentIndex}
        total={testimonials.length}
        onNext={nextTestimonial}
        onPrev={prevTestimonial}
      />
    </div>
  );
};

export default TestimonialCard;
