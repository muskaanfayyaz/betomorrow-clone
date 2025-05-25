'use client';

import React from 'react';
import { Poppins } from 'next/font/google';

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
    tailor-made results to companies in their projects.`,
  },
  {
    title: 'Large Multimodal Models (LMM)',
    content: `Multi-modal models (LMMs) are technologies that offer an innovative approach
    enabling companies to analyze images, photos, videos and even **handwritten documents** in real time.
    Thanks to the expertise of our AI agency, we are able to harness the power of LMMs to
    **transform complex data into concrete actions**, tailored to the specific projects and needs of businesses.`,
  },
  {
    title: 'Retrieval Augmented Generation (RAG)',
    content: `Retrieval Augmented Generation (RAG) combines information retrieval and content generation,
    exploiting external data without limiting itself to its training. Our AI agency has over 10 RAG projects
    in production, and was responsible for the development of **RAGtime**, an innovative digital tool for assessing and monitoring performance.`,
  },
  {
    title: 'Natural Language Processing (NLP)',
    content: `NLP is one of the artificial intelligence technologies that uses machine learning to enable corporate IT systems 
    to understand and interact with human language. Our teams leverage this advanced technology to develop applications aimed at 
    **automating** operations, improving productivity and simplifying the business processes of the companies we work with.`,
  },
  {
    title: 'Machine Learning',
    content: `Machine learning is being deployed on a massive scale. It is revolutionizing the optimization and automation
    of systems in many sectors. Our AI agency develops **tailor-made** models, such as predictive algorithms, image analysis,
    document recognition and sentiment analysis tools, to precisely meet the requirements of every sector.`,
  },
  {
    title: 'Data Analysis and utilization',
    content: `Data analysis and exploitation are at the heart of digital transformation strategies, and take on a new dimension
    with artificial intelligence. Our agency's expertise in artificial intelligence enables us to design advanced data processing
    solutions, such as trend detection, predictive analysis, automated segmentation or the extraction of specific information from
    large **masses of data**.`,
  },
];

const ExpertiseSection = () => {
  return (
    <section className={`${poppins.className} px-1 sm:px-2 lg:px-5 xl:px-12 pt-24 md:pt-48 pb-24 3xl:px-[35rem]`}>
      <div className="max-w-[1400px] 2xl:max-w-[1920px] 3xl:max-w-[2560px] 4xl:max-w-[3840px] mx-auto">
        <div className='pb-10'>
          {/* Top Section: Image + Text */}
        <div className="flex flex-col md:flex-row items-start gap-14 md:gap-[0.5px] lg:gap-0 xl:gap-20 mb-12">
        <h1 className="text-[2rem] lg:w-2/5 xl:w-2/4 small:text-[2.2rem] pr-4 small:pr-12 lg:pr-1 xl:pr-8 3xl:pr-36 sm:text-7xl md:text-[4rem] lg:text-6xl xl:text-6xl 3xl:text-[4rem] mb-6 leading-none text-white whitespace-normal">
  OU<span style={{ fontFamily: 'Parabole' }}>R</span>{' '}
  <span style={{ fontFamily: 'Parabole' }}>E</span>
  <span style={{ fontFamily: 'Parabole' }}>X</span>PE
  <span style={{ fontFamily: 'Parabole' }}>R</span>TISES{' '}
  <span className="w-8 h-1 bg-white inline-block mx-3 align-middle"></span>
  <span className="italic">IN AI</span>
</h1>

          {/* Text */}
          <div className="w-full lg:w-3/5 xl:2/4 xl:pl-10 text-gray-300 text-base md:text-lg 3xl:text-[1.3rem] 3xl:pt-8 leading-relaxed">
            <p>
              With over 20 years&apos; experience, BeTomorrow has developed recognized digital know-how in the development of digital solutions.Our engineers, with an average of 10 years&apos; experience, excel in the design, deployment and maintenance of tailor-made artificial intelligence solutions.
            </p>
          </div>
        </div>

        </div>
        {/* Expertise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {expertiseList.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#5f5fa7] via-[#283181] to-[#0F137D] text-gray-100 p-6 rounded-xl shadow-xl border border-gray-400/40 hover:border-white transition-colors duration-300 flex flex-col min-h-[340px]"
            >
              <h3 
              style={{ fontFamily: 'PPNeueMontreal', fontWeight: 500 }}
              className="text-xl sm:text-2xl font-light mb-3 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-300 line-clamp-2">
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed flex-grow font-light line-clamp-[12]"
                dangerouslySetInnerHTML={{
                  __html: item.content.trim().replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
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
