"use client";
import React from "react";
import Link from "next/link";

const AppPromoSection = () => {
  return (
    <div className="relative z-10 px-4 sm:px-6"> {/* padding added to the wrapper */}
      <div
        className="bg-[#0057EB] w-full max-w-[1062px] h-auto md:h-[266px] mx-auto text-white text-center py-8 md:py-0 flex flex-col items-center justify-center gap-4 md:gap-6"
        style={{
          marginBottom: "-35px",
        }}
      >
        <h2 className="text-xl md:text-2xl font-oswald font-bold">
          Experience Yacht International on the Go
        </h2>
        <p className="text-sm md:text-base font-oswald">
          Exclusive Access to Smarter Shipping – Manage Fleets & Book Seamlessly
        </p>
        <Link href="https://wa.me/+6598256032" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <button className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-[#0057EB] transition rounded">
              Get in touch with us
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AppPromoSection;
