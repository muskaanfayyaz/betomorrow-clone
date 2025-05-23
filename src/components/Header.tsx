'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { DropdownMenu } from '@/components/DropdownMenu';

const agencyItems = [
  { href: '/agency/our-vision', label: 'Our Vision' },
  { href: '/agency/innovation', label: 'Innovation' },
  { href: '/agency/our-story', label: 'Our Story' },
  { href: '/agency/our-team', label: 'Our Team' },
  { href: '/agency/be-skilled', label: 'Be Skilled' },
  { href: '/agency/join-us', label: 'Join Us' },
  { href: '/agency/tech-for-future', label: 'Tech For Future' },
];

const expertiseItems = [
  { href: '/expertise/tech', label: 'Tech' },
  { href: '/expertise/product-management', label: 'Product Management' },
  { href: '/expertise/product-design', label: 'Product Design' },
  { href: '/expertise/agility', label: 'Agility' },
  { href: '/expertise/product-marketing', label: 'Product Marketing' },
];

const industriesItems = [
  { href: '/industries/industry', label: 'Industry' },
  { href: '/industries/health', label: 'Health' },
  { href: '/industries/mobility', label: 'Mobility' },
  { href: '/industries/education', label: 'Education' },
  { href: '/industries/media', label: 'Media' },
  { href: '/industries/bank-insurance', label: 'Bank-Insurance' },
  { href: '/industries/sport', label: 'Sport' },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<'agency' | 'expertise' | 'industries' | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const navRef = useRef<HTMLDivElement>(null);
  const [navDimensions, setNavDimensions] = useState({ width: 0, top: 0, left: 0 });

  useEffect(() => {
    const updateNavDimensions = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setNavDimensions({ width: rect.width, top: rect.bottom, left: rect.left });
      }
    };
    updateNavDimensions();
    window.addEventListener('resize', updateNavDimensions);
    return () => window.removeEventListener('resize', updateNavDimensions);
  }, []);

  const toggleDropdown = (name: typeof openDropdown) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const toggleLangDropdown = () => setLangDropdownOpen(!langDropdownOpen);
  const selectLanguage = (lang: 'en' | 'fr') => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  // Decide dropdown items based on openDropdown state
  let dropdownItems = null;
  if (openDropdown === 'agency') dropdownItems = agencyItems;
  else if (openDropdown === 'industries') dropdownItems = industriesItems;
  else if (openDropdown === 'expertise') dropdownItems = expertiseItems;

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <div className="absolute top-4 left-6 flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={160}
            height={160}
            className="object-contain"
            priority
          />
        </Link>
      </div>

      <div className="absolute top-4 right-6 flex items-center gap-3">
        <Link
          href="/start-your-project"
          className="rounded-full px-4 py-1.5 text-sm bg-gradient-to-r from-[#13119E] via-blue-800 to-blue-700 text-white font-semibold shadow-md hover:brightness-110 transition duration-300"
        >
          Start Your Project
        </Link>

        <div className="relative">
          <button
            onClick={toggleLangDropdown}
            className="rounded-full px-3 py-1 bg-white text-black font-medium shadow-sm flex items-center gap-1 hover:bg-gray-100 text-xs"
            type="button"
          >
            {language.toUpperCase()}
            <ChevronDown
              className={`w-4 h-4 transition-transform ${langDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
            />
          </button>

          {langDropdownOpen && (
            <div className="absolute right-0 mt-2 w-20 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <ul>
                <li>
                  <button onClick={() => selectLanguage('en')} className="block w-full text-left px-3 py-1.5 hover:bg-blue-100 text-sm">
                    EN
                  </button>
                </li>
                <li>
                  <button onClick={() => selectLanguage('fr')} className="block w-full text-left px-3 py-1.5 hover:bg-blue-100 text-sm">
                    FR
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <header className="bg-transparent py-1.5 shadow-sm relative">
        <div
          ref={navRef}
          className="ml-48 mx-auto w-[62vw] max-w-4xl px-4 py-2.5 flex items-center justify-center gap-5 rounded-[60px] border border-gray-200 bg-white text-xs sm:text-sm md:text-base relative"
          // <-- Make navbar container relative for dropdown positioning
        >
          <ul className="flex items-center justify-center gap-3 font-medium w-full">
            <li>
              <button
                onClick={() => toggleDropdown('agency')}
                className="flex items-center gap-1 px-2 py-1 text-black rounded-full hover:bg-blue-100 transition"
              >
                Agency
                <ChevronDown className={`w-3 h-3 ${openDropdown === 'agency' ? 'rotate-180' : 'rotate-0'} transition`} />
              </button>
            </li>

            <li><NavLink href="/our-projects" label="Our Projects" /></li>

            <li>
              <button
                onClick={() => toggleDropdown('industries')}
                className="flex items-center gap-1 px-2 py-1 text-black rounded-full hover:bg-blue-100 transition"
              >
                Industries
                <ChevronDown className={`w-3 h-3 ${openDropdown === 'industries' ? 'rotate-180' : 'rotate-0'} transition`} />
              </button>
            </li>

            <li>
              <button
                onClick={() => toggleDropdown('expertise')}
                className="flex items-center gap-1 px-2 py-1 text-black rounded-full hover:bg-blue-100 transition"
              >
                Expertise
                <ChevronDown className={`w-3 h-3 ${openDropdown === 'expertise' ? 'rotate-180' : 'rotate-0'} transition`} />
              </button>
            </li>

            <li><NavLink href="/resources" label="Resources" /></li>

            <li>
              <Link
                href="/lets-talk-ai"
                className="px-4 py-1.5 rounded-full font-semibold hover:opacity-90 transition flex items-center gap-2"
                style={{
                  background: 'linear-gradient(90deg, #27408B 0%, #397FFF 40%, #FF802B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <Sparkles className="w-5 h-5" fill="#397FFF" />
                Let&apos;s Talk AI
              </Link>
            </li>
          </ul>

          {/* Dropdown rendered inside navbar container but outside <li> */}
          {openDropdown && dropdownItems && (
            <DropdownMenu
              items={dropdownItems}
              close={() => setOpenDropdown(null)}
              width={navDimensions.width}
              left={0}  // relative to navbar container, so left = 0
              top="100%" // directly below navbar container
            />
          )}
        </div>
      </header>
    </div>
  );
}

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="px-3 py-1 rounded-full text-black hover:bg-blue-100 transition text-sm">
    {label}
  </Link>
);
