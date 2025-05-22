'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Paperclip } from 'lucide-react';

export default function ContactForm() {
  const [isPrivate, setIsPrivate] = useState(false);
  const [wantsNDA, setWantsNDA] = useState(false);

  return (
    <section className="animated-gradient min-h-screen text-white py-16 px-4 md:px-10 lg:px-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side Image */}
        <div className="flex flex-col justify-center md:justify-start pt-16">
          <Image
            src="/entrust-ai-project.png"
            alt="Entrust Your AI Project"
            width={500}
            height={300}
            className="w-full h-auto max-w-[500px]"
            priority
          />
          <p className="mt-6 text-lg font-light">
            Because every project is unique, we provide a tailor-made solution
            designed to meet your specific needs.
          </p>
        </div>

        {/* Right Side Form */}
        <form
          className="bg-gradient-to-br from-[#2a399a]/80 to-[#162398]/80 backdrop-blur-md rounded-2xl p-8 space-y-6 text-white shadow-lg pt-16 mt-16 border border-gray-500/30 hover:border-white/50 transition-colors duration-300"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-center text-lg font-semibold mb-4">
            Directly exchange with our experts
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            type="text"
            placeholder="Entreprise"
            className="input w-full"
          />
          <textarea
            placeholder="Tell us, how can we help you?*"
            className="input w-full h-32 resize-none"
            required
          ></textarea>

          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isPrivate}
                onChange={() => setIsPrivate(!isPrivate)}
              />
              This project is private
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={wantsNDA}
                onChange={() => setWantsNDA(!wantsNDA)}
              />
              I want to receive a non-disclosure agreement
            </label>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-2 border border-white/40 rounded-full hover:bg-white/10 transition"
            >
              <Paperclip className="w-4 h-4" /> Attachments
            </button>

            <button
              type="submit"
              className="bg-white text-black px-8 py-2 rounded-full hover:bg-white/80 transition"
            >
              Send →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
