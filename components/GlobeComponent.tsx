import React, { useRef, useState, useEffect } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl'; 
import Link from 'next/link';


type MarkerData = {
  lat: number;
  lng: number;
  name: string;
  address: string;
};

const GlobeComponent: React.FC = () => {
    const globeEl = useRef<GlobeMethods >(undefined!);
    // const [hoveredLocation, setHoveredLocation] = useState<MarkerData | null>(null);
    // const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0, visible: false });
    const [isGlobeReady, setIsGlobeReady] = useState(false);
  
    const markers: MarkerData[] = [
      { lat: 25.276987, lng: 55.296249, name: 'UAE', address: 'Business Bay, Tower 2, Dubai, UAE' },
      { lat: 1.352083, lng: 103.819836, name: 'Singapore', address: '10 Anton Road, International Plaza, Singapore' },
      { lat: 21.473532, lng: 55.975413, name: 'Oman', address: 'Al Khuwair, Muscat, Oman' },
      { lat: 37.983810, lng: 23.727539, name: 'Greece', address: 'Leof. Vasilissis Sofias, Athens, Greece' },
      { lat: 20.593684, lng: 78.962880, name: 'India', address: 'Nariman Point, Mumbai, India' },
    ];
  
    useEffect(() => {
      if (!globeEl.current) return;
  
      const initGlobe = () => {
        try {
          globeEl.current.controls().autoRotate = true;
          globeEl.current.controls().autoRotateSpeed = 1.0;
          globeEl.current.pointOfView({ altitude: 2 }, 1000);
          globeEl.current.controls().minDistance = 200;  
          globeEl.current.controls().maxDistance = 400;  
        //   globeEl.current.controls().enableZoom = false;
          // Custom marker styling
          // globeEl.current.pointColor(() => '#F36224');
          // globeEl.current.pointRadius(0.5);
          // globeEl.current.pointAltitude(0.1);
          // globeEl.current.pointMaterial({
          //   sizeAttenuation: true,
          //   transparent: true,
          //   opacity: 0.9
          // });
            
          setIsGlobeReady(true);
        } catch (error) {
          console.error('Error initializing globe:', error);
        }
      };
  
      const timer = setTimeout(initGlobe, 100);
      return () => clearTimeout(timer);
    }, []);
  
//     const handlePointHover = (point: object | null) => {
//     if (!isGlobeReady) return;
  
//     const marker = point as MarkerData | null;
//     setHoveredLocation(marker);
  
//     if (globeEl.current) {
//       globeEl.current.controls().autoRotate = !marker;
  
//       if (marker) {
//         const { x, y } = globeEl.current.getScreenCoords(marker.lat, marker.lng);
//         setTooltipPosition({ x: x + 20, y: y - 20, visible: true });
//       } else {
//         setTooltipPosition(prev => ({ ...prev, visible: false }));
//       }
//     }
//   };
  
const handlePointHover = (point: object | null) => {
    if (!isGlobeReady) return;
    const marker = point as MarkerData | null;
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = !marker;
    }
  };
    return (
      <section className="relative flex justify-between items-center bg-[#0A0834] w-full px-[100px] h-[557px]">
        {/* Left Content */}
        <div className="flex flex-col justify-between w-[587px] h-[255px] text-white">
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
              Contact Us
            </button></Link>
          </div>
        </div>
  
        {/* Right Globe with Tooltip */}
        <div className="relative w-[628px] h-[557px]">
          {typeof window !== 'undefined' && (
            <Globe
              ref={globeEl}
              width={628}
              height={557}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
              backgroundColor="rgba(0,0,0,0)"
              pointsData={markers}
              pointLat="lat"
              pointLng="lng"
              pointAltitude={0.02}
              pointRadius={0.8}
              pointColor={() => '#F36224'}
              pointResolution={12}
              pointsMerge={false}
              onPointHover={handlePointHover}
              onPointClick={(point: object) => {
                const marker = point as MarkerData;
                if (marker && globeEl.current) {
                  globeEl.current.pointOfView({
                    lat: marker.lat,
                    lng: marker.lng,
                    altitude: 1.8
                  }, 1000);
                }
              }}
              labelsData={markers}
              labelLat="lat"
              labelLng="lng"
              labelText="name"
              labelSize={15}
              labelDotRadius={0.3}
              labelColor={() => 'rgba(255, 255, 255, 0.9)'}
              labelResolution={2}
              labelAltitude={0.02}
              lineHoverPrecision={35}
            />
          )}
  
          {/* Floating Tooltip
            {tooltipPosition.visible && hoveredLocation && (
                <div 
                className="absolute bg-black bg-opacity-90 text-white p-3 rounded-lg max-w-xs z-50 pointer-events-none shadow-lg"
                style={{
                    left: `${tooltipPosition.x}px`,
                    top: `${tooltipPosition.y}px`,
                    transform: 'translateY(-50%)',
                    borderLeft: '4px solid #F36224'
                }}
                >
                <h3 className="text-lg font-bold text-[#F36224] mb-1">
                    {hoveredLocation.name}
                </h3>
                <p className="text-sm">{hoveredLocation.address}</p>
                </div>
            )} */}
        </div>
      </section>
    );
};

export default GlobeComponent;
