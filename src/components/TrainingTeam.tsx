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
    <section className="py-16 text-[#0b0d17] w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Image
            src="/your-training-team.png"
            alt="Your Training Team"
            width={600}
            height={450}
            className="h-auto w-full max-w-md object-contain"
            priority
          />
        </div>
        <p className="text-black mb-12 max-w-xl text-xl sm:text-2xl font-light">
          Our experts who will help you make a real difference in your market.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="rounded-3xl w-full h-full object-cover"
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl md:text-2xl font-semibold">{member.name}</h3>
                <p className="text-base md:text-lg text-black mb-2 font-medium">{member.role}</p>
                <p className="text-sm md:text-base text-black font-normal leading-relaxed mt-4">
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
