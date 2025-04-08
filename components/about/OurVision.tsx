import { Globe2, Ship, Users2, Shield, Lightbulb, Leaf } from 'lucide-react';

const features = [
  {
    title: "Excellence",
    description: " We uphold the highest  service standards  through best  practices, compliance,  and continuous  innovation.",
    icon: Globe2,
  },
  {
    title: "Customers",
    description: "We prioritize customer  satisfaction by  understanding their  needs and exceeding  expectations.",
    icon: Ship,
  },
  {
    title: "Teamwork",
    description: " We foster a  collaborative,  inclusive  environment where  teamwork drives  collective success.",
    icon: Users2,
  },
  {
    title: "Safety",
    description: " We prioritize safety  with strict protocols  to protect  employees,  customers, and  partners.",
    icon: Shield,
  },
  
  {
    title: "Integrity",
    description: " We conduct business  with honesty, fairness,  and responsibility,  earning and  maintaining  stakeholder trust.",
    icon: Lightbulb,
  },
  {
    title: "Environment",
    description: "We integrate sustainable practices to actively minimize our environmental footprint and promote long-term ecological balance.",
    icon: Leaf,
  },
];

const OurVision = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="font-oswald mb-16 text-center">
        <h3 className="text-[48px] md:text-5xl font-bold leading-relaxed max-w-[630px] w-full text-[#000000] tracking-[0.01em] mx-auto">
            Our Vision & Mission
        </h3>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group w-[405px] h-[276px] p-[32px_24px] bg-white flex flex-col items-center justify-center gap-[28px] bg-white hover:bg-[#0057EB] transition-all duration-100 text-center rounded-xl"
            >
              <div className="flex items-center justify-center mb-4 w-14 h-14 rounded-full transition-colors duration-300">
                <feature.icon
                  className="w-16 h-16 text-[#0057EB] group-hover:text-white transition-colors duration-300"
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

export default OurVision;
