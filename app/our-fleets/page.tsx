import { Metadata } from "next";
import MainSection from "@/components/our-fleets/MainSection";
import FleetsHead from "@/components/our-fleets/FleetsHead"
import FleetCard from "@/components/our-fleets/FleetCard"
export const metadata: Metadata = {
  title: "Our Fleets",
  description: "Get in touch with our team for yacht services and support in Singapore",
  keywords: "Fleets, yacht services, Singapore, maritime support",
};


export default function OurFleets() {
  return (
    <section className="flex flex-col items-center bg-white justify-center gap-[100px]">
      <MainSection />
      <FleetsHead/>
      <FleetCard/>
    </section>
  );
}

