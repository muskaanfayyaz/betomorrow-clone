'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FloatingIcons from '@/components/FloatingIcons';
import ExpertiseSection from '@/components/OurExperiseInAi';
import Header from '@/components/Header';

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen animated-gradient text-white px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 pb-20 flex flex-col items-start relative">
      <Header />

      {/* Hero Section */}
      <div className="w-full max-w-[95rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-28 xl:gap-36 items-center pt-24 sm:pt-32 md:pt-40">
        {/* Left */}
        <div className="text-center md:text-left">
          {/* Direct responsive image (not aspect-ratio fill) */}
          <Image
            src="/logo-ai-agency-2.png"
            alt="AI Agency Logo"
            width={600}
            height={580}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto mx-auto md:mx-0 mb-1"
            priority
          />

          <p className="text-base sm:text-lg md:text-xl font-normal flex items-center justify-center md:justify-start gap-3 mt-1 mb-2">
            <span className="w-4 h-0.5 bg-white inline-block"></span>
            Transform your business with the power of AI and GenAI
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
            <Link
              href="/use-cases"
              className="bg-white text-[#181E80] px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-white/90 transition"
            >
              Our use cases →
            </Link>
            <Link
              href="/offers"
              className="border border-white px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-white/10 transition"
            >
              Our offers →
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="text-center md:text-left px-2 sm:px-4 md:px-0">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic font-medium mb-3">
            A specialized AI agency to implement your technological ambitions.
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
            With over 10 years&apos; experience in AI research and development, our AI agency designs
            solutions that are both modern and customized for ETIs, SMEs and major accounts.
          </p>
        </div>
      </div>

      <FloatingIcons />
      <ExpertiseSection />
    </section>
  );
}
