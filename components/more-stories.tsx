import Link from "next/link";
import { IconChevronRight } from "@tabler/icons";
import meta from "../lib/_meta";

export default function MoreStories() {
  return (
    <>
      <div className="flex items-center justify-between py-8">
        <h3 className="text-2xl font-bold">More Stories</h3>
        <div className="inline-flex">
          <p>View All</p>
          <IconChevronRight />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {meta.map((s, index) => (
          <Link href={`/posts/${s.slug}`} key={index}>
            <div className="container">
              <img
                src={s.image.url}
                alt={s.image.alt}
                className="aspect-[4/3] w-full object-cover pb-4"
              />
              <h3 className="text-2xl font-bold">{s.title}</h3>
              <p>{s.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
