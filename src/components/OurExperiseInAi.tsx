import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

// Importing the Poppins font (adjust weights/subsets as needed)
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

const expertiseList = [
  {
    title: 'Large Language Model (LLM)',
    content: `Large Language Models (LLMs) are capable of analyzing and interpreting virtually
    **unlimited amounts** of textual data, while solving problems in an automated way.
    Our AI agency has seasoned expertise in developing this technology and delivering
    tailor-made results to companies in their projects.`
  },
  {
    title: 'Large Multimodal Models (LMM)',
    content: `Multi-modal models (LMMs) are technologies that offer an innovative approach
    enabling companies to analyze images, photos, videos and even **handwritten documents** in real time.
    Thanks to the expertise of our AI agency, we are able to harness the power of LMMs to
    **transform complex data into concrete actions**, tailored to the specific projects and needs of businesses.`
  },
  {
    title: 'Retrieval Augmented Generation (RAG)',
    content: `Retrieval Augmented Generation (RAG) combines information retrieval and content generation,
    exploiting external data without limiting itself to its training. Our AI agency has over 10 RAG projects
    in production, and was responsible for the development of **RAGtime**, an innovative digital tool for assessing and monitoring performance.`
  },
  {
    title: 'Natural Language Processing (NLP)',
    content: `NLP is one of the artificial intelligence technologies that uses machine learning to enable corporate IT systems 
    to understand and interact with human language. Our teams leverage this advanced technology to develop applications aimed at 
    **automating** operations, improving productivity and simplifying the business processes of the companies we work with.`
  },
  {
    title: 'Machine Learning',
    content: `Machine learning is being deployed on a massive scale. It is revolutionizing the optimization and automation
    of systems in many sectors. Our AI agency develops **tailor-made** models, such as predictive algorithms, image analysis,
    document recognition and sentiment analysis tools, to precisely meet the requirements of every sector.`
  },
  {
    title: 'Data Analysis and utilization',
    content: `Data analysis and exploitation are at the heart of digital transformation strategies, and take on a new dimension
    with artificial intelligence. Our agency's expertise in artificial intelligence enables us to design advanced data processing
    solutions, such as trend detection, predictive analysis, automated segmentation or the extraction of specific information from
    large **masses of data**.`
  },
];

const ExpertiseSection = () => {
  return (
    <section className={`${poppins.className} px-4 py-12 pb-24`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-16 mb-8">
          {/* Image */}
          <div className="pt-[6px]">
            <Image
              src="/our-expertise-in-ai.png"
              alt="AI Expertise Heading"
              width={1000}
              height={750}
              className="rounded-lg"
            />
          </div>
          {/* Text */}
          <div className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed">
            <p>
              With over 20 years&apos; experience, BeTomorrow has developed recognized digital know-how in the development of digital solutions.
            </p>
            <p className="mt-4">
              Our engineers, with an average of 10 years&apos; experience, excel in the design, deployment and maintenance of tailor-made artificial intelligence solutions.
            </p>
          </div>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseList.map((item, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#5f5fa7] via-[#283181] to-[#0F137D] text-gray-100 p-6 rounded-xl shadow-2xl border border-gray-400/50 transition-colors duration-300 w-full hover:border-white h-[360px] flex flex-col"
            >
              <h3 className="text-2xl font-light mb-4 text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] to-[#d1d5db] line-clamp-2">
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed flex-grow line-clamp-[10] font-light"
                dangerouslySetInnerHTML={{
                  __html: item.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
