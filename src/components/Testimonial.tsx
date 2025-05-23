import Image from "next/image";
import ResourcesSection from "./ResourceCardHover";

const Testimonial = () => {
  return (
    <section className="bg-gradient-to-br from-blue-200 to-white py-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-40">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Image Section */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm flex-shrink-0">
          <Image
            src="/people/Aure_lien_Braud_-_TBM_-_Keolis_-_Bordeaux-3840.jpeg"
            alt="Aurélien Braud"
            width={300}
            height={300}
            className="w-full h-auto rounded-[40px] object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full flex-1 text-[#0e101c]">
          <div className="w-full">
            <Image
              src="/founder.png"
              alt="Aurélien Braud"
              width={450}
              height={350}
              className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain pb-4"
            />
            <p className="text-xs sm:text-sm md:text-base font-normal mt-2">
              Marketing Director, Keolis Bordeaux Métropole
            </p>
            <p className="italic text-sm sm:text-base md:text-lg font-normal mt-4 leading-relaxed text-black">
              We were impressed by BeTomorrow&apos;s approach and their ability to
              mobilize all the necessary mobile expertise gathered under one roof.
              We found in their teams a level of rigor and skills that matched our
              ambitions and the complexity of this project.
            </p>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="mt-16">
        <ResourcesSection />
      </div>
    </section>
  );
};

export default Testimonial;
