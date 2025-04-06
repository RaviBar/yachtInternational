"use client";
import dynamic from 'next/dynamic';

const GlobeComponent = dynamic(() => import('./GlobeComponent'), { ssr: false });



const ServingBeyondBorders: React.FC = () => {
  return (
    <div>
      <GlobeComponent />
    </div>
  );

};

export default ServingBeyondBorders;  