import { Globe2, Ship, Users2, Shield, Lightbulb, Leaf } from 'lucide-react';

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
        <div className="text-center font-oswald mb-16">
          <h2 className="text-[#F36224] font-semibold tracking-wide uppercase mb-2">WHY CHOOSE US</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Dependable Seaport Services Designed<br />
            Around Your Mission
          </h3>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group w-[405px] h-[276px] p-[32px_24px] bg-white flex flex-col items-center justify-center gap-[28px] bg-white hover:bg-[#F36224] transition-all duration-100 text-center rounded-xl"
            >
              <div className="flex items-center justify-center mb-4 w-14 h-14 rounded-full transition-colors duration-300">
                <feature.icon
                  className="w-16 h-16 text-[#F36224] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h4 className="text-xl font-oswald font-semibold mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
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
