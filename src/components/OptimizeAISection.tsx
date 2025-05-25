"use client";

import React from "react";

const OptimizeAISection = () => {
  return (
    <section className="relative w-full max-w-6xl 3xl:max-w-[130rem] mx-auto mt-16 px-4 small:px-10 md:px-16 lg:px-28 lg:py-8 xl:px-0">
      <div
        className="relative rounded-[2rem] overflow-hidden bg-cover bg-center min-h-[22rem] md:min-h-[350px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/ai-mapper-card-3840.png')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-40 z-0" />

        {/* Content */}
        <div className="relative z-10 text-white px-7 py-2 sm:px-6 md:px-8 max-w-2xl mx-auto flex flex-col items-center">
          {/* Title */}
          <h1 className="text-center px-5 small:px-0.5 md:px-12 text-[1.9rem] w-full small:text-[1.9rem] md:text-[2.8rem] lg:text-5xl xl:text-5xl 3xl:text-[3.6rem] mb-6 leading-none text-white whitespace-normal">
  O<span style={{ fontFamily: 'Parabole' }}>p</span>timi<span style={{ fontFamily: 'Parabole' }}>z</span>e{' '}
  <span style={{ fontFamily: 'Parabole' }}>y</span>o<span style={{ fontFamily: 'Parabole' }}>u</span>r{' '}
  <span style={{ fontFamily: 'Parabole' }}>p</span>rocesses{' '}
  wi<span style={{ fontFamily: 'Parabole' }}>t</span>h AI
</h1>

          {/* Subtext */}
          <p className="text-base small:text-[1.3rem] md:text-xl lg:text-2xl text-white opacity-90 mb-6 leading-relaxed">
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
