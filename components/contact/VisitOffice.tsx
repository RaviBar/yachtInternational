import React from "react";
import AddressMap from "./AddressMap";

const VisitOffice = () => {
  return (
    <section className="flex flex-col items-start w-full max-w-7xl justify-start gap-[60px] px-4 md:px-0 py-8 md:py-0">
      {/* Stay in touch section */}
      <div className="flex flex-col w-full gap-10 md:gap-14 items-start justify-start">
        <div className="flex flex-col gap-4 md:gap-6 items-start w-full">
          <h1 className="font-oswald font-medium text-[#212B36] text-3xl md:text-[40px]">
            Visit our Offices
          </h1>
          <p className="font-hind-guntur text-[#000000] text-base md:text-[18px] font-normal">
            Visit us at our locations or get in touch for any assistance!
          </p>
        </div>

        <AddressMap />
      </div>
    </section>
  );
};

export default VisitOffice;
