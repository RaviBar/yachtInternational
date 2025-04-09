"use client";

import React, { useState } from 'react';
import { FiCalendar } from 'react-icons/fi';
import Image from 'next/image';

const PressCard = () => {
  const [expanded, setExpanded] = useState(false);
  const fullContent = `The customer reception recently hosted by Yacht International in Singapore was a resounding success, drawing representatives from over 30 leading shipping companies and Port Authorities.

The evening served as a vibrant platform for industry professionals to connect, share insights, and explore new opportunities in the commercial shipping space. It was a pleasure to see our valued partners and well-wishers take time out of their busy schedules to join us for this special occasion.

We are sincerely grateful for the continued support and enthusiasm from the Singapore maritime community. Events like these reaffirm our commitment to strengthening relationships and growing together with our clients and stakeholders across the region.`;

  const toggleExpanded = () => setExpanded(!expanded);
  const displayedContent = expanded ? fullContent : fullContent.slice(0, 180) + '...';

  return (
    <div className="max-w-full md:max-w-xl m-6 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      {/* Image Section */}
      <div className="h-[220px] md:h-[300px] bg-gray-200 relative">
        <Image
          src="/images/press-releases-image.jpg"
          alt="Yacht International"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-6">
        {/* Date and Tag */}
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <div className="flex items-center text-gray-500 text-sm">
            <FiCalendar className="mr-2" />
            27 July 2023
          </div>

          <div className="flex items-center space-x-1 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.88"
              height="19.55"
              viewBox="0 0 24 24"
              fill="#00E6AB"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            </svg>
            <span>Pan Pacific Hotel, Singapore</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-[#212B36] mb-2">
          Yacht International Hosts Successful Reception in Singapore
        </h3>

        {/* Content */}
        <p className="text-sm md:text-base text-gray-700 whitespace-pre-line">
          {displayedContent}
        </p>

        {/* Toggle */}
        <button
          onClick={toggleExpanded}
          className="text-blue-600 mt-2 text-sm font-medium hover:underline"
        >
          {expanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default PressCard;
