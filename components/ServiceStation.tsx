'use client';
import { Globe2, Ship, Users2, Shield, Lightbulb, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Global Presence",
    description: "Strategically located in the UAE and Singapore, we offer fast, reliable service across major maritime hubs.",
    icon: Globe2,
  },
  {
    title: "Comprehensive Services",
    description: "From cargo support to crew transfers, our full-service fleet efficiently handles all operational needs.",
    icon: Ship,
  },
  {
    title: "Client-Centric",
    description: "We tailor our services with flexibility and transparent communication to consistently exceed expectations.",
    icon: Users2,
  },
  {
    title: "Safety & Integrity",
    description: "We follow strict safety standards and operate with integrity and transparency in every interaction.",
    icon: Shield,
  },
  {
    title: "Innovation Driven",
    description: "Digital tools and intelligent processes enhance our efficiency and significantly optimize our service delivery.",
    icon: Lightbulb,
  },
  {
    title: "Eco-Friendly",
    description: "We integrate sustainable practices to actively minimize our environmental footprint and promote long-term ecological balance.",
    icon: Leaf,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Heading Section */}
        <div className="text-center font-oswald mb-16">
          {/* Small heading - top to bottom */}
          <motion.h2
            className="text-[#F36224] font-semibold tracking-wide uppercase mb-2"
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            WHY CHOOSE US
          </motion.h2>

          {/* Main heading - bottom to top */}
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Dependable Seaport Services Designed<br />
            Around Your Mission
          </motion.h3>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group w-full sm:w-auto p-6 sm:p-[32px_24px] bg-white flex flex-col items-center justify-center gap-6 sm:gap-[28px] hover:bg-[#F36224] transition-all duration-200 text-center rounded-xl shadow-md"
            >
              <feature.icon className="w-10 h-10 text-[#F36224] group-hover:text-white transition duration-200" />
              <h4 className="text-xl font-semibold text-gray-900 group-hover:text-white transition duration-200">
                {feature.title}
              </h4>
              <p className="text-gray-600 group-hover:text-white transition duration-200">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
