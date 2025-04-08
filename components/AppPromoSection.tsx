"use client";
import React from "react";
import Link from "next/link";
const AppPromoSection = () => {
  return (
    <div className="relative z-10 mt-[140px]">
      <div
        className="bg-[#0057EB] w-[1062px] h-[266px] mx-auto text-white text-center px-6 flex flex-col items-center justify-center gap-6"
        style={{
          marginBottom: "-35px", 
        }}
      >
        <h2 className="text-2xl font-oswald font-bold">
          Experience Yacht International on the Go
        </h2>
        <p className="text-base font-oswald">
        Exclusive Access to Smarter Shipping – Manage Fleets & Book Seamlessly
        </p>
        <Link href="https://wa.me/+6598256032" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
              <button className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-[#0057EB] transition rounded">
          Open Our App
        </button></a>
        </Link>
      </div>
    </div>
  );
};

export default AppPromoSection;
