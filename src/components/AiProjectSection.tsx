import Image from "next/image";

interface Step {
  number: string;
  image: string;
  title: string;
  description: string;
}

export default function AiProjectSection() {
  const steps: Step[] = [
    {
      number: "01",
      image: "/number-01.png",
      title: "Exploration and skills enhancement",
      description:
        'For a tailor-made implementation of your project, we organize a <strong>phase of ideation and acculturation</strong> to <span class="underline text-white">artificial intelligence</span> within your company. This involves setting up awareness-raising workshops and training courses to align your stakeholders with the relevant issues and use cases. Our team carries out an <strong>AI maturity audit</strong> of your structure and identifies high-impact strategic opportunities for your company.',
    },
    {
      number: "02",
      image: "/number-02.png",
      title: "Framing and structuring AI initiatives",
      description:
        'We draw up a <strong>roadmap</strong> aligned with your business and <span class="underline text-white">technological</span> objectives. We prioritize the relevant <strong>use cases for your company</strong>, while validating the technical and business prerequisites necessary for their implementation. This stage includes the development of <strong>MVPs and prototypes</strong>, enabling you to rapidly test the feasibility of solutions and refine assumptions before larger-scale deployment.',
    },
    {
      number: "03",
      image: "/number-03.png",
      title: "Governance and operational management",
      description:
        'We set up an AI committee responsible for steering initiatives and ensuring the consistency of technological choices. This governance is based on performance monitoring via adapted KPIs to measure and adjust the effectiveness of the solutions and services implemented. Our continuous optimization approach includes re-evaluating models in production, improving data pipelines and managing versioning.',
    },
    {
      number: "04",
      image: "/number-04.png",
      title: "Industrialization and scalability",
      description:
        'We industrialize models in production using a <strong>MLOps</strong> approach. This includes automating monitoring, retraining and adapting models to changes in data. Integration with existing systems is facilitated by APIs and high-performance data pipelines. We draw up an evolution strategy to anticipate your future needs and ensure the <strong>scalability</strong> of your organization\'s <span class="underline text-white">artificial intelligence applications</span>.',
    },
  ];

  return (
    <section className="animated-gradient text-white px-4 sm:px-6 lg:px-12 xl:px-24 3xl:px-40 py-[4.3rem] font-sans">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start gap-12 md:gap-2 lg:gap-8 xl:gap-10 3xl:gap-0 mb-16 lg:mb-24 mt-16 lg:mt-24 3xl:mx-[25rem]">
        {/* Heading */}
        <h1 className="text-[2rem] md:w-2/5 lg:w-2/5 xl:w-[55%] 3xl:w-[53%] small:text-[2.2rem] pr-4 small:pr-12 md:pr-0 lg:pr-0 xl:pr-8 3xl:pr-36 md:text-[4.2rem] lg:text-[4.3rem] xl:text-6xl 3xl:text-[4rem] mb-6 leading-none text-white whitespace-normal">
          <span style={{ fontFamily: 'Parabole' }}>D</span>O{' '}YO
          <span style={{ fontFamily: 'Parabole' }}>U</span>{' '}H
          <span style={{ fontFamily: 'Parabole' }}>A</span>V
          <span style={{ fontFamily: 'Parabole' }}>E</span>{' '}AN
          <span className="w-8 h-1 bg-white inline-block mx-3 align-middle"></span>
          <span className="italic">AI PROJECT ?</span>
        </h1>

        {/* Text */}
        <div className="w-full md:w-3/5 lg:w-[73%] 3xl:w-[45%] flex items-start">
          <p
            style={{ fontFamily: 'PPNeueMontreal', fontWeight: 400 }}
            className="text-base small:text-[1.1rem] md:text-[1.4rem] xl:text-xl font-normal leading-relaxed"
          >
            The adoption of artificial intelligence is not limited to the simple implementation of algorithms. It requires a structured, iterative and{" "}
            <span className="underline text-white">data-driven approach</span>, guaranteeing both performance and alignment of the project with your business challenges. Our AI agency&apos;s approach is based on a pragmatic methodology, enabling us to secure every stage of your company&apos;s transformation during the project.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-12 md:pt-12 max-w-screen-xl mx-auto pb-[4.7rem]">
        {steps.map((item, index) => (
          <div
            key={item.number}
            className={`flex flex-col md:flex-row gap-8 md:gap-3 lg:gap-16 ${
              index !== 0 ? "border-t border-white/30 pt-8" : ""
            }`}
          >
            {/* Left Column */}
            <div className="flex flex-col md:w-[35%] lg:w-1/4 xl:w-[40%]">
              <Image
                src={item.image}
                alt={`Step ${item.number}`}
                width={70}
                height={70}
                className="mb-4"
              />
              <h3
                style={{ fontFamily: 'PPNeueMontreal', fontWeight: 400 }}
                className="flex whitespace-normal text-[1.2rem] px-2 small:text-[1.3rem] md:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.6rem] font-semibold"
              >
                {item.title}
              </h3>
            </div>

            {/* Right Column */}
            <div className="md:w-[65%] lg:w-3/4 xl:w-[60%]">
              <p
                className="text-[1.1rem] px-2 small:text-[1.2rem] md:text-[1.3rem] lg:text-[1.3rem] xl:text-[1.4rem] small:pr-6 leading-snug tracking-tight"
                style={{ fontFamily: 'PPNeueMontreal', fontWeight: 300 }}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
