"use client"
import React from "react";
import { motion } from "framer-motion";

const OurManagement = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 bg-white">
      <div className="text-center font-oswald mb-20">
        <motion.h2
          className="text-[#0057EB] font-semibold tracking-wide uppercase mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          MEET OUR TEAM
        </motion.h2>

        <motion.h3
          className="text-[48px] text-[#000000] font-oswald font-bold tracking-[0.01em] leading-relaxed text-[#212B36]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our Management
        </motion.h3>
      </div>

      {/* First Row - 3 Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8 mb-12">
        <div className="border border-gray-200 p-8 flex flex-col shadow-lg items-center text-center">
          <h2 className="text-[#0057EB] text-[22px] font-oswald font-bold mb-3">Mr Unnikrishnan</h2>
          <p className="text-[#000000] mb-3">Director/Managing Director</p>
          <p className="text-gray-700 font-medium">+65 86301016, +65 69703884</p>
          <p className="text-[#000000] font-medium">unni@yacht-intl.com</p>
        </div>

        <div className="border border-gray-200 p-8 flex flex-col shadow-lg items-center text-center">
          <h2 className="text-[#0057EB] text-[22px] font-oswald font-bold mb-3">Mr Prakash Vakkayil</h2>
          <p className="text-[#000000] mb-3">Director</p>
          <p className="text-gray-700 font-medium">+65 69703884, +971504847212</p>
          <p className="text-[#000000] font-medium">prakash@yacht-intl.com</p>
        </div>

        <div className="border border-gray-200 p-8 flex flex-col shadow-lg items-center text-center">
          <h2 className="text-[#0057EB] text-[22px] font-oswald font-bold mb-3">Mr Sanjeev Sarin</h2>
          <p className="text-[#000000] mb-3">Director Commercial</p>
          <p className="text-gray-700 font-medium">+65 69703884, +971522142642</p>
          <p className="text-[#000000] font-medium">sanjeev.sarin@yacht-intl.com</p>
        </div>
      </div>

      {/* Second Row - 2 Profiles (with same width as Row 1 boxes) */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        <div className="w-full md:w-[calc(33.333%-1rem)] shadow-lg border border-gray-200 p-8 flex flex-col items-center text-center">
          <h2 className="text-[#0057EB] text-[22px] font-oswald font-bold mb-3">Natasha Sabnis</h2>
          <p className="text-[#000000] mb-3">General Manager</p>
          <p className="text-gray-700 font-medium">+65 98256032</p>
          <p className="text-[#000000] font-medium mb-3">natasha.sabnis@yacht-intl.sg</p>
        </div>

        <div className="w-full md:w-[calc(33.333%-1rem)] shadow-lg border border-gray-200 pt-8 flex flex-col items-center text-center">
          <h2 className="text-[#0057EB] text-[22px] font-oswald font-bold mb-3">Saniah Khamsani</h2>
          <p className="text-[#000000] mb-3">Administration Manager</p>
          <p className="text-gray-700 font-medium">+65 97241656</p>
          <p className="text-[#000000] font-medium">saniah.khamsani@yacht-intl.com</p>
        </div>
      </div>

      {/* Third Row - 2 Profiles (with same width as Row 1 boxes) */}
      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-full md:w-[calc(33.333%-1rem)] shadow-lg border border-gray-200 p-8 flex flex-col items-center text-center">
          <h2 className="text-[#0057EB] text-[22px] font-oswald font-bold mb-3">Nur Amirah</h2>
          <p className="text-[#000000] mb-3">Technical Manager</p>
          <p className="text-gray-700 font-medium">+65 92964105</p>
          <p className="text-[#000000] font-medium">nur.amirah@yacht-intl.sg</p>
        </div>

        <div className="w-full md:w-[calc(33.333%-1rem)] shadow-lg border border-gray-200 p-8 flex flex-col items-center text-center">
          <h2 className="text-[#0057EB] text-[22px] font-oswald font-bold mb-3">Ikmal Hassing</h2>
          <p className="text-[#000000] mb-3">Operation Executive</p>
          <p className="text-gray-700 font-medium">+65 97102553</p>
          <p className="text-[#000000] font-medium">ops@yacht-intl.sg</p>
        </div>
      </div>
    </section>
  );
};

export default OurManagement;