import MainSection from "@/components/contact/MainSection";
import StayTouch from "@/components/contact/StayTouch";
import VisitOffice from "@/components/contact/VisitOffice";

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]">
      <MainSection />
      <StayTouch />
      <VisitOffice />
    </section>
  );
}