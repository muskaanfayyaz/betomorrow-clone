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
    <div className="relative group rounded-3xl overflow-hidden shadow-lg transition-all duration-500 bg-white w-full max-w-full">
      {/* Image Container */}
      <div className="w-full h-48 sm:h-56 md:h-60 lg:h-64 xl:h-72 2xl:h-80 relative transition-all duration-500 group-hover:h-40">
        <Image
          src={image}
          alt="card image"
          fill
          className="object-cover"
        />
      </div>

      {/* Title and Meta */}
      <div className="p-4 transition-all duration-500 group-hover:pt-8 group-hover:pb-28">
        <p className="text-xs sm:text-sm text-gray-500">
          {date} · {time} ⏱️
        </p>
        <h3 className="mt-2 text-sm sm:text-md md:text-lg font-medium leading-snug text-black">
          {title}
        </h3>
      </div>

      {/* Hover Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="flex items-center justify-between gap-4 border-t border-[#295ca4] pt-6 pointer-events-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative rounded-full overflow-hidden border-2 border-gray-300 shrink-0">
              <Image src={hoverImage} alt="person" fill className="object-cover" />
            </div>
            <div className="text-xs sm:text-sm">
              <div className="font-semibold text-gray-900">{hoverName}</div>
              <div className="text-gray-500 text-xs">{hoverTitle}</div>
            </div>
          </div>
          <button className="text-lg sm:text-xl px-3 py-1 bg-white text-black rounded-full border border-black">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ResourcesSection() {
  return (
    <div className="px-4 sm:px-6 lg:px-12 xl:px-32 2xl:px-64 py-16 md:py-24 max-w-[1920px] mx-auto">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
        {/* Left */}
        <div className="text-left max-w-xl">
          <Image
            src="/resourse-title.png"
            alt="STAY TUNED OUR RESSOURCES"
            width={550}
            height={450}
            className="h-auto object-contain mb-2"
          />
          <p className="text-sm md:text-base text-black mt-2">
            100% AI resources to help you reach the top.
          </p>
        </div>

        {/* Right Button */}
        <button className="self-start md:self-center flex items-center gap-2 border border-black rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm text-black whitespace-nowrap">
          See Resources <span className="text-lg sm:text-xl">→</span>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
        {resources.map((res, idx) => (
          <ResourceCard key={idx} {...res} />
        ))}
      </div>
    </div>
  );
}
