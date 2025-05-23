import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import UseCasesSection from './chatbot';
import StatsSection from './StatsSection';
import OptimizeAISection from './OptimizeAISection';

const ChatBotInterface = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-white relative pb-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        {/* Achievement Image */}
        <div className="mb-12">
          <Image
            src="/out-latest-achievement.png"
            alt="Our Latest Achievement"
            width={1200}
            height={800}
            className="w-full h-auto object-contain rounded-lg"
            priority
          />
        </div>

        {/* Mockup Image */}
        <div className="mt-12">
          <Image
            src="/Mockup-PLU-01-1920.jpg"
            alt="Mockup"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>

        {/* Text Content */}
        <div className="mt-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black max-w-4xl leading-snug">
            Guiding citizens through the Bordeaux Métropole PLU
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-black max-w-3xl leading-relaxed">
            BeTomorrow developed a bespoke agent, optimized by{' '}
            <span className="font-bold">generative AI</span> and <br className="hidden sm:inline" />
            advanced data search, to support Bordeaux Métropole&apos;s PLU and{' '}
            <span className="font-bold">
              facilitate access<br className="hidden sm:inline" /> to information
            </span>.
          </p>
        </div>

        {/* Round Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          {['Tech', 'LLM', 'Mobility'].map((label) => (
            <button
              key={label}
              className="px-6 py-2 rounded-full border-2 border-gray-300 text-sm md:text-base text-black"
            >
              {label}
            </button>
          ))}
          <button
            className="px-6 py-2 rounded-full font-semibold text-sm md:text-base text-white transition hover:opacity-90 flex items-center gap-2"
            style={{
              background: 'linear-gradient(90deg, #27408B 0%, #397FFF 40%, #FF802B 100%)',
            }}
          >
            <Sparkles className="w-5 h-5" fill="#FFFFFF" /> AI
          </button>
        </div>
      </div>

      <UseCasesSection />
      <StatsSection />
      <OptimizeAISection />
    </div>
  );
};

export default ChatBotInterface;
