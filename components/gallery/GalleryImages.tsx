import Image from "next/image";
interface Project {
    id: number;
    image: string;
  }
const projects: Project[] = [
    {
      id: 1,
      image: "/images/gallery/gallery-image-1.jpg",
    },
    {
      id: 2,
      image: "/images/gallery/gallery-image-2.jpg",
    },
    {
      id: 3,
      image: "/images/gallery/gallery-image-3.jpg",
    },
    {
      id: 4,
      image: "/images/gallery/gallery-image-4.jpg",
    },
    {
      id: 5,
      image: "/images/gallery/gallery-image-5.jpg",
    },
    {
      id: 6,
      image: "/images/gallery/gallery-image-6.jpg",
    },
    {
      id: 7,
      image: "/images/gallery/gallery-image-7.jpg",
    },
  ];
  const GalleryImages = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col">
              <div className="relative h-95 w-full">
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
    )
  }
export default GalleryImages;