'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function GenAIWorkshop() {
  return (
    <section className="relative flex flex-col md:flex-row bg-[#f1f6ff] p-8 md:p-16 pt-[10rem] md:pt-[12rem] items-start gap-12 max-w-[90rem] mx-auto">
      {/* Left: Image */}
      <div className="flex-shrink-0 w-full md:w-[40%]">
        <Image
          src="/formation/formation-1080.jpg"
          alt="Gen AI Workshop"
          width={400}
          height={300}
          className="rounded-3xl w-full object-cover"
        />
      </div>

      {/* Right: Text Content */}
      <div className="flex flex-col w-full md:w-[55%] text-[#1a1a1a] space-y-6">
        <div className="w-full">
          <Image
            src="/gen-ai-work.png"
            alt="Gen AI Workshop"
            width={1000}
            height={916}
            className="w-full h-auto object-contain"
          />
        </div>

        <p className="text-black text-[1rem]">
          Adapted to all levels and designed to fit in with your constraints and schedule, these sessions enable you to develop concrete skills and integrate artificial intelligence into your daily practices.
        </p>

        <p className="font-medium text-black text-[1rem]" >A unique, value-added workshop to :</p>

        <div className="space-y-4 text-black text-[1rem]">
          <div>
            <p className="font-medium text-black flex items-center gap-2">
              ✅ Understand with simplicity
            </p>
            <p>
              : discover the fundamentals of artificial intelligence and its possibilities thanks to a theoretical introduction designed to demystify <a href="#" className="text-blue-600 underline">generative AI</a>.
            </p>
          </div>

          <div>
            <p className="font-medium text-black flex items-center gap-2">
              ✅ Take action
            </p>
            <p>
              : take part in collaborative workshops using an innovative card game developed by our teams. In small groups, your employees will devise high value-added business solutions based on practical case studies.
            </p>
          </div>

          <div>
            <p className="font-medium text-black flex items-center gap-2">
              ✅ Leave with an actionable roadmap
            </p>
            <p>
              : our experts qualify and prioritize the use cases identified during the workshop. You&apos;ll receive a detailed roadmap incorporating feasibility, complexity, ROI analysis and potential project impact.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="bg-[#001f3f] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#003366] transition">
            Get more informations <ArrowRight size={18} />
          </button>
          <button className="border border-[#001f3f] text-[#001f3f] px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#001f3f]/5 transition">
            Download our presentation <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
