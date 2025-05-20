// components/FloatingIcons.tsx
import Image from "next/image";

const logos = [
  "/logos/Banque-des-territoires-blanc-pur-cut-noir-256.png",
  "/logos/belin-logo-noir-256.png",
  "/logos/laposte-logo-noir-256.png",
  "/logos/logo-biogen-noir-256.png",
  "/logos/Logo-JO-256.png",
  "/logos/Logo-LCI-noir-256.png",
  "/logos/vinci-logo-noir-256.png",
];

export default function FloatingIcons() {
  return (
    <div className="w-full overflow-hidden mt-12 pointer-events-none">
      <div className="flex animate-scroll gap-8 whitespace-nowrap px-4">
        <div className="whitespace-nowrap animate-scroll flex gap-10 px-4">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="min-w-[80px] h-[80px] relative">
              <Image
                src={logo}
                alt={`logo-${index}`}
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
