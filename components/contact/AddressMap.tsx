import React from "react";

const AddressMap = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10 justify-between max-w-7xl w-full">
      {/* Left Map - Now with equal width */}
      <div className="flex flex-col gap-10 w-full md:w-[calc(50%-20px)]">
        <div className="flex flex-col gap-6">
          <h2 className="text-[24px] text-[#000000] font-montserrat font-medium">
            Head Office: Yacht International
          </h2>
          <p className="font-hind-guntur text-[#636363] text-[16px]">
            10, Anson Road, International Plaza, #35-10, Singapore 079903
          </p>
        </div>
        <div className="w-full h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9206719110234!2d103.841149!3d1.2758948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da197d5cfb90d7%3A0xfdd2d969cdb697f2!2sYachting%20Singapore%20Pte%20Ltd!5e0!3m2!1sen!2ssg!4vXXXXXXXXXXX"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Right Map - Now with equal width */}
      <div className="flex flex-col gap-10 w-full md:w-[calc(50%-20px)]">
        <div className="flex flex-col gap-6">
          <h2 className="text-[24px] font-oswald text-black font-medium">
            Branch Office: Marina South Pier - Launch Counter 13
          </h2>
          <p className="font-hind-guntur text-[#636363] text-[16px]">
            31, Marina Coastal Dr, Singapore 018988
          </p>
        </div>
        <div className="w-full h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8660000000004!2d103.8606818!3d1.2709045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da191f44a51d57%3A0x6c1ee12fab46e522!2s31%20Marina%20Coastal%20Dr%2C%20Singapore%20018988!5e0!3m2!1sen!2ssg!4vXXXXXXXXXXX"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default AddressMap;