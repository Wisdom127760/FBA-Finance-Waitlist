"use client";

import React, { useRef, useEffect } from "react";

function VideoSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error attempting to play video: ", error);
      });
    }
  }, []);

  return (
    <section className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="animate-fade-up object-contain grow mt-4 w-full aspect-[0] max-md:mt-10 max-md:max-w-full rounded-3xl overflow-hidden"
        poster="/assets/images/laptopveiw1.png" // Use your original image as a fallback
      >
        <source src="/assets/videos/FBAFinanceVideo(1).mp4" type="video/mp4" />
        <source
          src="/assets/videos/FBAFinanceVideo(1).webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default VideoSection;
