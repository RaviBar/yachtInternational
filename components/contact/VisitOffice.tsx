import React from "react";
import AddressMap from "./AddressMap";

const VisitOffice = () => {
  return (
    <section className="flex flex-col items-start max-w-7xl w-full justify-start gap-[100px]">
      {/* Stay in touch section */}
      <div className="flex flex-col max-w-7xl w-full gap-14 items-start justify-start">
        <div className="flex flex-col gap-6 items-start max-w-7xl justify-start w-full">
          <h1 className="font-oswald font-medium items-start text-[#212B36] text-headingText text-[40px]">
          Visit our Offices
          </h1>
          <p className="font-hind-guntur text-[#000000] text-[18px] font-normal text-bodyText">
          Visit us at our locations or get in touch for any assistance!
          </p>
        </div>

        <AddressMap />
      </div>
    </section>
  );
};

export default VisitOffice;