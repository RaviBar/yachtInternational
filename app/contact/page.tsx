import { Metadata } from "next";
import MainSection from "@/components/contact/MainSection";
import StayTouch from "@/components/contact/StayTouch";
import VisitOffice from "@/components/contact/VisitOffice";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team for yacht services and support in Singapore",
  keywords: "contact, yacht services, Singapore, maritime support",
};


export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]">
      <MainSection />
      <StayTouch />
      <VisitOffice />
    </section>
  );
}