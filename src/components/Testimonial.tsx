import Image from "next/image";
import ResourcesSection from "./ResourceCardHover";

const Testimonial = () => {
  return (
    <section className="bg-gradient-to-br from-blue-200 to-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image
            src="/people/Aure_lien_Braud_-_TBM_-_Keolis_-_Bordeaux-3840.jpeg" 
            alt="Aurélien Braud"
            width={300}
            height={300}
            className="rounded-[40px] object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-[#0e101c]">
          <div className="max-w-6xl mx-auto px-6">
            <div>
              <Image
                src="/founder.png"
                alt="Aurélien Braud"
                width={450}
                height={350}
                className="h-auto object-contain pb-6"
              />
            </div>
            <p className="text-sm md:text-base font-normal mt-2">
              Marketing Director, Keolis Bordeaux Métropole
            </p>
            <p className="italic text-sm md:text-base font-normal mt-4 leading-relaxed text-black">
              We were impressed by BeTomorrow&apos;s approach and their ability to
              mobilize all the necessary mobile expertise gathered under one roof.
              We found in their teams a level of rigor and skills that matched our
              ambitions and the complexity of this project.
            </p>
          </div>
        </div>
      </div>
      <ResourcesSection/>
    </section>
  );
};

export default Testimonial;
