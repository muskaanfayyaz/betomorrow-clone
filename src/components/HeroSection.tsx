'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FloatingIcons from '@/components/FloatingIcons';
import ExpertiseSection from '@/components/OurExperiseInAi';
import Header from '@/components/Header';

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen animated-gradient text-white px-6 md:px-16 pb-20 flex items-start relative flex-col mt-0 mb-0">
      <Header/>
      {/* Hero Section */}
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-48 items-center pt-32 mt-0 mb-0">
        {/* Left */}
        <div>
          <Image
            src="/logo-ai-agency-2.png"
            alt="AI Agency Logo"
            width={600}
            height={580}
            className="mt-0 mb-6"
          />

          <p className="text-lg md:text-xl font-normal flex items-center gap-3">
            <span className="w-4 h-0.5 bg-white inline-block"></span>
            Transform your business with the power of AI and GenAI
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
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
        <div>
          <h2 className="text-xl md:text-2xl italic font-medium mb-4 mt-0">
            A specialized AI agency to implement your technological ambitions.
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed">
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
