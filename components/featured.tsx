import Link from "next/link";
import meta from "../lib/_meta";
import { IconChevronRight } from "@tabler/icons";
import Badge from "./badge";

export default function Featured() {
  const f = meta[0];

  return (
    <>
      <div className="group container my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <Link href={`/posts/${f.slug}`}>
            <img
              src={f.image.url}
              alt={f.image.alt}
              className="aspect-[4/3] w-full object-cover"
            />
          </Link>
          <div className="flex flex-col justify-center">
            <div className="inline-flex space-x-4">
              {f.tags.map((t) => (
                <Link href={`/tags/${t}`}>
                  <Badge>{t}</Badge>
                </Link>
              ))}
            </div>
            <Link href={`/posts/${f.slug}`} className="link">
              <h1 className="text-4xl font-bold">{f.title}</h1>
            </Link>
            <p>
              Words by: {f.author} | {f.pubDate}
            </p>
            <p className="py-8 text-xl">{f.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
