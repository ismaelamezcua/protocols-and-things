import { ReactNode } from "react";

interface SectionContentProps {
  children: ReactNode;
}

export default function SectionContent({ children }: SectionContentProps) {
  return (
    <>
      <div className="container mx-auto max-w-4xl text-lg">{children}</div>
    </>
  );
}
