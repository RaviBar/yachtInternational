"use client";
import Head from 'next/head';
import { useEffect, useState } from "react";

const backgrounds = [
  "/images/Singapore-presence/aerial-view-cargo-ship-cargo-container-harbor[1].webp",
];

const PresenceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <link
          rel="preload"
          as="image"
          href={backgrounds[0]}
          type="image/webp"
        />
      </Head>

      <section
        className={`
          relative w-full h-[611px] md:px-[82px] px-6 py-[60px] 
          flex md:flex-row flex-col items-center md:items-start 
          overflow-hidden 
          md:bg-[length:100%] md:bg-[position:50%_70%] 
          bg-no-repeat bg-center bg-cover
        `}
        style={{
          backgroundImage: `url(${backgrounds[currentIndex]})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-20 z-0" />

        {/* Text Content */}
        <div className="relative z-10 md:ml-10 w-full md:w-[625px] flex flex-col p-12 gap-[50px]">
          <h2 className="font-oswald font-medium text-[35px] md:text-[38px] leading-[39px] tracking-[-0.04em] text-white">
            SINGAPORE PRESENCE
          </h2>
          <div className="font-Hind Guntur font-normal flex flex-col gap-[24px] text-white text-justify">
          <p className="text-[16px] md:text-[17px] leading-[24px] tracking-[0.01em]">
            With over two decades of global shipping expertise, we confidently expanded into Singapore, establishing a reputable subsidiary and group of companies.
          </p>
          <p className="text-[16px] md:text-[17px] leading-[24px] tracking-[0.01em]">
          With its prime location along major trade routes and world-class port infrastructure, Singapore serves as a vital global maritime hub—making it the ideal base for our regional expansion and service delivery.
          </p>
          <p className="text-[16px] md:text-[17px] leading-[24px] tracking-[0.01em]">
          In Singapore, we focus on crew and cargo operations, leveraging technology and digital innovations to enhance efficiency and strengthen our maritime leadership.
          </p>
        </div>
        </div>
      </section>
    </>
  );
};

export default PresenceSection;
