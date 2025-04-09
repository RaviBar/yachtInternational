"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import FlagDropdown from "./FlagDropdown";
const navItems = [
  { name: "HOME", path: "/" },
  { name: "OUR FLEETS", path: "/our-fleets" },
  { name: "GALLERY", path: "/gallery" },
  { name: "ABOUT US", path: "/about" },
  { name: "PRESS RELEASES", path: "/press-releases" }
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden z-50 md:flex w-full max-w-full h-[117px] relative bg-white mx-auto">
        <div className="w-[335px] h-full bg-[#06082E] relative custom-clip z-10">
          <Link href="/" passHref>
            <div className="absolute top-[-14px] left-[68px] w-[149px] h-[900px]">
              <Image
                src="/images/Yacht Intl(Poseidon Navi) Logo (1).png"
                alt="Yacht Logo"
                width={149}
                height={110}
                priority
              />
            </div>
          </Link>
        </div>

        {/* Top Navbar Section */}
        <div className="absolute top-0 left-[254px] right-0 h-[44px] flex items-center justify-between px-6 bg-[#06082E]">
          <div className="flex items-center space-x-8 text-sm font-Hind Guntur text-white pl-12">
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.88"
                height="19.55"
                viewBox="0 0 24 24"
                fill="#00E6AB"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 
                9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              <span>
                10 Anson Road, International Plaza, Singapore 079903
              </span>
            </div>
            <span>Email: singapore.office@yacht-intl.com</span>
          </div>

          <div className="flex space-x-4 items-center">
          <FlagDropdown />
            <a href="https://www.facebook.com/yachtintl/" aria-label="Facebook">
              <Image src="/icons/facebook.svg" alt="Facebook" width={12} height={12} />
            </a>
            <a href="https://x.com/yachtintl" aria-label="Twitter">
              <Image src="/icons/twitter.svg" alt="Twitter" width={18} height={18} />
            </a>
            <a href="https://www.linkedin.com/company/yachtintl/" aria-label="Linkedin">
              <Image src="/icons/linkedin.png" alt="Linkedin" width={18} height={18} />
            </a>
            <a href="https://www.instagram.com/yachtintl" aria-label="Instagram">
              <Image src="/icons/instagram.svg" alt="Instagram" width={18} height={18} />
            </a>
          </div>
        </div>

        {/* Bottom Navbar Section */}
        <div className="absolute top-[49px] left-[375px] right-0 h-[64px] flex items-center justify-between px-4 bg-white">
          <div className="flex space-x-8 font-oswald">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="relative group text-[#06082E] text-sm font-semibold"
              >
                {item.name}
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-[2px] w-3/4 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-110 transition-transform origin-center"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4 relative">
            <Link href="/contact" passHref>
              <button className="bg-white text-gray-900 font-semibold border border-blue-600 px-6 py-2 rounded-sm hover:bg-blue-600 hover:text-white transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <style jsx global>{`
          .custom-clip {
            clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
          }
        `}</style>
      </nav>

      {/* Mobile Navbar */}
<div className="md:hidden w-full bg-[#06082E] flex justify-between items-center shadow-sm px-4 py-3">
  <Link href="/">
    <Image src="/images/logo.png" alt="Logo" width={80} height={20} />
  </Link>
  <button onClick={toggleMobileMenu} className="text-white">
    {<Menu size={28} />}
  </button>
</div>

{/* Mobile Sidebar */}
<div
  className={`fixed top-0 right-0 w-3/4 h-full bg-[#06082E] z-50 shadow-lg flex flex-col p-3 space-y-6 transform transition-transform duration-300 ${
    mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  <div className="flex justify-end items-center mb-4 space-x-4">
    {/* Flag Selector */}
    <FlagDropdown/>
  <button onClick={toggleMobileMenu} className="text-white">
      <X size={24} />
  </button>
  </div>
  {/* Nav Items */}
  <nav className="flex flex-col space-y-4 pl-3 py-2">
    {navItems.map((item) => (
      <Link
        key={item.name}
        href={item.path}
        onClick={toggleMobileMenu}
        className="text-md font-medium text-white"
      >
        {item.name}
      </Link>
    ))}
    <Link href="/contact" passHref>
    <button className="bg-white text-gray-900 font-semibold border border-blue-600 px-6 py-2 rounded-sm hover:bg-blue-600 hover:text-white transition-colors">
      Contact Us
    </button>
    </Link>
  </nav>
    
    <div className="items-center text-sm font-Hind Guntur text-white pl-2">
            <div className="flex items-center space-x-1 pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30.88"
                height="25.55"
                viewBox="0 0 24 24"
                fill="#00E6AB"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 
                9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              <span >
                10 Anson Road, International Plaza, Singapore 079903
              </span>
            </div>
            <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#00E6AB"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
              />
            </svg>
              <span>Email: singapore.office@yacht-intl.com</span>
            </div>
          </div>
</div>
    </>
  );
};

export default Navbar;