import { Metadata } from "next";
import MainSection from "@/components/gallery/MainSection";
import GalleryHead from "@/components/gallery/GalleryHead";
import Image from "next/image";

interface Project {
  id: number;
  image: string;
}

export const metadata: Metadata = {
  title: "Our Gallery",
  description: "Explore our portfolio",
  keywords: "gallery, portfolio"
};

const projects: Project[] = [
  {
    id: 1,
    image: "/images/Fleetcard/yacht-alpha1.webp",
  },
  {
    id: 2,
    image: "/images/Fleetcard/yacht-alpha1.webp",
  },
  {
    id: 3,
    image: "/images/Fleetcard/yacht-alpha1.webp",
  },
  {
    id: 4,
    image: "/images/Fleetcard/yacht-alpha1.webp",
  },
  {
    id: 5,
    image: "/images/Fleetcard/yacht-alpha1.webp",
  },
  {
    id: 6,
    image: "/images/Fleetcard/yacht-alpha1.webp",
  },
  {
    id: 7,
    image: "/images/Fleetcard/yacht-alpha1.webp",
  },
  {
    id: 8,
    image: "/images/Fleetcard/yacht-alpha1.webp",
  },
  {
    id: 9,
    image: "/images/Fleetcard/yacht-alpha1.webp",
  },
];

const Gallery = () => {
  return (
    <section className="flex-col h-auto flex gap-[100px] items-center">
      <MainSection />
      <div className="flex flex-col max-w-7xl w-11/12">
        <GalleryHead />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={`${project} - ${project}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>    
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;