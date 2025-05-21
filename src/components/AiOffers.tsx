'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const offers = [
  {
    title: 'GenAI Workshop',
    subtitle: 'Dedicated training to help you build your AI roadmap.',
    description: [
      '<strong>Raise your teams awareness:</strong> develop a concrete understanding of the strengths and limitations of LLMs to spot the problems you can solve with artificial intelligence.',
      '<strong>Build your AI vision:</strong> define a strategy aligned with your objectives, taking into account time and budget constraints.',
      '<strong>Plan for the future:</strong> receive a customized, pragmatic and immediately actionable roadmap for integrating artificial intelligence into your business.'
    ],
    button: 'Get an audit',
  },
  {
    title: 'AI Accelerator',
    subtitle: 'Go from idea to practice in 3 weeks.',
    description: [
      '<strong> Move quickly to action:</strong> turn your ideas into reality by developing relevant use cases.',
      '<strong> Accelerate your results:</strong> deploy your case studies to validate their impact and business potential.',
      '<strong> Rely on our expertise:</strong> benefit from customized support throughout the process.'
    ],
    button: 'Plan your actions',
  },
  {
    title: 'AI Change',
    subtitle: 'Drive your AI-generated transformations with confidence.',
    description: [
      '<strong> Drive change:</strong> ensure that AI projects are aligned with your strategic objectives, and guarantee reporting based on concrete indicators',
      '<strong> Benefit from monthly support:</strong> strategic advice, personalized follow-up and customized training.',
      '<strong> Guarantee success:</strong> benefit from monthly follow-up including targeted training, management of job changes and tailored strategic advice.'
    ],
    button: 'Accelerate your project',
  },
  {
    title: 'CIR/CII AI',
    subtitle: 'Optimize your AI projects with advantageous financing.',
    description: [
      '<strong> Benefit from significant savings:</strong> save up to 30% on your projects thanks to our status as an approved <span className="underline text-white">CIR/CII organization</span>.',
      '<strong> Optimize your funding:</strong> identify grant opportunities for your artificial intelligence initiatives.',
      '<strong> Secure your innovation budget:</strong> work with an experienced and reliable partner.'
    ],
    button: 'Launch your project',
  },
  {
    title: 'AI Diagnostic',
    subtitle: 'Assess your AI maturity and governance.',
    description: [
      '<strong> Measure your level of maturity:</strong> identify your strengths, your challenges and your level of compliance with legal obligations such as the <span className="underline text-white">AI Act</span>',
      '<strong> Strengthen your governance:</strong> benefit from tools, training and analysis tailored to your needs.',
      '<strong> Accelerate your transformation:</strong> receive concrete recommendations for effectively steering your AI initiatives.'
    ],
    button: 'Request an audit',
  },
  {
    title: 'AI Training',
    subtitle: 'Master AI technologies and boost your skills.',
    description: [
      '<strong> Training tailored to your needs:</strong> flexible modules (1/2 day to several days) for functional and/or technical profiles.',
      '<strong> Learn from our experts:</strong> benefit from the advice of our AI/Data specialists.',
      '<strong> Get concrete results:</strong> automate tasks, optimize processes and achieve measurable productivity gains.'
    ],
    button: 'Train in AI',
  },
];

export default function AiOffers() {
  return (
    <section className="animated-gradient text-white px-6 md:px-20 pt-18 pb-20">
      <div className="flex flex-col md:flex-row items-start gap-20 mb-24 mt-24">
        {/* Ai Offer Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/ai-offer.png"
            alt="Our Ai Custom Offers"
            width={600}
            height={550}
            className="h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-start md:mt-0">
          <p className="text-white/80 text-sm md:text-base">
            Our AI agency offers a range of <span className="underline text-white">artificial intelligence</span> services designed to meet your specific requirements. Each offer can be modulated and supplemented by additional options, enabling total adaptation to your specifications and business constraints.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <div key={index} className="relative bg-gradient-to-br from-[#5f5fa7] via-[#283181] to-[#0F137D] text-gray-100 p-6 rounded-[22px] shadow-2xl border border-gray-400/50 transition-colors duration-300 hover:border-white min-h-[400px] flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-medium mb-3 text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] to-[#d1d5db]">{offer.title}</h3>
              <p className="text-base md:text-base text-white/70 mb-6 font-normal">{offer.subtitle}</p>
              <ul className="space-y-4 text-base md:text-base text-white/80 font-normal">
                {offer.description.map((item, i) => (
                  <li key={i} className="list-disc list-inside" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
            <button className="mt-8 w-full flex items-center justify-center gap-2 bg-white text-black text-base font-normal px-6 py-2.5 rounded-full">
              {offer.button} <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
