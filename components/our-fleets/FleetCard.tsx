"use client";

import Image from "next/image";

interface YachtData {
  id: string;
  name: string;
  type: string;
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
    type: "Aluminium-Launch",
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
    type: "Aluminium-Launch",
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
    type: "Aluminium-Launch",
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
    type: "Aluminium-Launch",
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
    type: "Aluminium-Launch",
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
    type: "Aluminium-Launch",
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
      <div className="max-w-[1280px] mx-auto space-y-8">
        {yachts.map((yacht) => (
          <div 
            key={yacht.id} 
            className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <div className="flex flex-col lg:flex-row h-[427px]">
              <div className="w-full lg:w-[405px] h-[427px] relative">
                <Image
                  src={yacht.image}
                  alt={yacht.name}
                  width={80}
                  height={80}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-8 mt-[31px] ml-[62px] max-w-[769px]">
                <div className="space-y-10">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{yacht.name}</h2>
                    <p className="mt-2 text-lg font-medium text-[#666D80]">{yacht.type}</p>
                  </div>

                  <p className="text-[#636363] leading-relaxed max-w-[769px]">
                    {yacht.description}
                  </p>

                  <div className="grid grid-cols-5 gap-x-4">
                    <div>
                      <h3 className="text-sm font-medium text-[#000000]">GRT</h3>
                      <p className="mt-1 text-base text-[#666D80]">{yacht.specs.grt}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-[#000000]">LENGTH</h3>
                      <p className="mt-1 text-base text-[#666D80]">{yacht.specs.length}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">DEPTH</h3>
                      <p className="mt-1 text-base text-gray-600">{yacht.specs.depth}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">SPEED</h3>
                      <p className="mt-1 text-base text-gray-600">{yacht.specs.speed}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">BREADTH</h3>
                      <p className="mt-1 text-base text-gray-600">{yacht.specs.breadth}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}