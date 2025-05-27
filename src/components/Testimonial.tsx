import Image from "next/image";
import ResourcesSection from "./ResourceCardHover";

const Testimonial = () => {
  return (
    <section className="bg-gradient-to-br from-blue-100 to-white py-20 px-4 md:px-5 lg:px-20 xl:px-28 2xl:px-40">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center gap-12 xl:gap-36">
        {/* Image Section */}
        <div className="w-full max-w-[12.6rem] small:max-w-[18rem] md:max-w-[21rem] lg:max-w-xs xl:max-w-sm flex-shrink-0">
          <Image
            src="/people/Aure_lien_Braud_-_TBM_-_Keolis_-_Bordeaux-3840.jpeg"
            alt="Aurélien Braud"
            width={300}
            height={400}
            className="w-full h-[310px] small:h-[325px] md:h-auto rounded-[1.9rem] object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full flex-1 text-[#0e101c]">
          <div className="w-full">
          <h1 className="text-[2rem] small:text-[2.2rem] pr-4 small:pr-12 lg:pr-0 3xl:pr-36 md:text-[2.8rem] lg:text-[2.9rem] xl:text-[3rem] 3xl:text-[3.5rem] mb-6 leading-none text-black whitespace-normal">
  <span style={{ fontFamily: 'Parabole' }}>A</span>URÉLIEN{' '}
  <span style={{ fontFamily: 'Parabole' }}>B</span>RAUD
</h1>
            <p 
            style={{ fontFamily: 'PPNeueMontreal', fontWeight: 400 }}
            className="text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] 3xl:text-[1.4rem] font-normal mt-2">
              Marketing Director, Keolis Bordeaux Métropole
            </p>
            <p 
            style={{ fontFamily: 'PPNeueMontreal', fontWeight: 400 }}
            className="italic text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.2rem] 3xl:text-[1.3rem] font-normal mt-4 leading-relaxed whitespace-normal text-black">
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
