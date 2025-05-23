'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Sparkles, Menu, X } from 'lucide-react';
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
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (name: typeof openDropdown) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const toggleLangDropdown = () => setLangDropdownOpen((prev) => !prev);
  const selectLanguage = (lang: 'en' | 'fr') => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  let dropdownItems = null;
  if (openDropdown === 'agency') dropdownItems = agencyItems;
  else if (openDropdown === 'industries') dropdownItems = industriesItems;
  else if (openDropdown === 'expertise') dropdownItems = expertiseItems;

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-transparent">
      {/* Logo */}
      <div className="absolute top-4 left-6 flex items-center z-50">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={160}
            height={160}
            className="object-contain hidden xl:block"
            priority
          />
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="object-contain hidden lg:block xl:hidden"
            priority
          />
          <Image
            src="/logos/logo-2.png"
            alt="Mobile Logo"
            width={40}
            height={40}
            className="object-contain lg:hidden"
            priority
          />
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="absolute top-4 right-6 lg:hidden z-50">
        <button 
          onClick={() => setMobileMenuOpen(true)} 
          className="p-2 text-white"
        >
          <Menu className="w-6 h-6" />
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
          <div className="absolute top-0 right-0 h-full w-full bg-white shadow-xl">
            <div className="h-full flex flex-col overflow-y-auto">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={120}
                    height={40}
                    className="object-contain"
                    priority
                  />
                </Link>
                <button 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              
              {/* Content */}
              <div className="flex-1 p-6 space-y-6">
                <MobileDropdown title="Agency" items={agencyItems} />
                <MobileDropdown title="Industries" items={industriesItems} />
                <MobileDropdown title="Expertise" items={expertiseItems} />
                <Link 
                  href="/our-projects" 
                  className="block py-3 text-gray-800 font-medium border-b border-gray-100"
                >
                  Our Projects
                </Link>
                <Link 
                  href="/resources" 
                  className="block py-3 text-gray-800 font-medium border-b border-gray-100"
                >
                  Resources
                </Link>
                <Link 
                  href="/lets-talk-ai" 
                  className="block py-3 font-semibold border-b border-gray-100"
                  style={{ 
                    background: 'linear-gradient(90deg, #27408B 0%, #397FFF 40%, #FF802B 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Let&apos;s Talk AI
                </Link>
              </div>
              
              {/* Fixed Buttons at Bottom */}
              <div className="p-6 border-t border-gray-200 sticky bottom-0 bg-white">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/start-your-project"
                    className="flex-1 rounded-full px-6 py-3 text-sm bg-[#13119E] text-white font-semibold text-center shadow-md hover:brightness-110 transition"
                  >
                    Start Your Project
                  </Link>
                  <div className="relative flex-1">
                    <button
                      onClick={toggleLangDropdown}
                      className="w-full rounded-3xl px-6 py-3 bg-gray-100 text-gray-800 font-medium shadow-sm flex items-center justify-center gap-2 hover:bg-gray-200 text-sm"
                    >
                      {language.toUpperCase()}
                      <ChevronDown className={`w-4 h-4 transition-transform ${langDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                    {langDropdownOpen && (
                      <div className="absolute bottom-full left-0 mb-2 w-full bg-white border border-gray-200 rounded-full shadow-lg z-50 overflow-hidden">
                        <ul>
                          <li>
                            <button
                              onClick={() => selectLanguage('en')}
                              className="block w-full text-center px-4 py-2 hover:bg-blue-100 text-sm text-gray-800"
                            >
                              EN
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => selectLanguage('fr')}
                              className="block w-full text-center px-4 py-2 hover:bg-blue-100 text-sm text-gray-800"
                            >
                              FR
                            </button>
                          </li>
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
      <div className="absolute top-1/2 -translate-y-1/2 right-6 hidden lg:flex items-center gap-3 h-[48px] z-50">
        <Link
          href="/start-your-project"
          className="rounded-full px-6 py-2 text-xs lg:text-sm bg-[#13119E] text-white font-semibold shadow-md hover:brightness-110 transition duration-300 h-[40px] lg:h-[48px] flex items-center leading-[1.5rem]"
        >
          Start Your Project
        </Link>

        <div className="relative h-[40px] lg:h-[48px] flex items-center">
          <button
            onClick={toggleLangDropdown}
            className="rounded-full px-4 py-2 bg-white text-gray-800 font-medium shadow-sm flex items-center gap-1 hover:bg-gray-100 text-xs lg:text-sm h-full leading-[1.5rem]"
            type="button"
            aria-haspopup="true"
            aria-expanded={langDropdownOpen}
          >
            {language.toUpperCase()}
            <ChevronDown className={`w-4 h-4 transition-transform ${langDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
          </button>

          {langDropdownOpen && (
            <div className="absolute right-0 mt-2 w-20 bg-white border border-gray-200 rounded-3xl shadow-lg z-50 overflow-hidden">
              <ul>
                <li>
                  <button
                    onClick={() => selectLanguage('en')}
                    className="block w-full text-center px-3 py-1.5 hover:bg-blue-100 text-xs lg:text-sm text-gray-800"
                  >
                    EN
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => selectLanguage('fr')}
                    className="block w-full text-center px-3 py-1.5 hover:bg-blue-100 text-xs lg:text-sm text-gray-800"
                  >
                    FR
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Header Navbar */}
      <header className="bg-transparent py-1 shadow-sm relative z-40 hidden lg:block">
        <div
          className={`ml-36 lg:ml-48 mx-auto w-[62vw] max-w-4xl px-4 py-2 border border-gray-200 bg-white text-xs lg:text-sm transition-all duration-300 ease-in-out ${
            openDropdown ? 'rounded-t-[50px]' : 'rounded-full'
          }`}
        >
          {/* Navigation Links */}
          <div className="flex items-center justify-center gap-2 lg:gap-3 font-medium w-full">
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
              className="flex items-center gap-1 px-2 py-1 text-black rounded-full hover:bg-blue-100 transition"
              type="button"
              aria-haspopup="true"
              aria-expanded={openDropdown === 'expertise'}
            >
              Expertise
              <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === 'expertise' ? 'rotate-180' : 'rotate-0'}`} />
            </button>

            <NavLink href="/resources" label="Resources" />

            <Link
              href="/lets-talk-ai"
              className="px-3 lg:px-4 py-1 rounded-full font-semibold hover:opacity-90 transition flex items-center gap-1 lg:gap-2"
              style={{
                background: 'linear-gradient(90deg, #27408B 0%, #397FFF 40%, #FF802B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <Sparkles className="w-4 h-4 lg:w-5 lg:h-5" fill="#397FFF" />
              Let&apos;s Talk AI
            </Link>
          </div>

          {/* Dropdown menu */}
          {openDropdown && dropdownItems && (
            <div
              className="absolute left-0 top-full w-full bg-white border-t border-gray-200 pt-3 pb-4 rounded-b-[60px] grid grid-cols-2 gap-3"
              style={{ marginTop: '-4px', zIndex: 10 }}
            >
              {dropdownItems.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 text-xs lg:text-sm text-gray-800 hover:bg-blue-50 rounded-md transition"
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

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="px-2 lg:px-3 py-1 rounded-full text-black hover:bg-blue-100 transition text-xs lg:text-sm">
    {label}
  </Link>
);

const MobileDropdown = ({ title, items }: { title: string; items: { href: string; label: string }[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button 
        onClick={() => setOpen(!open)} 
        className="w-full flex justify-between items-center py-3 text-gray-800 font-semibold"
      >
        <span>{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : 'rotate-0'}`} />
      </button>
      {open && (
        <ul className="pl-4 space-y-2 pb-3">
          {items.map((item, idx) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className="flex items-center gap-3 py-2 text-sm text-gray-700 hover:text-blue-600"
              >
                <Image
                  src={`/${String(idx + 1).padStart(2, '0')}.png`}
                  alt={`Number ${idx + 1}`}
                  width={20}
                  height={20}
                  className="flex-shrink-0"
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