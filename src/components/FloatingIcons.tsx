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
  "/logos/France_travail_-_Black-384.png",
  "/logos/I-Percut-Noir-384.png",
  "/logos/KB2M_black-384.png",
  "/logos/orange-2x-384.png",
  "/logos/Suez-_dark-384.png",
  "/logos/Transamo_-_dark-384.png"
];

export default function FloatingIcons() {
  return (
    <div className="w-full overflow-hidden mt-24 pointer-events-none">
      <div className="flex animate-slide gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 whitespace-nowrap">
        <div className="whitespace-nowrap animate-scroll flex gap-6 sm:gap-8 md:gap-10">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="relative min-w-[60px] h-[60px] sm:min-w-[70px] sm:h-[70px] md:min-w-[80px] md:h-[80px]"
            >
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
