import React from "react";
import ContactList from "./ContactList";

const StayTouch = () => {
  return (
    <section className="flex flex-col items-center w-full gap-[100px]">
      {/* Text section with exact dimensions */}
      <div 
        className="flex flex-col items-center justify-center text-center"
        style={{
          width: '742px',
          height: '234px',
          gap: '32px'
        }}
      >
        <h1 className="text-[48px] text-[#000000] font-oswald font-bold tracking-[0.01em] leading-relaxed text-[#212B36]">
          Get in Touch with Yacht<br />
          <span className="relative inline-block group">
            International
            <span
            className="absolute left-1/2 -translate-x-1/2 -bottom-[2px] w-2/4 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-110 transition-transform origin-center"
        ></span>
          </span>
        </h1>
        <p className="text-[#636363] text-[17px] text-start leading-relaxed tracking-[0.03em]">
          Whether you&apos;re looking to charter a vessel, request crew assistance, or need support
          at anchorage, we&apos;re here to help — across Singapore and the Middle East.
        </p>
      </div>

      <ContactList />
    </section>
  );
};

export default StayTouch;