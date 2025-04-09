'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fleets = [
  {
    type: "UTILITY BOAT",
    name: "Yacht Alpha 1",
    image: "/images/Fleetcard/yacht-alpha1.webp",
    specs: {
      grt: "22 Tones",
      length: "13.23 M",
      breadth: "4.1 M",
      depth: "1.8 M",
      speed: "+-23 Knots"
    }
  },
  {
    type: "CREW BOAT",
    name: "Yacht Alpha 2",
    image: "/images/Fleetcard/yacht-alpha2.webp",
    specs: {
      grt: "22 Tones",
      length: "13.23 M",
      breadth: "4.1 M",
      depth: "1.8 M",
      speed: "+-23 Knots"
    }
  },
  {
    type: "CREW BOAT",
    name: "Yacht Alpha 11",
    image: "/images/Fleetcard/yacht-alpha11.webp",
    specs: {
      grt: "23 Tones",
      length: "11.98 M",
      breadth: "4.42 M",
      depth: "1.90 M",
      speed: "+-18 Knots"
    }
  }
];

const FleetSection = () => {
  return (
    <section className="py-15 px-4 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
       {/* Animated Heading and Description */}
       <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-oswald font-bold text-blue-600 mb-4">
            OUR FLEETS
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Charter boats with crew: we offer 24 x 7 charter services for crew and cargo,
            complete with experienced and skilled crews to ensure safe and efficient operations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 font-oswald md:grid-cols-3 gap-[42px] mb-12">
          {fleets.map((fleet, idx) => (
            <div key={idx} className="flex justify-center md:justify-start">
            <div className="overflow-hidden shadow-md relative" style={{ width: '405px', height: '677px' }}>
              {/* Image */}
                <div className="relative h-[300px] w-full">
                  <Image 
                    src={fleet.image} 
                    alt={fleet.name} 
                    fill 
                    className="object-cover" 
                  />

                  {/* Overlay Tag */}
                  <div className="absolute left-1/2 font-oswald -translate-x-1/2 bottom-0 translate-y-1/2 bg-[#0057EB] px-4 py-1 text-sm font-semibold shadow text-white">
                    {fleet.type}
                  </div>
                </div>

              {/* Content Area */}
              <div className="pt-10 pb-6 px-4 flex flex-col items-center text-center text-black h-[377px]">
                <h3 className="text-lg font-bold mb-2">{fleet.name}</h3>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 w-full text-sm text-center border-t border-gray-200 mb-6">
                  {[
                    { label: "GRT", value: fleet.specs.grt },
                    { label: "LENGTH", value: fleet.specs.length },
                    { label: "BREADTH", value: fleet.specs.breadth },
                    { label: "DEPTH", value: fleet.specs.depth },
                    { label: "SPEED", value: fleet.specs.speed },
                    { label: "", value: "" }
                  ].map((spec, i) => (
                    <div
                      key={i}
                      className={`py-3 px-2 flex flex-col items-center justify-center 
                        ${i % 3 !== 2 ? "border-r border-gray-300" : ""}`}
                    >
                      <span className="text-sm font-medium mb-2">{spec.label}</span>
                      <span className="text-xs font-medium text-gray-500">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* View More Button */}
                <Link href="/our-fleets" passHref>
                <button className="mt-auto bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300 font-medium">
                  View More
                </button></Link>
              </div>
            </div>
            </div>
          ))}
        </div>

        </div>
        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/our-fleets">
            <div className="inline-block px-6 py-3 bg-blue-600 text-white uppercase font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 border border-blue-600 rounded">
              View More
            </div>
          </Link>
        </motion.div>
    </section>
  );
};

export default FleetSection;