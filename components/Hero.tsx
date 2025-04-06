'use client';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = [
    '/images/HeroSliders/heroslide1.webp',
    '/images/HeroSliders/heroslide2.webp',
    '/images/HeroSliders/heroslide3.webp',
    '/images/HeroSliders/heroslide4.webp',
    '/images/HeroSliders/heroslide5.webp',
    '/images/HeroSliders/heroslide6.webp',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative w-full h-screen bg-black z-10">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-50 z-0' : 'opacity-0 z-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-start px-8 md:px-20 z-20">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl font-oswald md:text-6xl font-extrabold uppercase leading-tight tracking-[0.01em]">
            Welcome to Yacht <br /> International Singapore
          </h1>
          <p className="text-lg font-oswald mt-4 font-semibold text-white tracking-[0.001em]">
            Your go to maritime support provider in Singapore since 2023
          </p>
          <p className="text-base font-oswald font-semibold md:text-lg mt-4 mb-8 leading-relaxed text-gray-200 tracking-[0.01em]">
            Delivering excellence in crew transfers, cargo services, and marine
            operations across Asia and the Middle East.
          </p>

          <div className="flex flex-col font-montserrat sm:flex-row gap-4">
            <button className="px-6 py-3 border-2 border-white text-white uppercase hover:bg-white hover:text-black transition-all duration-300">
              Explore Our Fleets
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white uppercase hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
