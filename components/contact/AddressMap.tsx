"use client";

import React from "react";
import { motion } from "framer-motion";

const AddressMap = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10 mb-8 justify-between max-w-7xl w-full">
      {/* Head Office Card */}
      <motion.div
        className="flex flex-col gap-10 w-full md:w-[calc(33.33%-20px)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-6">
          <motion.h2
            className="min-h-[72px] text-[24px] text-[#000000] font-montserrat font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Head Office: Yacht International
          </motion.h2>
          <motion.p
            className="min-h-[48px] font-hind-guntur text-[#636363] text-[16px]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            10, Anson Road, International Plaza, #35-10, Singapore 079903
          </motion.p>
        </div>
        <div className="w-full h-[450px]">
          <iframe
            title="Head Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9206719110234!2d103.841149!3d1.2758948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da197d5cfb90d7%3A0xfdd2d969cdb697f2!2sYachting%20Singapore%20Pte%20Ltd!5e0!3m2!1sen!2ssg!4vXXXXXXXXXXX"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>

      {/* Branch Office Card */}
      <motion.div
        className="flex flex-col gap-10 w-full md:w-[calc(33.33%-20px)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-6">
          <motion.h2
            className="min-h-[72px] text-[24px] font-oswald text-black font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Branch Office: Marina South Pier - Launch Counter 13
          </motion.h2>
          <motion.p
            className="min-h-[48px] font-hind-guntur text-[#636363] text-[16px]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            31, Marina Coastal Dr, Singapore 018988
          </motion.p>
        </div>
        <div className="w-full h-[450px]">
          <iframe
            title="Marina South Pier Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8660000000004!2d103.8606818!3d1.2709045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da191f44a51d57%3A0x6c1ee12fab46e522!2s31%20Marina%20Coastal%20Dr%2C%20Singapore%20018988!5e0!3m2!1sen!2ssg!4vXXXXXXXXXXX"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>

      {/* West Coast Pier Card */}
      <motion.div
        className="flex flex-col gap-10 w-full md:w-[calc(33.33%-20px)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-6">
          <motion.h2
            className="min-h-[72px] text-[24px] font-oswald text-black font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            West Coast Pier ‒ Launch Counter 8
          </motion.h2>
          <motion.p
            className="min-h-[48px] font-hind-guntur text-[#636363] text-[16px]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            60 West Coast Ferry Road, Singapore 126979
          </motion.p>
        </div>
        <div className="w-full h-[450px]">
          <iframe
            title="West Coast Pier Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.0!2d103.6698585!3d1.2412164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1ae317dc423d%3A0xb95be7c604917dbd!2s60%20W%20Coast%20Ferry%20Rd%2C%20Singapore%20126979!5e0!3m2!1sen!2ssg!4vXXXXXXXXXXX"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AddressMap;
