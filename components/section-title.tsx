import { ReactNode } from "react";

interface SectionTitleProps {
  title: ReactNode;
  pubDate: ReactNode;
  author: ReactNode;
}

export default function SectionTitle({
  title,
  pubDate,
  author,
}: SectionTitleProps) {
  return (
    <>
      <div className="container mx-auto mb-16 max-w-4xl">
        <h1 className="mt-8 text-6xl font-bold text-center">{title}</h1>
        <p className="italic">{pubDate}</p>
        <p>{author}</p>
      </div>
    </>
  );
}
