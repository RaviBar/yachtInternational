import { Metadata } from "next";
import MainSection from "@/components/about/MainSection";
import AboutSection from "@/components/about/AboutSection";
import OurVision from "@/components/about/OurVision";
import OurManagement from "@/components/about/OurManagement";
import StayTouch from "@/components/contact/StayTouch";

export const metadata: Metadata = {
  title: "About Us",
  description: "Get in touch with our team for yacht services and support in Singapore",
  keywords: "about, yacht services, Singapore, maritime support",
};


export default function About() {
  return (
    <section className="flex flex-col items-center justify-center bg-white gap-[100px]">
      <MainSection />
      <AboutSection />
      <OurVision/>
      <OurManagement/>
      <StayTouch/>
    </section>
  );
}