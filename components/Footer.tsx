import React from "react";
import Logo from "../public/images/new-logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "OUR FLEETS", path: "/our-fleets" },
  { name: "GALLERY", path: "/gallery" },
  { name: "ABOUT US", path: "/about" },
];

const Footer = () => {
  return (
    <footer className="bg-white  pt-[120px] pb-[20px] border-t border-[#010725] overflow-x-hidden">
      <div className="container text-[#010725] mx-auto">
        {/* Using flex-col on mobile and row on medium+ screens */}
        <div className="flex flex-col md:flex-row justify-center px-4 font-oswald mb-20">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start md:w-[430px] mb-8 md:mb-0">
            <Image 
              src={Logo} 
              width={150}
              height={200}
              alt="Yacht International Logo"
              className="mb-2"
            />
            <p className="text-sm mt-2">
              Powered by{" "}
              <a href="https://www.linkedin.com/company/105706946" className="underline">
                Digimark Solutions
              </a>
            </p>
          </div>
          {/* Right Columns */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-[35px] md:w-[850px]">
            {/* Contact Column */}
            <div className="md:w-[293px]">
              <h3 className=" font-montserrat font-medium text-[16px] mb-4">
                Contact
              </h3>
              <div className=" text-[15px] space-y-3">
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
                  10 Anson Road, International Plaza, #35-10 Singapore 079903
                </div>
              </div>
            </div>

            {/* Links Column */}
            <div className="md:w-[100px]">
              <h3 className="font-montserrat font-medium text-[16px] mb-4">
                Links
              </h3>
              <div className="text-[15px] space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="relative block group text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Support Column */}
            <div className="md:w-[144px]">
              <h3 className=" font-montserrat font-medium text-[16px] mb-4">
                Support
              </h3>
              <div className=" text-[15px] space-y-3">
                <Link href="privacy-policy" className="block hover:opacity-75">
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Social Column */}
            <div className="md:w-[162px]">
              <h3 className="font-montserrat font-medium text-[16px] mb-4">
                Social Links
              </h3>
              <div className="flex space-x-4 items-center">
                <a href="https://www.facebook.com/yachtintl/" aria-label="Facebook">
                  <Image src="/icons/icons8-facebook.svg" alt="Facebook" width={22} height={22} />
                </a>
                <a href="https://x.com/yachtintl" aria-label="Twitter">
                  <Image src="/icons/icons8-x.svg" alt="Twitter" width={22} height={22} />
                </a>
                <a href="https://www.linkedin.com/company/yachtintl/" aria-label="Linkedin">
                  <Image src="/icons/icons8-linkedin.svg" alt="Linkedin" width={22} height={22} />
                </a>
                <a href="https://www.instagram.com/yachtintl" aria-label="Instagram">
                  <Image src="/icons/icons8-instagram.svg" alt="Instagram" width={22} height={22} />
                </a>
              </div>
    
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[0.2px] border-[#010725] w-full mb-6" />

        <div className="flex items-center justify-center">
          <p className="text-center font-HindGuntur font-normal text-[15px]">
            © 2025 Yacht International. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
