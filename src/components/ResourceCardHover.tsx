import React from "react";
import Image from "next/image";

interface Resource {
  title: string;
  date: string;
  time: string;
  image: string;
  hoverImage: string;
  hoverName: string;
  hoverTitle: string;
}

const resources: Resource[] = [
  {
    title: "AI in Healthcare: how to improve quality of life through AI?",
    date: "Oct 30, 2024",
    time: "7 min",
    image: "/resource/BeTomorrow_-_IA_en_Sante__-_Ame_liorer_la_qualite__de_vie-1920.png",
    hoverImage: "/people/Holcher_Sandrine_comext_site_bleu-96.jpg",
    hoverName: "Sandrine Holcher",
    hoverTitle: "Marketing manager",
  },
  {
    title: "Adopt AI successfully with the Product-Led Transformation",
    date: "Dec 18, 2024",
    time: "1 min",
    image: "/resource/IT_for_Business_-_logo_-_BeTomorrow-1920.png",
    hoverImage: "/people/Baleinier_Thibault_comext_site_bleu-96.jpg",
    hoverName: "Thibault Baleinier",
    hoverTitle: "Content marketing manager",
  },
  {
    title: "Responsible AI: key concepts and best practices",
    date: "Jan 20, 2025",
    time: "9 min",
    image: "/resource/IA_Responsable_-_Partie_1_-_BeTomorrow-1920.png",
    hoverImage: "/people/Baleinier_Thibault_comext_site_bleu-96.jpg",
    hoverName: "Thibault Baleinier",
    hoverTitle: "Content marketing manager",
  },
];

const ResourceCard: React.FC<Resource> = ({
  title,
  date,
  time,
  image,
  hoverImage,
  hoverName,
  hoverTitle,
}) => {
  return (
    <div className="relative group rounded-3xl overflow-hidden shadow-lg transition-all duration-500 bg-white">
      {/* Image Container */}
      <div className="w-full h-60 relative transition-all duration-500 group-hover:h-40">
        <div className="w-full h-full relative">
          <Image
            src={image}
            alt="card image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Title and Meta */}
      <div className="p-4 transition-all duration-500 group-hover:pt-8 group-hover:pb-28">
        <p className="text-sm text-gray-500">
          {date} · {time} ⏱️
        </p>
        <h3 className="mt-2 text-md font-normal leading-tight text-black">
          {title}
        </h3>
      </div>

      {/* Hover Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="flex items-center justify-between gap-4 border-t border-[#295ca4] pt-6 pointer-events-auto">
          {/* Circular Hover Image */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-gray-300 shrink-0">
              <Image src={hoverImage} alt="person" fill className="object-cover" />
            </div>
            {/* Name and Title */}
            <div className="text-sm">
              <div className="font-semibold text-gray-900">{hoverName}</div>
              <div className="text-gray-500 text-xs">{hoverTitle}</div>
            </div>
          </div>
          {/* Arrow Button */}
          <button className="text-xl px-3 py-1 bg-white text-black rounded-full border border-black">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ResourcesSection() {
    return (
      <div className="p-6 pt-24">
        {/* Top Section with Image and Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
          {/* Left: Resource Image */}
          <div className="text-left">
            <Image
              src="/resourse-title.png"
              alt="STAY TUNED OUR RESSOURCES"
              width={550}
              height={450}
              className="h-auto object-contain mb-2"
            />
            <p className="text-black text-sm md:text-base mt-2">
              100% AI resources to help you reach the top.
            </p>
          </div>
  
          {/* Right: Button */}
          <button className="mt-4 md:mt-0 flex items-center gap-2 border border-black rounded-full px-5 py-2 text-black text-sm">
            See Resources <span className="text-xl">→</span>
          </button>
        </div>
  
        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {resources.map((res, idx) => (
            <ResourceCard key={idx} {...res} />
          ))}
        </div>
      </div>
    );
  }
  
