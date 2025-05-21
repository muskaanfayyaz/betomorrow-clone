// components/AIExperts.tsx
import Image from "next/image";

const experts = [
  "/people/Property_1_A-750.png",
  "/people/Alvaro_Laurent_comext_site_jaune-750.jpg",
  "/people/Breton_Paul_comext_site_bleu-02-750.jpg",
  "/people/Rethaller_Tom_comext_site_jaune-750.jpg",
  "/people/Property_1_S-750.png",
  "/people/Lassont_Florian_comext_site_jaune-384.jpg",
  "/people/Baleinier_Thibault_comext_site_bleu-96.jpg",
  "/people/Malagie_Anne_comext_site_jaune-750.jpg",
  "/people/Ray_Charly_comext_site_bleu-750.jpg",
  "/people/Chataigner_Johan_comext_site_jaune-750.jpg",
  "/people/Holcher_Sandrine_comext_site_bleu-96.jpg",
];

export default function AIExperts() {
  return (
    <div className="relative mt-16 overflow-hidden pointer-events-none">
      <div>
          <Image
            src="/all-our-ai-expert.png"
            alt="AI Expert"
            width={500}
            height={350}
            className="h-auto object-contain mb-16"
          />
        </div>

      <div className="w-full overflow-hidden relative">
        <div className="flex gap-12 animate-slide whitespace-nowrap">
          {[...experts, ...experts].map((src, index) => (
            <div
              key={index}
              className="min-w-[300px] h-[400px] relative flex-shrink-0 rounded-2xl overflow-hidden"
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
    </div>
  );
}
