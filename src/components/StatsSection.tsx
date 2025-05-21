import Image from "next/image";

const stats = [
  {
    id: 1,
    image: "/project-400.png",
    alt: "400+ projects",
    text: (
      <>
        projects since our<br />creation in 2002
      </>
    ),
  },
  {
    id: 2,
    image: "/client-97.png",
    alt: "97% clients",
    text: (
      <>
        of our clients are<br />continuing with us
      </>
    ),
  },
  {
    id: 3,
    image: "/year-10.png",
    alt: "10+ years AI",
    text: (
      <>
        years of research<br />and development<br />in AI
      </>
    ),
  },
];

export default function StatsSection() {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-28 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center">
            <Image
              src={stat.image}
              alt={stat.alt}
              width={200}
              height={80}
              className="mx-auto"
            />
            <p className="mt-4 md:text-2xl text-[#0a0a0a] text-4xl text-center w-[200px]">{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
