// components/UseCasesSection.tsx
import Image from "next/image";
import { Sparkles } from "lucide-react";

const useCases = [
  {
    title_Img: "/1st-usecase.png",
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
    title_Img: "/2nd-usecase.png",
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
    title_Img: "/3rd-usecase.png",
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
    title_Img: "/4th-usecase.png",
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
    <section className="py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-blue-100 to-white relative">
      <div className="max-w-7xl mx-auto grid gap-16 grid-cols-1 md:grid-cols-2">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className={`flex flex-col gap-6 ${
              index % 2 === 0
                ? "md:justify-self-start"
                : "md:justify-self-end md:mt-48"
            }`}
          >
            {/* Mockup Image */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/9] rounded-3xl overflow-hidden shadow-lg">
  <Image
    src={useCase.image}
    alt={useCase.title_Img}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 45vw,
           40vw"
  />
</div>

            {/* Title Image */}
            <div className="relative w-full aspect-[4/1] sm:aspect-[3/1] lg:aspect-[5/1] max-w-full">
              <Image
                src={useCase.title_Img}
                alt={useCase.title_Img}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw,
                       (max-width: 768px) 90vw,
                       (max-width: 1024px) 45vw,
                       40vw"
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