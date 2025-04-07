import Image from "next/image";
import BgSection from "@/public/images/bg-image-for-contact.jpeg";

const MainSection = () => {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={BgSection}
          alt="About Us Background"
          fill
          className="object-cover w-full h-[300px]"
          priority
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-[#0A0834D1]"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-[40px] text-headingText font-oswald font-medium">
          CONTACT US
        </h1>
        <h2 className="font-montserrat text-[18px] text-headingText">
          Home {">"} Contact
        </h2>
      </div>
    </div>
  );
};

export default MainSection;