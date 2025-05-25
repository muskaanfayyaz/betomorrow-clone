import Image from "next/image";

const stats = [
  {
    id: 1,
    image: "/project-400.png",
    alt: "400+ projects",
    text: "projects since our creation in 2002",
  },
  {
    id: 2,
    image: "/client-97.png",
    alt: "97% clients",
    text: "of our clients are continuing with us",
  },
  {
    id: 3,
    image: "/year-10.png",
    alt: "10+ years AI",
    text: "years of research and development in AI",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full py-16 px-4 xl:px-4 text-left">
      <div className="max-w-6xl xl:max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-24">
        {/* First two items */}
        {stats.slice(0, 2).map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-start md:items-center space-y-4 px-2"
          >
            <Image
              src={stat.image}
              alt={stat.alt}
              width={200}
              height={80}
              className="self-start md:self-center"
            />
            <p className="md:text-2xl text-[#0a0a0a] text-xl w-[200px] text-left md:text-center">
              {stat.text}
            </p>
          </div>
        ))}

        {/* Third item: centered on md, left on lg */}
        <div
          className="
            flex flex-col items-start space-y-4 px-2
            md:col-span-2 md:items-center md:justify-center
            lg:col-span-1 lg:items-start lg:mt-0
            mt-8
          "
        >
          <Image
            src={stats[2].image}
            alt={stats[2].alt}
            width={200}
            height={80}
            className="self-start md:self-center lg:self-start"
          />
          <p className="md:text-2xl text-[#0a0a0a] text-xl w-[200px] text-left md:text-center lg:text-left">
            {stats[2].text}
          </p>
        </div>
      </div>
    </section>
  );
}
