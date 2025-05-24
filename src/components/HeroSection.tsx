'use client';

import React from 'react';
import Link from 'next/link';
import FloatingIcons from '@/components/FloatingIcons';
import ExpertiseSection from '@/components/OurExperiseInAi';
import Header from '@/components/Header';

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen animated-gradient text-white pl-4 pr-5 pt-44 md:pt-48 lg:pt-[2.6rem] xl:pt-44 3xl:pt-[40rem] 3xl:px-[30rem] flex flex-col items-start relative overflow-x-hidden">
      <Header />
    <div className='lg:py-64 lg:px-5 xl:px-20 3xl:pb-[36rem]'>
      {/* Hero Section */}
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-24 md:gap-24 xl:gap-96 items-start">
        {/* Left */}
        <div className="flex flex-col items-start text-left px-0">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 3xl:[4rem] mb-6 leading-none whitespace-nowrap">
            <span style={{ fontFamily: 'Parabole' }}>A</span>I AG
            <span style={{ fontFamily: 'Parabole' }}>E</span>NCY
          </h1>

          <div className="flex items-start gap-3 mb-6 max-w-[40rem]">
            <div className="w-8 h-0.5 bg-white mt-2 shrink-0"></div>
            <p
              style={{ fontFamily: 'PPNeueMontreal', fontWeight: 400 }}
              className="text-lg sm:text-2xl md:text-2xl font-normal leading-relaxed pr-14 md:pr-52 custom-lg:pr-52 xl:pr-20 3xl:pr-36"
            >
              Transform your business with the power of AI and GenAI.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-3 overflow-x-auto sm:overflow-visible whitespace-nowrap">
            <Link
              href="/use-cases"
              style={{ fontFamily: 'PPNeueMontreal', fontWeight: 300 }}
              className="bg-white text-black px-6 py-2 text-base rounded-full font-medium flex items-center gap-2 hover:bg-white/90 transition"
            >
              Our use cases →
            </Link>
            <Link
              href="/offers"
              style={{ fontFamily: 'PPNeueMontreal', fontWeight: 300 }}
              className="border border-white px-6 py-2 text-base rounded-full font-medium flex items-center gap-2 hover:bg-white/10 transition"
            >
              Our offers →
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="text-left">
          <h2 
          style={{ fontFamily: 'PPNeueMontreal', fontWeight: 400 }}
          className="text-[1.4rem] md:text-[2rem] lg:text-[2.1rem] xl:text-[1.9rem] 3xl:text-[2.2rem] italic font-medium mb-3 xl:pt-3">
            A specialized AI agency to implement your technological ambitions.
          </h2>
          <p className="text-[1.1rem] md:text-[1.3rem] lg:text-[1.33rem] font-light leading-7 ">
            With over 10 years&apos; experience in AI research and development, our AI agency
            designs solutions that are both modern and customized for ETIs, SMEs, and major accounts.
          </p>
        </div>
      </div>
      </div>
      <FloatingIcons />
      <ExpertiseSection />
    </section>
  );
}
