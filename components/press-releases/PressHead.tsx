"use client";

import { motion } from "framer-motion";

const FleetsHead = () => {
  return (
    <div className="text-start flex items-center justify-center flex-col">
      <motion.h1
        className="text-[48px] text-center md:text-5xl max-w-[630px] w-full mb-4 text-[#000000] font-oswald font-bold tracking-[-0.03em] leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >News That Moves Us <br />
          <span className="relative inline-block group">
          Forward
            <span
            className="absolute left-1/2 -translate-x-1/2 -bottom-[2px] w-2/4 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-110 transition-transform origin-center"
        ></span>
          </span>
      </motion.h1>
      <span className="absolute left-1/2 -translate-x-1/2 -bottom-[2px] w-3/4 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-110 transition-transform origin-center"></span>
      <motion.p
        className="text-[16px] mt-3 text-[#636363] text-center font-hind-guntur font-normal text-headingText md:max-w-[700px] max-w-full w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
      Stay updated with the latest news and press releases from Yacht International as we expand globally, innovate marine operations, and lead the future of maritime services.
      </motion.p>
    </div>
  );
};

export default FleetsHead;