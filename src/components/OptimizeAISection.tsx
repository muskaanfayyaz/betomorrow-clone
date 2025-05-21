"use client";

import Image from "next/image";
import React from "react";

const OptimizeAISection = () => {
  return (
    <section className="relative w-full max-w-5xl mx-auto mt-12 mb-14 px-4">
      <div className="relative rounded-3xl overflow-hidden bg-cover bg-center min-h-[250px] md:min-h-[350px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/ai-mapper-card-3840.png')`, 
        }}
      >
        <div className="z-10 text-white px-6 py-8 max-w-2xl mx-auto flex flex-col items-center">
          {/* Title Image */}
          <div className="w-[95%] max-w-lg mb-4">
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
          <p className="text-lg md:text-xl text-white opacity-90 mb-6">
            A guide to support your AI adoption
          </p>

          {/* Button */}
          <button className="bg-white text-blue-800 font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition text-lg">
            Discover it <span className="ml-2">→</span>
          </button>
        </div>

        {/* Optional: Overlay for gradient or dark effect */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-40" />
      </div>
    </section>
  );
};

export default OptimizeAISection;
