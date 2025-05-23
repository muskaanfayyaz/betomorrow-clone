'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function HomeFooterSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <section className="bg-gradient-to-b from-[#e5ecf9] to-[#eaf1ff] text-black px-6 py-12 md:px-20 md:py-20 relative overflow-hidden max-w-[2560px] mx-auto">
      {/* Newsletter form */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12 border-b border-gray-400 pb-12">
        <div className="w-full md:w-1/2 max-w-[600px]">
          <Image
            src="/get-shortcut.png"
            alt="Get ShortCut"
            width={500}
            height={300}
            className="w-full h-auto max-w-[500px] md:max-w-none"
            priority
          />
          <p className="text-sm mt-2 font-medium">
            A compilation of best practices in digital innovation
          </p>
          <p className="text-sm text-gray-700">
            Shortcut is Betomorrow&apos;s quarterly newsletter
          </p>
        </div>
        <form className="flex flex-col gap-4 w-full md:w-auto max-w-[400px]">
          <input
            type="text"
            placeholder="Your name"
            className="rounded-full px-5 py-3 text-sm outline-none w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex items-center rounded-full bg-white overflow-hidden">
            <input
              type="email"
              placeholder="Your e-mail"
              className="flex-grow px-5 py-3 text-sm outline-none bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gray-300 px-4 py-2 text-sm font-medium mx-2 rounded-full whitespace-nowrap"
            >
              Confirm →
            </button>
          </div>
        </form>
      </div>

      {/* Section Wrapper */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
        {/* Build Tomorrow Image */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 pr-0 md:pr-24 max-w-full md:max-w-[900px]">
          <Image
            src="/build-tomorrow-together.png"
            alt="Let's Build Tomorrow Together"
            width={900}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Links & Button Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-between h-full max-w-[600px]">
          <div className="grid grid-cols-2 gap-8 text-sm flex-grow">
            {/* Pages */}
            <div>
              <h4 className="font-semibold mb-2">PAGES</h4>
              <ul className="space-y-4 text-[15px]">
                <li>Our vision</li>
                <li>Projects</li>
                <li>Team</li>
                <li>Resources</li>
                <li>Join us</li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="font-semibold mb-2">FOLLOW US</h4>
              <ul className="space-y-4 text-[15px]">
                <li>
                  <a href="#" className="hover:underline">
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Dribbble ↗
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Instagram ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Button aligned bottom-right */}
          <div className="flex justify-end mt-auto pt-6 text-right">
            <button className="bg-[#0a1e40] text-white px-6 py-3 rounded-full text-sm hover:bg-[#123060] whitespace-nowrap">
              Let&apos;s talk about it →
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="grid grid-cols-2 sm:grid-cols-4 items-center text-xs text-gray-500 border-t border-gray-300 pt-6 text-center gap-4 max-w-[1200px] mx-auto">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/black-logo.png"
            alt="BeTomorrow Logo"
            width={120}
            height={120}
            className="mx-auto"
            priority
          />
        </div>

        {/* Legal Notice */}
        <div className="flex justify-center items-center">
          <a href="#" className="hover:underline whitespace-nowrap">
            LEGAL NOTICE
          </a>
        </div>

        {/* Privacy Policy */}
        <div className="flex justify-center items-center">
          <a href="#" className="hover:underline whitespace-nowrap">
            PRIVACY POLICY
          </a>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center whitespace-nowrap">
          <span>2025 © BETOMORROW</span>
        </div>
      </div>
    </section>
  );
}
