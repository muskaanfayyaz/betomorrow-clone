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

export default function AIExperts() {
  return (
    <section className="relative mt-20 pb-24 overflow-hidden w-full">
      {/* Left-aligned heading image */}
      <div className="mb-12 px-4 sm:px-6 lg:px-12 xl:px-24">
        <Image
          src="/all-our-ai-expert.png"
          alt="AI Experts"
          width={600}
          height={400}
          className="h-auto object-contain"
          priority
        />
      </div>

      {/* Auto-scrolling track */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-6 w-[200%] animate-slide">
          {[...experts, ...experts].map((src, index) => (
            <div
              key={index}
              className="min-w-[160px] sm:min-w-[200px] md:min-w-[240px] lg:min-w-[280px] xl:min-w-[300px] h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] relative flex-shrink-0 rounded-2xl overflow-hidden"
            >
              <Image
                src={src}
                alt={`AI Expert ${index + 1}`}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
