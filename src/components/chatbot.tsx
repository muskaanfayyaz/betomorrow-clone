import Image from "next/image";
import { Sparkles } from "lucide-react";

const useCases = [
  {
    title:
      "<span style='font-family: Parabole;'>A</span>n intelligen<span style='font-family: Parabole;'>t</span> cha<span style='font-family: Parabole;'>tb</span>ot <span style='font-family: Parabole;'>p</span>owered <span style='font-family: Parabole;'>b</span>y <span style='font-family: Parabole;'>y</span>o<span style='font-family: Parabole;'>u</span>r data",
    description:
      "Befinormoor has developed a chatbot based on <strong>RAG</strong><br/> technology, which combines the power of <strong>LLM</strong><br/> generation models with advanced information retrieval,<br/> guaranteeing optimized results.",
    image: "/mockup/Mockup_macbook_RAG_02-640.png",
    buttons: [
      { text: "R&D", link: "#" },
      { text: "LLM", link: "#" },
      { text: "AI", link: "#" },
    ],
  },
  {
    title: "<span style='font-family: Parabole;'>T</span>oilet Fin<span style='font-family: Parabole;'>d</span>er: user fee<span style='font-family: Parabole;'>db</span>ac<span style='font-family: Parabole;'>k</span> anal<span style='font-family: Parabole;'>y</span>sis",
    description:
      "Discover an innovative solution combining algorithmic<br/> <strong>clustering</strong>, <strong>embeddings</strong> and <strong>generative AI</strong> to structure<br/> user feedback, visualize it and derive actionable insights.",
    image: "/mockup/014_-_Toiletfinder-3840.png",
    buttons: [
      { text: "R&D", link: "#" },
      { text: "Data", link: "#" },
      { text: "AI", link: "#" },
    ],
  },
  {
    title: "Crea<span style='font-family: Parabole;'>t</span>ing a uni<span style='font-family: Parabole;'>v</span>ersal cha<span style='font-family: Parabole;'>t</span>bot <span style='font-family: Parabole;'>t</span>o ha<span style='font-family: Parabole;'>r</span>ness <span style='font-family: Parabole;'>d</span>a<span style='font-family: Parabole;'>t</span>a e<span style='font-family: Parabole;'>f</span>fec<span style='font-family: Parabole;'>t</span>i<span style='font-family: Parabole;'>v</span>ely",
    description:
      "Our AI experts designed an interactive chatbot for<br/> <strong>advanced and intuitive</strong> business data exploration for<br/> one of our customers.",
    image: "/mockup/R-mockups__iPhone_15_Pro-3840.jpg",
    buttons: [
      { text: "LLM", link: "#" },
      { text: "Data", link: "#" },
      { text: "R&D", link: "#" },
      { text: "AI", link: "#" },
    ],
  },
  {
    title:
      "<span style='font-family: Parabole;'>A</span>I a<span style='font-family: Parabole;'>t</span> the hear<span style='font-family: Parabole;'>t</span> o<span style='font-family: Parabole;'>f</span> <span style='font-family: Parabole;'>k</span>nowle<span style='font-family: Parabole;'>d</span>ge management an<span style='font-family: Parabole;'>d</span> pro<span style='font-family: Parabole;'>f</span>essional <span style='font-family: Parabole;'>t</span>raining",
    description:
      "Skillagora is the first solution designed to encourage the exchange of skills and knowledge between co-workers, both face-to-face and remotely.",
    image: "/mockup/Mockup-Skillagora-01-3840.png",
    buttons: [
      { text: "Education", link: "#" },
      { text: "Social Network", link: "#" },
      { text: "LLM", link: "#" },
      { text: "AI", link: "#" },
    ],
  },
];

export default function UseCasesSection() {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 relative">
      <div className="max-w-7xl mx-auto grid gap-16 grid-cols-1 md:grid-cols-2 xl:gap-60">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className={`flex flex-col gap-4 ${
              index % 2 === 0
                ? "md:justify-self-start"
                : "md:justify-self-end md:mt-48"
            }`}
          >
            {/* Mockup Image */}
            <div className="relative w-full h-[24rem] md:h-[25rem] lg:h-[30rem] xl:h-[36rem] rounded-3xl overflow-hidden shadow-lg">
  <Image
    src={useCase.image}
    alt="Use case image"
    fill
    className="object-cover"
    sizes="(max-width: 425px) 100vw, (max-width: 1024px) 80vw, 40vw"
  />
</div>


            {/* Title */}
            <div className="w-full max-w-full mb-3">
              <h1
                className="text-[1.3rem] md:text-[1.8rem] lg:text-[2rem] font-normal mb-0.5 text-black leading-tight"
                dangerouslySetInnerHTML={{ __html: useCase.title }}
              />
            </div>

            {/* Description */}
            <p
              className="text-base sm:text-lg text-black max-w-full md:max-w-3xl"
              dangerouslySetInnerHTML={{ __html: useCase.description }}
            ></p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2">
              {useCase.buttons.map((button, btnIdx) => (
                <a
                  key={btnIdx}
                  href={button.link}
                  className={`px-4 py-2 rounded-full font-semibold transition hover:opacity-90 flex items-center justify-center gap-2 whitespace-nowrap ${
                    btnIdx === useCase.buttons.length - 1
                      ? "text-white"
                      : "border-2 border-gray-300 text-black"
                  }`}
                  style={
                    btnIdx === useCase.buttons.length - 1
                      ? {
                          background:
                            "linear-gradient(90deg, #27408B 0%, #397FFF 40%, #FF802B 100%)",
                        }
                      : {}
                  }
                >
                  {btnIdx === useCase.buttons.length - 1 && (
                    <Sparkles className="w-5 h-5" fill="#FFFFFF" />
                  )}
                  {button.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
