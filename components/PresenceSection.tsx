"use client"
import { useEffect, useState } from "react";

const videos = [
  "/images/singapore-presence/presencesection2.mp4",
  "/images/singapore-presence/presencesection2.mp4",
];

const PresenceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[611px] px-[82px] py-[60px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black ">
        {videos.map((video, index) => (
          <video
          key={index}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-50" : "opacity-0 pointer-events-none"
          }`}
            style={{
              objectPosition: "center center",
            }}
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>

      <div className="relative z-10 w-[617px] h-auto ml-20 flex flex-col justify-start gap-[40px]">
      <h2 className="font-oswald font-medium text-[38px] leading-[39px] tracking-[-0.04em] text-white">
  SINGAPORE PRESENCE
</h2>

        <div className="w-[618px] font-Hind Guntur font-normal h-auto flex flex-col gap-[24px]">
          <p className="text-[17px] leading-[24px] tracking-[0.01em] text-white">
            With over two decades of global shipping expertise, we confidently expanded into Singapore, establishing a reputable subsidiary and group of companies.
          </p>
          <p className="h-[72px]  text-[17px] leading-[24px] tracking-[0.01em] text-white">
            With its prime location along major trade routes and world-class port infrastructure, Singapore serves as a vital global maritime hub—making it the ideal base for our regional expansion and service delivery.
          </p>
          <p className="h-[72px] text-[17px] leading-[24px] tracking-[0.01em] text-white">
            In Singapore, we focus on crew and cargo operations, leveraging technology and digital innovations to enhance efficiency and strengthen our maritime leadership
          </p>
        </div>
      </div>
    </section>
  );
};

export default PresenceSection;