'use client';

import { ArrowRight } from 'lucide-react';

const offers = [
  {
    title: 'GenAI Workshop',
    subtitle: 'Dedicated training to help you build your AI roadmap.',
    description: [
      '<strong>Raise your teams awareness:</strong> develop a concrete understanding of the strengths and limitations of LLMs to spot the problems you can solve with artificial intelligence.',
      '<strong>Build your AI vision:</strong> define a strategy aligned with your objectives, taking into account time and budget constraints.',
      '<strong>Plan for the future:</strong> receive a customized, pragmatic and immediately actionable roadmap for integrating artificial intelligence into your business.',
    ],
    button: 'Get an audit',
  },
  {
    title: 'AI Accelerator',
    subtitle: 'Go from idea to practice in 3 weeks.',
    description: [
      '<strong>Move quickly to action:</strong> turn your ideas into reality by developing relevant use cases.',
      '<strong>Accelerate your results:</strong> deploy your case studies to validate their impact and business potential.',
      '<strong>Rely on our expertise:</strong> benefit from customized support throughout the process.',
    ],
    button: 'Plan your actions',
  },
  {
    title: 'AI Change',
    subtitle: 'Drive your AI-generated transformations with confidence.',
    description: [
      '<strong>Drive change:</strong> ensure that AI projects are aligned with your strategic objectives, and guarantee reporting based on concrete indicators.',
      '<strong>Benefit from monthly support:</strong> strategic advice, personalized follow-up and customized training.',
      '<strong>Guarantee success:</strong> benefit from monthly follow-up including targeted training, management of job changes and tailored strategic advice.',
    ],
    button: 'Accelerate your project',
  },
  {
    title: 'CIR/CII AI',
    subtitle: 'Optimize your AI projects with advantageous financing.',
    description: [
      '<strong>Benefit from significant savings:</strong> save up to 30% on your projects thanks to our status as an approved <span class="underline text-white">CIR/CII organization</span>.',
      '<strong>Optimize your funding:</strong> identify grant opportunities for your artificial intelligence initiatives.',
      '<strong>Secure your innovation budget:</strong> work with an experienced and reliable partner.',
    ],
    button: 'Launch your project',
  },
  {
    title: 'AI Diagnostic',
    subtitle: 'Assess your AI maturity and governance.',
    description: [
      '<strong>Measure your level of maturity:</strong> identify your strengths, your challenges and your level of compliance with legal obligations such as the <span class="underline text-white">AI Act</span>.',
      '<strong>Strengthen your governance:</strong> benefit from tools, training and analysis tailored to your needs.',
      '<strong>Accelerate your transformation:</strong> receive concrete recommendations for effectively steering your AI initiatives.',
    ],
    button: 'Request an audit',
  },
  {
    title: 'AI Training',
    subtitle: 'Master AI technologies and boost your skills.',
    description: [
      '<strong>Training tailored to your needs:</strong> flexible modules (1/2 day to several days) for functional and/or technical profiles.',
      '<strong>Learn from our experts:</strong> benefit from the advice of our AI/Data specialists.',
      '<strong>Get concrete results:</strong> automate tasks, optimize processes and achieve measurable productivity gains.',
    ],
    button: 'Train in AI',
  },
];

export default function AiOffers() {
  return (
    <section className="animated-gradient text-white px-4 md:px-10 xl:px-20 pt-16 pb-20 3xl:px-[38rem] ">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start gap-12 md:gap-0 lg:gap-12 xl:gap-0 3xl:gap-0 mb-20 mt-12">
        <h1 className="text-[1.9rem] lg:w-2/5 xl:w-2/4 small:text-[2.1rem] pr-4 lg:pr-1 3xl:pr-36 sm:text-7xl md:text-[4rem] lg:text-6xl xl:text-6xl 3xl:text-[4rem] mb-6 leading-none text-white whitespace-normal">
          O<span style={{ fontFamily: 'Parabole' }}>UR</span>{' '}AI
          <div className='flex items-center xl:flex-row'>
            <span className="w-8 h-0.5 bg-white inline-block mx-3 align-middle"></span>
            <span className="italic xl:whitespace-nowrap">CUSTOM OFFERS</span>
          </div>
        </h1>

        {/* Text Content */}
        <div className="w-full text-white/80 text-base small:text-[1.1rem] md:text-lg xl:text-2xl  xl:pl-16 leading-relaxed">
          <p>
            Our AI agency offers a range of{' '}
            <span className="underline text-white">artificial intelligence</span> services designed
            to meet your specific requirements. Each offer can be modulated and supplemented by
            additional options, enabling total adaptation to your specifications and business
            constraints.
          </p>
        </div>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 pb-24">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br py-5 from-[#5f5fa7] via-[#283181] to-[#0F137D] text-white p-6 rounded-[20px] shadow-2xl border border-gray-400/50 transition-colors duration-300 hover:border-white min-h-[420px] md:min-h-[45rem] flex flex-col justify-between"
          >
            <div className='px-1'>
              <h3 
              style={{ fontFamily: 'PPNeueMontreal', fontWeight: 500 }}
              className="text-[1.3rem] md:text-[2rem] mb-3 bg-clip-text text-transparent 3xl:text-[2.4rem] bg-gradient-to-br from-white to-gray-300">
                {offer.title}
              </h3>
              <p 
              style={{ fontFamily: 'PPNeueMontreal', fontWeight: 500 }}
              className="px-3 text-base md:text-[1.3rem] 3xl:text-[1.5rem] text-white/70 mb-6">{offer.subtitle}</p>
              <ul 
              className="px-4 space-y-4 text-[0.8rem] md:text-[17px] 3xl:text-[1.2rem] leading-relaxed text-white/80">
                {offer.description.map((item, i) => (
                  <li key={i} className="list-disc list-inside" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
            <button 
            style={{ fontFamily: 'PPNeueMontreal', fontWeight: 300 }}
            className="mt-8 w-full flex items-center justify-center gap-2 bg-white text-black text-sm sm:text-base px-6 py-2.5 rounded-full font-medium hover:bg-gray-200 transition">
              {offer.button} <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
