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
          {[...experts, ...experts].map((src, index) => (
            <div
              key={index}
              className="min-w-[160px] small:min-w-[220px] md:min-w-[240px] lg:min-w-[280px] xl:min-w-[340px] h-[240px] small:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[450px] relative flex-shrink-0 rounded-2xl overflow-hidden"
            >
              <Image
                src={src}
                alt={`AI Expert ${index + 1}`}
                fill
                className="object-cover rounded-[2rem]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
