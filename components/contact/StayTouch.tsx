"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactList from "./ContactList";

const StayTouch = () => {
  return (
    <section className="flex flex-col items-center w-full gap-[60px] md:gap-[100px] px-4">
      {/* Text section */}
      <div className="flex flex-col items-center justify-center text-center md:text-start">
        <motion.div
          className="w-full md:w-[742px] h-auto md:h-[234px] flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] text-[#212B36] font-oswald font-bold tracking-[0.01em] leading-relaxed">
            Get in Touch with Yacht
            <br />
            <span className="relative inline-block group">
              International
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-[2px] w-2/4 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-110 transition-transform origin-center"></span>
            </span>
          </h1>

          <motion.p
            className="text-[#636363] text-[16px] sm:text-[17px] leading-relaxed tracking-[0.03em]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Whether you&apos;re looking to charter a vessel, request crew assistance, or need
            support at anchorage, we&apos;re here to help — across Singapore and the Middle East.
          </motion.p>
        </motion.div>
      </div>

      <ContactList />
    </section>
  );
};

export default StayTouch;
