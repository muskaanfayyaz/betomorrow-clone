'use client';

import { useState } from 'react';
import { Paperclip } from 'lucide-react';

export default function ContactForm() {
  const [isPrivate, setIsPrivate] = useState(false);
  const [wantsNDA, setWantsNDA] = useState(false);

  return (
    <section className="animated-gradient text-white py-16 px-4 md:px-10 lg:px-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
        {/* Left Side Image */}
        <div className="flex flex-col justify-center md:justify-start pt-16 px-2 sm:px-4 md:px-0">
          <h1 className="text-[2rem] small:text-[2.2rem] md:text-[3.5rem] small:pr-[4rem] 3xl:pr-36 sm:text-7xl lg:text-6xl xl:text-6xl 3xl:text-[4rem] mb-6 leading-none text-white whitespace-nowrap">
            EN<span style={{ fontFamily: 'Parabole' }}>TR</span>UST{' '}
            <span style={{ fontFamily: 'Parabole' }}>Y</span>OUR
            <div className="flex items-center">
              <span className="w-8 h-0.5 bg-white inline-block mx-3 align-middle"></span>
              <span className="italic font-normal">AI PROJECT</span>
            </div>
          </h1>
          <p className="mt-6 text-lg md:text-[1.3rem] 3xl:text-[1.4rem] font-light">
            Because every project is unique, we provide a tailor-made solution
            designed to meet your specific needs.
          </p>
        </div>

        {/* Right Side Form */}
        <form
          className="bg-gradient-to-br from-[#4085e6] via-[#283181] to-[#0F137D] backdrop-blur-md rounded-2xl p-8 xl:p-12 space-y-6 text-white shadow-lg pt-6 mt-16 border border-gray-500/30 hover:border-white/50 transition-colors duration-300 w-full xl:ml-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-center text-lg md:text-[1.2rem] xl:text-[1.4rem] font-semibold mb-[5rem]">
            Directly exchange with our experts
          </h3>

          <div
            style={{ fontFamily: 'PPNeueMontreal', fontWeight: 300 }}
            className="text-[1.1rem] xl:text-[1.3rem] grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input
              type="text"
              placeholder="Your first name*"
              className="input"
              required
            />
            <input
              type="text"
              placeholder="Your last name*"
              className="input"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="input"
              required
            />
            <input
              type="tel"
              placeholder="Phone number*"
              className="input"
              required
            />
          </div>

          <input
            style={{ fontFamily: 'PPNeueMontreal', fontWeight: 300 }}
            type="text"
            placeholder="Enterprise"
            className="input w-full"
          />
          <textarea
            style={{ fontFamily: 'PPNeueMontreal', fontWeight: 300 }}
            placeholder="Tell us, how can we help you?*"
            className="input w-full h-[14rem] resize-none"
            required
          ></textarea>

          <div className="space-y-2 text-base">
            <label className="flex items-center gap-2 text-white/60">
              <input
                style={{ fontFamily: 'PPNeueMontreal', fontWeight: 300 }}
                type="checkbox"
                checked={isPrivate}
                onChange={() => setIsPrivate(!isPrivate)}
              />
              This project is private
            </label>
            <label className="flex items-center gap-2 text-white/60">
              <input
                style={{ fontFamily: 'PPNeueMontreal', fontWeight: 300 }}
                type="checkbox"
                checked={wantsNDA}
                onChange={() => setWantsNDA(!wantsNDA)}
              />
              I want to receive a non-disclosure agreement
            </label>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
            <button
              type="button"
              className="w-fit pr-3 h-[3.5rem] border pl-4 py-2 xl:pl-6 xl:py-3 rounded-full flex items-center hover:bg-[#001f3f]/5 transition text-sm md:text-base xl:text-lg whitespace-nowrap"
            >
              <Paperclip className="w-4 h-4" /> Attachments
            </button>

            <button
              type="submit"
              className="bg-white text-black px-8 py-3 items-center justify-between rounded-full hover:bg-white/80 transition w-full md:w-[200px]"
            >
              Send →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
