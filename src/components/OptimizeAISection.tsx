"use client";

import Image from "next/image";
import React from "react";

const OptimizeAISection = () => {
  return (
    <section className="relative w-full max-w-5xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
      <div
        className="relative rounded-3xl overflow-hidden bg-cover bg-center min-h-[250px] md:min-h-[350px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/ai-mapper-card-3840.png')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-40 z-0" />

        {/* Content */}
        <div className="relative z-10 text-white px-4 py-10 sm:px-6 md:px-8 max-w-2xl mx-auto flex flex-col items-center">
          {/* Title Image */}
          <div className="w-full max-w-md mb-4">
            <Image
              src="/optimize-ai-section.png"
              alt="Optimize your processes with AI"
              width={800}
              height={150}
              layout="responsive"
              priority
            />
          </div>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-white opacity-90 mb-6 leading-relaxed">
            A guide to support your AI adoption
          </p>

          {/* Button */}
          <button className="bg-white text-blue-800 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-gray-100 transition text-sm sm:text-base md:text-lg">
            Discover it <span className="ml-1 sm:ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OptimizeAISection;
