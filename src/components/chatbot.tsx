// components/UseCasesSection.tsx
import Image from "next/image";

const useCases = [
  {
    title: "An intelligent chatbot powered by your data",
    description:
      "Befinormoor has developed a chatbot based on RAG technology, which combines the power of LLM generation models with advanced information retrieval, guaranteeing optimized results.",
    image: "/images/chatbot-powered.png",
    tags: ["RAG", "LLM", "🧠 AI"],
  },
  {
    title: "Toilet Finder: user feedback analysis",
    description:
      "Discover an innovative solution combining algorithmic clustering, embeddings and generative AI to structure user feedback, visualize it and derive actionable insights.",
    image: "/images/toilet-finder.png",
    tags: ["R&D", "Data", "🧠 AI"],
  },
  {
    title: "Creating a universal chatbot to harness data effectively",
    description:
      "Our AI experts designed an interactive chatbot for advanced and intuitive business data exploration for one of our customers.",
    image: "/images/universal-chatbot.png",
    tags: ["LLM", "Data", "R&D", "🧠 AI"],
  },
  {
    title:
      "AI at the heart of knowledge management and professional training",
    description: "",
    image: "/images/knowledge-training.png",
    tags: [],
  },
];

export default function UseCasesSection() {
  return (
    <section className="py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 max-w-md mx-auto md:mx-0"
          >
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={useCase.image}
                alt={useCase.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {useCase.title}
            </h3>
            <p className="text-sm text-gray-700">{useCase.description}</p>
            <div className="flex flex-wrap gap-2">
              {useCase.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="text-xs px-3 py-1 bg-white border border-gray-300 rounded-full shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
