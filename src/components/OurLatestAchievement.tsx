import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import UseCasesSection from './chatbot';

const ChatBotInterface = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-white relative">
      <div className="container mx-auto px-4 py-8">
        {/* Achievement Image */}
        <div className="mb-8 mt-36">
          <Image
            src="/out-latest-achievement.png"
            alt="Our Latest Achievement"
            width={600}
            height={550}
            className="h-auto"
          />
        </div>
        
        {/* Mockup Image */}
        <div className="mt-12">
          <Image
            src="/Mockup-PLU-01-1920.jpg"
            alt="Mockup"
            width={1000}
            height={1000}
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Text Content */}
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-4 text-black max-w-3xl">Guiding citizens through the Bordeaux Métropole PLU</h1>
          <p className="text-lg text-black max-w-3xl">
            BeTomorrow developed a bespoke agent, optimized by <span className="font-bold">generative AI</span> and <br /> advanced data search, to support Bordeaux Métropole&apos;s PLU and <span className="font-bold">facilitate access<br /> to information</span>.
          </p>
        </div>

        {/* Round Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-2 rounded-full border-2 border-gray-300 text-black">
            Tech
          </button>
          <button className="px-6 py-2 rounded-full border-2 border-gray-300 text-black">
            LLM
          </button>
          <button className="px-6 py-2 rounded-full border-2 border-gray-300 text-black">
            Mobility
          </button>
          <button
            className="px-6 py-2 rounded-full font-semibold text-white transition hover:opacity-90 flex items-center gap-2"
            style={{
              background: 'linear-gradient(90deg, #27408B 0%, #397FFF 40%, #FF802B 100%)',
            }}
          >
            <Sparkles className="w-5 h-5" fill="#FFFFFF" /> AI
          </button>
        </div>
      </div>
      <UseCasesSection />
    </div>
  );
};

export default ChatBotInterface;
