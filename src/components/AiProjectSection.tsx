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
    <section className="animated-gradient text-white px-6 md:px-20 py-16 font-sans">
      {/* Top Section with Image and Paragraph */}
      <div className="flex flex-col md:flex-row items-start gap-20 mb-24 mt-24">
        <div className="w-full md:w-1/2">
          <Image
            src="/ai-project-section.png"
            alt="AI Project Section"
            width={600}
            height={550}
            className="h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-start md:mt-0">
          <p className="text-white text-lg md:text-base font normal">
            The adoption of artificial intelligence is not limited to the simple implementation of algorithms. It requires a structured, iterative and{" "}
            <span className="underline text-white">data-driven approach</span>, guaranteeing both performance and alignment of the project with your business challenges. Our AI agency&apos;s approach is based on a pragmatic methodology, enabling us to secure every stage of your company&apos;s transformation during the project.
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="mt-12 space-y-8 max-w-7xl mx-auto">
        {steps.map((item, index) => (
          <div key={item.number} className={`flex flex-col md:flex-row md:items-start gap-8 ${index !== 0 ? 'border-t border-white/60' : ''} pt-8 md:pl-20`}>
            {/* Number image and title */}
            <div className="flex flex-col items-start md:w-1/4 md:-ml-20">
              <Image
                src={item.image}
                alt={`Step ${item.number}`}
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-base md:text-lg font-medium text-white">{item.title}</h3>
            </div>

            {/* Description */}
            <div className="md:w-11/12 md:pl-48">
              <p 
                className="text-base md:text-lg leading-tight tracking-tight text-white font-normal"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
