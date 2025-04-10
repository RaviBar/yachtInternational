'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = [
    '/images/heroSliders/slide.jpg'
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
            index === currentSlide ? 'opacity-80 z-0' : 'opacity-0 z-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-start px-8 md:px-20 z-20">
      <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-white max-w-3xl -mt-16"
        >
          <h1 className="text-4xl font-oswald md:text-6xl font-extrabold uppercase  leading-tight tracking-[-0.03em]">
            Welcome to Yacht <br /> International Singapore
          </h1>
          <div className="text-white max-w-xl text-justify">
          <p className="text-lg font-oswald font-semibold text-white tracking-[0.001em]">
            Your go-to maritime support provider in Singapore since 2023
          </p>
          <p className="text-base font-oswald font-semibold md:text-lg mt-4 mb-8 leading-relaxed text-gray-200 tracking-[0.01em]">
            Delivering excellence in crew transfers, cargo services, and marine
            operations across Asia and the Middle East.
          </p></div>

          <div className="flex flex-col font-montserrat sm:flex-row gap-4">
          <Link href="/our-fleets" passHref><button className="px-6 py-3 border-2 border-white text-white uppercase hover:bg-white hover:text-black transition-all duration-300">
              Explore Our Fleets
            </button></Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;