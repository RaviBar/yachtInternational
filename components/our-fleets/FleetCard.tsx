"use client";

import Image from "next/image";
interface YachtData {
  id: string;
  name: string;
  description: string;
  image: string;
  specs: {
    grt: string;
    length: string;
    depth: string;
    speed: string;
    breadth: string;
  };
}

const yachts: YachtData[] = [
  {
    id: "alpha-1",
    name: "Yacht Alpha 1",
    description: "A high-speed aluminium launch vessel designed for efficient crew and cargo transport. Built for durability and performance, it ensures safe, reliable operations in demanding maritime environments.",
    image: "/images/Fleetcard/yacht-alpha1.webp",
    specs: {
      grt: "22 Tones",
      length: "13.23 M",
      depth: "1.8 M",
      speed: "+-23 Knots",
      breadth: "4.1 M"
    }
  },
  {
    id: "alpha-2",
    name: "Yacht Alpha 2",
    description: "A high-speed aluminium launch vessel designed for efficient crew and cargo transport. Built for durability and performance, it ensures safe, reliable operations in demanding maritime environments.",
    image: "/images/Fleetcard/yacht-alpha2.webp",
    specs: {
      grt: "22 Tones",
      length: "13.23 M",
      depth: "1.8 M",
      speed: "+-23 Knots",
      breadth: "4.1 M"
    }
  },
  {
    id: "alpha-11",
    name: "Yacht Alpha 11",
    description: "A high-speed aluminium launch vessel designed for efficient crew and cargo transport. Built for durability and performance, it ensures safe, reliable operations in demanding maritime environments.",
    image: "/images/Fleetcard/yacht-alpha11.webp",
    specs: {
      grt: "23 Tones",
      length: "11.98 M",
      depth: "1.90 M",
      speed: "+-18 Knots",
      breadth: "4.42 M"
    }
  },
  {
    id: "alpha-22",
    name: "Yacht Alpha 22",
    description: "A high-speed aluminium launch vessel designed for efficient crew and cargo transport. Built for durability and performance, it ensures safe, reliable operations in demanding maritime environments.",
    image: "/images/Fleetcard/yacht-alpha22.webp",
    specs: {
      grt: "28.7 Tones",
      length: "12.4 M",
      depth: "2.08 M",
      speed: "+-13 Knots",
      breadth: "4.1 M"
    }
  },
  {
    id: "alpha-33",
    name: "Yacht Alpha 33",
    description: "A high-speed aluminium launch vessel designed for efficient crew and cargo transport. Built for durability and performance, it ensures safe, reliable operations in demanding maritime environments.",
    image: "/images/Fleetcard/yacht-alpha33.webp",
    specs: {
      grt: "23 Tones",
      length: "16.0 M",
      depth: "1.8 M",
      speed: "+-23 Knots",
      breadth: "3.9 M"
    }
  },
  {
    id: "alpha-44",
    name: "Yacht Alpha 44",
    description: "A high-speed aluminium launch vessel designed for efficient crew and cargo transport. Built for durability and performance, it ensures safe, reliable operations in demanding maritime environments.",
    image: "/images/Fleetcard/yacht-alpha44.webp",
    specs: {
      grt: "25 Tones",
      length: "12.8 M",
      depth: "1.80 M",
      speed: "+-18 Knots",
      breadth: "3.9 M"
    }
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="grid grid-cols-1 font-oswald md:grid-cols-3 gap-[42px] mb-16">
        {yachts.map((fleet, idx) => (
          <div key={idx} className="overflow-hidden shadow-xl relative" style={{ width: '405px', height: '589px' }}>
            {/* Image */}
              <div className="relative h-[300px] w-full">
                <Image 
                  src={fleet.image} 
                  alt={fleet.name} 
                  fill 
                  className="object-cover" 
                />
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
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}