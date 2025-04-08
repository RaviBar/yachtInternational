import Image from 'next/image';
import Link from 'next/link';

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
            <h3 className="text-3xl font-bold font-oswald text-gray-900 mb-4">
              WHO WE ARE
            </h3>
            <p className="text-gray-700 mb-4">
            Since 2006, We are serving the shipping industry on a variety of services with impeccable results. We have emerged as a leader in the industry by fulfilling customer requirements responsibly to meet their business objectives.
            </p>
            <p className="text-gray-700 mb-6">
            Head Quartered in Fujairah, we have registered our presence with offices in Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah and Oman. Our team takes care of customer requirements with utmost caution with a personal approach enabling them to enjoy the best service in the region.
            </p>
            <p className="text-gray-700 mb-6">
            With a work force of 100 plus professionals and over 100 owners to serve crew change support, many supply boats to serve vessels on anchorage, we enjoy the best infrastructure and fleets to excel and penetrate our growth.
            </p>
            <Link href="/contact" passHref><button className="border border-blue-600 text-gray-700 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition">
              CONTACT US
            </button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
