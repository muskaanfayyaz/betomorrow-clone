'use client';

import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import TrainingTeam from '@/components/TrainingTeam';
import AIExperts from './AIExperts';

export default function GenAIWorkshop() {
  return (
    <section className="bg-gradient-to-br from-blue-200 to-white p-8 md:p-16 pt-[10rem] md:pt-[12rem] max-w-[90rem] mx-auto">
      
      {/* Top Block: Gen AI Workshop layout */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Image */}
        <div className="flex-shrink-0 w-full md:w-[40%] flex items-end">
          <Image
            src="/formation/formation-1080.jpg"
            alt="Gen AI Workshop"
            width={400}
            height={1000}
            className="rounded-3xl w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col w-full md:w-[55%] text-[#1a1a1a] justify-between">
          <div className="space-y-6">
            <Image
              src="/gen-ai-work.png"
              alt="Gen AI Workshop"
              width={1000}
              height={916}
              className="w-full h-auto object-contain"
            />

            <p className="text-black text-[1.1rem]">
              Adapted to all levels and designed to fit in with your constraints and schedule, these sessions enable you to develop concrete skills and integrate artificial intelligence into your daily practices.
            </p>

            <p className="text-black text-[0.875rem] font-medium">A unique, value-added workshop to :</p>

            <div className="space-y-4 text-black text-[0.875rem]">
              {[
                {
                  title: 'Understand with simplicity',
                  description:
                    'discover the fundamentals of artificial intelligence and its possibilities thanks to a theoretical introduction designed to demystify generative AI.',
                },
                {
                  title: 'Take action',
                  description:
                    'take part in collaborative workshops using an innovative card game developed by our teams. In small groups, your employees will devise high value-added business solutions based on practical case studies.',
                },
                {
                  title: 'Leave with an actionable roadmap',
                  description:
                    "our experts qualify and prioritize the use cases identified during the workshop. You'll receive a detailed roadmap incorporating feasibility, complexity, ROI analysis and potential project impact.",
                },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-black flex items-center gap-2 font-medium">
                    <Check className="text-blue-600" size={18} /> {item.title}
                  </p>
                  <p>: {item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 pt-4 mt-auto">
            <button className="w-fit bg-[#001f3f] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#003366] transition">
              Get more information <ArrowRight size={18} />
            </button>
            <button className="w-fit border border-[#001f3f] text-[#001f3f] px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#001f3f]/5 transition">
              Download our presentation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Divider spacing (optional) */}
      <div className="my-16" />

      {/* Training Team inside the same background */}
      <TrainingTeam />

      {/* Divider spacing (optional) */}
      <div className="my-16" />

      <AIExperts/>
    </section>
  );
}
