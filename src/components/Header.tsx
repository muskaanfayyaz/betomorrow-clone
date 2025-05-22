'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Sparkles } from 'lucide-react';
import Image from 'next/image';

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
  const [dropdownOpen, setDropdownOpen] = useState({
    agency: false,
    expertise: false,
    industries: false,
  });

  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const navRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(65);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  const toggleDropdown = (name: keyof typeof dropdownOpen) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const toggleLangDropdown = () => setLangDropdownOpen(!langDropdownOpen);
  const selectLanguage = (lang: 'en' | 'fr') => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* Logo */}
      <div
        style={{ height: navHeight }}
        className="absolute top-4 left-6 flex items-center cursor-pointer select-none"
      >
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

      {/* Top-right Buttons */}
      <div
        style={{ height: navHeight }}
        className="absolute top-4 right-6 flex items-center gap-3"
      >
        <Link
          href="/start-your-project"
          className="rounded-full px-4 py-1.5 text-sm bg-gradient-to-r from-[#13119E] via-blue-800 to-blue-700 text-white font-semibold shadow-md hover:brightness-110 transition duration-300 flex items-center justify-center"
          style={{ height: navHeight * 0.8 }}
        >
          Start Your Project
        </Link>

        <div className="relative" style={{ height: navHeight * 0.8 }}>
          <button
            onClick={toggleLangDropdown}
            className="rounded-full px-3 py-1 bg-white text-black font-medium shadow-sm flex items-center gap-1 hover:bg-gray-100 text-xs h-full"
            type="button"
          >
            {language.toUpperCase()}
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                langDropdownOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </button>

          {langDropdownOpen && (
            <div className="absolute right-0 mt-2 w-20 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <ul>
                <li>
                  <button
                    onClick={() => selectLanguage('en')}
                    className="block w-full text-left px-3 py-1.5 hover:bg-blue-100 rounded-full text-sm text-black"
                  >
                    EN
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => selectLanguage('fr')}
                    className="block w-full text-left px-3 py-1.5 hover:bg-blue-100 rounded-full text-sm text-black"
                  >
                    FR
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Nav */}
      <header ref={navRef} className="bg-transparent py-1.5 shadow-sm mt-0 mb-0">
        <nav
          className="ml-48 top-4 mx-auto w-[62vw] max-w-4xl px-4 py-2.5 flex items-center justify-center gap-5 rounded-[60px] border border-gray-200 bg-white relative text-xs sm:text-sm md:text-base"
          style={{ minHeight: navHeight * 0.8 }}
        >
          <ul className="flex items-center justify-center gap-3 font-medium">
            <li className="relative">
              <button
                onClick={() => toggleDropdown('agency')}
                className="flex items-center gap-1 px-2 py-1 text-black rounded-full hover:bg-blue-100 transition cursor-pointer"
              >
                Agency
                <ChevronDown
                  className={`w-3 h-3 text-black transition-transform ${
                    dropdownOpen.agency ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              {dropdownOpen.agency && (
                <DropdownMenu items={agencyItems} close={() => toggleDropdown('agency')} />
              )}
            </li>

            <li>
              <NavLink href="/our-projects" label="Our Projects" />
            </li>

            <li className="relative">
              <button
                onClick={() => toggleDropdown('industries')}
                className="flex items-center gap-1 px-2 py-1 text-black rounded-full hover:bg-blue-100 transition cursor-pointer"
              >
                Industries
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${
                    dropdownOpen.industries ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              {dropdownOpen.industries && (
                <DropdownMenu items={industriesItems} close={() => toggleDropdown('industries')} />
              )}
            </li>

            <li className="relative">
              <button
                onClick={() => toggleDropdown('expertise')}
                className="flex items-center gap-1 px-2 py-1 text-black rounded-full hover:bg-blue-100 transition cursor-pointer"
              >
                Expertise
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${
                    dropdownOpen.expertise ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              {dropdownOpen.expertise && (
                <DropdownMenu items={expertiseItems} close={() => toggleDropdown('expertise')} />
              )}
            </li>

            <li>
              <NavLink href="/resources" label="Resources" />
            </li>

            <li>
              <Link
                href="/lets-talk-ai"
                className="px-4 py-1.5 rounded-full font-semibold hover:opacity-90 transition flex items-center gap-2"
                style={{
                  background:
                    'linear-gradient(90deg, #27408B 0%, #397FFF 40%, #FF802B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <Sparkles className="w-5 h-5" fill="#397FFF" />
                Let&apos;s Talk AI
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="px-3 py-1 rounded-full text-black hover:bg-blue-100 transition text-sm"
  >
    {label}
  </Link>
);

const DropdownMenu = ({
  items,
  close,
}: {
  items: { href: string; label: string }[];
  close: () => void;
}) => (
  <div className="absolute top-full left-0 mt-1 max-h-72 overflow-auto max-w-[170px] rounded-lg border border-gray-300 bg-white p-2 shadow-lg z-50 text-black">
    <ul>
      {items.map(({ href, label }) => (
        <li key={href} onClick={close}>
          <Link
            href={href}
            className="block rounded-md px-3 py-2 hover:bg-blue-100 transition text-sm"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
