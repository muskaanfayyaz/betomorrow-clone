import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import UseCasesSection from './chatbot';
import StatsSection from './StatsSection';
import OptimizeAISection from './OptimizeAISection';

const ChatBotInterface = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white relative pb-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <h1 className="text-[2rem] small:text-[2.2rem] md:text-[3.5rem] small:pr-[4rem] 3xl:pr-36 sm:text-7xl lg:text-6xl xl:text-6xl 3xl:text-[4rem] mb-6 leading-none text-black whitespace-normal">
  <span style={{ fontFamily: 'Parabole' }}>OU</span>R{' '}L
  <span style={{ fontFamily: 'Parabole' }}>A</span>
  TEST{' '}<br/>
  <div className='flex items-center'>
  <span className="w-7 h-0.5 bg-black small:w-7 inline-block mx-3 align-middle"></span>
  <span className="italic font-normal">AI ACHIEVEMENT</span>
  </div>
</h1>

        {/* Mockup Image */}
        <div className="mt-12">
          <Image
            src="/Mockup-PLU-01-1920.jpg"
            alt="Mockup"
            width={1920}
            height={1080}
            className="w-full h-[20rem] small:h-[28rem] xl:h-[45rem] small:px-1 object-cover rounded-3xl"
          />
        </div>

        {/* Text Content */}
        <div className="mt-10">
        <h1 className="text-[1.5rem] small:pr-4 lg:pr-1 xl:pr-8 3xl:pr-36 sm:text-7xl md:text-[1.8rem] lg:text-[2rem] xl:text-4xl 3xl:text-[2.7rem] mb-6 leading-none text-black whitespace-normal">
  Gui<span style={{ fontFamily: 'Parabole' }}>d</span>ing{' '}citizens through{' '}
  <span style={{ fontFamily: 'Parabole' }}>t</span>he{' '}
  <span style={{ fontFamily: 'Parabole' }}>B</span>ordea
  <span style={{ fontFamily: 'Parabole' }}>u</span>x{' '}Mé
  <span style={{ fontFamily: 'Parabole' }}>t</span>ropole{' '}PLU
</h1>
          <p
          style={{ fontFamily: 'PPNeueMontreal', fontWeight: 400 }}
          className="text-[1.1rem] small:text-lg md:text-xl 3xl:text-[1.7rem] pr-4 text-black max-w-3xl leading-relaxed">
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
              style={{ fontFamily: 'PPNeueMontreal', fontWeight: 400 }}
              className="px-4 py-2 rounded-full border-2 border-gray-300 text-[0.9rem] md:text-base text-black"
            >
              {label}
            </button>
          ))}
          <button
            className="px-4 py-2 rounded-full font-semibold text-sm md:text-base text-white transition hover:opacity-90 flex items-center gap-2"
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
