"use client";
import React, { useState } from "react";
import Image from "next/image";

const countries = [
  {
    code: "singapore",
    name: "Singapore",
    flag: "/images/flags/singapore.webp",
    url: "https://yacht-intl.sg/",
  },
  {
    code: "uae",
    name: "United Arab Emirates",
    flag: "/images/flags/united-arab-emirates.webp",
    url: "https://www.yacht-intl.com/",
  },
];

const FlagDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(countries[0]);
  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const handleSelect = (country: typeof countries[number]) => {
    setCurrentCountry(country);
    window.open(country.url);
  };

  return (
    <div
      className="relative eblock"
      onClick={toggleDropdown}
    >
      <button className="flex items-center space-x-2 border px-3 py-1 rounded-sm hover:bg-gray-700">
        <Image
          src={currentCountry.flag}
          alt={currentCountry.name}
          width={24}
          height={16}
          className="rounded shadow-md"
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-82 bg-white border rounded shadow-lg z-50">
          {countries.map((country) => (
            <div
              key={country.code}
              onClick={() => handleSelect(country)}
              className="flex items-center px-1 py-2 hover:bg-gray-300 cursor-pointer"
            >
              <Image
                src={country.flag}
                alt={country.name}
                width={24}
                height={18}
                className="mr-2 rounded"
              />
            <span className="text-sm text-[#06082E]">{country.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlagDropdown;
