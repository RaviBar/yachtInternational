"use client"
import React, { useState } from 'react';
import { FiCalendar, FiChevronDown } from 'react-icons/fi';
import { FaShip } from 'react-icons/fa';
import Image from 'next/image';

const PressCard = () => {
  const [expanded, setExpanded] = useState(false);
  const fullContent = "Navigating Success: Yacht Intl's Elite Maritime Gathering in Singapore.\nThe evening served as a vibrant platform for industry professionals to connect, share insights, and explore new opportunities in the commercial shipping space. It was a pleasure to see our valued partners and well-wishers take time out of their busy schedules to join us for this special occasion.\nWe are sincerely grateful for the continued support and enthusiasm from the Singapore maritime community. Events like these reaffirm our commitment to strengthening relationships and growing together with our clients and stakeholders across the region";

  return (
    <div className="max-w-xl bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      {/* Image Section */}
      <div className="h-75 bg-gray-200 overflow-hidden relative">
        <Image
          src="/images/press-releases-image.jpg" 
          alt="Yacht International" 
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-3">
        {/* Date and Category */}
        <div className="flex justify-start items-center mb-4 gap-8">
          <div className="flex items-center text-gray-500 text-sm">
            <FiCalendar className="mr-2" />
            21 Mar 2025
          </div>
          <div className="flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            <FaShip className="mr-1" />
            Yatchs
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-oswald font-bold text-gray-900 mb-3 tracking-[-0.03em]">
            Yacht Intl&apos;s Elite Maritime Gathering in Singapore
        </h3>
        
        {/* Preview Text */}
        <p className="text-[#636363] mb-4">
        The customer reception recently hosted by Yacht International in Singapore was a resounding success, drawing representatives from over 30 leading shipping companies and Port Authorities.
        </p>
        
        <hr className="my-4 border-gray-200" />
        
        {/* Expandable Content */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'max-h-[500px]' : 'max-h-0'}`}>
          <div className="text-gray-800 whitespace-pre-line pb-4">
            {fullContent}
          </div>
        </div>
        
        {/* Read More Button */}
        <button 
          onClick={() => setExpanded(!expanded)}
          className="flex items-center font-medium mt-auto bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300"
        >
          {expanded ? 'See Less' : 'Read More'}
          <FiChevronDown className={`ml-1 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
};

export default PressCard;