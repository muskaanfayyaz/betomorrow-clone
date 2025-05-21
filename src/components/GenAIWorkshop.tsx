'use client';

import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

export default function GenAIWorkshop() {
  return (
    <section className="relative flex flex-col md:flex-row bg-gradient-to-br from-blue-200 to-white p-8 md:p-16 pt-[10rem] md:pt-[12rem] items-stretch gap-12 max-w-[90rem] mx-auto">
      
      {/* Left: Image aligned to bottom */}
      <div className="flex-shrink-0 w-full md:w-[40%] flex items-end">
        <Image
          src="/formation/formation-1080.jpg"
          alt="Gen AI Workshop"
          width={400}
          height={1000}
          className="rounded-3xl w-full object-cover"
        />
      </div>

      {/* Right: Text Content with space between */}
      <div className="flex flex-col w-full md:w-[55%] text-[#1a1a1a] h-full justify-between">
        <div className="space-y-6">
          <div className="w-full">
            <Image
              src="/gen-ai-work.png"
              alt="Gen AI Workshop"
              width={1000}
              height={916}
              className="w-full h-auto object-contain"
            />
          </div>

          <p className="text-black text-[1.1rem]">
            Adapted to all levels and designed to fit in with your constraints and schedule, these sessions enable you to develop concrete skills and integrate artificial intelligence into your daily practices.
          </p>

          <p className="text-black text-[0.875rem] font-medium">A unique, value-added workshop to :</p>

          <div className="space-y-4 text-black text-[0.875rem]">
            <div>
              <p className="text-black flex items-center gap-2 font-medium">
                <Check className="text-blue-600" size={18} /> Understand with simplicity
              </p>
              <p>
                : discover the fundamentals of artificial intelligence and its possibilities thanks to a theoretical introduction designed to demystify <a href="#" className="text-black underline">generative AI</a>.
              </p>
            </div>

            <div>
              <p className="text-black flex items-center gap-2 font-medium">
                <Check className="text-blue-600" size={18} /> Take action
              </p>
              <p>
                : take part in collaborative workshops using an innovative card game developed by our teams. In small groups, your employees will devise high value-added business solutions based on practical case studies.
              </p>
            </div>

            <div>
              <p className="text-black flex items-center gap-2 font-medium">
                <Check className="text-blue-600" size={18} /> Leave with an actionable roadmap
              </p>
              <p>
                : our experts qualify and prioritize the use cases identified during the workshop. You&apos;ll receive a detailed roadmap incorporating feasibility, complexity, ROI analysis and potential project impact.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons aligned to bottom */}
        <div className="flex flex-col gap-4 pt-4 mt-auto">
          <button className="w-fit bg-[#001f3f] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#003366] transition">
            Get more information <ArrowRight size={18} />
          </button>
          <button className="w-fit border border-[#001f3f] text-[#001f3f] px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#001f3f]/5 transition">
            Download our presentation <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
