import { IconChevronRight } from "@tabler/icons";
import Link from "next/link";

export default function TrendingSection() {
  const entries = [
    {
      href: "/first-entry",
      slug: "hiroshi-sneju-sacred-works-at-koyosan",
      tag: "Arts",
      title: "Hiroshi Senju: Sacred works at Koyasan",
      description: `An iconic figure in the Shin-hanga movement, the artist plays on the contrast between light and shadow to enhance his landscapes.`,
      thumb: "/thumb1.jpg",
    },
    {
      href: "/second-entry",
      slug: "hotel-keyforest-hokuto",
      tag: "Food",
      title: "Hotel Keyforest Hokuto, Where Keith Haring Meets the Jomon Era",
      description: `The 'Nakamura Keith Haring Collection' was established by gallery director Kazuo Nakamura as a place for his personal collection.`,
      thumb: "/thumb2.jpg",
    },
  ];

  const renderEntries = entries.map((entry, index) => (
    <div
      className="flex flex-row items-center justify-between border-t border-black py-8"
      key={index}
    >
      <div className="max-w-xl">
        <p className="text-red-400">
          <Link href={`/tags/${entry.tag}`}>{entry.tag}</Link>
        </p>
        <h3 className="text-4xl font-bold">
          <Link href={`/posts/${entry.slug}`}>{entry.title}</Link>
        </h3>
        <p className="text-neutral-800">{entry.description}</p>
      </div>
      <div className="picture">
        <img src={entry.thumb} className="w-full md:max-w-md" alt="Some Alt" />
      </div>
    </div>
  ));

  const gridType = entries.map((e, index) => (
    <div className="container" key={index}>
      <img src={e.thumb} alt={e.title} className="w-full" />
      <h3 className="text-2xl font-bold">{e.title}</h3>
      <p className="text-neutral-800">{e.description}</p>
    </div>
  ));

  return (
    <div className="container mx-auto mt-32 max-w-6xl">
      <div className="container inline-flex justify-between ">
        <h3 className="mb-8 text-2xl font-bold uppercase">Trending</h3>
        <Link href="/posts">
          <div className="inline-flex items-center space-x-4 hover:underline">
            <p className="inline-block">See All</p>
            <IconChevronRight size={16} />
          </div>
        </Link>
      </div>
      {renderEntries}
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        {gridType}
        <div className="container">
          <img src="/thumb1.jpg" alt="First post" className="w-full" />
          <h3 className="text-2xl font-bold">Hope dies last</h3>
          <p className="text-neutral-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu
            felis bibendum ut. Porttitor leo a diam.
          </p>
        </div>
        <div className="container">
          <img src="/thumb2.jpg" alt="First post" className="w-full" />
          <h3 className="pt-8 text-2xl font-bold">Don't close your eyes</h3>
          <p className="text-neutral-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu
            felis bibendum ut. Porttitor leo a diam.
          </p>
        </div>
      </div>
    </div>
  );
}
