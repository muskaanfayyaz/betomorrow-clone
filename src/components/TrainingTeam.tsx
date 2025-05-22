import Image from 'next/image';

const teamMembers = [
  {
    name: 'Laurent Alvaro',
    role: 'CTO',
    description: `A passionate engineer, musician and procedural artist, Laurent has been leading BeTomorrow's technical direction and R&D activities for 2 decades. He shares his creativity through training workshops in mathematics, artificial intelligence and data.`,
    image: '/people/Alvaro_Laurent_comext_site_jaune-750.jpg', // You should place the cropped image in /public/images
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
    <section className="py-16 text-[#0b0d17]">
      <div className="max-w-6xl mx-auto px-6">
        <div>
          <Image
            src="/your-training-team.png"
            alt="Your Training Team"
            width={600}
            height={450}
            className="h-auto object-contain"
          />
        </div>
        <p className="text-black mb-12 max-w-xl mt-8 text-xl font-light text-center">
          Our experts who will help you make a real difference in your market.
        </p>
        <div className="grid grid-cols-3 gap-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              <div className="mb-4 aspect-square w-[20rem]">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={320}
                  height={320}
                  className="rounded-3xl w-full h-full object-cover"
                />
              </div>
              <div className="text-left w-full">
                <h3 className="font-normal text-2xl">{member.name}</h3>
                <p className="text-lg text-black mb-2 font-normal">{member.role}</p>
                <p className="text-lg text-black font-normal leading-7 mt-4">
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
