// components/UseCasesSection.tsx
import Image from "next/image";
import { Sparkles } from "lucide-react";

const useCases = [
  {
    title_Img:"/1st-usecase.png",
    description:"Befinormoor has developed a chatbot based on <strong>RAG</strong><br/> technology, which combines the power of <strong>LLM</strong><br/> generation models with advanced information retrieval,<br/> guaranteeing optimized results.",
    image: "/mockup/Mockup_macbook_RAG_02-640.png",
    buttons: [
      { text: "R&D", link: "#" },
      { text: "LLM", link: "#" },
      { text: "AI", link: "#" }
    ],
  },
  {
    title_Img:"/2nd-usecase.png",
    description:
      "Discover an innovative solution combining algorithmic<br/> <strong>clustering</strong>, <strong>embeddings</strong> and <strong>generative AI</strong> to structure<br/> user feedback, visualize it and derive actionable insights.",
    image: "/mockup/014_-_Toiletfinder-3840.png",
    buttons: [
      { text: "R&D", link: "#" },
      { text: "Data", link: "#" },
      { text: "AI", link: "#" }
    ],
  },
  {
    title_Img:"/3rd-usecase.png",
    description:
      "Our AI experts designed an interactive chatbot for<br/> <strong>advanced and intuitive</strong> business data exploration for<br/> one of our customers.",
    image: "/mockup/R-mockups__iPhone_15_Pro-3840.jpg",
    buttons: [
      { text: "LLM", link: "#" },
      { text: "Data", link: "#" },
      { text: "R&D", link: "#" },
      { text: "AI", link: "#" }
    ],
  },
  {
    title_Img:"/4th-usecase.png",
    description: "Skillagora is the first solution designed to encourage the exchange of skills and knowledge between co-workers, both face-to-face and remotely.",
    image: "/mockup/Mockup-Skillagora-01-3840.png",
    buttons: [
      { text: "Education", link: "#" },
      { text: "Social Network", link: "#" },
      { text: "LLM", link: "#" },
      { text: "AI", link: "#" }
    ],
  },
];

export default function UseCasesSection() {
  return (
    <section className="py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className={`flex flex-col gap-4 max-w-md ${
              index % 2 === 0 
                ? 'md:justify-self-start' 
                : 'md:justify-self-end md:mt-96'
            }`}
          >
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={useCase.image}
                alt={useCase.title_Img}
                width={1000}
                height={1700}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mb-2 mt-4">
          <Image
            src={useCase.title_Img}
            alt={useCase.title_Img}
            width={600}
            height={550}
            className="h-auto"
          />
        </div>
            <p className="text-lg text-black max-w-3xl" dangerouslySetInnerHTML={{ __html: useCase.description }}></p>
            <div className="flex justify-between gap-2 mt-4">
              {useCase.buttons.map((button, btnIdx) => (
                <a
                  key={btnIdx}
                  href={button.link}
                  className={`px-4 py-2 rounded-full font-semibold transition hover:opacity-90 flex items-center justify-center gap-2 whitespace-nowrap flex-1 ${
                    btnIdx === useCase.buttons.length - 1 
                      ? 'text-white' 
                      : 'border-2 border-gray-300 text-black'
                  }`}
                  style={btnIdx === useCase.buttons.length - 1 ? {
                    background: 'linear-gradient(90deg, #27408B 0%, #397FFF 40%, #FF802B 100%)'
                  } : {}}
                >
                  {btnIdx === useCase.buttons.length - 1 && <Sparkles className="w-5 h-5" fill="#FFFFFF" />}
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
