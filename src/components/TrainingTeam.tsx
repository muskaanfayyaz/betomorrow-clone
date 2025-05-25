import Image from 'next/image';

const teamMembers = [
  {
    name: 'Laurent Alvaro',
    role: 'CTO',
    description: `A passionate engineer, musician and procedural artist, Laurent has been leading BeTomorrow's technical direction and R&D activities for 2 decades. He shares his creativity through training workshops in mathematics, artificial intelligence and data.`,
    image: '/people/Alvaro_Laurent_comext_site_jaune-750.jpg',
  },
  {
    name: 'Paul Breton',
    role: 'AI and Data Tech Lead',
    description: `Paul is BeTomorrow's AI and data solutions architect. Committed to research and technology watch activities, Paul explores AI to deliver the most innovative and powerful solutions to our customers.`,
    image: '/people/Breton_Paul_comext_site_bleu-02-750.jpg',
  },
  {
    name: 'Tom Rethaller',
    role: 'R&D Engineer – Generative AI Expert',
    description: `With a brilliant background in the world of video games, Tom stands out for creating unique and innovative interactive experiences. Two years ago, he naturally turned to generative AI for ever richer and more original projects conducted within our agency.`,
    image: '/people/Rethaller_Tom_comext_site_jaune-750.jpg',
  },
];

export default function TrainingTeam() {
  return (
    <section className="py-8 text-[#0b0d17] w-full">
      <div className="max-w-6xl mx-auto px-2 lg:px-8">
        <h1 className="text-[1.7rem] small:text-[2.1rem] pr-3 lg:pr-1 3xl:pr-36 md:text-[3rem] lg:text-[3.5rem] xl:text-[3.3rem] 3xl:text-[4rem] mb-6 leading-none text-black whitespace-normal">
          <span style={{ fontFamily: 'Parabole' }}>Y</span>OUR
          <div className="flex items-center flex-row">
            <span className="w-8 h-0.5 bg-black inline-block mx-3 align-middle"></span>
            <span className="italic xl:whitespace-nowrap">TRAINING TEAM</span>
          </div>
        </h1>
        <p className="text-black mb-12 max-w-xl text-xl sm:text-2xl font-light">
          Our experts who will help you make a real difference in your market.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row xl:flex-col items-center text-center xl:text-left gap-6"
            >
              {/* Image - 50% width */}
              <div className="w-full md:w-1/2 lg:w-[40%] xl:w-full">
                <div className="mb-4 aspect-square max-w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={500}
                    className="rounded-3xl w-full h-full md:h-[22rem] lg:h-[24rem] object-cover"
                  />
                </div>
              </div>

              {/* Text - 50% width */}
              <div className="w-full md:w-1/2 lg:w-[60%]">
                <h3 className="text-xl md:text-2xl font-semibold">{member.name}</h3>
                <p
                  style={{ fontFamily: 'PPNeueMontreal', fontWeight: 300 }}
                  className="text-base md:text-lg text-black mb-2 font-medium"
                >
                  {member.role}
                </p>
                <p
                  style={{ fontFamily: 'PPNeueMontreal', fontWeight: 400 }}
                  className="text-base md:text-[1.2rem] xl:px-0 text-black font-normal leading-relaxed mt-4"
                >
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
