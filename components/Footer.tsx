import React from "react";
import Logo from "../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer 
      className="bg-[#0C0836]" 
      style={{
        width: ' 100%',
        height: '420px',
        padding: '100px 0px 20px',
        position: 'absolute',
      }}
    >
      {/* Main Content Container */}
      <div 
        className="flex justify-between font-oswald"
        style={{
          width: '1280px',
          marginBottom: '80px',
          paddingLeft: '120px',
          letterSpacing: '-1%',
        }}
      >
        {/* Left Column */}
        <div style={{ width: '430px' }}>
          <Image 
            src={Logo} 
            width={160}
            height={350}
            alt="Yacht International Logo"
            className="mb-8"
          />
        </div>

        <div className="flex gap-[35px]" style={{ width: '850px' }}>
          {/* Contact Column */}
          <div style={{ width: '293px' }}>
            <h3 className="text-white font-montserrat font-medium text-[16px] mb-4">Contact</h3>
            <div className="text-white text-[15px] space-y-3">
              <div className="flex items-start gap-2">
                <IoMdMail className="mt-1" />
                singapore.office@yacht-intl.com
              </div>
              <div className="flex items-start gap-2">
                <FaPhoneAlt className="mt-1" />
                +65 69703884
              </div>
              <div className="flex items-start gap-2">
                <FaLocationDot className="mt-1" />
                10 Anson Road,  International Plaza, #35-10 
Singapore 079903
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div style={{ width: '100px' }}>
            <h3 className="text-white font-montserrat font-medium text-[16px] mb-4">Links</h3>
            <div className="text-white text-[15px] space-y-3">
              {['Home', 'Services', 'About Us', 'Blogs'].map((item) => (
                <Link key={item} href="#" className="block hover:opacity-75">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Support Column */}
          <div style={{ width: '144px' }}>
            <h3 className="text-white font-montserrat font-medium text-[16px] mb-4">Support</h3>
            <div className="text-white text-[15px] space-y-3">
              {['Privacy Policy', 'Help & Support', 'Terms & Conditions', 'Sitemap'].map((item) => (
                <Link key={item} href="#" className="block hover:opacity-75">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Column */}
          <div style={{ width: '162px' }}>
            <h3 className="text-white font-montserrat font-medium text-[16px] mb-4">Social Links</h3>
            <div className="flex space-x-4 items-center">
              <a href="https://www.facebook.com/yachtintl/" aria-label="Facebook">
                <Image src="/icons/facebook.svg" alt="Facebook" width={12} height={12} />
              </a>
              <a href="https://x.com/yachtintl" aria-label="Twitter">
                <Image src="/icons/twitter.svg" alt="Twitter" width={18} height={18} />
              </a>
              <a href="https://www.linkedin.com/company/yachtintl/" aria-label="Linkedin">
                <Image src="/icons/linkedin.png" alt="Linkedin" width={18} height={18} />
              </a>
              <a href="https://www.instagram.com/yachtintl" aria-label="Instagram">
                <Image src="/icons/instagram.svg" alt="Instagram" width={18} height={18} />
              </a>
            </div>

        </div>
        </div>
      </div>

      {/* Divider */}
      <hr 
        style={{
          border: '0.5px solid #DDDDDE',
          width: '100%',
          margin: '0 auto 24px', 
        }}
      />

      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          margin: '0 auto'
        }}
      >
        <div 
          className="text-center"
          style={{
            fontFamily: 'Hind Guntur',
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#FFFFFF',
          }}
        >
          © 2025 Yacht International. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;