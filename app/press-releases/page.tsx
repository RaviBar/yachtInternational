import { Metadata } from "next";
import MainSection from "@/components/press-releases/MainSection";
import PressHead from "@/components/press-releases/PressHead"
import PressCard from "@/components/press-releases/PressCard"
export const metadata: Metadata = {
  title: "Press Releases",
  description: "Get in touch with our team for yacht services and support in Singapore",
  keywords: "Press, yacht services, Singapore, maritime support",
};


export default function Press() {
  return (
    <section className="flex flex-col items-center bg-white justify-center gap-[100px]">
      <MainSection />
      <PressHead/>
      <PressCard/>
    </section>
  );
}
