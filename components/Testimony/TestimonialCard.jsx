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
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    let timer;
    if (!isHovered) {
      timer = setInterval(nextTestimonial, 10000); // Auto-advance every 10 seconds
    }
    return () => clearInterval(timer);
  }, [isHovered]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      className="mt-24 bg-indigo-600 rounded-3xl p-8 relative overflow-hidden w-full max-w-6xl mx-auto animate-slide hover:[animation-play-state:paused]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BackgroundPattern />
      <Quote />
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentTestimonial.author.name}-${currentIndex}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <TestimonialContent>
            <div className="min-h-[125px] max-h-full overflow-y-auto md:h-[150px] md:overflow-y-auto lg:h-[160px] lg:overflow-y-auto">
              {currentTestimonial.content}
            </div>
          </TestimonialContent>
          <div className="pl-020 mb-8 flex items-center mt-014 mb-8">
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
