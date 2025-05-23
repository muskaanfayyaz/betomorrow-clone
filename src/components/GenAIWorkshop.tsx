'use client';

import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import TrainingTeam from '@/components/TrainingTeam';
import AIExperts from './AIExperts';

export default function GenAIWorkshop() {
  return (
    <section className="bg-gradient-to-br from-blue-200 to-white w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 pt-[6rem] md:pt-[8rem]">
      <div className="max-w-[100rem] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-20 items-start">
          {/* Left Image */}
          <div className="w-full lg:w-[40%] flex items-end">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] 2xl:h-[700px] rounded-3xl overflow-hidden">
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
          <div className="w-full lg:w-[60%] flex flex-col justify-between text-[#1a1a1a]">
            <div className="space-y-6">
              <div className="relative w-full h-auto max-w-3xl">
                <Image
                  src="/gen-ai-work.png"
                  alt="Gen AI Workshop Banner"
                  width={1600}
                  height={916}
                  className="w-full h-auto object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>

              <p className="text-base md:text-lg xl:text-xl text-black">
                Adapted to all levels and designed to fit your schedule, these sessions help you develop skills and integrate AI into your daily practices.
              </p>

              <p className="text-sm md:text-base xl:text-lg font-semibold text-black">
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
                    <p className="font-medium flex items-start gap-2">
                      <Check className="text-blue-600 mt-[2px]" size={20} />
                      <span>{item.title}</span>
                    </p>
                    <p className="pl-6">: {item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-[#001f3f] text-white px-6 py-3 xl:px-8 xl:py-4 rounded-full flex items-center gap-2 hover:bg-[#003366] transition text-sm md:text-base xl:text-lg">
                Get more information <ArrowRight size={20} />
              </button>
              <button className="border border-[#001f3f] text-[#001f3f] px-6 py-3 xl:px-8 xl:py-4 rounded-full flex items-center gap-2 hover:bg-[#001f3f]/5 transition text-sm md:text-base xl:text-lg">
                Download our presentation <ArrowRight size={20} />
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
