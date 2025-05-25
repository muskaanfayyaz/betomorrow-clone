'use client';

import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import TrainingTeam from '@/components/TrainingTeam';
import AIExperts from './AIExperts';

export default function GenAIWorkshop() {
  return (
    <section className="bg-gradient-to-br from-blue-200 to-white w-full px-4 sm:px-6 md:px-12 lg:px-10 xl:px-32 pt-[6rem] md:pt-[8rem]">
      <div className="max-w-[100rem] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col gap-10 xl:gap-20 3xl:gap-10 xl:grid xl:grid-cols-[40%_60%] xl:items-start">
          {/* Left Image */}
          <div className="flex items-end">
    <div className="relative w-full h-[24rem] small:h-[32rem] md:h-[42rem] lg:h-[44rem] xl:h-[49rem] 3xl:w-[80%] rounded-3xl overflow-hidden">
      <Image
        src="/formation/formation-1080.jpg"
        alt="Gen AI Workshop"
        fill
        className="object-cover rounded-3xl"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
      />
    </div>
  </div>

          {/* Right Content */}
          <div className="flex flex-col justify-between text-[#1a1a1a]">
            <div className="space-y-6">
              <h1 className="text-[1.9rem] small:text-[2.1rem] pr-4 lg:pr-1 3xl:pr-36 md:text-[3rem] lg:text-[3.5rem] xl:text-[3.3rem] 3xl:text-[4rem] mb-6 leading-none text-black">
                <div className="whitespace-nowrap">
                  <span style={{ fontFamily: 'Parabole' }}>D</span>ISCOV
                  <span style={{ fontFamily: 'Parabole' }}>ER</span> OUR
                </div>
                <div className="flex items-center xl:flex-row">
                  <span className="w-8 h-0.5 bg-black inline-block mx-3 align-middle"></span>
                  <span className="italic xl:whitespace-nowrap">GEN AI WORKSHOP</span>
                </div>
              </h1>

              <p 
              style={{ fontFamily: 'PPNeueMontreal', fontWeight: 400 }}
              className="text-base md:text-[1.4rem] xl:text-xl text-black">
                Adapted to all levels and designed to fit your schedule, these sessions help you develop skills and integrate AI into your daily practices.
              </p>

              <p className="text-sm md:text-[1.2rem] xl:text-lg font-semibold text-black">
                A unique, value-added workshop to:
              </p>

              {/* Key Points */}
              <div className="space-y-5 text-sm md:text-base xl:text-lg text-black leading-relaxed">
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
                    <p className="font-medium flex text-[1.2rem] items-start gap-2">
                      <Check className="text-blue-600 mt-[2px]" size={20} />
                      <span>{item.title}</span>
                    </p>
                    <p 
                    style={{ fontFamily: 'PPNeueMontreal', fontWeight: 400 }}
                    className="pl-6 text-[1.1rem]">: {item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex-row sm:flex-row gap-4 mt-8">
              <button className="w-fit pr-3 h-[3.5rem] bg-[#001f3f] text-white pl-4 py-2 xl:pl-6 xl:py-3 rounded-full flex items-center hover:bg-[#003366] transition text-sm md:text-base xl:text-lg whitespace-nowrap">
                Get more information <ArrowRight size={18} className="ml-1 flex-shrink-0" />
              </button><br/>
              <button className="w-fit pr-3 h-[3.5rem] border border-[#001f3f] text-[#001f3f] pl-4 py-2 xl:pl-6 xl:py-3 rounded-full flex items-center hover:bg-[#001f3f]/5 transition text-sm md:text-base xl:text-lg whitespace-nowrap">
                Download our presentation <ArrowRight size={18} className="ml-1 flex-shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-20" />

        {/* Extra Sections */}
        <TrainingTeam />
        <div className="my-20" />
        <AIExperts />
      </div>
    </section>
  );
}
