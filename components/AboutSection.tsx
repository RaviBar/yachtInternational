import Image from 'next/image';


const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
          <Image
            src="/images/yacht-alpha1.webp" 
            alt="Yacht with containers"
            width={1200} 
            height={600} 
            className="w-full h-auto object-cover rounded"
          />
        </div>

          <div>
            <h4 className="text-blue-600 font-oswald font-medium mb-6">ABOUT US</h4>
            <h3 className="text-3xl font-bold font-oswald text-gray-900 mb-4">
              ABOUT YACHT INTERNATIONAL
            </h3>
            <p className="text-gray-700 mb-4">
              Since our establishment, Yacht International has committed to excellence in
              maritime services, earning a trusted reputation across global shipping hubs.
            </p>
            <p className="text-gray-700 mb-6">
              Headquartered in the UAE, with presence in Dubai, Abu Dhabi, Sharjah, Ras Al
              Khaimah, Oman, and Singapore, we offer responsive, professional marine solutions
              with a focus on client satisfaction.
            </p>
            <p className="text-gray-700 mb-6">
              Our skilled teams and fleet of crew & supply vessels serve over [insert number] clients
              with personnel transfer, cargo support, and anchorage services.
            </p>
            <button className="border border-blue-600 text-gray-700 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
