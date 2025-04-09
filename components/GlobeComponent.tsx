import React, { useRef, useState, useEffect } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CountryData {
  lat: number;
  lng: number;
  name: string;
  address: string;
  flag: string;
}

const GlobeComponent: React.FC = () => {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const globeContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredCountry, setHoveredCountry] = useState<CountryData | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const countries: CountryData[] = [
    { lat: 25.17572844232324, lng: 56.35128584157686, name: 'UAE', address: 'MMFS Tower - MINA ROAD - 5th Floor - opp. Fujairah Sea Port - Fujairah', flag: '/images/flags/uae.svg' },
    { lat: 1.352083, lng: 103.819836, name: 'Singapore', address: '10 Anton Road, International Plaza, Singapore', flag: '/images/flags/singapore.svg' },
    { lat: 21.436756033148278, lng: 56.60581605434562 , name: 'Oman', address: 'YACHT GLOBAL SHIPPING SERVICES LLC 3rd Floor, Office No: 34 PO BOX: 76,Falaj Al Qabail Sohar, Sultanate of Oman', flag: '/images/flags/oman.svg' },
    { lat: 37.83456409805637, lng: 23.803241973016355 , name: 'Greece', address: 'Vari, Greece', flag: '/images/flags/greece.svg' },
    { lat: 13.07259682693638, lng: 80.25542289525961, name: 'India', address: 'Halls Towers, Egmore, Tamil Nadu-600008, India', flag: '/images/flags/india.svg' },
  ];

  useEffect(() => {
    if (!globeEl.current) return;

    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 1;
    globeEl.current.pointOfView({ altitude: 2.5 }, 1000);
    globeEl.current.controls().minDistance = 240;
    globeEl.current.controls().maxDistance = 500;
  }, []);

  const handleFlagHover = (country: CountryData, event: MouseEvent) => {
    if (!globeContainerRef.current) return;
    
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const containerRect = globeContainerRef.current.getBoundingClientRect();
        const x = rect.left + rect.width / 2 - containerRect.left;
    const y = rect.top - containerRect.top - 5;
    
    setHoveredCountry(country);
    setTooltipPos({ x, y });
    setShowTooltip(true);

    if (globeEl.current) {
      globeEl.current.controls().autoRotate = false;
    }
  };

  const handleFlagLeave = () => {
    setShowTooltip(false);
    setHoveredCountry(null);
    
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
    }
  };
  const handleContainerMouseLeave = () => {
    handleFlagLeave();
  };
  const renderFlag = (d: object) => {
    const country = d as CountryData;
    const div = document.createElement('div');
    
    div.style.position = 'absolute';
    div.style.width = '28px';
    div.style.height = '20px';
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.pointerEvents = 'auto';
    div.style.cursor = 'pointer';
    div.style.zIndex = '100';

    const img = document.createElement('img');
    img.src = country.flag;
    img.alt = country.name;
    img.style.width = '24px';
    img.style.height = '16px';
    img.style.pointerEvents = 'none';
    img.style.filter = 'drop-shadow(0 0 2px rgba(0,0,0,0.5))';

    div.addEventListener('mouseenter', (e) => handleFlagHover(country, e));
    div.addEventListener('mouseleave', handleFlagLeave);

    div.appendChild(img);
    return div;
  };

  return (
    <section className="relative flex flex-col-reverse md:flex-row justify-between items-center bg-[#0A0834] w-full px-6 md:px-[100px] overflow-hidden"
    onMouseLeave={handleContainerMouseLeave} 
    >
      <motion.div
      className="flex flex-col justify-between w-full md:w-[587px] text-white mb-10 md:mb-0"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-oswald text-[#F36224] font-bold mb-6">
        SERVING BEYOND BORDERS
      </h2>
      <p className="text-md mb-6">
        The Yacht team understands the importance of effective communication and
        accessibility. That&apos;s why we continue to expand, establishing new offices in
        more regions each year, ensuring our customers can reach us with ease.
      </p>
      <div className="max-w-2xl">
        <Link href="/contact" passHref>
          <button className="px-6 py-3 bg-blue-600 text-white uppercase font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
            CONTACT US
          </button>
        </Link>
      </div>
    </motion.div>

      <div ref={globeContainerRef} className="relative globe-container w-[628px] h-[557px]">
        {typeof window !== 'undefined' && (
          <>
            <Globe
              ref={globeEl}
              width={628}
              height={557}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
              backgroundColor="rgba(0,0,0,0)"
              htmlElementsData={countries}
              htmlLat="lat"
              htmlLng="lng"
              htmlElement={renderFlag}
            />
              <div 
              className={`absolute bg-black bg-opacity-90 text-white p-2 rounded-lg z-[101] pointer-events-none shadow-lg ${
                showTooltip ? 'block' : 'hidden'
              }`}
              style={{
                left: `${tooltipPos.x}px`,
                top: `${tooltipPos.y}px`,
                transform: 'translateX(-50%) translateY(-100%)',
                borderLeft: '3px solid #F36224',
                transition: 'none',
                maxWidth: '200px'
              }}
            >
              {hoveredCountry && (
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.88"
                      height="19.55"
                      viewBox="0 0 24 24"
                      fill="#F36224"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                    </svg>
                    <h3 className="text-sm font-bold text-[#F36224]">
                      {hoveredCountry.name}
                    </h3>
                  </div>
                  <p className="text-[10px]">{hoveredCountry.address}</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GlobeComponent;