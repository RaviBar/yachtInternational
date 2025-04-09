import React from 'react';
import { MdWhatsapp } from 'react-icons/md';
import Link from 'next/link';

const WhatsAppButton = () => {
  const phoneNumber = '+6598256032'; 
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link 
        href={`https://wa.me/${phoneNumber}`} 
        passHref 
        legacyBehavior
        target="_blank"
        rel="noopener noreferrer"
      >
        <a className="flex items-center justify-center">
          <MdWhatsapp 
            size={60} 
            color="#25D366" 
            className="hover:scale-105 transition-transform duration-200"
          />
        </a>
      </Link>
    </div>
  );
};

export default WhatsAppButton;