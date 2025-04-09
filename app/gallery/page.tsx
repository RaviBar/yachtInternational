import { Metadata } from "next";
import MainSection from "@/components/gallery/MainSection";
import GalleryHead from "@/components/gallery/GalleryHead";
import GalleryImages from "@/components/gallery/GalleryImages";

export const metadata: Metadata = {
  title: "Our Gallery",
  description: "Explore our portfolio",
  keywords: "gallery, portfolio"
};

const Gallery = () => {
  return (
    <section className="flex-col h-auto flex gap-[100px] bg-white items-center">
      <MainSection />
      <div className="flex flex-col max-w-7xl w-11/12">
        <GalleryHead />
        <GalleryImages/>
      </div>
    </section>
  );
};

export default Gallery;