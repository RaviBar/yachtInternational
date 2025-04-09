"use client"
import { Globe2, Ship, Users2, Shield, Lightbulb, Leaf } from 'lucide-react';
import { motion } from "framer-motion";

const features = [
  {
    title: "Excellence",
    description:
      " We uphold the highest  service standards  through best  practices, compliance,  and continuous  innovation.",
    icon: Globe2,
  },
  {
    title: "Customers",
    description:
      "We prioritize customer  satisfaction by  understanding their  needs and exceeding  expectations.",
    icon: Ship,
  },
  {
    title: "Teamwork",
    description:
      " We foster a  collaborative,  inclusive  environment where  teamwork drives  collective success.",
    icon: Users2,
  },
  {
    title: "Safety",
    description:
      " We prioritize safety  with strict protocols  to protect  employees,  customers, and  partners.",
    icon: Shield,
  },
  {
    title: "Integrity",
    description:
      " We conduct business  with honesty, fairness,  and responsibility,  earning and  maintaining  stakeholder trust.",
    icon: Lightbulb,
  },
  {
    title: "Environment",
    description:
      "We integrate sustainable practices to actively minimize our environmental footprint and promote long-term ecological balance.",
    icon: Leaf,
  },
];

const OurVision = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
          className="font-oswald mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[32px] sm:text-[36px] md:text-5xl font-bold leading-relaxed max-w-[630px] w-full text-[#000000] tracking-[0.01em] mx-auto">
            Our Vision & Mission
          </h3>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group w-full md:w-[405px] h-auto md:h-[276px] p-[32px_24px] bg-white flex flex-col items-center justify-center gap-[28px] hover:bg-[#0057EB] transition-all duration-100 text-center rounded-xl mx-auto"
            >
              <div className="flex items-center justify-center mb-4 w-14 h-14 rounded-full bg-[#0057EB1A] group-hover:bg-white transition-colors">
                <feature.icon className="w-7 h-7 text-[#0057EB] group-hover:text-[#0057EB]" />
              </div>
              <h4 className="text-xl font-semibold text-black group-hover:text-white">
                {feature.title}
              </h4>
              <p className="text-gray-600 group-hover:text-white text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVision;
