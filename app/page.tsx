import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServiceStation';
import PresenceSection from '@/components/PresenceSection';
import FleetSection from '@/components/FleetSection';
import AppPromoSection from "@/components/AppPromoSection";
import ServingBeyondBorders from '@/components/ServingBeyondBorder';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PresenceSection />
      <FleetSection />
      <ServingBeyondBorders/>
      <AppPromoSection />
      <Footer />

    </>
  );
}
