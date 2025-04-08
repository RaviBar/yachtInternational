import React, { ReactNode } from "react";

interface LinkItem {
  url: string;
  text: string;
}

interface ContactCardProps {
  icon: ReactNode;
  heading: string;
  bodyText: string;
  links?: LinkItem[];
  iconBgColor?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  heading,
  bodyText,
  links = [],
  iconBgColor = "",
}) => {
  return (
    <div className="flex flex-col items-start text-[#212B36] bg-customGray gap-4 text-start w-full p-6 max-w-[423px] h-auto max-h-[180px] bg-bgCard transition-all duration-300">
      {/* Icon Container */}
      <div className="flex gap-3">
        <div
          className={`${iconBgColor} flex items-center justify-center transition-all duration-0`}
        >
          {icon}
        </div>

        {/* Heading */}
        <h3 className="text-[20px] text-headingText font-medium font-montserrat">
          {heading}
        </h3>
      </div>

      {/* Body Text */}
      <p className="text-[16px] text-bodyText font-montserrat font-regular">
        {bodyText}
      </p>

      {/* Links */}
      <div className="text-sm text-headingText font-montserrat font-regular flex flex-row gap-4 w-full items-center" >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-montserrat font-medium hover:underline"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;