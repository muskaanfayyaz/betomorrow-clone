'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function HomeFooterSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <section className="bg-gradient-to-b from-[#e5ecf9] to-[#eaf1ff] text-black px-6 py-12 md:px-12 md:py-20 3xl:px-[36rem] relative overflow-hidden max-w-[2560px] mx-auto">
      {/* Newsletter form */}
      <div className="flex flex-col lg:flex-col xl:flex-row justify-between items-start gap-10 mb-12 border-b border-gray-400 pb-12">
        <div className="w-full lg:w-1/2 max-w-[600px]">
          <h1 className="text-left text-[2.3rem] small:text-[2.8rem] md:text-[3.1rem] lg:text-[3.2rem] xl:text-[3.5rem] 3xl:text-[4rem] leading-tight mb-6 text-black">
            GET
            <div className="flex items-center mt-2">
              <span className="w-8 h-0.5 bg-black mr-3"></span>
              <span className="italic font-normal">SHORTCUT</span>
            </div>
          </h1>
          <p className="text-base md:text-[1.3rem] mt-2 font-semibold">A compilation of best practices in digital innovation</p>
          <p className="text-[0.9rem] md:text-[1.3rem] text-gray-700">Shortcut is Betomorrow&apos;s quarterly newsletter</p>
        </div>

        <form className="xl:pl-[13rem] flex flex-col gap-4 w-full max-w-[800px]">
          <input
            type="text"
            placeholder="Your name"
            className="rounded-full italic px-5 py-5 text-sm outline-none w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center rounded-full w-full bg-white overflow-hidden">
            <input
              type="email"
              placeholder="Your e-mail"
              className="flex-grow px-5 py-5 text-sm outline-none bg-transparent w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gray-300 px-6 py-4 text-base font-medium rounded-full whitespace-nowrap mt-2 sm:mt-0"
            >
              Confirm →
            </button>
          </div>
        </form>
      </div>

      {/* Section Wrapper */}
      <div className="flex flex-col lg:flex-col xl:flex-row justify-between items-start gap-10 mb-12">
        {/* Heading */}
        <h1 className="text-left text-[2.5rem] small:text-[2.8rem] md:text-[4.5rem] lg:text-[4.9rem] xl:text-[5.2rem] 3xl:text-[6.5rem] leading-tight text-black w-full lg:w-1/2 max-w-[600px]">
          <span style={{ fontFamily: 'Parabole' }}>LET&apos;S BUILD TOMORROW TOGETHER</span>
        </h1>

        {/* Links and CTA */}
        <div className="w-full max-w-[600px] flex flex-col justify-between h-full">
          <div className="grid grid-cols-2 gap-y-1 gap-x-4 text-sm">
            <div>
              <h4 className="font-normal text-[1.3rem] lg:text-[1.4] mb-2">PAGES</h4>
              <ul className="space-y-2 text-[1.1rem] lg:text-[1.2rem]">
                <li>Our vision</li>
                <li>Projects</li>
                <li>Team</li>
                <li>Resources</li>
                <li>Join us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-normal text-[1.3rem] mb-2">FOLLOW US</h4>
              <ul className="space-y-2 text-[1.1rem]">
                <li><a href="#" className="hover:underline">LinkedIn ↗</a></li>
                <li><a href="#" className="hover:underline">Dribbble ↗</a></li>
                <li><a href="#" className="hover:underline">Instagram ↗</a></li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="bg-[#0a1e40] text-white px-6 py-4 rounded-full text-base lg:text-[0.8rem] hover:bg-[#123060] whitespace-nowrap">
              Let&apos;s talk about it →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center text-base text-gray-500 border-t border-gray-300 pt-6 text-center max-w-[1200px] mx-auto">
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
        <div className="flex justify-center items-center">
          <a href="#" className="hover:underline whitespace-nowrap">LEGAL NOTICE</a>
        </div>
        <div className="flex justify-center items-center">
          <a href="#" className="hover:underline whitespace-nowrap">PRIVACY POLICY</a>
        </div>
        <div className="flex justify-center items-center whitespace-nowrap">
          <span>2025 © BETOMORROW</span>
        </div>
      </div>
    </section>
  );
}
