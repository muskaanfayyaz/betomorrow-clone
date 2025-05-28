'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu } from 'lucide-react';
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
  const [openDropdown, setOpenDropdown] = useState<'agency' | 'expertise' | 'industries' | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'fr'>(() => {
    // Check if language is stored in localStorage
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('preferredLanguage');
      return (savedLang === 'fr' || savedLang === 'en') ? savedLang : 'en';
    }
    return 'en';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (name: typeof openDropdown) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const toggleLangDropdown = () => setLangDropdownOpen((prev) => !prev);
  const selectLanguage = (lang: 'en' | 'fr') => {
    setLanguage(lang);
    setLangDropdownOpen(false);
    // Save language preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang);
    }
  };

  let dropdownItems = null;
  if (openDropdown === 'agency') dropdownItems = agencyItems;
  else if (openDropdown === 'industries') dropdownItems = industriesItems;
  else if (openDropdown === 'expertise') dropdownItems = expertiseItems;

  return (
    <div className="w-full fixed top-3 left-0 z-50 bg-transparent">
      {/* Logo */}
      <div className="absolute top-4 left-6 flex items-center z-50">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={160}
            height={160}
            className="object-contain hidden lg:hidden xl:block"
            priority
          />
          {/* <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="object-contain hidden lg:block 2xl:hidden"
            priority
          /> */}
          <Image
            src="/logos/logo-2.png"
            alt="Mobile Logo"
            width={40}
            height={40}
            className="object-contain xl:hidden"
            priority
          />
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="absolute top-4 right-6 xl:hidden z-50">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="p-2"
        >
          <Menu className={`w-6 h-6 lg:w-8 lg:h-8 transition-colors ${mobileMenuOpen ? 'text-[#13119E]' : 'text-white'}`} />
        </button>
      </div>

      {/* Mobile Slide-out Menu - Full Screen */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50" 
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Slidebar */}
          <div className="absolute top-2 right-0 h-full w-full bg-white shadow-xl">
            <div className="h-full flex flex-col overflow-y-auto">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logos/blue-logo-1.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                    priority
                  />
                </Link>
                <button 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <Menu className="w-6 h-6 text-[#13119E]" />
                </button>
              </div>
              
              {/* Content */}
              <div className="flex-1 p-6 space-y-6">
                <MobileDropdown title="Agency" items={agencyItems} />
                <MobileDropdown title="Industries" items={industriesItems} />
                <MobileDropdown title="Expertise" items={expertiseItems} />
                <Link 
                  href="/our-projects" 
                  className="block py-4 text-black font-medium border-b border-gray-100 text-[2.5rem]"
                  style={{ fontFamily: 'PPNeueMontreal', fontWeight: 500 }}
                >
                  Our Projects
                </Link>
                <Link 
                  href="/resources" 
                  className="block py-4 text-black font-medium border-b border-gray-100 text-[2.5rem]"
                  style={{ fontFamily: 'PPNeueMontreal', fontWeight: 500 }}
                >
                  Resources
                </Link>
                <Link 
                  href="/lets-talk-ai" 
                  className="block py-3 font-semibold border-b border-gray-100 text-[2.5rem]"
                  style={{ 
                    fontFamily: 'PPNeueMontreal',
                    fontWeight: 500,
                    background: 'linear-gradient(90deg, #27408B 0%, #27408B 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Let&apos;s Talk AI
                </Link>
              </div>
              
              {/* Fixed Buttons at Bottom */}
              <div className="p-4 border-t border-gray-200 sticky bottom-0 bg-white">
                <div className="flex flex-col sm:flex-row gap-3 items-start">
                  <Link
                    href="/start-your-project"
                    className="inline-flex rounded-full px-6 py-2.5 text-base lg:text-lg bg-[#13119E] text-white font-semibold text-left shadow-md hover:brightness-110 transition h-[64px] items-center"
                    style={{ fontFamily: 'PPNeueMontreal', fontWeight: 500 }}
                  >
                    Start Your Project
                  </Link>
                  <div className="relative">
                    <button
                      onClick={toggleLangDropdown}
                      className="inline-flex rounded-full px-6 py-2.5 bg-[#13119E] text-white font-medium shadow-sm items-center gap-2 hover:brightness-110 text-base lg:text-lg h-[64px] text-left"
                      style={{ fontFamily: 'PPNeueMontreal', fontWeight: 500 }}
                    >
                      {language.toUpperCase()}
                      <ChevronDown className={`w-4 h-4 transition-transform ${langDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                    {langDropdownOpen && (
                      <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-b-[60px] shadow-lg z-50 overflow-hidden min-w-full">
                        <ul>
                          {language === 'en' ? (
                            <li>
                              <button
                                onClick={() => selectLanguage('fr')}
                                className="inline-flex text-left px-6 py-2.5 hover:bg-blue-50 text-base lg:text-lg text-gray-800 transition items-center h-[64px] w-full"
                                style={{ fontFamily: 'PPNeueMontreal', fontWeight: 500 }}
                              >
                                FR
                              </button>
                            </li>
                          ) : (
                            <li>
                              <button
                                onClick={() => selectLanguage('en')}
                                className="inline-flex text-left px-6 py-2.5 hover:bg-blue-50 text-base lg:text-lg text-gray-800 transition items-center h-[64px] w-full"
                                style={{ fontFamily: 'PPNeueMontreal', fontWeight: 500 }}
                              >
                                EN
                              </button>
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Right Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 hidden xl:flex items-center gap-3 h-[64px] z-50">
        <Link
          href="/start-your-project"
          className="rounded-full px-6 py-2 text-xs lg:text-base bg-[#13119E] text-white font-semibold shadow-md hover:brightness-110 transition duration-300 h-[64px] lg:h-[64px] flex items-center leading-[1.5rem]"
        >
          Start Your Project
        </Link>

        <div className="relative h-[64px] lg:h-[64px] flex items-center">
          <button
            onClick={toggleLangDropdown}
            className="rounded-full px-4 py-2 bg-white text-gray-800 font-medium shadow-sm flex items-center gap-1 hover:bg-gray-100 text-xs lg:text-sm h-full leading-[1.5rem] min-w-[48px]"
            type="button"
            aria-haspopup="true"
            aria-expanded={langDropdownOpen}
          >
            {language.toUpperCase()}
            <ChevronDown className={`w-4 h-4 transition-transform ${langDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
          </button>

          {langDropdownOpen && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-200 rounded-b-[60px] shadow-lg z-50 overflow-hidden">
              <ul>
                {language === 'en' ? (
                  <li>
                    <button
                      onClick={() => selectLanguage('fr')}
                      className="w-full text-center px-3 py-3 hover:bg-blue-50 text-sm text-gray-800 transition flex items-center justify-center"
                    >
                      FR
                    </button>
                  </li>
                ) : (
                  <li>
                    <button
                      onClick={() => selectLanguage('en')}
                      className="w-full text-center px-3 py-3 hover:bg-blue-50 text-sm text-gray-800 transition flex items-center justify-center"
                    >
                      EN
                    </button>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Header Navbar */}
      <header className="bg-transparent py-1 shadow-sm relative z-40 hidden xl:block">
        <div
          className={`mx-auto w-[45vw] max-w-5xl px-0 py-3 border border-gray-200 bg-white text-xs lg:text-sm transition-all duration-300 ease-in-out ${
            openDropdown ? 'rounded-t-[50px]' : 'rounded-full'
          }`}
        >
          {/* Navigation Links */}
          <div className="flex items-center justify-center gap-2 lg:gap-3 font-medium w-full px-0">
            <button
              onClick={() => toggleDropdown('agency')}
              className="flex items-center gap-1 px-2 py-1 text-black rounded-full hover:bg-blue-100 transition"
              type="button"
              aria-haspopup="true"
              aria-expanded={openDropdown === 'agency'}
            >
              Agency
              <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === 'agency' ? 'rotate-180' : 'rotate-0'}`} />
            </button>

            <NavLink href="/our-projects" label="Our Projects" />

            <button
              onClick={() => toggleDropdown('industries')}
              className="flex items-center gap-1 px-2 py-1 text-black rounded-full hover:bg-blue-100 transition"
              type="button"
              aria-haspopup="true"
              aria-expanded={openDropdown === 'industries'}
            >
              Industries
              <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === 'industries' ? 'rotate-180' : 'rotate-0'}`} />
            </button>

            <button
              onClick={() => toggleDropdown('expertise')}
              className="flex items-center gap-1 px-1 py-1 text-black rounded-full hover:bg-blue-100 transition"
              type="button"
              aria-haspopup="true"
              aria-expanded={openDropdown === 'expertise'}
            >
              Expertise
              <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === 'expertise' ? 'rotate-180' : 'rotate-0'}`} />
            </button>
          </div>

          {/* Dropdown menu */}
          {openDropdown && dropdownItems && (
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full w-[45vw] max-w-5xl bg-white border-t border-gray-200 pt-3 pb-4 rounded-b-[60px] grid grid-cols-2 gap-3"
              style={{ marginTop: '-4px', zIndex: 10 }}
            >
              {dropdownItems.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 px-0 py-2 text-xs lg:text-sm text-gray-800 hover:bg-blue-50 rounded-md transition"
                >
                  <Image
                    src={`/${String(idx + 1).padStart(2, '0')}.png`}
                    alt={`Number ${idx + 1}`}
                    width={20}
                    height={20}
                    className="flex-shrink-0"
                    priority
                  />
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

const MobileDropdown = ({ title, items }: { title: string; items: { href: string; label: string }[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button 
        onClick={() => setOpen(!open)} 
        className="w-full flex justify-between items-center py-3 text-black font-semibold text-[2.5rem]"
        style={{ fontFamily: 'PPNeueMontreal', fontWeight: 500 }}
      >
        <span>{title}</span>
        <ChevronDown className={`w-5 h-5 lg:w-6 lg:h-6 transition-transform ${open ? 'rotate-180' : 'rotate-0'}`} />
      </button>
      {open && (
        <ul className="pl-4 space-y-2 pb-3">
          {items.map((item, idx) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className="flex items-center gap-3 py-2 text-[2.5rem] text-black hover:text-blue-600"
                style={{ fontFamily: 'PPNeueMontreal', fontWeight: 500 }}
              >
                <Image
                  src={`/${String(idx + 1).padStart(2, '0')}.png`}
                  alt={`Number ${idx + 1}`}
                  width={20}
                  height={20}
                  className="flex-shrink-0 lg:w-6 lg:h-6"
                />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link 
    href={href} 
    className="flex items-center gap-3 py-2 text-[2.5rem] text-black hover:text-blue-600"
    style={{ fontFamily: 'PPNeueMontreal', fontWeight: 500 }}
  >
    {label}
  </Link>
);