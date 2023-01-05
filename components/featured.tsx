import Link from "next/link";
import meta from "../lib/_meta";

export default function Featured() {
  const f = meta[0];

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <Link href={`/posts/${f.slug}`}>
            <img
              src={f.image.url}
              alt={f.image.alt}
              className="aspect-[4/3] w-full object-cover"
            />
          </Link>
          <div className="flex flex-col justify-center">
            <p className="text-rose-600">Protocols</p>
            <Link href={`/posts/${f.slug}`}>
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
