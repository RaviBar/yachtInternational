"use client";

import { motion } from "framer-motion";

const GalleryHead = () => {
  return (
    <motion.div
      className="text-start flex items-center justify-center flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true, amount: 0.6 }} // Ensures scroll triggers the animation
    >
      <h1 className="text-[48px] text-center md:text-5xl max-w-[630px] w-full mb-4 text-[#000000] font-oswald font-bold tracking-[0.01em] leading-relaxed">
        Explore Collection
      </h1>

      <span className="absolute left-1/2 -translate-x-1/2 -bottom-[2px] w-3/4 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-110 transition-transform origin-center"></span>
    </motion.div>
  );
};

export default GalleryHead;
