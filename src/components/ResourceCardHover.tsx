// ResourceCard.tsx

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
    <div className="relative group rounded-3xl overflow-hidden shadow-lg transition-all duration-500 bg-white w-full max-w-full min-h-[400px] lg:h-[500px] xl:min-h-[auto]">
      {/* Image with tag */}
      <div className="w-full h-48 sm:h-56 md:h-60 lg:h-64 xl:h-72 2xl:h-80 relative transition-all duration-500 group-hover:h-40">
        <Image src={image} alt="card image" fill className="object-cover" />
        <span className="absolute top-3 right-3 bg-white text-black text-[10px] sm:text-xs font-semibold rounded-full px-3 py-1 border border-black z-10">
          ARTICLE
        </span>
      </div>

      {/* Title and Meta */}
      <div className="p-4 pt-4 pb-32 xl:pt-4 xl:pb-4 transition-all duration-500 xl:group-hover:pt-8 xl:group-hover:pb-28">
        <p className="text-xs sm:text-sm text-gray-500">
          {date} · {time} ⏱️
        </p>
        <h3 className="mt-2 text-sm sm:text-md md:text-lg font-medium leading-snug text-black">
          {title}
        </h3>
      </div>

      {/* Hover Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4
        opacity-100 pointer-events-auto
        xl:opacity-0 xl:pointer-events-none
        xl:group-hover:opacity-100 xl:group-hover:pointer-events-auto
        transition-opacity duration-500">
        <div className="flex items-center justify-between gap-4 border-t border-[#295ca4] pt-6">
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
    <div className="px-4 lg:px-2 xl:px-2 2xl:px-64 py-16 md:py-24 max-w-[1920px] mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start md:items-center mb-8 gap-6">
        <h1 className="w-full text-left text-[1.7rem] small:text-[2.2rem] md:text-[3.5rem] small:pr-[4rem] 3xl:pr-36 sm:text-7xl lg:text-6xl xl:text-6xl 3xl:text-[4rem] mb-6 leading-none text-black whitespace-normal">
          S<span style={{ fontFamily: 'Parabole' }}>TA</span>Y T
          <span style={{ fontFamily: 'Parabole' }}>U</span>NED
          <div className="flex items-center mt-2">
            <span className="w-8 h-0.5 bg-black inline-block mr-3 align-middle"></span>
            <span className="italic font-normal">OUR RESSOURCES</span>
          </div>
        </h1>
        <button
          style={{ fontFamily: "PPNeueMontreal", fontWeight: 400 }}
          className="self-start md:items-start flex items-start gap-2 border border-black rounded-full px-4 small:px-5 py-[0.8rem] text-base small:text-[1.2rem] text-black whitespace-nowrap"
        >
          See ressources <span className="text-lg small:text-xl">→</span>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="md:px-28 grid grid-cols-1 md:grid-cols-1 gap-6 xl:grid-cols-3 xl:gap-10 relative lg:grid-cols-2 lg:auto-rows-auto">
        {resources.map((res, idx) => (
          <div
            key={idx}
            className={`
              ${idx === 0 ? 'lg:row-start-1 lg:col-start-1' : ''}
              ${idx === 1 ? 'lg:row-start-1 lg:col-start-2' : ''}
              ${idx === 2 ? 'lg:row-start-2 lg:col-span-2 lg:justify-self-center lg:w-2/3 xl:row-auto xl:col-span-1 xl:w-auto xl:justify-self-auto' : ''}
            `}
          >
            <ResourceCard {...res} />
          </div>
        ))}
      </div>
    </div>
  );
}
