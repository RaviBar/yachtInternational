"use client"
import React from "react";
import ContactCard from "./ContactCard";
import { MdCall, MdEmail, MdWhatsapp } from "react-icons/md";
import Link from "next/link";

interface ContactCardItem {
  icon: React.ReactNode;
  heading: string;
  headingFont?: string;
  bodyText: string;
  bodyFont?: string;
  links: {
    text: string;
    url: string;
    linkFont?: string;
  }[];
  iconBgColor: string;
}

const contactCardData: ContactCardItem[] = [
  {
    icon: <MdEmail size={20} color="#0057EB" />,
    heading: "Connect with us",
    headingFont: "font-oswald font-medium", 
    bodyText: "Connect with us easily through email communication.",
    bodyFont: "font-hind-guntur",
    links: [
      { text: "Linkedin", url: "https://www.linkedin.com/company/yachtintl/", linkFont: "font-montserrat" },
      { text: "Instagram", url: "https://www.instagram.com/yachtintl", linkFont: "font-montserrat" },
      { text: "Twitter", url: "https://x.com/yachtintl", linkFont: "font-montserrat" },
      { text: "Facebook", url: "https://www.facebook.com/yachtintl/", linkFont: "font-montserrat" },
    ],
    iconBgColor: "",
  },
  {
    icon: <MdCall size={20} color="#0057EB" />,
    heading: "Call/Email Us",
    headingFont: "font-oswald font-medium", 
    bodyText: "Give us a call or email to explore the possibilities and start a meaningful partnership.",
    bodyFont: "font-hind-guntur",
    links: [
      { text: "+ 65 69703884 ", url: "tel:+6569703884", linkFont: "font-montserrat" },
      { text: "singapore.office@yacht-intl.com", url: "mailto:singapore.office@yacht-intl.com", linkFont: "font-montserrat" }
    ],
    iconBgColor: "",
  },
  // {
  //   icon: <FaBuilding size={20} color="#0057EB" />,
  //   heading: "Visit Us",
  //   bodyText: " Visit us at our locations or get in touch for any assistance!",
  //   links: [
  //     {
  //       text: "Vizag Studio",
  //       url: "https://maps.app.goo.gl/22iJz3KNajmgYq8p6",
  //     },
  //     {
  //       text: "Rajahmundry Studio",
  //       url: "https://maps.app.goo.gl/ox1KsSv88prHXRPH7",
  //     },
  //   ],
  //   iconBgColor: "",
  // },
];

const ContactList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 max-w-7xl w-full gap-y-6 items-center justify-between">
      <div className="flex flex-col items-start bg-customGray gap-4 text-start w-full p-6 max-w-[413px] h-full max-h-[180px] bg-bgCard transition-all duration-300">
        <div className="flex items-center justify-between gap-8">
          <div
            className={`flex items-center justify-center rounded-full transition-all duration-0`}
          >
            <MdWhatsapp size={72} color="#25D366" />
          </div>
          <div className="flex flex-col text-[#212B36] gap-4">
            <h3 className="text-[20px] text-headingText font-medium font-oswald">
              Chat with us
            </h3>
            <Link href="https://wa.me/+6598256032" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <button
                  className="max-w-[192px] px-4 bg-[#25D366] text-[18px] text-white font-montserrat font-medium w-full h-[50px]"
                >
                  Send Message
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      {contactCardData.map((card, index) => (
        <ContactCard
          key={index}
          icon={card.icon}
          heading={card.heading} 
          bodyText={card.bodyText}
          links={card.links}
          iconBgColor={card.iconBgColor}
        />
      ))}
    </div>
  );
};

export default ContactList;