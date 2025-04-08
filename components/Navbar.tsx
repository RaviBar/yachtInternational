"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
const navItems = [
  { name: "HOME", path: "/" },
  { name: "OUR FLEETS", path: "/our-fleets" },
  { name: "GALLERY", path: "/gallery" },
  { name: "ABOUT US", path: "/about" },
  { name: "PRESS RELEASES", path: "/press-releases" }
];
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("singapore");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const countries = [
    {
      code: "singapore",
      name: "Singapore",
      flag: "/images/flags/singapore.webp",
      url: "https://yacht-intl.sg/"
    },
    {
      code: "uae",
      name: "United Arab Emirates",
      flag: "/images/flags/united-arab-emirates.webp",
      url: "https://www.yacht-intl.com/"
    }
  ];
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleCountrySelect = (country: typeof countries[number]) => {
    setSelectedCountry(country.code);
    setDropdownOpen(false);
    window.location.href = country.url;
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentCountry = countries.find(c => c.code === selectedCountry);

  return (
    <nav className="w-full max-w-full h-[117px] flex relative bg-white mx-auto">
      <div className="w-[335px] h-full bg-[#06082E] relative custom-clip z-10">
      <Link href="/" passHref><div className="absolute top-[-14px] left-[68px] w-[149px] h-[900px]">
          <Image
            src="/images/Yacht Intl(Poseidon Navi) Logo (1).png"
            alt="Yacht Logo"
            width={149}
            height={110}
            priority
          />
        </div></Link>
      </div>

      {/* Top navbar section */}
<div className="absolute top-0 left-[254px] right-0 h-[44px] flex items-center justify-between px-6 bg-[#0057EB]">
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
      <span>10 Anton Road, International Plaza, Singapore 079903</span>
    </div>
    <span>Email: singapore.office@yacht-mit.com</span>
  </div>

  <div className="flex space-x-4 items-center">
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


      {/* Bottom navbar section */}
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
        {/* Flag Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 border px-3 py-1 rounded-sm hover:bg-gray-700" aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            {currentCountry && (
              <Image 
                src={currentCountry.flag} 
                alt={currentCountry.name}
                width={24} 
                height={16} 
              />
            )}
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-55 bg-gray-100 border rounded shadow-xl z-50">
              {countries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => handleCountrySelect(country)}
                  className="flex items-center space-x-2 px-4 py-2 w-full hover:bg-gray-100"
                >
                  <Image 
                    src={country.flag} 
                    alt={country.name}
                    width={24} 
                    height={16} 
                  />
                  <span className="text-sm text-[#06082E]">{country.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

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
  );
};

export default Navbar;