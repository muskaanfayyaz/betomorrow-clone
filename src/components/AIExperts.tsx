import Image from "next/image";

const experts = [
  "/people/Property_1_A-750.png",
  "/people/Alvaro_Laurent_comext_site_jaune-750.jpg",
  "/people/Breton_Paul_comext_site_bleu-02-750.jpg",
  "/people/Rethaller_Tom_comext_site_jaune-750.jpg",
  "/people/Property_1_S-750.png",
  "/people/Lassont_Florian_comext_site_jaune-384.jpg",
  "/people/Malagie_Anne_comext_site_jaune-750.jpg",
  "/people/Ray_Charly_comext_site_bleu-750.jpg",
  "/people/Chataigner_Johan_comext_site_jaune-750.jpg",
];

// Extract only first two words from filename without extension and numbers
const extractName = (path: string) => {
  const filename = path.split("/").pop()?.split("-")[0] || "";
  // Replace underscores with space, split by space, take first two words
  const words = filename.replace(/_/g, " ").split(" ");
  return words.slice(0, 2).join(" ");
};

export default function AIExperts() {
  return (
    <section className="relative mt-20 pb-24 overflow-hidden w-full">
      {/* Heading */}
      <h1 className="mx-auto text-[1.7rem] pl:2 small:pl-3 small:text-[2.1rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[3.5rem] 3xl:text-[4rem] mb-6 leading-none text-black">
        ALL OUR
        <div className="flex items-center">
          <span className="w-8 h-0.5 bg-black inline-block mx-3 align-middle"></span>
          <span className="italic whitespace-nowrap">AI EXPERTS</span>
        </div>
      </h1>

      {/* Auto-scrolling images */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-6 animate-slide">
          {[...experts, ...experts].map((src, index) => {
            const name = extractName(src);
            return (
              <div
                key={index}
                className="group min-w-[160px] small:min-w-[220px] md:min-w-[240px] lg:min-w-[280px] xl:min-w-[340px] h-[240px] small:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[450px] relative flex-shrink-0 rounded-2xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`AI Expert ${index + 1}`}
                  fill
                  className="object-cover rounded-[2rem]"
                />
                {/* Name overlay - hidden by default, shown on hover */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm md:text-base font-medium truncate">
                    {name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
