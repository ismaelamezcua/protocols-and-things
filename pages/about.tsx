import Link from "next/link";
import SectionContent from "../components/section-content";
import SectionTitle from "../components/section-title";

export default function About() {
  return (
    <>
      <SectionTitle title="About" pubDate="" author="Ismael Amezcua" />

      <SectionContent>
        <p className="pb-8">
          This is a blog about...
        </p>
        <p>
          My name is Ismael Amezcua. You can find more information about me in
          my personal website. If you identified something wrong with this
          website or its content, don't hesitate to get in{" "}
          <Link
            href="/contact"
            className="font-semibold underline hover:text-neutral-700"
          >
            touch with me
          </Link>
          .
        </p>
      </SectionContent>
    </>
  );
}
