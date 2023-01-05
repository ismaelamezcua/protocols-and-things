import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import meta from "../../lib/_meta";

export default function Post() {
  return (
    <>
      {/* <div dangerouslySetInnerHTML={contentHtml} /> */}
    </>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const fullPath = path.join("/posts", `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}

